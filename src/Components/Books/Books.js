import React from 'react';
import Grid from '@material-ui/core/Grid';
import Data from '../../Data/Books/data.json';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import '../../Components/Appointment/Appointment/Appointment.css'


const Books = () => {

  return (
    <div className="ms-5 pt-5 mb-5 pb-5 ">
<h1 className="text-center mt-5 pt-5">Resources</h1>
      <Grid container spacing={5} style={{ marginTop: "4%", width: "100%", alignItems: "center" }}>
        {Data.map(post => {
          return (
            <Grid item xs={6} sm={6} md={3}>

              <Card sx={{ height: 605, }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="340"
                    image={post.image}
                    alt="green iguana"
                  />
                  <CardContent sx={{ height: 200, }}>
                    <Typography gutterBottom variant="h5" component="div">
                      {post.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <h6 className="text-info">{post.writer}</h6>
                      {post.Summary}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <button type="button" className="btn btn-info text-white fw-bold fs-5"><a href={post.pdf} target="_blank" style={{ textDecoration: 'none', color: 'white' }} rel="noreferrer">Read Now</a></button>
                </CardActions>
              </Card>
            </Grid>


          )
        })}
      </Grid>
    </div>
  );
};

export default Books;