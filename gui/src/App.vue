<script>
import HelloWorld from './components/HelloWorld.vue'
import setting_view from './components/setting_view.vue';
import { eventBus } from './event-bus';

export default {
  components: {
    HelloWorld,
    setting_view,
  },
  data() {
    return {
      setting_collapse: true,
      menu_height:'auto',
    }
  },

  mounted() {
    this.menu_height = document.getElementById("menu_view").offsetHeight + "px";
    document.getElementById("menu_view").style.height = this.menu_height;

    
  },

  methods: {
    menu_collapse() {
      
      var element = document.getElementById("menu_view");
      if (element.style.height === "0px") {
        element.style.height = this.menu_height;
        element.style.marginBottom = "10px";

      } else {
        element.style.height = "0px";
        element.style.marginBottom = "0px";
      }

    },
  }

}
</script>


<template>
  <div id="app">
    <div @click="menu_collapse" style="height: 10px; "></div>
    <div class="setting">
      <!-- <div @click="menu_collapse" style="height: 10px; background-color: var(--color-background-bottom-layer);"></div> -->
      <setting_view id="menu_view"/>
    </div>
    <HelloWorld class="hello" />
  </div>
</template>

<style scoped>

#app {
  position: relative;
  padding: 0px 10px 10px 10px;
  box-sizing: border-box;
  height: 100vh;
  background-color: var(--color-background-bottom-layer);
  display: flex;
  flex-direction: column;

}


.setting {
  
  background-color: var(--color-background-header);
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
}

#menu_view {
  transition: height 0.5s ease;
  margin-bottom: 10px;
}

.hello {
  
  flex: 1 1 auto;
  
  min-height: 0;
  background-color: var(--color-background-mainview);
}
</style>
