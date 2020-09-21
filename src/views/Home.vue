<template>
  <div class="content">
    <filter-view></filter-view>
    <field-view></field-view>
    <info-view></info-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import FilterView from '../components/aside/FilterView.vue';
import FieldView from '../components/field/FieldView.vue';
import InfoView from '../components/info/InfoView.vue';

@Component({
  name: 'Home',
  components: {
    FilterView,
    FieldView,
    InfoView,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss">
  .content {
    padding: 0 15px;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 15px;
  }
</style>