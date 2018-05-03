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
    sidebarName: "论文申报",
    navbarName: "论文申报",
    icon: ContentPaste,
    component: () => require('./thesisapply/'),
    models: () => [require('../models/thesisapply')]
  },
  {
    path: "/student",
    sidebarName: "学生信息",
    navbarName: "学生信息中心",
    icon: LibraryBooks,
    component: () => require('./student/'),
    models: () => [require('../models/student')]
  },
  {
    path: "/teacher",
    sidebarName: "教师信息",
    navbarName: "教师信息中心",
    icon: LibraryBooks,
    component: () => require('./teachers/'),
    models: () => [require('../models/teacher')]
  },
  {
    path: "/thesischeck",
    sidebarName: "论文审核",
    navbarName: "论文审核",
    icon: BubbleChart,
    component: () => require('./thesischeck/'),
    models: () => [require('../models/thesischeck')]
  },
  { 
    sidebarName: "消息管理",
    navbarName: "消息管理",
    icon: BubbleChart,
    children: [{
      path: "/message",
      sidebarName: "发送消息",
      navbarName: "发送消息",
      icon: BubbleChart,
      component: () => require('./message/'),
      models: () => [require('../models/message')],
    },{
      path: "/messagemy",
      sidebarName: "我的留言",
      navbarName: "我的留言",
      icon: BubbleChart,
      component: () => require('./message/'),
      models: () => [require('../models/message')],
    },{
      path: "/messageall",
      sidebarName: "所有留言",
      navbarName: "所有留言",
      icon: BubbleChart,
      component: () => require('./message/'),
      models: () => [require('../models/message')],
    }]
  },
  {
        path: "/message",
        sidebarName: "发送消息",
        navbarName: "发送消息",
        component: () => require('./message/'),
        models: () => [require('../models/message')]
      },{
        path: "/messagemy",
        sidebarName: "我的留言",
        navbarName: "我的留言",
        component: () => require('./message/'),
        models: () => [require('../models/message')],
      },{
        path: "/messageall",
        sidebarName: "所有留言",
        navbarName: "所有留言",
        component: () => require('./message/'),
        models: () => [require('../models/message')],
      },
  {
    path: "/logs",
    sidebarName: "登录日志",
    navbarName: "登录日志",
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
    path: "/thesis",
    sidebarName: "论文列表",
    navbarName: "论文列表",
    icon: ContentPaste,
    component: () => require('./thesis/'),
    models: () => [require('../models/thesis')]
  },
  {
    path: "/mythesis",
    sidebarName: "我的选题",
    navbarName: "我的选题",
    icon: LocationOn,
    component: () => require('./mythesis/'),
    models: () =>[require('../models/mythesis')]
  },
  {
    path: "/profile",
    sidebarName: "个人信息",
    navbarName: "个人信息",
    icon: Person,
    component: () => require('./profile/'),
    models: () => [require('../models/profile')]
  },
  {
    path: "/logs",
    sidebarName: "登录日志",
    navbarName: "登录日志",
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
      sidebarName: "论文申报",
      navbarName: "论文申报",
      icon: ContentPaste,
      component: () => require('./thesisapply/'),
      models: () => [require('../models/thesisapply')]
    },
    {
      path: "/student",
      sidebarName: "学生信息",
      navbarName: "学生信息中心",
      icon: LibraryBooks,
      component: () => require('./student/'),
      models: () => [require('../models/student')]
    },
    {
      path: "/thesispresel",
      sidebarName: "论文预选",
      navbarName: "论文预选",
      icon: BubbleChart,
      component: () => require('./thesispresel/'),
      models: () => [require('../models/thesispresel')]
    },
    {
      path: "/logs",
      sidebarName: "登录日志",
      navbarName: "登录日志",
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
