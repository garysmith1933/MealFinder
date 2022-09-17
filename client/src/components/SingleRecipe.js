import {Card,CardMedia, CardContent, Typography, Button} from '@mui/material'
import {addToStorage} from "../storage.js"

export default function SingleRecipe({title, image, url}) {
    title = title.length > 30 ? `${title.slice(0,30)}...` : title
    return (
        <div className='single-recipe'>
                <Card sx={{maxHeight:400, minHeight: 400, maxWidth: 400}} className='image'>
                    <a href={url} alt={title} target='_blank'>
                        <CardMedia component='img' image={image} alt={title} sx={{height: 300}}/>  
                    </a>
                    <CardContent>
                        <Typography variant='h6'>{title}</Typography>
                        <Button sx={{marginTop: '0.3rem', fontWeight: 'bold', backgroundColor: '#D80032', color: 'white'}} onClick={() => addToStorage(title, url, image)}>Save Recipe</Button>
                    </CardContent>
                </Card>
        </div>
    )
}