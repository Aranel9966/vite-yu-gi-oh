<script>
import { store } from '../store';
import axios from 'axios';
export default{
    name:'AppBook',
    data(){
        return{
            search:'',
            searchType:'',
            store,
        }
    },
    //al caricamento della pag chiamata axios
    created(){
        axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0').then((res)=>{
            console.log(res.data.data);
            this.store.cards = res.data.data;
            console.log(this.store.cards[13].frameType);
        })
    },
    methods:{
        
    }
}
</script>
<template>
    <div class="top">
        <h1>YU-GI-OH</h1>
        <input v-model="search" type="text" placeholder="Cerca per nome">
        
    </div>
    <div class="card-list">

        <div v-show="card.name.toLowerCase().includes(this.search.toLowerCase()) " v-if="store.cards.length"  v-for="card in store.cards" class="card">
            <img :src="card.card_images[0].image_url" alt="">
        </div>
        <div v-else>
            <h1>
                Loading...
            </h1>
        </div>
                
    </div>
    </template>
<style>
    .top{
        text-align: center;
    }
    .card-list{
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        gap: 20px;
    }
    .card img{
        display: flex;
        flex-flow: row wrap;
        height: 150px;
        object-fit: cover;
        margin: 10px;
    }
</style>