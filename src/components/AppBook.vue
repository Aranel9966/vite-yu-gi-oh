<script>
import { store } from '../store';
import axios from 'axios';
export default{
    name:'AppBook',
    data(){
        return{
            
            store,
        }
    },
    //al caricamento della pag chiamata axios
    created(){
        axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0').then((res)=>{
            console.log(res.data.data);
            this.store.cards = res.data.data;
        })
    }
}
</script>
<template>
    <div class="card-list">

        <div v-for="card in store.cards" class="card">
            <img :src="card.card_images[0].image_url" alt="">
        </div>
                
    </div>
    </template>
<style>
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