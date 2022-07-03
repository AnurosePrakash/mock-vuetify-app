<template>
    <div>
      <designer-input-appbar /> 
    <div>
    <v-container class="pa-0" fluid>
      
    <v-layout row wrap class="pa-0" style="height:100vh">
    
      <v-flex>   
        
        <designer-input-sidebar />
      </v-flex >
      <v-flex style="width:100%" >
        <!-- artwork here -->        
        <designer-input-form-wizard-tab />
      </v-flex>
    </v-layout>
    
    </v-container>
      
      </div>  
    </div>
</template>

<script>

import DesignerInputSidebar from '@/components/DesignerInputForm/DesignerInputSidebar/DesignerInputSidebar.vue';
import DesignerInputAppbar from "@/components/DesignerInputForm/DesignerInputAppbar/DesignerInputAppbar.vue";
import DesignerInputFormWizardTab from '@/components/DesignerInputForm/DesignerInputFormWizardTab/DesignerInputFormWizardTab.vue';


export default {
    name: "DesignerInputView",
    components: {
        DesignerInputAppbar,
        DesignerInputSidebar,
        DesignerInputFormWizardTab,

    }
}
</script>