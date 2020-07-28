# SAMAHAN Website (Frontend)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/git?s=https%3A%2F%2Fgithub.com%2FSAMAHANSysDev%2Fsamahan-nextjs&env=GOOGLE_AUTH,CALENDAR_ID)

This is the official repository for the currently deployed SAMAHAN website. This project uses Next.js as framework and Material UI as UI library. This is built with the Wordpress REST API as backend in mind. The master branch is automatically deployed as a production build.

## Libraries/Frameworks used

Javascript is the most commonly used language for web applications. Basic understanding of the core functionalities of Javascript (async/await, Promises, etc.) is required for web development.

- [Next.js](https://nextjs.org/docs/getting-started)
- [React.js](https://reactjs.org/docs/getting-started.html)
- [Material UI](https://material-ui.com/getting-started/usage/)
- [Wordpress REST API](https://developer.wordpress.org/rest-api/)
  - [wpapi](https://www.npmjs.com/package/wpapi)
- [Google Calendar API](https://developers.google.com/calendar/v3/reference)
  - [googleapis](https://www.npmjs.com/package/googleapis)

## Local Deployment

Before running the local deployment, make sure to have the required environmental variables shown below for the app to work.
- GOOGLE_AUTH (used for Google Calendar API)
- CALENDAR_ID (used for Google Calendar API)

You may place these variables in a .env.local file inside the root of the project.

```bash
npm install # install dependencies
npm run dev # run
```

## Adding a new Page

Since this project uses Next.js, it follows the standard folder structure for its pages. In Next.js, a page is a React Component exported from a .js, .jsx, .ts, or .tsx file in the pages directory. Each page is associated with a route based on its file name.

Example: If you create pages/about.js that exports a React component like below, it will be accessible at /about.

```javascript
const About = () => {
  return <div>About</div>
}

export default About
```

Besides the standard folder structure provided by Next.js, this project requires the route link to be explicitly stated on the **navigation/routes.js** folder.

If the route is to be hidden from the navigation menu, set the hidden property to **true**.

Below is the standard schema for the route object.

```javascript
{
  name: "The Revision Progress",
  href: "/projects/constinatinto/the-revision-progress",
  title: "The Revision Progress",
  desc: "SAMAHAN Constitutional Reform for AY 2020-2021",
  hidden: true
}
```

### Pages with Dynamic Routes

Next.js supports pages with dynamic routes. For example, if you create a file called pages/posts/[id].js, then it will be accessible at posts/1, posts/2, etc.

To learn more about Next.js routing, check the [Next.js pages documentation](https://nextjs.org/docs/basic-features/pages).

## Folder Structure

The project follows a modularized folder structure on top of the provided structure by Next.js.

```
├── components
│   ├── calendar
│   │   └── ... components for the calendar page
│   ├── cco
│   │   └── ... components for the cco page
│   ├── ... more folders named after the page
│   ├── footer.js
│   ├── header.js
│   └── theme.js
├── data
│   ├── cco
│   │   └── ... data in object form for the cco pages
│   └── samahan
│       └── ... data in object form for the samahan page
├── navigation
│   ├── nav.js
│   ├── nav-burger.js
│   └── routes.js
├── pages
│   └── ... pages following the Next.js folder structure
├── utils
│   ├── constants.js
│   ├── google.js
│   └── wordpress.js
└── server.js
```

- The '**components**' folder contains the modularized components that the pages on the 'pages' folder use. It also contains the components for the header, footer, and the theme for Material UI.
- The '**data**' folder contains data in Javascript object form to be used by components.
- The '**navigation**' folder contains the components for the navigation menu (both web and mobile) and the explicit list of routes.
  - nav.js - web navigation menu
  - nav-burger.js - mobile navigation menu
  - routes.js - list of routes
- The '**pages**' folder contains the pages of the project.
- The '**utils**' folder contains external APIs, constants and generators, such as the backend Wordpress URL, for the project.

## Contributing
Only pull requests from SAMAHAN System Development members are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)