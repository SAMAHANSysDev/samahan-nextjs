import Wordpress from 'wpapi';

const wp = new Wordpress({
  endpoint: 'https://samahan.addu.edu.ph/wp-json'
})

export default wp;