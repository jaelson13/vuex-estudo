<template>
    <form>        
        <input v-model.trim="name" type="text" placeholder="Your name...">
        <input @click.prevent="sendPerson" type="submit" value="Add">        
    </form>
</template>

<script>
import uuidv1 from 'uuid'
export default {
    name: 'form-item',
    data(){
        return { 
            name: ''    
        }
    },
    methods: {
        sendPerson(){
            if(this.name){
                this.$emit('addPerson', {id: uuidv1(), name: this.name})
                this.name = ''
            }else{
                alert("The name field cannot be empty!!")
            }
        }
    }
}
</script>

<style>

</style>
