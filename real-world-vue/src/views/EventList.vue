<template>
  <div>
    <h1>Event Listing</h1>
    <NavBar />
    <EventCard />
    <BaseIcon name="users" />
    <BaseInput />
    <BaseButton />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'

export default {
  components: {
    EventCard
  }
}
</script>

<style scoped></style>
