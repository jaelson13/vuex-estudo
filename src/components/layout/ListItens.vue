<template>
    <section class="list">
        <ul>
            <ItemList />
            <ItemList />
            <ItemList />
            <ItemList />
        </ul>
    </section>
</template>

<script>
import ItemList from './ItemList.vue'
export default {
    name: 'list-itens',
    components: {ItemList}
}
</script>

<style>

</style>
