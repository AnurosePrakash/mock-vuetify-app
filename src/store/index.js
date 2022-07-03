import { createStore } from "vuex";

const store = createStore({
  state() {

    return{
      navBarContent: [],
      navBarHeadingContent: "",
      navBarChildContent: ""
      
    };
  },

  mutations: {
    ASSIGN_NAVBAR_CONTENT(state, navBarContent) {
      state.navBarHeadingContent = navBarContent[0];
      state.navBarChildContent = navBarContent[1];
  },
    FETCH_NAVBAR_CONTENT(state) {    
    return state.navBarHeadingContent
  },
  },

  
});

export default store;