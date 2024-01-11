<script>
import AppSearchVue from './AppSearch.vue';
import AppCardsList from './AppCardsList.vue'
import { store } from '../store.js'
import axios from 'axios';


export default {
    name: 'AppMain',
    components: {
        AppCardsList,
        AppSearchVue
    },

    data() {
        return {
            store
        }
    },
    methods: {
        getCardList() {
            axios.get(this.store.endpoint).then((response) => {
                this.store.CardList = response.data.data
            })

        },
        getArchetyList() {
            axios.get(this.store.endpointArchetype).then((response) => {
                this.store.archetypeArray = response.data
            })
        }
    },
    created() {
        this.getCardList()
        this.getArchetyList()
    },
}

</script>

<template lang="">
    <main class="p-2">
        <AppSearchVue />
        <AppCardsList />
    </main>
</template>

<style lang="scss" scoped>
@use '../styles/generals.scss' as *;
@use '../styles/partials/variables' as *;

main {
    background-color: $orange_color;
}
</style>