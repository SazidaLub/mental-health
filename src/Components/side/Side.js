import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddAbout from '../../Components/Admin/AddAbout/AddAbout'
import AddAwareness from '../../Components/Admin/AddAwareness/AddAwareness'
import AddCountry from '../../Components/Admin/AddCountry/AddCountry'
import AddCovid from '../../Components/Admin/AddCovid/AddCovid'
import AddDefinition from '../../Components/Admin/AddDefinition/AddDefinition'
import AddDonate from '../../Components/Admin/AddDonate/AddDonate'
import AddNews from '../../Components/Admin/AddNews/Addnews'
import AddPrivacy from '../../Components/Admin/AddPrivacy/AddPrivacy'
import AddProjects from '../../Components/Admin/AddProjects/AddProject'
import AddSurvey from '../../Components/Admin/AddSurvey/AddSurvey'
import AddBlog from '../../Components/User/AddBlog/AddBlog'
import AddReview from '../../Components/User/AddReview/AddReview'
import AddPlan from '../../Components/User/AddPlan/AddPlan'
import { UserContext } from '../../App';
import Plan from '../Plan/Plan';
import AddVolunteer from '../User/AddVolunteer/AddVolunteer';
import Volunteer from '../Volunteer/Volunteer';
import AddCommunity from '../Admin/AddCommunity/AddCommunity';
import AddDayWeek from '../Admin/AddDayWeek/AddDayWeek';
import UserPage from '../Admin/UserPage/UserPage';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index  &&  (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:4000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])

  return (
    <div className="" style={{marginTop:"120px", marginLeft:"50px", marginRight:"50px"}}>
       {isAdmin && <Box
      sx={{ flexGrow: 2, bgcolor: 'background.paper', display: 'flex', height: "100%" }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable fullWidth"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider',width: "3000px" }}
      >
        

         <Tab label="Add about page" {...a11yProps(0)} />
         <Tab label="Add Awareness page" {...a11yProps(1)} />
         <Tab label="Add Country Page" {...a11yProps(2)} />
         <Tab label="Add Covid Page" {...a11yProps(3)} />
         <Tab label="Add Definition Page" {...a11yProps(4)} />
         <Tab label="Add Donate Page" {...a11yProps(5)} />
         <Tab label="Add News Page" {...a11yProps(6)} />
         <Tab label="Add Privacy Page" {...a11yProps(7)} />
         <Tab label="Add Project Page" {...a11yProps(8)} />
         <Tab label="Add Survey Page" {...a11yProps(9)} />
         <Tab label="Add Community Page" {...a11yProps(10)} />
         <Tab label="Add Day,Week Page" {...a11yProps(11)} />
        
        
      </Tabs>
      
      
       <TabPanel value={value} index={0}>
        <AddAbout></AddAbout>
      </TabPanel>
       <TabPanel value={value} index={1}>
        <AddAwareness></AddAwareness>
      </TabPanel>
        <TabPanel value={value} index={2}>
        <AddCountry></AddCountry>
      </TabPanel>
       <TabPanel value={value} index={3}>
        <AddCovid></AddCovid>
      </TabPanel>
       <TabPanel value={value} index={4}>
        <AddDefinition></AddDefinition>
      </TabPanel>
       <TabPanel value={value} index={5}>
        <AddDonate></AddDonate>
      </TabPanel>
       <TabPanel value={value} index={6}>
        <AddNews></AddNews>
      </TabPanel>
       <TabPanel value={value} index={7}>
        <AddPrivacy></AddPrivacy>
      </TabPanel>
       <TabPanel value={value} index={8}>
        <AddProjects></AddProjects>
      </TabPanel>
       <TabPanel value={value} index={9}>
        <AddSurvey></AddSurvey>
      </TabPanel>
      <TabPanel value={value} index={10}>
        <AddCommunity></AddCommunity>
      </TabPanel>
      <TabPanel value={value} index={11}>
        <AddDayWeek></AddDayWeek>
      </TabPanel>

    </Box>}




    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: "100%",marginTop:"50px"}}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Add Blog" {...a11yProps(0)} />
        <Tab label="Add Review " {...a11yProps(1)} />
        <Tab label="Add Plan " {...a11yProps(2)} />
        <Tab label="Apply as a Volunteer " {...a11yProps(2)} />
      </Tabs>
      
  
      <TabPanel value={value} index={0}>
        <AddBlog></AddBlog>
        
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AddReview/>
        
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AddPlan/>
        
      </TabPanel>
      <TabPanel value={value} index={3}>
        <AddVolunteer></AddVolunteer>
        
      </TabPanel>

      
    </Box>
    {isAdmin && <div>
          {/* <Plan></Plan>
          <Volunteer></Volunteer> */}
<UserPage></UserPage>
          </div>}
    </div>
  );
}