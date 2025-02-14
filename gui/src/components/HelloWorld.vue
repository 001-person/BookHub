<template>
  
  <div class="mainView">
    
      <router-view ></router-view>
  </div>

</template>

<script>
  import { eventBus } from '../event-bus.js';
  
  export default {
    data() {
    return {
      
      startTime:[],
      startData:[],
    }
  },

  provide(){
    return {
      startTime:this.startTime,
      startData:this.startData,
    }
  },

  beforeDestroy() {
    this.startTime = [];
    this.startData = [];
  },

  mounted() {
    // eventBus.on('write', message => {
      
    //   this.$router.push('/write-page')
    // });
    eventBus.on('writeshelf', message => {
      
      this.$router.push({name: 'writeShelf',});
    });
    eventBus.on('data_statistics', message => {
      
      this.$router.push({name: 'dataStatistics',});
    });
    // eventBus.on('read', message => {
      
    //   this.$router.push('/read-page')
    // });


    eventBus.on('start-write',book_data => {
      let index = this.startData.findIndex(item => item.id === book_data.id);
      if (index === -1){

        this.startData.push(book_data);
      }

      let index2 = this.startTime.findIndex(item => item.id === book_data.id);
      if (index2 === -1){
        let now_time = new Date();
        this.startTime.push({
          id: book_data.id,
          start_time:now_time
        });
      }

    });
  },
    methods: {
      // writePage() {
      //   this.isshow = false
      //   // 使用 router.push 进行页面跳转
      //   this.$router.push('/write-page')
        
      // },

      // readPage() {
      //   this.isshow = false
      //   // 使用 router.push 进行页面跳转
      //   this.$router.push('/read-page')
        
      // }

    }
  }

</script>


<style scoped>

/* a {
  color: #b94254;
} */
.start {
  /* background-color: rgb(177, 167, 191); */
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  height: 100vh; /* 或者设置一个固定的高度 */
}

.mainView {
  position: relative;
  background-color: rgb(12, 242, 242);
}
.page-turn{
  /* background-color: #060606; */
  position: relative;
  width: 100%;
  height: 100%;
  /* overflow: auto; */
}

</style>
