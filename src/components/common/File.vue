<template>
  <div class="File ma-2">
    <div>
      <v-icon v-if="type !== 'image'" :class="iconColor" x-large>{{ icon }}</v-icon>
      <v-img v-if="type === 'image'" class="image mb-1" :src="src" aspect-ratio="16/9" max-width="150" contain eager/>
    </div>
    <div :class="{
      compact: type !== 'image',
      large: type === 'image'
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

.compact {
  font-size: 11px;
  width: 50px;
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
</style>
