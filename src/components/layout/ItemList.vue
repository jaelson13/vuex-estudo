<template>
    <li>
       <h4>{{person.name}}</h4>
       <a href="" @click.prevent="sendRemove"><i class="fas fa-trash-alt"></i></a>
    </li>
</template>

<script>
export default {
    name: 'item-list',
    props: ['person'],
    methods: {
        sendRemove(){
            this.$emit('removeItem', this.person)
        }
    }
}
</script>

<style>

</style>
