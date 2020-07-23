import React from 'react';
import WP from '../../utils/wordpress';
import parse from 'html-react-parser';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Head from 'next/head';

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    width: '60%',
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

const page = ({ post, author }) => {
  const [content, setContent] = React.useState(null);
  const classes = useStyles();

  React.useEffect(() => {
    setContent(parse(post.content.rendered));
  }, [post]);
  return (
    <div className={classes.contentContainer}>
      <Head>
        <title>{post.title.rendered} - SAMAHAN Newsfeed</title>
        <meta name="description" content={post.excerpt.rendered.replace(/<[^>]+>/g, '')} />
        <meta name="twitter:card" value="summary" />
        <meta property="og:title" content={post.title.rendered} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://samahan.snry.xyz/newsfeed/${post.slug}`} />
        <meta property="og:description" content={post.excerpt.rendered.replace(/<[^>]+>/g, '')} />
      </Head>
      
      <div className={classes.spacer}></div>

      <Typography variant="h3" component="h4" className={classes.contentHeader} style={{ marginBottom: 20 }}>
        {post.title.rendered}
      </Typography>

      <Typography variant="subtitle2">
        by {author.name} on {new Date(post.date).toDateString()}
      </Typography>
      
      {content}

      <div className={classes.spacer}></div>
    </div>
  )
}

page.getInitialProps = async (ctx) => {
  const res = await WP.posts().slug(ctx.query.slug);
  const author = await WP.users().id(res[0].author);
  return { post: res[0], author: author }
}

export default page;