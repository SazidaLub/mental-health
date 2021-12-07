import React from 'react';
import Grid from '@material-ui/core/Grid';
import Data from '../../Data/DoctorList/DoctorList.json';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


const Doctors = () => {

  return (
    <div className="ms-5 pt-5 mb-5 pb-5 backDes">
      <h1 className="text-center mt-5 pt-5">Doctors List</h1>
      <Grid container spacing={3} style={{ marginTop: "4%", width: "100%", alignItems: "center" }}>
        {Data.map(post => {
          return (
            <Grid item xs={6} sm={6} md={3}>

              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="230"
                    image={post.image}
                    alt="green iguana"
                  />
                  <CardContent sx={{ height: "400px" }}>
                    <Typography gutterBottom variant="h6" component="div">
                      {post.name}
                    </Typography>
                    <ul>

                      <li><Typography variant="body2" color="text.secondary">
                        {post.study}
                      </Typography></li>
                      <li><Typography variant="body2" color="text.secondary">
                        {post.status}
                      </Typography></li>
                      <li><Typography variant="body2" color="text.secondary">
                        {post.hospital}
                      </Typography></li>
                      <Typography variant="body2" color="text.secondary">
                        {post.room}
                      </Typography>
                      <li><Typography variant="body2" color="text.secondary">
                        {post.day}
                      </Typography></li>
                      <Typography variant="body2" color="text.secondary">
                        {post.phone}
                      </Typography>
                      <li><Typography variant="body2" color="text.secondary">
                        {post.visitingHour}
                      </Typography></li>
                    </ul>
                  </CardContent>
                </CardActionArea>
                {/* <CardActions>
                  <button type="button" className="btn btn-info text-white fw-bold fs-5"><a href={post.pdf} target="_blank" style={{ textDecoration: 'none', color: 'white' }} rel="noreferrer">Read Now</a></button>
                </CardActions> */}
              </Card>
            </Grid>


          )
        })}
      </Grid>
    </div>
  );
};

export default Doctors;