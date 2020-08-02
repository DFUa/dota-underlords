<template>
  <div class="hero-board">
    <div class="board-img">
      <img :src="createHeroImage(hero.id)" :alt="hero.name">
    </div>
    <ul class="hero-alliance">
      <li v-for="(alliance, index) in hero.alliance" :key="index">
        <img :src="createallianceImage(alliance)" :alt="alliance">
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Action } from 'vuex-class';

@Component({
  name: 'FieldItem',
})
export default class FieldItem extends Vue {
  @Prop() protected hero!: any;

  private createHeroImage(name: string): string {
    return require(`@/img/hero/npc_dota_hero_${name}.png`);
  }

  private createallianceImage(alliance: string): string {
    return require(`@/img/alliance/${alliance}.png`);
  }
}
</script>

<style lang="scss" scoped>
.hero-board {
  background-color: lightgrey;
  cursor: pointer;
  &:nth-child(2n) {
    background-color: grey;
  }
}
img{
  display: block;
  width: 100%;
}
.hero-alliance {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, 33.33%);
  justify-content: center;
  li {
    background-color: lightcyan;
  }
}
</style>
