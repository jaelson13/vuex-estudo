<template>
    <div class="main">
        <FormItem @addPerson="addToArray" /> 
        <ListItens :persons="persons"/>
    </div>
</template>

<script>
import FormItem from './FormItem.vue'
import ListItens from './ListItens.vue'
export default {
    name: 'main-conteudo',
    components: {FormItem, ListItens},
    data(){
        return {
            persons: []
        }
    },
    methods:{
        addToArray(person){
            this.persons = [...this.persons, person]       
        }
    }   
}
</script>

<style>

</style>
