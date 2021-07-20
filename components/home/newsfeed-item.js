import React from "react";

import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import { useRouter } from 'next/router';
import CardContent from '@material-ui/core/CardContent';
import Button from 'components/Button';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cardRoot: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 40,
    minWidth: 275,
    borderRadius: 20,
    borderColor: theme.palette.primary.main,
    height: '100%',
  },
  media: {
    height: 200
  }
}));

const cleanURL = (url) => {
  return url.replace(/^.*\/\/[^\/]+/, '');
}


const Item = ({ item }) => {
  const date = new Date(item.date);

  const classes = useStyles();
  const router = useRouter();

  const [renderedExcerpt, setRenderedExcerpt] = React.useState('');
  const [renderedTitle, setRenderedTitle] = React.useState('');

  const coauthors = () => {
    return item.coauthors.reduce((accumulator, coauthor, i) => {
      let toReturn = '';
      if (item.coauthors.length - 2 === i) {
        toReturn = `${accumulator}${coauthor.display_name} and `
      } else if (item.coauthors.length - 1 !== i) {
        toReturn = `${accumulator}${coauthor.display_name}, `
      } else {
        toReturn = `${accumulator}${coauthor.display_name}`
      }
      return toReturn
    }, '');
  };

  React.useEffect(() => {
    if ('rendered' in item.excerpt) {
      setRenderedExcerpt(item.excerpt.rendered);
    }
  }, [item.excerpt])

  React.useEffect(() => {
    if ('rendered' in item.title) {
      setRenderedTitle(item.title.rendered);
    }
  }, [item.title])

  return (
    <Grid item xs={12} md={4}>
      <Card className={classes.cardRoot} elevation={0} variant="outlined" style={{
        backgroundImage: `url(${item.featured_image_src})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover'
      }}>
        <CardContent style={{ 
          backgroundImage: item.featured_image_src ? 'linear-gradient(rgba(0,0,0,1), rgba(0,0,0.8), rgba(0,0,0,0))' : '', 
          color: item.featured_image_src ? 'white' : '', 
          padding: 40 
        }}>
          <Typography gutterBottom variant="h5" component="h2" dangerouslySetInnerHTML={{ __html: renderedTitle }} />
          { item.coauthors ? 
            <Typography variant="body2" component="p">By <b>{coauthors()}</b></Typography>
          : null }
          <Typography variant="body2" component="p">on <b>{date.toDateString()}</b></Typography>
          <Typography variant="body1" component="p" dangerouslySetInnerHTML={{ __html: renderedExcerpt }} />
        </CardContent>
        <CardActions style={{ 
          backgroundImage: item.featured_image_src ? 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1))' : '', 
          padding: 40 
        }}>
          <Button variant="contained" color="primary" disableElevation onClick={() => router.push(`${cleanURL(item.link)}`)}>
            Read More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

// Connect the Item to gain access to `state` as a prop
export default Item;