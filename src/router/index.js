import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Index'
import Document from '@/components/Document'
import Download from '@/components/Download'
import About from '@/components/About'
import Control from '@/components/Control'
import Login from '@/components/Login'
import MainPage from '@/components/MainPage'
import PageTable from '@/components/table';


Vue.use(Router)
// export default new Router({
//   mode:'history',
//   base:'/my/',
//   routes: [
// 		{ path: '*', redirect: '/' },
//     { path: '/', name: 'Index', component: Index },
//     { path: "/Document", name: "Document", component: Document },
//     { path: "/Download", name: "Download", component: Download },
//     { path: "/About", name: "About", component: About },
//     { path: "/Control", name: "Control", component: Control },
//     { path: "/Login", name: "Login", component: Login },
//
//   ]
// })
export default new Router({
  mode:'history',
  base:'/my/',
  routes: [
    { path: '*', redirect: '/' },
    { path: '/', name: 'MainPage', component: MainPage ,children:[
        { path: "/", name: "Index", component: Index },
        { path: "/Index", name: "Index", component: Index },
        { path: "/Document", name: "Document", component: Document ,children:[
            { path: "/", name: "", component: PageTable },
            { path: "/PageTable", name: "PageTable", component: PageTable },
          ]},
        { path: "/Download", name: "Download", component: Download },
        { path: "/About", name: "About", component: About },
        { path: "/Control", name: "Control", component: Control },
      ]},
    { path: "/Login", name: "Login", component: Login },

  ]
})
