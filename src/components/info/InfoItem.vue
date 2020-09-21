<template>
  <div class="info-alliance">
    <div class="info-alliance-img">
      <img :src="createallianceImage(alliance)" :alt="alliance">
    </div>
    <div class="allince-level">
      <div
        class="allince-level-count"
        v-for="(levelIndex) in getLevelCount(alliance)"
        :key="levelIndex">
        <span
          v-for="(unitIndex) in getUnitsCount(alliance)"
          :key="unitIndex"
          :class="{
            'allince-units-count': true,
            'active': calcActiveUnit(levelIndex, alliance, unitIndex),
            }"
            :style="[calcActiveUnit(levelIndex, alliance, unitIndex) ? {'background-color': getAllianceColor(alliance)} : 'lightgrey']">
        </span>
      </div>
    </div>
    <div>
      {{alliance}}: {{value}}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Getter } from 'vuex-class';

@Component({
  name: 'InfoItem',
})
export default class InfoItem extends Vue {
  @Prop() protected alliance!: string[];
  @Prop() protected value!: string | number;

  @Getter('allianceInfo', { namespace: 'alliances' }) private allianceInfo?: any;
  @Getter('allianceColor', { namespace: 'field' }) private allianceColor?: any;

  private createallianceImage(alliance: string): string {
    return require(`@/img/alliance/${alliance}.png`);
  }

  private getLevelCount(alliance: string): number {
    return this.allianceInfo[alliance].level_count;
  }

  private getUnitsCount(alliance: string): number {
    return this.allianceInfo[alliance].units_per_level;
  }

  private getAllianceColor(alliance: string): string {
    return this.allianceColor[alliance];
  }

  private calcActiveUnit(levelIndex: number, alliance: string, unitIndex: number): boolean {
    return this.value >= (levelIndex - 1) * this.getUnitsCount(alliance) + unitIndex;
  }
}
</script>

<style lang="scss" scoped>
.info-alliance {
  display: grid;
  grid-template-columns: 50px 1fr 5fr;
  .info-alliance-img {
    img {
      display: block;
      width: 100%;
    }
  }
  .allince-level {
    display: grid;
    grid-template-columns: repeat(3, 10px);
    gap: 5px;
    .allince-level-count {
      display: grid;
      gap: 2px;
      border-radius: 5px;
      overflow: hidden;
      .allince-units-count {
        background-color: lightgrey;
        &.active {
          background-color: lightblue;
        }
      }
    }
  }
}
</style>
