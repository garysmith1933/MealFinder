import { Card,CardMedia, CardContent, Typography } from '@mui/material'
import { addToStorage, deleteFromStorage } from "../utils/storage.js"

export default function SingleRecipe({title, image, url, isSavedRecipe}) {
  const text = isSavedRecipe === true ? 'Remove Recipe' : 'Save Recipe'

  const addOrDeleteFromStorage = (title, url, image) => {
    if (isSavedRecipe) {
      deleteFromStorage(title)
    }

    else {
      addToStorage(title, url, image)
      alert('Recipe Saved')
    }
  } 
    title = title.length > 30 ? `${title.slice(0,30)}...` : title
    return (
        <>
          <Card sx={{maxHeight:425, minHeight: 400, maxWidth: 400}} className='image'>
            <a href={url} alt={title} target='_blank'>
              <CardMedia component='img' image={image} alt={title} sx={{height: 300}}/>  
            </a>

            <CardContent align='left'>
              <Typography className='recipe-title' variant='h6'>{title}</Typography>
              <button className='save-delete-button' onClick={() => addOrDeleteFromStorage(title, url, image)}>{text}</button>
            </CardContent>
          </Card>
        </>
    )
}