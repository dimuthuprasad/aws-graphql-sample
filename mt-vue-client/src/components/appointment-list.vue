
<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';
  import { State, Action, Getter } from 'vuex-class';
  import { IAppointmentState } from '@/store/states/IAppointmentState';


  const namespace = 'appointmentState';
  @Component({
  })
  export default class AppointmentList extends Vue {
    @State('appointmentState') public appointmentState: IAppointmentState;
    @Action('fetchAppointments', { namespace }) public fetchAppointments: any;
    @Getter('isLoading', { namespace }) public isLoading: boolean;
    @Getter('appointments', { namespace }) public appointments: string;
    @Prop({required : true}) private msg!: string;

    
  }
</script>

<style lang="scss" src="./appointment-list.scss"></style>
<template src="./appointment-list.template.html"></template>