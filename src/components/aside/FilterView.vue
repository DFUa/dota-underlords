<template>
  <aside>
    <ul class="list-view">
      <filter-item
        v-for="(alliance, index) in alliances"
        :key="index"
        :valueName="alliance"
        :imagePath="{folder: 'alliance'}"
        @checked="allianceUpdate"></filter-item>
    </ul>
    <ul class="list-view hero-view">
      <filter-item
        objectValue="id"
        v-for="(hero, index) in heroes"
        :key="index"
        :valueName="hero"
        :imagePath="{
          folder: 'hero',
          prefix: 'npc_dota_hero_'
        }"
        @checked="heroUpdate"></filter-item>
    </ul>
  </aside>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Getter, Action, Mutation } from 'vuex-class';

import { Hero, Alliance, Field } from '@/types';
import FilterItem from './FilterItem.vue';

@Component({
  name: 'FilterView',
  components: {
    FilterItem,
  },
})
export default class FilterView extends Vue {
  @State('field') public field?: Field;
  @Getter('alliances', { namespace: 'alliances' }) public alliances?: any;
  @Getter('heroes', { namespace: 'heroes' }) public heroes?: any;

  @Action('addAlliance', {namespace: 'field'})
  public addAlliance!: (alliance: string) => void;
  @Action('removeAlliance', {namespace: 'field'})
  public removeAlliance!: (alliance: string) => void;
  @Action('addHero', {namespace: 'field'})
  public addHero!: (alliance: string) => void;
  @Action('removeHero', {namespace: 'field'})
  public removeHero!: (alliance: string) => void;

  public allianceUpdate(event: boolean, name: string): void {
    event ? this.addAlliance(name) : this.removeAlliance(name);
    // this.heroList = this.heroes;

    // if ( this.chekedFilter.length ) {
    //   this.heroList = this.heroList.filter((hero: any) => {
    //     return hero.alliance.some((alliance: string): boolean => {
    //       return this.chekedFilter.includes(alliance);
    //     });
    //   });
    // }
  }

  public heroUpdate(event: boolean, name: any): void {
    event ? this.addHero(name) : this.removeHero(name);
  }
}
</script>

<style lang="scss">
aside {
  max-width: 350px;
  width: 100%;
  .list-view {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30px, 1fr));
    gap: 5px;
    margin-bottom: 15px;
    &.hero-view {
      grid-template-columns: repeat(auto-fill, minmax(32px, 1fr));
    }
  }
}
</style>