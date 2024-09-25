import axios from "axios";

export default {
  namespaced: true,

  state: {
    ProjectExtraInfoData:null,
    SettingData: null,
    PendingNotificationsData: null,
    NotificationsData: null,
  },

  getters: {
    ProjectExtraInfo: state => state.ProjectExtraInfoData,
    Setting: state => state.SettingData,
    PendingNotification: state => state.PendingNotificationsData,
    Notifications: state => state.NotificationsData
  },

  mutations: {
    setProjectExtraInfoData(state, ProjectExtraInfo) {
        state.ProjectExtraInfoData = ProjectExtraInfo;
      },
    setSettingData(state, Setting) {
      state.SettingData = Setting;
    },
    setPendingNotificationsData(state, Notification) {
        state.PendingNotificationsData = Notification;
      },
      setNotificationsData(state, Notification) {
        state.NotificationsData = Notification;
      }
  },

  actions: {
    getProjectExtraInfoData({ commit },data) {
        var project =0;
        if(data && data.id){
            project =data.id
        }else{
         project = parseInt( localStorage.getItem('project'))||0;
        }

        axios
          .get("/api/projectCart/"+project)
          .then((response) => {
            commit("setProjectExtraInfoData", response.data.data);
          });
      },
      SaveProjectExtraInfoData({ commit },data) {
        commit("setErrors", {}, { root: true });
       let project = parseInt( localStorage.getItem('project'))||0;
      return  axios
          .put("/api/projectCart/"+project,data)
          .then((response) => {
              if(response){
              if(response.data.data.extra_info && response.data.data.extra_info!='' && response.data.data.extra_info!=null){
                commit("setProjectExtraInfoData", true);
              }else{
                commit("setProjectExtraInfoData", false);
              }
            }
          });
      },
    getSettingData({ commit }) {
      axios
        .get("/api/setting")
        .then((response) => {
          commit("setSettingData", response.data.data);
        });
    },

    getPendingNotifications({ commit }) {
        axios
          .get("/api/notification",{params:{
              pending:1
          }})
          .then((response) => {
            commit("setPendingNotificationsData", response.data.data);
          });
      },

   async getNotifications({ commit },data) {
       let url=data.url? data.url : "/api/notification";
       delete data.url;
        axios
          .get(url,{params:data})
          .then((response) => {
            commit("setNotificationsData", response.data.data);
          });
      },
      updateNotification({ commit },data) {
        axios
          .put("/api/notification/"+data.id,data)
          .then((response) => {
            commit("setPendingNotificationsData", response.data.data);
           // commit("setSettingData", response.data.data);
          });
      },



  }
};
