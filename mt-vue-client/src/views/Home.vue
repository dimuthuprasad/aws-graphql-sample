<template>
  <div class="home">
    <AppointmentList msg="Vuex state"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AppointmentList from '@/components/appointment-list.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'home',
  components: {
    AppointmentList,
  },
});
</script>
