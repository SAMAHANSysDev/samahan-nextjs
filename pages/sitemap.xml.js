/**
 * 
 * Sitemap generator for scraping bots from search engines such as Google
 * 
 */

import WP from 'utils/wordpress';
import routes from 'navigation/routes';
import { frontendURL } from 'utils/constants';

const createSitemap = (posts) => `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map((page) => {
      if ('submenu' in page) {
        return page.submenu.map((sub) => {
          return `
            <url>
              <loc>${`${frontendURL}${sub.href}`}</loc>
            </url>
          `;
        }).join('')
      }
      return `
        <url>
          <loc>${`${frontendURL}${page.href}`}</loc>
        </url>
      `;
    })
  .join('')}
  ${posts
    .map(({ slug }) => {
      return `
        <url>
          <loc>${`${frontendURL}/projects/newsfeed/${slug}`}</loc>
        </url>
      `;
    })
    .join('')}
  </urlset>
`;

const Sitemap = () => {}

export async function getServerSideProps({ res }) {
  let posts = []
  try {
    posts = await WP.posts();
  } catch (err) {
    posts = []
  }
  res.setHeader('Content-Type', 'text/xml');
  res.write(createSitemap(posts));
  res.end();

  return { props: {} };
}

export default Sitemap;