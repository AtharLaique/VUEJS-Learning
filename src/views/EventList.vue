<template>
    <div>
        <h1>Event List</h1>
        <!-- Step 2 Pass Params -->
        <div class="card-list" v-for="(event, index) in events " :key="index">
            <EventCard :id="event.id" :title="event.title" :body="event.body"/>
        </div>
    </div>
</template>
<script>
    import EventService from '../services/apis/EventService';
    import EventCard from '@/components/EventCard.vue';
    export default {
        components : {
           EventCard,
        },
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

<style scoped>
    .card-list {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
</style>