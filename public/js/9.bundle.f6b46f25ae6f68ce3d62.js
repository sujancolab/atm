(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/Tickets/index.vue":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/Tickets/index.vue ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var vue_read_more_smooth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-read-more-smooth */ "./node_modules/vue-read-more-smooth/dist/vue-read-more-smooth.common.js");
/* harmony import */ var vue_read_more_smooth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_read_more_smooth__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    VueReadMoreSmooth: (vue_read_more_smooth__WEBPACK_IMPORTED_MODULE_0___default())
  },
  data() {
    return {
      close_btn: true,
      additionalMore: [],
      problemsMore: [],
      search_machines: [],
      search_sites: [],
      search: {
        page: 1,
        machine_id: "",
        site_id: "",
        complaint_nature: "",
        ticket_type: "",
        ticket: ""
      },
      popticket: {},
      categories: [],
      sub_categories: [],
      sites: [],
      selected_machine: "",
      users: [],
      machines: [],
      Tickets: {},
      editmode: false,
      MaterialCost: null,
      ServiceCost: null,
      form: new Form({
        id: "",
        site_id: "",
        category_id: "",
        sub_category_id: "",
        free_service_no: "",
        ticket_type: "Periodic Maintenance",
        service_type: "Paid Service",
        machine_id: "",
        ticket_no: "",
        vendor_id: "",
        user_id: "",
        likely_date: "",
        estimated_material_cost: "",
        estimated_service_cost: "",
        maintenance_provider: "vendor",
        problem_description: "",
        complaint_nature: "Major"
      }),
      stages: [{
        id: "",
        stage_no: "",
        stage_date: "",
        description: "",
        file: "",
        new_file: ""
      }],
      formclose: new Form({
        id: "",
        machine_status: "",
        edit_type: "closeticket",
        ticket_type: "Periodic Maintenance",
        actual_date: "",
        actual_material_cost: "",
        actual_service_cost: "",
        current_run_hour: "",
        current_km_run: "",
        current_production_fig: "",
        production_loss: "",
        production_loss_amount: "",
        status: "Closed",
        vendor_resolve_date: "",
        vendor_attain_date: "",
        vendor_response_date: "",
        vendor_call_date: "",
        rca: ""
      }),
      pop_machine: "",
      pop_ticket: "",
      opn_stage: ["Vendor created", "Vendor Assigned", "Order issued", "Payment under process", "Payment Done", "Logistics under process", "Materials despatched", "Material received at site", "Maintainace under progress"],
      last_stage_index: 0,
      last_stage_date: "",
      json_fields: {
        "Ticket No": "ticket_no",
        "Ticket Type": "ticket_type",
        Machine: {
          field: "machine",
          callback: val => {
            return val.name + " - " + val.far_no;
          }
        },
        "Likely Date": "likely_date",
        "Reversion Date": "reversion_date",
        "Reversion Reason": "reversion_reason",
        "Estimated Material Cost": "estimated_material_cost",
        "Estimated Service Cost": "estimated_service_cost",
        "Actual Date": "actual_date",
        "Actual Material Cost": "actual_material_cost",
        "Actual Service Cost": "actual_service_cost",
        "Status": "status",
        "Service Type": "service_type",
        "Maintenance Provider": "maintenance_provider",
        "Problem Description": "problem_description",
        "Complaint Nature": "complaint_nature",
        "Status During Complaint": "status_during_complaint"
      },
      json_meta: [[{
        key: "charset",
        value: "utf-8"
      }]]
    };
  },
  methods: {
    async reset_filter() {
      this.search = {
        page: 1,
        machine_id: "",
        site_id: "",
        complaint_nature: "",
        ticket_type: "",
        ticket: ""
      };
    },
    async export_csv() {
      const response = await axios.get("api/ticket?export=1", {
        params: {
          search: this.search
        }
      });
      return response.data.data;
    },
    startDownload() {
      Swal.fire({
        title: "Please Wait !",
        html: "Data populating",
        // add html attribute if you want or remove
        allowOutsideClick: false,
        onBeforeOpen: () => {
          Swal.showLoading();
        }
      });
    },
    finishDownload() {
      Swal.close();
    },
    sclick(x, p = "") {
      if (p) {
        let a = this.problemsMore[x] ? false : true;
        this.$set(this.problemsMore, x, a);
      } else {
        let a = this.additionalMore[x] ? false : true;
        this.$set(this.additionalMore, x, a);
      }
    },
    getLabel(val) {
      if (typeof val === "object") {
        return val.far_no + " - " + val.name;
      } else {
        return val;
      }
    },
    viewModal(ticket) {
      this.pop_ticket = "";
      axios.get("api/ticket/" + ticket.id).then(res => {
        this.pop_ticket = res.data.data;
      }).catch(err => {
        this.pop_ticket = ticket;
      });
      axios.get("api/category/" + ticket.category_id).then(res => {
        this.sub_categories = res.data.data;
      });
      $("#viewmodal").modal("show");
    },
    AddStage() {
      this.stages.push({
        id: "",
        stage_no: "",
        stage_date: "",
        description: "",
        file: "",
        new_file: ""
      });
    },
    async choose_stage_file(event, x) {
      this.stages[x].new_file = event.target.files[0];
    },
    async uploadMaterialCost(event) {
      this.MaterialCost = event.target.files;
    },
    async uploadServiceCost(event) {
      this.ServiceCost = event.target.files;
    },
    getResults(page = 1) {
      this.$Progress.start();
      this.search.page = page;
      axios.get("/api/ticket", {
        params: this.search
      }).then(data => {
        this.Tickets = data.data.data;
        this.additionalMore = new Array(this.Tickets.data.length).fill(false);
        this.problemsMore = new Array(this.Tickets.data.length).fill(false);
      });
      this.$Progress.finish();
    },
    calculate_loss() {
      if (this.formclose.actual_date && this.pop_ticket.created_at) {
        let a = new Date(this.formclose.actual_date).toISOString();
        let b = new Date(this.pop_ticket.created_at).toISOString();
        const dateB = moment(a);
        const dateC = moment(b);
        var Diff = dateB.diff(dateC, 'days') + 1;
        let hrs = this.pop_machine.prdloss_hrs;
        let rate = this.pop_machine.prdloss_hr_rate;
        let tloss = Diff * hrs;
        this.formclose.production_loss_amount = tloss * rate;
        this.formclose.production_loss = tloss;
        console.log(hrs, rate, Diff);
      }
    },
    submitCloseTicket() {
      this.$forceUpdate();
      this.$validator.validateAll("closeticket").then(async valid => {
        if (valid) {
          let pop_loader = this.$loading.show({});
          let last_mDate = this.pop_machine.last_maintenances ? this.pop_machine.last_maintenances.datetime : this.pop_machine.last_maintenance_date;
          if (last_mDate && this.formclose.actual_date && Date.parse(moment(this.formclose.actual_date).format("MMM,DD YYYY")) < Date.parse(moment(last_mDate).format("MMM,DD YYYY"))) {
            pop_loader.hide();
            Swal.fire("You can not add previous date's data, Please remove record from maintenance list.", "", "warning");
          } else {
            this.close_btn = false;
            this.formclose.put("/api/ticket/" + this.formclose.id).then(response => {
              if (response.data.success) {
                $("#closemodal").modal("hide");
                Toast.fire({
                  icon: "success",
                  title: response.data.message
                });
                this.upload_files(this.formclose.id, "actual");
                this.$validator.reset();
                this.formclose.reset();
                this.loadTickets();
              }
              this.close_btn = true;
              pop_loader.hide();
            }).catch(() => {
              this.close_btn = true;
              pop_loader.hide();
              if (typeof err.response.data != "undefined") {
                this.$setErrorsFromResponse(err.response.data);
              }
            });
          }
        }
      });
    },
    closeModal(ticket) {
      this.$validator.pause();
      $("#closemodal").modal("show");
      this.$validator.reset();
      this.formclose.reset();
      this.$refs.fileactualservice.value = null;
      this.$refs.fileactualmaterial.value = null;
      this.pop_ticket = ticket;
      this.pop_machine = ticket.machine;
      this.formclose.fill(ticket);
      this.formclose.edit_type = "closeticket";
      this.$validator.resume();
    },
    editModal(ticket) {
      this.editmode = true;
      this.$validator.pause();
      this.form.reset();
      this.pop_ticket = ticket;
      if (this.$gate.isAdmin()) {
        this.$refs.fileservice.value = null;
        this.$refs.filematerial.value = null;
      }
      this.MaterialCost = null;
      this.ServiceCost = null;
      $("#addNew").modal("show");
      this.form.fill(ticket);
      this.form.likely_date = ticket.likely_date ? new Date(ticket.likely_date).toISOString() : "";
      this.stages = [];
      if (ticket.stages && ticket.stages.length > 0) {
        this.stages = ticket.stages;
      }
      this.$validator.resume();
    },
    newModal() {
      this.stages = [];
      this.AddStage();
      this.editmode = false;
      this.$validator.reset();
      this.$validator.pause();
      this.form.reset();
      if (this.$gate.isAdmin()) {
        this.$refs.fileservice.value = null;
        this.$refs.filematerial.value = null;
      }
      this.MaterialCost = null;
      this.ServiceCost = null;
      $("#addNew").modal("show");
      this.$validator.resume();
    },
    loadTickets() {
      // if (this.$gate.isAdmin()) {
      let pop_loader = this.$loading.show({});
      axios.get("/api/ticket", {
        params: this.search
      }).then(data => {
        this.Tickets = data.data.data;
        this.additionalMore = new Array(this.Tickets.data.length).fill(false);
        this.problemsMore = new Array(this.Tickets.data.length).fill(false);
        pop_loader.hide();
      }).catch(() => {
        pop_loader.hide();
      });
      //   }
    },

    async upload_files(id, isactual = false) {
      let fl = 0;
      if (this.MaterialCost) {
        this.MaterialCost.forEach(file => {
          var fd = new FormData();
          fd.append(`file`, file);
          if (isactual) {
            fd.append(`file_type`, "Actual Estimated Material");
          } else {
            fd.append(`file_type`, "Estimated Material");
          }
          fd.append(`ticket_id`, id);
          axios.post("api/ticket/files", fd).then(res => {
            console.log("gallery uploaded");
          });
        });
      }
      if (this.ServiceCost) {
        this.ServiceCost.forEach(file => {
          var fd = new FormData();
          fd.append(`file`, file);
          if (isactual) {
            fd.append(`file_type`, "Actual Estimated Service");
          } else {
            fd.append(`file_type`, "Estimated Service");
          }
          fd.append(`ticket_id`, id);
          axios.post("api/ticket/files", fd).then(res => {
            console.log("gallery uploaded");
          });
        });
      }
    },
    async upload_stages(id) {
      if (this.stages) {
        this.stages.forEach(stage => {
          var fd = new FormData();
          fd.append(`id`, stage.id);
          fd.append(`stage_no`, stage.stage_no);
          fd.append(`stage_date`, stage.stage_date);
          fd.append(`description`, stage.description);
          //fd.append(`new_file`, stage.new_file);
          // fd.append(`file`, stage.file);
          fd.append(`ticket_id`, id);
          axios.post("api/ticket/stages", fd).then(res => {
            console.log("stages uploaded");
          });
        });
      }
    },
    submitTicket() {
      this.$validator.validateAll().then(async valid => {
        if (valid) {
          let pop_loader = this.$loading.show({
            container: this.$refs.vps_submit_pop
          });
          if (this.form.id) {
            this.form.put("/api/ticket/" + this.form.id).then(response => {
              if (response.data.success) {
                $("#addNew").modal("hide");
                Toast.fire({
                  icon: "success",
                  title: response.data.message
                });
                this.upload_stages(this.form.id);
                this.upload_files(this.form.id);
                this.loadTickets();
              }
              pop_loader.hide();
            }).catch(() => {
              pop_loader.hide();
              if (typeof err.response.data != "undefined") {
                this.$setErrorsFromResponse(err.response.data);
              }
            });
          } else {
            this.form.post("/api/ticket").then(response => {
              if (response.data.success) {
                $("#addNew").modal("hide");
                Toast.fire({
                  icon: "success",
                  title: response.data.message
                });
                this.upload_files(response.data.data.id);
                this.loadTickets();
              }
              pop_loader.hide();
            }).catch(() => {
              pop_loader.hide();
              if (typeof err.response.data != "undefined") {
                this.$setErrorsFromResponse(err.response.data);
              }
            });
          }
        }
      });
    },
    async check_free_service() {
      if (this.selected_machine) {
        if (this.selected_machine.completed_free_service >= this.selected_machine.free_service_no) {
          this.form.service_type = "Paid Service";
          this.form.free_service_no = "";
        } else {
          this.form.free_service_no = this.selected_machine.completed_free_service + 1;
        }
        if (this.selected_machine && this.selected_machine.machine_type == "New" && this.form.service_type == "Free Service") {
          //  this.selected_machine.free_service_no
        }
      }
    },
    async get_machine() {
      axios.get("/api/ticket_machine", {
        params: {
          site_id: this.form.site_id,
          category_id: this.form.category_id,
          sub_category_id: this.form.sub_category_id
        }
      }).then(response => {
        this.machines = response.data.data;
      }).catch(() => console.warn("Oh. Something went wrong"));
    }
  },
  mounted() {},
  created() {
    this.loadTickets();
  },
  beforeCreate() {
    axios.get("api/get_pre_machine").then(res => {
      this.categories = res.data.data.Category;
      this.sites = res.data.data.sites;
    });
    axios.get("/api/initial_ticket").then(response => {
      this.users = response.data.data.vendors;
      this.machines = response.data.data.machines;
      this.search_machines = response.data.data.machines;
      this.search_sites = response.data.data.sites;
    }).catch(() => console.warn("Oh. Something went wrong"));
  },
  watch: {
    "formclose.machine_status"(n) {
      if (n == "Non Repairable") {
        this.formclose.actual_material_cost = 0;
        this.formclose.actual_service_cost = 0;
      } else {
        this.formclose.actual_material_cost = "";
        this.formclose.actual_service_cost = "";
      }
    },
    async "form.sub_category_id"(n, o) {
      if (n) {
        this.get_machine();
      }
    },
    async "form.site_id"(n, o) {
      if (n) {
        this.get_machine();
      }
    },
    "form.category_id": {
      handler: function (n, o) {
        if (n) {
          axios.get("api/category/" + n).then(res => {
            this.sub_categories = res.data.data;
          });
          this.get_machine();
        }
      },
      deep: true,
      initial: true
    },
    stages: {
      handler: function (n, o) {
        if (n && n.length > 0) {
          let la = n[n.length - 1];
          if (la.stage_no) this.last_stage_index = this.opn_stage.indexOf(la.stage_no);
          if (la.stage_date) this.last_stage_date = new Date(la.stage_date).toISOString();
        } else {
          this.last_stage_index = 0;
          if (this.pop_ticket && this.pop_ticket.created_at) {
            this.last_stage_date = new Date(this.pop_ticket.created_at).toISOString();
          } else {
            this.last_stage_date = new Date().toISOString();
          }
        }
      },
      deep: true,
      initial: true
    },
    async "form.maintenance_provider"(n) {
      if (n != "vendor") {
        this.form.service_type = "Paid Service";
      }
      axios.get("api/user/list", {
        params: {
          type: n
        }
      }).then(response => {
        this.users = response.data.data;
      }).catch(() => console.warn("Oh. Something went wrong"));
    },
    async "form.machine_id"(n) {
      this.selected_machine = this.machines.find(x => x.id === n);
      await this.check_free_service();
    },
    async "form.service_type"(n) {
      if (n == "Free Service") {
        await this.check_free_service();
      }
    },
    async "formclose.actual_date"() {
      this.calculate_loss();
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/Tickets/index.vue":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/Tickets/index.vue ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.bs {\n    border: 1px solid #d2d1d1a8;\n    border-radius: 5px;\n}\n.comma~.comma:not(:empty):before {\n    content: \", \";\n}\n.rmore {\n    color: blue;\n}\n", "", {"version":3,"sources":["F:/wamp64/www/rmm/resources/js/components/Tickets/resources/js/components/Tickets/index.vue"],"names":[],"mappings":";AA23CA;IACA,4BAAA;IACA,mBAAA;CACA;AAEA;IACA,cAAA;CACA;AAEA;IACA,YAAA;CACA","file":"index.vue","sourcesContent":["<template>\n    <section class=\"content\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <div class=\"card\">\n                        <div class=\"card-header\">\n                            <h3 class=\"card-title\">Ticket List</h3>\n                            <div class=\"card-tools\">\n                                <router-link to=\"/ticket/add\" class=\"btn btn-sm btn-primary\" @click=\"newModal\">\n                                    <i class=\"fa fa-plus-square\"></i>\n                                    Add New\n                                </router-link>\n                            </div>\n                        </div>\n\n                        <div class=\"card-body p-2\">\n                            <form autocomplete=\"off\" @submit.prevent=\"getResults()\" data-vv-scope=\"searchfr\">\n                                <div class=\"form-row\">\n                                    <div class=\"col\">\n                                        <v-select label=\"name\" :get-option-label=\"getLabel\" :reduce=\"(option) => option.id\"\n                                            :options=\"search_machines\" placeholder=\"Enter machines ...\"\n                                            v-model=\"search.machine_id\" name=\"machine_id\">\n                                        </v-select>\n                                    </div>\n                                    <div class=\"col\">\n                                        <input type=\"text\" placeholder=\"Enter ticket ...\" v-model=\"search.ticket\"\n                                            name=\"ticket\" class=\"form-control\" />\n                                    </div>\n                                    <div class=\"col\">\n                                        <v-select label=\"site_name\" :reduce=\"(option) => option.id\" :options=\"search_sites\"\n                                            placeholder=\"Select Site...\" v-model=\"search.site_id\" name=\"site_id\">\n                                        </v-select>\n                                    </div>\n                                    <div class=\"col\">\n                                        <v-select label=\"site_name\" :options=\"['Open', 'Closed']\"\n                                            placeholder=\"Select Status...\" v-model=\"search.status\" name=\"status\">\n                                        </v-select>\n                                    </div>\n                                    <div class=\"col\">\n                                        <v-select label=\"site_name\" :options=\"['Major', 'Minor']\"\n                                            placeholder=\"Select Complaint Nature...\" v-model=\"search.complaint_nature\"\n                                            name=\"complaint_nature\">\n                                        </v-select>\n                                    </div>\n                                    <div class=\"col\">\n                                        <v-select label=\"site_name\" :options=\"['Breakdown Maintenance', 'Periodic Maintenance']\"\n                                            placeholder=\"Select Ticket Type...\" v-model=\"search.ticket_type\"\n                                            name=\"ticket_type\">\n                                        </v-select>\n                                    </div>\n\n                                    <button type=\"submit\" class=\"btn btn-success\">Search</button>\n                                    <button type=\"button\" class=\"btn btn-info ml-2\" @click=\"reset_filter()\">Reset</button>\n                                    <download-excel class=\"btn btn-warning ml-2\" :fetch=\"export_csv\" :fields=\"json_fields\"\n                                        :before-generate=\"startDownload\" :before-finish=\"finishDownload\"\n                                        worksheet=\"My Worksheet\" type=\"csv\" name=\"ticket_list.csv\">\n                                        <span class=\"labelText\">\n                                            <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>\n                                            Export as CSV</span>\n                                    </download-excel>\n                                </div>\n                            </form>\n                        </div>\n\n\n                        <!-- /.card-header -->\n                        <div class=\"card-body ticketLstTbl table-responsive p-0\">\n                            <table class=\"table table-hover\">\n                                <thead>\n                                    <tr>\n                                        <th>Ticket No</th>\n                                        <th>Ticket Type</th>\n                                        <th>Machine Name</th>\n                                        <th>Machine's Problem</th>\n                                        <th>Additional Problems</th>\n                                        <th>Machine Far No & Details</th>\n                                        <th>Site</th>\n                                        <th>Complaint Nature</th>\n                                        <th>Created By</th>\n                                        <th>Created Date</th>\n                                        <th>Expected date</th>\n                                        <th>Revised <br> Expected date</th>\n                                        <th>Ticket Status</th>\n                                        <th>Action</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr v-for=\"(ticket, x) in Tickets.data\" :key=\"ticket.id\">\n                                        <td>{{ ticket.ticket_no }}</td>\n                                        <td>{{ ticket.ticket_type }}</td>\n                                        <td class=\"text-capitalize\">{{ ticket.machine.name }}</td>\n                                        <td>\n                                            <template v-if=\"ticket.problem_description\">\n                                                <VueReadMoreSmooth :open.sync=\"problemsMore[x]\" no-button no-shadow>\n                                                    <p>{{ ticket.problem_description }}</p>\n                                                </VueReadMoreSmooth>\n                                                <span @click=\"sclick(x, 'p')\" class=\"rmore\">...{{ problemsMore[x] ? \"Less\" :\n                                                    \"More\" }}</span>\n                                            </template>\n\n\n\n\n\n                                        </td>\n                                        <td>\n                                            <template v-if=\"ticket.problems && ticket.problems.length > 0\">\n                                                <VueReadMoreSmooth :open.sync=\"additionalMore[x]\" no-button no-shadow>\n                                                    <p v-if=\"ticket.problems\" v-for=\"(item, index) in ticket.problems\"\n                                                        :key=\"'p' + index\" v-html=\"item.problem\"></p>\n                                                </VueReadMoreSmooth>\n                                                <span @click=\"sclick(x)\" class=\"rmore\">...{{ additionalMore[x] ? \"Less\" :\n                                                    \"More\" }}</span>\n                                            </template>\n                                        </td>\n                                        <td>\n                                            {{\n                                                ticket.machine.far_no +\n                                                \" - \" +\n                                                ticket.machine.name +\n                                                \" - \" +\n                                                (ticket.machine.machine_model\n                                                    ? ticket.machine.machine_model.name\n                                                    : \"null\") +\n                                                \" - \" +\n                                                ticket.machine.machine_sr_no\n                                            }}\n                                        </td>\n                                        <td>{{ ticket.site ? ticket.site.site_name : \"-\" }}</td>\n                                        <td>{{ ticket.complaint_nature }}</td>\n                                        <td>{{ ticket.created_by_name }}</td>\n                                        <td>{{ ticket.created_at | myDate }}</td>\n                                        <td>{{ ticket.likely_date | myDate }}</td>\n                                        <td>{{ ticket.reversion_date | myDate }}</td>\n                                        <td>\n                                            {{\n                                                ticket.status.toLowerCase() == \"created by user\"\n                                                ? \"Open\"\n                                                : ticket.status\n                                            }}\n                                        </td>\n                                        <td>\n                                            <a href=\"javascript:void(0);\" class=\"btn btn-warning btn-sm\"\n                                                @click=\"viewModal(ticket)\">\n                                                View\n                                            </a>\n                                            <router-link :to=\"'/ticket/edit/' + ticket.id\" class=\"btn btn-success btn-sm\"\n                                                v-if=\"ticket.status != 'Closed' && $gate.isAdmin()\">Edit</router-link>\n                                            <a href=\"javascript:void(0);\" class=\"btn btn-danger btn-sm\"\n                                                @click=\"closeModal(ticket)\" title=\"Close ticket\"\n                                                v-if=\"ticket.status != 'Closed' && $gate.isAdmin()\">\n                                                Close\n                                            </a>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                        <!-- /.card-body -->\n                        <div class=\"card-footer\">\n                            <pagination :data=\"Tickets\" @pagination-change-page=\"getResults\"></pagination>\n                        </div>\n                    </div>\n                    <!-- /.card -->\n                </div>\n            </div>\n        </div>\n\n        <!-- Close Modal -->\n        <div class=\"modal fade\" id=\"closemodal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"closemodal\" aria-hidden=\"true\">\n            <div class=\"modal-dialog modal-lg\" role=\"document\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title\">Close Ticket</h5>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                    </div>\n\n                    <form @submit.prevent=\"submitCloseTicket()\" data-vv-scope=\"closeticket\">\n                        <div class=\"modal-body\">\n                            <div class=\"row\" v-if=\"pop_machine\">\n                                <div class=\"col-sm\">\n                                    <p>\n                                        <strong>Far No :</strong> {{ pop_machine.far_no }}\n                                        <br />\n                                        <strong>Machine Name :</strong> {{ pop_machine.name }}\n                                        <br />\n                                        <strong>Machine Model :</strong>\n                                        {{\n                                            pop_machine.machine_model\n                                            ? pop_machine.machine_model.name\n                                            : \"-\"\n                                        }}\n                                        <br />\n                                        <strong>Machine Chassis No :</strong>\n                                        {{ pop_machine.chassis_no }}\n                                    </p>\n                                </div>\n                                <div class=\"col-sm\">\n                                    <p>\n                                        <strong>Machine Sl No:</strong>\n                                        {{ pop_machine.machine_sr_no }}\n                                        <br />\n                                        <strong>Machine Regn No :</strong> {{ pop_machine.regn_no }}\n                                        <br />\n                                        <strong>Machine Engine No :</strong>\n                                        {{ pop_machine.engine_no }}\n                                        <br>\n                                        <strong>Ticket No :</strong> {{ pop_ticket ? pop_ticket.ticket_no : '-' }}\n                                    </p>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                {{ verrors.closeticket }}\n                                <div class=\"col-6\" v-if=\"pop_ticket && pop_ticket.likely_date\">\n                                    <div class=\"form-group\">\n                                        <label>Actual Date</label>\n                                        <datetime value-zone=\"Asia/Kolkata\" v-model=\"formclose.actual_date\"\n                                            name=\"actual_date\" input-class=\"form-control\" :class=\"{\n                                                'is-invalid': verrors.has('closeticket.actual_date'),\n                                            }\" v-validate=\"'required'\" data-vv-as=\"Actual Date\" :min-datetime=\"new Date(pop_ticket.created_at).toISOString()\n    \" :max-datetime=\"new Date().toISOString()\" />\n                                        <div v-if=\"verrors.has('closeticket.actual_date')\"\n                                            class=\"help-block invalid-feedback\">\n                                            {{ verrors.first(\"closeticket.actual_date\") }}\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-6\">\n                                    <div class=\"form-group\">\n                                        <label>Machine Status</label>\n                                        <select v-model=\"formclose.machine_status\" name=\"machine_status\"\n                                            class=\"form-control\" :class=\"{\n                                                'is-invalid': verrors.has('closeticket.machine_status'),\n                                            }\" v-validate=\"'required'\" data-vv-as=\"machine status\">\n                                            <option value=\"Running\">Running</option>\n                                            <option value=\"Running with Problem\">\n                                                Running with Problem\n                                            </option>\n                                            <option value=\"Non Repairable\">Non Repairable</option>\n                                        </select>\n                                        <div v-if=\"verrors.has('closeticket.machine_status')\"\n                                            class=\"help-block invalid-feedback\">\n                                            {{ verrors.first(\"closeticket.machine_status\") }}\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"col-4\">\n                                    <div class=\"form-group\">\n                                        <label>Estimated Material cost</label>\n                                        <input type=\"text\" class=\"form-control\" readonly :value=\"pop_ticket.estimated_material_cost +\n                                            pop_ticket.ad_estimated_material_cost +\n                                            '(' +\n                                            pop_ticket.estimated_material_cost +\n                                            '+' +\n                                            pop_ticket.ad_estimated_material_cost +\n                                            ')'\n                                            \" />\n                                    </div>\n                                </div>\n                                <div class=\"col-4\">\n                                    <div class=\"form-group\">\n                                        <label>Actual Material cost</label>\n                                        <input v-model=\"formclose.actual_material_cost\" type=\"text\"\n                                            name=\"actual_material_cost\" v-validate=\"'required'\"\n                                            data-vv-as=\"Actual Material cost\" class=\"form-control\" :class=\"{\n                                                'is-invalid': verrors.has(\n                                                    'closeticket.actual_material_cost'\n                                                ),\n                                            }\" :readonly=\"formclose.machine_status == 'Non Repairable'\" />\n                                        <div v-if=\"verrors.has('closeticket.actual_material_cost')\"\n                                            class=\"help-block invalid-feedback\">\n                                            {{ verrors.first(\"closeticket.actual_material_cost\") }}\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-4\">\n                                    <div class=\"form-group\">\n                                        <label> Actual Material cost File</label>\n                                        <input type=\"file\" @change=\"uploadMaterialCost\" multiple name=\"material_cost\"\n                                            ref=\"fileactualmaterial\" class=\"form-control\" :class=\"{\n                                                'is-invalid': verrors.has('closeticket.material_cost'),\n                                            }\" v-validate=\"''\" data-vv-as=\"Actual Material cost\" />\n\n                                        <div class=\"clearfix\" v-if=\"pop_ticket.actual_estimated_material_files\">\n                                            <a v-for=\"(\n                          item, x\n                        ) in pop_ticket.actual_estimated_material_files\" :key=\"item.id\" :href=\"item.file\"\n                                                target=\"_blank\">View\n                                                {{\n                                                    pop_ticket.actual_estimated_material_files.length > 1\n                                                    ? x + 1\n                                                    : \"\"\n                                                }}</a>\n                                        </div>\n\n                                        <div v-if=\"verrors.has('closeticket.material_cost')\"\n                                            class=\"help-block invalid-feedback\">\n                                            {{ verrors.first(\"closeticket.material_cost\") }}\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"col-4\">\n                                    <div class=\"form-group\">\n                                        <label>Estimated Service cost</label>\n                                        <input :value=\"pop_ticket.estimated_service_cost +\n                                            pop_ticket.ad_estimated_service_cost +\n                                            '(' +\n                                            pop_ticket.estimated_service_cost +\n                                            '+' +\n                                            pop_ticket.ad_estimated_service_cost +\n                                            ')'\n                                            \" type=\"text\" class=\"form-control\" readonly />\n                                    </div>\n                                </div>\n                                <div class=\"col-4\">\n                                    <div class=\"form-group\">\n                                        <label>Actual Service cost</label>\n                                        <input v-model=\"formclose.actual_service_cost\" type=\"text\"\n                                            name=\"actual_service_cost\" v-validate=\"'required'\"\n                                            data-vv-as=\"Actual Service cost\" class=\"form-control\" :class=\"{\n                                                'is-invalid': verrors.has(\n                                                    'closeticket.actual_service_cost'\n                                                ),\n                                            }\" :readonly=\"formclose.machine_status == 'Non Repairable'\" />\n                                        <div v-if=\"verrors.has('closeticket.actual_service_cost')\"\n                                            class=\"help-block invalid-feedback\">\n                                            {{ verrors.first(\"closeticket.actual_service_cost\") }}\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-4\">\n                                    <div class=\"form-group\">\n                                        <label> Actual Service cost File </label>\n                                        <input type=\"file\" @change=\"uploadServiceCost\" multiple name=\"service_cost\"\n                                            ref=\"fileactualservice\" class=\"form-control\" :class=\"{\n                                                'is-invalid': verrors.has('closeticket.service_cost'),\n                                            }\" v-validate=\"''\" data-vv-as=\"Actual Service cost\" />\n\n                                        <div class=\"clearfix\" v-if=\"pop_ticket.actual_estimated_service_files\">\n                                            <a v-for=\"(\n                          item, x\n                        ) in pop_ticket.actual_estimated_service_files\" :key=\"item.id\" :href=\"item.file\"\n                                                target=\"_blank\">View\n                                                {{\n                                                    pop_ticket.actual_estimated_service_files.length > 1\n                                                    ? x + 1\n                                                    : \"\"\n                                                }}</a>\n                                        </div>\n\n                                        <div v-if=\"verrors.has('closeticket.service_cost')\"\n                                            class=\"help-block invalid-feedback\">\n                                            {{ verrors.first(\"closeticket.service_cost\") }}\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"col-6\" v-if=\"pop_machine.is_consumtion_hr_run\">\n                                    <div class=\"form-group\">\n                                        <label>Current Run hour </label>\n                                        <input v-model=\"formclose.current_run_hour\" name=\"current_run_hour\"\n                                            class=\"form-control\" :class=\"{\n                                                'is-invalid': verrors.has(\n                                                    'closeticket.current_run_hour'\n                                                ),\n                                            }\" v-validate=\"{\n    required: true,\n    decimal: 2,\n    min_value: pop_machine.last_maintenances\n        ? pop_machine.last_maintenances.run_hour\n        : pop_machine.last_hr_run,\n}\" data-vv-as=\"Current Run hour\" />\n                                        <div v-if=\"verrors.has('closeticket.current_run_hour')\"\n                                            class=\"help-block invalid-feedback\">\n                                            {{ verrors.first(\"closeticket.current_run_hour\") }}\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-6\" v-if=\"pop_machine.is_consumtion_km_run\">\n                                    <div class=\"form-group\">\n                                        <label> Current KM Run </label>\n                                        <input v-model=\"formclose.current_km_run\" name=\"current_km_run\" class=\"form-control\"\n                                            :class=\"{\n                                                'is-invalid': verrors.has('closeticket.current_km_run'),\n                                            }\" v-validate=\"{\n    required: true,\n    decimal: 2,\n    min_value: pop_machine.last_maintenances\n        ? pop_machine.last_maintenances.km_run\n        : pop_machine.last_km_run,\n}\" data-vv-as=\"Current KM hour\" />\n                                        <div v-if=\"verrors.has('closeticket.current_km_run')\"\n                                            class=\"help-block invalid-feedback\">\n                                            {{ verrors.first(\"closeticket.current_km_run\") }}\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-6\" v-if=\"pop_machine.is_production_fig\">\n                                    <div class=\"form-group\">\n                                        <label> Current Production fig </label>\n                                        <input v-model=\"formclose.current_production_fig\" name=\"current_production_fig\"\n                                            class=\"form-control\" :class=\"{\n                                                'is-invalid': verrors.has(\n                                                    'closeticket.current_production_fig'\n                                                ),\n                                            }\" v-validate=\"{\n    required: true,\n    decimal: 2,\n    min_value: pop_machine.last_maintenances\n        ? pop_machine.last_maintenances.production_fig\n        : pop_machine.periodic_maintenance_breakdown,\n}\" data-vv-as=\"Current Production fig\" />\n                                        <div v-if=\"verrors.has('closeticket.current_production_fig')\"\n                                            class=\"help-block invalid-feedback\">\n                                            {{ verrors.first(\"closeticket.current_production_fig\") }}\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"col-6\" v-if=\"formclose.ticket_type == 'Breakdown Maintenance'\">\n                                    <div class=\"form-group\">\n                                        <label>Production Loss</label>\n                                        <input v-model=\"formclose.production_loss\" name=\"production_loss\"\n                                            class=\"form-control\" :class=\"{\n                                                'is-invalid': verrors.has(\n                                                    'closeticket.production_loss'\n                                                ),\n                                            }\" v-validate=\"'required'\" data-vv-as=\"Production Loss\"  readonly/>\n                                        <div v-if=\"verrors.has('closeticket.production_loss')\"\n                                            class=\"help-block invalid-feedback\">\n                                            {{ verrors.first(\"closeticket.production_loss\") }}\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-6\" v-if=\"formclose.ticket_type == 'Breakdown Maintenance'\">\n                                    <div class=\"form-group\">\n                                        <label>Production loss amount</label>\n                                        <input v-model=\"formclose.production_loss_amount\" name=\"production_loss_amount\"\n                                            class=\"form-control\" :class=\"{\n                                                'is-invalid': verrors.has(\n                                                    'closeticket.production_loss_amount'\n                                                ),\n                                            }\" v-validate=\"'required'\" data-vv-as=\"Current Production fig\" readonly/>\n                                        <div v-if=\"verrors.has('closeticket.production_loss_amount')\"\n                                            class=\"help-block invalid-feedback\">\n                                            {{ verrors.first(\"closeticket.production_loss_amount\") }}\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"col-6\">\n                                    <div class=\"form-group\">\n                                        <label>Root Cause Analysis</label>\n                                        <textarea rows=\"1\" v-model=\"formclose.rca\" name=\"rca\" class=\"form-control\" :class=\"{\n                                            'is-invalid': verrors.has('closeticket.rca'),\n                                        }\" v-validate=\"'required'\"></textarea>\n                                        <div v-if=\"verrors.has('closeticket.rca')\" class=\"help-block invalid-feedback\">\n                                            {{ verrors.first(\"closeticket.rca\") }}\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"modal-footer\">\n                            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">\n                                Close\n                            </button>\n                            <button type=\"submit\" class=\"btn btn-primary\" v-if=\"close_btn\">\n                                Close Ticket\n                            </button>\n                            <button type=\"button\" class=\"btn btn-primary\" v-else>\n                                Processing\n                            </button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n        <!--View Modal-->\n        <div class=\"modal fade\" id=\"viewmodal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"viewmodal\" aria-hidden=\"true\">\n            <div class=\"modal-dialog modal-lg\" role=\"document\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title\">View Ticket</h5>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                    </div>\n                    <div class=\"modal-body\" v-if=\"pop_ticket\">\n                        <div class=\"row\">\n                            <div class=\"col-4 bs\">\n                                <div class=\"form-group\">\n                                    <label>Machine Site</label>\n                                    <v-select label=\"site_name\" :reduce=\"(option) => option.id\" :options=\"sites\"\n                                        placeholder=\"Choose Site ...\" v-model=\"pop_ticket.site_id\" disabled>\n                                    </v-select>\n                                </div>\n                            </div>\n                            <div class=\"col-4 bs\">\n                                <div class=\"form-group\">\n                                    <label>Machine Category</label>\n                                    <v-select label=\"name\" :reduce=\"(option) => option.id\" :options=\"categories\"\n                                        placeholder=\"Choose Category ...\" v-model=\"pop_ticket.category_id\" disabled>\n                                    </v-select>\n                                </div>\n                            </div>\n                            <div class=\"col-4 bs\">\n                                <div class=\"form-group\">\n                                    <label>Machine Description</label>\n                                    <v-select label=\"name\" :reduce=\"(option) => option.id\" :options=\"sub_categories\"\n                                        placeholder=\"Choose description ...\" v-model=\"pop_ticket.sub_category_id\"\n                                        name=\"sub_category_id\" :disabled=\"pop_ticket.id != ''\">\n                                    </v-select>\n                                </div>\n                            </div>\n                            <div class=\"col-4 bs\">\n                                <div class=\"form-group\">\n                                    <label style=\"margin: 0\"> Machine : </label>\n                                    <strong>Far No :</strong> {{ pop_ticket.machine.far_no }}\n                                    <br />\n                                    <strong>Machine Name :</strong> {{ pop_ticket.machine.name }}\n                                    <br />\n                                    <strong>Machine Chassis No :</strong>\n                                    {{ pop_ticket.machine.chassis_no }}\n                                    <br />\n                                    <strong>Machine Sl No:</strong>\n                                    {{ pop_ticket.machine.machine_sr_no }}\n                                    <br />\n                                    <strong>Machine Regn No :</strong>\n                                    {{ pop_ticket.machine.regn_no }}\n                                    <br />\n                                    <strong>Machine Engine No :</strong>\n                                    {{ pop_ticket.machine.engine_no }}\n                                </div>\n                            </div>\n\n                            <div class=\"col-4 bs\">\n                                <div class=\"form-group mb-0\" v-if=\"pop_ticket.maintenance_provider == 'vendor' &&\n                                    pop_ticket.service_type\n                                    \">\n                                    <label>Service Type</label>\n                                    {{ pop_ticket.service_type }}\n                                </div>\n\n                                <div class=\"form-group mb-0\" v-if=\"pop_ticket.service_type == 'Free Service' &&\n                                    pop_ticket.free_service_no\n                                    \">\n                                    <label>Free service no:</label>\n                                    {{ pop_ticket.free_service_no }}/{{\n                                        pop_ticket.machine.free_service_no\n                                    }}\n                                </div>\n\n                                <div class=\"form-group mb-0\" v-if=\"pop_ticket.ticket_type\">\n                                    <label>Ticket Type</label>\n                                    {{ pop_ticket.ticket_type }}\n                                </div>\n                                <div class=\"form-group mb-0\" v-if=\"pop_ticket.status_during_complaint\">\n                                    <label>Status During Complain: </label>\n                                    {{ pop_ticket.status_during_complaint }}\n                                </div>\n\n                                <div class=\"form-group\">\n                                    <label style=\"margin: 0\">Machine's Problem: </label>\n                                    {{ pop_ticket.problem_description }}\n                                </div>\n                            </div>\n\n                            <div class=\"col-4 bs\">\n                                <div class=\"form-group mb-0\">\n                                    <label>Maintenance Provider</label>\n                                    {{ pop_ticket.maintenance_provider }}\n                                </div>\n\n                                <div class=\"form-group\">\n                                    <label>\n                                        {{\n                                            pop_ticket.maintenance_provider == \"user\"\n                                            ? \"User\"\n                                            : \"Vendor\"\n                                        }}\n                                    </label>\n                                    <template v-if=\"pop_ticket.maintenance_provider == 'vendor'\">\n                                        :\n                                        <span v-for=\"(vendor, index) in pop_ticket.all_vendors\" :key=\"'vm' + index\"\n                                            class=\"comma\">{{ vendor.name }}</span>\n                                        <span class=\"comma\"></span>\n                                    </template>\n                                    <template v-else>\n                                        <v-select label=\"name\" :reduce=\"(option) => option.id\" :options=\"users\"\n                                            placeholder=\"Enter users ...\" v-model=\"pop_ticket.user_id\" disabled>\n                                        </v-select>\n                                    </template>\n                                </div>\n                            </div>\n\n                            <div class=\"col-8 bs\" v-if=\"pop_ticket.stages\">\n                                <label style=\"margin: 0px\">Stages</label>\n                                <template v-for=\"(field, x) in pop_ticket.stages\">\n                                    <div class=\"row\" :key=\"'s' + x\" style=\"border: 0; padding-bottom: 8px\">\n                                        <div class=\"col-4\">\n                                            {{ field.stage_no }}\n                                        </div>\n                                        <div class=\"col-2\">\n                                            {{ field.stage_date | myDate }}\n                                        </div>\n                                        <div class=\"col-5\">\n                                            {{ field.description }}\n                                        </div>\n                                    </div>\n                                </template>\n                            </div>\n\n                            <div class=\"col-4 bs\">\n                                <div class=\"form-group\">\n                                    <label style=\"margin: 0\">Machine's Additional Problem: </label><br />\n                                    <p v-if=\"pop_ticket.problems\" v-for=\"(item, index) in pop_ticket.problems\"\n                                        :key=\"'pa' + index\" v-html=\"item.problem\"></p>\n                                </div>\n                            </div>\n\n                            <div class=\"col-3 bs\">\n                                <div class=\"form-group\">\n                                    <label style=\"margin: 0\">Estimated Material cost</label><br />\n                                    {{\n                                        (pop_ticket.estimated_material_cost +\n                                            pop_ticket.ad_estimated_material_cost)\n                                        | toCurrency\n                                    }}\n                                    ({{\n                                        pop_ticket.estimated_material_cost +\n                                        \"+\" +\n                                        pop_ticket.ad_estimated_material_cost\n                                    }})\n                                    <p>\n                                        <a class=\"btn btn-success mr-2\" :href=\"file.file\"\n                                            v-for=\"(file, x) in pop_ticket.estimated_material_files\" :key=\"file.id\"\n                                            target=\"_blank\">View\n                                            {{\n                                                pop_ticket.estimated_material_files.length > 1\n                                                ? x + 1\n                                                : \"\"\n                                            }}</a>\n                                    </p>\n                                </div>\n                            </div>\n                            <div class=\"col-3 bs\">\n                                <div class=\"form-group\">\n                                    <label style=\"margin: 0\">Estimated Service cost : </label><br />\n                                    {{\n                                        (pop_ticket.estimated_service_cost +\n                                            pop_ticket.ad_estimated_service_cost)\n                                        | toCurrency\n                                    }}\n                                    ({{\n                                        pop_ticket.estimated_service_cost +\n                                        \"+\" +\n                                        pop_ticket.ad_estimated_service_cost\n                                    }})\n                                    <p>\n                                        <a class=\"btn btn-success mr-2\" :href=\"file.file\"\n                                            v-for=\"(file, x) in pop_ticket.estimated_service_files\" :key=\"file.id\"\n                                            target=\"_blank\">View\n                                            {{\n                                                pop_ticket.estimated_service_files.length > 1\n                                                ? x + 1\n                                                : \"\"\n                                            }}</a>\n                                    </p>\n                                </div>\n                            </div>\n                            <div class=\"col-3 bs\">\n                                <div class=\"form-group\">\n                                    <label>Actual Material Cost : </label>\n                                    <span v-if=\"pop_ticket.actual_material_cost\">\n                                        {{ pop_ticket.actual_material_cost | toCurrency }}</span>\n                                    <p>\n                                        <a class=\"btn btn-success mr-2\" :href=\"file.file\" v-for=\"(\n                        file, x\n                      ) in pop_ticket.actual_estimated_material_files\" :key=\"file.id\" target=\"_blank\">View\n                                            {{\n                                                pop_ticket.actual_estimated_material_files.length > 1\n                                                ? x + 1\n                                                : \"\"\n                                            }}</a>\n                                    </p>\n                                </div>\n                            </div>\n\n                            <div class=\"col-3 bs\">\n                                <div class=\"form-group\">\n                                    <label>Actual Service Cost : </label>\n                                    <span v-if=\"pop_ticket.actual_service_cost\">{{\n                                        pop_ticket.actual_service_cost | toCurrency\n                                    }}</span>\n                                    <p>\n                                        <a class=\"btn btn-success mr-2\" :href=\"file.file\" v-for=\"(\n                        file, x\n                      ) in pop_ticket.actual_estimated_service_files\" :key=\"file.id\" target=\"_blank\">View\n                                            {{\n                                                pop_ticket.actual_estimated_service_files.length > 1\n                                                ? x + 1\n                                                : \"\"\n                                            }}</a>\n                                    </p>\n                                </div>\n                            </div>\n\n                            <div class=\"col-4 bs\">\n                                <div class=\"form-group\">\n                                    <label style=\"margin: 0\">Ticket No : </label>\n                                    {{ pop_ticket.ticket_no }}\n                                </div>\n                            </div>\n                            <div class=\"col-4 bs\">\n                                <div class=\"form-group\">\n                                    <label style=\"margin: 0\">Likely Date : </label>\n                                    {{ pop_ticket.likely_date | myDate }}\n                                </div>\n                            </div>\n\n                            <div class=\"col-4 bs\">\n                                <div class=\"form-group\">\n                                    <label style=\"margin: 0\">Actual Date : </label>\n                                    {{ pop_ticket.actual_date | myDate }}\n                                </div>\n                            </div>\n\n                            <div class=\"col-4 bs\" v-if=\"pop_ticket.current_run_hour\">\n                                <div class=\"form-group\">\n                                    <label>Current Run Hour : </label>\n                                    {{ pop_ticket.current_run_hour }}\n                                </div>\n                            </div>\n                            <div class=\"col-4 bs\" v-if=\"pop_ticket.current_km_run\">\n                                <div class=\"form-group\">\n                                    <label>Current KM Hour : </label>\n                                    {{ pop_ticket.current_km_run }}\n                                </div>\n                            </div>\n                            <div class=\"col-4 bs\" v-if=\"pop_ticket.current_production_fig\">\n                                <div class=\"form-group\">\n                                    <label>Current Production Fig : </label>\n                                    {{ pop_ticket.current_production_fig }}\n                                </div>\n                            </div>\n                            <div class=\"col-4 bs\" v-if=\"pop_ticket.production_loss\">\n                                <div class=\"form-group\">\n                                    <label>Production Loss : </label>\n                                    {{ pop_ticket.production_loss }}\n                                </div>\n                            </div>\n                            <div class=\"col-4 bs\" v-if=\"pop_ticket.production_loss_amount\">\n                                <div class=\"form-group\">\n                                    <label>Production Loss Amount : </label>\n                                    {{ pop_ticket.production_loss_amount | toCurrency }}\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n</template>\n\n<script>\nimport VueReadMoreSmooth from \"vue-read-more-smooth\";\nexport default {\n    components: { VueReadMoreSmooth },\n    data() {\n        return {\n            close_btn: true,\n            additionalMore: [],\n            problemsMore: [],\n            search_machines: [],\n            search_sites: [],\n            search: {\n                page: 1,\n                machine_id: \"\",\n                site_id: \"\",\n                complaint_nature: \"\",\n                ticket_type:\"\",\n                ticket: \"\",\n            },\n            popticket: {},\n            categories: [],\n            sub_categories: [],\n            sites: [],\n            selected_machine: \"\",\n            users: [],\n            machines: [],\n            Tickets: {},\n            editmode: false,\n            MaterialCost: null,\n            ServiceCost: null,\n            form: new Form({\n                id: \"\",\n                site_id: \"\",\n                category_id: \"\",\n                sub_category_id: \"\",\n                free_service_no: \"\",\n                ticket_type: \"Periodic Maintenance\",\n                service_type: \"Paid Service\",\n                machine_id: \"\",\n                ticket_no: \"\",\n                vendor_id: \"\",\n                user_id: \"\",\n                likely_date: \"\",\n                estimated_material_cost: \"\",\n                estimated_service_cost: \"\",\n                maintenance_provider: \"vendor\",\n                problem_description: \"\",\n                complaint_nature: \"Major\",\n            }),\n            stages: [\n                {\n                    id: \"\",\n                    stage_no: \"\",\n                    stage_date: \"\",\n                    description: \"\",\n                    file: \"\",\n                    new_file: \"\",\n                },\n            ],\n\n            formclose: new Form({\n                id: \"\",\n                machine_status: \"\",\n                edit_type: \"closeticket\",\n                ticket_type: \"Periodic Maintenance\",\n                actual_date: \"\",\n                actual_material_cost: \"\",\n                actual_service_cost: \"\",\n                current_run_hour: \"\",\n                current_km_run: \"\",\n                current_production_fig: \"\",\n                production_loss: \"\",\n                production_loss_amount: \"\",\n                status: \"Closed\",\n                vendor_resolve_date: \"\",\n                vendor_attain_date: \"\",\n                vendor_response_date: \"\",\n                vendor_call_date: \"\",\n                rca: \"\",\n            }),\n            pop_machine: \"\",\n            pop_ticket: \"\",\n            opn_stage: [\n                \"Vendor created\",\n                \"Vendor Assigned\",\n                \"Order issued\",\n                \"Payment under process\",\n                \"Payment Done\",\n                \"Logistics under process\",\n                \"Materials despatched\",\n                \"Material received at site\",\n                \"Maintainace under progress\",\n            ],\n            last_stage_index: 0,\n            last_stage_date: \"\",\n\n            json_fields: {\n                \"Ticket No\": \"ticket_no\",\n                \"Ticket Type\": \"ticket_type\",\n                Machine: {\n                    field: \"machine\",\n                    callback: (val) => {\n                        return val.name + \" - \" + val.far_no;\n                    },\n                },\n                \"Likely Date\": \"likely_date\",\n                \"Reversion Date\": \"reversion_date\",\n                \"Reversion Reason\": \"reversion_reason\",\n                \"Estimated Material Cost\": \"estimated_material_cost\",\n                \"Estimated Service Cost\": \"estimated_service_cost\",\n                \"Actual Date\": \"actual_date\",\n                \"Actual Material Cost\": \"actual_material_cost\",\n                \"Actual Service Cost\": \"actual_service_cost\",\n                \"Status\": \"status\",\n                \"Service Type\": \"service_type\",\n                \"Maintenance Provider\": \"maintenance_provider\",\n                \"Problem Description\": \"problem_description\",\n                \"Complaint Nature\": \"complaint_nature\",\n                \"Status During Complaint\": \"status_during_complaint\",\n            },\n            json_meta: [\n                [\n                    {\n                        key: \"charset\",\n                        value: \"utf-8\",\n                    },\n                ],\n            ],\n        };\n    },\n    methods: {\n        async reset_filter() {\n            this.search = {\n                page: 1,\n                machine_id: \"\",\n                site_id: \"\",\n                complaint_nature: \"\",\n                ticket_type: \"\",\n                ticket: \"\",\n            }\n        },\n        async export_csv() {\n            const response = await axios.get(\"api/ticket?export=1\", {\n                params: {\n                    search: this.search,\n                },\n            });\n            return response.data.data;\n        },\n        startDownload() {\n            Swal.fire({\n                title: \"Please Wait !\",\n                html: \"Data populating\", // add html attribute if you want or remove\n                allowOutsideClick: false,\n                onBeforeOpen: () => {\n                    Swal.showLoading();\n                },\n            });\n        },\n        finishDownload() {\n            Swal.close();\n        },\n        sclick(x, p = \"\") {\n            if (p) {\n                let a = this.problemsMore[x] ? false : true;\n                this.$set(this.problemsMore, x, a);\n            } else {\n                let a = this.additionalMore[x] ? false : true;\n                this.$set(this.additionalMore, x, a);\n            }\n        },\n        getLabel(val) {\n            if (typeof val === \"object\") {\n                return val.far_no + \" - \" + val.name;\n            } else {\n                return val;\n            }\n        },\n        viewModal(ticket) {\n            this.pop_ticket = \"\";\n\n            axios\n                .get(\"api/ticket/\" + ticket.id)\n                .then((res) => {\n                    this.pop_ticket = res.data.data;\n                })\n                .catch((err) => {\n                    this.pop_ticket = ticket;\n                });\n\n            axios.get(\"api/category/\" + ticket.category_id).then((res) => {\n                this.sub_categories = res.data.data;\n            });\n            $(\"#viewmodal\").modal(\"show\");\n        },\n        AddStage() {\n            this.stages.push({\n                id: \"\",\n                stage_no: \"\",\n                stage_date: \"\",\n                description: \"\",\n                file: \"\",\n                new_file: \"\",\n            });\n        },\n        async choose_stage_file(event, x) {\n            this.stages[x].new_file = event.target.files[0];\n        },\n\n        async uploadMaterialCost(event) {\n            this.MaterialCost = event.target.files;\n        },\n        async uploadServiceCost(event) {\n            this.ServiceCost = event.target.files;\n        },\n\n        getResults(page = 1) {\n            this.$Progress.start();\n            this.search.page = page;\n            axios\n                .get(\"/api/ticket\", {\n                    params: this.search,\n                })\n                .then((data) => {\n                    this.Tickets = data.data.data;\n                    this.additionalMore = new Array(this.Tickets.data.length).fill(false);\n                    this.problemsMore = new Array(this.Tickets.data.length).fill(false);\n                });\n            this.$Progress.finish();\n        },\n\n        calculate_loss() {\n            if (this.formclose.actual_date && this.pop_ticket.created_at) {\n                let a = new Date(this.formclose.actual_date).toISOString();\n                let b = new Date(this.pop_ticket.created_at).toISOString();\n                const dateB = moment(a);\n                const dateC = moment(b);\n\n\n                var Diff = dateB.diff(dateC, 'days') + 1;\n\n                let hrs = this.pop_machine.prdloss_hrs\n                let rate = this.pop_machine.prdloss_hr_rate\n                let tloss = (Diff * hrs);\n                this.formclose.production_loss_amount = (tloss * rate)\n                this.formclose.production_loss = tloss\n\n\nconsole.log(hrs,rate,Diff);\n\n\n            }\n\n        },\n        submitCloseTicket() {\n            this.$forceUpdate();\n            this.$validator.validateAll(\"closeticket\").then(async (valid) => {\n                if (valid) {\n                    let pop_loader = this.$loading.show({});\n                    let last_mDate = this.pop_machine.last_maintenances\n                        ? this.pop_machine.last_maintenances.datetime\n                        : this.pop_machine.last_maintenance_date;\n\n                    if (\n                        last_mDate &&\n                        this.formclose.actual_date &&\n                        Date.parse(\n                            moment(this.formclose.actual_date).format(\"MMM,DD YYYY\")\n                        ) < Date.parse(moment(last_mDate).format(\"MMM,DD YYYY\"))\n                    ) {\n                        pop_loader.hide();\n                        Swal.fire(\n                            \"You can not add previous date's data, Please remove record from maintenance list.\",\n                            \"\",\n                            \"warning\"\n                        );\n                    } else {\n                        this.close_btn = false;\n                        this.formclose\n                            .put(\"/api/ticket/\" + this.formclose.id)\n                            .then((response) => {\n                                if (response.data.success) {\n                                    $(\"#closemodal\").modal(\"hide\");\n                                    Toast.fire({\n                                        icon: \"success\",\n                                        title: response.data.message,\n                                    });\n                                    this.upload_files(this.formclose.id, \"actual\");\n                                    this.$validator.reset();\n                                    this.formclose.reset();\n                                    this.loadTickets();\n                                }\n                                this.close_btn = true;\n                                pop_loader.hide();\n                            })\n                            .catch(() => {\n                                this.close_btn = true;\n                                pop_loader.hide();\n                                if (typeof err.response.data != \"undefined\") {\n                                    this.$setErrorsFromResponse(err.response.data);\n                                }\n                            });\n                    }\n                }\n            });\n        },\n\n        closeModal(ticket) {\n            this.$validator.pause();\n            $(\"#closemodal\").modal(\"show\");\n            this.$validator.reset();\n            this.formclose.reset();\n            this.$refs.fileactualservice.value = null;\n            this.$refs.fileactualmaterial.value = null;\n            this.pop_ticket = ticket;\n            this.pop_machine = ticket.machine;\n            this.formclose.fill(ticket);\n            this.formclose.edit_type = \"closeticket\";\n            this.$validator.resume();\n        },\n        editModal(ticket) {\n            this.editmode = true;\n            this.$validator.pause();\n            this.form.reset();\n            this.pop_ticket = ticket;\n            if (this.$gate.isAdmin()) {\n                this.$refs.fileservice.value = null;\n                this.$refs.filematerial.value = null;\n            }\n            this.MaterialCost = null;\n            this.ServiceCost = null;\n            $(\"#addNew\").modal(\"show\");\n            this.form.fill(ticket);\n            this.form.likely_date = ticket.likely_date\n                ? new Date(ticket.likely_date).toISOString()\n                : \"\";\n            this.stages = [];\n            if (ticket.stages && ticket.stages.length > 0) {\n                this.stages = ticket.stages;\n            }\n            this.$validator.resume();\n        },\n        newModal() {\n            this.stages = [];\n            this.AddStage();\n            this.editmode = false;\n            this.$validator.reset();\n            this.$validator.pause();\n            this.form.reset();\n            if (this.$gate.isAdmin()) {\n                this.$refs.fileservice.value = null;\n                this.$refs.filematerial.value = null;\n            }\n            this.MaterialCost = null;\n            this.ServiceCost = null;\n            $(\"#addNew\").modal(\"show\");\n            this.$validator.resume();\n        },\n\n        loadTickets() {\n            // if (this.$gate.isAdmin()) {\n            let pop_loader = this.$loading.show({});\n            axios\n                .get(\"/api/ticket\", {\n                    params: this.search,\n                })\n                .then((data) => {\n                    this.Tickets = data.data.data;\n                    this.additionalMore = new Array(this.Tickets.data.length).fill(false);\n                    this.problemsMore = new Array(this.Tickets.data.length).fill(false);\n                    pop_loader.hide();\n                })\n                .catch(() => {\n                    pop_loader.hide();\n                });\n            //   }\n        },\n\n        async upload_files(id, isactual = false) {\n            let fl = 0;\n            if (this.MaterialCost) {\n                this.MaterialCost.forEach((file) => {\n                    var fd = new FormData();\n                    fd.append(`file`, file);\n                    if (isactual) {\n                        fd.append(`file_type`, \"Actual Estimated Material\");\n                    } else {\n                        fd.append(`file_type`, \"Estimated Material\");\n                    }\n                    fd.append(`ticket_id`, id);\n                    axios.post(\"api/ticket/files\", fd).then((res) => {\n                        console.log(\"gallery uploaded\");\n                    });\n                });\n            }\n            if (this.ServiceCost) {\n                this.ServiceCost.forEach((file) => {\n                    var fd = new FormData();\n                    fd.append(`file`, file);\n                    if (isactual) {\n                        fd.append(`file_type`, \"Actual Estimated Service\");\n                    } else {\n                        fd.append(`file_type`, \"Estimated Service\");\n                    }\n                    fd.append(`ticket_id`, id);\n                    axios.post(\"api/ticket/files\", fd).then((res) => {\n                        console.log(\"gallery uploaded\");\n                    });\n                });\n            }\n        },\n\n        async upload_stages(id) {\n            if (this.stages) {\n                this.stages.forEach((stage) => {\n                    var fd = new FormData();\n                    fd.append(`id`, stage.id);\n                    fd.append(`stage_no`, stage.stage_no);\n                    fd.append(`stage_date`, stage.stage_date);\n                    fd.append(`description`, stage.description);\n                    //fd.append(`new_file`, stage.new_file);\n                    // fd.append(`file`, stage.file);\n                    fd.append(`ticket_id`, id);\n                    axios.post(\"api/ticket/stages\", fd).then((res) => {\n                        console.log(\"stages uploaded\");\n                    });\n                });\n            }\n        },\n\n        submitTicket() {\n            this.$validator.validateAll().then(async (valid) => {\n                if (valid) {\n                    let pop_loader = this.$loading.show({\n                        container: this.$refs.vps_submit_pop,\n                    });\n                    if (this.form.id) {\n                        this.form\n                            .put(\"/api/ticket/\" + this.form.id)\n                            .then((response) => {\n                                if (response.data.success) {\n                                    $(\"#addNew\").modal(\"hide\");\n                                    Toast.fire({\n                                        icon: \"success\",\n                                        title: response.data.message,\n                                    });\n                                    this.upload_stages(this.form.id);\n                                    this.upload_files(this.form.id);\n                                    this.loadTickets();\n                                }\n                                pop_loader.hide();\n                            })\n                            .catch(() => {\n                                pop_loader.hide();\n                                if (typeof err.response.data != \"undefined\") {\n                                    this.$setErrorsFromResponse(err.response.data);\n                                }\n                            });\n                    } else {\n                        this.form\n                            .post(\"/api/ticket\")\n                            .then((response) => {\n                                if (response.data.success) {\n                                    $(\"#addNew\").modal(\"hide\");\n                                    Toast.fire({\n                                        icon: \"success\",\n                                        title: response.data.message,\n                                    });\n\n                                    this.upload_files(response.data.data.id);\n                                    this.loadTickets();\n                                }\n                                pop_loader.hide();\n                            })\n                            .catch(() => {\n                                pop_loader.hide();\n                                if (typeof err.response.data != \"undefined\") {\n                                    this.$setErrorsFromResponse(err.response.data);\n                                }\n                            });\n                    }\n                }\n            });\n        },\n\n        async check_free_service() {\n            if (this.selected_machine) {\n                if (\n                    this.selected_machine.completed_free_service >=\n                    this.selected_machine.free_service_no\n                ) {\n                    this.form.service_type = \"Paid Service\";\n                    this.form.free_service_no = \"\";\n                } else {\n                    this.form.free_service_no =\n                        this.selected_machine.completed_free_service + 1;\n                }\n\n                if (\n                    this.selected_machine &&\n                    this.selected_machine.machine_type == \"New\" &&\n                    this.form.service_type == \"Free Service\"\n                ) {\n                    //  this.selected_machine.free_service_no\n                }\n            }\n        },\n\n        async get_machine() {\n            axios\n                .get(\"/api/ticket_machine\", {\n                    params: {\n                        site_id: this.form.site_id,\n                        category_id: this.form.category_id,\n                        sub_category_id: this.form.sub_category_id,\n                    },\n                })\n                .then((response) => {\n                    this.machines = response.data.data;\n                })\n                .catch(() => console.warn(\"Oh. Something went wrong\"));\n        },\n    },\n    mounted() { },\n    created() {\n        this.loadTickets();\n    },\n    beforeCreate() {\n        axios.get(\"api/get_pre_machine\").then((res) => {\n            this.categories = res.data.data.Category;\n            this.sites = res.data.data.sites;\n        });\n        axios\n            .get(\"/api/initial_ticket\")\n            .then((response) => {\n                this.users = response.data.data.vendors;\n                this.machines = response.data.data.machines;\n                this.search_machines = response.data.data.machines;\n                this.search_sites = response.data.data.sites;\n            })\n            .catch(() => console.warn(\"Oh. Something went wrong\"));\n    },\n    watch: {\n        \"formclose.machine_status\"(n) {\n            if (n == \"Non Repairable\") {\n                this.formclose.actual_material_cost = 0;\n                this.formclose.actual_service_cost = 0;\n            } else {\n                this.formclose.actual_material_cost = \"\";\n                this.formclose.actual_service_cost = \"\";\n            }\n        },\n        async \"form.sub_category_id\"(n, o) {\n            if (n) {\n                this.get_machine();\n            }\n        },\n        async \"form.site_id\"(n, o) {\n            if (n) {\n                this.get_machine();\n            }\n        },\n\n        \"form.category_id\": {\n            handler: function (n, o) {\n                if (n) {\n                    axios.get(\"api/category/\" + n).then((res) => {\n                        this.sub_categories = res.data.data;\n                    });\n                    this.get_machine();\n                }\n            },\n            deep: true,\n            initial: true,\n        },\n        stages: {\n            handler: function (n, o) {\n                if (n && n.length > 0) {\n                    let la = n[n.length - 1];\n                    if (la.stage_no)\n                        this.last_stage_index = this.opn_stage.indexOf(la.stage_no);\n                    if (la.stage_date)\n                        this.last_stage_date = new Date(la.stage_date).toISOString();\n                } else {\n                    this.last_stage_index = 0;\n                    if (this.pop_ticket && this.pop_ticket.created_at) {\n                        this.last_stage_date = new Date(\n                            this.pop_ticket.created_at\n                        ).toISOString();\n                    } else {\n                        this.last_stage_date = new Date().toISOString();\n                    }\n                }\n            },\n            deep: true,\n            initial: true,\n        },\n\n        async \"form.maintenance_provider\"(n) {\n            if (n != \"vendor\") {\n                this.form.service_type = \"Paid Service\";\n            }\n            axios\n                .get(\"api/user/list\", {\n                    params: {\n                        type: n,\n                    },\n                })\n                .then((response) => {\n                    this.users = response.data.data;\n                })\n                .catch(() => console.warn(\"Oh. Something went wrong\"));\n        },\n\n        async \"form.machine_id\"(n) {\n            this.selected_machine = this.machines.find((x) => x.id === n);\n            await this.check_free_service();\n        },\n        async \"form.service_type\"(n) {\n            if (n == \"Free Service\") {\n                await this.check_free_service();\n            }\n        },\n        async \"formclose.actual_date\"() {\n            this.calculate_loss();\n        }\n    },\n};\n</script>\n<style>\n.bs {\n    border: 1px solid #d2d1d1a8;\n    border-radius: 5px;\n}\n\n.comma~.comma:not(:empty):before {\n    content: \", \";\n}\n\n.rmore {\n    color: blue;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0341cdd6\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/Tickets/index.vue":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0341cdd6","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/Tickets/index.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************/
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
  return _c("section", { staticClass: "content" }, [
    _c("div", { staticClass: "container-fluid" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-header" }, [
              _c("h3", { staticClass: "card-title" }, [_vm._v("Ticket List")]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "card-tools" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-sm btn-primary",
                      attrs: { to: "/ticket/add" },
                      on: { click: _vm.newModal }
                    },
                    [
                      _c("i", { staticClass: "fa fa-plus-square" }),
                      _vm._v(
                        "\n                                    Add New\n                                "
                      )
                    ]
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body p-2" }, [
              _c(
                "form",
                {
                  attrs: { autocomplete: "off", "data-vv-scope": "searchfr" },
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.getResults()
                    }
                  }
                },
                [
                  _c(
                    "div",
                    { staticClass: "form-row" },
                    [
                      _c(
                        "div",
                        { staticClass: "col" },
                        [
                          _c("v-select", {
                            attrs: {
                              label: "name",
                              "get-option-label": _vm.getLabel,
                              reduce: function(option) {
                                return option.id
                              },
                              options: _vm.search_machines,
                              placeholder: "Enter machines ...",
                              name: "machine_id"
                            },
                            model: {
                              value: _vm.search.machine_id,
                              callback: function($$v) {
                                _vm.$set(_vm.search, "machine_id", $$v)
                              },
                              expression: "search.machine_id"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.search.ticket,
                              expression: "search.ticket"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            placeholder: "Enter ticket ...",
                            name: "ticket"
                          },
                          domProps: { value: _vm.search.ticket },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.search,
                                "ticket",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col" },
                        [
                          _c("v-select", {
                            attrs: {
                              label: "site_name",
                              reduce: function(option) {
                                return option.id
                              },
                              options: _vm.search_sites,
                              placeholder: "Select Site...",
                              name: "site_id"
                            },
                            model: {
                              value: _vm.search.site_id,
                              callback: function($$v) {
                                _vm.$set(_vm.search, "site_id", $$v)
                              },
                              expression: "search.site_id"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col" },
                        [
                          _c("v-select", {
                            attrs: {
                              label: "site_name",
                              options: ["Open", "Closed"],
                              placeholder: "Select Status...",
                              name: "status"
                            },
                            model: {
                              value: _vm.search.status,
                              callback: function($$v) {
                                _vm.$set(_vm.search, "status", $$v)
                              },
                              expression: "search.status"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col" },
                        [
                          _c("v-select", {
                            attrs: {
                              label: "site_name",
                              options: ["Major", "Minor"],
                              placeholder: "Select Complaint Nature...",
                              name: "complaint_nature"
                            },
                            model: {
                              value: _vm.search.complaint_nature,
                              callback: function($$v) {
                                _vm.$set(_vm.search, "complaint_nature", $$v)
                              },
                              expression: "search.complaint_nature"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col" },
                        [
                          _c("v-select", {
                            attrs: {
                              label: "site_name",
                              options: [
                                "Breakdown Maintenance",
                                "Periodic Maintenance"
                              ],
                              placeholder: "Select Ticket Type...",
                              name: "ticket_type"
                            },
                            model: {
                              value: _vm.search.ticket_type,
                              callback: function($$v) {
                                _vm.$set(_vm.search, "ticket_type", $$v)
                              },
                              expression: "search.ticket_type"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-success",
                          attrs: { type: "submit" }
                        },
                        [_vm._v("Search")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-info ml-2",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              return _vm.reset_filter()
                            }
                          }
                        },
                        [_vm._v("Reset")]
                      ),
                      _vm._v(" "),
                      _c(
                        "download-excel",
                        {
                          staticClass: "btn btn-warning ml-2",
                          attrs: {
                            fetch: _vm.export_csv,
                            fields: _vm.json_fields,
                            "before-generate": _vm.startDownload,
                            "before-finish": _vm.finishDownload,
                            worksheet: "My Worksheet",
                            type: "csv",
                            name: "ticket_list.csv"
                          }
                        },
                        [
                          _c("span", { staticClass: "labelText" }, [
                            _c("i", {
                              staticClass: "fa fa-file-excel-o",
                              attrs: { "aria-hidden": "true" }
                            }),
                            _vm._v(
                              "\n                                            Export as CSV"
                            )
                          ])
                        ]
                      )
                    ],
                    1
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card-body ticketLstTbl table-responsive p-0" },
              [
                _c("table", { staticClass: "table table-hover" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.Tickets.data, function(ticket, x) {
                      return _c("tr", { key: ticket.id }, [
                        _c("td", [_vm._v(_vm._s(ticket.ticket_no))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(ticket.ticket_type))]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-capitalize" }, [
                          _vm._v(_vm._s(ticket.machine.name))
                        ]),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            ticket.problem_description
                              ? [
                                  _c(
                                    "VueReadMoreSmooth",
                                    {
                                      attrs: {
                                        open: _vm.problemsMore[x],
                                        "no-button": "",
                                        "no-shadow": ""
                                      },
                                      on: {
                                        "update:open": function($event) {
                                          return _vm.$set(
                                            _vm.problemsMore,
                                            x,
                                            $event
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c("p", [
                                        _vm._v(
                                          _vm._s(ticket.problem_description)
                                        )
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass: "rmore",
                                      on: {
                                        click: function($event) {
                                          return _vm.sclick(x, "p")
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "..." +
                                          _vm._s(
                                            _vm.problemsMore[x]
                                              ? "Less"
                                              : "More"
                                          )
                                      )
                                    ]
                                  )
                                ]
                              : _vm._e()
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            ticket.problems && ticket.problems.length > 0
                              ? [
                                  _c(
                                    "VueReadMoreSmooth",
                                    {
                                      attrs: {
                                        open: _vm.additionalMore[x],
                                        "no-button": "",
                                        "no-shadow": ""
                                      },
                                      on: {
                                        "update:open": function($event) {
                                          return _vm.$set(
                                            _vm.additionalMore,
                                            x,
                                            $event
                                          )
                                        }
                                      }
                                    },
                                    _vm._l(ticket.problems, function(
                                      item,
                                      index
                                    ) {
                                      return ticket.problems
                                        ? _c("p", {
                                            key: "p" + index,
                                            domProps: {
                                              innerHTML: _vm._s(item.problem)
                                            }
                                          })
                                        : _vm._e()
                                    }),
                                    0
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass: "rmore",
                                      on: {
                                        click: function($event) {
                                          return _vm.sclick(x)
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "..." +
                                          _vm._s(
                                            _vm.additionalMore[x]
                                              ? "Less"
                                              : "More"
                                          )
                                      )
                                    ]
                                  )
                                ]
                              : _vm._e()
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            "\n                                            " +
                              _vm._s(
                                ticket.machine.far_no +
                                  " - " +
                                  ticket.machine.name +
                                  " - " +
                                  (ticket.machine.machine_model
                                    ? ticket.machine.machine_model.name
                                    : "null") +
                                  " - " +
                                  ticket.machine.machine_sr_no
                              ) +
                              "\n                                        "
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(ticket.site ? ticket.site.site_name : "-")
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(ticket.complaint_nature))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(ticket.created_by_name))]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(_vm._s(_vm._f("myDate")(ticket.created_at)))
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(_vm._s(_vm._f("myDate")(ticket.likely_date)))
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(_vm._f("myDate")(ticket.reversion_date))
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            "\n                                            " +
                              _vm._s(
                                ticket.status.toLowerCase() == "created by user"
                                  ? "Open"
                                  : ticket.status
                              ) +
                              "\n                                        "
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            _c(
                              "a",
                              {
                                staticClass: "btn btn-warning btn-sm",
                                attrs: { href: "javascript:void(0);" },
                                on: {
                                  click: function($event) {
                                    return _vm.viewModal(ticket)
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                                View\n                                            "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            ticket.status != "Closed" && _vm.$gate.isAdmin()
                              ? _c(
                                  "router-link",
                                  {
                                    staticClass: "btn btn-success btn-sm",
                                    attrs: { to: "/ticket/edit/" + ticket.id }
                                  },
                                  [_vm._v("Edit")]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            ticket.status != "Closed" && _vm.$gate.isAdmin()
                              ? _c(
                                  "a",
                                  {
                                    staticClass: "btn btn-danger btn-sm",
                                    attrs: {
                                      href: "javascript:void(0);",
                                      title: "Close ticket"
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.closeModal(ticket)
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                                Close\n                                            "
                                    )
                                  ]
                                )
                              : _vm._e()
                          ],
                          1
                        )
                      ])
                    }),
                    0
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card-footer" },
              [
                _c("pagination", {
                  attrs: { data: _vm.Tickets },
                  on: { "pagination-change-page": _vm.getResults }
                })
              ],
              1
            )
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "closemodal",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "closemodal",
          "aria-hidden": "true"
        }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog modal-lg", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "form",
                {
                  attrs: { "data-vv-scope": "closeticket" },
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.submitCloseTicket()
                    }
                  }
                },
                [
                  _c("div", { staticClass: "modal-body" }, [
                    _vm.pop_machine
                      ? _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-sm" }, [
                            _c("p", [
                              _c("strong", [_vm._v("Far No :")]),
                              _vm._v(
                                " " +
                                  _vm._s(_vm.pop_machine.far_no) +
                                  "\n                                        "
                              ),
                              _c("br"),
                              _vm._v(" "),
                              _c("strong", [_vm._v("Machine Name :")]),
                              _vm._v(
                                " " +
                                  _vm._s(_vm.pop_machine.name) +
                                  "\n                                        "
                              ),
                              _c("br"),
                              _vm._v(" "),
                              _c("strong", [_vm._v("Machine Model :")]),
                              _vm._v(
                                "\n                                        " +
                                  _vm._s(
                                    _vm.pop_machine.machine_model
                                      ? _vm.pop_machine.machine_model.name
                                      : "-"
                                  ) +
                                  "\n                                        "
                              ),
                              _c("br"),
                              _vm._v(" "),
                              _c("strong", [_vm._v("Machine Chassis No :")]),
                              _vm._v(
                                "\n                                        " +
                                  _vm._s(_vm.pop_machine.chassis_no) +
                                  "\n                                    "
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-sm" }, [
                            _c("p", [
                              _c("strong", [_vm._v("Machine Sl No:")]),
                              _vm._v(
                                "\n                                        " +
                                  _vm._s(_vm.pop_machine.machine_sr_no) +
                                  "\n                                        "
                              ),
                              _c("br"),
                              _vm._v(" "),
                              _c("strong", [_vm._v("Machine Regn No :")]),
                              _vm._v(
                                " " +
                                  _vm._s(_vm.pop_machine.regn_no) +
                                  "\n                                        "
                              ),
                              _c("br"),
                              _vm._v(" "),
                              _c("strong", [_vm._v("Machine Engine No :")]),
                              _vm._v(
                                "\n                                        " +
                                  _vm._s(_vm.pop_machine.engine_no) +
                                  "\n                                        "
                              ),
                              _c("br"),
                              _vm._v(" "),
                              _c("strong", [_vm._v("Ticket No :")]),
                              _vm._v(
                                " " +
                                  _vm._s(
                                    _vm.pop_ticket
                                      ? _vm.pop_ticket.ticket_no
                                      : "-"
                                  ) +
                                  "\n                                    "
                              )
                            ])
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _vm._v(
                        "\n                                " +
                          _vm._s(_vm.verrors.closeticket) +
                          "\n                                "
                      ),
                      _vm.pop_ticket && _vm.pop_ticket.likely_date
                        ? _c("div", { staticClass: "col-6" }, [
                            _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _c("label", [_vm._v("Actual Date")]),
                                _vm._v(" "),
                                _c("datetime", {
                                  directives: [
                                    {
                                      name: "validate",
                                      rawName: "v-validate",
                                      value: "required",
                                      expression: "'required'"
                                    }
                                  ],
                                  class: {
                                    "is-invalid": _vm.verrors.has(
                                      "closeticket.actual_date"
                                    )
                                  },
                                  attrs: {
                                    "value-zone": "Asia/Kolkata",
                                    name: "actual_date",
                                    "input-class": "form-control",
                                    "data-vv-as": "Actual Date",
                                    "min-datetime": new Date(
                                      _vm.pop_ticket.created_at
                                    ).toISOString(),
                                    "max-datetime": new Date().toISOString()
                                  },
                                  model: {
                                    value: _vm.formclose.actual_date,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.formclose,
                                        "actual_date",
                                        $$v
                                      )
                                    },
                                    expression: "formclose.actual_date"
                                  }
                                }),
                                _vm._v(" "),
                                _vm.verrors.has("closeticket.actual_date")
                                  ? _c(
                                      "div",
                                      {
                                        staticClass:
                                          "help-block invalid-feedback"
                                      },
                                      [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(
                                              _vm.verrors.first(
                                                "closeticket.actual_date"
                                              )
                                            ) +
                                            "\n                                        "
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ],
                              1
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-6" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [_vm._v("Machine Status")]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.formclose.machine_status,
                                  expression: "formclose.machine_status"
                                },
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required",
                                  expression: "'required'"
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.verrors.has(
                                  "closeticket.machine_status"
                                )
                              },
                              attrs: {
                                name: "machine_status",
                                "data-vv-as": "machine status"
                              },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.formclose,
                                    "machine_status",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            [
                              _c("option", { attrs: { value: "Running" } }, [
                                _vm._v("Running")
                              ]),
                              _vm._v(" "),
                              _c(
                                "option",
                                { attrs: { value: "Running with Problem" } },
                                [
                                  _vm._v(
                                    "\n                                                Running with Problem\n                                            "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "option",
                                { attrs: { value: "Non Repairable" } },
                                [_vm._v("Non Repairable")]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _vm.verrors.has("closeticket.machine_status")
                            ? _c(
                                "div",
                                { staticClass: "help-block invalid-feedback" },
                                [
                                  _vm._v(
                                    "\n                                            " +
                                      _vm._s(
                                        _vm.verrors.first(
                                          "closeticket.machine_status"
                                        )
                                      ) +
                                      "\n                                        "
                                  )
                                ]
                              )
                            : _vm._e()
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-4" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [_vm._v("Estimated Material cost")]),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: { type: "text", readonly: "" },
                            domProps: {
                              value:
                                _vm.pop_ticket.estimated_material_cost +
                                _vm.pop_ticket.ad_estimated_material_cost +
                                "(" +
                                _vm.pop_ticket.estimated_material_cost +
                                "+" +
                                _vm.pop_ticket.ad_estimated_material_cost +
                                ")"
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-4" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [_vm._v("Actual Material cost")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.formclose.actual_material_cost,
                                expression: "formclose.actual_material_cost"
                              },
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.verrors.has(
                                "closeticket.actual_material_cost"
                              )
                            },
                            attrs: {
                              type: "text",
                              name: "actual_material_cost",
                              "data-vv-as": "Actual Material cost",
                              readonly:
                                _vm.formclose.machine_status == "Non Repairable"
                            },
                            domProps: {
                              value: _vm.formclose.actual_material_cost
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.formclose,
                                  "actual_material_cost",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.verrors.has("closeticket.actual_material_cost")
                            ? _c(
                                "div",
                                { staticClass: "help-block invalid-feedback" },
                                [
                                  _vm._v(
                                    "\n                                            " +
                                      _vm._s(
                                        _vm.verrors.first(
                                          "closeticket.actual_material_cost"
                                        )
                                      ) +
                                      "\n                                        "
                                  )
                                ]
                              )
                            : _vm._e()
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-4" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [_vm._v(" Actual Material cost File")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "",
                                expression: "''"
                              }
                            ],
                            ref: "fileactualmaterial",
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.verrors.has(
                                "closeticket.material_cost"
                              )
                            },
                            attrs: {
                              type: "file",
                              multiple: "",
                              name: "material_cost",
                              "data-vv-as": "Actual Material cost"
                            },
                            on: { change: _vm.uploadMaterialCost }
                          }),
                          _vm._v(" "),
                          _vm.pop_ticket.actual_estimated_material_files
                            ? _c(
                                "div",
                                { staticClass: "clearfix" },
                                _vm._l(
                                  _vm.pop_ticket
                                    .actual_estimated_material_files,
                                  function(item, x) {
                                    return _c(
                                      "a",
                                      {
                                        key: item.id,
                                        attrs: {
                                          href: item.file,
                                          target: "_blank"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "View\n                                                " +
                                            _vm._s(
                                              _vm.pop_ticket
                                                .actual_estimated_material_files
                                                .length > 1
                                                ? x + 1
                                                : ""
                                            )
                                        )
                                      ]
                                    )
                                  }
                                ),
                                0
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.verrors.has("closeticket.material_cost")
                            ? _c(
                                "div",
                                { staticClass: "help-block invalid-feedback" },
                                [
                                  _vm._v(
                                    "\n                                            " +
                                      _vm._s(
                                        _vm.verrors.first(
                                          "closeticket.material_cost"
                                        )
                                      ) +
                                      "\n                                        "
                                  )
                                ]
                              )
                            : _vm._e()
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-4" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [_vm._v("Estimated Service cost")]),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: { type: "text", readonly: "" },
                            domProps: {
                              value:
                                _vm.pop_ticket.estimated_service_cost +
                                _vm.pop_ticket.ad_estimated_service_cost +
                                "(" +
                                _vm.pop_ticket.estimated_service_cost +
                                "+" +
                                _vm.pop_ticket.ad_estimated_service_cost +
                                ")"
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-4" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [_vm._v("Actual Service cost")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.formclose.actual_service_cost,
                                expression: "formclose.actual_service_cost"
                              },
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.verrors.has(
                                "closeticket.actual_service_cost"
                              )
                            },
                            attrs: {
                              type: "text",
                              name: "actual_service_cost",
                              "data-vv-as": "Actual Service cost",
                              readonly:
                                _vm.formclose.machine_status == "Non Repairable"
                            },
                            domProps: {
                              value: _vm.formclose.actual_service_cost
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.formclose,
                                  "actual_service_cost",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.verrors.has("closeticket.actual_service_cost")
                            ? _c(
                                "div",
                                { staticClass: "help-block invalid-feedback" },
                                [
                                  _vm._v(
                                    "\n                                            " +
                                      _vm._s(
                                        _vm.verrors.first(
                                          "closeticket.actual_service_cost"
                                        )
                                      ) +
                                      "\n                                        "
                                  )
                                ]
                              )
                            : _vm._e()
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-4" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [_vm._v(" Actual Service cost File ")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "",
                                expression: "''"
                              }
                            ],
                            ref: "fileactualservice",
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.verrors.has(
                                "closeticket.service_cost"
                              )
                            },
                            attrs: {
                              type: "file",
                              multiple: "",
                              name: "service_cost",
                              "data-vv-as": "Actual Service cost"
                            },
                            on: { change: _vm.uploadServiceCost }
                          }),
                          _vm._v(" "),
                          _vm.pop_ticket.actual_estimated_service_files
                            ? _c(
                                "div",
                                { staticClass: "clearfix" },
                                _vm._l(
                                  _vm.pop_ticket.actual_estimated_service_files,
                                  function(item, x) {
                                    return _c(
                                      "a",
                                      {
                                        key: item.id,
                                        attrs: {
                                          href: item.file,
                                          target: "_blank"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "View\n                                                " +
                                            _vm._s(
                                              _vm.pop_ticket
                                                .actual_estimated_service_files
                                                .length > 1
                                                ? x + 1
                                                : ""
                                            )
                                        )
                                      ]
                                    )
                                  }
                                ),
                                0
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.verrors.has("closeticket.service_cost")
                            ? _c(
                                "div",
                                { staticClass: "help-block invalid-feedback" },
                                [
                                  _vm._v(
                                    "\n                                            " +
                                      _vm._s(
                                        _vm.verrors.first(
                                          "closeticket.service_cost"
                                        )
                                      ) +
                                      "\n                                        "
                                  )
                                ]
                              )
                            : _vm._e()
                        ])
                      ]),
                      _vm._v(" "),
                      _vm.pop_machine.is_consumtion_hr_run
                        ? _c("div", { staticClass: "col-6" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [_vm._v("Current Run hour ")]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.formclose.current_run_hour,
                                    expression: "formclose.current_run_hour"
                                  },
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: {
                                      required: true,
                                      decimal: 2,
                                      min_value: _vm.pop_machine
                                        .last_maintenances
                                        ? _vm.pop_machine.last_maintenances
                                            .run_hour
                                        : _vm.pop_machine.last_hr_run
                                    },
                                    expression:
                                      "{\n    required: true,\n    decimal: 2,\n    min_value: pop_machine.last_maintenances\n        ? pop_machine.last_maintenances.run_hour\n        : pop_machine.last_hr_run,\n}"
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.verrors.has(
                                    "closeticket.current_run_hour"
                                  )
                                },
                                attrs: {
                                  name: "current_run_hour",
                                  "data-vv-as": "Current Run hour"
                                },
                                domProps: {
                                  value: _vm.formclose.current_run_hour
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.formclose,
                                      "current_run_hour",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _vm.verrors.has("closeticket.current_run_hour")
                                ? _c(
                                    "div",
                                    {
                                      staticClass: "help-block invalid-feedback"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                            " +
                                          _vm._s(
                                            _vm.verrors.first(
                                              "closeticket.current_run_hour"
                                            )
                                          ) +
                                          "\n                                        "
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.pop_machine.is_consumtion_km_run
                        ? _c("div", { staticClass: "col-6" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [_vm._v(" Current KM Run ")]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.formclose.current_km_run,
                                    expression: "formclose.current_km_run"
                                  },
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: {
                                      required: true,
                                      decimal: 2,
                                      min_value: _vm.pop_machine
                                        .last_maintenances
                                        ? _vm.pop_machine.last_maintenances
                                            .km_run
                                        : _vm.pop_machine.last_km_run
                                    },
                                    expression:
                                      "{\n    required: true,\n    decimal: 2,\n    min_value: pop_machine.last_maintenances\n        ? pop_machine.last_maintenances.km_run\n        : pop_machine.last_km_run,\n}"
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.verrors.has(
                                    "closeticket.current_km_run"
                                  )
                                },
                                attrs: {
                                  name: "current_km_run",
                                  "data-vv-as": "Current KM hour"
                                },
                                domProps: {
                                  value: _vm.formclose.current_km_run
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.formclose,
                                      "current_km_run",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _vm.verrors.has("closeticket.current_km_run")
                                ? _c(
                                    "div",
                                    {
                                      staticClass: "help-block invalid-feedback"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                            " +
                                          _vm._s(
                                            _vm.verrors.first(
                                              "closeticket.current_km_run"
                                            )
                                          ) +
                                          "\n                                        "
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.pop_machine.is_production_fig
                        ? _c("div", { staticClass: "col-6" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [_vm._v(" Current Production fig ")]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.formclose.current_production_fig,
                                    expression:
                                      "formclose.current_production_fig"
                                  },
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: {
                                      required: true,
                                      decimal: 2,
                                      min_value: _vm.pop_machine
                                        .last_maintenances
                                        ? _vm.pop_machine.last_maintenances
                                            .production_fig
                                        : _vm.pop_machine
                                            .periodic_maintenance_breakdown
                                    },
                                    expression:
                                      "{\n    required: true,\n    decimal: 2,\n    min_value: pop_machine.last_maintenances\n        ? pop_machine.last_maintenances.production_fig\n        : pop_machine.periodic_maintenance_breakdown,\n}"
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.verrors.has(
                                    "closeticket.current_production_fig"
                                  )
                                },
                                attrs: {
                                  name: "current_production_fig",
                                  "data-vv-as": "Current Production fig"
                                },
                                domProps: {
                                  value: _vm.formclose.current_production_fig
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.formclose,
                                      "current_production_fig",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _vm.verrors.has(
                                "closeticket.current_production_fig"
                              )
                                ? _c(
                                    "div",
                                    {
                                      staticClass: "help-block invalid-feedback"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                            " +
                                          _vm._s(
                                            _vm.verrors.first(
                                              "closeticket.current_production_fig"
                                            )
                                          ) +
                                          "\n                                        "
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.formclose.ticket_type == "Breakdown Maintenance"
                        ? _c("div", { staticClass: "col-6" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [_vm._v("Production Loss")]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.formclose.production_loss,
                                    expression: "formclose.production_loss"
                                  },
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: "required",
                                    expression: "'required'"
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.verrors.has(
                                    "closeticket.production_loss"
                                  )
                                },
                                attrs: {
                                  name: "production_loss",
                                  "data-vv-as": "Production Loss",
                                  readonly: ""
                                },
                                domProps: {
                                  value: _vm.formclose.production_loss
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.formclose,
                                      "production_loss",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _vm.verrors.has("closeticket.production_loss")
                                ? _c(
                                    "div",
                                    {
                                      staticClass: "help-block invalid-feedback"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                            " +
                                          _vm._s(
                                            _vm.verrors.first(
                                              "closeticket.production_loss"
                                            )
                                          ) +
                                          "\n                                        "
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.formclose.ticket_type == "Breakdown Maintenance"
                        ? _c("div", { staticClass: "col-6" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [_vm._v("Production loss amount")]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.formclose.production_loss_amount,
                                    expression:
                                      "formclose.production_loss_amount"
                                  },
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: "required",
                                    expression: "'required'"
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.verrors.has(
                                    "closeticket.production_loss_amount"
                                  )
                                },
                                attrs: {
                                  name: "production_loss_amount",
                                  "data-vv-as": "Current Production fig",
                                  readonly: ""
                                },
                                domProps: {
                                  value: _vm.formclose.production_loss_amount
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.formclose,
                                      "production_loss_amount",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _vm.verrors.has(
                                "closeticket.production_loss_amount"
                              )
                                ? _c(
                                    "div",
                                    {
                                      staticClass: "help-block invalid-feedback"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                            " +
                                          _vm._s(
                                            _vm.verrors.first(
                                              "closeticket.production_loss_amount"
                                            )
                                          ) +
                                          "\n                                        "
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-6" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [_vm._v("Root Cause Analysis")]),
                          _vm._v(" "),
                          _c("textarea", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.formclose.rca,
                                expression: "formclose.rca"
                              },
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.verrors.has("closeticket.rca")
                            },
                            attrs: { rows: "1", name: "rca" },
                            domProps: { value: _vm.formclose.rca },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.formclose,
                                  "rca",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.verrors.has("closeticket.rca")
                            ? _c(
                                "div",
                                { staticClass: "help-block invalid-feedback" },
                                [
                                  _vm._v(
                                    "\n                                            " +
                                      _vm._s(
                                        _vm.verrors.first("closeticket.rca")
                                      ) +
                                      "\n                                        "
                                  )
                                ]
                              )
                            : _vm._e()
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "modal-footer" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-secondary",
                        attrs: { type: "button", "data-dismiss": "modal" }
                      },
                      [
                        _vm._v(
                          "\n                                Close\n                            "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _vm.close_btn
                      ? _c(
                          "button",
                          {
                            staticClass: "btn btn-primary",
                            attrs: { type: "submit" }
                          },
                          [
                            _vm._v(
                              "\n                                Close Ticket\n                            "
                            )
                          ]
                        )
                      : _c(
                          "button",
                          {
                            staticClass: "btn btn-primary",
                            attrs: { type: "button" }
                          },
                          [
                            _vm._v(
                              "\n                                Processing\n                            "
                            )
                          ]
                        )
                  ])
                ]
              )
            ])
          ]
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "viewmodal",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "viewmodal",
          "aria-hidden": "true"
        }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog modal-lg", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(2),
              _vm._v(" "),
              _vm.pop_ticket
                ? _c("div", { staticClass: "modal-body" }, [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-4 bs" }, [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", [_vm._v("Machine Site")]),
                            _vm._v(" "),
                            _c("v-select", {
                              attrs: {
                                label: "site_name",
                                reduce: function(option) {
                                  return option.id
                                },
                                options: _vm.sites,
                                placeholder: "Choose Site ...",
                                disabled: ""
                              },
                              model: {
                                value: _vm.pop_ticket.site_id,
                                callback: function($$v) {
                                  _vm.$set(_vm.pop_ticket, "site_id", $$v)
                                },
                                expression: "pop_ticket.site_id"
                              }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-4 bs" }, [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", [_vm._v("Machine Category")]),
                            _vm._v(" "),
                            _c("v-select", {
                              attrs: {
                                label: "name",
                                reduce: function(option) {
                                  return option.id
                                },
                                options: _vm.categories,
                                placeholder: "Choose Category ...",
                                disabled: ""
                              },
                              model: {
                                value: _vm.pop_ticket.category_id,
                                callback: function($$v) {
                                  _vm.$set(_vm.pop_ticket, "category_id", $$v)
                                },
                                expression: "pop_ticket.category_id"
                              }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-4 bs" }, [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", [_vm._v("Machine Description")]),
                            _vm._v(" "),
                            _c("v-select", {
                              attrs: {
                                label: "name",
                                reduce: function(option) {
                                  return option.id
                                },
                                options: _vm.sub_categories,
                                placeholder: "Choose description ...",
                                name: "sub_category_id",
                                disabled: _vm.pop_ticket.id != ""
                              },
                              model: {
                                value: _vm.pop_ticket.sub_category_id,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.pop_ticket,
                                    "sub_category_id",
                                    $$v
                                  )
                                },
                                expression: "pop_ticket.sub_category_id"
                              }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-4 bs" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { staticStyle: { margin: "0" } }, [
                            _vm._v(" Machine : ")
                          ]),
                          _vm._v(" "),
                          _c("strong", [_vm._v("Far No :")]),
                          _vm._v(
                            " " +
                              _vm._s(_vm.pop_ticket.machine.far_no) +
                              "\n                                    "
                          ),
                          _c("br"),
                          _vm._v(" "),
                          _c("strong", [_vm._v("Machine Name :")]),
                          _vm._v(
                            " " +
                              _vm._s(_vm.pop_ticket.machine.name) +
                              "\n                                    "
                          ),
                          _c("br"),
                          _vm._v(" "),
                          _c("strong", [_vm._v("Machine Chassis No :")]),
                          _vm._v(
                            "\n                                    " +
                              _vm._s(_vm.pop_ticket.machine.chassis_no) +
                              "\n                                    "
                          ),
                          _c("br"),
                          _vm._v(" "),
                          _c("strong", [_vm._v("Machine Sl No:")]),
                          _vm._v(
                            "\n                                    " +
                              _vm._s(_vm.pop_ticket.machine.machine_sr_no) +
                              "\n                                    "
                          ),
                          _c("br"),
                          _vm._v(" "),
                          _c("strong", [_vm._v("Machine Regn No :")]),
                          _vm._v(
                            "\n                                    " +
                              _vm._s(_vm.pop_ticket.machine.regn_no) +
                              "\n                                    "
                          ),
                          _c("br"),
                          _vm._v(" "),
                          _c("strong", [_vm._v("Machine Engine No :")]),
                          _vm._v(
                            "\n                                    " +
                              _vm._s(_vm.pop_ticket.machine.engine_no) +
                              "\n                                "
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-4 bs" }, [
                        _vm.pop_ticket.maintenance_provider == "vendor" &&
                        _vm.pop_ticket.service_type
                          ? _c("div", { staticClass: "form-group mb-0" }, [
                              _c("label", [_vm._v("Service Type")]),
                              _vm._v(
                                "\n                                    " +
                                  _vm._s(_vm.pop_ticket.service_type) +
                                  "\n                                "
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.pop_ticket.service_type == "Free Service" &&
                        _vm.pop_ticket.free_service_no
                          ? _c("div", { staticClass: "form-group mb-0" }, [
                              _c("label", [_vm._v("Free service no:")]),
                              _vm._v(
                                "\n                                    " +
                                  _vm._s(_vm.pop_ticket.free_service_no) +
                                  "/" +
                                  _vm._s(
                                    _vm.pop_ticket.machine.free_service_no
                                  ) +
                                  "\n                                "
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.pop_ticket.ticket_type
                          ? _c("div", { staticClass: "form-group mb-0" }, [
                              _c("label", [_vm._v("Ticket Type")]),
                              _vm._v(
                                "\n                                    " +
                                  _vm._s(_vm.pop_ticket.ticket_type) +
                                  "\n                                "
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.pop_ticket.status_during_complaint
                          ? _c("div", { staticClass: "form-group mb-0" }, [
                              _c("label", [_vm._v("Status During Complain: ")]),
                              _vm._v(
                                "\n                                    " +
                                  _vm._s(
                                    _vm.pop_ticket.status_during_complaint
                                  ) +
                                  "\n                                "
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { staticStyle: { margin: "0" } }, [
                            _vm._v("Machine's Problem: ")
                          ]),
                          _vm._v(
                            "\n                                    " +
                              _vm._s(_vm.pop_ticket.problem_description) +
                              "\n                                "
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-4 bs" }, [
                        _c("div", { staticClass: "form-group mb-0" }, [
                          _c("label", [_vm._v("Maintenance Provider")]),
                          _vm._v(
                            "\n                                    " +
                              _vm._s(_vm.pop_ticket.maintenance_provider) +
                              "\n                                "
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", [
                              _vm._v(
                                "\n                                        " +
                                  _vm._s(
                                    _vm.pop_ticket.maintenance_provider ==
                                      "user"
                                      ? "User"
                                      : "Vendor"
                                  ) +
                                  "\n                                    "
                              )
                            ]),
                            _vm._v(" "),
                            _vm.pop_ticket.maintenance_provider == "vendor"
                              ? [
                                  _vm._v(
                                    "\n                                        :\n                                        "
                                  ),
                                  _vm._l(_vm.pop_ticket.all_vendors, function(
                                    vendor,
                                    index
                                  ) {
                                    return _c(
                                      "span",
                                      {
                                        key: "vm" + index,
                                        staticClass: "comma"
                                      },
                                      [_vm._v(_vm._s(vendor.name))]
                                    )
                                  }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "comma" })
                                ]
                              : [
                                  _c("v-select", {
                                    attrs: {
                                      label: "name",
                                      reduce: function(option) {
                                        return option.id
                                      },
                                      options: _vm.users,
                                      placeholder: "Enter users ...",
                                      disabled: ""
                                    },
                                    model: {
                                      value: _vm.pop_ticket.user_id,
                                      callback: function($$v) {
                                        _vm.$set(_vm.pop_ticket, "user_id", $$v)
                                      },
                                      expression: "pop_ticket.user_id"
                                    }
                                  })
                                ]
                          ],
                          2
                        )
                      ]),
                      _vm._v(" "),
                      _vm.pop_ticket.stages
                        ? _c(
                            "div",
                            { staticClass: "col-8 bs" },
                            [
                              _c("label", { staticStyle: { margin: "0px" } }, [
                                _vm._v("Stages")
                              ]),
                              _vm._v(" "),
                              _vm._l(_vm.pop_ticket.stages, function(field, x) {
                                return [
                                  _c(
                                    "div",
                                    {
                                      key: "s" + x,
                                      staticClass: "row",
                                      staticStyle: {
                                        border: "0",
                                        "padding-bottom": "8px"
                                      }
                                    },
                                    [
                                      _c("div", { staticClass: "col-4" }, [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(field.stage_no) +
                                            "\n                                        "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "col-2" }, [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(
                                              _vm._f("myDate")(field.stage_date)
                                            ) +
                                            "\n                                        "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "col-5" }, [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(field.description) +
                                            "\n                                        "
                                        )
                                      ])
                                    ]
                                  )
                                ]
                              })
                            ],
                            2
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-4 bs" }, [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", { staticStyle: { margin: "0" } }, [
                              _vm._v("Machine's Additional Problem: ")
                            ]),
                            _c("br"),
                            _vm._v(" "),
                            _vm._l(_vm.pop_ticket.problems, function(
                              item,
                              index
                            ) {
                              return _vm.pop_ticket.problems
                                ? _c("p", {
                                    key: "pa" + index,
                                    domProps: {
                                      innerHTML: _vm._s(item.problem)
                                    }
                                  })
                                : _vm._e()
                            })
                          ],
                          2
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-3 bs" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { staticStyle: { margin: "0" } }, [
                            _vm._v("Estimated Material cost")
                          ]),
                          _c("br"),
                          _vm._v(
                            "\n                                    " +
                              _vm._s(
                                _vm._f("toCurrency")(
                                  _vm.pop_ticket.estimated_material_cost +
                                    _vm.pop_ticket.ad_estimated_material_cost
                                )
                              ) +
                              "\n                                    (" +
                              _vm._s(
                                _vm.pop_ticket.estimated_material_cost +
                                  "+" +
                                  _vm.pop_ticket.ad_estimated_material_cost
                              ) +
                              ")\n                                    "
                          ),
                          _c(
                            "p",
                            _vm._l(
                              _vm.pop_ticket.estimated_material_files,
                              function(file, x) {
                                return _c(
                                  "a",
                                  {
                                    key: file.id,
                                    staticClass: "btn btn-success mr-2",
                                    attrs: { href: file.file, target: "_blank" }
                                  },
                                  [
                                    _vm._v(
                                      "View\n                                            " +
                                        _vm._s(
                                          _vm.pop_ticket
                                            .estimated_material_files.length > 1
                                            ? x + 1
                                            : ""
                                        )
                                    )
                                  ]
                                )
                              }
                            ),
                            0
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-3 bs" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { staticStyle: { margin: "0" } }, [
                            _vm._v("Estimated Service cost : ")
                          ]),
                          _c("br"),
                          _vm._v(
                            "\n                                    " +
                              _vm._s(
                                _vm._f("toCurrency")(
                                  _vm.pop_ticket.estimated_service_cost +
                                    _vm.pop_ticket.ad_estimated_service_cost
                                )
                              ) +
                              "\n                                    (" +
                              _vm._s(
                                _vm.pop_ticket.estimated_service_cost +
                                  "+" +
                                  _vm.pop_ticket.ad_estimated_service_cost
                              ) +
                              ")\n                                    "
                          ),
                          _c(
                            "p",
                            _vm._l(
                              _vm.pop_ticket.estimated_service_files,
                              function(file, x) {
                                return _c(
                                  "a",
                                  {
                                    key: file.id,
                                    staticClass: "btn btn-success mr-2",
                                    attrs: { href: file.file, target: "_blank" }
                                  },
                                  [
                                    _vm._v(
                                      "View\n                                            " +
                                        _vm._s(
                                          _vm.pop_ticket.estimated_service_files
                                            .length > 1
                                            ? x + 1
                                            : ""
                                        )
                                    )
                                  ]
                                )
                              }
                            ),
                            0
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-3 bs" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [_vm._v("Actual Material Cost : ")]),
                          _vm._v(" "),
                          _vm.pop_ticket.actual_material_cost
                            ? _c("span", [
                                _vm._v(
                                  "\n                                        " +
                                    _vm._s(
                                      _vm._f("toCurrency")(
                                        _vm.pop_ticket.actual_material_cost
                                      )
                                    )
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "p",
                            _vm._l(
                              _vm.pop_ticket.actual_estimated_material_files,
                              function(file, x) {
                                return _c(
                                  "a",
                                  {
                                    key: file.id,
                                    staticClass: "btn btn-success mr-2",
                                    attrs: { href: file.file, target: "_blank" }
                                  },
                                  [
                                    _vm._v(
                                      "View\n                                            " +
                                        _vm._s(
                                          _vm.pop_ticket
                                            .actual_estimated_material_files
                                            .length > 1
                                            ? x + 1
                                            : ""
                                        )
                                    )
                                  ]
                                )
                              }
                            ),
                            0
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-3 bs" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [_vm._v("Actual Service Cost : ")]),
                          _vm._v(" "),
                          _vm.pop_ticket.actual_service_cost
                            ? _c("span", [
                                _vm._v(
                                  _vm._s(
                                    _vm._f("toCurrency")(
                                      _vm.pop_ticket.actual_service_cost
                                    )
                                  )
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "p",
                            _vm._l(
                              _vm.pop_ticket.actual_estimated_service_files,
                              function(file, x) {
                                return _c(
                                  "a",
                                  {
                                    key: file.id,
                                    staticClass: "btn btn-success mr-2",
                                    attrs: { href: file.file, target: "_blank" }
                                  },
                                  [
                                    _vm._v(
                                      "View\n                                            " +
                                        _vm._s(
                                          _vm.pop_ticket
                                            .actual_estimated_service_files
                                            .length > 1
                                            ? x + 1
                                            : ""
                                        )
                                    )
                                  ]
                                )
                              }
                            ),
                            0
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-4 bs" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { staticStyle: { margin: "0" } }, [
                            _vm._v("Ticket No : ")
                          ]),
                          _vm._v(
                            "\n                                    " +
                              _vm._s(_vm.pop_ticket.ticket_no) +
                              "\n                                "
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-4 bs" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { staticStyle: { margin: "0" } }, [
                            _vm._v("Likely Date : ")
                          ]),
                          _vm._v(
                            "\n                                    " +
                              _vm._s(
                                _vm._f("myDate")(_vm.pop_ticket.likely_date)
                              ) +
                              "\n                                "
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-4 bs" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { staticStyle: { margin: "0" } }, [
                            _vm._v("Actual Date : ")
                          ]),
                          _vm._v(
                            "\n                                    " +
                              _vm._s(
                                _vm._f("myDate")(_vm.pop_ticket.actual_date)
                              ) +
                              "\n                                "
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _vm.pop_ticket.current_run_hour
                        ? _c("div", { staticClass: "col-4 bs" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [_vm._v("Current Run Hour : ")]),
                              _vm._v(
                                "\n                                    " +
                                  _vm._s(_vm.pop_ticket.current_run_hour) +
                                  "\n                                "
                              )
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.pop_ticket.current_km_run
                        ? _c("div", { staticClass: "col-4 bs" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [_vm._v("Current KM Hour : ")]),
                              _vm._v(
                                "\n                                    " +
                                  _vm._s(_vm.pop_ticket.current_km_run) +
                                  "\n                                "
                              )
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.pop_ticket.current_production_fig
                        ? _c("div", { staticClass: "col-4 bs" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [
                                _vm._v("Current Production Fig : ")
                              ]),
                              _vm._v(
                                "\n                                    " +
                                  _vm._s(
                                    _vm.pop_ticket.current_production_fig
                                  ) +
                                  "\n                                "
                              )
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.pop_ticket.production_loss
                        ? _c("div", { staticClass: "col-4 bs" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [_vm._v("Production Loss : ")]),
                              _vm._v(
                                "\n                                    " +
                                  _vm._s(_vm.pop_ticket.production_loss) +
                                  "\n                                "
                              )
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.pop_ticket.production_loss_amount
                        ? _c("div", { staticClass: "col-4 bs" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [
                                _vm._v("Production Loss Amount : ")
                              ]),
                              _vm._v(
                                "\n                                    " +
                                  _vm._s(
                                    _vm._f("toCurrency")(
                                      _vm.pop_ticket.production_loss_amount
                                    )
                                  ) +
                                  "\n                                "
                              )
                            ])
                          ])
                        : _vm._e()
                    ])
                  ])
                : _vm._e()
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Ticket No")]),
        _vm._v(" "),
        _c("th", [_vm._v("Ticket Type")]),
        _vm._v(" "),
        _c("th", [_vm._v("Machine Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Machine's Problem")]),
        _vm._v(" "),
        _c("th", [_vm._v("Additional Problems")]),
        _vm._v(" "),
        _c("th", [_vm._v("Machine Far No & Details")]),
        _vm._v(" "),
        _c("th", [_vm._v("Site")]),
        _vm._v(" "),
        _c("th", [_vm._v("Complaint Nature")]),
        _vm._v(" "),
        _c("th", [_vm._v("Created By")]),
        _vm._v(" "),
        _c("th", [_vm._v("Created Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Expected date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Revised "), _c("br"), _vm._v(" Expected date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Ticket Status")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title" }, [_vm._v("Close Ticket")]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title" }, [_vm._v("View Ticket")]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  }
]
render._withStripped = true

if (false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/Tickets/index.vue":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/Tickets/index.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue */ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/Tickets/index.vue");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("7566948f", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./resources/js/components/Tickets/index.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/Tickets/index.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../../../node_modules/vue-loader/lib/selector?type=script&index=0!./index.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/Tickets/index.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_0341cdd6_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-0341cdd6","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./index.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0341cdd6\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/Tickets/index.vue");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!../../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./index.vue */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/Tickets/index.vue")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_0341cdd6_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_0341cdd6_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\js\\components\\Tickets\\index.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvVGlja2V0cy9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvVGlja2V0cy9pbmRleC52dWU/MmMyOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9UaWNrZXRzL2luZGV4LnZ1ZT9kNDQxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1RpY2tldHMvaW5kZXgudnVlP2M5OTkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvVGlja2V0cy9pbmRleC52dWUiXSwibmFtZXMiOlsiY29tcG9uZW50cyIsIlZ1ZVJlYWRNb3JlU21vb3RoIiwiZGF0YSIsImNsb3NlX2J0biIsImFkZGl0aW9uYWxNb3JlIiwicHJvYmxlbXNNb3JlIiwic2VhcmNoX21hY2hpbmVzIiwic2VhcmNoX3NpdGVzIiwic2VhcmNoIiwicGFnZSIsIm1hY2hpbmVfaWQiLCJzaXRlX2lkIiwiY29tcGxhaW50X25hdHVyZSIsInRpY2tldF90eXBlIiwidGlja2V0IiwicG9wdGlja2V0IiwiY2F0ZWdvcmllcyIsInN1Yl9jYXRlZ29yaWVzIiwic2l0ZXMiLCJzZWxlY3RlZF9tYWNoaW5lIiwidXNlcnMiLCJtYWNoaW5lcyIsIlRpY2tldHMiLCJlZGl0bW9kZSIsIk1hdGVyaWFsQ29zdCIsIlNlcnZpY2VDb3N0IiwiZm9ybSIsImlkIiwiY2F0ZWdvcnlfaWQiLCJzdWJfY2F0ZWdvcnlfaWQiLCJmcmVlX3NlcnZpY2Vfbm8iLCJzZXJ2aWNlX3R5cGUiLCJ0aWNrZXRfbm8iLCJ2ZW5kb3JfaWQiLCJ1c2VyX2lkIiwibGlrZWx5X2RhdGUiLCJlc3RpbWF0ZWRfbWF0ZXJpYWxfY29zdCIsImVzdGltYXRlZF9zZXJ2aWNlX2Nvc3QiLCJtYWludGVuYW5jZV9wcm92aWRlciIsInByb2JsZW1fZGVzY3JpcHRpb24iLCJzdGFnZXMiLCJzdGFnZV9ubyIsInN0YWdlX2RhdGUiLCJkZXNjcmlwdGlvbiIsImZpbGUiLCJuZXdfZmlsZSIsImZvcm1jbG9zZSIsIm1hY2hpbmVfc3RhdHVzIiwiZWRpdF90eXBlIiwiYWN0dWFsX2RhdGUiLCJhY3R1YWxfbWF0ZXJpYWxfY29zdCIsImFjdHVhbF9zZXJ2aWNlX2Nvc3QiLCJjdXJyZW50X3J1bl9ob3VyIiwiY3VycmVudF9rbV9ydW4iLCJjdXJyZW50X3Byb2R1Y3Rpb25fZmlnIiwicHJvZHVjdGlvbl9sb3NzIiwicHJvZHVjdGlvbl9sb3NzX2Ftb3VudCIsInN0YXR1cyIsInZlbmRvcl9yZXNvbHZlX2RhdGUiLCJ2ZW5kb3JfYXR0YWluX2RhdGUiLCJ2ZW5kb3JfcmVzcG9uc2VfZGF0ZSIsInZlbmRvcl9jYWxsX2RhdGUiLCJyY2EiLCJwb3BfbWFjaGluZSIsInBvcF90aWNrZXQiLCJvcG5fc3RhZ2UiLCJsYXN0X3N0YWdlX2luZGV4IiwibGFzdF9zdGFnZV9kYXRlIiwianNvbl9maWVsZHMiLCJNYWNoaW5lIiwiZmllbGQiLCJjYWxsYmFjayIsImpzb25fbWV0YSIsImtleSIsInZhbHVlIiwibWV0aG9kcyIsInBhcmFtcyIsInN0YXJ0RG93bmxvYWQiLCJTd2FsIiwidGl0bGUiLCJodG1sIiwiYWxsb3dPdXRzaWRlQ2xpY2siLCJvbkJlZm9yZU9wZW4iLCJmaW5pc2hEb3dubG9hZCIsInNjbGljayIsImdldExhYmVsIiwidmlld01vZGFsIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwiY2F0Y2giLCIkIiwiQWRkU3RhZ2UiLCJnZXRSZXN1bHRzIiwiY2FsY3VsYXRlX2xvc3MiLCJjb25zb2xlIiwic3VibWl0Q2xvc2VUaWNrZXQiLCJsYXN0X21EYXRlIiwiRGF0ZSIsIm1vbWVudCIsInBvcF9sb2FkZXIiLCJwdXQiLCJUb2FzdCIsImljb24iLCJjbG9zZU1vZGFsIiwiZWRpdE1vZGFsIiwibmV3TW9kYWwiLCJsb2FkVGlja2V0cyIsImZkIiwic3VibWl0VGlja2V0IiwiY29udGFpbmVyIiwicG9zdCIsIm1vdW50ZWQiLCJjcmVhdGVkIiwiYmVmb3JlQ3JlYXRlIiwid2F0Y2giLCJoYW5kbGVyIiwiZGVlcCIsImluaXRpYWwiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc3dCcUQ7QUFDdEM7RUFDZkE7SUFB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QWlCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGlDQUFpQztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDM0QsbUNBQW1DLDRCQUE0QjtBQUMvRCx1Q0FBdUMsZUFBZSxjQUFjLEVBQUU7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QyxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsMEJBQTBCO0FBQzNELG1DQUFtQyw0QkFBNEI7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUMsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsMEJBQTBCO0FBQzNELG1DQUFtQyw0QkFBNEI7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNB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O0FBQ0E7QUFDc0c7QUFDdEcsZ0JBQWdCLHlHQUFrQjtBQUNsQyxFQUFFLHdIQUFjO0FBQ2hCLEVBQUUsZ09BQWM7QUFDaEIsRUFBRSx5T0FBeUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsRUFhWDs7QUFFVSxnRkFBaUIiLCJmaWxlIjoianMvOS5idW5kbGUuZjZiNDZmMjVhZTZmNjhjZTNkNjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPHNlY3Rpb24gY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJjYXJkLXRpdGxlXCI+VGlja2V0IExpc3Q8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXRvb2xzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayB0bz1cIi90aWNrZXQvYWRkXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1wcmltYXJ5XCIgQGNsaWNrPVwibmV3TW9kYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtcGx1cy1zcXVhcmVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGQgTmV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keSBwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBhdXRvY29tcGxldGU9XCJvZmZcIiBAc3VibWl0LnByZXZlbnQ9XCJnZXRSZXN1bHRzKClcIiBkYXRhLXZ2LXNjb3BlPVwic2VhcmNoZnJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVwibmFtZVwiIDpnZXQtb3B0aW9uLWxhYmVsPVwiZ2V0TGFiZWxcIiA6cmVkdWNlPVwiKG9wdGlvbikgPT4gb3B0aW9uLmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJzZWFyY2hfbWFjaGluZXNcIiBwbGFjZWhvbGRlcj1cIkVudGVyIG1hY2hpbmVzIC4uLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJzZWFyY2gubWFjaGluZV9pZFwiIG5hbWU9XCJtYWNoaW5lX2lkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGlja2V0IC4uLlwiIHYtbW9kZWw9XCJzZWFyY2gudGlja2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRpY2tldFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cInNpdGVfbmFtZVwiIDpyZWR1Y2U9XCIob3B0aW9uKSA9PiBvcHRpb24uaWRcIiA6b3B0aW9ucz1cInNlYXJjaF9zaXRlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IFNpdGUuLi5cIiB2LW1vZGVsPVwic2VhcmNoLnNpdGVfaWRcIiBuYW1lPVwic2l0ZV9pZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XCJzaXRlX25hbWVcIiA6b3B0aW9ucz1cIlsnT3BlbicsICdDbG9zZWQnXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IFN0YXR1cy4uLlwiIHYtbW9kZWw9XCJzZWFyY2guc3RhdHVzXCIgbmFtZT1cInN0YXR1c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XCJzaXRlX25hbWVcIiA6b3B0aW9ucz1cIlsnTWFqb3InLCAnTWlub3InXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IENvbXBsYWludCBOYXR1cmUuLi5cIiB2LW1vZGVsPVwic2VhcmNoLmNvbXBsYWludF9uYXR1cmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29tcGxhaW50X25hdHVyZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XCJzaXRlX25hbWVcIiA6b3B0aW9ucz1cIlsnQnJlYWtkb3duIE1haW50ZW5hbmNlJywgJ1BlcmlvZGljIE1haW50ZW5hbmNlJ11cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBUaWNrZXQgVHlwZS4uLlwiIHYtbW9kZWw9XCJzZWFyY2gudGlja2V0X3R5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGlja2V0X3R5cGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCI+U2VhcmNoPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4taW5mbyBtbC0yXCIgQGNsaWNrPVwicmVzZXRfZmlsdGVyKClcIj5SZXNldDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRvd25sb2FkLWV4Y2VsIGNsYXNzPVwiYnRuIGJ0bi13YXJuaW5nIG1sLTJcIiA6ZmV0Y2g9XCJleHBvcnRfY3N2XCIgOmZpZWxkcz1cImpzb25fZmllbGRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6YmVmb3JlLWdlbmVyYXRlPVwic3RhcnREb3dubG9hZFwiIDpiZWZvcmUtZmluaXNoPVwiZmluaXNoRG93bmxvYWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldD1cIk15IFdvcmtzaGVldFwiIHR5cGU9XCJjc3ZcIiBuYW1lPVwidGlja2V0X2xpc3QuY3N2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1maWxlLWV4Y2VsLW9cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV4cG9ydCBhcyBDU1Y8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rvd25sb2FkLWV4Y2VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC8uY2FyZC1oZWFkZXIgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IHRpY2tldExzdFRibCB0YWJsZS1yZXNwb25zaXZlIHAtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VGlja2V0IE5vPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VGlja2V0IFR5cGU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5NYWNoaW5lIE5hbWU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5NYWNoaW5lJ3MgUHJvYmxlbTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFkZGl0aW9uYWwgUHJvYmxlbXM8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5NYWNoaW5lIEZhciBObyAmIERldGFpbHM8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TaXRlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q29tcGxhaW50IE5hdHVyZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkNyZWF0ZWQgQnk8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5DcmVhdGVkIERhdGU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5FeHBlY3RlZCBkYXRlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UmV2aXNlZCA8YnI+IEV4cGVjdGVkIGRhdGU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5UaWNrZXQgU3RhdHVzPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QWN0aW9uPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciB2LWZvcj1cIih0aWNrZXQsIHgpIGluIFRpY2tldHMuZGF0YVwiIDprZXk9XCJ0aWNrZXQuaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0LnRpY2tldF9ubyB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC50aWNrZXRfdHlwZSB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC1jYXBpdGFsaXplXCI+e3sgdGlja2V0Lm1hY2hpbmUubmFtZSB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cInRpY2tldC5wcm9ibGVtX2Rlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VnVlUmVhZE1vcmVTbW9vdGggOm9wZW4uc3luYz1cInByb2JsZW1zTW9yZVt4XVwiIG5vLWJ1dHRvbiBuby1zaGFkb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3sgdGlja2V0LnByb2JsZW1fZGVzY3JpcHRpb24gfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Z1ZVJlYWRNb3JlU21vb3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gQGNsaWNrPVwic2NsaWNrKHgsICdwJylcIiBjbGFzcz1cInJtb3JlXCI+Li4ue3sgcHJvYmxlbXNNb3JlW3hdID8gXCJMZXNzXCIgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTW9yZVwiIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJ0aWNrZXQucHJvYmxlbXMgJiYgdGlja2V0LnByb2JsZW1zLmxlbmd0aCA+IDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWdWVSZWFkTW9yZVNtb290aCA6b3Blbi5zeW5jPVwiYWRkaXRpb25hbE1vcmVbeF1cIiBuby1idXR0b24gbm8tc2hhZG93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJ0aWNrZXQucHJvYmxlbXNcIiB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gdGlja2V0LnByb2JsZW1zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cIidwJyArIGluZGV4XCIgdi1odG1sPVwiaXRlbS5wcm9ibGVtXCI+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WdWVSZWFkTW9yZVNtb290aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIEBjbGljaz1cInNjbGljayh4KVwiIGNsYXNzPVwicm1vcmVcIj4uLi57eyBhZGRpdGlvbmFsTW9yZVt4XSA/IFwiTGVzc1wiIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk1vcmVcIiB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tldC5tYWNoaW5lLmZhcl9ubyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiAtIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tldC5tYWNoaW5lLm5hbWUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgLSBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGlja2V0Lm1hY2hpbmUubWFjaGluZV9tb2RlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGlja2V0Lm1hY2hpbmUubWFjaGluZV9tb2RlbC5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm51bGxcIikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgLSBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrZXQubWFjaGluZS5tYWNoaW5lX3NyX25vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0LnNpdGUgPyB0aWNrZXQuc2l0ZS5zaXRlX25hbWUgOiBcIi1cIiB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5jb21wbGFpbnRfbmF0dXJlIH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0LmNyZWF0ZWRfYnlfbmFtZSB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5jcmVhdGVkX2F0IHwgbXlEYXRlIH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0Lmxpa2VseV9kYXRlIHwgbXlEYXRlIH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0LnJldmVyc2lvbl9kYXRlIHwgbXlEYXRlIH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrZXQuc3RhdHVzLnRvTG93ZXJDYXNlKCkgPT0gXCJjcmVhdGVkIGJ5IHVzZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIk9wZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aWNrZXQuc3RhdHVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgY2xhc3M9XCJidG4gYnRuLXdhcm5pbmcgYnRuLXNtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInZpZXdNb2RhbCh0aWNrZXQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWaWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cIicvdGlja2V0L2VkaXQvJyArIHRpY2tldC5pZFwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1zbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwidGlja2V0LnN0YXR1cyAhPSAnQ2xvc2VkJyAmJiAkZ2F0ZS5pc0FkbWluKClcIj5FZGl0PC9yb3V0ZXItbGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyIGJ0bi1zbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJjbG9zZU1vZGFsKHRpY2tldClcIiB0aXRsZT1cIkNsb3NlIHRpY2tldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwidGlja2V0LnN0YXR1cyAhPSAnQ2xvc2VkJyAmJiAkZ2F0ZS5pc0FkbWluKClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENsb3NlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC8uY2FyZC1ib2R5IC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhZ2luYXRpb24gOmRhdGE9XCJUaWNrZXRzXCIgQHBhZ2luYXRpb24tY2hhbmdlLXBhZ2U9XCJnZXRSZXN1bHRzXCI+PC9wYWdpbmF0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8IS0tIC8uY2FyZCAtLT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8IS0tIENsb3NlIE1vZGFsIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwgZmFkZVwiIGlkPVwiY2xvc2Vtb2RhbFwiIHRhYmluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1sYWJlbGxlZGJ5PVwiY2xvc2Vtb2RhbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZyBtb2RhbC1sZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+Q2xvc2UgVGlja2V0PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVwic3VibWl0Q2xvc2VUaWNrZXQoKVwiIGRhdGEtdnYtc2NvcGU9XCJjbG9zZXRpY2tldFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgdi1pZj1cInBvcF9tYWNoaW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+RmFyIE5vIDo8L3N0cm9uZz4ge3sgcG9wX21hY2hpbmUuZmFyX25vIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5NYWNoaW5lIE5hbWUgOjwvc3Ryb25nPiB7eyBwb3BfbWFjaGluZS5uYW1lIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5NYWNoaW5lIE1vZGVsIDo8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3BfbWFjaGluZS5tYWNoaW5lX21vZGVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gcG9wX21hY2hpbmUubWFjaGluZV9tb2RlbC5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCItXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+TWFjaGluZSBDaGFzc2lzIE5vIDo8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwb3BfbWFjaGluZS5jaGFzc2lzX25vIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPk1hY2hpbmUgU2wgTm86PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcG9wX21hY2hpbmUubWFjaGluZV9zcl9ubyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+TWFjaGluZSBSZWduIE5vIDo8L3N0cm9uZz4ge3sgcG9wX21hY2hpbmUucmVnbl9ubyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+TWFjaGluZSBFbmdpbmUgTm8gOjwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHBvcF9tYWNoaW5lLmVuZ2luZV9ubyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlRpY2tldCBObyA6PC9zdHJvbmc+IHt7IHBvcF90aWNrZXQgPyBwb3BfdGlja2V0LnRpY2tldF9ubyA6ICctJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgdmVycm9ycy5jbG9zZXRpY2tldCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTZcIiB2LWlmPVwicG9wX3RpY2tldCAmJiBwb3BfdGlja2V0Lmxpa2VseV9kYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5BY3R1YWwgRGF0ZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRhdGV0aW1lIHZhbHVlLXpvbmU9XCJBc2lhL0tvbGthdGFcIiB2LW1vZGVsPVwiZm9ybWNsb3NlLmFjdHVhbF9kYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFjdHVhbF9kYXRlXCIgaW5wdXQtY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaXMtaW52YWxpZCc6IHZlcnJvcnMuaGFzKCdjbG9zZXRpY2tldC5hY3R1YWxfZGF0ZScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XCIgdi12YWxpZGF0ZT1cIidyZXF1aXJlZCdcIiBkYXRhLXZ2LWFzPVwiQWN0dWFsIERhdGVcIiA6bWluLWRhdGV0aW1lPVwibmV3IERhdGUocG9wX3RpY2tldC5jcmVhdGVkX2F0KS50b0lTT1N0cmluZygpXG4gICAgXCIgOm1heC1kYXRldGltZT1cIm5ldyBEYXRlKCkudG9JU09TdHJpbmcoKVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwidmVycm9ycy5oYXMoJ2Nsb3NldGlja2V0LmFjdHVhbF9kYXRlJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB2ZXJyb3JzLmZpcnN0KFwiY2xvc2V0aWNrZXQuYWN0dWFsX2RhdGVcIikgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5NYWNoaW5lIFN0YXR1czwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCB2LW1vZGVsPVwiZm9ybWNsb3NlLm1hY2hpbmVfc3RhdHVzXCIgbmFtZT1cIm1hY2hpbmVfc3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaXMtaW52YWxpZCc6IHZlcnJvcnMuaGFzKCdjbG9zZXRpY2tldC5tYWNoaW5lX3N0YXR1cycpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XCIgdi12YWxpZGF0ZT1cIidyZXF1aXJlZCdcIiBkYXRhLXZ2LWFzPVwibWFjaGluZSBzdGF0dXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJ1bm5pbmdcIj5SdW5uaW5nPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJSdW5uaW5nIHdpdGggUHJvYmxlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUnVubmluZyB3aXRoIFByb2JsZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJOb24gUmVwYWlyYWJsZVwiPk5vbiBSZXBhaXJhYmxlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwidmVycm9ycy5oYXMoJ2Nsb3NldGlja2V0Lm1hY2hpbmVfc3RhdHVzJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB2ZXJyb3JzLmZpcnN0KFwiY2xvc2V0aWNrZXQubWFjaGluZV9zdGF0dXNcIikgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkVzdGltYXRlZCBNYXRlcmlhbCBjb3N0PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHJlYWRvbmx5IDp2YWx1ZT1cInBvcF90aWNrZXQuZXN0aW1hdGVkX21hdGVyaWFsX2Nvc3QgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3BfdGlja2V0LmFkX2VzdGltYXRlZF9tYXRlcmlhbF9jb3N0ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJygnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wX3RpY2tldC5lc3RpbWF0ZWRfbWF0ZXJpYWxfY29zdCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcrJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcF90aWNrZXQuYWRfZXN0aW1hdGVkX21hdGVyaWFsX2Nvc3QgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnKSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5BY3R1YWwgTWF0ZXJpYWwgY29zdDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJmb3JtY2xvc2UuYWN0dWFsX21hdGVyaWFsX2Nvc3RcIiB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhY3R1YWxfbWF0ZXJpYWxfY29zdFwiIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12di1hcz1cIkFjdHVhbCBNYXRlcmlhbCBjb3N0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaXMtaW52YWxpZCc6IHZlcnJvcnMuaGFzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbG9zZXRpY2tldC5hY3R1YWxfbWF0ZXJpYWxfY29zdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cIiA6cmVhZG9ubHk9XCJmb3JtY2xvc2UubWFjaGluZV9zdGF0dXMgPT0gJ05vbiBSZXBhaXJhYmxlJ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwidmVycm9ycy5oYXMoJ2Nsb3NldGlja2V0LmFjdHVhbF9tYXRlcmlhbF9jb3N0JylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB2ZXJyb3JzLmZpcnN0KFwiY2xvc2V0aWNrZXQuYWN0dWFsX21hdGVyaWFsX2Nvc3RcIikgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD4gQWN0dWFsIE1hdGVyaWFsIGNvc3QgRmlsZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgQGNoYW5nZT1cInVwbG9hZE1hdGVyaWFsQ29zdFwiIG11bHRpcGxlIG5hbWU9XCJtYXRlcmlhbF9jb3N0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiZmlsZWFjdHVhbG1hdGVyaWFsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaXMtaW52YWxpZCc6IHZlcnJvcnMuaGFzKCdjbG9zZXRpY2tldC5tYXRlcmlhbF9jb3N0JyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cIiB2LXZhbGlkYXRlPVwiJydcIiBkYXRhLXZ2LWFzPVwiQWN0dWFsIE1hdGVyaWFsIGNvc3RcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNsZWFyZml4XCIgdi1pZj1cInBvcF90aWNrZXQuYWN0dWFsX2VzdGltYXRlZF9tYXRlcmlhbF9maWxlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB2LWZvcj1cIihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSwgeFxuICAgICAgICAgICAgICAgICAgICAgICAgKSBpbiBwb3BfdGlja2V0LmFjdHVhbF9lc3RpbWF0ZWRfbWF0ZXJpYWxfZmlsZXNcIiA6a2V5PVwiaXRlbS5pZFwiIDpocmVmPVwiaXRlbS5maWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiPlZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wX3RpY2tldC5hY3R1YWxfZXN0aW1hdGVkX21hdGVyaWFsX2ZpbGVzLmxlbmd0aCA+IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHggKyAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cInZlcnJvcnMuaGFzKCdjbG9zZXRpY2tldC5tYXRlcmlhbF9jb3N0JylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB2ZXJyb3JzLmZpcnN0KFwiY2xvc2V0aWNrZXQubWF0ZXJpYWxfY29zdFwiKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RXN0aW1hdGVkIFNlcnZpY2UgY29zdDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IDp2YWx1ZT1cInBvcF90aWNrZXQuZXN0aW1hdGVkX3NlcnZpY2VfY29zdCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcF90aWNrZXQuYWRfZXN0aW1hdGVkX3NlcnZpY2VfY29zdCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcoJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcF90aWNrZXQuZXN0aW1hdGVkX3NlcnZpY2VfY29zdCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcrJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcF90aWNrZXQuYWRfZXN0aW1hdGVkX3NlcnZpY2VfY29zdCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcpJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcmVhZG9ubHkgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5BY3R1YWwgU2VydmljZSBjb3N0PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cImZvcm1jbG9zZS5hY3R1YWxfc2VydmljZV9jb3N0XCIgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYWN0dWFsX3NlcnZpY2VfY29zdFwiIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12di1hcz1cIkFjdHVhbCBTZXJ2aWNlIGNvc3RcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIDpjbGFzcz1cIntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpcy1pbnZhbGlkJzogdmVycm9ycy5oYXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Nsb3NldGlja2V0LmFjdHVhbF9zZXJ2aWNlX2Nvc3QnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XCIgOnJlYWRvbmx5PVwiZm9ybWNsb3NlLm1hY2hpbmVfc3RhdHVzID09ICdOb24gUmVwYWlyYWJsZSdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cInZlcnJvcnMuaGFzKCdjbG9zZXRpY2tldC5hY3R1YWxfc2VydmljZV9jb3N0JylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB2ZXJyb3JzLmZpcnN0KFwiY2xvc2V0aWNrZXQuYWN0dWFsX3NlcnZpY2VfY29zdFwiKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPiBBY3R1YWwgU2VydmljZSBjb3N0IEZpbGUgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBAY2hhbmdlPVwidXBsb2FkU2VydmljZUNvc3RcIiBtdWx0aXBsZSBuYW1lPVwic2VydmljZV9jb3N0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiZmlsZWFjdHVhbHNlcnZpY2VcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIDpjbGFzcz1cIntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpcy1pbnZhbGlkJzogdmVycm9ycy5oYXMoJ2Nsb3NldGlja2V0LnNlcnZpY2VfY29zdCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XCIgdi12YWxpZGF0ZT1cIicnXCIgZGF0YS12di1hcz1cIkFjdHVhbCBTZXJ2aWNlIGNvc3RcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNsZWFyZml4XCIgdi1pZj1cInBvcF90aWNrZXQuYWN0dWFsX2VzdGltYXRlZF9zZXJ2aWNlX2ZpbGVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHYtZm9yPVwiKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLCB4XG4gICAgICAgICAgICAgICAgICAgICAgICApIGluIHBvcF90aWNrZXQuYWN0dWFsX2VzdGltYXRlZF9zZXJ2aWNlX2ZpbGVzXCIgOmtleT1cIml0ZW0uaWRcIiA6aHJlZj1cIml0ZW0uZmlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIj5WaWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcF90aWNrZXQuYWN0dWFsX2VzdGltYXRlZF9zZXJ2aWNlX2ZpbGVzLmxlbmd0aCA+IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHggKyAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cInZlcnJvcnMuaGFzKCdjbG9zZXRpY2tldC5zZXJ2aWNlX2Nvc3QnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHZlcnJvcnMuZmlyc3QoXCJjbG9zZXRpY2tldC5zZXJ2aWNlX2Nvc3RcIikgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTZcIiB2LWlmPVwicG9wX21hY2hpbmUuaXNfY29uc3VtdGlvbl9ocl9ydW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkN1cnJlbnQgUnVuIGhvdXIgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cImZvcm1jbG9zZS5jdXJyZW50X3J1bl9ob3VyXCIgbmFtZT1cImN1cnJlbnRfcnVuX2hvdXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiIDpjbGFzcz1cIntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpcy1pbnZhbGlkJzogdmVycm9ycy5oYXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Nsb3NldGlja2V0LmN1cnJlbnRfcnVuX2hvdXInXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XCIgdi12YWxpZGF0ZT1cIntcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBkZWNpbWFsOiAyLFxuICAgIG1pbl92YWx1ZTogcG9wX21hY2hpbmUubGFzdF9tYWludGVuYW5jZXNcbiAgICAgICAgPyBwb3BfbWFjaGluZS5sYXN0X21haW50ZW5hbmNlcy5ydW5faG91clxuICAgICAgICA6IHBvcF9tYWNoaW5lLmxhc3RfaHJfcnVuLFxufVwiIGRhdGEtdnYtYXM9XCJDdXJyZW50IFJ1biBob3VyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJ2ZXJyb3JzLmhhcygnY2xvc2V0aWNrZXQuY3VycmVudF9ydW5faG91cicpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJoZWxwLWJsb2NrIGludmFsaWQtZmVlZGJhY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgdmVycm9ycy5maXJzdChcImNsb3NldGlja2V0LmN1cnJlbnRfcnVuX2hvdXJcIikgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02XCIgdi1pZj1cInBvcF9tYWNoaW5lLmlzX2NvbnN1bXRpb25fa21fcnVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD4gQ3VycmVudCBLTSBSdW4gPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cImZvcm1jbG9zZS5jdXJyZW50X2ttX3J1blwiIG5hbWU9XCJjdXJyZW50X2ttX3J1blwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwie1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lzLWludmFsaWQnOiB2ZXJyb3JzLmhhcygnY2xvc2V0aWNrZXQuY3VycmVudF9rbV9ydW4nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVwiIHYtdmFsaWRhdGU9XCJ7XG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgZGVjaW1hbDogMixcbiAgICBtaW5fdmFsdWU6IHBvcF9tYWNoaW5lLmxhc3RfbWFpbnRlbmFuY2VzXG4gICAgICAgID8gcG9wX21hY2hpbmUubGFzdF9tYWludGVuYW5jZXMua21fcnVuXG4gICAgICAgIDogcG9wX21hY2hpbmUubGFzdF9rbV9ydW4sXG59XCIgZGF0YS12di1hcz1cIkN1cnJlbnQgS00gaG91clwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwidmVycm9ycy5oYXMoJ2Nsb3NldGlja2V0LmN1cnJlbnRfa21fcnVuJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB2ZXJyb3JzLmZpcnN0KFwiY2xvc2V0aWNrZXQuY3VycmVudF9rbV9ydW5cIikgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02XCIgdi1pZj1cInBvcF9tYWNoaW5lLmlzX3Byb2R1Y3Rpb25fZmlnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD4gQ3VycmVudCBQcm9kdWN0aW9uIGZpZyA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwiZm9ybWNsb3NlLmN1cnJlbnRfcHJvZHVjdGlvbl9maWdcIiBuYW1lPVwiY3VycmVudF9wcm9kdWN0aW9uX2ZpZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgOmNsYXNzPVwie1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lzLWludmFsaWQnOiB2ZXJyb3JzLmhhcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xvc2V0aWNrZXQuY3VycmVudF9wcm9kdWN0aW9uX2ZpZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cIiB2LXZhbGlkYXRlPVwie1xuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIGRlY2ltYWw6IDIsXG4gICAgbWluX3ZhbHVlOiBwb3BfbWFjaGluZS5sYXN0X21haW50ZW5hbmNlc1xuICAgICAgICA/IHBvcF9tYWNoaW5lLmxhc3RfbWFpbnRlbmFuY2VzLnByb2R1Y3Rpb25fZmlnXG4gICAgICAgIDogcG9wX21hY2hpbmUucGVyaW9kaWNfbWFpbnRlbmFuY2VfYnJlYWtkb3duLFxufVwiIGRhdGEtdnYtYXM9XCJDdXJyZW50IFByb2R1Y3Rpb24gZmlnXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJ2ZXJyb3JzLmhhcygnY2xvc2V0aWNrZXQuY3VycmVudF9wcm9kdWN0aW9uX2ZpZycpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJoZWxwLWJsb2NrIGludmFsaWQtZmVlZGJhY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgdmVycm9ycy5maXJzdChcImNsb3NldGlja2V0LmN1cnJlbnRfcHJvZHVjdGlvbl9maWdcIikgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTZcIiB2LWlmPVwiZm9ybWNsb3NlLnRpY2tldF90eXBlID09ICdCcmVha2Rvd24gTWFpbnRlbmFuY2UnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Qcm9kdWN0aW9uIExvc3M8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwiZm9ybWNsb3NlLnByb2R1Y3Rpb25fbG9zc1wiIG5hbWU9XCJwcm9kdWN0aW9uX2xvc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiIDpjbGFzcz1cIntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpcy1pbnZhbGlkJzogdmVycm9ycy5oYXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Nsb3NldGlja2V0LnByb2R1Y3Rpb25fbG9zcydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cIiB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiIGRhdGEtdnYtYXM9XCJQcm9kdWN0aW9uIExvc3NcIiAgcmVhZG9ubHkvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cInZlcnJvcnMuaGFzKCdjbG9zZXRpY2tldC5wcm9kdWN0aW9uX2xvc3MnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHZlcnJvcnMuZmlyc3QoXCJjbG9zZXRpY2tldC5wcm9kdWN0aW9uX2xvc3NcIikgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02XCIgdi1pZj1cImZvcm1jbG9zZS50aWNrZXRfdHlwZSA9PSAnQnJlYWtkb3duIE1haW50ZW5hbmNlJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UHJvZHVjdGlvbiBsb3NzIGFtb3VudDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJmb3JtY2xvc2UucHJvZHVjdGlvbl9sb3NzX2Ftb3VudFwiIG5hbWU9XCJwcm9kdWN0aW9uX2xvc3NfYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaXMtaW52YWxpZCc6IHZlcnJvcnMuaGFzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbG9zZXRpY2tldC5wcm9kdWN0aW9uX2xvc3NfYW1vdW50J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVwiIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCIgZGF0YS12di1hcz1cIkN1cnJlbnQgUHJvZHVjdGlvbiBmaWdcIiByZWFkb25seS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwidmVycm9ycy5oYXMoJ2Nsb3NldGlja2V0LnByb2R1Y3Rpb25fbG9zc19hbW91bnQnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHZlcnJvcnMuZmlyc3QoXCJjbG9zZXRpY2tldC5wcm9kdWN0aW9uX2xvc3NfYW1vdW50XCIpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Sb290IENhdXNlIEFuYWx5c2lzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgcm93cz1cIjFcIiB2LW1vZGVsPVwiZm9ybWNsb3NlLnJjYVwiIG5hbWU9XCJyY2FcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIDpjbGFzcz1cIntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lzLWludmFsaWQnOiB2ZXJyb3JzLmhhcygnY2xvc2V0aWNrZXQucmNhJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVwiIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJ2ZXJyb3JzLmhhcygnY2xvc2V0aWNrZXQucmNhJylcIiBjbGFzcz1cImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB2ZXJyb3JzLmZpcnN0KFwiY2xvc2V0aWNrZXQucmNhXCIpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDbG9zZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdi1pZj1cImNsb3NlX2J0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDbG9zZSBUaWNrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIHYtZWxzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvY2Vzc2luZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPCEtLVZpZXcgTW9kYWwtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsIGZhZGVcIiBpZD1cInZpZXdtb2RhbFwiIHRhYmluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1sYWJlbGxlZGJ5PVwidmlld21vZGFsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nIG1vZGFsLWxnXCIgcm9sZT1cImRvY3VtZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwibW9kYWwtdGl0bGVcIj5WaWV3IFRpY2tldDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiIHYtaWY9XCJwb3BfdGlja2V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00IGJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TWFjaGluZSBTaXRlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cInNpdGVfbmFtZVwiIDpyZWR1Y2U9XCIob3B0aW9uKSA9PiBvcHRpb24uaWRcIiA6b3B0aW9ucz1cInNpdGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNob29zZSBTaXRlIC4uLlwiIHYtbW9kZWw9XCJwb3BfdGlja2V0LnNpdGVfaWRcIiBkaXNhYmxlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNCBic1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk1hY2hpbmUgQ2F0ZWdvcnk8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVwibmFtZVwiIDpyZWR1Y2U9XCIob3B0aW9uKSA9PiBvcHRpb24uaWRcIiA6b3B0aW9ucz1cImNhdGVnb3JpZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2hvb3NlIENhdGVnb3J5IC4uLlwiIHYtbW9kZWw9XCJwb3BfdGlja2V0LmNhdGVnb3J5X2lkXCIgZGlzYWJsZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTQgYnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5NYWNoaW5lIERlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cIm5hbWVcIiA6cmVkdWNlPVwiKG9wdGlvbikgPT4gb3B0aW9uLmlkXCIgOm9wdGlvbnM9XCJzdWJfY2F0ZWdvcmllc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDaG9vc2UgZGVzY3JpcHRpb24gLi4uXCIgdi1tb2RlbD1cInBvcF90aWNrZXQuc3ViX2NhdGVnb3J5X2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3ViX2NhdGVnb3J5X2lkXCIgOmRpc2FibGVkPVwicG9wX3RpY2tldC5pZCAhPSAnJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00IGJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9XCJtYXJnaW46IDBcIj4gTWFjaGluZSA6IDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkZhciBObyA6PC9zdHJvbmc+IHt7IHBvcF90aWNrZXQubWFjaGluZS5mYXJfbm8gfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5NYWNoaW5lIE5hbWUgOjwvc3Ryb25nPiB7eyBwb3BfdGlja2V0Lm1hY2hpbmUubmFtZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPk1hY2hpbmUgQ2hhc3NpcyBObyA6PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwb3BfdGlja2V0Lm1hY2hpbmUuY2hhc3Npc19ubyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPk1hY2hpbmUgU2wgTm86PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwb3BfdGlja2V0Lm1hY2hpbmUubWFjaGluZV9zcl9ubyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPk1hY2hpbmUgUmVnbiBObyA6PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwb3BfdGlja2V0Lm1hY2hpbmUucmVnbl9ubyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPk1hY2hpbmUgRW5naW5lIE5vIDo8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHBvcF90aWNrZXQubWFjaGluZS5lbmdpbmVfbm8gfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTQgYnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgbWItMFwiIHYtaWY9XCJwb3BfdGlja2V0Lm1haW50ZW5hbmNlX3Byb3ZpZGVyID09ICd2ZW5kb3InICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3BfdGlja2V0LnNlcnZpY2VfdHlwZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U2VydmljZSBUeXBlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHBvcF90aWNrZXQuc2VydmljZV90eXBlIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIG1iLTBcIiB2LWlmPVwicG9wX3RpY2tldC5zZXJ2aWNlX3R5cGUgPT0gJ0ZyZWUgU2VydmljZScgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcF90aWNrZXQuZnJlZV9zZXJ2aWNlX25vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5GcmVlIHNlcnZpY2Ugbm86PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHBvcF90aWNrZXQuZnJlZV9zZXJ2aWNlX25vIH19L3t7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wX3RpY2tldC5tYWNoaW5lLmZyZWVfc2VydmljZV9ub1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgbWItMFwiIHYtaWY9XCJwb3BfdGlja2V0LnRpY2tldF90eXBlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+VGlja2V0IFR5cGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcG9wX3RpY2tldC50aWNrZXRfdHlwZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgbWItMFwiIHYtaWY9XCJwb3BfdGlja2V0LnN0YXR1c19kdXJpbmdfY29tcGxhaW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U3RhdHVzIER1cmluZyBDb21wbGFpbjogPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHBvcF90aWNrZXQuc3RhdHVzX2R1cmluZ19jb21wbGFpbnQgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT1cIm1hcmdpbjogMFwiPk1hY2hpbmUncyBQcm9ibGVtOiA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcG9wX3RpY2tldC5wcm9ibGVtX2Rlc2NyaXB0aW9uIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00IGJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIG1iLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5NYWludGVuYW5jZSBQcm92aWRlcjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwb3BfdGlja2V0Lm1haW50ZW5hbmNlX3Byb3ZpZGVyIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wX3RpY2tldC5tYWludGVuYW5jZV9wcm92aWRlciA9PSBcInVzZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiVXNlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJWZW5kb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJwb3BfdGlja2V0Lm1haW50ZW5hbmNlX3Byb3ZpZGVyID09ICd2ZW5kb3InXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtZm9yPVwiKHZlbmRvciwgaW5kZXgpIGluIHBvcF90aWNrZXQuYWxsX3ZlbmRvcnNcIiA6a2V5PVwiJ3ZtJyArIGluZGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjb21tYVwiPnt7IHZlbmRvci5uYW1lIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29tbWFcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XCJuYW1lXCIgOnJlZHVjZT1cIihvcHRpb24pID0+IG9wdGlvbi5pZFwiIDpvcHRpb25zPVwidXNlcnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHVzZXJzIC4uLlwiIHYtbW9kZWw9XCJwb3BfdGlja2V0LnVzZXJfaWRcIiBkaXNhYmxlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTggYnNcIiB2LWlmPVwicG9wX3RpY2tldC5zdGFnZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPVwibWFyZ2luOiAwcHhcIj5TdGFnZXM8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCIoZmllbGQsIHgpIGluIHBvcF90aWNrZXQuc3RhZ2VzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgOmtleT1cIidzJyArIHhcIiBzdHlsZT1cImJvcmRlcjogMDsgcGFkZGluZy1ib3R0b206IDhweFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBmaWVsZC5zdGFnZV9ubyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBmaWVsZC5zdGFnZV9kYXRlIHwgbXlEYXRlIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGZpZWxkLmRlc2NyaXB0aW9uIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNCBic1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPVwibWFyZ2luOiAwXCI+TWFjaGluZSdzIEFkZGl0aW9uYWwgUHJvYmxlbTogPC9sYWJlbD48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJwb3BfdGlja2V0LnByb2JsZW1zXCIgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIHBvcF90aWNrZXQucHJvYmxlbXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCIncGEnICsgaW5kZXhcIiB2LWh0bWw9XCJpdGVtLnByb2JsZW1cIj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zIGJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9XCJtYXJnaW46IDBcIj5Fc3RpbWF0ZWQgTWF0ZXJpYWwgY29zdDwvbGFiZWw+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwb3BfdGlja2V0LmVzdGltYXRlZF9tYXRlcmlhbF9jb3N0ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wX3RpY2tldC5hZF9lc3RpbWF0ZWRfbWF0ZXJpYWxfY29zdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHRvQ3VycmVuY3lcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoe3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3BfdGlja2V0LmVzdGltYXRlZF9tYXRlcmlhbF9jb3N0ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIitcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wX3RpY2tldC5hZF9lc3RpbWF0ZWRfbWF0ZXJpYWxfY29zdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBtci0yXCIgOmhyZWY9XCJmaWxlLmZpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIihmaWxlLCB4KSBpbiBwb3BfdGlja2V0LmVzdGltYXRlZF9tYXRlcmlhbF9maWxlc1wiIDprZXk9XCJmaWxlLmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCI+Vmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wX3RpY2tldC5lc3RpbWF0ZWRfbWF0ZXJpYWxfZmlsZXMubGVuZ3RoID4gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB4ICsgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTMgYnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT1cIm1hcmdpbjogMFwiPkVzdGltYXRlZCBTZXJ2aWNlIGNvc3QgOiA8L2xhYmVsPjxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocG9wX3RpY2tldC5lc3RpbWF0ZWRfc2VydmljZV9jb3N0ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wX3RpY2tldC5hZF9lc3RpbWF0ZWRfc2VydmljZV9jb3N0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdG9DdXJyZW5jeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh7e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcF90aWNrZXQuZXN0aW1hdGVkX3NlcnZpY2VfY29zdCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIrXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcF90aWNrZXQuYWRfZXN0aW1hdGVkX3NlcnZpY2VfY29zdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBtci0yXCIgOmhyZWY9XCJmaWxlLmZpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIihmaWxlLCB4KSBpbiBwb3BfdGlja2V0LmVzdGltYXRlZF9zZXJ2aWNlX2ZpbGVzXCIgOmtleT1cImZpbGUuaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIj5WaWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3BfdGlja2V0LmVzdGltYXRlZF9zZXJ2aWNlX2ZpbGVzLmxlbmd0aCA+IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8geCArIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zIGJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+QWN0dWFsIE1hdGVyaWFsIENvc3QgOiA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cInBvcF90aWNrZXQuYWN0dWFsX21hdGVyaWFsX2Nvc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwb3BfdGlja2V0LmFjdHVhbF9tYXRlcmlhbF9jb3N0IHwgdG9DdXJyZW5jeSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIG1yLTJcIiA6aHJlZj1cImZpbGUuZmlsZVwiIHYtZm9yPVwiKFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZSwgeFxuICAgICAgICAgICAgICAgICAgICAgICkgaW4gcG9wX3RpY2tldC5hY3R1YWxfZXN0aW1hdGVkX21hdGVyaWFsX2ZpbGVzXCIgOmtleT1cImZpbGUuaWRcIiB0YXJnZXQ9XCJfYmxhbmtcIj5WaWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3BfdGlja2V0LmFjdHVhbF9lc3RpbWF0ZWRfbWF0ZXJpYWxfZmlsZXMubGVuZ3RoID4gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB4ICsgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMyBic1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkFjdHVhbCBTZXJ2aWNlIENvc3QgOiA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cInBvcF90aWNrZXQuYWN0dWFsX3NlcnZpY2VfY29zdFwiPnt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wX3RpY2tldC5hY3R1YWxfc2VydmljZV9jb3N0IHwgdG9DdXJyZW5jeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBtci0yXCIgOmhyZWY9XCJmaWxlLmZpbGVcIiB2LWZvcj1cIihcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGUsIHhcbiAgICAgICAgICAgICAgICAgICAgICApIGluIHBvcF90aWNrZXQuYWN0dWFsX2VzdGltYXRlZF9zZXJ2aWNlX2ZpbGVzXCIgOmtleT1cImZpbGUuaWRcIiB0YXJnZXQ9XCJfYmxhbmtcIj5WaWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3BfdGlja2V0LmFjdHVhbF9lc3RpbWF0ZWRfc2VydmljZV9maWxlcy5sZW5ndGggPiAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHggKyAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00IGJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9XCJtYXJnaW46IDBcIj5UaWNrZXQgTm8gOiA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcG9wX3RpY2tldC50aWNrZXRfbm8gfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00IGJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9XCJtYXJnaW46IDBcIj5MaWtlbHkgRGF0ZSA6IDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwb3BfdGlja2V0Lmxpa2VseV9kYXRlIHwgbXlEYXRlIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00IGJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9XCJtYXJnaW46IDBcIj5BY3R1YWwgRGF0ZSA6IDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwb3BfdGlja2V0LmFjdHVhbF9kYXRlIHwgbXlEYXRlIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00IGJzXCIgdi1pZj1cInBvcF90aWNrZXQuY3VycmVudF9ydW5faG91clwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkN1cnJlbnQgUnVuIEhvdXIgOiA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcG9wX3RpY2tldC5jdXJyZW50X3J1bl9ob3VyIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNCBic1wiIHYtaWY9XCJwb3BfdGlja2V0LmN1cnJlbnRfa21fcnVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q3VycmVudCBLTSBIb3VyIDogPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHBvcF90aWNrZXQuY3VycmVudF9rbV9ydW4gfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00IGJzXCIgdi1pZj1cInBvcF90aWNrZXQuY3VycmVudF9wcm9kdWN0aW9uX2ZpZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkN1cnJlbnQgUHJvZHVjdGlvbiBGaWcgOiA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcG9wX3RpY2tldC5jdXJyZW50X3Byb2R1Y3Rpb25fZmlnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNCBic1wiIHYtaWY9XCJwb3BfdGlja2V0LnByb2R1Y3Rpb25fbG9zc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlByb2R1Y3Rpb24gTG9zcyA6IDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwb3BfdGlja2V0LnByb2R1Y3Rpb25fbG9zcyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTQgYnNcIiB2LWlmPVwicG9wX3RpY2tldC5wcm9kdWN0aW9uX2xvc3NfYW1vdW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UHJvZHVjdGlvbiBMb3NzIEFtb3VudCA6IDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwb3BfdGlja2V0LnByb2R1Y3Rpb25fbG9zc19hbW91bnQgfCB0b0N1cnJlbmN5IH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgVnVlUmVhZE1vcmVTbW9vdGggZnJvbSBcInZ1ZS1yZWFkLW1vcmUtc21vb3RoXCI7XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29tcG9uZW50czogeyBWdWVSZWFkTW9yZVNtb290aCB9LFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjbG9zZV9idG46IHRydWUsXG4gICAgICAgICAgICBhZGRpdGlvbmFsTW9yZTogW10sXG4gICAgICAgICAgICBwcm9ibGVtc01vcmU6IFtdLFxuICAgICAgICAgICAgc2VhcmNoX21hY2hpbmVzOiBbXSxcbiAgICAgICAgICAgIHNlYXJjaF9zaXRlczogW10sXG4gICAgICAgICAgICBzZWFyY2g6IHtcbiAgICAgICAgICAgICAgICBwYWdlOiAxLFxuICAgICAgICAgICAgICAgIG1hY2hpbmVfaWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgc2l0ZV9pZDogXCJcIixcbiAgICAgICAgICAgICAgICBjb21wbGFpbnRfbmF0dXJlOiBcIlwiLFxuICAgICAgICAgICAgICAgIHRpY2tldF90eXBlOlwiXCIsXG4gICAgICAgICAgICAgICAgdGlja2V0OiBcIlwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBvcHRpY2tldDoge30sXG4gICAgICAgICAgICBjYXRlZ29yaWVzOiBbXSxcbiAgICAgICAgICAgIHN1Yl9jYXRlZ29yaWVzOiBbXSxcbiAgICAgICAgICAgIHNpdGVzOiBbXSxcbiAgICAgICAgICAgIHNlbGVjdGVkX21hY2hpbmU6IFwiXCIsXG4gICAgICAgICAgICB1c2VyczogW10sXG4gICAgICAgICAgICBtYWNoaW5lczogW10sXG4gICAgICAgICAgICBUaWNrZXRzOiB7fSxcbiAgICAgICAgICAgIGVkaXRtb2RlOiBmYWxzZSxcbiAgICAgICAgICAgIE1hdGVyaWFsQ29zdDogbnVsbCxcbiAgICAgICAgICAgIFNlcnZpY2VDb3N0OiBudWxsLFxuICAgICAgICAgICAgZm9ybTogbmV3IEZvcm0oe1xuICAgICAgICAgICAgICAgIGlkOiBcIlwiLFxuICAgICAgICAgICAgICAgIHNpdGVfaWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlfaWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3ViX2NhdGVnb3J5X2lkOiBcIlwiLFxuICAgICAgICAgICAgICAgIGZyZWVfc2VydmljZV9ubzogXCJcIixcbiAgICAgICAgICAgICAgICB0aWNrZXRfdHlwZTogXCJQZXJpb2RpYyBNYWludGVuYW5jZVwiLFxuICAgICAgICAgICAgICAgIHNlcnZpY2VfdHlwZTogXCJQYWlkIFNlcnZpY2VcIixcbiAgICAgICAgICAgICAgICBtYWNoaW5lX2lkOiBcIlwiLFxuICAgICAgICAgICAgICAgIHRpY2tldF9ubzogXCJcIixcbiAgICAgICAgICAgICAgICB2ZW5kb3JfaWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgdXNlcl9pZDogXCJcIixcbiAgICAgICAgICAgICAgICBsaWtlbHlfZGF0ZTogXCJcIixcbiAgICAgICAgICAgICAgICBlc3RpbWF0ZWRfbWF0ZXJpYWxfY29zdDogXCJcIixcbiAgICAgICAgICAgICAgICBlc3RpbWF0ZWRfc2VydmljZV9jb3N0OiBcIlwiLFxuICAgICAgICAgICAgICAgIG1haW50ZW5hbmNlX3Byb3ZpZGVyOiBcInZlbmRvclwiLFxuICAgICAgICAgICAgICAgIHByb2JsZW1fZGVzY3JpcHRpb246IFwiXCIsXG4gICAgICAgICAgICAgICAgY29tcGxhaW50X25hdHVyZTogXCJNYWpvclwiLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBzdGFnZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBzdGFnZV9ubzogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgc3RhZ2VfZGF0ZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGZpbGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIG5ld19maWxlOiBcIlwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuXG4gICAgICAgICAgICBmb3JtY2xvc2U6IG5ldyBGb3JtKHtcbiAgICAgICAgICAgICAgICBpZDogXCJcIixcbiAgICAgICAgICAgICAgICBtYWNoaW5lX3N0YXR1czogXCJcIixcbiAgICAgICAgICAgICAgICBlZGl0X3R5cGU6IFwiY2xvc2V0aWNrZXRcIixcbiAgICAgICAgICAgICAgICB0aWNrZXRfdHlwZTogXCJQZXJpb2RpYyBNYWludGVuYW5jZVwiLFxuICAgICAgICAgICAgICAgIGFjdHVhbF9kYXRlOiBcIlwiLFxuICAgICAgICAgICAgICAgIGFjdHVhbF9tYXRlcmlhbF9jb3N0OiBcIlwiLFxuICAgICAgICAgICAgICAgIGFjdHVhbF9zZXJ2aWNlX2Nvc3Q6IFwiXCIsXG4gICAgICAgICAgICAgICAgY3VycmVudF9ydW5faG91cjogXCJcIixcbiAgICAgICAgICAgICAgICBjdXJyZW50X2ttX3J1bjogXCJcIixcbiAgICAgICAgICAgICAgICBjdXJyZW50X3Byb2R1Y3Rpb25fZmlnOiBcIlwiLFxuICAgICAgICAgICAgICAgIHByb2R1Y3Rpb25fbG9zczogXCJcIixcbiAgICAgICAgICAgICAgICBwcm9kdWN0aW9uX2xvc3NfYW1vdW50OiBcIlwiLFxuICAgICAgICAgICAgICAgIHN0YXR1czogXCJDbG9zZWRcIixcbiAgICAgICAgICAgICAgICB2ZW5kb3JfcmVzb2x2ZV9kYXRlOiBcIlwiLFxuICAgICAgICAgICAgICAgIHZlbmRvcl9hdHRhaW5fZGF0ZTogXCJcIixcbiAgICAgICAgICAgICAgICB2ZW5kb3JfcmVzcG9uc2VfZGF0ZTogXCJcIixcbiAgICAgICAgICAgICAgICB2ZW5kb3JfY2FsbF9kYXRlOiBcIlwiLFxuICAgICAgICAgICAgICAgIHJjYTogXCJcIixcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgcG9wX21hY2hpbmU6IFwiXCIsXG4gICAgICAgICAgICBwb3BfdGlja2V0OiBcIlwiLFxuICAgICAgICAgICAgb3BuX3N0YWdlOiBbXG4gICAgICAgICAgICAgICAgXCJWZW5kb3IgY3JlYXRlZFwiLFxuICAgICAgICAgICAgICAgIFwiVmVuZG9yIEFzc2lnbmVkXCIsXG4gICAgICAgICAgICAgICAgXCJPcmRlciBpc3N1ZWRcIixcbiAgICAgICAgICAgICAgICBcIlBheW1lbnQgdW5kZXIgcHJvY2Vzc1wiLFxuICAgICAgICAgICAgICAgIFwiUGF5bWVudCBEb25lXCIsXG4gICAgICAgICAgICAgICAgXCJMb2dpc3RpY3MgdW5kZXIgcHJvY2Vzc1wiLFxuICAgICAgICAgICAgICAgIFwiTWF0ZXJpYWxzIGRlc3BhdGNoZWRcIixcbiAgICAgICAgICAgICAgICBcIk1hdGVyaWFsIHJlY2VpdmVkIGF0IHNpdGVcIixcbiAgICAgICAgICAgICAgICBcIk1haW50YWluYWNlIHVuZGVyIHByb2dyZXNzXCIsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgbGFzdF9zdGFnZV9pbmRleDogMCxcbiAgICAgICAgICAgIGxhc3Rfc3RhZ2VfZGF0ZTogXCJcIixcblxuICAgICAgICAgICAganNvbl9maWVsZHM6IHtcbiAgICAgICAgICAgICAgICBcIlRpY2tldCBOb1wiOiBcInRpY2tldF9ub1wiLFxuICAgICAgICAgICAgICAgIFwiVGlja2V0IFR5cGVcIjogXCJ0aWNrZXRfdHlwZVwiLFxuICAgICAgICAgICAgICAgIE1hY2hpbmU6IHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6IFwibWFjaGluZVwiLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogKHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbC5uYW1lICsgXCIgLSBcIiArIHZhbC5mYXJfbm87XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcIkxpa2VseSBEYXRlXCI6IFwibGlrZWx5X2RhdGVcIixcbiAgICAgICAgICAgICAgICBcIlJldmVyc2lvbiBEYXRlXCI6IFwicmV2ZXJzaW9uX2RhdGVcIixcbiAgICAgICAgICAgICAgICBcIlJldmVyc2lvbiBSZWFzb25cIjogXCJyZXZlcnNpb25fcmVhc29uXCIsXG4gICAgICAgICAgICAgICAgXCJFc3RpbWF0ZWQgTWF0ZXJpYWwgQ29zdFwiOiBcImVzdGltYXRlZF9tYXRlcmlhbF9jb3N0XCIsXG4gICAgICAgICAgICAgICAgXCJFc3RpbWF0ZWQgU2VydmljZSBDb3N0XCI6IFwiZXN0aW1hdGVkX3NlcnZpY2VfY29zdFwiLFxuICAgICAgICAgICAgICAgIFwiQWN0dWFsIERhdGVcIjogXCJhY3R1YWxfZGF0ZVwiLFxuICAgICAgICAgICAgICAgIFwiQWN0dWFsIE1hdGVyaWFsIENvc3RcIjogXCJhY3R1YWxfbWF0ZXJpYWxfY29zdFwiLFxuICAgICAgICAgICAgICAgIFwiQWN0dWFsIFNlcnZpY2UgQ29zdFwiOiBcImFjdHVhbF9zZXJ2aWNlX2Nvc3RcIixcbiAgICAgICAgICAgICAgICBcIlN0YXR1c1wiOiBcInN0YXR1c1wiLFxuICAgICAgICAgICAgICAgIFwiU2VydmljZSBUeXBlXCI6IFwic2VydmljZV90eXBlXCIsXG4gICAgICAgICAgICAgICAgXCJNYWludGVuYW5jZSBQcm92aWRlclwiOiBcIm1haW50ZW5hbmNlX3Byb3ZpZGVyXCIsXG4gICAgICAgICAgICAgICAgXCJQcm9ibGVtIERlc2NyaXB0aW9uXCI6IFwicHJvYmxlbV9kZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgICAgIFwiQ29tcGxhaW50IE5hdHVyZVwiOiBcImNvbXBsYWludF9uYXR1cmVcIixcbiAgICAgICAgICAgICAgICBcIlN0YXR1cyBEdXJpbmcgQ29tcGxhaW50XCI6IFwic3RhdHVzX2R1cmluZ19jb21wbGFpbnRcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBqc29uX21ldGE6IFtcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJjaGFyc2V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJ1dGYtOFwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBhc3luYyByZXNldF9maWx0ZXIoKSB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaCA9IHtcbiAgICAgICAgICAgICAgICBwYWdlOiAxLFxuICAgICAgICAgICAgICAgIG1hY2hpbmVfaWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgc2l0ZV9pZDogXCJcIixcbiAgICAgICAgICAgICAgICBjb21wbGFpbnRfbmF0dXJlOiBcIlwiLFxuICAgICAgICAgICAgICAgIHRpY2tldF90eXBlOiBcIlwiLFxuICAgICAgICAgICAgICAgIHRpY2tldDogXCJcIixcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgZXhwb3J0X2NzdigpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiYXBpL3RpY2tldD9leHBvcnQ9MVwiLCB7XG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaDogdGhpcy5zZWFyY2gsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEuZGF0YTtcbiAgICAgICAgfSxcbiAgICAgICAgc3RhcnREb3dubG9hZCgpIHtcbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiUGxlYXNlIFdhaXQgIVwiLFxuICAgICAgICAgICAgICAgIGh0bWw6IFwiRGF0YSBwb3B1bGF0aW5nXCIsIC8vIGFkZCBodG1sIGF0dHJpYnV0ZSBpZiB5b3Ugd2FudCBvciByZW1vdmVcbiAgICAgICAgICAgICAgICBhbGxvd091dHNpZGVDbGljazogZmFsc2UsXG4gICAgICAgICAgICAgICAgb25CZWZvcmVPcGVuOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIFN3YWwuc2hvd0xvYWRpbmcoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGZpbmlzaERvd25sb2FkKCkge1xuICAgICAgICAgICAgU3dhbC5jbG9zZSgpO1xuICAgICAgICB9LFxuICAgICAgICBzY2xpY2soeCwgcCA9IFwiXCIpIHtcbiAgICAgICAgICAgIGlmIChwKSB7XG4gICAgICAgICAgICAgICAgbGV0IGEgPSB0aGlzLnByb2JsZW1zTW9yZVt4XSA/IGZhbHNlIDogdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5wcm9ibGVtc01vcmUsIHgsIGEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgYSA9IHRoaXMuYWRkaXRpb25hbE1vcmVbeF0gPyBmYWxzZSA6IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMuYWRkaXRpb25hbE1vcmUsIHgsIGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBnZXRMYWJlbCh2YWwpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbC5mYXJfbm8gKyBcIiAtIFwiICsgdmFsLm5hbWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHZpZXdNb2RhbCh0aWNrZXQpIHtcbiAgICAgICAgICAgIHRoaXMucG9wX3RpY2tldCA9IFwiXCI7XG5cbiAgICAgICAgICAgIGF4aW9zXG4gICAgICAgICAgICAgICAgLmdldChcImFwaS90aWNrZXQvXCIgKyB0aWNrZXQuaWQpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcF90aWNrZXQgPSByZXMuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3BfdGlja2V0ID0gdGlja2V0O1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBheGlvcy5nZXQoXCJhcGkvY2F0ZWdvcnkvXCIgKyB0aWNrZXQuY2F0ZWdvcnlfaWQpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3ViX2NhdGVnb3JpZXMgPSByZXMuZGF0YS5kYXRhO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAkKFwiI3ZpZXdtb2RhbFwiKS5tb2RhbChcInNob3dcIik7XG4gICAgICAgIH0sXG4gICAgICAgIEFkZFN0YWdlKCkge1xuICAgICAgICAgICAgdGhpcy5zdGFnZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgaWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3RhZ2Vfbm86IFwiXCIsXG4gICAgICAgICAgICAgICAgc3RhZ2VfZGF0ZTogXCJcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICAgICAgICAgICAgICBmaWxlOiBcIlwiLFxuICAgICAgICAgICAgICAgIG5ld19maWxlOiBcIlwiLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIGNob29zZV9zdGFnZV9maWxlKGV2ZW50LCB4KSB7XG4gICAgICAgICAgICB0aGlzLnN0YWdlc1t4XS5uZXdfZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcbiAgICAgICAgfSxcblxuICAgICAgICBhc3luYyB1cGxvYWRNYXRlcmlhbENvc3QoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuTWF0ZXJpYWxDb3N0ID0gZXZlbnQudGFyZ2V0LmZpbGVzO1xuICAgICAgICB9LFxuICAgICAgICBhc3luYyB1cGxvYWRTZXJ2aWNlQ29zdChldmVudCkge1xuICAgICAgICAgICAgdGhpcy5TZXJ2aWNlQ29zdCA9IGV2ZW50LnRhcmdldC5maWxlcztcbiAgICAgICAgfSxcblxuICAgICAgICBnZXRSZXN1bHRzKHBhZ2UgPSAxKSB7XG4gICAgICAgICAgICB0aGlzLiRQcm9ncmVzcy5zdGFydCgpO1xuICAgICAgICAgICAgdGhpcy5zZWFyY2gucGFnZSA9IHBhZ2U7XG4gICAgICAgICAgICBheGlvc1xuICAgICAgICAgICAgICAgIC5nZXQoXCIvYXBpL3RpY2tldFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczogdGhpcy5zZWFyY2gsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlRpY2tldHMgPSBkYXRhLmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRpdGlvbmFsTW9yZSA9IG5ldyBBcnJheSh0aGlzLlRpY2tldHMuZGF0YS5sZW5ndGgpLmZpbGwoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2JsZW1zTW9yZSA9IG5ldyBBcnJheSh0aGlzLlRpY2tldHMuZGF0YS5sZW5ndGgpLmZpbGwoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy4kUHJvZ3Jlc3MuZmluaXNoKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY2FsY3VsYXRlX2xvc3MoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtY2xvc2UuYWN0dWFsX2RhdGUgJiYgdGhpcy5wb3BfdGlja2V0LmNyZWF0ZWRfYXQpIHtcbiAgICAgICAgICAgICAgICBsZXQgYSA9IG5ldyBEYXRlKHRoaXMuZm9ybWNsb3NlLmFjdHVhbF9kYXRlKS50b0lTT1N0cmluZygpO1xuICAgICAgICAgICAgICAgIGxldCBiID0gbmV3IERhdGUodGhpcy5wb3BfdGlja2V0LmNyZWF0ZWRfYXQpLnRvSVNPU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZUIgPSBtb21lbnQoYSk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZUMgPSBtb21lbnQoYik7XG5cblxuICAgICAgICAgICAgICAgIHZhciBEaWZmID0gZGF0ZUIuZGlmZihkYXRlQywgJ2RheXMnKSArIDE7XG5cbiAgICAgICAgICAgICAgICBsZXQgaHJzID0gdGhpcy5wb3BfbWFjaGluZS5wcmRsb3NzX2hyc1xuICAgICAgICAgICAgICAgIGxldCByYXRlID0gdGhpcy5wb3BfbWFjaGluZS5wcmRsb3NzX2hyX3JhdGVcbiAgICAgICAgICAgICAgICBsZXQgdGxvc3MgPSAoRGlmZiAqIGhycyk7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtY2xvc2UucHJvZHVjdGlvbl9sb3NzX2Ftb3VudCA9ICh0bG9zcyAqIHJhdGUpXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtY2xvc2UucHJvZHVjdGlvbl9sb3NzID0gdGxvc3NcblxuXG5jb25zb2xlLmxvZyhocnMscmF0ZSxEaWZmKTtcblxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSxcbiAgICAgICAgc3VibWl0Q2xvc2VUaWNrZXQoKSB7XG4gICAgICAgICAgICB0aGlzLiRmb3JjZVVwZGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy4kdmFsaWRhdG9yLnZhbGlkYXRlQWxsKFwiY2xvc2V0aWNrZXRcIikudGhlbihhc3luYyAodmFsaWQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBvcF9sb2FkZXIgPSB0aGlzLiRsb2FkaW5nLnNob3coe30pO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbGFzdF9tRGF0ZSA9IHRoaXMucG9wX21hY2hpbmUubGFzdF9tYWludGVuYW5jZXNcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5wb3BfbWFjaGluZS5sYXN0X21haW50ZW5hbmNlcy5kYXRldGltZVxuICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnBvcF9tYWNoaW5lLmxhc3RfbWFpbnRlbmFuY2VfZGF0ZTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0X21EYXRlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm1jbG9zZS5hY3R1YWxfZGF0ZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZS5wYXJzZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb21lbnQodGhpcy5mb3JtY2xvc2UuYWN0dWFsX2RhdGUpLmZvcm1hdChcIk1NTSxERCBZWVlZXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICApIDwgRGF0ZS5wYXJzZShtb21lbnQobGFzdF9tRGF0ZSkuZm9ybWF0KFwiTU1NLEREIFlZWVlcIikpXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9wX2xvYWRlci5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBTd2FsLmZpcmUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJZb3UgY2FuIG5vdCBhZGQgcHJldmlvdXMgZGF0ZSdzIGRhdGEsIFBsZWFzZSByZW1vdmUgcmVjb3JkIGZyb20gbWFpbnRlbmFuY2UgbGlzdC5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2FybmluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZV9idG4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybWNsb3NlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnB1dChcIi9hcGkvdGlja2V0L1wiICsgdGhpcy5mb3JtY2xvc2UuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjY2xvc2Vtb2RhbFwiKS5tb2RhbChcImhpZGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UuZGF0YS5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZF9maWxlcyh0aGlzLmZvcm1jbG9zZS5pZCwgXCJhY3R1YWxcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiR2YWxpZGF0b3IucmVzZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybWNsb3NlLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRUaWNrZXRzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZV9idG4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3BfbG9hZGVyLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VfYnRuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wX2xvYWRlci5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZXJyLnJlc3BvbnNlLmRhdGEgIT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0RXJyb3JzRnJvbVJlc3BvbnNlKGVyci5yZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY2xvc2VNb2RhbCh0aWNrZXQpIHtcbiAgICAgICAgICAgIHRoaXMuJHZhbGlkYXRvci5wYXVzZSgpO1xuICAgICAgICAgICAgJChcIiNjbG9zZW1vZGFsXCIpLm1vZGFsKFwic2hvd1wiKTtcbiAgICAgICAgICAgIHRoaXMuJHZhbGlkYXRvci5yZXNldCgpO1xuICAgICAgICAgICAgdGhpcy5mb3JtY2xvc2UucmVzZXQoKTtcbiAgICAgICAgICAgIHRoaXMuJHJlZnMuZmlsZWFjdHVhbHNlcnZpY2UudmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy4kcmVmcy5maWxlYWN0dWFsbWF0ZXJpYWwudmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5wb3BfdGlja2V0ID0gdGlja2V0O1xuICAgICAgICAgICAgdGhpcy5wb3BfbWFjaGluZSA9IHRpY2tldC5tYWNoaW5lO1xuICAgICAgICAgICAgdGhpcy5mb3JtY2xvc2UuZmlsbCh0aWNrZXQpO1xuICAgICAgICAgICAgdGhpcy5mb3JtY2xvc2UuZWRpdF90eXBlID0gXCJjbG9zZXRpY2tldFwiO1xuICAgICAgICAgICAgdGhpcy4kdmFsaWRhdG9yLnJlc3VtZSgpO1xuICAgICAgICB9LFxuICAgICAgICBlZGl0TW9kYWwodGlja2V0KSB7XG4gICAgICAgICAgICB0aGlzLmVkaXRtb2RlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuJHZhbGlkYXRvci5wYXVzZSgpO1xuICAgICAgICAgICAgdGhpcy5mb3JtLnJlc2V0KCk7XG4gICAgICAgICAgICB0aGlzLnBvcF90aWNrZXQgPSB0aWNrZXQ7XG4gICAgICAgICAgICBpZiAodGhpcy4kZ2F0ZS5pc0FkbWluKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLmZpbGVzZXJ2aWNlLnZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLmZpbGVtYXRlcmlhbC52YWx1ZSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLk1hdGVyaWFsQ29zdCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLlNlcnZpY2VDb3N0ID0gbnVsbDtcbiAgICAgICAgICAgICQoXCIjYWRkTmV3XCIpLm1vZGFsKFwic2hvd1wiKTtcbiAgICAgICAgICAgIHRoaXMuZm9ybS5maWxsKHRpY2tldCk7XG4gICAgICAgICAgICB0aGlzLmZvcm0ubGlrZWx5X2RhdGUgPSB0aWNrZXQubGlrZWx5X2RhdGVcbiAgICAgICAgICAgICAgICA/IG5ldyBEYXRlKHRpY2tldC5saWtlbHlfZGF0ZSkudG9JU09TdHJpbmcoKVxuICAgICAgICAgICAgICAgIDogXCJcIjtcbiAgICAgICAgICAgIHRoaXMuc3RhZ2VzID0gW107XG4gICAgICAgICAgICBpZiAodGlja2V0LnN0YWdlcyAmJiB0aWNrZXQuc3RhZ2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YWdlcyA9IHRpY2tldC5zdGFnZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLiR2YWxpZGF0b3IucmVzdW1lKCk7XG4gICAgICAgIH0sXG4gICAgICAgIG5ld01vZGFsKCkge1xuICAgICAgICAgICAgdGhpcy5zdGFnZXMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuQWRkU3RhZ2UoKTtcbiAgICAgICAgICAgIHRoaXMuZWRpdG1vZGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuJHZhbGlkYXRvci5yZXNldCgpO1xuICAgICAgICAgICAgdGhpcy4kdmFsaWRhdG9yLnBhdXNlKCk7XG4gICAgICAgICAgICB0aGlzLmZvcm0ucmVzZXQoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLiRnYXRlLmlzQWRtaW4oKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuZmlsZXNlcnZpY2UudmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuZmlsZW1hdGVyaWFsLnZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuTWF0ZXJpYWxDb3N0ID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuU2VydmljZUNvc3QgPSBudWxsO1xuICAgICAgICAgICAgJChcIiNhZGROZXdcIikubW9kYWwoXCJzaG93XCIpO1xuICAgICAgICAgICAgdGhpcy4kdmFsaWRhdG9yLnJlc3VtZSgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGxvYWRUaWNrZXRzKCkge1xuICAgICAgICAgICAgLy8gaWYgKHRoaXMuJGdhdGUuaXNBZG1pbigpKSB7XG4gICAgICAgICAgICBsZXQgcG9wX2xvYWRlciA9IHRoaXMuJGxvYWRpbmcuc2hvdyh7fSk7XG4gICAgICAgICAgICBheGlvc1xuICAgICAgICAgICAgICAgIC5nZXQoXCIvYXBpL3RpY2tldFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczogdGhpcy5zZWFyY2gsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlRpY2tldHMgPSBkYXRhLmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRpdGlvbmFsTW9yZSA9IG5ldyBBcnJheSh0aGlzLlRpY2tldHMuZGF0YS5sZW5ndGgpLmZpbGwoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2JsZW1zTW9yZSA9IG5ldyBBcnJheSh0aGlzLlRpY2tldHMuZGF0YS5sZW5ndGgpLmZpbGwoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBwb3BfbG9hZGVyLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHBvcF9sb2FkZXIuaGlkZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgYXN5bmMgdXBsb2FkX2ZpbGVzKGlkLCBpc2FjdHVhbCA9IGZhbHNlKSB7XG4gICAgICAgICAgICBsZXQgZmwgPSAwO1xuICAgICAgICAgICAgaWYgKHRoaXMuTWF0ZXJpYWxDb3N0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5NYXRlcmlhbENvc3QuZm9yRWFjaCgoZmlsZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZmQgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgZmQuYXBwZW5kKGBmaWxlYCwgZmlsZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc2FjdHVhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmQuYXBwZW5kKGBmaWxlX3R5cGVgLCBcIkFjdHVhbCBFc3RpbWF0ZWQgTWF0ZXJpYWxcIik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmZC5hcHBlbmQoYGZpbGVfdHlwZWAsIFwiRXN0aW1hdGVkIE1hdGVyaWFsXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZkLmFwcGVuZChgdGlja2V0X2lkYCwgaWQpO1xuICAgICAgICAgICAgICAgICAgICBheGlvcy5wb3N0KFwiYXBpL3RpY2tldC9maWxlc1wiLCBmZCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImdhbGxlcnkgdXBsb2FkZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuU2VydmljZUNvc3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlNlcnZpY2VDb3N0LmZvckVhY2goKGZpbGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZkID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICAgICAgICAgIGZkLmFwcGVuZChgZmlsZWAsIGZpbGUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNhY3R1YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZkLmFwcGVuZChgZmlsZV90eXBlYCwgXCJBY3R1YWwgRXN0aW1hdGVkIFNlcnZpY2VcIik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmZC5hcHBlbmQoYGZpbGVfdHlwZWAsIFwiRXN0aW1hdGVkIFNlcnZpY2VcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZmQuYXBwZW5kKGB0aWNrZXRfaWRgLCBpZCk7XG4gICAgICAgICAgICAgICAgICAgIGF4aW9zLnBvc3QoXCJhcGkvdGlja2V0L2ZpbGVzXCIsIGZkKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2FsbGVyeSB1cGxvYWRlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgYXN5bmMgdXBsb2FkX3N0YWdlcyhpZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhZ2VzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFnZXMuZm9yRWFjaCgoc3RhZ2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZkID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICAgICAgICAgIGZkLmFwcGVuZChgaWRgLCBzdGFnZS5pZCk7XG4gICAgICAgICAgICAgICAgICAgIGZkLmFwcGVuZChgc3RhZ2Vfbm9gLCBzdGFnZS5zdGFnZV9ubyk7XG4gICAgICAgICAgICAgICAgICAgIGZkLmFwcGVuZChgc3RhZ2VfZGF0ZWAsIHN0YWdlLnN0YWdlX2RhdGUpO1xuICAgICAgICAgICAgICAgICAgICBmZC5hcHBlbmQoYGRlc2NyaXB0aW9uYCwgc3RhZ2UuZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAvL2ZkLmFwcGVuZChgbmV3X2ZpbGVgLCBzdGFnZS5uZXdfZmlsZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGZkLmFwcGVuZChgZmlsZWAsIHN0YWdlLmZpbGUpO1xuICAgICAgICAgICAgICAgICAgICBmZC5hcHBlbmQoYHRpY2tldF9pZGAsIGlkKTtcbiAgICAgICAgICAgICAgICAgICAgYXhpb3MucG9zdChcImFwaS90aWNrZXQvc3RhZ2VzXCIsIGZkKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RhZ2VzIHVwbG9hZGVkXCIpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBzdWJtaXRUaWNrZXQoKSB7XG4gICAgICAgICAgICB0aGlzLiR2YWxpZGF0b3IudmFsaWRhdGVBbGwoKS50aGVuKGFzeW5jICh2YWxpZCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcG9wX2xvYWRlciA9IHRoaXMuJGxvYWRpbmcuc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXI6IHRoaXMuJHJlZnMudnBzX3N1Ym1pdF9wb3AsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucHV0KFwiL2FwaS90aWNrZXQvXCIgKyB0aGlzLmZvcm0uaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjYWRkTmV3XCIpLm1vZGFsKFwiaGlkZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZS5kYXRhLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBsb2FkX3N0YWdlcyh0aGlzLmZvcm0uaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGxvYWRfZmlsZXModGhpcy5mb3JtLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFRpY2tldHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3BfbG9hZGVyLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcF9sb2FkZXIuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGVyci5yZXNwb25zZS5kYXRhICE9IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHNldEVycm9yc0Zyb21SZXNwb25zZShlcnIucmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wb3N0KFwiL2FwaS90aWNrZXRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNhZGROZXdcIikubW9kYWwoXCJoaWRlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLmRhdGEubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZF9maWxlcyhyZXNwb25zZS5kYXRhLmRhdGEuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkVGlja2V0cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcF9sb2FkZXIuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wX2xvYWRlci5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZXJyLnJlc3BvbnNlLmRhdGEgIT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0RXJyb3JzRnJvbVJlc3BvbnNlKGVyci5yZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYXN5bmMgY2hlY2tfZnJlZV9zZXJ2aWNlKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRfbWFjaGluZSkge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZF9tYWNoaW5lLmNvbXBsZXRlZF9mcmVlX3NlcnZpY2UgPj1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZF9tYWNoaW5lLmZyZWVfc2VydmljZV9ub1xuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0uc2VydmljZV90eXBlID0gXCJQYWlkIFNlcnZpY2VcIjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLmZyZWVfc2VydmljZV9ubyA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLmZyZWVfc2VydmljZV9ubyA9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkX21hY2hpbmUuY29tcGxldGVkX2ZyZWVfc2VydmljZSArIDE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkX21hY2hpbmUgJiZcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZF9tYWNoaW5lLm1hY2hpbmVfdHlwZSA9PSBcIk5ld1wiICYmXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5zZXJ2aWNlX3R5cGUgPT0gXCJGcmVlIFNlcnZpY2VcIlxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgdGhpcy5zZWxlY3RlZF9tYWNoaW5lLmZyZWVfc2VydmljZV9ub1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBhc3luYyBnZXRfbWFjaGluZSgpIHtcbiAgICAgICAgICAgIGF4aW9zXG4gICAgICAgICAgICAgICAgLmdldChcIi9hcGkvdGlja2V0X21hY2hpbmVcIiwge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpdGVfaWQ6IHRoaXMuZm9ybS5zaXRlX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlfaWQ6IHRoaXMuZm9ybS5jYXRlZ29yeV9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Yl9jYXRlZ29yeV9pZDogdGhpcy5mb3JtLnN1Yl9jYXRlZ29yeV9pZCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hY2hpbmVzID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IGNvbnNvbGUud2FybihcIk9oLiBTb21ldGhpbmcgd2VudCB3cm9uZ1wiKSk7XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBtb3VudGVkKCkgeyB9LFxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIHRoaXMubG9hZFRpY2tldHMoKTtcbiAgICB9LFxuICAgIGJlZm9yZUNyZWF0ZSgpIHtcbiAgICAgICAgYXhpb3MuZ2V0KFwiYXBpL2dldF9wcmVfbWFjaGluZVwiKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IHJlcy5kYXRhLmRhdGEuQ2F0ZWdvcnk7XG4gICAgICAgICAgICB0aGlzLnNpdGVzID0gcmVzLmRhdGEuZGF0YS5zaXRlcztcbiAgICAgICAgfSk7XG4gICAgICAgIGF4aW9zXG4gICAgICAgICAgICAuZ2V0KFwiL2FwaS9pbml0aWFsX3RpY2tldFwiKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VycyA9IHJlc3BvbnNlLmRhdGEuZGF0YS52ZW5kb3JzO1xuICAgICAgICAgICAgICAgIHRoaXMubWFjaGluZXMgPSByZXNwb25zZS5kYXRhLmRhdGEubWFjaGluZXM7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hfbWFjaGluZXMgPSByZXNwb25zZS5kYXRhLmRhdGEubWFjaGluZXM7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hfc2l0ZXMgPSByZXNwb25zZS5kYXRhLmRhdGEuc2l0ZXM7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IGNvbnNvbGUud2FybihcIk9oLiBTb21ldGhpbmcgd2VudCB3cm9uZ1wiKSk7XG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICBcImZvcm1jbG9zZS5tYWNoaW5lX3N0YXR1c1wiKG4pIHtcbiAgICAgICAgICAgIGlmIChuID09IFwiTm9uIFJlcGFpcmFibGVcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybWNsb3NlLmFjdHVhbF9tYXRlcmlhbF9jb3N0ID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1jbG9zZS5hY3R1YWxfc2VydmljZV9jb3N0ID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtY2xvc2UuYWN0dWFsX21hdGVyaWFsX2Nvc3QgPSBcIlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybWNsb3NlLmFjdHVhbF9zZXJ2aWNlX2Nvc3QgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBhc3luYyBcImZvcm0uc3ViX2NhdGVnb3J5X2lkXCIobiwgbykge1xuICAgICAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldF9tYWNoaW5lKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIFwiZm9ybS5zaXRlX2lkXCIobiwgbykge1xuICAgICAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldF9tYWNoaW5lKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgXCJmb3JtLmNhdGVnb3J5X2lkXCI6IHtcbiAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uIChuLCBvKSB7XG4gICAgICAgICAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICAgICAgICAgICAgYXhpb3MuZ2V0KFwiYXBpL2NhdGVnb3J5L1wiICsgbikudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Yl9jYXRlZ29yaWVzID0gcmVzLmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0X21hY2hpbmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVlcDogdHJ1ZSxcbiAgICAgICAgICAgIGluaXRpYWw6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHN0YWdlczoge1xuICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKG4sIG8pIHtcbiAgICAgICAgICAgICAgICBpZiAobiAmJiBuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxhID0gbltuLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgICAgICBpZiAobGEuc3RhZ2Vfbm8pXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3Rfc3RhZ2VfaW5kZXggPSB0aGlzLm9wbl9zdGFnZS5pbmRleE9mKGxhLnN0YWdlX25vKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhLnN0YWdlX2RhdGUpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3Rfc3RhZ2VfZGF0ZSA9IG5ldyBEYXRlKGxhLnN0YWdlX2RhdGUpLnRvSVNPU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0X3N0YWdlX2luZGV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucG9wX3RpY2tldCAmJiB0aGlzLnBvcF90aWNrZXQuY3JlYXRlZF9hdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0X3N0YWdlX2RhdGUgPSBuZXcgRGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcF90aWNrZXQuY3JlYXRlZF9hdFxuICAgICAgICAgICAgICAgICAgICAgICAgKS50b0lTT1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0X3N0YWdlX2RhdGUgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVlcDogdHJ1ZSxcbiAgICAgICAgICAgIGluaXRpYWw6IHRydWUsXG4gICAgICAgIH0sXG5cbiAgICAgICAgYXN5bmMgXCJmb3JtLm1haW50ZW5hbmNlX3Byb3ZpZGVyXCIobikge1xuICAgICAgICAgICAgaWYgKG4gIT0gXCJ2ZW5kb3JcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5zZXJ2aWNlX3R5cGUgPSBcIlBhaWQgU2VydmljZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXhpb3NcbiAgICAgICAgICAgICAgICAuZ2V0KFwiYXBpL3VzZXIvbGlzdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogbixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJzID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IGNvbnNvbGUud2FybihcIk9oLiBTb21ldGhpbmcgd2VudCB3cm9uZ1wiKSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYXN5bmMgXCJmb3JtLm1hY2hpbmVfaWRcIihuKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkX21hY2hpbmUgPSB0aGlzLm1hY2hpbmVzLmZpbmQoKHgpID0+IHguaWQgPT09IG4pO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5jaGVja19mcmVlX3NlcnZpY2UoKTtcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgXCJmb3JtLnNlcnZpY2VfdHlwZVwiKG4pIHtcbiAgICAgICAgICAgIGlmIChuID09IFwiRnJlZSBTZXJ2aWNlXCIpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmNoZWNrX2ZyZWVfc2VydmljZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBhc3luYyBcImZvcm1jbG9zZS5hY3R1YWxfZGF0ZVwiKCkge1xuICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVfbG9zcygpO1xuICAgICAgICB9XG4gICAgfSxcbn07XG48L3NjcmlwdD5cbjxzdHlsZT5cbi5icyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2QyZDFkMWE4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmNvbW1hfi5jb21tYTpub3QoOmVtcHR5KTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiLCBcIjtcbn1cblxuLnJtb3JlIHtcbiAgICBjb2xvcjogYmx1ZTtcbn1cbjwvc3R5bGU+XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmJzIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2QyZDFkMWE4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5jb21tYX4uY29tbWE6bm90KDplbXB0eSk6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIiwgXFxcIjtcXG59XFxuLnJtb3JlIHtcXG4gICAgY29sb3I6IGJsdWU7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJGOi93YW1wNjQvd3d3L3JtbS9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9UaWNrZXRzL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1RpY2tldHMvaW5kZXgudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUEyM0NBO0lBQ0EsNEJBQUE7SUFDQSxtQkFBQTtDQUNBO0FBRUE7SUFDQSxjQUFBO0NBQ0E7QUFFQTtJQUNBLFlBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiaW5kZXgudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gICAgPHNlY3Rpb24gY2xhc3M9XFxcImNvbnRlbnRcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtMTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1oZWFkZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPlRpY2tldCBMaXN0PC9oMz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC10b29sc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgdG89XFxcIi90aWNrZXQvYWRkXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zbSBidG4tcHJpbWFyeVxcXCIgQGNsaWNrPVxcXCJuZXdNb2RhbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXBsdXMtc3F1YXJlXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkIE5ld1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5IHAtMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIiBAc3VibWl0LnByZXZlbnQ9XFxcImdldFJlc3VsdHMoKVxcXCIgZGF0YS12di1zY29wZT1cXFwic2VhcmNoZnJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1yb3dcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cXFwibmFtZVxcXCIgOmdldC1vcHRpb24tbGFiZWw9XFxcImdldExhYmVsXFxcIiA6cmVkdWNlPVxcXCIob3B0aW9uKSA9PiBvcHRpb24uaWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cXFwic2VhcmNoX21hY2hpbmVzXFxcIiBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgbWFjaGluZXMgLi4uXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwic2VhcmNoLm1hY2hpbmVfaWRcXFwiIG5hbWU9XFxcIm1hY2hpbmVfaWRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgdGlja2V0IC4uLlxcXCIgdi1tb2RlbD1cXFwic2VhcmNoLnRpY2tldFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XFxcInRpY2tldFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XFxcInNpdGVfbmFtZVxcXCIgOnJlZHVjZT1cXFwiKG9wdGlvbikgPT4gb3B0aW9uLmlkXFxcIiA6b3B0aW9ucz1cXFwic2VhcmNoX3NpdGVzXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIlNlbGVjdCBTaXRlLi4uXFxcIiB2LW1vZGVsPVxcXCJzZWFyY2guc2l0ZV9pZFxcXCIgbmFtZT1cXFwic2l0ZV9pZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVxcXCJzaXRlX25hbWVcXFwiIDpvcHRpb25zPVxcXCJbJ09wZW4nLCAnQ2xvc2VkJ11cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiU2VsZWN0IFN0YXR1cy4uLlxcXCIgdi1tb2RlbD1cXFwic2VhcmNoLnN0YXR1c1xcXCIgbmFtZT1cXFwic3RhdHVzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XFxcInNpdGVfbmFtZVxcXCIgOm9wdGlvbnM9XFxcIlsnTWFqb3InLCAnTWlub3InXVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJTZWxlY3QgQ29tcGxhaW50IE5hdHVyZS4uLlxcXCIgdi1tb2RlbD1cXFwic2VhcmNoLmNvbXBsYWludF9uYXR1cmVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVxcXCJjb21wbGFpbnRfbmF0dXJlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XFxcInNpdGVfbmFtZVxcXCIgOm9wdGlvbnM9XFxcIlsnQnJlYWtkb3duIE1haW50ZW5hbmNlJywgJ1BlcmlvZGljIE1haW50ZW5hbmNlJ11cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiU2VsZWN0IFRpY2tldCBUeXBlLi4uXFxcIiB2LW1vZGVsPVxcXCJzZWFyY2gudGlja2V0X3R5cGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVxcXCJ0aWNrZXRfdHlwZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiPlNlYXJjaDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1pbmZvIG1sLTJcXFwiIEBjbGljaz1cXFwicmVzZXRfZmlsdGVyKClcXFwiPlJlc2V0PC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRvd25sb2FkLWV4Y2VsIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmcgbWwtMlxcXCIgOmZldGNoPVxcXCJleHBvcnRfY3N2XFxcIiA6ZmllbGRzPVxcXCJqc29uX2ZpZWxkc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmJlZm9yZS1nZW5lcmF0ZT1cXFwic3RhcnREb3dubG9hZFxcXCIgOmJlZm9yZS1maW5pc2g9XFxcImZpbmlzaERvd25sb2FkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQ9XFxcIk15IFdvcmtzaGVldFxcXCIgdHlwZT1cXFwiY3N2XFxcIiBuYW1lPVxcXCJ0aWNrZXRfbGlzdC5jc3ZcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwibGFiZWxUZXh0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1maWxlLWV4Y2VsLW9cXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFeHBvcnQgYXMgQ1NWPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZG93bmxvYWQtZXhjZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy5jYXJkLWhlYWRlciAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHkgdGlja2V0THN0VGJsIHRhYmxlLXJlc3BvbnNpdmUgcC0wXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1ob3ZlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VGlja2V0IE5vPC90aD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlRpY2tldCBUeXBlPC90aD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk1hY2hpbmUgTmFtZTwvdGg+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5NYWNoaW5lJ3MgUHJvYmxlbTwvdGg+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BZGRpdGlvbmFsIFByb2JsZW1zPC90aD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk1hY2hpbmUgRmFyIE5vICYgRGV0YWlsczwvdGg+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TaXRlPC90aD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkNvbXBsYWludCBOYXR1cmU8L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q3JlYXRlZCBCeTwvdGg+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5DcmVhdGVkIERhdGU8L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RXhwZWN0ZWQgZGF0ZTwvdGg+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5SZXZpc2VkIDxicj4gRXhwZWN0ZWQgZGF0ZTwvdGg+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5UaWNrZXQgU3RhdHVzPC90aD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFjdGlvbjwvdGg+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHYtZm9yPVxcXCIodGlja2V0LCB4KSBpbiBUaWNrZXRzLmRhdGFcXFwiIDprZXk9XFxcInRpY2tldC5pZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyB0aWNrZXQudGlja2V0X25vIH19PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC50aWNrZXRfdHlwZSB9fTwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwidGV4dC1jYXBpdGFsaXplXFxcIj57eyB0aWNrZXQubWFjaGluZS5uYW1lIH19PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XFxcInRpY2tldC5wcm9ibGVtX2Rlc2NyaXB0aW9uXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VnVlUmVhZE1vcmVTbW9vdGggOm9wZW4uc3luYz1cXFwicHJvYmxlbXNNb3JlW3hdXFxcIiBuby1idXR0b24gbm8tc2hhZG93PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57eyB0aWNrZXQucHJvYmxlbV9kZXNjcmlwdGlvbiB9fTwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Z1ZVJlYWRNb3JlU21vb3RoPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIEBjbGljaz1cXFwic2NsaWNrKHgsICdwJylcXFwiIGNsYXNzPVxcXCJybW9yZVxcXCI+Li4ue3sgcHJvYmxlbXNNb3JlW3hdID8gXFxcIkxlc3NcXFwiIDpcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxcIk1vcmVcXFwiIH19PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXG5cXG5cXG5cXG5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XFxcInRpY2tldC5wcm9ibGVtcyAmJiB0aWNrZXQucHJvYmxlbXMubGVuZ3RoID4gMFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZ1ZVJlYWRNb3JlU21vb3RoIDpvcGVuLnN5bmM9XFxcImFkZGl0aW9uYWxNb3JlW3hdXFxcIiBuby1idXR0b24gbm8tc2hhZG93PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVxcXCJ0aWNrZXQucHJvYmxlbXNcXFwiIHYtZm9yPVxcXCIoaXRlbSwgaW5kZXgpIGluIHRpY2tldC5wcm9ibGVtc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XFxcIidwJyArIGluZGV4XFxcIiB2LWh0bWw9XFxcIml0ZW0ucHJvYmxlbVxcXCI+PC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVnVlUmVhZE1vcmVTbW9vdGg+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gQGNsaWNrPVxcXCJzY2xpY2soeClcXFwiIGNsYXNzPVxcXCJybW9yZVxcXCI+Li4ue3sgYWRkaXRpb25hbE1vcmVbeF0gPyBcXFwiTGVzc1xcXCIgOlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXFwiTW9yZVxcXCIgfX08L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tldC5tYWNoaW5lLmZhcl9ubyArXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxcIiAtIFxcXCIgK1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tldC5tYWNoaW5lLm5hbWUgK1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcXCIgLSBcXFwiICtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGlja2V0Lm1hY2hpbmUubWFjaGluZV9tb2RlbFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRpY2tldC5tYWNoaW5lLm1hY2hpbmVfbW9kZWwubmFtZVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFxcXCJudWxsXFxcIikgK1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcXCIgLSBcXFwiICtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrZXQubWFjaGluZS5tYWNoaW5lX3NyX25vXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0LnNpdGUgPyB0aWNrZXQuc2l0ZS5zaXRlX25hbWUgOiBcXFwiLVxcXCIgfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0LmNvbXBsYWludF9uYXR1cmUgfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0LmNyZWF0ZWRfYnlfbmFtZSB9fTwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyB0aWNrZXQuY3JlYXRlZF9hdCB8IG15RGF0ZSB9fTwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyB0aWNrZXQubGlrZWx5X2RhdGUgfCBteURhdGUgfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0LnJldmVyc2lvbl9kYXRlIHwgbXlEYXRlIH19PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrZXQuc3RhdHVzLnRvTG93ZXJDYXNlKCkgPT0gXFxcImNyZWF0ZWQgYnkgdXNlclxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFxcXCJPcGVuXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGlja2V0LnN0YXR1c1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiamF2YXNjcmlwdDp2b2lkKDApO1xcXCIgY2xhc3M9XFxcImJ0biBidG4td2FybmluZyBidG4tc21cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJ2aWV3TW9kYWwodGlja2V0KVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmlld1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cXFwiJy90aWNrZXQvZWRpdC8nICsgdGlja2V0LmlkXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1zbVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVxcXCJ0aWNrZXQuc3RhdHVzICE9ICdDbG9zZWQnICYmICRnYXRlLmlzQWRtaW4oKVxcXCI+RWRpdDwvcm91dGVyLWxpbms+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCJqYXZhc2NyaXB0OnZvaWQoMCk7XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNtXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwiY2xvc2VNb2RhbCh0aWNrZXQpXFxcIiB0aXRsZT1cXFwiQ2xvc2UgdGlja2V0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XFxcInRpY2tldC5zdGF0dXMgIT0gJ0Nsb3NlZCcgJiYgJGdhdGUuaXNBZG1pbigpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDbG9zZVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy5jYXJkLWJvZHkgLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1mb290ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGFnaW5hdGlvbiA6ZGF0YT1cXFwiVGlja2V0c1xcXCIgQHBhZ2luYXRpb24tY2hhbmdlLXBhZ2U9XFxcImdldFJlc3VsdHNcXFwiPjwvcGFnaW5hdGlvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmNhcmQgLS0+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICA8IS0tIENsb3NlIE1vZGFsIC0tPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwgZmFkZVxcXCIgaWQ9XFxcImNsb3NlbW9kYWxcXFwiIHRhYmluZGV4PVxcXCItMVxcXCIgcm9sZT1cXFwiZGlhbG9nXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcImNsb3NlbW9kYWxcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1kaWFsb2cgbW9kYWwtbGdcXFwiIHJvbGU9XFxcImRvY3VtZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPkNsb3NlIFRpY2tldDwvaDU+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgYXJpYS1sYWJlbD1cXFwiQ2xvc2VcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVxcXCJzdWJtaXRDbG9zZVRpY2tldCgpXFxcIiBkYXRhLXZ2LXNjb3BlPVxcXCJjbG9zZXRpY2tldFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgdi1pZj1cXFwicG9wX21hY2hpbmVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5GYXIgTm8gOjwvc3Ryb25nPiB7eyBwb3BfbWFjaGluZS5mYXJfbm8gfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+TWFjaGluZSBOYW1lIDo8L3N0cm9uZz4ge3sgcG9wX21hY2hpbmUubmFtZSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5NYWNoaW5lIE1vZGVsIDo8L3N0cm9uZz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcF9tYWNoaW5lLm1hY2hpbmVfbW9kZWxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gcG9wX21hY2hpbmUubWFjaGluZV9tb2RlbC5uYW1lXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFxcXCItXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5NYWNoaW5lIENoYXNzaXMgTm8gOjwvc3Ryb25nPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwb3BfbWFjaGluZS5jaGFzc2lzX25vIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc21cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPk1hY2hpbmUgU2wgTm86PC9zdHJvbmc+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHBvcF9tYWNoaW5lLm1hY2hpbmVfc3Jfbm8gfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+TWFjaGluZSBSZWduIE5vIDo8L3N0cm9uZz4ge3sgcG9wX21hY2hpbmUucmVnbl9ubyB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5NYWNoaW5lIEVuZ2luZSBObyA6PC9zdHJvbmc+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHBvcF9tYWNoaW5lLmVuZ2luZV9ubyB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+VGlja2V0IE5vIDo8L3N0cm9uZz4ge3sgcG9wX3RpY2tldCA/IHBvcF90aWNrZXQudGlja2V0X25vIDogJy0nIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgdmVycm9ycy5jbG9zZXRpY2tldCB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTZcXFwiIHYtaWY9XFxcInBvcF90aWNrZXQgJiYgcG9wX3RpY2tldC5saWtlbHlfZGF0ZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5BY3R1YWwgRGF0ZTwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkYXRldGltZSB2YWx1ZS16b25lPVxcXCJBc2lhL0tvbGthdGFcXFwiIHYtbW9kZWw9XFxcImZvcm1jbG9zZS5hY3R1YWxfZGF0ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XFxcImFjdHVhbF9kYXRlXFxcIiBpbnB1dC1jbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiA6Y2xhc3M9XFxcIntcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaXMtaW52YWxpZCc6IHZlcnJvcnMuaGFzKCdjbG9zZXRpY2tldC5hY3R1YWxfZGF0ZScpLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcXCIgdi12YWxpZGF0ZT1cXFwiJ3JlcXVpcmVkJ1xcXCIgZGF0YS12di1hcz1cXFwiQWN0dWFsIERhdGVcXFwiIDptaW4tZGF0ZXRpbWU9XFxcIm5ldyBEYXRlKHBvcF90aWNrZXQuY3JlYXRlZF9hdCkudG9JU09TdHJpbmcoKVxcbiAgICBcXFwiIDptYXgtZGF0ZXRpbWU9XFxcIm5ldyBEYXRlKCkudG9JU09TdHJpbmcoKVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVxcXCJ2ZXJyb3JzLmhhcygnY2xvc2V0aWNrZXQuYWN0dWFsX2RhdGUnKVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJoZWxwLWJsb2NrIGludmFsaWQtZmVlZGJhY2tcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgdmVycm9ycy5maXJzdChcXFwiY2xvc2V0aWNrZXQuYWN0dWFsX2RhdGVcXFwiKSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTZcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TWFjaGluZSBTdGF0dXM8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IHYtbW9kZWw9XFxcImZvcm1jbG9zZS5tYWNoaW5lX3N0YXR1c1xcXCIgbmFtZT1cXFwibWFjaGluZV9zdGF0dXNcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiA6Y2xhc3M9XFxcIntcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaXMtaW52YWxpZCc6IHZlcnJvcnMuaGFzKCdjbG9zZXRpY2tldC5tYWNoaW5lX3N0YXR1cycpLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcXCIgdi12YWxpZGF0ZT1cXFwiJ3JlcXVpcmVkJ1xcXCIgZGF0YS12di1hcz1cXFwibWFjaGluZSBzdGF0dXNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiUnVubmluZ1xcXCI+UnVubmluZzwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiUnVubmluZyB3aXRoIFByb2JsZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJ1bm5pbmcgd2l0aCBQcm9ibGVtXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIk5vbiBSZXBhaXJhYmxlXFxcIj5Ob24gUmVwYWlyYWJsZTwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVxcXCJ2ZXJyb3JzLmhhcygnY2xvc2V0aWNrZXQubWFjaGluZV9zdGF0dXMnKVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJoZWxwLWJsb2NrIGludmFsaWQtZmVlZGJhY2tcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgdmVycm9ycy5maXJzdChcXFwiY2xvc2V0aWNrZXQubWFjaGluZV9zdGF0dXNcXFwiKSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RXN0aW1hdGVkIE1hdGVyaWFsIGNvc3Q8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcmVhZG9ubHkgOnZhbHVlPVxcXCJwb3BfdGlja2V0LmVzdGltYXRlZF9tYXRlcmlhbF9jb3N0ICtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcF90aWNrZXQuYWRfZXN0aW1hdGVkX21hdGVyaWFsX2Nvc3QgK1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJygnICtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcF90aWNrZXQuZXN0aW1hdGVkX21hdGVyaWFsX2Nvc3QgK1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJysnICtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcF90aWNrZXQuYWRfZXN0aW1hdGVkX21hdGVyaWFsX2Nvc3QgK1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyknXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC00XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkFjdHVhbCBNYXRlcmlhbCBjb3N0PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XFxcImZvcm1jbG9zZS5hY3R1YWxfbWF0ZXJpYWxfY29zdFxcXCIgdHlwZT1cXFwidGV4dFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XFxcImFjdHVhbF9tYXRlcmlhbF9jb3N0XFxcIiB2LXZhbGlkYXRlPVxcXCIncmVxdWlyZWQnXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12di1hcz1cXFwiQWN0dWFsIE1hdGVyaWFsIGNvc3RcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIDpjbGFzcz1cXFwie1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpcy1pbnZhbGlkJzogdmVycm9ycy5oYXMoXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbG9zZXRpY2tldC5hY3R1YWxfbWF0ZXJpYWxfY29zdCdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcXCIgOnJlYWRvbmx5PVxcXCJmb3JtY2xvc2UubWFjaGluZV9zdGF0dXMgPT0gJ05vbiBSZXBhaXJhYmxlJ1xcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVxcXCJ2ZXJyb3JzLmhhcygnY2xvc2V0aWNrZXQuYWN0dWFsX21hdGVyaWFsX2Nvc3QnKVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJoZWxwLWJsb2NrIGludmFsaWQtZmVlZGJhY2tcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgdmVycm9ycy5maXJzdChcXFwiY2xvc2V0aWNrZXQuYWN0dWFsX21hdGVyaWFsX2Nvc3RcXFwiKSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+IEFjdHVhbCBNYXRlcmlhbCBjb3N0IEZpbGU8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiZmlsZVxcXCIgQGNoYW5nZT1cXFwidXBsb2FkTWF0ZXJpYWxDb3N0XFxcIiBtdWx0aXBsZSBuYW1lPVxcXCJtYXRlcmlhbF9jb3N0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVxcXCJmaWxlYWN0dWFsbWF0ZXJpYWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIDpjbGFzcz1cXFwie1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpcy1pbnZhbGlkJzogdmVycm9ycy5oYXMoJ2Nsb3NldGlja2V0Lm1hdGVyaWFsX2Nvc3QnKSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXFwiIHYtdmFsaWRhdGU9XFxcIicnXFxcIiBkYXRhLXZ2LWFzPVxcXCJBY3R1YWwgTWF0ZXJpYWwgY29zdFxcXCIgLz5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2xlYXJmaXhcXFwiIHYtaWY9XFxcInBvcF90aWNrZXQuYWN0dWFsX2VzdGltYXRlZF9tYXRlcmlhbF9maWxlc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB2LWZvcj1cXFwiKFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSwgeFxcbiAgICAgICAgICAgICAgICAgICAgICAgICkgaW4gcG9wX3RpY2tldC5hY3R1YWxfZXN0aW1hdGVkX21hdGVyaWFsX2ZpbGVzXFxcIiA6a2V5PVxcXCJpdGVtLmlkXFxcIiA6aHJlZj1cXFwiaXRlbS5maWxlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cXFwiX2JsYW5rXFxcIj5WaWV3XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wX3RpY2tldC5hY3R1YWxfZXN0aW1hdGVkX21hdGVyaWFsX2ZpbGVzLmxlbmd0aCA+IDFcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB4ICsgMVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFxcXCJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX08L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XFxcInZlcnJvcnMuaGFzKCdjbG9zZXRpY2tldC5tYXRlcmlhbF9jb3N0JylcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHZlcnJvcnMuZmlyc3QoXFxcImNsb3NldGlja2V0Lm1hdGVyaWFsX2Nvc3RcXFwiKSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RXN0aW1hdGVkIFNlcnZpY2UgY29zdDwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCA6dmFsdWU9XFxcInBvcF90aWNrZXQuZXN0aW1hdGVkX3NlcnZpY2VfY29zdCArXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3BfdGlja2V0LmFkX2VzdGltYXRlZF9zZXJ2aWNlX2Nvc3QgK1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJygnICtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcF90aWNrZXQuZXN0aW1hdGVkX3NlcnZpY2VfY29zdCArXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnKycgK1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wX3RpY2tldC5hZF9lc3RpbWF0ZWRfc2VydmljZV9jb3N0ICtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcpJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiByZWFkb25seSAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtNFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5BY3R1YWwgU2VydmljZSBjb3N0PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XFxcImZvcm1jbG9zZS5hY3R1YWxfc2VydmljZV9jb3N0XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cXFwiYWN0dWFsX3NlcnZpY2VfY29zdFxcXCIgdi12YWxpZGF0ZT1cXFwiJ3JlcXVpcmVkJ1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdnYtYXM9XFxcIkFjdHVhbCBTZXJ2aWNlIGNvc3RcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIDpjbGFzcz1cXFwie1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpcy1pbnZhbGlkJzogdmVycm9ycy5oYXMoXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbG9zZXRpY2tldC5hY3R1YWxfc2VydmljZV9jb3N0J1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxcIiA6cmVhZG9ubHk9XFxcImZvcm1jbG9zZS5tYWNoaW5lX3N0YXR1cyA9PSAnTm9uIFJlcGFpcmFibGUnXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XFxcInZlcnJvcnMuaGFzKCdjbG9zZXRpY2tldC5hY3R1YWxfc2VydmljZV9jb3N0JylcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHZlcnJvcnMuZmlyc3QoXFxcImNsb3NldGlja2V0LmFjdHVhbF9zZXJ2aWNlX2Nvc3RcXFwiKSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+IEFjdHVhbCBTZXJ2aWNlIGNvc3QgRmlsZSA8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiZmlsZVxcXCIgQGNoYW5nZT1cXFwidXBsb2FkU2VydmljZUNvc3RcXFwiIG11bHRpcGxlIG5hbWU9XFxcInNlcnZpY2VfY29zdFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cXFwiZmlsZWFjdHVhbHNlcnZpY2VcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIDpjbGFzcz1cXFwie1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpcy1pbnZhbGlkJzogdmVycm9ycy5oYXMoJ2Nsb3NldGlja2V0LnNlcnZpY2VfY29zdCcpLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcXCIgdi12YWxpZGF0ZT1cXFwiJydcXFwiIGRhdGEtdnYtYXM9XFxcIkFjdHVhbCBTZXJ2aWNlIGNvc3RcXFwiIC8+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNsZWFyZml4XFxcIiB2LWlmPVxcXCJwb3BfdGlja2V0LmFjdHVhbF9lc3RpbWF0ZWRfc2VydmljZV9maWxlc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB2LWZvcj1cXFwiKFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSwgeFxcbiAgICAgICAgICAgICAgICAgICAgICAgICkgaW4gcG9wX3RpY2tldC5hY3R1YWxfZXN0aW1hdGVkX3NlcnZpY2VfZmlsZXNcXFwiIDprZXk9XFxcIml0ZW0uaWRcXFwiIDpocmVmPVxcXCJpdGVtLmZpbGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPlZpZXdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3BfdGlja2V0LmFjdHVhbF9lc3RpbWF0ZWRfc2VydmljZV9maWxlcy5sZW5ndGggPiAxXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8geCArIDFcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcXFwiXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PC9hPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVxcXCJ2ZXJyb3JzLmhhcygnY2xvc2V0aWNrZXQuc2VydmljZV9jb3N0JylcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHZlcnJvcnMuZmlyc3QoXFxcImNsb3NldGlja2V0LnNlcnZpY2VfY29zdFxcXCIpIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtNlxcXCIgdi1pZj1cXFwicG9wX21hY2hpbmUuaXNfY29uc3VtdGlvbl9ocl9ydW5cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q3VycmVudCBSdW4gaG91ciA8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cXFwiZm9ybWNsb3NlLmN1cnJlbnRfcnVuX2hvdXJcXFwiIG5hbWU9XFxcImN1cnJlbnRfcnVuX2hvdXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiA6Y2xhc3M9XFxcIntcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaXMtaW52YWxpZCc6IHZlcnJvcnMuaGFzKFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xvc2V0aWNrZXQuY3VycmVudF9ydW5faG91cidcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcXCIgdi12YWxpZGF0ZT1cXFwie1xcbiAgICByZXF1aXJlZDogdHJ1ZSxcXG4gICAgZGVjaW1hbDogMixcXG4gICAgbWluX3ZhbHVlOiBwb3BfbWFjaGluZS5sYXN0X21haW50ZW5hbmNlc1xcbiAgICAgICAgPyBwb3BfbWFjaGluZS5sYXN0X21haW50ZW5hbmNlcy5ydW5faG91clxcbiAgICAgICAgOiBwb3BfbWFjaGluZS5sYXN0X2hyX3J1bixcXG59XFxcIiBkYXRhLXZ2LWFzPVxcXCJDdXJyZW50IFJ1biBob3VyXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XFxcInZlcnJvcnMuaGFzKCdjbG9zZXRpY2tldC5jdXJyZW50X3J1bl9ob3VyJylcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHZlcnJvcnMuZmlyc3QoXFxcImNsb3NldGlja2V0LmN1cnJlbnRfcnVuX2hvdXJcXFwiKSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTZcXFwiIHYtaWY9XFxcInBvcF9tYWNoaW5lLmlzX2NvbnN1bXRpb25fa21fcnVuXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPiBDdXJyZW50IEtNIFJ1biA8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cXFwiZm9ybWNsb3NlLmN1cnJlbnRfa21fcnVuXFxcIiBuYW1lPVxcXCJjdXJyZW50X2ttX3J1blxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cXFwie1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpcy1pbnZhbGlkJzogdmVycm9ycy5oYXMoJ2Nsb3NldGlja2V0LmN1cnJlbnRfa21fcnVuJyksXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxcIiB2LXZhbGlkYXRlPVxcXCJ7XFxuICAgIHJlcXVpcmVkOiB0cnVlLFxcbiAgICBkZWNpbWFsOiAyLFxcbiAgICBtaW5fdmFsdWU6IHBvcF9tYWNoaW5lLmxhc3RfbWFpbnRlbmFuY2VzXFxuICAgICAgICA/IHBvcF9tYWNoaW5lLmxhc3RfbWFpbnRlbmFuY2VzLmttX3J1blxcbiAgICAgICAgOiBwb3BfbWFjaGluZS5sYXN0X2ttX3J1bixcXG59XFxcIiBkYXRhLXZ2LWFzPVxcXCJDdXJyZW50IEtNIGhvdXJcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cXFwidmVycm9ycy5oYXMoJ2Nsb3NldGlja2V0LmN1cnJlbnRfa21fcnVuJylcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHZlcnJvcnMuZmlyc3QoXFxcImNsb3NldGlja2V0LmN1cnJlbnRfa21fcnVuXFxcIikgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC02XFxcIiB2LWlmPVxcXCJwb3BfbWFjaGluZS5pc19wcm9kdWN0aW9uX2ZpZ1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD4gQ3VycmVudCBQcm9kdWN0aW9uIGZpZyA8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cXFwiZm9ybWNsb3NlLmN1cnJlbnRfcHJvZHVjdGlvbl9maWdcXFwiIG5hbWU9XFxcImN1cnJlbnRfcHJvZHVjdGlvbl9maWdcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiA6Y2xhc3M9XFxcIntcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaXMtaW52YWxpZCc6IHZlcnJvcnMuaGFzKFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xvc2V0aWNrZXQuY3VycmVudF9wcm9kdWN0aW9uX2ZpZydcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcXCIgdi12YWxpZGF0ZT1cXFwie1xcbiAgICByZXF1aXJlZDogdHJ1ZSxcXG4gICAgZGVjaW1hbDogMixcXG4gICAgbWluX3ZhbHVlOiBwb3BfbWFjaGluZS5sYXN0X21haW50ZW5hbmNlc1xcbiAgICAgICAgPyBwb3BfbWFjaGluZS5sYXN0X21haW50ZW5hbmNlcy5wcm9kdWN0aW9uX2ZpZ1xcbiAgICAgICAgOiBwb3BfbWFjaGluZS5wZXJpb2RpY19tYWludGVuYW5jZV9icmVha2Rvd24sXFxufVxcXCIgZGF0YS12di1hcz1cXFwiQ3VycmVudCBQcm9kdWN0aW9uIGZpZ1xcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVxcXCJ2ZXJyb3JzLmhhcygnY2xvc2V0aWNrZXQuY3VycmVudF9wcm9kdWN0aW9uX2ZpZycpXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB2ZXJyb3JzLmZpcnN0KFxcXCJjbG9zZXRpY2tldC5jdXJyZW50X3Byb2R1Y3Rpb25fZmlnXFxcIikgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC02XFxcIiB2LWlmPVxcXCJmb3JtY2xvc2UudGlja2V0X3R5cGUgPT0gJ0JyZWFrZG93biBNYWludGVuYW5jZSdcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UHJvZHVjdGlvbiBMb3NzPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XFxcImZvcm1jbG9zZS5wcm9kdWN0aW9uX2xvc3NcXFwiIG5hbWU9XFxcInByb2R1Y3Rpb25fbG9zc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIDpjbGFzcz1cXFwie1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpcy1pbnZhbGlkJzogdmVycm9ycy5oYXMoXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbG9zZXRpY2tldC5wcm9kdWN0aW9uX2xvc3MnXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXFwiIHYtdmFsaWRhdGU9XFxcIidyZXF1aXJlZCdcXFwiIGRhdGEtdnYtYXM9XFxcIlByb2R1Y3Rpb24gTG9zc1xcXCIgIHJlYWRvbmx5Lz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVxcXCJ2ZXJyb3JzLmhhcygnY2xvc2V0aWNrZXQucHJvZHVjdGlvbl9sb3NzJylcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHZlcnJvcnMuZmlyc3QoXFxcImNsb3NldGlja2V0LnByb2R1Y3Rpb25fbG9zc1xcXCIpIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtNlxcXCIgdi1pZj1cXFwiZm9ybWNsb3NlLnRpY2tldF90eXBlID09ICdCcmVha2Rvd24gTWFpbnRlbmFuY2UnXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlByb2R1Y3Rpb24gbG9zcyBhbW91bnQ8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cXFwiZm9ybWNsb3NlLnByb2R1Y3Rpb25fbG9zc19hbW91bnRcXFwiIG5hbWU9XFxcInByb2R1Y3Rpb25fbG9zc19hbW91bnRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiA6Y2xhc3M9XFxcIntcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaXMtaW52YWxpZCc6IHZlcnJvcnMuaGFzKFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xvc2V0aWNrZXQucHJvZHVjdGlvbl9sb3NzX2Ftb3VudCdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcXCIgdi12YWxpZGF0ZT1cXFwiJ3JlcXVpcmVkJ1xcXCIgZGF0YS12di1hcz1cXFwiQ3VycmVudCBQcm9kdWN0aW9uIGZpZ1xcXCIgcmVhZG9ubHkvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XFxcInZlcnJvcnMuaGFzKCdjbG9zZXRpY2tldC5wcm9kdWN0aW9uX2xvc3NfYW1vdW50JylcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHZlcnJvcnMuZmlyc3QoXFxcImNsb3NldGlja2V0LnByb2R1Y3Rpb25fbG9zc19hbW91bnRcXFwiKSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTZcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Um9vdCBDYXVzZSBBbmFseXNpczwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSByb3dzPVxcXCIxXFxcIiB2LW1vZGVsPVxcXCJmb3JtY2xvc2UucmNhXFxcIiBuYW1lPVxcXCJyY2FcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIDpjbGFzcz1cXFwie1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lzLWludmFsaWQnOiB2ZXJyb3JzLmhhcygnY2xvc2V0aWNrZXQucmNhJyksXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXFwiIHYtdmFsaWRhdGU9XFxcIidyZXF1aXJlZCdcXFwiPjwvdGV4dGFyZWE+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cXFwidmVycm9ycy5oYXMoJ2Nsb3NldGlja2V0LnJjYScpXFxcIiBjbGFzcz1cXFwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHZlcnJvcnMuZmlyc3QoXFxcImNsb3NldGlja2V0LnJjYVxcXCIpIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnlcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2xvc2VcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiB2LWlmPVxcXCJjbG9zZV9idG5cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2xvc2UgVGlja2V0XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgdi1lbHNlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvY2Vzc2luZ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwhLS1WaWV3IE1vZGFsLS0+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbCBmYWRlXFxcIiBpZD1cXFwidmlld21vZGFsXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiIHJvbGU9XFxcImRpYWxvZ1xcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJ2aWV3bW9kYWxcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1kaWFsb2cgbW9kYWwtbGdcXFwiIHJvbGU9XFxcImRvY3VtZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPlZpZXcgVGlja2V0PC9oNT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIiBhcmlhLWxhYmVsPVxcXCJDbG9zZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIiB2LWlmPVxcXCJwb3BfdGlja2V0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtNCBic1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TWFjaGluZSBTaXRlPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XFxcInNpdGVfbmFtZVxcXCIgOnJlZHVjZT1cXFwiKG9wdGlvbikgPT4gb3B0aW9uLmlkXFxcIiA6b3B0aW9ucz1cXFwic2l0ZXNcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJDaG9vc2UgU2l0ZSAuLi5cXFwiIHYtbW9kZWw9XFxcInBvcF90aWNrZXQuc2l0ZV9pZFxcXCIgZGlzYWJsZWQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTQgYnNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk1hY2hpbmUgQ2F0ZWdvcnk8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cXFwibmFtZVxcXCIgOnJlZHVjZT1cXFwiKG9wdGlvbikgPT4gb3B0aW9uLmlkXFxcIiA6b3B0aW9ucz1cXFwiY2F0ZWdvcmllc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIkNob29zZSBDYXRlZ29yeSAuLi5cXFwiIHYtbW9kZWw9XFxcInBvcF90aWNrZXQuY2F0ZWdvcnlfaWRcXFwiIGRpc2FibGVkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC00IGJzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5NYWNoaW5lIERlc2NyaXB0aW9uPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XFxcIm5hbWVcXFwiIDpyZWR1Y2U9XFxcIihvcHRpb24pID0+IG9wdGlvbi5pZFxcXCIgOm9wdGlvbnM9XFxcInN1Yl9jYXRlZ29yaWVzXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiQ2hvb3NlIGRlc2NyaXB0aW9uIC4uLlxcXCIgdi1tb2RlbD1cXFwicG9wX3RpY2tldC5zdWJfY2F0ZWdvcnlfaWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XFxcInN1Yl9jYXRlZ29yeV9pZFxcXCIgOmRpc2FibGVkPVxcXCJwb3BfdGlja2V0LmlkICE9ICcnXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtNCBic1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9XFxcIm1hcmdpbjogMFxcXCI+IE1hY2hpbmUgOiA8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+RmFyIE5vIDo8L3N0cm9uZz4ge3sgcG9wX3RpY2tldC5tYWNoaW5lLmZhcl9ubyB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+TWFjaGluZSBOYW1lIDo8L3N0cm9uZz4ge3sgcG9wX3RpY2tldC5tYWNoaW5lLm5hbWUgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPk1hY2hpbmUgQ2hhc3NpcyBObyA6PC9zdHJvbmc+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcG9wX3RpY2tldC5tYWNoaW5lLmNoYXNzaXNfbm8gfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPk1hY2hpbmUgU2wgTm86PC9zdHJvbmc+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcG9wX3RpY2tldC5tYWNoaW5lLm1hY2hpbmVfc3Jfbm8gfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPk1hY2hpbmUgUmVnbiBObyA6PC9zdHJvbmc+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcG9wX3RpY2tldC5tYWNoaW5lLnJlZ25fbm8gfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPk1hY2hpbmUgRW5naW5lIE5vIDo8L3N0cm9uZz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwb3BfdGlja2V0Lm1hY2hpbmUuZW5naW5lX25vIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC00IGJzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgbWItMFxcXCIgdi1pZj1cXFwicG9wX3RpY2tldC5tYWludGVuYW5jZV9wcm92aWRlciA9PSAndmVuZG9yJyAmJlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcF90aWNrZXQuc2VydmljZV90eXBlXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U2VydmljZSBUeXBlPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwb3BfdGlja2V0LnNlcnZpY2VfdHlwZSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIG1iLTBcXFwiIHYtaWY9XFxcInBvcF90aWNrZXQuc2VydmljZV90eXBlID09ICdGcmVlIFNlcnZpY2UnICYmXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wX3RpY2tldC5mcmVlX3NlcnZpY2Vfbm9cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5GcmVlIHNlcnZpY2Ugbm86PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwb3BfdGlja2V0LmZyZWVfc2VydmljZV9ubyB9fS97e1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3BfdGlja2V0Lm1hY2hpbmUuZnJlZV9zZXJ2aWNlX25vXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBtYi0wXFxcIiB2LWlmPVxcXCJwb3BfdGlja2V0LnRpY2tldF90eXBlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+VGlja2V0IFR5cGU8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHBvcF90aWNrZXQudGlja2V0X3R5cGUgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBtYi0wXFxcIiB2LWlmPVxcXCJwb3BfdGlja2V0LnN0YXR1c19kdXJpbmdfY29tcGxhaW50XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U3RhdHVzIER1cmluZyBDb21wbGFpbjogPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwb3BfdGlja2V0LnN0YXR1c19kdXJpbmdfY29tcGxhaW50IH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT1cXFwibWFyZ2luOiAwXFxcIj5NYWNoaW5lJ3MgUHJvYmxlbTogPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwb3BfdGlja2V0LnByb2JsZW1fZGVzY3JpcHRpb24gfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTQgYnNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBtYi0wXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TWFpbnRlbmFuY2UgUHJvdmlkZXI8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHBvcF90aWNrZXQubWFpbnRlbmFuY2VfcHJvdmlkZXIgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wX3RpY2tldC5tYWludGVuYW5jZV9wcm92aWRlciA9PSBcXFwidXNlclxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXFxcIlVzZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFxcXCJWZW5kb3JcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cXFwicG9wX3RpY2tldC5tYWludGVuYW5jZV9wcm92aWRlciA9PSAndmVuZG9yJ1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1mb3I9XFxcIih2ZW5kb3IsIGluZGV4KSBpbiBwb3BfdGlja2V0LmFsbF92ZW5kb3JzXFxcIiA6a2V5PVxcXCIndm0nICsgaW5kZXhcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiY29tbWFcXFwiPnt7IHZlbmRvci5uYW1lIH19PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY29tbWFcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cXFwibmFtZVxcXCIgOnJlZHVjZT1cXFwiKG9wdGlvbikgPT4gb3B0aW9uLmlkXFxcIiA6b3B0aW9ucz1cXFwidXNlcnNcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgdXNlcnMgLi4uXFxcIiB2LW1vZGVsPVxcXCJwb3BfdGlja2V0LnVzZXJfaWRcXFwiIGRpc2FibGVkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC04IGJzXFxcIiB2LWlmPVxcXCJwb3BfdGlja2V0LnN0YWdlc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9XFxcIm1hcmdpbjogMHB4XFxcIj5TdGFnZXM8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVxcXCIoZmllbGQsIHgpIGluIHBvcF90aWNrZXQuc3RhZ2VzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiIDprZXk9XFxcIidzJyArIHhcXFwiIHN0eWxlPVxcXCJib3JkZXI6IDA7IHBhZGRpbmctYm90dG9tOiA4cHhcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtNFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBmaWVsZC5zdGFnZV9ubyB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgZmllbGQuc3RhZ2VfZGF0ZSB8IG15RGF0ZSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgZmllbGQuZGVzY3JpcHRpb24gfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTQgYnNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPVxcXCJtYXJnaW46IDBcXFwiPk1hY2hpbmUncyBBZGRpdGlvbmFsIFByb2JsZW06IDwvbGFiZWw+PGJyIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cXFwicG9wX3RpY2tldC5wcm9ibGVtc1xcXCIgdi1mb3I9XFxcIihpdGVtLCBpbmRleCkgaW4gcG9wX3RpY2tldC5wcm9ibGVtc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cXFwiJ3BhJyArIGluZGV4XFxcIiB2LWh0bWw9XFxcIml0ZW0ucHJvYmxlbVxcXCI+PC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtMyBic1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9XFxcIm1hcmdpbjogMFxcXCI+RXN0aW1hdGVkIE1hdGVyaWFsIGNvc3Q8L2xhYmVsPjxiciAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwb3BfdGlja2V0LmVzdGltYXRlZF9tYXRlcmlhbF9jb3N0ICtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcF90aWNrZXQuYWRfZXN0aW1hdGVkX21hdGVyaWFsX2Nvc3QpXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdG9DdXJyZW5jeVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHt7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcF90aWNrZXQuZXN0aW1hdGVkX21hdGVyaWFsX2Nvc3QgK1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXFwiK1xcXCIgK1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3BfdGlja2V0LmFkX2VzdGltYXRlZF9tYXRlcmlhbF9jb3N0XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0pXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3MgbXItMlxcXCIgOmhyZWY9XFxcImZpbGUuZmlsZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVxcXCIoZmlsZSwgeCkgaW4gcG9wX3RpY2tldC5lc3RpbWF0ZWRfbWF0ZXJpYWxfZmlsZXNcXFwiIDprZXk9XFxcImZpbGUuaWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+Vmlld1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3BfdGlja2V0LmVzdGltYXRlZF9tYXRlcmlhbF9maWxlcy5sZW5ndGggPiAxXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB4ICsgMVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXFxcIlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PC9hPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTMgYnNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPVxcXCJtYXJnaW46IDBcXFwiPkVzdGltYXRlZCBTZXJ2aWNlIGNvc3QgOiA8L2xhYmVsPjxiciAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwb3BfdGlja2V0LmVzdGltYXRlZF9zZXJ2aWNlX2Nvc3QgK1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wX3RpY2tldC5hZF9lc3RpbWF0ZWRfc2VydmljZV9jb3N0KVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHRvQ3VycmVuY3lcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh7e1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3BfdGlja2V0LmVzdGltYXRlZF9zZXJ2aWNlX2Nvc3QgK1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXFwiK1xcXCIgK1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3BfdGlja2V0LmFkX2VzdGltYXRlZF9zZXJ2aWNlX2Nvc3RcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSlcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImJ0biBidG4tc3VjY2VzcyBtci0yXFxcIiA6aHJlZj1cXFwiZmlsZS5maWxlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XFxcIihmaWxlLCB4KSBpbiBwb3BfdGlja2V0LmVzdGltYXRlZF9zZXJ2aWNlX2ZpbGVzXFxcIiA6a2V5PVxcXCJmaWxlLmlkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPlZpZXdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wX3RpY2tldC5lc3RpbWF0ZWRfc2VydmljZV9maWxlcy5sZW5ndGggPiAxXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB4ICsgMVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXFxcIlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PC9hPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTMgYnNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkFjdHVhbCBNYXRlcmlhbCBDb3N0IDogPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVxcXCJwb3BfdGlja2V0LmFjdHVhbF9tYXRlcmlhbF9jb3N0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcG9wX3RpY2tldC5hY3R1YWxfbWF0ZXJpYWxfY29zdCB8IHRvQ3VycmVuY3kgfX08L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3MgbXItMlxcXCIgOmhyZWY9XFxcImZpbGUuZmlsZVxcXCIgdi1mb3I9XFxcIihcXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlLCB4XFxuICAgICAgICAgICAgICAgICAgICAgICkgaW4gcG9wX3RpY2tldC5hY3R1YWxfZXN0aW1hdGVkX21hdGVyaWFsX2ZpbGVzXFxcIiA6a2V5PVxcXCJmaWxlLmlkXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+Vmlld1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3BfdGlja2V0LmFjdHVhbF9lc3RpbWF0ZWRfbWF0ZXJpYWxfZmlsZXMubGVuZ3RoID4gMVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8geCArIDFcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFxcXCJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fTwvYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC0zIGJzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5BY3R1YWwgU2VydmljZSBDb3N0IDogPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVxcXCJwb3BfdGlja2V0LmFjdHVhbF9zZXJ2aWNlX2Nvc3RcXFwiPnt7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcF90aWNrZXQuYWN0dWFsX3NlcnZpY2VfY29zdCB8IHRvQ3VycmVuY3lcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImJ0biBidG4tc3VjY2VzcyBtci0yXFxcIiA6aHJlZj1cXFwiZmlsZS5maWxlXFxcIiB2LWZvcj1cXFwiKFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGUsIHhcXG4gICAgICAgICAgICAgICAgICAgICAgKSBpbiBwb3BfdGlja2V0LmFjdHVhbF9lc3RpbWF0ZWRfc2VydmljZV9maWxlc1xcXCIgOmtleT1cXFwiZmlsZS5pZFxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPlZpZXdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wX3RpY2tldC5hY3R1YWxfZXN0aW1hdGVkX3NlcnZpY2VfZmlsZXMubGVuZ3RoID4gMVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8geCArIDFcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFxcXCJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fTwvYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC00IGJzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT1cXFwibWFyZ2luOiAwXFxcIj5UaWNrZXQgTm8gOiA8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHBvcF90aWNrZXQudGlja2V0X25vIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC00IGJzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT1cXFwibWFyZ2luOiAwXFxcIj5MaWtlbHkgRGF0ZSA6IDwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcG9wX3RpY2tldC5saWtlbHlfZGF0ZSB8IG15RGF0ZSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtNCBic1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9XFxcIm1hcmdpbjogMFxcXCI+QWN0dWFsIERhdGUgOiA8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHBvcF90aWNrZXQuYWN0dWFsX2RhdGUgfCBteURhdGUgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTQgYnNcXFwiIHYtaWY9XFxcInBvcF90aWNrZXQuY3VycmVudF9ydW5faG91clxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q3VycmVudCBSdW4gSG91ciA6IDwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcG9wX3RpY2tldC5jdXJyZW50X3J1bl9ob3VyIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC00IGJzXFxcIiB2LWlmPVxcXCJwb3BfdGlja2V0LmN1cnJlbnRfa21fcnVuXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5DdXJyZW50IEtNIEhvdXIgOiA8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHBvcF90aWNrZXQuY3VycmVudF9rbV9ydW4gfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTQgYnNcXFwiIHYtaWY9XFxcInBvcF90aWNrZXQuY3VycmVudF9wcm9kdWN0aW9uX2ZpZ1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q3VycmVudCBQcm9kdWN0aW9uIEZpZyA6IDwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcG9wX3RpY2tldC5jdXJyZW50X3Byb2R1Y3Rpb25fZmlnIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC00IGJzXFxcIiB2LWlmPVxcXCJwb3BfdGlja2V0LnByb2R1Y3Rpb25fbG9zc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UHJvZHVjdGlvbiBMb3NzIDogPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwb3BfdGlja2V0LnByb2R1Y3Rpb25fbG9zcyB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtNCBic1xcXCIgdi1pZj1cXFwicG9wX3RpY2tldC5wcm9kdWN0aW9uX2xvc3NfYW1vdW50XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Qcm9kdWN0aW9uIExvc3MgQW1vdW50IDogPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwb3BfdGlja2V0LnByb2R1Y3Rpb25fbG9zc19hbW91bnQgfCB0b0N1cnJlbmN5IH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9zZWN0aW9uPlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5pbXBvcnQgVnVlUmVhZE1vcmVTbW9vdGggZnJvbSBcXFwidnVlLXJlYWQtbW9yZS1zbW9vdGhcXFwiO1xcbmV4cG9ydCBkZWZhdWx0IHtcXG4gICAgY29tcG9uZW50czogeyBWdWVSZWFkTW9yZVNtb290aCB9LFxcbiAgICBkYXRhKCkge1xcbiAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICBjbG9zZV9idG46IHRydWUsXFxuICAgICAgICAgICAgYWRkaXRpb25hbE1vcmU6IFtdLFxcbiAgICAgICAgICAgIHByb2JsZW1zTW9yZTogW10sXFxuICAgICAgICAgICAgc2VhcmNoX21hY2hpbmVzOiBbXSxcXG4gICAgICAgICAgICBzZWFyY2hfc2l0ZXM6IFtdLFxcbiAgICAgICAgICAgIHNlYXJjaDoge1xcbiAgICAgICAgICAgICAgICBwYWdlOiAxLFxcbiAgICAgICAgICAgICAgICBtYWNoaW5lX2lkOiBcXFwiXFxcIixcXG4gICAgICAgICAgICAgICAgc2l0ZV9pZDogXFxcIlxcXCIsXFxuICAgICAgICAgICAgICAgIGNvbXBsYWludF9uYXR1cmU6IFxcXCJcXFwiLFxcbiAgICAgICAgICAgICAgICB0aWNrZXRfdHlwZTpcXFwiXFxcIixcXG4gICAgICAgICAgICAgICAgdGlja2V0OiBcXFwiXFxcIixcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHBvcHRpY2tldDoge30sXFxuICAgICAgICAgICAgY2F0ZWdvcmllczogW10sXFxuICAgICAgICAgICAgc3ViX2NhdGVnb3JpZXM6IFtdLFxcbiAgICAgICAgICAgIHNpdGVzOiBbXSxcXG4gICAgICAgICAgICBzZWxlY3RlZF9tYWNoaW5lOiBcXFwiXFxcIixcXG4gICAgICAgICAgICB1c2VyczogW10sXFxuICAgICAgICAgICAgbWFjaGluZXM6IFtdLFxcbiAgICAgICAgICAgIFRpY2tldHM6IHt9LFxcbiAgICAgICAgICAgIGVkaXRtb2RlOiBmYWxzZSxcXG4gICAgICAgICAgICBNYXRlcmlhbENvc3Q6IG51bGwsXFxuICAgICAgICAgICAgU2VydmljZUNvc3Q6IG51bGwsXFxuICAgICAgICAgICAgZm9ybTogbmV3IEZvcm0oe1xcbiAgICAgICAgICAgICAgICBpZDogXFxcIlxcXCIsXFxuICAgICAgICAgICAgICAgIHNpdGVfaWQ6IFxcXCJcXFwiLFxcbiAgICAgICAgICAgICAgICBjYXRlZ29yeV9pZDogXFxcIlxcXCIsXFxuICAgICAgICAgICAgICAgIHN1Yl9jYXRlZ29yeV9pZDogXFxcIlxcXCIsXFxuICAgICAgICAgICAgICAgIGZyZWVfc2VydmljZV9ubzogXFxcIlxcXCIsXFxuICAgICAgICAgICAgICAgIHRpY2tldF90eXBlOiBcXFwiUGVyaW9kaWMgTWFpbnRlbmFuY2VcXFwiLFxcbiAgICAgICAgICAgICAgICBzZXJ2aWNlX3R5cGU6IFxcXCJQYWlkIFNlcnZpY2VcXFwiLFxcbiAgICAgICAgICAgICAgICBtYWNoaW5lX2lkOiBcXFwiXFxcIixcXG4gICAgICAgICAgICAgICAgdGlja2V0X25vOiBcXFwiXFxcIixcXG4gICAgICAgICAgICAgICAgdmVuZG9yX2lkOiBcXFwiXFxcIixcXG4gICAgICAgICAgICAgICAgdXNlcl9pZDogXFxcIlxcXCIsXFxuICAgICAgICAgICAgICAgIGxpa2VseV9kYXRlOiBcXFwiXFxcIixcXG4gICAgICAgICAgICAgICAgZXN0aW1hdGVkX21hdGVyaWFsX2Nvc3Q6IFxcXCJcXFwiLFxcbiAgICAgICAgICAgICAgICBlc3RpbWF0ZWRfc2VydmljZV9jb3N0OiBcXFwiXFxcIixcXG4gICAgICAgICAgICAgICAgbWFpbnRlbmFuY2VfcHJvdmlkZXI6IFxcXCJ2ZW5kb3JcXFwiLFxcbiAgICAgICAgICAgICAgICBwcm9ibGVtX2Rlc2NyaXB0aW9uOiBcXFwiXFxcIixcXG4gICAgICAgICAgICAgICAgY29tcGxhaW50X25hdHVyZTogXFxcIk1ham9yXFxcIixcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICBzdGFnZXM6IFtcXG4gICAgICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFxcXCJcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgc3RhZ2Vfbm86IFxcXCJcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgc3RhZ2VfZGF0ZTogXFxcIlxcXCIsXFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXFxcIlxcXCIsXFxuICAgICAgICAgICAgICAgICAgICBmaWxlOiBcXFwiXFxcIixcXG4gICAgICAgICAgICAgICAgICAgIG5ld19maWxlOiBcXFwiXFxcIixcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBdLFxcblxcbiAgICAgICAgICAgIGZvcm1jbG9zZTogbmV3IEZvcm0oe1xcbiAgICAgICAgICAgICAgICBpZDogXFxcIlxcXCIsXFxuICAgICAgICAgICAgICAgIG1hY2hpbmVfc3RhdHVzOiBcXFwiXFxcIixcXG4gICAgICAgICAgICAgICAgZWRpdF90eXBlOiBcXFwiY2xvc2V0aWNrZXRcXFwiLFxcbiAgICAgICAgICAgICAgICB0aWNrZXRfdHlwZTogXFxcIlBlcmlvZGljIE1haW50ZW5hbmNlXFxcIixcXG4gICAgICAgICAgICAgICAgYWN0dWFsX2RhdGU6IFxcXCJcXFwiLFxcbiAgICAgICAgICAgICAgICBhY3R1YWxfbWF0ZXJpYWxfY29zdDogXFxcIlxcXCIsXFxuICAgICAgICAgICAgICAgIGFjdHVhbF9zZXJ2aWNlX2Nvc3Q6IFxcXCJcXFwiLFxcbiAgICAgICAgICAgICAgICBjdXJyZW50X3J1bl9ob3VyOiBcXFwiXFxcIixcXG4gICAgICAgICAgICAgICAgY3VycmVudF9rbV9ydW46IFxcXCJcXFwiLFxcbiAgICAgICAgICAgICAgICBjdXJyZW50X3Byb2R1Y3Rpb25fZmlnOiBcXFwiXFxcIixcXG4gICAgICAgICAgICAgICAgcHJvZHVjdGlvbl9sb3NzOiBcXFwiXFxcIixcXG4gICAgICAgICAgICAgICAgcHJvZHVjdGlvbl9sb3NzX2Ftb3VudDogXFxcIlxcXCIsXFxuICAgICAgICAgICAgICAgIHN0YXR1czogXFxcIkNsb3NlZFxcXCIsXFxuICAgICAgICAgICAgICAgIHZlbmRvcl9yZXNvbHZlX2RhdGU6IFxcXCJcXFwiLFxcbiAgICAgICAgICAgICAgICB2ZW5kb3JfYXR0YWluX2RhdGU6IFxcXCJcXFwiLFxcbiAgICAgICAgICAgICAgICB2ZW5kb3JfcmVzcG9uc2VfZGF0ZTogXFxcIlxcXCIsXFxuICAgICAgICAgICAgICAgIHZlbmRvcl9jYWxsX2RhdGU6IFxcXCJcXFwiLFxcbiAgICAgICAgICAgICAgICByY2E6IFxcXCJcXFwiLFxcbiAgICAgICAgICAgIH0pLFxcbiAgICAgICAgICAgIHBvcF9tYWNoaW5lOiBcXFwiXFxcIixcXG4gICAgICAgICAgICBwb3BfdGlja2V0OiBcXFwiXFxcIixcXG4gICAgICAgICAgICBvcG5fc3RhZ2U6IFtcXG4gICAgICAgICAgICAgICAgXFxcIlZlbmRvciBjcmVhdGVkXFxcIixcXG4gICAgICAgICAgICAgICAgXFxcIlZlbmRvciBBc3NpZ25lZFxcXCIsXFxuICAgICAgICAgICAgICAgIFxcXCJPcmRlciBpc3N1ZWRcXFwiLFxcbiAgICAgICAgICAgICAgICBcXFwiUGF5bWVudCB1bmRlciBwcm9jZXNzXFxcIixcXG4gICAgICAgICAgICAgICAgXFxcIlBheW1lbnQgRG9uZVxcXCIsXFxuICAgICAgICAgICAgICAgIFxcXCJMb2dpc3RpY3MgdW5kZXIgcHJvY2Vzc1xcXCIsXFxuICAgICAgICAgICAgICAgIFxcXCJNYXRlcmlhbHMgZGVzcGF0Y2hlZFxcXCIsXFxuICAgICAgICAgICAgICAgIFxcXCJNYXRlcmlhbCByZWNlaXZlZCBhdCBzaXRlXFxcIixcXG4gICAgICAgICAgICAgICAgXFxcIk1haW50YWluYWNlIHVuZGVyIHByb2dyZXNzXFxcIixcXG4gICAgICAgICAgICBdLFxcbiAgICAgICAgICAgIGxhc3Rfc3RhZ2VfaW5kZXg6IDAsXFxuICAgICAgICAgICAgbGFzdF9zdGFnZV9kYXRlOiBcXFwiXFxcIixcXG5cXG4gICAgICAgICAgICBqc29uX2ZpZWxkczoge1xcbiAgICAgICAgICAgICAgICBcXFwiVGlja2V0IE5vXFxcIjogXFxcInRpY2tldF9ub1xcXCIsXFxuICAgICAgICAgICAgICAgIFxcXCJUaWNrZXQgVHlwZVxcXCI6IFxcXCJ0aWNrZXRfdHlwZVxcXCIsXFxuICAgICAgICAgICAgICAgIE1hY2hpbmU6IHtcXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiBcXFwibWFjaGluZVxcXCIsXFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogKHZhbCkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWwubmFtZSArIFxcXCIgLSBcXFwiICsgdmFsLmZhcl9ubztcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIFxcXCJMaWtlbHkgRGF0ZVxcXCI6IFxcXCJsaWtlbHlfZGF0ZVxcXCIsXFxuICAgICAgICAgICAgICAgIFxcXCJSZXZlcnNpb24gRGF0ZVxcXCI6IFxcXCJyZXZlcnNpb25fZGF0ZVxcXCIsXFxuICAgICAgICAgICAgICAgIFxcXCJSZXZlcnNpb24gUmVhc29uXFxcIjogXFxcInJldmVyc2lvbl9yZWFzb25cXFwiLFxcbiAgICAgICAgICAgICAgICBcXFwiRXN0aW1hdGVkIE1hdGVyaWFsIENvc3RcXFwiOiBcXFwiZXN0aW1hdGVkX21hdGVyaWFsX2Nvc3RcXFwiLFxcbiAgICAgICAgICAgICAgICBcXFwiRXN0aW1hdGVkIFNlcnZpY2UgQ29zdFxcXCI6IFxcXCJlc3RpbWF0ZWRfc2VydmljZV9jb3N0XFxcIixcXG4gICAgICAgICAgICAgICAgXFxcIkFjdHVhbCBEYXRlXFxcIjogXFxcImFjdHVhbF9kYXRlXFxcIixcXG4gICAgICAgICAgICAgICAgXFxcIkFjdHVhbCBNYXRlcmlhbCBDb3N0XFxcIjogXFxcImFjdHVhbF9tYXRlcmlhbF9jb3N0XFxcIixcXG4gICAgICAgICAgICAgICAgXFxcIkFjdHVhbCBTZXJ2aWNlIENvc3RcXFwiOiBcXFwiYWN0dWFsX3NlcnZpY2VfY29zdFxcXCIsXFxuICAgICAgICAgICAgICAgIFxcXCJTdGF0dXNcXFwiOiBcXFwic3RhdHVzXFxcIixcXG4gICAgICAgICAgICAgICAgXFxcIlNlcnZpY2UgVHlwZVxcXCI6IFxcXCJzZXJ2aWNlX3R5cGVcXFwiLFxcbiAgICAgICAgICAgICAgICBcXFwiTWFpbnRlbmFuY2UgUHJvdmlkZXJcXFwiOiBcXFwibWFpbnRlbmFuY2VfcHJvdmlkZXJcXFwiLFxcbiAgICAgICAgICAgICAgICBcXFwiUHJvYmxlbSBEZXNjcmlwdGlvblxcXCI6IFxcXCJwcm9ibGVtX2Rlc2NyaXB0aW9uXFxcIixcXG4gICAgICAgICAgICAgICAgXFxcIkNvbXBsYWludCBOYXR1cmVcXFwiOiBcXFwiY29tcGxhaW50X25hdHVyZVxcXCIsXFxuICAgICAgICAgICAgICAgIFxcXCJTdGF0dXMgRHVyaW5nIENvbXBsYWludFxcXCI6IFxcXCJzdGF0dXNfZHVyaW5nX2NvbXBsYWludFxcXCIsXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBqc29uX21ldGE6IFtcXG4gICAgICAgICAgICAgICAgW1xcbiAgICAgICAgICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXFxcImNoYXJzZXRcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcXFwidXRmLThcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgXSxcXG4gICAgICAgICAgICBdLFxcbiAgICAgICAgfTtcXG4gICAgfSxcXG4gICAgbWV0aG9kczoge1xcbiAgICAgICAgYXN5bmMgcmVzZXRfZmlsdGVyKCkge1xcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoID0ge1xcbiAgICAgICAgICAgICAgICBwYWdlOiAxLFxcbiAgICAgICAgICAgICAgICBtYWNoaW5lX2lkOiBcXFwiXFxcIixcXG4gICAgICAgICAgICAgICAgc2l0ZV9pZDogXFxcIlxcXCIsXFxuICAgICAgICAgICAgICAgIGNvbXBsYWludF9uYXR1cmU6IFxcXCJcXFwiLFxcbiAgICAgICAgICAgICAgICB0aWNrZXRfdHlwZTogXFxcIlxcXCIsXFxuICAgICAgICAgICAgICAgIHRpY2tldDogXFxcIlxcXCIsXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIGFzeW5jIGV4cG9ydF9jc3YoKSB7XFxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXFxcImFwaS90aWNrZXQ/ZXhwb3J0PTFcXFwiLCB7XFxuICAgICAgICAgICAgICAgIHBhcmFtczoge1xcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoOiB0aGlzLnNlYXJjaCxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YS5kYXRhO1xcbiAgICAgICAgfSxcXG4gICAgICAgIHN0YXJ0RG93bmxvYWQoKSB7XFxuICAgICAgICAgICAgU3dhbC5maXJlKHtcXG4gICAgICAgICAgICAgICAgdGl0bGU6IFxcXCJQbGVhc2UgV2FpdCAhXFxcIixcXG4gICAgICAgICAgICAgICAgaHRtbDogXFxcIkRhdGEgcG9wdWxhdGluZ1xcXCIsIC8vIGFkZCBodG1sIGF0dHJpYnV0ZSBpZiB5b3Ugd2FudCBvciByZW1vdmVcXG4gICAgICAgICAgICAgICAgYWxsb3dPdXRzaWRlQ2xpY2s6IGZhbHNlLFxcbiAgICAgICAgICAgICAgICBvbkJlZm9yZU9wZW46ICgpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIFN3YWwuc2hvd0xvYWRpbmcoKTtcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB9KTtcXG4gICAgICAgIH0sXFxuICAgICAgICBmaW5pc2hEb3dubG9hZCgpIHtcXG4gICAgICAgICAgICBTd2FsLmNsb3NlKCk7XFxuICAgICAgICB9LFxcbiAgICAgICAgc2NsaWNrKHgsIHAgPSBcXFwiXFxcIikge1xcbiAgICAgICAgICAgIGlmIChwKSB7XFxuICAgICAgICAgICAgICAgIGxldCBhID0gdGhpcy5wcm9ibGVtc01vcmVbeF0gPyBmYWxzZSA6IHRydWU7XFxuICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLnByb2JsZW1zTW9yZSwgeCwgYSk7XFxuICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgICAgbGV0IGEgPSB0aGlzLmFkZGl0aW9uYWxNb3JlW3hdID8gZmFsc2UgOiB0cnVlO1xcbiAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5hZGRpdGlvbmFsTW9yZSwgeCwgYSk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIGdldExhYmVsKHZhbCkge1xcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsID09PSBcXFwib2JqZWN0XFxcIikge1xcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsLmZhcl9ubyArIFxcXCIgLSBcXFwiICsgdmFsLm5hbWU7XFxuICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgdmlld01vZGFsKHRpY2tldCkge1xcbiAgICAgICAgICAgIHRoaXMucG9wX3RpY2tldCA9IFxcXCJcXFwiO1xcblxcbiAgICAgICAgICAgIGF4aW9zXFxuICAgICAgICAgICAgICAgIC5nZXQoXFxcImFwaS90aWNrZXQvXFxcIiArIHRpY2tldC5pZClcXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3BfdGlja2V0ID0gcmVzLmRhdGEuZGF0YTtcXG4gICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9wX3RpY2tldCA9IHRpY2tldDtcXG4gICAgICAgICAgICAgICAgfSk7XFxuXFxuICAgICAgICAgICAgYXhpb3MuZ2V0KFxcXCJhcGkvY2F0ZWdvcnkvXFxcIiArIHRpY2tldC5jYXRlZ29yeV9pZCkudGhlbigocmVzKSA9PiB7XFxuICAgICAgICAgICAgICAgIHRoaXMuc3ViX2NhdGVnb3JpZXMgPSByZXMuZGF0YS5kYXRhO1xcbiAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgICQoXFxcIiN2aWV3bW9kYWxcXFwiKS5tb2RhbChcXFwic2hvd1xcXCIpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIEFkZFN0YWdlKCkge1xcbiAgICAgICAgICAgIHRoaXMuc3RhZ2VzLnB1c2goe1xcbiAgICAgICAgICAgICAgICBpZDogXFxcIlxcXCIsXFxuICAgICAgICAgICAgICAgIHN0YWdlX25vOiBcXFwiXFxcIixcXG4gICAgICAgICAgICAgICAgc3RhZ2VfZGF0ZTogXFxcIlxcXCIsXFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcXFwiXFxcIixcXG4gICAgICAgICAgICAgICAgZmlsZTogXFxcIlxcXCIsXFxuICAgICAgICAgICAgICAgIG5ld19maWxlOiBcXFwiXFxcIixcXG4gICAgICAgICAgICB9KTtcXG4gICAgICAgIH0sXFxuICAgICAgICBhc3luYyBjaG9vc2Vfc3RhZ2VfZmlsZShldmVudCwgeCkge1xcbiAgICAgICAgICAgIHRoaXMuc3RhZ2VzW3hdLm5ld19maWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xcbiAgICAgICAgfSxcXG5cXG4gICAgICAgIGFzeW5jIHVwbG9hZE1hdGVyaWFsQ29zdChldmVudCkge1xcbiAgICAgICAgICAgIHRoaXMuTWF0ZXJpYWxDb3N0ID0gZXZlbnQudGFyZ2V0LmZpbGVzO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGFzeW5jIHVwbG9hZFNlcnZpY2VDb3N0KGV2ZW50KSB7XFxuICAgICAgICAgICAgdGhpcy5TZXJ2aWNlQ29zdCA9IGV2ZW50LnRhcmdldC5maWxlcztcXG4gICAgICAgIH0sXFxuXFxuICAgICAgICBnZXRSZXN1bHRzKHBhZ2UgPSAxKSB7XFxuICAgICAgICAgICAgdGhpcy4kUHJvZ3Jlc3Muc3RhcnQoKTtcXG4gICAgICAgICAgICB0aGlzLnNlYXJjaC5wYWdlID0gcGFnZTtcXG4gICAgICAgICAgICBheGlvc1xcbiAgICAgICAgICAgICAgICAuZ2V0KFxcXCIvYXBpL3RpY2tldFxcXCIsIHtcXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczogdGhpcy5zZWFyY2gsXFxuICAgICAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLlRpY2tldHMgPSBkYXRhLmRhdGEuZGF0YTtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkaXRpb25hbE1vcmUgPSBuZXcgQXJyYXkodGhpcy5UaWNrZXRzLmRhdGEubGVuZ3RoKS5maWxsKGZhbHNlKTtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvYmxlbXNNb3JlID0gbmV3IEFycmF5KHRoaXMuVGlja2V0cy5kYXRhLmxlbmd0aCkuZmlsbChmYWxzZSk7XFxuICAgICAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgIHRoaXMuJFByb2dyZXNzLmZpbmlzaCgpO1xcbiAgICAgICAgfSxcXG5cXG4gICAgICAgIGNhbGN1bGF0ZV9sb3NzKCkge1xcbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm1jbG9zZS5hY3R1YWxfZGF0ZSAmJiB0aGlzLnBvcF90aWNrZXQuY3JlYXRlZF9hdCkge1xcbiAgICAgICAgICAgICAgICBsZXQgYSA9IG5ldyBEYXRlKHRoaXMuZm9ybWNsb3NlLmFjdHVhbF9kYXRlKS50b0lTT1N0cmluZygpO1xcbiAgICAgICAgICAgICAgICBsZXQgYiA9IG5ldyBEYXRlKHRoaXMucG9wX3RpY2tldC5jcmVhdGVkX2F0KS50b0lTT1N0cmluZygpO1xcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlQiA9IG1vbWVudChhKTtcXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZUMgPSBtb21lbnQoYik7XFxuXFxuXFxuICAgICAgICAgICAgICAgIHZhciBEaWZmID0gZGF0ZUIuZGlmZihkYXRlQywgJ2RheXMnKSArIDE7XFxuXFxuICAgICAgICAgICAgICAgIGxldCBocnMgPSB0aGlzLnBvcF9tYWNoaW5lLnByZGxvc3NfaHJzXFxuICAgICAgICAgICAgICAgIGxldCByYXRlID0gdGhpcy5wb3BfbWFjaGluZS5wcmRsb3NzX2hyX3JhdGVcXG4gICAgICAgICAgICAgICAgbGV0IHRsb3NzID0gKERpZmYgKiBocnMpO1xcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1jbG9zZS5wcm9kdWN0aW9uX2xvc3NfYW1vdW50ID0gKHRsb3NzICogcmF0ZSlcXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtY2xvc2UucHJvZHVjdGlvbl9sb3NzID0gdGxvc3NcXG5cXG5cXG5jb25zb2xlLmxvZyhocnMscmF0ZSxEaWZmKTtcXG5cXG5cXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICB9LFxcbiAgICAgICAgc3VibWl0Q2xvc2VUaWNrZXQoKSB7XFxuICAgICAgICAgICAgdGhpcy4kZm9yY2VVcGRhdGUoKTtcXG4gICAgICAgICAgICB0aGlzLiR2YWxpZGF0b3IudmFsaWRhdGVBbGwoXFxcImNsb3NldGlja2V0XFxcIikudGhlbihhc3luYyAodmFsaWQpID0+IHtcXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkKSB7XFxuICAgICAgICAgICAgICAgICAgICBsZXQgcG9wX2xvYWRlciA9IHRoaXMuJGxvYWRpbmcuc2hvdyh7fSk7XFxuICAgICAgICAgICAgICAgICAgICBsZXQgbGFzdF9tRGF0ZSA9IHRoaXMucG9wX21hY2hpbmUubGFzdF9tYWludGVuYW5jZXNcXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMucG9wX21hY2hpbmUubGFzdF9tYWludGVuYW5jZXMuZGF0ZXRpbWVcXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMucG9wX21hY2hpbmUubGFzdF9tYWludGVuYW5jZV9kYXRlO1xcblxcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RfbURhdGUgJiZcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm1jbG9zZS5hY3R1YWxfZGF0ZSAmJlxcbiAgICAgICAgICAgICAgICAgICAgICAgIERhdGUucGFyc2UoXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vbWVudCh0aGlzLmZvcm1jbG9zZS5hY3R1YWxfZGF0ZSkuZm9ybWF0KFxcXCJNTU0sREQgWVlZWVxcXCIpXFxuICAgICAgICAgICAgICAgICAgICAgICAgKSA8IERhdGUucGFyc2UobW9tZW50KGxhc3RfbURhdGUpLmZvcm1hdChcXFwiTU1NLEREIFlZWVlcXFwiKSlcXG4gICAgICAgICAgICAgICAgICAgICkge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcF9sb2FkZXIuaGlkZSgpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZShcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxcIllvdSBjYW4gbm90IGFkZCBwcmV2aW91cyBkYXRlJ3MgZGF0YSwgUGxlYXNlIHJlbW92ZSByZWNvcmQgZnJvbSBtYWludGVuYW5jZSBsaXN0LlxcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXFwid2FybmluZ1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlX2J0biA9IGZhbHNlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybWNsb3NlXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wdXQoXFxcIi9hcGkvdGlja2V0L1xcXCIgKyB0aGlzLmZvcm1jbG9zZS5pZClcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdWNjZXNzKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcXFwiI2Nsb3NlbW9kYWxcXFwiKS5tb2RhbChcXFwiaGlkZVxcXCIpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcXFwic3VjY2Vzc1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZS5kYXRhLm1lc3NhZ2UsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGxvYWRfZmlsZXModGhpcy5mb3JtY2xvc2UuaWQsIFxcXCJhY3R1YWxcXFwiKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiR2YWxpZGF0b3IucmVzZXQoKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm1jbG9zZS5yZXNldCgpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFRpY2tldHMoKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VfYnRuID0gdHJ1ZTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcF9sb2FkZXIuaGlkZSgpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZV9idG4gPSB0cnVlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wX2xvYWRlci5oaWRlKCk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGVyci5yZXNwb25zZS5kYXRhICE9IFxcXCJ1bmRlZmluZWRcXFwiKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0RXJyb3JzRnJvbVJlc3BvbnNlKGVyci5yZXNwb25zZS5kYXRhKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9KTtcXG4gICAgICAgIH0sXFxuXFxuICAgICAgICBjbG9zZU1vZGFsKHRpY2tldCkge1xcbiAgICAgICAgICAgIHRoaXMuJHZhbGlkYXRvci5wYXVzZSgpO1xcbiAgICAgICAgICAgICQoXFxcIiNjbG9zZW1vZGFsXFxcIikubW9kYWwoXFxcInNob3dcXFwiKTtcXG4gICAgICAgICAgICB0aGlzLiR2YWxpZGF0b3IucmVzZXQoKTtcXG4gICAgICAgICAgICB0aGlzLmZvcm1jbG9zZS5yZXNldCgpO1xcbiAgICAgICAgICAgIHRoaXMuJHJlZnMuZmlsZWFjdHVhbHNlcnZpY2UudmFsdWUgPSBudWxsO1xcbiAgICAgICAgICAgIHRoaXMuJHJlZnMuZmlsZWFjdHVhbG1hdGVyaWFsLnZhbHVlID0gbnVsbDtcXG4gICAgICAgICAgICB0aGlzLnBvcF90aWNrZXQgPSB0aWNrZXQ7XFxuICAgICAgICAgICAgdGhpcy5wb3BfbWFjaGluZSA9IHRpY2tldC5tYWNoaW5lO1xcbiAgICAgICAgICAgIHRoaXMuZm9ybWNsb3NlLmZpbGwodGlja2V0KTtcXG4gICAgICAgICAgICB0aGlzLmZvcm1jbG9zZS5lZGl0X3R5cGUgPSBcXFwiY2xvc2V0aWNrZXRcXFwiO1xcbiAgICAgICAgICAgIHRoaXMuJHZhbGlkYXRvci5yZXN1bWUoKTtcXG4gICAgICAgIH0sXFxuICAgICAgICBlZGl0TW9kYWwodGlja2V0KSB7XFxuICAgICAgICAgICAgdGhpcy5lZGl0bW9kZSA9IHRydWU7XFxuICAgICAgICAgICAgdGhpcy4kdmFsaWRhdG9yLnBhdXNlKCk7XFxuICAgICAgICAgICAgdGhpcy5mb3JtLnJlc2V0KCk7XFxuICAgICAgICAgICAgdGhpcy5wb3BfdGlja2V0ID0gdGlja2V0O1xcbiAgICAgICAgICAgIGlmICh0aGlzLiRnYXRlLmlzQWRtaW4oKSkge1xcbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLmZpbGVzZXJ2aWNlLnZhbHVlID0gbnVsbDtcXG4gICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5maWxlbWF0ZXJpYWwudmFsdWUgPSBudWxsO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB0aGlzLk1hdGVyaWFsQ29zdCA9IG51bGw7XFxuICAgICAgICAgICAgdGhpcy5TZXJ2aWNlQ29zdCA9IG51bGw7XFxuICAgICAgICAgICAgJChcXFwiI2FkZE5ld1xcXCIpLm1vZGFsKFxcXCJzaG93XFxcIik7XFxuICAgICAgICAgICAgdGhpcy5mb3JtLmZpbGwodGlja2V0KTtcXG4gICAgICAgICAgICB0aGlzLmZvcm0ubGlrZWx5X2RhdGUgPSB0aWNrZXQubGlrZWx5X2RhdGVcXG4gICAgICAgICAgICAgICAgPyBuZXcgRGF0ZSh0aWNrZXQubGlrZWx5X2RhdGUpLnRvSVNPU3RyaW5nKClcXG4gICAgICAgICAgICAgICAgOiBcXFwiXFxcIjtcXG4gICAgICAgICAgICB0aGlzLnN0YWdlcyA9IFtdO1xcbiAgICAgICAgICAgIGlmICh0aWNrZXQuc3RhZ2VzICYmIHRpY2tldC5zdGFnZXMubGVuZ3RoID4gMCkge1xcbiAgICAgICAgICAgICAgICB0aGlzLnN0YWdlcyA9IHRpY2tldC5zdGFnZXM7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIHRoaXMuJHZhbGlkYXRvci5yZXN1bWUoKTtcXG4gICAgICAgIH0sXFxuICAgICAgICBuZXdNb2RhbCgpIHtcXG4gICAgICAgICAgICB0aGlzLnN0YWdlcyA9IFtdO1xcbiAgICAgICAgICAgIHRoaXMuQWRkU3RhZ2UoKTtcXG4gICAgICAgICAgICB0aGlzLmVkaXRtb2RlID0gZmFsc2U7XFxuICAgICAgICAgICAgdGhpcy4kdmFsaWRhdG9yLnJlc2V0KCk7XFxuICAgICAgICAgICAgdGhpcy4kdmFsaWRhdG9yLnBhdXNlKCk7XFxuICAgICAgICAgICAgdGhpcy5mb3JtLnJlc2V0KCk7XFxuICAgICAgICAgICAgaWYgKHRoaXMuJGdhdGUuaXNBZG1pbigpKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuZmlsZXNlcnZpY2UudmFsdWUgPSBudWxsO1xcbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLmZpbGVtYXRlcmlhbC52YWx1ZSA9IG51bGw7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIHRoaXMuTWF0ZXJpYWxDb3N0ID0gbnVsbDtcXG4gICAgICAgICAgICB0aGlzLlNlcnZpY2VDb3N0ID0gbnVsbDtcXG4gICAgICAgICAgICAkKFxcXCIjYWRkTmV3XFxcIikubW9kYWwoXFxcInNob3dcXFwiKTtcXG4gICAgICAgICAgICB0aGlzLiR2YWxpZGF0b3IucmVzdW1lKCk7XFxuICAgICAgICB9LFxcblxcbiAgICAgICAgbG9hZFRpY2tldHMoKSB7XFxuICAgICAgICAgICAgLy8gaWYgKHRoaXMuJGdhdGUuaXNBZG1pbigpKSB7XFxuICAgICAgICAgICAgbGV0IHBvcF9sb2FkZXIgPSB0aGlzLiRsb2FkaW5nLnNob3coe30pO1xcbiAgICAgICAgICAgIGF4aW9zXFxuICAgICAgICAgICAgICAgIC5nZXQoXFxcIi9hcGkvdGlja2V0XFxcIiwge1xcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB0aGlzLnNlYXJjaCxcXG4gICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVGlja2V0cyA9IGRhdGEuZGF0YS5kYXRhO1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRpdGlvbmFsTW9yZSA9IG5ldyBBcnJheSh0aGlzLlRpY2tldHMuZGF0YS5sZW5ndGgpLmZpbGwoZmFsc2UpO1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ibGVtc01vcmUgPSBuZXcgQXJyYXkodGhpcy5UaWNrZXRzLmRhdGEubGVuZ3RoKS5maWxsKGZhbHNlKTtcXG4gICAgICAgICAgICAgICAgICAgIHBvcF9sb2FkZXIuaGlkZSgpO1xcbiAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgcG9wX2xvYWRlci5oaWRlKCk7XFxuICAgICAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgIC8vICAgfVxcbiAgICAgICAgfSxcXG5cXG4gICAgICAgIGFzeW5jIHVwbG9hZF9maWxlcyhpZCwgaXNhY3R1YWwgPSBmYWxzZSkge1xcbiAgICAgICAgICAgIGxldCBmbCA9IDA7XFxuICAgICAgICAgICAgaWYgKHRoaXMuTWF0ZXJpYWxDb3N0KSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuTWF0ZXJpYWxDb3N0LmZvckVhY2goKGZpbGUpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIHZhciBmZCA9IG5ldyBGb3JtRGF0YSgpO1xcbiAgICAgICAgICAgICAgICAgICAgZmQuYXBwZW5kKGBmaWxlYCwgZmlsZSk7XFxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNhY3R1YWwpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBmZC5hcHBlbmQoYGZpbGVfdHlwZWAsIFxcXCJBY3R1YWwgRXN0aW1hdGVkIE1hdGVyaWFsXFxcIik7XFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGZkLmFwcGVuZChgZmlsZV90eXBlYCwgXFxcIkVzdGltYXRlZCBNYXRlcmlhbFxcXCIpO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgZmQuYXBwZW5kKGB0aWNrZXRfaWRgLCBpZCk7XFxuICAgICAgICAgICAgICAgICAgICBheGlvcy5wb3N0KFxcXCJhcGkvdGlja2V0L2ZpbGVzXFxcIiwgZmQpLnRoZW4oKHJlcykgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxcXCJnYWxsZXJ5IHVwbG9hZGVkXFxcIik7XFxuICAgICAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIGlmICh0aGlzLlNlcnZpY2VDb3N0KSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuU2VydmljZUNvc3QuZm9yRWFjaCgoZmlsZSkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZkID0gbmV3IEZvcm1EYXRhKCk7XFxuICAgICAgICAgICAgICAgICAgICBmZC5hcHBlbmQoYGZpbGVgLCBmaWxlKTtcXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc2FjdHVhbCkge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGZkLmFwcGVuZChgZmlsZV90eXBlYCwgXFxcIkFjdHVhbCBFc3RpbWF0ZWQgU2VydmljZVxcXCIpO1xcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBmZC5hcHBlbmQoYGZpbGVfdHlwZWAsIFxcXCJFc3RpbWF0ZWQgU2VydmljZVxcXCIpO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgZmQuYXBwZW5kKGB0aWNrZXRfaWRgLCBpZCk7XFxuICAgICAgICAgICAgICAgICAgICBheGlvcy5wb3N0KFxcXCJhcGkvdGlja2V0L2ZpbGVzXFxcIiwgZmQpLnRoZW4oKHJlcykgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxcXCJnYWxsZXJ5IHVwbG9hZGVkXFxcIik7XFxuICAgICAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG5cXG4gICAgICAgIGFzeW5jIHVwbG9hZF9zdGFnZXMoaWQpIHtcXG4gICAgICAgICAgICBpZiAodGhpcy5zdGFnZXMpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFnZXMuZm9yRWFjaCgoc3RhZ2UpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIHZhciBmZCA9IG5ldyBGb3JtRGF0YSgpO1xcbiAgICAgICAgICAgICAgICAgICAgZmQuYXBwZW5kKGBpZGAsIHN0YWdlLmlkKTtcXG4gICAgICAgICAgICAgICAgICAgIGZkLmFwcGVuZChgc3RhZ2Vfbm9gLCBzdGFnZS5zdGFnZV9ubyk7XFxuICAgICAgICAgICAgICAgICAgICBmZC5hcHBlbmQoYHN0YWdlX2RhdGVgLCBzdGFnZS5zdGFnZV9kYXRlKTtcXG4gICAgICAgICAgICAgICAgICAgIGZkLmFwcGVuZChgZGVzY3JpcHRpb25gLCBzdGFnZS5kZXNjcmlwdGlvbik7XFxuICAgICAgICAgICAgICAgICAgICAvL2ZkLmFwcGVuZChgbmV3X2ZpbGVgLCBzdGFnZS5uZXdfZmlsZSk7XFxuICAgICAgICAgICAgICAgICAgICAvLyBmZC5hcHBlbmQoYGZpbGVgLCBzdGFnZS5maWxlKTtcXG4gICAgICAgICAgICAgICAgICAgIGZkLmFwcGVuZChgdGlja2V0X2lkYCwgaWQpO1xcbiAgICAgICAgICAgICAgICAgICAgYXhpb3MucG9zdChcXFwiYXBpL3RpY2tldC9zdGFnZXNcXFwiLCBmZCkudGhlbigocmVzKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXFxcInN0YWdlcyB1cGxvYWRlZFxcXCIpO1xcbiAgICAgICAgICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuXFxuICAgICAgICBzdWJtaXRUaWNrZXQoKSB7XFxuICAgICAgICAgICAgdGhpcy4kdmFsaWRhdG9yLnZhbGlkYXRlQWxsKCkudGhlbihhc3luYyAodmFsaWQpID0+IHtcXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkKSB7XFxuICAgICAgICAgICAgICAgICAgICBsZXQgcG9wX2xvYWRlciA9IHRoaXMuJGxvYWRpbmcuc2hvdyh7XFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyOiB0aGlzLiRyZWZzLnZwc19zdWJtaXRfcG9wLFxcbiAgICAgICAgICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLmlkKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wdXQoXFxcIi9hcGkvdGlja2V0L1xcXCIgKyB0aGlzLmZvcm0uaWQpXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3VjY2Vzcykge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXFxcIiNhZGROZXdcXFwiKS5tb2RhbChcXFwiaGlkZVxcXCIpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcXFwic3VjY2Vzc1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZS5kYXRhLm1lc3NhZ2UsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGxvYWRfc3RhZ2VzKHRoaXMuZm9ybS5pZCk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGxvYWRfZmlsZXModGhpcy5mb3JtLmlkKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRUaWNrZXRzKCk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3BfbG9hZGVyLmhpZGUoKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcF9sb2FkZXIuaGlkZSgpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlcnIucmVzcG9uc2UuZGF0YSAhPSBcXFwidW5kZWZpbmVkXFxcIikge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHNldEVycm9yc0Zyb21SZXNwb25zZShlcnIucmVzcG9uc2UuZGF0YSk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnBvc3QoXFxcIi9hcGkvdGlja2V0XFxcIilcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdWNjZXNzKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcXFwiI2FkZE5ld1xcXCIpLm1vZGFsKFxcXCJoaWRlXFxcIik7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFxcXCJzdWNjZXNzXFxcIixcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLmRhdGEubWVzc2FnZSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZF9maWxlcyhyZXNwb25zZS5kYXRhLmRhdGEuaWQpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFRpY2tldHMoKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcF9sb2FkZXIuaGlkZSgpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wX2xvYWRlci5oaWRlKCk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGVyci5yZXNwb25zZS5kYXRhICE9IFxcXCJ1bmRlZmluZWRcXFwiKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0RXJyb3JzRnJvbVJlc3BvbnNlKGVyci5yZXNwb25zZS5kYXRhKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9KTtcXG4gICAgICAgIH0sXFxuXFxuICAgICAgICBhc3luYyBjaGVja19mcmVlX3NlcnZpY2UoKSB7XFxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRfbWFjaGluZSkge1xcbiAgICAgICAgICAgICAgICBpZiAoXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkX21hY2hpbmUuY29tcGxldGVkX2ZyZWVfc2VydmljZSA+PVxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZF9tYWNoaW5lLmZyZWVfc2VydmljZV9ub1xcbiAgICAgICAgICAgICAgICApIHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5zZXJ2aWNlX3R5cGUgPSBcXFwiUGFpZCBTZXJ2aWNlXFxcIjtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5mcmVlX3NlcnZpY2Vfbm8gPSBcXFwiXFxcIjtcXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5mcmVlX3NlcnZpY2Vfbm8gPVxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRfbWFjaGluZS5jb21wbGV0ZWRfZnJlZV9zZXJ2aWNlICsgMTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICBpZiAoXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkX21hY2hpbmUgJiZcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRfbWFjaGluZS5tYWNoaW5lX3R5cGUgPT0gXFxcIk5ld1xcXCIgJiZcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5zZXJ2aWNlX3R5cGUgPT0gXFxcIkZyZWUgU2VydmljZVxcXCJcXG4gICAgICAgICAgICAgICAgKSB7XFxuICAgICAgICAgICAgICAgICAgICAvLyAgdGhpcy5zZWxlY3RlZF9tYWNoaW5lLmZyZWVfc2VydmljZV9ub1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG5cXG4gICAgICAgIGFzeW5jIGdldF9tYWNoaW5lKCkge1xcbiAgICAgICAgICAgIGF4aW9zXFxuICAgICAgICAgICAgICAgIC5nZXQoXFxcIi9hcGkvdGlja2V0X21hY2hpbmVcXFwiLCB7XFxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXRlX2lkOiB0aGlzLmZvcm0uc2l0ZV9pZCxcXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeV9pZDogdGhpcy5mb3JtLmNhdGVnb3J5X2lkLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Yl9jYXRlZ29yeV9pZDogdGhpcy5mb3JtLnN1Yl9jYXRlZ29yeV9pZCxcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWNoaW5lcyA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcXG4gICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IGNvbnNvbGUud2FybihcXFwiT2guIFNvbWV0aGluZyB3ZW50IHdyb25nXFxcIikpO1xcbiAgICAgICAgfSxcXG4gICAgfSxcXG4gICAgbW91bnRlZCgpIHsgfSxcXG4gICAgY3JlYXRlZCgpIHtcXG4gICAgICAgIHRoaXMubG9hZFRpY2tldHMoKTtcXG4gICAgfSxcXG4gICAgYmVmb3JlQ3JlYXRlKCkge1xcbiAgICAgICAgYXhpb3MuZ2V0KFxcXCJhcGkvZ2V0X3ByZV9tYWNoaW5lXFxcIikudGhlbigocmVzKSA9PiB7XFxuICAgICAgICAgICAgdGhpcy5jYXRlZ29yaWVzID0gcmVzLmRhdGEuZGF0YS5DYXRlZ29yeTtcXG4gICAgICAgICAgICB0aGlzLnNpdGVzID0gcmVzLmRhdGEuZGF0YS5zaXRlcztcXG4gICAgICAgIH0pO1xcbiAgICAgICAgYXhpb3NcXG4gICAgICAgICAgICAuZ2V0KFxcXCIvYXBpL2luaXRpYWxfdGlja2V0XFxcIilcXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcXG4gICAgICAgICAgICAgICAgdGhpcy51c2VycyA9IHJlc3BvbnNlLmRhdGEuZGF0YS52ZW5kb3JzO1xcbiAgICAgICAgICAgICAgICB0aGlzLm1hY2hpbmVzID0gcmVzcG9uc2UuZGF0YS5kYXRhLm1hY2hpbmVzO1xcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaF9tYWNoaW5lcyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5tYWNoaW5lcztcXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hfc2l0ZXMgPSByZXNwb25zZS5kYXRhLmRhdGEuc2l0ZXM7XFxuICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4gY29uc29sZS53YXJuKFxcXCJPaC4gU29tZXRoaW5nIHdlbnQgd3JvbmdcXFwiKSk7XFxuICAgIH0sXFxuICAgIHdhdGNoOiB7XFxuICAgICAgICBcXFwiZm9ybWNsb3NlLm1hY2hpbmVfc3RhdHVzXFxcIihuKSB7XFxuICAgICAgICAgICAgaWYgKG4gPT0gXFxcIk5vbiBSZXBhaXJhYmxlXFxcIikge1xcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1jbG9zZS5hY3R1YWxfbWF0ZXJpYWxfY29zdCA9IDA7XFxuICAgICAgICAgICAgICAgIHRoaXMuZm9ybWNsb3NlLmFjdHVhbF9zZXJ2aWNlX2Nvc3QgPSAwO1xcbiAgICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuZm9ybWNsb3NlLmFjdHVhbF9tYXRlcmlhbF9jb3N0ID0gXFxcIlxcXCI7XFxuICAgICAgICAgICAgICAgIHRoaXMuZm9ybWNsb3NlLmFjdHVhbF9zZXJ2aWNlX2Nvc3QgPSBcXFwiXFxcIjtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgYXN5bmMgXFxcImZvcm0uc3ViX2NhdGVnb3J5X2lkXFxcIihuLCBvKSB7XFxuICAgICAgICAgICAgaWYgKG4pIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRfbWFjaGluZSgpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBhc3luYyBcXFwiZm9ybS5zaXRlX2lkXFxcIihuLCBvKSB7XFxuICAgICAgICAgICAgaWYgKG4pIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRfbWFjaGluZSgpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuXFxuICAgICAgICBcXFwiZm9ybS5jYXRlZ29yeV9pZFxcXCI6IHtcXG4gICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbiAobiwgbykge1xcbiAgICAgICAgICAgICAgICBpZiAobikge1xcbiAgICAgICAgICAgICAgICAgICAgYXhpb3MuZ2V0KFxcXCJhcGkvY2F0ZWdvcnkvXFxcIiArIG4pLnRoZW4oKHJlcykgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3ViX2NhdGVnb3JpZXMgPSByZXMuZGF0YS5kYXRhO1xcbiAgICAgICAgICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldF9tYWNoaW5lKCk7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGRlZXA6IHRydWUsXFxuICAgICAgICAgICAgaW5pdGlhbDogdHJ1ZSxcXG4gICAgICAgIH0sXFxuICAgICAgICBzdGFnZXM6IHtcXG4gICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbiAobiwgbykge1xcbiAgICAgICAgICAgICAgICBpZiAobiAmJiBuLmxlbmd0aCA+IDApIHtcXG4gICAgICAgICAgICAgICAgICAgIGxldCBsYSA9IG5bbi5sZW5ndGggLSAxXTtcXG4gICAgICAgICAgICAgICAgICAgIGlmIChsYS5zdGFnZV9ubylcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3Rfc3RhZ2VfaW5kZXggPSB0aGlzLm9wbl9zdGFnZS5pbmRleE9mKGxhLnN0YWdlX25vKTtcXG4gICAgICAgICAgICAgICAgICAgIGlmIChsYS5zdGFnZV9kYXRlKVxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdF9zdGFnZV9kYXRlID0gbmV3IERhdGUobGEuc3RhZ2VfZGF0ZSkudG9JU09TdHJpbmcoKTtcXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdF9zdGFnZV9pbmRleCA9IDA7XFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wb3BfdGlja2V0ICYmIHRoaXMucG9wX3RpY2tldC5jcmVhdGVkX2F0KSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0X3N0YWdlX2RhdGUgPSBuZXcgRGF0ZShcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3BfdGlja2V0LmNyZWF0ZWRfYXRcXG4gICAgICAgICAgICAgICAgICAgICAgICApLnRvSVNPU3RyaW5nKCk7XFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdF9zdGFnZV9kYXRlID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBkZWVwOiB0cnVlLFxcbiAgICAgICAgICAgIGluaXRpYWw6IHRydWUsXFxuICAgICAgICB9LFxcblxcbiAgICAgICAgYXN5bmMgXFxcImZvcm0ubWFpbnRlbmFuY2VfcHJvdmlkZXJcXFwiKG4pIHtcXG4gICAgICAgICAgICBpZiAobiAhPSBcXFwidmVuZG9yXFxcIikge1xcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0uc2VydmljZV90eXBlID0gXFxcIlBhaWQgU2VydmljZVxcXCI7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIGF4aW9zXFxuICAgICAgICAgICAgICAgIC5nZXQoXFxcImFwaS91c2VyL2xpc3RcXFwiLCB7XFxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBuLFxcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJzID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xcbiAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4gY29uc29sZS53YXJuKFxcXCJPaC4gU29tZXRoaW5nIHdlbnQgd3JvbmdcXFwiKSk7XFxuICAgICAgICB9LFxcblxcbiAgICAgICAgYXN5bmMgXFxcImZvcm0ubWFjaGluZV9pZFxcXCIobikge1xcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRfbWFjaGluZSA9IHRoaXMubWFjaGluZXMuZmluZCgoeCkgPT4geC5pZCA9PT0gbik7XFxuICAgICAgICAgICAgYXdhaXQgdGhpcy5jaGVja19mcmVlX3NlcnZpY2UoKTtcXG4gICAgICAgIH0sXFxuICAgICAgICBhc3luYyBcXFwiZm9ybS5zZXJ2aWNlX3R5cGVcXFwiKG4pIHtcXG4gICAgICAgICAgICBpZiAobiA9PSBcXFwiRnJlZSBTZXJ2aWNlXFxcIikge1xcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmNoZWNrX2ZyZWVfc2VydmljZSgpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBhc3luYyBcXFwiZm9ybWNsb3NlLmFjdHVhbF9kYXRlXFxcIigpIHtcXG4gICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZV9sb3NzKCk7XFxuICAgICAgICB9XFxuICAgIH0sXFxufTtcXG48L3NjcmlwdD5cXG48c3R5bGU+XFxuLmJzIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2QyZDFkMWE4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5jb21tYX4uY29tbWE6bm90KDplbXB0eSk6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIiwgXFxcIjtcXG59XFxuXFxuLnJtb3JlIHtcXG4gICAgY29sb3I6IGJsdWU7XFxufVxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJzZWN0aW9uXCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lci1mbHVpZFwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0xMlwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtaGVhZGVyXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZVwiIH0sIFtfdm0uX3YoXCJUaWNrZXQgTGlzdFwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC10b29sc1wiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc20gYnRuLXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0bzogXCIvdGlja2V0L2FkZFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5uZXdNb2RhbCB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1wbHVzLXNxdWFyZVwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkIE5ld1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHkgcC0yXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImZvcm1cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBhdXRvY29tcGxldGU6IFwib2ZmXCIsIFwiZGF0YS12di1zY29wZVwiOiBcInNlYXJjaGZyXCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmdldFJlc3VsdHMoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtLXJvd1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdldC1vcHRpb24tbGFiZWxcIjogX3ZtLmdldExhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkdWNlOiBmdW5jdGlvbihvcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5zZWFyY2hfbWFjaGluZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJFbnRlciBtYWNoaW5lcyAuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibWFjaGluZV9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2gubWFjaGluZV9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNlYXJjaCwgXCJtYWNoaW5lX2lkXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaC5tYWNoaW5lX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaC50aWNrZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaC50aWNrZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRW50ZXIgdGlja2V0IC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidGlja2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5zZWFyY2gudGlja2V0IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWFyY2gsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGlja2V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJzaXRlX25hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZHVjZTogZnVuY3Rpb24ob3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24uaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0uc2VhcmNoX3NpdGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiU2VsZWN0IFNpdGUuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2l0ZV9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2guc2l0ZV9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNlYXJjaCwgXCJzaXRlX2lkXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaC5zaXRlX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJzaXRlX25hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IFtcIk9wZW5cIiwgXCJDbG9zZWRcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJTZWxlY3QgU3RhdHVzLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInN0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2guc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2VhcmNoLCBcInN0YXR1c1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2guc3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJzaXRlX25hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IFtcIk1ham9yXCIsIFwiTWlub3JcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJTZWxlY3QgQ29tcGxhaW50IE5hdHVyZS4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJjb21wbGFpbnRfbmF0dXJlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaC5jb21wbGFpbnRfbmF0dXJlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2VhcmNoLCBcImNvbXBsYWludF9uYXR1cmVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoLmNvbXBsYWludF9uYXR1cmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcInNpdGVfbmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkJyZWFrZG93biBNYWludGVuYW5jZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlBlcmlvZGljIE1haW50ZW5hbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJTZWxlY3QgVGlja2V0IFR5cGUuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidGlja2V0X3R5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoLnRpY2tldF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2VhcmNoLCBcInRpY2tldF90eXBlXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaC50aWNrZXRfdHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlNlYXJjaFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWluZm8gbWwtMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZXNldF9maWx0ZXIoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJSZXNldFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRvd25sb2FkLWV4Y2VsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4td2FybmluZyBtbC0yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2g6IF92bS5leHBvcnRfY3N2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkczogX3ZtLmpzb25fZmllbGRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmVmb3JlLWdlbmVyYXRlXCI6IF92bS5zdGFydERvd25sb2FkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmVmb3JlLWZpbmlzaFwiOiBfdm0uZmluaXNoRG93bmxvYWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0OiBcIk15IFdvcmtzaGVldFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiY3N2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ0aWNrZXRfbGlzdC5jc3ZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsYWJlbFRleHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLWZpbGUtZXhjZWwtb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV4cG9ydCBhcyBDU1ZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmQtYm9keSB0aWNrZXRMc3RUYmwgdGFibGUtcmVzcG9uc2l2ZSBwLTBcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJ0YWJsZVwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlIHRhYmxlLWhvdmVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInRib2R5XCIsXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uVGlja2V0cy5kYXRhLCBmdW5jdGlvbih0aWNrZXQsIHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCB7IGtleTogdGlja2V0LmlkIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3ModGlja2V0LnRpY2tldF9ubykpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyh0aWNrZXQudGlja2V0X3R5cGUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNhcGl0YWxpemVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3ModGlja2V0Lm1hY2hpbmUubmFtZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja2V0LnByb2JsZW1fZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJWdWVSZWFkTW9yZVNtb290aFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW46IF92bS5wcm9ibGVtc01vcmVbeF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuby1idXR0b25cIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5vLXNoYWRvd1wiOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1cGRhdGU6b3BlblwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnByb2JsZW1zTW9yZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyh0aWNrZXQucHJvYmxlbV9kZXNjcmlwdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJtb3JlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zY2xpY2soeCwgXCJwXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIuLi5cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wcm9ibGVtc01vcmVbeF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiTGVzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIk1vcmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tldC5wcm9ibGVtcyAmJiB0aWNrZXQucHJvYmxlbXMubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlZ1ZVJlYWRNb3JlU21vb3RoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbjogX3ZtLmFkZGl0aW9uYWxNb3JlW3hdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibm8tYnV0dG9uXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuby1zaGFkb3dcIjogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidXBkYXRlOm9wZW5cIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5hZGRpdGlvbmFsTW9yZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKHRpY2tldC5wcm9ibGVtcywgZnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRpY2tldC5wcm9ibGVtc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcInBcIiArIGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogX3ZtLl9zKGl0ZW0ucHJvYmxlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicm1vcmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNjbGljayh4KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLi4uXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uYWRkaXRpb25hbE1vcmVbeF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiTGVzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIk1vcmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrZXQubWFjaGluZS5mYXJfbm8gK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIC0gXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tldC5tYWNoaW5lLm5hbWUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIC0gXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aWNrZXQubWFjaGluZS5tYWNoaW5lX21vZGVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRpY2tldC5tYWNoaW5lLm1hY2hpbmVfbW9kZWwubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm51bGxcIikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIC0gXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tldC5tYWNoaW5lLm1hY2hpbmVfc3Jfbm9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3ModGlja2V0LnNpdGUgPyB0aWNrZXQuc2l0ZS5zaXRlX25hbWUgOiBcIi1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyh0aWNrZXQuY29tcGxhaW50X25hdHVyZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyh0aWNrZXQuY3JlYXRlZF9ieV9uYW1lKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uX2YoXCJteURhdGVcIikodGlja2V0LmNyZWF0ZWRfYXQpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5fZihcIm15RGF0ZVwiKSh0aWNrZXQubGlrZWx5X2RhdGUpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5fZihcIm15RGF0ZVwiKSh0aWNrZXQucmV2ZXJzaW9uX2RhdGUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tldC5zdGF0dXMudG9Mb3dlckNhc2UoKSA9PSBcImNyZWF0ZWQgYnkgdXNlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIk9wZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGlja2V0LnN0YXR1c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi13YXJuaW5nIGJ0bi1zbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcImphdmFzY3JpcHQ6dm9pZCgwKTtcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udmlld01vZGFsKHRpY2tldClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZpZXdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja2V0LnN0YXR1cyAhPSBcIkNsb3NlZFwiICYmIF92bS4kZ2F0ZS5pc0FkbWluKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2VzcyBidG4tc21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRvOiBcIi90aWNrZXQvZWRpdC9cIiArIHRpY2tldC5pZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiRWRpdFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tldC5zdGF0dXMgIT0gXCJDbG9zZWRcIiAmJiBfdm0uJGdhdGUuaXNBZG1pbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGFuZ2VyIGJ0bi1zbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogXCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkNsb3NlIHRpY2tldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2xvc2VNb2RhbCh0aWNrZXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDbG9zZVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjYXJkLWZvb3RlclwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInBhZ2luYXRpb25cIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZGF0YTogX3ZtLlRpY2tldHMgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IFwicGFnaW5hdGlvbi1jaGFuZ2UtcGFnZVwiOiBfdm0uZ2V0UmVzdWx0cyB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJtb2RhbCBmYWRlXCIsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgaWQ6IFwiY2xvc2Vtb2RhbFwiLFxuICAgICAgICAgIHRhYmluZGV4OiBcIi0xXCIsXG4gICAgICAgICAgcm9sZTogXCJkaWFsb2dcIixcbiAgICAgICAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBcImNsb3NlbW9kYWxcIixcbiAgICAgICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1kaWFsb2cgbW9kYWwtbGdcIiwgYXR0cnM6IHsgcm9sZTogXCJkb2N1bWVudFwiIH0gfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWNvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJkYXRhLXZ2LXNjb3BlXCI6IFwiY2xvc2V0aWNrZXRcIiB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc3VibWl0Q2xvc2VUaWNrZXQoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWJvZHlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5wb3BfbWFjaGluZVxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXNtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiRmFyIE5vIDpcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucG9wX21hY2hpbmUuZmFyX25vKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCJNYWNoaW5lIE5hbWUgOlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5wb3BfbWFjaGluZS5uYW1lKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCJNYWNoaW5lIE1vZGVsIDpcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3BfbWFjaGluZS5tYWNoaW5lX21vZGVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX3ZtLnBvcF9tYWNoaW5lLm1hY2hpbmVfbW9kZWwubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiLVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCJNYWNoaW5lIENoYXNzaXMgTm8gOlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5wb3BfbWFjaGluZS5jaGFzc2lzX25vKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1zbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIk1hY2hpbmUgU2wgTm86XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnBvcF9tYWNoaW5lLm1hY2hpbmVfc3Jfbm8pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIk1hY2hpbmUgUmVnbiBObyA6XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnBvcF9tYWNoaW5lLnJlZ25fbm8pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIk1hY2hpbmUgRW5naW5lIE5vIDpcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucG9wX21hY2hpbmUuZW5naW5lX25vKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCJUaWNrZXQgTm8gOlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfdm0ucG9wX3RpY2tldC50aWNrZXRfbm9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIi1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnZlcnJvcnMuY2xvc2V0aWNrZXQpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ucG9wX3RpY2tldCAmJiBfdm0ucG9wX3RpY2tldC5saWtlbHlfZGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC02XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIkFjdHVhbCBEYXRlXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGF0ZXRpbWVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzLWludmFsaWRcIjogX3ZtLnZlcnJvcnMuaGFzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsb3NldGlja2V0LmFjdHVhbF9kYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlLXpvbmVcIjogXCJBc2lhL0tvbGthdGFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiYWN0dWFsX2RhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW5wdXQtY2xhc3NcIjogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1hc1wiOiBcIkFjdHVhbCBEYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1pbi1kYXRldGltZVwiOiBuZXcgRGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXQuY3JlYXRlZF9hdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS50b0lTT1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXgtZGF0ZXRpbWVcIjogbmV3IERhdGUoKS50b0lTT1N0cmluZygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtY2xvc2UuYWN0dWFsX2RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb3JtY2xvc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhY3R1YWxfZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtY2xvc2UuYWN0dWFsX2RhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcImNsb3NldGlja2V0LmFjdHVhbF9kYXRlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWxwLWJsb2NrIGludmFsaWQtZmVlZGJhY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmZpcnN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbG9zZXRpY2tldC5hY3R1YWxfZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC02XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJNYWNoaW5lIFN0YXR1c1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm1jbG9zZS5tYWNoaW5lX3N0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm1jbG9zZS5tYWNoaW5lX3N0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzLWludmFsaWRcIjogX3ZtLnZlcnJvcnMuaGFzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xvc2V0aWNrZXQubWFjaGluZV9zdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtYWNoaW5lX3N0YXR1c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtYXNcIjogXCJtYWNoaW5lIHN0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb3JtY2xvc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1hY2hpbmVfc3RhdHVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJCRzZWxlY3RlZFZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiUnVubmluZ1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJSdW5uaW5nXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB2YWx1ZTogXCJSdW5uaW5nIHdpdGggUHJvYmxlbVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUnVubmluZyB3aXRoIFByb2JsZW1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHZhbHVlOiBcIk5vbiBSZXBhaXJhYmxlXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiTm9uIFJlcGFpcmFibGVcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJjbG9zZXRpY2tldC5tYWNoaW5lX3N0YXR1c1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5maXJzdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xvc2V0aWNrZXQubWFjaGluZV9zdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIkVzdGltYXRlZCBNYXRlcmlhbCBjb3N0XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCByZWFkb25seTogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXQuZXN0aW1hdGVkX21hdGVyaWFsX2Nvc3QgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucG9wX3RpY2tldC5hZF9lc3RpbWF0ZWRfbWF0ZXJpYWxfY29zdCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXQuZXN0aW1hdGVkX21hdGVyaWFsX2Nvc3QgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIitcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3BfdGlja2V0LmFkX2VzdGltYXRlZF9tYXRlcmlhbF9jb3N0ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtNFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiQWN0dWFsIE1hdGVyaWFsIGNvc3RcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm1jbG9zZS5hY3R1YWxfbWF0ZXJpYWxfY29zdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtY2xvc2UuYWN0dWFsX21hdGVyaWFsX2Nvc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzLWludmFsaWRcIjogX3ZtLnZlcnJvcnMuaGFzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsb3NldGlja2V0LmFjdHVhbF9tYXRlcmlhbF9jb3N0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiYWN0dWFsX21hdGVyaWFsX2Nvc3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1hc1wiOiBcIkFjdHVhbCBNYXRlcmlhbCBjb3N0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkb25seTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZvcm1jbG9zZS5tYWNoaW5lX3N0YXR1cyA9PSBcIk5vbiBSZXBhaXJhYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm1jbG9zZS5hY3R1YWxfbWF0ZXJpYWxfY29zdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZvcm1jbG9zZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFjdHVhbF9tYXRlcmlhbF9jb3N0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuaGFzKFwiY2xvc2V0aWNrZXQuYWN0dWFsX21hdGVyaWFsX2Nvc3RcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuZmlyc3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsb3NldGlja2V0LmFjdHVhbF9tYXRlcmlhbF9jb3N0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC00XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCIgQWN0dWFsIE1hdGVyaWFsIGNvc3QgRmlsZVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIicnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJmaWxlYWN0dWFsbWF0ZXJpYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpcy1pbnZhbGlkXCI6IF92bS52ZXJyb3JzLmhhcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbG9zZXRpY2tldC5tYXRlcmlhbF9jb3N0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImZpbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtYXRlcmlhbF9jb3N0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtYXNcIjogXCJBY3R1YWwgTWF0ZXJpYWwgY29zdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjaGFuZ2U6IF92bS51cGxvYWRNYXRlcmlhbENvc3QgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXQuYWN0dWFsX2VzdGltYXRlZF9tYXRlcmlhbF9maWxlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2xlYXJmaXhcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hY3R1YWxfZXN0aW1hdGVkX21hdGVyaWFsX2ZpbGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKGl0ZW0sIHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGl0ZW0uaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IGl0ZW0uZmlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogXCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVmlld1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3BfdGlja2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWN0dWFsX2VzdGltYXRlZF9tYXRlcmlhbF9maWxlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmxlbmd0aCA+IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8geCArIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuaGFzKFwiY2xvc2V0aWNrZXQubWF0ZXJpYWxfY29zdFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5maXJzdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xvc2V0aWNrZXQubWF0ZXJpYWxfY29zdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtNFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiRXN0aW1hdGVkIFNlcnZpY2UgY29zdFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcmVhZG9ubHk6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3BfdGlja2V0LmVzdGltYXRlZF9zZXJ2aWNlX2Nvc3QgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucG9wX3RpY2tldC5hZF9lc3RpbWF0ZWRfc2VydmljZV9jb3N0ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIoXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucG9wX3RpY2tldC5lc3RpbWF0ZWRfc2VydmljZV9jb3N0ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIrXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucG9wX3RpY2tldC5hZF9lc3RpbWF0ZWRfc2VydmljZV9jb3N0ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtNFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiQWN0dWFsIFNlcnZpY2UgY29zdFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybWNsb3NlLmFjdHVhbF9zZXJ2aWNlX2Nvc3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybWNsb3NlLmFjdHVhbF9zZXJ2aWNlX2Nvc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzLWludmFsaWRcIjogX3ZtLnZlcnJvcnMuaGFzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsb3NldGlja2V0LmFjdHVhbF9zZXJ2aWNlX2Nvc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJhY3R1YWxfc2VydmljZV9jb3N0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtYXNcIjogXCJBY3R1YWwgU2VydmljZSBjb3N0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkb25seTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZvcm1jbG9zZS5tYWNoaW5lX3N0YXR1cyA9PSBcIk5vbiBSZXBhaXJhYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm1jbG9zZS5hY3R1YWxfc2VydmljZV9jb3N0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybWNsb3NlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWN0dWFsX3NlcnZpY2VfY29zdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcImNsb3NldGlja2V0LmFjdHVhbF9zZXJ2aWNlX2Nvc3RcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuZmlyc3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsb3NldGlja2V0LmFjdHVhbF9zZXJ2aWNlX2Nvc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIiBBY3R1YWwgU2VydmljZSBjb3N0IEZpbGUgXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJydcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiBcImZpbGVhY3R1YWxzZXJ2aWNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXMtaW52YWxpZFwiOiBfdm0udmVycm9ycy5oYXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xvc2V0aWNrZXQuc2VydmljZV9jb3N0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImZpbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzZXJ2aWNlX2Nvc3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1hc1wiOiBcIkFjdHVhbCBTZXJ2aWNlIGNvc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2hhbmdlOiBfdm0udXBsb2FkU2VydmljZUNvc3QgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXQuYWN0dWFsX2VzdGltYXRlZF9zZXJ2aWNlX2ZpbGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjbGVhcmZpeFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucG9wX3RpY2tldC5hY3R1YWxfZXN0aW1hdGVkX3NlcnZpY2VfZmlsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oaXRlbSwgeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogaXRlbS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogaXRlbS5maWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBcIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJWaWV3XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hY3R1YWxfZXN0aW1hdGVkX3NlcnZpY2VfZmlsZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5sZW5ndGggPiAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHggKyAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcImNsb3NldGlja2V0LnNlcnZpY2VfY29zdFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5maXJzdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xvc2V0aWNrZXQuc2VydmljZV9jb3N0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ucG9wX21hY2hpbmUuaXNfY29uc3VtdGlvbl9ocl9ydW5cbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtNlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJDdXJyZW50IFJ1biBob3VyIFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm1jbG9zZS5jdXJyZW50X3J1bl9ob3VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtY2xvc2UuY3VycmVudF9ydW5faG91clwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5fdmFsdWU6IF92bS5wb3BfbWFjaGluZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5sYXN0X21haW50ZW5hbmNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX3ZtLnBvcF9tYWNoaW5lLmxhc3RfbWFpbnRlbmFuY2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5ydW5faG91clxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLnBvcF9tYWNoaW5lLmxhc3RfaHJfcnVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ7XFxuICAgIHJlcXVpcmVkOiB0cnVlLFxcbiAgICBkZWNpbWFsOiAyLFxcbiAgICBtaW5fdmFsdWU6IHBvcF9tYWNoaW5lLmxhc3RfbWFpbnRlbmFuY2VzXFxuICAgICAgICA/IHBvcF9tYWNoaW5lLmxhc3RfbWFpbnRlbmFuY2VzLnJ1bl9ob3VyXFxuICAgICAgICA6IHBvcF9tYWNoaW5lLmxhc3RfaHJfcnVuLFxcbn1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpcy1pbnZhbGlkXCI6IF92bS52ZXJyb3JzLmhhcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xvc2V0aWNrZXQuY3VycmVudF9ydW5faG91clwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiY3VycmVudF9ydW5faG91clwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1hc1wiOiBcIkN1cnJlbnQgUnVuIGhvdXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybWNsb3NlLmN1cnJlbnRfcnVuX2hvdXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZvcm1jbG9zZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjdXJyZW50X3J1bl9ob3VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcImNsb3NldGlja2V0LmN1cnJlbnRfcnVuX2hvdXJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuZmlyc3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbG9zZXRpY2tldC5jdXJyZW50X3J1bl9ob3VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ucG9wX21hY2hpbmUuaXNfY29uc3VtdGlvbl9rbV9ydW5cbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtNlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCIgQ3VycmVudCBLTSBSdW4gXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybWNsb3NlLmN1cnJlbnRfa21fcnVuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtY2xvc2UuY3VycmVudF9rbV9ydW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbDogMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluX3ZhbHVlOiBfdm0ucG9wX21hY2hpbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubGFzdF9tYWludGVuYW5jZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF92bS5wb3BfbWFjaGluZS5sYXN0X21haW50ZW5hbmNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAua21fcnVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0ucG9wX21hY2hpbmUubGFzdF9rbV9ydW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIntcXG4gICAgcmVxdWlyZWQ6IHRydWUsXFxuICAgIGRlY2ltYWw6IDIsXFxuICAgIG1pbl92YWx1ZTogcG9wX21hY2hpbmUubGFzdF9tYWludGVuYW5jZXNcXG4gICAgICAgID8gcG9wX21hY2hpbmUubGFzdF9tYWludGVuYW5jZXMua21fcnVuXFxuICAgICAgICA6IHBvcF9tYWNoaW5lLmxhc3Rfa21fcnVuLFxcbn1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpcy1pbnZhbGlkXCI6IF92bS52ZXJyb3JzLmhhcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xvc2V0aWNrZXQuY3VycmVudF9rbV9ydW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImN1cnJlbnRfa21fcnVuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LWFzXCI6IFwiQ3VycmVudCBLTSBob3VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm1jbG9zZS5jdXJyZW50X2ttX3J1blxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybWNsb3NlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImN1cnJlbnRfa21fcnVuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcImNsb3NldGlja2V0LmN1cnJlbnRfa21fcnVuXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoZWxwLWJsb2NrIGludmFsaWQtZmVlZGJhY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmZpcnN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xvc2V0aWNrZXQuY3VycmVudF9rbV9ydW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3BfbWFjaGluZS5pc19wcm9kdWN0aW9uX2ZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC02XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIiBDdXJyZW50IFByb2R1Y3Rpb24gZmlnIFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm1jbG9zZS5jdXJyZW50X3Byb2R1Y3Rpb25fZmlnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb3JtY2xvc2UuY3VycmVudF9wcm9kdWN0aW9uX2ZpZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5fdmFsdWU6IF92bS5wb3BfbWFjaGluZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5sYXN0X21haW50ZW5hbmNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX3ZtLnBvcF9tYWNoaW5lLmxhc3RfbWFpbnRlbmFuY2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wcm9kdWN0aW9uX2ZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLnBvcF9tYWNoaW5lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wZXJpb2RpY19tYWludGVuYW5jZV9icmVha2Rvd25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIntcXG4gICAgcmVxdWlyZWQ6IHRydWUsXFxuICAgIGRlY2ltYWw6IDIsXFxuICAgIG1pbl92YWx1ZTogcG9wX21hY2hpbmUubGFzdF9tYWludGVuYW5jZXNcXG4gICAgICAgID8gcG9wX21hY2hpbmUubGFzdF9tYWludGVuYW5jZXMucHJvZHVjdGlvbl9maWdcXG4gICAgICAgIDogcG9wX21hY2hpbmUucGVyaW9kaWNfbWFpbnRlbmFuY2VfYnJlYWtkb3duLFxcbn1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpcy1pbnZhbGlkXCI6IF92bS52ZXJyb3JzLmhhcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xvc2V0aWNrZXQuY3VycmVudF9wcm9kdWN0aW9uX2ZpZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiY3VycmVudF9wcm9kdWN0aW9uX2ZpZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1hc1wiOiBcIkN1cnJlbnQgUHJvZHVjdGlvbiBmaWdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybWNsb3NlLmN1cnJlbnRfcHJvZHVjdGlvbl9maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZvcm1jbG9zZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjdXJyZW50X3Byb2R1Y3Rpb25fZmlnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbG9zZXRpY2tldC5jdXJyZW50X3Byb2R1Y3Rpb25fZmlnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuZmlyc3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbG9zZXRpY2tldC5jdXJyZW50X3Byb2R1Y3Rpb25fZmlnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybWNsb3NlLnRpY2tldF90eXBlID09IFwiQnJlYWtkb3duIE1haW50ZW5hbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtNlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJQcm9kdWN0aW9uIExvc3NcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtY2xvc2UucHJvZHVjdGlvbl9sb3NzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtY2xvc2UucHJvZHVjdGlvbl9sb3NzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzLWludmFsaWRcIjogX3ZtLnZlcnJvcnMuaGFzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbG9zZXRpY2tldC5wcm9kdWN0aW9uX2xvc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInByb2R1Y3Rpb25fbG9zc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1hc1wiOiBcIlByb2R1Y3Rpb24gTG9zc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5OiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtY2xvc2UucHJvZHVjdGlvbl9sb3NzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb3JtY2xvc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvZHVjdGlvbl9sb3NzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcImNsb3NldGlja2V0LnByb2R1Y3Rpb25fbG9zc1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5maXJzdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsb3NldGlja2V0LnByb2R1Y3Rpb25fbG9zc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmZvcm1jbG9zZS50aWNrZXRfdHlwZSA9PSBcIkJyZWFrZG93biBNYWludGVuYW5jZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTZcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiUHJvZHVjdGlvbiBsb3NzIGFtb3VudFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm1jbG9zZS5wcm9kdWN0aW9uX2xvc3NfYW1vdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb3JtY2xvc2UucHJvZHVjdGlvbl9sb3NzX2Ftb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpcy1pbnZhbGlkXCI6IF92bS52ZXJyb3JzLmhhcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xvc2V0aWNrZXQucHJvZHVjdGlvbl9sb3NzX2Ftb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicHJvZHVjdGlvbl9sb3NzX2Ftb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1hc1wiOiBcIkN1cnJlbnQgUHJvZHVjdGlvbiBmaWdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkb25seTogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybWNsb3NlLnByb2R1Y3Rpb25fbG9zc19hbW91bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZvcm1jbG9zZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcm9kdWN0aW9uX2xvc3NfYW1vdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbG9zZXRpY2tldC5wcm9kdWN0aW9uX2xvc3NfYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuZmlyc3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbG9zZXRpY2tldC5wcm9kdWN0aW9uX2xvc3NfYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC02XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJSb290IENhdXNlIEFuYWx5c2lzXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtY2xvc2UucmNhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm1jbG9zZS5yY2FcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzLWludmFsaWRcIjogX3ZtLnZlcnJvcnMuaGFzKFwiY2xvc2V0aWNrZXQucmNhXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb3dzOiBcIjFcIiwgbmFtZTogXCJyY2FcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybWNsb3NlLnJjYSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb3JtY2xvc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyY2FcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJjbG9zZXRpY2tldC5yY2FcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuZmlyc3QoXCJjbG9zZXRpY2tldC5yY2FcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1mb290ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zZWNvbmRhcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIsIFwiZGF0YS1kaXNtaXNzXCI6IFwibW9kYWxcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDbG9zZVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmNsb3NlX2J0blxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDbG9zZSBUaWNrZXRcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICA6IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvY2Vzc2luZ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICBdXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibW9kYWwgZmFkZVwiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGlkOiBcInZpZXdtb2RhbFwiLFxuICAgICAgICAgIHRhYmluZGV4OiBcIi0xXCIsXG4gICAgICAgICAgcm9sZTogXCJkaWFsb2dcIixcbiAgICAgICAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBcInZpZXdtb2RhbFwiLFxuICAgICAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWRpYWxvZyBtb2RhbC1sZ1wiLCBhdHRyczogeyByb2xlOiBcImRvY3VtZW50XCIgfSB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl9tKDIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0ucG9wX3RpY2tldFxuICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1ib2R5XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC00IGJzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJNYWNoaW5lIFNpdGVcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwic2l0ZV9uYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZHVjZTogZnVuY3Rpb24ob3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0uc2l0ZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkNob29zZSBTaXRlIC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucG9wX3RpY2tldC5zaXRlX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnBvcF90aWNrZXQsIFwic2l0ZV9pZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicG9wX3RpY2tldC5zaXRlX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC00IGJzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJNYWNoaW5lIENhdGVnb3J5XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkdWNlOiBmdW5jdGlvbihvcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5jYXRlZ29yaWVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJDaG9vc2UgQ2F0ZWdvcnkgLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wb3BfdGlja2V0LmNhdGVnb3J5X2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnBvcF90aWNrZXQsIFwiY2F0ZWdvcnlfaWRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBvcF90aWNrZXQuY2F0ZWdvcnlfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTQgYnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIk1hY2hpbmUgRGVzY3JpcHRpb25cIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWR1Y2U6IGZ1bmN0aW9uKG9wdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24uaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLnN1Yl9jYXRlZ29yaWVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJDaG9vc2UgZGVzY3JpcHRpb24gLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic3ViX2NhdGVnb3J5X2lkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBfdm0ucG9wX3RpY2tldC5pZCAhPSBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wb3BfdGlja2V0LnN1Yl9jYXRlZ29yeV9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN1Yl9jYXRlZ29yeV9pZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBvcF90aWNrZXQuc3ViX2NhdGVnb3J5X2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC00IGJzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljU3R5bGU6IHsgbWFyZ2luOiBcIjBcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgTWFjaGluZSA6IFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIkZhciBObyA6XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnBvcF90aWNrZXQubWFjaGluZS5mYXJfbm8pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIk1hY2hpbmUgTmFtZSA6XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnBvcF90aWNrZXQubWFjaGluZS5uYW1lKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCJNYWNoaW5lIENoYXNzaXMgTm8gOlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnBvcF90aWNrZXQubWFjaGluZS5jaGFzc2lzX25vKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCJNYWNoaW5lIFNsIE5vOlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnBvcF90aWNrZXQubWFjaGluZS5tYWNoaW5lX3NyX25vKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCJNYWNoaW5lIFJlZ24gTm8gOlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnBvcF90aWNrZXQubWFjaGluZS5yZWduX25vKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCJNYWNoaW5lIEVuZ2luZSBObyA6XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucG9wX3RpY2tldC5tYWNoaW5lLmVuZ2luZV9ubykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC00IGJzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXQubWFpbnRlbmFuY2VfcHJvdmlkZXIgPT0gXCJ2ZW5kb3JcIiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXQuc2VydmljZV90eXBlXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIG1iLTBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJTZXJ2aWNlIFR5cGVcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5wb3BfdGlja2V0LnNlcnZpY2VfdHlwZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXQuc2VydmljZV90eXBlID09IFwiRnJlZSBTZXJ2aWNlXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3BfdGlja2V0LmZyZWVfc2VydmljZV9ub1xuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCBtYi0wXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiRnJlZSBzZXJ2aWNlIG5vOlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnBvcF90aWNrZXQuZnJlZV9zZXJ2aWNlX25vKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3BfdGlja2V0Lm1hY2hpbmUuZnJlZV9zZXJ2aWNlX25vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ucG9wX3RpY2tldC50aWNrZXRfdHlwZVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCBtYi0wXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiVGlja2V0IFR5cGVcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5wb3BfdGlja2V0LnRpY2tldF90eXBlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ucG9wX3RpY2tldC5zdGF0dXNfZHVyaW5nX2NvbXBsYWludFxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCBtYi0wXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiU3RhdHVzIER1cmluZyBDb21wbGFpbjogXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3BfdGlja2V0LnN0YXR1c19kdXJpbmdfY29tcGxhaW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNTdHlsZTogeyBtYXJnaW46IFwiMFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIk1hY2hpbmUncyBQcm9ibGVtOiBcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucG9wX3RpY2tldC5wcm9ibGVtX2Rlc2NyaXB0aW9uKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTQgYnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgbWItMFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiTWFpbnRlbmFuY2UgUHJvdmlkZXJcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5wb3BfdGlja2V0Lm1haW50ZW5hbmNlX3Byb3ZpZGVyKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3BfdGlja2V0Lm1haW50ZW5hbmNlX3Byb3ZpZGVyID09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidXNlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJVc2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlZlbmRvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXQubWFpbnRlbmFuY2VfcHJvdmlkZXIgPT0gXCJ2ZW5kb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5wb3BfdGlja2V0LmFsbF92ZW5kb3JzLCBmdW5jdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlbmRvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcInZtXCIgKyBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb21tYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHZlbmRvci5uYW1lKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJjb21tYVwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWR1Y2U6IGZ1bmN0aW9uKG9wdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24uaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLnVzZXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJFbnRlciB1c2VycyAuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBvcF90aWNrZXQudXNlcl9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5wb3BfdGlja2V0LCBcInVzZXJfaWRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBvcF90aWNrZXQudXNlcl9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ucG9wX3RpY2tldC5zdGFnZXNcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC04IGJzXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljU3R5bGU6IHsgbWFyZ2luOiBcIjBweFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJTdGFnZXNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0ucG9wX3RpY2tldC5zdGFnZXMsIGZ1bmN0aW9uKGZpZWxkLCB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwic1wiICsgeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBhZGRpbmctYm90dG9tXCI6IFwiOHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtNFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoZmllbGQuc3RhZ2Vfbm8pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2YoXCJteURhdGVcIikoZmllbGQuc3RhZ2VfZGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtNVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoZmllbGQuZGVzY3JpcHRpb24pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtNCBic1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY1N0eWxlOiB7IG1hcmdpbjogXCIwXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJNYWNoaW5lJ3MgQWRkaXRpb25hbCBQcm9ibGVtOiBcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5wb3BfdGlja2V0LnByb2JsZW1zLCBmdW5jdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5wb3BfdGlja2V0LnByb2JsZW1zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJwYVwiICsgaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF92bS5fcyhpdGVtLnByb2JsZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTMgYnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNTdHlsZTogeyBtYXJnaW46IFwiMFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkVzdGltYXRlZCBNYXRlcmlhbCBjb3N0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fZihcInRvQ3VycmVuY3lcIikoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXQuZXN0aW1hdGVkX21hdGVyaWFsX2Nvc3QgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXQuYWRfZXN0aW1hdGVkX21hdGVyaWFsX2Nvc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3BfdGlja2V0LmVzdGltYXRlZF9tYXRlcmlhbF9jb3N0ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIitcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXQuYWRfZXN0aW1hdGVkX21hdGVyaWFsX2Nvc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXQuZXN0aW1hdGVkX21hdGVyaWFsX2ZpbGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oZmlsZSwgeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWxlLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzIG1yLTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IGZpbGUuZmlsZSwgdGFyZ2V0OiBcIl9ibGFua1wiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJWaWV3XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmVzdGltYXRlZF9tYXRlcmlhbF9maWxlcy5sZW5ndGggPiAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8geCArIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMyBic1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY1N0eWxlOiB7IG1hcmdpbjogXCIwXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiRXN0aW1hdGVkIFNlcnZpY2UgY29zdCA6IFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2YoXCJ0b0N1cnJlbmN5XCIpKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3BfdGlja2V0LmVzdGltYXRlZF9zZXJ2aWNlX2Nvc3QgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXQuYWRfZXN0aW1hdGVkX3NlcnZpY2VfY29zdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXQuZXN0aW1hdGVkX3NlcnZpY2VfY29zdCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIrXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3BfdGlja2V0LmFkX2VzdGltYXRlZF9zZXJ2aWNlX2Nvc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXQuZXN0aW1hdGVkX3NlcnZpY2VfZmlsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbihmaWxlLCB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGZpbGUuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXN1Y2Nlc3MgbXItMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogZmlsZS5maWxlLCB0YXJnZXQ6IFwiX2JsYW5rXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlZpZXdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucG9wX3RpY2tldC5lc3RpbWF0ZWRfc2VydmljZV9maWxlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubGVuZ3RoID4gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHggKyAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTMgYnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIkFjdHVhbCBNYXRlcmlhbCBDb3N0IDogXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3BfdGlja2V0LmFjdHVhbF9tYXRlcmlhbF9jb3N0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2YoXCJ0b0N1cnJlbmN5XCIpKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3BfdGlja2V0LmFjdHVhbF9tYXRlcmlhbF9jb3N0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucG9wX3RpY2tldC5hY3R1YWxfZXN0aW1hdGVkX21hdGVyaWFsX2ZpbGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oZmlsZSwgeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWxlLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzIG1yLTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IGZpbGUuZmlsZSwgdGFyZ2V0OiBcIl9ibGFua1wiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJWaWV3XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFjdHVhbF9lc3RpbWF0ZWRfbWF0ZXJpYWxfZmlsZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmxlbmd0aCA+IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB4ICsgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0zIGJzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJBY3R1YWwgU2VydmljZSBDb3N0IDogXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3BfdGlja2V0LmFjdHVhbF9zZXJ2aWNlX2Nvc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2YoXCJ0b0N1cnJlbmN5XCIpKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucG9wX3RpY2tldC5hY3R1YWxfc2VydmljZV9jb3N0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3BfdGlja2V0LmFjdHVhbF9lc3RpbWF0ZWRfc2VydmljZV9maWxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKGZpbGUsIHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZmlsZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2VzcyBtci0yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBmaWxlLmZpbGUsIHRhcmdldDogXCJfYmxhbmtcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVmlld1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3BfdGlja2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hY3R1YWxfZXN0aW1hdGVkX3NlcnZpY2VfZmlsZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmxlbmd0aCA+IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB4ICsgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC00IGJzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljU3R5bGU6IHsgbWFyZ2luOiBcIjBcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJUaWNrZXQgTm8gOiBcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucG9wX3RpY2tldC50aWNrZXRfbm8pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtNCBic1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY1N0eWxlOiB7IG1hcmdpbjogXCIwXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiTGlrZWx5IERhdGUgOiBcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9mKFwibXlEYXRlXCIpKF92bS5wb3BfdGlja2V0Lmxpa2VseV9kYXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTQgYnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNTdHlsZTogeyBtYXJnaW46IFwiMFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkFjdHVhbCBEYXRlIDogXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fZihcIm15RGF0ZVwiKShfdm0ucG9wX3RpY2tldC5hY3R1YWxfZGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ucG9wX3RpY2tldC5jdXJyZW50X3J1bl9ob3VyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTQgYnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiQ3VycmVudCBSdW4gSG91ciA6IFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnBvcF90aWNrZXQuY3VycmVudF9ydW5faG91cikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXQuY3VycmVudF9rbV9ydW5cbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtNCBic1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJDdXJyZW50IEtNIEhvdXIgOiBcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5wb3BfdGlja2V0LmN1cnJlbnRfa21fcnVuKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ucG9wX3RpY2tldC5jdXJyZW50X3Byb2R1Y3Rpb25fZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTQgYnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkN1cnJlbnQgUHJvZHVjdGlvbiBGaWcgOiBcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucG9wX3RpY2tldC5jdXJyZW50X3Byb2R1Y3Rpb25fZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ucG9wX3RpY2tldC5wcm9kdWN0aW9uX2xvc3NcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtNCBic1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJQcm9kdWN0aW9uIExvc3MgOiBcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5wb3BfdGlja2V0LnByb2R1Y3Rpb25fbG9zcykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXQucHJvZHVjdGlvbl9sb3NzX2Ftb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC00IGJzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJQcm9kdWN0aW9uIExvc3MgQW1vdW50IDogXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9mKFwidG9DdXJyZW5jeVwiKShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXQucHJvZHVjdGlvbl9sb3NzX2Ftb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICBdXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJ0aGVhZFwiLCBbXG4gICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiVGlja2V0IE5vXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlRpY2tldCBUeXBlXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIk1hY2hpbmUgTmFtZVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJNYWNoaW5lJ3MgUHJvYmxlbVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJBZGRpdGlvbmFsIFByb2JsZW1zXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIk1hY2hpbmUgRmFyIE5vICYgRGV0YWlsc1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJTaXRlXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkNvbXBsYWludCBOYXR1cmVcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiQ3JlYXRlZCBCeVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJDcmVhdGVkIERhdGVcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiRXhwZWN0ZWQgZGF0ZVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJSZXZpc2VkIFwiKSwgX2MoXCJiclwiKSwgX3ZtLl92KFwiIEV4cGVjdGVkIGRhdGVcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiVGlja2V0IFN0YXR1c1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJBY3Rpb25cIildKVxuICAgICAgXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWhlYWRlclwiIH0sIFtcbiAgICAgIF9jKFwiaDVcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC10aXRsZVwiIH0sIFtfdm0uX3YoXCJDbG9zZSBUaWNrZXRcIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNsb3NlXCIsXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICBcImRhdGEtZGlzbWlzc1wiOiBcIm1vZGFsXCIsXG4gICAgICAgICAgICBcImFyaWEtbGFiZWxcIjogXCJDbG9zZVwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbX2MoXCJzcGFuXCIsIHsgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9IH0sIFtfdm0uX3YoXCLDl1wiKV0pXVxuICAgICAgKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtaGVhZGVyXCIgfSwgW1xuICAgICAgX2MoXCJoNVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLXRpdGxlXCIgfSwgW192bS5fdihcIlZpZXcgVGlja2V0XCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJjbG9zZVwiLFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgXCJkYXRhLWRpc21pc3NcIjogXCJtb2RhbFwiLFxuICAgICAgICAgICAgXCJhcmlhLWxhYmVsXCI6IFwiQ2xvc2VcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW19jKFwic3BhblwiLCB7IGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSB9LCBbX3ZtLl92KFwiw5dcIildKV1cbiAgICAgIClcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMDM0MWNkZDZcIiwgeyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfSlcbiAgfVxufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI3NTY2OTQ4ZlwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9pbmRleC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9pbmRleC52dWVcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChjb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiKVxufVxuLyogc2NyaXB0ICovXG5leHBvcnQgKiBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9pbmRleC52dWVcIlxuaW1wb3J0IF9fdnVlX3NjcmlwdF9fIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiXG4vKiB0ZW1wbGF0ZSAqL1xuaW1wb3J0IHtyZW5kZXIgYXMgX192dWVfcmVuZGVyX18sIHN0YXRpY1JlbmRlckZucyBhcyBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19ffSBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0wMzQxY2RkNlxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9pbmRleC52dWVcIlxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbmltcG9ydCBub3JtYWxpemVDb21wb25lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnQtbm9ybWFsaXplclwiXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfcmVuZGVyX18sXG4gIF9fdnVlX3N0YXRpY19yZW5kZXJfZm5zX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXNcXFxcanNcXFxcY29tcG9uZW50c1xcXFxUaWNrZXRzXFxcXGluZGV4LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0wMzQxY2RkNlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTAzNDFjZGQ2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcbiJdLCJzb3VyY2VSb290IjoiIn0=