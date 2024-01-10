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

main {
    background-color: orange;
}
</style>