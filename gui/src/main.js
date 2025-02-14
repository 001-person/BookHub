
import { createApp} from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory, createWebHashHistory} from 'vue-router'
import WritePage from './components/write_view.vue'
import WriteShelf from './components/write_shelf.vue'
import DataStatistics from './components/data_statistics.vue'


// 设置默认主题
document.documentElement.setAttribute('data-theme', 'light');

// 创建应用实例
const app = createApp(App);

// History 模式
// const router = createRouter({
//   history: createWebHistory(),
//   routes: [
//     // { path: '/read-page', component: ReadPage },
//     { path: '/write-page/:book_id/:book_name/:last_node', name: 'writePage', component: WritePage },
//     // { path:'/write-bookshelf', component: WriteBookshelf },
//     { path:'/write-shelf', name: 'writeShelf', component: WriteShelf },
//     { path:'/', name: 'dataStatistics', component: DataStatistics },
//   ],
// })


// hash模式
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    // { path: '/read-page', component: ReadPage },
    { path: '/write-page/:book_id/:book_name/:last_node', name: 'writePage', component: WritePage },
    { path:'/', name: 'writeShelf', component: WriteShelf },
    //{ path:'/', name: 'dataStatistics', component: DataStatistics },
  ],
});




app.use(router)

// 组件库 ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css' // 暗黑模式
app.use(ElementPlus)



// 图标库 ElementPlus
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(`ele-${key}`, component)
}
// 自定义图标库
import SvgIcon from '@/components/SvgIcon/index.vue'
app.component('SvgIcon', SvgIcon)

// 自定义样式
import '@/assets/main.scss'
import '@/assets/theme.css'

app.mount('#app')

// 全局禁用右键菜单
// document.addEventListener('contextmenu', function(event) {
//   event.preventDefault();
// });
// 设置默认主题
