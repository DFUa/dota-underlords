<template>
  <li class="fitler-item">
    <input
      type="checkbox"
      name="filter-item"
      :value="name"
      :id="name"
      @change="emitStatus($event.target.checked)">
    <label :for="name">
      <img :src="createImagePath(name)" :alt="name">
    </label>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'FilterItem',
})
export default class FilterItem extends Vue {
  @Prop() protected valueName!: any;
  @Prop(String) protected objectValue!: string;
  @Prop() protected imagePath!: any;

  private name?: string;

  private createImagePath(name: string): string {
    const folder = this.imagePath.folder;
    const prefix = this.imagePath.prefix;

    return require(`@/img/${folder}/${(prefix ? prefix : '') + name}.png`);
  }

  private emitStatus(status: boolean): void {
    const returnedValue = this.objectValue ? this.valueName : this.name;

    this.$emit('checked', status, returnedValue);
  }

  private init() {
    if (this.objectValue) {
      this.name = this.valueName[this.objectValue];
    } else {
      this.name = this.valueName;
    }
  }

  private created() {
    this.init();
  }

  private beforeUpdate() {
    this.init();
  }
}
</script>

<style lang="scss" scoped>
.fitler-item {
  input[type="checkbox"] {
    display: none;
    &:checked + label {
      background-color: lightcyan;
    }
  }
  label {
    display: block;
    border: 1px solid lightgrey;
    border-radius: 5px;
    cursor: pointer;
    transition: all .3s;
    img {
      display: block;
      width: 100%;
    }
    &:hover {
      background-color: lightcyan;
    }
  }
}
</style>