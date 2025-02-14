<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      mode="horizontal"
    >
      <el-sub-menu  index="2" class="custom-sub-menu">
        <template #title>开始</template>
        <el-menu-item index="2-2" @click="write_bookshelf">书架</el-menu-item>
        <!-- <el-menu-item index="2-3" @click="data_statistics">统计</el-menu-item> -->
        <el-menu-item index="2-5" @click="exit_app">退出</el-menu-item>
      </el-sub-menu>
      <!-- <el-menu-item index="3" >设置</el-menu-item>
      <el-menu-item index="4" @click="change_theme">主题</el-menu-item> -->
      <el-menu-item index="5" @click="dialog_help=!dialog_help">帮助</el-menu-item>
      <el-menu-item index="5" @click="dialog_about=!dialog_about">关于</el-menu-item>
    </el-menu>

    <el-dialog
    v-model="dialog_help"
    title="帮助"
    :style="{ minWidth: '500px', maxWidth: '800px' }"
  >
  <div style="font-family: Arial, sans-serif; line-height: 1.6;">
    <h3>基础操作</h3>
    <ul>
        <li>右键单击目录节点，新增或删除卷章。</li>
        <li>左键双击目录节点，修改卷章名称。</li>
    </ul>
    
    <h3>快捷键操作(写作界面)</h3>
    <ul>
        <li><strong>Ctrl+N</strong> 新建章节</li>
        <li><strong>Ctrl+Alt+N</strong> 新建卷</li>
        <li><strong>Ctrl+M</strong> 添加书签</li>
        <li><strong>Ctrl+E</strong> 导出 EPUB 文件</li>
        <li><strong>Ctrl+T</strong> 导出 txt 文件</li>
        <li><strong>Ctrl+S</strong> 保存全部修改</li>
        <li><strong>Ctrl+Alt+S</strong> 保存当前章节</li>
    </ul>
</div>
  </el-dialog>

  <el-dialog
    v-model="dialog_about"
    title="关于"
    :style="{ minWidth: '500px', maxWidth: '800px' }"
  >

    <ul>
      <li>版本号: 1.0.0 </li>
      <li>本软件遵循<a href="https://www.gnu.org/licenses/agpl-3.0.html" target="_blank">AGPL</a>开源协议</li>
      <li>访问github获取<a href="https://github.com/001-person/BookHub" target="_blank">源代码</a></li>
    </ul>

  </el-dialog>

  </div>
</template>
  
  <script>
  import { eventBus } from '../event-bus.js';

    export default {
        data() {
        return {
            activeIndex2: '2',
            dialog_help: false,
            dialog_about: false
        };
        },

        methods: {

          exit_app() {
            window.pywebview.api.exitApp();
              
          },

          change_theme(){
            const currentTheme = document.documentElement.getAttribute('data-theme');
            if (currentTheme === 'light') {
              document.documentElement.setAttribute('data-theme', 'dark');
            } else {
              document.documentElement.setAttribute('data-theme', 'light');
            }
          },
            writePage() {
              eventBus.emit('write', false);
                
            },
            write_bookshelf(){
              eventBus.emit('writeshelf', false);

            },

            data_statistics(){
              eventBus.emit('data_statistics', false);
            },
            readPage() {
              eventBus.emit('read', false);
                
            },


        }        
        
    }
  </script>

  <style scoped>
    .el-menu {
      background-color: var(--menu-bg-color) !important;
      color: var(--menu-font-color) !important;
      border-bottom: 0px !important;
    }

    .el-menu .el-submenu__title,
    .el-menu .el-menu-item {
      /* background-color: var(--submenu-bg-color) !important; */
      color: var(--submenu-font-color) !important;
    }

    .el-menu .el-submenu__title:hover,
    .el-menu .el-menu-item:hover {
      background-color: var(--hover-bg-color) !important;
      color: var(--hover-font-color) !important;
    }

    .custom-sub-menu :deep(.el-sub-menu__title) {
      color: var(--menu-font-color) !important; /* 文字颜色 */
    }

    .custom-sub-menu :deep(.el-sub-menu__title:hover) {
      background-color: var(--hover-bg-color) !important; /* 鼠标悬浮时的背景色 */
      color: var(--hover-font-color) !important;
    }

    li {
            margin-bottom: 10px; /* 调整间距 */
        }

    
  </style>