import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Index'
import Document from '@/components/Document'
import Download from '@/components/Download'
import About from '@/components/About'





Vue.use(Router)
export default new Router({
  mode:'history',
  routes: [
		{ path: '*', redirect: '/Index' },
    { path: '/Index', name: 'Index', component: Index },
    { path: "/Document", name: "Document", component: Document },
    { path: "/Download", name: "Download", component: Download },
    { path: "/About", name: "About", component: About },


    
    
  ]
})
