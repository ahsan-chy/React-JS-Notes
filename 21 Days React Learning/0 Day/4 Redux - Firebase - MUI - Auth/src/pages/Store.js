<<<<<<< HEAD
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import {products} from "../db/data"


const Store = () => {
  return (
    <Box mx={5}>
      <Typography variant='h4' sx={{color:"#001e3c", my:3, textAlign:"center"}}>Store</Typography>
                        
      <div className='row' style={{display:'flex', justifyContent:"center"}}>
    {
      products.map(p => (
      <Card sx={{ maxWidth: 300, m:2, py:2 }} align="center" key={p.id}>
      <CardActionArea>
        <CardMedia
        sx={{
          width: "60%",
          height: 'auto'
        }}
          component="img"
          image={p.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {p.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {p.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{justifyContent:'center',}}>
      <Button variant="contained" >
        Buy Now
      </Button>
      </CardActions>
      </Card>
      ))
    }
      </div>
    </Box>
  )
}

=======
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import {products} from "../db/data"


const Store = () => {
  return (
    <Box mx={5}>
      <Typography variant='h4' sx={{color:"#001e3c", my:3, textAlign:"center"}}>Store</Typography>
                        
      <div className='row' style={{display:'flex', justifyContent:"center"}}>
    {
      products.map(p => (
      <Card sx={{ maxWidth: 300, m:2, py:2 }} align="center" key={p.id}>
      <CardActionArea>
        <CardMedia
        sx={{
          width: "60%",
          height: 'auto'
        }}
          component="img"
          image={p.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {p.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {p.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{justifyContent:'center',}}>
      <Button variant="contained" >
        Buy Now
      </Button>
      </CardActions>
      </Card>
      ))
    }
      </div>
    </Box>
  )
}

>>>>>>> 78ef44e09afa2a867a52a71d0ba124618848776f
export default Store