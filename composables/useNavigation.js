const appBarMenu = [
  {
    title: "Home",
    route: "/",
    icon: "mdi-home-outline",
  },
  {
    title: "About",
    subMenu: [
      { title: "History", route: "/school-history" },
      { title: "Mission & Vision", route: "/mission-vision" },
      { title: "Correspondent's Message", route: "/correspondent-message" },
      { title: "Principal's Message", route: "/principal-message" },
      {
        title: "Vice Principal's Message",
        route: "/vice-principal-message",
      },
      { title: "School Management", route: "/school-management" },
      {
        title: "Academic Administrators",
        route: "/academic-administrators",
      },
      { title: "Facilities", route: "/school-facilities" },
      { title: "Careers", route: "/career-opportunities" },
    ],
    icon: "mdi-information-outline",
  },
  {
    title: "Academics",
    subMenu: [
      { title: "Curriculum", route: "/academic-curriculum" },
      { title: "Courses Offered", route: "/courses-offered" },
      {
        title: "Teaching Methodology",
        route: "/teaching-methodology",
      },
      { title: "Kindergarten", route: "/kindergarten-education" },
      { title: "Rules & Regulations", route: "/rules-and-regulations" },
      { title: "School Prayers", route: "/school-prayers" },
    ],
    icon: "mdi-school-outline",
  },
  // {
  //   title: "News & Events",
  //   route: "/school-news-events",
  //   icon: "mdi-calendar",
  // },
  {
    title: "Gallery",
    route: "/school-gallery",
    icon: "mdi-view-gallery-outline",
  },
  {
    title: "Contact",
    route: "/contact",
    icon: "mdi-phone-dial-outline",
  },
];

const academicTrail = [
  { title: "Curriculum", disabled: false, to: "/academic-curriculum" },
  { title: "Courses Offered", disabled: false, to: "/courses-offered" },
  {
    title: "Teaching Methodology",
    disabled: false,
    to: "/teaching-methodology",
  },
  {
    title: "Kindergarten",
    disabled: false,
    to: "/kindergarten-education",
  },
  {
    title: "Rules & Regulations",
    disabled: false,
    to: "/rules-and-regulations",
  },
  {
    title: "School Prayers",
    disabled: false,
    to: "/school-prayers",
  },
];

const aboutTrail = [
  { title: "History", disabled: false, to: "/school-history" },
  { title: "Mission & Vision", disabled: false, to: "/mission-vision" },
  {
    title: "Correspondent's Message",
    disabled: false,
    to: "/correspondent-message",
  },
  {
    title: "Principal's Message",
    disabled: false,
    to: "/principal-message",
  },
  {
    title: "Vice-Principal's Message",
    disabled: false,
    to: "/vice-principal-message",
  },
  {
    title: "School Management",
    disabled: false,
    to: "/school-management",
  },
  {
    title: "Academic Administrators",
    disabled: false,
    to: "/academic-administrators",
  },
  {
    title: "Facilities",
    disabled: false,
    to: "/school-facilities",
  },
  {
    title: "Careers",
    disabled: false,
    to: "/career-opportunities",
  },
];

const utilityTrail = [
  { title: "Home", disabled: false, to: "/" },
  // { title: "News & Events", disabled: false, to: "/school-news-events" },
  { title: "Gallery", disabled: false, to: "/school-gallery" },
  { title: "Contact", disabled: false, to: "/contact" },
];

export { appBarMenu, academicTrail, aboutTrail, utilityTrail };
