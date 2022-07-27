import { styled, alpha } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import Link from '@mui/material/Link'
import { amber } from '@mui/material/colors'

import { ReactComponent as SWLogo } from 'assets/images/SWLogo.svg'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.35),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.45),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

const SearchAppBar = () => {
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

        <Box ml='auto'>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder='Character' inputProps={{ 'aria-label': 'search' }} />
          </Search>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default SearchAppBar
