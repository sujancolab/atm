import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import cart from "./cart";
import checklist from "./checklist";
import Chat from "./Chat";
import Checkout from "./Checkout"
import Common from './Common'
import axios from 'axios';
import { getPermissions } from './../services/permissionsService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    errors: [],
    permissions: [],
  },

  getters: {
    errors: state => state.errors,
    userPermissions: state => state.permissions,
  },

  mutations: {
    setErrors(state, errors) {
      state.errors = errors;
    },
    setPermissions(state, permissions) {
      state.permissions = permissions;
    },
  },

  actions: {
    async fetchPermissions({ commit }) {
      const permissions = await getPermissions();
      commit('setPermissions', permissions);
    },
  },

  modules: {
    auth,
    cart,
    checklist,
    Chat,
    Checkout,
    Common
  }
});
