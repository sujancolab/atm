import axios from "axios";

export default {
    namespaced: true,

    state: {
        checklistData: null,
        myProjects: null
    },

    getters: {
        projectChecklist: state => state.checklistData,
        Projects: state => state.myProjects
    },

    mutations: {
        setChecklistData(state, checklist) {
            state.checklistData = checklist;
        },
        pushChecklistData(state, checklist) {
            if (state.checklistData.length > 0) {
                state.checklistData.push(...checklist)
            } else {
                state.checklistData = checklist;
            }
        },
        setMyProjectsData(state, Projects) {
            state.myProjects = Projects;
        },
    },

    actions: {

        getProjectsListData({
            commit
        }) {
            axios
                .get("/api/projectChecklist")
                .then(response => {
                    commit("setMyProjectsData", response.data.data);
                })
                .catch(() => {
                    // localStorage.removeItem("authToken");
                });
        },

        getChecklistData({
            commit
        }, project) {
            if (!project) {
                project = parseInt(localStorage.getItem('project'))||0;
            }
            axios
                .get("/api/projectChecklist/" + project)
                .then(response => {
                    commit("setChecklistData", response.data.data);
                })
                .catch(() => {
                    // localStorage.removeItem("authToken");
                });
        },

        share_to_contractor({
            commit
        },project) {
            commit("setErrors", {}, {
                root: true
            });
            if (!project) {
                project = parseInt(localStorage.getItem('project'))||0;
            }
            return axios
                .get("/api/project/share_to_contractor/" + project)
                .then(response => {
                    Toast.fire({
                        icon: 'success',
                        title: response.data.message
                    });
                }).catch(err => {
                    Toast.fire({
                        icon: 'error',
                        title: err.data.message
                    });
                });
        },



        async ChecklistCreatRequest({
            commit
        }, data) {
            commit("setErrors", {}, {
                root: true
            });
            return axios
                .post("/api/projectChecklist", data)
                .then(response => {
                    if (response.data) {
                        if (response.data.data.append_items == 1) {
                            commit("pushChecklistData", response.data.data.project_checklist);
                        } else {
                            commit("setChecklistData", response.data.data.project_checklist);
                        }
                    }
                });
        },

        async ChecklistUpdateRequest({
            commit
        }, req) {
            commit("setErrors", {}, {
                root: true
            });
            return axios
                .put("/api/projectChecklist/" + req.id, req.data)
                .then(response => {
                    if (response.data) {
                        Toast.fire({
                            icon: 'success',
                            title: response.data.message
                        });
                        commit("setChecklistData", response.data.data);
                    }
                }).catch(err => {
                    Toast.fire({
                        icon: 'error',
                        title: err.data.message
                    });
                });
        },

    }
};
