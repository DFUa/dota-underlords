<template>
  <div class="field">
    <field-item
      v-for="(hero, index) in field.heroes"
      :key="index"
      :hero="hero">
    </field-item>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State} from 'vuex-class';

import { Field } from '@/types';
import FieldItem from './FieldItem.vue';

@Component({
  name: 'FieldView',
  components: {
    FieldItem,
  },
})
export default class FieldView extends Vue {
  @State('field') public field?: Field;
}
</script>

<style lang="scss" scoped>
.field{
  align-self: center;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
}
</style>
