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
      complete_date_time: null,
      myPrivilegeId: 3,
      authUser: localStorage.getItem("auth") ? JSON.parse(localStorage.getItem("auth")) : null,
      comment: '',
      selectedStatus: this.complaint ? this.complaint.work_status : 'Pending',
      manualClose: this.getCurrentDateTime(),
      lagReason: ''
    };
  },
  methods: {
    // Function to add a new comment
    getResult() {
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
    getCurrentDateTime() {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
      const day = String(now.getDate()).padStart(2, "0");
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      return `${year}-${month}-${day}T${hours}:${minutes}`;
    },
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
        this.getResult();
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

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-67ce597e\",\"scoped\":true,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/ComplaintDetail.vue":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-67ce597e","scoped":true,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/ComplaintDetail.vue ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* Custom Styles if necessary */\n.message-list[data-v-67ce597e] {\n    border: 1px solid #ccc;\n    border-radius: 0.25rem;\n    padding: 15px;\n}\n.card[data-v-67ce597e] {\n    border: none;\n}\n.chat-box[data-v-67ce597e] {\n  max-height: 600px;\n  overflow-y: auto;\n}\n.chat-messages[data-v-67ce597e] {\n  height: 400px;\n  overflow-y: auto;\n}\n.message[data-v-67ce597e] {\n  padding: 10px;\n  border-radius: 10px;\n  margin-bottom: 10px;\n}\n.admin[data-v-67ce597e] {\n  background-color: #f1f1f1;\n}\n.engineer-message[data-v-67ce597e] {\n  border-left: 5px solid #007bff;\n}\n.user-message[data-v-67ce597e] {\n    position: relative;\n    background:linear-gradient(to top right, #fc885e 0%, #ff6c9e 100%);\n    color: white;\n    margin-left: 3%;\n}\n.user-message[data-v-67ce597e]:before{\n    border-color: transparent #fc885e transparent transparent;\n    border-style: solid;\n    border-width: 10px;\n    content: \" \";\n    height: 0;\n    pointer-events: none;\n    position: absolute;\n    right: 100%;\n    top: 15px;\n    border-width: 9px;\n    margin-right: -1px;\n}\n.callcenter-message[data-v-67ce597e] {\n    position: relative;\n    background: linear-gradient(to top right, #1f8a81 0%, #3eded1 100%);\n    padding: 10px;\n    color: white;\n    border-radius: 5px;\n    width: 97%;\n    margin-right: 3%;\n    display: inline-block;\n}\n.callcenter-message[data-v-67ce597e]:before {\n    content: '';\n    position: absolute;\n    border-style: solid;\n    border-width: 10px;\n    border-color: transparent transparent transparent #36ccc0;\n    left: 100%;\n    top: 41px;\n    margin-left: -1px;\n}\n.chatheading[data-v-67ce597e] {\n  margin: 0;\n  font-weight: bold;\n}\n.chat-body[data-v-67ce597e] {\n  padding: 20px;\n  background-color: #f8f9fa;\n  overflow-y: auto;\n  height: 100vh;\n}\n.card-footer[data-v-67ce597e] {\n  background-color: #f8f9fa;\n  padding: 10px;\n}\n", "", {"version":3,"sources":["/Users/sunitabag/Desktop/php/atm_old/atm/resources/js/components/resources/js/components/ComplaintDetail.vue"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAiVA,gCAAA;AACA;IACA,uBAAA;IACA,uBAAA;IACA,cAAA;CACA;AAEA;IACA,aAAA;CACA;AACA;EACA,kBAAA;EACA,iBAAA;CACA;AAEA;EACA,cAAA;EACA,iBAAA;CACA;AAEA;EACA,cAAA;EACA,oBAAA;EACA,oBAAA;CACA;AAEA;EACA,0BAAA;CACA;AAEA;EACA,+BAAA;CACA;AAEA;IACA,mBAAA;IACA,mEAAA;IACA,aAAA;IACA,gBAAA;CACA;AACA;IACA,0DAAA;IACA,oBAAA;IACA,mBAAA;IACA,aAAA;IACA,UAAA;IACA,qBAAA;IACA,mBAAA;IACA,YAAA;IACA,UAAA;IACA,kBAAA;IACA,mBAAA;CACA;AAGA;IACA,mBAAA;IACA,oEAAA;IACA,cAAA;IACA,aAAA;IACA,mBAAA;IACA,WAAA;IACA,iBAAA;IACA,sBAAA;CACA;AAEA;IACA,YAAA;IACA,mBAAA;IACA,oBAAA;IACA,mBAAA;IACA,0DAAA;IACA,WAAA;IACA,UAAA;IACA,kBAAA;CACA;AACA;EACA,UAAA;EACA,kBAAA;CACA;AAEA;EACA,cAAA;EACA,0BAAA;EACA,iBAAA;EACA,cAAA;CACA;AAEA;EACA,0BAAA;EACA,cAAA;CACA","file":"ComplaintDetail.vue","sourcesContent":["<template>\n    <div class=\"container mt-5\">\n\n        <!-- Top Information Design -->\n        <div class=\"row mb-4 p-3 border bg-light rounded\">\n            <div class=\"col-md-4\">\n                <p><strong>ATM :</strong></p>\n                <button class=\"btn btn-primary\">Code - {{ complaint && complaint.atm ? complaint.atm.atm_id :\n                    \"\"}}</button>\n                <p>\n                  Address - {{ atm_details.city_name + ', ' + atm_details.district_name + ', ' + atm_details.state_name }}\n                  <br>Area Code -{{ atm_details.area_code }}\n                  <br>Postcode - {{ atm_details.postcode }}\n                </p>\n                <button class=\"btn btn-info\">{{ atm_details.bank_name }}</button>\n            </div>\n            <div class=\"col-md-4\">\n                <p v-if=\"sls_details\"><strong>SLM Docket No :</strong></p>\n                <button class=\"btn btn-info\" v-if=\"sls_details\">{{ sls_details ? sls_details.sls_docket_no : \"\" }}</button>\n                <p><strong>Docket No :</strong></p>\n                <button class=\"btn btn-info\">{{ complaint.docket_no }}</button>\n            </div>\n            <div class=\"col-md-4\">\n                <p><strong>Status :</strong></p>\n                <!-- <button class=\"btn btn-success\">Completed</button> -->\n                <button v-if=\"complaint.work_status === 'Pending'\" class=\"btn btn-danger\">Pending</button>\n                <button v-else-if=\"complaint.work_status === 'Processing'\" class=\"btn btn-warning\">Processing</button>\n                <button v-else-if=\"complaint.work_status === 'Completed'\" class=\"btn btn-success\">Completed</button>\n\n            </div>\n            <div class=\"col-md-4\">\n                <div v-if=\"complaint.is_slm === 1 && custodian_details\" class=\"viewtab viewtabber action-th\">\n                    <div v-if=\"authUser.id_cms_privileges === 4\">\n                        <label class=\"control-label\">Assigned Custodian :</label>\n                        <!-- You can enable the button below if needed for assignment functionality -->\n                        <!-- <a class=\"action-btn\" style=\"padding: 2px 6px; border: 1px solid #d9d9d9; color: #191919; font-size: 1.0em; text-align: center; display: inline-block; border-radius: 3px; margin: 1px;\"\n            :href=\"'/dashboard/assignTicket/' + complaint.docket_no\"\n            data-toggle=\"tooltip\"\n            data-placement=\"top\"\n            title=\"Assign Custodian\">\n            <i class=\"fa fa-user-plus\"></i>\n        </a> -->\n                        <p class=\"viewaddress\">\n                            Custodian Name: {{ custodian_details.name }}\n                            <span>({{ custodian_details.phone }})</span>\n                        </p>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n\n\n        <div class=\"row justify-content-center\">\n    <div class=\"col-md-8\">\n      <div class=\"card chat-box\">\n        <div class=\"card-header bg-primary text-white\">\n          <h3 class=\"tableheading mb-0\"><i class=\"fa fa-comments\" aria-hidden=\"true\"></i> Details</h3>\n        </div>\n        <div class=\"card-body chat-body\">\n          <div class=\"chat-messages\">\n            <div v-for=\"(row, index) in complaint_details\" :key=\"index\">\n              <div v-if=\"authUser.id_cms_privileges == 3\" class=\"mb-3\">\n                <div v-if=\"row.is_admin\">\n                  <div v-if=\"row.post_for_engineer\" class=\"message admin engineer-message\">\n                    <div class=\"d-flex justify-content-between\">\n                      <h5 class=\"chatheading text-info\">Call Center</h5>\n                      <span class=\"date text-muted small\">{{ formatDate(row.posted_at) }}</span>\n                    </div>\n                    <p>{{ row.comment }}</p>\n                  </div>\n                  <div v-else class=\"message admin callcenter-message\">\n                    <div class=\"d-flex justify-content-between\">\n                      <h5 class=\"chatheading text-info\">Call Center</h5>\n                      <span class=\"date text-muted small\">{{ formatDate(row.posted_at) }}</span>\n                    </div>\n                    <p>{{ row.comment }}</p>\n                  </div>\n                </div>\n                <div v-else class=\"message user-message\">\n                  <div class=\"d-flex justify-content-between\">\n                    <h5 class=\"chatheading\">{{ row.client_name }}</h5>\n                    <span class=\"date text-muted small\">{{ formatDate(row.posted_at) }}</span>\n                  </div>\n                  <p>{{ row.comment }}</p>\n                </div>\n              </div>\n              <div v-else-if=\"authUser.id_cms_privileges == 4\" class=\"mb-3\">\n                <div v-if=\"row.is_admin\">\n                  <div v-if=\"row.post_for_engineer\" class=\"message admin engineer-message\">\n                    <div class=\"d-flex justify-content-between\">\n                      <h5 class=\"chatheading text-info\">Call Center ({{ row.name }})</h5>\n                      <span class=\"date text-muted small\">{{ formatDate(row.posted_at) }}</span>\n                    </div>\n                    <p>{{ row.comment }}</p>\n                  </div>\n                  <div v-else class=\"message admin callcenter-message\">\n                    <!-- <div v-else class=\"message user-message\"> -->\n                    <div class=\"d-flex justify-content-between\">\n                      <h5 class=\"chatheading\">Call Center ({{ row.name }})</h5>\n                      <span class=\"date text-muted small\">{{ formatDate(row.posted_at) }}</span>\n                    </div>\n                    <p>{{ row.comment }}</p>\n                  </div>\n                </div>\n                <div v-else class=\"message user-message\">\n                  <div class=\"d-flex justify-content-between\">\n                    <h5 class=\"chatheading\">{{ row.client_name }}</h5>\n                    <span class=\"date text-muted small\">{{ formatDate(row.posted_at) }}</span>\n                  </div>\n                  <p>{{ row.comment }}</p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"card-footer\">\n          <form @submit.prevent=\"submitComplaintForm\">\n            <div class=\"form-group\">\n              <textarea v-model=\"comment\" :disabled=\"complaint.work_status === 'Completed' && authUser.id_cms_privileges === 3\" class=\"form-control\" placeholder=\"Add Comment\" rows=\"3\" required></textarea>\n            </div>\n\n            <div v-if=\"authUser.id_cms_privileges == 4\">\n              <div class=\"form-group\">\n                <select v-model=\"selectedStatus\" class=\"form-control\">\n                  <option value=\"Pending\">Pending</option>\n                  <option value=\"Processing\">Processing</option>\n                  <option value=\"Completed\">Completed</option>\n                </select>\n              </div>\n              <div class=\"form-group\" v-show=\"selectedStatus=='Completed'\">\n                <input type=\"datetime-local\" v-model=\"manualClose\" class=\"form-control manual-close\" placeholder=\"Complete Date Time\" />\n              </div>\n              <!-- <div class=\"form-group\" v-show=\"showManualClose\">\n                <input type=\"text\" v-model=\"manualClose\" class=\"form-control manual-close\" placeholder=\"Manual Close\" />\n              </div>\n              <div class=\"form-group\" v-show=\"showLagReason\">\n                <textarea v-model=\"lagReason\" class=\"form-control\" placeholder=\"Add lag reason\"></textarea>\n              </div> -->\n            </div>\n\n            <div class=\"form-group\">\n              <button :disabled=\"complaint.work_status === 'Completed' && authUser.id_cms_privileges === 3\" type=\"submit\" class=\"btn btn-primary btn-block\">Send</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n\n\n        <!-- Chat Box Design -->\n        <!-- <h2 class=\"text-white bg-info p-2 rounded\">Details</h2>\n\n\n      <div class=\"message-list overflow-auto\" style=\"max-height: 300px;\">\n        <div\n          v-for=\"(message, index) in messages\"\n          :key=\"index\"\n          :class=\"['card mb-3', message.type]\"\n        >\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">{{ message.title }}</h5>\n            <p class=\"card-text\">{{ message.body }}</p>\n            <p class=\"card-text\">\n              <small class=\"text-muted\">{{ message.timestamp }}</small>\n            </p>\n          </div>\n        </div>\n      </div> -->\n\n        <!-- Add Comment Form -->\n        <!-- <div class=\"mt-3\">\n        <div class=\"form-group\">\n          <textarea\n            v-model=\"newComment\"\n            class=\"form-control\"\n            rows=\"3\"\n            placeholder=\"Add Comment\"\n          ></textarea>\n        </div>\n        <button @click=\"addComment\" class=\"btn btn-primary mt-2\">Send</button>\n      </div> -->\n    </div>\n</template>\n\n<script>\nexport default {\n    data() {\n        return {\n            // Sample messages\n            messages: [\n                {\n                    title: \"HITACHI\",\n                    body: \"cdf\",\n                    timestamp: \"10-09-2024 06:30 PM\",\n                    type: \"bg-gradient-primary text-white\"\n                },\n                {\n                    title: \"Call Center\",\n                    body: \"Name: Vivekananda Sharma Email: NA Phone No.: 7908079103 Comment: Cash Dispenser Fatal\",\n                    timestamp: \"10-09-2024 06:35 PM\",\n                    type: \"bg-gradient-info text-white\"\n                },\n                {\n                    title: \"Call Center\",\n                    body: \"Dear Team, Please call log for Dispenser issue, Custodian: Vivekananda Sharma (7908079103) & Eng: Chaitak (8017321602), Kindly provide the docket number...\",\n                    timestamp: \"10-09-2024 06:41 PM\",\n                    type: \"bg-gradient-warning text-white\"\n                }\n            ],\n            complaint: {},\n            atm_details: {},\n            complaint_details: [],\n            custodian_details: null,\n            sls_details: null,\n            // New comment input\n            newComment: \"\",\n            selectedStatus: null,\n            complete_date_time:null,\n            myPrivilegeId:3,\n            authUser: localStorage.getItem(\"auth\") ? JSON.parse(localStorage.getItem(\"auth\")) : null,\n            comment: '',\n      selectedStatus:  this.complaint ? this.complaint.work_status : 'Pending',\n      manualClose: this.getCurrentDateTime(),\n      lagReason: '',\n        };\n    },\n    methods: {\n        // Function to add a new comment\n        getResult(){\n            axios.get(\"api/complaint/view/\" + this.$route.params.id)\n            .then((res) => {\n                console.log(\"res====>\", res.data.data);\n                this.complaint = res.data.data.complaint;\n                this.atm_details = res.data.data.atm_details;\n                this.complaint_details = res.data.data.complaint_details;\n                this.custodian_details = res.data.data.custodian_details;\n                this.sls_details = res.data.data.sls_details;\n                this.selectedStatus = this.complaint.work_status || 'Pending';\n                // console.log(\"atm\",atm_details);\n\n            });\n\n        },\n        getCurrentDateTime() {\n      const now = new Date();\n      const year = now.getFullYear();\n      const month = String(now.getMonth() + 1).padStart(2, \"0\"); // Months are 0-indexed\n      const day = String(now.getDate()).padStart(2, \"0\");\n      const hours = String(now.getHours()).padStart(2, \"0\");\n      const minutes = String(now.getMinutes()).padStart(2, \"0\");\n      return `${year}-${month}-${day}T${hours}:${minutes}`;\n    },\n        addComment() {\n            if (this.newComment.trim()) {\n                const newMessage = {\n                    title: \"User Comment\",\n                    body: this.newComment,\n                    timestamp: new Date().toLocaleString(),\n                    type: \"bg-gradient-secondary text-white\"\n                };\n                this.messages.push(newMessage);\n                this.newComment = \"\"; // Clear the input after adding\n            }\n        },\n        isCommentDisabled() {\n            console.log(\"cakki\");\n\n            console.log(\"======>\",this.complaint.work_status,this.authUser.id_cms_privileges);\n\n            return this.complaint.work_status === 'Completed' && this.authUser.id_cms_privileges === 3;\n        },\n        showManualClose() {\n            return this.selectedStatus === 'Completed';\n        },\n        showLagReason() {\n            return this.selectedStatus === 'Processing';\n        },\n        submitComplaintForm() {\n            // Submit form logic using `comment`, `selectedStatus`, `manualClose`, and `lagReason` values.\n            const formData = {\n                action:\"update\",\n                comment: this.comment,\n                status: this.selectedStatus,\n                manual_close: this.manualClose,\n                lag_reason: this.lagReason,\n            };\n            // Example POST request (replace URL as necessary)\n            this.$http.post(`api/complaint/comment/${this.complaint.id}`, formData)\n                .then(response => {\n                    // handle success\n                    this.getResult();\n                })\n                .catch(error => {\n                    // handle error\n                });\n        },\n        formatDate(date) {\n            return new Date(date).toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });\n        },\n    },\n    beforeCreate() {\n        console.log(\" this.$route.params.id;\", this.$route.params.id);\n\n        axios.get(\"api/complaint/view/\" + this.$route.params.id)\n            .then((res) => {\n                console.log(\"res====>\", res.data.data);\n                this.complaint = res.data.data.complaint;\n                this.atm_details = res.data.data.atm_details;\n                this.complaint_details = res.data.data.complaint_details;\n                this.custodian_details = res.data.data.custodian_details;\n                this.sls_details = res.data.data.sls_details;\n                this.selectedStatus = this.complaint.work_status || 'Pending';\n                // console.log(\"atm\",atm_details);\n\n            });\n\n    },\n\n    mounted() {\n        // Initial API call when the component is mounted\n        console.log(\"mounted\");\n        this.authUser=localStorage.getItem(\"auth\");\n        if (this.authUser) {\n            this.authUser = JSON.parse(this.authUser);\n        }\n        // this.loadTickets();\n    },\n};\n</script>\n\n<style scoped>\n/* Custom Styles if necessary */\n.message-list {\n    border: 1px solid #ccc;\n    border-radius: 0.25rem;\n    padding: 15px;\n}\n\n.card {\n    border: none;\n}\n.chat-box {\n  max-height: 600px;\n  overflow-y: auto;\n}\n\n.chat-messages {\n  height: 400px;\n  overflow-y: auto;\n}\n\n.message {\n  padding: 10px;\n  border-radius: 10px;\n  margin-bottom: 10px;\n}\n\n.admin {\n  background-color: #f1f1f1;\n}\n\n.engineer-message {\n  border-left: 5px solid #007bff;\n}\n\n.user-message {\n    position: relative;\n    background:linear-gradient(to top right, #fc885e 0%, #ff6c9e 100%);\n    color: white;\n    margin-left: 3%;\n}\n.user-message:before{\n    border-color: transparent #fc885e transparent transparent;\n    border-style: solid;\n    border-width: 10px;\n    content: \" \";\n    height: 0;\n    pointer-events: none;\n    position: absolute;\n    right: 100%;\n    top: 15px;\n    border-width: 9px;\n    margin-right: -1px;\n}\n\n\n.callcenter-message {\n    position: relative;\n    background: linear-gradient(to top right, #1f8a81 0%, #3eded1 100%);\n    padding: 10px;\n    color: white;\n    border-radius: 5px;\n    width: 97%;\n    margin-right: 3%;\n    display: inline-block;\n}\n\n.callcenter-message:before {\n    content: '';\n    position: absolute;\n    border-style: solid;\n    border-width: 10px;\n    border-color: transparent transparent transparent #36ccc0;\n    left: 100%;\n    top: 41px;\n    margin-left: -1px;\n}\n.chatheading {\n  margin: 0;\n  font-weight: bold;\n}\n\n.chat-body {\n  padding: 20px;\n  background-color: #f8f9fa;\n  overflow-y: auto;\n  height: 100vh;\n}\n\n.card-footer {\n  background-color: #f8f9fa;\n  padding: 10px;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-67ce597e\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/ComplaintDetail.vue":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-67ce597e","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/ComplaintDetail.vue ***!
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
            "\n                Address - " +
              _vm._s(
                _vm.atm_details.city_name +
                  ", " +
                  _vm.atm_details.district_name +
                  ", " +
                  _vm.atm_details.state_name
              ) +
              "\n                "
          ),
          _c("br"),
          _vm._v(
            "Area Code -" +
              _vm._s(_vm.atm_details.area_code) +
              "\n                "
          ),
          _c("br"),
          _vm._v(
            "Postcode - " +
              _vm._s(_vm.atm_details.postcode) +
              "\n              "
          )
        ]),
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
                                            { staticClass: "chatheading" },
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
                              value: _vm.selectedStatus == "Completed",
                              expression: "selectedStatus=='Completed'"
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
                              type: "datetime-local",
                              placeholder: "Complete Date Time"
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

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-67ce597e\",\"scoped\":true,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/ComplaintDetail.vue":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-67ce597e","scoped":true,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/ComplaintDetail.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader?sourceMap!../../../node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-67ce597e","scoped":true,"sourceMap":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ComplaintDetail.vue */ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-67ce597e\",\"scoped\":true,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/ComplaintDetail.vue");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("aa00dec2", content, false, {});
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
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_67ce597e_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ComplaintDetail_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-67ce597e","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!../../../node_modules/vue-loader/lib/selector?type=template&index=0!./ComplaintDetail.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-67ce597e\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/ComplaintDetail.vue");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"id":"data-v-67ce597e","scoped":true,"sourceMap":true}!../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./ComplaintDetail.vue */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-67ce597e\",\"scoped\":true,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/ComplaintDetail.vue")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-67ce597e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ComplaintDetail_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_67ce597e_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ComplaintDetail_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_67ce597e_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ComplaintDetail_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/ComplaintDetail.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tcGxhaW50RGV0YWlsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Db21wbGFpbnREZXRhaWwudnVlP2IxZmIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tcGxhaW50RGV0YWlsLnZ1ZT84YmQ5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0NvbXBsYWludERldGFpbC52dWU/ODllOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Db21wbGFpbnREZXRhaWwudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJtZXNzYWdlcyIsInRpdGxlIiwiYm9keSIsInRpbWVzdGFtcCIsInR5cGUiLCJjb21wbGFpbnQiLCJhdG1fZGV0YWlscyIsImNvbXBsYWludF9kZXRhaWxzIiwiY3VzdG9kaWFuX2RldGFpbHMiLCJzbHNfZGV0YWlscyIsIm5ld0NvbW1lbnQiLCJzZWxlY3RlZFN0YXR1cyIsImNvbXBsZXRlX2RhdGVfdGltZSIsIm15UHJpdmlsZWdlSWQiLCJhdXRoVXNlciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJjb21tZW50Iiwid29ya19zdGF0dXMiLCJtYW51YWxDbG9zZSIsImdldEN1cnJlbnREYXRlVGltZSIsImxhZ1JlYXNvbiIsIm1ldGhvZHMiLCJnZXRSZXN1bHQiLCJheGlvcyIsImdldCIsIiRyb3V0ZSIsInBhcmFtcyIsImlkIiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJub3ciLCJEYXRlIiwieWVhciIsImdldEZ1bGxZZWFyIiwibW9udGgiLCJTdHJpbmciLCJnZXRNb250aCIsInBhZFN0YXJ0IiwiZGF5IiwiZ2V0RGF0ZSIsImhvdXJzIiwiZ2V0SG91cnMiLCJtaW51dGVzIiwiZ2V0TWludXRlcyIsImFkZENvbW1lbnQiLCJ0cmltIiwibmV3TWVzc2FnZSIsInRvTG9jYWxlU3RyaW5nIiwicHVzaCIsImlzQ29tbWVudERpc2FibGVkIiwiaWRfY21zX3ByaXZpbGVnZXMiLCJzaG93TWFudWFsQ2xvc2UiLCJzaG93TGFnUmVhc29uIiwic3VibWl0Q29tcGxhaW50Rm9ybSIsImZvcm1EYXRhIiwiYWN0aW9uIiwic3RhdHVzIiwibWFudWFsX2Nsb3NlIiwibGFnX3JlYXNvbiIsIiRodHRwIiwicG9zdCIsInJlc3BvbnNlIiwiY2F0Y2giLCJlcnJvciIsImZvcm1hdERhdGUiLCJkYXRlIiwiaG91ciIsIm1pbnV0ZSIsImJlZm9yZUNyZWF0ZSIsIm1vdW50ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErTGU7RUFDZkEsS0FBQTtJQUNBO01BQ0E7TUFDQUMsUUFBQSxHQUNBO1FBQ0FDLEtBQUE7UUFDQUMsSUFBQTtRQUNBQyxTQUFBO1FBQ0FDLElBQUE7TUFDQSxHQUNBO1FBQ0FILEtBQUE7UUFDQUMsSUFBQTtRQUNBQyxTQUFBO1FBQ0FDLElBQUE7TUFDQSxHQUNBO1FBQ0FILEtBQUE7UUFDQUMsSUFBQTtRQUNBQyxTQUFBO1FBQ0FDLElBQUE7TUFDQSxFQUNBO01BQ0FDLFNBQUE7TUFDQUMsV0FBQTtNQUNBQyxpQkFBQTtNQUNBQyxpQkFBQTtNQUNBQyxXQUFBO01BQ0E7TUFDQUMsVUFBQTtNQUNBQyxjQUFBO01BQ0FDLGtCQUFBO01BQ0FDLGFBQUE7TUFDQUMsUUFBQSxFQUFBQyxZQUFBLENBQUFDLE9BQUEsV0FBQUMsSUFBQSxDQUFBQyxLQUFBLENBQUFILFlBQUEsQ0FBQUMsT0FBQTtN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Q0FBbUM7QUFDbkQ7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2tDO0FBQ2xDLElBQUksS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7O0FDeGpCaEI7O0FBRUE7QUFDQSxjQUFjLG1CQUFPLENBQUMsc2tCQUFnVDtBQUN0VTtBQUNBLDRDQUE0QyxRQUFTO0FBQ3JEO0FBQ0E7QUFDQSxVQUFVLG1CQUFPLENBQUMsNkhBQWdFO0FBQ2xGLCtDQUErQztBQUMvQztBQUNBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7OztBQ1hmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0EsRUFBRSxtQkFBTyxDQUFDLDZtQkFBNFI7QUFDdFM7QUFDQTtBQUNzSDtBQUNhO0FBQ25JO0FBQ2lWO0FBQ2pWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDbUc7QUFDbkcsZ0JBQWdCLHlHQUFrQjtBQUNsQyxFQUFFLGtJQUFjO0FBQ2hCLEVBQUUseU9BQWM7QUFDaEIsRUFBRSxrUEFBeUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsRUFhWDs7QUFFVSxnRkFBaUIiLCJmaWxlIjoianMvMjAuYnVuZGxlLjQxZjUxMmU5YzQyNmVmNWExZWJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgbXQtNVwiPlxuXG4gICAgICAgIDwhLS0gVG9wIEluZm9ybWF0aW9uIERlc2lnbiAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBtYi00IHAtMyBib3JkZXIgYmctbGlnaHQgcm91bmRlZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00XCI+XG4gICAgICAgICAgICAgICAgPHA+PHN0cm9uZz5BVE0gOjwvc3Ryb25nPjwvcD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+Q29kZSAtIHt7IGNvbXBsYWludCAmJiBjb21wbGFpbnQuYXRtID8gY29tcGxhaW50LmF0bS5hdG1faWQgOlxuICAgICAgICAgICAgICAgICAgICBcIlwifX08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIEFkZHJlc3MgLSB7eyBhdG1fZGV0YWlscy5jaXR5X25hbWUgKyAnLCAnICsgYXRtX2RldGFpbHMuZGlzdHJpY3RfbmFtZSArICcsICcgKyBhdG1fZGV0YWlscy5zdGF0ZV9uYW1lIH19XG4gICAgICAgICAgICAgICAgICA8YnI+QXJlYSBDb2RlIC17eyBhdG1fZGV0YWlscy5hcmVhX2NvZGUgfX1cbiAgICAgICAgICAgICAgICAgIDxicj5Qb3N0Y29kZSAtIHt7IGF0bV9kZXRhaWxzLnBvc3Rjb2RlIH19XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWluZm9cIj57eyBhdG1fZGV0YWlscy5iYW5rX25hbWUgfX08L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00XCI+XG4gICAgICAgICAgICAgICAgPHAgdi1pZj1cInNsc19kZXRhaWxzXCI+PHN0cm9uZz5TTE0gRG9ja2V0IE5vIDo8L3N0cm9uZz48L3A+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4taW5mb1wiIHYtaWY9XCJzbHNfZGV0YWlsc1wiPnt7IHNsc19kZXRhaWxzID8gc2xzX2RldGFpbHMuc2xzX2RvY2tldF9ubyA6IFwiXCIgfX08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8cD48c3Ryb25nPkRvY2tldCBObyA6PC9zdHJvbmc+PC9wPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWluZm9cIj57eyBjb21wbGFpbnQuZG9ja2V0X25vIH19PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNFwiPlxuICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+U3RhdHVzIDo8L3N0cm9uZz48L3A+XG4gICAgICAgICAgICAgICAgPCEtLSA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCI+Q29tcGxldGVkPC9idXR0b24+IC0tPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdi1pZj1cImNvbXBsYWludC53b3JrX3N0YXR1cyA9PT0gJ1BlbmRpbmcnXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiPlBlbmRpbmc8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHYtZWxzZS1pZj1cImNvbXBsYWludC53b3JrX3N0YXR1cyA9PT0gJ1Byb2Nlc3NpbmcnXCIgY2xhc3M9XCJidG4gYnRuLXdhcm5pbmdcIj5Qcm9jZXNzaW5nPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB2LWVsc2UtaWY9XCJjb21wbGFpbnQud29ya19zdGF0dXMgPT09ICdDb21wbGV0ZWQnXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIj5Db21wbGV0ZWQ8L2J1dHRvbj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJjb21wbGFpbnQuaXNfc2xtID09PSAxICYmIGN1c3RvZGlhbl9kZXRhaWxzXCIgY2xhc3M9XCJ2aWV3dGFiIHZpZXd0YWJiZXIgYWN0aW9uLXRoXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cImF1dGhVc2VyLmlkX2Ntc19wcml2aWxlZ2VzID09PSA0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCI+QXNzaWduZWQgQ3VzdG9kaWFuIDo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBZb3UgY2FuIGVuYWJsZSB0aGUgYnV0dG9uIGJlbG93IGlmIG5lZWRlZCBmb3IgYXNzaWdubWVudCBmdW5jdGlvbmFsaXR5IC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSA8YSBjbGFzcz1cImFjdGlvbi1idG5cIiBzdHlsZT1cInBhZGRpbmc6IDJweCA2cHg7IGJvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7IGNvbG9yOiAjMTkxOTE5OyBmb250LXNpemU6IDEuMGVtOyB0ZXh0LWFsaWduOiBjZW50ZXI7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgYm9yZGVyLXJhZGl1czogM3B4OyBtYXJnaW46IDFweDtcIlxuICAgICAgICAgICAgOmhyZWY9XCInL2Rhc2hib2FyZC9hc3NpZ25UaWNrZXQvJyArIGNvbXBsYWludC5kb2NrZXRfbm9cIlxuICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJcbiAgICAgICAgICAgIGRhdGEtcGxhY2VtZW50PVwidG9wXCJcbiAgICAgICAgICAgIHRpdGxlPVwiQXNzaWduIEN1c3RvZGlhblwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS11c2VyLXBsdXNcIj48L2k+XG4gICAgICAgIDwvYT4gLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInZpZXdhZGRyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3VzdG9kaWFuIE5hbWU6IHt7IGN1c3RvZGlhbl9kZXRhaWxzLm5hbWUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4oe3sgY3VzdG9kaWFuX2RldGFpbHMucGhvbmUgfX0pPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1tZC04XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBjaGF0LWJveFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXIgYmctcHJpbWFyeSB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgPGgzIGNsYXNzPVwidGFibGVoZWFkaW5nIG1iLTBcIj48aSBjbGFzcz1cImZhIGZhLWNvbW1lbnRzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiBEZXRhaWxzPC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgY2hhdC1ib2R5XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNoYXQtbWVzc2FnZXNcIj5cbiAgICAgICAgICAgIDxkaXYgdi1mb3I9XCIocm93LCBpbmRleCkgaW4gY29tcGxhaW50X2RldGFpbHNcIiA6a2V5PVwiaW5kZXhcIj5cbiAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiYXV0aFVzZXIuaWRfY21zX3ByaXZpbGVnZXMgPT0gM1wiIGNsYXNzPVwibWItM1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cInJvdy5pc19hZG1pblwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwicm93LnBvc3RfZm9yX2VuZ2luZWVyXCIgY2xhc3M9XCJtZXNzYWdlIGFkbWluIGVuZ2luZWVyLW1lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cImNoYXRoZWFkaW5nIHRleHQtaW5mb1wiPkNhbGwgQ2VudGVyPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRhdGUgdGV4dC1tdXRlZCBzbWFsbFwiPnt7IGZvcm1hdERhdGUocm93LnBvc3RlZF9hdCkgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cD57eyByb3cuY29tbWVudCB9fTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiB2LWVsc2UgY2xhc3M9XCJtZXNzYWdlIGFkbWluIGNhbGxjZW50ZXItbWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwiY2hhdGhlYWRpbmcgdGV4dC1pbmZvXCI+Q2FsbCBDZW50ZXI8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGF0ZSB0ZXh0LW11dGVkIHNtYWxsXCI+e3sgZm9ybWF0RGF0ZShyb3cucG9zdGVkX2F0KSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwPnt7IHJvdy5jb21tZW50IH19PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiB2LWVsc2UgY2xhc3M9XCJtZXNzYWdlIHVzZXItbWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJjaGF0aGVhZGluZ1wiPnt7IHJvdy5jbGllbnRfbmFtZSB9fTwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGF0ZSB0ZXh0LW11dGVkIHNtYWxsXCI+e3sgZm9ybWF0RGF0ZShyb3cucG9zdGVkX2F0KSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHA+e3sgcm93LmNvbW1lbnQgfX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHYtZWxzZS1pZj1cImF1dGhVc2VyLmlkX2Ntc19wcml2aWxlZ2VzID09IDRcIiBjbGFzcz1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJyb3cuaXNfYWRtaW5cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cInJvdy5wb3N0X2Zvcl9lbmdpbmVlclwiIGNsYXNzPVwibWVzc2FnZSBhZG1pbiBlbmdpbmVlci1tZXNzYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJjaGF0aGVhZGluZyB0ZXh0LWluZm9cIj5DYWxsIENlbnRlciAoe3sgcm93Lm5hbWUgfX0pPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRhdGUgdGV4dC1tdXRlZCBzbWFsbFwiPnt7IGZvcm1hdERhdGUocm93LnBvc3RlZF9hdCkgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cD57eyByb3cuY29tbWVudCB9fTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiB2LWVsc2UgY2xhc3M9XCJtZXNzYWdlIGFkbWluIGNhbGxjZW50ZXItbWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIDxkaXYgdi1lbHNlIGNsYXNzPVwibWVzc2FnZSB1c2VyLW1lc3NhZ2VcIj4gLS0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJjaGF0aGVhZGluZ1wiPkNhbGwgQ2VudGVyICh7eyByb3cubmFtZSB9fSk8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGF0ZSB0ZXh0LW11dGVkIHNtYWxsXCI+e3sgZm9ybWF0RGF0ZShyb3cucG9zdGVkX2F0KSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwPnt7IHJvdy5jb21tZW50IH19PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiB2LWVsc2UgY2xhc3M9XCJtZXNzYWdlIHVzZXItbWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJjaGF0aGVhZGluZ1wiPnt7IHJvdy5jbGllbnRfbmFtZSB9fTwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGF0ZSB0ZXh0LW11dGVkIHNtYWxsXCI+e3sgZm9ybWF0RGF0ZShyb3cucG9zdGVkX2F0KSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHA+e3sgcm93LmNvbW1lbnQgfX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWZvb3RlclwiPlxuICAgICAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cInN1Ym1pdENvbXBsYWludEZvcm1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDx0ZXh0YXJlYSB2LW1vZGVsPVwiY29tbWVudFwiIDpkaXNhYmxlZD1cImNvbXBsYWludC53b3JrX3N0YXR1cyA9PT0gJ0NvbXBsZXRlZCcgJiYgYXV0aFVzZXIuaWRfY21zX3ByaXZpbGVnZXMgPT09IDNcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiQWRkIENvbW1lbnRcIiByb3dzPVwiM1wiIHJlcXVpcmVkPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiB2LWlmPVwiYXV0aFVzZXIuaWRfY21zX3ByaXZpbGVnZXMgPT0gNFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxzZWxlY3Qgdi1tb2RlbD1cInNlbGVjdGVkU3RhdHVzXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJQZW5kaW5nXCI+UGVuZGluZzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlByb2Nlc3NpbmdcIj5Qcm9jZXNzaW5nPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ29tcGxldGVkXCI+Q29tcGxldGVkPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiIHYtc2hvdz1cInNlbGVjdGVkU3RhdHVzPT0nQ29tcGxldGVkJ1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIiB2LW1vZGVsPVwibWFudWFsQ2xvc2VcIiBjbGFzcz1cImZvcm0tY29udHJvbCBtYW51YWwtY2xvc2VcIiBwbGFjZWhvbGRlcj1cIkNvbXBsZXRlIERhdGUgVGltZVwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCIgdi1zaG93PVwic2hvd01hbnVhbENsb3NlXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cIm1hbnVhbENsb3NlXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgbWFudWFsLWNsb3NlXCIgcGxhY2Vob2xkZXI9XCJNYW51YWwgQ2xvc2VcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIiB2LXNob3c9XCJzaG93TGFnUmVhc29uXCI+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIHYtbW9kZWw9XCJsYWdSZWFzb25cIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiQWRkIGxhZyByZWFzb25cIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgICA8L2Rpdj4gLS0+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiA6ZGlzYWJsZWQ9XCJjb21wbGFpbnQud29ya19zdGF0dXMgPT09ICdDb21wbGV0ZWQnICYmIGF1dGhVc2VyLmlkX2Ntc19wcml2aWxlZ2VzID09PSAzXCIgdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiPlNlbmQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cblxuXG5cblxuICAgICAgICA8IS0tIENoYXQgQm94IERlc2lnbiAtLT5cbiAgICAgICAgPCEtLSA8aDIgY2xhc3M9XCJ0ZXh0LXdoaXRlIGJnLWluZm8gcC0yIHJvdW5kZWRcIj5EZXRhaWxzPC9oMj5cblxuXG4gICAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZS1saXN0IG92ZXJmbG93LWF1dG9cIiBzdHlsZT1cIm1heC1oZWlnaHQ6IDMwMHB4O1wiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgdi1mb3I9XCIobWVzc2FnZSwgaW5kZXgpIGluIG1lc3NhZ2VzXCJcbiAgICAgICAgICA6a2V5PVwiaW5kZXhcIlxuICAgICAgICAgIDpjbGFzcz1cIlsnY2FyZCBtYi0zJywgbWVzc2FnZS50eXBlXVwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICA8aDUgY2xhc3M9XCJjYXJkLXRpdGxlXCI+e3sgbWVzc2FnZS50aXRsZSB9fTwvaDU+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dFwiPnt7IG1lc3NhZ2UuYm9keSB9fTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0XCI+XG4gICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj57eyBtZXNzYWdlLnRpbWVzdGFtcCB9fTwvc21hbGw+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+IC0tPlxuXG4gICAgICAgIDwhLS0gQWRkIENvbW1lbnQgRm9ybSAtLT5cbiAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVwibXQtM1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgdi1tb2RlbD1cIm5ld0NvbW1lbnRcIlxuICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgcm93cz1cIjNcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgQ29tbWVudFwiXG4gICAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIEBjbGljaz1cImFkZENvbW1lbnRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBtdC0yXCI+U2VuZDwvYnV0dG9uPlxuICAgICAgPC9kaXY+IC0tPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLy8gU2FtcGxlIG1lc3NhZ2VzXG4gICAgICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiSElUQUNISVwiLFxuICAgICAgICAgICAgICAgICAgICBib2R5OiBcImNkZlwiLFxuICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IFwiMTAtMDktMjAyNCAwNjozMCBQTVwiLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJnLWdyYWRpZW50LXByaW1hcnkgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkNhbGwgQ2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IFwiTmFtZTogVml2ZWthbmFuZGEgU2hhcm1hIEVtYWlsOiBOQSBQaG9uZSBOby46IDc5MDgwNzkxMDMgQ29tbWVudDogQ2FzaCBEaXNwZW5zZXIgRmF0YWxcIixcbiAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wOiBcIjEwLTA5LTIwMjQgMDY6MzUgUE1cIixcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJiZy1ncmFkaWVudC1pbmZvIHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJDYWxsIENlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBib2R5OiBcIkRlYXIgVGVhbSwgUGxlYXNlIGNhbGwgbG9nIGZvciBEaXNwZW5zZXIgaXNzdWUsIEN1c3RvZGlhbjogVml2ZWthbmFuZGEgU2hhcm1hICg3OTA4MDc5MTAzKSAmIEVuZzogQ2hhaXRhayAoODAxNzMyMTYwMiksIEtpbmRseSBwcm92aWRlIHRoZSBkb2NrZXQgbnVtYmVyLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogXCIxMC0wOS0yMDI0IDA2OjQxIFBNXCIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYmctZ3JhZGllbnQtd2FybmluZyB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgY29tcGxhaW50OiB7fSxcbiAgICAgICAgICAgIGF0bV9kZXRhaWxzOiB7fSxcbiAgICAgICAgICAgIGNvbXBsYWludF9kZXRhaWxzOiBbXSxcbiAgICAgICAgICAgIGN1c3RvZGlhbl9kZXRhaWxzOiBudWxsLFxuICAgICAgICAgICAgc2xzX2RldGFpbHM6IG51bGwsXG4gICAgICAgICAgICAvLyBOZXcgY29tbWVudCBpbnB1dFxuICAgICAgICAgICAgbmV3Q29tbWVudDogXCJcIixcbiAgICAgICAgICAgIHNlbGVjdGVkU3RhdHVzOiBudWxsLFxuICAgICAgICAgICAgY29tcGxldGVfZGF0ZV90aW1lOm51bGwsXG4gICAgICAgICAgICBteVByaXZpbGVnZUlkOjMsXG4gICAgICAgICAgICBhdXRoVXNlcjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhdXRoXCIpID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImF1dGhcIikpIDogbnVsbCxcbiAgICAgICAgICAgIGNvbW1lbnQ6ICcnLFxuICAgICAgc2VsZWN0ZWRTdGF0dXM6ICB0aGlzLmNvbXBsYWludCA/IHRoaXMuY29tcGxhaW50Lndvcmtfc3RhdHVzIDogJ1BlbmRpbmcnLFxuICAgICAgbWFudWFsQ2xvc2U6IHRoaXMuZ2V0Q3VycmVudERhdGVUaW1lKCksXG4gICAgICBsYWdSZWFzb246ICcnLFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICAvLyBGdW5jdGlvbiB0byBhZGQgYSBuZXcgY29tbWVudFxuICAgICAgICBnZXRSZXN1bHQoKXtcbiAgICAgICAgICAgIGF4aW9zLmdldChcImFwaS9jb21wbGFpbnQvdmlldy9cIiArIHRoaXMuJHJvdXRlLnBhcmFtcy5pZClcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlcz09PT0+XCIsIHJlcy5kYXRhLmRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcGxhaW50ID0gcmVzLmRhdGEuZGF0YS5jb21wbGFpbnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5hdG1fZGV0YWlscyA9IHJlcy5kYXRhLmRhdGEuYXRtX2RldGFpbHM7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wbGFpbnRfZGV0YWlscyA9IHJlcy5kYXRhLmRhdGEuY29tcGxhaW50X2RldGFpbHM7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXN0b2RpYW5fZGV0YWlscyA9IHJlcy5kYXRhLmRhdGEuY3VzdG9kaWFuX2RldGFpbHM7XG4gICAgICAgICAgICAgICAgdGhpcy5zbHNfZGV0YWlscyA9IHJlcy5kYXRhLmRhdGEuc2xzX2RldGFpbHM7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFN0YXR1cyA9IHRoaXMuY29tcGxhaW50Lndvcmtfc3RhdHVzIHx8ICdQZW5kaW5nJztcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImF0bVwiLGF0bV9kZXRhaWxzKTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSxcbiAgICAgICAgZ2V0Q3VycmVudERhdGVUaW1lKCkge1xuICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgIGNvbnN0IHllYXIgPSBub3cuZ2V0RnVsbFllYXIoKTtcbiAgICAgIGNvbnN0IG1vbnRoID0gU3RyaW5nKG5vdy5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgXCIwXCIpOyAvLyBNb250aHMgYXJlIDAtaW5kZXhlZFxuICAgICAgY29uc3QgZGF5ID0gU3RyaW5nKG5vdy5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgICAgIGNvbnN0IGhvdXJzID0gU3RyaW5nKG5vdy5nZXRIb3VycygpKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gICAgICBjb25zdCBtaW51dGVzID0gU3RyaW5nKG5vdy5nZXRNaW51dGVzKCkpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgICAgIHJldHVybiBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1UJHtob3Vyc306JHttaW51dGVzfWA7XG4gICAgfSxcbiAgICAgICAgYWRkQ29tbWVudCgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm5ld0NvbW1lbnQudHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3TWVzc2FnZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiVXNlciBDb21tZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IHRoaXMubmV3Q29tbWVudCxcbiAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYmctZ3JhZGllbnQtc2Vjb25kYXJ5IHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKG5ld01lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV3Q29tbWVudCA9IFwiXCI7IC8vIENsZWFyIHRoZSBpbnB1dCBhZnRlciBhZGRpbmdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgaXNDb21tZW50RGlzYWJsZWQoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNha2tpXCIpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIj09PT09PT5cIix0aGlzLmNvbXBsYWludC53b3JrX3N0YXR1cyx0aGlzLmF1dGhVc2VyLmlkX2Ntc19wcml2aWxlZ2VzKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcGxhaW50Lndvcmtfc3RhdHVzID09PSAnQ29tcGxldGVkJyAmJiB0aGlzLmF1dGhVc2VyLmlkX2Ntc19wcml2aWxlZ2VzID09PSAzO1xuICAgICAgICB9LFxuICAgICAgICBzaG93TWFudWFsQ2xvc2UoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZFN0YXR1cyA9PT0gJ0NvbXBsZXRlZCc7XG4gICAgICAgIH0sXG4gICAgICAgIHNob3dMYWdSZWFzb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZFN0YXR1cyA9PT0gJ1Byb2Nlc3NpbmcnO1xuICAgICAgICB9LFxuICAgICAgICBzdWJtaXRDb21wbGFpbnRGb3JtKCkge1xuICAgICAgICAgICAgLy8gU3VibWl0IGZvcm0gbG9naWMgdXNpbmcgYGNvbW1lbnRgLCBgc2VsZWN0ZWRTdGF0dXNgLCBgbWFudWFsQ2xvc2VgLCBhbmQgYGxhZ1JlYXNvbmAgdmFsdWVzLlxuICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOlwidXBkYXRlXCIsXG4gICAgICAgICAgICAgICAgY29tbWVudDogdGhpcy5jb21tZW50LFxuICAgICAgICAgICAgICAgIHN0YXR1czogdGhpcy5zZWxlY3RlZFN0YXR1cyxcbiAgICAgICAgICAgICAgICBtYW51YWxfY2xvc2U6IHRoaXMubWFudWFsQ2xvc2UsXG4gICAgICAgICAgICAgICAgbGFnX3JlYXNvbjogdGhpcy5sYWdSZWFzb24sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gRXhhbXBsZSBQT1NUIHJlcXVlc3QgKHJlcGxhY2UgVVJMIGFzIG5lY2Vzc2FyeSlcbiAgICAgICAgICAgIHRoaXMuJGh0dHAucG9zdChgYXBpL2NvbXBsYWludC9jb21tZW50LyR7dGhpcy5jb21wbGFpbnQuaWR9YCwgZm9ybURhdGEpXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBoYW5kbGUgc3VjY2Vzc1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFJlc3VsdCgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaGFuZGxlIGVycm9yXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGZvcm1hdERhdGUoZGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUpLnRvTG9jYWxlU3RyaW5nKCdlbi1HQicsIHsgZGF5OiAnMi1kaWdpdCcsIG1vbnRoOiAnMi1kaWdpdCcsIHllYXI6ICdudW1lcmljJywgaG91cjogJzItZGlnaXQnLCBtaW51dGU6ICcyLWRpZ2l0JyB9KTtcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGJlZm9yZUNyZWF0ZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCIgdGhpcy4kcm91dGUucGFyYW1zLmlkO1wiLCB0aGlzLiRyb3V0ZS5wYXJhbXMuaWQpO1xuXG4gICAgICAgIGF4aW9zLmdldChcImFwaS9jb21wbGFpbnQvdmlldy9cIiArIHRoaXMuJHJvdXRlLnBhcmFtcy5pZClcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlcz09PT0+XCIsIHJlcy5kYXRhLmRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcGxhaW50ID0gcmVzLmRhdGEuZGF0YS5jb21wbGFpbnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5hdG1fZGV0YWlscyA9IHJlcy5kYXRhLmRhdGEuYXRtX2RldGFpbHM7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wbGFpbnRfZGV0YWlscyA9IHJlcy5kYXRhLmRhdGEuY29tcGxhaW50X2RldGFpbHM7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXN0b2RpYW5fZGV0YWlscyA9IHJlcy5kYXRhLmRhdGEuY3VzdG9kaWFuX2RldGFpbHM7XG4gICAgICAgICAgICAgICAgdGhpcy5zbHNfZGV0YWlscyA9IHJlcy5kYXRhLmRhdGEuc2xzX2RldGFpbHM7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFN0YXR1cyA9IHRoaXMuY29tcGxhaW50Lndvcmtfc3RhdHVzIHx8ICdQZW5kaW5nJztcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImF0bVwiLGF0bV9kZXRhaWxzKTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICB9LFxuXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgLy8gSW5pdGlhbCBBUEkgY2FsbCB3aGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZFxuICAgICAgICBjb25zb2xlLmxvZyhcIm1vdW50ZWRcIik7XG4gICAgICAgIHRoaXMuYXV0aFVzZXI9bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhdXRoXCIpO1xuICAgICAgICBpZiAodGhpcy5hdXRoVXNlcikge1xuICAgICAgICAgICAgdGhpcy5hdXRoVXNlciA9IEpTT04ucGFyc2UodGhpcy5hdXRoVXNlcik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcy5sb2FkVGlja2V0cygpO1xuICAgIH0sXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4vKiBDdXN0b20gU3R5bGVzIGlmIG5lY2Vzc2FyeSAqL1xuLm1lc3NhZ2UtbGlzdCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAgIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5jYXJkIHtcbiAgICBib3JkZXI6IG5vbmU7XG59XG4uY2hhdC1ib3gge1xuICBtYXgtaGVpZ2h0OiA2MDBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmNoYXQtbWVzc2FnZXMge1xuICBoZWlnaHQ6IDQwMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4ubWVzc2FnZSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5hZG1pbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG59XG5cbi5lbmdpbmVlci1tZXNzYWdlIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjMDA3YmZmO1xufVxuXG4udXNlci1tZXNzYWdlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAjZmM4ODVlIDAlLCAjZmY2YzllIDEwMCUpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDogMyU7XG59XG4udXNlci1tZXNzYWdlOmJlZm9yZXtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNmYzg4NWUgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDEwcHg7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTAwJTtcbiAgICB0b3A6IDE1cHg7XG4gICAgYm9yZGVyLXdpZHRoOiA5cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMXB4O1xufVxuXG5cbi5jYWxsY2VudGVyLW1lc3NhZ2Uge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAjMWY4YTgxIDAlLCAjM2VkZWQxIDEwMCUpO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB3aWR0aDogOTclO1xuICAgIG1hcmdpbi1yaWdodDogMyU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uY2FsbGNlbnRlci1tZXNzYWdlOmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiAxMHB4O1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzM2Y2NjMDtcbiAgICBsZWZ0OiAxMDAlO1xuICAgIHRvcDogNDFweDtcbiAgICBtYXJnaW4tbGVmdDogLTFweDtcbn1cbi5jaGF0aGVhZGluZyB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jaGF0LWJvZHkge1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4uY2FyZC1mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuPC9zdHlsZT5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4vKiBDdXN0b20gU3R5bGVzIGlmIG5lY2Vzc2FyeSAqL1xcbi5tZXNzYWdlLWxpc3RbZGF0YS12LTY3Y2U1OTdlXSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxufVxcbi5jYXJkW2RhdGEtdi02N2NlNTk3ZV0ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcbi5jaGF0LWJveFtkYXRhLXYtNjdjZTU5N2VdIHtcXG4gIG1heC1oZWlnaHQ6IDYwMHB4O1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuLmNoYXQtbWVzc2FnZXNbZGF0YS12LTY3Y2U1OTdlXSB7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuLm1lc3NhZ2VbZGF0YS12LTY3Y2U1OTdlXSB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi5hZG1pbltkYXRhLXYtNjdjZTU5N2VdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxufVxcbi5lbmdpbmVlci1tZXNzYWdlW2RhdGEtdi02N2NlNTk3ZV0ge1xcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjMDA3YmZmO1xcbn1cXG4udXNlci1tZXNzYWdlW2RhdGEtdi02N2NlNTk3ZV0ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgI2ZjODg1ZSAwJSwgI2ZmNmM5ZSAxMDAlKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW4tbGVmdDogMyU7XFxufVxcbi51c2VyLW1lc3NhZ2VbZGF0YS12LTY3Y2U1OTdlXTpiZWZvcmV7XFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgI2ZjODg1ZSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiAxMHB4O1xcbiAgICBjb250ZW50OiBcXFwiIFxcXCI7XFxuICAgIGhlaWdodDogMDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDEwMCU7XFxuICAgIHRvcDogMTVweDtcXG4gICAgYm9yZGVyLXdpZHRoOiA5cHg7XFxuICAgIG1hcmdpbi1yaWdodDogLTFweDtcXG59XFxuLmNhbGxjZW50ZXItbWVzc2FnZVtkYXRhLXYtNjdjZTU5N2VdIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAjMWY4YTgxIDAlLCAjM2VkZWQxIDEwMCUpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgd2lkdGg6IDk3JTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzJTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uY2FsbGNlbnRlci1tZXNzYWdlW2RhdGEtdi02N2NlNTk3ZV06YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiAxMHB4O1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICMzNmNjYzA7XFxuICAgIGxlZnQ6IDEwMCU7XFxuICAgIHRvcDogNDFweDtcXG4gICAgbWFyZ2luLWxlZnQ6IC0xcHg7XFxufVxcbi5jaGF0aGVhZGluZ1tkYXRhLXYtNjdjZTU5N2VdIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uY2hhdC1ib2R5W2RhdGEtdi02N2NlNTk3ZV0ge1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuLmNhcmQtZm9vdGVyW2RhdGEtdi02N2NlNTk3ZV0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvc3VuaXRhYmFnL0Rlc2t0b3AvcGhwL2F0bV9vbGQvYXRtL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0NvbXBsYWludERldGFpbC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlWQSxnQ0FBQTtBQUNBO0lBQ0EsdUJBQUE7SUFDQSx1QkFBQTtJQUNBLGNBQUE7Q0FDQTtBQUVBO0lBQ0EsYUFBQTtDQUNBO0FBQ0E7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0NBQ0E7QUFFQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtDQUNBO0FBRUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtDQUNBO0FBRUE7RUFDQSwwQkFBQTtDQUNBO0FBRUE7RUFDQSwrQkFBQTtDQUNBO0FBRUE7SUFDQSxtQkFBQTtJQUNBLG1FQUFBO0lBQ0EsYUFBQTtJQUNBLGdCQUFBO0NBQ0E7QUFDQTtJQUNBLDBEQUFBO0lBQ0Esb0JBQUE7SUFDQSxtQkFBQTtJQUNBLGFBQUE7SUFDQSxVQUFBO0lBQ0EscUJBQUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtDQUNBO0FBR0E7SUFDQSxtQkFBQTtJQUNBLG9FQUFBO0lBQ0EsY0FBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLFdBQUE7SUFDQSxpQkFBQTtJQUNBLHNCQUFBO0NBQ0E7QUFFQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtJQUNBLG9CQUFBO0lBQ0EsbUJBQUE7SUFDQSwwREFBQTtJQUNBLFdBQUE7SUFDQSxVQUFBO0lBQ0Esa0JBQUE7Q0FDQTtBQUNBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0NBQ0E7QUFFQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtDQUNBO0FBRUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiQ29tcGxhaW50RGV0YWlsLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciBtdC01XFxcIj5cXG5cXG4gICAgICAgIDwhLS0gVG9wIEluZm9ybWF0aW9uIERlc2lnbiAtLT5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvdyBtYi00IHAtMyBib3JkZXIgYmctbGlnaHQgcm91bmRlZFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTRcXFwiPlxcbiAgICAgICAgICAgICAgICA8cD48c3Ryb25nPkFUTSA6PC9zdHJvbmc+PC9wPlxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPkNvZGUgLSB7eyBjb21wbGFpbnQgJiYgY29tcGxhaW50LmF0bSA/IGNvbXBsYWludC5hdG0uYXRtX2lkIDpcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJcXFwifX08L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPHA+XFxuICAgICAgICAgICAgICAgICAgQWRkcmVzcyAtIHt7IGF0bV9kZXRhaWxzLmNpdHlfbmFtZSArICcsICcgKyBhdG1fZGV0YWlscy5kaXN0cmljdF9uYW1lICsgJywgJyArIGF0bV9kZXRhaWxzLnN0YXRlX25hbWUgfX1cXG4gICAgICAgICAgICAgICAgICA8YnI+QXJlYSBDb2RlIC17eyBhdG1fZGV0YWlscy5hcmVhX2NvZGUgfX1cXG4gICAgICAgICAgICAgICAgICA8YnI+UG9zdGNvZGUgLSB7eyBhdG1fZGV0YWlscy5wb3N0Y29kZSB9fVxcbiAgICAgICAgICAgICAgICA8L3A+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4taW5mb1xcXCI+e3sgYXRtX2RldGFpbHMuYmFua19uYW1lIH19PC9idXR0b24+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTRcXFwiPlxcbiAgICAgICAgICAgICAgICA8cCB2LWlmPVxcXCJzbHNfZGV0YWlsc1xcXCI+PHN0cm9uZz5TTE0gRG9ja2V0IE5vIDo8L3N0cm9uZz48L3A+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4taW5mb1xcXCIgdi1pZj1cXFwic2xzX2RldGFpbHNcXFwiPnt7IHNsc19kZXRhaWxzID8gc2xzX2RldGFpbHMuc2xzX2RvY2tldF9ubyA6IFxcXCJcXFwiIH19PC9idXR0b24+XFxuICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+RG9ja2V0IE5vIDo8L3N0cm9uZz48L3A+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4taW5mb1xcXCI+e3sgY29tcGxhaW50LmRvY2tldF9ubyB9fTwvYnV0dG9uPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC00XFxcIj5cXG4gICAgICAgICAgICAgICAgPHA+PHN0cm9uZz5TdGF0dXMgOjwvc3Ryb25nPjwvcD5cXG4gICAgICAgICAgICAgICAgPCEtLSA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiPkNvbXBsZXRlZDwvYnV0dG9uPiAtLT5cXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB2LWlmPVxcXCJjb21wbGFpbnQud29ya19zdGF0dXMgPT09ICdQZW5kaW5nJ1xcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIj5QZW5kaW5nPC9idXR0b24+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gdi1lbHNlLWlmPVxcXCJjb21wbGFpbnQud29ya19zdGF0dXMgPT09ICdQcm9jZXNzaW5nJ1xcXCIgY2xhc3M9XFxcImJ0biBidG4td2FybmluZ1xcXCI+UHJvY2Vzc2luZzwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHYtZWxzZS1pZj1cXFwiY29tcGxhaW50Lndvcmtfc3RhdHVzID09PSAnQ29tcGxldGVkJ1xcXCIgY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCI+Q29tcGxldGVkPC9idXR0b24+XFxuXFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTRcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XFxcImNvbXBsYWludC5pc19zbG0gPT09IDEgJiYgY3VzdG9kaWFuX2RldGFpbHNcXFwiIGNsYXNzPVxcXCJ2aWV3dGFiIHZpZXd0YWJiZXIgYWN0aW9uLXRoXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cXFwiYXV0aFVzZXIuaWRfY21zX3ByaXZpbGVnZXMgPT09IDRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCI+QXNzaWduZWQgQ3VzdG9kaWFuIDo8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gWW91IGNhbiBlbmFibGUgdGhlIGJ1dHRvbiBiZWxvdyBpZiBuZWVkZWQgZm9yIGFzc2lnbm1lbnQgZnVuY3Rpb25hbGl0eSAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxhIGNsYXNzPVxcXCJhY3Rpb24tYnRuXFxcIiBzdHlsZT1cXFwicGFkZGluZzogMnB4IDZweDsgYm9yZGVyOiAxcHggc29saWQgI2Q5ZDlkOTsgY29sb3I6ICMxOTE5MTk7IGZvbnQtc2l6ZTogMS4wZW07IHRleHQtYWxpZ246IGNlbnRlcjsgZGlzcGxheTogaW5saW5lLWJsb2NrOyBib3JkZXItcmFkaXVzOiAzcHg7IG1hcmdpbjogMXB4O1xcXCJcXG4gICAgICAgICAgICA6aHJlZj1cXFwiJy9kYXNoYm9hcmQvYXNzaWduVGlja2V0LycgKyBjb21wbGFpbnQuZG9ja2V0X25vXFxcIlxcbiAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVxcXCJ0b29sdGlwXFxcIlxcbiAgICAgICAgICAgIGRhdGEtcGxhY2VtZW50PVxcXCJ0b3BcXFwiXFxuICAgICAgICAgICAgdGl0bGU9XFxcIkFzc2lnbiBDdXN0b2RpYW5cXFwiPlxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS11c2VyLXBsdXNcXFwiPjwvaT5cXG4gICAgICAgIDwvYT4gLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcInZpZXdhZGRyZXNzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3VzdG9kaWFuIE5hbWU6IHt7IGN1c3RvZGlhbl9kZXRhaWxzLm5hbWUgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+KHt7IGN1c3RvZGlhbl9kZXRhaWxzLnBob25lIH19KTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG5cXG5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLThcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQgY2hhdC1ib3hcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1oZWFkZXIgYmctcHJpbWFyeSB0ZXh0LXdoaXRlXFxcIj5cXG4gICAgICAgICAgPGgzIGNsYXNzPVxcXCJ0YWJsZWhlYWRpbmcgbWItMFxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWNvbW1lbnRzXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPiBEZXRhaWxzPC9oMz5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5IGNoYXQtYm9keVxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNoYXQtbWVzc2FnZXNcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgdi1mb3I9XFxcIihyb3csIGluZGV4KSBpbiBjb21wbGFpbnRfZGV0YWlsc1xcXCIgOmtleT1cXFwiaW5kZXhcXFwiPlxcbiAgICAgICAgICAgICAgPGRpdiB2LWlmPVxcXCJhdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcyA9PSAzXFxcIiBjbGFzcz1cXFwibWItM1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cXFwicm93LmlzX2FkbWluXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XFxcInJvdy5wb3N0X2Zvcl9lbmdpbmVlclxcXCIgY2xhc3M9XFxcIm1lc3NhZ2UgYWRtaW4gZW5naW5lZXItbWVzc2FnZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XFxcImNoYXRoZWFkaW5nIHRleHQtaW5mb1xcXCI+Q2FsbCBDZW50ZXI8L2g1PlxcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZGF0ZSB0ZXh0LW11dGVkIHNtYWxsXFxcIj57eyBmb3JtYXREYXRlKHJvdy5wb3N0ZWRfYXQpIH19PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8cD57eyByb3cuY29tbWVudCB9fTwvcD5cXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IHYtZWxzZSBjbGFzcz1cXFwibWVzc2FnZSBhZG1pbiBjYWxsY2VudGVyLW1lc3NhZ2VcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVxcXCJjaGF0aGVhZGluZyB0ZXh0LWluZm9cXFwiPkNhbGwgQ2VudGVyPC9oNT5cXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImRhdGUgdGV4dC1tdXRlZCBzbWFsbFxcXCI+e3sgZm9ybWF0RGF0ZShyb3cucG9zdGVkX2F0KSB9fTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPHA+e3sgcm93LmNvbW1lbnQgfX08L3A+XFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IHYtZWxzZSBjbGFzcz1cXFwibWVzc2FnZSB1c2VyLW1lc3NhZ2VcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XFxcImNoYXRoZWFkaW5nXFxcIj57eyByb3cuY2xpZW50X25hbWUgfX08L2g1PlxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImRhdGUgdGV4dC1tdXRlZCBzbWFsbFxcXCI+e3sgZm9ybWF0RGF0ZShyb3cucG9zdGVkX2F0KSB9fTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8cD57eyByb3cuY29tbWVudCB9fTwvcD5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDxkaXYgdi1lbHNlLWlmPVxcXCJhdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcyA9PSA0XFxcIiBjbGFzcz1cXFwibWItM1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cXFwicm93LmlzX2FkbWluXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XFxcInJvdy5wb3N0X2Zvcl9lbmdpbmVlclxcXCIgY2xhc3M9XFxcIm1lc3NhZ2UgYWRtaW4gZW5naW5lZXItbWVzc2FnZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XFxcImNoYXRoZWFkaW5nIHRleHQtaW5mb1xcXCI+Q2FsbCBDZW50ZXIgKHt7IHJvdy5uYW1lIH19KTwvaDU+XFxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkYXRlIHRleHQtbXV0ZWQgc21hbGxcXFwiPnt7IGZvcm1hdERhdGUocm93LnBvc3RlZF9hdCkgfX08L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxwPnt7IHJvdy5jb21tZW50IH19PC9wPlxcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgdi1lbHNlIGNsYXNzPVxcXCJtZXNzYWdlIGFkbWluIGNhbGxjZW50ZXItbWVzc2FnZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8IS0tIDxkaXYgdi1lbHNlIGNsYXNzPVxcXCJtZXNzYWdlIHVzZXItbWVzc2FnZVxcXCI+IC0tPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVxcXCJjaGF0aGVhZGluZ1xcXCI+Q2FsbCBDZW50ZXIgKHt7IHJvdy5uYW1lIH19KTwvaDU+XFxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkYXRlIHRleHQtbXV0ZWQgc21hbGxcXFwiPnt7IGZvcm1hdERhdGUocm93LnBvc3RlZF9hdCkgfX08L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxwPnt7IHJvdy5jb21tZW50IH19PC9wPlxcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiB2LWVsc2UgY2xhc3M9XFxcIm1lc3NhZ2UgdXNlci1tZXNzYWdlXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVxcXCJjaGF0aGVhZGluZ1xcXCI+e3sgcm93LmNsaWVudF9uYW1lIH19PC9oNT5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkYXRlIHRleHQtbXV0ZWQgc21hbGxcXFwiPnt7IGZvcm1hdERhdGUocm93LnBvc3RlZF9hdCkgfX08L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPHA+e3sgcm93LmNvbW1lbnQgfX08L3A+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWZvb3RlclxcXCI+XFxuICAgICAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cXFwic3VibWl0Q29tcGxhaW50Rm9ybVxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICA8dGV4dGFyZWEgdi1tb2RlbD1cXFwiY29tbWVudFxcXCIgOmRpc2FibGVkPVxcXCJjb21wbGFpbnQud29ya19zdGF0dXMgPT09ICdDb21wbGV0ZWQnICYmIGF1dGhVc2VyLmlkX2Ntc19wcml2aWxlZ2VzID09PSAzXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiQWRkIENvbW1lbnRcXFwiIHJvd3M9XFxcIjNcXFwiIHJlcXVpcmVkPjwvdGV4dGFyZWE+XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgPGRpdiB2LWlmPVxcXCJhdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcyA9PSA0XFxcIj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICA8c2VsZWN0IHYtbW9kZWw9XFxcInNlbGVjdGVkU3RhdHVzXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJQZW5kaW5nXFxcIj5QZW5kaW5nPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiUHJvY2Vzc2luZ1xcXCI+UHJvY2Vzc2luZzwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIkNvbXBsZXRlZFxcXCI+Q29tcGxldGVkPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiB2LXNob3c9XFxcInNlbGVjdGVkU3RhdHVzPT0nQ29tcGxldGVkJ1xcXCI+XFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJkYXRldGltZS1sb2NhbFxcXCIgdi1tb2RlbD1cXFwibWFudWFsQ2xvc2VcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgbWFudWFsLWNsb3NlXFxcIiBwbGFjZWhvbGRlcj1cXFwiQ29tcGxldGUgRGF0ZSBUaW1lXFxcIiAvPlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIHYtc2hvdz1cXFwic2hvd01hbnVhbENsb3NlXFxcIj5cXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIHYtbW9kZWw9XFxcIm1hbnVhbENsb3NlXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sIG1hbnVhbC1jbG9zZVxcXCIgcGxhY2Vob2xkZXI9XFxcIk1hbnVhbCBDbG9zZVxcXCIgLz5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgdi1zaG93PVxcXCJzaG93TGFnUmVhc29uXFxcIj5cXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIHYtbW9kZWw9XFxcImxhZ1JlYXNvblxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkFkZCBsYWcgcmVhc29uXFxcIj48L3RleHRhcmVhPlxcbiAgICAgICAgICAgICAgPC9kaXY+IC0tPlxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgPGJ1dHRvbiA6ZGlzYWJsZWQ9XFxcImNvbXBsYWludC53b3JrX3N0YXR1cyA9PT0gJ0NvbXBsZXRlZCcgJiYgYXV0aFVzZXIuaWRfY21zX3ByaXZpbGVnZXMgPT09IDNcXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2tcXFwiPlNlbmQ8L2J1dHRvbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC9mb3JtPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuXFxuXFxuXFxuXFxuXFxuICAgICAgICA8IS0tIENoYXQgQm94IERlc2lnbiAtLT5cXG4gICAgICAgIDwhLS0gPGgyIGNsYXNzPVxcXCJ0ZXh0LXdoaXRlIGJnLWluZm8gcC0yIHJvdW5kZWRcXFwiPkRldGFpbHM8L2gyPlxcblxcblxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIm1lc3NhZ2UtbGlzdCBvdmVyZmxvdy1hdXRvXFxcIiBzdHlsZT1cXFwibWF4LWhlaWdodDogMzAwcHg7XFxcIj5cXG4gICAgICAgIDxkaXZcXG4gICAgICAgICAgdi1mb3I9XFxcIihtZXNzYWdlLCBpbmRleCkgaW4gbWVzc2FnZXNcXFwiXFxuICAgICAgICAgIDprZXk9XFxcImluZGV4XFxcIlxcbiAgICAgICAgICA6Y2xhc3M9XFxcIlsnY2FyZCBtYi0zJywgbWVzc2FnZS50eXBlXVxcXCJcXG4gICAgICAgID5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5XFxcIj5cXG4gICAgICAgICAgICA8aDUgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPnt7IG1lc3NhZ2UudGl0bGUgfX08L2g1PlxcbiAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJjYXJkLXRleHRcXFwiPnt7IG1lc3NhZ2UuYm9keSB9fTwvcD5cXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwiY2FyZC10ZXh0XFxcIj5cXG4gICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwidGV4dC1tdXRlZFxcXCI+e3sgbWVzc2FnZS50aW1lc3RhbXAgfX08L3NtYWxsPlxcbiAgICAgICAgICAgIDwvcD5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj4gLS0+XFxuXFxuICAgICAgICA8IS0tIEFkZCBDb21tZW50IEZvcm0gLS0+XFxuICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XFxcIm10LTNcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgIDx0ZXh0YXJlYVxcbiAgICAgICAgICAgIHYtbW9kZWw9XFxcIm5ld0NvbW1lbnRcXFwiXFxuICAgICAgICAgICAgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXG4gICAgICAgICAgICByb3dzPVxcXCIzXFxcIlxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJBZGQgQ29tbWVudFxcXCJcXG4gICAgICAgICAgPjwvdGV4dGFyZWE+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxidXR0b24gQGNsaWNrPVxcXCJhZGRDb21tZW50XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IG10LTJcXFwiPlNlbmQ8L2J1dHRvbj5cXG4gICAgICA8L2Rpdj4gLS0+XFxuICAgIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5leHBvcnQgZGVmYXVsdCB7XFxuICAgIGRhdGEoKSB7XFxuICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgIC8vIFNhbXBsZSBtZXNzYWdlc1xcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBbXFxuICAgICAgICAgICAgICAgIHtcXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcXFwiSElUQUNISVxcXCIsXFxuICAgICAgICAgICAgICAgICAgICBib2R5OiBcXFwiY2RmXFxcIixcXG4gICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogXFxcIjEwLTA5LTIwMjQgMDY6MzAgUE1cXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXFxcImJnLWdyYWRpZW50LXByaW1hcnkgdGV4dC13aGl0ZVxcXCJcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFxcXCJDYWxsIENlbnRlclxcXCIsXFxuICAgICAgICAgICAgICAgICAgICBib2R5OiBcXFwiTmFtZTogVml2ZWthbmFuZGEgU2hhcm1hIEVtYWlsOiBOQSBQaG9uZSBOby46IDc5MDgwNzkxMDMgQ29tbWVudDogQ2FzaCBEaXNwZW5zZXIgRmF0YWxcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wOiBcXFwiMTAtMDktMjAyNCAwNjozNSBQTVxcXCIsXFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcXFwiYmctZ3JhZGllbnQtaW5mbyB0ZXh0LXdoaXRlXFxcIlxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB7XFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXFxcIkNhbGwgQ2VudGVyXFxcIixcXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IFxcXCJEZWFyIFRlYW0sIFBsZWFzZSBjYWxsIGxvZyBmb3IgRGlzcGVuc2VyIGlzc3VlLCBDdXN0b2RpYW46IFZpdmVrYW5hbmRhIFNoYXJtYSAoNzkwODA3OTEwMykgJiBFbmc6IENoYWl0YWsgKDgwMTczMjE2MDIpLCBLaW5kbHkgcHJvdmlkZSB0aGUgZG9ja2V0IG51bWJlci4uLlxcXCIsXFxuICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IFxcXCIxMC0wOS0yMDI0IDA2OjQxIFBNXFxcIixcXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFxcXCJiZy1ncmFkaWVudC13YXJuaW5nIHRleHQtd2hpdGVcXFwiXFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBdLFxcbiAgICAgICAgICAgIGNvbXBsYWludDoge30sXFxuICAgICAgICAgICAgYXRtX2RldGFpbHM6IHt9LFxcbiAgICAgICAgICAgIGNvbXBsYWludF9kZXRhaWxzOiBbXSxcXG4gICAgICAgICAgICBjdXN0b2RpYW5fZGV0YWlsczogbnVsbCxcXG4gICAgICAgICAgICBzbHNfZGV0YWlsczogbnVsbCxcXG4gICAgICAgICAgICAvLyBOZXcgY29tbWVudCBpbnB1dFxcbiAgICAgICAgICAgIG5ld0NvbW1lbnQ6IFxcXCJcXFwiLFxcbiAgICAgICAgICAgIHNlbGVjdGVkU3RhdHVzOiBudWxsLFxcbiAgICAgICAgICAgIGNvbXBsZXRlX2RhdGVfdGltZTpudWxsLFxcbiAgICAgICAgICAgIG15UHJpdmlsZWdlSWQ6MyxcXG4gICAgICAgICAgICBhdXRoVXNlcjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXFxcImF1dGhcXFwiKSA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXFxcImF1dGhcXFwiKSkgOiBudWxsLFxcbiAgICAgICAgICAgIGNvbW1lbnQ6ICcnLFxcbiAgICAgIHNlbGVjdGVkU3RhdHVzOiAgdGhpcy5jb21wbGFpbnQgPyB0aGlzLmNvbXBsYWludC53b3JrX3N0YXR1cyA6ICdQZW5kaW5nJyxcXG4gICAgICBtYW51YWxDbG9zZTogdGhpcy5nZXRDdXJyZW50RGF0ZVRpbWUoKSxcXG4gICAgICBsYWdSZWFzb246ICcnLFxcbiAgICAgICAgfTtcXG4gICAgfSxcXG4gICAgbWV0aG9kczoge1xcbiAgICAgICAgLy8gRnVuY3Rpb24gdG8gYWRkIGEgbmV3IGNvbW1lbnRcXG4gICAgICAgIGdldFJlc3VsdCgpe1xcbiAgICAgICAgICAgIGF4aW9zLmdldChcXFwiYXBpL2NvbXBsYWludC92aWV3L1xcXCIgKyB0aGlzLiRyb3V0ZS5wYXJhbXMuaWQpXFxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcXFwicmVzPT09PT5cXFwiLCByZXMuZGF0YS5kYXRhKTtcXG4gICAgICAgICAgICAgICAgdGhpcy5jb21wbGFpbnQgPSByZXMuZGF0YS5kYXRhLmNvbXBsYWludDtcXG4gICAgICAgICAgICAgICAgdGhpcy5hdG1fZGV0YWlscyA9IHJlcy5kYXRhLmRhdGEuYXRtX2RldGFpbHM7XFxuICAgICAgICAgICAgICAgIHRoaXMuY29tcGxhaW50X2RldGFpbHMgPSByZXMuZGF0YS5kYXRhLmNvbXBsYWludF9kZXRhaWxzO1xcbiAgICAgICAgICAgICAgICB0aGlzLmN1c3RvZGlhbl9kZXRhaWxzID0gcmVzLmRhdGEuZGF0YS5jdXN0b2RpYW5fZGV0YWlscztcXG4gICAgICAgICAgICAgICAgdGhpcy5zbHNfZGV0YWlscyA9IHJlcy5kYXRhLmRhdGEuc2xzX2RldGFpbHM7XFxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTdGF0dXMgPSB0aGlzLmNvbXBsYWludC53b3JrX3N0YXR1cyB8fCAnUGVuZGluZyc7XFxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFxcXCJhdG1cXFwiLGF0bV9kZXRhaWxzKTtcXG5cXG4gICAgICAgICAgICB9KTtcXG5cXG4gICAgICAgIH0sXFxuICAgICAgICBnZXRDdXJyZW50RGF0ZVRpbWUoKSB7XFxuICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcXG4gICAgICBjb25zdCB5ZWFyID0gbm93LmdldEZ1bGxZZWFyKCk7XFxuICAgICAgY29uc3QgbW9udGggPSBTdHJpbmcobm93LmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCBcXFwiMFxcXCIpOyAvLyBNb250aHMgYXJlIDAtaW5kZXhlZFxcbiAgICAgIGNvbnN0IGRheSA9IFN0cmluZyhub3cuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCBcXFwiMFxcXCIpO1xcbiAgICAgIGNvbnN0IGhvdXJzID0gU3RyaW5nKG5vdy5nZXRIb3VycygpKS5wYWRTdGFydCgyLCBcXFwiMFxcXCIpO1xcbiAgICAgIGNvbnN0IG1pbnV0ZXMgPSBTdHJpbmcobm93LmdldE1pbnV0ZXMoKSkucGFkU3RhcnQoMiwgXFxcIjBcXFwiKTtcXG4gICAgICByZXR1cm4gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9VCR7aG91cnN9OiR7bWludXRlc31gO1xcbiAgICB9LFxcbiAgICAgICAgYWRkQ29tbWVudCgpIHtcXG4gICAgICAgICAgICBpZiAodGhpcy5uZXdDb21tZW50LnRyaW0oKSkge1xcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdNZXNzYWdlID0ge1xcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFxcXCJVc2VyIENvbW1lbnRcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogdGhpcy5uZXdDb21tZW50LFxcbiAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCksXFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcXFwiYmctZ3JhZGllbnQtc2Vjb25kYXJ5IHRleHQtd2hpdGVcXFwiXFxuICAgICAgICAgICAgICAgIH07XFxuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZXMucHVzaChuZXdNZXNzYWdlKTtcXG4gICAgICAgICAgICAgICAgdGhpcy5uZXdDb21tZW50ID0gXFxcIlxcXCI7IC8vIENsZWFyIHRoZSBpbnB1dCBhZnRlciBhZGRpbmdcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgaXNDb21tZW50RGlzYWJsZWQoKSB7XFxuICAgICAgICAgICAgY29uc29sZS5sb2coXFxcImNha2tpXFxcIik7XFxuXFxuICAgICAgICAgICAgY29uc29sZS5sb2coXFxcIj09PT09PT5cXFwiLHRoaXMuY29tcGxhaW50Lndvcmtfc3RhdHVzLHRoaXMuYXV0aFVzZXIuaWRfY21zX3ByaXZpbGVnZXMpO1xcblxcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBsYWludC53b3JrX3N0YXR1cyA9PT0gJ0NvbXBsZXRlZCcgJiYgdGhpcy5hdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcyA9PT0gMztcXG4gICAgICAgIH0sXFxuICAgICAgICBzaG93TWFudWFsQ2xvc2UoKSB7XFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRTdGF0dXMgPT09ICdDb21wbGV0ZWQnO1xcbiAgICAgICAgfSxcXG4gICAgICAgIHNob3dMYWdSZWFzb24oKSB7XFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRTdGF0dXMgPT09ICdQcm9jZXNzaW5nJztcXG4gICAgICAgIH0sXFxuICAgICAgICBzdWJtaXRDb21wbGFpbnRGb3JtKCkge1xcbiAgICAgICAgICAgIC8vIFN1Ym1pdCBmb3JtIGxvZ2ljIHVzaW5nIGBjb21tZW50YCwgYHNlbGVjdGVkU3RhdHVzYCwgYG1hbnVhbENsb3NlYCwgYW5kIGBsYWdSZWFzb25gIHZhbHVlcy5cXG4gICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IHtcXG4gICAgICAgICAgICAgICAgYWN0aW9uOlxcXCJ1cGRhdGVcXFwiLFxcbiAgICAgICAgICAgICAgICBjb21tZW50OiB0aGlzLmNvbW1lbnQsXFxuICAgICAgICAgICAgICAgIHN0YXR1czogdGhpcy5zZWxlY3RlZFN0YXR1cyxcXG4gICAgICAgICAgICAgICAgbWFudWFsX2Nsb3NlOiB0aGlzLm1hbnVhbENsb3NlLFxcbiAgICAgICAgICAgICAgICBsYWdfcmVhc29uOiB0aGlzLmxhZ1JlYXNvbixcXG4gICAgICAgICAgICB9O1xcbiAgICAgICAgICAgIC8vIEV4YW1wbGUgUE9TVCByZXF1ZXN0IChyZXBsYWNlIFVSTCBhcyBuZWNlc3NhcnkpXFxuICAgICAgICAgICAgdGhpcy4kaHR0cC5wb3N0KGBhcGkvY29tcGxhaW50L2NvbW1lbnQvJHt0aGlzLmNvbXBsYWludC5pZH1gLCBmb3JtRGF0YSlcXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgLy8gaGFuZGxlIHN1Y2Nlc3NcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UmVzdWx0KCk7XFxuICAgICAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAvLyBoYW5kbGUgZXJyb3JcXG4gICAgICAgICAgICAgICAgfSk7XFxuICAgICAgICB9LFxcbiAgICAgICAgZm9ybWF0RGF0ZShkYXRlKSB7XFxuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUpLnRvTG9jYWxlU3RyaW5nKCdlbi1HQicsIHsgZGF5OiAnMi1kaWdpdCcsIG1vbnRoOiAnMi1kaWdpdCcsIHllYXI6ICdudW1lcmljJywgaG91cjogJzItZGlnaXQnLCBtaW51dGU6ICcyLWRpZ2l0JyB9KTtcXG4gICAgICAgIH0sXFxuICAgIH0sXFxuICAgIGJlZm9yZUNyZWF0ZSgpIHtcXG4gICAgICAgIGNvbnNvbGUubG9nKFxcXCIgdGhpcy4kcm91dGUucGFyYW1zLmlkO1xcXCIsIHRoaXMuJHJvdXRlLnBhcmFtcy5pZCk7XFxuXFxuICAgICAgICBheGlvcy5nZXQoXFxcImFwaS9jb21wbGFpbnQvdmlldy9cXFwiICsgdGhpcy4kcm91dGUucGFyYW1zLmlkKVxcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXFxcInJlcz09PT0+XFxcIiwgcmVzLmRhdGEuZGF0YSk7XFxuICAgICAgICAgICAgICAgIHRoaXMuY29tcGxhaW50ID0gcmVzLmRhdGEuZGF0YS5jb21wbGFpbnQ7XFxuICAgICAgICAgICAgICAgIHRoaXMuYXRtX2RldGFpbHMgPSByZXMuZGF0YS5kYXRhLmF0bV9kZXRhaWxzO1xcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBsYWludF9kZXRhaWxzID0gcmVzLmRhdGEuZGF0YS5jb21wbGFpbnRfZGV0YWlscztcXG4gICAgICAgICAgICAgICAgdGhpcy5jdXN0b2RpYW5fZGV0YWlscyA9IHJlcy5kYXRhLmRhdGEuY3VzdG9kaWFuX2RldGFpbHM7XFxuICAgICAgICAgICAgICAgIHRoaXMuc2xzX2RldGFpbHMgPSByZXMuZGF0YS5kYXRhLnNsc19kZXRhaWxzO1xcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkU3RhdHVzID0gdGhpcy5jb21wbGFpbnQud29ya19zdGF0dXMgfHwgJ1BlbmRpbmcnO1xcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcXFwiYXRtXFxcIixhdG1fZGV0YWlscyk7XFxuXFxuICAgICAgICAgICAgfSk7XFxuXFxuICAgIH0sXFxuXFxuICAgIG1vdW50ZWQoKSB7XFxuICAgICAgICAvLyBJbml0aWFsIEFQSSBjYWxsIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkXFxuICAgICAgICBjb25zb2xlLmxvZyhcXFwibW91bnRlZFxcXCIpO1xcbiAgICAgICAgdGhpcy5hdXRoVXNlcj1sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcXFwiYXV0aFxcXCIpO1xcbiAgICAgICAgaWYgKHRoaXMuYXV0aFVzZXIpIHtcXG4gICAgICAgICAgICB0aGlzLmF1dGhVc2VyID0gSlNPTi5wYXJzZSh0aGlzLmF1dGhVc2VyKTtcXG4gICAgICAgIH1cXG4gICAgICAgIC8vIHRoaXMubG9hZFRpY2tldHMoKTtcXG4gICAgfSxcXG59O1xcbjwvc2NyaXB0PlxcblxcbjxzdHlsZSBzY29wZWQ+XFxuLyogQ3VzdG9tIFN0eWxlcyBpZiBuZWNlc3NhcnkgKi9cXG4ubWVzc2FnZS1saXN0IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gICAgcGFkZGluZzogMTVweDtcXG59XFxuXFxuLmNhcmQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcbi5jaGF0LWJveCB7XFxuICBtYXgtaGVpZ2h0OiA2MDBweDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5jaGF0LW1lc3NhZ2VzIHtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4ubWVzc2FnZSB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5hZG1pbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcbn1cXG5cXG4uZW5naW5lZXItbWVzc2FnZSB7XFxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICMwMDdiZmY7XFxufVxcblxcbi51c2VyLW1lc3NhZ2Uge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgI2ZjODg1ZSAwJSwgI2ZmNmM5ZSAxMDAlKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW4tbGVmdDogMyU7XFxufVxcbi51c2VyLW1lc3NhZ2U6YmVmb3Jle1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNmYzg4NWUgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci13aWR0aDogMTBweDtcXG4gICAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAxMDAlO1xcbiAgICB0b3A6IDE1cHg7XFxuICAgIGJvcmRlci13aWR0aDogOXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IC0xcHg7XFxufVxcblxcblxcbi5jYWxsY2VudGVyLW1lc3NhZ2Uge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICMxZjhhODEgMCUsICMzZWRlZDEgMTAwJSk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB3aWR0aDogOTclO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDMlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5jYWxsY2VudGVyLW1lc3NhZ2U6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiAxMHB4O1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICMzNmNjYzA7XFxuICAgIGxlZnQ6IDEwMCU7XFxuICAgIHRvcDogNDFweDtcXG4gICAgbWFyZ2luLWxlZnQ6IC0xcHg7XFxufVxcbi5jaGF0aGVhZGluZyB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNoYXQtYm9keSB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uY2FyZC1mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXIgbXQtNVwiIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBtYi00IHAtMyBib3JkZXIgYmctbGlnaHQgcm91bmRlZFwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTRcIiB9LCBbXG4gICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJidXR0b25cIiwgeyBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnlcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJDb2RlIC0gXCIgK1xuICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgX3ZtLmNvbXBsYWludCAmJiBfdm0uY29tcGxhaW50LmF0bVxuICAgICAgICAgICAgICAgICAgPyBfdm0uY29tcGxhaW50LmF0bS5hdG1faWRcbiAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBBZGRyZXNzIC0gXCIgK1xuICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgX3ZtLmF0bV9kZXRhaWxzLmNpdHlfbmFtZSArXG4gICAgICAgICAgICAgICAgICBcIiwgXCIgK1xuICAgICAgICAgICAgICAgICAgX3ZtLmF0bV9kZXRhaWxzLmRpc3RyaWN0X25hbWUgK1xuICAgICAgICAgICAgICAgICAgXCIsIFwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5hdG1fZGV0YWlscy5zdGF0ZV9uYW1lXG4gICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIkFyZWEgQ29kZSAtXCIgK1xuICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmF0bV9kZXRhaWxzLmFyZWFfY29kZSkgK1xuICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlBvc3Rjb2RlIC0gXCIgK1xuICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmF0bV9kZXRhaWxzLnBvc3Rjb2RlKSArXG4gICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiYnV0dG9uXCIsIHsgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1pbmZvXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmF0bV9kZXRhaWxzLmJhbmtfbmFtZSkpXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC00XCIgfSwgW1xuICAgICAgICBfdm0uc2xzX2RldGFpbHNcbiAgICAgICAgICA/IF9jKFwicFwiLCBbX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIlNMTSBEb2NrZXQgTm8gOlwiKV0pXSlcbiAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uc2xzX2RldGFpbHNcbiAgICAgICAgICA/IF9jKFwiYnV0dG9uXCIsIHsgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1pbmZvXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5zbHNfZGV0YWlscyA/IF92bS5zbHNfZGV0YWlscy5zbHNfZG9ja2V0X25vIDogXCJcIilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uX20oMSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiYnV0dG9uXCIsIHsgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1pbmZvXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmNvbXBsYWludC5kb2NrZXRfbm8pKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNFwiIH0sIFtcbiAgICAgICAgX3ZtLl9tKDIpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uY29tcGxhaW50Lndvcmtfc3RhdHVzID09PSBcIlBlbmRpbmdcIlxuICAgICAgICAgID8gX2MoXCJidXR0b25cIiwgeyBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRhbmdlclwiIH0sIFtfdm0uX3YoXCJQZW5kaW5nXCIpXSlcbiAgICAgICAgICA6IF92bS5jb21wbGFpbnQud29ya19zdGF0dXMgPT09IFwiUHJvY2Vzc2luZ1wiXG4gICAgICAgICAgPyBfYyhcImJ1dHRvblwiLCB7IHN0YXRpY0NsYXNzOiBcImJ0biBidG4td2FybmluZ1wiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiUHJvY2Vzc2luZ1wiKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF92bS5jb21wbGFpbnQud29ya19zdGF0dXMgPT09IFwiQ29tcGxldGVkXCJcbiAgICAgICAgICA/IF9jKFwiYnV0dG9uXCIsIHsgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCJDb21wbGV0ZWRcIilcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNFwiIH0sIFtcbiAgICAgICAgX3ZtLmNvbXBsYWludC5pc19zbG0gPT09IDEgJiYgX3ZtLmN1c3RvZGlhbl9kZXRhaWxzXG4gICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInZpZXd0YWIgdmlld3RhYmJlciBhY3Rpb24tdGhcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5hdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcyA9PT0gNFxuICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udHJvbC1sYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJBc3NpZ25lZCBDdXN0b2RpYW4gOlwiKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwidmlld2FkZHJlc3NcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEN1c3RvZGlhbiBOYW1lOiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uY3VzdG9kaWFuX2RldGFpbHMubmFtZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIoXCIgKyBfdm0uX3MoX3ZtLmN1c3RvZGlhbl9kZXRhaWxzLnBob25lKSArIFwiKVwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC04XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQgY2hhdC1ib3hcIiB9LCBbXG4gICAgICAgICAgX3ZtLl9tKDMpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHkgY2hhdC1ib2R5XCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2hhdC1tZXNzYWdlc1wiIH0sXG4gICAgICAgICAgICAgIF92bS5fbChfdm0uY29tcGxhaW50X2RldGFpbHMsIGZ1bmN0aW9uKHJvdywgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBrZXk6IGluZGV4IH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5hdXRoVXNlci5pZF9jbXNfcHJpdmlsZWdlcyA9PSAzXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtYi0zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgcm93LmlzX2FkbWluXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LnBvc3RfZm9yX2VuZ2luZWVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1lc3NhZ2UgYWRtaW4gZW5naW5lZXItbWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoYXRoZWFkaW5nIHRleHQtaW5mb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDYWxsIENlbnRlclwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGUgdGV4dC1tdXRlZCBzbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb3JtYXREYXRlKHJvdy5wb3N0ZWRfYXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihfdm0uX3Mocm93LmNvbW1lbnQpKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtZXNzYWdlIGFkbWluIGNhbGxjZW50ZXItbWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoYXRoZWFkaW5nIHRleHQtaW5mb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDYWxsIENlbnRlclwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGUgdGV4dC1tdXRlZCBzbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb3JtYXREYXRlKHJvdy5wb3N0ZWRfYXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihfdm0uX3Mocm93LmNvbW1lbnQpKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZXNzYWdlIHVzZXItbWVzc2FnZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaDVcIiwgeyBzdGF0aWNDbGFzczogXCJjaGF0aGVhZGluZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3Mocm93LmNsaWVudF9uYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImRhdGUgdGV4dC1tdXRlZCBzbWFsbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmZvcm1hdERhdGUocm93LnBvc3RlZF9hdCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoX3ZtLl9zKHJvdy5jb21tZW50KSldKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uYXV0aFVzZXIuaWRfY21zX3ByaXZpbGVnZXMgPT0gNFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWItM1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5pc19hZG1pblxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5wb3N0X2Zvcl9lbmdpbmVlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtZXNzYWdlIGFkbWluIGVuZ2luZWVyLW1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaDVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGF0aGVhZGluZyB0ZXh0LWluZm9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDYWxsIENlbnRlciAoXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3Mocm93Lm5hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGUgdGV4dC1tdXRlZCBzbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb3JtYXREYXRlKHJvdy5wb3N0ZWRfYXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihfdm0uX3Mocm93LmNvbW1lbnQpKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtZXNzYWdlIGFkbWluIGNhbGxjZW50ZXItbWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNoYXRoZWFkaW5nXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ2FsbCBDZW50ZXIgKFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHJvdy5uYW1lKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlIHRleHQtbXV0ZWQgc21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybWF0RGF0ZShyb3cucG9zdGVkX2F0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoX3ZtLl9zKHJvdy5jb21tZW50KSldKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWVzc2FnZSB1c2VyLW1lc3NhZ2VcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImg1XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2hhdGhlYWRpbmdcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHJvdy5jbGllbnRfbmFtZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJkYXRlIHRleHQtbXV0ZWQgc21hbGxcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5mb3JtYXREYXRlKHJvdy5wb3N0ZWRfYXQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KF92bS5fcyhyb3cuY29tbWVudCkpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWZvb3RlclwiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImZvcm1cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnN1Ym1pdENvbXBsYWludEZvcm0uYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmNvbW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImNvbW1lbnRcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uY29tcGxhaW50Lndvcmtfc3RhdHVzID09PSBcIkNvbXBsZXRlZFwiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uYXV0aFVzZXIuaWRfY21zX3ByaXZpbGVnZXMgPT09IDMsXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiQWRkIENvbW1lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICByb3dzOiBcIjNcIixcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmNvbW1lbnQgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uY29tbWVudCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uYXV0aFVzZXIuaWRfY21zX3ByaXZpbGVnZXMgPT0gNFxuICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWRTdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWRTdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9IFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZFN0YXR1cyA9ICRldmVudC50YXJnZXQubXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICQkc2VsZWN0ZWRWYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIlBlbmRpbmdcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlBlbmRpbmdcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiUHJvY2Vzc2luZ1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiUHJvY2Vzc2luZ1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCJDb21wbGV0ZWRcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkNvbXBsZXRlZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWRTdGF0dXMgPT0gXCJDb21wbGV0ZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWRTdGF0dXM9PSdDb21wbGV0ZWQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm1hbnVhbENsb3NlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm1hbnVhbENsb3NlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbCBtYW51YWwtY2xvc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJkYXRldGltZS1sb2NhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiQ29tcGxldGUgRGF0ZSBUaW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ubWFudWFsQ2xvc2UgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubWFudWFsQ2xvc2UgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jb21wbGFpbnQud29ya19zdGF0dXMgPT09IFwiQ29tcGxldGVkXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmF1dGhVc2VyLmlkX2Ntc19wcml2aWxlZ2VzID09PSAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlNlbmRcIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInBcIiwgW19jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCJBVE0gOlwiKV0pXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJwXCIsIFtfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiRG9ja2V0IE5vIDpcIildKV0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwicFwiLCBbX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIlN0YXR1cyA6XCIpXSldKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtaGVhZGVyIGJnLXByaW1hcnkgdGV4dC13aGl0ZVwiIH0sIFtcbiAgICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZWhlYWRpbmcgbWItMFwiIH0sIFtcbiAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1jb21tZW50c1wiLFxuICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfVxuICAgICAgICB9KSxcbiAgICAgICAgX3ZtLl92KFwiIERldGFpbHNcIilcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTY3Y2U1OTdlXCIsIHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH0pXG4gIH1cbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTY3Y2U1OTdlXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ29tcGxhaW50RGV0YWlsLnZ1ZVwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCJhYTAwZGVjMlwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTY3Y2U1OTdlXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ29tcGxhaW50RGV0YWlsLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNjdjZTU5N2VcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Db21wbGFpbnREZXRhaWwudnVlXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoY29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTY3Y2U1OTdlXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ29tcGxhaW50RGV0YWlsLnZ1ZVwiKVxufVxuLyogc2NyaXB0ICovXG5leHBvcnQgKiBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Db21wbGFpbnREZXRhaWwudnVlXCJcbmltcG9ydCBfX3Z1ZV9zY3JpcHRfXyBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Db21wbGFpbnREZXRhaWwudnVlXCJcbi8qIHRlbXBsYXRlICovXG5pbXBvcnQge3JlbmRlciBhcyBfX3Z1ZV9yZW5kZXJfXywgc3RhdGljUmVuZGVyRm5zIGFzIF9fdnVlX3N0YXRpY19yZW5kZXJfZm5zX199IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTY3Y2U1OTdlXFxcIixcXFwiaGFzU2NvcGVkXFxcIjp0cnVlLFxcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ29tcGxhaW50RGV0YWlsLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBcImRhdGEtdi02N2NlNTk3ZVwiXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxuaW1wb3J0IG5vcm1hbGl6ZUNvbXBvbmVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudC1ub3JtYWxpemVyXCJcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV9yZW5kZXJfXyxcbiAgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0NvbXBsYWludERldGFpbC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNjdjZTU5N2VcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi02N2NlNTk3ZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudC5leHBvcnRzXG4iXSwic291cmNlUm9vdCI6IiJ9