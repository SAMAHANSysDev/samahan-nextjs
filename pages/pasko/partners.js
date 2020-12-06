import React from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';

import dynamic from 'next/dynamic';
import sort from 'fast-sort';

const ServicesList = dynamic(() => import('components/projects/student-services-manual/services-list'));

import { TwitterTimelineEmbed } from 'react-twitter-embed';
import WP from 'utils/wordpress';
import { cdnURL } from 'utils/constants';

import PartnerCard from 'components/pasko/PartnerCard';

const Snowfall = dynamic(() => import('react-snowfall'), { ssr: false });

const useStyles = makeStyles((theme) => ({
  bannerContainer: {
    margin: 'auto',
    width: '95%',
    color: 'white'
  },
  rootContentContainer: {
    backgroundColor: '#002D26',
    backgroundImage: 'url("/assets/bgstars.png")',
  },
  contentContainer: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(12),
      paddingRight: theme.spacing(12),
    },
  },
  rootContainer: {
    width: '100%',
    overflowX: 'hidden',
  },
}));

const Page = () => {
  // Get the data of the current list.
  
  const classes = useStyles();
  const theme = useTheme();

  const partners = [
    {
      name: 'Brewbox',
      type: 'Food',
      logo: 'brewbox.png',
      facebook: 'BrewBoxCoffeeCompanion',
      desc: 'Coffee',
      items: [
        '/assets/items/brewbox/1.jpeg',
        '/assets/items/brewbox/2.jpeg',
        '/assets/items/brewbox/3.jpeg',
        '/assets/items/brewbox/4.jpeg',
        '/assets/items/brewbox/5.jpeg',
        '/assets/items/brewbox/6.jpeg',
      ]
    },
    {
      name: 'Stoked',
      type: 'Clothing',
      logo: 'stoked.png',
      facebook: 'StayStokedShirts',
      twitter: 'StayStokedShirts',
      instagram: 'StayStokedShirts',
      desc: 'Clothing line',
      items: [
        '/assets/items/stoked/1.jpeg',
        '/assets/items/stoked/2.jpeg',
        '/assets/items/stoked/3.jpeg',
        '/assets/items/stoked/4.jpeg',
        '/assets/items/stoked/5.jpeg',
        '/assets/items/stoked/6.jpeg',
        '/assets/items/stoked/7.jpeg',
      ]
    },
    {
      name: 'Sois Belle Cosmetics',
      type: 'Cosmetics',
      logo: 'sois.png',
      facebook: 'SoisBelle.Dvoo',
      desc: `✨Care for your skin; Care for your beauty ✨`,
      spiel: 'Sois Belle is introducing their cosmetic line, directly catering for the woman and man intent in being confident, powerful and beautiful.',
      items: [
        '/assets/items/sois/1.webp',
        '/assets/items/sois/2.jpeg',
        '/assets/items/sois/3.jpeg',
        '/assets/items/sois/4.jpeg',
      ]
    },
    {
      name: 'Clothes Declutter Davao',
      type: 'Retail',
      logo: '1.png',
      facebook: 'clothesdeclutterdavao',
      twitter: 'clothesdeclutterdavao',
      instagram: 'clothesdeclutterdavao',
      desc: 'Brand new and Thrifted clothes',
      spiel: 'Flash Sale | Free scrunchies & Stickers per costumer | Free clothes for purchases Php1000 and up',
      items: [
        '/assets/items/declutter/1.jpg',
        '/assets/items/declutter/2.jpg',
        '/assets/items/declutter/3.jpg',
        '/assets/items/declutter/4.jpeg',
      ]
    },
    {
      name: 'HaveStyle Twirl',
      type: 'Electronics',
      logo: 'havestyle.jpg',
      instagram: 'havestyle_twirl',
      desc: 'phone cases,tempered glass, airpods (orig)',
      items: [
        '/assets/items/havestyle/1.jpeg',
        '/assets/items/havestyle/2.jpeg',
        '/assets/items/havestyle/3.jpeg',
        '/assets/items/havestyle/4.jpeg',
        '/assets/items/havestyle/5.jpeg',
        '/assets/items/havestyle/6.jpeg',
        '/assets/items/havestyle/7.jpeg',
      ]
    },
    {
      name: 'Wing it and PY Lumpia',
      type: 'Food',
      logo: 'wingit.png',
      instagram: 'wingitdvo',
      desc: 'Chicken Wings and Lumpia Ubod/ Shanghai',
      items: [
        '/assets/items/wingit/1.JPG',
        '/assets/items/wingit/2.jpg',
        '/assets/items/wingit/3.png',
      ]
    },
    {
      name: 'L\'élixir de HK',
      type: 'Retail',
      logo: 'elixir.png',
      facebook: 'LelixirDeHK',
      desc: `L'élixir de HK is an online retail shop that offers long-lasting potions (perfumes) that can entice everyone. The magical scent of the potions is inspired by famous alchemists (perfumers) around the world. From the woody spicy fragrance for men to warm, alluring, and floral fruity fragrance for women, L'élixir de HK potions can genuinely cater to and satisfy everyone's needs.`,
      spiel: '5-10% Sale',
      items: [
        '/assets/items/lelixir/1.png',
        '/assets/items/lelixir/2.png',
        '/assets/items/lelixir/3.png',
      ]
    },
    {
      name: 'Yum! Breads and Cookies',
      type: 'Food',
      logo: 'yum.png',
      facebook: 'yumbreadandcookies',
      twitter: 'yumbreadandcookies',
      instagram: 'yumbreadandcookies',
      desc: 'We are selling home baked breads and cookies made with love and utmost care. All our breads and cookies are for pre-order. We deliver in Tagum, Panabo, and Davao (Lasang to Mintal)',
      items: [
        '/assets/items/yum/1.jpg',
        '/assets/items/yum/2.jpg',
        '/assets/items/yum/3.jpg',
        '/assets/items/yum/4.jpg',
      ]
    },
  ]

  return (
    <div className={classes.rootContainer}>
      { typeof window !== "undefined" ? (
        <Snowfall />
      ) : null }
      <div style={{ backgroundColor: theme.palette.primary.main }}>
        <Grid container direction="row" spacing={3} alignItems="center" className={classes.bannerContainer}>
          <Grid item sm>
            <center>
              <img src="/assets/christmas-tree-2.gif" width="80%" />
            </center>
          </Grid>
          <Grid item sm>
            <Typography variant="h2" component="h2" style={{ lineHeight: '0.8em', fontFamily: 'Gaegu', textAlign: 'right', fontWeight: 100, fontSize: '4rem' }}>
              Linggo ng Pasko 2020
            </Typography>
            <Typography variant="h1" component="h2" style={{ lineHeight: '0.8em', fontFamily: 'Gaegu', textAlign: 'right', fontSize: '6rem' }}>
              Partners
            </Typography>
            <div style={{ height: 100 }}></div>
          </Grid>
        </Grid>
      </div>
      <div className={classes.rootContentContainer}>
        <div className={classes.contentContainer}>
          {partners.map((partner) => (
            <PartnerCard
              name={partner.name}
              type={partner.type}
              logo={`/assets/logos/${partner.logo}`}
              facebook={partner.facebook ? `https://facebook.com/${partner.facebook}` : ''}
              twitter={partner.twitter ? `https://twitter.com/${partner.twitter}` : ''}
              instagram={partner.instagram ? `https://instagram.com/${partner.instagram}` : ''}
              items={partner.items}
            >
              <Typography variant="body1" component="h2">
                {partner.desc}
              </Typography>
              <Typography variant="body1" component="h2" style={{ marginTop: theme.spacing(1) }}>
                {partner.spiel}
              </Typography>
            </PartnerCard>
          )) }
        </div>
      </div>
    </div>
  );
};

export default Page;
