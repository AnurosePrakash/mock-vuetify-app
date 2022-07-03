<template>
  <div>   
    <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon icon="mdi-chevron-right"></v-icon>
      </template>
    </v-breadcrumbs>
  </div>
</template>

<script>
  export default {
    data: () => ({
      name: "Breadcrumbs",  
      items: [
        {
          text: 'Overview',
          disabled: false,
          href: 'AboutView',
        },
        {
          text: 'Data Offer',
          disabled: true,
          href: 'Overview',
        },
        
      ],
    }),
  }
</script>