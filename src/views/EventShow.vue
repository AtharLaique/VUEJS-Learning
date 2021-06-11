<template>
  <!-- Step 3: Get route.params -->
  <div>
    <h1>{{ event.title }}</h1>
    <p>{{ event.body }}</p>
  </div>
</template>

<script>
//Step 4: Pass route params to others as props
import EventService from '../services/apis/EventService';
export default {
  props: ['id'],
  data () {
    return {
      event: {}
    }
  },
  created() {
    EventService.getEvent(this.id)
    .then((res)=> {
      this.event = res.data;
    })
    .catch((error)=> {
      console.log(error)
    })
  }
}
</script>
