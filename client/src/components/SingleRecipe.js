import {Grid,Card,CardMedia, CardContent, Typography, Button} from '@mui/material'
import {addToStorage} from "../storage.js"
import {Link} from 'react-router-dom'

export default function SingleRecipe({title, image, url}) {
    return (
        <>
            <a href={url} alt={title} target='_blank'>
                <Card sx={{maxHeight:500, minHeight: 500, maxWidth: 500}}>
                    <CardMedia component='img' image={image} alt={title} sx={{height: 400}}/>  
                    <CardContent>
                        <Typography variant='h6'>{title}</Typography>
                        <Button sx={{marginTop: '0.3rem', fontWeight: 'bold', backgroundColor: 'gray', color: 'white'}} onClick={addToStorage}>Save Recipe</Button>
                    </CardContent>
                </Card>
            </a>
        </>
    )
}