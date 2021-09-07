import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Template from '../views/Template.vue'
import GraphicDesigner from '../components/GraphicDesigner.vue'
import FrontendTemplate from '../components/FrontendTemplate.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/template',
    name: 'Template',
    component: Template
  },
  {
    path: '/GraphicDesigner',
    name: 'GraphicDesigner',
    component: GraphicDesigner
  },{
    path: '/FrontendTemplate',
    name: 'FrontendTemplate',
    component: FrontendTemplate
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
