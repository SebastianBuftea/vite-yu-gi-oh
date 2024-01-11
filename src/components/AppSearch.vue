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
    <div>
        <label for="filter" class="control-label"> Status</label>
        <option value="" selected>Select archetype</option>
        <option v-for="archetype, index in store.archetypeArray" :key="index" value="archetype">
        {{archetype}}
        </option>
        
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/generals.scss' as *;
@use '../styles/partials/variables' as *;
</style>