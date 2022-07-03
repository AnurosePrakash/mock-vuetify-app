<template>
  <v-card >
    <v-layout>
      <v-navigation-drawer theme="dark" permanent location="left" style="width:fit-content;">
                   
      <v-list v-model:opened="open">
      <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard"></v-list-item>

      <v-list-group>
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-account-circle" :title=itemList[0].title @click="getListItem(itemList[0].title)"></v-list-item>
        </template>

        <v-list-item
            v-for="title in itemList[0].child"
            :key="title"
            :value="title"
            :title="title"
            :prepend-icon="icon"
            @click="getChildListItem(title)"
        ></v-list-item>        
      </v-list-group>

      <v-list-group>
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-plus-outline" 
          :title=itemList[1].title  @click="getListItem(itemList[1].title)"></v-list-item>
        </template>

        <v-list-item
            v-for="title in itemList[1].child"
            :key="title"
            :value="title"
            :title="title"
            :prepend-icon="icon"
            @click="getChildListItem(title)"
            
        ></v-list-item>        
      </v-list-group>

      <v-list-group>
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-gavel" 
          :title=itemList[2].title  @click="getListItem(itemList[2].title)"></v-list-item>
        </template>
        <v-list-item
            v-for="title in itemList[2].child"
            :key="title"
            :value="title"
            :title="title"
            :prepend-icon="icon"
            @click="getChildListItem(title)"
        ></v-list-item>        
      </v-list-group>

      <v-list-group>
        <template v-slot:activator="{ props }">
          <v-list-item  v-bind="props" prepend-icon="mdi-plus-outline" 
          :title=itemList[3].title  @click="getListItem(itemList[3].title)"></v-list-item>
        </template>

        <v-list-item
            v-for="title in itemList[3].child" :key="title" :value="title" :title="title" :prepend-icon="icon"
            @click="getChildListItem(title)"
        ></v-list-item>        
      </v-list-group>

    </v-list>
      
      </v-navigation-drawer>
      <v-main style="height: 100vh">
        
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>

export default {
    name: "DesignerInputSidebar",    
    
    data () {
      return {
        open: ['dataOffers'],
        listItemTitle: "",
        parentItem: "",
        childItem: "",
        itemList: [{title: 'Data Offer', child: ['Overview', 'Templates']},
                   {title: 'Data Consumption', child: ['Item1','Item2','Item3']},
                   {title: 'IDS Ecosystem', child: ['Item1','Item2','Item3']},
                   {title: 'Environment', child: ['Item1','Item2','Item3']}
                  ],     
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },          
        ],           
      }
    },

    methods: {
      
      updateParentChildNavBarValues(parent, child){   
        alert('not exec');     
        this.$store.commit("ASSIGN_NAVBAR_CONTENT",[parent,child]);
      },

      async created() {
        
        this.parentItem= itemList[0].title;
        this.childItem= itemList[0].child[0];
        updateParentChildNavBarValues(this.parentItem, this.childItem);
      },

      getListItem(value) {
       
        this.parentItem = value;
       
      },
       

      getChildListItem(value) {
       
        this.$router.push("/dataoffer/overview")
        this.childItem = value;
        updateParentChildNavBarValues(this.parentItem, this.childItem);
        
      },   
      
    }
  }
</script>

<style scoped>
.v-list-item{
font-family: Roboto;
font-size: 10px;

}
</style>