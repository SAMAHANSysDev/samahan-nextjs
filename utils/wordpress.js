import Wordpress from 'wpapi';

const wp = new Wordpress({
  endpoint: 'http://samahan.addu.edu.ph/wp-json'
})

export default wp;