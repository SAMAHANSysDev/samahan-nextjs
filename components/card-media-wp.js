import React from "react";
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Card';
import LinearProgress from '@material-ui/core/LinearProgress';
import WP from 'utils/wordpress';
import useSWR from 'swr';

const fetcher = id => {
  if (id) {
    return WP.media().id(id).then((res) => {
      if ('full' in res.media_details.sizes) {
        return res.media_details.sizes.full.source_url;
      } else {
        return res.source_url;
      }
    })
  }
  return null;
}

const Page = ({ className, imageId, title }) => {
  // Get the data of the current list.
  const { data } = useSWR(imageId, fetcher)

  if (data) {
    return (
      <CardMedia
        className={className}
        image={data}
        title={title}
      />
    );
  }

  return (
    <Grid container direction="row" alignItems="center" justify="center" className={className}>
      <Grid item>
        <LinearProgress />
      </Grid>
    </Grid>
  );
};

export default Page;
