import {
  Dashboard,
  Person,
  ContentPaste,
  LibraryBooks,
  BubbleChart,
  LocationOn,
  Notifications,
  Explore,
  Profile
} from "material-ui-icons";
import { getCookies } from "../utils/"
import constant from '../utils/constant'
const { manager } = constant
let username = getCookies().username
let appRoutes
if (manager.indexOf(username) !== -1){
  appRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Dashboard",
    icon: Dashboard,
    component: () => require('./dashboard/'),
    models: () => [require('../models/dashboard')]
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
    path: "/thesischeck",
    sidebarName: "Thesis Check",
    navbarName: "Thesis Check",
    icon: BubbleChart,
    component: () => require('./thesischeck/'),
    models: () => [require('../models/thesischeck')]
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
]
} else if(username && username.length === 10) {
  appRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Dashboard",
    icon: Dashboard,
    component: () => require('./dashboard/'),
    models: () => [require('../models/dashboard')]
  },
  {
    path: "/profile",
    sidebarName: "Profile",
    navbarName: "Profile",
    icon: Person,
    component: () => require('./profile/'),
    models: () => [require('../models/profile')]
  },
  {
    path: "/thesis",
    sidebarName: "Thesis Info",
    navbarName: "Thesis",
    icon: ContentPaste,
    component: () => require('./thesis/'),
    models: () => [require('../models/thesis')]
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
]
} else if(username && username.length === 6) {
  appRoutes = [
    {
      path: "/dashboard",
      sidebarName: "Dashboard",
      navbarName: "Dashboard",
      icon: Dashboard,
      component: () => require('./dashboard/'),
      models: () => [require('../models/dashboard')]
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
  ]
} else {
  appRoutes = [
    {
      path: "/login",
      component: () => require('./login/'),
      models: () => [require('../models/login')]
    }
  ]
}

export default appRoutes;
