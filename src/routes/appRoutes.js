import {
  Dashboard,
  Person,
  ContentPaste,
  LibraryBooks,
  BubbleChart,
  LocationOn,
  Notifications
} from "material-ui-icons";

const appRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Material Dashboard",
    icon: Dashboard,
    component: () => require('./dashboard/'),
    models: () => [require('../models/dashboard')]
  },
  {
    path: "/thesis",
    sidebarName: "Thesis Info",
    navbarName: "Thesis",
    icon: Person,
    component: () => require('./thesis/'),
    models: () => [require('../models/thesis')]
  },
  {
    path: "/teachers",
    sidebarName: "Teacher Info",
    navbarName: "Teacher Info",
    icon: ContentPaste,
    component: () => require('./thesis/')
  },
  {
    path: "/students",
    sidebarName: "Students Info",
    navbarName: "Typography",
    icon: LibraryBooks,
    component: () => require('./thesis/')
  },
  {
    path: "/icons",
    sidebarName: "Icons",
    navbarName: "Icons",
    icon: BubbleChart,
    component: () => require('./thesis/')
  },
  {
    path: "/maps",
    sidebarName: "Maps",
    navbarName: "Map",
    icon: LocationOn,
    component: () => require('./thesis/')
  },
  {
    path: "/notifications",
    sidebarName: "Notifications",
    navbarName: "Notifications",
    icon: Notifications,
    component: () => require('./thesis/')
  },
  {
    path: "/login",
    component: () => require('./login/'),
    models: () => [require('../models/login')]
  }
];

export default appRoutes;
