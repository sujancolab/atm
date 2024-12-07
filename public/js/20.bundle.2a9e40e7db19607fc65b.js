(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/ComplaintDetail.vue":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/ComplaintDetail.vue ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      // Sample messages
      messages: [{
        title: "HITACHI",
        body: "cdf",
        timestamp: "10-09-2024 06:30 PM",
        type: "bg-gradient-primary text-white"
      }, {
        title: "Call Center",
        body: "Name: Vivekananda Sharma Email: NA Phone No.: 7908079103 Comment: Cash Dispenser Fatal",
        timestamp: "10-09-2024 06:35 PM",
        type: "bg-gradient-info text-white"
      }, {
        title: "Call Center",
        body: "Dear Team, Please call log for Dispenser issue, Custodian: Vivekananda Sharma (7908079103) & Eng: Chaitak (8017321602), Kindly provide the docket number...",
        timestamp: "10-09-2024 06:41 PM",
        type: "bg-gradient-warning text-white"
      }],
      complaint: {},
      atm_details: {},
      complaint_details: [],
      custodian_details: null,
      sls_details: null,
      // New comment input
      newComment: "",
      selectedStatus: null,
      myPrivilegeId: 3,
      authUser: localStorage.getItem("auth") ? JSON.parse(localStorage.getItem("auth")) : null,
      comment: '',
      selectedStatus: this.complaint ? this.complaint.work_status : 'Pending',
      manualClose: '',
      lagReason: ''
    };
  },
  methods: {
    // Function to add a new comment
    addComment() {
      if (this.newComment.trim()) {
        const newMessage = {
          title: "User Comment",
          body: this.newComment,
          timestamp: new Date().toLocaleString(),
          type: "bg-gradient-secondary text-white"
        };
        this.messages.push(newMessage);
        this.newComment = ""; // Clear the input after adding
      }
    },
    isCommentDisabled() {
      console.log("cakki");
      console.log("======>", this.complaint.work_status, this.authUser.id_cms_privileges);
      return this.complaint.work_status === 'Completed' && this.authUser.id_cms_privileges === 3;
    },
    showManualClose() {
      return this.selectedStatus === 'Completed';
    },
    showLagReason() {
      return this.selectedStatus === 'Processing';
    },
    submitComplaintForm() {
      // Submit form logic using `comment`, `selectedStatus`, `manualClose`, and `lagReason` values.
      const formData = {
        comment: this.comment,
        status: this.selectedStatus,
        manual_close: this.manualClose,
        lag_reason: this.lagReason
      };
      // Example POST request (replace URL as necessary)
      this.$http.post(`/complaint/comment//${this.complaint.id}`, formData).then(response => {
        // handle success
      }).catch(error => {
        // handle error
      });
    },
    formatDate(date) {
      return new Date(date).toLocaleString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    }
  },
  beforeCreate() {
    console.log(" this.$route.params.id;", this.$route.params.id);
    axios.get("api/complaint/view/" + this.$route.params.id).then(res => {
      console.log("res====>", res.data.data);
      this.complaint = res.data.data.complaint;
      this.atm_details = res.data.data.atm_details;
      this.complaint_details = res.data.data.complaint_details;
      this.custodian_details = res.data.data.custodian_details;
      this.sls_details = res.data.data.sls_details;
      this.selectedStatus = this.complaint.work_status || 'Pending';
      // console.log("atm",atm_details);
    });
  },
  mounted() {
    // Initial API call when the component is mounted
    console.log("mounted");
    this.authUser = localStorage.getItem("auth");
    if (this.authUser) {
      this.authUser = JSON.parse(this.authUser);
    }
    // this.loadTickets();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-21e7a258\",\"scoped\":true,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/ComplaintDetail.vue":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-21e7a258","scoped":true,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/ComplaintDetail.vue ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* Custom Styles if necessary */\n.message-list[data-v-21e7a258] {\n    border: 1px solid #ccc;\n    border-radius: 0.25rem;\n    padding: 15px;\n}\n.card[data-v-21e7a258] {\n    border: none;\n}\n.chat-box[data-v-21e7a258] {\n  max-height: 600px;\n  overflow-y: auto;\n}\n.chat-messages[data-v-21e7a258] {\n  height: 400px;\n  overflow-y: auto;\n}\n.message[data-v-21e7a258] {\n  padding: 10px;\n  border-radius: 10px;\n  margin-bottom: 10px;\n}\n.admin[data-v-21e7a258] {\n  background-color: #f1f1f1;\n}\n.engineer-message[data-v-21e7a258] {\n  border-left: 5px solid #007bff;\n}\n.user-message[data-v-21e7a258] {\n  background-color: #d4edda;\n}\n.chatheading[data-v-21e7a258] {\n  margin: 0;\n  font-weight: bold;\n}\n.chat-body[data-v-21e7a258] {\n  padding: 20px;\n  background-color: #f8f9fa;\n}\n.card-footer[data-v-21e7a258] {\n  background-color: #f8f9fa;\n  padding: 10px;\n}\n", "", {"version":3,"sources":["C:/Users/sujan/Desktop/Work/project freelance/Sankha/atm_proj/atm/resources/js/components/resources/js/components/ComplaintDetail.vue"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA+SA,gCAAA;AACA;IACA,uBAAA;IACA,uBAAA;IACA,cAAA;CACA;AAEA;IACA,aAAA;CACA;AACA;EACA,kBAAA;EACA,iBAAA;CACA;AAEA;EACA,cAAA;EACA,iBAAA;CACA;AAEA;EACA,cAAA;EACA,oBAAA;EACA,oBAAA;CACA;AAEA;EACA,0BAAA;CACA;AAEA;EACA,+BAAA;CACA;AAEA;EACA,0BAAA;CACA;AAEA;EACA,UAAA;EACA,kBAAA;CACA;AAEA;EACA,cAAA;EACA,0BAAA;CACA;AAEA;EACA,0BAAA;EACA,cAAA;CACA","file":"ComplaintDetail.vue","sourcesContent":["<template>\n    <div class=\"container mt-5\">\n\n        <!-- Top Information Design -->\n        <div class=\"row mb-4 p-3 border bg-light rounded\">\n            <div class=\"col-md-4\">\n                <p><strong>ATM :</strong></p>\n                <button class=\"btn btn-primary\">Code - {{ complaint && complaint.atm ? complaint.atm.atm_id :\n                    \"\"}}</button>\n                <p>Address - {{ atm_details.city_name + ', ' + atm_details.district_name + ', ' + atm_details.state_name }}</p>\n                <p>Area Code -{{ atm_details.area_code }}</p>\n                <p>Postcode - {{ atm_details.postcode }}</p>\n                <button class=\"btn btn-info\">{{ atm_details.bank_name }}</button>\n            </div>\n            <div class=\"col-md-4\">\n                <p v-if=\"sls_details\"><strong>SLM Docket No :</strong></p>\n                <button class=\"btn btn-info\" v-if=\"sls_details\">{{ sls_details ? sls_details.sls_docket_no : \"\" }}</button>\n                <p><strong>Docket No :</strong></p>\n                <button class=\"btn btn-info\">{{ complaint.docket_no }}</button>\n            </div>\n            <div class=\"col-md-4\">\n                <p><strong>Status :</strong></p>\n                <!-- <button class=\"btn btn-success\">Completed</button> -->\n                <button v-if=\"complaint.work_status === 'Pending'\" class=\"btn btn-danger\">Pending</button>\n                <button v-else-if=\"complaint.work_status === 'Processing'\" class=\"btn btn-warning\">Processing</button>\n                <button v-else-if=\"complaint.work_status === 'Completed'\" class=\"btn btn-success\">Completed</button>\n\n            </div>\n            <div class=\"col-md-4\">\n                <div v-if=\"complaint.is_slm === 1 && custodian_details\" class=\"viewtab viewtabber action-th\">\n                    <div v-if=\"authUser.id_cms_privileges === 4\">\n                        <label class=\"control-label\">Assigned Custodian :</label>\n                        <!-- You can enable the button below if needed for assignment functionality -->\n                        <!-- <a class=\"action-btn\" style=\"padding: 2px 6px; border: 1px solid #d9d9d9; color: #191919; font-size: 1.0em; text-align: center; display: inline-block; border-radius: 3px; margin: 1px;\"\n            :href=\"'/dashboard/assignTicket/' + complaint.docket_no\"\n            data-toggle=\"tooltip\"\n            data-placement=\"top\"\n            title=\"Assign Custodian\">\n            <i class=\"fa fa-user-plus\"></i>\n        </a> -->\n                        <p class=\"viewaddress\">\n                            Custodian Name: {{ custodian_details.name }}\n                            <span>({{ custodian_details.phone }})</span>\n                        </p>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n\n\n        <div class=\"row justify-content-center\">\n    <div class=\"col-md-8\">\n      <div class=\"card chat-box\">\n        <div class=\"card-header bg-primary text-white\">\n          <h3 class=\"tableheading mb-0\"><i class=\"fa fa-comments\" aria-hidden=\"true\"></i> Details</h3>\n        </div>\n        <div class=\"card-body chat-body\">\n          <div class=\"chat-messages\">\n            <div v-for=\"(row, index) in complaint_details\" :key=\"index\">\n              <div v-if=\"authUser.id_cms_privileges == 3\" class=\"mb-3\">\n                <div v-if=\"row.is_admin\">\n                  <div v-if=\"row.post_for_engineer\" class=\"message admin engineer-message\">\n                    <div class=\"d-flex justify-content-between\">\n                      <h5 class=\"chatheading text-info\">Call Center</h5>\n                      <span class=\"date text-muted small\">{{ formatDate(row.posted_at) }}</span>\n                    </div>\n                    <p>{{ row.comment }}</p>\n                  </div>\n                  <div v-else class=\"message admin callcenter-message\">\n                    <div class=\"d-flex justify-content-between\">\n                      <h5 class=\"chatheading text-info\">Call Center</h5>\n                      <span class=\"date text-muted small\">{{ formatDate(row.posted_at) }}</span>\n                    </div>\n                    <p>{{ row.comment }}</p>\n                  </div>\n                </div>\n                <div v-else class=\"message user-message\">\n                  <div class=\"d-flex justify-content-between\">\n                    <h5 class=\"chatheading\">{{ row.client_name }}</h5>\n                    <span class=\"date text-muted small\">{{ formatDate(row.posted_at) }}</span>\n                  </div>\n                  <p>{{ row.comment }}</p>\n                </div>\n              </div>\n              <div v-else-if=\"authUser.id_cms_privileges == 4\" class=\"mb-3\">\n                <div v-if=\"row.is_admin\">\n                  <div v-if=\"row.post_for_engineer\" class=\"message admin engineer-message\">\n                    <div class=\"d-flex justify-content-between\">\n                      <h5 class=\"chatheading text-info\">Call Center ({{ row.name }})</h5>\n                      <span class=\"date text-muted small\">{{ formatDate(row.posted_at) }}</span>\n                    </div>\n                    <p>{{ row.comment }}</p>\n                  </div>\n                  <div v-else class=\"message admin callcenter-message\">\n                    <div class=\"d-flex justify-content-between\">\n                      <h5 class=\"chatheading text-info\">Call Center ({{ row.name }})</h5>\n                      <span class=\"date text-muted small\">{{ formatDate(row.posted_at) }}</span>\n                    </div>\n                    <p>{{ row.comment }}</p>\n                  </div>\n                </div>\n                <div v-else class=\"message user-message\">\n                  <div class=\"d-flex justify-content-between\">\n                    <h5 class=\"chatheading\">{{ row.client_name }}</h5>\n                    <span class=\"date text-muted small\">{{ formatDate(row.posted_at) }}</span>\n                  </div>\n                  <p>{{ row.comment }}</p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"card-footer\">\n          <form @submit.prevent=\"submitComplaintForm\">\n            <div class=\"form-group\">\n              <textarea v-model=\"comment\" :disabled=\"complaint.work_status === 'Completed' && authUser.id_cms_privileges === 3\" class=\"form-control\" placeholder=\"Add Comment\" rows=\"3\" required></textarea>\n            </div>\n\n            <div v-if=\"authUser.id_cms_privileges == 4\">\n              <div class=\"form-group\">\n                <select v-model=\"selectedStatus\" class=\"form-control\">\n                  <option value=\"Pending\">Pending</option>\n                  <option value=\"Processing\">Processing</option>\n                  <option value=\"Completed\">Completed</option>\n                </select>\n              </div>\n              <div class=\"form-group\" v-show=\"showManualClose\">\n                <input type=\"text\" v-model=\"manualClose\" class=\"form-control manual-close\" placeholder=\"Manual Close\" />\n              </div>\n              <div class=\"form-group\" v-show=\"showLagReason\">\n                <textarea v-model=\"lagReason\" class=\"form-control\" placeholder=\"Add lag reason *\"></textarea>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <button :disabled=\"complaint.work_status === 'Completed' && authUser.id_cms_privileges === 3\" type=\"submit\" class=\"btn btn-primary btn-block\">Send</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n\n\n        <!-- Chat Box Design -->\n        <!-- <h2 class=\"text-white bg-info p-2 rounded\">Details</h2>\n\n\n      <div class=\"message-list overflow-auto\" style=\"max-height: 300px;\">\n        <div\n          v-for=\"(message, index) in messages\"\n          :key=\"index\"\n          :class=\"['card mb-3', message.type]\"\n        >\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">{{ message.title }}</h5>\n            <p class=\"card-text\">{{ message.body }}</p>\n            <p class=\"card-text\">\n              <small class=\"text-muted\">{{ message.timestamp }}</small>\n            </p>\n          </div>\n        </div>\n      </div> -->\n\n        <!-- Add Comment Form -->\n        <!-- <div class=\"mt-3\">\n        <div class=\"form-group\">\n          <textarea\n            v-model=\"newComment\"\n            class=\"form-control\"\n            rows=\"3\"\n            placeholder=\"Add Comment\"\n          ></textarea>\n        </div>\n        <button @click=\"addComment\" class=\"btn btn-primary mt-2\">Send</button>\n      </div> -->\n    </div>\n</template>\n\n<script>\nexport default {\n    data() {\n        return {\n            // Sample messages\n            messages: [\n                {\n                    title: \"HITACHI\",\n                    body: \"cdf\",\n                    timestamp: \"10-09-2024 06:30 PM\",\n                    type: \"bg-gradient-primary text-white\"\n                },\n                {\n                    title: \"Call Center\",\n                    body: \"Name: Vivekananda Sharma Email: NA Phone No.: 7908079103 Comment: Cash Dispenser Fatal\",\n                    timestamp: \"10-09-2024 06:35 PM\",\n                    type: \"bg-gradient-info text-white\"\n                },\n                {\n                    title: \"Call Center\",\n                    body: \"Dear Team, Please call log for Dispenser issue, Custodian: Vivekananda Sharma (7908079103) & Eng: Chaitak (8017321602), Kindly provide the docket number...\",\n                    timestamp: \"10-09-2024 06:41 PM\",\n                    type: \"bg-gradient-warning text-white\"\n                }\n            ],\n            complaint: {},\n            atm_details: {},\n            complaint_details: [],\n            custodian_details: null,\n            sls_details: null,\n            // New comment input\n            newComment: \"\",\n            selectedStatus: null,\n            myPrivilegeId:3,\n            authUser: localStorage.getItem(\"auth\") ? JSON.parse(localStorage.getItem(\"auth\")) : null,\n            comment: '',\n      selectedStatus:  this.complaint ? this.complaint.work_status : 'Pending',\n      manualClose: '',\n      lagReason: '',\n        };\n    },\n    methods: {\n        // Function to add a new comment\n        addComment() {\n            if (this.newComment.trim()) {\n                const newMessage = {\n                    title: \"User Comment\",\n                    body: this.newComment,\n                    timestamp: new Date().toLocaleString(),\n                    type: \"bg-gradient-secondary text-white\"\n                };\n                this.messages.push(newMessage);\n                this.newComment = \"\"; // Clear the input after adding\n            }\n        },\n        isCommentDisabled() {\n            console.log(\"cakki\");\n\n            console.log(\"======>\",this.complaint.work_status,this.authUser.id_cms_privileges);\n\n            return this.complaint.work_status === 'Completed' && this.authUser.id_cms_privileges === 3;\n        },\n        showManualClose() {\n            return this.selectedStatus === 'Completed';\n        },\n        showLagReason() {\n            return this.selectedStatus === 'Processing';\n        },\n        submitComplaintForm() {\n            // Submit form logic using `comment`, `selectedStatus`, `manualClose`, and `lagReason` values.\n            const formData = {\n                comment: this.comment,\n                status: this.selectedStatus,\n                manual_close: this.manualClose,\n                lag_reason: this.lagReason,\n            };\n            // Example POST request (replace URL as necessary)\n            this.$http.post(`/complaint/comment//${this.complaint.id}`, formData)\n                .then(response => {\n                    // handle success\n                })\n                .catch(error => {\n                    // handle error\n                });\n        },\n        formatDate(date) {\n            return new Date(date).toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });\n        },\n    },\n    beforeCreate() {\n        console.log(\" this.$route.params.id;\", this.$route.params.id);\n\n        axios.get(\"api/complaint/view/\" + this.$route.params.id)\n            .then((res) => {\n                console.log(\"res====>\", res.data.data);\n                this.complaint = res.data.data.complaint;\n                this.atm_details = res.data.data.atm_details;\n                this.complaint_details = res.data.data.complaint_details;\n                this.custodian_details = res.data.data.custodian_details;\n                this.sls_details = res.data.data.sls_details;\n                this.selectedStatus = this.complaint.work_status || 'Pending';\n                // console.log(\"atm\",atm_details);\n\n            });\n\n    },\n    mounted() {\n        // Initial API call when the component is mounted\n        console.log(\"mounted\");\n        this.authUser=localStorage.getItem(\"auth\");\n        if (this.authUser) {\n            this.authUser = JSON.parse(this.authUser);\n        }\n        // this.loadTickets();\n    },\n};\n</script>\n\n<style scoped>\n/* Custom Styles if necessary */\n.message-list {\n    border: 1px solid #ccc;\n    border-radius: 0.25rem;\n    padding: 15px;\n}\n\n.card {\n    border: none;\n}\n.chat-box {\n  max-height: 600px;\n  overflow-y: auto;\n}\n\n.chat-messages {\n  height: 400px;\n  overflow-y: auto;\n}\n\n.message {\n  padding: 10px;\n  border-radius: 10px;\n  margin-bottom: 10px;\n}\n\n.admin {\n  background-color: #f1f1f1;\n}\n\n.engineer-message {\n  border-left: 5px solid #007bff;\n}\n\n.user-message {\n  background-color: #d4edda;\n}\n\n.chatheading {\n  margin: 0;\n  font-weight: bold;\n}\n\n.chat-body {\n  padding: 20px;\n  background-color: #f8f9fa;\n}\n\n.card-footer {\n  background-color: #f8f9fa;\n  padding: 10px;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-21e7a258\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/ComplaintDetail.vue":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-21e7a258","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/ComplaintDetail.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container mt-5" }, [
    _c("div", { staticClass: "row mb-4 p-3 border bg-light rounded" }, [
      _c("div", { staticClass: "col-md-4" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("button", { staticClass: "btn btn-primary" }, [
          _vm._v(
            "Code - " +
              _vm._s(
                _vm.complaint && _vm.complaint.atm
                  ? _vm.complaint.atm.atm_id
                  : ""
              )
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "Address - " +
              _vm._s(
                _vm.atm_details.city_name +
                  ", " +
                  _vm.atm_details.district_name +
                  ", " +
                  _vm.atm_details.state_name
              )
          )
        ]),
        _vm._v(" "),
        _c("p", [_vm._v("Area Code -" + _vm._s(_vm.atm_details.area_code))]),
        _vm._v(" "),
        _c("p", [_vm._v("Postcode - " + _vm._s(_vm.atm_details.postcode))]),
        _vm._v(" "),
        _c("button", { staticClass: "btn btn-info" }, [
          _vm._v(_vm._s(_vm.atm_details.bank_name))
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4" }, [
        _vm.sls_details
          ? _c("p", [_c("strong", [_vm._v("SLM Docket No :")])])
          : _vm._e(),
        _vm._v(" "),
        _vm.sls_details
          ? _c("button", { staticClass: "btn btn-info" }, [
              _vm._v(
                _vm._s(_vm.sls_details ? _vm.sls_details.sls_docket_no : "")
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm._m(1),
        _vm._v(" "),
        _c("button", { staticClass: "btn btn-info" }, [
          _vm._v(_vm._s(_vm.complaint.docket_no))
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4" }, [
        _vm._m(2),
        _vm._v(" "),
        _vm.complaint.work_status === "Pending"
          ? _c("button", { staticClass: "btn btn-danger" }, [_vm._v("Pending")])
          : _vm.complaint.work_status === "Processing"
          ? _c("button", { staticClass: "btn btn-warning" }, [
              _vm._v("Processing")
            ])
          : _vm.complaint.work_status === "Completed"
          ? _c("button", { staticClass: "btn btn-success" }, [
              _vm._v("Completed")
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4" }, [
        _vm.complaint.is_slm === 1 && _vm.custodian_details
          ? _c("div", { staticClass: "viewtab viewtabber action-th" }, [
              _vm.authUser.id_cms_privileges === 4
                ? _c("div", [
                    _c("label", { staticClass: "control-label" }, [
                      _vm._v("Assigned Custodian :")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "viewaddress" }, [
                      _vm._v(
                        "\n                          Custodian Name: " +
                          _vm._s(_vm.custodian_details.name) +
                          "\n                          "
                      ),
                      _c("span", [
                        _vm._v("(" + _vm._s(_vm.custodian_details.phone) + ")")
                      ])
                    ])
                  ])
                : _vm._e()
            ])
          : _vm._e()
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-md-8" }, [
        _c("div", { staticClass: "card chat-box" }, [
          _vm._m(3),
          _vm._v(" "),
          _c("div", { staticClass: "card-body chat-body" }, [
            _c(
              "div",
              { staticClass: "chat-messages" },
              _vm._l(_vm.complaint_details, function(row, index) {
                return _c("div", { key: index }, [
                  _vm.authUser.id_cms_privileges == 3
                    ? _c("div", { staticClass: "mb-3" }, [
                        row.is_admin
                          ? _c("div", [
                              row.post_for_engineer
                                ? _c(
                                    "div",
                                    {
                                      staticClass:
                                        "message admin engineer-message"
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "d-flex justify-content-between"
                                        },
                                        [
                                          _c(
                                            "h5",
                                            {
                                              staticClass:
                                                "chatheading text-info"
                                            },
                                            [_vm._v("Call Center")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "date text-muted small"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.formatDate(row.posted_at)
                                                )
                                              )
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("p", [_vm._v(_vm._s(row.comment))])
                                    ]
                                  )
                                : _c(
                                    "div",
                                    {
                                      staticClass:
                                        "message admin callcenter-message"
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "d-flex justify-content-between"
                                        },
                                        [
                                          _c(
                                            "h5",
                                            {
                                              staticClass:
                                                "chatheading text-info"
                                            },
                                            [_vm._v("Call Center")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "date text-muted small"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.formatDate(row.posted_at)
                                                )
                                              )
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("p", [_vm._v(_vm._s(row.comment))])
                                    ]
                                  )
                            ])
                          : _c("div", { staticClass: "message user-message" }, [
                              _c(
                                "div",
                                {
                                  staticClass: "d-flex justify-content-between"
                                },
                                [
                                  _c("h5", { staticClass: "chatheading" }, [
                                    _vm._v(_vm._s(row.client_name))
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    { staticClass: "date text-muted small" },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.formatDate(row.posted_at))
                                      )
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("p", [_vm._v(_vm._s(row.comment))])
                            ])
                      ])
                    : _vm.authUser.id_cms_privileges == 4
                    ? _c("div", { staticClass: "mb-3" }, [
                        row.is_admin
                          ? _c("div", [
                              row.post_for_engineer
                                ? _c(
                                    "div",
                                    {
                                      staticClass:
                                        "message admin engineer-message"
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "d-flex justify-content-between"
                                        },
                                        [
                                          _c(
                                            "h5",
                                            {
                                              staticClass:
                                                "chatheading text-info"
                                            },
                                            [
                                              _vm._v(
                                                "Call Center (" +
                                                  _vm._s(row.name) +
                                                  ")"
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "date text-muted small"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.formatDate(row.posted_at)
                                                )
                                              )
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("p", [_vm._v(_vm._s(row.comment))])
                                    ]
                                  )
                                : _c(
                                    "div",
                                    {
                                      staticClass:
                                        "message admin callcenter-message"
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "d-flex justify-content-between"
                                        },
                                        [
                                          _c(
                                            "h5",
                                            {
                                              staticClass:
                                                "chatheading text-info"
                                            },
                                            [
                                              _vm._v(
                                                "Call Center (" +
                                                  _vm._s(row.name) +
                                                  ")"
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "date text-muted small"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.formatDate(row.posted_at)
                                                )
                                              )
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("p", [_vm._v(_vm._s(row.comment))])
                                    ]
                                  )
                            ])
                          : _c("div", { staticClass: "message user-message" }, [
                              _c(
                                "div",
                                {
                                  staticClass: "d-flex justify-content-between"
                                },
                                [
                                  _c("h5", { staticClass: "chatheading" }, [
                                    _vm._v(_vm._s(row.client_name))
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    { staticClass: "date text-muted small" },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.formatDate(row.posted_at))
                                      )
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("p", [_vm._v(_vm._s(row.comment))])
                            ])
                      ])
                    : _vm._e()
                ])
              }),
              0
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-footer" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.submitComplaintForm.apply(null, arguments)
                  }
                }
              },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.comment,
                        expression: "comment"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      disabled:
                        _vm.complaint.work_status === "Completed" &&
                        _vm.authUser.id_cms_privileges === 3,
                      placeholder: "Add Comment",
                      rows: "3",
                      required: ""
                    },
                    domProps: { value: _vm.comment },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.comment = $event.target.value
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _vm.authUser.id_cms_privileges == 4
                  ? _c("div", [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.selectedStatus,
                                expression: "selectedStatus"
                              }
                            ],
                            staticClass: "form-control",
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.selectedStatus = $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "Pending" } }, [
                              _vm._v("Pending")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "Processing" } }, [
                              _vm._v("Processing")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "Completed" } }, [
                              _vm._v("Completed")
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.showManualClose,
                              expression: "showManualClose"
                            }
                          ],
                          staticClass: "form-group"
                        },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.manualClose,
                                expression: "manualClose"
                              }
                            ],
                            staticClass: "form-control manual-close",
                            attrs: {
                              type: "text",
                              placeholder: "Manual Close"
                            },
                            domProps: { value: _vm.manualClose },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.manualClose = $event.target.value
                              }
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.showLagReason,
                              expression: "showLagReason"
                            }
                          ],
                          staticClass: "form-group"
                        },
                        [
                          _c("textarea", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.lagReason,
                                expression: "lagReason"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { placeholder: "Add lag reason *" },
                            domProps: { value: _vm.lagReason },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.lagReason = $event.target.value
                              }
                            }
                          })
                        ]
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary btn-block",
                      attrs: {
                        disabled:
                          _vm.complaint.work_status === "Completed" &&
                          _vm.authUser.id_cms_privileges === 3,
                        type: "submit"
                      }
                    },
                    [_vm._v("Send")]
                  )
                ])
              ]
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [_c("strong", [_vm._v("ATM :")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [_c("strong", [_vm._v("Docket No :")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [_c("strong", [_vm._v("Status :")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header bg-primary text-white" }, [
      _c("h3", { staticClass: "tableheading mb-0" }, [
        _c("i", {
          staticClass: "fa fa-comments",
          attrs: { "aria-hidden": "true" }
        }),
        _vm._v(" Details")
      ])
    ])
  }
]
render._withStripped = true

if (false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-21e7a258\",\"scoped\":true,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/ComplaintDetail.vue":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-21e7a258","scoped":true,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/ComplaintDetail.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader?sourceMap!../../../node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-21e7a258","scoped":true,"sourceMap":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ComplaintDetail.vue */ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-21e7a258\",\"scoped\":true,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/ComplaintDetail.vue");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("672fabef", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./resources/js/components/ComplaintDetail.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/ComplaintDetail.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ComplaintDetail_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../../node_modules/vue-loader/lib/selector?type=script&index=0!./ComplaintDetail.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/ComplaintDetail.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_21e7a258_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ComplaintDetail_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-21e7a258","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!../../../node_modules/vue-loader/lib/selector?type=template&index=0!./ComplaintDetail.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-21e7a258\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/ComplaintDetail.vue");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"id":"data-v-21e7a258","scoped":true,"sourceMap":true}!../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./ComplaintDetail.vue */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-21e7a258\",\"scoped\":true,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/ComplaintDetail.vue")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-21e7a258"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ComplaintDetail_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_21e7a258_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ComplaintDetail_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_21e7a258_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ComplaintDetail_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\js\\components\\ComplaintDetail.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tcGxhaW50RGV0YWlsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Db21wbGFpbnREZXRhaWwudnVlPzljZmQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tcGxhaW50RGV0YWlsLnZ1ZT8xZTNiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0NvbXBsYWludERldGFpbC52dWU/NTQ2ZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Db21wbGFpbnREZXRhaWwudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJtZXNzYWdlcyIsInRpdGxlIiwiYm9keSIsInRpbWVzdGFtcCIsInR5cGUiLCJjb21wbGFpbnQiLCJhdG1fZGV0YWlscyIsImNvbXBsYWludF9kZXRhaWxzIiwiY3VzdG9kaWFuX2RldGFpbHMiLCJzbHNfZGV0YWlscyIsIm5ld0NvbW1lbnQiLCJzZWxlY3RlZFN0YXR1cyIsIm15UHJpdmlsZWdlSWQiLCJhdXRoVXNlciIsImNvbW1lbnQiLCJtYW51YWxDbG9zZSIsImxhZ1JlYXNvbiIsIm1ldGhvZHMiLCJhZGRDb21tZW50IiwiaXNDb21tZW50RGlzYWJsZWQiLCJjb25zb2xlIiwic2hvd01hbnVhbENsb3NlIiwic2hvd0xhZ1JlYXNvbiIsInN1Ym1pdENvbXBsYWludEZvcm0iLCJzdGF0dXMiLCJtYW51YWxfY2xvc2UiLCJsYWdfcmVhc29uIiwidGhlbiIsImNhdGNoIiwiZm9ybWF0RGF0ZSIsImRheSIsIm1vbnRoIiwieWVhciIsImhvdXIiLCJtaW51dGUiLCJiZWZvcmVDcmVhdGUiLCJheGlvcyIsIm1vdW50ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixtREFBbUQ7QUFDekUsZ0JBQWdCLG1DQUFtQztBQUNuRDtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDa0M7QUFDbEMsSUFBSSxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7QUN4bEJoQjs7QUFFQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyxza0JBQWdUO0FBQ3RVO0FBQ0EsNENBQTRDLFFBQVM7QUFDckQ7QUFDQTtBQUNBLFVBQVUsbUJBQU8sQ0FBQyw2SEFBZ0U7QUFDbEYsK0NBQStDO0FBQy9DO0FBQ0EsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7O0FDWGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLG1CQUFPLENBQUMsNm1CQUE0UjtBQUN0UztBQUNBO0FBQ3NIO0FBQ2E7QUFDbkk7QUFDaVY7QUFDalY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNtRztBQUNuRyxnQkFBZ0IseUdBQWtCO0FBQ2xDLEVBQUUsa0lBQWM7QUFDaEIsRUFBRSx5T0FBYztBQUNoQixFQUFFLGtQQUF5QjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxFQWFYOztBQUVVLGdGQUFpQiIsImZpbGUiOiJqcy8yMC5idW5kbGUuMmE5ZTQwZTdkYjE5NjA3ZmM2NWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBtdC01XCI+XG5cbiAgICAgICAgPCEtLSBUb3AgSW5mb3JtYXRpb24gRGVzaWduIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG1iLTQgcC0zIGJvcmRlciBiZy1saWdodCByb3VuZGVkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTRcIj5cbiAgICAgICAgICAgICAgICA8cD48c3Ryb25nPkFUTSA6PC9zdHJvbmc+PC9wPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5Db2RlIC0ge3sgY29tcGxhaW50ICYmIGNvbXBsYWludC5hdG0gPyBjb21wbGFpbnQuYXRtLmF0bV9pZCA6XG4gICAgICAgICAgICAgICAgICAgIFwiXCJ9fTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxwPkFkZHJlc3MgLSB7eyBhdG1fZGV0YWlscy5jaXR5X25hbWUgKyAnLCAnICsgYXRtX2RldGFpbHMuZGlzdHJpY3RfbmFtZSArICcsICcgKyBhdG1fZGV0YWlscy5zdGF0ZV9uYW1lIH19PC9wPlxuICAgICAgICAgICAgICAgIDxwPkFyZWEgQ29kZSAte3sgYXRtX2RldGFpbHMuYXJlYV9jb2RlIH19PC9wPlxuICAgICAgICAgICAgICAgIDxwPlBvc3Rjb2RlIC0ge3sgYXRtX2RldGFpbHMucG9zdGNvZGUgfX08L3A+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4taW5mb1wiPnt7IGF0bV9kZXRhaWxzLmJhbmtfbmFtZSB9fTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTRcIj5cbiAgICAgICAgICAgICAgICA8cCB2LWlmPVwic2xzX2RldGFpbHNcIj48c3Ryb25nPlNMTSBEb2NrZXQgTm8gOjwvc3Ryb25nPjwvcD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1pbmZvXCIgdi1pZj1cInNsc19kZXRhaWxzXCI+e3sgc2xzX2RldGFpbHMgPyBzbHNfZGV0YWlscy5zbHNfZG9ja2V0X25vIDogXCJcIiB9fTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+RG9ja2V0IE5vIDo8L3N0cm9uZz48L3A+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4taW5mb1wiPnt7IGNvbXBsYWludC5kb2NrZXRfbm8gfX08L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00XCI+XG4gICAgICAgICAgICAgICAgPHA+PHN0cm9uZz5TdGF0dXMgOjwvc3Ryb25nPjwvcD5cbiAgICAgICAgICAgICAgICA8IS0tIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIj5Db21wbGV0ZWQ8L2J1dHRvbj4gLS0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB2LWlmPVwiY29tcGxhaW50Lndvcmtfc3RhdHVzID09PSAnUGVuZGluZydcIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCI+UGVuZGluZzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdi1lbHNlLWlmPVwiY29tcGxhaW50Lndvcmtfc3RhdHVzID09PSAnUHJvY2Vzc2luZydcIiBjbGFzcz1cImJ0biBidG4td2FybmluZ1wiPlByb2Nlc3Npbmc8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHYtZWxzZS1pZj1cImNvbXBsYWludC53b3JrX3N0YXR1cyA9PT0gJ0NvbXBsZXRlZCdcIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiPkNvbXBsZXRlZDwvYnV0dG9uPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cImNvbXBsYWludC5pc19zbG0gPT09IDEgJiYgY3VzdG9kaWFuX2RldGFpbHNcIiBjbGFzcz1cInZpZXd0YWIgdmlld3RhYmJlciBhY3Rpb24tdGhcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiYXV0aFVzZXIuaWRfY21zX3ByaXZpbGVnZXMgPT09IDRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIj5Bc3NpZ25lZCBDdXN0b2RpYW4gOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIFlvdSBjYW4gZW5hYmxlIHRoZSBidXR0b24gYmVsb3cgaWYgbmVlZGVkIGZvciBhc3NpZ25tZW50IGZ1bmN0aW9uYWxpdHkgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxhIGNsYXNzPVwiYWN0aW9uLWJ0blwiIHN0eWxlPVwicGFkZGluZzogMnB4IDZweDsgYm9yZGVyOiAxcHggc29saWQgI2Q5ZDlkOTsgY29sb3I6ICMxOTE5MTk7IGZvbnQtc2l6ZTogMS4wZW07IHRleHQtYWxpZ246IGNlbnRlcjsgZGlzcGxheTogaW5saW5lLWJsb2NrOyBib3JkZXItcmFkaXVzOiAzcHg7IG1hcmdpbjogMXB4O1wiXG4gICAgICAgICAgICA6aHJlZj1cIicvZGFzaGJvYXJkL2Fzc2lnblRpY2tldC8nICsgY29tcGxhaW50LmRvY2tldF9ub1wiXG4gICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIlxuICAgICAgICAgICAgZGF0YS1wbGFjZW1lbnQ9XCJ0b3BcIlxuICAgICAgICAgICAgdGl0bGU9XCJBc3NpZ24gQ3VzdG9kaWFuXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXVzZXItcGx1c1wiPjwvaT5cbiAgICAgICAgPC9hPiAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidmlld2FkZHJlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDdXN0b2RpYW4gTmFtZToge3sgY3VzdG9kaWFuX2RldGFpbHMubmFtZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPih7eyBjdXN0b2RpYW5fZGV0YWlscy5waG9uZSB9fSk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLThcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGNoYXQtYm94XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlciBiZy1wcmltYXJ5IHRleHQtd2hpdGVcIj5cbiAgICAgICAgICA8aDMgY2xhc3M9XCJ0YWJsZWhlYWRpbmcgbWItMFwiPjxpIGNsYXNzPVwiZmEgZmEtY29tbWVudHNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IERldGFpbHM8L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keSBjaGF0LWJvZHlcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhdC1tZXNzYWdlc1wiPlxuICAgICAgICAgICAgPGRpdiB2LWZvcj1cIihyb3csIGluZGV4KSBpbiBjb21wbGFpbnRfZGV0YWlsc1wiIDprZXk9XCJpbmRleFwiPlxuICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJhdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcyA9PSAzXCIgY2xhc3M9XCJtYi0zXCI+XG4gICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwicm93LmlzX2FkbWluXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJyb3cucG9zdF9mb3JfZW5naW5lZXJcIiBjbGFzcz1cIm1lc3NhZ2UgYWRtaW4gZW5naW5lZXItbWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwiY2hhdGhlYWRpbmcgdGV4dC1pbmZvXCI+Q2FsbCBDZW50ZXI8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGF0ZSB0ZXh0LW11dGVkIHNtYWxsXCI+e3sgZm9ybWF0RGF0ZShyb3cucG9zdGVkX2F0KSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwPnt7IHJvdy5jb21tZW50IH19PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHYtZWxzZSBjbGFzcz1cIm1lc3NhZ2UgYWRtaW4gY2FsbGNlbnRlci1tZXNzYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJjaGF0aGVhZGluZyB0ZXh0LWluZm9cIj5DYWxsIENlbnRlcjwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkYXRlIHRleHQtbXV0ZWQgc21hbGxcIj57eyBmb3JtYXREYXRlKHJvdy5wb3N0ZWRfYXQpIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHA+e3sgcm93LmNvbW1lbnQgfX08L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHYtZWxzZSBjbGFzcz1cIm1lc3NhZ2UgdXNlci1tZXNzYWdlXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cImNoYXRoZWFkaW5nXCI+e3sgcm93LmNsaWVudF9uYW1lIH19PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkYXRlIHRleHQtbXV0ZWQgc21hbGxcIj57eyBmb3JtYXREYXRlKHJvdy5wb3N0ZWRfYXQpIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8cD57eyByb3cuY29tbWVudCB9fTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgdi1lbHNlLWlmPVwiYXV0aFVzZXIuaWRfY21zX3ByaXZpbGVnZXMgPT0gNFwiIGNsYXNzPVwibWItM1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cInJvdy5pc19hZG1pblwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwicm93LnBvc3RfZm9yX2VuZ2luZWVyXCIgY2xhc3M9XCJtZXNzYWdlIGFkbWluIGVuZ2luZWVyLW1lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cImNoYXRoZWFkaW5nIHRleHQtaW5mb1wiPkNhbGwgQ2VudGVyICh7eyByb3cubmFtZSB9fSk8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGF0ZSB0ZXh0LW11dGVkIHNtYWxsXCI+e3sgZm9ybWF0RGF0ZShyb3cucG9zdGVkX2F0KSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwPnt7IHJvdy5jb21tZW50IH19PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHYtZWxzZSBjbGFzcz1cIm1lc3NhZ2UgYWRtaW4gY2FsbGNlbnRlci1tZXNzYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJjaGF0aGVhZGluZyB0ZXh0LWluZm9cIj5DYWxsIENlbnRlciAoe3sgcm93Lm5hbWUgfX0pPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRhdGUgdGV4dC1tdXRlZCBzbWFsbFwiPnt7IGZvcm1hdERhdGUocm93LnBvc3RlZF9hdCkgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cD57eyByb3cuY29tbWVudCB9fTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgdi1lbHNlIGNsYXNzPVwibWVzc2FnZSB1c2VyLW1lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwiY2hhdGhlYWRpbmdcIj57eyByb3cuY2xpZW50X25hbWUgfX08L2g1PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRhdGUgdGV4dC1tdXRlZCBzbWFsbFwiPnt7IGZvcm1hdERhdGUocm93LnBvc3RlZF9hdCkgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxwPnt7IHJvdy5jb21tZW50IH19PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1mb290ZXJcIj5cbiAgICAgICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJzdWJtaXRDb21wbGFpbnRGb3JtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICA8dGV4dGFyZWEgdi1tb2RlbD1cImNvbW1lbnRcIiA6ZGlzYWJsZWQ9XCJjb21wbGFpbnQud29ya19zdGF0dXMgPT09ICdDb21wbGV0ZWQnICYmIGF1dGhVc2VyLmlkX2Ntc19wcml2aWxlZ2VzID09PSAzXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkFkZCBDb21tZW50XCIgcm93cz1cIjNcIiByZXF1aXJlZD48L3RleHRhcmVhPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgdi1pZj1cImF1dGhVc2VyLmlkX2Ntc19wcml2aWxlZ2VzID09IDRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IHYtbW9kZWw9XCJzZWxlY3RlZFN0YXR1c1wiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUGVuZGluZ1wiPlBlbmRpbmc8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJQcm9jZXNzaW5nXCI+UHJvY2Vzc2luZzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNvbXBsZXRlZFwiPkNvbXBsZXRlZDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIiB2LXNob3c9XCJzaG93TWFudWFsQ2xvc2VcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwibWFudWFsQ2xvc2VcIiBjbGFzcz1cImZvcm0tY29udHJvbCBtYW51YWwtY2xvc2VcIiBwbGFjZWhvbGRlcj1cIk1hbnVhbCBDbG9zZVwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiIHYtc2hvdz1cInNob3dMYWdSZWFzb25cIj5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgdi1tb2RlbD1cImxhZ1JlYXNvblwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJBZGQgbGFnIHJlYXNvbiAqXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiA6ZGlzYWJsZWQ9XCJjb21wbGFpbnQud29ya19zdGF0dXMgPT09ICdDb21wbGV0ZWQnICYmIGF1dGhVc2VyLmlkX2Ntc19wcml2aWxlZ2VzID09PSAzXCIgdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiPlNlbmQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cblxuXG5cblxuICAgICAgICA8IS0tIENoYXQgQm94IERlc2lnbiAtLT5cbiAgICAgICAgPCEtLSA8aDIgY2xhc3M9XCJ0ZXh0LXdoaXRlIGJnLWluZm8gcC0yIHJvdW5kZWRcIj5EZXRhaWxzPC9oMj5cblxuXG4gICAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZS1saXN0IG92ZXJmbG93LWF1dG9cIiBzdHlsZT1cIm1heC1oZWlnaHQ6IDMwMHB4O1wiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgdi1mb3I9XCIobWVzc2FnZSwgaW5kZXgpIGluIG1lc3NhZ2VzXCJcbiAgICAgICAgICA6a2V5PVwiaW5kZXhcIlxuICAgICAgICAgIDpjbGFzcz1cIlsnY2FyZCBtYi0zJywgbWVzc2FnZS50eXBlXVwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICA8aDUgY2xhc3M9XCJjYXJkLXRpdGxlXCI+e3sgbWVzc2FnZS50aXRsZSB9fTwvaDU+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dFwiPnt7IG1lc3NhZ2UuYm9keSB9fTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0XCI+XG4gICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj57eyBtZXNzYWdlLnRpbWVzdGFtcCB9fTwvc21hbGw+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+IC0tPlxuXG4gICAgICAgIDwhLS0gQWRkIENvbW1lbnQgRm9ybSAtLT5cbiAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVwibXQtM1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgdi1tb2RlbD1cIm5ld0NvbW1lbnRcIlxuICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgcm93cz1cIjNcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgQ29tbWVudFwiXG4gICAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIEBjbGljaz1cImFkZENvbW1lbnRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBtdC0yXCI+U2VuZDwvYnV0dG9uPlxuICAgICAgPC9kaXY+IC0tPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLy8gU2FtcGxlIG1lc3NhZ2VzXG4gICAgICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiSElUQUNISVwiLFxuICAgICAgICAgICAgICAgICAgICBib2R5OiBcImNkZlwiLFxuICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IFwiMTAtMDktMjAyNCAwNjozMCBQTVwiLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJnLWdyYWRpZW50LXByaW1hcnkgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkNhbGwgQ2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IFwiTmFtZTogVml2ZWthbmFuZGEgU2hhcm1hIEVtYWlsOiBOQSBQaG9uZSBOby46IDc5MDgwNzkxMDMgQ29tbWVudDogQ2FzaCBEaXNwZW5zZXIgRmF0YWxcIixcbiAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wOiBcIjEwLTA5LTIwMjQgMDY6MzUgUE1cIixcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJiZy1ncmFkaWVudC1pbmZvIHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJDYWxsIENlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBib2R5OiBcIkRlYXIgVGVhbSwgUGxlYXNlIGNhbGwgbG9nIGZvciBEaXNwZW5zZXIgaXNzdWUsIEN1c3RvZGlhbjogVml2ZWthbmFuZGEgU2hhcm1hICg3OTA4MDc5MTAzKSAmIEVuZzogQ2hhaXRhayAoODAxNzMyMTYwMiksIEtpbmRseSBwcm92aWRlIHRoZSBkb2NrZXQgbnVtYmVyLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogXCIxMC0wOS0yMDI0IDA2OjQxIFBNXCIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYmctZ3JhZGllbnQtd2FybmluZyB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgY29tcGxhaW50OiB7fSxcbiAgICAgICAgICAgIGF0bV9kZXRhaWxzOiB7fSxcbiAgICAgICAgICAgIGNvbXBsYWludF9kZXRhaWxzOiBbXSxcbiAgICAgICAgICAgIGN1c3RvZGlhbl9kZXRhaWxzOiBudWxsLFxuICAgICAgICAgICAgc2xzX2RldGFpbHM6IG51bGwsXG4gICAgICAgICAgICAvLyBOZXcgY29tbWVudCBpbnB1dFxuICAgICAgICAgICAgbmV3Q29tbWVudDogXCJcIixcbiAgICAgICAgICAgIHNlbGVjdGVkU3RhdHVzOiBudWxsLFxuICAgICAgICAgICAgbXlQcml2aWxlZ2VJZDozLFxuICAgICAgICAgICAgYXV0aFVzZXI6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXV0aFwiKSA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhdXRoXCIpKSA6IG51bGwsXG4gICAgICAgICAgICBjb21tZW50OiAnJyxcbiAgICAgIHNlbGVjdGVkU3RhdHVzOiAgdGhpcy5jb21wbGFpbnQgPyB0aGlzLmNvbXBsYWludC53b3JrX3N0YXR1cyA6ICdQZW5kaW5nJyxcbiAgICAgIG1hbnVhbENsb3NlOiAnJyxcbiAgICAgIGxhZ1JlYXNvbjogJycsXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIC8vIEZ1bmN0aW9uIHRvIGFkZCBhIG5ldyBjb21tZW50XG4gICAgICAgIGFkZENvbW1lbnQoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5uZXdDb21tZW50LnRyaW0oKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld01lc3NhZ2UgPSB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlVzZXIgQ29tbWVudFwiLFxuICAgICAgICAgICAgICAgICAgICBib2R5OiB0aGlzLm5ld0NvbW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJnLWdyYWRpZW50LXNlY29uZGFyeSB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZXMucHVzaChuZXdNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5ld0NvbW1lbnQgPSBcIlwiOyAvLyBDbGVhciB0aGUgaW5wdXQgYWZ0ZXIgYWRkaW5nXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGlzQ29tbWVudERpc2FibGVkKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjYWtraVwiKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCI9PT09PT0+XCIsdGhpcy5jb21wbGFpbnQud29ya19zdGF0dXMsdGhpcy5hdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcyk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBsYWludC53b3JrX3N0YXR1cyA9PT0gJ0NvbXBsZXRlZCcgJiYgdGhpcy5hdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcyA9PT0gMztcbiAgICAgICAgfSxcbiAgICAgICAgc2hvd01hbnVhbENsb3NlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRTdGF0dXMgPT09ICdDb21wbGV0ZWQnO1xuICAgICAgICB9LFxuICAgICAgICBzaG93TGFnUmVhc29uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRTdGF0dXMgPT09ICdQcm9jZXNzaW5nJztcbiAgICAgICAgfSxcbiAgICAgICAgc3VibWl0Q29tcGxhaW50Rm9ybSgpIHtcbiAgICAgICAgICAgIC8vIFN1Ym1pdCBmb3JtIGxvZ2ljIHVzaW5nIGBjb21tZW50YCwgYHNlbGVjdGVkU3RhdHVzYCwgYG1hbnVhbENsb3NlYCwgYW5kIGBsYWdSZWFzb25gIHZhbHVlcy5cbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0ge1xuICAgICAgICAgICAgICAgIGNvbW1lbnQ6IHRoaXMuY29tbWVudCxcbiAgICAgICAgICAgICAgICBzdGF0dXM6IHRoaXMuc2VsZWN0ZWRTdGF0dXMsXG4gICAgICAgICAgICAgICAgbWFudWFsX2Nsb3NlOiB0aGlzLm1hbnVhbENsb3NlLFxuICAgICAgICAgICAgICAgIGxhZ19yZWFzb246IHRoaXMubGFnUmVhc29uLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIEV4YW1wbGUgUE9TVCByZXF1ZXN0IChyZXBsYWNlIFVSTCBhcyBuZWNlc3NhcnkpXG4gICAgICAgICAgICB0aGlzLiRodHRwLnBvc3QoYC9jb21wbGFpbnQvY29tbWVudC8vJHt0aGlzLmNvbXBsYWludC5pZH1gLCBmb3JtRGF0YSlcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBzdWNjZXNzXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBoYW5kbGUgZXJyb3JcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZm9ybWF0RGF0ZShkYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZSkudG9Mb2NhbGVTdHJpbmcoJ2VuLUdCJywgeyBkYXk6ICcyLWRpZ2l0JywgbW9udGg6ICcyLWRpZ2l0JywgeWVhcjogJ251bWVyaWMnLCBob3VyOiAnMi1kaWdpdCcsIG1pbnV0ZTogJzItZGlnaXQnIH0pO1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgYmVmb3JlQ3JlYXRlKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIiB0aGlzLiRyb3V0ZS5wYXJhbXMuaWQ7XCIsIHRoaXMuJHJvdXRlLnBhcmFtcy5pZCk7XG5cbiAgICAgICAgYXhpb3MuZ2V0KFwiYXBpL2NvbXBsYWludC92aWV3L1wiICsgdGhpcy4kcm91dGUucGFyYW1zLmlkKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzPT09PT5cIiwgcmVzLmRhdGEuZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wbGFpbnQgPSByZXMuZGF0YS5kYXRhLmNvbXBsYWludDtcbiAgICAgICAgICAgICAgICB0aGlzLmF0bV9kZXRhaWxzID0gcmVzLmRhdGEuZGF0YS5hdG1fZGV0YWlscztcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBsYWludF9kZXRhaWxzID0gcmVzLmRhdGEuZGF0YS5jb21wbGFpbnRfZGV0YWlscztcbiAgICAgICAgICAgICAgICB0aGlzLmN1c3RvZGlhbl9kZXRhaWxzID0gcmVzLmRhdGEuZGF0YS5jdXN0b2RpYW5fZGV0YWlscztcbiAgICAgICAgICAgICAgICB0aGlzLnNsc19kZXRhaWxzID0gcmVzLmRhdGEuZGF0YS5zbHNfZGV0YWlscztcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkU3RhdHVzID0gdGhpcy5jb21wbGFpbnQud29ya19zdGF0dXMgfHwgJ1BlbmRpbmcnO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYXRtXCIsYXRtX2RldGFpbHMpO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgIH0sXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgLy8gSW5pdGlhbCBBUEkgY2FsbCB3aGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZFxuICAgICAgICBjb25zb2xlLmxvZyhcIm1vdW50ZWRcIik7XG4gICAgICAgIHRoaXMuYXV0aFVzZXI9bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhdXRoXCIpO1xuICAgICAgICBpZiAodGhpcy5hdXRoVXNlcikge1xuICAgICAgICAgICAgdGhpcy5hdXRoVXNlciA9IEpTT04ucGFyc2UodGhpcy5hdXRoVXNlcik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcy5sb2FkVGlja2V0cygpO1xuICAgIH0sXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4vKiBDdXN0b20gU3R5bGVzIGlmIG5lY2Vzc2FyeSAqL1xuLm1lc3NhZ2UtbGlzdCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAgIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5jYXJkIHtcbiAgICBib3JkZXI6IG5vbmU7XG59XG4uY2hhdC1ib3gge1xuICBtYXgtaGVpZ2h0OiA2MDBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmNoYXQtbWVzc2FnZXMge1xuICBoZWlnaHQ6IDQwMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4ubWVzc2FnZSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5hZG1pbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG59XG5cbi5lbmdpbmVlci1tZXNzYWdlIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjMDA3YmZmO1xufVxuXG4udXNlci1tZXNzYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZWRkYTtcbn1cblxuLmNoYXRoZWFkaW5nIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNoYXQtYm9keSB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG59XG5cbi5jYXJkLWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG48L3N0eWxlPlxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcbi8qIEN1c3RvbSBTdHlsZXMgaWYgbmVjZXNzYXJ5ICovXFxuLm1lc3NhZ2UtbGlzdFtkYXRhLXYtMjFlN2EyNThdIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gICAgcGFkZGluZzogMTVweDtcXG59XFxuLmNhcmRbZGF0YS12LTIxZTdhMjU4XSB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuLmNoYXQtYm94W2RhdGEtdi0yMWU3YTI1OF0ge1xcbiAgbWF4LWhlaWdodDogNjAwcHg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG4uY2hhdC1tZXNzYWdlc1tkYXRhLXYtMjFlN2EyNThdIHtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG4ubWVzc2FnZVtkYXRhLXYtMjFlN2EyNThdIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLmFkbWluW2RhdGEtdi0yMWU3YTI1OF0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcXG59XFxuLmVuZ2luZWVyLW1lc3NhZ2VbZGF0YS12LTIxZTdhMjU4XSB7XFxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICMwMDdiZmY7XFxufVxcbi51c2VyLW1lc3NhZ2VbZGF0YS12LTIxZTdhMjU4XSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRlZGRhO1xcbn1cXG4uY2hhdGhlYWRpbmdbZGF0YS12LTIxZTdhMjU4XSB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmNoYXQtYm9keVtkYXRhLXYtMjFlN2EyNThdIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xcbn1cXG4uY2FyZC1mb290ZXJbZGF0YS12LTIxZTdhMjU4XSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkM6L1VzZXJzL3N1amFuL0Rlc2t0b3AvV29yay9wcm9qZWN0IGZyZWVsYW5jZS9TYW5raGEvYXRtX3Byb2ovYXRtL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0NvbXBsYWludERldGFpbC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK1NBLGdDQUFBO0FBQ0E7SUFDQSx1QkFBQTtJQUNBLHVCQUFBO0lBQ0EsY0FBQTtDQUNBO0FBRUE7SUFDQSxhQUFBO0NBQ0E7QUFDQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7Q0FDQTtBQUVBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0NBQ0E7QUFFQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0NBQ0E7QUFFQTtFQUNBLDBCQUFBO0NBQ0E7QUFFQTtFQUNBLCtCQUFBO0NBQ0E7QUFFQTtFQUNBLDBCQUFBO0NBQ0E7QUFFQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtDQUNBO0FBRUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7Q0FDQTtBQUVBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0NBQ0FcIixcImZpbGVcIjpcIkNvbXBsYWludERldGFpbC52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXIgbXQtNVxcXCI+XFxuXFxuICAgICAgICA8IS0tIFRvcCBJbmZvcm1hdGlvbiBEZXNpZ24gLS0+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3cgbWItNCBwLTMgYm9yZGVyIGJnLWxpZ2h0IHJvdW5kZWRcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC00XFxcIj5cXG4gICAgICAgICAgICAgICAgPHA+PHN0cm9uZz5BVE0gOjwvc3Ryb25nPjwvcD5cXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj5Db2RlIC0ge3sgY29tcGxhaW50ICYmIGNvbXBsYWludC5hdG0gPyBjb21wbGFpbnQuYXRtLmF0bV9pZCA6XFxuICAgICAgICAgICAgICAgICAgICBcXFwiXFxcIn19PC9idXR0b24+XFxuICAgICAgICAgICAgICAgIDxwPkFkZHJlc3MgLSB7eyBhdG1fZGV0YWlscy5jaXR5X25hbWUgKyAnLCAnICsgYXRtX2RldGFpbHMuZGlzdHJpY3RfbmFtZSArICcsICcgKyBhdG1fZGV0YWlscy5zdGF0ZV9uYW1lIH19PC9wPlxcbiAgICAgICAgICAgICAgICA8cD5BcmVhIENvZGUgLXt7IGF0bV9kZXRhaWxzLmFyZWFfY29kZSB9fTwvcD5cXG4gICAgICAgICAgICAgICAgPHA+UG9zdGNvZGUgLSB7eyBhdG1fZGV0YWlscy5wb3N0Y29kZSB9fTwvcD5cXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1pbmZvXFxcIj57eyBhdG1fZGV0YWlscy5iYW5rX25hbWUgfX08L2J1dHRvbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNFxcXCI+XFxuICAgICAgICAgICAgICAgIDxwIHYtaWY9XFxcInNsc19kZXRhaWxzXFxcIj48c3Ryb25nPlNMTSBEb2NrZXQgTm8gOjwvc3Ryb25nPjwvcD5cXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1pbmZvXFxcIiB2LWlmPVxcXCJzbHNfZGV0YWlsc1xcXCI+e3sgc2xzX2RldGFpbHMgPyBzbHNfZGV0YWlscy5zbHNfZG9ja2V0X25vIDogXFxcIlxcXCIgfX08L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPHA+PHN0cm9uZz5Eb2NrZXQgTm8gOjwvc3Ryb25nPjwvcD5cXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1pbmZvXFxcIj57eyBjb21wbGFpbnQuZG9ja2V0X25vIH19PC9idXR0b24+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTRcXFwiPlxcbiAgICAgICAgICAgICAgICA8cD48c3Ryb25nPlN0YXR1cyA6PC9zdHJvbmc+PC9wPlxcbiAgICAgICAgICAgICAgICA8IS0tIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCI+Q29tcGxldGVkPC9idXR0b24+IC0tPlxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHYtaWY9XFxcImNvbXBsYWludC53b3JrX3N0YXR1cyA9PT0gJ1BlbmRpbmcnXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXJcXFwiPlBlbmRpbmc8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB2LWVsc2UtaWY9XFxcImNvbXBsYWludC53b3JrX3N0YXR1cyA9PT0gJ1Byb2Nlc3NpbmcnXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nXFxcIj5Qcm9jZXNzaW5nPC9idXR0b24+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gdi1lbHNlLWlmPVxcXCJjb21wbGFpbnQud29ya19zdGF0dXMgPT09ICdDb21wbGV0ZWQnXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIj5Db21wbGV0ZWQ8L2J1dHRvbj5cXG5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNFxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cXFwiY29tcGxhaW50LmlzX3NsbSA9PT0gMSAmJiBjdXN0b2RpYW5fZGV0YWlsc1xcXCIgY2xhc3M9XFxcInZpZXd0YWIgdmlld3RhYmJlciBhY3Rpb24tdGhcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVxcXCJhdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcyA9PT0gNFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIj5Bc3NpZ25lZCBDdXN0b2RpYW4gOjwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBZb3UgY2FuIGVuYWJsZSB0aGUgYnV0dG9uIGJlbG93IGlmIG5lZWRlZCBmb3IgYXNzaWdubWVudCBmdW5jdGlvbmFsaXR5IC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPGEgY2xhc3M9XFxcImFjdGlvbi1idG5cXFwiIHN0eWxlPVxcXCJwYWRkaW5nOiAycHggNnB4OyBib3JkZXI6IDFweCBzb2xpZCAjZDlkOWQ5OyBjb2xvcjogIzE5MTkxOTsgZm9udC1zaXplOiAxLjBlbTsgdGV4dC1hbGlnbjogY2VudGVyOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGJvcmRlci1yYWRpdXM6IDNweDsgbWFyZ2luOiAxcHg7XFxcIlxcbiAgICAgICAgICAgIDpocmVmPVxcXCInL2Rhc2hib2FyZC9hc3NpZ25UaWNrZXQvJyArIGNvbXBsYWludC5kb2NrZXRfbm9cXFwiXFxuICAgICAgICAgICAgZGF0YS10b2dnbGU9XFxcInRvb2x0aXBcXFwiXFxuICAgICAgICAgICAgZGF0YS1wbGFjZW1lbnQ9XFxcInRvcFxcXCJcXG4gICAgICAgICAgICB0aXRsZT1cXFwiQXNzaWduIEN1c3RvZGlhblxcXCI+XFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXVzZXItcGx1c1xcXCI+PC9pPlxcbiAgICAgICAgPC9hPiAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwidmlld2FkZHJlc3NcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDdXN0b2RpYW4gTmFtZToge3sgY3VzdG9kaWFuX2RldGFpbHMubmFtZSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4oe3sgY3VzdG9kaWFuX2RldGFpbHMucGhvbmUgfX0pPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcblxcblxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtOFxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZCBjaGF0LWJveFxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWhlYWRlciBiZy1wcmltYXJ5IHRleHQtd2hpdGVcXFwiPlxcbiAgICAgICAgICA8aDMgY2xhc3M9XFxcInRhYmxlaGVhZGluZyBtYi0wXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtY29tbWVudHNcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+IERldGFpbHM8L2gzPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHkgY2hhdC1ib2R5XFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2hhdC1tZXNzYWdlc1xcXCI+XFxuICAgICAgICAgICAgPGRpdiB2LWZvcj1cXFwiKHJvdywgaW5kZXgpIGluIGNvbXBsYWludF9kZXRhaWxzXFxcIiA6a2V5PVxcXCJpbmRleFxcXCI+XFxuICAgICAgICAgICAgICA8ZGl2IHYtaWY9XFxcImF1dGhVc2VyLmlkX2Ntc19wcml2aWxlZ2VzID09IDNcXFwiIGNsYXNzPVxcXCJtYi0zXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiB2LWlmPVxcXCJyb3cuaXNfYWRtaW5cXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cXFwicm93LnBvc3RfZm9yX2VuZ2luZWVyXFxcIiBjbGFzcz1cXFwibWVzc2FnZSBhZG1pbiBlbmdpbmVlci1tZXNzYWdlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cXFwiY2hhdGhlYWRpbmcgdGV4dC1pbmZvXFxcIj5DYWxsIENlbnRlcjwvaDU+XFxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkYXRlIHRleHQtbXV0ZWQgc21hbGxcXFwiPnt7IGZvcm1hdERhdGUocm93LnBvc3RlZF9hdCkgfX08L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxwPnt7IHJvdy5jb21tZW50IH19PC9wPlxcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgdi1lbHNlIGNsYXNzPVxcXCJtZXNzYWdlIGFkbWluIGNhbGxjZW50ZXItbWVzc2FnZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XFxcImNoYXRoZWFkaW5nIHRleHQtaW5mb1xcXCI+Q2FsbCBDZW50ZXI8L2g1PlxcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZGF0ZSB0ZXh0LW11dGVkIHNtYWxsXFxcIj57eyBmb3JtYXREYXRlKHJvdy5wb3N0ZWRfYXQpIH19PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8cD57eyByb3cuY29tbWVudCB9fTwvcD5cXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgdi1lbHNlIGNsYXNzPVxcXCJtZXNzYWdlIHVzZXItbWVzc2FnZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cXFwiY2hhdGhlYWRpbmdcXFwiPnt7IHJvdy5jbGllbnRfbmFtZSB9fTwvaDU+XFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZGF0ZSB0ZXh0LW11dGVkIHNtYWxsXFxcIj57eyBmb3JtYXREYXRlKHJvdy5wb3N0ZWRfYXQpIH19PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgIDxwPnt7IHJvdy5jb21tZW50IH19PC9wPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPGRpdiB2LWVsc2UtaWY9XFxcImF1dGhVc2VyLmlkX2Ntc19wcml2aWxlZ2VzID09IDRcXFwiIGNsYXNzPVxcXCJtYi0zXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiB2LWlmPVxcXCJyb3cuaXNfYWRtaW5cXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cXFwicm93LnBvc3RfZm9yX2VuZ2luZWVyXFxcIiBjbGFzcz1cXFwibWVzc2FnZSBhZG1pbiBlbmdpbmVlci1tZXNzYWdlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cXFwiY2hhdGhlYWRpbmcgdGV4dC1pbmZvXFxcIj5DYWxsIENlbnRlciAoe3sgcm93Lm5hbWUgfX0pPC9oNT5cXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImRhdGUgdGV4dC1tdXRlZCBzbWFsbFxcXCI+e3sgZm9ybWF0RGF0ZShyb3cucG9zdGVkX2F0KSB9fTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPHA+e3sgcm93LmNvbW1lbnQgfX08L3A+XFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPGRpdiB2LWVsc2UgY2xhc3M9XFxcIm1lc3NhZ2UgYWRtaW4gY2FsbGNlbnRlci1tZXNzYWdlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cXFwiY2hhdGhlYWRpbmcgdGV4dC1pbmZvXFxcIj5DYWxsIENlbnRlciAoe3sgcm93Lm5hbWUgfX0pPC9oNT5cXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImRhdGUgdGV4dC1tdXRlZCBzbWFsbFxcXCI+e3sgZm9ybWF0RGF0ZShyb3cucG9zdGVkX2F0KSB9fTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPHA+e3sgcm93LmNvbW1lbnQgfX08L3A+XFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IHYtZWxzZSBjbGFzcz1cXFwibWVzc2FnZSB1c2VyLW1lc3NhZ2VcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XFxcImNoYXRoZWFkaW5nXFxcIj57eyByb3cuY2xpZW50X25hbWUgfX08L2g1PlxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImRhdGUgdGV4dC1tdXRlZCBzbWFsbFxcXCI+e3sgZm9ybWF0RGF0ZShyb3cucG9zdGVkX2F0KSB9fTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8cD57eyByb3cuY29tbWVudCB9fTwvcD5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtZm9vdGVyXFxcIj5cXG4gICAgICAgICAgPGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVxcXCJzdWJtaXRDb21wbGFpbnRGb3JtXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgIDx0ZXh0YXJlYSB2LW1vZGVsPVxcXCJjb21tZW50XFxcIiA6ZGlzYWJsZWQ9XFxcImNvbXBsYWludC53b3JrX3N0YXR1cyA9PT0gJ0NvbXBsZXRlZCcgJiYgYXV0aFVzZXIuaWRfY21zX3ByaXZpbGVnZXMgPT09IDNcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJBZGQgQ29tbWVudFxcXCIgcm93cz1cXFwiM1xcXCIgcmVxdWlyZWQ+PC90ZXh0YXJlYT5cXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICA8ZGl2IHYtaWY9XFxcImF1dGhVc2VyLmlkX2Ntc19wcml2aWxlZ2VzID09IDRcXFwiPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgIDxzZWxlY3Qgdi1tb2RlbD1cXFwic2VsZWN0ZWRTdGF0dXNcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIlBlbmRpbmdcXFwiPlBlbmRpbmc8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJQcm9jZXNzaW5nXFxcIj5Qcm9jZXNzaW5nPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiQ29tcGxldGVkXFxcIj5Db21wbGV0ZWQ8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIHYtc2hvdz1cXFwic2hvd01hbnVhbENsb3NlXFxcIj5cXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIHYtbW9kZWw9XFxcIm1hbnVhbENsb3NlXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sIG1hbnVhbC1jbG9zZVxcXCIgcGxhY2Vob2xkZXI9XFxcIk1hbnVhbCBDbG9zZVxcXCIgLz5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgdi1zaG93PVxcXCJzaG93TGFnUmVhc29uXFxcIj5cXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIHYtbW9kZWw9XFxcImxhZ1JlYXNvblxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkFkZCBsYWcgcmVhc29uICpcXFwiPjwvdGV4dGFyZWE+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgIDxidXR0b24gOmRpc2FibGVkPVxcXCJjb21wbGFpbnQud29ya19zdGF0dXMgPT09ICdDb21wbGV0ZWQnICYmIGF1dGhVc2VyLmlkX2Ntc19wcml2aWxlZ2VzID09PSAzXFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrXFxcIj5TZW5kPC9idXR0b24+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvZm9ybT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcblxcblxcblxcblxcblxcbiAgICAgICAgPCEtLSBDaGF0IEJveCBEZXNpZ24gLS0+XFxuICAgICAgICA8IS0tIDxoMiBjbGFzcz1cXFwidGV4dC13aGl0ZSBiZy1pbmZvIHAtMiByb3VuZGVkXFxcIj5EZXRhaWxzPC9oMj5cXG5cXG5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJtZXNzYWdlLWxpc3Qgb3ZlcmZsb3ctYXV0b1xcXCIgc3R5bGU9XFxcIm1heC1oZWlnaHQ6IDMwMHB4O1xcXCI+XFxuICAgICAgICA8ZGl2XFxuICAgICAgICAgIHYtZm9yPVxcXCIobWVzc2FnZSwgaW5kZXgpIGluIG1lc3NhZ2VzXFxcIlxcbiAgICAgICAgICA6a2V5PVxcXCJpbmRleFxcXCJcXG4gICAgICAgICAgOmNsYXNzPVxcXCJbJ2NhcmQgbWItMycsIG1lc3NhZ2UudHlwZV1cXFwiXFxuICAgICAgICA+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCI+XFxuICAgICAgICAgICAgPGg1IGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj57eyBtZXNzYWdlLnRpdGxlIH19PC9oNT5cXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwiY2FyZC10ZXh0XFxcIj57eyBtZXNzYWdlLmJvZHkgfX08L3A+XFxuICAgICAgICAgICAgPHAgY2xhc3M9XFxcImNhcmQtdGV4dFxcXCI+XFxuICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XFxcInRleHQtbXV0ZWRcXFwiPnt7IG1lc3NhZ2UudGltZXN0YW1wIH19PC9zbWFsbD5cXG4gICAgICAgICAgICA8L3A+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+IC0tPlxcblxcbiAgICAgICAgPCEtLSBBZGQgQ29tbWVudCBGb3JtIC0tPlxcbiAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVxcXCJtdC0zXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICA8dGV4dGFyZWFcXG4gICAgICAgICAgICB2LW1vZGVsPVxcXCJuZXdDb21tZW50XFxcIlxcbiAgICAgICAgICAgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxuICAgICAgICAgICAgcm93cz1cXFwiM1xcXCJcXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiQWRkIENvbW1lbnRcXFwiXFxuICAgICAgICAgID48L3RleHRhcmVhPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8YnV0dG9uIEBjbGljaz1cXFwiYWRkQ29tbWVudFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBtdC0yXFxcIj5TZW5kPC9idXR0b24+XFxuICAgICAgPC9kaXY+IC0tPlxcbiAgICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgICBkYXRhKCkge1xcbiAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICAvLyBTYW1wbGUgbWVzc2FnZXNcXG4gICAgICAgICAgICBtZXNzYWdlczogW1xcbiAgICAgICAgICAgICAgICB7XFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXFxcIkhJVEFDSElcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogXFxcImNkZlxcXCIsXFxuICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IFxcXCIxMC0wOS0yMDI0IDA2OjMwIFBNXFxcIixcXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFxcXCJiZy1ncmFkaWVudC1wcmltYXJ5IHRleHQtd2hpdGVcXFwiXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIHtcXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcXFwiQ2FsbCBDZW50ZXJcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogXFxcIk5hbWU6IFZpdmVrYW5hbmRhIFNoYXJtYSBFbWFpbDogTkEgUGhvbmUgTm8uOiA3OTA4MDc5MTAzIENvbW1lbnQ6IENhc2ggRGlzcGVuc2VyIEZhdGFsXFxcIixcXG4gICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogXFxcIjEwLTA5LTIwMjQgMDY6MzUgUE1cXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXFxcImJnLWdyYWRpZW50LWluZm8gdGV4dC13aGl0ZVxcXCJcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFxcXCJDYWxsIENlbnRlclxcXCIsXFxuICAgICAgICAgICAgICAgICAgICBib2R5OiBcXFwiRGVhciBUZWFtLCBQbGVhc2UgY2FsbCBsb2cgZm9yIERpc3BlbnNlciBpc3N1ZSwgQ3VzdG9kaWFuOiBWaXZla2FuYW5kYSBTaGFybWEgKDc5MDgwNzkxMDMpICYgRW5nOiBDaGFpdGFrICg4MDE3MzIxNjAyKSwgS2luZGx5IHByb3ZpZGUgdGhlIGRvY2tldCBudW1iZXIuLi5cXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wOiBcXFwiMTAtMDktMjAyNCAwNjo0MSBQTVxcXCIsXFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcXFwiYmctZ3JhZGllbnQtd2FybmluZyB0ZXh0LXdoaXRlXFxcIlxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgXSxcXG4gICAgICAgICAgICBjb21wbGFpbnQ6IHt9LFxcbiAgICAgICAgICAgIGF0bV9kZXRhaWxzOiB7fSxcXG4gICAgICAgICAgICBjb21wbGFpbnRfZGV0YWlsczogW10sXFxuICAgICAgICAgICAgY3VzdG9kaWFuX2RldGFpbHM6IG51bGwsXFxuICAgICAgICAgICAgc2xzX2RldGFpbHM6IG51bGwsXFxuICAgICAgICAgICAgLy8gTmV3IGNvbW1lbnQgaW5wdXRcXG4gICAgICAgICAgICBuZXdDb21tZW50OiBcXFwiXFxcIixcXG4gICAgICAgICAgICBzZWxlY3RlZFN0YXR1czogbnVsbCxcXG4gICAgICAgICAgICBteVByaXZpbGVnZUlkOjMsXFxuICAgICAgICAgICAgYXV0aFVzZXI6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFxcXCJhdXRoXFxcIikgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFxcXCJhdXRoXFxcIikpIDogbnVsbCxcXG4gICAgICAgICAgICBjb21tZW50OiAnJyxcXG4gICAgICBzZWxlY3RlZFN0YXR1czogIHRoaXMuY29tcGxhaW50ID8gdGhpcy5jb21wbGFpbnQud29ya19zdGF0dXMgOiAnUGVuZGluZycsXFxuICAgICAgbWFudWFsQ2xvc2U6ICcnLFxcbiAgICAgIGxhZ1JlYXNvbjogJycsXFxuICAgICAgICB9O1xcbiAgICB9LFxcbiAgICBtZXRob2RzOiB7XFxuICAgICAgICAvLyBGdW5jdGlvbiB0byBhZGQgYSBuZXcgY29tbWVudFxcbiAgICAgICAgYWRkQ29tbWVudCgpIHtcXG4gICAgICAgICAgICBpZiAodGhpcy5uZXdDb21tZW50LnRyaW0oKSkge1xcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdNZXNzYWdlID0ge1xcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFxcXCJVc2VyIENvbW1lbnRcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogdGhpcy5uZXdDb21tZW50LFxcbiAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCksXFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcXFwiYmctZ3JhZGllbnQtc2Vjb25kYXJ5IHRleHQtd2hpdGVcXFwiXFxuICAgICAgICAgICAgICAgIH07XFxuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZXMucHVzaChuZXdNZXNzYWdlKTtcXG4gICAgICAgICAgICAgICAgdGhpcy5uZXdDb21tZW50ID0gXFxcIlxcXCI7IC8vIENsZWFyIHRoZSBpbnB1dCBhZnRlciBhZGRpbmdcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgaXNDb21tZW50RGlzYWJsZWQoKSB7XFxuICAgICAgICAgICAgY29uc29sZS5sb2coXFxcImNha2tpXFxcIik7XFxuXFxuICAgICAgICAgICAgY29uc29sZS5sb2coXFxcIj09PT09PT5cXFwiLHRoaXMuY29tcGxhaW50Lndvcmtfc3RhdHVzLHRoaXMuYXV0aFVzZXIuaWRfY21zX3ByaXZpbGVnZXMpO1xcblxcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBsYWludC53b3JrX3N0YXR1cyA9PT0gJ0NvbXBsZXRlZCcgJiYgdGhpcy5hdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcyA9PT0gMztcXG4gICAgICAgIH0sXFxuICAgICAgICBzaG93TWFudWFsQ2xvc2UoKSB7XFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRTdGF0dXMgPT09ICdDb21wbGV0ZWQnO1xcbiAgICAgICAgfSxcXG4gICAgICAgIHNob3dMYWdSZWFzb24oKSB7XFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRTdGF0dXMgPT09ICdQcm9jZXNzaW5nJztcXG4gICAgICAgIH0sXFxuICAgICAgICBzdWJtaXRDb21wbGFpbnRGb3JtKCkge1xcbiAgICAgICAgICAgIC8vIFN1Ym1pdCBmb3JtIGxvZ2ljIHVzaW5nIGBjb21tZW50YCwgYHNlbGVjdGVkU3RhdHVzYCwgYG1hbnVhbENsb3NlYCwgYW5kIGBsYWdSZWFzb25gIHZhbHVlcy5cXG4gICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IHtcXG4gICAgICAgICAgICAgICAgY29tbWVudDogdGhpcy5jb21tZW50LFxcbiAgICAgICAgICAgICAgICBzdGF0dXM6IHRoaXMuc2VsZWN0ZWRTdGF0dXMsXFxuICAgICAgICAgICAgICAgIG1hbnVhbF9jbG9zZTogdGhpcy5tYW51YWxDbG9zZSxcXG4gICAgICAgICAgICAgICAgbGFnX3JlYXNvbjogdGhpcy5sYWdSZWFzb24sXFxuICAgICAgICAgICAgfTtcXG4gICAgICAgICAgICAvLyBFeGFtcGxlIFBPU1QgcmVxdWVzdCAocmVwbGFjZSBVUkwgYXMgbmVjZXNzYXJ5KVxcbiAgICAgICAgICAgIHRoaXMuJGh0dHAucG9zdChgL2NvbXBsYWludC9jb21tZW50Ly8ke3RoaXMuY29tcGxhaW50LmlkfWAsIGZvcm1EYXRhKVxcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAvLyBoYW5kbGUgc3VjY2Vzc1xcbiAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgLy8gaGFuZGxlIGVycm9yXFxuICAgICAgICAgICAgICAgIH0pO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGZvcm1hdERhdGUoZGF0ZSkge1xcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlKS50b0xvY2FsZVN0cmluZygnZW4tR0InLCB7IGRheTogJzItZGlnaXQnLCBtb250aDogJzItZGlnaXQnLCB5ZWFyOiAnbnVtZXJpYycsIGhvdXI6ICcyLWRpZ2l0JywgbWludXRlOiAnMi1kaWdpdCcgfSk7XFxuICAgICAgICB9LFxcbiAgICB9LFxcbiAgICBiZWZvcmVDcmVhdGUoKSB7XFxuICAgICAgICBjb25zb2xlLmxvZyhcXFwiIHRoaXMuJHJvdXRlLnBhcmFtcy5pZDtcXFwiLCB0aGlzLiRyb3V0ZS5wYXJhbXMuaWQpO1xcblxcbiAgICAgICAgYXhpb3MuZ2V0KFxcXCJhcGkvY29tcGxhaW50L3ZpZXcvXFxcIiArIHRoaXMuJHJvdXRlLnBhcmFtcy5pZClcXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxcXCJyZXM9PT09PlxcXCIsIHJlcy5kYXRhLmRhdGEpO1xcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBsYWludCA9IHJlcy5kYXRhLmRhdGEuY29tcGxhaW50O1xcbiAgICAgICAgICAgICAgICB0aGlzLmF0bV9kZXRhaWxzID0gcmVzLmRhdGEuZGF0YS5hdG1fZGV0YWlscztcXG4gICAgICAgICAgICAgICAgdGhpcy5jb21wbGFpbnRfZGV0YWlscyA9IHJlcy5kYXRhLmRhdGEuY29tcGxhaW50X2RldGFpbHM7XFxuICAgICAgICAgICAgICAgIHRoaXMuY3VzdG9kaWFuX2RldGFpbHMgPSByZXMuZGF0YS5kYXRhLmN1c3RvZGlhbl9kZXRhaWxzO1xcbiAgICAgICAgICAgICAgICB0aGlzLnNsc19kZXRhaWxzID0gcmVzLmRhdGEuZGF0YS5zbHNfZGV0YWlscztcXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFN0YXR1cyA9IHRoaXMuY29tcGxhaW50Lndvcmtfc3RhdHVzIHx8ICdQZW5kaW5nJztcXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXFxcImF0bVxcXCIsYXRtX2RldGFpbHMpO1xcblxcbiAgICAgICAgICAgIH0pO1xcblxcbiAgICB9LFxcbiAgICBtb3VudGVkKCkge1xcbiAgICAgICAgLy8gSW5pdGlhbCBBUEkgY2FsbCB3aGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZFxcbiAgICAgICAgY29uc29sZS5sb2coXFxcIm1vdW50ZWRcXFwiKTtcXG4gICAgICAgIHRoaXMuYXV0aFVzZXI9bG9jYWxTdG9yYWdlLmdldEl0ZW0oXFxcImF1dGhcXFwiKTtcXG4gICAgICAgIGlmICh0aGlzLmF1dGhVc2VyKSB7XFxuICAgICAgICAgICAgdGhpcy5hdXRoVXNlciA9IEpTT04ucGFyc2UodGhpcy5hdXRoVXNlcik7XFxuICAgICAgICB9XFxuICAgICAgICAvLyB0aGlzLmxvYWRUaWNrZXRzKCk7XFxuICAgIH0sXFxufTtcXG48L3NjcmlwdD5cXG5cXG48c3R5bGUgc2NvcGVkPlxcbi8qIEN1c3RvbSBTdHlsZXMgaWYgbmVjZXNzYXJ5ICovXFxuLm1lc3NhZ2UtbGlzdCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxufVxcblxcbi5jYXJkIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG4uY2hhdC1ib3gge1xcbiAgbWF4LWhlaWdodDogNjAwcHg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4uY2hhdC1tZXNzYWdlcyB7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLm1lc3NhZ2Uge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uYWRtaW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcXG59XFxuXFxuLmVuZ2luZWVyLW1lc3NhZ2Uge1xcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjMDA3YmZmO1xcbn1cXG5cXG4udXNlci1tZXNzYWdlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGVkZGE7XFxufVxcblxcbi5jaGF0aGVhZGluZyB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNoYXQtYm9keSB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcXG59XFxuXFxuLmNhcmQtZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyIG10LTVcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgbWItNCBwLTMgYm9yZGVyIGJnLWxpZ2h0IHJvdW5kZWRcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC00XCIgfSwgW1xuICAgICAgICBfdm0uX20oMCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiYnV0dG9uXCIsIHsgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5XCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiQ29kZSAtIFwiICtcbiAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgIF92bS5jb21wbGFpbnQgJiYgX3ZtLmNvbXBsYWludC5hdG1cbiAgICAgICAgICAgICAgICAgID8gX3ZtLmNvbXBsYWludC5hdG0uYXRtX2lkXG4gICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJBZGRyZXNzIC0gXCIgK1xuICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgX3ZtLmF0bV9kZXRhaWxzLmNpdHlfbmFtZSArXG4gICAgICAgICAgICAgICAgICBcIiwgXCIgK1xuICAgICAgICAgICAgICAgICAgX3ZtLmF0bV9kZXRhaWxzLmRpc3RyaWN0X25hbWUgK1xuICAgICAgICAgICAgICAgICAgXCIsIFwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5hdG1fZGV0YWlscy5zdGF0ZV9uYW1lXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgW192bS5fdihcIkFyZWEgQ29kZSAtXCIgKyBfdm0uX3MoX3ZtLmF0bV9kZXRhaWxzLmFyZWFfY29kZSkpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwiUG9zdGNvZGUgLSBcIiArIF92bS5fcyhfdm0uYXRtX2RldGFpbHMucG9zdGNvZGUpKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImJ1dHRvblwiLCB7IHN0YXRpY0NsYXNzOiBcImJ0biBidG4taW5mb1wiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5hdG1fZGV0YWlscy5iYW5rX25hbWUpKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNFwiIH0sIFtcbiAgICAgICAgX3ZtLnNsc19kZXRhaWxzXG4gICAgICAgICAgPyBfYyhcInBcIiwgW19jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCJTTE0gRG9ja2V0IE5vIDpcIildKV0pXG4gICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLnNsc19kZXRhaWxzXG4gICAgICAgICAgPyBfYyhcImJ1dHRvblwiLCB7IHN0YXRpY0NsYXNzOiBcImJ0biBidG4taW5mb1wiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uc2xzX2RldGFpbHMgPyBfdm0uc2xzX2RldGFpbHMuc2xzX2RvY2tldF9ubyA6IFwiXCIpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImJ1dHRvblwiLCB7IHN0YXRpY0NsYXNzOiBcImJ0biBidG4taW5mb1wiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5jb21wbGFpbnQuZG9ja2V0X25vKSlcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTRcIiB9LCBbXG4gICAgICAgIF92bS5fbSgyKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLmNvbXBsYWludC53b3JrX3N0YXR1cyA9PT0gXCJQZW5kaW5nXCJcbiAgICAgICAgICA/IF9jKFwiYnV0dG9uXCIsIHsgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kYW5nZXJcIiB9LCBbX3ZtLl92KFwiUGVuZGluZ1wiKV0pXG4gICAgICAgICAgOiBfdm0uY29tcGxhaW50Lndvcmtfc3RhdHVzID09PSBcIlByb2Nlc3NpbmdcIlxuICAgICAgICAgID8gX2MoXCJidXR0b25cIiwgeyBzdGF0aWNDbGFzczogXCJidG4gYnRuLXdhcm5pbmdcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIlByb2Nlc3NpbmdcIilcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgOiBfdm0uY29tcGxhaW50Lndvcmtfc3RhdHVzID09PSBcIkNvbXBsZXRlZFwiXG4gICAgICAgICAgPyBfYyhcImJ1dHRvblwiLCB7IHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2Vzc1wiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiQ29tcGxldGVkXCIpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTRcIiB9LCBbXG4gICAgICAgIF92bS5jb21wbGFpbnQuaXNfc2xtID09PSAxICYmIF92bS5jdXN0b2RpYW5fZGV0YWlsc1xuICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ2aWV3dGFiIHZpZXd0YWJiZXIgYWN0aW9uLXRoXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uYXV0aFVzZXIuaWRfY21zX3ByaXZpbGVnZXMgPT09IDRcbiAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRyb2wtbGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQXNzaWduZWQgQ3VzdG9kaWFuIDpcIilcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInZpZXdhZGRyZXNzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICBDdXN0b2RpYW4gTmFtZTogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmN1c3RvZGlhbl9kZXRhaWxzLm5hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiKFwiICsgX3ZtLl9zKF92bS5jdXN0b2RpYW5fZGV0YWlscy5waG9uZSkgKyBcIilcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgIF0pXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtOFwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkIGNoYXQtYm94XCIgfSwgW1xuICAgICAgICAgIF92bS5fbSgzKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5IGNoYXQtYm9keVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNoYXQtbWVzc2FnZXNcIiB9LFxuICAgICAgICAgICAgICBfdm0uX2woX3ZtLmNvbXBsYWludF9kZXRhaWxzLCBmdW5jdGlvbihyb3csIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsga2V5OiBpbmRleCB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uYXV0aFVzZXIuaWRfY21zX3ByaXZpbGVnZXMgPT0gM1xuICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWItM1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5pc19hZG1pblxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5wb3N0X2Zvcl9lbmdpbmVlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtZXNzYWdlIGFkbWluIGVuZ2luZWVyLW1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaDVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGF0aGVhZGluZyB0ZXh0LWluZm9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ2FsbCBDZW50ZXJcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlIHRleHQtbXV0ZWQgc21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybWF0RGF0ZShyb3cucG9zdGVkX2F0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoX3ZtLl9zKHJvdy5jb21tZW50KSldKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWVzc2FnZSBhZG1pbiBjYWxsY2VudGVyLW1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaDVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGF0aGVhZGluZyB0ZXh0LWluZm9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ2FsbCBDZW50ZXJcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlIHRleHQtbXV0ZWQgc21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybWF0RGF0ZShyb3cucG9zdGVkX2F0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoX3ZtLl9zKHJvdy5jb21tZW50KSldKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWVzc2FnZSB1c2VyLW1lc3NhZ2VcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImg1XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2hhdGhlYWRpbmdcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHJvdy5jbGllbnRfbmFtZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJkYXRlIHRleHQtbXV0ZWQgc21hbGxcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5mb3JtYXREYXRlKHJvdy5wb3N0ZWRfYXQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KF92bS5fcyhyb3cuY29tbWVudCkpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLmF1dGhVc2VyLmlkX2Ntc19wcml2aWxlZ2VzID09IDRcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICByb3cuaXNfYWRtaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cucG9zdF9mb3JfZW5naW5lZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWVzc2FnZSBhZG1pbiBlbmdpbmVlci1tZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImg1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hhdGhlYWRpbmcgdGV4dC1pbmZvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ2FsbCBDZW50ZXIgKFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHJvdy5uYW1lKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlIHRleHQtbXV0ZWQgc21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybWF0RGF0ZShyb3cucG9zdGVkX2F0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoX3ZtLl9zKHJvdy5jb21tZW50KSldKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWVzc2FnZSBhZG1pbiBjYWxsY2VudGVyLW1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaDVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGF0aGVhZGluZyB0ZXh0LWluZm9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDYWxsIENlbnRlciAoXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3Mocm93Lm5hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGUgdGV4dC1tdXRlZCBzbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb3JtYXREYXRlKHJvdy5wb3N0ZWRfYXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihfdm0uX3Mocm93LmNvbW1lbnQpKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZXNzYWdlIHVzZXItbWVzc2FnZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaDVcIiwgeyBzdGF0aWNDbGFzczogXCJjaGF0aGVhZGluZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3Mocm93LmNsaWVudF9uYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImRhdGUgdGV4dC1tdXRlZCBzbWFsbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmZvcm1hdERhdGUocm93LnBvc3RlZF9hdCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoX3ZtLl9zKHJvdy5jb21tZW50KSldKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtZm9vdGVyXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZm9ybVwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc3VibWl0Q29tcGxhaW50Rm9ybS5hcHBseShudWxsLCBhcmd1bWVudHMpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uY29tbWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY29tbWVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDpcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jb21wbGFpbnQud29ya19zdGF0dXMgPT09IFwiQ29tcGxldGVkXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5hdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcyA9PT0gMyxcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJBZGQgQ29tbWVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJvd3M6IFwiM1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uY29tbWVudCB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jb21tZW50ID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS5hdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcyA9PSA0XG4gICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZFN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWxlY3RlZFN0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLCBmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID0gXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkU3RhdHVzID0gJGV2ZW50LnRhcmdldC5tdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJCRzZWxlY3RlZFZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiUGVuZGluZ1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiUGVuZGluZ1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCJQcm9jZXNzaW5nXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJQcm9jZXNzaW5nXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIkNvbXBsZXRlZFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQ29tcGxldGVkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zaG93TWFudWFsQ2xvc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNob3dNYW51YWxDbG9zZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5tYW51YWxDbG9zZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJtYW51YWxDbG9zZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2wgbWFudWFsLWNsb3NlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiTWFudWFsIENsb3NlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ubWFudWFsQ2xvc2UgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubWFudWFsQ2xvc2UgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNob3dMYWdSZWFzb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNob3dMYWdSZWFzb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRleHRhcmVhXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubGFnUmVhc29uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImxhZ1JlYXNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBwbGFjZWhvbGRlcjogXCJBZGQgbGFnIHJlYXNvbiAqXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmxhZ1JlYXNvbiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5sYWdSZWFzb24gPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jb21wbGFpbnQud29ya19zdGF0dXMgPT09IFwiQ29tcGxldGVkXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmF1dGhVc2VyLmlkX2Ntc19wcml2aWxlZ2VzID09PSAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlNlbmRcIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInBcIiwgW19jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCJBVE0gOlwiKV0pXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJwXCIsIFtfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiRG9ja2V0IE5vIDpcIildKV0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwicFwiLCBbX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIlN0YXR1cyA6XCIpXSldKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtaGVhZGVyIGJnLXByaW1hcnkgdGV4dC13aGl0ZVwiIH0sIFtcbiAgICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZWhlYWRpbmcgbWItMFwiIH0sIFtcbiAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1jb21tZW50c1wiLFxuICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfVxuICAgICAgICB9KSxcbiAgICAgICAgX3ZtLl92KFwiIERldGFpbHNcIilcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTIxZTdhMjU4XCIsIHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH0pXG4gIH1cbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTIxZTdhMjU4XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ29tcGxhaW50RGV0YWlsLnZ1ZVwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI2NzJmYWJlZlwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTIxZTdhMjU4XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ29tcGxhaW50RGV0YWlsLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMjFlN2EyNThcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Db21wbGFpbnREZXRhaWwudnVlXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoY29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTIxZTdhMjU4XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ29tcGxhaW50RGV0YWlsLnZ1ZVwiKVxufVxuLyogc2NyaXB0ICovXG5leHBvcnQgKiBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Db21wbGFpbnREZXRhaWwudnVlXCJcbmltcG9ydCBfX3Z1ZV9zY3JpcHRfXyBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Db21wbGFpbnREZXRhaWwudnVlXCJcbi8qIHRlbXBsYXRlICovXG5pbXBvcnQge3JlbmRlciBhcyBfX3Z1ZV9yZW5kZXJfXywgc3RhdGljUmVuZGVyRm5zIGFzIF9fdnVlX3N0YXRpY19yZW5kZXJfZm5zX199IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTIxZTdhMjU4XFxcIixcXFwiaGFzU2NvcGVkXFxcIjp0cnVlLFxcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ29tcGxhaW50RGV0YWlsLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBcImRhdGEtdi0yMWU3YTI1OFwiXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxuaW1wb3J0IG5vcm1hbGl6ZUNvbXBvbmVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudC1ub3JtYWxpemVyXCJcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV9yZW5kZXJfXyxcbiAgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxqc1xcXFxjb21wb25lbnRzXFxcXENvbXBsYWludERldGFpbC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMjFlN2EyNThcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0yMWU3YTI1OFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudC5leHBvcnRzXG4iXSwic291cmNlUm9vdCI6IiJ9