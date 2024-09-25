import axios from "axios";

export default {
  namespaced: true,

  state: {
    chatData: [],
    designerData:null,
    ChatUsers:null,
    ChatFiles:null,
    RoomChatFiles:null,
  },

  getters: {
    projectChatFiles: state => state.ChatFiles,
    projectChatUsers: state => state.ChatUsers,
    projectChat: state => state.chatData,
    projectRoomFiles: state => state.RoomChatFiles,
    projectDesigner: state => state.designerData
  },

  mutations: {
      setChatData(state, chat) {
          state.chatData.push(...chat);
      },
      removeChatData(state) {
          state.chatData = [];
      },
      setDesignerData(state, payment) {
          state.designerData = payment;
      },
      setChatUsersData(state, user) {
          state.ChatUsers=user;
      },
      setChatFilesData(state, files) {
        state.ChatFiles=files;
    },
    setChatTotalFile(state, files){
        state.RoomChatFiles=files;
    }
  },

  actions: {

    async getChatUsersData({ commit },data) {
      axios
        .get("/api/projectChat",{
            params:data
        })
        .then(response => {
            if (typeof(data) !=='undefined' && typeof(data.t) !=='undefined' && data.t=='files') {
                commit("setChatFilesData", response.data.data);
            }else{
                commit("setChatUsersData", response.data.data);
            }
        });
    },

    async getChatData({ commit },data) {
        var project = parseInt( localStorage.getItem('project')) ||0;

      axios
        .get("/api/projectChat/"+project,{
            params:data
        })
        .then(response => {
          commit("setChatData", response.data.data.Project_chats);
          commit("setChatTotalFile", response.data.data.room_files);
        })
        .catch(() => {
         // localStorage.removeItem("authToken");
        });
    },
    async  addChatRequest({ commit }, data) {
      commit("setErrors", {}, { root: true });
      return axios
        .post( "/api/projectChat", data)
        .then(response => {
         commit("setChatData", response.data.data.Project_chats);
         commit("setChatTotalFile", response.data.data.room_files);
         if(response.data.message){
         Toast.fire({
            icon: 'success',
            title: response.data.message
        });
    }
        })
    },

    async removeChatRequest({ commit }) {
        commit("setErrors", {}, { root: true });
        commit("removeChatData", []);
    },

    async HireDesignerRequest({commit},data){
        var project = parseInt( localStorage.getItem('project'))||0;
        data.project=project
        commit("setErrors", {}, { root: true });
      return axios
        .post("/api/hire_designer", data)
        .then(response => {
          if(response.data){
              if(response.data.success==true){
                commit("setDesignerData", response.data.data.designers);
              }else{
                commit("setDesignerData", null);
              }
          }
        });
    },
   async  CheckDesignerPaymentProject({ commit }) {
      var project = parseInt( localStorage.getItem('project'))||0;
      axios
        .get("/api/hire_designer",{
            params:{
                project:project
            }
        })
        .then(response => {
            if(response.data.success==true){
                commit("setDesignerData", response.data.data);
              }else{
                commit("setDesignerData", null);
              }
        })
        .catch(() => {
            commit("setDesignerData", null);
        });
    },


  }
};
