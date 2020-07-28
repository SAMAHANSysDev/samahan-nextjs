/**
 * 
 * Redirects all /wp-admin/* routes to backend WordPress.
 * 
 */

import { backendURL } from 'utils/constants';

const WPAdminRedirect = () => {}

export async function getServerSideProps({ res, req }) {
  if (res) {
    res.writeHead(301, {
      Location: `${backendURL}${req.url}`
    });
    res.end();
  }

  return { props: {} };
}

export default WPAdminRedirect;