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

            let endpoint = store.endpoint
            if (store.searchArchetype !== '') {
                endpoint += `&archetype=${store.searchArchetype}`

            }
            axios.get(endpoint).then((response) => {
                this.store.CardList = response.data.data
            })

        },
        getArchetyList() {
            axios.get(this.store.endpointArchetype).then((response) => {
                this.store.archetypeArray = response.data
            })
        },
        filterCardsArchetype() {
            this.getCardList();
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
        <AppSearchVue @filter_cards="filterCardsArchetype"/>
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