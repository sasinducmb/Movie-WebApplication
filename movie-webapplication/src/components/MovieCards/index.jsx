import React from 'react'
import {Movies} from "../content"
import CancelIcon from '@mui/icons-material/Cancel';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const index = (props) => {
  return (
    <div className='MovieList'>

    <Card sx={{ maxWidth: 345, position:'relative' }}>
      <CardMedia
        sx={{ height: 400, position:'relative'}}
        image={props.image}
        title={props.Moviename}
      />
      <CardActions>
        <Button   sx={{
           position: 'absolute',
           top: 10,
           right: 10,
           backgroundColor: 'transparent',
           color: 'white',
           zIndex: 1, 
          }}  size="small"><CancelIcon/></Button>
      </CardActions>
      <CardContent sx={{
        backgroundColor:"gray"
      }}>
        <Typography gutterBottom variant="h5" component="div">
         {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {props.details}
        </Typography>
      </CardContent>
    </Card>

    </div>
  )
}

export default index