<template>
    <li>
       <h4>{{person.name}}</h4>
       <a href="" @click.prevent="sendRemove"><i class="fas fa-trash-alt"></i></a>
    </li>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    name: 'item-list',
    props: ['person'],
    methods: {
        ...mapActions([
            'removePerson'
        ]),
        sendRemove(){
            this.removePerson(this.person)
        }
    }
}
</script>

<style>

</style>
