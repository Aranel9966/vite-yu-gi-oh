<script>
import {store} from "./store.js"
import AppBook from "./components/AppBook.vue";
import AppHeader from "./components/AppHeader.vue";
export default{
  data(){
    return{
      store,
    }
  },
  components:{
    AppBook,
    // AppHeader
  }
  
}
</script>

<template>
  <div>
    <!-- <AppHeader></AppHeader> -->
    <AppBook></AppBook>
    
  </div>
</template>

<style scoped>

</style>
