<template>
    <div class="card">
        <h4>{{ title }}</h4>
        <p>{{ body }}</p>
        <BaseLink text="click" :id="id" />
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
        height: auto;
    }
</style>