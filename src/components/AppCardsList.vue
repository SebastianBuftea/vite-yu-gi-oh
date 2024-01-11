<script>

import { store } from '../store.js'
import SingleCard from './SingleCardApp.vue'

export default {
    name: 'AppCardsList',
    components: {
        SingleCard
    },

    data() {
        return {
            store
        }
    },

}
</script>

<template lang="">
    <div class="container">
        <div class="row text-center">
            <div class=" d-flex flex-wrap justify-content-center">
                <SingleCard  v-for= "(card, index) in store.CardList" :key="index" :card="card" :index="index" />
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
}
</style>