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
      this.$http.post(`/dashboard/updateComplaintDetails/${this.complaint.id}`, formData).then(response => {
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
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* Custom Styles if necessary */\n.message-list[data-v-21e7a258] {\n    border: 1px solid #ccc;\n    border-radius: 0.25rem;\n    padding: 15px;\n}\n.card[data-v-21e7a258] {\n    border: none;\n}\n.chat-box[data-v-21e7a258] {\n  max-height: 600px;\n  overflow-y: auto;\n}\n.chat-messages[data-v-21e7a258] {\n  height: 400px;\n  overflow-y: auto;\n}\n.message[data-v-21e7a258] {\n  padding: 10px;\n  border-radius: 10px;\n  margin-bottom: 10px;\n}\n.admin[data-v-21e7a258] {\n  background-color: #f1f1f1;\n}\n.engineer-message[data-v-21e7a258] {\n  border-left: 5px solid #007bff;\n}\n.user-message[data-v-21e7a258] {\n  background-color: #d4edda;\n}\n.chatheading[data-v-21e7a258] {\n  margin: 0;\n  font-weight: bold;\n}\n.chat-body[data-v-21e7a258] {\n  padding: 20px;\n  background-color: #f8f9fa;\n}\n.card-footer[data-v-21e7a258] {\n  background-color: #f8f9fa;\n  padding: 10px;\n}\n", "", {"version":3,"sources":["C:/Users/sujan/Desktop/Work/project freelance/Sankha/atm_proj/atm/resources/js/components/resources/js/components/ComplaintDetail.vue"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA+SA,gCAAA;AACA;IACA,uBAAA;IACA,uBAAA;IACA,cAAA;CACA;AAEA;IACA,aAAA;CACA;AACA;EACA,kBAAA;EACA,iBAAA;CACA;AAEA;EACA,cAAA;EACA,iBAAA;CACA;AAEA;EACA,cAAA;EACA,oBAAA;EACA,oBAAA;CACA;AAEA;EACA,0BAAA;CACA;AAEA;EACA,+BAAA;CACA;AAEA;EACA,0BAAA;CACA;AAEA;EACA,UAAA;EACA,kBAAA;CACA;AAEA;EACA,cAAA;EACA,0BAAA;CACA;AAEA;EACA,0BAAA;EACA,cAAA;CACA","file":"ComplaintDetail.vue","sourcesContent":["<template>\n    <div class=\"container mt-5\">\n\n        <!-- Top Information Design -->\n        <div class=\"row mb-4 p-3 border bg-light rounded\">\n            <div class=\"col-md-4\">\n                <p><strong>ATM :</strong></p>\n                <button class=\"btn btn-primary\">Code - {{ complaint && complaint.atm ? complaint.atm.atm_id :\n                    \"\"}}</button>\n                <p>Address - {{ atm_details.city_name + ', ' + atm_details.district_name + ', ' + atm_details.state_name }}</p>\n                <p>Area Code -{{ atm_details.area_code }}</p>\n                <p>Postcode - {{ atm_details.postcode }}</p>\n                <button class=\"btn btn-info\">{{ atm_details.bank_name }}</button>\n            </div>\n            <div class=\"col-md-4\">\n                <p v-if=\"sls_details\"><strong>SLM Docket No :</strong></p>\n                <button class=\"btn btn-info\" v-if=\"sls_details\">{{ sls_details ? sls_details.sls_docket_no : \"\" }}</button>\n                <p><strong>Docket No :</strong></p>\n                <button class=\"btn btn-info\">{{ complaint.docket_no }}</button>\n            </div>\n            <div class=\"col-md-4\">\n                <p><strong>Status :</strong></p>\n                <!-- <button class=\"btn btn-success\">Completed</button> -->\n                <button v-if=\"complaint.work_status === 'Pending'\" class=\"btn btn-danger\">Pending</button>\n                <button v-else-if=\"complaint.work_status === 'Processing'\" class=\"btn btn-warning\">Processing</button>\n                <button v-else-if=\"complaint.work_status === 'Completed'\" class=\"btn btn-success\">Completed</button>\n\n            </div>\n            <div class=\"col-md-4\">\n                <div v-if=\"complaint.is_slm === 1 && custodian_details\" class=\"viewtab viewtabber action-th\">\n                    <div v-if=\"authUser.id_cms_privileges === 4\">\n                        <label class=\"control-label\">Assigned Custodian :</label>\n                        <!-- You can enable the button below if needed for assignment functionality -->\n                        <!-- <a class=\"action-btn\" style=\"padding: 2px 6px; border: 1px solid #d9d9d9; color: #191919; font-size: 1.0em; text-align: center; display: inline-block; border-radius: 3px; margin: 1px;\"\n            :href=\"'/dashboard/assignTicket/' + complaint.docket_no\"\n            data-toggle=\"tooltip\"\n            data-placement=\"top\"\n            title=\"Assign Custodian\">\n            <i class=\"fa fa-user-plus\"></i>\n        </a> -->\n                        <p class=\"viewaddress\">\n                            Custodian Name: {{ custodian_details.name }}\n                            <span>({{ custodian_details.phone }})</span>\n                        </p>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n\n\n        <div class=\"row justify-content-center\">\n    <div class=\"col-md-8\">\n      <div class=\"card chat-box\">\n        <div class=\"card-header bg-primary text-white\">\n          <h3 class=\"tableheading mb-0\"><i class=\"fa fa-comments\" aria-hidden=\"true\"></i> Details</h3>\n        </div>\n        <div class=\"card-body chat-body\">\n          <div class=\"chat-messages\">\n            <div v-for=\"(row, index) in complaint_details\" :key=\"index\">\n              <div v-if=\"authUser.id_cms_privileges == 3\" class=\"mb-3\">\n                <div v-if=\"row.is_admin\">\n                  <div v-if=\"row.post_for_engineer\" class=\"message admin engineer-message\">\n                    <div class=\"d-flex justify-content-between\">\n                      <h5 class=\"chatheading text-info\">Call Center</h5>\n                      <span class=\"date text-muted small\">{{ formatDate(row.posted_at) }}</span>\n                    </div>\n                    <p>{{ row.comment }}</p>\n                  </div>\n                  <div v-else class=\"message admin callcenter-message\">\n                    <div class=\"d-flex justify-content-between\">\n                      <h5 class=\"chatheading text-info\">Call Center</h5>\n                      <span class=\"date text-muted small\">{{ formatDate(row.posted_at) }}</span>\n                    </div>\n                    <p>{{ row.comment }}</p>\n                  </div>\n                </div>\n                <div v-else class=\"message user-message\">\n                  <div class=\"d-flex justify-content-between\">\n                    <h5 class=\"chatheading\">{{ row.client_name }}</h5>\n                    <span class=\"date text-muted small\">{{ formatDate(row.posted_at) }}</span>\n                  </div>\n                  <p>{{ row.comment }}</p>\n                </div>\n              </div>\n              <div v-else-if=\"authUser.id_cms_privileges == 4\" class=\"mb-3\">\n                <div v-if=\"row.is_admin\">\n                  <div v-if=\"row.post_for_engineer\" class=\"message admin engineer-message\">\n                    <div class=\"d-flex justify-content-between\">\n                      <h5 class=\"chatheading text-info\">Call Center ({{ row.name }})</h5>\n                      <span class=\"date text-muted small\">{{ formatDate(row.posted_at) }}</span>\n                    </div>\n                    <p>{{ row.comment }}</p>\n                  </div>\n                  <div v-else class=\"message admin callcenter-message\">\n                    <div class=\"d-flex justify-content-between\">\n                      <h5 class=\"chatheading text-info\">Call Center ({{ row.name }})</h5>\n                      <span class=\"date text-muted small\">{{ formatDate(row.posted_at) }}</span>\n                    </div>\n                    <p>{{ row.comment }}</p>\n                  </div>\n                </div>\n                <div v-else class=\"message user-message\">\n                  <div class=\"d-flex justify-content-between\">\n                    <h5 class=\"chatheading\">{{ row.client_name }}</h5>\n                    <span class=\"date text-muted small\">{{ formatDate(row.posted_at) }}</span>\n                  </div>\n                  <p>{{ row.comment }}</p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"card-footer\">\n          <form @submit.prevent=\"submitComplaintForm\">\n            <div class=\"form-group\">\n              <textarea v-model=\"comment\" :disabled=\"complaint.work_status === 'Completed' && authUser.id_cms_privileges === 3\" class=\"form-control\" placeholder=\"Add Comment\" rows=\"3\" required></textarea>\n            </div>\n\n            <div v-if=\"authUser.id_cms_privileges == 4\">\n              <div class=\"form-group\">\n                <select v-model=\"selectedStatus\" class=\"form-control\">\n                  <option value=\"Pending\">Pending</option>\n                  <option value=\"Processing\">Processing</option>\n                  <option value=\"Completed\">Completed</option>\n                </select>\n              </div>\n              <div class=\"form-group\" v-show=\"showManualClose\">\n                <input type=\"text\" v-model=\"manualClose\" class=\"form-control manual-close\" placeholder=\"Manual Close\" />\n              </div>\n              <div class=\"form-group\" v-show=\"showLagReason\">\n                <textarea v-model=\"lagReason\" class=\"form-control\" placeholder=\"Add lag reason *\"></textarea>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <button :disabled=\"isCommentDisabled\" type=\"submit\" class=\"btn btn-primary btn-block\">Send</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n\n\n        <!-- Chat Box Design -->\n        <!-- <h2 class=\"text-white bg-info p-2 rounded\">Details</h2>\n\n\n      <div class=\"message-list overflow-auto\" style=\"max-height: 300px;\">\n        <div\n          v-for=\"(message, index) in messages\"\n          :key=\"index\"\n          :class=\"['card mb-3', message.type]\"\n        >\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">{{ message.title }}</h5>\n            <p class=\"card-text\">{{ message.body }}</p>\n            <p class=\"card-text\">\n              <small class=\"text-muted\">{{ message.timestamp }}</small>\n            </p>\n          </div>\n        </div>\n      </div> -->\n\n        <!-- Add Comment Form -->\n        <!-- <div class=\"mt-3\">\n        <div class=\"form-group\">\n          <textarea\n            v-model=\"newComment\"\n            class=\"form-control\"\n            rows=\"3\"\n            placeholder=\"Add Comment\"\n          ></textarea>\n        </div>\n        <button @click=\"addComment\" class=\"btn btn-primary mt-2\">Send</button>\n      </div> -->\n    </div>\n</template>\n\n<script>\nexport default {\n    data() {\n        return {\n            // Sample messages\n            messages: [\n                {\n                    title: \"HITACHI\",\n                    body: \"cdf\",\n                    timestamp: \"10-09-2024 06:30 PM\",\n                    type: \"bg-gradient-primary text-white\"\n                },\n                {\n                    title: \"Call Center\",\n                    body: \"Name: Vivekananda Sharma Email: NA Phone No.: 7908079103 Comment: Cash Dispenser Fatal\",\n                    timestamp: \"10-09-2024 06:35 PM\",\n                    type: \"bg-gradient-info text-white\"\n                },\n                {\n                    title: \"Call Center\",\n                    body: \"Dear Team, Please call log for Dispenser issue, Custodian: Vivekananda Sharma (7908079103) & Eng: Chaitak (8017321602), Kindly provide the docket number...\",\n                    timestamp: \"10-09-2024 06:41 PM\",\n                    type: \"bg-gradient-warning text-white\"\n                }\n            ],\n            complaint: {},\n            atm_details: {},\n            complaint_details: [],\n            custodian_details: null,\n            sls_details: null,\n            // New comment input\n            newComment: \"\",\n            selectedStatus: null,\n            myPrivilegeId:3,\n            authUser: localStorage.getItem(\"auth\") ? JSON.parse(localStorage.getItem(\"auth\")) : null,\n            comment: '',\n      selectedStatus:  this.complaint ? this.complaint.work_status : 'Pending',\n      manualClose: '',\n      lagReason: '',\n        };\n    },\n    methods: {\n        // Function to add a new comment\n        addComment() {\n            if (this.newComment.trim()) {\n                const newMessage = {\n                    title: \"User Comment\",\n                    body: this.newComment,\n                    timestamp: new Date().toLocaleString(),\n                    type: \"bg-gradient-secondary text-white\"\n                };\n                this.messages.push(newMessage);\n                this.newComment = \"\"; // Clear the input after adding\n            }\n        },\n        isCommentDisabled() {\n            console.log(\"cakki\");\n\n            console.log(\"======>\",this.complaint.work_status,this.authUser.id_cms_privileges);\n\n            return this.complaint.work_status === 'Completed' && this.authUser.id_cms_privileges === 3;\n        },\n        showManualClose() {\n            return this.selectedStatus === 'Completed';\n        },\n        showLagReason() {\n            return this.selectedStatus === 'Processing';\n        },\n        submitComplaintForm() {\n            // Submit form logic using `comment`, `selectedStatus`, `manualClose`, and `lagReason` values.\n            const formData = {\n                comment: this.comment,\n                status: this.selectedStatus,\n                manual_close: this.manualClose,\n                lag_reason: this.lagReason,\n            };\n            // Example POST request (replace URL as necessary)\n            this.$http.post(`/dashboard/updateComplaintDetails/${this.complaint.id}`, formData)\n                .then(response => {\n                    // handle success\n                })\n                .catch(error => {\n                    // handle error\n                });\n        },\n        formatDate(date) {\n            return new Date(date).toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });\n        },\n    },\n    beforeCreate() {\n        console.log(\" this.$route.params.id;\", this.$route.params.id);\n\n        axios.get(\"api/complaint/view/\" + this.$route.params.id)\n            .then((res) => {\n                console.log(\"res====>\", res.data.data);\n                this.complaint = res.data.data.complaint;\n                this.atm_details = res.data.data.atm_details;\n                this.complaint_details = res.data.data.complaint_details;\n                this.custodian_details = res.data.data.custodian_details;\n                this.sls_details = res.data.data.sls_details;\n                this.selectedStatus = this.complaint.work_status || 'Pending';\n                // console.log(\"atm\",atm_details);\n\n            });\n\n    },\n    mounted() {\n        // Initial API call when the component is mounted\n        console.log(\"mounted\");\n        this.authUser=localStorage.getItem(\"auth\");\n        if (this.authUser) {\n            this.authUser = JSON.parse(this.authUser);\n        }\n        // this.loadTickets();\n    },\n};\n</script>\n\n<style scoped>\n/* Custom Styles if necessary */\n.message-list {\n    border: 1px solid #ccc;\n    border-radius: 0.25rem;\n    padding: 15px;\n}\n\n.card {\n    border: none;\n}\n.chat-box {\n  max-height: 600px;\n  overflow-y: auto;\n}\n\n.chat-messages {\n  height: 400px;\n  overflow-y: auto;\n}\n\n.message {\n  padding: 10px;\n  border-radius: 10px;\n  margin-bottom: 10px;\n}\n\n.admin {\n  background-color: #f1f1f1;\n}\n\n.engineer-message {\n  border-left: 5px solid #007bff;\n}\n\n.user-message {\n  background-color: #d4edda;\n}\n\n.chatheading {\n  margin: 0;\n  font-weight: bold;\n}\n\n.chat-body {\n  padding: 20px;\n  background-color: #f8f9fa;\n}\n\n.card-footer {\n  background-color: #f8f9fa;\n  padding: 10px;\n}\n</style>\n"],"sourceRoot":""}]);

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
                      attrs: { disabled: _vm.isCommentDisabled, type: "submit" }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tcGxhaW50RGV0YWlsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Db21wbGFpbnREZXRhaWwudnVlPzljZmQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tcGxhaW50RGV0YWlsLnZ1ZT8xZTNiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0NvbXBsYWludERldGFpbC52dWU/NTQ2ZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Db21wbGFpbnREZXRhaWwudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJtZXNzYWdlcyIsInRpdGxlIiwiYm9keSIsInRpbWVzdGFtcCIsInR5cGUiLCJjb21wbGFpbnQiLCJhdG1fZGV0YWlscyIsImNvbXBsYWludF9kZXRhaWxzIiwiY3VzdG9kaWFuX2RldGFpbHMiLCJzbHNfZGV0YWlscyIsIm5ld0NvbW1lbnQiLCJzZWxlY3RlZFN0YXR1cyIsIm15UHJpdmlsZWdlSWQiLCJhdXRoVXNlciIsImNvbW1lbnQiLCJtYW51YWxDbG9zZSIsImxhZ1JlYXNvbiIsIm1ldGhvZHMiLCJhZGRDb21tZW50IiwiaXNDb21tZW50RGlzYWJsZWQiLCJjb25zb2xlIiwic2hvd01hbnVhbENsb3NlIiwic2hvd0xhZ1JlYXNvbiIsInN1Ym1pdENvbXBsYWludEZvcm0iLCJzdGF0dXMiLCJtYW51YWxfY2xvc2UiLCJsYWdfcmVhc29uIiwidGhlbiIsImNhdGNoIiwiZm9ybWF0RGF0ZSIsImRheSIsIm1vbnRoIiwieWVhciIsImhvdXIiLCJtaW51dGUiLCJiZWZvcmVDcmVhdGUiLCJheGlvcyIsIm1vdW50ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsbURBQW1EO0FBQ3pFLGdCQUFnQixtQ0FBbUM7QUFDbkQ7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2tDO0FBQ2xDLElBQUksS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7O0FDbmxCaEI7O0FBRUE7QUFDQSxjQUFjLG1CQUFPLENBQUMsc2tCQUFnVDtBQUN0VTtBQUNBLDRDQUE0QyxRQUFTO0FBQ3JEO0FBQ0E7QUFDQSxVQUFVLG1CQUFPLENBQUMsNkhBQWdFO0FBQ2xGLCtDQUErQztBQUMvQztBQUNBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7OztBQ1hmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0EsRUFBRSxtQkFBTyxDQUFDLDZtQkFBNFI7QUFDdFM7QUFDQTtBQUNzSDtBQUNhO0FBQ25JO0FBQ2lWO0FBQ2pWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDbUc7QUFDbkcsZ0JBQWdCLHlHQUFrQjtBQUNsQyxFQUFFLGtJQUFjO0FBQ2hCLEVBQUUseU9BQWM7QUFDaEIsRUFBRSxrUEFBeUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsRUFhWDs7QUFFVSxnRkFBaUIiLCJmaWxlIjoianMvMjAuYnVuZGxlLjY2YWEzNDA3ZmVkMDRlNzAxNjFhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgbXQtNVwiPlxuXG4gICAgICAgIDwhLS0gVG9wIEluZm9ybWF0aW9uIERlc2lnbiAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBtYi00IHAtMyBib3JkZXIgYmctbGlnaHQgcm91bmRlZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00XCI+XG4gICAgICAgICAgICAgICAgPHA+PHN0cm9uZz5BVE0gOjwvc3Ryb25nPjwvcD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+Q29kZSAtIHt7IGNvbXBsYWludCAmJiBjb21wbGFpbnQuYXRtID8gY29tcGxhaW50LmF0bS5hdG1faWQgOlxuICAgICAgICAgICAgICAgICAgICBcIlwifX08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8cD5BZGRyZXNzIC0ge3sgYXRtX2RldGFpbHMuY2l0eV9uYW1lICsgJywgJyArIGF0bV9kZXRhaWxzLmRpc3RyaWN0X25hbWUgKyAnLCAnICsgYXRtX2RldGFpbHMuc3RhdGVfbmFtZSB9fTwvcD5cbiAgICAgICAgICAgICAgICA8cD5BcmVhIENvZGUgLXt7IGF0bV9kZXRhaWxzLmFyZWFfY29kZSB9fTwvcD5cbiAgICAgICAgICAgICAgICA8cD5Qb3N0Y29kZSAtIHt7IGF0bV9kZXRhaWxzLnBvc3Rjb2RlIH19PC9wPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWluZm9cIj57eyBhdG1fZGV0YWlscy5iYW5rX25hbWUgfX08L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00XCI+XG4gICAgICAgICAgICAgICAgPHAgdi1pZj1cInNsc19kZXRhaWxzXCI+PHN0cm9uZz5TTE0gRG9ja2V0IE5vIDo8L3N0cm9uZz48L3A+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4taW5mb1wiIHYtaWY9XCJzbHNfZGV0YWlsc1wiPnt7IHNsc19kZXRhaWxzID8gc2xzX2RldGFpbHMuc2xzX2RvY2tldF9ubyA6IFwiXCIgfX08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8cD48c3Ryb25nPkRvY2tldCBObyA6PC9zdHJvbmc+PC9wPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWluZm9cIj57eyBjb21wbGFpbnQuZG9ja2V0X25vIH19PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNFwiPlxuICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+U3RhdHVzIDo8L3N0cm9uZz48L3A+XG4gICAgICAgICAgICAgICAgPCEtLSA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCI+Q29tcGxldGVkPC9idXR0b24+IC0tPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdi1pZj1cImNvbXBsYWludC53b3JrX3N0YXR1cyA9PT0gJ1BlbmRpbmcnXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiPlBlbmRpbmc8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHYtZWxzZS1pZj1cImNvbXBsYWludC53b3JrX3N0YXR1cyA9PT0gJ1Byb2Nlc3NpbmcnXCIgY2xhc3M9XCJidG4gYnRuLXdhcm5pbmdcIj5Qcm9jZXNzaW5nPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB2LWVsc2UtaWY9XCJjb21wbGFpbnQud29ya19zdGF0dXMgPT09ICdDb21wbGV0ZWQnXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIj5Db21wbGV0ZWQ8L2J1dHRvbj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJjb21wbGFpbnQuaXNfc2xtID09PSAxICYmIGN1c3RvZGlhbl9kZXRhaWxzXCIgY2xhc3M9XCJ2aWV3dGFiIHZpZXd0YWJiZXIgYWN0aW9uLXRoXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cImF1dGhVc2VyLmlkX2Ntc19wcml2aWxlZ2VzID09PSA0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCI+QXNzaWduZWQgQ3VzdG9kaWFuIDo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBZb3UgY2FuIGVuYWJsZSB0aGUgYnV0dG9uIGJlbG93IGlmIG5lZWRlZCBmb3IgYXNzaWdubWVudCBmdW5jdGlvbmFsaXR5IC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSA8YSBjbGFzcz1cImFjdGlvbi1idG5cIiBzdHlsZT1cInBhZGRpbmc6IDJweCA2cHg7IGJvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7IGNvbG9yOiAjMTkxOTE5OyBmb250LXNpemU6IDEuMGVtOyB0ZXh0LWFsaWduOiBjZW50ZXI7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgYm9yZGVyLXJhZGl1czogM3B4OyBtYXJnaW46IDFweDtcIlxuICAgICAgICAgICAgOmhyZWY9XCInL2Rhc2hib2FyZC9hc3NpZ25UaWNrZXQvJyArIGNvbXBsYWludC5kb2NrZXRfbm9cIlxuICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJcbiAgICAgICAgICAgIGRhdGEtcGxhY2VtZW50PVwidG9wXCJcbiAgICAgICAgICAgIHRpdGxlPVwiQXNzaWduIEN1c3RvZGlhblwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS11c2VyLXBsdXNcIj48L2k+XG4gICAgICAgIDwvYT4gLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInZpZXdhZGRyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3VzdG9kaWFuIE5hbWU6IHt7IGN1c3RvZGlhbl9kZXRhaWxzLm5hbWUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4oe3sgY3VzdG9kaWFuX2RldGFpbHMucGhvbmUgfX0pPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1tZC04XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBjaGF0LWJveFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXIgYmctcHJpbWFyeSB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgPGgzIGNsYXNzPVwidGFibGVoZWFkaW5nIG1iLTBcIj48aSBjbGFzcz1cImZhIGZhLWNvbW1lbnRzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiBEZXRhaWxzPC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgY2hhdC1ib2R5XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNoYXQtbWVzc2FnZXNcIj5cbiAgICAgICAgICAgIDxkaXYgdi1mb3I9XCIocm93LCBpbmRleCkgaW4gY29tcGxhaW50X2RldGFpbHNcIiA6a2V5PVwiaW5kZXhcIj5cbiAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiYXV0aFVzZXIuaWRfY21zX3ByaXZpbGVnZXMgPT0gM1wiIGNsYXNzPVwibWItM1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cInJvdy5pc19hZG1pblwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwicm93LnBvc3RfZm9yX2VuZ2luZWVyXCIgY2xhc3M9XCJtZXNzYWdlIGFkbWluIGVuZ2luZWVyLW1lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cImNoYXRoZWFkaW5nIHRleHQtaW5mb1wiPkNhbGwgQ2VudGVyPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRhdGUgdGV4dC1tdXRlZCBzbWFsbFwiPnt7IGZvcm1hdERhdGUocm93LnBvc3RlZF9hdCkgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cD57eyByb3cuY29tbWVudCB9fTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiB2LWVsc2UgY2xhc3M9XCJtZXNzYWdlIGFkbWluIGNhbGxjZW50ZXItbWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwiY2hhdGhlYWRpbmcgdGV4dC1pbmZvXCI+Q2FsbCBDZW50ZXI8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGF0ZSB0ZXh0LW11dGVkIHNtYWxsXCI+e3sgZm9ybWF0RGF0ZShyb3cucG9zdGVkX2F0KSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwPnt7IHJvdy5jb21tZW50IH19PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiB2LWVsc2UgY2xhc3M9XCJtZXNzYWdlIHVzZXItbWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJjaGF0aGVhZGluZ1wiPnt7IHJvdy5jbGllbnRfbmFtZSB9fTwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGF0ZSB0ZXh0LW11dGVkIHNtYWxsXCI+e3sgZm9ybWF0RGF0ZShyb3cucG9zdGVkX2F0KSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHA+e3sgcm93LmNvbW1lbnQgfX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHYtZWxzZS1pZj1cImF1dGhVc2VyLmlkX2Ntc19wcml2aWxlZ2VzID09IDRcIiBjbGFzcz1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJyb3cuaXNfYWRtaW5cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cInJvdy5wb3N0X2Zvcl9lbmdpbmVlclwiIGNsYXNzPVwibWVzc2FnZSBhZG1pbiBlbmdpbmVlci1tZXNzYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJjaGF0aGVhZGluZyB0ZXh0LWluZm9cIj5DYWxsIENlbnRlciAoe3sgcm93Lm5hbWUgfX0pPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRhdGUgdGV4dC1tdXRlZCBzbWFsbFwiPnt7IGZvcm1hdERhdGUocm93LnBvc3RlZF9hdCkgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cD57eyByb3cuY29tbWVudCB9fTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiB2LWVsc2UgY2xhc3M9XCJtZXNzYWdlIGFkbWluIGNhbGxjZW50ZXItbWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwiY2hhdGhlYWRpbmcgdGV4dC1pbmZvXCI+Q2FsbCBDZW50ZXIgKHt7IHJvdy5uYW1lIH19KTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkYXRlIHRleHQtbXV0ZWQgc21hbGxcIj57eyBmb3JtYXREYXRlKHJvdy5wb3N0ZWRfYXQpIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHA+e3sgcm93LmNvbW1lbnQgfX08L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHYtZWxzZSBjbGFzcz1cIm1lc3NhZ2UgdXNlci1tZXNzYWdlXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cImNoYXRoZWFkaW5nXCI+e3sgcm93LmNsaWVudF9uYW1lIH19PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkYXRlIHRleHQtbXV0ZWQgc21hbGxcIj57eyBmb3JtYXREYXRlKHJvdy5wb3N0ZWRfYXQpIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8cD57eyByb3cuY29tbWVudCB9fTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZm9vdGVyXCI+XG4gICAgICAgICAgPGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVwic3VibWl0Q29tcGxhaW50Rm9ybVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPHRleHRhcmVhIHYtbW9kZWw9XCJjb21tZW50XCIgOmRpc2FibGVkPVwiY29tcGxhaW50Lndvcmtfc3RhdHVzID09PSAnQ29tcGxldGVkJyAmJiBhdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcyA9PT0gM1wiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJBZGQgQ29tbWVudFwiIHJvd3M9XCIzXCIgcmVxdWlyZWQ+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCJhdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcyA9PSA0XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCB2LW1vZGVsPVwic2VsZWN0ZWRTdGF0dXNcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlBlbmRpbmdcIj5QZW5kaW5nPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUHJvY2Vzc2luZ1wiPlByb2Nlc3Npbmc8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDb21wbGV0ZWRcIj5Db21wbGV0ZWQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCIgdi1zaG93PVwic2hvd01hbnVhbENsb3NlXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cIm1hbnVhbENsb3NlXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgbWFudWFsLWNsb3NlXCIgcGxhY2Vob2xkZXI9XCJNYW51YWwgQ2xvc2VcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIiB2LXNob3c9XCJzaG93TGFnUmVhc29uXCI+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIHYtbW9kZWw9XCJsYWdSZWFzb25cIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiQWRkIGxhZyByZWFzb24gKlwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gOmRpc2FibGVkPVwiaXNDb21tZW50RGlzYWJsZWRcIiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrXCI+U2VuZDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuXG5cblxuXG4gICAgICAgIDwhLS0gQ2hhdCBCb3ggRGVzaWduIC0tPlxuICAgICAgICA8IS0tIDxoMiBjbGFzcz1cInRleHQtd2hpdGUgYmctaW5mbyBwLTIgcm91bmRlZFwiPkRldGFpbHM8L2gyPlxuXG5cbiAgICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlLWxpc3Qgb3ZlcmZsb3ctYXV0b1wiIHN0eWxlPVwibWF4LWhlaWdodDogMzAwcHg7XCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICB2LWZvcj1cIihtZXNzYWdlLCBpbmRleCkgaW4gbWVzc2FnZXNcIlxuICAgICAgICAgIDprZXk9XCJpbmRleFwiXG4gICAgICAgICAgOmNsYXNzPVwiWydjYXJkIG1iLTMnLCBtZXNzYWdlLnR5cGVdXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgIDxoNSBjbGFzcz1cImNhcmQtdGl0bGVcIj57eyBtZXNzYWdlLnRpdGxlIH19PC9oNT5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0XCI+e3sgbWVzc2FnZS5ib2R5IH19PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHRcIj5cbiAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPnt7IG1lc3NhZ2UudGltZXN0YW1wIH19PC9zbWFsbD5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj4gLS0+XG5cbiAgICAgICAgPCEtLSBBZGQgQ29tbWVudCBGb3JtIC0tPlxuICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XCJtdC0zXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICB2LW1vZGVsPVwibmV3Q29tbWVudFwiXG4gICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICByb3dzPVwiM1wiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBDb21tZW50XCJcbiAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gQGNsaWNrPVwiYWRkQ29tbWVudFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IG10LTJcIj5TZW5kPC9idXR0b24+XG4gICAgICA8L2Rpdj4gLS0+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAvLyBTYW1wbGUgbWVzc2FnZXNcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJISVRBQ0hJXCIsXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IFwiY2RmXCIsXG4gICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogXCIxMC0wOS0yMDI0IDA2OjMwIFBNXCIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYmctZ3JhZGllbnQtcHJpbWFyeSB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiQ2FsbCBDZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgYm9keTogXCJOYW1lOiBWaXZla2FuYW5kYSBTaGFybWEgRW1haWw6IE5BIFBob25lIE5vLjogNzkwODA3OTEwMyBDb21tZW50OiBDYXNoIERpc3BlbnNlciBGYXRhbFwiLFxuICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IFwiMTAtMDktMjAyNCAwNjozNSBQTVwiLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJnLWdyYWRpZW50LWluZm8gdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkNhbGwgQ2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IFwiRGVhciBUZWFtLCBQbGVhc2UgY2FsbCBsb2cgZm9yIERpc3BlbnNlciBpc3N1ZSwgQ3VzdG9kaWFuOiBWaXZla2FuYW5kYSBTaGFybWEgKDc5MDgwNzkxMDMpICYgRW5nOiBDaGFpdGFrICg4MDE3MzIxNjAyKSwgS2luZGx5IHByb3ZpZGUgdGhlIGRvY2tldCBudW1iZXIuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wOiBcIjEwLTA5LTIwMjQgMDY6NDEgUE1cIixcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJiZy1ncmFkaWVudC13YXJuaW5nIHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBjb21wbGFpbnQ6IHt9LFxuICAgICAgICAgICAgYXRtX2RldGFpbHM6IHt9LFxuICAgICAgICAgICAgY29tcGxhaW50X2RldGFpbHM6IFtdLFxuICAgICAgICAgICAgY3VzdG9kaWFuX2RldGFpbHM6IG51bGwsXG4gICAgICAgICAgICBzbHNfZGV0YWlsczogbnVsbCxcbiAgICAgICAgICAgIC8vIE5ldyBjb21tZW50IGlucHV0XG4gICAgICAgICAgICBuZXdDb21tZW50OiBcIlwiLFxuICAgICAgICAgICAgc2VsZWN0ZWRTdGF0dXM6IG51bGwsXG4gICAgICAgICAgICBteVByaXZpbGVnZUlkOjMsXG4gICAgICAgICAgICBhdXRoVXNlcjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhdXRoXCIpID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImF1dGhcIikpIDogbnVsbCxcbiAgICAgICAgICAgIGNvbW1lbnQ6ICcnLFxuICAgICAgc2VsZWN0ZWRTdGF0dXM6ICB0aGlzLmNvbXBsYWludCA/IHRoaXMuY29tcGxhaW50Lndvcmtfc3RhdHVzIDogJ1BlbmRpbmcnLFxuICAgICAgbWFudWFsQ2xvc2U6ICcnLFxuICAgICAgbGFnUmVhc29uOiAnJyxcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgLy8gRnVuY3Rpb24gdG8gYWRkIGEgbmV3IGNvbW1lbnRcbiAgICAgICAgYWRkQ29tbWVudCgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm5ld0NvbW1lbnQudHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3TWVzc2FnZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiVXNlciBDb21tZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IHRoaXMubmV3Q29tbWVudCxcbiAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYmctZ3JhZGllbnQtc2Vjb25kYXJ5IHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKG5ld01lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV3Q29tbWVudCA9IFwiXCI7IC8vIENsZWFyIHRoZSBpbnB1dCBhZnRlciBhZGRpbmdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgaXNDb21tZW50RGlzYWJsZWQoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNha2tpXCIpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIj09PT09PT5cIix0aGlzLmNvbXBsYWludC53b3JrX3N0YXR1cyx0aGlzLmF1dGhVc2VyLmlkX2Ntc19wcml2aWxlZ2VzKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcGxhaW50Lndvcmtfc3RhdHVzID09PSAnQ29tcGxldGVkJyAmJiB0aGlzLmF1dGhVc2VyLmlkX2Ntc19wcml2aWxlZ2VzID09PSAzO1xuICAgICAgICB9LFxuICAgICAgICBzaG93TWFudWFsQ2xvc2UoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZFN0YXR1cyA9PT0gJ0NvbXBsZXRlZCc7XG4gICAgICAgIH0sXG4gICAgICAgIHNob3dMYWdSZWFzb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZFN0YXR1cyA9PT0gJ1Byb2Nlc3NpbmcnO1xuICAgICAgICB9LFxuICAgICAgICBzdWJtaXRDb21wbGFpbnRGb3JtKCkge1xuICAgICAgICAgICAgLy8gU3VibWl0IGZvcm0gbG9naWMgdXNpbmcgYGNvbW1lbnRgLCBgc2VsZWN0ZWRTdGF0dXNgLCBgbWFudWFsQ2xvc2VgLCBhbmQgYGxhZ1JlYXNvbmAgdmFsdWVzLlxuICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSB7XG4gICAgICAgICAgICAgICAgY29tbWVudDogdGhpcy5jb21tZW50LFxuICAgICAgICAgICAgICAgIHN0YXR1czogdGhpcy5zZWxlY3RlZFN0YXR1cyxcbiAgICAgICAgICAgICAgICBtYW51YWxfY2xvc2U6IHRoaXMubWFudWFsQ2xvc2UsXG4gICAgICAgICAgICAgICAgbGFnX3JlYXNvbjogdGhpcy5sYWdSZWFzb24sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gRXhhbXBsZSBQT1NUIHJlcXVlc3QgKHJlcGxhY2UgVVJMIGFzIG5lY2Vzc2FyeSlcbiAgICAgICAgICAgIHRoaXMuJGh0dHAucG9zdChgL2Rhc2hib2FyZC91cGRhdGVDb21wbGFpbnREZXRhaWxzLyR7dGhpcy5jb21wbGFpbnQuaWR9YCwgZm9ybURhdGEpXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBoYW5kbGUgc3VjY2Vzc1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaGFuZGxlIGVycm9yXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGZvcm1hdERhdGUoZGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUpLnRvTG9jYWxlU3RyaW5nKCdlbi1HQicsIHsgZGF5OiAnMi1kaWdpdCcsIG1vbnRoOiAnMi1kaWdpdCcsIHllYXI6ICdudW1lcmljJywgaG91cjogJzItZGlnaXQnLCBtaW51dGU6ICcyLWRpZ2l0JyB9KTtcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGJlZm9yZUNyZWF0ZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCIgdGhpcy4kcm91dGUucGFyYW1zLmlkO1wiLCB0aGlzLiRyb3V0ZS5wYXJhbXMuaWQpO1xuXG4gICAgICAgIGF4aW9zLmdldChcImFwaS9jb21wbGFpbnQvdmlldy9cIiArIHRoaXMuJHJvdXRlLnBhcmFtcy5pZClcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlcz09PT0+XCIsIHJlcy5kYXRhLmRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcGxhaW50ID0gcmVzLmRhdGEuZGF0YS5jb21wbGFpbnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5hdG1fZGV0YWlscyA9IHJlcy5kYXRhLmRhdGEuYXRtX2RldGFpbHM7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wbGFpbnRfZGV0YWlscyA9IHJlcy5kYXRhLmRhdGEuY29tcGxhaW50X2RldGFpbHM7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXN0b2RpYW5fZGV0YWlscyA9IHJlcy5kYXRhLmRhdGEuY3VzdG9kaWFuX2RldGFpbHM7XG4gICAgICAgICAgICAgICAgdGhpcy5zbHNfZGV0YWlscyA9IHJlcy5kYXRhLmRhdGEuc2xzX2RldGFpbHM7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFN0YXR1cyA9IHRoaXMuY29tcGxhaW50Lndvcmtfc3RhdHVzIHx8ICdQZW5kaW5nJztcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImF0bVwiLGF0bV9kZXRhaWxzKTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIC8vIEluaXRpYWwgQVBJIGNhbGwgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWRcbiAgICAgICAgY29uc29sZS5sb2coXCJtb3VudGVkXCIpO1xuICAgICAgICB0aGlzLmF1dGhVc2VyPWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXV0aFwiKTtcbiAgICAgICAgaWYgKHRoaXMuYXV0aFVzZXIpIHtcbiAgICAgICAgICAgIHRoaXMuYXV0aFVzZXIgPSBKU09OLnBhcnNlKHRoaXMuYXV0aFVzZXIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMubG9hZFRpY2tldHMoKTtcbiAgICB9LFxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLyogQ3VzdG9tIFN0eWxlcyBpZiBuZWNlc3NhcnkgKi9cbi5tZXNzYWdlLWxpc3Qge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICBwYWRkaW5nOiAxNXB4O1xufVxuXG4uY2FyZCB7XG4gICAgYm9yZGVyOiBub25lO1xufVxuLmNoYXQtYm94IHtcbiAgbWF4LWhlaWdodDogNjAwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5jaGF0LW1lc3NhZ2VzIHtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLm1lc3NhZ2Uge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uYWRtaW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xufVxuXG4uZW5naW5lZXItbWVzc2FnZSB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzAwN2JmZjtcbn1cblxuLnVzZXItbWVzc2FnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGVkZGE7XG59XG5cbi5jaGF0aGVhZGluZyB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jaGF0LWJvZHkge1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xufVxuXG4uY2FyZC1mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuPC9zdHlsZT5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4vKiBDdXN0b20gU3R5bGVzIGlmIG5lY2Vzc2FyeSAqL1xcbi5tZXNzYWdlLWxpc3RbZGF0YS12LTIxZTdhMjU4XSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxufVxcbi5jYXJkW2RhdGEtdi0yMWU3YTI1OF0ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcbi5jaGF0LWJveFtkYXRhLXYtMjFlN2EyNThdIHtcXG4gIG1heC1oZWlnaHQ6IDYwMHB4O1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuLmNoYXQtbWVzc2FnZXNbZGF0YS12LTIxZTdhMjU4XSB7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuLm1lc3NhZ2VbZGF0YS12LTIxZTdhMjU4XSB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi5hZG1pbltkYXRhLXYtMjFlN2EyNThdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxufVxcbi5lbmdpbmVlci1tZXNzYWdlW2RhdGEtdi0yMWU3YTI1OF0ge1xcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjMDA3YmZmO1xcbn1cXG4udXNlci1tZXNzYWdlW2RhdGEtdi0yMWU3YTI1OF0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZWRkYTtcXG59XFxuLmNoYXRoZWFkaW5nW2RhdGEtdi0yMWU3YTI1OF0ge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5jaGF0LWJvZHlbZGF0YS12LTIxZTdhMjU4XSB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcXG59XFxuLmNhcmQtZm9vdGVyW2RhdGEtdi0yMWU3YTI1OF0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJDOi9Vc2Vycy9zdWphbi9EZXNrdG9wL1dvcmsvcHJvamVjdCBmcmVlbGFuY2UvU2Fua2hhL2F0bV9wcm9qL2F0bS9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Db21wbGFpbnREZXRhaWwudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStTQSxnQ0FBQTtBQUNBO0lBQ0EsdUJBQUE7SUFDQSx1QkFBQTtJQUNBLGNBQUE7Q0FDQTtBQUVBO0lBQ0EsYUFBQTtDQUNBO0FBQ0E7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0NBQ0E7QUFFQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtDQUNBO0FBRUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtDQUNBO0FBRUE7RUFDQSwwQkFBQTtDQUNBO0FBRUE7RUFDQSwrQkFBQTtDQUNBO0FBRUE7RUFDQSwwQkFBQTtDQUNBO0FBRUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7Q0FDQTtBQUVBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0NBQ0E7QUFFQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtDQUNBXCIsXCJmaWxlXCI6XCJDb21wbGFpbnREZXRhaWwudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyIG10LTVcXFwiPlxcblxcbiAgICAgICAgPCEtLSBUb3AgSW5mb3JtYXRpb24gRGVzaWduIC0tPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93IG1iLTQgcC0zIGJvcmRlciBiZy1saWdodCByb3VuZGVkXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNFxcXCI+XFxuICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+QVRNIDo8L3N0cm9uZz48L3A+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCI+Q29kZSAtIHt7IGNvbXBsYWludCAmJiBjb21wbGFpbnQuYXRtID8gY29tcGxhaW50LmF0bS5hdG1faWQgOlxcbiAgICAgICAgICAgICAgICAgICAgXFxcIlxcXCJ9fTwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8cD5BZGRyZXNzIC0ge3sgYXRtX2RldGFpbHMuY2l0eV9uYW1lICsgJywgJyArIGF0bV9kZXRhaWxzLmRpc3RyaWN0X25hbWUgKyAnLCAnICsgYXRtX2RldGFpbHMuc3RhdGVfbmFtZSB9fTwvcD5cXG4gICAgICAgICAgICAgICAgPHA+QXJlYSBDb2RlIC17eyBhdG1fZGV0YWlscy5hcmVhX2NvZGUgfX08L3A+XFxuICAgICAgICAgICAgICAgIDxwPlBvc3Rjb2RlIC0ge3sgYXRtX2RldGFpbHMucG9zdGNvZGUgfX08L3A+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4taW5mb1xcXCI+e3sgYXRtX2RldGFpbHMuYmFua19uYW1lIH19PC9idXR0b24+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTRcXFwiPlxcbiAgICAgICAgICAgICAgICA8cCB2LWlmPVxcXCJzbHNfZGV0YWlsc1xcXCI+PHN0cm9uZz5TTE0gRG9ja2V0IE5vIDo8L3N0cm9uZz48L3A+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4taW5mb1xcXCIgdi1pZj1cXFwic2xzX2RldGFpbHNcXFwiPnt7IHNsc19kZXRhaWxzID8gc2xzX2RldGFpbHMuc2xzX2RvY2tldF9ubyA6IFxcXCJcXFwiIH19PC9idXR0b24+XFxuICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+RG9ja2V0IE5vIDo8L3N0cm9uZz48L3A+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4taW5mb1xcXCI+e3sgY29tcGxhaW50LmRvY2tldF9ubyB9fTwvYnV0dG9uPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC00XFxcIj5cXG4gICAgICAgICAgICAgICAgPHA+PHN0cm9uZz5TdGF0dXMgOjwvc3Ryb25nPjwvcD5cXG4gICAgICAgICAgICAgICAgPCEtLSA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiPkNvbXBsZXRlZDwvYnV0dG9uPiAtLT5cXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB2LWlmPVxcXCJjb21wbGFpbnQud29ya19zdGF0dXMgPT09ICdQZW5kaW5nJ1xcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIj5QZW5kaW5nPC9idXR0b24+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gdi1lbHNlLWlmPVxcXCJjb21wbGFpbnQud29ya19zdGF0dXMgPT09ICdQcm9jZXNzaW5nJ1xcXCIgY2xhc3M9XFxcImJ0biBidG4td2FybmluZ1xcXCI+UHJvY2Vzc2luZzwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHYtZWxzZS1pZj1cXFwiY29tcGxhaW50Lndvcmtfc3RhdHVzID09PSAnQ29tcGxldGVkJ1xcXCIgY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCI+Q29tcGxldGVkPC9idXR0b24+XFxuXFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTRcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XFxcImNvbXBsYWludC5pc19zbG0gPT09IDEgJiYgY3VzdG9kaWFuX2RldGFpbHNcXFwiIGNsYXNzPVxcXCJ2aWV3dGFiIHZpZXd0YWJiZXIgYWN0aW9uLXRoXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cXFwiYXV0aFVzZXIuaWRfY21zX3ByaXZpbGVnZXMgPT09IDRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCI+QXNzaWduZWQgQ3VzdG9kaWFuIDo8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gWW91IGNhbiBlbmFibGUgdGhlIGJ1dHRvbiBiZWxvdyBpZiBuZWVkZWQgZm9yIGFzc2lnbm1lbnQgZnVuY3Rpb25hbGl0eSAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxhIGNsYXNzPVxcXCJhY3Rpb24tYnRuXFxcIiBzdHlsZT1cXFwicGFkZGluZzogMnB4IDZweDsgYm9yZGVyOiAxcHggc29saWQgI2Q5ZDlkOTsgY29sb3I6ICMxOTE5MTk7IGZvbnQtc2l6ZTogMS4wZW07IHRleHQtYWxpZ246IGNlbnRlcjsgZGlzcGxheTogaW5saW5lLWJsb2NrOyBib3JkZXItcmFkaXVzOiAzcHg7IG1hcmdpbjogMXB4O1xcXCJcXG4gICAgICAgICAgICA6aHJlZj1cXFwiJy9kYXNoYm9hcmQvYXNzaWduVGlja2V0LycgKyBjb21wbGFpbnQuZG9ja2V0X25vXFxcIlxcbiAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVxcXCJ0b29sdGlwXFxcIlxcbiAgICAgICAgICAgIGRhdGEtcGxhY2VtZW50PVxcXCJ0b3BcXFwiXFxuICAgICAgICAgICAgdGl0bGU9XFxcIkFzc2lnbiBDdXN0b2RpYW5cXFwiPlxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS11c2VyLXBsdXNcXFwiPjwvaT5cXG4gICAgICAgIDwvYT4gLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcInZpZXdhZGRyZXNzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3VzdG9kaWFuIE5hbWU6IHt7IGN1c3RvZGlhbl9kZXRhaWxzLm5hbWUgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+KHt7IGN1c3RvZGlhbl9kZXRhaWxzLnBob25lIH19KTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG5cXG5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLThcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQgY2hhdC1ib3hcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1oZWFkZXIgYmctcHJpbWFyeSB0ZXh0LXdoaXRlXFxcIj5cXG4gICAgICAgICAgPGgzIGNsYXNzPVxcXCJ0YWJsZWhlYWRpbmcgbWItMFxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWNvbW1lbnRzXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPiBEZXRhaWxzPC9oMz5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5IGNoYXQtYm9keVxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNoYXQtbWVzc2FnZXNcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgdi1mb3I9XFxcIihyb3csIGluZGV4KSBpbiBjb21wbGFpbnRfZGV0YWlsc1xcXCIgOmtleT1cXFwiaW5kZXhcXFwiPlxcbiAgICAgICAgICAgICAgPGRpdiB2LWlmPVxcXCJhdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcyA9PSAzXFxcIiBjbGFzcz1cXFwibWItM1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cXFwicm93LmlzX2FkbWluXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XFxcInJvdy5wb3N0X2Zvcl9lbmdpbmVlclxcXCIgY2xhc3M9XFxcIm1lc3NhZ2UgYWRtaW4gZW5naW5lZXItbWVzc2FnZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XFxcImNoYXRoZWFkaW5nIHRleHQtaW5mb1xcXCI+Q2FsbCBDZW50ZXI8L2g1PlxcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZGF0ZSB0ZXh0LW11dGVkIHNtYWxsXFxcIj57eyBmb3JtYXREYXRlKHJvdy5wb3N0ZWRfYXQpIH19PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8cD57eyByb3cuY29tbWVudCB9fTwvcD5cXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IHYtZWxzZSBjbGFzcz1cXFwibWVzc2FnZSBhZG1pbiBjYWxsY2VudGVyLW1lc3NhZ2VcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVxcXCJjaGF0aGVhZGluZyB0ZXh0LWluZm9cXFwiPkNhbGwgQ2VudGVyPC9oNT5cXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImRhdGUgdGV4dC1tdXRlZCBzbWFsbFxcXCI+e3sgZm9ybWF0RGF0ZShyb3cucG9zdGVkX2F0KSB9fTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPHA+e3sgcm93LmNvbW1lbnQgfX08L3A+XFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IHYtZWxzZSBjbGFzcz1cXFwibWVzc2FnZSB1c2VyLW1lc3NhZ2VcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XFxcImNoYXRoZWFkaW5nXFxcIj57eyByb3cuY2xpZW50X25hbWUgfX08L2g1PlxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImRhdGUgdGV4dC1tdXRlZCBzbWFsbFxcXCI+e3sgZm9ybWF0RGF0ZShyb3cucG9zdGVkX2F0KSB9fTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8cD57eyByb3cuY29tbWVudCB9fTwvcD5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDxkaXYgdi1lbHNlLWlmPVxcXCJhdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcyA9PSA0XFxcIiBjbGFzcz1cXFwibWItM1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cXFwicm93LmlzX2FkbWluXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XFxcInJvdy5wb3N0X2Zvcl9lbmdpbmVlclxcXCIgY2xhc3M9XFxcIm1lc3NhZ2UgYWRtaW4gZW5naW5lZXItbWVzc2FnZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XFxcImNoYXRoZWFkaW5nIHRleHQtaW5mb1xcXCI+Q2FsbCBDZW50ZXIgKHt7IHJvdy5uYW1lIH19KTwvaDU+XFxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkYXRlIHRleHQtbXV0ZWQgc21hbGxcXFwiPnt7IGZvcm1hdERhdGUocm93LnBvc3RlZF9hdCkgfX08L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxwPnt7IHJvdy5jb21tZW50IH19PC9wPlxcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgdi1lbHNlIGNsYXNzPVxcXCJtZXNzYWdlIGFkbWluIGNhbGxjZW50ZXItbWVzc2FnZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XFxcImNoYXRoZWFkaW5nIHRleHQtaW5mb1xcXCI+Q2FsbCBDZW50ZXIgKHt7IHJvdy5uYW1lIH19KTwvaDU+XFxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkYXRlIHRleHQtbXV0ZWQgc21hbGxcXFwiPnt7IGZvcm1hdERhdGUocm93LnBvc3RlZF9hdCkgfX08L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxwPnt7IHJvdy5jb21tZW50IH19PC9wPlxcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiB2LWVsc2UgY2xhc3M9XFxcIm1lc3NhZ2UgdXNlci1tZXNzYWdlXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVxcXCJjaGF0aGVhZGluZ1xcXCI+e3sgcm93LmNsaWVudF9uYW1lIH19PC9oNT5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkYXRlIHRleHQtbXV0ZWQgc21hbGxcXFwiPnt7IGZvcm1hdERhdGUocm93LnBvc3RlZF9hdCkgfX08L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPHA+e3sgcm93LmNvbW1lbnQgfX08L3A+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWZvb3RlclxcXCI+XFxuICAgICAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cXFwic3VibWl0Q29tcGxhaW50Rm9ybVxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICA8dGV4dGFyZWEgdi1tb2RlbD1cXFwiY29tbWVudFxcXCIgOmRpc2FibGVkPVxcXCJjb21wbGFpbnQud29ya19zdGF0dXMgPT09ICdDb21wbGV0ZWQnICYmIGF1dGhVc2VyLmlkX2Ntc19wcml2aWxlZ2VzID09PSAzXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiQWRkIENvbW1lbnRcXFwiIHJvd3M9XFxcIjNcXFwiIHJlcXVpcmVkPjwvdGV4dGFyZWE+XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgPGRpdiB2LWlmPVxcXCJhdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcyA9PSA0XFxcIj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICA8c2VsZWN0IHYtbW9kZWw9XFxcInNlbGVjdGVkU3RhdHVzXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJQZW5kaW5nXFxcIj5QZW5kaW5nPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiUHJvY2Vzc2luZ1xcXCI+UHJvY2Vzc2luZzwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIkNvbXBsZXRlZFxcXCI+Q29tcGxldGVkPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiB2LXNob3c9XFxcInNob3dNYW51YWxDbG9zZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiB2LW1vZGVsPVxcXCJtYW51YWxDbG9zZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbCBtYW51YWwtY2xvc2VcXFwiIHBsYWNlaG9sZGVyPVxcXCJNYW51YWwgQ2xvc2VcXFwiIC8+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIHYtc2hvdz1cXFwic2hvd0xhZ1JlYXNvblxcXCI+XFxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSB2LW1vZGVsPVxcXCJsYWdSZWFzb25cXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJBZGQgbGFnIHJlYXNvbiAqXFxcIj48L3RleHRhcmVhPlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICA8YnV0dG9uIDpkaXNhYmxlZD1cXFwiaXNDb21tZW50RGlzYWJsZWRcXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2tcXFwiPlNlbmQ8L2J1dHRvbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC9mb3JtPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuXFxuXFxuXFxuXFxuXFxuICAgICAgICA8IS0tIENoYXQgQm94IERlc2lnbiAtLT5cXG4gICAgICAgIDwhLS0gPGgyIGNsYXNzPVxcXCJ0ZXh0LXdoaXRlIGJnLWluZm8gcC0yIHJvdW5kZWRcXFwiPkRldGFpbHM8L2gyPlxcblxcblxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIm1lc3NhZ2UtbGlzdCBvdmVyZmxvdy1hdXRvXFxcIiBzdHlsZT1cXFwibWF4LWhlaWdodDogMzAwcHg7XFxcIj5cXG4gICAgICAgIDxkaXZcXG4gICAgICAgICAgdi1mb3I9XFxcIihtZXNzYWdlLCBpbmRleCkgaW4gbWVzc2FnZXNcXFwiXFxuICAgICAgICAgIDprZXk9XFxcImluZGV4XFxcIlxcbiAgICAgICAgICA6Y2xhc3M9XFxcIlsnY2FyZCBtYi0zJywgbWVzc2FnZS50eXBlXVxcXCJcXG4gICAgICAgID5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5XFxcIj5cXG4gICAgICAgICAgICA8aDUgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPnt7IG1lc3NhZ2UudGl0bGUgfX08L2g1PlxcbiAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJjYXJkLXRleHRcXFwiPnt7IG1lc3NhZ2UuYm9keSB9fTwvcD5cXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwiY2FyZC10ZXh0XFxcIj5cXG4gICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwidGV4dC1tdXRlZFxcXCI+e3sgbWVzc2FnZS50aW1lc3RhbXAgfX08L3NtYWxsPlxcbiAgICAgICAgICAgIDwvcD5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj4gLS0+XFxuXFxuICAgICAgICA8IS0tIEFkZCBDb21tZW50IEZvcm0gLS0+XFxuICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XFxcIm10LTNcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgIDx0ZXh0YXJlYVxcbiAgICAgICAgICAgIHYtbW9kZWw9XFxcIm5ld0NvbW1lbnRcXFwiXFxuICAgICAgICAgICAgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXG4gICAgICAgICAgICByb3dzPVxcXCIzXFxcIlxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJBZGQgQ29tbWVudFxcXCJcXG4gICAgICAgICAgPjwvdGV4dGFyZWE+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxidXR0b24gQGNsaWNrPVxcXCJhZGRDb21tZW50XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IG10LTJcXFwiPlNlbmQ8L2J1dHRvbj5cXG4gICAgICA8L2Rpdj4gLS0+XFxuICAgIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5leHBvcnQgZGVmYXVsdCB7XFxuICAgIGRhdGEoKSB7XFxuICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgIC8vIFNhbXBsZSBtZXNzYWdlc1xcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBbXFxuICAgICAgICAgICAgICAgIHtcXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcXFwiSElUQUNISVxcXCIsXFxuICAgICAgICAgICAgICAgICAgICBib2R5OiBcXFwiY2RmXFxcIixcXG4gICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogXFxcIjEwLTA5LTIwMjQgMDY6MzAgUE1cXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXFxcImJnLWdyYWRpZW50LXByaW1hcnkgdGV4dC13aGl0ZVxcXCJcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFxcXCJDYWxsIENlbnRlclxcXCIsXFxuICAgICAgICAgICAgICAgICAgICBib2R5OiBcXFwiTmFtZTogVml2ZWthbmFuZGEgU2hhcm1hIEVtYWlsOiBOQSBQaG9uZSBOby46IDc5MDgwNzkxMDMgQ29tbWVudDogQ2FzaCBEaXNwZW5zZXIgRmF0YWxcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wOiBcXFwiMTAtMDktMjAyNCAwNjozNSBQTVxcXCIsXFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcXFwiYmctZ3JhZGllbnQtaW5mbyB0ZXh0LXdoaXRlXFxcIlxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB7XFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXFxcIkNhbGwgQ2VudGVyXFxcIixcXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IFxcXCJEZWFyIFRlYW0sIFBsZWFzZSBjYWxsIGxvZyBmb3IgRGlzcGVuc2VyIGlzc3VlLCBDdXN0b2RpYW46IFZpdmVrYW5hbmRhIFNoYXJtYSAoNzkwODA3OTEwMykgJiBFbmc6IENoYWl0YWsgKDgwMTczMjE2MDIpLCBLaW5kbHkgcHJvdmlkZSB0aGUgZG9ja2V0IG51bWJlci4uLlxcXCIsXFxuICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IFxcXCIxMC0wOS0yMDI0IDA2OjQxIFBNXFxcIixcXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFxcXCJiZy1ncmFkaWVudC13YXJuaW5nIHRleHQtd2hpdGVcXFwiXFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBdLFxcbiAgICAgICAgICAgIGNvbXBsYWludDoge30sXFxuICAgICAgICAgICAgYXRtX2RldGFpbHM6IHt9LFxcbiAgICAgICAgICAgIGNvbXBsYWludF9kZXRhaWxzOiBbXSxcXG4gICAgICAgICAgICBjdXN0b2RpYW5fZGV0YWlsczogbnVsbCxcXG4gICAgICAgICAgICBzbHNfZGV0YWlsczogbnVsbCxcXG4gICAgICAgICAgICAvLyBOZXcgY29tbWVudCBpbnB1dFxcbiAgICAgICAgICAgIG5ld0NvbW1lbnQ6IFxcXCJcXFwiLFxcbiAgICAgICAgICAgIHNlbGVjdGVkU3RhdHVzOiBudWxsLFxcbiAgICAgICAgICAgIG15UHJpdmlsZWdlSWQ6MyxcXG4gICAgICAgICAgICBhdXRoVXNlcjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXFxcImF1dGhcXFwiKSA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXFxcImF1dGhcXFwiKSkgOiBudWxsLFxcbiAgICAgICAgICAgIGNvbW1lbnQ6ICcnLFxcbiAgICAgIHNlbGVjdGVkU3RhdHVzOiAgdGhpcy5jb21wbGFpbnQgPyB0aGlzLmNvbXBsYWludC53b3JrX3N0YXR1cyA6ICdQZW5kaW5nJyxcXG4gICAgICBtYW51YWxDbG9zZTogJycsXFxuICAgICAgbGFnUmVhc29uOiAnJyxcXG4gICAgICAgIH07XFxuICAgIH0sXFxuICAgIG1ldGhvZHM6IHtcXG4gICAgICAgIC8vIEZ1bmN0aW9uIHRvIGFkZCBhIG5ldyBjb21tZW50XFxuICAgICAgICBhZGRDb21tZW50KCkge1xcbiAgICAgICAgICAgIGlmICh0aGlzLm5ld0NvbW1lbnQudHJpbSgpKSB7XFxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld01lc3NhZ2UgPSB7XFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXFxcIlVzZXIgQ29tbWVudFxcXCIsXFxuICAgICAgICAgICAgICAgICAgICBib2R5OiB0aGlzLm5ld0NvbW1lbnQsXFxuICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSxcXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFxcXCJiZy1ncmFkaWVudC1zZWNvbmRhcnkgdGV4dC13aGl0ZVxcXCJcXG4gICAgICAgICAgICAgICAgfTtcXG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKG5ld01lc3NhZ2UpO1xcbiAgICAgICAgICAgICAgICB0aGlzLm5ld0NvbW1lbnQgPSBcXFwiXFxcIjsgLy8gQ2xlYXIgdGhlIGlucHV0IGFmdGVyIGFkZGluZ1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBpc0NvbW1lbnREaXNhYmxlZCgpIHtcXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcXFwiY2Fra2lcXFwiKTtcXG5cXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcXFwiPT09PT09PlxcXCIsdGhpcy5jb21wbGFpbnQud29ya19zdGF0dXMsdGhpcy5hdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcyk7XFxuXFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcGxhaW50Lndvcmtfc3RhdHVzID09PSAnQ29tcGxldGVkJyAmJiB0aGlzLmF1dGhVc2VyLmlkX2Ntc19wcml2aWxlZ2VzID09PSAzO1xcbiAgICAgICAgfSxcXG4gICAgICAgIHNob3dNYW51YWxDbG9zZSgpIHtcXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZFN0YXR1cyA9PT0gJ0NvbXBsZXRlZCc7XFxuICAgICAgICB9LFxcbiAgICAgICAgc2hvd0xhZ1JlYXNvbigpIHtcXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZFN0YXR1cyA9PT0gJ1Byb2Nlc3NpbmcnO1xcbiAgICAgICAgfSxcXG4gICAgICAgIHN1Ym1pdENvbXBsYWludEZvcm0oKSB7XFxuICAgICAgICAgICAgLy8gU3VibWl0IGZvcm0gbG9naWMgdXNpbmcgYGNvbW1lbnRgLCBgc2VsZWN0ZWRTdGF0dXNgLCBgbWFudWFsQ2xvc2VgLCBhbmQgYGxhZ1JlYXNvbmAgdmFsdWVzLlxcbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0ge1xcbiAgICAgICAgICAgICAgICBjb21tZW50OiB0aGlzLmNvbW1lbnQsXFxuICAgICAgICAgICAgICAgIHN0YXR1czogdGhpcy5zZWxlY3RlZFN0YXR1cyxcXG4gICAgICAgICAgICAgICAgbWFudWFsX2Nsb3NlOiB0aGlzLm1hbnVhbENsb3NlLFxcbiAgICAgICAgICAgICAgICBsYWdfcmVhc29uOiB0aGlzLmxhZ1JlYXNvbixcXG4gICAgICAgICAgICB9O1xcbiAgICAgICAgICAgIC8vIEV4YW1wbGUgUE9TVCByZXF1ZXN0IChyZXBsYWNlIFVSTCBhcyBuZWNlc3NhcnkpXFxuICAgICAgICAgICAgdGhpcy4kaHR0cC5wb3N0KGAvZGFzaGJvYXJkL3VwZGF0ZUNvbXBsYWludERldGFpbHMvJHt0aGlzLmNvbXBsYWludC5pZH1gLCBmb3JtRGF0YSlcXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgLy8gaGFuZGxlIHN1Y2Nlc3NcXG4gICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBlcnJvclxcbiAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgIH0sXFxuICAgICAgICBmb3JtYXREYXRlKGRhdGUpIHtcXG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZSkudG9Mb2NhbGVTdHJpbmcoJ2VuLUdCJywgeyBkYXk6ICcyLWRpZ2l0JywgbW9udGg6ICcyLWRpZ2l0JywgeWVhcjogJ251bWVyaWMnLCBob3VyOiAnMi1kaWdpdCcsIG1pbnV0ZTogJzItZGlnaXQnIH0pO1xcbiAgICAgICAgfSxcXG4gICAgfSxcXG4gICAgYmVmb3JlQ3JlYXRlKCkge1xcbiAgICAgICAgY29uc29sZS5sb2coXFxcIiB0aGlzLiRyb3V0ZS5wYXJhbXMuaWQ7XFxcIiwgdGhpcy4kcm91dGUucGFyYW1zLmlkKTtcXG5cXG4gICAgICAgIGF4aW9zLmdldChcXFwiYXBpL2NvbXBsYWludC92aWV3L1xcXCIgKyB0aGlzLiRyb3V0ZS5wYXJhbXMuaWQpXFxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcXFwicmVzPT09PT5cXFwiLCByZXMuZGF0YS5kYXRhKTtcXG4gICAgICAgICAgICAgICAgdGhpcy5jb21wbGFpbnQgPSByZXMuZGF0YS5kYXRhLmNvbXBsYWludDtcXG4gICAgICAgICAgICAgICAgdGhpcy5hdG1fZGV0YWlscyA9IHJlcy5kYXRhLmRhdGEuYXRtX2RldGFpbHM7XFxuICAgICAgICAgICAgICAgIHRoaXMuY29tcGxhaW50X2RldGFpbHMgPSByZXMuZGF0YS5kYXRhLmNvbXBsYWludF9kZXRhaWxzO1xcbiAgICAgICAgICAgICAgICB0aGlzLmN1c3RvZGlhbl9kZXRhaWxzID0gcmVzLmRhdGEuZGF0YS5jdXN0b2RpYW5fZGV0YWlscztcXG4gICAgICAgICAgICAgICAgdGhpcy5zbHNfZGV0YWlscyA9IHJlcy5kYXRhLmRhdGEuc2xzX2RldGFpbHM7XFxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTdGF0dXMgPSB0aGlzLmNvbXBsYWludC53b3JrX3N0YXR1cyB8fCAnUGVuZGluZyc7XFxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFxcXCJhdG1cXFwiLGF0bV9kZXRhaWxzKTtcXG5cXG4gICAgICAgICAgICB9KTtcXG5cXG4gICAgfSxcXG4gICAgbW91bnRlZCgpIHtcXG4gICAgICAgIC8vIEluaXRpYWwgQVBJIGNhbGwgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWRcXG4gICAgICAgIGNvbnNvbGUubG9nKFxcXCJtb3VudGVkXFxcIik7XFxuICAgICAgICB0aGlzLmF1dGhVc2VyPWxvY2FsU3RvcmFnZS5nZXRJdGVtKFxcXCJhdXRoXFxcIik7XFxuICAgICAgICBpZiAodGhpcy5hdXRoVXNlcikge1xcbiAgICAgICAgICAgIHRoaXMuYXV0aFVzZXIgPSBKU09OLnBhcnNlKHRoaXMuYXV0aFVzZXIpO1xcbiAgICAgICAgfVxcbiAgICAgICAgLy8gdGhpcy5sb2FkVGlja2V0cygpO1xcbiAgICB9LFxcbn07XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlIHNjb3BlZD5cXG4vKiBDdXN0b20gU3R5bGVzIGlmIG5lY2Vzc2FyeSAqL1xcbi5tZXNzYWdlLWxpc3Qge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbn1cXG5cXG4uY2FyZCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuLmNoYXQtYm94IHtcXG4gIG1heC1oZWlnaHQ6IDYwMHB4O1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLmNoYXQtbWVzc2FnZXMge1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5tZXNzYWdlIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmFkbWluIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxufVxcblxcbi5lbmdpbmVlci1tZXNzYWdlIHtcXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzAwN2JmZjtcXG59XFxuXFxuLnVzZXItbWVzc2FnZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRlZGRhO1xcbn1cXG5cXG4uY2hhdGhlYWRpbmcge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jaGF0LWJvZHkge1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XFxufVxcblxcbi5jYXJkLWZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lciBtdC01XCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IG1iLTQgcC0zIGJvcmRlciBiZy1saWdodCByb3VuZGVkXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNFwiIH0sIFtcbiAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImJ1dHRvblwiLCB7IHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeVwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIkNvZGUgLSBcIiArXG4gICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICBfdm0uY29tcGxhaW50ICYmIF92bS5jb21wbGFpbnQuYXRtXG4gICAgICAgICAgICAgICAgICA/IF92bS5jb21wbGFpbnQuYXRtLmF0bV9pZFxuICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiQWRkcmVzcyAtIFwiICtcbiAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgIF92bS5hdG1fZGV0YWlscy5jaXR5X25hbWUgK1xuICAgICAgICAgICAgICAgICAgXCIsIFwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5hdG1fZGV0YWlscy5kaXN0cmljdF9uYW1lICtcbiAgICAgICAgICAgICAgICAgIFwiLCBcIiArXG4gICAgICAgICAgICAgICAgICBfdm0uYXRtX2RldGFpbHMuc3RhdGVfbmFtZVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoXCJBcmVhIENvZGUgLVwiICsgX3ZtLl9zKF92bS5hdG1fZGV0YWlscy5hcmVhX2NvZGUpKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgW192bS5fdihcIlBvc3Rjb2RlIC0gXCIgKyBfdm0uX3MoX3ZtLmF0bV9kZXRhaWxzLnBvc3Rjb2RlKSldKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJidXR0b25cIiwgeyBzdGF0aWNDbGFzczogXCJidG4gYnRuLWluZm9cIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uYXRtX2RldGFpbHMuYmFua19uYW1lKSlcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTRcIiB9LCBbXG4gICAgICAgIF92bS5zbHNfZGV0YWlsc1xuICAgICAgICAgID8gX2MoXCJwXCIsIFtfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiU0xNIERvY2tldCBObyA6XCIpXSldKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5zbHNfZGV0YWlsc1xuICAgICAgICAgID8gX2MoXCJidXR0b25cIiwgeyBzdGF0aWNDbGFzczogXCJidG4gYnRuLWluZm9cIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnNsc19kZXRhaWxzID8gX3ZtLnNsc19kZXRhaWxzLnNsc19kb2NrZXRfbm8gOiBcIlwiKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJidXR0b25cIiwgeyBzdGF0aWNDbGFzczogXCJidG4gYnRuLWluZm9cIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uY29tcGxhaW50LmRvY2tldF9ubykpXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC00XCIgfSwgW1xuICAgICAgICBfdm0uX20oMiksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5jb21wbGFpbnQud29ya19zdGF0dXMgPT09IFwiUGVuZGluZ1wiXG4gICAgICAgICAgPyBfYyhcImJ1dHRvblwiLCB7IHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGFuZ2VyXCIgfSwgW192bS5fdihcIlBlbmRpbmdcIildKVxuICAgICAgICAgIDogX3ZtLmNvbXBsYWludC53b3JrX3N0YXR1cyA9PT0gXCJQcm9jZXNzaW5nXCJcbiAgICAgICAgICA/IF9jKFwiYnV0dG9uXCIsIHsgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi13YXJuaW5nXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCJQcm9jZXNzaW5nXCIpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLmNvbXBsYWludC53b3JrX3N0YXR1cyA9PT0gXCJDb21wbGV0ZWRcIlxuICAgICAgICAgID8gX2MoXCJidXR0b25cIiwgeyBzdGF0aWNDbGFzczogXCJidG4gYnRuLXN1Y2Nlc3NcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIkNvbXBsZXRlZFwiKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC00XCIgfSwgW1xuICAgICAgICBfdm0uY29tcGxhaW50LmlzX3NsbSA9PT0gMSAmJiBfdm0uY3VzdG9kaWFuX2RldGFpbHNcbiAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidmlld3RhYiB2aWV3dGFiYmVyIGFjdGlvbi10aFwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLmF1dGhVc2VyLmlkX2Ntc19wcml2aWxlZ2VzID09PSA0XG4gICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJjb250cm9sLWxhYmVsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkFzc2lnbmVkIEN1c3RvZGlhbiA6XCIpXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJ2aWV3YWRkcmVzc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQ3VzdG9kaWFuIE5hbWU6IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5jdXN0b2RpYW5fZGV0YWlscy5uYW1lKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIihcIiArIF92bS5fcyhfdm0uY3VzdG9kaWFuX2RldGFpbHMucGhvbmUpICsgXCIpXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLThcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZCBjaGF0LWJveFwiIH0sIFtcbiAgICAgICAgICBfdm0uX20oMyksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtYm9keSBjaGF0LWJvZHlcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjaGF0LW1lc3NhZ2VzXCIgfSxcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS5jb21wbGFpbnRfZGV0YWlscywgZnVuY3Rpb24ocm93LCBpbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfYyhcImRpdlwiLCB7IGtleTogaW5kZXggfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLmF1dGhVc2VyLmlkX2Ntc19wcml2aWxlZ2VzID09IDNcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICByb3cuaXNfYWRtaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cucG9zdF9mb3JfZW5naW5lZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWVzc2FnZSBhZG1pbiBlbmdpbmVlci1tZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImg1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hhdGhlYWRpbmcgdGV4dC1pbmZvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkNhbGwgQ2VudGVyXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZSB0ZXh0LW11dGVkIHNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZvcm1hdERhdGUocm93LnBvc3RlZF9hdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KF92bS5fcyhyb3cuY29tbWVudCkpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1lc3NhZ2UgYWRtaW4gY2FsbGNlbnRlci1tZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImg1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hhdGhlYWRpbmcgdGV4dC1pbmZvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkNhbGwgQ2VudGVyXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZSB0ZXh0LW11dGVkIHNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZvcm1hdERhdGUocm93LnBvc3RlZF9hdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KF92bS5fcyhyb3cuY29tbWVudCkpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1lc3NhZ2UgdXNlci1tZXNzYWdlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJoNVwiLCB7IHN0YXRpY0NsYXNzOiBcImNoYXRoZWFkaW5nXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhyb3cuY2xpZW50X25hbWUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZGF0ZSB0ZXh0LW11dGVkIHNtYWxsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZm9ybWF0RGF0ZShyb3cucG9zdGVkX2F0KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihfdm0uX3Mocm93LmNvbW1lbnQpKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5hdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcyA9PSA0XG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtYi0zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgcm93LmlzX2FkbWluXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LnBvc3RfZm9yX2VuZ2luZWVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1lc3NhZ2UgYWRtaW4gZW5naW5lZXItbWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoYXRoZWFkaW5nIHRleHQtaW5mb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNhbGwgQ2VudGVyIChcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhyb3cubmFtZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZSB0ZXh0LW11dGVkIHNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZvcm1hdERhdGUocm93LnBvc3RlZF9hdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KF92bS5fcyhyb3cuY29tbWVudCkpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1lc3NhZ2UgYWRtaW4gY2FsbGNlbnRlci1tZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImg1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hhdGhlYWRpbmcgdGV4dC1pbmZvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ2FsbCBDZW50ZXIgKFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHJvdy5uYW1lKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlIHRleHQtbXV0ZWQgc21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybWF0RGF0ZShyb3cucG9zdGVkX2F0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoX3ZtLl9zKHJvdy5jb21tZW50KSldKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWVzc2FnZSB1c2VyLW1lc3NhZ2VcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImg1XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2hhdGhlYWRpbmdcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHJvdy5jbGllbnRfbmFtZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJkYXRlIHRleHQtbXV0ZWQgc21hbGxcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5mb3JtYXREYXRlKHJvdy5wb3N0ZWRfYXQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KF92bS5fcyhyb3cuY29tbWVudCkpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWZvb3RlclwiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImZvcm1cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnN1Ym1pdENvbXBsYWludEZvcm0uYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmNvbW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImNvbW1lbnRcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uY29tcGxhaW50Lndvcmtfc3RhdHVzID09PSBcIkNvbXBsZXRlZFwiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uYXV0aFVzZXIuaWRfY21zX3ByaXZpbGVnZXMgPT09IDMsXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiQWRkIENvbW1lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICByb3dzOiBcIjNcIixcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmNvbW1lbnQgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uY29tbWVudCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uYXV0aFVzZXIuaWRfY21zX3ByaXZpbGVnZXMgPT0gNFxuICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWRTdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWRTdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9IFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZFN0YXR1cyA9ICRldmVudC50YXJnZXQubXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICQkc2VsZWN0ZWRWYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIlBlbmRpbmdcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlBlbmRpbmdcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiUHJvY2Vzc2luZ1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiUHJvY2Vzc2luZ1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCJDb21wbGV0ZWRcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkNvbXBsZXRlZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2hvd01hbnVhbENsb3NlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzaG93TWFudWFsQ2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubWFudWFsQ2xvc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibWFudWFsQ2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sIG1hbnVhbC1jbG9zZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIk1hbnVhbCBDbG9zZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLm1hbnVhbENsb3NlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm1hbnVhbENsb3NlID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zaG93TGFnUmVhc29uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzaG93TGFnUmVhc29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmxhZ1JlYXNvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJsYWdSZWFzb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcGxhY2Vob2xkZXI6IFwiQWRkIGxhZyByZWFzb24gKlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5sYWdSZWFzb24gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubGFnUmVhc29uID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZGlzYWJsZWQ6IF92bS5pc0NvbW1lbnREaXNhYmxlZCwgdHlwZTogXCJzdWJtaXRcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJTZW5kXCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJwXCIsIFtfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiQVRNIDpcIildKV0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwicFwiLCBbX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIkRvY2tldCBObyA6XCIpXSldKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInBcIiwgW19jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCJTdGF0dXMgOlwiKV0pXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWhlYWRlciBiZy1wcmltYXJ5IHRleHQtd2hpdGVcIiB9LCBbXG4gICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwidGFibGVoZWFkaW5nIG1iLTBcIiB9LCBbXG4gICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtY29tbWVudHNcIixcbiAgICAgICAgICBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH1cbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIiBEZXRhaWxzXCIpXG4gICAgICBdKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0yMWU3YTI1OFwiLCB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9KVxuICB9XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yMWU3YTI1OFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NvbXBsYWludERldGFpbC52dWVcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNjcyZmFiZWZcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yMWU3YTI1OFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NvbXBsYWludERldGFpbC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTIxZTdhMjU4XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ29tcGxhaW50RGV0YWlsLnZ1ZVwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKGNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yMWU3YTI1OFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NvbXBsYWludERldGFpbC52dWVcIilcbn1cbi8qIHNjcmlwdCAqL1xuZXhwb3J0ICogZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vQ29tcGxhaW50RGV0YWlsLnZ1ZVwiXG5pbXBvcnQgX192dWVfc2NyaXB0X18gZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vQ29tcGxhaW50RGV0YWlsLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSAqL1xuaW1wb3J0IHtyZW5kZXIgYXMgX192dWVfcmVuZGVyX18sIHN0YXRpY1JlbmRlckZucyBhcyBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19ffSBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0yMWU3YTI1OFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NvbXBsYWludERldGFpbC52dWVcIlxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gXCJkYXRhLXYtMjFlN2EyNThcIlxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbmltcG9ydCBub3JtYWxpemVDb21wb25lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnQtbm9ybWFsaXplclwiXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfcmVuZGVyX18sXG4gIF9fdnVlX3N0YXRpY19yZW5kZXJfZm5zX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXNcXFxcanNcXFxcY29tcG9uZW50c1xcXFxDb21wbGFpbnREZXRhaWwudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTIxZTdhMjU4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMjFlN2EyNThcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQuZXhwb3J0c1xuIl0sInNvdXJjZVJvb3QiOiIifQ==