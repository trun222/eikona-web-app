<template>
  <div class="FileView pa-3">
    <h1>File View</h1>

    <v-img contain eager :src="src" max-height="800" max-width="600"></v-img>

    {{ src }}
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import pdf from 'vue-pdf';

export default Vue.extend({
  name: "FileView",
  // components: {
  //   pdf
  // },
  props: ['fileName', 'type', 'src'],
  data: () => ({}),
  mounted() {
    console.log(this.src);
    console.log(this.fileName);
  },
  methods: {

  }
});
</script>

<style lang="scss">
@import '@/styles/colors.scss';

.FileView {

}


</style>
