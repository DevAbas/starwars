import { Box } from '@mui/material'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'

import Header from 'components/Header'
import CharacterCard from 'components/CharacterCard'

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Box sx={{ flexGrow: 1, paddingTop: 20, paddingBottom: 20 }}>
        <Container maxWidth='lg'>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {Array.from(Array(20)).map((_, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <CharacterCard />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  )
}

export default App
