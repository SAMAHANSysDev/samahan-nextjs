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
    desc: "Concerns, Questions & Queries"
  },
  {
    name: "SAMAHAN",
    href: "/samahan",
    title: "About SAMAHAN",
    desc: "Samahan ng mga Mag-aaral ng Pamantasan ng Ateneo de Davao"
  },
  {
    name: "Calendar",
    href: "/calendar",
    title: "Calendar",
    desc: "Comprehensive Timeline of Student Activities"
  },
  {
    name: "Projects",
    href: "/projects",
    submenu: [
      {
        name: 'Student Services',
        href: '/projects/student-services-manual',
        title: "Student Services Manual",
        desc: "Student Manual for Services offered by the University"
      },
      {
        name: 'iHELP',
        href: '/projects/ihelp',
        title: "iHELP",
        desc: "Student-initiated efforts to address and respond to emergencies"
      },
      {
        name: '#ConstiNatinTo',
        href: '/projects/constinatinto',
        title: "#ConstiNatinTo",
        desc: "SAMAHAN Constitutional Reform for AY 2020-2021"
      }
    ]
  },
  {
    name: "Newsfeed",
    href: "/newsfeed",
    title: "Newsfeed",
    desc: "News and Stories of and for the Student Body"
  },
  {
    name: "CCO",
    href: "/cco",
    submenu: [
      {
        name: 'Clubs',
        href: '/cco/clubs',
        title: "CCO Clubs",
        desc: "Clubs and Organizations of the Ateneo de Davao University"
      },
      {
        name: 'Officers',
        href: '/cco/officers',
        title: "CCO Officers",
        desc: "Clubs and Organizations of the Ateneo de Davao University"
      }
    ]
  },
  {
    name: "Docs",
    href: "/samahan-docs",
    title: "Reservation Docs",
    desc: "Official Document Source and Free Downloadables"
  },
  {
    name: "Requests Docs",
    href: "/samahan-docs/requests",
    title: "Requests Docs",
    desc: "Official Document Source and Free Downloadables",
    hidden: true
  },
  {
    name: "Concept Paper Docs",
    href: "/samahan-docs/concept-paper",
    title: "Concept Paper Docs",
    desc: "Official Document Source and Free Downloadables",
    hidden: true
  },
  {
    name: "The Revision Progress",
    href: "/projects/constinatinto/the-revision-progress",
    title: "The Revision Progress",
    desc: "SAMAHAN Constitutional Reform for AY 2020-2021",
    hidden: true
  },
];