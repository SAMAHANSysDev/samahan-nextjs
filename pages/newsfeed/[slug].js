import React from 'react';
import WP from 'utils/wordpress';
import parse from 'html-react-parser';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import Typography from '@material-ui/core/Typography';
import Head from 'next/head';
import Grid from '@material-ui/core/Grid';

import Paper from '@material-ui/core/Paper';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CircularProgress from '@material-ui/core/CircularProgress';

import { frontendURL } from 'utils/constants';

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    width: '90%',
    margin: 'auto'
  },
  contentHeader: {
    fontFamily: 'Montserrat',
  },
  spacer: {
    height: 100
  },
  rootContainer: {
    width: '100%',
    marginBottom: 80
  },
}));

const page = (props) => {
  const { post, author, recent: recentNews } = props;
  const classes = useStyles();
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className={classes.contentContainer}>
        <Grid container direction="row" justify="center">
          <CircularProgress />
        </Grid>
      </div>
    )
  }

  return (
    <div className={classes.contentContainer}>
      <Head>
        <title>{post.title.rendered} - SAMAHAN Newsfeed</title>
        <meta name="description" content={post.excerpt.rendered.replace(/<[^>]+>/g, '')} />
        <meta name="twitter:card" value="summary" />
        <meta property="og:title" content={post.title.rendered} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${frontendURL}/newsfeed/${post.slug}`} />
        <meta property="og:description" content={post.excerpt.rendered.replace(/<[^>]+>/g, '')} />
      </Head>
      
      <div className={classes.spacer}></div>

      <Grid container direction="row" spacing={6} className={classes.contentContainer}>
          <Grid item sm={8}>
            <Typography variant="h3" component="h4" className={classes.contentHeader} style={{ marginBottom: 20 }}>
              {post.title.rendered}
            </Typography>

            <Typography variant="subtitle2">
              by {author.name} on {new Date(post.date).toDateString()}
            </Typography>
            
            <Typography variant="body1" component="div">
              {parse(post.content.rendered)}
            </Typography>
          </Grid>
          <Grid item sm={4} style={{ minWidth: '300px' }}>
            <Paper variant="outlined" style={{ padding: 20 }}>
              <Typography variant="h6" component="h4" className={classes.contentHeader}>
                Recent News
              </Typography>
              <List style={{ width: '100%' }}>
                { recentNews.map((recent) => (
                  <ListItem key={recent.id} button onClick={() => {
                    router.push(`/newsfeed/${recent.slug}`)
                  }}>
                    <ListItemText primary={recent.title.rendered} secondary={new Date(recent.date).toDateString()} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
      </Grid>

      <div className={classes.spacer}></div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const res = await WP.posts();
  let paths = [];
  for (let post of res) {
    paths.push({
      params: { slug: post.slug }
    });
  }
  return {
    paths,
    fallback: true
  }
}

export const getStaticProps = async (ctx) => {
  const res = await WP.posts().slug(ctx.params.slug);
  const [author, recent] = await Promise.all([
    WP.users().id(res[0].author),
    WP.posts().exclude(res[0].id).perPage(5).page(1)
  ]);
  return { props: { post: res[0], author, recent }, unstable_revalidate: 10 }
}

export default page;