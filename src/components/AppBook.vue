<script>
import { store } from '../store';
import axios from 'axios';
import AppHeader from './AppHeader.vue';
export default{
    name: "AppBook",
    data() {
        return {
            store,
            visible:false
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

        },
        effect(){
            if(this.visible==true){
                this.visible=false
            }else{
                this.visible=true
            }
        }
    },
    components: { AppHeader }
}
</script>
<template>
    
    <AppHeader @serchCard="serch()"></AppHeader>
    
    <div class="card-list">

        <div @click="effect(index)" v-if="store.cards.length"  v-for="(card,index) in store.cards"  class="card">
            <img :src="card.card_images[0].image_url" alt="">
            <div :class="this.visible==false?'no-display':'display'" >
                {{ card.desc }}
            </div>
        </div>
        <div v-else>
            <span>Loading...</span>
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
    .card img:hover{
        cursor: pointer;
    }
    .card img{
        display: flex;
        flex-flow: row wrap;
        height: 150px;
        object-fit: cover;
        margin: 10px;
    }
    .display{
        font-size: x-small;
        width: 120px;
        height: 80px;
        overflow-y: auto;
    }
    .no-display{
        display: none;
    }
</style>