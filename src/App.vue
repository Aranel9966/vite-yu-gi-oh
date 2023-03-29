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
