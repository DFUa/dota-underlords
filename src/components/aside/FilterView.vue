<template>
  <aside>
    <ul class="list-view">
      <filter-item
        state="alliances"
        v-for="(alliance, index) in alliances"
        :key="index"
        :valueName="alliance"
        :imagePath="{folder: 'alliance'}"
        @checked="allianceUpdate"></filter-item>
    </ul>
    <ul class="list-view hero-view">
      <filter-item
        objectValue="id"
        state="heroes"
        v-for="(hero, index) in checkedHero"
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
import { State, Getter, Action } from 'vuex-class';

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
  @Getter('alliances', { namespace: 'field' }) public checkedAlliances?: string[];

  @Action('addAlliance', {namespace: 'field'})
  public addAlliance!: (alliance: string) => void;
  @Action('removeAlliance', {namespace: 'field'})
  public removeAlliance!: (alliance: string) => void;
  @Action('addHero', {namespace: 'field'})
  public addHero!: (hero: string) => void;
  @Action('removeHero', {namespace: 'field'})
  public removeHero!: (hero: string) => void;

  public checkedHero: Hero[] = [];

  public allianceUpdate(event: boolean, name: string): void {
    event ? this.addAlliance(name) : this.removeAlliance(name);

    this.checkedHero = this.heroes;

    if ( this.checkedAlliances!.length ) {
      this.checkedHero = this.checkedHero.filter((hero: any) => {
        return hero.alliance.some((alliance: string): boolean => {
          return this.checkedAlliances!.includes(alliance);
        });
      });
    }
  }

  public heroUpdate(event: boolean, name: any): void {
    event ? this.addHero(name) : this.removeHero(name);
  }

  public created() {
    this.checkedHero = this.heroes;
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
    grid-template-columns: repeat(auto-fill, minmax(32px, 1fr));
    gap: 5px;
    margin-bottom: 15px;
    &.hero-view {
      grid-template-columns: repeat(auto-fill, minmax(32px, 1fr));
    }
  }
}
</style>