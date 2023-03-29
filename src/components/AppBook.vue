<script>
import { store } from '../store';
import axios from 'axios';
import AppHeader from './AppHeader.vue';
// import * as bootstrap from 'bootstrap'
export default{
    name: "AppBook",
    data() {
        return {
            store,
        };
    },
    components:{
        AppHeader
    },
    //al caricamento della pag chiamata axios
    created() {
        axios.get(this.store.apiLink).then((res) => {
            console.log(res.data.data);
            this.store.cards = res.data.data;
        });
    },
    methods: {
        serch() {
            let apiNewString =this.store.apiLink

            if(this.store.serchType==""){
                apiNewString += `&+fname=${this.store.serchName}`
                
            }else if(this.store.serchName==''){
                apiNewString += `&+type=${this.store.serchType}`
            }else{
                apiNewString += `&type=${this.store.serchType}&fname=${this.store.serchName}`
            }
            axios.get(apiNewString).then((res) => {
            this.store.cards = res.data.data;   
            });
        }
    },
    components: { AppHeader }
}
</script>
<template>
    
    <AppHeader @serchCard="serch()"></AppHeader>
    
    <div class="card-list">

        <div v-if="store.cards.length"  v-for="card in store.cards"  class="card">
            <img :src="card.card_images[0].image_url" alt="">
        </div>
        <div v-else>
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
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