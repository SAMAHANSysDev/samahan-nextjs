import Wordpress from 'wpapi';
import { backendURL } from './constants';

const wp = new Wordpress({
  endpoint: `${backendURL}/wp-json`
})

export default wp;