<script>
import AppCardsList from './AppCardsList.vue'

export default {
    name: 'AppMain',
    components: {
        AppCardsList
    },

    data() {
        return {

        }
    }
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