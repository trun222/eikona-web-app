<template>
  <div class="eikona-company-gradient pa-4">
    <v-container class="pa-5">
      <v-row justify="center">
        <h1 class="my-3 white--text default-letter-spacing">Test</h1>
      </v-row>

      <v-row class="bg pa-3">
        <v-col>
          <h1 class="ma-2">Files</h1>

          <v-row>
            <file type="folder" icon="mdi-folder" fileName="Wedding Photos 2019" />
            <file type="folder" icon="mdi-folder" fileName="Wedding Photos 2019" />
            <file type="folder" icon="mdi-folder" fileName="Wedding Photos 2019" />
            <file type="folder" icon="mdi-folder" fileName="Wedding Photos 2019" />
            <file type="folder" icon="mdi-folder" fileName="Wedding Photos 2019" />
            <file type="folder" icon="mdi-folder" fileName="Wedding Photos 2019" />
          </v-row>


          <v-row>
            <file type="folder" icon="mdi-folder" fileName="Wedding Photos 2019" />
            <file type="folder" icon="mdi-folder" fileName="Wedding Photos 2019" />
            <file type="folder" icon="mdi-folder" fileName="Wedding Photos 2019" />
            <file type="folder" icon="mdi-folder" fileName="Wedding Photos 2019" />
            <file type="folder" icon="mdi-folder" fileName="Wedding Photos 2019" />
            <file type="folder" icon="mdi-folder" fileName="Wedding Photos 2019" />
          </v-row>


          <v-row>
            <file fileName="Wedding Photos 2019" src='https://eikona-local.s3.us-west-000.backblazeb2.com/fake_file_name.jpg' />
            <file fileName="Test.jpg" src='https://eikona-io.s3.us-west-000.backblazeb2.com/images/1005551_10208222644714595_3031512642463512854_n_10208222644714595.jpg' />
            <file fileName="Test.pdf" src='https://eikona-local.s3.us-west-000.backblazeb2.com/test_pdf.png' />    
            <file fileName="Document.docx" src='https://eikona-local.s3.us-west-000.backblazeb2.com/docx_test.png' />   
          </v-row>

          <v-row>
            <file fileName="Excel.xlsx" src='https://eikona-local.s3.us-west-000.backblazeb2.com/xlsx_test.png' />
          </v-row>
  
        </v-col>
      </v-row>
    </v-container>

    <eikona-footer></eikona-footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import EikonaFooter from "./common/EikonaFooter.vue";
import File from "./common/File.vue";

export default Vue.extend({
  name: "Test",

  components: {EikonaFooter, File},

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

.bg {
  background: white;
}

.fileName {
  font-size: 11px;
  width: 50px;
}
</style>
