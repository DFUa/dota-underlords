<template>
  <div class="info">
    <info-item
      v-for="(value, alliance, index) in countAlliances"
      :key="index"
      :alliance="alliance"
      :value="value"></info-item>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';

import InfoItem from './InfoItem.vue';

@Component({
  name: 'InfoView',
  components: {
    InfoItem,
  },
})
export default class InfoView extends Vue {
  @Getter('countAlliances', { namespace: 'field' }) public countAlliances?: any;
}
</script>

<style lang="scss" scoped>
.info{
  display: grid;
  gap: 10px;
  align-content: start;
}
</style>
