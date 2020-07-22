import React from "react";
import { fade, makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import WP from '../../utils/wordpress';

import Item from './newsfeed-item';

const useStyles = makeStyles((theme) => ({
  contentHeader: {
    fontFamily: 'Open\ Sans',
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

  const [fetched, setFetched] = React.useState(false);
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    WP.posts().then((res) => {
      setFetched(true);
      setPosts(res);
    })
  }, []);

  return (

    <>
      <div className={classes.headerWithDivider}>
        <div className={classes.dividerNewsFeed}></div>
        <Typography variant="h3" className={classes.contentHeader}>
          Newsfeed
        </Typography>
      </div>

      { fetched ? 
        <Grid container direction="row" spacing={3} alignItems="stretch">
          {posts.map((post) => {
            // Render one Item component for each one.
            return <Item key={post.id} item={post} />;
          })}
        </Grid> 
      :
        <CircularProgress style={{ margin: 'auto' }} />
      }
    </>
  );
};

export default List;
