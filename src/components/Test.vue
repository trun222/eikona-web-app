<template>
  <div class="eikona-company-gradient pa-4">
    <v-container class="pa-5">
      <v-row class="bg pa-3">
        <v-col>
          <h1 class="ma-2">Files</h1>

          <v-row> 
            <file v-for="file in files" :key="file.fileName" :fileName="file.fileName" :src='file.src' :type="file.type" />   
          </v-row>

        </v-col>
      </v-row>
    </v-container>

    <!-- <eikona-footer></eikona-footer> -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import EikonaFooter from "./common/EikonaFooter.vue";
import File from "./common/File.vue";

export default Vue.extend({
  name: "Test",

  components: { File},

  data: () => ({
    files: [
      {
        type: 'folder',
        fileName: 'Wedding Photos 2019',
      }, 
      {
        type: 'folder',
        fileName: 'Red River Gorge Photos 2019',
      },
      {
        type: 'image/gif',
        fileName: 'Test.gif',
        src: 'https://eikona-local.s3.us-west-000.backblazeb2.com/fake_file_name.jpg'
      },
      {
        type: 'file/pdf',
        fileName: 'Test.pdf',
        src: 'https://eikona-local.s3.us-west-000.backblazeb2.com/test_pdf.png'
      },
      {
        type: 'file/docx',
        fileName: 'Test.docx',
        src: 'https://eikona-local.s3.us-west-000.backblazeb2.com/docx_test.png'
      },
      {
        type: 'file/xlsx',
        fileName: 'Test.xlxs',
        src: 'https://eikona-local.s3.us-west-000.backblazeb2.com/xlsx_test.png'
      }
    ]
  }),
  methods: {
    truncate(fileName: string): string {
      return fileName.length > 20 ? fileName.slice(0, 20) + '...' : fileName;
    }
  }
});
</script>

<style lang="scss">
@import '@/styles/colors.scss';

.bg {
  background: white;
}

.fileName {
  font-size: 11px;
  width: 50px;
}
</style>
