<template>
  <div>
    <h1>Event Listing</h1>
    <EventCard v-for="(event, index) in events" :key="index" :event="event" />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService'
export default {
  data() {
    return {
      events: []
    }
  },
  components: {
    EventCard
  },

  async created() {
    const result = await EventService.getEvents()
    this.events = result
  }
}
</script>

<style scoped></style>
