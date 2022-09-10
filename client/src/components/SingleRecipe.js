import {Grid,Card,CardMedia, CardContent, CardActions, Typography, Button} from '@mui/material'
import {addToStorage} from "../storage.js"

export default function SingleRecipe({title, image, url}) {
    return (
        <>
            <a href={url} alt={title} target='_blank'>
                <Card sx={{maxHeight:500, minHeight: 500, maxWidth: 500}}>
                    <CardMedia component='img' image={image} alt={title} sx={{height: 400}}/>  
                    <CardContent>
                        <Typography variant='h6'>{title}</Typography>
                        <CardActions> <Button onClick={addToStorage}>Save Recipe</Button> </CardActions>   
                    </CardContent>
                </Card>
            </a>
        </>
    )
}