import React from "react";
import CardMedia from '@material-ui/core/CardMedia';
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

  return null;
};

export default Page;
