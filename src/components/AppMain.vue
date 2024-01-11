<script>
import AppCardsList from './AppCardsList.vue'
import { store } from '../store.js'
import axios from 'axios';

export default {
    name: 'AppMain',
    components: {
        AppCardsList
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
                this.store.archetypeArray = response.data.data.archetype

            })
        }
    },
    created() {
        this.getCardList()
    },
}

</script>

<template lang="">
    <main class="p-2">
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