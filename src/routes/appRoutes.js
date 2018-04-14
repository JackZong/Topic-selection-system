import Dashbo from './dashboard/index'
import Thesis from './thesis/'
import Teacher from './teachers/'
import Students from './student/'
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
    component: Dashbo,
    models: () => [require('../models/dashboard')]
  },
  {
    path: "/thesis",
    sidebarName: "Thesis Info",
    navbarName: "Thesis",
    icon: Person,
    component: Thesis
  },
  {
    path: "/teachers",
    sidebarName: "Teacher Info",
    navbarName: "Teacher Info",
    icon: ContentPaste,
    component: Teacher
  },
  {
    path: "/students",
    sidebarName: "Students Info",
    navbarName: "Typography",
    icon: LibraryBooks,
    component: Students
  },
  {
    path: "/icons",
    sidebarName: "Icons",
    navbarName: "Icons",
    icon: BubbleChart,
    component: Dashbo
  },
  {
    path: "/maps",
    sidebarName: "Maps",
    navbarName: "Map",
    icon: LocationOn,
    component: Dashbo
  },
  {
    path: "/notifications",
    sidebarName: "Notifications",
    navbarName: "Notifications",
    icon: Notifications,
    component: Dashbo
  }
];

export default appRoutes;
