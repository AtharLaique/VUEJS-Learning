<template>
    <div>
        <h1>Event List</h1>
        <!-- Step 2 Pass Params -->
        <div v-for="(event, index) in events " :key="index">
            <p>{{ event.title }}</p>
            <router-link :to="{name:'EventShow', params:{ id: event.id}}">detail</router-link>
        </div>
    </div>
</template>
<script>
    import EventService from '../services/apis/EventService';
    export default {
        data () {
            return {
                events: []
            }
        },
        created () {
            EventService.getEvents()
            .then((res)=> {
                this.events = res.data;
            })
            .catch((error) => {
                console.log(error)
            })
        }
    }
</script>
