import Vue from 'vue'
import ElementUI from 'element-ui'
// import '../theme/index.css'
import 'element-ui/lib/theme-default/index.css'
import VueQuillEditor from 'vue-quill-editor'
import Router from 'vue-router'
import index from '../components/index2'
// import news from '../components/news/news'
// import newsDetail from '../components/news/newsDetail'
// import photoWall from '../components/photoWall'
// import area from '../components/area'
// import services from '../components/services'
// import personal from '../components/personal'
// import contact from '../components/contact'
// import company from '../components/company'
// import about from '../components/about'
// import valley from '../components/valley'
// import project from '../components/project/project'
// import projectDetail from '../components/project/projectDetail'
// import applyProject from '../components/project/applyProject'
// import perfectInformation from '../components/project/perfectInformation'
// import notices from '../components/notices/notices'
// import noticesDetail from '../components/notices/noticesDetail'
// import active from '../components/active'
// import activeDetail from '../components/activeDetail'
// import login from '../components/login'
// import download from '../components/download'
// import videos from '../components/videos'
// import admin from '../components/admin/admin'
// import adm from '../components/admin/adm'
// import admNews from '../components/admin/admNews'
// import admUser from '../components/admin/admUser'
// import admNotice from '../components/admin/admNotice'
// import admActive from '../components/admin/admActive'
// import admProject from '../components/admin/admProject'
// import admVideo from '../components/admin/admVideo'
// import admFile from '../components/admin/admFiles'
// import admPhotoWall from '../components/admin/admPhotoWall'
import test from '../components/test'

Vue.use(Router)
Vue.use(ElementUI)
Vue.use(VueQuillEditor)
Vue.filter('time', function (value) {
  var month = new Date(parseInt(value)).getMonth() + 1
  var date = new Date(parseInt(value)).getDate()
  if (month < 10) {
    month = '0' + month
  }
  if (date < 10) {
    date = '0' + date
  }
  return new Date(parseInt(value)).getFullYear() + '-' + month + '-' + date
})
Vue.filter('date', function (value) {
  return value.getFullYear() + '-' + (value.getMonth() + 1) + '-' + value.getDate()
})

export default new Router({
  mode: 'history',
  hashbang: true,
  routes: [{
    path: '/',
    component: index
  }, {
    path: '/test',
    component: test
  }, {
    path: '/index',
    name: 'index',
    component: index
  }, {
    path: '/news',
    name: 'news',
    // component: news
    component: resolve => require(['../components/news/news'], resolve)
  }, {
    path: '/newsDetail/:id',
    name: 'newsDetail',
    // component: newsDetail
    component: resolve => require(['../components/news/newsDetail'], resolve)
  }, {
    path: '/photoWall',
    name: 'photoWall',
    // component: photoWall
    component: resolve => require(['../components/photoWall'], resolve)
  }, {
    path: '/area',
    name: 'area',
    // component: area
    component: resolve => require(['../components/area'], resolve)
  }, {
    path: '/services',
    name: 'services',
    // component: services
    component: resolve => require(['../components/services'], resolve)
  }, {
    path: '/valley',
    // component: valley
    component: resolve => require(['../components/valley'], resolve)
  }, {
    path: '/personal',
    name: 'personal',
    // component: personal
    component: resolve => require(['../components/personal'], resolve)
  }, {
    path: '/contact',
    name: 'contact',
    // component: contact
    component: resolve => require(['../components/contact'], resolve)
  }, {
    path: '/company',
    name: 'company',
    // component: company
    component: resolve => require(['../components/company'], resolve)
  }, {
    path: '/about',
    name: 'about',
    // component: about
    component: resolve => require(['../components/about'], resolve)
  }, {
    path: '/project',
    name: 'project',
    // component: project
    component: resolve => require(['../components/project/project'], resolve)
  }, {
    path: '/projectDetail/:id',
    name: 'projectDetail',
    // component: projectDetail
    component: resolve => require(['../components/project/projectDetail'], resolve)
  }, {
    path: '/applyProject',
    name: 'applyProject',
    // component: applyProject
    component: resolve => require(['../components/project/applyProject'], resolve)
  }, {
    path: '/perfectInformation/:id',
    name: 'perfectInformation',
    // component: perfectInformation
    component: resolve => require(['../components/project/perfectInformation'], resolve)
  }, {
    path: '/notices',
    name: 'notices',
    // component: notices
    component: resolve => require(['../components/notices/notices'], resolve)
  }, {
    path: '/noticesDetail/:id',
    name: 'noticesDetail',
    // component: noticesDetail
    component: resolve => require(['../components/notices/noticesDetail'], resolve)
  }, {
    path: '/active',
    name: 'active',
    // component: active
    component: resolve => require(['../components/active'], resolve)
  }, {
    path: '/activeDetail/:id',
    // component: activeDetail
    component: resolve => require(['../components/activeDetail'], resolve)
  }, {
    path: '/login',
    name: 'login',
    // component: login
    component: resolve => require(['../components/login'], resolve)
  }, {
    path: '/download',
    name: 'download',
    // component: download
    component: resolve => require(['../components/download'], resolve)
  }, {
    path: '/videos',
    name: 'videos',
    // component: videos
    component: resolve => require(['../components/videos'], resolve)
  }, {
    path: '/admin',
    name: 'admin',
    // component: admin
    component: resolve => require(['../components/admin/admin'], resolve)
  }, {
    path: '/adm',
    name: 'adm',
    // component: adm,
    component: resolve => require(['../components/admin/adm'], resolve),
    children: [{
      path: '/admNews',
      name: '新闻管理',
      // component: admNews
      component: resolve => require(['../components/admin/admNews'], resolve)
    }, {
      path: '/admUser',
      name: '用户管理',
      // component: admUser
      component: resolve => require(['../components/admin/admUser'], resolve)
    }, {
      path: '/admProject',
      name: '项目管理',
      // component: admProject
      component: resolve => require(['../components/admin/admProject'], resolve)
    }, {
      path: '/admActive',
      name: '活动管理',
      // component: admActive
      component: resolve => require(['../components/admin/admActive'], resolve)
    }, {
      path: '/admNotice',
      name: '公告管理',
      // component: admNotice
      component: resolve => require(['../components/admin/admNotice'], resolve)
    }, {
      path: '/admVideo',
      name: '视频管理',
      // component: admVideo
      component: resolve => require(['../components/admin/admVideo'], resolve)
    }, {
      path: '/admFile',
      name: '资料管理',
      // component: admFile
      component: resolve => require(['../components/admin/admFiles'], resolve)
    }, {
      path: '/admPhotoWall',
      name: '照片墙管理',
      // component: admPhotoWall
      component: resolve => require(['../components/admin/admPhotoWall'], resolve)
    }]
  }]
})
