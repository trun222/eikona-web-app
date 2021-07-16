<template>
  <div class="File pa-3">
    <div>
      <v-icon v-if="type === 'folder'" :class="iconColor">mdi-folder</v-icon>
      <v-img v-if="type !== 'folder'" class="image mb-1" :src="src" aspect-ratio="16/9" max-width="150" contain eager/>
    </div>
    <div :class="{
      compact: type === 'folder',
      large: type !== 'folder'
    }">
      {{ truncate(fileName) }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "File",
  props: ['iconColor', 'icon', 'fileName', 'type', 'src'],
  data: () => ({}),
  methods: {
    truncate(fileName: string): string {
      return fileName.length > 20 ? fileName.slice(0, 20) + '...' : fileName;
    }
  }
});
</script>

<style lang="scss">
@import '@/styles/colors.scss';

.File {
  cursor: pointer;

  &:hover {
    background: #d3d3d3;
  }

  .v-icon {
    font-size: 78px !important;
  }

  .compact {
    text-align: center;
    font-size: 11px;
    width: 75px;
  }

  .large {
    text-align: center;
    font-size: 11px;
    width: 100px;
  }

  .image {
    height: 75px;
    width: 100px;
  }
}


</style>
