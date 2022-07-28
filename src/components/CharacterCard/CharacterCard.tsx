import { Link as RouterLink } from 'react-router-dom'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

type CharacterCardProps = {
  id: string
  name: string
  imageURL: string
}

const CharacterCard = ({ name, id, imageURL }: CharacterCardProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea component={RouterLink} to={`/characters/${id}`}>
        <CardMedia component='img' height='400' image={imageURL} alt={`${name} - image`} />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CharacterCard
