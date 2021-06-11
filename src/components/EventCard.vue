<template>
    <div class="card">
        <h4>{{ title }}</h4>
        <p>{{ body }}</p>
        <router-link :to="{name:'EventShow', params:{ id: id}}">Click</router-link>
    </div>
</template>

<script>
    export default {
        props: ['id','title', 'body'],
        data () {
            return {
            }
        }
    }
</script>

<style scoped>
    .card {
        display: inline-block;
        margin: 20px;
        border-radius: 12px;
        background-color: white;
        padding: 10px;
        border:1px solid silver;
        width: 400px;
    }
</style>