import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';

import { TwitterTimelineEmbed } from 'react-twitter-embed';
import PhoneIcon from '@material-ui/icons/Phone';

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    margin: 'auto',
    width: '95%'
  },
  contentHeader: {
    fontFamily: 'Montserrat',
  },
  rootContainer: {
    width: '100%',
    marginBottom: 80
  },
}));

const Page = () => {
  // Get the data of the current list.
  
  const classes = useStyles();

  return (
    <div className={classes.rootContainer}>

      <div style={{ height: 100 }} />

      <Grid container direction="row" spacing={3} alignItems="center" className={classes.contentContainer}>
        <Grid item sm>
          <Typography variant="h1" component="h2" className={classes.contentHeader} style={{ lineHeight: '0.8em' }}>
            iHELP
          </Typography>
          <Typography variant="h1" component="h2" className={classes.contentHeader} style={{ lineHeight: '0.8em' }}>
            SAMAHAN
          </Typography><br />
          <Typography variant="subtitle1" component="h2" style={{ lineHeight: '1.5em' }}>
            Student-initiated efforts to address and respond to emergencies
          </Typography>
          <Typography variant="subtitle1" component="h2" style={{ lineHeight: '1.5em' }}>
            samahan.addu.edu.ph
          </Typography>
        </Grid>
        <Grid item sm>
          <img src="https://samahan-cdn.snry.xyz/board-ihelp2-1.png" style={{ width: '100%', height: 'auto' }} />
        </Grid>
      </Grid>

      <div style={{ height: 100 }}></div>

      <div style={{ margin: 'auto', width: '90%' }}>
        <Grid container direction="row" spacing={6} className={classes.contentContainer}>
          <Grid item sm={8}>
            <Typography variant="h4" component="h2" className={classes.contentHeader}>What is iHELP?</Typography>
            <Typography variant="body1" component="p" style={{ marginTop: '10px', marginBottom: '10px' }}>For the past academic year, we, as a university community, have endured more calamities than is deemed necessary. From natural calamities to pandemics, we recognize that, even in the most difficult times, we continue to extend our help and support for each other. However, this does not erase the difficulties that come with each calamity we have to face. There have been issues on the timeliness of aid provided, monitoring of students in need, on answering concerns, etc. </Typography>
            <Typography variant="body1" component="p" style={{ marginTop: '10px', marginBottom: '10px' }}>iHelp is a flagship program of the SAMAHAN, under the Department of Campaigns and Advocacies, for the academic year 2020-21 that is targeted to addressing these issues. Through maximizing our digital platforms, it <b>aims to establish a defined system in order to check and monitor Ateneans during calamities</b>. Thus, by creating a more efficient checking system, we will be able to <b>streamline the efforts of the university</b>, along with its partners, in order to provide help when and where it is most crucial. </Typography>
            <Typography variant="body1" component="p" style={{ marginTop: '10px', marginBottom: '10px' }}>To achieve this, we will <b>create an online database for all students enrolled in Ateneo de Davao University</b>. This will allow us to track students who are most at risk or most affected by calamities. In turn, this would aid to consolidate the information needed by the university in order assist these students. Consequently, <b>all SAMAHAN-initiate donation drives will be under iHelp</b> in order to lessen logistical confusion. </Typography>
            <Typography variant="body1" component="p" style={{ marginTop: '10px', marginBottom: '10px' }}>Through the use of social media, we will <b>establish an online response system</b> aimed at answering questions or calls for assistance. <b>A help desk will be established through Twitter and Facebook</b> in order to cater to constituent concerns. Information and publicity materials will also be disseminated online. Students will be made aware of the color-coding system when addressing a specific calamity. </Typography>
            <Typography variant="body1" component="p" style={{ marginTop: '10px', marginBottom: '10px' }}>In total, <b>iHelpSAMAHAN will be the umbrella program for all SAMAHAN- initiated efforts at addressing and aiding calamities</b>. Internally, this will establish a clear set of protocols in order to effectively heed the calls of the students during times of crisis. This will streamline the efforts made in partnership with university offices like UCEAC, or with other clubs within the Ateneo. Externally, it will endeavor to create linkages or establish contact with other organizations that may help in providing assistance. </Typography>
            <Typography variant="body1" component="p" style={{ marginTop: '10px', marginBottom: '10px' }}>At the core, while we can never be fully prepared for calamities, this will create an opportunity for us to respond more efficiently. As Ateneans, we continue to find ways and innovate on how we can better respond to the call of those who need us most. <b>iHelpSAMAHAN is only the beginning</b>.</Typography>
          </Grid>
          <Grid item sm>
            <Typography variant="h4" component="h2" className={classes.contentHeader} style={{ marginBottom: 10 }}>Key Personnels</Typography>
            <Grid container direction="row">
              <Grid item sm={6} style={{ display: 'flex', alignItems: 'center', minWidth: 150 }}>
                <PhoneIcon /> <Typography style={{ marginLeft: 10 }}>09982310294</Typography>
              </Grid>
              <Grid item sm={6} style={{ display: 'flex', alignItems: 'center', minWidth: 150 }}>
                <PhoneIcon /> <Typography style={{ marginLeft: 10 }}>09167111802</Typography>
              </Grid>
              <Grid item sm={6} style={{ display: 'flex', alignItems: 'center', minWidth: 150 }}>
                <PhoneIcon /> <Typography style={{ marginLeft: 10 }}>09271301256</Typography>
              </Grid>
              <Grid item sm={6} style={{ display: 'flex', alignItems: 'center', minWidth: 150 }}>
                <PhoneIcon /> <Typography style={{ marginLeft: 10 }}>09157242683</Typography>
              </Grid>
            </Grid>

            <div style={{ height: 50 }}></div>
            
            <Typography>For news and updates, follow <b>@iHelpSAMAHAN</b>.</Typography>

            <div style={{ height: 20 }}></div>

            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="ihelpsamahan"
              options={{height: 800, width: '100vw'}}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Page;
