import React from 'react';
import WP from 'utils/wordpress';
import { makeStyles, useTheme } from '@material-ui/core/styles';
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
import WPGBlocks from 'react-gutenberg';
import "react-gutenberg/default.css";

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    width: '85%',
    margin: 'auto'
  },
  bannerContainer: {
    minHeight: '30vh',
    backgroundPosition: 'center bottom',
    backgroundSize: 'cover',
    backgroundImage: 'url(https://samahan.stdcdn.com/21-22/landing.png), linear-gradient(to right, #1637BC, #2D8AEA)',
    paddingLeft: 'clamp(50px, 10vw, 100px)',
    paddingRight: 'clamp(50px, 10vw, 100px)',
    color: 'white',
    marginBottom: '2rem'
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
  const theme = useTheme();

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
    <div>
      <Head>
        <title>{post.title.rendered} - SAMAHAN Newsfeed</title>
        <meta name="description" content={post.excerpt.rendered.replace(/<[^>]+>/g, '')} />
        <meta name="twitter:card" value="summary" />
        <meta property="og:title" content={post.title.rendered} />
        <meta property="og:type" content="article" />
        {post.jetpack_featured_media_url ? <>
          <meta property="og:image" content={post.jetpack_featured_media_url} /> 
          <meta name="twitter:image" content={post.jetpack_featured_media_url} />
        </> : <>
          <meta property="og:image" content={`${cdnURL}/samahan-seo-default.png`} />
          <meta name="twitter:image" content={`${cdnURL}/samahan-seo-twitter-default.png`} />
        </>}
        <meta property="og:url" content={`${frontendURL}/newsfeed/${post.slug}`} />
        <meta property="og:description" content={post.excerpt.rendered.replace(/<[^>]+>/g, '')} />
      </Head>
      
      <Grid container direction="column" spacing={3} justify="center" className={classes.bannerContainer}>
        <Grid item>
          <Typography variant="h4" style={{ lineHeight: '0.8em' }}>
            {post.title.rendered}
          </Typography>
          <Typography variant="h6">
            by {author.name} on {new Date(post.date).toDateString()}
          </Typography>
        </Grid>
      </Grid>
      <Grid container direction="row" spacing={6} className={classes.contentContainer}>
          <Grid item xs={12} sm={8}>
            { post.jetpack_featured_media_url ? <img src={post.jetpack_featured_media_url} style={{ width: '100%', marginTop: 40, marginBottom: 20 }} /> : null }
            
            <Typography variant="body1" component="div" style={{ width: '100%' }}>
              <WPGBlocks blocks={post.blocks} />
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} style={{ minWidth: '300px' }}>
            <Paper variant="outlined" style={{ padding: 20, borderRadius: 20, borderColor: theme.palette.primary.main }}>
              <Typography variant="h6" component="h4" style={{ color: theme.palette.primary.main }}>
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
    res = await WP.posts().perPage(1);
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