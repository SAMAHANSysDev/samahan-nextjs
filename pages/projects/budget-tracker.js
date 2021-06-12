import React from 'react';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const BudgetTracker = () => {
  return (
    <>
      <Grid
        container
        direction="column"
        spacing={4}
        justify="center"
      >
        <Grid item style={{
          height: '90vh',
          backgroundPosition: 'center bottom',
          backgroundSize: 'cover',
          backgroundImage: 'url(https://samahan.stdcdn.com/21-22/landing.png), linear-gradient(to right, #1637BC, #2D8AEA)',
          paddingLeft: 'clamp(50px, 10vw, 100px)',
          paddingRight: 'clamp(50px, 10vw, 100px)'
        }}>
          <Card style={{ height: '100%', borderRadius: 20 }}>
            <CardContent style={{ height: '100%' }}>
              <iframe width="100%" height="100%" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSkswDONSXkYpZSeLdFdjz39soMvtmLWBaeXVkXuQaA9LpVFeK2Z2FEXUgZ4J3XRPxVw-0FTBYjQT1Y/pubhtml?widget=true&amp;headers=false" />
            </CardContent>
          </Card>
        </Grid>
        <Grid item style={{
          backgroundPosition: 'center bottom',
          backgroundSize: 'cover',
          backgroundImage: 'linear-gradient(to right, #1637BC, #2D8AEA)',
          paddingTop: '10rem',
          paddingBottom: '10rem',
          paddingLeft: 'clamp(50px, 10vw, 100px)',
          paddingRight: 'clamp(50px, 10vw, 100px)'
        }}>
          <Grid container direction="column" justify="center" alignItems="center" spacing={4}>
            <Grid item>
              <Typography variant="h3" color="secondary">SAMAHAN Live Budget Tracker</Typography>
            </Grid>
            <Grid item>
              <Typography color="secondary">For many years, it has always been a challenge to keep the students up to date about their money banked in SAMAHAN. The SAMAHAN Live Budget Tracker is a real time budget update, displayed live on the SAMAHAN website. It will project expenses and current standing of the budget.  Along with all the events, this tracker competently used to work more effectively and promote transparency for the Ateneans. </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default BudgetTracker;