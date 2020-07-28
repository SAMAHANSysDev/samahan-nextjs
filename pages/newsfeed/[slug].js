import React from 'react';
import WP from 'utils/wordpress';
import parse from 'html-react-parser';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import Typography from '@material-ui/core/Typography';
import Head from 'next/head';
import DefaultErrorPage from 'next/error';
import Grid from '@material-ui/core/Grid';

import Paper from '@material-ui/core/Paper';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CircularProgress from '@material-ui/core/CircularProgress';

import { frontendURL, cdnURL } from 'utils/constants';

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    width: '90%',
    margin: 'auto'
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
          <CircularProgress style={{ marginTop: 100, marginBottom: 100 }} />
        </Grid>
      </div>
    )
  }

  if(!post) {
    return (
      <>
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
        <DefaultErrorPage statusCode={404} />
      </>
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
        {post.jetpack_featured_media_url ? 
          <meta property="og:image" content={post.jetpack_featured_media_url} /> 
        : 
          <meta property="og:image" content={`${cdnURL}/samahan-seo-default.png`} />
        }
        <meta property="og:url" content={`${frontendURL}/newsfeed/${post.slug}`} />
        <meta property="og:description" content={post.excerpt.rendered.replace(/<[^>]+>/g, '')} />
      </Head>
      
      <div className={classes.spacer}></div>

      <Grid container direction="row" spacing={6} className={classes.contentContainer}>
          <Grid item sm={8}>
            <Typography variant="h3" component="h4" style={{ marginBottom: 20 }}>
              {post.title.rendered}
            </Typography>

            <Typography variant="subtitle2">
              by {author.name} on {new Date(post.date).toDateString()}
            </Typography>
            { post.jetpack_featured_media_url ? <img src={post.jetpack_featured_media_url} style={{ width: '100%', marginTop: 40, marginBottom: 20 }} /> : null }
            
            <Typography variant="body1" component="div">
              {parse(post.content.rendered)}
            </Typography>
          </Grid>
          <Grid item sm={4} style={{ minWidth: '300px' }}>
            <Paper variant="outlined" style={{ padding: 20 }}>
              <Typography variant="h6" component="h4">
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
  let res = []
  try {
    res = await WP.posts();
  } catch (err) {
    res = []
  }
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
  let res = []
  try {
    res = await WP.posts().slug(ctx.params.slug);
  } catch (err) {
    res = []
  }
  if (res.length > 0) {
    const [author, recent] = await Promise.all([
      WP.users().id(res[0].author),
      WP.posts().exclude(res[0].id).perPage(5).page(1)
    ]);
    return { props: { post: res[0], author, recent }, revalidate: 10 };
  }
  return { props: { post: null, author: null, recent: [] }, revalidate: 10 };
}

export default page;