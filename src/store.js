import { reactive } from 'vue';

export const store = reactive({
    endpointArchetype: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    endpoint: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    CardList: [],
    archetypeArray: [],
    searchArchetype: ""
})
