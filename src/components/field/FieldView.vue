<template>
  <div class="field">
    <div>a: {{field.alliances}}</div>
    <div>h: {{field.heroes}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State} from 'vuex-class';

import { Field } from '@/types';

@Component({
  name: 'FieldView',
})
export default class FieldView extends Vue {
  @State('field') public field?: Field;
}
</script>

<style lang="scss" scoped>
  .field{
    margin-left: 15px;
  }
</style>
