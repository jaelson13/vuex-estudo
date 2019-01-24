<template>
    <div class="main">
        <FormItem/> 
        <ListItens/>
    </div>
</template>

<script>
import FormItem from './FormItem.vue'
import ListItens from './ListItens.vue'
export default {
    name: 'main-conteudo',
    components: {FormItem, ListItens} 
}
</script>

<style>

</style>
