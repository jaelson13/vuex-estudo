<template>
    <section class="list">
        <ul>
            <ItemList v-for="person in persons" :key="person.id" :person="person"/>
            <li v-if="persons == 0">No data</li>
        </ul>
    </section>
</template>

<script>
import ItemList from './ItemList.vue'
import {mapState} from 'vuex'

export default {
    name: 'list-itens',
    components: {ItemList},
    computed: {
        ...mapState({
            persons: 'persons'
        })
    }
}
</script>

<style>

</style>
