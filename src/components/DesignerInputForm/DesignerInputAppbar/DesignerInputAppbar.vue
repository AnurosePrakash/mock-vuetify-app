<template>
  <v-toolbar class="ma-0 pa-0">
     <v-img
    class="ma-0 pa-0"
    src="@/assets/CompanyLogo.png"
    max-height="850"
    max-width="255"
    contain
    ></v-img>

    <v-divider
   
      vertical
    ></v-divider> 

    <breadcrumbs />

    
  </v-toolbar>
</template>

<script>

import Breadcrumbs from '@/components/Shared/Breadcrumbs.vue';



export default {
    name: "DesignerInputAppbar",

    components: {
        Breadcrumbs,
    },
};
</script>