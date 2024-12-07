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
        action: "update",
        comment: this.comment,
        status: this.selectedStatus,
        manual_close: this.manualClose,
        lag_reason: this.lagReason
      };
      // Example POST request (replace URL as necessary)
      this.$http.post(`api/complaint/comment/${this.complaint.id}`, formData).then(response => {
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
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* Custom Styles if necessary */\n.message-list[data-v-21e7a258] {\n    border: 1px solid #ccc;\n    border-radius: 0.25rem;\n    padding: 15px;\n}\n.card[data-v-21e7a258] {\n    border: none;\n}\n.chat-box[data-v-21e7a258] {\n  max-height: 600px;\n  overflow-y: auto;\n}\n.chat-messages[data-v-21e7a258] {\n  height: 400px;\n  overflow-y: auto;\n}\n.message[data-v-21e7a258] {\n  padding: 10px;\n  border-radius: 10px;\n  margin-bottom: 10px;\n}\n.admin[data-v-21e7a258] {\n  background-color: #f1f1f1;\n}\n.engineer-message[data-v-21e7a258] {\n  border-left: 5px solid #007bff;\n}\n.user-message[data-v-21e7a258] {\n  background-color: #d4edda;\n}\n.chatheading[data-v-21e7a258] {\n  margin: 0;\n  font-weight: bold;\n}\n.chat-body[data-v-21e7a258] {\n  padding: 20px;\n  background-color: #f8f9fa;\n}\n.card-footer[data-v-21e7a258] {\n  background-color: #f8f9fa;\n  padding: 10px;\n}\n", "", {"version":3,"sources":["C:/Users/sujan/Desktop/Work/project freelance/Sankha/atm_proj/atm/resources/js/components/resources/js/components/ComplaintDetail.vue"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAgTA,gCAAA;AACA;IACA,uBAAA;IACA,uBAAA;IACA,cAAA;CACA;AAEA;IACA,aAAA;CACA;AACA;EACA,kBAAA;EACA,iBAAA;CACA;AAEA;EACA,cAAA;EACA,iBAAA;CACA;AAEA;EACA,cAAA;EACA,oBAAA;EACA,oBAAA;CACA;AAEA;EACA,0BAAA;CACA;AAEA;EACA,+BAAA;CACA;AAEA;EACA,0BAAA;CACA;AAEA;EACA,UAAA;EACA,kBAAA;CACA;AAEA;EACA,cAAA;EACA,0BAAA;CACA;AAEA;EACA,0BAAA;EACA,cAAA;CACA","file":"ComplaintDetail.vue","sourcesContent":["<template>\n    <div class=\"container mt-5\">\n\n        <!-- Top Information Design -->\n        <div class=\"row mb-4 p-3 border bg-light rounded\">\n            <div class=\"col-md-4\">\n                <p><strong>ATM :</strong></p>\n                <button class=\"btn btn-primary\">Code - {{ complaint && complaint.atm ? complaint.atm.atm_id :\n                    \"\"}}</button>\n                <p>Address - {{ atm_details.city_name + ', ' + atm_details.district_name + ', ' + atm_details.state_name }}</p>\n                <p>Area Code -{{ atm_details.area_code }}</p>\n                <p>Postcode - {{ atm_details.postcode }}</p>\n                <button class=\"btn btn-info\">{{ atm_details.bank_name }}</button>\n            </div>\n            <div class=\"col-md-4\">\n                <p v-if=\"sls_details\"><strong>SLM Docket No :</strong></p>\n                <button class=\"btn btn-info\" v-if=\"sls_details\">{{ sls_details ? sls_details.sls_docket_no : \"\" }}</button>\n                <p><strong>Docket No :</strong></p>\n                <button class=\"btn btn-info\">{{ complaint.docket_no }}</button>\n            </div>\n            <div class=\"col-md-4\">\n                <p><strong>Status :</strong></p>\n                <!-- <button class=\"btn btn-success\">Completed</button> -->\n                <button v-if=\"complaint.work_status === 'Pending'\" class=\"btn btn-danger\">Pending</button>\n                <button v-else-if=\"complaint.work_status === 'Processing'\" class=\"btn btn-warning\">Processing</button>\n                <button v-else-if=\"complaint.work_status === 'Completed'\" class=\"btn btn-success\">Completed</button>\n\n            </div>\n            <div class=\"col-md-4\">\n                <div v-if=\"complaint.is_slm === 1 && custodian_details\" class=\"viewtab viewtabber action-th\">\n                    <div v-if=\"authUser.id_cms_privileges === 4\">\n                        <label class=\"control-label\">Assigned Custodian :</label>\n                        <!-- You can enable the button below if needed for assignment functionality -->\n                        <!-- <a class=\"action-btn\" style=\"padding: 2px 6px; border: 1px solid #d9d9d9; color: #191919; font-size: 1.0em; text-align: center; display: inline-block; border-radius: 3px; margin: 1px;\"\n            :href=\"'/dashboard/assignTicket/' + complaint.docket_no\"\n            data-toggle=\"tooltip\"\n            data-placement=\"top\"\n            title=\"Assign Custodian\">\n            <i class=\"fa fa-user-plus\"></i>\n        </a> -->\n                        <p class=\"viewaddress\">\n                            Custodian Name: {{ custodian_details.name }}\n                            <span>({{ custodian_details.phone }})</span>\n                        </p>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n\n\n        <div class=\"row justify-content-center\">\n    <div class=\"col-md-8\">\n      <div class=\"card chat-box\">\n        <div class=\"card-header bg-primary text-white\">\n          <h3 class=\"tableheading mb-0\"><i class=\"fa fa-comments\" aria-hidden=\"true\"></i> Details</h3>\n        </div>\n        <div class=\"card-body chat-body\">\n          <div class=\"chat-messages\">\n            <div v-for=\"(row, index) in complaint_details\" :key=\"index\">\n              <div v-if=\"authUser.id_cms_privileges == 3\" class=\"mb-3\">\n                <div v-if=\"row.is_admin\">\n                  <div v-if=\"row.post_for_engineer\" class=\"message admin engineer-message\">\n                    <div class=\"d-flex justify-content-between\">\n                      <h5 class=\"chatheading text-info\">Call Center</h5>\n                      <span class=\"date text-muted small\">{{ formatDate(row.posted_at) }}</span>\n                    </div>\n                    <p>{{ row.comment }}</p>\n                  </div>\n                  <div v-else class=\"message admin callcenter-message\">\n                    <div class=\"d-flex justify-content-between\">\n                      <h5 class=\"chatheading text-info\">Call Center</h5>\n                      <span class=\"date text-muted small\">{{ formatDate(row.posted_at) }}</span>\n                    </div>\n                    <p>{{ row.comment }}</p>\n                  </div>\n                </div>\n                <div v-else class=\"message user-message\">\n                  <div class=\"d-flex justify-content-between\">\n                    <h5 class=\"chatheading\">{{ row.client_name }}</h5>\n                    <span class=\"date text-muted small\">{{ formatDate(row.posted_at) }}</span>\n                  </div>\n                  <p>{{ row.comment }}</p>\n                </div>\n              </div>\n              <div v-else-if=\"authUser.id_cms_privileges == 4\" class=\"mb-3\">\n                <div v-if=\"row.is_admin\">\n                  <div v-if=\"row.post_for_engineer\" class=\"message admin engineer-message\">\n                    <div class=\"d-flex justify-content-between\">\n                      <h5 class=\"chatheading text-info\">Call Center ({{ row.name }})</h5>\n                      <span class=\"date text-muted small\">{{ formatDate(row.posted_at) }}</span>\n                    </div>\n                    <p>{{ row.comment }}</p>\n                  </div>\n                  <div v-else class=\"message admin callcenter-message\">\n                    <div class=\"d-flex justify-content-between\">\n                      <h5 class=\"chatheading text-info\">Call Center ({{ row.name }})</h5>\n                      <span class=\"date text-muted small\">{{ formatDate(row.posted_at) }}</span>\n                    </div>\n                    <p>{{ row.comment }}</p>\n                  </div>\n                </div>\n                <div v-else class=\"message user-message\">\n                  <div class=\"d-flex justify-content-between\">\n                    <h5 class=\"chatheading\">{{ row.client_name }}</h5>\n                    <span class=\"date text-muted small\">{{ formatDate(row.posted_at) }}</span>\n                  </div>\n                  <p>{{ row.comment }}</p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"card-footer\">\n          <form @submit.prevent=\"submitComplaintForm\">\n            <div class=\"form-group\">\n              <textarea v-model=\"comment\" :disabled=\"complaint.work_status === 'Completed' && authUser.id_cms_privileges === 3\" class=\"form-control\" placeholder=\"Add Comment\" rows=\"3\" required></textarea>\n            </div>\n\n            <div v-if=\"authUser.id_cms_privileges == 4\">\n              <div class=\"form-group\">\n                <select v-model=\"selectedStatus\" class=\"form-control\">\n                  <option value=\"Pending\">Pending</option>\n                  <option value=\"Processing\">Processing</option>\n                  <option value=\"Completed\">Completed</option>\n                </select>\n              </div>\n              <div class=\"form-group\" v-show=\"showManualClose\">\n                <input type=\"text\" v-model=\"manualClose\" class=\"form-control manual-close\" placeholder=\"Manual Close\" />\n              </div>\n              <div class=\"form-group\" v-show=\"showLagReason\">\n                <textarea v-model=\"lagReason\" class=\"form-control\" placeholder=\"Add lag reason *\"></textarea>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <button :disabled=\"complaint.work_status === 'Completed' && authUser.id_cms_privileges === 3\" type=\"submit\" class=\"btn btn-primary btn-block\">Send</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n\n\n        <!-- Chat Box Design -->\n        <!-- <h2 class=\"text-white bg-info p-2 rounded\">Details</h2>\n\n\n      <div class=\"message-list overflow-auto\" style=\"max-height: 300px;\">\n        <div\n          v-for=\"(message, index) in messages\"\n          :key=\"index\"\n          :class=\"['card mb-3', message.type]\"\n        >\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">{{ message.title }}</h5>\n            <p class=\"card-text\">{{ message.body }}</p>\n            <p class=\"card-text\">\n              <small class=\"text-muted\">{{ message.timestamp }}</small>\n            </p>\n          </div>\n        </div>\n      </div> -->\n\n        <!-- Add Comment Form -->\n        <!-- <div class=\"mt-3\">\n        <div class=\"form-group\">\n          <textarea\n            v-model=\"newComment\"\n            class=\"form-control\"\n            rows=\"3\"\n            placeholder=\"Add Comment\"\n          ></textarea>\n        </div>\n        <button @click=\"addComment\" class=\"btn btn-primary mt-2\">Send</button>\n      </div> -->\n    </div>\n</template>\n\n<script>\nexport default {\n    data() {\n        return {\n            // Sample messages\n            messages: [\n                {\n                    title: \"HITACHI\",\n                    body: \"cdf\",\n                    timestamp: \"10-09-2024 06:30 PM\",\n                    type: \"bg-gradient-primary text-white\"\n                },\n                {\n                    title: \"Call Center\",\n                    body: \"Name: Vivekananda Sharma Email: NA Phone No.: 7908079103 Comment: Cash Dispenser Fatal\",\n                    timestamp: \"10-09-2024 06:35 PM\",\n                    type: \"bg-gradient-info text-white\"\n                },\n                {\n                    title: \"Call Center\",\n                    body: \"Dear Team, Please call log for Dispenser issue, Custodian: Vivekananda Sharma (7908079103) & Eng: Chaitak (8017321602), Kindly provide the docket number...\",\n                    timestamp: \"10-09-2024 06:41 PM\",\n                    type: \"bg-gradient-warning text-white\"\n                }\n            ],\n            complaint: {},\n            atm_details: {},\n            complaint_details: [],\n            custodian_details: null,\n            sls_details: null,\n            // New comment input\n            newComment: \"\",\n            selectedStatus: null,\n            myPrivilegeId:3,\n            authUser: localStorage.getItem(\"auth\") ? JSON.parse(localStorage.getItem(\"auth\")) : null,\n            comment: '',\n      selectedStatus:  this.complaint ? this.complaint.work_status : 'Pending',\n      manualClose: '',\n      lagReason: '',\n        };\n    },\n    methods: {\n        // Function to add a new comment\n        addComment() {\n            if (this.newComment.trim()) {\n                const newMessage = {\n                    title: \"User Comment\",\n                    body: this.newComment,\n                    timestamp: new Date().toLocaleString(),\n                    type: \"bg-gradient-secondary text-white\"\n                };\n                this.messages.push(newMessage);\n                this.newComment = \"\"; // Clear the input after adding\n            }\n        },\n        isCommentDisabled() {\n            console.log(\"cakki\");\n\n            console.log(\"======>\",this.complaint.work_status,this.authUser.id_cms_privileges);\n\n            return this.complaint.work_status === 'Completed' && this.authUser.id_cms_privileges === 3;\n        },\n        showManualClose() {\n            return this.selectedStatus === 'Completed';\n        },\n        showLagReason() {\n            return this.selectedStatus === 'Processing';\n        },\n        submitComplaintForm() {\n            // Submit form logic using `comment`, `selectedStatus`, `manualClose`, and `lagReason` values.\n            const formData = {\n                action:\"update\",\n                comment: this.comment,\n                status: this.selectedStatus,\n                manual_close: this.manualClose,\n                lag_reason: this.lagReason,\n            };\n            // Example POST request (replace URL as necessary)\n            this.$http.post(`api/complaint/comment/${this.complaint.id}`, formData)\n                .then(response => {\n                    // handle success\n                })\n                .catch(error => {\n                    // handle error\n                });\n        },\n        formatDate(date) {\n            return new Date(date).toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });\n        },\n    },\n    beforeCreate() {\n        console.log(\" this.$route.params.id;\", this.$route.params.id);\n\n        axios.get(\"api/complaint/view/\" + this.$route.params.id)\n            .then((res) => {\n                console.log(\"res====>\", res.data.data);\n                this.complaint = res.data.data.complaint;\n                this.atm_details = res.data.data.atm_details;\n                this.complaint_details = res.data.data.complaint_details;\n                this.custodian_details = res.data.data.custodian_details;\n                this.sls_details = res.data.data.sls_details;\n                this.selectedStatus = this.complaint.work_status || 'Pending';\n                // console.log(\"atm\",atm_details);\n\n            });\n\n    },\n    mounted() {\n        // Initial API call when the component is mounted\n        console.log(\"mounted\");\n        this.authUser=localStorage.getItem(\"auth\");\n        if (this.authUser) {\n            this.authUser = JSON.parse(this.authUser);\n        }\n        // this.loadTickets();\n    },\n};\n</script>\n\n<style scoped>\n/* Custom Styles if necessary */\n.message-list {\n    border: 1px solid #ccc;\n    border-radius: 0.25rem;\n    padding: 15px;\n}\n\n.card {\n    border: none;\n}\n.chat-box {\n  max-height: 600px;\n  overflow-y: auto;\n}\n\n.chat-messages {\n  height: 400px;\n  overflow-y: auto;\n}\n\n.message {\n  padding: 10px;\n  border-radius: 10px;\n  margin-bottom: 10px;\n}\n\n.admin {\n  background-color: #f1f1f1;\n}\n\n.engineer-message {\n  border-left: 5px solid #007bff;\n}\n\n.user-message {\n  background-color: #d4edda;\n}\n\n.chatheading {\n  margin: 0;\n  font-weight: bold;\n}\n\n.chat-body {\n  padding: 20px;\n  background-color: #f8f9fa;\n}\n\n.card-footer {\n  background-color: #f8f9fa;\n  padding: 10px;\n}\n</style>\n"],"sourceRoot":""}]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tcGxhaW50RGV0YWlsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Db21wbGFpbnREZXRhaWwudnVlPzljZmQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tcGxhaW50RGV0YWlsLnZ1ZT8xZTNiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0NvbXBsYWludERldGFpbC52dWU/NTQ2ZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Db21wbGFpbnREZXRhaWwudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJtZXNzYWdlcyIsInRpdGxlIiwiYm9keSIsInRpbWVzdGFtcCIsInR5cGUiLCJjb21wbGFpbnQiLCJhdG1fZGV0YWlscyIsImNvbXBsYWludF9kZXRhaWxzIiwiY3VzdG9kaWFuX2RldGFpbHMiLCJzbHNfZGV0YWlscyIsIm5ld0NvbW1lbnQiLCJzZWxlY3RlZFN0YXR1cyIsIm15UHJpdmlsZWdlSWQiLCJhdXRoVXNlciIsImNvbW1lbnQiLCJtYW51YWxDbG9zZSIsImxhZ1JlYXNvbiIsIm1ldGhvZHMiLCJhZGRDb21tZW50IiwiaXNDb21tZW50RGlzYWJsZWQiLCJjb25zb2xlIiwic2hvd01hbnVhbENsb3NlIiwic2hvd0xhZ1JlYXNvbiIsInN1Ym1pdENvbXBsYWludEZvcm0iLCJhY3Rpb24iLCJzdGF0dXMiLCJtYW51YWxfY2xvc2UiLCJsYWdfcmVhc29uIiwidGhlbiIsImNhdGNoIiwiZm9ybWF0RGF0ZSIsImRheSIsIm1vbnRoIiwieWVhciIsImhvdXIiLCJtaW51dGUiLCJiZWZvcmVDcmVhdGUiLCJheGlvcyIsIm1vdW50ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsbURBQW1EO0FBQ3pFLGdCQUFnQixtQ0FBbUM7QUFDbkQ7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2tDO0FBQ2xDLElBQUksS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7O0FDeGxCaEI7O0FBRUE7QUFDQSxjQUFjLG1CQUFPLENBQUMsc2tCQUFnVDtBQUN0VTtBQUNBLDRDQUE0QyxRQUFTO0FBQ3JEO0FBQ0E7QUFDQSxVQUFVLG1CQUFPLENBQUMsNkhBQWdFO0FBQ2xGLCtDQUErQztBQUMvQztBQUNBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7OztBQ1hmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0EsRUFBRSxtQkFBTyxDQUFDLDZtQkFBNFI7QUFDdFM7QUFDQTtBQUNzSDtBQUNhO0FBQ25JO0FBQ2lWO0FBQ2pWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDbUc7QUFDbkcsZ0JBQWdCLHlHQUFrQjtBQUNsQyxFQUFFLGtJQUFjO0FBQ2hCLEVBQUUseU9BQWM7QUFDaEIsRUFBRSxrUEFBeUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsRUFhWDs7QUFFVSxnRkFBaUIiLCJmaWxlIjoianMvMjAuYnVuZGxlLmFhMmU0MWU4NDZmMjQyODcwYWVmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgbXQtNVwiPlxuXG4gICAgICAgIDwhLS0gVG9wIEluZm9ybWF0aW9uIERlc2lnbiAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBtYi00IHAtMyBib3JkZXIgYmctbGlnaHQgcm91bmRlZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00XCI+XG4gICAgICAgICAgICAgICAgPHA+PHN0cm9uZz5BVE0gOjwvc3Ryb25nPjwvcD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+Q29kZSAtIHt7IGNvbXBsYWludCAmJiBjb21wbGFpbnQuYXRtID8gY29tcGxhaW50LmF0bS5hdG1faWQgOlxuICAgICAgICAgICAgICAgICAgICBcIlwifX08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8cD5BZGRyZXNzIC0ge3sgYXRtX2RldGFpbHMuY2l0eV9uYW1lICsgJywgJyArIGF0bV9kZXRhaWxzLmRpc3RyaWN0X25hbWUgKyAnLCAnICsgYXRtX2RldGFpbHMuc3RhdGVfbmFtZSB9fTwvcD5cbiAgICAgICAgICAgICAgICA8cD5BcmVhIENvZGUgLXt7IGF0bV9kZXRhaWxzLmFyZWFfY29kZSB9fTwvcD5cbiAgICAgICAgICAgICAgICA8cD5Qb3N0Y29kZSAtIHt7IGF0bV9kZXRhaWxzLnBvc3Rjb2RlIH19PC9wPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWluZm9cIj57eyBhdG1fZGV0YWlscy5iYW5rX25hbWUgfX08L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00XCI+XG4gICAgICAgICAgICAgICAgPHAgdi1pZj1cInNsc19kZXRhaWxzXCI+PHN0cm9uZz5TTE0gRG9ja2V0IE5vIDo8L3N0cm9uZz48L3A+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4taW5mb1wiIHYtaWY9XCJzbHNfZGV0YWlsc1wiPnt7IHNsc19kZXRhaWxzID8gc2xzX2RldGFpbHMuc2xzX2RvY2tldF9ubyA6IFwiXCIgfX08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8cD48c3Ryb25nPkRvY2tldCBObyA6PC9zdHJvbmc+PC9wPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWluZm9cIj57eyBjb21wbGFpbnQuZG9ja2V0X25vIH19PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNFwiPlxuICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+U3RhdHVzIDo8L3N0cm9uZz48L3A+XG4gICAgICAgICAgICAgICAgPCEtLSA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCI+Q29tcGxldGVkPC9idXR0b24+IC0tPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdi1pZj1cImNvbXBsYWludC53b3JrX3N0YXR1cyA9PT0gJ1BlbmRpbmcnXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiPlBlbmRpbmc8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHYtZWxzZS1pZj1cImNvbXBsYWludC53b3JrX3N0YXR1cyA9PT0gJ1Byb2Nlc3NpbmcnXCIgY2xhc3M9XCJidG4gYnRuLXdhcm5pbmdcIj5Qcm9jZXNzaW5nPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB2LWVsc2UtaWY9XCJjb21wbGFpbnQud29ya19zdGF0dXMgPT09ICdDb21wbGV0ZWQnXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIj5Db21wbGV0ZWQ8L2J1dHRvbj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJjb21wbGFpbnQuaXNfc2xtID09PSAxICYmIGN1c3RvZGlhbl9kZXRhaWxzXCIgY2xhc3M9XCJ2aWV3dGFiIHZpZXd0YWJiZXIgYWN0aW9uLXRoXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cImF1dGhVc2VyLmlkX2Ntc19wcml2aWxlZ2VzID09PSA0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCI+QXNzaWduZWQgQ3VzdG9kaWFuIDo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBZb3UgY2FuIGVuYWJsZSB0aGUgYnV0dG9uIGJlbG93IGlmIG5lZWRlZCBmb3IgYXNzaWdubWVudCBmdW5jdGlvbmFsaXR5IC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSA8YSBjbGFzcz1cImFjdGlvbi1idG5cIiBzdHlsZT1cInBhZGRpbmc6IDJweCA2cHg7IGJvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7IGNvbG9yOiAjMTkxOTE5OyBmb250LXNpemU6IDEuMGVtOyB0ZXh0LWFsaWduOiBjZW50ZXI7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgYm9yZGVyLXJhZGl1czogM3B4OyBtYXJnaW46IDFweDtcIlxuICAgICAgICAgICAgOmhyZWY9XCInL2Rhc2hib2FyZC9hc3NpZ25UaWNrZXQvJyArIGNvbXBsYWludC5kb2NrZXRfbm9cIlxuICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJcbiAgICAgICAgICAgIGRhdGEtcGxhY2VtZW50PVwidG9wXCJcbiAgICAgICAgICAgIHRpdGxlPVwiQXNzaWduIEN1c3RvZGlhblwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS11c2VyLXBsdXNcIj48L2k+XG4gICAgICAgIDwvYT4gLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInZpZXdhZGRyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3VzdG9kaWFuIE5hbWU6IHt7IGN1c3RvZGlhbl9kZXRhaWxzLm5hbWUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4oe3sgY3VzdG9kaWFuX2RldGFpbHMucGhvbmUgfX0pPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1tZC04XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBjaGF0LWJveFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXIgYmctcHJpbWFyeSB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgPGgzIGNsYXNzPVwidGFibGVoZWFkaW5nIG1iLTBcIj48aSBjbGFzcz1cImZhIGZhLWNvbW1lbnRzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiBEZXRhaWxzPC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgY2hhdC1ib2R5XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNoYXQtbWVzc2FnZXNcIj5cbiAgICAgICAgICAgIDxkaXYgdi1mb3I9XCIocm93LCBpbmRleCkgaW4gY29tcGxhaW50X2RldGFpbHNcIiA6a2V5PVwiaW5kZXhcIj5cbiAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiYXV0aFVzZXIuaWRfY21zX3ByaXZpbGVnZXMgPT0gM1wiIGNsYXNzPVwibWItM1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cInJvdy5pc19hZG1pblwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwicm93LnBvc3RfZm9yX2VuZ2luZWVyXCIgY2xhc3M9XCJtZXNzYWdlIGFkbWluIGVuZ2luZWVyLW1lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cImNoYXRoZWFkaW5nIHRleHQtaW5mb1wiPkNhbGwgQ2VudGVyPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRhdGUgdGV4dC1tdXRlZCBzbWFsbFwiPnt7IGZvcm1hdERhdGUocm93LnBvc3RlZF9hdCkgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cD57eyByb3cuY29tbWVudCB9fTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiB2LWVsc2UgY2xhc3M9XCJtZXNzYWdlIGFkbWluIGNhbGxjZW50ZXItbWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwiY2hhdGhlYWRpbmcgdGV4dC1pbmZvXCI+Q2FsbCBDZW50ZXI8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGF0ZSB0ZXh0LW11dGVkIHNtYWxsXCI+e3sgZm9ybWF0RGF0ZShyb3cucG9zdGVkX2F0KSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwPnt7IHJvdy5jb21tZW50IH19PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiB2LWVsc2UgY2xhc3M9XCJtZXNzYWdlIHVzZXItbWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJjaGF0aGVhZGluZ1wiPnt7IHJvdy5jbGllbnRfbmFtZSB9fTwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGF0ZSB0ZXh0LW11dGVkIHNtYWxsXCI+e3sgZm9ybWF0RGF0ZShyb3cucG9zdGVkX2F0KSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHA+e3sgcm93LmNvbW1lbnQgfX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHYtZWxzZS1pZj1cImF1dGhVc2VyLmlkX2Ntc19wcml2aWxlZ2VzID09IDRcIiBjbGFzcz1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJyb3cuaXNfYWRtaW5cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cInJvdy5wb3N0X2Zvcl9lbmdpbmVlclwiIGNsYXNzPVwibWVzc2FnZSBhZG1pbiBlbmdpbmVlci1tZXNzYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJjaGF0aGVhZGluZyB0ZXh0LWluZm9cIj5DYWxsIENlbnRlciAoe3sgcm93Lm5hbWUgfX0pPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRhdGUgdGV4dC1tdXRlZCBzbWFsbFwiPnt7IGZvcm1hdERhdGUocm93LnBvc3RlZF9hdCkgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cD57eyByb3cuY29tbWVudCB9fTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiB2LWVsc2UgY2xhc3M9XCJtZXNzYWdlIGFkbWluIGNhbGxjZW50ZXItbWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwiY2hhdGhlYWRpbmcgdGV4dC1pbmZvXCI+Q2FsbCBDZW50ZXIgKHt7IHJvdy5uYW1lIH19KTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkYXRlIHRleHQtbXV0ZWQgc21hbGxcIj57eyBmb3JtYXREYXRlKHJvdy5wb3N0ZWRfYXQpIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHA+e3sgcm93LmNvbW1lbnQgfX08L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHYtZWxzZSBjbGFzcz1cIm1lc3NhZ2UgdXNlci1tZXNzYWdlXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cImNoYXRoZWFkaW5nXCI+e3sgcm93LmNsaWVudF9uYW1lIH19PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkYXRlIHRleHQtbXV0ZWQgc21hbGxcIj57eyBmb3JtYXREYXRlKHJvdy5wb3N0ZWRfYXQpIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8cD57eyByb3cuY29tbWVudCB9fTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZm9vdGVyXCI+XG4gICAgICAgICAgPGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVwic3VibWl0Q29tcGxhaW50Rm9ybVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPHRleHRhcmVhIHYtbW9kZWw9XCJjb21tZW50XCIgOmRpc2FibGVkPVwiY29tcGxhaW50Lndvcmtfc3RhdHVzID09PSAnQ29tcGxldGVkJyAmJiBhdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcyA9PT0gM1wiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJBZGQgQ29tbWVudFwiIHJvd3M9XCIzXCIgcmVxdWlyZWQ+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCJhdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcyA9PSA0XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCB2LW1vZGVsPVwic2VsZWN0ZWRTdGF0dXNcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlBlbmRpbmdcIj5QZW5kaW5nPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUHJvY2Vzc2luZ1wiPlByb2Nlc3Npbmc8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDb21wbGV0ZWRcIj5Db21wbGV0ZWQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCIgdi1zaG93PVwic2hvd01hbnVhbENsb3NlXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cIm1hbnVhbENsb3NlXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgbWFudWFsLWNsb3NlXCIgcGxhY2Vob2xkZXI9XCJNYW51YWwgQ2xvc2VcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIiB2LXNob3c9XCJzaG93TGFnUmVhc29uXCI+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIHYtbW9kZWw9XCJsYWdSZWFzb25cIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiQWRkIGxhZyByZWFzb24gKlwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gOmRpc2FibGVkPVwiY29tcGxhaW50Lndvcmtfc3RhdHVzID09PSAnQ29tcGxldGVkJyAmJiBhdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcyA9PT0gM1wiIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2tcIj5TZW5kPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG5cblxuXG5cbiAgICAgICAgPCEtLSBDaGF0IEJveCBEZXNpZ24gLS0+XG4gICAgICAgIDwhLS0gPGgyIGNsYXNzPVwidGV4dC13aGl0ZSBiZy1pbmZvIHAtMiByb3VuZGVkXCI+RGV0YWlsczwvaDI+XG5cblxuICAgICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2UtbGlzdCBvdmVyZmxvdy1hdXRvXCIgc3R5bGU9XCJtYXgtaGVpZ2h0OiAzMDBweDtcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHYtZm9yPVwiKG1lc3NhZ2UsIGluZGV4KSBpbiBtZXNzYWdlc1wiXG4gICAgICAgICAgOmtleT1cImluZGV4XCJcbiAgICAgICAgICA6Y2xhc3M9XCJbJ2NhcmQgbWItMycsIG1lc3NhZ2UudHlwZV1cIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgPGg1IGNsYXNzPVwiY2FyZC10aXRsZVwiPnt7IG1lc3NhZ2UudGl0bGUgfX08L2g1PlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHRcIj57eyBtZXNzYWdlLmJvZHkgfX08L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dFwiPlxuICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+e3sgbWVzc2FnZS50aW1lc3RhbXAgfX08L3NtYWxsPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PiAtLT5cblxuICAgICAgICA8IS0tIEFkZCBDb21tZW50IEZvcm0gLS0+XG4gICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cIm10LTNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgIHYtbW9kZWw9XCJuZXdDb21tZW50XCJcbiAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgIHJvd3M9XCIzXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIENvbW1lbnRcIlxuICAgICAgICAgID48L3RleHRhcmVhPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJhZGRDb21tZW50XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgbXQtMlwiPlNlbmQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PiAtLT5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC8vIFNhbXBsZSBtZXNzYWdlc1xuICAgICAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkhJVEFDSElcIixcbiAgICAgICAgICAgICAgICAgICAgYm9keTogXCJjZGZcIixcbiAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wOiBcIjEwLTA5LTIwMjQgMDY6MzAgUE1cIixcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJiZy1ncmFkaWVudC1wcmltYXJ5IHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJDYWxsIENlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBib2R5OiBcIk5hbWU6IFZpdmVrYW5hbmRhIFNoYXJtYSBFbWFpbDogTkEgUGhvbmUgTm8uOiA3OTA4MDc5MTAzIENvbW1lbnQ6IENhc2ggRGlzcGVuc2VyIEZhdGFsXCIsXG4gICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogXCIxMC0wOS0yMDI0IDA2OjM1IFBNXCIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYmctZ3JhZGllbnQtaW5mbyB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiQ2FsbCBDZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgYm9keTogXCJEZWFyIFRlYW0sIFBsZWFzZSBjYWxsIGxvZyBmb3IgRGlzcGVuc2VyIGlzc3VlLCBDdXN0b2RpYW46IFZpdmVrYW5hbmRhIFNoYXJtYSAoNzkwODA3OTEwMykgJiBFbmc6IENoYWl0YWsgKDgwMTczMjE2MDIpLCBLaW5kbHkgcHJvdmlkZSB0aGUgZG9ja2V0IG51bWJlci4uLlwiLFxuICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IFwiMTAtMDktMjAyNCAwNjo0MSBQTVwiLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJnLWdyYWRpZW50LXdhcm5pbmcgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGNvbXBsYWludDoge30sXG4gICAgICAgICAgICBhdG1fZGV0YWlsczoge30sXG4gICAgICAgICAgICBjb21wbGFpbnRfZGV0YWlsczogW10sXG4gICAgICAgICAgICBjdXN0b2RpYW5fZGV0YWlsczogbnVsbCxcbiAgICAgICAgICAgIHNsc19kZXRhaWxzOiBudWxsLFxuICAgICAgICAgICAgLy8gTmV3IGNvbW1lbnQgaW5wdXRcbiAgICAgICAgICAgIG5ld0NvbW1lbnQ6IFwiXCIsXG4gICAgICAgICAgICBzZWxlY3RlZFN0YXR1czogbnVsbCxcbiAgICAgICAgICAgIG15UHJpdmlsZWdlSWQ6MyxcbiAgICAgICAgICAgIGF1dGhVc2VyOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImF1dGhcIikgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXV0aFwiKSkgOiBudWxsLFxuICAgICAgICAgICAgY29tbWVudDogJycsXG4gICAgICBzZWxlY3RlZFN0YXR1czogIHRoaXMuY29tcGxhaW50ID8gdGhpcy5jb21wbGFpbnQud29ya19zdGF0dXMgOiAnUGVuZGluZycsXG4gICAgICBtYW51YWxDbG9zZTogJycsXG4gICAgICBsYWdSZWFzb246ICcnLFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICAvLyBGdW5jdGlvbiB0byBhZGQgYSBuZXcgY29tbWVudFxuICAgICAgICBhZGRDb21tZW50KCkge1xuICAgICAgICAgICAgaWYgKHRoaXMubmV3Q29tbWVudC50cmltKCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdNZXNzYWdlID0ge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJVc2VyIENvbW1lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgYm9keTogdGhpcy5uZXdDb21tZW50LFxuICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJiZy1ncmFkaWVudC1zZWNvbmRhcnkgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VzLnB1c2gobmV3TWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXdDb21tZW50ID0gXCJcIjsgLy8gQ2xlYXIgdGhlIGlucHV0IGFmdGVyIGFkZGluZ1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBpc0NvbW1lbnREaXNhYmxlZCgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2Fra2lcIik7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiPT09PT09PlwiLHRoaXMuY29tcGxhaW50Lndvcmtfc3RhdHVzLHRoaXMuYXV0aFVzZXIuaWRfY21zX3ByaXZpbGVnZXMpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wbGFpbnQud29ya19zdGF0dXMgPT09ICdDb21wbGV0ZWQnICYmIHRoaXMuYXV0aFVzZXIuaWRfY21zX3ByaXZpbGVnZXMgPT09IDM7XG4gICAgICAgIH0sXG4gICAgICAgIHNob3dNYW51YWxDbG9zZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkU3RhdHVzID09PSAnQ29tcGxldGVkJztcbiAgICAgICAgfSxcbiAgICAgICAgc2hvd0xhZ1JlYXNvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkU3RhdHVzID09PSAnUHJvY2Vzc2luZyc7XG4gICAgICAgIH0sXG4gICAgICAgIHN1Ym1pdENvbXBsYWludEZvcm0oKSB7XG4gICAgICAgICAgICAvLyBTdWJtaXQgZm9ybSBsb2dpYyB1c2luZyBgY29tbWVudGAsIGBzZWxlY3RlZFN0YXR1c2AsIGBtYW51YWxDbG9zZWAsIGFuZCBgbGFnUmVhc29uYCB2YWx1ZXMuXG4gICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IHtcbiAgICAgICAgICAgICAgICBhY3Rpb246XCJ1cGRhdGVcIixcbiAgICAgICAgICAgICAgICBjb21tZW50OiB0aGlzLmNvbW1lbnQsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiB0aGlzLnNlbGVjdGVkU3RhdHVzLFxuICAgICAgICAgICAgICAgIG1hbnVhbF9jbG9zZTogdGhpcy5tYW51YWxDbG9zZSxcbiAgICAgICAgICAgICAgICBsYWdfcmVhc29uOiB0aGlzLmxhZ1JlYXNvbixcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyBFeGFtcGxlIFBPU1QgcmVxdWVzdCAocmVwbGFjZSBVUkwgYXMgbmVjZXNzYXJ5KVxuICAgICAgICAgICAgdGhpcy4kaHR0cC5wb3N0KGBhcGkvY29tcGxhaW50L2NvbW1lbnQvJHt0aGlzLmNvbXBsYWludC5pZH1gLCBmb3JtRGF0YSlcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBzdWNjZXNzXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBoYW5kbGUgZXJyb3JcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZm9ybWF0RGF0ZShkYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZSkudG9Mb2NhbGVTdHJpbmcoJ2VuLUdCJywgeyBkYXk6ICcyLWRpZ2l0JywgbW9udGg6ICcyLWRpZ2l0JywgeWVhcjogJ251bWVyaWMnLCBob3VyOiAnMi1kaWdpdCcsIG1pbnV0ZTogJzItZGlnaXQnIH0pO1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgYmVmb3JlQ3JlYXRlKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIiB0aGlzLiRyb3V0ZS5wYXJhbXMuaWQ7XCIsIHRoaXMuJHJvdXRlLnBhcmFtcy5pZCk7XG5cbiAgICAgICAgYXhpb3MuZ2V0KFwiYXBpL2NvbXBsYWludC92aWV3L1wiICsgdGhpcy4kcm91dGUucGFyYW1zLmlkKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzPT09PT5cIiwgcmVzLmRhdGEuZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wbGFpbnQgPSByZXMuZGF0YS5kYXRhLmNvbXBsYWludDtcbiAgICAgICAgICAgICAgICB0aGlzLmF0bV9kZXRhaWxzID0gcmVzLmRhdGEuZGF0YS5hdG1fZGV0YWlscztcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBsYWludF9kZXRhaWxzID0gcmVzLmRhdGEuZGF0YS5jb21wbGFpbnRfZGV0YWlscztcbiAgICAgICAgICAgICAgICB0aGlzLmN1c3RvZGlhbl9kZXRhaWxzID0gcmVzLmRhdGEuZGF0YS5jdXN0b2RpYW5fZGV0YWlscztcbiAgICAgICAgICAgICAgICB0aGlzLnNsc19kZXRhaWxzID0gcmVzLmRhdGEuZGF0YS5zbHNfZGV0YWlscztcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkU3RhdHVzID0gdGhpcy5jb21wbGFpbnQud29ya19zdGF0dXMgfHwgJ1BlbmRpbmcnO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYXRtXCIsYXRtX2RldGFpbHMpO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgIH0sXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgLy8gSW5pdGlhbCBBUEkgY2FsbCB3aGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZFxuICAgICAgICBjb25zb2xlLmxvZyhcIm1vdW50ZWRcIik7XG4gICAgICAgIHRoaXMuYXV0aFVzZXI9bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhdXRoXCIpO1xuICAgICAgICBpZiAodGhpcy5hdXRoVXNlcikge1xuICAgICAgICAgICAgdGhpcy5hdXRoVXNlciA9IEpTT04ucGFyc2UodGhpcy5hdXRoVXNlcik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcy5sb2FkVGlja2V0cygpO1xuICAgIH0sXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4vKiBDdXN0b20gU3R5bGVzIGlmIG5lY2Vzc2FyeSAqL1xuLm1lc3NhZ2UtbGlzdCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAgIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5jYXJkIHtcbiAgICBib3JkZXI6IG5vbmU7XG59XG4uY2hhdC1ib3gge1xuICBtYXgtaGVpZ2h0OiA2MDBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmNoYXQtbWVzc2FnZXMge1xuICBoZWlnaHQ6IDQwMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4ubWVzc2FnZSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5hZG1pbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG59XG5cbi5lbmdpbmVlci1tZXNzYWdlIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjMDA3YmZmO1xufVxuXG4udXNlci1tZXNzYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZWRkYTtcbn1cblxuLmNoYXRoZWFkaW5nIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNoYXQtYm9keSB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG59XG5cbi5jYXJkLWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG48L3N0eWxlPlxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcbi8qIEN1c3RvbSBTdHlsZXMgaWYgbmVjZXNzYXJ5ICovXFxuLm1lc3NhZ2UtbGlzdFtkYXRhLXYtMjFlN2EyNThdIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gICAgcGFkZGluZzogMTVweDtcXG59XFxuLmNhcmRbZGF0YS12LTIxZTdhMjU4XSB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuLmNoYXQtYm94W2RhdGEtdi0yMWU3YTI1OF0ge1xcbiAgbWF4LWhlaWdodDogNjAwcHg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG4uY2hhdC1tZXNzYWdlc1tkYXRhLXYtMjFlN2EyNThdIHtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG4ubWVzc2FnZVtkYXRhLXYtMjFlN2EyNThdIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLmFkbWluW2RhdGEtdi0yMWU3YTI1OF0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcXG59XFxuLmVuZ2luZWVyLW1lc3NhZ2VbZGF0YS12LTIxZTdhMjU4XSB7XFxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICMwMDdiZmY7XFxufVxcbi51c2VyLW1lc3NhZ2VbZGF0YS12LTIxZTdhMjU4XSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRlZGRhO1xcbn1cXG4uY2hhdGhlYWRpbmdbZGF0YS12LTIxZTdhMjU4XSB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmNoYXQtYm9keVtkYXRhLXYtMjFlN2EyNThdIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xcbn1cXG4uY2FyZC1mb290ZXJbZGF0YS12LTIxZTdhMjU4XSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkM6L1VzZXJzL3N1amFuL0Rlc2t0b3AvV29yay9wcm9qZWN0IGZyZWVsYW5jZS9TYW5raGEvYXRtX3Byb2ovYXRtL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0NvbXBsYWludERldGFpbC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdUQSxnQ0FBQTtBQUNBO0lBQ0EsdUJBQUE7SUFDQSx1QkFBQTtJQUNBLGNBQUE7Q0FDQTtBQUVBO0lBQ0EsYUFBQTtDQUNBO0FBQ0E7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0NBQ0E7QUFFQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtDQUNBO0FBRUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtDQUNBO0FBRUE7RUFDQSwwQkFBQTtDQUNBO0FBRUE7RUFDQSwrQkFBQTtDQUNBO0FBRUE7RUFDQSwwQkFBQTtDQUNBO0FBRUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7Q0FDQTtBQUVBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0NBQ0E7QUFFQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtDQUNBXCIsXCJmaWxlXCI6XCJDb21wbGFpbnREZXRhaWwudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyIG10LTVcXFwiPlxcblxcbiAgICAgICAgPCEtLSBUb3AgSW5mb3JtYXRpb24gRGVzaWduIC0tPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93IG1iLTQgcC0zIGJvcmRlciBiZy1saWdodCByb3VuZGVkXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNFxcXCI+XFxuICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+QVRNIDo8L3N0cm9uZz48L3A+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCI+Q29kZSAtIHt7IGNvbXBsYWludCAmJiBjb21wbGFpbnQuYXRtID8gY29tcGxhaW50LmF0bS5hdG1faWQgOlxcbiAgICAgICAgICAgICAgICAgICAgXFxcIlxcXCJ9fTwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8cD5BZGRyZXNzIC0ge3sgYXRtX2RldGFpbHMuY2l0eV9uYW1lICsgJywgJyArIGF0bV9kZXRhaWxzLmRpc3RyaWN0X25hbWUgKyAnLCAnICsgYXRtX2RldGFpbHMuc3RhdGVfbmFtZSB9fTwvcD5cXG4gICAgICAgICAgICAgICAgPHA+QXJlYSBDb2RlIC17eyBhdG1fZGV0YWlscy5hcmVhX2NvZGUgfX08L3A+XFxuICAgICAgICAgICAgICAgIDxwPlBvc3Rjb2RlIC0ge3sgYXRtX2RldGFpbHMucG9zdGNvZGUgfX08L3A+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4taW5mb1xcXCI+e3sgYXRtX2RldGFpbHMuYmFua19uYW1lIH19PC9idXR0b24+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTRcXFwiPlxcbiAgICAgICAgICAgICAgICA8cCB2LWlmPVxcXCJzbHNfZGV0YWlsc1xcXCI+PHN0cm9uZz5TTE0gRG9ja2V0IE5vIDo8L3N0cm9uZz48L3A+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4taW5mb1xcXCIgdi1pZj1cXFwic2xzX2RldGFpbHNcXFwiPnt7IHNsc19kZXRhaWxzID8gc2xzX2RldGFpbHMuc2xzX2RvY2tldF9ubyA6IFxcXCJcXFwiIH19PC9idXR0b24+XFxuICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+RG9ja2V0IE5vIDo8L3N0cm9uZz48L3A+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4taW5mb1xcXCI+e3sgY29tcGxhaW50LmRvY2tldF9ubyB9fTwvYnV0dG9uPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC00XFxcIj5cXG4gICAgICAgICAgICAgICAgPHA+PHN0cm9uZz5TdGF0dXMgOjwvc3Ryb25nPjwvcD5cXG4gICAgICAgICAgICAgICAgPCEtLSA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiPkNvbXBsZXRlZDwvYnV0dG9uPiAtLT5cXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB2LWlmPVxcXCJjb21wbGFpbnQud29ya19zdGF0dXMgPT09ICdQZW5kaW5nJ1xcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIj5QZW5kaW5nPC9idXR0b24+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gdi1lbHNlLWlmPVxcXCJjb21wbGFpbnQud29ya19zdGF0dXMgPT09ICdQcm9jZXNzaW5nJ1xcXCIgY2xhc3M9XFxcImJ0biBidG4td2FybmluZ1xcXCI+UHJvY2Vzc2luZzwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHYtZWxzZS1pZj1cXFwiY29tcGxhaW50Lndvcmtfc3RhdHVzID09PSAnQ29tcGxldGVkJ1xcXCIgY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCI+Q29tcGxldGVkPC9idXR0b24+XFxuXFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTRcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XFxcImNvbXBsYWludC5pc19zbG0gPT09IDEgJiYgY3VzdG9kaWFuX2RldGFpbHNcXFwiIGNsYXNzPVxcXCJ2aWV3dGFiIHZpZXd0YWJiZXIgYWN0aW9uLXRoXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cXFwiYXV0aFVzZXIuaWRfY21zX3ByaXZpbGVnZXMgPT09IDRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCI+QXNzaWduZWQgQ3VzdG9kaWFuIDo8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gWW91IGNhbiBlbmFibGUgdGhlIGJ1dHRvbiBiZWxvdyBpZiBuZWVkZWQgZm9yIGFzc2lnbm1lbnQgZnVuY3Rpb25hbGl0eSAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxhIGNsYXNzPVxcXCJhY3Rpb24tYnRuXFxcIiBzdHlsZT1cXFwicGFkZGluZzogMnB4IDZweDsgYm9yZGVyOiAxcHggc29saWQgI2Q5ZDlkOTsgY29sb3I6ICMxOTE5MTk7IGZvbnQtc2l6ZTogMS4wZW07IHRleHQtYWxpZ246IGNlbnRlcjsgZGlzcGxheTogaW5saW5lLWJsb2NrOyBib3JkZXItcmFkaXVzOiAzcHg7IG1hcmdpbjogMXB4O1xcXCJcXG4gICAgICAgICAgICA6aHJlZj1cXFwiJy9kYXNoYm9hcmQvYXNzaWduVGlja2V0LycgKyBjb21wbGFpbnQuZG9ja2V0X25vXFxcIlxcbiAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVxcXCJ0b29sdGlwXFxcIlxcbiAgICAgICAgICAgIGRhdGEtcGxhY2VtZW50PVxcXCJ0b3BcXFwiXFxuICAgICAgICAgICAgdGl0bGU9XFxcIkFzc2lnbiBDdXN0b2RpYW5cXFwiPlxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS11c2VyLXBsdXNcXFwiPjwvaT5cXG4gICAgICAgIDwvYT4gLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcInZpZXdhZGRyZXNzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3VzdG9kaWFuIE5hbWU6IHt7IGN1c3RvZGlhbl9kZXRhaWxzLm5hbWUgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+KHt7IGN1c3RvZGlhbl9kZXRhaWxzLnBob25lIH19KTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG5cXG5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLThcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQgY2hhdC1ib3hcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1oZWFkZXIgYmctcHJpbWFyeSB0ZXh0LXdoaXRlXFxcIj5cXG4gICAgICAgICAgPGgzIGNsYXNzPVxcXCJ0YWJsZWhlYWRpbmcgbWItMFxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWNvbW1lbnRzXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPiBEZXRhaWxzPC9oMz5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5IGNoYXQtYm9keVxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNoYXQtbWVzc2FnZXNcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgdi1mb3I9XFxcIihyb3csIGluZGV4KSBpbiBjb21wbGFpbnRfZGV0YWlsc1xcXCIgOmtleT1cXFwiaW5kZXhcXFwiPlxcbiAgICAgICAgICAgICAgPGRpdiB2LWlmPVxcXCJhdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcyA9PSAzXFxcIiBjbGFzcz1cXFwibWItM1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cXFwicm93LmlzX2FkbWluXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XFxcInJvdy5wb3N0X2Zvcl9lbmdpbmVlclxcXCIgY2xhc3M9XFxcIm1lc3NhZ2UgYWRtaW4gZW5naW5lZXItbWVzc2FnZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XFxcImNoYXRoZWFkaW5nIHRleHQtaW5mb1xcXCI+Q2FsbCBDZW50ZXI8L2g1PlxcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZGF0ZSB0ZXh0LW11dGVkIHNtYWxsXFxcIj57eyBmb3JtYXREYXRlKHJvdy5wb3N0ZWRfYXQpIH19PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8cD57eyByb3cuY29tbWVudCB9fTwvcD5cXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IHYtZWxzZSBjbGFzcz1cXFwibWVzc2FnZSBhZG1pbiBjYWxsY2VudGVyLW1lc3NhZ2VcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVxcXCJjaGF0aGVhZGluZyB0ZXh0LWluZm9cXFwiPkNhbGwgQ2VudGVyPC9oNT5cXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImRhdGUgdGV4dC1tdXRlZCBzbWFsbFxcXCI+e3sgZm9ybWF0RGF0ZShyb3cucG9zdGVkX2F0KSB9fTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPHA+e3sgcm93LmNvbW1lbnQgfX08L3A+XFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IHYtZWxzZSBjbGFzcz1cXFwibWVzc2FnZSB1c2VyLW1lc3NhZ2VcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XFxcImNoYXRoZWFkaW5nXFxcIj57eyByb3cuY2xpZW50X25hbWUgfX08L2g1PlxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImRhdGUgdGV4dC1tdXRlZCBzbWFsbFxcXCI+e3sgZm9ybWF0RGF0ZShyb3cucG9zdGVkX2F0KSB9fTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8cD57eyByb3cuY29tbWVudCB9fTwvcD5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDxkaXYgdi1lbHNlLWlmPVxcXCJhdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcyA9PSA0XFxcIiBjbGFzcz1cXFwibWItM1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cXFwicm93LmlzX2FkbWluXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XFxcInJvdy5wb3N0X2Zvcl9lbmdpbmVlclxcXCIgY2xhc3M9XFxcIm1lc3NhZ2UgYWRtaW4gZW5naW5lZXItbWVzc2FnZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XFxcImNoYXRoZWFkaW5nIHRleHQtaW5mb1xcXCI+Q2FsbCBDZW50ZXIgKHt7IHJvdy5uYW1lIH19KTwvaDU+XFxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkYXRlIHRleHQtbXV0ZWQgc21hbGxcXFwiPnt7IGZvcm1hdERhdGUocm93LnBvc3RlZF9hdCkgfX08L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxwPnt7IHJvdy5jb21tZW50IH19PC9wPlxcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgdi1lbHNlIGNsYXNzPVxcXCJtZXNzYWdlIGFkbWluIGNhbGxjZW50ZXItbWVzc2FnZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XFxcImNoYXRoZWFkaW5nIHRleHQtaW5mb1xcXCI+Q2FsbCBDZW50ZXIgKHt7IHJvdy5uYW1lIH19KTwvaDU+XFxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkYXRlIHRleHQtbXV0ZWQgc21hbGxcXFwiPnt7IGZvcm1hdERhdGUocm93LnBvc3RlZF9hdCkgfX08L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxwPnt7IHJvdy5jb21tZW50IH19PC9wPlxcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiB2LWVsc2UgY2xhc3M9XFxcIm1lc3NhZ2UgdXNlci1tZXNzYWdlXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVxcXCJjaGF0aGVhZGluZ1xcXCI+e3sgcm93LmNsaWVudF9uYW1lIH19PC9oNT5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkYXRlIHRleHQtbXV0ZWQgc21hbGxcXFwiPnt7IGZvcm1hdERhdGUocm93LnBvc3RlZF9hdCkgfX08L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPHA+e3sgcm93LmNvbW1lbnQgfX08L3A+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWZvb3RlclxcXCI+XFxuICAgICAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cXFwic3VibWl0Q29tcGxhaW50Rm9ybVxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICA8dGV4dGFyZWEgdi1tb2RlbD1cXFwiY29tbWVudFxcXCIgOmRpc2FibGVkPVxcXCJjb21wbGFpbnQud29ya19zdGF0dXMgPT09ICdDb21wbGV0ZWQnICYmIGF1dGhVc2VyLmlkX2Ntc19wcml2aWxlZ2VzID09PSAzXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiQWRkIENvbW1lbnRcXFwiIHJvd3M9XFxcIjNcXFwiIHJlcXVpcmVkPjwvdGV4dGFyZWE+XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgPGRpdiB2LWlmPVxcXCJhdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcyA9PSA0XFxcIj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICA8c2VsZWN0IHYtbW9kZWw9XFxcInNlbGVjdGVkU3RhdHVzXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJQZW5kaW5nXFxcIj5QZW5kaW5nPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiUHJvY2Vzc2luZ1xcXCI+UHJvY2Vzc2luZzwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIkNvbXBsZXRlZFxcXCI+Q29tcGxldGVkPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiB2LXNob3c9XFxcInNob3dNYW51YWxDbG9zZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiB2LW1vZGVsPVxcXCJtYW51YWxDbG9zZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbCBtYW51YWwtY2xvc2VcXFwiIHBsYWNlaG9sZGVyPVxcXCJNYW51YWwgQ2xvc2VcXFwiIC8+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIHYtc2hvdz1cXFwic2hvd0xhZ1JlYXNvblxcXCI+XFxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSB2LW1vZGVsPVxcXCJsYWdSZWFzb25cXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJBZGQgbGFnIHJlYXNvbiAqXFxcIj48L3RleHRhcmVhPlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICA8YnV0dG9uIDpkaXNhYmxlZD1cXFwiY29tcGxhaW50Lndvcmtfc3RhdHVzID09PSAnQ29tcGxldGVkJyAmJiBhdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcyA9PT0gM1xcXCIgdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1xcXCI+U2VuZDwvYnV0dG9uPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L2Zvcm0+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG5cXG5cXG5cXG5cXG5cXG4gICAgICAgIDwhLS0gQ2hhdCBCb3ggRGVzaWduIC0tPlxcbiAgICAgICAgPCEtLSA8aDIgY2xhc3M9XFxcInRleHQtd2hpdGUgYmctaW5mbyBwLTIgcm91bmRlZFxcXCI+RGV0YWlsczwvaDI+XFxuXFxuXFxuICAgICAgPGRpdiBjbGFzcz1cXFwibWVzc2FnZS1saXN0IG92ZXJmbG93LWF1dG9cXFwiIHN0eWxlPVxcXCJtYXgtaGVpZ2h0OiAzMDBweDtcXFwiPlxcbiAgICAgICAgPGRpdlxcbiAgICAgICAgICB2LWZvcj1cXFwiKG1lc3NhZ2UsIGluZGV4KSBpbiBtZXNzYWdlc1xcXCJcXG4gICAgICAgICAgOmtleT1cXFwiaW5kZXhcXFwiXFxuICAgICAgICAgIDpjbGFzcz1cXFwiWydjYXJkIG1iLTMnLCBtZXNzYWdlLnR5cGVdXFxcIlxcbiAgICAgICAgPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHlcXFwiPlxcbiAgICAgICAgICAgIDxoNSBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+e3sgbWVzc2FnZS50aXRsZSB9fTwvaDU+XFxuICAgICAgICAgICAgPHAgY2xhc3M9XFxcImNhcmQtdGV4dFxcXCI+e3sgbWVzc2FnZS5ib2R5IH19PC9wPlxcbiAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJjYXJkLXRleHRcXFwiPlxcbiAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJ0ZXh0LW11dGVkXFxcIj57eyBtZXNzYWdlLnRpbWVzdGFtcCB9fTwvc21hbGw+XFxuICAgICAgICAgICAgPC9wPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PiAtLT5cXG5cXG4gICAgICAgIDwhLS0gQWRkIENvbW1lbnQgRm9ybSAtLT5cXG4gICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cXFwibXQtM1xcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgPHRleHRhcmVhXFxuICAgICAgICAgICAgdi1tb2RlbD1cXFwibmV3Q29tbWVudFxcXCJcXG4gICAgICAgICAgICBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIlxcbiAgICAgICAgICAgIHJvd3M9XFxcIjNcXFwiXFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIkFkZCBDb21tZW50XFxcIlxcbiAgICAgICAgICA+PC90ZXh0YXJlYT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XFxcImFkZENvbW1lbnRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgbXQtMlxcXCI+U2VuZDwvYnV0dG9uPlxcbiAgICAgIDwvZGl2PiAtLT5cXG4gICAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gICAgZGF0YSgpIHtcXG4gICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgLy8gU2FtcGxlIG1lc3NhZ2VzXFxuICAgICAgICAgICAgbWVzc2FnZXM6IFtcXG4gICAgICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFxcXCJISVRBQ0hJXFxcIixcXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IFxcXCJjZGZcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wOiBcXFwiMTAtMDktMjAyNCAwNjozMCBQTVxcXCIsXFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcXFwiYmctZ3JhZGllbnQtcHJpbWFyeSB0ZXh0LXdoaXRlXFxcIlxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB7XFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXFxcIkNhbGwgQ2VudGVyXFxcIixcXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IFxcXCJOYW1lOiBWaXZla2FuYW5kYSBTaGFybWEgRW1haWw6IE5BIFBob25lIE5vLjogNzkwODA3OTEwMyBDb21tZW50OiBDYXNoIERpc3BlbnNlciBGYXRhbFxcXCIsXFxuICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IFxcXCIxMC0wOS0yMDI0IDA2OjM1IFBNXFxcIixcXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFxcXCJiZy1ncmFkaWVudC1pbmZvIHRleHQtd2hpdGVcXFwiXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIHtcXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcXFwiQ2FsbCBDZW50ZXJcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogXFxcIkRlYXIgVGVhbSwgUGxlYXNlIGNhbGwgbG9nIGZvciBEaXNwZW5zZXIgaXNzdWUsIEN1c3RvZGlhbjogVml2ZWthbmFuZGEgU2hhcm1hICg3OTA4MDc5MTAzKSAmIEVuZzogQ2hhaXRhayAoODAxNzMyMTYwMiksIEtpbmRseSBwcm92aWRlIHRoZSBkb2NrZXQgbnVtYmVyLi4uXFxcIixcXG4gICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogXFxcIjEwLTA5LTIwMjQgMDY6NDEgUE1cXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXFxcImJnLWdyYWRpZW50LXdhcm5pbmcgdGV4dC13aGl0ZVxcXCJcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIF0sXFxuICAgICAgICAgICAgY29tcGxhaW50OiB7fSxcXG4gICAgICAgICAgICBhdG1fZGV0YWlsczoge30sXFxuICAgICAgICAgICAgY29tcGxhaW50X2RldGFpbHM6IFtdLFxcbiAgICAgICAgICAgIGN1c3RvZGlhbl9kZXRhaWxzOiBudWxsLFxcbiAgICAgICAgICAgIHNsc19kZXRhaWxzOiBudWxsLFxcbiAgICAgICAgICAgIC8vIE5ldyBjb21tZW50IGlucHV0XFxuICAgICAgICAgICAgbmV3Q29tbWVudDogXFxcIlxcXCIsXFxuICAgICAgICAgICAgc2VsZWN0ZWRTdGF0dXM6IG51bGwsXFxuICAgICAgICAgICAgbXlQcml2aWxlZ2VJZDozLFxcbiAgICAgICAgICAgIGF1dGhVc2VyOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcXFwiYXV0aFxcXCIpID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcXFwiYXV0aFxcXCIpKSA6IG51bGwsXFxuICAgICAgICAgICAgY29tbWVudDogJycsXFxuICAgICAgc2VsZWN0ZWRTdGF0dXM6ICB0aGlzLmNvbXBsYWludCA/IHRoaXMuY29tcGxhaW50Lndvcmtfc3RhdHVzIDogJ1BlbmRpbmcnLFxcbiAgICAgIG1hbnVhbENsb3NlOiAnJyxcXG4gICAgICBsYWdSZWFzb246ICcnLFxcbiAgICAgICAgfTtcXG4gICAgfSxcXG4gICAgbWV0aG9kczoge1xcbiAgICAgICAgLy8gRnVuY3Rpb24gdG8gYWRkIGEgbmV3IGNvbW1lbnRcXG4gICAgICAgIGFkZENvbW1lbnQoKSB7XFxuICAgICAgICAgICAgaWYgKHRoaXMubmV3Q29tbWVudC50cmltKCkpIHtcXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3TWVzc2FnZSA9IHtcXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcXFwiVXNlciBDb21tZW50XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IHRoaXMubmV3Q29tbWVudCxcXG4gICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpLFxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXFxcImJnLWdyYWRpZW50LXNlY29uZGFyeSB0ZXh0LXdoaXRlXFxcIlxcbiAgICAgICAgICAgICAgICB9O1xcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VzLnB1c2gobmV3TWVzc2FnZSk7XFxuICAgICAgICAgICAgICAgIHRoaXMubmV3Q29tbWVudCA9IFxcXCJcXFwiOyAvLyBDbGVhciB0aGUgaW5wdXQgYWZ0ZXIgYWRkaW5nXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIGlzQ29tbWVudERpc2FibGVkKCkge1xcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxcXCJjYWtraVxcXCIpO1xcblxcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxcXCI9PT09PT0+XFxcIix0aGlzLmNvbXBsYWludC53b3JrX3N0YXR1cyx0aGlzLmF1dGhVc2VyLmlkX2Ntc19wcml2aWxlZ2VzKTtcXG5cXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wbGFpbnQud29ya19zdGF0dXMgPT09ICdDb21wbGV0ZWQnICYmIHRoaXMuYXV0aFVzZXIuaWRfY21zX3ByaXZpbGVnZXMgPT09IDM7XFxuICAgICAgICB9LFxcbiAgICAgICAgc2hvd01hbnVhbENsb3NlKCkge1xcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkU3RhdHVzID09PSAnQ29tcGxldGVkJztcXG4gICAgICAgIH0sXFxuICAgICAgICBzaG93TGFnUmVhc29uKCkge1xcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkU3RhdHVzID09PSAnUHJvY2Vzc2luZyc7XFxuICAgICAgICB9LFxcbiAgICAgICAgc3VibWl0Q29tcGxhaW50Rm9ybSgpIHtcXG4gICAgICAgICAgICAvLyBTdWJtaXQgZm9ybSBsb2dpYyB1c2luZyBgY29tbWVudGAsIGBzZWxlY3RlZFN0YXR1c2AsIGBtYW51YWxDbG9zZWAsIGFuZCBgbGFnUmVhc29uYCB2YWx1ZXMuXFxuICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSB7XFxuICAgICAgICAgICAgICAgIGFjdGlvbjpcXFwidXBkYXRlXFxcIixcXG4gICAgICAgICAgICAgICAgY29tbWVudDogdGhpcy5jb21tZW50LFxcbiAgICAgICAgICAgICAgICBzdGF0dXM6IHRoaXMuc2VsZWN0ZWRTdGF0dXMsXFxuICAgICAgICAgICAgICAgIG1hbnVhbF9jbG9zZTogdGhpcy5tYW51YWxDbG9zZSxcXG4gICAgICAgICAgICAgICAgbGFnX3JlYXNvbjogdGhpcy5sYWdSZWFzb24sXFxuICAgICAgICAgICAgfTtcXG4gICAgICAgICAgICAvLyBFeGFtcGxlIFBPU1QgcmVxdWVzdCAocmVwbGFjZSBVUkwgYXMgbmVjZXNzYXJ5KVxcbiAgICAgICAgICAgIHRoaXMuJGh0dHAucG9zdChgYXBpL2NvbXBsYWludC9jb21tZW50LyR7dGhpcy5jb21wbGFpbnQuaWR9YCwgZm9ybURhdGEpXFxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBzdWNjZXNzXFxuICAgICAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAvLyBoYW5kbGUgZXJyb3JcXG4gICAgICAgICAgICAgICAgfSk7XFxuICAgICAgICB9LFxcbiAgICAgICAgZm9ybWF0RGF0ZShkYXRlKSB7XFxuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUpLnRvTG9jYWxlU3RyaW5nKCdlbi1HQicsIHsgZGF5OiAnMi1kaWdpdCcsIG1vbnRoOiAnMi1kaWdpdCcsIHllYXI6ICdudW1lcmljJywgaG91cjogJzItZGlnaXQnLCBtaW51dGU6ICcyLWRpZ2l0JyB9KTtcXG4gICAgICAgIH0sXFxuICAgIH0sXFxuICAgIGJlZm9yZUNyZWF0ZSgpIHtcXG4gICAgICAgIGNvbnNvbGUubG9nKFxcXCIgdGhpcy4kcm91dGUucGFyYW1zLmlkO1xcXCIsIHRoaXMuJHJvdXRlLnBhcmFtcy5pZCk7XFxuXFxuICAgICAgICBheGlvcy5nZXQoXFxcImFwaS9jb21wbGFpbnQvdmlldy9cXFwiICsgdGhpcy4kcm91dGUucGFyYW1zLmlkKVxcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXFxcInJlcz09PT0+XFxcIiwgcmVzLmRhdGEuZGF0YSk7XFxuICAgICAgICAgICAgICAgIHRoaXMuY29tcGxhaW50ID0gcmVzLmRhdGEuZGF0YS5jb21wbGFpbnQ7XFxuICAgICAgICAgICAgICAgIHRoaXMuYXRtX2RldGFpbHMgPSByZXMuZGF0YS5kYXRhLmF0bV9kZXRhaWxzO1xcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBsYWludF9kZXRhaWxzID0gcmVzLmRhdGEuZGF0YS5jb21wbGFpbnRfZGV0YWlscztcXG4gICAgICAgICAgICAgICAgdGhpcy5jdXN0b2RpYW5fZGV0YWlscyA9IHJlcy5kYXRhLmRhdGEuY3VzdG9kaWFuX2RldGFpbHM7XFxuICAgICAgICAgICAgICAgIHRoaXMuc2xzX2RldGFpbHMgPSByZXMuZGF0YS5kYXRhLnNsc19kZXRhaWxzO1xcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkU3RhdHVzID0gdGhpcy5jb21wbGFpbnQud29ya19zdGF0dXMgfHwgJ1BlbmRpbmcnO1xcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcXFwiYXRtXFxcIixhdG1fZGV0YWlscyk7XFxuXFxuICAgICAgICAgICAgfSk7XFxuXFxuICAgIH0sXFxuICAgIG1vdW50ZWQoKSB7XFxuICAgICAgICAvLyBJbml0aWFsIEFQSSBjYWxsIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkXFxuICAgICAgICBjb25zb2xlLmxvZyhcXFwibW91bnRlZFxcXCIpO1xcbiAgICAgICAgdGhpcy5hdXRoVXNlcj1sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcXFwiYXV0aFxcXCIpO1xcbiAgICAgICAgaWYgKHRoaXMuYXV0aFVzZXIpIHtcXG4gICAgICAgICAgICB0aGlzLmF1dGhVc2VyID0gSlNPTi5wYXJzZSh0aGlzLmF1dGhVc2VyKTtcXG4gICAgICAgIH1cXG4gICAgICAgIC8vIHRoaXMubG9hZFRpY2tldHMoKTtcXG4gICAgfSxcXG59O1xcbjwvc2NyaXB0PlxcblxcbjxzdHlsZSBzY29wZWQ+XFxuLyogQ3VzdG9tIFN0eWxlcyBpZiBuZWNlc3NhcnkgKi9cXG4ubWVzc2FnZS1saXN0IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gICAgcGFkZGluZzogMTVweDtcXG59XFxuXFxuLmNhcmQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcbi5jaGF0LWJveCB7XFxuICBtYXgtaGVpZ2h0OiA2MDBweDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5jaGF0LW1lc3NhZ2VzIHtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4ubWVzc2FnZSB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5hZG1pbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcbn1cXG5cXG4uZW5naW5lZXItbWVzc2FnZSB7XFxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICMwMDdiZmY7XFxufVxcblxcbi51c2VyLW1lc3NhZ2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZWRkYTtcXG59XFxuXFxuLmNoYXRoZWFkaW5nIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY2hhdC1ib2R5IHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xcbn1cXG5cXG4uY2FyZC1mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXIgbXQtNVwiIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBtYi00IHAtMyBib3JkZXIgYmctbGlnaHQgcm91bmRlZFwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTRcIiB9LCBbXG4gICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJidXR0b25cIiwgeyBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnlcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJDb2RlIC0gXCIgK1xuICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgX3ZtLmNvbXBsYWludCAmJiBfdm0uY29tcGxhaW50LmF0bVxuICAgICAgICAgICAgICAgICAgPyBfdm0uY29tcGxhaW50LmF0bS5hdG1faWRcbiAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIkFkZHJlc3MgLSBcIiArXG4gICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICBfdm0uYXRtX2RldGFpbHMuY2l0eV9uYW1lICtcbiAgICAgICAgICAgICAgICAgIFwiLCBcIiArXG4gICAgICAgICAgICAgICAgICBfdm0uYXRtX2RldGFpbHMuZGlzdHJpY3RfbmFtZSArXG4gICAgICAgICAgICAgICAgICBcIiwgXCIgK1xuICAgICAgICAgICAgICAgICAgX3ZtLmF0bV9kZXRhaWxzLnN0YXRlX25hbWVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwiQXJlYSBDb2RlIC1cIiArIF92bS5fcyhfdm0uYXRtX2RldGFpbHMuYXJlYV9jb2RlKSldKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoXCJQb3N0Y29kZSAtIFwiICsgX3ZtLl9zKF92bS5hdG1fZGV0YWlscy5wb3N0Y29kZSkpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiYnV0dG9uXCIsIHsgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1pbmZvXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmF0bV9kZXRhaWxzLmJhbmtfbmFtZSkpXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC00XCIgfSwgW1xuICAgICAgICBfdm0uc2xzX2RldGFpbHNcbiAgICAgICAgICA/IF9jKFwicFwiLCBbX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIlNMTSBEb2NrZXQgTm8gOlwiKV0pXSlcbiAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uc2xzX2RldGFpbHNcbiAgICAgICAgICA/IF9jKFwiYnV0dG9uXCIsIHsgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1pbmZvXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5zbHNfZGV0YWlscyA/IF92bS5zbHNfZGV0YWlscy5zbHNfZG9ja2V0X25vIDogXCJcIilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uX20oMSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiYnV0dG9uXCIsIHsgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1pbmZvXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmNvbXBsYWludC5kb2NrZXRfbm8pKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNFwiIH0sIFtcbiAgICAgICAgX3ZtLl9tKDIpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uY29tcGxhaW50Lndvcmtfc3RhdHVzID09PSBcIlBlbmRpbmdcIlxuICAgICAgICAgID8gX2MoXCJidXR0b25cIiwgeyBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRhbmdlclwiIH0sIFtfdm0uX3YoXCJQZW5kaW5nXCIpXSlcbiAgICAgICAgICA6IF92bS5jb21wbGFpbnQud29ya19zdGF0dXMgPT09IFwiUHJvY2Vzc2luZ1wiXG4gICAgICAgICAgPyBfYyhcImJ1dHRvblwiLCB7IHN0YXRpY0NsYXNzOiBcImJ0biBidG4td2FybmluZ1wiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiUHJvY2Vzc2luZ1wiKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF92bS5jb21wbGFpbnQud29ya19zdGF0dXMgPT09IFwiQ29tcGxldGVkXCJcbiAgICAgICAgICA/IF9jKFwiYnV0dG9uXCIsIHsgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCJDb21wbGV0ZWRcIilcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNFwiIH0sIFtcbiAgICAgICAgX3ZtLmNvbXBsYWludC5pc19zbG0gPT09IDEgJiYgX3ZtLmN1c3RvZGlhbl9kZXRhaWxzXG4gICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInZpZXd0YWIgdmlld3RhYmJlciBhY3Rpb24tdGhcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5hdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcyA9PT0gNFxuICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udHJvbC1sYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJBc3NpZ25lZCBDdXN0b2RpYW4gOlwiKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwidmlld2FkZHJlc3NcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEN1c3RvZGlhbiBOYW1lOiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uY3VzdG9kaWFuX2RldGFpbHMubmFtZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIoXCIgKyBfdm0uX3MoX3ZtLmN1c3RvZGlhbl9kZXRhaWxzLnBob25lKSArIFwiKVwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC04XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQgY2hhdC1ib3hcIiB9LCBbXG4gICAgICAgICAgX3ZtLl9tKDMpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHkgY2hhdC1ib2R5XCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2hhdC1tZXNzYWdlc1wiIH0sXG4gICAgICAgICAgICAgIF92bS5fbChfdm0uY29tcGxhaW50X2RldGFpbHMsIGZ1bmN0aW9uKHJvdywgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBrZXk6IGluZGV4IH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5hdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcyA9PSAzXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtYi0zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgcm93LmlzX2FkbWluXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LnBvc3RfZm9yX2VuZ2luZWVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1lc3NhZ2UgYWRtaW4gZW5naW5lZXItbWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoYXRoZWFkaW5nIHRleHQtaW5mb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDYWxsIENlbnRlclwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGUgdGV4dC1tdXRlZCBzbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb3JtYXREYXRlKHJvdy5wb3N0ZWRfYXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihfdm0uX3Mocm93LmNvbW1lbnQpKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtZXNzYWdlIGFkbWluIGNhbGxjZW50ZXItbWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoYXRoZWFkaW5nIHRleHQtaW5mb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDYWxsIENlbnRlclwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGUgdGV4dC1tdXRlZCBzbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb3JtYXREYXRlKHJvdy5wb3N0ZWRfYXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihfdm0uX3Mocm93LmNvbW1lbnQpKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZXNzYWdlIHVzZXItbWVzc2FnZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaDVcIiwgeyBzdGF0aWNDbGFzczogXCJjaGF0aGVhZGluZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3Mocm93LmNsaWVudF9uYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImRhdGUgdGV4dC1tdXRlZCBzbWFsbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmZvcm1hdERhdGUocm93LnBvc3RlZF9hdCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoX3ZtLl9zKHJvdy5jb21tZW50KSldKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uYXV0aFVzZXIuaWRfY21zX3ByaXZpbGVnZXMgPT0gNFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWItM1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5pc19hZG1pblxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5wb3N0X2Zvcl9lbmdpbmVlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtZXNzYWdlIGFkbWluIGVuZ2luZWVyLW1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaDVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGF0aGVhZGluZyB0ZXh0LWluZm9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDYWxsIENlbnRlciAoXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3Mocm93Lm5hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGUgdGV4dC1tdXRlZCBzbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb3JtYXREYXRlKHJvdy5wb3N0ZWRfYXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihfdm0uX3Mocm93LmNvbW1lbnQpKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtZXNzYWdlIGFkbWluIGNhbGxjZW50ZXItbWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoYXRoZWFkaW5nIHRleHQtaW5mb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNhbGwgQ2VudGVyIChcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhyb3cubmFtZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZSB0ZXh0LW11dGVkIHNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZvcm1hdERhdGUocm93LnBvc3RlZF9hdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KF92bS5fcyhyb3cuY29tbWVudCkpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1lc3NhZ2UgdXNlci1tZXNzYWdlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJoNVwiLCB7IHN0YXRpY0NsYXNzOiBcImNoYXRoZWFkaW5nXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhyb3cuY2xpZW50X25hbWUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZGF0ZSB0ZXh0LW11dGVkIHNtYWxsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZm9ybWF0RGF0ZShyb3cucG9zdGVkX2F0KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihfdm0uX3Mocm93LmNvbW1lbnQpKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIDBcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1mb290ZXJcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zdWJtaXRDb21wbGFpbnRGb3JtLmFwcGx5KG51bGwsIGFyZ3VtZW50cylcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInRleHRhcmVhXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5jb21tZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjb21tZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOlxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNvbXBsYWludC53b3JrX3N0YXR1cyA9PT0gXCJDb21wbGV0ZWRcIiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmF1dGhVc2VyLmlkX2Ntc19wcml2aWxlZ2VzID09PSAzLFxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkFkZCBDb21tZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgcm93czogXCIzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5jb21tZW50IH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNvbW1lbnQgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLmF1dGhVc2VyLmlkX2Ntc19wcml2aWxlZ2VzID09IDRcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlbGVjdGVkU3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkU3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRTdGF0dXMgPSAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAkJHNlbGVjdGVkVmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCJQZW5kaW5nXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJQZW5kaW5nXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIlByb2Nlc3NpbmdcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlByb2Nlc3NpbmdcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiQ29tcGxldGVkXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJDb21wbGV0ZWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNob3dNYW51YWxDbG9zZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2hvd01hbnVhbENsb3NlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm1hbnVhbENsb3NlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm1hbnVhbENsb3NlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbCBtYW51YWwtY2xvc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJNYW51YWwgQ2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5tYW51YWxDbG9zZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5tYW51YWxDbG9zZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2hvd0xhZ1JlYXNvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2hvd0xhZ1JlYXNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5sYWdSZWFzb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibGFnUmVhc29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHBsYWNlaG9sZGVyOiBcIkFkZCBsYWcgcmVhc29uICpcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ubGFnUmVhc29uIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmxhZ1JlYXNvbiA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNvbXBsYWludC53b3JrX3N0YXR1cyA9PT0gXCJDb21wbGV0ZWRcIiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uYXV0aFVzZXIuaWRfY21zX3ByaXZpbGVnZXMgPT09IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiU2VuZFwiKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwicFwiLCBbX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIkFUTSA6XCIpXSldKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInBcIiwgW19jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCJEb2NrZXQgTm8gOlwiKV0pXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJwXCIsIFtfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiU3RhdHVzIDpcIildKV0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1oZWFkZXIgYmctcHJpbWFyeSB0ZXh0LXdoaXRlXCIgfSwgW1xuICAgICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlaGVhZGluZyBtYi0wXCIgfSwgW1xuICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLWNvbW1lbnRzXCIsXG4gICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9XG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIgRGV0YWlsc1wiKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMjFlN2EyNThcIiwgeyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfSlcbiAgfVxufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMjFlN2EyNThcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Db21wbGFpbnREZXRhaWwudnVlXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjY3MmZhYmVmXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMjFlN2EyNThcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Db21wbGFpbnREZXRhaWwudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yMWU3YTI1OFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NvbXBsYWludERldGFpbC52dWVcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChjb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMjFlN2EyNThcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Db21wbGFpbnREZXRhaWwudnVlXCIpXG59XG4vKiBzY3JpcHQgKi9cbmV4cG9ydCAqIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0NvbXBsYWludERldGFpbC52dWVcIlxuaW1wb3J0IF9fdnVlX3NjcmlwdF9fIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0NvbXBsYWludERldGFpbC52dWVcIlxuLyogdGVtcGxhdGUgKi9cbmltcG9ydCB7cmVuZGVyIGFzIF9fdnVlX3JlbmRlcl9fLCBzdGF0aWNSZW5kZXJGbnMgYXMgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfX30gZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMjFlN2EyNThcXFwiLFxcXCJoYXNTY29wZWRcXFwiOnRydWUsXFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Db21wbGFpbnREZXRhaWwudnVlXCJcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LTIxZTdhMjU4XCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG5pbXBvcnQgbm9ybWFsaXplQ29tcG9uZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50LW5vcm1hbGl6ZXJcIlxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3JlbmRlcl9fLFxuICBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzXFxcXGpzXFxcXGNvbXBvbmVudHNcXFxcQ29tcGxhaW50RGV0YWlsLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0yMWU3YTI1OFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTIxZTdhMjU4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcbiJdLCJzb3VyY2VSb290IjoiIn0=