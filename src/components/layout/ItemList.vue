<template>
    <li>
       <h4>{{person.name}}</h4>
       <a href=""><i class="fas fa-trash-alt"></i></a>
    </li>
</template>

<script>
export default {
    name: 'item-list',
    props: ['person']
}
</script>

<style>

</style>
