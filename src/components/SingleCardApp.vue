<script>
export default {
    name: 'SingleCard',
    props: {
        card: Object

    }
}
</script>

<template lang="">

    <div class="width_5 m-1 my-2">
        <img :src="card.card_images[0].image_url_small" alt="" >
        <div class=" my-2 white_text">{{card.name}}</div>
        <div class=" my-2">{{card.archetype}}</div> 
     </div>  

</template>

<style lang="scss" scoped >
@use '../styles/generals.scss' as *;
@use '../styles/partials/variables' as *;

.width_5 {
    width: calc(100% / 5 - 20px);
    background-color: $orange_color;
    padding: 0;

    img {
        width: 100%;
    }

    .white_text {
        color: $white_color;
        font-weight: bolder;
        text-transform: uppercase;
    }
}
</style>