import axios from "axios";

export default {
  namespaced: true,

  state: {
    UserShippingAddressData: null,
    CouponData:null,
    ShippingData:0,
    PaymentCartData:{},

  },

  getters: {
    UserShippingAddress: state => state.UserShippingAddressData,
    Coupon: state => state.CouponData,
    ShippingCharge: state => state.ShippingData,
    PaymentCart:  state => state.PaymentCartData,
  },

  mutations: {
      setShippingAddressData(state, address) {
          state.UserShippingAddressData = address;
      },
      setCouponData(state, coupon) {
          state.CouponData = coupon ;
      },
      setShippingData(state, shipping) {
          state.ShippingData = shipping;
      },
      setPaymentCartData(state, cart) {
        state.PaymentCartData = cart;
    },

  },

  actions: {

    async getShippingAddressData({
        commit
    },data) {
        axios
            .get("/api/profile?checkout=1",{
                params:data
            })
            .then(response => {
                if (typeof (response.data.data.payment_details) !== 'undefined' && response.data.data.payment_details) {
                    commit("setPaymentCartData", response.data.data.payment_details);
                } else {
                    if (typeof (response.data.data.shipping_address) !== 'undefined' && response.data.data.shipping_address) {
                    commit("setPaymentCartData", {
                        card_number:'',
                        name_on_Card:'',
                        exp_date:'',
                        cvv:'',
                        street:response.data.data.shipping_address.street,
                        state:response.data.data.shipping_address.state,
                        city:response.data.data.shipping_address.city,
                        zip_code:response.data.data.shipping_address.zip_code,
                        apartment:response.data.data.shipping_address.apartment,
                    });
                }else{
                    commit("setPaymentCartData", {
                        card_number:'',
                        name_on_Card:'',
                        exp_date:'',
                        cvv:'',
                        street:'',
                        state:'',
                        city:'',
                        zip_code:'',
                        apartment:''
                    });
                }
                }
                if (typeof (response.data.data.shipping_address) !== 'undefined') {
                    commit("setShippingAddressData", response.data.data.shipping_address);
                    commit("setShippingData", response.data.data.shipping_charge);
                } else {
                    commit("setShippingAddressData", null);
                    commit("setShippingData", null);
                }
            });
    },

    async UpdateShippingAddress({commit},data){
        commit("setErrors", {}, { root: true });
        data.checkout=1
        return axios
        .put("/api/profile", data)
        .then(response => {
            if(response.data){
                if(response.data.success==true){
                commit("setShippingData",response.data.data.shipping_charge);
                delete response.data.data.shipping_charge;
                commit("setShippingAddressData",response.data.data);
                }else{
                commit("setShippingAddressData",null);
                commit("setShippingData",null);
                }
                Toast.fire({
                    icon: 'success',
                    title: response.data.message
                });
            }
        });
    },


    async getPaymentCartData({ commit }) {
        axios
          .get("/api/profile")
          .then(response => {
              if (typeof(response.data.data.shipping_address) !=='undefined') {
                  commit("setShippingAddressData",response.data.data.shipping_address);
                  commit("setShippingData",response.data.data.shipping_charge);
              }else{
                  commit("setShippingAddressData",null);
                  commit("setShippingData",null);
              }
          });
      },



  }
};
