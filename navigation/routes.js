/**
 * 
 * Add all expected routes here for the automated SEO system to work.
 * If the hidden property is not specified, the route will be displayed on the navigation menu.
 * 
 */

module.exports = [
  {
    name: "Home",
    href: "/",
    title: "SAMAHAN ng mga Mag-aaral ng Pamantasan ng Ateneo de Davao",
    desc: "The Official Student Government of Ateneo de Davao University",
  },
  {
    name: "Help Portal",
    href: "/samahan-help-portal",
    title: "Help Portal",
    desc: "Concerns, Questions & Queries",
    mobileOnly: true
  },
  {
    name: "SAMAHAN",
    href: "/samahan",
    title: "About SAMAHAN",
    desc: "Samahan ng mga Mag-aaral ng Pamantasan ng Ateneo de Davao",
  },
  {
    name: "Initiatives",
    href: "/projects",
    submenu: [
      {
        name: 'SAMAHAN Alert',
        href: '/projects/alert',
        title: "SAMAHAN Alert",
        desc: "We will make sure that all information will be received by all Ateneans. We will continue maximizing text messaging to reach the student body, with the assurance that all our social media accounts will become more active in answering the questions of the student body."
      },
      {
        name: 'COVID Watch',
        href: '/projects/covid-watch',
        title: "COVID Watch",
        desc: "With the country being in a national public emergency, the SAMAHAN, together with the Department of Campaigns and Advocacies and iHELP SAMAHAN will monitor the progress of the country in dealing with COVID-19. In collaboration with the NSEC and NSMSEC, this platform shall inform the student body with real-time information of government response through the official SAMAHAN Website."
      },
      {
        name: 'SAMAHAN Live Budget Tracker',
        href: '/projects/budget-tracker',
        title: "SAMAHAN Live Budget Tracker",
        desc: "For many years, it has always been a challenge to keep the students up to date about their money banked in SAMAHAN. The SAMAHAN Live Budget Tracker is a real time budget update, displayed live on the SAMAHAN website. It will project expenses and current standing of the budget.  Along with all the events, this tracker competently used to work more effectively and promote transparency for the Ateneans. "
      },
      {
        name: "Archives",
        href: "/projects/archives",
        title: "Archives",
        desc: "List of all SAMAHAN Archives",
      },
    ]
  },
  {
    name: "Newsfeed",
    href: "/newsfeed",
    title: "Newsfeed",
    desc: "News and Stories of and for the Student Body",
  },
  {
    name: 'SAMAHAN Central Board',
    href: '/samahan/central-board',
    title: "SAMAHAN Central Board",
    desc: "Samahan ng mga Mag-aaral ng Pamantasan ng Ateneo de Davao",
    hidden: true,
  },
  {
    name: 'SAMAHAN Departments',
    href: '/samahan/departments',
    title: "SAMAHAN Departments",
    desc: "Samahan ng mga Mag-aaral ng Pamantasan ng Ateneo de Davao",
    hidden: true,
  },
];