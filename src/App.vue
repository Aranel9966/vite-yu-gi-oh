<script>
import {store} from "./store.js"
import AppBook from "./components/AppBook.vue";
export default{
  data(){
    return{
      store,
    }
  },
  components:{
    AppBook
  }
  
}
</script>

<template>
  <div>
    <AppBook></AppBook>
    
  </div>
</template>

<style scoped>

</style>
