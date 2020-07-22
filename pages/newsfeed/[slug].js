import React from 'react';
import { useRouter } from 'next/router';
import WP from '../../utils/wordpress';
import parse from 'html-react-parser';
import { fade, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    width: '50%',
    margin: 'auto'
  },
  contentHeader: {
    fontFamily: 'Open\ Sans',
  },
  spacer: {
    height: 100
  },
  rootContainer: {
    width: '100%',
    margin: 0
  }
}));

const page = ({ post }) => {
  const [content, setContent] = React.useState(null);
  const classes = useStyles();

  React.useEffect(() => {
    console.log(post)
    setContent(parse(post.content.rendered))
  }, [post]);
  return (
    <div className={classes.contentContainer}>
      <div className={classes.spacer}></div>

      <Typography variant="h3" component="h4" className={classes.contentHeader} style={{ marginBottom: 20 }}>
        {post.title.rendered}
      </Typography>
      
      {content}

      <div className={classes.spacer}></div>
    </div>
  )
}

page.getInitialProps = async (ctx) => {
  const res = await WP.posts().slug(ctx.query.slug)
  return { post: res[0] }
}

export default page;