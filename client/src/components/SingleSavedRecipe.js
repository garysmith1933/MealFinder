import { Card,CardMedia, CardContent, Typography } from '@mui/material';
import { deleteFromStorage } from "../utils/storage.js";

export default function SingleSavedRecipe({title, image, url}) {
    title = title.length > 30 ? `${title.slice(0,30)}...` : title
    return (
        <div className='single-recipe'>
          <Card sx={{maxHeight:400, minHeight: 400, maxWidth: 400}}>
            <a href={url} alt={title} target='_blank'>
              <CardMedia component='img' image={image} alt={title} sx={{height: 300}} className='image'/>  
            </a>
                
            <CardContent>
              <Typography variant='h6'>{title}</Typography>
              <button className='save-button button' onClick={() => deleteFromStorage(title)}>Remove Recipe</button>
            </CardContent>
          </Card>    
        </div>
    )
}