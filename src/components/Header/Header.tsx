import { useState, useEffect, useRef } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import SearchIcon from '@mui/icons-material/Search'
import Link from '@mui/material/Link'
import { amber } from '@mui/material/colors'

import useDebounce from 'hooks/useDebounce'

import { Search, SearchIconWrapper, StyledInputBase } from './styles'

import { ReactComponent as SWLogo } from 'assets/images/SWLogo.svg'

type SearchAppBarProps = {
  setSearchValue?: (value: string) => void
}

const SearchAppBar = ({ setSearchValue }: SearchAppBarProps) => {
  const [value, setValue] = useState<string>('')
  const debouncedValue = useDebounce(value, 500)
  const mounted = useRef(false)

  useEffect(() => {
    if (mounted.current) {
      setSearchValue && setSearchValue(debouncedValue)
    } else {
      mounted.current = true
    }
  }, [debouncedValue])

  const searchHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ): void => {
    const { value } = event.target
    setValue(value)
  }

  return (
    <AppBar
      position='static'
      sx={{ bgcolor: amber[100], height: 100, justifyContent: 'center' }}
      elevation={0}
    >
      <Toolbar>
        <Box width={200} height='100%' lineHeight={1}>
          <Link href='/' display='block' height='100%'>
            <SWLogo height={70} />
          </Link>
        </Box>

        {setSearchValue && (
          <Box ml='auto'>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder='Character'
                inputProps={{ 'aria-label': 'search' }}
                onChange={searchHandler}
                value={value}
              />
            </Search>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default SearchAppBar
