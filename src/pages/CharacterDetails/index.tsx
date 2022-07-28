import { useParams } from 'react-router-dom'

import Card from '@mui/material/Card'
import { CardContent, CardMedia, CircularProgress, Typography } from '@mui/material'
import { useLazyGetSWChracterQuery } from 'services/starwars'
import { useEffect } from 'react'
import { Box } from '@mui/system'
import { getCharacterIdFromUrl } from 'utils/getCharacterIdFromUrl'
import Header from 'components/Header'

const CharacterDetails = () => {
  const { characterId } = useParams()
  const [trigger, { data: character, isLoading }] = useLazyGetSWChracterQuery()

  useEffect(() => {
    if (characterId !== '' || characterId) {
      trigger(characterId)
    }
  }, [characterId])

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 300 }}>
        <CircularProgress />
      </Box>
    )
  }

  if (!character) {
    return <div>No results :(</div>
  }

  return (
    <>
      <Header />

      <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: 2, paddingBottom: 5 }}>
        <Card sx={{ minWidth: 275, maxWidth: 900 }}>
          <CardContent>
            <Typography variant='h3' component='div' gutterBottom>
              {character.name}
            </Typography>
            <CardMedia
              component='img'
              height='500'
              image={`https://starwars-visualguide.com/assets/img/characters/${getCharacterIdFromUrl(
                character.url,
              )}.jpg`}
              alt={`${character.name} - image`}
              sx={{ paddingBottom: 1 }}
            />
            <Typography variant='h5' component='div'>
              Birth Year: {character.birth_year}
            </Typography>
            <Typography variant='h5' component='div'>
              Eye Color: {character.eye_color}
            </Typography>
            <Typography variant='h5' component='div'>
              Gender: {character.gender}
            </Typography>
            <Typography variant='h5' component='div'>
              Height: {character.height}
            </Typography>
            <Typography variant='h5' component='div'>
              Mass: {character.mass}
            </Typography>
            <Typography variant='h5' component='div'>
              Skin Color: {character.skin_color}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  )
}

export default CharacterDetails
