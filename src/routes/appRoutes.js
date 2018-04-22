import {
  Dashboard,
  Person,
  ContentPaste,
  LibraryBooks,
  BubbleChart,
  LocationOn,
  Notifications,
  Explore
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
    path: "/thesisapply",
    sidebarName: "Thesis Apply",
    navbarName: "Thesis Apply",
    icon: ContentPaste,
    component: () => require('./thesisapply/'),
    models: () => [require('../models/thesisapply')]
  },
  {
    path: "/student",
    sidebarName: "Students Info",
    navbarName: "Student Info Center",
    icon: LibraryBooks,
    component: () => require('./student/'),
    models: () => [require('../models/student')]
  },
  {
    path: "/thesispresel",
    sidebarName: "Pre Selection",
    navbarName: "Pre Selection",
    icon: BubbleChart,
    component: () => require('./thesispresel/'),
    models: () => [require('../models/thesispresel')]
  },
  {
    path: "/mythesis",
    sidebarName: "My Thesis",
    navbarName: "My Thesis",
    icon: LocationOn,
    component: () => require('./mythesis/'),
    models: () =>[require('../models/mythesis')]
  },
  {
    path: "/logs",
    sidebarName: "Login Log",
    navbarName: "Login Log",
    icon: Explore,
    component: () => require('./logs/'),
    models: () => [require('../models/logs')]
  },
  {
    path: "/login",
    component: () => require('./login/'),
    models: () => [require('../models/login')]
  }
];

export default appRoutes;
