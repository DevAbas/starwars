import { useState, useCallback } from 'react'
import { Box } from '@mui/material'

import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import CircularProgress from '@mui/material/CircularProgress'
import Pagination from '@mui/material/Pagination'

import CharacterCard from 'components/CharacterCard'

import { useGetSWCharactersQuery, useLazySearchSWCharactersQuery } from 'services/starwars'
import { getCharacterIdFromUrl } from 'utils/getCharacterIdFromUrl'
import Header from 'components/Header'

const Home = () => {
  const [page, setPage] = useState(1)
  const [searchValue, setSearchValue] = useState<string>('')

  const { data, isLoading } = useGetSWCharactersQuery(page)
  const [trigger, searchResults] = useLazySearchSWCharactersQuery()

  const onChangePagination = (event: React.ChangeEvent<unknown>, page: number) => {
    setPage(page)
  }

  const characterSearchHandler = useCallback(
    (value: string) => {
      setSearchValue(value)
      trigger(value)
    },
    [trigger],
  )

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 300 }}>
        <CircularProgress />
      </Box>
    )
  }

  if (!data?.results || (searchValue !== '' && !searchResults.data?.results)) {
    return <div>No results :(</div>
  }

  return (
    <>
      <Header setSearchValue={characterSearchHandler} />

      <Box sx={{ flexGrow: 1, paddingTop: 20, paddingBottom: 20 }}>
        <Container maxWidth='lg'>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {searchValue === '' &&
              data.results.map((character) => (
                <Grid item xs={2} sm={4} md={4} key={character.name}>
                  <CharacterCard
                    name={character.name}
                    imageURL={`https://starwars-visualguide.com/assets/img/characters/${getCharacterIdFromUrl(
                      character.url,
                    )}.jpg`}
                    id={getCharacterIdFromUrl(character.url)}
                  />
                </Grid>
              ))}
            {searchValue !== '' &&
              searchResults.data?.results.map((character) => (
                <Grid item xs={2} sm={4} md={4} key={character.name}>
                  <CharacterCard
                    name={character.name}
                    imageURL={`https://starwars-visualguide.com/assets/img/characters/${getCharacterIdFromUrl(
                      character.url,
                    )}.jpg`}
                    id={getCharacterIdFromUrl(character.url)}
                  />
                </Grid>
              ))}
          </Grid>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 8 }}>
            {searchValue === '' && (
              <Pagination
                count={9}
                onChange={onChangePagination}
                variant='outlined'
                shape='rounded'
              />
            )}
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default Home
