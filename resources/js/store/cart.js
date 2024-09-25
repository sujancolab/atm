import axios from "axios";

export default {
  namespaced: true,

  state: {
    cartData: null
  },

  getters: {
    projectCart: state => state.cartData
  },

  mutations: {
    setCartData(state, cart) {
      state.cartData = cart;
    }
  },

  actions: {
    getCartData({ commit },pData={}) {
        var project = parseInt( localStorage.getItem('project'))||0;
        pData.project=project
      axios
        .get("/api/projectCart",{
            params:pData
        })
        .then(response => {
          commit("setCartData", response.data.data);
        })
        .catch(() => {
         // localStorage.removeItem("authToken");
        });
    },
    addCartRequest({ commit }, data) {
      commit("setErrors", {}, { root: true });
      data.action="cart";
      return axios
        .post( "/api/projectCart/sync_to_cart", data)
        .then(response => {
         commit("setCartData", response.data.data);
        Toast.fire({
            icon: 'success',
            title: response.data.message
        });
        }).catch(err=>{
            Toast.fire({
            icon: 'error',
            title: response.data.message
        });
        });;
    },
    addBulkCartRequest({commit},data){
        commit("setErrors", {}, { root: true });
        data.action="cart";
        return axios
          .post( "/api/projectCart/sync_to_bulk_cart", data)
          .then(response => {
           commit("setCartData", response.data.data);
          Toast.fire({
              icon: 'success',
              title: response.data.message
          });
          }).catch(err=>{
              Toast.fire({
              icon: 'error',
              title: response.data.message
          });
          });;
    },
    removeCartRequest({ commit },data) {
      commit("setErrors", {}, { root: true });
      let params= data.params
      return axios
        .delete("/api/cart/destroy/"+data.id, {params})
        .then(response => {
          if(response.data){
            commit("setCartData", response.data.data);
          }
        });
    },

    async projectCreatRequest({commit},data){
        commit("setErrors", {}, { root: true });
      return axios
        .post("/api/projectCart", data)
        .then(response => {
          if(response.data){
            localStorage.setItem("project", response.data.data);
          }
        });
    }


  }
};
