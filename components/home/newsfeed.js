import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';

import Item from './newsfeed-item';

const useStyles = makeStyles((theme) => ({
  
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

const List = ({ posts, users }) => {
  const classes = useStyles();

  const getAuthor = (id) => {
    return users.find((user) => user.id === id);
  }

  return (
    <>
      <div className={classes.headerWithDivider}>
        <div className={classes.dividerNewsFeed}></div>
        <Typography variant="h3">
          Newsfeed
        </Typography>
      </div>
      <Grid container direction="row" spacing={3} alignItems="stretch">
        {posts.map((post) => {
          // Render one Item component for each one.
          return <Item key={post.id} item={post} author={getAuthor(post.author)} />;
        })}
      </Grid>
    </>
  );
};

export default List;
