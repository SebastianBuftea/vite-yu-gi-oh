<script>
import axios from 'axios';
import { store } from '../store.js'

export default {
    name: 'AppCardsList',
    data() {
        return {
            store
        }
    },
    methods: {
        getCardList() {
            axios.get(this.store.endpoint).then((response) => {
                this.store.CardList = response.data.data
                console.log(this.store.CardList)
            })
        }
    },
    created() {
        this.getCardList()
    },
}
</script>

<template lang="">
    <div class="container bg-white">
        <div class="row">
            <div class="width_5  " v-for= "(card, index) in store.CardList" :key="index" >
                <img :src="card.card_images[0].image_url_small" alt="" class="img-fluid">
                <div>{{card.name}}</div>
                <div>{{card.archetype}}</div>
            </div>
        </div>
        
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/generals.scss' as *;

.width_5 {
    width: calc(100% / 5);
    background-color: white;
    border: 1px solid black;
}
</style>