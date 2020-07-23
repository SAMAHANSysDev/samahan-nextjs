export default [
  {
    name: "Home",
    href: "/",
    title: "Home",
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
    title: "SAMAHAN Docs",
    desc: "Official Document Source and Free Downloadables"
  },
];