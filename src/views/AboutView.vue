<template>
    <div>
      <designer-input-appbar-start /> 
    <div>
    <v-container class="pa-0" fluid>
 
    <v-layout row wrap class="pa-0" style="height:100vh">
      <v-flex style="height:100%">    
        
        <designer-input-sidebar />
      </v-flex >
      <v-flex class="px-9" style="width:100%" justify-center >
       
        
        <h1>WELCOME TO SOVITY</h1>
        <p class="text-caption"> Navigate to Data Offers for further information</p> 

      </v-flex>
    </v-layout>
    
    </v-container>
      
      </div>  
    </div>
</template>

<script>

import DesignerInputSidebar from '@/components/DesignerInputForm/DesignerInputSidebar/DesignerInputSidebar.vue';
import DesignerInputAppbarStart from "@/components/DesignerInputForm/DesignerInputAppbar/DesignerInputAppbarStart.vue";
import DesignerInputFormWizardTab from '@/components/DesignerInputForm/DesignerInputFormWizardTab/DesignerInputFormWizardTab.vue';


export default {
    name: "DesignerInputView",
    components: {
        DesignerInputAppbarStart,
        DesignerInputSidebar,
        DesignerInputFormWizardTab,

    }
}
</script>