import React from 'react';
import Grid from '@material-ui/core/Grid';
import contact from '../../Images/contact.png';
import phone from '../../Images/phone.png';
import email from '../../Images/email.jpg';
import address from '../../Images/address.jpg';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {  CardActionArea } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import Form from './Form';

const Contact = () => {
  return (
    <div className="ms-5 pt-5">
      <Grid container spacing={3} style={{ marginTop: "8%", width: "100%", alignItems: "center" }}>
        <Grid item xs={12} sm={6} md={6}>
          <h1>Contact YouMatter Team</h1>
          <img src={contact} alt="" style={{ width: "80%" }} />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Form />
        </Grid>
      </Grid>
      <h1 style={{textAlign:"center",marginTop: "5%",}}>Contact Info</h1>
      <Grid container spacing={3} style={{ marginTop: "2%", marginBottom: "5%",width: "100%", alignItems: "center" }}>
        <Grid item xs={12} sm={4} md={4}>
          <Card sx={{ maxWidth: "100%" }}>
            <CardActionArea>
              <CardMedia component="img" height="300px" image={phone} alt="phone"/>
              <CardContent>
                  <List>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <CallIcon />
                        </ListItemIcon>
                        <ListItemText primary="+880 1674-613968" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                        <CallIcon />
                        </ListItemIcon>
                        <ListItemText primary="+880 1674-613968" />
                      </ListItemButton>
                    </ListItem>
                  </List>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Card sx={{ maxWidth: "100%" }}>
            <CardActionArea>
              <CardMedia component="img" height="300px" image={email} alt="email"/>
              <CardContent>
                  <List>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <EmailIcon />
                        </ListItemIcon>
                        <ListItemText primary="lubnasazida@gmail.com" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                        <EmailIcon />
                        </ListItemIcon>
                        <ListItemText primary="youmatter@gmail.com" />
                      </ListItemButton>
                    </ListItem>
                  </List>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Card sx={{ maxWidth: "100%" }}>
            <CardActionArea>
              <CardMedia component="img" height="300px" image={address} alt="address" />
              <CardContent>
                  <List>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Mojaffor Nogor" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                        <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Chawkbazar" />
                      </ListItemButton>
                    </ListItem>
                  </List>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        </Grid>
    </div>
  );
};

export default Contact;