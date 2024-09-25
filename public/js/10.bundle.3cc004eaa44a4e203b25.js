(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        rca: "",
        materialPOS: "",
        servicePOS: ""
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
    toggleExpand(data, index) {
      const itemIndex = data.indexOf(index);
      if (itemIndex === -1) {
        data.push(index);
      } else {
        data.splice(itemIndex, 1);
      }
    },
    isExpanded(index) {
      return data.includes(index);
    },
    getTruncatedText(text, length = 50) {
      return text.length > length ? text.substring(0, length) + '...' : text;
    },
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
      // if (this.$gate.isAdmin()) {
      this.$refs.fileservice.value = null;
      this.$refs.filematerial.value = null;
      // }
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
      // if (this.$gate.isAdmin()) {
      this.$refs.fileservice.value = null;
      this.$refs.filematerial.value = null;
      // }
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
exports.push([module.i, "\n.bs {\n    border: 1px solid #d2d1d1a8;\n    border-radius: 5px;\n}\n.comma~.comma:not(:empty):before {\n    content: \", \";\n}\n.rmore {\n    color: blue;\n}\n", "", {"version":3,"sources":["F:/wamp64/www/rmm/resources/js/components/Tickets/resources/js/components/Tickets/index.vue"],"names":[],"mappings":";AAo6CA;IACA,4BAAA;IACA,mBAAA;CACA;AAEA;IACA,cAAA;CACA;AAEA;IACA,YAAA;CACA","file":"index.vue","sourcesContent":["<template>\n    <section class=\"content\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <div class=\"card\">\n                        <div class=\"card-header\">\n                            <h3 class=\"card-title\">Ticket List</h3>\n                            <div class=\"card-tools\">\n                                <router-link to=\"/ticket/add\" class=\"btn btn-sm btn-primary\" @click=\"newModal\">\n                                    <i class=\"fa fa-plus-square\"></i>\n                                    Add New\n                                </router-link>\n                            </div>\n                        </div>\n\n                        <div class=\"card-body p-2\">\n                            <form autocomplete=\"off\" @submit.prevent=\"getResults()\" data-vv-scope=\"searchfr\">\n                                <div class=\"form-row\">\n                                    <div class=\"col\">\n                                        <v-select label=\"name\" :get-option-label=\"getLabel\" :reduce=\"(option) => option.id\"\n                                            :options=\"search_machines\" placeholder=\"Enter machines ...\"\n                                            v-model=\"search.machine_id\" name=\"machine_id\">\n                                        </v-select>\n                                    </div>\n                                    <div class=\"col\">\n                                        <input type=\"text\" placeholder=\"Enter ticket ...\" v-model=\"search.ticket\"\n                                            name=\"ticket\" class=\"form-control\" />\n                                    </div>\n                                    <div class=\"col\">\n                                        <v-select label=\"site_name\" :reduce=\"(option) => option.id\" :options=\"search_sites\"\n                                            placeholder=\"Select Site...\" v-model=\"search.site_id\" name=\"site_id\">\n                                        </v-select>\n                                    </div>\n                                    <div class=\"col\">\n                                        <v-select label=\"site_name\" :options=\"['Open', 'Closed']\"\n                                            placeholder=\"Select Status...\" v-model=\"search.status\" name=\"status\">\n                                        </v-select>\n                                    </div>\n                                    <div class=\"col\">\n                                        <v-select label=\"site_name\" :options=\"['Major', 'Minor']\"\n                                            placeholder=\"Select Complaint Nature...\" v-model=\"search.complaint_nature\"\n                                            name=\"complaint_nature\">\n                                        </v-select>\n                                    </div>\n                                    <div class=\"col\">\n                                        <v-select label=\"site_name\" :options=\"['Breakdown Maintenance', 'Periodic Maintenance']\"\n                                            placeholder=\"Select Ticket Type...\" v-model=\"search.ticket_type\"\n                                            name=\"ticket_type\">\n                                        </v-select>\n                                    </div>\n\n                                    <button type=\"submit\" class=\"btn btn-success\">Search</button>\n                                    <button type=\"button\" class=\"btn btn-info ml-2\" @click=\"reset_filter()\">Reset</button>\n                                    <download-excel class=\"btn btn-warning ml-2\" :fetch=\"export_csv\" :fields=\"json_fields\"\n                                        :before-generate=\"startDownload\" :before-finish=\"finishDownload\"\n                                        worksheet=\"My Worksheet\" type=\"csv\" name=\"ticket_list.csv\">\n                                        <span class=\"labelText\">\n                                            <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>\n                                            Export as CSV</span>\n                                    </download-excel>\n                                </div>\n                            </form>\n                        </div>\n\n\n                        <!-- /.card-header -->\n                        <div class=\"card-body ticketLstTbl table-responsive p-0\">\n                            <table class=\"table table-hover\">\n                                <thead>\n                                    <tr>\n                                        <th>Ticket No</th>\n                                        <th>Ticket Type</th>\n                                        <th>FAR No</th>\n                                        <th>Machine Name</th>\n                                        <th>Machine Model</th>\n                                        <th>Machine SR No</th>\n                                        <th>Machine's Problem</th>\n                                        <th>Additional Problems</th>\n                                        <th>Site</th>\n                                        <th>Complaint Nature</th>\n                                        <th>Created By</th>\n                                        <th>Created Date</th>\n                                        <th>Expected date</th>\n                                        <th>Revised <br> Expected date</th>\n                                        <th>Ticket Status</th>\n                                        <th>Action</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr v-for=\"(ticket, index) in Tickets.data\" :key=\"ticket.id\">\n                                        <td>{{ ticket.ticket_no }}</td>\n                                        <td>{{ ticket.ticket_type }}</td>\n                                        <td>{{ ticket.machine.far_no }}</td>\n                                        <td>{{ ticket.machine.name }}</td>\n                                        <td>{{ (ticket.machine.machine_model? ticket.machine.machine_model.name: \"-\")  }}</td>\n                                        <td>{{ ticket.machine.machine_sr_no }}</td>\n                                        <td>\n                                            <div v-if=\"isExpanded(index)\">\n                                                {{  ticket.problem_description  }}\n                                                <a href=\"#\" @click.prevent=\"toggleExpand(tiTickets.datacket, index)\">Less</a>\n                                            </div>\n                                            <div v-else class=\"truncate\">\n                                                {{ getTruncatedText( ticket.problem_description ) }}\n                                                <a href=\"#\" @click.prevent=\"toggleExpand(Tickets.data, index)\">More</a>\n                                            </div>\n\n\n                                            <!-- <div class=\"truncate\" :title=\"ticket.problem_description\">\n                                                <template v-if=\"ticket.problem_description\">\n                                                    <p>{{ ticket.problem_description }}</p>\n                                                </template>\n                                            </div> -->\n                                        </td>\n                                        <td>\n                                            <template v-if=\"ticket.problems && ticket.problems.length > 0\">\n                                                <VueReadMoreSmooth :open.sync=\"additionalMore[x]\" no-button no-shadow>\n                                                    <p v-if=\"ticket.problems\" v-for=\"(item, index) in ticket.problems\"\n                                                        :key=\"'p' + index\" v-html=\"item.problem\"></p>\n                                                </VueReadMoreSmooth>\n                                                <span @click=\"sclick(x)\" class=\"rmore\">...{{ additionalMore[x] ? \"Less\" :\n                                                    \"More\" }}</span>\n                                            </template>\n                                        </td>\n                                        <td>{{ ticket.site ? ticket.site.site_name : \"-\" }}</td>\n                                        <td>{{ ticket.complaint_nature }}</td>\n                                        <td>{{ ticket.created_by_name }}</td>\n                                        <td>{{ ticket.created_at | myDate }}</td>\n                                        <td>{{ ticket.likely_date | myDate }}</td>\n                                        <td>{{ ticket.reversion_date | myDate }}</td>\n                                        <td>\n                                            {{\n                                                ticket.status.toLowerCase() == \"created by user\"\n                                                ? \"Open\"\n                                                : ticket.status\n                                            }}\n                                        </td>\n                                        <td>\n                                            <a href=\"javascript:void(0);\" class=\"btn btn-warning btn-sm\"\n                                                @click=\"viewModal(ticket)\">\n                                                View\n                                            </a>\n                                            <router-link :to=\"'/ticket/edit/' + ticket.id\" class=\"btn btn-success btn-sm\"\n                                                v-if=\"ticket.status != 'Closed'\">Edit</router-link>\n                                            <a href=\"javascript:void(0);\" class=\"btn btn-danger btn-sm\"\n                                                @click=\"closeModal(ticket)\" title=\"Close ticket\"\n                                                v-if=\"ticket.status != 'Closed'\">\n                                                Close\n                                            </a>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                        <!-- /.card-body -->\n                        <div class=\"card-footer\">\n                            <pagination :data=\"Tickets\" :limit=\"10\" @pagination-change-page=\"getResults\"></pagination>\n                        </div>\n                    </div>\n                    <!-- /.card -->\n                </div>\n            </div>\n        </div>\n\n        <!-- Close Modal -->\n        <div class=\"modal fade\" id=\"closemodal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"closemodal\" aria-hidden=\"true\">\n            <div class=\"modal-dialog modal-lg\" role=\"document\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title\">Close Ticket</h5>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                    </div>\n\n                    <form @submit.prevent=\"submitCloseTicket()\" data-vv-scope=\"closeticket\">\n                        <div class=\"modal-body\">\n                            <div class=\"row\" v-if=\"pop_machine\">\n                                <div class=\"col-sm\">\n                                    <p>\n                                        <strong>Far No :</strong> {{ pop_machine.far_no }}\n                                        <br />\n                                        <strong>Machine Name :</strong> {{ pop_machine.name }}\n                                        <br />\n                                        <strong>Machine Model :</strong>\n                                        {{\n                                            pop_machine.machine_model\n                                            ? pop_machine.machine_model.name\n                                            : \"-\"\n                                        }}\n                                        <br />\n                                        <strong>Machine Chassis No :</strong>\n                                        {{ pop_machine.chassis_no }}\n                                    </p>\n                                </div>\n                                <div class=\"col-sm\">\n                                    <p>\n                                        <strong>Machine Sl No:</strong>\n                                        {{ pop_machine.machine_sr_no }}\n                                        <br />\n                                        <strong>Machine Regn No :</strong> {{ pop_machine.regn_no }}\n                                        <br />\n                                        <strong>Machine Engine No :</strong>\n                                        {{ pop_machine.engine_no }}\n                                        <br>\n                                        <strong>Ticket No :</strong> {{ pop_ticket ? pop_ticket.ticket_no : '-' }}\n                                    </p>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                {{ verrors.closeticket }}\n                                <div class=\"col-6\" v-if=\"pop_ticket && pop_ticket.likely_date\">\n                                    <div class=\"form-group\">\n                                        <label>Actual Date</label>\n                                        <datetime value-zone=\"Asia/Kolkata\" v-model=\"formclose.actual_date\"\n                                            name=\"actual_date\" input-class=\"form-control\" :class=\"{\n                                                'is-invalid': verrors.has('closeticket.actual_date'),\n                                            }\" v-validate=\"'required'\" data-vv-as=\"Actual Date\" :min-datetime=\"new Date(pop_ticket.created_at).toISOString()\n    \" :max-datetime=\"new Date().toISOString()\" />\n                                        <div v-if=\"verrors.has('closeticket.actual_date')\"\n                                            class=\"help-block invalid-feedback\">\n                                            {{ verrors.first(\"closeticket.actual_date\") }}\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-6\">\n                                    <div class=\"form-group\">\n                                        <label>Machine Status</label>\n                                        <select v-model=\"formclose.machine_status\" name=\"machine_status\"\n                                            class=\"form-control\" :class=\"{\n                                                'is-invalid': verrors.has('closeticket.machine_status'),\n                                            }\" v-validate=\"'required'\" data-vv-as=\"machine status\">\n                                            <option value=\"Running\">Running</option>\n                                            <option value=\"Running with Problem\">\n                                                Running with Problem\n                                            </option>\n                                            <option value=\"Non Repairable\">Non Repairable</option>\n                                        </select>\n                                        <div v-if=\"verrors.has('closeticket.machine_status')\"\n                                            class=\"help-block invalid-feedback\">\n                                            {{ verrors.first(\"closeticket.machine_status\") }}\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"col-2\">\n                                    <div class=\"form-group\">\n                                        <label>Estimated Material cost</label>\n                                        <input type=\"text\" class=\"form-control\" readonly :value=\"pop_ticket.estimated_material_cost +\n                                            pop_ticket.ad_estimated_material_cost +\n                                            '(' +\n                                            pop_ticket.estimated_material_cost +\n                                            '+' +\n                                            pop_ticket.ad_estimated_material_cost +\n                                            ')'\n                                            \" />\n                                    </div>\n                                </div>\n                                <div class=\"col-2\">\n                                    <div class=\"form-group\">\n                                        <label>Actual Material cost</label>\n                                        <input v-model=\"formclose.actual_material_cost\" type=\"text\"\n                                            name=\"actual_material_cost\" v-validate=\"'required'\"\n                                            data-vv-as=\"Actual Material cost\" class=\"form-control\" :class=\"{\n                                                'is-invalid': verrors.has(\n                                                    'closeticket.actual_material_cost'\n                                                ),\n                                            }\" :readonly=\"formclose.machine_status == 'Non Repairable'\" />\n                                        <div v-if=\"verrors.has('closeticket.actual_material_cost')\"\n                                            class=\"help-block invalid-feedback\">\n                                            {{ verrors.first(\"closeticket.actual_material_cost\") }}\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-2\">\n                                    <div class=\"form-group\">\n                                        <label> Actual Material cost File</label>\n                                        <input type=\"file\" @change=\"uploadMaterialCost\" multiple name=\"material_cost\"\n                                            ref=\"fileactualmaterial\" class=\"form-control\" :class=\"{\n                                                'is-invalid': verrors.has('closeticket.material_cost'),\n                                            }\" v-validate=\"''\" data-vv-as=\"Actual Material cost\" />\n\n                                        <div class=\"clearfix\" v-if=\"pop_ticket.actual_estimated_material_files\">\n                                            <a v-for=\"(\n                          item, x\n                        ) in pop_ticket.actual_estimated_material_files\" :key=\"item.id\" :href=\"item.file\"\n                                                target=\"_blank\">View\n                                                {{\n                                                    pop_ticket.actual_estimated_material_files.length > 1\n                                                    ? x + 1\n                                                    : \"\"\n                                                }}</a>\n                                        </div>\n\n                                        <div v-if=\"verrors.has('closeticket.material_cost')\"\n                                            class=\"help-block invalid-feedback\">\n                                            {{ verrors.first(\"closeticket.material_cost\") }}\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-6\">\n                                    <div class=\"form-group\">\n                                        <label>Material Cost POs</label>\n                                        <v-select\n                                            v-model=\"formclose.materialPOS\"\n                                            label=\"Enter PO numbers\"\n                                            taggable \n                                            multiple\n                                            ></v-select>\n                                    </div>\n                                </div>\n\n                                <div class=\"col-2\">\n                                    <div class=\"form-group\">\n                                        <label>Estimated Service cost</label>\n                                        <input :value=\"pop_ticket.estimated_service_cost +\n                                            pop_ticket.ad_estimated_service_cost +\n                                            '(' +\n                                            pop_ticket.estimated_service_cost +\n                                            '+' +\n                                            pop_ticket.ad_estimated_service_cost +\n                                            ')'\n                                            \" type=\"text\" class=\"form-control\" readonly />\n                                    </div>\n                                </div>\n                                <div class=\"col-2\">\n                                    <div class=\"form-group\">\n                                        <label>Actual Service cost</label>\n                                        <input v-model=\"formclose.actual_service_cost\" type=\"text\"\n                                            name=\"actual_service_cost\" v-validate=\"'required'\"\n                                            data-vv-as=\"Actual Service cost\" class=\"form-control\" :class=\"{\n                                                'is-invalid': verrors.has(\n                                                    'closeticket.actual_service_cost'\n                                                ),\n                                            }\" :readonly=\"formclose.machine_status == 'Non Repairable'\" />\n                                        <div v-if=\"verrors.has('closeticket.actual_service_cost')\"\n                                            class=\"help-block invalid-feedback\">\n                                            {{ verrors.first(\"closeticket.actual_service_cost\") }}\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-2\">\n                                    <div class=\"form-group\">\n                                        <label> Actual Service cost File </label>\n                                        <input type=\"file\" @change=\"uploadServiceCost\" multiple name=\"service_cost\"\n                                            ref=\"fileactualservice\" class=\"form-control\" :class=\"{\n                                                'is-invalid': verrors.has('closeticket.service_cost'),\n                                            }\" v-validate=\"''\" data-vv-as=\"Actual Service cost\" />\n\n                                        <div class=\"clearfix\" v-if=\"pop_ticket.actual_estimated_service_files\">\n                                            <a v-for=\"(\n                                                    item, x\n                                                    ) in pop_ticket.actual_estimated_service_files\" :key=\"item.id\" :href=\"item.file\"\n                                                target=\"_blank\">View\n                                                {{\n                                                    pop_ticket.actual_estimated_service_files.length > 1\n                                                    ? x + 1\n                                                    : \"\"\n                                                }}</a>\n                                        </div>\n\n                                        <div v-if=\"verrors.has('closeticket.service_cost')\"\n                                            class=\"help-block invalid-feedback\">\n                                            {{ verrors.first(\"closeticket.service_cost\") }}\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-6\">\n                                    <div class=\"form-group\">\n                                        <label>Service Cost POs</label>\n                                        <v-select\n                                            v-model=\"formclose.servicePOS\"\n                                            label=\"Enter PO numbers\"\n                                            taggable \n                                            multiple\n                                            ></v-select>\n                                    </div>\n                                </div>\n\n                                <div class=\"col-6\" v-if=\"pop_machine.is_consumtion_hr_run\">\n                                    <div class=\"form-group\">\n                                        <label>Current Run hour </label>\n                                        <input v-model=\"formclose.current_run_hour\" name=\"current_run_hour\"\n                                            class=\"form-control\" :class=\"{\n                                                'is-invalid': verrors.has(\n                                                    'closeticket.current_run_hour'\n                                                ),\n                                            }\" v-validate=\"{\n                                                required: true,\n                                                decimal: 2,\n                                                min_value: pop_machine.last_maintenances\n                                                    ? pop_machine.last_maintenances.run_hour\n                                                    : pop_machine.last_hr_run,\n                                            }\" data-vv-as=\"Current Run hour\" />\n                                        <div v-if=\"verrors.has('closeticket.current_run_hour')\"\n                                            class=\"help-block invalid-feedback\">\n                                            {{ verrors.first(\"closeticket.current_run_hour\") }}\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-6\" v-if=\"pop_machine.is_consumtion_km_run\">\n                                    <div class=\"form-group\">\n                                        <label> Current KM Run </label>\n                                        <input v-model=\"formclose.current_km_run\" name=\"current_km_run\" class=\"form-control\"\n                                            :class=\"{\n                                                'is-invalid': verrors.has('closeticket.current_km_run'),\n                                            }\" v-validate=\"{\n                                                required: true,\n                                                decimal: 2,\n                                                min_value: pop_machine.last_maintenances\n                                                    ? pop_machine.last_maintenances.km_run\n                                                    : pop_machine.last_km_run,\n                                            }\" data-vv-as=\"Current KM hour\" />\n                                        <div v-if=\"verrors.has('closeticket.current_km_run')\"\n                                            class=\"help-block invalid-feedback\">\n                                            {{ verrors.first(\"closeticket.current_km_run\") }}\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-6\" v-if=\"pop_machine.is_production_fig\">\n                                    <div class=\"form-group\">\n                                        <label> Current Production fig </label>\n                                        <input v-model=\"formclose.current_production_fig\" name=\"current_production_fig\"\n                                            class=\"form-control\" :class=\"{\n                                                'is-invalid': verrors.has(\n                                                    'closeticket.current_production_fig'\n                                                ),\n                                            }\" v-validate=\"{\n                                                required: true,\n                                                decimal: 2,\n                                                min_value: pop_machine.last_maintenances\n                                                    ? pop_machine.last_maintenances.production_fig\n                                                    : pop_machine.periodic_maintenance_breakdown,\n                                            }\" data-vv-as=\"Current Production fig\" />\n                                        <div v-if=\"verrors.has('closeticket.current_production_fig')\"\n                                            class=\"help-block invalid-feedback\">\n                                            {{ verrors.first(\"closeticket.current_production_fig\") }}\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"col-6\" v-if=\"formclose.ticket_type == 'Breakdown Maintenance'\">\n                                    <div class=\"form-group\">\n                                        <label>Production Loss</label>\n                                        <input v-model=\"formclose.production_loss\" name=\"production_loss\"\n                                            class=\"form-control\" :class=\"{\n                                                'is-invalid': verrors.has(\n                                                    'closeticket.production_loss'\n                                                ),\n                                            }\" v-validate=\"'required'\" data-vv-as=\"Production Loss\"  readonly/>\n                                        <div v-if=\"verrors.has('closeticket.production_loss')\"\n                                            class=\"help-block invalid-feedback\">\n                                            {{ verrors.first(\"closeticket.production_loss\") }}\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-6\" v-if=\"formclose.ticket_type == 'Breakdown Maintenance'\">\n                                    <div class=\"form-group\">\n                                        <label>Production loss amount</label>\n                                        <input v-model=\"formclose.production_loss_amount\" name=\"production_loss_amount\"\n                                            class=\"form-control\" :class=\"{\n                                                'is-invalid': verrors.has(\n                                                    'closeticket.production_loss_amount'\n                                                ),\n                                            }\" v-validate=\"'required'\" data-vv-as=\"Current Production fig\" readonly/>\n                                        <div v-if=\"verrors.has('closeticket.production_loss_amount')\"\n                                            class=\"help-block invalid-feedback\">\n                                            {{ verrors.first(\"closeticket.production_loss_amount\") }}\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"col-6\">\n                                    <div class=\"form-group\">\n                                        <label>Root Cause Analysis</label>\n                                        <textarea rows=\"1\" v-model=\"formclose.rca\" name=\"rca\" class=\"form-control\" :class=\"{\n                                            'is-invalid': verrors.has('closeticket.rca'),\n                                        }\" v-validate=\"'required'\"></textarea>\n                                        <div v-if=\"verrors.has('closeticket.rca')\" class=\"help-block invalid-feedback\">\n                                            {{ verrors.first(\"closeticket.rca\") }}\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"modal-footer\">\n                            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">\n                                Close\n                            </button>\n                            <button type=\"submit\" class=\"btn btn-primary\" v-if=\"close_btn\">\n                                Close Ticket\n                            </button>\n                            <button type=\"button\" class=\"btn btn-primary\" v-else>\n                                Processing\n                            </button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n        <!--View Modal-->\n        <div class=\"modal fade\" id=\"viewmodal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"viewmodal\" aria-hidden=\"true\">\n            <div class=\"modal-dialog modal-lg\" role=\"document\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title\">View Ticket</h5>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                    </div>\n                    <div class=\"modal-body\" v-if=\"pop_ticket\">\n                        <div class=\"row\">\n                            <div class=\"col-4 bs\">\n                                <div class=\"form-group\">\n                                    <label>Machine Site</label>\n                                    <v-select label=\"site_name\" :reduce=\"(option) => option.id\" :options=\"sites\"\n                                        placeholder=\"Choose Site ...\" v-model=\"pop_ticket.site_id\" disabled>\n                                    </v-select>\n                                </div>\n                            </div>\n                            <div class=\"col-4 bs\">\n                                <div class=\"form-group\">\n                                    <label>Machine Category</label>\n                                    <v-select label=\"name\" :reduce=\"(option) => option.id\" :options=\"categories\"\n                                        placeholder=\"Choose Category ...\" v-model=\"pop_ticket.category_id\" disabled>\n                                    </v-select>\n                                </div>\n                            </div>\n                            <div class=\"col-4 bs\">\n                                <div class=\"form-group\">\n                                    <label>Machine Description</label>\n                                    <v-select label=\"name\" :reduce=\"(option) => option.id\" :options=\"sub_categories\"\n                                        placeholder=\"Choose description ...\" v-model=\"pop_ticket.sub_category_id\"\n                                        name=\"sub_category_id\" :disabled=\"pop_ticket.id != ''\">\n                                    </v-select>\n                                </div>\n                            </div>\n                            <div class=\"col-4 bs\">\n                                <div class=\"form-group\">\n                                    <label style=\"margin: 0\"> Machine : </label>\n                                    <strong>Far No :</strong> {{ pop_ticket.machine.far_no }}\n                                    <br />\n                                    <strong>Machine Name :</strong> {{ pop_ticket.machine.name }}\n                                    <br />\n                                    <strong>Machine Chassis No :</strong>\n                                    {{ pop_ticket.machine.chassis_no }}\n                                    <br />\n                                    <strong>Machine Sl No:</strong>\n                                    {{ pop_ticket.machine.machine_sr_no }}\n                                    <br />\n                                    <strong>Machine Regn No :</strong>\n                                    {{ pop_ticket.machine.regn_no }}\n                                    <br />\n                                    <strong>Machine Engine No :</strong>\n                                    {{ pop_ticket.machine.engine_no }}\n                                </div>\n                            </div>\n\n                            <div class=\"col-4 bs\">\n                                <div class=\"form-group mb-0\" v-if=\"pop_ticket.maintenance_provider == 'vendor' &&\n                                    pop_ticket.service_type\n                                    \">\n                                    <label>Service Type</label>\n                                    {{ pop_ticket.service_type }}\n                                </div>\n\n                                <div class=\"form-group mb-0\" v-if=\"pop_ticket.service_type == 'Free Service' &&\n                                    pop_ticket.free_service_no\n                                    \">\n                                    <label>Free service no:</label>\n                                    {{ pop_ticket.free_service_no }}/{{\n                                        pop_ticket.machine.free_service_no\n                                    }}\n                                </div>\n\n                                <div class=\"form-group mb-0\" v-if=\"pop_ticket.ticket_type\">\n                                    <label>Ticket Type</label>\n                                    {{ pop_ticket.ticket_type }}\n                                </div>\n                                <div class=\"form-group mb-0\" v-if=\"pop_ticket.status_during_complaint\">\n                                    <label>Status During Complain: </label>\n                                    {{ pop_ticket.status_during_complaint }}\n                                </div>\n\n                                <div class=\"form-group\">\n                                    <label style=\"margin: 0\">Machine's Problem: </label>\n                                    {{ pop_ticket.problem_description }}\n                                </div>\n                            </div>\n\n                            <div class=\"col-4 bs\">\n                                <div class=\"form-group mb-0\">\n                                    <label>Maintenance Provider</label>\n                                    {{ pop_ticket.maintenance_provider }}\n                                </div>\n\n                                <div class=\"form-group\">\n                                    <label>\n                                        {{\n                                            pop_ticket.maintenance_provider == \"user\"\n                                            ? \"User\"\n                                            : \"Vendor\"\n                                        }}\n                                    </label>\n                                    <template v-if=\"pop_ticket.maintenance_provider == 'vendor'\">\n                                        :\n                                        <span v-for=\"(vendor, index) in pop_ticket.all_vendors\" :key=\"'vm' + index\"\n                                            class=\"comma\">{{ vendor.name }}</span>\n                                        <span class=\"comma\"></span>\n                                    </template>\n                                    <template v-else>\n                                        <v-select label=\"name\" :reduce=\"(option) => option.id\" :options=\"users\"\n                                            placeholder=\"Enter users ...\" v-model=\"pop_ticket.user_id\" disabled>\n                                        </v-select>\n                                    </template>\n                                </div>\n                            </div>\n\n                            <div class=\"col-8 bs\" v-if=\"pop_ticket.stages\">\n                                <label style=\"margin: 0px\">Stages</label>\n                                <template v-for=\"(field, x) in pop_ticket.stages\">\n                                    <div class=\"row\" :key=\"'s' + x\" style=\"border: 0; padding-bottom: 8px\">\n                                        <div class=\"col-4\">\n                                            {{ field.stage_no }}\n                                        </div>\n                                        <div class=\"col-2\">\n                                            {{ field.stage_date | myDate }}\n                                        </div>\n                                        <div class=\"col-5\">\n                                            {{ field.description }}\n                                        </div>\n                                    </div>\n                                </template>\n                            </div>\n\n                            <div class=\"col-4 bs\">\n                                <div class=\"form-group\">\n                                    <label style=\"margin: 0\">Machine's Additional Problem: </label><br />\n                                    <p v-if=\"pop_ticket.problems\" v-for=\"(item, index) in pop_ticket.problems\"\n                                        :key=\"'pa' + index\" v-html=\"item.problem\"></p>\n                                </div>\n                            </div>\n\n                            <div class=\"col-3 bs\">\n                                <div class=\"form-group\">\n                                    <label style=\"margin: 0\">Estimated Material cost:</label><br />\n                                    {{\n                                        (pop_ticket.estimated_material_cost +\n                                            pop_ticket.ad_estimated_material_cost)\n                                        | toCurrency\n                                    }}\n                                    ({{\n                                        pop_ticket.estimated_material_cost +\n                                        \"+\" +\n                                        pop_ticket.ad_estimated_material_cost\n                                    }})\n                                    <p>\n                                        <a class=\"btn btn-success mr-2\" :href=\"file.file\"\n                                            v-for=\"(file, x) in pop_ticket.estimated_material_files\" :key=\"file.id\"\n                                            target=\"_blank\">View\n                                            {{\n                                                pop_ticket.estimated_material_files.length > 1\n                                                ? x + 1\n                                                : \"\"\n                                            }}</a>\n                                    </p>\n                                </div>\n                            </div>\n                            <div class=\"col-3 bs\">\n                                <div class=\"form-group\">\n                                    <label style=\"margin: 0\">Estimated Service cost: </label><br />\n                                    {{\n                                        (pop_ticket.estimated_service_cost +\n                                            pop_ticket.ad_estimated_service_cost)\n                                        | toCurrency\n                                    }}\n                                    ({{\n                                        pop_ticket.estimated_service_cost +\n                                        \"+\" +\n                                        pop_ticket.ad_estimated_service_cost\n                                    }})\n                                    <p>\n                                        <a class=\"btn btn-success mr-2\" :href=\"file.file\"\n                                            v-for=\"(file, x) in pop_ticket.estimated_service_files\" :key=\"file.id\"\n                                            target=\"_blank\">View\n                                            {{\n                                                pop_ticket.estimated_service_files.length > 1\n                                                ? x + 1\n                                                : \"\"\n                                            }}</a>\n                                    </p>\n                                </div>\n                            </div>\n                            <div class=\"col-3 bs\">\n                                <div class=\"form-group\">\n                                    <label>Actual Material Cost : </label>\n                                    <span v-if=\"pop_ticket.actual_material_cost\">\n                                        {{ pop_ticket.actual_material_cost | toCurrency }}</span>\n                                    <p>\n                                        <a class=\"btn btn-success mr-2\" :href=\"file.file\" v-for=\"(\n                        file, x\n                      ) in pop_ticket.actual_estimated_material_files\" :key=\"file.id\" target=\"_blank\">View\n                                            {{\n                                                pop_ticket.actual_estimated_material_files.length > 1\n                                                ? x + 1\n                                                : \"\"\n                                            }}</a>\n                                    </p>\n                                </div>\n                                <div class=\"form-group\" v-if=\"pop_ticket.material_po\">\n                                    <label>Material Cost PO No: </label>\n                                    <span class=\"badge badge-secondary\" v-for=\"(data, x) in pop_ticket.material_po\" style=\"margin-right:3px;\">{{data.name}}</span>\n                                </div>\n                            </div>\n\n                            <div class=\"col-3 bs\">\n                                <div class=\"form-group\">\n                                    <label>Actual Service Cost : </label>\n                                    <span v-if=\"pop_ticket.actual_service_cost\">{{\n                                        pop_ticket.actual_service_cost | toCurrency\n                                    }}</span>\n                                    <p>\n                                        <a class=\"btn btn-success mr-2\" :href=\"file.file\" v-for=\"(\n                                                file, x\n                                            ) in pop_ticket.actual_estimated_service_files\" :key=\"file.id\" target=\"_blank\">View\n                                            {{\n                                                pop_ticket.actual_estimated_service_files.length > 1\n                                                ? x + 1\n                                                : \"\"\n                                            }}</a>\n                                    </p>\n                                </div>\n                                <div class=\"form-group\" v-if=\"pop_ticket.service_po\">\n                                    <label>Service Cost PO No: </label>\n                                    <span class=\"badge badge-secondary\" v-for=\"(data, x) in pop_ticket.service_po\" style=\"margin-right:3px;\">{{data.name}}</span>\n                                </div>\n                            </div>\n\n                            <div class=\"col-4 bs\">\n                                <div class=\"form-group\">\n                                    <label style=\"margin: 0\">Ticket No : </label>\n                                    {{ pop_ticket.ticket_no }}\n                                </div>\n                            </div>\n                            <div class=\"col-4 bs\">\n                                <div class=\"form-group\">\n                                    <label style=\"margin: 0\">Likely Date : </label>\n                                    {{ pop_ticket.likely_date | myDate }}\n                                </div>\n                            </div>\n\n                            <div class=\"col-4 bs\">\n                                <div class=\"form-group\">\n                                    <label style=\"margin: 0\">Actual Date : </label>\n                                    {{ pop_ticket.actual_date | myDate }}\n                                </div>\n                            </div>\n\n                            <div class=\"col-4 bs\" v-if=\"pop_ticket.current_run_hour\">\n                                <div class=\"form-group\">\n                                    <label>Current Run Hour : </label>\n                                    {{ pop_ticket.current_run_hour }}\n                                </div>\n                            </div>\n                            <div class=\"col-4 bs\" v-if=\"pop_ticket.current_km_run\">\n                                <div class=\"form-group\">\n                                    <label>Current KM Hour : </label>\n                                    {{ pop_ticket.current_km_run }}\n                                </div>\n                            </div>\n                            <div class=\"col-4 bs\" v-if=\"pop_ticket.current_production_fig\">\n                                <div class=\"form-group\">\n                                    <label>Current Production Fig : </label>\n                                    {{ pop_ticket.current_production_fig }}\n                                </div>\n                            </div>\n                            <div class=\"col-4 bs\" v-if=\"pop_ticket.production_loss\">\n                                <div class=\"form-group\">\n                                    <label>Production Loss : </label>\n                                    {{ pop_ticket.production_loss }}\n                                </div>\n                            </div>\n                            <div class=\"col-4 bs\" v-if=\"pop_ticket.production_loss_amount\">\n                                <div class=\"form-group\">\n                                    <label>Production Loss Amount : </label>\n                                    {{ pop_ticket.production_loss_amount | toCurrency }}\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n</template>\n\n<script>\nimport VueReadMoreSmooth from \"vue-read-more-smooth\";\nexport default {\n    components: { VueReadMoreSmooth },\n    data() {\n        return {\n            close_btn: true,\n            additionalMore: [],\n            problemsMore: [],\n            search_machines: [],\n            search_sites: [],\n            search: {\n                page: 1,\n                machine_id: \"\",\n                site_id: \"\",\n                complaint_nature: \"\",\n                ticket_type:\"\",\n                ticket: \"\",\n            },\n            popticket: {},\n            categories: [],\n            sub_categories: [],\n            sites: [],\n            selected_machine: \"\",\n            users: [],\n            machines: [],\n            Tickets: {},\n            editmode: false,\n            MaterialCost: null,\n            ServiceCost: null,\n            form: new Form({\n                id: \"\",\n                site_id: \"\",\n                category_id: \"\",\n                sub_category_id: \"\",\n                free_service_no: \"\",\n                ticket_type: \"Periodic Maintenance\",\n                service_type: \"Paid Service\",\n                machine_id: \"\",\n                ticket_no: \"\",\n                vendor_id: \"\",\n                user_id: \"\",\n                likely_date: \"\",\n                estimated_material_cost: \"\",\n                estimated_service_cost: \"\",\n                maintenance_provider: \"vendor\",\n                problem_description: \"\",\n                complaint_nature: \"Major\",\n            }),\n            stages: [\n                {\n                    id: \"\",\n                    stage_no: \"\",\n                    stage_date: \"\",\n                    description: \"\",\n                    file: \"\",\n                    new_file: \"\",\n                },\n            ],\n\n            formclose: new Form({\n                id: \"\",\n                machine_status: \"\",\n                edit_type: \"closeticket\",\n                ticket_type: \"Periodic Maintenance\",\n                actual_date: \"\",\n                actual_material_cost: \"\",\n                actual_service_cost: \"\",\n                current_run_hour: \"\",\n                current_km_run: \"\",\n                current_production_fig: \"\",\n                production_loss: \"\",\n                production_loss_amount: \"\",\n                status: \"Closed\",\n                vendor_resolve_date: \"\",\n                vendor_attain_date: \"\",\n                vendor_response_date: \"\",\n                vendor_call_date: \"\",\n                rca: \"\",\n                materialPOS: \"\",\n                servicePOS: \"\"\n            }),\n            pop_machine: \"\",\n            pop_ticket: \"\",\n            opn_stage: [\n                \"Vendor created\",\n                \"Vendor Assigned\",\n                \"Order issued\",\n                \"Payment under process\",\n                \"Payment Done\",\n                \"Logistics under process\",\n                \"Materials despatched\",\n                \"Material received at site\",\n                \"Maintainace under progress\",\n            ],\n            last_stage_index: 0,\n            last_stage_date: \"\",\n\n            json_fields: {\n                \"Ticket No\": \"ticket_no\",\n                \"Ticket Type\": \"ticket_type\",\n                Machine: {\n                    field: \"machine\",\n                    callback: (val) => {\n                        return val.name + \" - \" + val.far_no;\n                    },\n                },\n                \"Likely Date\": \"likely_date\",\n                \"Reversion Date\": \"reversion_date\",\n                \"Reversion Reason\": \"reversion_reason\",\n                \"Estimated Material Cost\": \"estimated_material_cost\",\n                \"Estimated Service Cost\": \"estimated_service_cost\",\n                \"Actual Date\": \"actual_date\",\n                \"Actual Material Cost\": \"actual_material_cost\",\n                \"Actual Service Cost\": \"actual_service_cost\",\n                \"Status\": \"status\",\n                \"Service Type\": \"service_type\",\n                \"Maintenance Provider\": \"maintenance_provider\",\n                \"Problem Description\": \"problem_description\",\n                \"Complaint Nature\": \"complaint_nature\",\n                \"Status During Complaint\": \"status_during_complaint\",\n            },\n            json_meta: [\n                [\n                    {\n                        key: \"charset\",\n                        value: \"utf-8\",\n                    },\n                ],\n            ],\n        };\n    },\n    methods: {\n        toggleExpand(data, index) {\n      const itemIndex = data.indexOf(index);\n      if (itemIndex === -1) {\n        data.push(index);\n      } else {\n        data.splice(itemIndex, 1);\n      }\n    },\n    isExpanded(index) {\n      return data.includes(index);\n    },\n    getTruncatedText(text, length = 50) {\n      return text.length > length ? text.substring(0, length) + '...' : text;\n    },\n        async reset_filter() {\n            this.search = {\n                page: 1,\n                machine_id: \"\",\n                site_id: \"\",\n                complaint_nature: \"\",\n                ticket_type: \"\",\n                ticket: \"\",\n            }\n        },\n        async export_csv() {\n            const response = await axios.get(\"api/ticket?export=1\", {\n                params: {\n                    search: this.search,\n                },\n            });\n            return response.data.data;\n        },\n        startDownload() {\n            Swal.fire({\n                title: \"Please Wait !\",\n                html: \"Data populating\", // add html attribute if you want or remove\n                allowOutsideClick: false,\n                onBeforeOpen: () => {\n                    Swal.showLoading();\n                },\n            });\n        },\n        finishDownload() {\n            Swal.close();\n        },\n        sclick(x, p = \"\") {\n            if (p) {\n                let a = this.problemsMore[x] ? false : true;\n                this.$set(this.problemsMore, x, a);\n            } else {\n                let a = this.additionalMore[x] ? false : true;\n                this.$set(this.additionalMore, x, a);\n            }\n        },\n        getLabel(val) {\n            if (typeof val === \"object\") {\n                return val.far_no + \" - \" + val.name;\n            } else {\n                return val;\n            }\n        },\n        viewModal(ticket) {\n            this.pop_ticket = \"\";\n\n            axios\n                .get(\"api/ticket/\" + ticket.id)\n                .then((res) => {\n                    this.pop_ticket = res.data.data;\n                })\n                .catch((err) => {\n                    this.pop_ticket = ticket;\n                });\n\n            axios.get(\"api/category/\" + ticket.category_id).then((res) => {\n                this.sub_categories = res.data.data;\n            });\n            $(\"#viewmodal\").modal(\"show\");\n        },\n        AddStage() {\n            this.stages.push({\n                id: \"\",\n                stage_no: \"\",\n                stage_date: \"\",\n                description: \"\",\n                file: \"\",\n                new_file: \"\",\n            });\n        },\n        async choose_stage_file(event, x) {\n            this.stages[x].new_file = event.target.files[0];\n        },\n\n        async uploadMaterialCost(event) {\n            this.MaterialCost = event.target.files;\n        },\n        async uploadServiceCost(event) {\n            this.ServiceCost = event.target.files;\n        },\n\n        getResults(page = 1) {\n            this.$Progress.start();\n            this.search.page = page;\n            axios\n                .get(\"/api/ticket\", {\n                    params: this.search,\n                })\n                .then((data) => {\n                    this.Tickets = data.data.data;\n                    this.additionalMore = new Array(this.Tickets.data.length).fill(false);\n                    this.problemsMore = new Array(this.Tickets.data.length).fill(false);\n                });\n            this.$Progress.finish();\n        },\n\n        calculate_loss() {\n            if (this.formclose.actual_date && this.pop_ticket.created_at) {\n                let a = new Date(this.formclose.actual_date).toISOString();\n                let b = new Date(this.pop_ticket.created_at).toISOString();\n                const dateB = moment(a);\n                const dateC = moment(b);\n\n\n                var Diff = dateB.diff(dateC, 'days') + 1;\n\n                let hrs = this.pop_machine.prdloss_hrs\n                let rate = this.pop_machine.prdloss_hr_rate\n                let tloss = (Diff * hrs);\n                this.formclose.production_loss_amount = (tloss * rate)\n                this.formclose.production_loss = tloss\n\n\nconsole.log(hrs,rate,Diff);\n\n\n            }\n\n        },\n        submitCloseTicket() {\n            this.$forceUpdate();\n            this.$validator.validateAll(\"closeticket\").then(async (valid) => {\n                if (valid) {\n                    let pop_loader = this.$loading.show({});\n                    let last_mDate = this.pop_machine.last_maintenances\n                        ? this.pop_machine.last_maintenances.datetime\n                        : this.pop_machine.last_maintenance_date;\n\n                    if (\n                        last_mDate &&\n                        this.formclose.actual_date &&\n                        Date.parse(\n                            moment(this.formclose.actual_date).format(\"MMM,DD YYYY\")\n                        ) < Date.parse(moment(last_mDate).format(\"MMM,DD YYYY\"))\n                    ) {\n                        pop_loader.hide();\n                        Swal.fire(\n                            \"You can not add previous date's data, Please remove record from maintenance list.\",\n                            \"\",\n                            \"warning\"\n                        );\n                    } else {\n                        this.close_btn = false;\n                        this.formclose\n                            .put(\"/api/ticket/\" + this.formclose.id)\n                            .then((response) => {\n                                if (response.data.success) {\n                                    $(\"#closemodal\").modal(\"hide\");\n                                    Toast.fire({\n                                        icon: \"success\",\n                                        title: response.data.message,\n                                    });\n                                    this.upload_files(this.formclose.id, \"actual\");\n                                    this.$validator.reset();\n                                    this.formclose.reset();\n                                    this.loadTickets();\n                                }\n                                this.close_btn = true;\n                                pop_loader.hide();\n                            })\n                            .catch(() => {\n                                this.close_btn = true;\n                                pop_loader.hide();\n                                if (typeof err.response.data != \"undefined\") {\n                                    this.$setErrorsFromResponse(err.response.data);\n                                }\n                            });\n                    }\n                }\n            });\n        },\n\n        closeModal(ticket) {\n            this.$validator.pause();\n            $(\"#closemodal\").modal(\"show\");\n            this.$validator.reset();\n            this.formclose.reset();\n            this.$refs.fileactualservice.value = null;\n            this.$refs.fileactualmaterial.value = null;\n            this.pop_ticket = ticket;\n            this.pop_machine = ticket.machine;\n            this.formclose.fill(ticket);\n            this.formclose.edit_type = \"closeticket\";\n            this.$validator.resume();\n        },\n        editModal(ticket) {\n            this.editmode = true;\n            this.$validator.pause();\n            this.form.reset();\n            this.pop_ticket = ticket;\n            // if (this.$gate.isAdmin()) {\n                this.$refs.fileservice.value = null;\n                this.$refs.filematerial.value = null;\n            // }\n            this.MaterialCost = null;\n            this.ServiceCost = null;\n            $(\"#addNew\").modal(\"show\");\n            this.form.fill(ticket);\n            this.form.likely_date = ticket.likely_date\n                ? new Date(ticket.likely_date).toISOString()\n                : \"\";\n            this.stages = [];\n            if (ticket.stages && ticket.stages.length > 0) {\n                this.stages = ticket.stages;\n            }\n            this.$validator.resume();\n        },\n        newModal() {\n            this.stages = [];\n            this.AddStage();\n            this.editmode = false;\n            this.$validator.reset();\n            this.$validator.pause();\n            this.form.reset();\n            // if (this.$gate.isAdmin()) {\n                this.$refs.fileservice.value = null;\n                this.$refs.filematerial.value = null;\n            // }\n            this.MaterialCost = null;\n            this.ServiceCost = null;\n            $(\"#addNew\").modal(\"show\");\n            this.$validator.resume();\n        },\n\n        loadTickets() {\n            // if (this.$gate.isAdmin()) {\n            let pop_loader = this.$loading.show({});\n            axios\n                .get(\"/api/ticket\", {\n                    params: this.search,\n                })\n                .then((data) => {\n                    this.Tickets = data.data.data;\n                    this.additionalMore = new Array(this.Tickets.data.length).fill(false);\n                    this.problemsMore = new Array(this.Tickets.data.length).fill(false);\n                    pop_loader.hide();\n                })\n                .catch(() => {\n                    pop_loader.hide();\n                });\n            //   }\n        },\n\n        async upload_files(id, isactual = false) {\n            let fl = 0;\n            if (this.MaterialCost) {\n                this.MaterialCost.forEach((file) => {\n                    var fd = new FormData();\n                    fd.append(`file`, file);\n                    if (isactual) {\n                        fd.append(`file_type`, \"Actual Estimated Material\");\n                    } else {\n                        fd.append(`file_type`, \"Estimated Material\");\n                    }\n                    fd.append(`ticket_id`, id);\n                    axios.post(\"api/ticket/files\", fd).then((res) => {\n                        console.log(\"gallery uploaded\");\n                    });\n                });\n            }\n            if (this.ServiceCost) {\n                this.ServiceCost.forEach((file) => {\n                    var fd = new FormData();\n                    fd.append(`file`, file);\n                    if (isactual) {\n                        fd.append(`file_type`, \"Actual Estimated Service\");\n                    } else {\n                        fd.append(`file_type`, \"Estimated Service\");\n                    }\n                    fd.append(`ticket_id`, id);\n                    axios.post(\"api/ticket/files\", fd).then((res) => {\n                        console.log(\"gallery uploaded\");\n                    });\n                });\n            }\n        },\n\n        async upload_stages(id) {\n            if (this.stages) {\n                this.stages.forEach((stage) => {\n                    var fd = new FormData();\n                    fd.append(`id`, stage.id);\n                    fd.append(`stage_no`, stage.stage_no);\n                    fd.append(`stage_date`, stage.stage_date);\n                    fd.append(`description`, stage.description);\n                    //fd.append(`new_file`, stage.new_file);\n                    // fd.append(`file`, stage.file);\n                    fd.append(`ticket_id`, id);\n                    axios.post(\"api/ticket/stages\", fd).then((res) => {\n                        console.log(\"stages uploaded\");\n                    });\n                });\n            }\n        },\n\n        submitTicket() {\n            this.$validator.validateAll().then(async (valid) => {\n                if (valid) {\n                    let pop_loader = this.$loading.show({\n                        container: this.$refs.vps_submit_pop,\n                    });\n                    if (this.form.id) {\n                        this.form\n                            .put(\"/api/ticket/\" + this.form.id)\n                            .then((response) => {\n                                if (response.data.success) {\n                                    $(\"#addNew\").modal(\"hide\");\n                                    Toast.fire({\n                                        icon: \"success\",\n                                        title: response.data.message,\n                                    });\n                                    this.upload_stages(this.form.id);\n                                    this.upload_files(this.form.id);\n                                    this.loadTickets();\n                                }\n                                pop_loader.hide();\n                            })\n                            .catch(() => {\n                                pop_loader.hide();\n                                if (typeof err.response.data != \"undefined\") {\n                                    this.$setErrorsFromResponse(err.response.data);\n                                }\n                            });\n                    } else {\n                        this.form\n                            .post(\"/api/ticket\")\n                            .then((response) => {\n                                if (response.data.success) {\n                                    $(\"#addNew\").modal(\"hide\");\n                                    Toast.fire({\n                                        icon: \"success\",\n                                        title: response.data.message,\n                                    });\n\n                                    this.upload_files(response.data.data.id);\n                                    this.loadTickets();\n                                }\n                                pop_loader.hide();\n                            })\n                            .catch(() => {\n                                pop_loader.hide();\n                                if (typeof err.response.data != \"undefined\") {\n                                    this.$setErrorsFromResponse(err.response.data);\n                                }\n                            });\n                    }\n                }\n            });\n        },\n\n        async check_free_service() {\n            if (this.selected_machine) {\n                if (\n                    this.selected_machine.completed_free_service >=\n                    this.selected_machine.free_service_no\n                ) {\n                    this.form.service_type = \"Paid Service\";\n                    this.form.free_service_no = \"\";\n                } else {\n                    this.form.free_service_no =\n                        this.selected_machine.completed_free_service + 1;\n                }\n\n                if (\n                    this.selected_machine &&\n                    this.selected_machine.machine_type == \"New\" &&\n                    this.form.service_type == \"Free Service\"\n                ) {\n                    //  this.selected_machine.free_service_no\n                }\n            }\n        },\n\n        async get_machine() {\n            axios\n                .get(\"/api/ticket_machine\", {\n                    params: {\n                        site_id: this.form.site_id,\n                        category_id: this.form.category_id,\n                        sub_category_id: this.form.sub_category_id,\n                    },\n                })\n                .then((response) => {\n                    this.machines = response.data.data;\n                })\n                .catch(() => console.warn(\"Oh. Something went wrong\"));\n        },\n    },\n    mounted() { },\n    created() {\n        this.loadTickets();\n    },\n    beforeCreate() {\n        axios.get(\"api/get_pre_machine\").then((res) => {\n            this.categories = res.data.data.Category;\n            this.sites = res.data.data.sites;\n        });\n        axios\n            .get(\"/api/initial_ticket\")\n            .then((response) => {\n                this.users = response.data.data.vendors;\n                this.machines = response.data.data.machines;\n                this.search_machines = response.data.data.machines;\n                this.search_sites = response.data.data.sites;\n            })\n            .catch(() => console.warn(\"Oh. Something went wrong\"));\n    },\n    watch: {\n        \"formclose.machine_status\"(n) {\n            if (n == \"Non Repairable\") {\n                this.formclose.actual_material_cost = 0;\n                this.formclose.actual_service_cost = 0;\n            } else {\n                this.formclose.actual_material_cost = \"\";\n                this.formclose.actual_service_cost = \"\";\n            }\n        },\n        async \"form.sub_category_id\"(n, o) {\n            if (n) {\n                this.get_machine();\n            }\n        },\n        async \"form.site_id\"(n, o) {\n            if (n) {\n                this.get_machine();\n            }\n        },\n\n        \"form.category_id\": {\n            handler: function (n, o) {\n                if (n) {\n                    axios.get(\"api/category/\" + n).then((res) => {\n                        this.sub_categories = res.data.data;\n                    });\n                    this.get_machine();\n                }\n            },\n            deep: true,\n            initial: true,\n        },\n        stages: {\n            handler: function (n, o) {\n                if (n && n.length > 0) {\n                    let la = n[n.length - 1];\n                    if (la.stage_no)\n                        this.last_stage_index = this.opn_stage.indexOf(la.stage_no);\n                    if (la.stage_date)\n                        this.last_stage_date = new Date(la.stage_date).toISOString();\n                } else {\n                    this.last_stage_index = 0;\n                    if (this.pop_ticket && this.pop_ticket.created_at) {\n                        this.last_stage_date = new Date(\n                            this.pop_ticket.created_at\n                        ).toISOString();\n                    } else {\n                        this.last_stage_date = new Date().toISOString();\n                    }\n                }\n            },\n            deep: true,\n            initial: true,\n        },\n\n        async \"form.maintenance_provider\"(n) {\n            if (n != \"vendor\") {\n                this.form.service_type = \"Paid Service\";\n            }\n            axios\n                .get(\"api/user/list\", {\n                    params: {\n                        type: n,\n                    },\n                })\n                .then((response) => {\n                    this.users = response.data.data;\n                })\n                .catch(() => console.warn(\"Oh. Something went wrong\"));\n        },\n\n        async \"form.machine_id\"(n) {\n            this.selected_machine = this.machines.find((x) => x.id === n);\n            await this.check_free_service();\n        },\n        async \"form.service_type\"(n) {\n            if (n == \"Free Service\") {\n                await this.check_free_service();\n            }\n        },\n        async \"formclose.actual_date\"() {\n            this.calculate_loss();\n        }\n    },\n};\n</script>\n<style>\n.bs {\n    border: 1px solid #d2d1d1a8;\n    border-radius: 5px;\n}\n\n.comma~.comma:not(:empty):before {\n    content: \", \";\n}\n\n.rmore {\n    color: blue;\n}\n</style>\n"],"sourceRoot":""}]);

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
                        "\n                                Add New\n                            "
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
                              "\n                                        Export as CSV"
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
                    _vm._l(_vm.Tickets.data, function(ticket, index) {
                      return _c("tr", { key: ticket.id }, [
                        _c("td", [_vm._v(_vm._s(ticket.ticket_no))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(ticket.ticket_type))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(ticket.machine.far_no))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(ticket.machine.name))]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(
                              ticket.machine.machine_model
                                ? ticket.machine.machine_model.name
                                : "-"
                            )
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(_vm._s(ticket.machine.machine_sr_no))
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm.isExpanded(index)
                            ? _c("div", [
                                _vm._v(
                                  "\n                                            " +
                                    _vm._s(ticket.problem_description) +
                                    "\n                                            "
                                ),
                                _c(
                                  "a",
                                  {
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.toggleExpand(
                                          _vm.tiTickets.datacket,
                                          index
                                        )
                                      }
                                    }
                                  },
                                  [_vm._v("Less")]
                                )
                              ])
                            : _c("div", { staticClass: "truncate" }, [
                                _vm._v(
                                  "\n                                            " +
                                    _vm._s(
                                      _vm.getTruncatedText(
                                        ticket.problem_description
                                      )
                                    ) +
                                    "\n                                            "
                                ),
                                _c(
                                  "a",
                                  {
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.toggleExpand(
                                          _vm.Tickets.data,
                                          index
                                        )
                                      }
                                    }
                                  },
                                  [_vm._v("More")]
                                )
                              ])
                        ]),
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
                                        open: _vm.additionalMore[_vm.x],
                                        "no-button": "",
                                        "no-shadow": ""
                                      },
                                      on: {
                                        "update:open": function($event) {
                                          return _vm.$set(
                                            _vm.additionalMore,
                                            _vm.x,
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
                                          return _vm.sclick(_vm.x)
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "..." +
                                          _vm._s(
                                            _vm.additionalMore[_vm.x]
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
                            "\n                                        " +
                              _vm._s(
                                ticket.status.toLowerCase() == "created by user"
                                  ? "Open"
                                  : ticket.status
                              ) +
                              "\n                                    "
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
                                  "\n                                            View\n                                        "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            ticket.status != "Closed"
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
                            ticket.status != "Closed"
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
                                      "\n                                            Close\n                                        "
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
                  attrs: { data: _vm.Tickets, limit: 10 },
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
                                  "\n                                    "
                              ),
                              _c("br"),
                              _vm._v(" "),
                              _c("strong", [_vm._v("Machine Name :")]),
                              _vm._v(
                                " " +
                                  _vm._s(_vm.pop_machine.name) +
                                  "\n                                    "
                              ),
                              _c("br"),
                              _vm._v(" "),
                              _c("strong", [_vm._v("Machine Model :")]),
                              _vm._v(
                                "\n                                    " +
                                  _vm._s(
                                    _vm.pop_machine.machine_model
                                      ? _vm.pop_machine.machine_model.name
                                      : "-"
                                  ) +
                                  "\n                                    "
                              ),
                              _c("br"),
                              _vm._v(" "),
                              _c("strong", [_vm._v("Machine Chassis No :")]),
                              _vm._v(
                                "\n                                    " +
                                  _vm._s(_vm.pop_machine.chassis_no) +
                                  "\n                                "
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-sm" }, [
                            _c("p", [
                              _c("strong", [_vm._v("Machine Sl No:")]),
                              _vm._v(
                                "\n                                    " +
                                  _vm._s(_vm.pop_machine.machine_sr_no) +
                                  "\n                                    "
                              ),
                              _c("br"),
                              _vm._v(" "),
                              _c("strong", [_vm._v("Machine Regn No :")]),
                              _vm._v(
                                " " +
                                  _vm._s(_vm.pop_machine.regn_no) +
                                  "\n                                    "
                              ),
                              _c("br"),
                              _vm._v(" "),
                              _c("strong", [_vm._v("Machine Engine No :")]),
                              _vm._v(
                                "\n                                    " +
                                  _vm._s(_vm.pop_machine.engine_no) +
                                  "\n                                    "
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
                                  "\n                                "
                              )
                            ])
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _vm._v(
                        "\n                            " +
                          _vm._s(_vm.verrors.closeticket) +
                          "\n                            "
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
                                          "\n                                        " +
                                            _vm._s(
                                              _vm.verrors.first(
                                                "closeticket.actual_date"
                                              )
                                            ) +
                                            "\n                                    "
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
                                    "\n                                            Running with Problem\n                                        "
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
                                    "\n                                        " +
                                      _vm._s(
                                        _vm.verrors.first(
                                          "closeticket.machine_status"
                                        )
                                      ) +
                                      "\n                                    "
                                  )
                                ]
                              )
                            : _vm._e()
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-2" }, [
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
                      _c("div", { staticClass: "col-2" }, [
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
                                    "\n                                        " +
                                      _vm._s(
                                        _vm.verrors.first(
                                          "closeticket.actual_material_cost"
                                        )
                                      ) +
                                      "\n                                    "
                                  )
                                ]
                              )
                            : _vm._e()
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-2" }, [
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
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.verrors.has("closeticket.material_cost")
                            ? _c(
                                "div",
                                { staticClass: "help-block invalid-feedback" },
                                [
                                  _vm._v(
                                    "\n                                        " +
                                      _vm._s(
                                        _vm.verrors.first(
                                          "closeticket.material_cost"
                                        )
                                      ) +
                                      "\n                                    "
                                  )
                                ]
                              )
                            : _vm._e()
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-6" }, [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", [_vm._v("Material Cost POs")]),
                            _vm._v(" "),
                            _c("v-select", {
                              attrs: {
                                label: "Enter PO numbers",
                                taggable: "",
                                multiple: ""
                              },
                              model: {
                                value: _vm.formclose.materialPOS,
                                callback: function($$v) {
                                  _vm.$set(_vm.formclose, "materialPOS", $$v)
                                },
                                expression: "formclose.materialPOS"
                              }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-2" }, [
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
                      _c("div", { staticClass: "col-2" }, [
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
                                    "\n                                        " +
                                      _vm._s(
                                        _vm.verrors.first(
                                          "closeticket.actual_service_cost"
                                        )
                                      ) +
                                      "\n                                    "
                                  )
                                ]
                              )
                            : _vm._e()
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-2" }, [
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
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.verrors.has("closeticket.service_cost")
                            ? _c(
                                "div",
                                { staticClass: "help-block invalid-feedback" },
                                [
                                  _vm._v(
                                    "\n                                        " +
                                      _vm._s(
                                        _vm.verrors.first(
                                          "closeticket.service_cost"
                                        )
                                      ) +
                                      "\n                                    "
                                  )
                                ]
                              )
                            : _vm._e()
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-6" }, [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", [_vm._v("Service Cost POs")]),
                            _vm._v(" "),
                            _c("v-select", {
                              attrs: {
                                label: "Enter PO numbers",
                                taggable: "",
                                multiple: ""
                              },
                              model: {
                                value: _vm.formclose.servicePOS,
                                callback: function($$v) {
                                  _vm.$set(_vm.formclose, "servicePOS", $$v)
                                },
                                expression: "formclose.servicePOS"
                              }
                            })
                          ],
                          1
                        )
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
                                      "{\n                                            required: true,\n                                            decimal: 2,\n                                            min_value: pop_machine.last_maintenances\n                                                ? pop_machine.last_maintenances.run_hour\n                                                : pop_machine.last_hr_run,\n                                        }"
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
                                        "\n                                        " +
                                          _vm._s(
                                            _vm.verrors.first(
                                              "closeticket.current_run_hour"
                                            )
                                          ) +
                                          "\n                                    "
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
                                      "{\n                                            required: true,\n                                            decimal: 2,\n                                            min_value: pop_machine.last_maintenances\n                                                ? pop_machine.last_maintenances.km_run\n                                                : pop_machine.last_km_run,\n                                        }"
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
                                        "\n                                        " +
                                          _vm._s(
                                            _vm.verrors.first(
                                              "closeticket.current_km_run"
                                            )
                                          ) +
                                          "\n                                    "
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
                                      "{\n                                            required: true,\n                                            decimal: 2,\n                                            min_value: pop_machine.last_maintenances\n                                                ? pop_machine.last_maintenances.production_fig\n                                                : pop_machine.periodic_maintenance_breakdown,\n                                        }"
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
                                        "\n                                        " +
                                          _vm._s(
                                            _vm.verrors.first(
                                              "closeticket.current_production_fig"
                                            )
                                          ) +
                                          "\n                                    "
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
                                        "\n                                        " +
                                          _vm._s(
                                            _vm.verrors.first(
                                              "closeticket.production_loss"
                                            )
                                          ) +
                                          "\n                                    "
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
                                        "\n                                        " +
                                          _vm._s(
                                            _vm.verrors.first(
                                              "closeticket.production_loss_amount"
                                            )
                                          ) +
                                          "\n                                    "
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
                                    "\n                                        " +
                                      _vm._s(
                                        _vm.verrors.first("closeticket.rca")
                                      ) +
                                      "\n                                    "
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
                          "\n                            Close\n                        "
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
                              "\n                            Close Ticket\n                        "
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
                              "\n                            Processing\n                        "
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
                              "\n                                "
                          ),
                          _c("br"),
                          _vm._v(" "),
                          _c("strong", [_vm._v("Machine Name :")]),
                          _vm._v(
                            " " +
                              _vm._s(_vm.pop_ticket.machine.name) +
                              "\n                                "
                          ),
                          _c("br"),
                          _vm._v(" "),
                          _c("strong", [_vm._v("Machine Chassis No :")]),
                          _vm._v(
                            "\n                                " +
                              _vm._s(_vm.pop_ticket.machine.chassis_no) +
                              "\n                                "
                          ),
                          _c("br"),
                          _vm._v(" "),
                          _c("strong", [_vm._v("Machine Sl No:")]),
                          _vm._v(
                            "\n                                " +
                              _vm._s(_vm.pop_ticket.machine.machine_sr_no) +
                              "\n                                "
                          ),
                          _c("br"),
                          _vm._v(" "),
                          _c("strong", [_vm._v("Machine Regn No :")]),
                          _vm._v(
                            "\n                                " +
                              _vm._s(_vm.pop_ticket.machine.regn_no) +
                              "\n                                "
                          ),
                          _c("br"),
                          _vm._v(" "),
                          _c("strong", [_vm._v("Machine Engine No :")]),
                          _vm._v(
                            "\n                                " +
                              _vm._s(_vm.pop_ticket.machine.engine_no) +
                              "\n                            "
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
                                "\n                                " +
                                  _vm._s(_vm.pop_ticket.service_type) +
                                  "\n                            "
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.pop_ticket.service_type == "Free Service" &&
                        _vm.pop_ticket.free_service_no
                          ? _c("div", { staticClass: "form-group mb-0" }, [
                              _c("label", [_vm._v("Free service no:")]),
                              _vm._v(
                                "\n                                " +
                                  _vm._s(_vm.pop_ticket.free_service_no) +
                                  "/" +
                                  _vm._s(
                                    _vm.pop_ticket.machine.free_service_no
                                  ) +
                                  "\n                            "
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.pop_ticket.ticket_type
                          ? _c("div", { staticClass: "form-group mb-0" }, [
                              _c("label", [_vm._v("Ticket Type")]),
                              _vm._v(
                                "\n                                " +
                                  _vm._s(_vm.pop_ticket.ticket_type) +
                                  "\n                            "
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.pop_ticket.status_during_complaint
                          ? _c("div", { staticClass: "form-group mb-0" }, [
                              _c("label", [_vm._v("Status During Complain: ")]),
                              _vm._v(
                                "\n                                " +
                                  _vm._s(
                                    _vm.pop_ticket.status_during_complaint
                                  ) +
                                  "\n                            "
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { staticStyle: { margin: "0" } }, [
                            _vm._v("Machine's Problem: ")
                          ]),
                          _vm._v(
                            "\n                                " +
                              _vm._s(_vm.pop_ticket.problem_description) +
                              "\n                            "
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-4 bs" }, [
                        _c("div", { staticClass: "form-group mb-0" }, [
                          _c("label", [_vm._v("Maintenance Provider")]),
                          _vm._v(
                            "\n                                " +
                              _vm._s(_vm.pop_ticket.maintenance_provider) +
                              "\n                            "
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", [
                              _vm._v(
                                "\n                                    " +
                                  _vm._s(
                                    _vm.pop_ticket.maintenance_provider ==
                                      "user"
                                      ? "User"
                                      : "Vendor"
                                  ) +
                                  "\n                                "
                              )
                            ]),
                            _vm._v(" "),
                            _vm.pop_ticket.maintenance_provider == "vendor"
                              ? [
                                  _vm._v(
                                    "\n                                    :\n                                    "
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
                                          "\n                                        " +
                                            _vm._s(field.stage_no) +
                                            "\n                                    "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "col-2" }, [
                                        _vm._v(
                                          "\n                                        " +
                                            _vm._s(
                                              _vm._f("myDate")(field.stage_date)
                                            ) +
                                            "\n                                    "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "col-5" }, [
                                        _vm._v(
                                          "\n                                        " +
                                            _vm._s(field.description) +
                                            "\n                                    "
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
                            _vm._v("Estimated Material cost:")
                          ]),
                          _c("br"),
                          _vm._v(
                            "\n                                " +
                              _vm._s(
                                _vm._f("toCurrency")(
                                  _vm.pop_ticket.estimated_material_cost +
                                    _vm.pop_ticket.ad_estimated_material_cost
                                )
                              ) +
                              "\n                                (" +
                              _vm._s(
                                _vm.pop_ticket.estimated_material_cost +
                                  "+" +
                                  _vm.pop_ticket.ad_estimated_material_cost
                              ) +
                              ")\n                                "
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
                                      "View\n                                        " +
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
                            _vm._v("Estimated Service cost: ")
                          ]),
                          _c("br"),
                          _vm._v(
                            "\n                                " +
                              _vm._s(
                                _vm._f("toCurrency")(
                                  _vm.pop_ticket.estimated_service_cost +
                                    _vm.pop_ticket.ad_estimated_service_cost
                                )
                              ) +
                              "\n                                (" +
                              _vm._s(
                                _vm.pop_ticket.estimated_service_cost +
                                  "+" +
                                  _vm.pop_ticket.ad_estimated_service_cost
                              ) +
                              ")\n                                "
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
                                      "View\n                                        " +
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
                                  "\n                                    " +
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
                                      "View\n                                        " +
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
                        ]),
                        _vm._v(" "),
                        _vm.pop_ticket.material_po
                          ? _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _c("label", [_vm._v("Material Cost PO No: ")]),
                                _vm._v(" "),
                                _vm._l(_vm.pop_ticket.material_po, function(
                                  data,
                                  x
                                ) {
                                  return _c(
                                    "span",
                                    {
                                      staticClass: "badge badge-secondary",
                                      staticStyle: { "margin-right": "3px" }
                                    },
                                    [_vm._v(_vm._s(data.name))]
                                  )
                                })
                              ],
                              2
                            )
                          : _vm._e()
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
                                      "View\n                                        " +
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
                        ]),
                        _vm._v(" "),
                        _vm.pop_ticket.service_po
                          ? _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _c("label", [_vm._v("Service Cost PO No: ")]),
                                _vm._v(" "),
                                _vm._l(_vm.pop_ticket.service_po, function(
                                  data,
                                  x
                                ) {
                                  return _c(
                                    "span",
                                    {
                                      staticClass: "badge badge-secondary",
                                      staticStyle: { "margin-right": "3px" }
                                    },
                                    [_vm._v(_vm._s(data.name))]
                                  )
                                })
                              ],
                              2
                            )
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-4 bs" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { staticStyle: { margin: "0" } }, [
                            _vm._v("Ticket No : ")
                          ]),
                          _vm._v(
                            "\n                                " +
                              _vm._s(_vm.pop_ticket.ticket_no) +
                              "\n                            "
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
                            "\n                                " +
                              _vm._s(
                                _vm._f("myDate")(_vm.pop_ticket.likely_date)
                              ) +
                              "\n                            "
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
                            "\n                                " +
                              _vm._s(
                                _vm._f("myDate")(_vm.pop_ticket.actual_date)
                              ) +
                              "\n                            "
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _vm.pop_ticket.current_run_hour
                        ? _c("div", { staticClass: "col-4 bs" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [_vm._v("Current Run Hour : ")]),
                              _vm._v(
                                "\n                                " +
                                  _vm._s(_vm.pop_ticket.current_run_hour) +
                                  "\n                            "
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
                                "\n                                " +
                                  _vm._s(_vm.pop_ticket.current_km_run) +
                                  "\n                            "
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
                                "\n                                " +
                                  _vm._s(
                                    _vm.pop_ticket.current_production_fig
                                  ) +
                                  "\n                            "
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
                                "\n                                " +
                                  _vm._s(_vm.pop_ticket.production_loss) +
                                  "\n                            "
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
                                "\n                                " +
                                  _vm._s(
                                    _vm._f("toCurrency")(
                                      _vm.pop_ticket.production_loss_amount
                                    )
                                  ) +
                                  "\n                            "
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
        _c("th", [_vm._v("FAR No")]),
        _vm._v(" "),
        _c("th", [_vm._v("Machine Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Machine Model")]),
        _vm._v(" "),
        _c("th", [_vm._v("Machine SR No")]),
        _vm._v(" "),
        _c("th", [_vm._v("Machine's Problem")]),
        _vm._v(" "),
        _c("th", [_vm._v("Additional Problems")]),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvVGlja2V0cy9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvVGlja2V0cy9pbmRleC52dWU/MmMyOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9UaWNrZXRzL2luZGV4LnZ1ZT9kNDQxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1RpY2tldHMvaW5kZXgudnVlP2M5OTkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvVGlja2V0cy9pbmRleC52dWUiXSwibmFtZXMiOlsiY29tcG9uZW50cyIsIlZ1ZVJlYWRNb3JlU21vb3RoIiwiZGF0YSIsImNsb3NlX2J0biIsImFkZGl0aW9uYWxNb3JlIiwicHJvYmxlbXNNb3JlIiwic2VhcmNoX21hY2hpbmVzIiwic2VhcmNoX3NpdGVzIiwic2VhcmNoIiwicGFnZSIsIm1hY2hpbmVfaWQiLCJzaXRlX2lkIiwiY29tcGxhaW50X25hdHVyZSIsInRpY2tldF90eXBlIiwidGlja2V0IiwicG9wdGlja2V0IiwiY2F0ZWdvcmllcyIsInN1Yl9jYXRlZ29yaWVzIiwic2l0ZXMiLCJzZWxlY3RlZF9tYWNoaW5lIiwidXNlcnMiLCJtYWNoaW5lcyIsIlRpY2tldHMiLCJlZGl0bW9kZSIsIk1hdGVyaWFsQ29zdCIsIlNlcnZpY2VDb3N0IiwiZm9ybSIsImlkIiwiY2F0ZWdvcnlfaWQiLCJzdWJfY2F0ZWdvcnlfaWQiLCJmcmVlX3NlcnZpY2Vfbm8iLCJzZXJ2aWNlX3R5cGUiLCJ0aWNrZXRfbm8iLCJ2ZW5kb3JfaWQiLCJ1c2VyX2lkIiwibGlrZWx5X2RhdGUiLCJlc3RpbWF0ZWRfbWF0ZXJpYWxfY29zdCIsImVzdGltYXRlZF9zZXJ2aWNlX2Nvc3QiLCJtYWludGVuYW5jZV9wcm92aWRlciIsInByb2JsZW1fZGVzY3JpcHRpb24iLCJzdGFnZXMiLCJzdGFnZV9ubyIsInN0YWdlX2RhdGUiLCJkZXNjcmlwdGlvbiIsImZpbGUiLCJuZXdfZmlsZSIsImZvcm1jbG9zZSIsIm1hY2hpbmVfc3RhdHVzIiwiZWRpdF90eXBlIiwiYWN0dWFsX2RhdGUiLCJhY3R1YWxfbWF0ZXJpYWxfY29zdCIsImFjdHVhbF9zZXJ2aWNlX2Nvc3QiLCJjdXJyZW50X3J1bl9ob3VyIiwiY3VycmVudF9rbV9ydW4iLCJjdXJyZW50X3Byb2R1Y3Rpb25fZmlnIiwicHJvZHVjdGlvbl9sb3NzIiwicHJvZHVjdGlvbl9sb3NzX2Ftb3VudCIsInN0YXR1cyIsInZlbmRvcl9yZXNvbHZlX2RhdGUiLCJ2ZW5kb3JfYXR0YWluX2RhdGUiLCJ2ZW5kb3JfcmVzcG9uc2VfZGF0ZSIsInZlbmRvcl9jYWxsX2RhdGUiLCJyY2EiLCJtYXRlcmlhbFBPUyIsInNlcnZpY2VQT1MiLCJwb3BfbWFjaGluZSIsInBvcF90aWNrZXQiLCJvcG5fc3RhZ2UiLCJsYXN0X3N0YWdlX2luZGV4IiwibGFzdF9zdGFnZV9kYXRlIiwianNvbl9maWVsZHMiLCJNYWNoaW5lIiwiZmllbGQiLCJjYWxsYmFjayIsImpzb25fbWV0YSIsImtleSIsInZhbHVlIiwibWV0aG9kcyIsInRvZ2dsZUV4cGFuZCIsImlzRXhwYW5kZWQiLCJnZXRUcnVuY2F0ZWRUZXh0IiwicGFyYW1zIiwic3RhcnREb3dubG9hZCIsIlN3YWwiLCJ0aXRsZSIsImh0bWwiLCJhbGxvd091dHNpZGVDbGljayIsIm9uQmVmb3JlT3BlbiIsImZpbmlzaERvd25sb2FkIiwic2NsaWNrIiwiZ2V0TGFiZWwiLCJ2aWV3TW9kYWwiLCJheGlvcyIsImdldCIsInRoZW4iLCJjYXRjaCIsIiQiLCJBZGRTdGFnZSIsImdldFJlc3VsdHMiLCJjYWxjdWxhdGVfbG9zcyIsImNvbnNvbGUiLCJzdWJtaXRDbG9zZVRpY2tldCIsImxhc3RfbURhdGUiLCJEYXRlIiwibW9tZW50IiwicG9wX2xvYWRlciIsInB1dCIsIlRvYXN0IiwiaWNvbiIsImNsb3NlTW9kYWwiLCJlZGl0TW9kYWwiLCJuZXdNb2RhbCIsImxvYWRUaWNrZXRzIiwiZmQiLCJzdWJtaXRUaWNrZXQiLCJjb250YWluZXIiLCJwb3N0IiwibW91bnRlZCIsImNyZWF0ZWQiLCJiZWZvcmVDcmVhdGUiLCJ3YXRjaCIsImhhbmRsZXIiLCJkZWVwIiwiaW5pdGlhbCIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUUsRTs7Ozs7Ozs7Ozs7O0FDWGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLG1CQUFPLENBQUMsdWpCQUE4UDtBQUN4UTtBQUNBO0FBQytHO0FBQ2E7QUFDNUg7QUFDOFU7QUFDOVU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNzRztBQUN0RyxnQkFBZ0IseUdBQWtCO0FBQ2xDLEVBQUUsd0hBQWM7QUFDaEIsRUFBRSxnT0FBYztBQUNoQixFQUFFLHlPQUF5QjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxFQWFYOztBQUVVLGdGQUFpQiIsImZpbGUiOiJqcy8xMC5idW5kbGUuM2NjMDA0ZWFhNDRhNGUyMDNiMjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPHNlY3Rpb24gY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJjYXJkLXRpdGxlXCI+VGlja2V0IExpc3Q8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXRvb2xzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayB0bz1cIi90aWNrZXQvYWRkXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1wcmltYXJ5XCIgQGNsaWNrPVwibmV3TW9kYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtcGx1cy1zcXVhcmVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGQgTmV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keSBwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBhdXRvY29tcGxldGU9XCJvZmZcIiBAc3VibWl0LnByZXZlbnQ9XCJnZXRSZXN1bHRzKClcIiBkYXRhLXZ2LXNjb3BlPVwic2VhcmNoZnJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVwibmFtZVwiIDpnZXQtb3B0aW9uLWxhYmVsPVwiZ2V0TGFiZWxcIiA6cmVkdWNlPVwiKG9wdGlvbikgPT4gb3B0aW9uLmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJzZWFyY2hfbWFjaGluZXNcIiBwbGFjZWhvbGRlcj1cIkVudGVyIG1hY2hpbmVzIC4uLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJzZWFyY2gubWFjaGluZV9pZFwiIG5hbWU9XCJtYWNoaW5lX2lkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGlja2V0IC4uLlwiIHYtbW9kZWw9XCJzZWFyY2gudGlja2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRpY2tldFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cInNpdGVfbmFtZVwiIDpyZWR1Y2U9XCIob3B0aW9uKSA9PiBvcHRpb24uaWRcIiA6b3B0aW9ucz1cInNlYXJjaF9zaXRlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IFNpdGUuLi5cIiB2LW1vZGVsPVwic2VhcmNoLnNpdGVfaWRcIiBuYW1lPVwic2l0ZV9pZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XCJzaXRlX25hbWVcIiA6b3B0aW9ucz1cIlsnT3BlbicsICdDbG9zZWQnXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IFN0YXR1cy4uLlwiIHYtbW9kZWw9XCJzZWFyY2guc3RhdHVzXCIgbmFtZT1cInN0YXR1c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XCJzaXRlX25hbWVcIiA6b3B0aW9ucz1cIlsnTWFqb3InLCAnTWlub3InXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IENvbXBsYWludCBOYXR1cmUuLi5cIiB2LW1vZGVsPVwic2VhcmNoLmNvbXBsYWludF9uYXR1cmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29tcGxhaW50X25hdHVyZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XCJzaXRlX25hbWVcIiA6b3B0aW9ucz1cIlsnQnJlYWtkb3duIE1haW50ZW5hbmNlJywgJ1BlcmlvZGljIE1haW50ZW5hbmNlJ11cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBUaWNrZXQgVHlwZS4uLlwiIHYtbW9kZWw9XCJzZWFyY2gudGlja2V0X3R5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGlja2V0X3R5cGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCI+U2VhcmNoPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4taW5mbyBtbC0yXCIgQGNsaWNrPVwicmVzZXRfZmlsdGVyKClcIj5SZXNldDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRvd25sb2FkLWV4Y2VsIGNsYXNzPVwiYnRuIGJ0bi13YXJuaW5nIG1sLTJcIiA6ZmV0Y2g9XCJleHBvcnRfY3N2XCIgOmZpZWxkcz1cImpzb25fZmllbGRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6YmVmb3JlLWdlbmVyYXRlPVwic3RhcnREb3dubG9hZFwiIDpiZWZvcmUtZmluaXNoPVwiZmluaXNoRG93bmxvYWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldD1cIk15IFdvcmtzaGVldFwiIHR5cGU9XCJjc3ZcIiBuYW1lPVwidGlja2V0X2xpc3QuY3N2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1maWxlLWV4Y2VsLW9cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV4cG9ydCBhcyBDU1Y8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rvd25sb2FkLWV4Y2VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC8uY2FyZC1oZWFkZXIgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IHRpY2tldExzdFRibCB0YWJsZS1yZXNwb25zaXZlIHAtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VGlja2V0IE5vPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VGlja2V0IFR5cGU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5GQVIgTm88L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5NYWNoaW5lIE5hbWU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5NYWNoaW5lIE1vZGVsPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TWFjaGluZSBTUiBObzwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk1hY2hpbmUncyBQcm9ibGVtPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QWRkaXRpb25hbCBQcm9ibGVtczwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlNpdGU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Db21wbGFpbnQgTmF0dXJlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q3JlYXRlZCBCeTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkNyZWF0ZWQgRGF0ZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkV4cGVjdGVkIGRhdGU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5SZXZpc2VkIDxicj4gRXhwZWN0ZWQgZGF0ZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlRpY2tldCBTdGF0dXM8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BY3Rpb248L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHYtZm9yPVwiKHRpY2tldCwgaW5kZXgpIGluIFRpY2tldHMuZGF0YVwiIDprZXk9XCJ0aWNrZXQuaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0LnRpY2tldF9ubyB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC50aWNrZXRfdHlwZSB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5tYWNoaW5lLmZhcl9ubyB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5tYWNoaW5lLm5hbWUgfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyAodGlja2V0Lm1hY2hpbmUubWFjaGluZV9tb2RlbD8gdGlja2V0Lm1hY2hpbmUubWFjaGluZV9tb2RlbC5uYW1lOiBcIi1cIikgIH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0Lm1hY2hpbmUubWFjaGluZV9zcl9ubyB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJpc0V4cGFuZGVkKGluZGV4KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgIHRpY2tldC5wcm9ibGVtX2Rlc2NyaXB0aW9uICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBAY2xpY2sucHJldmVudD1cInRvZ2dsZUV4cGFuZCh0aVRpY2tldHMuZGF0YWNrZXQsIGluZGV4KVwiPkxlc3M8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZWxzZSBjbGFzcz1cInRydW5jYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBnZXRUcnVuY2F0ZWRUZXh0KCB0aWNrZXQucHJvYmxlbV9kZXNjcmlwdGlvbiApIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIEBjbGljay5wcmV2ZW50PVwidG9nZ2xlRXhwYW5kKFRpY2tldHMuZGF0YSwgaW5kZXgpXCI+TW9yZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XCJ0cnVuY2F0ZVwiIDp0aXRsZT1cInRpY2tldC5wcm9ibGVtX2Rlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cInRpY2tldC5wcm9ibGVtX2Rlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3sgdGlja2V0LnByb2JsZW1fZGVzY3JpcHRpb24gfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwidGlja2V0LnByb2JsZW1zICYmIHRpY2tldC5wcm9ibGVtcy5sZW5ndGggPiAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VnVlUmVhZE1vcmVTbW9vdGggOm9wZW4uc3luYz1cImFkZGl0aW9uYWxNb3JlW3hdXCIgbm8tYnV0dG9uIG5vLXNoYWRvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVwidGlja2V0LnByb2JsZW1zXCIgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIHRpY2tldC5wcm9ibGVtc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCIncCcgKyBpbmRleFwiIHYtaHRtbD1cIml0ZW0ucHJvYmxlbVwiPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVnVlUmVhZE1vcmVTbW9vdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBAY2xpY2s9XCJzY2xpY2soeClcIiBjbGFzcz1cInJtb3JlXCI+Li4ue3sgYWRkaXRpb25hbE1vcmVbeF0gPyBcIkxlc3NcIiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJNb3JlXCIgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0LnNpdGUgPyB0aWNrZXQuc2l0ZS5zaXRlX25hbWUgOiBcIi1cIiB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5jb21wbGFpbnRfbmF0dXJlIH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0LmNyZWF0ZWRfYnlfbmFtZSB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5jcmVhdGVkX2F0IHwgbXlEYXRlIH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0Lmxpa2VseV9kYXRlIHwgbXlEYXRlIH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0LnJldmVyc2lvbl9kYXRlIHwgbXlEYXRlIH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrZXQuc3RhdHVzLnRvTG93ZXJDYXNlKCkgPT0gXCJjcmVhdGVkIGJ5IHVzZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIk9wZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aWNrZXQuc3RhdHVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgY2xhc3M9XCJidG4gYnRuLXdhcm5pbmcgYnRuLXNtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInZpZXdNb2RhbCh0aWNrZXQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWaWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cIicvdGlja2V0L2VkaXQvJyArIHRpY2tldC5pZFwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1zbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwidGlja2V0LnN0YXR1cyAhPSAnQ2xvc2VkJ1wiPkVkaXQ8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImNsb3NlTW9kYWwodGlja2V0KVwiIHRpdGxlPVwiQ2xvc2UgdGlja2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJ0aWNrZXQuc3RhdHVzICE9ICdDbG9zZWQnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDbG9zZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmNhcmQtYm9keSAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYWdpbmF0aW9uIDpkYXRhPVwiVGlja2V0c1wiIDpsaW1pdD1cIjEwXCIgQHBhZ2luYXRpb24tY2hhbmdlLXBhZ2U9XCJnZXRSZXN1bHRzXCI+PC9wYWdpbmF0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8IS0tIC8uY2FyZCAtLT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8IS0tIENsb3NlIE1vZGFsIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwgZmFkZVwiIGlkPVwiY2xvc2Vtb2RhbFwiIHRhYmluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1sYWJlbGxlZGJ5PVwiY2xvc2Vtb2RhbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZyBtb2RhbC1sZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+Q2xvc2UgVGlja2V0PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVwic3VibWl0Q2xvc2VUaWNrZXQoKVwiIGRhdGEtdnYtc2NvcGU9XCJjbG9zZXRpY2tldFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgdi1pZj1cInBvcF9tYWNoaW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+RmFyIE5vIDo8L3N0cm9uZz4ge3sgcG9wX21hY2hpbmUuZmFyX25vIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5NYWNoaW5lIE5hbWUgOjwvc3Ryb25nPiB7eyBwb3BfbWFjaGluZS5uYW1lIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5NYWNoaW5lIE1vZGVsIDo8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3BfbWFjaGluZS5tYWNoaW5lX21vZGVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gcG9wX21hY2hpbmUubWFjaGluZV9tb2RlbC5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCItXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+TWFjaGluZSBDaGFzc2lzIE5vIDo8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwb3BfbWFjaGluZS5jaGFzc2lzX25vIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPk1hY2hpbmUgU2wgTm86PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcG9wX21hY2hpbmUubWFjaGluZV9zcl9ubyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+TWFjaGluZSBSZWduIE5vIDo8L3N0cm9uZz4ge3sgcG9wX21hY2hpbmUucmVnbl9ubyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+TWFjaGluZSBFbmdpbmUgTm8gOjwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHBvcF9tYWNoaW5lLmVuZ2luZV9ubyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlRpY2tldCBObyA6PC9zdHJvbmc+IHt7IHBvcF90aWNrZXQgPyBwb3BfdGlja2V0LnRpY2tldF9ubyA6ICctJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgdmVycm9ycy5jbG9zZXRpY2tldCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTZcIiB2LWlmPVwicG9wX3RpY2tldCAmJiBwb3BfdGlja2V0Lmxpa2VseV9kYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5BY3R1YWwgRGF0ZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRhdGV0aW1lIHZhbHVlLXpvbmU9XCJBc2lhL0tvbGthdGFcIiB2LW1vZGVsPVwiZm9ybWNsb3NlLmFjdHVhbF9kYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFjdHVhbF9kYXRlXCIgaW5wdXQtY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaXMtaW52YWxpZCc6IHZlcnJvcnMuaGFzKCdjbG9zZXRpY2tldC5hY3R1YWxfZGF0ZScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XCIgdi12YWxpZGF0ZT1cIidyZXF1aXJlZCdcIiBkYXRhLXZ2LWFzPVwiQWN0dWFsIERhdGVcIiA6bWluLWRhdGV0aW1lPVwibmV3IERhdGUocG9wX3RpY2tldC5jcmVhdGVkX2F0KS50b0lTT1N0cmluZygpXG4gICAgXCIgOm1heC1kYXRldGltZT1cIm5ldyBEYXRlKCkudG9JU09TdHJpbmcoKVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwidmVycm9ycy5oYXMoJ2Nsb3NldGlja2V0LmFjdHVhbF9kYXRlJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB2ZXJyb3JzLmZpcnN0KFwiY2xvc2V0aWNrZXQuYWN0dWFsX2RhdGVcIikgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5NYWNoaW5lIFN0YXR1czwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCB2LW1vZGVsPVwiZm9ybWNsb3NlLm1hY2hpbmVfc3RhdHVzXCIgbmFtZT1cIm1hY2hpbmVfc3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaXMtaW52YWxpZCc6IHZlcnJvcnMuaGFzKCdjbG9zZXRpY2tldC5tYWNoaW5lX3N0YXR1cycpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XCIgdi12YWxpZGF0ZT1cIidyZXF1aXJlZCdcIiBkYXRhLXZ2LWFzPVwibWFjaGluZSBzdGF0dXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJ1bm5pbmdcIj5SdW5uaW5nPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJSdW5uaW5nIHdpdGggUHJvYmxlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUnVubmluZyB3aXRoIFByb2JsZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJOb24gUmVwYWlyYWJsZVwiPk5vbiBSZXBhaXJhYmxlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwidmVycm9ycy5oYXMoJ2Nsb3NldGlja2V0Lm1hY2hpbmVfc3RhdHVzJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB2ZXJyb3JzLmZpcnN0KFwiY2xvc2V0aWNrZXQubWFjaGluZV9zdGF0dXNcIikgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkVzdGltYXRlZCBNYXRlcmlhbCBjb3N0PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHJlYWRvbmx5IDp2YWx1ZT1cInBvcF90aWNrZXQuZXN0aW1hdGVkX21hdGVyaWFsX2Nvc3QgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3BfdGlja2V0LmFkX2VzdGltYXRlZF9tYXRlcmlhbF9jb3N0ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJygnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wX3RpY2tldC5lc3RpbWF0ZWRfbWF0ZXJpYWxfY29zdCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcrJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcF90aWNrZXQuYWRfZXN0aW1hdGVkX21hdGVyaWFsX2Nvc3QgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnKSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5BY3R1YWwgTWF0ZXJpYWwgY29zdDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJmb3JtY2xvc2UuYWN0dWFsX21hdGVyaWFsX2Nvc3RcIiB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhY3R1YWxfbWF0ZXJpYWxfY29zdFwiIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12di1hcz1cIkFjdHVhbCBNYXRlcmlhbCBjb3N0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaXMtaW52YWxpZCc6IHZlcnJvcnMuaGFzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbG9zZXRpY2tldC5hY3R1YWxfbWF0ZXJpYWxfY29zdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cIiA6cmVhZG9ubHk9XCJmb3JtY2xvc2UubWFjaGluZV9zdGF0dXMgPT0gJ05vbiBSZXBhaXJhYmxlJ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwidmVycm9ycy5oYXMoJ2Nsb3NldGlja2V0LmFjdHVhbF9tYXRlcmlhbF9jb3N0JylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB2ZXJyb3JzLmZpcnN0KFwiY2xvc2V0aWNrZXQuYWN0dWFsX21hdGVyaWFsX2Nvc3RcIikgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD4gQWN0dWFsIE1hdGVyaWFsIGNvc3QgRmlsZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgQGNoYW5nZT1cInVwbG9hZE1hdGVyaWFsQ29zdFwiIG11bHRpcGxlIG5hbWU9XCJtYXRlcmlhbF9jb3N0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiZmlsZWFjdHVhbG1hdGVyaWFsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaXMtaW52YWxpZCc6IHZlcnJvcnMuaGFzKCdjbG9zZXRpY2tldC5tYXRlcmlhbF9jb3N0JyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cIiB2LXZhbGlkYXRlPVwiJydcIiBkYXRhLXZ2LWFzPVwiQWN0dWFsIE1hdGVyaWFsIGNvc3RcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNsZWFyZml4XCIgdi1pZj1cInBvcF90aWNrZXQuYWN0dWFsX2VzdGltYXRlZF9tYXRlcmlhbF9maWxlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB2LWZvcj1cIihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSwgeFxuICAgICAgICAgICAgICAgICAgICAgICAgKSBpbiBwb3BfdGlja2V0LmFjdHVhbF9lc3RpbWF0ZWRfbWF0ZXJpYWxfZmlsZXNcIiA6a2V5PVwiaXRlbS5pZFwiIDpocmVmPVwiaXRlbS5maWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiPlZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wX3RpY2tldC5hY3R1YWxfZXN0aW1hdGVkX21hdGVyaWFsX2ZpbGVzLmxlbmd0aCA+IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHggKyAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cInZlcnJvcnMuaGFzKCdjbG9zZXRpY2tldC5tYXRlcmlhbF9jb3N0JylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB2ZXJyb3JzLmZpcnN0KFwiY2xvc2V0aWNrZXQubWF0ZXJpYWxfY29zdFwiKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk1hdGVyaWFsIENvc3QgUE9zPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm1jbG9zZS5tYXRlcmlhbFBPU1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRW50ZXIgUE8gbnVtYmVyc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ2dhYmxlIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC92LXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkVzdGltYXRlZCBTZXJ2aWNlIGNvc3Q8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCA6dmFsdWU9XCJwb3BfdGlja2V0LmVzdGltYXRlZF9zZXJ2aWNlX2Nvc3QgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3BfdGlja2V0LmFkX2VzdGltYXRlZF9zZXJ2aWNlX2Nvc3QgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnKCcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3BfdGlja2V0LmVzdGltYXRlZF9zZXJ2aWNlX2Nvc3QgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnKycgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3BfdGlja2V0LmFkX2VzdGltYXRlZF9zZXJ2aWNlX2Nvc3QgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnKSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHJlYWRvbmx5IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+QWN0dWFsIFNlcnZpY2UgY29zdDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJmb3JtY2xvc2UuYWN0dWFsX3NlcnZpY2VfY29zdFwiIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFjdHVhbF9zZXJ2aWNlX2Nvc3RcIiB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdnYtYXM9XCJBY3R1YWwgU2VydmljZSBjb3N0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaXMtaW52YWxpZCc6IHZlcnJvcnMuaGFzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbG9zZXRpY2tldC5hY3R1YWxfc2VydmljZV9jb3N0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVwiIDpyZWFkb25seT1cImZvcm1jbG9zZS5tYWNoaW5lX3N0YXR1cyA9PSAnTm9uIFJlcGFpcmFibGUnXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJ2ZXJyb3JzLmhhcygnY2xvc2V0aWNrZXQuYWN0dWFsX3NlcnZpY2VfY29zdCcpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJoZWxwLWJsb2NrIGludmFsaWQtZmVlZGJhY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgdmVycm9ycy5maXJzdChcImNsb3NldGlja2V0LmFjdHVhbF9zZXJ2aWNlX2Nvc3RcIikgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD4gQWN0dWFsIFNlcnZpY2UgY29zdCBGaWxlIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgQGNoYW5nZT1cInVwbG9hZFNlcnZpY2VDb3N0XCIgbXVsdGlwbGUgbmFtZT1cInNlcnZpY2VfY29zdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImZpbGVhY3R1YWxzZXJ2aWNlXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaXMtaW52YWxpZCc6IHZlcnJvcnMuaGFzKCdjbG9zZXRpY2tldC5zZXJ2aWNlX2Nvc3QnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVwiIHYtdmFsaWRhdGU9XCInJ1wiIGRhdGEtdnYtYXM9XCJBY3R1YWwgU2VydmljZSBjb3N0XCIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbGVhcmZpeFwiIHYtaWY9XCJwb3BfdGlja2V0LmFjdHVhbF9lc3RpbWF0ZWRfc2VydmljZV9maWxlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB2LWZvcj1cIihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLCB4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSBpbiBwb3BfdGlja2V0LmFjdHVhbF9lc3RpbWF0ZWRfc2VydmljZV9maWxlc1wiIDprZXk9XCJpdGVtLmlkXCIgOmhyZWY9XCJpdGVtLmZpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCI+Vmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3BfdGlja2V0LmFjdHVhbF9lc3RpbWF0ZWRfc2VydmljZV9maWxlcy5sZW5ndGggPiAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB4ICsgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJ2ZXJyb3JzLmhhcygnY2xvc2V0aWNrZXQuc2VydmljZV9jb3N0JylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB2ZXJyb3JzLmZpcnN0KFwiY2xvc2V0aWNrZXQuc2VydmljZV9jb3N0XCIpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U2VydmljZSBDb3N0IFBPczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtY2xvc2Uuc2VydmljZVBPU1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRW50ZXIgUE8gbnVtYmVyc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ2dhYmxlIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC92LXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTZcIiB2LWlmPVwicG9wX21hY2hpbmUuaXNfY29uc3VtdGlvbl9ocl9ydW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkN1cnJlbnQgUnVuIGhvdXIgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cImZvcm1jbG9zZS5jdXJyZW50X3J1bl9ob3VyXCIgbmFtZT1cImN1cnJlbnRfcnVuX2hvdXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiIDpjbGFzcz1cIntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpcy1pbnZhbGlkJzogdmVycm9ycy5oYXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Nsb3NldGlja2V0LmN1cnJlbnRfcnVuX2hvdXInXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XCIgdi12YWxpZGF0ZT1cIntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbDogMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbl92YWx1ZTogcG9wX21hY2hpbmUubGFzdF9tYWludGVuYW5jZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHBvcF9tYWNoaW5lLmxhc3RfbWFpbnRlbmFuY2VzLnJ1bl9ob3VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBwb3BfbWFjaGluZS5sYXN0X2hyX3J1bixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVwiIGRhdGEtdnYtYXM9XCJDdXJyZW50IFJ1biBob3VyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJ2ZXJyb3JzLmhhcygnY2xvc2V0aWNrZXQuY3VycmVudF9ydW5faG91cicpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJoZWxwLWJsb2NrIGludmFsaWQtZmVlZGJhY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgdmVycm9ycy5maXJzdChcImNsb3NldGlja2V0LmN1cnJlbnRfcnVuX2hvdXJcIikgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02XCIgdi1pZj1cInBvcF9tYWNoaW5lLmlzX2NvbnN1bXRpb25fa21fcnVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD4gQ3VycmVudCBLTSBSdW4gPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cImZvcm1jbG9zZS5jdXJyZW50X2ttX3J1blwiIG5hbWU9XCJjdXJyZW50X2ttX3J1blwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwie1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lzLWludmFsaWQnOiB2ZXJyb3JzLmhhcygnY2xvc2V0aWNrZXQuY3VycmVudF9rbV9ydW4nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVwiIHYtdmFsaWRhdGU9XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWw6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5fdmFsdWU6IHBvcF9tYWNoaW5lLmxhc3RfbWFpbnRlbmFuY2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBwb3BfbWFjaGluZS5sYXN0X21haW50ZW5hbmNlcy5rbV9ydW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHBvcF9tYWNoaW5lLmxhc3Rfa21fcnVuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XCIgZGF0YS12di1hcz1cIkN1cnJlbnQgS00gaG91clwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwidmVycm9ycy5oYXMoJ2Nsb3NldGlja2V0LmN1cnJlbnRfa21fcnVuJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB2ZXJyb3JzLmZpcnN0KFwiY2xvc2V0aWNrZXQuY3VycmVudF9rbV9ydW5cIikgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02XCIgdi1pZj1cInBvcF9tYWNoaW5lLmlzX3Byb2R1Y3Rpb25fZmlnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD4gQ3VycmVudCBQcm9kdWN0aW9uIGZpZyA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwiZm9ybWNsb3NlLmN1cnJlbnRfcHJvZHVjdGlvbl9maWdcIiBuYW1lPVwiY3VycmVudF9wcm9kdWN0aW9uX2ZpZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgOmNsYXNzPVwie1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lzLWludmFsaWQnOiB2ZXJyb3JzLmhhcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xvc2V0aWNrZXQuY3VycmVudF9wcm9kdWN0aW9uX2ZpZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cIiB2LXZhbGlkYXRlPVwie1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluX3ZhbHVlOiBwb3BfbWFjaGluZS5sYXN0X21haW50ZW5hbmNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gcG9wX21hY2hpbmUubGFzdF9tYWludGVuYW5jZXMucHJvZHVjdGlvbl9maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHBvcF9tYWNoaW5lLnBlcmlvZGljX21haW50ZW5hbmNlX2JyZWFrZG93bixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVwiIGRhdGEtdnYtYXM9XCJDdXJyZW50IFByb2R1Y3Rpb24gZmlnXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJ2ZXJyb3JzLmhhcygnY2xvc2V0aWNrZXQuY3VycmVudF9wcm9kdWN0aW9uX2ZpZycpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJoZWxwLWJsb2NrIGludmFsaWQtZmVlZGJhY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgdmVycm9ycy5maXJzdChcImNsb3NldGlja2V0LmN1cnJlbnRfcHJvZHVjdGlvbl9maWdcIikgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTZcIiB2LWlmPVwiZm9ybWNsb3NlLnRpY2tldF90eXBlID09ICdCcmVha2Rvd24gTWFpbnRlbmFuY2UnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Qcm9kdWN0aW9uIExvc3M8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwiZm9ybWNsb3NlLnByb2R1Y3Rpb25fbG9zc1wiIG5hbWU9XCJwcm9kdWN0aW9uX2xvc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiIDpjbGFzcz1cIntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpcy1pbnZhbGlkJzogdmVycm9ycy5oYXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Nsb3NldGlja2V0LnByb2R1Y3Rpb25fbG9zcydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cIiB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiIGRhdGEtdnYtYXM9XCJQcm9kdWN0aW9uIExvc3NcIiAgcmVhZG9ubHkvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cInZlcnJvcnMuaGFzKCdjbG9zZXRpY2tldC5wcm9kdWN0aW9uX2xvc3MnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHZlcnJvcnMuZmlyc3QoXCJjbG9zZXRpY2tldC5wcm9kdWN0aW9uX2xvc3NcIikgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02XCIgdi1pZj1cImZvcm1jbG9zZS50aWNrZXRfdHlwZSA9PSAnQnJlYWtkb3duIE1haW50ZW5hbmNlJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UHJvZHVjdGlvbiBsb3NzIGFtb3VudDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJmb3JtY2xvc2UucHJvZHVjdGlvbl9sb3NzX2Ftb3VudFwiIG5hbWU9XCJwcm9kdWN0aW9uX2xvc3NfYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaXMtaW52YWxpZCc6IHZlcnJvcnMuaGFzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbG9zZXRpY2tldC5wcm9kdWN0aW9uX2xvc3NfYW1vdW50J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVwiIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCIgZGF0YS12di1hcz1cIkN1cnJlbnQgUHJvZHVjdGlvbiBmaWdcIiByZWFkb25seS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwidmVycm9ycy5oYXMoJ2Nsb3NldGlja2V0LnByb2R1Y3Rpb25fbG9zc19hbW91bnQnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHZlcnJvcnMuZmlyc3QoXCJjbG9zZXRpY2tldC5wcm9kdWN0aW9uX2xvc3NfYW1vdW50XCIpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Sb290IENhdXNlIEFuYWx5c2lzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgcm93cz1cIjFcIiB2LW1vZGVsPVwiZm9ybWNsb3NlLnJjYVwiIG5hbWU9XCJyY2FcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIDpjbGFzcz1cIntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lzLWludmFsaWQnOiB2ZXJyb3JzLmhhcygnY2xvc2V0aWNrZXQucmNhJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVwiIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJ2ZXJyb3JzLmhhcygnY2xvc2V0aWNrZXQucmNhJylcIiBjbGFzcz1cImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB2ZXJyb3JzLmZpcnN0KFwiY2xvc2V0aWNrZXQucmNhXCIpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDbG9zZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdi1pZj1cImNsb3NlX2J0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDbG9zZSBUaWNrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIHYtZWxzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvY2Vzc2luZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPCEtLVZpZXcgTW9kYWwtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsIGZhZGVcIiBpZD1cInZpZXdtb2RhbFwiIHRhYmluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1sYWJlbGxlZGJ5PVwidmlld21vZGFsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nIG1vZGFsLWxnXCIgcm9sZT1cImRvY3VtZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwibW9kYWwtdGl0bGVcIj5WaWV3IFRpY2tldDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiIHYtaWY9XCJwb3BfdGlja2V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00IGJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TWFjaGluZSBTaXRlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cInNpdGVfbmFtZVwiIDpyZWR1Y2U9XCIob3B0aW9uKSA9PiBvcHRpb24uaWRcIiA6b3B0aW9ucz1cInNpdGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNob29zZSBTaXRlIC4uLlwiIHYtbW9kZWw9XCJwb3BfdGlja2V0LnNpdGVfaWRcIiBkaXNhYmxlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNCBic1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk1hY2hpbmUgQ2F0ZWdvcnk8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVwibmFtZVwiIDpyZWR1Y2U9XCIob3B0aW9uKSA9PiBvcHRpb24uaWRcIiA6b3B0aW9ucz1cImNhdGVnb3JpZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2hvb3NlIENhdGVnb3J5IC4uLlwiIHYtbW9kZWw9XCJwb3BfdGlja2V0LmNhdGVnb3J5X2lkXCIgZGlzYWJsZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTQgYnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5NYWNoaW5lIERlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cIm5hbWVcIiA6cmVkdWNlPVwiKG9wdGlvbikgPT4gb3B0aW9uLmlkXCIgOm9wdGlvbnM9XCJzdWJfY2F0ZWdvcmllc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDaG9vc2UgZGVzY3JpcHRpb24gLi4uXCIgdi1tb2RlbD1cInBvcF90aWNrZXQuc3ViX2NhdGVnb3J5X2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3ViX2NhdGVnb3J5X2lkXCIgOmRpc2FibGVkPVwicG9wX3RpY2tldC5pZCAhPSAnJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00IGJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9XCJtYXJnaW46IDBcIj4gTWFjaGluZSA6IDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkZhciBObyA6PC9zdHJvbmc+IHt7IHBvcF90aWNrZXQubWFjaGluZS5mYXJfbm8gfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5NYWNoaW5lIE5hbWUgOjwvc3Ryb25nPiB7eyBwb3BfdGlja2V0Lm1hY2hpbmUubmFtZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPk1hY2hpbmUgQ2hhc3NpcyBObyA6PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwb3BfdGlja2V0Lm1hY2hpbmUuY2hhc3Npc19ubyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPk1hY2hpbmUgU2wgTm86PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwb3BfdGlja2V0Lm1hY2hpbmUubWFjaGluZV9zcl9ubyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPk1hY2hpbmUgUmVnbiBObyA6PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwb3BfdGlja2V0Lm1hY2hpbmUucmVnbl9ubyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPk1hY2hpbmUgRW5naW5lIE5vIDo8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHBvcF90aWNrZXQubWFjaGluZS5lbmdpbmVfbm8gfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTQgYnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgbWItMFwiIHYtaWY9XCJwb3BfdGlja2V0Lm1haW50ZW5hbmNlX3Byb3ZpZGVyID09ICd2ZW5kb3InICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3BfdGlja2V0LnNlcnZpY2VfdHlwZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U2VydmljZSBUeXBlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHBvcF90aWNrZXQuc2VydmljZV90eXBlIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIG1iLTBcIiB2LWlmPVwicG9wX3RpY2tldC5zZXJ2aWNlX3R5cGUgPT0gJ0ZyZWUgU2VydmljZScgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcF90aWNrZXQuZnJlZV9zZXJ2aWNlX25vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5GcmVlIHNlcnZpY2Ugbm86PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHBvcF90aWNrZXQuZnJlZV9zZXJ2aWNlX25vIH19L3t7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wX3RpY2tldC5tYWNoaW5lLmZyZWVfc2VydmljZV9ub1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgbWItMFwiIHYtaWY9XCJwb3BfdGlja2V0LnRpY2tldF90eXBlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+VGlja2V0IFR5cGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcG9wX3RpY2tldC50aWNrZXRfdHlwZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgbWItMFwiIHYtaWY9XCJwb3BfdGlja2V0LnN0YXR1c19kdXJpbmdfY29tcGxhaW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U3RhdHVzIER1cmluZyBDb21wbGFpbjogPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHBvcF90aWNrZXQuc3RhdHVzX2R1cmluZ19jb21wbGFpbnQgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT1cIm1hcmdpbjogMFwiPk1hY2hpbmUncyBQcm9ibGVtOiA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcG9wX3RpY2tldC5wcm9ibGVtX2Rlc2NyaXB0aW9uIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00IGJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIG1iLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5NYWludGVuYW5jZSBQcm92aWRlcjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwb3BfdGlja2V0Lm1haW50ZW5hbmNlX3Byb3ZpZGVyIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wX3RpY2tldC5tYWludGVuYW5jZV9wcm92aWRlciA9PSBcInVzZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiVXNlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJWZW5kb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJwb3BfdGlja2V0Lm1haW50ZW5hbmNlX3Byb3ZpZGVyID09ICd2ZW5kb3InXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtZm9yPVwiKHZlbmRvciwgaW5kZXgpIGluIHBvcF90aWNrZXQuYWxsX3ZlbmRvcnNcIiA6a2V5PVwiJ3ZtJyArIGluZGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjb21tYVwiPnt7IHZlbmRvci5uYW1lIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29tbWFcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XCJuYW1lXCIgOnJlZHVjZT1cIihvcHRpb24pID0+IG9wdGlvbi5pZFwiIDpvcHRpb25zPVwidXNlcnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHVzZXJzIC4uLlwiIHYtbW9kZWw9XCJwb3BfdGlja2V0LnVzZXJfaWRcIiBkaXNhYmxlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTggYnNcIiB2LWlmPVwicG9wX3RpY2tldC5zdGFnZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPVwibWFyZ2luOiAwcHhcIj5TdGFnZXM8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCIoZmllbGQsIHgpIGluIHBvcF90aWNrZXQuc3RhZ2VzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgOmtleT1cIidzJyArIHhcIiBzdHlsZT1cImJvcmRlcjogMDsgcGFkZGluZy1ib3R0b206IDhweFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBmaWVsZC5zdGFnZV9ubyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBmaWVsZC5zdGFnZV9kYXRlIHwgbXlEYXRlIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGZpZWxkLmRlc2NyaXB0aW9uIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNCBic1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPVwibWFyZ2luOiAwXCI+TWFjaGluZSdzIEFkZGl0aW9uYWwgUHJvYmxlbTogPC9sYWJlbD48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJwb3BfdGlja2V0LnByb2JsZW1zXCIgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIHBvcF90aWNrZXQucHJvYmxlbXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCIncGEnICsgaW5kZXhcIiB2LWh0bWw9XCJpdGVtLnByb2JsZW1cIj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zIGJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9XCJtYXJnaW46IDBcIj5Fc3RpbWF0ZWQgTWF0ZXJpYWwgY29zdDo8L2xhYmVsPjxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocG9wX3RpY2tldC5lc3RpbWF0ZWRfbWF0ZXJpYWxfY29zdCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcF90aWNrZXQuYWRfZXN0aW1hdGVkX21hdGVyaWFsX2Nvc3QpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0b0N1cnJlbmN5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wX3RpY2tldC5lc3RpbWF0ZWRfbWF0ZXJpYWxfY29zdCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIrXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcF90aWNrZXQuYWRfZXN0aW1hdGVkX21hdGVyaWFsX2Nvc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgbXItMlwiIDpocmVmPVwiZmlsZS5maWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCIoZmlsZSwgeCkgaW4gcG9wX3RpY2tldC5lc3RpbWF0ZWRfbWF0ZXJpYWxfZmlsZXNcIiA6a2V5PVwiZmlsZS5pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiPlZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcF90aWNrZXQuZXN0aW1hdGVkX21hdGVyaWFsX2ZpbGVzLmxlbmd0aCA+IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8geCArIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zIGJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9XCJtYXJnaW46IDBcIj5Fc3RpbWF0ZWQgU2VydmljZSBjb3N0OiA8L2xhYmVsPjxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocG9wX3RpY2tldC5lc3RpbWF0ZWRfc2VydmljZV9jb3N0ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wX3RpY2tldC5hZF9lc3RpbWF0ZWRfc2VydmljZV9jb3N0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdG9DdXJyZW5jeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh7e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcF90aWNrZXQuZXN0aW1hdGVkX3NlcnZpY2VfY29zdCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIrXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcF90aWNrZXQuYWRfZXN0aW1hdGVkX3NlcnZpY2VfY29zdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBtci0yXCIgOmhyZWY9XCJmaWxlLmZpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIihmaWxlLCB4KSBpbiBwb3BfdGlja2V0LmVzdGltYXRlZF9zZXJ2aWNlX2ZpbGVzXCIgOmtleT1cImZpbGUuaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIj5WaWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3BfdGlja2V0LmVzdGltYXRlZF9zZXJ2aWNlX2ZpbGVzLmxlbmd0aCA+IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8geCArIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zIGJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+QWN0dWFsIE1hdGVyaWFsIENvc3QgOiA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cInBvcF90aWNrZXQuYWN0dWFsX21hdGVyaWFsX2Nvc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwb3BfdGlja2V0LmFjdHVhbF9tYXRlcmlhbF9jb3N0IHwgdG9DdXJyZW5jeSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIG1yLTJcIiA6aHJlZj1cImZpbGUuZmlsZVwiIHYtZm9yPVwiKFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZSwgeFxuICAgICAgICAgICAgICAgICAgICAgICkgaW4gcG9wX3RpY2tldC5hY3R1YWxfZXN0aW1hdGVkX21hdGVyaWFsX2ZpbGVzXCIgOmtleT1cImZpbGUuaWRcIiB0YXJnZXQ9XCJfYmxhbmtcIj5WaWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3BfdGlja2V0LmFjdHVhbF9lc3RpbWF0ZWRfbWF0ZXJpYWxfZmlsZXMubGVuZ3RoID4gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB4ICsgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIiB2LWlmPVwicG9wX3RpY2tldC5tYXRlcmlhbF9wb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk1hdGVyaWFsIENvc3QgUE8gTm86IDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLXNlY29uZGFyeVwiIHYtZm9yPVwiKGRhdGEsIHgpIGluIHBvcF90aWNrZXQubWF0ZXJpYWxfcG9cIiBzdHlsZT1cIm1hcmdpbi1yaWdodDozcHg7XCI+e3tkYXRhLm5hbWV9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTMgYnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5BY3R1YWwgU2VydmljZSBDb3N0IDogPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJwb3BfdGlja2V0LmFjdHVhbF9zZXJ2aWNlX2Nvc3RcIj57e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcF90aWNrZXQuYWN0dWFsX3NlcnZpY2VfY29zdCB8IHRvQ3VycmVuY3lcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgbXItMlwiIDpocmVmPVwiZmlsZS5maWxlXCIgdi1mb3I9XCIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlLCB4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgaW4gcG9wX3RpY2tldC5hY3R1YWxfZXN0aW1hdGVkX3NlcnZpY2VfZmlsZXNcIiA6a2V5PVwiZmlsZS5pZFwiIHRhcmdldD1cIl9ibGFua1wiPlZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcF90aWNrZXQuYWN0dWFsX2VzdGltYXRlZF9zZXJ2aWNlX2ZpbGVzLmxlbmd0aCA+IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8geCArIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCIgdi1pZj1cInBvcF90aWNrZXQuc2VydmljZV9wb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlNlcnZpY2UgQ29zdCBQTyBObzogPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2UgYmFkZ2Utc2Vjb25kYXJ5XCIgdi1mb3I9XCIoZGF0YSwgeCkgaW4gcG9wX3RpY2tldC5zZXJ2aWNlX3BvXCIgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6M3B4O1wiPnt7ZGF0YS5uYW1lfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00IGJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9XCJtYXJnaW46IDBcIj5UaWNrZXQgTm8gOiA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcG9wX3RpY2tldC50aWNrZXRfbm8gfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00IGJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9XCJtYXJnaW46IDBcIj5MaWtlbHkgRGF0ZSA6IDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwb3BfdGlja2V0Lmxpa2VseV9kYXRlIHwgbXlEYXRlIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00IGJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9XCJtYXJnaW46IDBcIj5BY3R1YWwgRGF0ZSA6IDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwb3BfdGlja2V0LmFjdHVhbF9kYXRlIHwgbXlEYXRlIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00IGJzXCIgdi1pZj1cInBvcF90aWNrZXQuY3VycmVudF9ydW5faG91clwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkN1cnJlbnQgUnVuIEhvdXIgOiA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcG9wX3RpY2tldC5jdXJyZW50X3J1bl9ob3VyIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNCBic1wiIHYtaWY9XCJwb3BfdGlja2V0LmN1cnJlbnRfa21fcnVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q3VycmVudCBLTSBIb3VyIDogPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHBvcF90aWNrZXQuY3VycmVudF9rbV9ydW4gfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00IGJzXCIgdi1pZj1cInBvcF90aWNrZXQuY3VycmVudF9wcm9kdWN0aW9uX2ZpZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkN1cnJlbnQgUHJvZHVjdGlvbiBGaWcgOiA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcG9wX3RpY2tldC5jdXJyZW50X3Byb2R1Y3Rpb25fZmlnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNCBic1wiIHYtaWY9XCJwb3BfdGlja2V0LnByb2R1Y3Rpb25fbG9zc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlByb2R1Y3Rpb24gTG9zcyA6IDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwb3BfdGlja2V0LnByb2R1Y3Rpb25fbG9zcyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTQgYnNcIiB2LWlmPVwicG9wX3RpY2tldC5wcm9kdWN0aW9uX2xvc3NfYW1vdW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UHJvZHVjdGlvbiBMb3NzIEFtb3VudCA6IDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwb3BfdGlja2V0LnByb2R1Y3Rpb25fbG9zc19hbW91bnQgfCB0b0N1cnJlbmN5IH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgVnVlUmVhZE1vcmVTbW9vdGggZnJvbSBcInZ1ZS1yZWFkLW1vcmUtc21vb3RoXCI7XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29tcG9uZW50czogeyBWdWVSZWFkTW9yZVNtb290aCB9LFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjbG9zZV9idG46IHRydWUsXG4gICAgICAgICAgICBhZGRpdGlvbmFsTW9yZTogW10sXG4gICAgICAgICAgICBwcm9ibGVtc01vcmU6IFtdLFxuICAgICAgICAgICAgc2VhcmNoX21hY2hpbmVzOiBbXSxcbiAgICAgICAgICAgIHNlYXJjaF9zaXRlczogW10sXG4gICAgICAgICAgICBzZWFyY2g6IHtcbiAgICAgICAgICAgICAgICBwYWdlOiAxLFxuICAgICAgICAgICAgICAgIG1hY2hpbmVfaWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgc2l0ZV9pZDogXCJcIixcbiAgICAgICAgICAgICAgICBjb21wbGFpbnRfbmF0dXJlOiBcIlwiLFxuICAgICAgICAgICAgICAgIHRpY2tldF90eXBlOlwiXCIsXG4gICAgICAgICAgICAgICAgdGlja2V0OiBcIlwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBvcHRpY2tldDoge30sXG4gICAgICAgICAgICBjYXRlZ29yaWVzOiBbXSxcbiAgICAgICAgICAgIHN1Yl9jYXRlZ29yaWVzOiBbXSxcbiAgICAgICAgICAgIHNpdGVzOiBbXSxcbiAgICAgICAgICAgIHNlbGVjdGVkX21hY2hpbmU6IFwiXCIsXG4gICAgICAgICAgICB1c2VyczogW10sXG4gICAgICAgICAgICBtYWNoaW5lczogW10sXG4gICAgICAgICAgICBUaWNrZXRzOiB7fSxcbiAgICAgICAgICAgIGVkaXRtb2RlOiBmYWxzZSxcbiAgICAgICAgICAgIE1hdGVyaWFsQ29zdDogbnVsbCxcbiAgICAgICAgICAgIFNlcnZpY2VDb3N0OiBudWxsLFxuICAgICAgICAgICAgZm9ybTogbmV3IEZvcm0oe1xuICAgICAgICAgICAgICAgIGlkOiBcIlwiLFxuICAgICAgICAgICAgICAgIHNpdGVfaWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlfaWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3ViX2NhdGVnb3J5X2lkOiBcIlwiLFxuICAgICAgICAgICAgICAgIGZyZWVfc2VydmljZV9ubzogXCJcIixcbiAgICAgICAgICAgICAgICB0aWNrZXRfdHlwZTogXCJQZXJpb2RpYyBNYWludGVuYW5jZVwiLFxuICAgICAgICAgICAgICAgIHNlcnZpY2VfdHlwZTogXCJQYWlkIFNlcnZpY2VcIixcbiAgICAgICAgICAgICAgICBtYWNoaW5lX2lkOiBcIlwiLFxuICAgICAgICAgICAgICAgIHRpY2tldF9ubzogXCJcIixcbiAgICAgICAgICAgICAgICB2ZW5kb3JfaWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgdXNlcl9pZDogXCJcIixcbiAgICAgICAgICAgICAgICBsaWtlbHlfZGF0ZTogXCJcIixcbiAgICAgICAgICAgICAgICBlc3RpbWF0ZWRfbWF0ZXJpYWxfY29zdDogXCJcIixcbiAgICAgICAgICAgICAgICBlc3RpbWF0ZWRfc2VydmljZV9jb3N0OiBcIlwiLFxuICAgICAgICAgICAgICAgIG1haW50ZW5hbmNlX3Byb3ZpZGVyOiBcInZlbmRvclwiLFxuICAgICAgICAgICAgICAgIHByb2JsZW1fZGVzY3JpcHRpb246IFwiXCIsXG4gICAgICAgICAgICAgICAgY29tcGxhaW50X25hdHVyZTogXCJNYWpvclwiLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBzdGFnZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBzdGFnZV9ubzogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgc3RhZ2VfZGF0ZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGZpbGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIG5ld19maWxlOiBcIlwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuXG4gICAgICAgICAgICBmb3JtY2xvc2U6IG5ldyBGb3JtKHtcbiAgICAgICAgICAgICAgICBpZDogXCJcIixcbiAgICAgICAgICAgICAgICBtYWNoaW5lX3N0YXR1czogXCJcIixcbiAgICAgICAgICAgICAgICBlZGl0X3R5cGU6IFwiY2xvc2V0aWNrZXRcIixcbiAgICAgICAgICAgICAgICB0aWNrZXRfdHlwZTogXCJQZXJpb2RpYyBNYWludGVuYW5jZVwiLFxuICAgICAgICAgICAgICAgIGFjdHVhbF9kYXRlOiBcIlwiLFxuICAgICAgICAgICAgICAgIGFjdHVhbF9tYXRlcmlhbF9jb3N0OiBcIlwiLFxuICAgICAgICAgICAgICAgIGFjdHVhbF9zZXJ2aWNlX2Nvc3Q6IFwiXCIsXG4gICAgICAgICAgICAgICAgY3VycmVudF9ydW5faG91cjogXCJcIixcbiAgICAgICAgICAgICAgICBjdXJyZW50X2ttX3J1bjogXCJcIixcbiAgICAgICAgICAgICAgICBjdXJyZW50X3Byb2R1Y3Rpb25fZmlnOiBcIlwiLFxuICAgICAgICAgICAgICAgIHByb2R1Y3Rpb25fbG9zczogXCJcIixcbiAgICAgICAgICAgICAgICBwcm9kdWN0aW9uX2xvc3NfYW1vdW50OiBcIlwiLFxuICAgICAgICAgICAgICAgIHN0YXR1czogXCJDbG9zZWRcIixcbiAgICAgICAgICAgICAgICB2ZW5kb3JfcmVzb2x2ZV9kYXRlOiBcIlwiLFxuICAgICAgICAgICAgICAgIHZlbmRvcl9hdHRhaW5fZGF0ZTogXCJcIixcbiAgICAgICAgICAgICAgICB2ZW5kb3JfcmVzcG9uc2VfZGF0ZTogXCJcIixcbiAgICAgICAgICAgICAgICB2ZW5kb3JfY2FsbF9kYXRlOiBcIlwiLFxuICAgICAgICAgICAgICAgIHJjYTogXCJcIixcbiAgICAgICAgICAgICAgICBtYXRlcmlhbFBPUzogXCJcIixcbiAgICAgICAgICAgICAgICBzZXJ2aWNlUE9TOiBcIlwiXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHBvcF9tYWNoaW5lOiBcIlwiLFxuICAgICAgICAgICAgcG9wX3RpY2tldDogXCJcIixcbiAgICAgICAgICAgIG9wbl9zdGFnZTogW1xuICAgICAgICAgICAgICAgIFwiVmVuZG9yIGNyZWF0ZWRcIixcbiAgICAgICAgICAgICAgICBcIlZlbmRvciBBc3NpZ25lZFwiLFxuICAgICAgICAgICAgICAgIFwiT3JkZXIgaXNzdWVkXCIsXG4gICAgICAgICAgICAgICAgXCJQYXltZW50IHVuZGVyIHByb2Nlc3NcIixcbiAgICAgICAgICAgICAgICBcIlBheW1lbnQgRG9uZVwiLFxuICAgICAgICAgICAgICAgIFwiTG9naXN0aWNzIHVuZGVyIHByb2Nlc3NcIixcbiAgICAgICAgICAgICAgICBcIk1hdGVyaWFscyBkZXNwYXRjaGVkXCIsXG4gICAgICAgICAgICAgICAgXCJNYXRlcmlhbCByZWNlaXZlZCBhdCBzaXRlXCIsXG4gICAgICAgICAgICAgICAgXCJNYWludGFpbmFjZSB1bmRlciBwcm9ncmVzc1wiLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGxhc3Rfc3RhZ2VfaW5kZXg6IDAsXG4gICAgICAgICAgICBsYXN0X3N0YWdlX2RhdGU6IFwiXCIsXG5cbiAgICAgICAgICAgIGpzb25fZmllbGRzOiB7XG4gICAgICAgICAgICAgICAgXCJUaWNrZXQgTm9cIjogXCJ0aWNrZXRfbm9cIixcbiAgICAgICAgICAgICAgICBcIlRpY2tldCBUeXBlXCI6IFwidGlja2V0X3R5cGVcIixcbiAgICAgICAgICAgICAgICBNYWNoaW5lOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiBcIm1hY2hpbmVcIixcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6ICh2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWwubmFtZSArIFwiIC0gXCIgKyB2YWwuZmFyX25vO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJMaWtlbHkgRGF0ZVwiOiBcImxpa2VseV9kYXRlXCIsXG4gICAgICAgICAgICAgICAgXCJSZXZlcnNpb24gRGF0ZVwiOiBcInJldmVyc2lvbl9kYXRlXCIsXG4gICAgICAgICAgICAgICAgXCJSZXZlcnNpb24gUmVhc29uXCI6IFwicmV2ZXJzaW9uX3JlYXNvblwiLFxuICAgICAgICAgICAgICAgIFwiRXN0aW1hdGVkIE1hdGVyaWFsIENvc3RcIjogXCJlc3RpbWF0ZWRfbWF0ZXJpYWxfY29zdFwiLFxuICAgICAgICAgICAgICAgIFwiRXN0aW1hdGVkIFNlcnZpY2UgQ29zdFwiOiBcImVzdGltYXRlZF9zZXJ2aWNlX2Nvc3RcIixcbiAgICAgICAgICAgICAgICBcIkFjdHVhbCBEYXRlXCI6IFwiYWN0dWFsX2RhdGVcIixcbiAgICAgICAgICAgICAgICBcIkFjdHVhbCBNYXRlcmlhbCBDb3N0XCI6IFwiYWN0dWFsX21hdGVyaWFsX2Nvc3RcIixcbiAgICAgICAgICAgICAgICBcIkFjdHVhbCBTZXJ2aWNlIENvc3RcIjogXCJhY3R1YWxfc2VydmljZV9jb3N0XCIsXG4gICAgICAgICAgICAgICAgXCJTdGF0dXNcIjogXCJzdGF0dXNcIixcbiAgICAgICAgICAgICAgICBcIlNlcnZpY2UgVHlwZVwiOiBcInNlcnZpY2VfdHlwZVwiLFxuICAgICAgICAgICAgICAgIFwiTWFpbnRlbmFuY2UgUHJvdmlkZXJcIjogXCJtYWludGVuYW5jZV9wcm92aWRlclwiLFxuICAgICAgICAgICAgICAgIFwiUHJvYmxlbSBEZXNjcmlwdGlvblwiOiBcInByb2JsZW1fZGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgICAgICBcIkNvbXBsYWludCBOYXR1cmVcIjogXCJjb21wbGFpbnRfbmF0dXJlXCIsXG4gICAgICAgICAgICAgICAgXCJTdGF0dXMgRHVyaW5nIENvbXBsYWludFwiOiBcInN0YXR1c19kdXJpbmdfY29tcGxhaW50XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAganNvbl9tZXRhOiBbXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiY2hhcnNldFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwidXRmLThcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgdG9nZ2xlRXhwYW5kKGRhdGEsIGluZGV4KSB7XG4gICAgICBjb25zdCBpdGVtSW5kZXggPSBkYXRhLmluZGV4T2YoaW5kZXgpO1xuICAgICAgaWYgKGl0ZW1JbmRleCA9PT0gLTEpIHtcbiAgICAgICAgZGF0YS5wdXNoKGluZGV4KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGEuc3BsaWNlKGl0ZW1JbmRleCwgMSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBpc0V4cGFuZGVkKGluZGV4KSB7XG4gICAgICByZXR1cm4gZGF0YS5pbmNsdWRlcyhpbmRleCk7XG4gICAgfSxcbiAgICBnZXRUcnVuY2F0ZWRUZXh0KHRleHQsIGxlbmd0aCA9IDUwKSB7XG4gICAgICByZXR1cm4gdGV4dC5sZW5ndGggPiBsZW5ndGggPyB0ZXh0LnN1YnN0cmluZygwLCBsZW5ndGgpICsgJy4uLicgOiB0ZXh0O1xuICAgIH0sXG4gICAgICAgIGFzeW5jIHJlc2V0X2ZpbHRlcigpIHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoID0ge1xuICAgICAgICAgICAgICAgIHBhZ2U6IDEsXG4gICAgICAgICAgICAgICAgbWFjaGluZV9pZDogXCJcIixcbiAgICAgICAgICAgICAgICBzaXRlX2lkOiBcIlwiLFxuICAgICAgICAgICAgICAgIGNvbXBsYWludF9uYXR1cmU6IFwiXCIsXG4gICAgICAgICAgICAgICAgdGlja2V0X3R5cGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgdGlja2V0OiBcIlwiLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBhc3luYyBleHBvcnRfY3N2KCkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXCJhcGkvdGlja2V0P2V4cG9ydD0xXCIsIHtcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoOiB0aGlzLnNlYXJjaCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YS5kYXRhO1xuICAgICAgICB9LFxuICAgICAgICBzdGFydERvd25sb2FkKCkge1xuICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJQbGVhc2UgV2FpdCAhXCIsXG4gICAgICAgICAgICAgICAgaHRtbDogXCJEYXRhIHBvcHVsYXRpbmdcIiwgLy8gYWRkIGh0bWwgYXR0cmlidXRlIGlmIHlvdSB3YW50IG9yIHJlbW92ZVxuICAgICAgICAgICAgICAgIGFsbG93T3V0c2lkZUNsaWNrOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBvbkJlZm9yZU9wZW46ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgU3dhbC5zaG93TG9hZGluZygpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZmluaXNoRG93bmxvYWQoKSB7XG4gICAgICAgICAgICBTd2FsLmNsb3NlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHNjbGljayh4LCBwID0gXCJcIikge1xuICAgICAgICAgICAgaWYgKHApIHtcbiAgICAgICAgICAgICAgICBsZXQgYSA9IHRoaXMucHJvYmxlbXNNb3JlW3hdID8gZmFsc2UgOiB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLnByb2JsZW1zTW9yZSwgeCwgYSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBhID0gdGhpcy5hZGRpdGlvbmFsTW9yZVt4XSA/IGZhbHNlIDogdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5hZGRpdGlvbmFsTW9yZSwgeCwgYSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGdldExhYmVsKHZhbCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsLmZhcl9ubyArIFwiIC0gXCIgKyB2YWwubmFtZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdmlld01vZGFsKHRpY2tldCkge1xuICAgICAgICAgICAgdGhpcy5wb3BfdGlja2V0ID0gXCJcIjtcblxuICAgICAgICAgICAgYXhpb3NcbiAgICAgICAgICAgICAgICAuZ2V0KFwiYXBpL3RpY2tldC9cIiArIHRpY2tldC5pZClcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9wX3RpY2tldCA9IHJlcy5kYXRhLmRhdGE7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcF90aWNrZXQgPSB0aWNrZXQ7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGF4aW9zLmdldChcImFwaS9jYXRlZ29yeS9cIiArIHRpY2tldC5jYXRlZ29yeV9pZCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJfY2F0ZWdvcmllcyA9IHJlcy5kYXRhLmRhdGE7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICQoXCIjdmlld21vZGFsXCIpLm1vZGFsKFwic2hvd1wiKTtcbiAgICAgICAgfSxcbiAgICAgICAgQWRkU3RhZ2UoKSB7XG4gICAgICAgICAgICB0aGlzLnN0YWdlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBpZDogXCJcIixcbiAgICAgICAgICAgICAgICBzdGFnZV9ubzogXCJcIixcbiAgICAgICAgICAgICAgICBzdGFnZV9kYXRlOiBcIlwiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgICAgICAgICAgICAgIGZpbGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgbmV3X2ZpbGU6IFwiXCIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgY2hvb3NlX3N0YWdlX2ZpbGUoZXZlbnQsIHgpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhZ2VzW3hdLm5ld19maWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgICB9LFxuXG4gICAgICAgIGFzeW5jIHVwbG9hZE1hdGVyaWFsQ29zdChldmVudCkge1xuICAgICAgICAgICAgdGhpcy5NYXRlcmlhbENvc3QgPSBldmVudC50YXJnZXQuZmlsZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIHVwbG9hZFNlcnZpY2VDb3N0KGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLlNlcnZpY2VDb3N0ID0gZXZlbnQudGFyZ2V0LmZpbGVzO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldFJlc3VsdHMocGFnZSA9IDEpIHtcbiAgICAgICAgICAgIHRoaXMuJFByb2dyZXNzLnN0YXJ0KCk7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaC5wYWdlID0gcGFnZTtcbiAgICAgICAgICAgIGF4aW9zXG4gICAgICAgICAgICAgICAgLmdldChcIi9hcGkvdGlja2V0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB0aGlzLnNlYXJjaCxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVGlja2V0cyA9IGRhdGEuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZGl0aW9uYWxNb3JlID0gbmV3IEFycmF5KHRoaXMuVGlja2V0cy5kYXRhLmxlbmd0aCkuZmlsbChmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvYmxlbXNNb3JlID0gbmV3IEFycmF5KHRoaXMuVGlja2V0cy5kYXRhLmxlbmd0aCkuZmlsbChmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLiRQcm9ncmVzcy5maW5pc2goKTtcbiAgICAgICAgfSxcblxuICAgICAgICBjYWxjdWxhdGVfbG9zcygpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm1jbG9zZS5hY3R1YWxfZGF0ZSAmJiB0aGlzLnBvcF90aWNrZXQuY3JlYXRlZF9hdCkge1xuICAgICAgICAgICAgICAgIGxldCBhID0gbmV3IERhdGUodGhpcy5mb3JtY2xvc2UuYWN0dWFsX2RhdGUpLnRvSVNPU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgbGV0IGIgPSBuZXcgRGF0ZSh0aGlzLnBvcF90aWNrZXQuY3JlYXRlZF9hdCkudG9JU09TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlQiA9IG1vbWVudChhKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlQyA9IG1vbWVudChiKTtcblxuXG4gICAgICAgICAgICAgICAgdmFyIERpZmYgPSBkYXRlQi5kaWZmKGRhdGVDLCAnZGF5cycpICsgMTtcblxuICAgICAgICAgICAgICAgIGxldCBocnMgPSB0aGlzLnBvcF9tYWNoaW5lLnByZGxvc3NfaHJzXG4gICAgICAgICAgICAgICAgbGV0IHJhdGUgPSB0aGlzLnBvcF9tYWNoaW5lLnByZGxvc3NfaHJfcmF0ZVxuICAgICAgICAgICAgICAgIGxldCB0bG9zcyA9IChEaWZmICogaHJzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1jbG9zZS5wcm9kdWN0aW9uX2xvc3NfYW1vdW50ID0gKHRsb3NzICogcmF0ZSlcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1jbG9zZS5wcm9kdWN0aW9uX2xvc3MgPSB0bG9zc1xuXG5cbmNvbnNvbGUubG9nKGhycyxyYXRlLERpZmYpO1xuXG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9LFxuICAgICAgICBzdWJtaXRDbG9zZVRpY2tldCgpIHtcbiAgICAgICAgICAgIHRoaXMuJGZvcmNlVXBkYXRlKCk7XG4gICAgICAgICAgICB0aGlzLiR2YWxpZGF0b3IudmFsaWRhdGVBbGwoXCJjbG9zZXRpY2tldFwiKS50aGVuKGFzeW5jICh2YWxpZCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcG9wX2xvYWRlciA9IHRoaXMuJGxvYWRpbmcuc2hvdyh7fSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBsYXN0X21EYXRlID0gdGhpcy5wb3BfbWFjaGluZS5sYXN0X21haW50ZW5hbmNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnBvcF9tYWNoaW5lLmxhc3RfbWFpbnRlbmFuY2VzLmRhdGV0aW1lXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMucG9wX21hY2hpbmUubGFzdF9tYWludGVuYW5jZV9kYXRlO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RfbURhdGUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybWNsb3NlLmFjdHVhbF9kYXRlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBEYXRlLnBhcnNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vbWVudCh0aGlzLmZvcm1jbG9zZS5hY3R1YWxfZGF0ZSkuZm9ybWF0KFwiTU1NLEREIFlZWVlcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICkgPCBEYXRlLnBhcnNlKG1vbWVudChsYXN0X21EYXRlKS5mb3JtYXQoXCJNTU0sREQgWVlZWVwiKSlcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3BfbG9hZGVyLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIllvdSBjYW4gbm90IGFkZCBwcmV2aW91cyBkYXRlJ3MgZGF0YSwgUGxlYXNlIHJlbW92ZSByZWNvcmQgZnJvbSBtYWludGVuYW5jZSBsaXN0LlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3YXJuaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlX2J0biA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtY2xvc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucHV0KFwiL2FwaS90aWNrZXQvXCIgKyB0aGlzLmZvcm1jbG9zZS5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNjbG9zZW1vZGFsXCIpLm1vZGFsKFwiaGlkZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZS5kYXRhLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBsb2FkX2ZpbGVzKHRoaXMuZm9ybWNsb3NlLmlkLCBcImFjdHVhbFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHZhbGlkYXRvci5yZXNldCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtY2xvc2UucmVzZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFRpY2tldHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlX2J0biA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcF9sb2FkZXIuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZV9idG4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3BfbG9hZGVyLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlcnIucmVzcG9uc2UuZGF0YSAhPSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzZXRFcnJvcnNGcm9tUmVzcG9uc2UoZXJyLnJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBjbG9zZU1vZGFsKHRpY2tldCkge1xuICAgICAgICAgICAgdGhpcy4kdmFsaWRhdG9yLnBhdXNlKCk7XG4gICAgICAgICAgICAkKFwiI2Nsb3NlbW9kYWxcIikubW9kYWwoXCJzaG93XCIpO1xuICAgICAgICAgICAgdGhpcy4kdmFsaWRhdG9yLnJlc2V0KCk7XG4gICAgICAgICAgICB0aGlzLmZvcm1jbG9zZS5yZXNldCgpO1xuICAgICAgICAgICAgdGhpcy4kcmVmcy5maWxlYWN0dWFsc2VydmljZS52YWx1ZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLiRyZWZzLmZpbGVhY3R1YWxtYXRlcmlhbC52YWx1ZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnBvcF90aWNrZXQgPSB0aWNrZXQ7XG4gICAgICAgICAgICB0aGlzLnBvcF9tYWNoaW5lID0gdGlja2V0Lm1hY2hpbmU7XG4gICAgICAgICAgICB0aGlzLmZvcm1jbG9zZS5maWxsKHRpY2tldCk7XG4gICAgICAgICAgICB0aGlzLmZvcm1jbG9zZS5lZGl0X3R5cGUgPSBcImNsb3NldGlja2V0XCI7XG4gICAgICAgICAgICB0aGlzLiR2YWxpZGF0b3IucmVzdW1lKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVkaXRNb2RhbCh0aWNrZXQpIHtcbiAgICAgICAgICAgIHRoaXMuZWRpdG1vZGUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy4kdmFsaWRhdG9yLnBhdXNlKCk7XG4gICAgICAgICAgICB0aGlzLmZvcm0ucmVzZXQoKTtcbiAgICAgICAgICAgIHRoaXMucG9wX3RpY2tldCA9IHRpY2tldDtcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLiRnYXRlLmlzQWRtaW4oKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuZmlsZXNlcnZpY2UudmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuZmlsZW1hdGVyaWFsLnZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIHRoaXMuTWF0ZXJpYWxDb3N0ID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuU2VydmljZUNvc3QgPSBudWxsO1xuICAgICAgICAgICAgJChcIiNhZGROZXdcIikubW9kYWwoXCJzaG93XCIpO1xuICAgICAgICAgICAgdGhpcy5mb3JtLmZpbGwodGlja2V0KTtcbiAgICAgICAgICAgIHRoaXMuZm9ybS5saWtlbHlfZGF0ZSA9IHRpY2tldC5saWtlbHlfZGF0ZVxuICAgICAgICAgICAgICAgID8gbmV3IERhdGUodGlja2V0Lmxpa2VseV9kYXRlKS50b0lTT1N0cmluZygpXG4gICAgICAgICAgICAgICAgOiBcIlwiO1xuICAgICAgICAgICAgdGhpcy5zdGFnZXMgPSBbXTtcbiAgICAgICAgICAgIGlmICh0aWNrZXQuc3RhZ2VzICYmIHRpY2tldC5zdGFnZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhZ2VzID0gdGlja2V0LnN0YWdlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJHZhbGlkYXRvci5yZXN1bWUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgbmV3TW9kYWwoKSB7XG4gICAgICAgICAgICB0aGlzLnN0YWdlcyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5BZGRTdGFnZSgpO1xuICAgICAgICAgICAgdGhpcy5lZGl0bW9kZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy4kdmFsaWRhdG9yLnJlc2V0KCk7XG4gICAgICAgICAgICB0aGlzLiR2YWxpZGF0b3IucGF1c2UoKTtcbiAgICAgICAgICAgIHRoaXMuZm9ybS5yZXNldCgpO1xuICAgICAgICAgICAgLy8gaWYgKHRoaXMuJGdhdGUuaXNBZG1pbigpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5maWxlc2VydmljZS52YWx1ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5maWxlbWF0ZXJpYWwudmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgdGhpcy5NYXRlcmlhbENvc3QgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5TZXJ2aWNlQ29zdCA9IG51bGw7XG4gICAgICAgICAgICAkKFwiI2FkZE5ld1wiKS5tb2RhbChcInNob3dcIik7XG4gICAgICAgICAgICB0aGlzLiR2YWxpZGF0b3IucmVzdW1lKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgbG9hZFRpY2tldHMoKSB7XG4gICAgICAgICAgICAvLyBpZiAodGhpcy4kZ2F0ZS5pc0FkbWluKCkpIHtcbiAgICAgICAgICAgIGxldCBwb3BfbG9hZGVyID0gdGhpcy4kbG9hZGluZy5zaG93KHt9KTtcbiAgICAgICAgICAgIGF4aW9zXG4gICAgICAgICAgICAgICAgLmdldChcIi9hcGkvdGlja2V0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB0aGlzLnNlYXJjaCxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVGlja2V0cyA9IGRhdGEuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZGl0aW9uYWxNb3JlID0gbmV3IEFycmF5KHRoaXMuVGlja2V0cy5kYXRhLmxlbmd0aCkuZmlsbChmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvYmxlbXNNb3JlID0gbmV3IEFycmF5KHRoaXMuVGlja2V0cy5kYXRhLmxlbmd0aCkuZmlsbChmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHBvcF9sb2FkZXIuaGlkZSgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcG9wX2xvYWRlci5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBhc3luYyB1cGxvYWRfZmlsZXMoaWQsIGlzYWN0dWFsID0gZmFsc2UpIHtcbiAgICAgICAgICAgIGxldCBmbCA9IDA7XG4gICAgICAgICAgICBpZiAodGhpcy5NYXRlcmlhbENvc3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLk1hdGVyaWFsQ29zdC5mb3JFYWNoKChmaWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmZCA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICBmZC5hcHBlbmQoYGZpbGVgLCBmaWxlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzYWN0dWFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmZC5hcHBlbmQoYGZpbGVfdHlwZWAsIFwiQWN0dWFsIEVzdGltYXRlZCBNYXRlcmlhbFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZkLmFwcGVuZChgZmlsZV90eXBlYCwgXCJFc3RpbWF0ZWQgTWF0ZXJpYWxcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZmQuYXBwZW5kKGB0aWNrZXRfaWRgLCBpZCk7XG4gICAgICAgICAgICAgICAgICAgIGF4aW9zLnBvc3QoXCJhcGkvdGlja2V0L2ZpbGVzXCIsIGZkKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2FsbGVyeSB1cGxvYWRlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5TZXJ2aWNlQ29zdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuU2VydmljZUNvc3QuZm9yRWFjaCgoZmlsZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZmQgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgZmQuYXBwZW5kKGBmaWxlYCwgZmlsZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc2FjdHVhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmQuYXBwZW5kKGBmaWxlX3R5cGVgLCBcIkFjdHVhbCBFc3RpbWF0ZWQgU2VydmljZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZkLmFwcGVuZChgZmlsZV90eXBlYCwgXCJFc3RpbWF0ZWQgU2VydmljZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmZC5hcHBlbmQoYHRpY2tldF9pZGAsIGlkKTtcbiAgICAgICAgICAgICAgICAgICAgYXhpb3MucG9zdChcImFwaS90aWNrZXQvZmlsZXNcIiwgZmQpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJnYWxsZXJ5IHVwbG9hZGVkXCIpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBhc3luYyB1cGxvYWRfc3RhZ2VzKGlkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGFnZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YWdlcy5mb3JFYWNoKChzdGFnZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZmQgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgZmQuYXBwZW5kKGBpZGAsIHN0YWdlLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgZmQuYXBwZW5kKGBzdGFnZV9ub2AsIHN0YWdlLnN0YWdlX25vKTtcbiAgICAgICAgICAgICAgICAgICAgZmQuYXBwZW5kKGBzdGFnZV9kYXRlYCwgc3RhZ2Uuc3RhZ2VfZGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIGZkLmFwcGVuZChgZGVzY3JpcHRpb25gLCBzdGFnZS5kZXNjcmlwdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIC8vZmQuYXBwZW5kKGBuZXdfZmlsZWAsIHN0YWdlLm5ld19maWxlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gZmQuYXBwZW5kKGBmaWxlYCwgc3RhZ2UuZmlsZSk7XG4gICAgICAgICAgICAgICAgICAgIGZkLmFwcGVuZChgdGlja2V0X2lkYCwgaWQpO1xuICAgICAgICAgICAgICAgICAgICBheGlvcy5wb3N0KFwiYXBpL3RpY2tldC9zdGFnZXNcIiwgZmQpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdGFnZXMgdXBsb2FkZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHN1Ym1pdFRpY2tldCgpIHtcbiAgICAgICAgICAgIHRoaXMuJHZhbGlkYXRvci52YWxpZGF0ZUFsbCgpLnRoZW4oYXN5bmMgKHZhbGlkKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwb3BfbG9hZGVyID0gdGhpcy4kbG9hZGluZy5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogdGhpcy4kcmVmcy52cHNfc3VibWl0X3BvcCxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wdXQoXCIvYXBpL3RpY2tldC9cIiArIHRoaXMuZm9ybS5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNhZGROZXdcIikubW9kYWwoXCJoaWRlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLmRhdGEubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGxvYWRfc3RhZ2VzKHRoaXMuZm9ybS5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZF9maWxlcyh0aGlzLmZvcm0uaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkVGlja2V0cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcF9sb2FkZXIuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wX2xvYWRlci5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZXJyLnJlc3BvbnNlLmRhdGEgIT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0RXJyb3JzRnJvbVJlc3BvbnNlKGVyci5yZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnBvc3QoXCIvYXBpL3RpY2tldFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2FkZE5ld1wiKS5tb2RhbChcImhpZGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UuZGF0YS5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBsb2FkX2ZpbGVzKHJlc3BvbnNlLmRhdGEuZGF0YS5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRUaWNrZXRzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wX2xvYWRlci5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3BfbG9hZGVyLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlcnIucmVzcG9uc2UuZGF0YSAhPSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzZXRFcnJvcnNGcm9tUmVzcG9uc2UoZXJyLnJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBhc3luYyBjaGVja19mcmVlX3NlcnZpY2UoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZF9tYWNoaW5lKSB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkX21hY2hpbmUuY29tcGxldGVkX2ZyZWVfc2VydmljZSA+PVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkX21hY2hpbmUuZnJlZV9zZXJ2aWNlX25vXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5zZXJ2aWNlX3R5cGUgPSBcIlBhaWQgU2VydmljZVwiO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0uZnJlZV9zZXJ2aWNlX25vID0gXCJcIjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0uZnJlZV9zZXJ2aWNlX25vID1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRfbWFjaGluZS5jb21wbGV0ZWRfZnJlZV9zZXJ2aWNlICsgMTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRfbWFjaGluZSAmJlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkX21hY2hpbmUubWFjaGluZV90eXBlID09IFwiTmV3XCIgJiZcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLnNlcnZpY2VfdHlwZSA9PSBcIkZyZWUgU2VydmljZVwiXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICB0aGlzLnNlbGVjdGVkX21hY2hpbmUuZnJlZV9zZXJ2aWNlX25vXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGFzeW5jIGdldF9tYWNoaW5lKCkge1xuICAgICAgICAgICAgYXhpb3NcbiAgICAgICAgICAgICAgICAuZ2V0KFwiL2FwaS90aWNrZXRfbWFjaGluZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2l0ZV9pZDogdGhpcy5mb3JtLnNpdGVfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeV9pZDogdGhpcy5mb3JtLmNhdGVnb3J5X2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViX2NhdGVnb3J5X2lkOiB0aGlzLmZvcm0uc3ViX2NhdGVnb3J5X2lkLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFjaGluZXMgPSByZXNwb25zZS5kYXRhLmRhdGE7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4gY29uc29sZS53YXJuKFwiT2guIFNvbWV0aGluZyB3ZW50IHdyb25nXCIpKTtcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7IH0sXG4gICAgY3JlYXRlZCgpIHtcbiAgICAgICAgdGhpcy5sb2FkVGlja2V0cygpO1xuICAgIH0sXG4gICAgYmVmb3JlQ3JlYXRlKCkge1xuICAgICAgICBheGlvcy5nZXQoXCJhcGkvZ2V0X3ByZV9tYWNoaW5lXCIpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5jYXRlZ29yaWVzID0gcmVzLmRhdGEuZGF0YS5DYXRlZ29yeTtcbiAgICAgICAgICAgIHRoaXMuc2l0ZXMgPSByZXMuZGF0YS5kYXRhLnNpdGVzO1xuICAgICAgICB9KTtcbiAgICAgICAgYXhpb3NcbiAgICAgICAgICAgIC5nZXQoXCIvYXBpL2luaXRpYWxfdGlja2V0XCIpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJzID0gcmVzcG9uc2UuZGF0YS5kYXRhLnZlbmRvcnM7XG4gICAgICAgICAgICAgICAgdGhpcy5tYWNoaW5lcyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5tYWNoaW5lcztcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaF9tYWNoaW5lcyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5tYWNoaW5lcztcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaF9zaXRlcyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5zaXRlcztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4gY29uc29sZS53YXJuKFwiT2guIFNvbWV0aGluZyB3ZW50IHdyb25nXCIpKTtcbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICAgIFwiZm9ybWNsb3NlLm1hY2hpbmVfc3RhdHVzXCIobikge1xuICAgICAgICAgICAgaWYgKG4gPT0gXCJOb24gUmVwYWlyYWJsZVwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtY2xvc2UuYWN0dWFsX21hdGVyaWFsX2Nvc3QgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybWNsb3NlLmFjdHVhbF9zZXJ2aWNlX2Nvc3QgPSAwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1jbG9zZS5hY3R1YWxfbWF0ZXJpYWxfY29zdCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtY2xvc2UuYWN0dWFsX3NlcnZpY2VfY29zdCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIFwiZm9ybS5zdWJfY2F0ZWdvcnlfaWRcIihuLCBvKSB7XG4gICAgICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0X21hY2hpbmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgXCJmb3JtLnNpdGVfaWRcIihuLCBvKSB7XG4gICAgICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0X21hY2hpbmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBcImZvcm0uY2F0ZWdvcnlfaWRcIjoge1xuICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKG4sIG8pIHtcbiAgICAgICAgICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgICAgICAgICBheGlvcy5nZXQoXCJhcGkvY2F0ZWdvcnkvXCIgKyBuKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3ViX2NhdGVnb3JpZXMgPSByZXMuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRfbWFjaGluZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWVwOiB0cnVlLFxuICAgICAgICAgICAgaW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgc3RhZ2VzOiB7XG4gICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbiAobiwgbykge1xuICAgICAgICAgICAgICAgIGlmIChuICYmIG4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbGEgPSBuW24ubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChsYS5zdGFnZV9ubylcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdF9zdGFnZV9pbmRleCA9IHRoaXMub3BuX3N0YWdlLmluZGV4T2YobGEuc3RhZ2Vfbm8pO1xuICAgICAgICAgICAgICAgICAgICBpZiAobGEuc3RhZ2VfZGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdF9zdGFnZV9kYXRlID0gbmV3IERhdGUobGEuc3RhZ2VfZGF0ZSkudG9JU09TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3Rfc3RhZ2VfaW5kZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wb3BfdGlja2V0ICYmIHRoaXMucG9wX3RpY2tldC5jcmVhdGVkX2F0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3Rfc3RhZ2VfZGF0ZSA9IG5ldyBEYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wX3RpY2tldC5jcmVhdGVkX2F0XG4gICAgICAgICAgICAgICAgICAgICAgICApLnRvSVNPU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3Rfc3RhZ2VfZGF0ZSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWVwOiB0cnVlLFxuICAgICAgICAgICAgaW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgfSxcblxuICAgICAgICBhc3luYyBcImZvcm0ubWFpbnRlbmFuY2VfcHJvdmlkZXJcIihuKSB7XG4gICAgICAgICAgICBpZiAobiAhPSBcInZlbmRvclwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLnNlcnZpY2VfdHlwZSA9IFwiUGFpZCBTZXJ2aWNlXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBheGlvc1xuICAgICAgICAgICAgICAgIC5nZXQoXCJhcGkvdXNlci9saXN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBuLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlcnMgPSByZXNwb25zZS5kYXRhLmRhdGE7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4gY29uc29sZS53YXJuKFwiT2guIFNvbWV0aGluZyB3ZW50IHdyb25nXCIpKTtcbiAgICAgICAgfSxcblxuICAgICAgICBhc3luYyBcImZvcm0ubWFjaGluZV9pZFwiKG4pIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRfbWFjaGluZSA9IHRoaXMubWFjaGluZXMuZmluZCgoeCkgPT4geC5pZCA9PT0gbik7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmNoZWNrX2ZyZWVfc2VydmljZSgpO1xuICAgICAgICB9LFxuICAgICAgICBhc3luYyBcImZvcm0uc2VydmljZV90eXBlXCIobikge1xuICAgICAgICAgICAgaWYgKG4gPT0gXCJGcmVlIFNlcnZpY2VcIikge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuY2hlY2tfZnJlZV9zZXJ2aWNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIFwiZm9ybWNsb3NlLmFjdHVhbF9kYXRlXCIoKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZV9sb3NzKCk7XG4gICAgICAgIH1cbiAgICB9LFxufTtcbjwvc2NyaXB0PlxuPHN0eWxlPlxuLmJzIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDJkMWQxYTg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uY29tbWF+LmNvbW1hOm5vdCg6ZW1wdHkpOmJlZm9yZSB7XG4gICAgY29udGVudDogXCIsIFwiO1xufVxuXG4ucm1vcmUge1xuICAgIGNvbG9yOiBibHVlO1xufVxuPC9zdHlsZT5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uYnMge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDJkMWQxYTg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLmNvbW1hfi5jb21tYTpub3QoOmVtcHR5KTpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiLCBcXFwiO1xcbn1cXG4ucm1vcmUge1xcbiAgICBjb2xvcjogYmx1ZTtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkY6L3dhbXA2NC93d3cvcm1tL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1RpY2tldHMvcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvVGlja2V0cy9pbmRleC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQW82Q0E7SUFDQSw0QkFBQTtJQUNBLG1CQUFBO0NBQ0E7QUFFQTtJQUNBLGNBQUE7Q0FDQTtBQUVBO0lBQ0EsWUFBQTtDQUNBXCIsXCJmaWxlXCI6XCJpbmRleC52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgICA8c2VjdGlvbiBjbGFzcz1cXFwiY29udGVudFxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWRcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC0xMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWhlYWRlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+VGlja2V0IExpc3Q8L2gzPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLXRvb2xzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayB0bz1cXFwiL3RpY2tldC9hZGRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNtIGJ0bi1wcmltYXJ5XFxcIiBAY2xpY2s9XFxcIm5ld01vZGFsXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtcGx1cy1zcXVhcmVcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGQgTmV3XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHkgcC0yXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gYXV0b2NvbXBsZXRlPVxcXCJvZmZcXFwiIEBzdWJtaXQucHJldmVudD1cXFwiZ2V0UmVzdWx0cygpXFxcIiBkYXRhLXZ2LXNjb3BlPVxcXCJzZWFyY2hmclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLXJvd1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVxcXCJuYW1lXFxcIiA6Z2V0LW9wdGlvbi1sYWJlbD1cXFwiZ2V0TGFiZWxcXFwiIDpyZWR1Y2U9XFxcIihvcHRpb24pID0+IG9wdGlvbi5pZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpvcHRpb25zPVxcXCJzZWFyY2hfbWFjaGluZXNcXFwiIHBsYWNlaG9sZGVyPVxcXCJFbnRlciBtYWNoaW5lcyAuLi5cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJzZWFyY2gubWFjaGluZV9pZFxcXCIgbmFtZT1cXFwibWFjaGluZV9pZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIHBsYWNlaG9sZGVyPVxcXCJFbnRlciB0aWNrZXQgLi4uXFxcIiB2LW1vZGVsPVxcXCJzZWFyY2gudGlja2V0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cXFwidGlja2V0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cXFwic2l0ZV9uYW1lXFxcIiA6cmVkdWNlPVxcXCIob3B0aW9uKSA9PiBvcHRpb24uaWRcXFwiIDpvcHRpb25zPVxcXCJzZWFyY2hfc2l0ZXNcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiU2VsZWN0IFNpdGUuLi5cXFwiIHYtbW9kZWw9XFxcInNlYXJjaC5zaXRlX2lkXFxcIiBuYW1lPVxcXCJzaXRlX2lkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XFxcInNpdGVfbmFtZVxcXCIgOm9wdGlvbnM9XFxcIlsnT3BlbicsICdDbG9zZWQnXVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJTZWxlY3QgU3RhdHVzLi4uXFxcIiB2LW1vZGVsPVxcXCJzZWFyY2guc3RhdHVzXFxcIiBuYW1lPVxcXCJzdGF0dXNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cXFwic2l0ZV9uYW1lXFxcIiA6b3B0aW9ucz1cXFwiWydNYWpvcicsICdNaW5vciddXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIlNlbGVjdCBDb21wbGFpbnQgTmF0dXJlLi4uXFxcIiB2LW1vZGVsPVxcXCJzZWFyY2guY29tcGxhaW50X25hdHVyZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XFxcImNvbXBsYWludF9uYXR1cmVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cXFwic2l0ZV9uYW1lXFxcIiA6b3B0aW9ucz1cXFwiWydCcmVha2Rvd24gTWFpbnRlbmFuY2UnLCAnUGVyaW9kaWMgTWFpbnRlbmFuY2UnXVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJTZWxlY3QgVGlja2V0IFR5cGUuLi5cXFwiIHYtbW9kZWw9XFxcInNlYXJjaC50aWNrZXRfdHlwZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XFxcInRpY2tldF90eXBlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCI+U2VhcmNoPC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWluZm8gbWwtMlxcXCIgQGNsaWNrPVxcXCJyZXNldF9maWx0ZXIoKVxcXCI+UmVzZXQ8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZG93bmxvYWQtZXhjZWwgY2xhc3M9XFxcImJ0biBidG4td2FybmluZyBtbC0yXFxcIiA6ZmV0Y2g9XFxcImV4cG9ydF9jc3ZcXFwiIDpmaWVsZHM9XFxcImpzb25fZmllbGRzXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6YmVmb3JlLWdlbmVyYXRlPVxcXCJzdGFydERvd25sb2FkXFxcIiA6YmVmb3JlLWZpbmlzaD1cXFwiZmluaXNoRG93bmxvYWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldD1cXFwiTXkgV29ya3NoZWV0XFxcIiB0eXBlPVxcXCJjc3ZcXFwiIG5hbWU9XFxcInRpY2tldF9saXN0LmNzdlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJsYWJlbFRleHRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWZpbGUtZXhjZWwtb1xcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV4cG9ydCBhcyBDU1Y8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kb3dubG9hZC1leGNlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmNhcmQtaGVhZGVyIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keSB0aWNrZXRMc3RUYmwgdGFibGUtcmVzcG9uc2l2ZSBwLTBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLWhvdmVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5UaWNrZXQgTm88L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VGlja2V0IFR5cGU8L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RkFSIE5vPC90aD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk1hY2hpbmUgTmFtZTwvdGg+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5NYWNoaW5lIE1vZGVsPC90aD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk1hY2hpbmUgU1IgTm88L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TWFjaGluZSdzIFByb2JsZW08L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QWRkaXRpb25hbCBQcm9ibGVtczwvdGg+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TaXRlPC90aD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkNvbXBsYWludCBOYXR1cmU8L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q3JlYXRlZCBCeTwvdGg+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5DcmVhdGVkIERhdGU8L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RXhwZWN0ZWQgZGF0ZTwvdGg+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5SZXZpc2VkIDxicj4gRXhwZWN0ZWQgZGF0ZTwvdGg+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5UaWNrZXQgU3RhdHVzPC90aD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFjdGlvbjwvdGg+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHYtZm9yPVxcXCIodGlja2V0LCBpbmRleCkgaW4gVGlja2V0cy5kYXRhXFxcIiA6a2V5PVxcXCJ0aWNrZXQuaWRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0LnRpY2tldF9ubyB9fTwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyB0aWNrZXQudGlja2V0X3R5cGUgfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0Lm1hY2hpbmUuZmFyX25vIH19PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5tYWNoaW5lLm5hbWUgfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgKHRpY2tldC5tYWNoaW5lLm1hY2hpbmVfbW9kZWw/IHRpY2tldC5tYWNoaW5lLm1hY2hpbmVfbW9kZWwubmFtZTogXFxcIi1cXFwiKSAgfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0Lm1hY2hpbmUubWFjaGluZV9zcl9ubyB9fTwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cXFwiaXNFeHBhbmRlZChpbmRleClcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICB0aWNrZXQucHJvYmxlbV9kZXNjcmlwdGlvbiAgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjXFxcIiBAY2xpY2sucHJldmVudD1cXFwidG9nZ2xlRXhwYW5kKHRpVGlja2V0cy5kYXRhY2tldCwgaW5kZXgpXFxcIj5MZXNzPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZWxzZSBjbGFzcz1cXFwidHJ1bmNhdGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGdldFRydW5jYXRlZFRleHQoIHRpY2tldC5wcm9ibGVtX2Rlc2NyaXB0aW9uICkgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjXFxcIiBAY2xpY2sucHJldmVudD1cXFwidG9nZ2xlRXhwYW5kKFRpY2tldHMuZGF0YSwgaW5kZXgpXFxcIj5Nb3JlPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XFxcInRydW5jYXRlXFxcIiA6dGl0bGU9XFxcInRpY2tldC5wcm9ibGVtX2Rlc2NyaXB0aW9uXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cXFwidGlja2V0LnByb2JsZW1fZGVzY3JpcHRpb25cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57eyB0aWNrZXQucHJvYmxlbV9kZXNjcmlwdGlvbiB9fTwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cXFwidGlja2V0LnByb2JsZW1zICYmIHRpY2tldC5wcm9ibGVtcy5sZW5ndGggPiAwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VnVlUmVhZE1vcmVTbW9vdGggOm9wZW4uc3luYz1cXFwiYWRkaXRpb25hbE1vcmVbeF1cXFwiIG5vLWJ1dHRvbiBuby1zaGFkb3c+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XFxcInRpY2tldC5wcm9ibGVtc1xcXCIgdi1mb3I9XFxcIihpdGVtLCBpbmRleCkgaW4gdGlja2V0LnByb2JsZW1zXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cXFwiJ3AnICsgaW5kZXhcXFwiIHYtaHRtbD1cXFwiaXRlbS5wcm9ibGVtXFxcIj48L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WdWVSZWFkTW9yZVNtb290aD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBAY2xpY2s9XFxcInNjbGljayh4KVxcXCIgY2xhc3M9XFxcInJtb3JlXFxcIj4uLi57eyBhZGRpdGlvbmFsTW9yZVt4XSA/IFxcXCJMZXNzXFxcIiA6XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJNb3JlXFxcIiB9fTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyB0aWNrZXQuc2l0ZSA/IHRpY2tldC5zaXRlLnNpdGVfbmFtZSA6IFxcXCItXFxcIiB9fTwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyB0aWNrZXQuY29tcGxhaW50X25hdHVyZSB9fTwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyB0aWNrZXQuY3JlYXRlZF9ieV9uYW1lIH19PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5jcmVhdGVkX2F0IHwgbXlEYXRlIH19PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5saWtlbHlfZGF0ZSB8IG15RGF0ZSB9fTwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyB0aWNrZXQucmV2ZXJzaW9uX2RhdGUgfCBteURhdGUgfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tldC5zdGF0dXMudG9Mb3dlckNhc2UoKSA9PSBcXFwiY3JlYXRlZCBieSB1c2VyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXFxcIk9wZW5cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aWNrZXQuc3RhdHVzXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCJqYXZhc2NyaXB0OnZvaWQoMCk7XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nIGJ0bi1zbVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcInZpZXdNb2RhbCh0aWNrZXQpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWaWV3XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVxcXCInL3RpY2tldC9lZGl0LycgKyB0aWNrZXQuaWRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3MgYnRuLXNtXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XFxcInRpY2tldC5zdGF0dXMgIT0gJ0Nsb3NlZCdcXFwiPkVkaXQ8L3JvdXRlci1saW5rPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiamF2YXNjcmlwdDp2b2lkKDApO1xcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyIGJ0bi1zbVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcImNsb3NlTW9kYWwodGlja2V0KVxcXCIgdGl0bGU9XFxcIkNsb3NlIHRpY2tldFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVxcXCJ0aWNrZXQuc3RhdHVzICE9ICdDbG9zZWQnXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDbG9zZVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy5jYXJkLWJvZHkgLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1mb290ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGFnaW5hdGlvbiA6ZGF0YT1cXFwiVGlja2V0c1xcXCIgOmxpbWl0PVxcXCIxMFxcXCIgQHBhZ2luYXRpb24tY2hhbmdlLXBhZ2U9XFxcImdldFJlc3VsdHNcXFwiPjwvcGFnaW5hdGlvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmNhcmQgLS0+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICA8IS0tIENsb3NlIE1vZGFsIC0tPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwgZmFkZVxcXCIgaWQ9XFxcImNsb3NlbW9kYWxcXFwiIHRhYmluZGV4PVxcXCItMVxcXCIgcm9sZT1cXFwiZGlhbG9nXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcImNsb3NlbW9kYWxcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1kaWFsb2cgbW9kYWwtbGdcXFwiIHJvbGU9XFxcImRvY3VtZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPkNsb3NlIFRpY2tldDwvaDU+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgYXJpYS1sYWJlbD1cXFwiQ2xvc2VcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVxcXCJzdWJtaXRDbG9zZVRpY2tldCgpXFxcIiBkYXRhLXZ2LXNjb3BlPVxcXCJjbG9zZXRpY2tldFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgdi1pZj1cXFwicG9wX21hY2hpbmVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5GYXIgTm8gOjwvc3Ryb25nPiB7eyBwb3BfbWFjaGluZS5mYXJfbm8gfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+TWFjaGluZSBOYW1lIDo8L3N0cm9uZz4ge3sgcG9wX21hY2hpbmUubmFtZSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5NYWNoaW5lIE1vZGVsIDo8L3N0cm9uZz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcF9tYWNoaW5lLm1hY2hpbmVfbW9kZWxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gcG9wX21hY2hpbmUubWFjaGluZV9tb2RlbC5uYW1lXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFxcXCItXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5NYWNoaW5lIENoYXNzaXMgTm8gOjwvc3Ryb25nPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwb3BfbWFjaGluZS5jaGFzc2lzX25vIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc21cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPk1hY2hpbmUgU2wgTm86PC9zdHJvbmc+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHBvcF9tYWNoaW5lLm1hY2hpbmVfc3Jfbm8gfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+TWFjaGluZSBSZWduIE5vIDo8L3N0cm9uZz4ge3sgcG9wX21hY2hpbmUucmVnbl9ubyB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5NYWNoaW5lIEVuZ2luZSBObyA6PC9zdHJvbmc+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHBvcF9tYWNoaW5lLmVuZ2luZV9ubyB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+VGlja2V0IE5vIDo8L3N0cm9uZz4ge3sgcG9wX3RpY2tldCA/IHBvcF90aWNrZXQudGlja2V0X25vIDogJy0nIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgdmVycm9ycy5jbG9zZXRpY2tldCB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTZcXFwiIHYtaWY9XFxcInBvcF90aWNrZXQgJiYgcG9wX3RpY2tldC5saWtlbHlfZGF0ZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5BY3R1YWwgRGF0ZTwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkYXRldGltZSB2YWx1ZS16b25lPVxcXCJBc2lhL0tvbGthdGFcXFwiIHYtbW9kZWw9XFxcImZvcm1jbG9zZS5hY3R1YWxfZGF0ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XFxcImFjdHVhbF9kYXRlXFxcIiBpbnB1dC1jbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiA6Y2xhc3M9XFxcIntcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaXMtaW52YWxpZCc6IHZlcnJvcnMuaGFzKCdjbG9zZXRpY2tldC5hY3R1YWxfZGF0ZScpLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcXCIgdi12YWxpZGF0ZT1cXFwiJ3JlcXVpcmVkJ1xcXCIgZGF0YS12di1hcz1cXFwiQWN0dWFsIERhdGVcXFwiIDptaW4tZGF0ZXRpbWU9XFxcIm5ldyBEYXRlKHBvcF90aWNrZXQuY3JlYXRlZF9hdCkudG9JU09TdHJpbmcoKVxcbiAgICBcXFwiIDptYXgtZGF0ZXRpbWU9XFxcIm5ldyBEYXRlKCkudG9JU09TdHJpbmcoKVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVxcXCJ2ZXJyb3JzLmhhcygnY2xvc2V0aWNrZXQuYWN0dWFsX2RhdGUnKVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJoZWxwLWJsb2NrIGludmFsaWQtZmVlZGJhY2tcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgdmVycm9ycy5maXJzdChcXFwiY2xvc2V0aWNrZXQuYWN0dWFsX2RhdGVcXFwiKSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTZcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TWFjaGluZSBTdGF0dXM8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IHYtbW9kZWw9XFxcImZvcm1jbG9zZS5tYWNoaW5lX3N0YXR1c1xcXCIgbmFtZT1cXFwibWFjaGluZV9zdGF0dXNcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiA6Y2xhc3M9XFxcIntcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaXMtaW52YWxpZCc6IHZlcnJvcnMuaGFzKCdjbG9zZXRpY2tldC5tYWNoaW5lX3N0YXR1cycpLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcXCIgdi12YWxpZGF0ZT1cXFwiJ3JlcXVpcmVkJ1xcXCIgZGF0YS12di1hcz1cXFwibWFjaGluZSBzdGF0dXNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiUnVubmluZ1xcXCI+UnVubmluZzwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiUnVubmluZyB3aXRoIFByb2JsZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJ1bm5pbmcgd2l0aCBQcm9ibGVtXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIk5vbiBSZXBhaXJhYmxlXFxcIj5Ob24gUmVwYWlyYWJsZTwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVxcXCJ2ZXJyb3JzLmhhcygnY2xvc2V0aWNrZXQubWFjaGluZV9zdGF0dXMnKVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJoZWxwLWJsb2NrIGludmFsaWQtZmVlZGJhY2tcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgdmVycm9ycy5maXJzdChcXFwiY2xvc2V0aWNrZXQubWFjaGluZV9zdGF0dXNcXFwiKSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RXN0aW1hdGVkIE1hdGVyaWFsIGNvc3Q8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcmVhZG9ubHkgOnZhbHVlPVxcXCJwb3BfdGlja2V0LmVzdGltYXRlZF9tYXRlcmlhbF9jb3N0ICtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcF90aWNrZXQuYWRfZXN0aW1hdGVkX21hdGVyaWFsX2Nvc3QgK1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJygnICtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcF90aWNrZXQuZXN0aW1hdGVkX21hdGVyaWFsX2Nvc3QgK1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJysnICtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcF90aWNrZXQuYWRfZXN0aW1hdGVkX21hdGVyaWFsX2Nvc3QgK1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyknXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC0yXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkFjdHVhbCBNYXRlcmlhbCBjb3N0PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XFxcImZvcm1jbG9zZS5hY3R1YWxfbWF0ZXJpYWxfY29zdFxcXCIgdHlwZT1cXFwidGV4dFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XFxcImFjdHVhbF9tYXRlcmlhbF9jb3N0XFxcIiB2LXZhbGlkYXRlPVxcXCIncmVxdWlyZWQnXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12di1hcz1cXFwiQWN0dWFsIE1hdGVyaWFsIGNvc3RcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIDpjbGFzcz1cXFwie1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpcy1pbnZhbGlkJzogdmVycm9ycy5oYXMoXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbG9zZXRpY2tldC5hY3R1YWxfbWF0ZXJpYWxfY29zdCdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcXCIgOnJlYWRvbmx5PVxcXCJmb3JtY2xvc2UubWFjaGluZV9zdGF0dXMgPT0gJ05vbiBSZXBhaXJhYmxlJ1xcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVxcXCJ2ZXJyb3JzLmhhcygnY2xvc2V0aWNrZXQuYWN0dWFsX21hdGVyaWFsX2Nvc3QnKVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJoZWxwLWJsb2NrIGludmFsaWQtZmVlZGJhY2tcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgdmVycm9ycy5maXJzdChcXFwiY2xvc2V0aWNrZXQuYWN0dWFsX21hdGVyaWFsX2Nvc3RcXFwiKSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+IEFjdHVhbCBNYXRlcmlhbCBjb3N0IEZpbGU8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiZmlsZVxcXCIgQGNoYW5nZT1cXFwidXBsb2FkTWF0ZXJpYWxDb3N0XFxcIiBtdWx0aXBsZSBuYW1lPVxcXCJtYXRlcmlhbF9jb3N0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVxcXCJmaWxlYWN0dWFsbWF0ZXJpYWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIDpjbGFzcz1cXFwie1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpcy1pbnZhbGlkJzogdmVycm9ycy5oYXMoJ2Nsb3NldGlja2V0Lm1hdGVyaWFsX2Nvc3QnKSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXFwiIHYtdmFsaWRhdGU9XFxcIicnXFxcIiBkYXRhLXZ2LWFzPVxcXCJBY3R1YWwgTWF0ZXJpYWwgY29zdFxcXCIgLz5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2xlYXJmaXhcXFwiIHYtaWY9XFxcInBvcF90aWNrZXQuYWN0dWFsX2VzdGltYXRlZF9tYXRlcmlhbF9maWxlc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB2LWZvcj1cXFwiKFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSwgeFxcbiAgICAgICAgICAgICAgICAgICAgICAgICkgaW4gcG9wX3RpY2tldC5hY3R1YWxfZXN0aW1hdGVkX21hdGVyaWFsX2ZpbGVzXFxcIiA6a2V5PVxcXCJpdGVtLmlkXFxcIiA6aHJlZj1cXFwiaXRlbS5maWxlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cXFwiX2JsYW5rXFxcIj5WaWV3XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wX3RpY2tldC5hY3R1YWxfZXN0aW1hdGVkX21hdGVyaWFsX2ZpbGVzLmxlbmd0aCA+IDFcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB4ICsgMVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFxcXCJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX08L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XFxcInZlcnJvcnMuaGFzKCdjbG9zZXRpY2tldC5tYXRlcmlhbF9jb3N0JylcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHZlcnJvcnMuZmlyc3QoXFxcImNsb3NldGlja2V0Lm1hdGVyaWFsX2Nvc3RcXFwiKSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTZcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TWF0ZXJpYWwgQ29zdCBQT3M8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3RcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcImZvcm1jbG9zZS5tYXRlcmlhbFBPU1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVxcXCJFbnRlciBQTyBudW1iZXJzXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnZ2FibGUgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvdi1zZWxlY3Q+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC0yXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkVzdGltYXRlZCBTZXJ2aWNlIGNvc3Q8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgOnZhbHVlPVxcXCJwb3BfdGlja2V0LmVzdGltYXRlZF9zZXJ2aWNlX2Nvc3QgK1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wX3RpY2tldC5hZF9lc3RpbWF0ZWRfc2VydmljZV9jb3N0ICtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcoJyArXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3BfdGlja2V0LmVzdGltYXRlZF9zZXJ2aWNlX2Nvc3QgK1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJysnICtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcF90aWNrZXQuYWRfZXN0aW1hdGVkX3NlcnZpY2VfY29zdCArXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnKSdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcmVhZG9ubHkgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+QWN0dWFsIFNlcnZpY2UgY29zdDwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVxcXCJmb3JtY2xvc2UuYWN0dWFsX3NlcnZpY2VfY29zdFxcXCIgdHlwZT1cXFwidGV4dFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XFxcImFjdHVhbF9zZXJ2aWNlX2Nvc3RcXFwiIHYtdmFsaWRhdGU9XFxcIidyZXF1aXJlZCdcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZ2LWFzPVxcXCJBY3R1YWwgU2VydmljZSBjb3N0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiA6Y2xhc3M9XFxcIntcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaXMtaW52YWxpZCc6IHZlcnJvcnMuaGFzKFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xvc2V0aWNrZXQuYWN0dWFsX3NlcnZpY2VfY29zdCdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcXCIgOnJlYWRvbmx5PVxcXCJmb3JtY2xvc2UubWFjaGluZV9zdGF0dXMgPT0gJ05vbiBSZXBhaXJhYmxlJ1xcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVxcXCJ2ZXJyb3JzLmhhcygnY2xvc2V0aWNrZXQuYWN0dWFsX3NlcnZpY2VfY29zdCcpXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB2ZXJyb3JzLmZpcnN0KFxcXCJjbG9zZXRpY2tldC5hY3R1YWxfc2VydmljZV9jb3N0XFxcIikgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC0yXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPiBBY3R1YWwgU2VydmljZSBjb3N0IEZpbGUgPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImZpbGVcXFwiIEBjaGFuZ2U9XFxcInVwbG9hZFNlcnZpY2VDb3N0XFxcIiBtdWx0aXBsZSBuYW1lPVxcXCJzZXJ2aWNlX2Nvc3RcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XFxcImZpbGVhY3R1YWxzZXJ2aWNlXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiA6Y2xhc3M9XFxcIntcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaXMtaW52YWxpZCc6IHZlcnJvcnMuaGFzKCdjbG9zZXRpY2tldC5zZXJ2aWNlX2Nvc3QnKSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXFwiIHYtdmFsaWRhdGU9XFxcIicnXFxcIiBkYXRhLXZ2LWFzPVxcXCJBY3R1YWwgU2VydmljZSBjb3N0XFxcIiAvPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjbGVhcmZpeFxcXCIgdi1pZj1cXFwicG9wX3RpY2tldC5hY3R1YWxfZXN0aW1hdGVkX3NlcnZpY2VfZmlsZXNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdi1mb3I9XFxcIihcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSwgeFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIGluIHBvcF90aWNrZXQuYWN0dWFsX2VzdGltYXRlZF9zZXJ2aWNlX2ZpbGVzXFxcIiA6a2V5PVxcXCJpdGVtLmlkXFxcIiA6aHJlZj1cXFwiaXRlbS5maWxlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cXFwiX2JsYW5rXFxcIj5WaWV3XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wX3RpY2tldC5hY3R1YWxfZXN0aW1hdGVkX3NlcnZpY2VfZmlsZXMubGVuZ3RoID4gMVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHggKyAxXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXFxcIlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fTwvYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cXFwidmVycm9ycy5oYXMoJ2Nsb3NldGlja2V0LnNlcnZpY2VfY29zdCcpXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB2ZXJyb3JzLmZpcnN0KFxcXCJjbG9zZXRpY2tldC5zZXJ2aWNlX2Nvc3RcXFwiKSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTZcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U2VydmljZSBDb3N0IFBPczwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwiZm9ybWNsb3NlLnNlcnZpY2VQT1NcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cXFwiRW50ZXIgUE8gbnVtYmVyc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ2dhYmxlIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGVcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3Ytc2VsZWN0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtNlxcXCIgdi1pZj1cXFwicG9wX21hY2hpbmUuaXNfY29uc3VtdGlvbl9ocl9ydW5cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q3VycmVudCBSdW4gaG91ciA8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cXFwiZm9ybWNsb3NlLmN1cnJlbnRfcnVuX2hvdXJcXFwiIG5hbWU9XFxcImN1cnJlbnRfcnVuX2hvdXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiA6Y2xhc3M9XFxcIntcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaXMtaW52YWxpZCc6IHZlcnJvcnMuaGFzKFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xvc2V0aWNrZXQuY3VycmVudF9ydW5faG91cidcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcXCIgdi12YWxpZGF0ZT1cXFwie1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWw6IDIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluX3ZhbHVlOiBwb3BfbWFjaGluZS5sYXN0X21haW50ZW5hbmNlc1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHBvcF9tYWNoaW5lLmxhc3RfbWFpbnRlbmFuY2VzLnJ1bl9ob3VyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcG9wX21hY2hpbmUubGFzdF9ocl9ydW4sXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxcIiBkYXRhLXZ2LWFzPVxcXCJDdXJyZW50IFJ1biBob3VyXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XFxcInZlcnJvcnMuaGFzKCdjbG9zZXRpY2tldC5jdXJyZW50X3J1bl9ob3VyJylcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHZlcnJvcnMuZmlyc3QoXFxcImNsb3NldGlja2V0LmN1cnJlbnRfcnVuX2hvdXJcXFwiKSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTZcXFwiIHYtaWY9XFxcInBvcF9tYWNoaW5lLmlzX2NvbnN1bXRpb25fa21fcnVuXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPiBDdXJyZW50IEtNIFJ1biA8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cXFwiZm9ybWNsb3NlLmN1cnJlbnRfa21fcnVuXFxcIiBuYW1lPVxcXCJjdXJyZW50X2ttX3J1blxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cXFwie1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpcy1pbnZhbGlkJzogdmVycm9ycy5oYXMoJ2Nsb3NldGlja2V0LmN1cnJlbnRfa21fcnVuJyksXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxcIiB2LXZhbGlkYXRlPVxcXCJ7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbDogMixcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5fdmFsdWU6IHBvcF9tYWNoaW5lLmxhc3RfbWFpbnRlbmFuY2VzXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gcG9wX21hY2hpbmUubGFzdF9tYWludGVuYW5jZXMua21fcnVuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcG9wX21hY2hpbmUubGFzdF9rbV9ydW4sXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxcIiBkYXRhLXZ2LWFzPVxcXCJDdXJyZW50IEtNIGhvdXJcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cXFwidmVycm9ycy5oYXMoJ2Nsb3NldGlja2V0LmN1cnJlbnRfa21fcnVuJylcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHZlcnJvcnMuZmlyc3QoXFxcImNsb3NldGlja2V0LmN1cnJlbnRfa21fcnVuXFxcIikgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC02XFxcIiB2LWlmPVxcXCJwb3BfbWFjaGluZS5pc19wcm9kdWN0aW9uX2ZpZ1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD4gQ3VycmVudCBQcm9kdWN0aW9uIGZpZyA8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cXFwiZm9ybWNsb3NlLmN1cnJlbnRfcHJvZHVjdGlvbl9maWdcXFwiIG5hbWU9XFxcImN1cnJlbnRfcHJvZHVjdGlvbl9maWdcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiA6Y2xhc3M9XFxcIntcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaXMtaW52YWxpZCc6IHZlcnJvcnMuaGFzKFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xvc2V0aWNrZXQuY3VycmVudF9wcm9kdWN0aW9uX2ZpZydcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcXCIgdi12YWxpZGF0ZT1cXFwie1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWw6IDIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluX3ZhbHVlOiBwb3BfbWFjaGluZS5sYXN0X21haW50ZW5hbmNlc1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHBvcF9tYWNoaW5lLmxhc3RfbWFpbnRlbmFuY2VzLnByb2R1Y3Rpb25fZmlnXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcG9wX21hY2hpbmUucGVyaW9kaWNfbWFpbnRlbmFuY2VfYnJlYWtkb3duLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcXCIgZGF0YS12di1hcz1cXFwiQ3VycmVudCBQcm9kdWN0aW9uIGZpZ1xcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVxcXCJ2ZXJyb3JzLmhhcygnY2xvc2V0aWNrZXQuY3VycmVudF9wcm9kdWN0aW9uX2ZpZycpXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB2ZXJyb3JzLmZpcnN0KFxcXCJjbG9zZXRpY2tldC5jdXJyZW50X3Byb2R1Y3Rpb25fZmlnXFxcIikgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC02XFxcIiB2LWlmPVxcXCJmb3JtY2xvc2UudGlja2V0X3R5cGUgPT0gJ0JyZWFrZG93biBNYWludGVuYW5jZSdcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UHJvZHVjdGlvbiBMb3NzPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XFxcImZvcm1jbG9zZS5wcm9kdWN0aW9uX2xvc3NcXFwiIG5hbWU9XFxcInByb2R1Y3Rpb25fbG9zc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIDpjbGFzcz1cXFwie1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpcy1pbnZhbGlkJzogdmVycm9ycy5oYXMoXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbG9zZXRpY2tldC5wcm9kdWN0aW9uX2xvc3MnXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXFwiIHYtdmFsaWRhdGU9XFxcIidyZXF1aXJlZCdcXFwiIGRhdGEtdnYtYXM9XFxcIlByb2R1Y3Rpb24gTG9zc1xcXCIgIHJlYWRvbmx5Lz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVxcXCJ2ZXJyb3JzLmhhcygnY2xvc2V0aWNrZXQucHJvZHVjdGlvbl9sb3NzJylcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHZlcnJvcnMuZmlyc3QoXFxcImNsb3NldGlja2V0LnByb2R1Y3Rpb25fbG9zc1xcXCIpIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtNlxcXCIgdi1pZj1cXFwiZm9ybWNsb3NlLnRpY2tldF90eXBlID09ICdCcmVha2Rvd24gTWFpbnRlbmFuY2UnXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlByb2R1Y3Rpb24gbG9zcyBhbW91bnQ8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cXFwiZm9ybWNsb3NlLnByb2R1Y3Rpb25fbG9zc19hbW91bnRcXFwiIG5hbWU9XFxcInByb2R1Y3Rpb25fbG9zc19hbW91bnRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiA6Y2xhc3M9XFxcIntcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaXMtaW52YWxpZCc6IHZlcnJvcnMuaGFzKFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xvc2V0aWNrZXQucHJvZHVjdGlvbl9sb3NzX2Ftb3VudCdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcXCIgdi12YWxpZGF0ZT1cXFwiJ3JlcXVpcmVkJ1xcXCIgZGF0YS12di1hcz1cXFwiQ3VycmVudCBQcm9kdWN0aW9uIGZpZ1xcXCIgcmVhZG9ubHkvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XFxcInZlcnJvcnMuaGFzKCdjbG9zZXRpY2tldC5wcm9kdWN0aW9uX2xvc3NfYW1vdW50JylcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHZlcnJvcnMuZmlyc3QoXFxcImNsb3NldGlja2V0LnByb2R1Y3Rpb25fbG9zc19hbW91bnRcXFwiKSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTZcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Um9vdCBDYXVzZSBBbmFseXNpczwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSByb3dzPVxcXCIxXFxcIiB2LW1vZGVsPVxcXCJmb3JtY2xvc2UucmNhXFxcIiBuYW1lPVxcXCJyY2FcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIDpjbGFzcz1cXFwie1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lzLWludmFsaWQnOiB2ZXJyb3JzLmhhcygnY2xvc2V0aWNrZXQucmNhJyksXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXFwiIHYtdmFsaWRhdGU9XFxcIidyZXF1aXJlZCdcXFwiPjwvdGV4dGFyZWE+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cXFwidmVycm9ycy5oYXMoJ2Nsb3NldGlja2V0LnJjYScpXFxcIiBjbGFzcz1cXFwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHZlcnJvcnMuZmlyc3QoXFxcImNsb3NldGlja2V0LnJjYVxcXCIpIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnlcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2xvc2VcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiB2LWlmPVxcXCJjbG9zZV9idG5cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2xvc2UgVGlja2V0XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgdi1lbHNlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvY2Vzc2luZ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwhLS1WaWV3IE1vZGFsLS0+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbCBmYWRlXFxcIiBpZD1cXFwidmlld21vZGFsXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiIHJvbGU9XFxcImRpYWxvZ1xcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJ2aWV3bW9kYWxcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1kaWFsb2cgbW9kYWwtbGdcXFwiIHJvbGU9XFxcImRvY3VtZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPlZpZXcgVGlja2V0PC9oNT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIiBhcmlhLWxhYmVsPVxcXCJDbG9zZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIiB2LWlmPVxcXCJwb3BfdGlja2V0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtNCBic1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TWFjaGluZSBTaXRlPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XFxcInNpdGVfbmFtZVxcXCIgOnJlZHVjZT1cXFwiKG9wdGlvbikgPT4gb3B0aW9uLmlkXFxcIiA6b3B0aW9ucz1cXFwic2l0ZXNcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJDaG9vc2UgU2l0ZSAuLi5cXFwiIHYtbW9kZWw9XFxcInBvcF90aWNrZXQuc2l0ZV9pZFxcXCIgZGlzYWJsZWQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTQgYnNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk1hY2hpbmUgQ2F0ZWdvcnk8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cXFwibmFtZVxcXCIgOnJlZHVjZT1cXFwiKG9wdGlvbikgPT4gb3B0aW9uLmlkXFxcIiA6b3B0aW9ucz1cXFwiY2F0ZWdvcmllc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIkNob29zZSBDYXRlZ29yeSAuLi5cXFwiIHYtbW9kZWw9XFxcInBvcF90aWNrZXQuY2F0ZWdvcnlfaWRcXFwiIGRpc2FibGVkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC00IGJzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5NYWNoaW5lIERlc2NyaXB0aW9uPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XFxcIm5hbWVcXFwiIDpyZWR1Y2U9XFxcIihvcHRpb24pID0+IG9wdGlvbi5pZFxcXCIgOm9wdGlvbnM9XFxcInN1Yl9jYXRlZ29yaWVzXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiQ2hvb3NlIGRlc2NyaXB0aW9uIC4uLlxcXCIgdi1tb2RlbD1cXFwicG9wX3RpY2tldC5zdWJfY2F0ZWdvcnlfaWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XFxcInN1Yl9jYXRlZ29yeV9pZFxcXCIgOmRpc2FibGVkPVxcXCJwb3BfdGlja2V0LmlkICE9ICcnXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtNCBic1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9XFxcIm1hcmdpbjogMFxcXCI+IE1hY2hpbmUgOiA8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+RmFyIE5vIDo8L3N0cm9uZz4ge3sgcG9wX3RpY2tldC5tYWNoaW5lLmZhcl9ubyB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+TWFjaGluZSBOYW1lIDo8L3N0cm9uZz4ge3sgcG9wX3RpY2tldC5tYWNoaW5lLm5hbWUgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPk1hY2hpbmUgQ2hhc3NpcyBObyA6PC9zdHJvbmc+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcG9wX3RpY2tldC5tYWNoaW5lLmNoYXNzaXNfbm8gfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPk1hY2hpbmUgU2wgTm86PC9zdHJvbmc+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcG9wX3RpY2tldC5tYWNoaW5lLm1hY2hpbmVfc3Jfbm8gfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPk1hY2hpbmUgUmVnbiBObyA6PC9zdHJvbmc+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcG9wX3RpY2tldC5tYWNoaW5lLnJlZ25fbm8gfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPk1hY2hpbmUgRW5naW5lIE5vIDo8L3N0cm9uZz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwb3BfdGlja2V0Lm1hY2hpbmUuZW5naW5lX25vIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC00IGJzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgbWItMFxcXCIgdi1pZj1cXFwicG9wX3RpY2tldC5tYWludGVuYW5jZV9wcm92aWRlciA9PSAndmVuZG9yJyAmJlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcF90aWNrZXQuc2VydmljZV90eXBlXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U2VydmljZSBUeXBlPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwb3BfdGlja2V0LnNlcnZpY2VfdHlwZSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIG1iLTBcXFwiIHYtaWY9XFxcInBvcF90aWNrZXQuc2VydmljZV90eXBlID09ICdGcmVlIFNlcnZpY2UnICYmXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wX3RpY2tldC5mcmVlX3NlcnZpY2Vfbm9cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5GcmVlIHNlcnZpY2Ugbm86PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwb3BfdGlja2V0LmZyZWVfc2VydmljZV9ubyB9fS97e1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3BfdGlja2V0Lm1hY2hpbmUuZnJlZV9zZXJ2aWNlX25vXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBtYi0wXFxcIiB2LWlmPVxcXCJwb3BfdGlja2V0LnRpY2tldF90eXBlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+VGlja2V0IFR5cGU8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHBvcF90aWNrZXQudGlja2V0X3R5cGUgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBtYi0wXFxcIiB2LWlmPVxcXCJwb3BfdGlja2V0LnN0YXR1c19kdXJpbmdfY29tcGxhaW50XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U3RhdHVzIER1cmluZyBDb21wbGFpbjogPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwb3BfdGlja2V0LnN0YXR1c19kdXJpbmdfY29tcGxhaW50IH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT1cXFwibWFyZ2luOiAwXFxcIj5NYWNoaW5lJ3MgUHJvYmxlbTogPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwb3BfdGlja2V0LnByb2JsZW1fZGVzY3JpcHRpb24gfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTQgYnNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBtYi0wXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TWFpbnRlbmFuY2UgUHJvdmlkZXI8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHBvcF90aWNrZXQubWFpbnRlbmFuY2VfcHJvdmlkZXIgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wX3RpY2tldC5tYWludGVuYW5jZV9wcm92aWRlciA9PSBcXFwidXNlclxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXFxcIlVzZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFxcXCJWZW5kb3JcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cXFwicG9wX3RpY2tldC5tYWludGVuYW5jZV9wcm92aWRlciA9PSAndmVuZG9yJ1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1mb3I9XFxcIih2ZW5kb3IsIGluZGV4KSBpbiBwb3BfdGlja2V0LmFsbF92ZW5kb3JzXFxcIiA6a2V5PVxcXCIndm0nICsgaW5kZXhcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiY29tbWFcXFwiPnt7IHZlbmRvci5uYW1lIH19PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY29tbWFcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cXFwibmFtZVxcXCIgOnJlZHVjZT1cXFwiKG9wdGlvbikgPT4gb3B0aW9uLmlkXFxcIiA6b3B0aW9ucz1cXFwidXNlcnNcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgdXNlcnMgLi4uXFxcIiB2LW1vZGVsPVxcXCJwb3BfdGlja2V0LnVzZXJfaWRcXFwiIGRpc2FibGVkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC04IGJzXFxcIiB2LWlmPVxcXCJwb3BfdGlja2V0LnN0YWdlc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9XFxcIm1hcmdpbjogMHB4XFxcIj5TdGFnZXM8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVxcXCIoZmllbGQsIHgpIGluIHBvcF90aWNrZXQuc3RhZ2VzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiIDprZXk9XFxcIidzJyArIHhcXFwiIHN0eWxlPVxcXCJib3JkZXI6IDA7IHBhZGRpbmctYm90dG9tOiA4cHhcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtNFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBmaWVsZC5zdGFnZV9ubyB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgZmllbGQuc3RhZ2VfZGF0ZSB8IG15RGF0ZSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgZmllbGQuZGVzY3JpcHRpb24gfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTQgYnNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPVxcXCJtYXJnaW46IDBcXFwiPk1hY2hpbmUncyBBZGRpdGlvbmFsIFByb2JsZW06IDwvbGFiZWw+PGJyIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cXFwicG9wX3RpY2tldC5wcm9ibGVtc1xcXCIgdi1mb3I9XFxcIihpdGVtLCBpbmRleCkgaW4gcG9wX3RpY2tldC5wcm9ibGVtc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cXFwiJ3BhJyArIGluZGV4XFxcIiB2LWh0bWw9XFxcIml0ZW0ucHJvYmxlbVxcXCI+PC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtMyBic1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9XFxcIm1hcmdpbjogMFxcXCI+RXN0aW1hdGVkIE1hdGVyaWFsIGNvc3Q6PC9sYWJlbD48YnIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocG9wX3RpY2tldC5lc3RpbWF0ZWRfbWF0ZXJpYWxfY29zdCArXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3BfdGlja2V0LmFkX2VzdGltYXRlZF9tYXRlcmlhbF9jb3N0KVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHRvQ3VycmVuY3lcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh7e1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3BfdGlja2V0LmVzdGltYXRlZF9tYXRlcmlhbF9jb3N0ICtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxcIitcXFwiICtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wX3RpY2tldC5hZF9lc3RpbWF0ZWRfbWF0ZXJpYWxfY29zdFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19KVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzIG1yLTJcXFwiIDpocmVmPVxcXCJmaWxlLmZpbGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cXFwiKGZpbGUsIHgpIGluIHBvcF90aWNrZXQuZXN0aW1hdGVkX21hdGVyaWFsX2ZpbGVzXFxcIiA6a2V5PVxcXCJmaWxlLmlkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPlZpZXdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wX3RpY2tldC5lc3RpbWF0ZWRfbWF0ZXJpYWxfZmlsZXMubGVuZ3RoID4gMVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8geCArIDFcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFxcXCJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fTwvYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC0zIGJzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT1cXFwibWFyZ2luOiAwXFxcIj5Fc3RpbWF0ZWQgU2VydmljZSBjb3N0OiA8L2xhYmVsPjxiciAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwb3BfdGlja2V0LmVzdGltYXRlZF9zZXJ2aWNlX2Nvc3QgK1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wX3RpY2tldC5hZF9lc3RpbWF0ZWRfc2VydmljZV9jb3N0KVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHRvQ3VycmVuY3lcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh7e1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3BfdGlja2V0LmVzdGltYXRlZF9zZXJ2aWNlX2Nvc3QgK1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXFwiK1xcXCIgK1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3BfdGlja2V0LmFkX2VzdGltYXRlZF9zZXJ2aWNlX2Nvc3RcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSlcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImJ0biBidG4tc3VjY2VzcyBtci0yXFxcIiA6aHJlZj1cXFwiZmlsZS5maWxlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XFxcIihmaWxlLCB4KSBpbiBwb3BfdGlja2V0LmVzdGltYXRlZF9zZXJ2aWNlX2ZpbGVzXFxcIiA6a2V5PVxcXCJmaWxlLmlkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPlZpZXdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wX3RpY2tldC5lc3RpbWF0ZWRfc2VydmljZV9maWxlcy5sZW5ndGggPiAxXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB4ICsgMVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXFxcIlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PC9hPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTMgYnNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkFjdHVhbCBNYXRlcmlhbCBDb3N0IDogPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVxcXCJwb3BfdGlja2V0LmFjdHVhbF9tYXRlcmlhbF9jb3N0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcG9wX3RpY2tldC5hY3R1YWxfbWF0ZXJpYWxfY29zdCB8IHRvQ3VycmVuY3kgfX08L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3MgbXItMlxcXCIgOmhyZWY9XFxcImZpbGUuZmlsZVxcXCIgdi1mb3I9XFxcIihcXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlLCB4XFxuICAgICAgICAgICAgICAgICAgICAgICkgaW4gcG9wX3RpY2tldC5hY3R1YWxfZXN0aW1hdGVkX21hdGVyaWFsX2ZpbGVzXFxcIiA6a2V5PVxcXCJmaWxlLmlkXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+Vmlld1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3BfdGlja2V0LmFjdHVhbF9lc3RpbWF0ZWRfbWF0ZXJpYWxfZmlsZXMubGVuZ3RoID4gMVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8geCArIDFcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFxcXCJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fTwvYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIHYtaWY9XFxcInBvcF90aWNrZXQubWF0ZXJpYWxfcG9cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5NYXRlcmlhbCBDb3N0IFBPIE5vOiA8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJiYWRnZSBiYWRnZS1zZWNvbmRhcnlcXFwiIHYtZm9yPVxcXCIoZGF0YSwgeCkgaW4gcG9wX3RpY2tldC5tYXRlcmlhbF9wb1xcXCIgc3R5bGU9XFxcIm1hcmdpbi1yaWdodDozcHg7XFxcIj57e2RhdGEubmFtZX19PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtMyBic1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+QWN0dWFsIFNlcnZpY2UgQ29zdCA6IDwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cXFwicG9wX3RpY2tldC5hY3R1YWxfc2VydmljZV9jb3N0XFxcIj57e1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3BfdGlja2V0LmFjdHVhbF9zZXJ2aWNlX2Nvc3QgfCB0b0N1cnJlbmN5XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX08L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3MgbXItMlxcXCIgOmhyZWY9XFxcImZpbGUuZmlsZVxcXCIgdi1mb3I9XFxcIihcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlLCB4XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIGluIHBvcF90aWNrZXQuYWN0dWFsX2VzdGltYXRlZF9zZXJ2aWNlX2ZpbGVzXFxcIiA6a2V5PVxcXCJmaWxlLmlkXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+Vmlld1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3BfdGlja2V0LmFjdHVhbF9lc3RpbWF0ZWRfc2VydmljZV9maWxlcy5sZW5ndGggPiAxXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB4ICsgMVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXFxcIlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PC9hPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgdi1pZj1cXFwicG9wX3RpY2tldC5zZXJ2aWNlX3BvXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U2VydmljZSBDb3N0IFBPIE5vOiA8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJiYWRnZSBiYWRnZS1zZWNvbmRhcnlcXFwiIHYtZm9yPVxcXCIoZGF0YSwgeCkgaW4gcG9wX3RpY2tldC5zZXJ2aWNlX3BvXFxcIiBzdHlsZT1cXFwibWFyZ2luLXJpZ2h0OjNweDtcXFwiPnt7ZGF0YS5uYW1lfX08L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC00IGJzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT1cXFwibWFyZ2luOiAwXFxcIj5UaWNrZXQgTm8gOiA8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHBvcF90aWNrZXQudGlja2V0X25vIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC00IGJzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT1cXFwibWFyZ2luOiAwXFxcIj5MaWtlbHkgRGF0ZSA6IDwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcG9wX3RpY2tldC5saWtlbHlfZGF0ZSB8IG15RGF0ZSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtNCBic1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9XFxcIm1hcmdpbjogMFxcXCI+QWN0dWFsIERhdGUgOiA8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHBvcF90aWNrZXQuYWN0dWFsX2RhdGUgfCBteURhdGUgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTQgYnNcXFwiIHYtaWY9XFxcInBvcF90aWNrZXQuY3VycmVudF9ydW5faG91clxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q3VycmVudCBSdW4gSG91ciA6IDwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcG9wX3RpY2tldC5jdXJyZW50X3J1bl9ob3VyIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC00IGJzXFxcIiB2LWlmPVxcXCJwb3BfdGlja2V0LmN1cnJlbnRfa21fcnVuXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5DdXJyZW50IEtNIEhvdXIgOiA8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHBvcF90aWNrZXQuY3VycmVudF9rbV9ydW4gfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTQgYnNcXFwiIHYtaWY9XFxcInBvcF90aWNrZXQuY3VycmVudF9wcm9kdWN0aW9uX2ZpZ1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q3VycmVudCBQcm9kdWN0aW9uIEZpZyA6IDwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcG9wX3RpY2tldC5jdXJyZW50X3Byb2R1Y3Rpb25fZmlnIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC00IGJzXFxcIiB2LWlmPVxcXCJwb3BfdGlja2V0LnByb2R1Y3Rpb25fbG9zc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UHJvZHVjdGlvbiBMb3NzIDogPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwb3BfdGlja2V0LnByb2R1Y3Rpb25fbG9zcyB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtNCBic1xcXCIgdi1pZj1cXFwicG9wX3RpY2tldC5wcm9kdWN0aW9uX2xvc3NfYW1vdW50XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Qcm9kdWN0aW9uIExvc3MgQW1vdW50IDogPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwb3BfdGlja2V0LnByb2R1Y3Rpb25fbG9zc19hbW91bnQgfCB0b0N1cnJlbmN5IH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9zZWN0aW9uPlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5pbXBvcnQgVnVlUmVhZE1vcmVTbW9vdGggZnJvbSBcXFwidnVlLXJlYWQtbW9yZS1zbW9vdGhcXFwiO1xcbmV4cG9ydCBkZWZhdWx0IHtcXG4gICAgY29tcG9uZW50czogeyBWdWVSZWFkTW9yZVNtb290aCB9LFxcbiAgICBkYXRhKCkge1xcbiAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICBjbG9zZV9idG46IHRydWUsXFxuICAgICAgICAgICAgYWRkaXRpb25hbE1vcmU6IFtdLFxcbiAgICAgICAgICAgIHByb2JsZW1zTW9yZTogW10sXFxuICAgICAgICAgICAgc2VhcmNoX21hY2hpbmVzOiBbXSxcXG4gICAgICAgICAgICBzZWFyY2hfc2l0ZXM6IFtdLFxcbiAgICAgICAgICAgIHNlYXJjaDoge1xcbiAgICAgICAgICAgICAgICBwYWdlOiAxLFxcbiAgICAgICAgICAgICAgICBtYWNoaW5lX2lkOiBcXFwiXFxcIixcXG4gICAgICAgICAgICAgICAgc2l0ZV9pZDogXFxcIlxcXCIsXFxuICAgICAgICAgICAgICAgIGNvbXBsYWludF9uYXR1cmU6IFxcXCJcXFwiLFxcbiAgICAgICAgICAgICAgICB0aWNrZXRfdHlwZTpcXFwiXFxcIixcXG4gICAgICAgICAgICAgICAgdGlja2V0OiBcXFwiXFxcIixcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHBvcHRpY2tldDoge30sXFxuICAgICAgICAgICAgY2F0ZWdvcmllczogW10sXFxuICAgICAgICAgICAgc3ViX2NhdGVnb3JpZXM6IFtdLFxcbiAgICAgICAgICAgIHNpdGVzOiBbXSxcXG4gICAgICAgICAgICBzZWxlY3RlZF9tYWNoaW5lOiBcXFwiXFxcIixcXG4gICAgICAgICAgICB1c2VyczogW10sXFxuICAgICAgICAgICAgbWFjaGluZXM6IFtdLFxcbiAgICAgICAgICAgIFRpY2tldHM6IHt9LFxcbiAgICAgICAgICAgIGVkaXRtb2RlOiBmYWxzZSxcXG4gICAgICAgICAgICBNYXRlcmlhbENvc3Q6IG51bGwsXFxuICAgICAgICAgICAgU2VydmljZUNvc3Q6IG51bGwsXFxuICAgICAgICAgICAgZm9ybTogbmV3IEZvcm0oe1xcbiAgICAgICAgICAgICAgICBpZDogXFxcIlxcXCIsXFxuICAgICAgICAgICAgICAgIHNpdGVfaWQ6IFxcXCJcXFwiLFxcbiAgICAgICAgICAgICAgICBjYXRlZ29yeV9pZDogXFxcIlxcXCIsXFxuICAgICAgICAgICAgICAgIHN1Yl9jYXRlZ29yeV9pZDogXFxcIlxcXCIsXFxuICAgICAgICAgICAgICAgIGZyZWVfc2VydmljZV9ubzogXFxcIlxcXCIsXFxuICAgICAgICAgICAgICAgIHRpY2tldF90eXBlOiBcXFwiUGVyaW9kaWMgTWFpbnRlbmFuY2VcXFwiLFxcbiAgICAgICAgICAgICAgICBzZXJ2aWNlX3R5cGU6IFxcXCJQYWlkIFNlcnZpY2VcXFwiLFxcbiAgICAgICAgICAgICAgICBtYWNoaW5lX2lkOiBcXFwiXFxcIixcXG4gICAgICAgICAgICAgICAgdGlja2V0X25vOiBcXFwiXFxcIixcXG4gICAgICAgICAgICAgICAgdmVuZG9yX2lkOiBcXFwiXFxcIixcXG4gICAgICAgICAgICAgICAgdXNlcl9pZDogXFxcIlxcXCIsXFxuICAgICAgICAgICAgICAgIGxpa2VseV9kYXRlOiBcXFwiXFxcIixcXG4gICAgICAgICAgICAgICAgZXN0aW1hdGVkX21hdGVyaWFsX2Nvc3Q6IFxcXCJcXFwiLFxcbiAgICAgICAgICAgICAgICBlc3RpbWF0ZWRfc2VydmljZV9jb3N0OiBcXFwiXFxcIixcXG4gICAgICAgICAgICAgICAgbWFpbnRlbmFuY2VfcHJvdmlkZXI6IFxcXCJ2ZW5kb3JcXFwiLFxcbiAgICAgICAgICAgICAgICBwcm9ibGVtX2Rlc2NyaXB0aW9uOiBcXFwiXFxcIixcXG4gICAgICAgICAgICAgICAgY29tcGxhaW50X25hdHVyZTogXFxcIk1ham9yXFxcIixcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICBzdGFnZXM6IFtcXG4gICAgICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFxcXCJcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgc3RhZ2Vfbm86IFxcXCJcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgc3RhZ2VfZGF0ZTogXFxcIlxcXCIsXFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXFxcIlxcXCIsXFxuICAgICAgICAgICAgICAgICAgICBmaWxlOiBcXFwiXFxcIixcXG4gICAgICAgICAgICAgICAgICAgIG5ld19maWxlOiBcXFwiXFxcIixcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBdLFxcblxcbiAgICAgICAgICAgIGZvcm1jbG9zZTogbmV3IEZvcm0oe1xcbiAgICAgICAgICAgICAgICBpZDogXFxcIlxcXCIsXFxuICAgICAgICAgICAgICAgIG1hY2hpbmVfc3RhdHVzOiBcXFwiXFxcIixcXG4gICAgICAgICAgICAgICAgZWRpdF90eXBlOiBcXFwiY2xvc2V0aWNrZXRcXFwiLFxcbiAgICAgICAgICAgICAgICB0aWNrZXRfdHlwZTogXFxcIlBlcmlvZGljIE1haW50ZW5hbmNlXFxcIixcXG4gICAgICAgICAgICAgICAgYWN0dWFsX2RhdGU6IFxcXCJcXFwiLFxcbiAgICAgICAgICAgICAgICBhY3R1YWxfbWF0ZXJpYWxfY29zdDogXFxcIlxcXCIsXFxuICAgICAgICAgICAgICAgIGFjdHVhbF9zZXJ2aWNlX2Nvc3Q6IFxcXCJcXFwiLFxcbiAgICAgICAgICAgICAgICBjdXJyZW50X3J1bl9ob3VyOiBcXFwiXFxcIixcXG4gICAgICAgICAgICAgICAgY3VycmVudF9rbV9ydW46IFxcXCJcXFwiLFxcbiAgICAgICAgICAgICAgICBjdXJyZW50X3Byb2R1Y3Rpb25fZmlnOiBcXFwiXFxcIixcXG4gICAgICAgICAgICAgICAgcHJvZHVjdGlvbl9sb3NzOiBcXFwiXFxcIixcXG4gICAgICAgICAgICAgICAgcHJvZHVjdGlvbl9sb3NzX2Ftb3VudDogXFxcIlxcXCIsXFxuICAgICAgICAgICAgICAgIHN0YXR1czogXFxcIkNsb3NlZFxcXCIsXFxuICAgICAgICAgICAgICAgIHZlbmRvcl9yZXNvbHZlX2RhdGU6IFxcXCJcXFwiLFxcbiAgICAgICAgICAgICAgICB2ZW5kb3JfYXR0YWluX2RhdGU6IFxcXCJcXFwiLFxcbiAgICAgICAgICAgICAgICB2ZW5kb3JfcmVzcG9uc2VfZGF0ZTogXFxcIlxcXCIsXFxuICAgICAgICAgICAgICAgIHZlbmRvcl9jYWxsX2RhdGU6IFxcXCJcXFwiLFxcbiAgICAgICAgICAgICAgICByY2E6IFxcXCJcXFwiLFxcbiAgICAgICAgICAgICAgICBtYXRlcmlhbFBPUzogXFxcIlxcXCIsXFxuICAgICAgICAgICAgICAgIHNlcnZpY2VQT1M6IFxcXCJcXFwiXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICAgICAgcG9wX21hY2hpbmU6IFxcXCJcXFwiLFxcbiAgICAgICAgICAgIHBvcF90aWNrZXQ6IFxcXCJcXFwiLFxcbiAgICAgICAgICAgIG9wbl9zdGFnZTogW1xcbiAgICAgICAgICAgICAgICBcXFwiVmVuZG9yIGNyZWF0ZWRcXFwiLFxcbiAgICAgICAgICAgICAgICBcXFwiVmVuZG9yIEFzc2lnbmVkXFxcIixcXG4gICAgICAgICAgICAgICAgXFxcIk9yZGVyIGlzc3VlZFxcXCIsXFxuICAgICAgICAgICAgICAgIFxcXCJQYXltZW50IHVuZGVyIHByb2Nlc3NcXFwiLFxcbiAgICAgICAgICAgICAgICBcXFwiUGF5bWVudCBEb25lXFxcIixcXG4gICAgICAgICAgICAgICAgXFxcIkxvZ2lzdGljcyB1bmRlciBwcm9jZXNzXFxcIixcXG4gICAgICAgICAgICAgICAgXFxcIk1hdGVyaWFscyBkZXNwYXRjaGVkXFxcIixcXG4gICAgICAgICAgICAgICAgXFxcIk1hdGVyaWFsIHJlY2VpdmVkIGF0IHNpdGVcXFwiLFxcbiAgICAgICAgICAgICAgICBcXFwiTWFpbnRhaW5hY2UgdW5kZXIgcHJvZ3Jlc3NcXFwiLFxcbiAgICAgICAgICAgIF0sXFxuICAgICAgICAgICAgbGFzdF9zdGFnZV9pbmRleDogMCxcXG4gICAgICAgICAgICBsYXN0X3N0YWdlX2RhdGU6IFxcXCJcXFwiLFxcblxcbiAgICAgICAgICAgIGpzb25fZmllbGRzOiB7XFxuICAgICAgICAgICAgICAgIFxcXCJUaWNrZXQgTm9cXFwiOiBcXFwidGlja2V0X25vXFxcIixcXG4gICAgICAgICAgICAgICAgXFxcIlRpY2tldCBUeXBlXFxcIjogXFxcInRpY2tldF90eXBlXFxcIixcXG4gICAgICAgICAgICAgICAgTWFjaGluZToge1xcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6IFxcXCJtYWNoaW5lXFxcIixcXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiAodmFsKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbC5uYW1lICsgXFxcIiAtIFxcXCIgKyB2YWwuZmFyX25vO1xcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgXFxcIkxpa2VseSBEYXRlXFxcIjogXFxcImxpa2VseV9kYXRlXFxcIixcXG4gICAgICAgICAgICAgICAgXFxcIlJldmVyc2lvbiBEYXRlXFxcIjogXFxcInJldmVyc2lvbl9kYXRlXFxcIixcXG4gICAgICAgICAgICAgICAgXFxcIlJldmVyc2lvbiBSZWFzb25cXFwiOiBcXFwicmV2ZXJzaW9uX3JlYXNvblxcXCIsXFxuICAgICAgICAgICAgICAgIFxcXCJFc3RpbWF0ZWQgTWF0ZXJpYWwgQ29zdFxcXCI6IFxcXCJlc3RpbWF0ZWRfbWF0ZXJpYWxfY29zdFxcXCIsXFxuICAgICAgICAgICAgICAgIFxcXCJFc3RpbWF0ZWQgU2VydmljZSBDb3N0XFxcIjogXFxcImVzdGltYXRlZF9zZXJ2aWNlX2Nvc3RcXFwiLFxcbiAgICAgICAgICAgICAgICBcXFwiQWN0dWFsIERhdGVcXFwiOiBcXFwiYWN0dWFsX2RhdGVcXFwiLFxcbiAgICAgICAgICAgICAgICBcXFwiQWN0dWFsIE1hdGVyaWFsIENvc3RcXFwiOiBcXFwiYWN0dWFsX21hdGVyaWFsX2Nvc3RcXFwiLFxcbiAgICAgICAgICAgICAgICBcXFwiQWN0dWFsIFNlcnZpY2UgQ29zdFxcXCI6IFxcXCJhY3R1YWxfc2VydmljZV9jb3N0XFxcIixcXG4gICAgICAgICAgICAgICAgXFxcIlN0YXR1c1xcXCI6IFxcXCJzdGF0dXNcXFwiLFxcbiAgICAgICAgICAgICAgICBcXFwiU2VydmljZSBUeXBlXFxcIjogXFxcInNlcnZpY2VfdHlwZVxcXCIsXFxuICAgICAgICAgICAgICAgIFxcXCJNYWludGVuYW5jZSBQcm92aWRlclxcXCI6IFxcXCJtYWludGVuYW5jZV9wcm92aWRlclxcXCIsXFxuICAgICAgICAgICAgICAgIFxcXCJQcm9ibGVtIERlc2NyaXB0aW9uXFxcIjogXFxcInByb2JsZW1fZGVzY3JpcHRpb25cXFwiLFxcbiAgICAgICAgICAgICAgICBcXFwiQ29tcGxhaW50IE5hdHVyZVxcXCI6IFxcXCJjb21wbGFpbnRfbmF0dXJlXFxcIixcXG4gICAgICAgICAgICAgICAgXFxcIlN0YXR1cyBEdXJpbmcgQ29tcGxhaW50XFxcIjogXFxcInN0YXR1c19kdXJpbmdfY29tcGxhaW50XFxcIixcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGpzb25fbWV0YTogW1xcbiAgICAgICAgICAgICAgICBbXFxuICAgICAgICAgICAgICAgICAgICB7XFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcXFwiY2hhcnNldFxcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFxcXCJ1dGYtOFxcXCIsXFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBdLFxcbiAgICAgICAgICAgIF0sXFxuICAgICAgICB9O1xcbiAgICB9LFxcbiAgICBtZXRob2RzOiB7XFxuICAgICAgICB0b2dnbGVFeHBhbmQoZGF0YSwgaW5kZXgpIHtcXG4gICAgICBjb25zdCBpdGVtSW5kZXggPSBkYXRhLmluZGV4T2YoaW5kZXgpO1xcbiAgICAgIGlmIChpdGVtSW5kZXggPT09IC0xKSB7XFxuICAgICAgICBkYXRhLnB1c2goaW5kZXgpO1xcbiAgICAgIH0gZWxzZSB7XFxuICAgICAgICBkYXRhLnNwbGljZShpdGVtSW5kZXgsIDEpO1xcbiAgICAgIH1cXG4gICAgfSxcXG4gICAgaXNFeHBhbmRlZChpbmRleCkge1xcbiAgICAgIHJldHVybiBkYXRhLmluY2x1ZGVzKGluZGV4KTtcXG4gICAgfSxcXG4gICAgZ2V0VHJ1bmNhdGVkVGV4dCh0ZXh0LCBsZW5ndGggPSA1MCkge1xcbiAgICAgIHJldHVybiB0ZXh0Lmxlbmd0aCA+IGxlbmd0aCA/IHRleHQuc3Vic3RyaW5nKDAsIGxlbmd0aCkgKyAnLi4uJyA6IHRleHQ7XFxuICAgIH0sXFxuICAgICAgICBhc3luYyByZXNldF9maWx0ZXIoKSB7XFxuICAgICAgICAgICAgdGhpcy5zZWFyY2ggPSB7XFxuICAgICAgICAgICAgICAgIHBhZ2U6IDEsXFxuICAgICAgICAgICAgICAgIG1hY2hpbmVfaWQ6IFxcXCJcXFwiLFxcbiAgICAgICAgICAgICAgICBzaXRlX2lkOiBcXFwiXFxcIixcXG4gICAgICAgICAgICAgICAgY29tcGxhaW50X25hdHVyZTogXFxcIlxcXCIsXFxuICAgICAgICAgICAgICAgIHRpY2tldF90eXBlOiBcXFwiXFxcIixcXG4gICAgICAgICAgICAgICAgdGlja2V0OiBcXFwiXFxcIixcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgYXN5bmMgZXhwb3J0X2NzdigpIHtcXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcXFwiYXBpL3RpY2tldD9leHBvcnQ9MVxcXCIsIHtcXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XFxuICAgICAgICAgICAgICAgICAgICBzZWFyY2g6IHRoaXMuc2VhcmNoLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhLmRhdGE7XFxuICAgICAgICB9LFxcbiAgICAgICAgc3RhcnREb3dubG9hZCgpIHtcXG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xcbiAgICAgICAgICAgICAgICB0aXRsZTogXFxcIlBsZWFzZSBXYWl0ICFcXFwiLFxcbiAgICAgICAgICAgICAgICBodG1sOiBcXFwiRGF0YSBwb3B1bGF0aW5nXFxcIiwgLy8gYWRkIGh0bWwgYXR0cmlidXRlIGlmIHlvdSB3YW50IG9yIHJlbW92ZVxcbiAgICAgICAgICAgICAgICBhbGxvd091dHNpZGVDbGljazogZmFsc2UsXFxuICAgICAgICAgICAgICAgIG9uQmVmb3JlT3BlbjogKCkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgU3dhbC5zaG93TG9hZGluZygpO1xcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIH0pO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGZpbmlzaERvd25sb2FkKCkge1xcbiAgICAgICAgICAgIFN3YWwuY2xvc2UoKTtcXG4gICAgICAgIH0sXFxuICAgICAgICBzY2xpY2soeCwgcCA9IFxcXCJcXFwiKSB7XFxuICAgICAgICAgICAgaWYgKHApIHtcXG4gICAgICAgICAgICAgICAgbGV0IGEgPSB0aGlzLnByb2JsZW1zTW9yZVt4XSA/IGZhbHNlIDogdHJ1ZTtcXG4gICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMucHJvYmxlbXNNb3JlLCB4LCBhKTtcXG4gICAgICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgICAgICBsZXQgYSA9IHRoaXMuYWRkaXRpb25hbE1vcmVbeF0gPyBmYWxzZSA6IHRydWU7XFxuICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLmFkZGl0aW9uYWxNb3JlLCB4LCBhKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgZ2V0TGFiZWwodmFsKSB7XFxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09IFxcXCJvYmplY3RcXFwiKSB7XFxuICAgICAgICAgICAgICAgIHJldHVybiB2YWwuZmFyX25vICsgXFxcIiAtIFxcXCIgKyB2YWwubmFtZTtcXG4gICAgICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICB2aWV3TW9kYWwodGlja2V0KSB7XFxuICAgICAgICAgICAgdGhpcy5wb3BfdGlja2V0ID0gXFxcIlxcXCI7XFxuXFxuICAgICAgICAgICAgYXhpb3NcXG4gICAgICAgICAgICAgICAgLmdldChcXFwiYXBpL3RpY2tldC9cXFwiICsgdGlja2V0LmlkKVxcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcF90aWNrZXQgPSByZXMuZGF0YS5kYXRhO1xcbiAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3BfdGlja2V0ID0gdGlja2V0O1xcbiAgICAgICAgICAgICAgICB9KTtcXG5cXG4gICAgICAgICAgICBheGlvcy5nZXQoXFxcImFwaS9jYXRlZ29yeS9cXFwiICsgdGlja2V0LmNhdGVnb3J5X2lkKS50aGVuKChyZXMpID0+IHtcXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJfY2F0ZWdvcmllcyA9IHJlcy5kYXRhLmRhdGE7XFxuICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgJChcXFwiI3ZpZXdtb2RhbFxcXCIpLm1vZGFsKFxcXCJzaG93XFxcIik7XFxuICAgICAgICB9LFxcbiAgICAgICAgQWRkU3RhZ2UoKSB7XFxuICAgICAgICAgICAgdGhpcy5zdGFnZXMucHVzaCh7XFxuICAgICAgICAgICAgICAgIGlkOiBcXFwiXFxcIixcXG4gICAgICAgICAgICAgICAgc3RhZ2Vfbm86IFxcXCJcXFwiLFxcbiAgICAgICAgICAgICAgICBzdGFnZV9kYXRlOiBcXFwiXFxcIixcXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFxcXCJcXFwiLFxcbiAgICAgICAgICAgICAgICBmaWxlOiBcXFwiXFxcIixcXG4gICAgICAgICAgICAgICAgbmV3X2ZpbGU6IFxcXCJcXFwiLFxcbiAgICAgICAgICAgIH0pO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGFzeW5jIGNob29zZV9zdGFnZV9maWxlKGV2ZW50LCB4KSB7XFxuICAgICAgICAgICAgdGhpcy5zdGFnZXNbeF0ubmV3X2ZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XFxuICAgICAgICB9LFxcblxcbiAgICAgICAgYXN5bmMgdXBsb2FkTWF0ZXJpYWxDb3N0KGV2ZW50KSB7XFxuICAgICAgICAgICAgdGhpcy5NYXRlcmlhbENvc3QgPSBldmVudC50YXJnZXQuZmlsZXM7XFxuICAgICAgICB9LFxcbiAgICAgICAgYXN5bmMgdXBsb2FkU2VydmljZUNvc3QoZXZlbnQpIHtcXG4gICAgICAgICAgICB0aGlzLlNlcnZpY2VDb3N0ID0gZXZlbnQudGFyZ2V0LmZpbGVzO1xcbiAgICAgICAgfSxcXG5cXG4gICAgICAgIGdldFJlc3VsdHMocGFnZSA9IDEpIHtcXG4gICAgICAgICAgICB0aGlzLiRQcm9ncmVzcy5zdGFydCgpO1xcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoLnBhZ2UgPSBwYWdlO1xcbiAgICAgICAgICAgIGF4aW9zXFxuICAgICAgICAgICAgICAgIC5nZXQoXFxcIi9hcGkvdGlja2V0XFxcIiwge1xcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB0aGlzLnNlYXJjaCxcXG4gICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVGlja2V0cyA9IGRhdGEuZGF0YS5kYXRhO1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRpdGlvbmFsTW9yZSA9IG5ldyBBcnJheSh0aGlzLlRpY2tldHMuZGF0YS5sZW5ndGgpLmZpbGwoZmFsc2UpO1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ibGVtc01vcmUgPSBuZXcgQXJyYXkodGhpcy5UaWNrZXRzLmRhdGEubGVuZ3RoKS5maWxsKGZhbHNlKTtcXG4gICAgICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgdGhpcy4kUHJvZ3Jlc3MuZmluaXNoKCk7XFxuICAgICAgICB9LFxcblxcbiAgICAgICAgY2FsY3VsYXRlX2xvc3MoKSB7XFxuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWNsb3NlLmFjdHVhbF9kYXRlICYmIHRoaXMucG9wX3RpY2tldC5jcmVhdGVkX2F0KSB7XFxuICAgICAgICAgICAgICAgIGxldCBhID0gbmV3IERhdGUodGhpcy5mb3JtY2xvc2UuYWN0dWFsX2RhdGUpLnRvSVNPU3RyaW5nKCk7XFxuICAgICAgICAgICAgICAgIGxldCBiID0gbmV3IERhdGUodGhpcy5wb3BfdGlja2V0LmNyZWF0ZWRfYXQpLnRvSVNPU3RyaW5nKCk7XFxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVCID0gbW9tZW50KGEpO1xcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlQyA9IG1vbWVudChiKTtcXG5cXG5cXG4gICAgICAgICAgICAgICAgdmFyIERpZmYgPSBkYXRlQi5kaWZmKGRhdGVDLCAnZGF5cycpICsgMTtcXG5cXG4gICAgICAgICAgICAgICAgbGV0IGhycyA9IHRoaXMucG9wX21hY2hpbmUucHJkbG9zc19ocnNcXG4gICAgICAgICAgICAgICAgbGV0IHJhdGUgPSB0aGlzLnBvcF9tYWNoaW5lLnByZGxvc3NfaHJfcmF0ZVxcbiAgICAgICAgICAgICAgICBsZXQgdGxvc3MgPSAoRGlmZiAqIGhycyk7XFxuICAgICAgICAgICAgICAgIHRoaXMuZm9ybWNsb3NlLnByb2R1Y3Rpb25fbG9zc19hbW91bnQgPSAodGxvc3MgKiByYXRlKVxcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1jbG9zZS5wcm9kdWN0aW9uX2xvc3MgPSB0bG9zc1xcblxcblxcbmNvbnNvbGUubG9nKGhycyxyYXRlLERpZmYpO1xcblxcblxcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgIH0sXFxuICAgICAgICBzdWJtaXRDbG9zZVRpY2tldCgpIHtcXG4gICAgICAgICAgICB0aGlzLiRmb3JjZVVwZGF0ZSgpO1xcbiAgICAgICAgICAgIHRoaXMuJHZhbGlkYXRvci52YWxpZGF0ZUFsbChcXFwiY2xvc2V0aWNrZXRcXFwiKS50aGVuKGFzeW5jICh2YWxpZCkgPT4ge1xcbiAgICAgICAgICAgICAgICBpZiAodmFsaWQpIHtcXG4gICAgICAgICAgICAgICAgICAgIGxldCBwb3BfbG9hZGVyID0gdGhpcy4kbG9hZGluZy5zaG93KHt9KTtcXG4gICAgICAgICAgICAgICAgICAgIGxldCBsYXN0X21EYXRlID0gdGhpcy5wb3BfbWFjaGluZS5sYXN0X21haW50ZW5hbmNlc1xcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5wb3BfbWFjaGluZS5sYXN0X21haW50ZW5hbmNlcy5kYXRldGltZVxcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5wb3BfbWFjaGluZS5sYXN0X21haW50ZW5hbmNlX2RhdGU7XFxuXFxuICAgICAgICAgICAgICAgICAgICBpZiAoXFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdF9tRGF0ZSAmJlxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybWNsb3NlLmFjdHVhbF9kYXRlICYmXFxuICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZS5wYXJzZShcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9tZW50KHRoaXMuZm9ybWNsb3NlLmFjdHVhbF9kYXRlKS5mb3JtYXQoXFxcIk1NTSxERCBZWVlZXFxcIilcXG4gICAgICAgICAgICAgICAgICAgICAgICApIDwgRGF0ZS5wYXJzZShtb21lbnQobGFzdF9tRGF0ZSkuZm9ybWF0KFxcXCJNTU0sREQgWVlZWVxcXCIpKVxcbiAgICAgICAgICAgICAgICAgICAgKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9wX2xvYWRlci5oaWRlKCk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXFwiWW91IGNhbiBub3QgYWRkIHByZXZpb3VzIGRhdGUncyBkYXRhLCBQbGVhc2UgcmVtb3ZlIHJlY29yZCBmcm9tIG1haW50ZW5hbmNlIGxpc3QuXFxcIixcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxcIlxcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJ3YXJuaW5nXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VfYnRuID0gZmFsc2U7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtY2xvc2VcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnB1dChcXFwiL2FwaS90aWNrZXQvXFxcIiArIHRoaXMuZm9ybWNsb3NlLmlkKVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN1Y2Nlc3MpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFxcXCIjY2xvc2Vtb2RhbFxcXCIpLm1vZGFsKFxcXCJoaWRlXFxcIik7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFxcXCJzdWNjZXNzXFxcIixcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLmRhdGEubWVzc2FnZSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZF9maWxlcyh0aGlzLmZvcm1jbG9zZS5pZCwgXFxcImFjdHVhbFxcXCIpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHZhbGlkYXRvci5yZXNldCgpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybWNsb3NlLnJlc2V0KCk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkVGlja2V0cygpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZV9idG4gPSB0cnVlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wX2xvYWRlci5oaWRlKCk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlX2J0biA9IHRydWU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3BfbG9hZGVyLmhpZGUoKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZXJyLnJlc3BvbnNlLmRhdGEgIT0gXFxcInVuZGVmaW5lZFxcXCIpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzZXRFcnJvcnNGcm9tUmVzcG9uc2UoZXJyLnJlc3BvbnNlLmRhdGEpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH0pO1xcbiAgICAgICAgfSxcXG5cXG4gICAgICAgIGNsb3NlTW9kYWwodGlja2V0KSB7XFxuICAgICAgICAgICAgdGhpcy4kdmFsaWRhdG9yLnBhdXNlKCk7XFxuICAgICAgICAgICAgJChcXFwiI2Nsb3NlbW9kYWxcXFwiKS5tb2RhbChcXFwic2hvd1xcXCIpO1xcbiAgICAgICAgICAgIHRoaXMuJHZhbGlkYXRvci5yZXNldCgpO1xcbiAgICAgICAgICAgIHRoaXMuZm9ybWNsb3NlLnJlc2V0KCk7XFxuICAgICAgICAgICAgdGhpcy4kcmVmcy5maWxlYWN0dWFsc2VydmljZS52YWx1ZSA9IG51bGw7XFxuICAgICAgICAgICAgdGhpcy4kcmVmcy5maWxlYWN0dWFsbWF0ZXJpYWwudmFsdWUgPSBudWxsO1xcbiAgICAgICAgICAgIHRoaXMucG9wX3RpY2tldCA9IHRpY2tldDtcXG4gICAgICAgICAgICB0aGlzLnBvcF9tYWNoaW5lID0gdGlja2V0Lm1hY2hpbmU7XFxuICAgICAgICAgICAgdGhpcy5mb3JtY2xvc2UuZmlsbCh0aWNrZXQpO1xcbiAgICAgICAgICAgIHRoaXMuZm9ybWNsb3NlLmVkaXRfdHlwZSA9IFxcXCJjbG9zZXRpY2tldFxcXCI7XFxuICAgICAgICAgICAgdGhpcy4kdmFsaWRhdG9yLnJlc3VtZSgpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGVkaXRNb2RhbCh0aWNrZXQpIHtcXG4gICAgICAgICAgICB0aGlzLmVkaXRtb2RlID0gdHJ1ZTtcXG4gICAgICAgICAgICB0aGlzLiR2YWxpZGF0b3IucGF1c2UoKTtcXG4gICAgICAgICAgICB0aGlzLmZvcm0ucmVzZXQoKTtcXG4gICAgICAgICAgICB0aGlzLnBvcF90aWNrZXQgPSB0aWNrZXQ7XFxuICAgICAgICAgICAgLy8gaWYgKHRoaXMuJGdhdGUuaXNBZG1pbigpKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuZmlsZXNlcnZpY2UudmFsdWUgPSBudWxsO1xcbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLmZpbGVtYXRlcmlhbC52YWx1ZSA9IG51bGw7XFxuICAgICAgICAgICAgLy8gfVxcbiAgICAgICAgICAgIHRoaXMuTWF0ZXJpYWxDb3N0ID0gbnVsbDtcXG4gICAgICAgICAgICB0aGlzLlNlcnZpY2VDb3N0ID0gbnVsbDtcXG4gICAgICAgICAgICAkKFxcXCIjYWRkTmV3XFxcIikubW9kYWwoXFxcInNob3dcXFwiKTtcXG4gICAgICAgICAgICB0aGlzLmZvcm0uZmlsbCh0aWNrZXQpO1xcbiAgICAgICAgICAgIHRoaXMuZm9ybS5saWtlbHlfZGF0ZSA9IHRpY2tldC5saWtlbHlfZGF0ZVxcbiAgICAgICAgICAgICAgICA/IG5ldyBEYXRlKHRpY2tldC5saWtlbHlfZGF0ZSkudG9JU09TdHJpbmcoKVxcbiAgICAgICAgICAgICAgICA6IFxcXCJcXFwiO1xcbiAgICAgICAgICAgIHRoaXMuc3RhZ2VzID0gW107XFxuICAgICAgICAgICAgaWYgKHRpY2tldC5zdGFnZXMgJiYgdGlja2V0LnN0YWdlcy5sZW5ndGggPiAwKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhZ2VzID0gdGlja2V0LnN0YWdlcztcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgdGhpcy4kdmFsaWRhdG9yLnJlc3VtZSgpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIG5ld01vZGFsKCkge1xcbiAgICAgICAgICAgIHRoaXMuc3RhZ2VzID0gW107XFxuICAgICAgICAgICAgdGhpcy5BZGRTdGFnZSgpO1xcbiAgICAgICAgICAgIHRoaXMuZWRpdG1vZGUgPSBmYWxzZTtcXG4gICAgICAgICAgICB0aGlzLiR2YWxpZGF0b3IucmVzZXQoKTtcXG4gICAgICAgICAgICB0aGlzLiR2YWxpZGF0b3IucGF1c2UoKTtcXG4gICAgICAgICAgICB0aGlzLmZvcm0ucmVzZXQoKTtcXG4gICAgICAgICAgICAvLyBpZiAodGhpcy4kZ2F0ZS5pc0FkbWluKCkpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5maWxlc2VydmljZS52YWx1ZSA9IG51bGw7XFxuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuZmlsZW1hdGVyaWFsLnZhbHVlID0gbnVsbDtcXG4gICAgICAgICAgICAvLyB9XFxuICAgICAgICAgICAgdGhpcy5NYXRlcmlhbENvc3QgPSBudWxsO1xcbiAgICAgICAgICAgIHRoaXMuU2VydmljZUNvc3QgPSBudWxsO1xcbiAgICAgICAgICAgICQoXFxcIiNhZGROZXdcXFwiKS5tb2RhbChcXFwic2hvd1xcXCIpO1xcbiAgICAgICAgICAgIHRoaXMuJHZhbGlkYXRvci5yZXN1bWUoKTtcXG4gICAgICAgIH0sXFxuXFxuICAgICAgICBsb2FkVGlja2V0cygpIHtcXG4gICAgICAgICAgICAvLyBpZiAodGhpcy4kZ2F0ZS5pc0FkbWluKCkpIHtcXG4gICAgICAgICAgICBsZXQgcG9wX2xvYWRlciA9IHRoaXMuJGxvYWRpbmcuc2hvdyh7fSk7XFxuICAgICAgICAgICAgYXhpb3NcXG4gICAgICAgICAgICAgICAgLmdldChcXFwiL2FwaS90aWNrZXRcXFwiLCB7XFxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHRoaXMuc2VhcmNoLFxcbiAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5UaWNrZXRzID0gZGF0YS5kYXRhLmRhdGE7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZGl0aW9uYWxNb3JlID0gbmV3IEFycmF5KHRoaXMuVGlja2V0cy5kYXRhLmxlbmd0aCkuZmlsbChmYWxzZSk7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2JsZW1zTW9yZSA9IG5ldyBBcnJheSh0aGlzLlRpY2tldHMuZGF0YS5sZW5ndGgpLmZpbGwoZmFsc2UpO1xcbiAgICAgICAgICAgICAgICAgICAgcG9wX2xvYWRlci5oaWRlKCk7XFxuICAgICAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICBwb3BfbG9hZGVyLmhpZGUoKTtcXG4gICAgICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgLy8gICB9XFxuICAgICAgICB9LFxcblxcbiAgICAgICAgYXN5bmMgdXBsb2FkX2ZpbGVzKGlkLCBpc2FjdHVhbCA9IGZhbHNlKSB7XFxuICAgICAgICAgICAgbGV0IGZsID0gMDtcXG4gICAgICAgICAgICBpZiAodGhpcy5NYXRlcmlhbENvc3QpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5NYXRlcmlhbENvc3QuZm9yRWFjaCgoZmlsZSkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZkID0gbmV3IEZvcm1EYXRhKCk7XFxuICAgICAgICAgICAgICAgICAgICBmZC5hcHBlbmQoYGZpbGVgLCBmaWxlKTtcXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc2FjdHVhbCkge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGZkLmFwcGVuZChgZmlsZV90eXBlYCwgXFxcIkFjdHVhbCBFc3RpbWF0ZWQgTWF0ZXJpYWxcXFwiKTtcXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZmQuYXBwZW5kKGBmaWxlX3R5cGVgLCBcXFwiRXN0aW1hdGVkIE1hdGVyaWFsXFxcIik7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICBmZC5hcHBlbmQoYHRpY2tldF9pZGAsIGlkKTtcXG4gICAgICAgICAgICAgICAgICAgIGF4aW9zLnBvc3QoXFxcImFwaS90aWNrZXQvZmlsZXNcXFwiLCBmZCkudGhlbigocmVzKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXFxcImdhbGxlcnkgdXBsb2FkZWRcXFwiKTtcXG4gICAgICAgICAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgaWYgKHRoaXMuU2VydmljZUNvc3QpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5TZXJ2aWNlQ29zdC5mb3JFYWNoKChmaWxlKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICB2YXIgZmQgPSBuZXcgRm9ybURhdGEoKTtcXG4gICAgICAgICAgICAgICAgICAgIGZkLmFwcGVuZChgZmlsZWAsIGZpbGUpO1xcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzYWN0dWFsKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZmQuYXBwZW5kKGBmaWxlX3R5cGVgLCBcXFwiQWN0dWFsIEVzdGltYXRlZCBTZXJ2aWNlXFxcIik7XFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGZkLmFwcGVuZChgZmlsZV90eXBlYCwgXFxcIkVzdGltYXRlZCBTZXJ2aWNlXFxcIik7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICBmZC5hcHBlbmQoYHRpY2tldF9pZGAsIGlkKTtcXG4gICAgICAgICAgICAgICAgICAgIGF4aW9zLnBvc3QoXFxcImFwaS90aWNrZXQvZmlsZXNcXFwiLCBmZCkudGhlbigocmVzKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXFxcImdhbGxlcnkgdXBsb2FkZWRcXFwiKTtcXG4gICAgICAgICAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcblxcbiAgICAgICAgYXN5bmMgdXBsb2FkX3N0YWdlcyhpZCkge1xcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YWdlcykge1xcbiAgICAgICAgICAgICAgICB0aGlzLnN0YWdlcy5mb3JFYWNoKChzdGFnZSkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZkID0gbmV3IEZvcm1EYXRhKCk7XFxuICAgICAgICAgICAgICAgICAgICBmZC5hcHBlbmQoYGlkYCwgc3RhZ2UuaWQpO1xcbiAgICAgICAgICAgICAgICAgICAgZmQuYXBwZW5kKGBzdGFnZV9ub2AsIHN0YWdlLnN0YWdlX25vKTtcXG4gICAgICAgICAgICAgICAgICAgIGZkLmFwcGVuZChgc3RhZ2VfZGF0ZWAsIHN0YWdlLnN0YWdlX2RhdGUpO1xcbiAgICAgICAgICAgICAgICAgICAgZmQuYXBwZW5kKGBkZXNjcmlwdGlvbmAsIHN0YWdlLmRlc2NyaXB0aW9uKTtcXG4gICAgICAgICAgICAgICAgICAgIC8vZmQuYXBwZW5kKGBuZXdfZmlsZWAsIHN0YWdlLm5ld19maWxlKTtcXG4gICAgICAgICAgICAgICAgICAgIC8vIGZkLmFwcGVuZChgZmlsZWAsIHN0YWdlLmZpbGUpO1xcbiAgICAgICAgICAgICAgICAgICAgZmQuYXBwZW5kKGB0aWNrZXRfaWRgLCBpZCk7XFxuICAgICAgICAgICAgICAgICAgICBheGlvcy5wb3N0KFxcXCJhcGkvdGlja2V0L3N0YWdlc1xcXCIsIGZkKS50aGVuKChyZXMpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcXFwic3RhZ2VzIHVwbG9hZGVkXFxcIik7XFxuICAgICAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG5cXG4gICAgICAgIHN1Ym1pdFRpY2tldCgpIHtcXG4gICAgICAgICAgICB0aGlzLiR2YWxpZGF0b3IudmFsaWRhdGVBbGwoKS50aGVuKGFzeW5jICh2YWxpZCkgPT4ge1xcbiAgICAgICAgICAgICAgICBpZiAodmFsaWQpIHtcXG4gICAgICAgICAgICAgICAgICAgIGxldCBwb3BfbG9hZGVyID0gdGhpcy4kbG9hZGluZy5zaG93KHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXI6IHRoaXMuJHJlZnMudnBzX3N1Ym1pdF9wb3AsXFxuICAgICAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uaWQpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnB1dChcXFwiL2FwaS90aWNrZXQvXFxcIiArIHRoaXMuZm9ybS5pZClcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdWNjZXNzKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcXFwiI2FkZE5ld1xcXCIpLm1vZGFsKFxcXCJoaWRlXFxcIik7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFxcXCJzdWNjZXNzXFxcIixcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLmRhdGEubWVzc2FnZSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZF9zdGFnZXModGhpcy5mb3JtLmlkKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZF9maWxlcyh0aGlzLmZvcm0uaWQpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFRpY2tldHMoKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcF9sb2FkZXIuaGlkZSgpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wX2xvYWRlci5oaWRlKCk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGVyci5yZXNwb25zZS5kYXRhICE9IFxcXCJ1bmRlZmluZWRcXFwiKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0RXJyb3JzRnJvbVJlc3BvbnNlKGVyci5yZXNwb25zZS5kYXRhKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucG9zdChcXFwiL2FwaS90aWNrZXRcXFwiKVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN1Y2Nlc3MpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFxcXCIjYWRkTmV3XFxcIikubW9kYWwoXFxcImhpZGVcXFwiKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXFxcInN1Y2Nlc3NcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UuZGF0YS5tZXNzYWdlLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBsb2FkX2ZpbGVzKHJlc3BvbnNlLmRhdGEuZGF0YS5pZCk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkVGlja2V0cygpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wX2xvYWRlci5oaWRlKCk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3BfbG9hZGVyLmhpZGUoKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZXJyLnJlc3BvbnNlLmRhdGEgIT0gXFxcInVuZGVmaW5lZFxcXCIpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzZXRFcnJvcnNGcm9tUmVzcG9uc2UoZXJyLnJlc3BvbnNlLmRhdGEpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH0pO1xcbiAgICAgICAgfSxcXG5cXG4gICAgICAgIGFzeW5jIGNoZWNrX2ZyZWVfc2VydmljZSgpIHtcXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZF9tYWNoaW5lKSB7XFxuICAgICAgICAgICAgICAgIGlmIChcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRfbWFjaGluZS5jb21wbGV0ZWRfZnJlZV9zZXJ2aWNlID49XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkX21hY2hpbmUuZnJlZV9zZXJ2aWNlX25vXFxuICAgICAgICAgICAgICAgICkge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLnNlcnZpY2VfdHlwZSA9IFxcXCJQYWlkIFNlcnZpY2VcXFwiO1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLmZyZWVfc2VydmljZV9ubyA9IFxcXCJcXFwiO1xcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLmZyZWVfc2VydmljZV9ubyA9XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZF9tYWNoaW5lLmNvbXBsZXRlZF9mcmVlX3NlcnZpY2UgKyAxO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIGlmIChcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRfbWFjaGluZSAmJlxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZF9tYWNoaW5lLm1hY2hpbmVfdHlwZSA9PSBcXFwiTmV3XFxcIiAmJlxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLnNlcnZpY2VfdHlwZSA9PSBcXFwiRnJlZSBTZXJ2aWNlXFxcIlxcbiAgICAgICAgICAgICAgICApIHtcXG4gICAgICAgICAgICAgICAgICAgIC8vICB0aGlzLnNlbGVjdGVkX21hY2hpbmUuZnJlZV9zZXJ2aWNlX25vXFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcblxcbiAgICAgICAgYXN5bmMgZ2V0X21hY2hpbmUoKSB7XFxuICAgICAgICAgICAgYXhpb3NcXG4gICAgICAgICAgICAgICAgLmdldChcXFwiL2FwaS90aWNrZXRfbWFjaGluZVxcXCIsIHtcXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpdGVfaWQ6IHRoaXMuZm9ybS5zaXRlX2lkLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5X2lkOiB0aGlzLmZvcm0uY2F0ZWdvcnlfaWQsXFxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViX2NhdGVnb3J5X2lkOiB0aGlzLmZvcm0uc3ViX2NhdGVnb3J5X2lkLFxcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hY2hpbmVzID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xcbiAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4gY29uc29sZS53YXJuKFxcXCJPaC4gU29tZXRoaW5nIHdlbnQgd3JvbmdcXFwiKSk7XFxuICAgICAgICB9LFxcbiAgICB9LFxcbiAgICBtb3VudGVkKCkgeyB9LFxcbiAgICBjcmVhdGVkKCkge1xcbiAgICAgICAgdGhpcy5sb2FkVGlja2V0cygpO1xcbiAgICB9LFxcbiAgICBiZWZvcmVDcmVhdGUoKSB7XFxuICAgICAgICBheGlvcy5nZXQoXFxcImFwaS9nZXRfcHJlX21hY2hpbmVcXFwiKS50aGVuKChyZXMpID0+IHtcXG4gICAgICAgICAgICB0aGlzLmNhdGVnb3JpZXMgPSByZXMuZGF0YS5kYXRhLkNhdGVnb3J5O1xcbiAgICAgICAgICAgIHRoaXMuc2l0ZXMgPSByZXMuZGF0YS5kYXRhLnNpdGVzO1xcbiAgICAgICAgfSk7XFxuICAgICAgICBheGlvc1xcbiAgICAgICAgICAgIC5nZXQoXFxcIi9hcGkvaW5pdGlhbF90aWNrZXRcXFwiKVxcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJzID0gcmVzcG9uc2UuZGF0YS5kYXRhLnZlbmRvcnM7XFxuICAgICAgICAgICAgICAgIHRoaXMubWFjaGluZXMgPSByZXNwb25zZS5kYXRhLmRhdGEubWFjaGluZXM7XFxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoX21hY2hpbmVzID0gcmVzcG9uc2UuZGF0YS5kYXRhLm1hY2hpbmVzO1xcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaF9zaXRlcyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5zaXRlcztcXG4gICAgICAgICAgICB9KVxcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiBjb25zb2xlLndhcm4oXFxcIk9oLiBTb21ldGhpbmcgd2VudCB3cm9uZ1xcXCIpKTtcXG4gICAgfSxcXG4gICAgd2F0Y2g6IHtcXG4gICAgICAgIFxcXCJmb3JtY2xvc2UubWFjaGluZV9zdGF0dXNcXFwiKG4pIHtcXG4gICAgICAgICAgICBpZiAobiA9PSBcXFwiTm9uIFJlcGFpcmFibGVcXFwiKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuZm9ybWNsb3NlLmFjdHVhbF9tYXRlcmlhbF9jb3N0ID0gMDtcXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtY2xvc2UuYWN0dWFsX3NlcnZpY2VfY29zdCA9IDA7XFxuICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtY2xvc2UuYWN0dWFsX21hdGVyaWFsX2Nvc3QgPSBcXFwiXFxcIjtcXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtY2xvc2UuYWN0dWFsX3NlcnZpY2VfY29zdCA9IFxcXCJcXFwiO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBhc3luYyBcXFwiZm9ybS5zdWJfY2F0ZWdvcnlfaWRcXFwiKG4sIG8pIHtcXG4gICAgICAgICAgICBpZiAobikge1xcbiAgICAgICAgICAgICAgICB0aGlzLmdldF9tYWNoaW5lKCk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIGFzeW5jIFxcXCJmb3JtLnNpdGVfaWRcXFwiKG4sIG8pIHtcXG4gICAgICAgICAgICBpZiAobikge1xcbiAgICAgICAgICAgICAgICB0aGlzLmdldF9tYWNoaW5lKCk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG5cXG4gICAgICAgIFxcXCJmb3JtLmNhdGVnb3J5X2lkXFxcIjoge1xcbiAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uIChuLCBvKSB7XFxuICAgICAgICAgICAgICAgIGlmIChuKSB7XFxuICAgICAgICAgICAgICAgICAgICBheGlvcy5nZXQoXFxcImFwaS9jYXRlZ29yeS9cXFwiICsgbikudGhlbigocmVzKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJfY2F0ZWdvcmllcyA9IHJlcy5kYXRhLmRhdGE7XFxuICAgICAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0X21hY2hpbmUoKTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgZGVlcDogdHJ1ZSxcXG4gICAgICAgICAgICBpbml0aWFsOiB0cnVlLFxcbiAgICAgICAgfSxcXG4gICAgICAgIHN0YWdlczoge1xcbiAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uIChuLCBvKSB7XFxuICAgICAgICAgICAgICAgIGlmIChuICYmIG4ubGVuZ3RoID4gMCkge1xcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxhID0gbltuLmxlbmd0aCAtIDFdO1xcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhLnN0YWdlX25vKVxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdF9zdGFnZV9pbmRleCA9IHRoaXMub3BuX3N0YWdlLmluZGV4T2YobGEuc3RhZ2Vfbm8pO1xcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhLnN0YWdlX2RhdGUpXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0X3N0YWdlX2RhdGUgPSBuZXcgRGF0ZShsYS5zdGFnZV9kYXRlKS50b0lTT1N0cmluZygpO1xcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0X3N0YWdlX2luZGV4ID0gMDtcXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBvcF90aWNrZXQgJiYgdGhpcy5wb3BfdGlja2V0LmNyZWF0ZWRfYXQpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3Rfc3RhZ2VfZGF0ZSA9IG5ldyBEYXRlKFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcF90aWNrZXQuY3JlYXRlZF9hdFxcbiAgICAgICAgICAgICAgICAgICAgICAgICkudG9JU09TdHJpbmcoKTtcXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0X3N0YWdlX2RhdGUgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGRlZXA6IHRydWUsXFxuICAgICAgICAgICAgaW5pdGlhbDogdHJ1ZSxcXG4gICAgICAgIH0sXFxuXFxuICAgICAgICBhc3luYyBcXFwiZm9ybS5tYWludGVuYW5jZV9wcm92aWRlclxcXCIobikge1xcbiAgICAgICAgICAgIGlmIChuICE9IFxcXCJ2ZW5kb3JcXFwiKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5zZXJ2aWNlX3R5cGUgPSBcXFwiUGFpZCBTZXJ2aWNlXFxcIjtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgYXhpb3NcXG4gICAgICAgICAgICAgICAgLmdldChcXFwiYXBpL3VzZXIvbGlzdFxcXCIsIHtcXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IG4sXFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlcnMgPSByZXNwb25zZS5kYXRhLmRhdGE7XFxuICAgICAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiBjb25zb2xlLndhcm4oXFxcIk9oLiBTb21ldGhpbmcgd2VudCB3cm9uZ1xcXCIpKTtcXG4gICAgICAgIH0sXFxuXFxuICAgICAgICBhc3luYyBcXFwiZm9ybS5tYWNoaW5lX2lkXFxcIihuKSB7XFxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZF9tYWNoaW5lID0gdGhpcy5tYWNoaW5lcy5maW5kKCh4KSA9PiB4LmlkID09PSBuKTtcXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmNoZWNrX2ZyZWVfc2VydmljZSgpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGFzeW5jIFxcXCJmb3JtLnNlcnZpY2VfdHlwZVxcXCIobikge1xcbiAgICAgICAgICAgIGlmIChuID09IFxcXCJGcmVlIFNlcnZpY2VcXFwiKSB7XFxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuY2hlY2tfZnJlZV9zZXJ2aWNlKCk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIGFzeW5jIFxcXCJmb3JtY2xvc2UuYWN0dWFsX2RhdGVcXFwiKCkge1xcbiAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlX2xvc3MoKTtcXG4gICAgICAgIH1cXG4gICAgfSxcXG59O1xcbjwvc2NyaXB0PlxcbjxzdHlsZT5cXG4uYnMge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDJkMWQxYTg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmNvbW1hfi5jb21tYTpub3QoOmVtcHR5KTpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiLCBcXFwiO1xcbn1cXG5cXG4ucm1vcmUge1xcbiAgICBjb2xvcjogYmx1ZTtcXG59XFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInNlY3Rpb25cIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50XCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyLWZsdWlkXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTEyXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1oZWFkZXJcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRpdGxlXCIgfSwgW192bS5fdihcIlRpY2tldCBMaXN0XCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRvb2xzXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zbSBidG4tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRvOiBcIi90aWNrZXQvYWRkXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLm5ld01vZGFsIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLXBsdXMtc3F1YXJlXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBOZXdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHkgcC0yXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImZvcm1cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBhdXRvY29tcGxldGU6IFwib2ZmXCIsIFwiZGF0YS12di1zY29wZVwiOiBcInNlYXJjaGZyXCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmdldFJlc3VsdHMoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtLXJvd1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdldC1vcHRpb24tbGFiZWxcIjogX3ZtLmdldExhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkdWNlOiBmdW5jdGlvbihvcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5zZWFyY2hfbWFjaGluZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJFbnRlciBtYWNoaW5lcyAuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibWFjaGluZV9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2gubWFjaGluZV9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNlYXJjaCwgXCJtYWNoaW5lX2lkXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaC5tYWNoaW5lX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaC50aWNrZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaC50aWNrZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRW50ZXIgdGlja2V0IC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidGlja2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5zZWFyY2gudGlja2V0IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWFyY2gsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGlja2V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJzaXRlX25hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZHVjZTogZnVuY3Rpb24ob3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24uaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0uc2VhcmNoX3NpdGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiU2VsZWN0IFNpdGUuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2l0ZV9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2guc2l0ZV9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNlYXJjaCwgXCJzaXRlX2lkXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaC5zaXRlX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJzaXRlX25hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IFtcIk9wZW5cIiwgXCJDbG9zZWRcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJTZWxlY3QgU3RhdHVzLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInN0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2guc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2VhcmNoLCBcInN0YXR1c1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2guc3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJzaXRlX25hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IFtcIk1ham9yXCIsIFwiTWlub3JcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJTZWxlY3QgQ29tcGxhaW50IE5hdHVyZS4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJjb21wbGFpbnRfbmF0dXJlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaC5jb21wbGFpbnRfbmF0dXJlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2VhcmNoLCBcImNvbXBsYWludF9uYXR1cmVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoLmNvbXBsYWludF9uYXR1cmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcInNpdGVfbmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkJyZWFrZG93biBNYWludGVuYW5jZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlBlcmlvZGljIE1haW50ZW5hbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJTZWxlY3QgVGlja2V0IFR5cGUuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidGlja2V0X3R5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoLnRpY2tldF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2VhcmNoLCBcInRpY2tldF90eXBlXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaC50aWNrZXRfdHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlNlYXJjaFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWluZm8gbWwtMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZXNldF9maWx0ZXIoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJSZXNldFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRvd25sb2FkLWV4Y2VsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4td2FybmluZyBtbC0yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2g6IF92bS5leHBvcnRfY3N2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkczogX3ZtLmpzb25fZmllbGRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmVmb3JlLWdlbmVyYXRlXCI6IF92bS5zdGFydERvd25sb2FkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmVmb3JlLWZpbmlzaFwiOiBfdm0uZmluaXNoRG93bmxvYWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0OiBcIk15IFdvcmtzaGVldFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiY3N2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ0aWNrZXRfbGlzdC5jc3ZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsYWJlbFRleHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLWZpbGUtZXhjZWwtb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXhwb3J0IGFzIENTVlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5IHRpY2tldExzdFRibCB0YWJsZS1yZXNwb25zaXZlIHAtMFwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInRhYmxlXCIsIHsgc3RhdGljQ2xhc3M6IFwidGFibGUgdGFibGUtaG92ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidGJvZHlcIixcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5UaWNrZXRzLmRhdGEsIGZ1bmN0aW9uKHRpY2tldCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCB7IGtleTogdGlja2V0LmlkIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3ModGlja2V0LnRpY2tldF9ubykpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyh0aWNrZXQudGlja2V0X3R5cGUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3ModGlja2V0Lm1hY2hpbmUuZmFyX25vKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHRpY2tldC5tYWNoaW5lLm5hbWUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja2V0Lm1hY2hpbmUubWFjaGluZV9tb2RlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRpY2tldC5tYWNoaW5lLm1hY2hpbmVfbW9kZWwubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiLVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyh0aWNrZXQubWFjaGluZS5tYWNoaW5lX3NyX25vKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uaXNFeHBhbmRlZChpbmRleClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3ModGlja2V0LnByb2JsZW1fZGVzY3JpcHRpb24pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIiNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS50b2dnbGVFeHBhbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udGlUaWNrZXRzLmRhdGFja2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJMZXNzXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0cnVuY2F0ZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5nZXRUcnVuY2F0ZWRUZXh0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tldC5wcm9ibGVtX2Rlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnRvZ2dsZUV4cGFuZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5UaWNrZXRzLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIk1vcmVcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja2V0LnByb2JsZW1zICYmIHRpY2tldC5wcm9ibGVtcy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVnVlUmVhZE1vcmVTbW9vdGhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuOiBfdm0uYWRkaXRpb25hbE1vcmVbX3ZtLnhdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibm8tYnV0dG9uXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuby1zaGFkb3dcIjogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidXBkYXRlOm9wZW5cIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5hZGRpdGlvbmFsTW9yZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLngsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbCh0aWNrZXQucHJvYmxlbXMsIGZ1bmN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aWNrZXQucHJvYmxlbXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJwXCIgKyBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF92bS5fcyhpdGVtLnByb2JsZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJtb3JlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zY2xpY2soX3ZtLngpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIuLi5cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5hZGRpdGlvbmFsTW9yZVtfdm0ueF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiTGVzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIk1vcmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3ModGlja2V0LnNpdGUgPyB0aWNrZXQuc2l0ZS5zaXRlX25hbWUgOiBcIi1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyh0aWNrZXQuY29tcGxhaW50X25hdHVyZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyh0aWNrZXQuY3JlYXRlZF9ieV9uYW1lKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uX2YoXCJteURhdGVcIikodGlja2V0LmNyZWF0ZWRfYXQpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5fZihcIm15RGF0ZVwiKSh0aWNrZXQubGlrZWx5X2RhdGUpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5fZihcIm15RGF0ZVwiKSh0aWNrZXQucmV2ZXJzaW9uX2RhdGUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja2V0LnN0YXR1cy50b0xvd2VyQ2FzZSgpID09IFwiY3JlYXRlZCBieSB1c2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiT3BlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aWNrZXQuc3RhdHVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4td2FybmluZyBidG4tc21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnZpZXdNb2RhbCh0aWNrZXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZpZXdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrZXQuc3RhdHVzICE9IFwiQ2xvc2VkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2VzcyBidG4tc21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRvOiBcIi90aWNrZXQvZWRpdC9cIiArIHRpY2tldC5pZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiRWRpdFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tldC5zdGF0dXMgIT0gXCJDbG9zZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRhbmdlciBidG4tc21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IFwiamF2YXNjcmlwdDp2b2lkKDApO1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJDbG9zZSB0aWNrZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNsb3NlTW9kYWwodGlja2V0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDbG9zZVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmQtZm9vdGVyXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwicGFnaW5hdGlvblwiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBkYXRhOiBfdm0uVGlja2V0cywgbGltaXQ6IDEwIH0sXG4gICAgICAgICAgICAgICAgICBvbjogeyBcInBhZ2luYXRpb24tY2hhbmdlLXBhZ2VcIjogX3ZtLmdldFJlc3VsdHMgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibW9kYWwgZmFkZVwiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGlkOiBcImNsb3NlbW9kYWxcIixcbiAgICAgICAgICB0YWJpbmRleDogXCItMVwiLFxuICAgICAgICAgIHJvbGU6IFwiZGlhbG9nXCIsXG4gICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogXCJjbG9zZW1vZGFsXCIsXG4gICAgICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtZGlhbG9nIG1vZGFsLWxnXCIsIGF0dHJzOiB7IHJvbGU6IFwiZG9jdW1lbnRcIiB9IH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX20oMSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZm9ybVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiZGF0YS12di1zY29wZVwiOiBcImNsb3NldGlja2V0XCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnN1Ym1pdENsb3NlVGlja2V0KClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1ib2R5XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0ucG9wX21hY2hpbmVcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1zbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIkZhciBObyA6XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnBvcF9tYWNoaW5lLmZhcl9ubykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCJNYWNoaW5lIE5hbWUgOlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5wb3BfbWFjaGluZS5uYW1lKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIk1hY2hpbmUgTW9kZWwgOlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucG9wX21hY2hpbmUubWFjaGluZV9tb2RlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF92bS5wb3BfbWFjaGluZS5tYWNoaW5lX21vZGVsLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIi1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCJNYWNoaW5lIENoYXNzaXMgTm8gOlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnBvcF9tYWNoaW5lLmNoYXNzaXNfbm8pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtc21cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCJNYWNoaW5lIFNsIE5vOlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnBvcF9tYWNoaW5lLm1hY2hpbmVfc3Jfbm8pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiTWFjaGluZSBSZWduIE5vIDpcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucG9wX21hY2hpbmUucmVnbl9ubykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCJNYWNoaW5lIEVuZ2luZSBObyA6XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucG9wX21hY2hpbmUuZW5naW5lX25vKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIlRpY2tldCBObyA6XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucG9wX3RpY2tldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF92bS5wb3BfdGlja2V0LnRpY2tldF9ub1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiLVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnZlcnJvcnMuY2xvc2V0aWNrZXQpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3BfdGlja2V0ICYmIF92bS5wb3BfdGlja2V0Lmxpa2VseV9kYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTZcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiQWN0dWFsIERhdGVcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkYXRldGltZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXMtaW52YWxpZFwiOiBfdm0udmVycm9ycy5oYXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xvc2V0aWNrZXQuYWN0dWFsX2RhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWUtem9uZVwiOiBcIkFzaWEvS29sa2F0YVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJhY3R1YWxfZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbnB1dC1jbGFzc1wiOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LWFzXCI6IFwiQWN0dWFsIERhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWluLWRhdGV0aW1lXCI6IG5ldyBEYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucG9wX3RpY2tldC5jcmVhdGVkX2F0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1heC1kYXRldGltZVwiOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm1jbG9zZS5hY3R1YWxfZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZvcm1jbG9zZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFjdHVhbF9kYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm1jbG9zZS5hY3R1YWxfZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuaGFzKFwiY2xvc2V0aWNrZXQuYWN0dWFsX2RhdGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5maXJzdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xvc2V0aWNrZXQuYWN0dWFsX2RhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC02XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJNYWNoaW5lIFN0YXR1c1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm1jbG9zZS5tYWNoaW5lX3N0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm1jbG9zZS5tYWNoaW5lX3N0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzLWludmFsaWRcIjogX3ZtLnZlcnJvcnMuaGFzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xvc2V0aWNrZXQubWFjaGluZV9zdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtYWNoaW5lX3N0YXR1c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtYXNcIjogXCJtYWNoaW5lIHN0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb3JtY2xvc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1hY2hpbmVfc3RhdHVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJCRzZWxlY3RlZFZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiUnVubmluZ1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJSdW5uaW5nXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB2YWx1ZTogXCJSdW5uaW5nIHdpdGggUHJvYmxlbVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSdW5uaW5nIHdpdGggUHJvYmxlbVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB2YWx1ZTogXCJOb24gUmVwYWlyYWJsZVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIk5vbiBSZXBhaXJhYmxlXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuaGFzKFwiY2xvc2V0aWNrZXQubWFjaGluZV9zdGF0dXNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5maXJzdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xvc2V0aWNrZXQubWFjaGluZV9zdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiRXN0aW1hdGVkIE1hdGVyaWFsIGNvc3RcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHJlYWRvbmx5OiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucG9wX3RpY2tldC5lc3RpbWF0ZWRfbWF0ZXJpYWxfY29zdCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3BfdGlja2V0LmFkX2VzdGltYXRlZF9tYXRlcmlhbF9jb3N0ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIoXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucG9wX3RpY2tldC5lc3RpbWF0ZWRfbWF0ZXJpYWxfY29zdCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiK1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXQuYWRfZXN0aW1hdGVkX21hdGVyaWFsX2Nvc3QgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJBY3R1YWwgTWF0ZXJpYWwgY29zdFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybWNsb3NlLmFjdHVhbF9tYXRlcmlhbF9jb3N0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm1jbG9zZS5hY3R1YWxfbWF0ZXJpYWxfY29zdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXMtaW52YWxpZFwiOiBfdm0udmVycm9ycy5oYXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xvc2V0aWNrZXQuYWN0dWFsX21hdGVyaWFsX2Nvc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJhY3R1YWxfbWF0ZXJpYWxfY29zdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LWFzXCI6IFwiQWN0dWFsIE1hdGVyaWFsIGNvc3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybWNsb3NlLm1hY2hpbmVfc3RhdHVzID09IFwiTm9uIFJlcGFpcmFibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybWNsb3NlLmFjdHVhbF9tYXRlcmlhbF9jb3N0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybWNsb3NlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWN0dWFsX21hdGVyaWFsX2Nvc3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJjbG9zZXRpY2tldC5hY3R1YWxfbWF0ZXJpYWxfY29zdFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmZpcnN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbG9zZXRpY2tldC5hY3R1YWxfbWF0ZXJpYWxfY29zdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCIgQWN0dWFsIE1hdGVyaWFsIGNvc3QgRmlsZVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIicnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJmaWxlYWN0dWFsbWF0ZXJpYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpcy1pbnZhbGlkXCI6IF92bS52ZXJyb3JzLmhhcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbG9zZXRpY2tldC5tYXRlcmlhbF9jb3N0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImZpbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtYXRlcmlhbF9jb3N0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtYXNcIjogXCJBY3R1YWwgTWF0ZXJpYWwgY29zdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjaGFuZ2U6IF92bS51cGxvYWRNYXRlcmlhbENvc3QgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXQuYWN0dWFsX2VzdGltYXRlZF9tYXRlcmlhbF9maWxlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2xlYXJmaXhcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hY3R1YWxfZXN0aW1hdGVkX21hdGVyaWFsX2ZpbGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKGl0ZW0sIHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGl0ZW0uaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IGl0ZW0uZmlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogXCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVmlld1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hY3R1YWxfZXN0aW1hdGVkX21hdGVyaWFsX2ZpbGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubGVuZ3RoID4gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB4ICsgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJjbG9zZXRpY2tldC5tYXRlcmlhbF9jb3N0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJoZWxwLWJsb2NrIGludmFsaWQtZmVlZGJhY2tcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuZmlyc3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsb3NldGlja2V0Lm1hdGVyaWFsX2Nvc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtNlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiTWF0ZXJpYWwgQ29zdCBQT3NcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiRW50ZXIgUE8gbnVtYmVyc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdnYWJsZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGU6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm1jbG9zZS5tYXRlcmlhbFBPUyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtY2xvc2UsIFwibWF0ZXJpYWxQT1NcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm1jbG9zZS5tYXRlcmlhbFBPU1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiRXN0aW1hdGVkIFNlcnZpY2UgY29zdFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcmVhZG9ubHk6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3BfdGlja2V0LmVzdGltYXRlZF9zZXJ2aWNlX2Nvc3QgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucG9wX3RpY2tldC5hZF9lc3RpbWF0ZWRfc2VydmljZV9jb3N0ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIoXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucG9wX3RpY2tldC5lc3RpbWF0ZWRfc2VydmljZV9jb3N0ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIrXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucG9wX3RpY2tldC5hZF9lc3RpbWF0ZWRfc2VydmljZV9jb3N0ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiQWN0dWFsIFNlcnZpY2UgY29zdFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybWNsb3NlLmFjdHVhbF9zZXJ2aWNlX2Nvc3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybWNsb3NlLmFjdHVhbF9zZXJ2aWNlX2Nvc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzLWludmFsaWRcIjogX3ZtLnZlcnJvcnMuaGFzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsb3NldGlja2V0LmFjdHVhbF9zZXJ2aWNlX2Nvc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJhY3R1YWxfc2VydmljZV9jb3N0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtYXNcIjogXCJBY3R1YWwgU2VydmljZSBjb3N0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkb25seTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZvcm1jbG9zZS5tYWNoaW5lX3N0YXR1cyA9PSBcIk5vbiBSZXBhaXJhYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm1jbG9zZS5hY3R1YWxfc2VydmljZV9jb3N0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybWNsb3NlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWN0dWFsX3NlcnZpY2VfY29zdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcImNsb3NldGlja2V0LmFjdHVhbF9zZXJ2aWNlX2Nvc3RcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5maXJzdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xvc2V0aWNrZXQuYWN0dWFsX3NlcnZpY2VfY29zdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCIgQWN0dWFsIFNlcnZpY2UgY29zdCBGaWxlIFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIicnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJmaWxlYWN0dWFsc2VydmljZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzLWludmFsaWRcIjogX3ZtLnZlcnJvcnMuaGFzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsb3NldGlja2V0LnNlcnZpY2VfY29zdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJmaWxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2VydmljZV9jb3N0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtYXNcIjogXCJBY3R1YWwgU2VydmljZSBjb3N0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNoYW5nZTogX3ZtLnVwbG9hZFNlcnZpY2VDb3N0IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3BfdGlja2V0LmFjdHVhbF9lc3RpbWF0ZWRfc2VydmljZV9maWxlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2xlYXJmaXhcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXQuYWN0dWFsX2VzdGltYXRlZF9zZXJ2aWNlX2ZpbGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKGl0ZW0sIHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGl0ZW0uaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IGl0ZW0uZmlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogXCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVmlld1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hY3R1YWxfZXN0aW1hdGVkX3NlcnZpY2VfZmlsZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5sZW5ndGggPiAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHggKyAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcImNsb3NldGlja2V0LnNlcnZpY2VfY29zdFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmZpcnN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbG9zZXRpY2tldC5zZXJ2aWNlX2Nvc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtNlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiU2VydmljZSBDb3N0IFBPc1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJFbnRlciBQTyBudW1iZXJzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ2dhYmxlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZTogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybWNsb3NlLnNlcnZpY2VQT1MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybWNsb3NlLCBcInNlcnZpY2VQT1NcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm1jbG9zZS5zZXJ2aWNlUE9TXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ucG9wX21hY2hpbmUuaXNfY29uc3VtdGlvbl9ocl9ydW5cbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtNlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJDdXJyZW50IFJ1biBob3VyIFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm1jbG9zZS5jdXJyZW50X3J1bl9ob3VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtY2xvc2UuY3VycmVudF9ydW5faG91clwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5fdmFsdWU6IF92bS5wb3BfbWFjaGluZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5sYXN0X21haW50ZW5hbmNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX3ZtLnBvcF9tYWNoaW5lLmxhc3RfbWFpbnRlbmFuY2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5ydW5faG91clxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLnBvcF9tYWNoaW5lLmxhc3RfaHJfcnVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWw6IDIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5fdmFsdWU6IHBvcF9tYWNoaW5lLmxhc3RfbWFpbnRlbmFuY2VzXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBwb3BfbWFjaGluZS5sYXN0X21haW50ZW5hbmNlcy5ydW5faG91clxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcG9wX21hY2hpbmUubGFzdF9ocl9ydW4sXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpcy1pbnZhbGlkXCI6IF92bS52ZXJyb3JzLmhhcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xvc2V0aWNrZXQuY3VycmVudF9ydW5faG91clwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiY3VycmVudF9ydW5faG91clwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1hc1wiOiBcIkN1cnJlbnQgUnVuIGhvdXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybWNsb3NlLmN1cnJlbnRfcnVuX2hvdXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZvcm1jbG9zZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjdXJyZW50X3J1bl9ob3VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcImNsb3NldGlja2V0LmN1cnJlbnRfcnVuX2hvdXJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5maXJzdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsb3NldGlja2V0LmN1cnJlbnRfcnVuX2hvdXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF9tYWNoaW5lLmlzX2NvbnN1bXRpb25fa21fcnVuXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTZcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiIEN1cnJlbnQgS00gUnVuIFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm1jbG9zZS5jdXJyZW50X2ttX3J1bixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybWNsb3NlLmN1cnJlbnRfa21fcnVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWw6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbl92YWx1ZTogX3ZtLnBvcF9tYWNoaW5lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmxhc3RfbWFpbnRlbmFuY2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfdm0ucG9wX21hY2hpbmUubGFzdF9tYWludGVuYW5jZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmttX3J1blxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLnBvcF9tYWNoaW5lLmxhc3Rfa21fcnVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWw6IDIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5fdmFsdWU6IHBvcF9tYWNoaW5lLmxhc3RfbWFpbnRlbmFuY2VzXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBwb3BfbWFjaGluZS5sYXN0X21haW50ZW5hbmNlcy5rbV9ydW5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHBvcF9tYWNoaW5lLmxhc3Rfa21fcnVuLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXMtaW52YWxpZFwiOiBfdm0udmVycm9ycy5oYXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsb3NldGlja2V0LmN1cnJlbnRfa21fcnVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJjdXJyZW50X2ttX3J1blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1hc1wiOiBcIkN1cnJlbnQgS00gaG91clwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtY2xvc2UuY3VycmVudF9rbV9ydW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZvcm1jbG9zZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjdXJyZW50X2ttX3J1blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJjbG9zZXRpY2tldC5jdXJyZW50X2ttX3J1blwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmZpcnN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xvc2V0aWNrZXQuY3VycmVudF9rbV9ydW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF9tYWNoaW5lLmlzX3Byb2R1Y3Rpb25fZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTZcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiIEN1cnJlbnQgUHJvZHVjdGlvbiBmaWcgXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybWNsb3NlLmN1cnJlbnRfcHJvZHVjdGlvbl9maWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvcm1jbG9zZS5jdXJyZW50X3Byb2R1Y3Rpb25fZmlnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWw6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbl92YWx1ZTogX3ZtLnBvcF9tYWNoaW5lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmxhc3RfbWFpbnRlbmFuY2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfdm0ucG9wX21hY2hpbmUubGFzdF9tYWludGVuYW5jZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3Rpb25fZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0ucG9wX21hY2hpbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnBlcmlvZGljX21haW50ZW5hbmNlX2JyZWFrZG93blxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwie1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsOiAyLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluX3ZhbHVlOiBwb3BfbWFjaGluZS5sYXN0X21haW50ZW5hbmNlc1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gcG9wX21hY2hpbmUubGFzdF9tYWludGVuYW5jZXMucHJvZHVjdGlvbl9maWdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHBvcF9tYWNoaW5lLnBlcmlvZGljX21haW50ZW5hbmNlX2JyZWFrZG93bixcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzLWludmFsaWRcIjogX3ZtLnZlcnJvcnMuaGFzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbG9zZXRpY2tldC5jdXJyZW50X3Byb2R1Y3Rpb25fZmlnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJjdXJyZW50X3Byb2R1Y3Rpb25fZmlnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LWFzXCI6IFwiQ3VycmVudCBQcm9kdWN0aW9uIGZpZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtY2xvc2UuY3VycmVudF9wcm9kdWN0aW9uX2ZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybWNsb3NlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImN1cnJlbnRfcHJvZHVjdGlvbl9maWdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuaGFzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsb3NldGlja2V0LmN1cnJlbnRfcHJvZHVjdGlvbl9maWdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmZpcnN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xvc2V0aWNrZXQuY3VycmVudF9wcm9kdWN0aW9uX2ZpZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybWNsb3NlLnRpY2tldF90eXBlID09IFwiQnJlYWtkb3duIE1haW50ZW5hbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtNlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJQcm9kdWN0aW9uIExvc3NcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtY2xvc2UucHJvZHVjdGlvbl9sb3NzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtY2xvc2UucHJvZHVjdGlvbl9sb3NzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzLWludmFsaWRcIjogX3ZtLnZlcnJvcnMuaGFzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbG9zZXRpY2tldC5wcm9kdWN0aW9uX2xvc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInByb2R1Y3Rpb25fbG9zc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1hc1wiOiBcIlByb2R1Y3Rpb24gTG9zc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5OiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtY2xvc2UucHJvZHVjdGlvbl9sb3NzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb3JtY2xvc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvZHVjdGlvbl9sb3NzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcImNsb3NldGlja2V0LnByb2R1Y3Rpb25fbG9zc1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmZpcnN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xvc2V0aWNrZXQucHJvZHVjdGlvbl9sb3NzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5mb3JtY2xvc2UudGlja2V0X3R5cGUgPT0gXCJCcmVha2Rvd24gTWFpbnRlbmFuY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC02XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIlByb2R1Y3Rpb24gbG9zcyBhbW91bnRcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtY2xvc2UucHJvZHVjdGlvbl9sb3NzX2Ftb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9ybWNsb3NlLnByb2R1Y3Rpb25fbG9zc19hbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXMtaW52YWxpZFwiOiBfdm0udmVycm9ycy5oYXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsb3NldGlja2V0LnByb2R1Y3Rpb25fbG9zc19hbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInByb2R1Y3Rpb25fbG9zc19hbW91bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtYXNcIjogXCJDdXJyZW50IFByb2R1Y3Rpb24gZmlnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHk6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm1jbG9zZS5wcm9kdWN0aW9uX2xvc3NfYW1vdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb3JtY2xvc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvZHVjdGlvbl9sb3NzX2Ftb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xvc2V0aWNrZXQucHJvZHVjdGlvbl9sb3NzX2Ftb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoZWxwLWJsb2NrIGludmFsaWQtZmVlZGJhY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuZmlyc3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbG9zZXRpY2tldC5wcm9kdWN0aW9uX2xvc3NfYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTZcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIlJvb3QgQ2F1c2UgQW5hbHlzaXNcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm1jbG9zZS5yY2EsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybWNsb3NlLnJjYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXMtaW52YWxpZFwiOiBfdm0udmVycm9ycy5oYXMoXCJjbG9zZXRpY2tldC5yY2FcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvd3M6IFwiMVwiLCBuYW1lOiBcInJjYVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtY2xvc2UucmNhIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZvcm1jbG9zZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJjYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcImNsb3NldGlja2V0LnJjYVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmZpcnN0KFwiY2xvc2V0aWNrZXQucmNhXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1mb290ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zZWNvbmRhcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIsIFwiZGF0YS1kaXNtaXNzXCI6IFwibW9kYWxcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENsb3NlXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5jbG9zZV9idG5cbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDbG9zZSBUaWNrZXRcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIDogX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb2Nlc3NpbmdcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICBdXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibW9kYWwgZmFkZVwiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGlkOiBcInZpZXdtb2RhbFwiLFxuICAgICAgICAgIHRhYmluZGV4OiBcIi0xXCIsXG4gICAgICAgICAgcm9sZTogXCJkaWFsb2dcIixcbiAgICAgICAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBcInZpZXdtb2RhbFwiLFxuICAgICAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWRpYWxvZyBtb2RhbC1sZ1wiLCBhdHRyczogeyByb2xlOiBcImRvY3VtZW50XCIgfSB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl9tKDIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0ucG9wX3RpY2tldFxuICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1ib2R5XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC00IGJzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJNYWNoaW5lIFNpdGVcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwic2l0ZV9uYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZHVjZTogZnVuY3Rpb24ob3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0uc2l0ZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkNob29zZSBTaXRlIC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucG9wX3RpY2tldC5zaXRlX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnBvcF90aWNrZXQsIFwic2l0ZV9pZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicG9wX3RpY2tldC5zaXRlX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC00IGJzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJNYWNoaW5lIENhdGVnb3J5XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkdWNlOiBmdW5jdGlvbihvcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5jYXRlZ29yaWVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJDaG9vc2UgQ2F0ZWdvcnkgLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wb3BfdGlja2V0LmNhdGVnb3J5X2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnBvcF90aWNrZXQsIFwiY2F0ZWdvcnlfaWRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBvcF90aWNrZXQuY2F0ZWdvcnlfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTQgYnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIk1hY2hpbmUgRGVzY3JpcHRpb25cIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWR1Y2U6IGZ1bmN0aW9uKG9wdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24uaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLnN1Yl9jYXRlZ29yaWVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJDaG9vc2UgZGVzY3JpcHRpb24gLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic3ViX2NhdGVnb3J5X2lkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBfdm0ucG9wX3RpY2tldC5pZCAhPSBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wb3BfdGlja2V0LnN1Yl9jYXRlZ29yeV9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN1Yl9jYXRlZ29yeV9pZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBvcF90aWNrZXQuc3ViX2NhdGVnb3J5X2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC00IGJzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljU3R5bGU6IHsgbWFyZ2luOiBcIjBcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgTWFjaGluZSA6IFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIkZhciBObyA6XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnBvcF90aWNrZXQubWFjaGluZS5mYXJfbm8pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiTWFjaGluZSBOYW1lIDpcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucG9wX3RpY2tldC5tYWNoaW5lLm5hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiTWFjaGluZSBDaGFzc2lzIE5vIDpcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnBvcF90aWNrZXQubWFjaGluZS5jaGFzc2lzX25vKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIk1hY2hpbmUgU2wgTm86XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5wb3BfdGlja2V0Lm1hY2hpbmUubWFjaGluZV9zcl9ubykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCJNYWNoaW5lIFJlZ24gTm8gOlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucG9wX3RpY2tldC5tYWNoaW5lLnJlZ25fbm8pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiTWFjaGluZSBFbmdpbmUgTm8gOlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucG9wX3RpY2tldC5tYWNoaW5lLmVuZ2luZV9ubykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTQgYnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ucG9wX3RpY2tldC5tYWludGVuYW5jZV9wcm92aWRlciA9PSBcInZlbmRvclwiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ucG9wX3RpY2tldC5zZXJ2aWNlX3R5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgbWItMFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIlNlcnZpY2UgVHlwZVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucG9wX3RpY2tldC5zZXJ2aWNlX3R5cGUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXQuc2VydmljZV90eXBlID09IFwiRnJlZSBTZXJ2aWNlXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3BfdGlja2V0LmZyZWVfc2VydmljZV9ub1xuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCBtYi0wXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiRnJlZSBzZXJ2aWNlIG5vOlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucG9wX3RpY2tldC5mcmVlX3NlcnZpY2Vfbm8pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXQubWFjaGluZS5mcmVlX3NlcnZpY2Vfbm9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXQudGlja2V0X3R5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgbWItMFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIlRpY2tldCBUeXBlXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5wb3BfdGlja2V0LnRpY2tldF90eXBlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3BfdGlja2V0LnN0YXR1c19kdXJpbmdfY29tcGxhaW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIG1iLTBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJTdGF0dXMgRHVyaW5nIENvbXBsYWluOiBcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucG9wX3RpY2tldC5zdGF0dXNfZHVyaW5nX2NvbXBsYWludFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNTdHlsZTogeyBtYXJnaW46IFwiMFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIk1hY2hpbmUncyBQcm9ibGVtOiBcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5wb3BfdGlja2V0LnByb2JsZW1fZGVzY3JpcHRpb24pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC00IGJzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIG1iLTBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIk1haW50ZW5hbmNlIFByb3ZpZGVyXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5wb3BfdGlja2V0Lm1haW50ZW5hbmNlX3Byb3ZpZGVyKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucG9wX3RpY2tldC5tYWludGVuYW5jZV9wcm92aWRlciA9PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVzZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiVXNlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJWZW5kb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXQubWFpbnRlbmFuY2VfcHJvdmlkZXIgPT0gXCJ2ZW5kb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0ucG9wX3RpY2tldC5hbGxfdmVuZG9ycywgZnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZW5kb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJ2bVwiICsgaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29tbWFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyh2ZW5kb3IubmFtZSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiY29tbWFcIiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkdWNlOiBmdW5jdGlvbihvcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS51c2VycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRW50ZXIgdXNlcnMgLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wb3BfdGlja2V0LnVzZXJfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ucG9wX3RpY2tldCwgXCJ1c2VyX2lkXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwb3BfdGlja2V0LnVzZXJfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXQuc3RhZ2VzXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtOCBic1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY1N0eWxlOiB7IG1hcmdpbjogXCIwcHhcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiU3RhZ2VzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnBvcF90aWNrZXQuc3RhZ2VzLCBmdW5jdGlvbihmaWVsZCwgeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcInNcIiArIHgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYWRkaW5nLWJvdHRvbVwiOiBcIjhweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoZmllbGQuc3RhZ2Vfbm8pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9mKFwibXlEYXRlXCIpKGZpZWxkLnN0YWdlX2RhdGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtNVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhmaWVsZC5kZXNjcmlwdGlvbikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTQgYnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNTdHlsZTogeyBtYXJnaW46IFwiMFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiTWFjaGluZSdzIEFkZGl0aW9uYWwgUHJvYmxlbTogXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0ucG9wX3RpY2tldC5wcm9ibGVtcywgZnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucG9wX3RpY2tldC5wcm9ibGVtc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwicGFcIiArIGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBfdm0uX3MoaXRlbS5wcm9ibGVtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0zIGJzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljU3R5bGU6IHsgbWFyZ2luOiBcIjBcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJFc3RpbWF0ZWQgTWF0ZXJpYWwgY29zdDpcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2YoXCJ0b0N1cnJlbmN5XCIpKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3BfdGlja2V0LmVzdGltYXRlZF9tYXRlcmlhbF9jb3N0ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3BfdGlja2V0LmFkX2VzdGltYXRlZF9tYXRlcmlhbF9jb3N0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3BfdGlja2V0LmVzdGltYXRlZF9tYXRlcmlhbF9jb3N0ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIitcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXQuYWRfZXN0aW1hdGVkX21hdGVyaWFsX2Nvc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucG9wX3RpY2tldC5lc3RpbWF0ZWRfbWF0ZXJpYWxfZmlsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbihmaWxlLCB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGZpbGUuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXN1Y2Nlc3MgbXItMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogZmlsZS5maWxlLCB0YXJnZXQ6IFwiX2JsYW5rXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlZpZXdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3BfdGlja2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lc3RpbWF0ZWRfbWF0ZXJpYWxfZmlsZXMubGVuZ3RoID4gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHggKyAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTMgYnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNTdHlsZTogeyBtYXJnaW46IFwiMFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkVzdGltYXRlZCBTZXJ2aWNlIGNvc3Q6IFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fZihcInRvQ3VycmVuY3lcIikoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXQuZXN0aW1hdGVkX3NlcnZpY2VfY29zdCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucG9wX3RpY2tldC5hZF9lc3RpbWF0ZWRfc2VydmljZV9jb3N0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3BfdGlja2V0LmVzdGltYXRlZF9zZXJ2aWNlX2Nvc3QgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiK1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucG9wX3RpY2tldC5hZF9lc3RpbWF0ZWRfc2VydmljZV9jb3N0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXQuZXN0aW1hdGVkX3NlcnZpY2VfZmlsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbihmaWxlLCB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGZpbGUuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXN1Y2Nlc3MgbXItMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogZmlsZS5maWxlLCB0YXJnZXQ6IFwiX2JsYW5rXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlZpZXdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3BfdGlja2V0LmVzdGltYXRlZF9zZXJ2aWNlX2ZpbGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5sZW5ndGggPiAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8geCArIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMyBic1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiQWN0dWFsIE1hdGVyaWFsIENvc3QgOiBcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXQuYWN0dWFsX21hdGVyaWFsX2Nvc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9mKFwidG9DdXJyZW5jeVwiKShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucG9wX3RpY2tldC5hY3R1YWxfbWF0ZXJpYWxfY29zdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXQuYWN0dWFsX2VzdGltYXRlZF9tYXRlcmlhbF9maWxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKGZpbGUsIHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZmlsZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2VzcyBtci0yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBmaWxlLmZpbGUsIHRhcmdldDogXCJfYmxhbmtcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVmlld1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFjdHVhbF9lc3RpbWF0ZWRfbWF0ZXJpYWxfZmlsZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmxlbmd0aCA+IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB4ICsgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3BfdGlja2V0Lm1hdGVyaWFsX3BvXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiTWF0ZXJpYWwgQ29zdCBQTyBObzogXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0ucG9wX3RpY2tldC5tYXRlcmlhbF9wbywgZnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJiYWRnZSBiYWRnZS1zZWNvbmRhcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXJnaW4tcmlnaHRcIjogXCIzcHhcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoZGF0YS5uYW1lKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTMgYnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIkFjdHVhbCBTZXJ2aWNlIENvc3QgOiBcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXQuYWN0dWFsX3NlcnZpY2VfY29zdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fZihcInRvQ3VycmVuY3lcIikoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3BfdGlja2V0LmFjdHVhbF9zZXJ2aWNlX2Nvc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXQuYWN0dWFsX2VzdGltYXRlZF9zZXJ2aWNlX2ZpbGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oZmlsZSwgeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWxlLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzIG1yLTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IGZpbGUuZmlsZSwgdGFyZ2V0OiBcIl9ibGFua1wiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJWaWV3XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucG9wX3RpY2tldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWN0dWFsX2VzdGltYXRlZF9zZXJ2aWNlX2ZpbGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5sZW5ndGggPiAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8geCArIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ucG9wX3RpY2tldC5zZXJ2aWNlX3BvXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiU2VydmljZSBDb3N0IFBPIE5vOiBcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5wb3BfdGlja2V0LnNlcnZpY2VfcG8sIGZ1bmN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYmFkZ2UgYmFkZ2Utc2Vjb25kYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWFyZ2luLXJpZ2h0XCI6IFwiM3B4XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGRhdGEubmFtZSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC00IGJzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljU3R5bGU6IHsgbWFyZ2luOiBcIjBcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJUaWNrZXQgTm8gOiBcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5wb3BfdGlja2V0LnRpY2tldF9ubykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTQgYnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNTdHlsZTogeyBtYXJnaW46IFwiMFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkxpa2VseSBEYXRlIDogXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9mKFwibXlEYXRlXCIpKF92bS5wb3BfdGlja2V0Lmxpa2VseV9kYXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtNCBic1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY1N0eWxlOiB7IG1hcmdpbjogXCIwXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQWN0dWFsIERhdGUgOiBcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2YoXCJteURhdGVcIikoX3ZtLnBvcF90aWNrZXQuYWN0dWFsX2RhdGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ucG9wX3RpY2tldC5jdXJyZW50X3J1bl9ob3VyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTQgYnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiQ3VycmVudCBSdW4gSG91ciA6IFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucG9wX3RpY2tldC5jdXJyZW50X3J1bl9ob3VyKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3BfdGlja2V0LmN1cnJlbnRfa21fcnVuXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTQgYnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiQ3VycmVudCBLTSBIb3VyIDogXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5wb3BfdGlja2V0LmN1cnJlbnRfa21fcnVuKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3BfdGlja2V0LmN1cnJlbnRfcHJvZHVjdGlvbl9maWdcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtNCBic1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQ3VycmVudCBQcm9kdWN0aW9uIEZpZyA6IFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXQuY3VycmVudF9wcm9kdWN0aW9uX2ZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ucG9wX3RpY2tldC5wcm9kdWN0aW9uX2xvc3NcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtNCBic1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJQcm9kdWN0aW9uIExvc3MgOiBcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnBvcF90aWNrZXQucHJvZHVjdGlvbl9sb3NzKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3BfdGlja2V0LnByb2R1Y3Rpb25fbG9zc19hbW91bnRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtNCBic1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiUHJvZHVjdGlvbiBMb3NzIEFtb3VudCA6IFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9mKFwidG9DdXJyZW5jeVwiKShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXQucHJvZHVjdGlvbl9sb3NzX2Ftb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIF1cbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInRoZWFkXCIsIFtcbiAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJUaWNrZXQgTm9cIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiVGlja2V0IFR5cGVcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiRkFSIE5vXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIk1hY2hpbmUgTmFtZVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJNYWNoaW5lIE1vZGVsXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIk1hY2hpbmUgU1IgTm9cIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiTWFjaGluZSdzIFByb2JsZW1cIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiQWRkaXRpb25hbCBQcm9ibGVtc1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJTaXRlXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkNvbXBsYWludCBOYXR1cmVcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiQ3JlYXRlZCBCeVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJDcmVhdGVkIERhdGVcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiRXhwZWN0ZWQgZGF0ZVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJSZXZpc2VkIFwiKSwgX2MoXCJiclwiKSwgX3ZtLl92KFwiIEV4cGVjdGVkIGRhdGVcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiVGlja2V0IFN0YXR1c1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJBY3Rpb25cIildKVxuICAgICAgXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWhlYWRlclwiIH0sIFtcbiAgICAgIF9jKFwiaDVcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC10aXRsZVwiIH0sIFtfdm0uX3YoXCJDbG9zZSBUaWNrZXRcIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNsb3NlXCIsXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICBcImRhdGEtZGlzbWlzc1wiOiBcIm1vZGFsXCIsXG4gICAgICAgICAgICBcImFyaWEtbGFiZWxcIjogXCJDbG9zZVwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbX2MoXCJzcGFuXCIsIHsgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9IH0sIFtfdm0uX3YoXCLDl1wiKV0pXVxuICAgICAgKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtaGVhZGVyXCIgfSwgW1xuICAgICAgX2MoXCJoNVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLXRpdGxlXCIgfSwgW192bS5fdihcIlZpZXcgVGlja2V0XCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJjbG9zZVwiLFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgXCJkYXRhLWRpc21pc3NcIjogXCJtb2RhbFwiLFxuICAgICAgICAgICAgXCJhcmlhLWxhYmVsXCI6IFwiQ2xvc2VcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW19jKFwic3BhblwiLCB7IGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSB9LCBbX3ZtLl92KFwiw5dcIildKV1cbiAgICAgIClcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMDM0MWNkZDZcIiwgeyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfSlcbiAgfVxufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI3NTY2OTQ4ZlwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9pbmRleC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9pbmRleC52dWVcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChjb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiKVxufVxuLyogc2NyaXB0ICovXG5leHBvcnQgKiBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9pbmRleC52dWVcIlxuaW1wb3J0IF9fdnVlX3NjcmlwdF9fIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiXG4vKiB0ZW1wbGF0ZSAqL1xuaW1wb3J0IHtyZW5kZXIgYXMgX192dWVfcmVuZGVyX18sIHN0YXRpY1JlbmRlckZucyBhcyBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19ffSBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0wMzQxY2RkNlxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9pbmRleC52dWVcIlxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbmltcG9ydCBub3JtYWxpemVDb21wb25lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnQtbm9ybWFsaXplclwiXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfcmVuZGVyX18sXG4gIF9fdnVlX3N0YXRpY19yZW5kZXJfZm5zX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXNcXFxcanNcXFxcY29tcG9uZW50c1xcXFxUaWNrZXRzXFxcXGluZGV4LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0wMzQxY2RkNlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTAzNDFjZGQ2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcbiJdLCJzb3VyY2VSb290IjoiIn0=