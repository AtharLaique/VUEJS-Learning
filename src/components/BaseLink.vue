<template>
    <span class="link">
        <router-link :to="{name:'EventShow', params:{ id: id}}">{{ text }}</router-link>   
    </span>
</template>

<script>
    export default {
        props : ['id', 'text'],
        data() {
            return {}
        }
    }
</script>

<style scoped>
    .link > a{
     text-decoration: none;
     padding: 10px;
     color: white;
     background-color: crimson;
     border-radius: 12px;
    }
</style>