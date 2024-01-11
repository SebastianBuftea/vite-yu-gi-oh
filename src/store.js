import { reactive } from 'vue';

export const store = reactive({
    endpoint: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
    CardList: [],
    archetypeArray: [],
})
