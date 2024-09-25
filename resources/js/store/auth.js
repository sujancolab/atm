import axios from "axios";

export default {
  namespaced: true,

  state: {
    userData: null
  },

  getters: {
    user: state => state.userData
  },

  mutations: {
    setUserData(state, user) {
      state.userData = user;
    }
  },

  actions: {
    getUserData({ commit }) {
      axios
        .get("/api/authuser")
        .then(response => {
          commit("setUserData", response.data);
        })
        .catch(() => {
          localStorage.removeItem("authToken");
        });
    },
    sendLoginRequest({ commit }, data) {
      commit("setErrors", {}, { root: true });
      return axios
        .post( "/api/login", data)
        .then(response => {
          commit("setUserData", response.data.user);
          localStorage.setItem("authToken", response.data.token);
        });
    },
    sendRegisterRequest({ commit }, data) {
      commit("setErrors", {}, { root: true });
      return axios
        .post("/api/register", data)
        .then(response => {
          if(response.data.user.type =='User'){
            commit("setUserData", response.data.user);
            localStorage.setItem("authToken", response.data.token);
          }else{
            commit("setUserData", null);
            localStorage.removeItem("authToken");
          }
        });
    },
    sendSocialLoginRequest({ commit }, req) {
      console.log(req)
      commit("setErrors", {}, { root: true });
      return axios
        .post( "/api/sociallogin/"+req.provider, req.data)
        .then(response => {
          commit("setUserData", response.data.user);
          localStorage.setItem("authToken", response.data.token);
        });
    },
    sendLogoutRequest({ commit }) {
      axios.post("/api/logout").then(() => {
        commit("setUserData", null);
        localStorage.removeItem("authToken");
      });
    },
    sendVerifyResendRequest() {
      return axios.get("/api/email/resend");
    },
    sendVerifyRequest({ dispatch }, hash) {
      return axios
        .get("/api/email/verify/" + hash)
        .then(() => {
          dispatch("getUserData");
        });
    }
  }
};
