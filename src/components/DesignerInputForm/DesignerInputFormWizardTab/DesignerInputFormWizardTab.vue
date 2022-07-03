<template>
  
  <v-card outlined class="d-flex flex-column">
    <v-toolbar color="white">
      <v-toolbar-title>{{ parentValue }}</v-toolbar-title>
    </v-toolbar>
    <div class="d-flex flex-row" style="height:100vh;">
        <v-tabs direction="vertical" color="primary" style="width:300px;" v-model="currentTab">
        <v-tab value="option-1" @click="onTabChange(tab)">
          <v-icon start>
            mdi-account
          </v-icon>
          Option 1
        </v-tab>
        <v-tab value="option-2" @click="onTabChange(tab)">
          <v-icon start>
            mdi-lock
          </v-icon>
          Option 2
        </v-tab>
        <v-tab value="option-3" @click="onTabChange(tab)">
          <v-icon start>
            mdi-access-point
          </v-icon>
          Option 3
        </v-tab>        
        <v-card-actions>
          <v-btn absolute left variant="tonal">Back</v-btn>
          <v-btn absolute left variant="tonal" @click="sendData()">Continue</v-btn>
        </v-card-actions>
      </v-tabs>
      <v-window v-model="tab" style="width:100vh">
        <v-window-item value="option-1">
          <v-card elevation=3 outlined>
        
              <div class="pl-4">
              <p class="text-subtitle-2">General Information</p>
              <p class="text-caption">Provide general information and metadata of this data offer.</p>
              </div>
            
            <v-card-text>
              <v-form class="text-caption">
                <v-divider></v-divider>
                <p class="font-weight-medium pt-5">General </p>
                <p>Add general information about this data offer.</p>
                <p class="pt-1">Data offer title<sup>*</sup></p>
                <v-text-field label="Data offer title" variant="solo" single-line density="compact" hide-details="auto" v-model="title"></v-text-field>
                <p class="pt-1" dense>Description</p>
                <v-textarea auto-grow placeholder="Add an optional description" rows="2" row-height="20" hide-details="auto" v-model="description"></v-textarea>

                <p class="font-weight-medium pt-6">Keywords </p>
                <p>Add keywords to make it easier to find your data offer.</p>
                <chip text="Automotive"/>

                <p class="font-weight-medium pt-6">Origin </p>
                <p>You are the specified publisher of this data offer. If the owner deviates, please edit.</p>
                <v-container>
                  <v-row>
                    <v-col cols="12" md="6" class="pa-0">
                      <p class="pt-1">Publisher</p>
                      <v-text-field label="Fantastic Corp." variant="solo" single-line density="compact" hide-details="auto" v-model="publisher"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" class="pt-0">
                      <p class="pt-1">Owner</p>
                      <v-text-field label="Fantastic Corp." variant="solo" single-line density="compact" hide-details="auto" v-model="owner"></v-text-field>
                     
                    </v-col>
                  </v-row>
                </v-container>

                <p class="font-weight-medium pt-6">Language </p>
                <p>Select the language of this data offer.</p>
                <v-select :items="languageItems" attach :menu-props="{ top:true, offsetY: true, closeOnClick: true }" density="compact" hide-details v-model="language" ></v-select>
                
                <v-container>
                  <v-row>
                    <v-col cols="12" md="6" class="pa-0">
                      
                      <p class="font-weight-medium pt-6">Mediatype </p>
                      <p>Specify the included mediatype.</p>
                      <p class="pt-1">Mediatype</p>
                      <v-select :items="mediatypeItems" attach :menu-props="{ top:true, offsetY: true, closeOnClick: true }" density="compact" hide-details v-model="mediatype"></v-select>
                      
                    </v-col>
                    <v-col cols="12" md="6" class="pt-0">
                      
                      <p class="font-weight-medium pt-6">Bytesize </p>
                      <p>Enter the bytesize.</p>  
                      <p class="pt-1">Bytesize</p>
                      <v-text-field  label="Enter bytesize" variant="solo" single-line density="compact" hide-details="auto" v-model="bytesize"></v-text-field>
                      
                    </v-col>
                  </v-row>
                </v-container>

                <p class="font-weight-medium pt-6">Version </p>
                <p>Version is automatically generated and will be updated in each edit.</p>
                <p class="pt-1">Version</p>
                <v-text-field label="1.0" variant="solo" single-line density="compact" 
                 v-model="version"></v-text-field>
                      
              </v-form>  
            </v-card-text>
          </v-card>
        </v-window-item>
        <v-window-item value="option-2">
          <v-card outlined>
            <v-card-text>
              <p>
                Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
              </p>

              <p>
                Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In hac habitasse platea dictumst. Fusce ac felis sit amet ligula pharetra condimentum.
              </p>

              <p>
                Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Nam commodo suscipit quam. In consectetuer turpis ut velit. Sed cursus turpis vitae tortor. Aliquam eu nunc.
              </p>

              <p>
                Etiam ut purus mattis mauris sodales aliquam. Ut varius tincidunt libero. Aenean viverra rhoncus pede. Duis leo. Fusce fermentum odio nec arcu.
              </p>

              <p class="mb-0">
                Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
              </p>
            </v-card-text>
          </v-card>
        </v-window-item>
        <v-window-item value="option-3">
          <v-card outlined>
            <v-card-text>
              <p>
                Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
              </p>

              <p class="mb-0">
                Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
              </p>
            </v-card-text>
          </v-card>
        </v-window-item>
      </v-window>      
    
    </div>
    
  </v-card>
</template>

<script>
import axios from 'axios';

import Chip from '@/components/Shared/Chip.vue';



  export default {
    name: "DesignerInputFormWizardTab",
    components: {
        Chip,
    },

    data: () => ({
        
        parentValue: "Data Offer",
        
        languageItems: ['English', 'German'],
        mediatypeItems: ['A', 'B', 'C'],

        currentTab : "option-1",
		    previousTab : "option-1",
		    allowTabChange : false,	  
        
        title: "",
        description: "",
        publisher: "",
        owner: "",
        language: "",
        mediatype: "",
        bytesize: "",
        version: "",

    }),
    
    methods:{

      onTabChange(clickedTab){
			this.currentTab = clickedTab;
			this.currentTab = this.previousTab;			
		},

      async sendData(){
      let result = await axios.post("http://localhost:3000/data", {
        
        title: this.title,
        description: this.description,
        publisher: this.publisher,
        owner: this.owner,
        language: this.language,
        mediatype: this.mediatype,
        bytesize: this.bytesize,
        version: this.version
      })  
      console.warn(result);
    },
      
    }
}
</script>

<style lang="css" scoped>

.v-text-field >>> input {
    font-size: 0.8em;
    font-weight: 100;
    text-transform: capitalize;
}
.v-text-field >>> label {
    font-size: 0.8em;
}

.v-text-field >>> button {
    font-size: 0.8em;
}

.v-card {
  
  border-width:1px;
}
</style>