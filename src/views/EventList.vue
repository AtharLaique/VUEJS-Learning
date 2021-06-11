<template>
    <div>
        <h1>Event List</h1>
        <!-- Step 2 Pass Params -->
        <router-link :to="{name:'EventShow', params:{ id: 1}}">Show</router-link>
    </div>
</template>