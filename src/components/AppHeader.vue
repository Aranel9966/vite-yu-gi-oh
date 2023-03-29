<script>
import { store } from '../store';

export default{
    name:'AppHeader',
  data(){
    return{
      store,
    

    }
  },
  
  
}
</script>

<template>
  <div>
    <div class="top">
        <h1>YU-GI-OH</h1>
        
        <input v-model="store.serchName" type="text" placeholder="Cerca per nome">
        <select name="type" id="type" v-model="store.serchType">
            <option value=""></option>
            <option value="Spell Card">Magie</option>
            <option value="Trap Card">Trappole</option>
            <option value="Normal Monster">mostri</option>
        </select>
        <button @click="$emit('serchCard')"  >Cerca</button>

    </div>
    
  </div>
</template>

<style scoped>
    .top{
        text-align: center;
    }
    #type{
        margin: 10px;
    }
</style>