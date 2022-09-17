import {Card,CardMedia, CardContent, Typography, Button} from '@mui/material'
import {addToStorage} from "../storage.js"

export default function SingleRecipe({title, image, url}) {
    title = title.length > 35 ? `${title.slice(0,35)}...` : title
    return (
        <div className='single-recipe'>
            <a href={url} alt={title} target='_blank'>
                <Card sx={{maxHeight:400, minHeight: 400, maxWidth: 400}} className='image'>
                    <CardMedia component='img' image={image} alt={title} sx={{height: 300}}/>  
                    <CardContent>
                        <Typography variant='h6'>{title}</Typography>
                        <Button sx={{marginTop: '0.3rem', fontWeight: 'bold', backgroundColor: '#D80032', color: 'white'}} onClick={() => addToStorage(title, url, image)}>Save Recipe</Button>
                    </CardContent>
                </Card>
            </a>
        </div>
    )
}