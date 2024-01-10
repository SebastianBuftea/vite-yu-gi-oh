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
    <div class="container">
        <div class="row d-flex justify-content-center text-center">
            <div class="width_5 m-1 my-2 " v-for= "(card, index) in store.CardList" :key="index" >
                <img :src="card.card_images[0].image_url_small" alt="" >
                <div>{{card.name}}</div>
                <div>{{card.archetype}}</div>
            </div>
        </div>
        
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/generals.scss' as *;
@use '../styles/partials/variables' as *;

.container {
    background-color: white;
    padding: 20px;

    .width_5 {
        width: calc(100% / 5 - 20px);
        border: 1px solid black;
        background-color: $orange_color;
        padding: 0;

        img {
            width: 100%;
        }
    }

}
</style>