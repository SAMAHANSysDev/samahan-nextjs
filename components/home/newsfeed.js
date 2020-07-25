import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';

import Item from './newsfeed-item';

import CircularProgress from '@material-ui/core/CircularProgress';

import WP from 'utils/wordpress';

const useStyles = makeStyles((theme) => ({
  contentHeader: {
    fontFamily: 'Montserrat',
  },
  headerWithDivider: {
    display: 'flex',
    alignItems: 'center'
  },
  dividerNewsFeed: {
    flexGrow: 1,
    height: 1,
    backgroundColor: "#000",
    marginRight: 20
  },
  header: {
    fontWeight: 300,
    textTransform: 'capitalize',
    color: 'rgba(12, 17, 43, 0.9)'
  }
}));

const List = () => {
  const classes = useStyles();

  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    WP.posts().perPage(3).page(1).then((res) => {
      setLoading(false);
      setPosts(res);
    })
  }, [])

  return (
    <>
      <div className={classes.headerWithDivider}>
        <div className={classes.dividerNewsFeed}></div>
        <Typography variant="h3" className={classes.contentHeader}>
          Newsfeed
        </Typography>
      </div>
      { loading ?
        <Grid container direction="row" justify="center">
          <CircularProgress /> 
        </Grid>
        :
        <Grid container direction="row" spacing={3} alignItems="stretch">
          {posts.map((post) => {
            // Render one Item component for each one.
            return <Item key={post.id} item={post} />;
          })}
        </Grid>
      }
    </>
  );
};

export default List;
