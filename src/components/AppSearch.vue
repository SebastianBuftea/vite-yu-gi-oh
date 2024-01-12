<script>
import { store } from '../store.js'

export default {
    name: 'AppSearch',

    data() {
        return {
            store,
        }
    },
}
</script>

<template lang="">
    <div class="container my-2 p-0">

        <select name="" id="filter"  class="" v-model="store.searchArchetype" @change="$emit('filter_cards')" >
            <option value="" selected >Select archetype</option>
            <option v-for="archetype, index in store.archetypeArray" :key="index" :value="archetype.archetype_name">
                {{archetype.archetype_name}}
            </option>
        </select>
        
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/generals.scss' as *;
@use '../styles/partials/variables' as *;
</style>