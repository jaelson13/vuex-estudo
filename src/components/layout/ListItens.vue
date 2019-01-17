<template>
    <section class="list">
        <ul>
            <ItemList v-for="person in persons" :key="person.id" :person="person"/>
            <li v-if="persons.length == 0">Não há dados</li>
        </ul>
    </section>
</template>

<script>
import ItemList from './ItemList.vue'
export default {
    name: 'list-itens',
    props: {
        persons: {
            type: Array,
            required: true,
            default: []                    
        }
    },
    components: {ItemList},
    
}
</script>

<style>

</style>
