(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/Tickets/index.vue":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/Tickets/index.vue ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @johmun/vue-tags-input */ "./node_modules/@johmun/vue-tags-input/dist/vue-tags-input.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    VueTagsInput: (_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_0___default())
  },

  data() {
    return {
      search_machines: [],
      search_sites: [],
      search: {
        page: 1,
        machine_id: '',
        site_id: ''
      },
      popticket: {},
      categories: [],
      sub_categories: [],
      sites: [],
      selected_machine: '',
      users: [],
      machines: [],
      Tickets: {},
      editmode: false,
      MaterialCost: null,
      ServiceCost: null,
      form: new Form({
        id: '',
        site_id: '',
        category_id: '',
        sub_category_id: '',
        free_service_no: '',
        ticket_type: 'Periodic Maintenance',
        service_type: 'Paid Service',
        machine_id: '',
        ticket_no: '',
        vendor_id: '',
        user_id: '',
        likely_date: '',
        estimated_material_cost: '',
        estimated_service_cost: '',
        maintenance_provider: 'vendor',
        problem_description: '',
        complaint_nature: 'Major'
      }),
      stages: [{
        id: '',
        stage_no: '',
        stage_date: '',
        description: '',
        file: '',
        new_file: ''
      }],
      formclose: new Form({
        id: '',
        machine_status: '',
        edit_type: 'closeticket',
        ticket_type: 'Periodic Maintenance',
        actual_date: '',
        actual_material_cost: '',
        actual_service_cost: '',
        current_run_hour: '',
        current_km_run: '',
        current_production_fig: '',
        production_loss: '',
        production_loss_amount: '',
        status: 'Closed',
        vendor_resolve_date: '',
        vendor_attain_date: '',
        vendor_response_date: '',
        vendor_call_date: ''
      }),
      pop_machine: '',
      pop_ticket: '',
      opn_stage: ['Vendor created', 'Vendor Assigned', 'Order issued', 'Payment under process', 'Payment Done', 'Logistics under process', 'Materials despatched', 'Material received at site', 'Maintainace under progress'],
      last_stage_index: 0,
      last_stage_date: ''
    };
  },

  methods: {
    getLabel(val) {
      if (typeof val === 'object') {
        return val.far_no + ' - ' + val.name;
      } else {
        return val;
      }
    },

    viewModal(ticket) {
      this.pop_ticket = '';
      this.pop_ticket = ticket;
      axios.get("api/category/" + ticket.category_id).then(res => {
        this.sub_categories = res.data.data;
      });
      $('#viewmodal').modal('show');
    },

    AddStage() {
      this.stages.push({
        id: '',
        stage_no: '',
        stage_date: '',
        description: '',
        file: '',
        new_file: ''
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
      axios.get('/api/ticket', {
        params: this.search
      }).then(({
        data
      }) => this.Tickets = data.data);
      this.$Progress.finish();
    },

    submitCloseTicket() {
      console.log('tag', 'sss');
      this.$validator.reset();
      this.$validator.resume();
      this.$validator.validateAll('closeticket').then(async valid => {
        if (valid) {
          let pop_loader = this.$loading.show({
            container: this.$refs.vps_submit_pop
          });
          this.formclose.put('/api/ticket/' + this.formclose.id).then(response => {
            if (response.data.success) {
              $('#closemodal').modal('hide');
              this.$validator.reset();
              this.formclose.reset();
              Toast.fire({
                icon: 'success',
                title: response.data.message
              });
              this.upload_files(this.formclose.id, 'actual');
              this.loadTickets();
            }

            pop_loader.hide();
          }).catch(() => {
            pop_loader.hide();

            if (typeof err.response.data != 'undefined') {
              this.$setErrorsFromResponse(err.response.data);
            }
          });
        } else {
          console.log('ffff');
        }
      });
    },

    closeModal(ticket) {
      this.$validator.pause();
      $('#closemodal').modal('show');
      this.$validator.reset();
      this.formclose.reset();
      this.$refs.fileactualservice.value = null;
      this.$refs.fileactualmaterial.value = null;
      this.pop_ticket = ticket;
      this.pop_machine = ticket.machine;
      this.formclose.fill(ticket);
      this.formclose.edit_type = 'closeticket';
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
      $('#addNew').modal('show');
      this.form.fill(ticket);
      this.form.likely_date = ticket.likely_date ? new Date(ticket.likely_date).toISOString() : '';
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
      $('#addNew').modal('show');
      this.$validator.resume();
    },

    loadTickets() {
      // if (this.$gate.isAdmin()) {
      axios.get("/api/ticket", {
        params: this.search
      }).then(({
        data
      }) => this.Tickets = data.data); //   }
    },

    async upload_files(id, isactual = false) {
      let fl = 0;

      if (this.MaterialCost) {
        this.MaterialCost.forEach(file => {
          var fd = new FormData();
          fd.append(`file`, file);

          if (isactual) {
            fd.append(`file_type`, 'Actual Estimated Material');
          } else {
            fd.append(`file_type`, 'Estimated Material');
          }

          fd.append(`ticket_id`, id);
          axios.post('api/ticket/files', fd).then(res => {
            console.log('gallery uploaded');
          });
        });
      }

      if (this.ServiceCost) {
        this.ServiceCost.forEach(file => {
          var fd = new FormData();
          fd.append(`file`, file);

          if (isactual) {
            fd.append(`file_type`, 'Actual Estimated Service');
          } else {
            fd.append(`file_type`, 'Estimated Service');
          }

          fd.append(`ticket_id`, id);
          axios.post('api/ticket/files', fd).then(res => {
            console.log('gallery uploaded');
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
          fd.append(`description`, stage.description); //fd.append(`new_file`, stage.new_file);
          // fd.append(`file`, stage.file);

          fd.append(`ticket_id`, id);
          axios.post('api/ticket/stages', fd).then(res => {
            console.log('stages uploaded');
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
            this.form.put('/api/ticket/' + this.form.id).then(response => {
              if (response.data.success) {
                $('#addNew').modal('hide');
                Toast.fire({
                  icon: 'success',
                  title: response.data.message
                });
                this.upload_stages(this.form.id);
                this.upload_files(this.form.id);
                this.loadTickets();
              }

              pop_loader.hide();
            }).catch(() => {
              pop_loader.hide();

              if (typeof err.response.data != 'undefined') {
                this.$setErrorsFromResponse(err.response.data);
              }
            });
          } else {
            this.form.post('/api/ticket').then(response => {
              if (response.data.success) {
                $('#addNew').modal('hide');
                Toast.fire({
                  icon: 'success',
                  title: response.data.message
                });
                this.upload_files(response.data.data.id);
                this.loadTickets();
              }

              pop_loader.hide();
            }).catch(() => {
              pop_loader.hide();

              if (typeof err.response.data != 'undefined') {
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
          this.form.service_type = 'Paid Service';
          this.form.free_service_no = '';
        } else {
          this.form.free_service_no = this.selected_machine.completed_free_service + 1;
        }

        if (this.selected_machine && this.selected_machine.machine_type == 'New' && this.form.service_type == 'Free Service') {//  this.selected_machine.free_service_no
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
      }).catch(() => console.warn('Oh. Something went wrong'));
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
    }).catch(() => console.warn('Oh. Something went wrong'));
  },

  watch: {
    async 'form.sub_category_id'(n, o) {
      if (n) {
        this.get_machine();
      }
    },

    async 'form.site_id'(n, o) {
      if (n) {
        this.get_machine();
      }
    },

    'form.category_id': {
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

    async 'form.maintenance_provider'(n) {
      if (n != 'vendor') {
        this.form.service_type = 'Paid Service';
      }

      axios.get("api/user/list", {
        params: {
          type: n
        }
      }).then(response => {
        this.users = response.data.data;
      }).catch(() => console.warn('Oh. Something went wrong'));
    },

    async 'form.machine_id'(n) {
      this.selected_machine = this.machines.find(x => x.id === n);
      await this.check_free_service();
    },

    async 'form.service_type'(n) {
      if (n == 'Free Service') {
        await this.check_free_service();
      }
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
exports.push([module.i, "\n.bs {\r\n    border: 1px solid #808080a8;\r\n    border-radius: 5px;\n}\r\n", "", {"version":3,"sources":["F:/programming/wamp64/www/royal-infraconstruction/resources/js/components/Tickets/resources/js/components/Tickets/index.vue"],"names":[],"mappings":";AA6+BA;IACA,4BAAA;IACA,mBAAA;CACA","file":"index.vue","sourcesContent":["<template>\r\n    <section class=\"content\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n\r\n                <div class=\"col-12\">\r\n\r\n                    <div class=\"card\">\r\n                        <div class=\"card-header\">\r\n                            <h3 class=\"card-title\">Ticket List</h3>\r\n\r\n                            <div class=\"card-tools\">\r\n\r\n                                <button type=\"button\" class=\"btn btn-sm btn-primary\" @click=\"newModal\">\r\n                                    <i class=\"fa fa-plus-square\"></i>\r\n                                    Add New\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"card-body p-2\">\r\n                            <form autocomplete=\"off\" @submit.prevent=\"getResults()\">\r\n                                <div class=\"form-row\">\r\n                                    <div class=\"col\">\r\n                                        <v-select label=\"name\" :get-option-label=\"getLabel\"\r\n                                            :reduce=\"(option) => option.id\" :options=\"search_machines\"\r\n                                            placeholder=\"Enter machines ...\" v-model=\"search.machine_id\"\r\n                                            name=\"machine_id\">\r\n                                        </v-select>\r\n                                    </div>\r\n                                    <div class=\"col\">\r\n                                        <v-select label=\"site_name\" :reduce=\"(option) => option.id\"\r\n                                            :options=\"search_sites\" placeholder=\"Select Site...\"\r\n                                            v-model=\"search.site_id\" name=\"site_id\">\r\n                                        </v-select>\r\n                                    </div>\r\n                                    <div class=\"col\">\r\n                                        <v-select label=\"site_name\" :options=\"['Open', 'Closed']\"\r\n                                            placeholder=\"Select Status...\" v-model=\"search.status\" name=\"status\">\r\n                                        </v-select>\r\n                                    </div>\r\n\r\n                                    <button type=\"submit\" class=\"btn btn-success\">Search</button>\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n\r\n                        <!-- /.card-header -->\r\n                        <div class=\"card-body table-responsive p-0\">\r\n                            <table class=\"table table-hover\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th>Ticket No </th>\r\n                                        <th>Machine Name</th>\r\n                                        <th>Machine Far No</th>\r\n                                        <th>Site</th>\r\n                                        <th>Created By</th>\r\n                                        <th>Created Date</th>\r\n                                        <th>Expected date</th>\r\n                                        <th>Ticket Status</th>\r\n                                        <th>Action</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr v-for=\"ticket in Tickets.data\" :key=\"ticket.id\">\r\n                                        <td>{{ ticket.ticket_no }}</td>\r\n                                        <td class=\"text-capitalize\">{{ ticket.machine.name }}</td>\r\n                                        <td>{{ ticket.machine.far_no }}</td>\r\n                                        <td>{{ ticket.site ? ticket.site.site_name : '-' }}</td>\r\n                                        <td>{{ ticket.created_by_name }}</td>\r\n                                        <td>{{ ticket.created_at | myDate }}</td>\r\n                                        <td>{{ ticket.likely_date | myDate }}</td>\r\n                                        <td v-html=\"ticket.status\"></td>\r\n                                        <td>\r\n                                            <a href=\"javascript:void(0);\" class=\"btn btn-warning btn-sm\"\r\n                                                @click=\"viewModal(ticket)\">\r\n                                                View\r\n                                            </a>\r\n                                            <router-link :to=\"'/ticket/' + ticket.id\" class=\"btn btn-success btn-sm\"\r\n                                                v-if=\"ticket.status != 'Closed' && $gate.isAdmin()\">Edit</router-link>\r\n                                            <a href=\"javascript:void(0);\" class=\"btn btn-danger btn-sm\"\r\n                                                @click=\"closeModal(ticket)\" title=\"Close ticket\"\r\n                                                v-if=\"ticket.status != 'Closed' && $gate.isAdmin()\">\r\n                                                Close\r\n                                            </a>\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                        <!-- /.card-body -->\r\n                        <div class=\"card-footer\">\r\n                            <pagination :data=\"Tickets\" @pagination-change-page=\"getResults\"></pagination>\r\n                        </div>\r\n                    </div>\r\n                    <!-- /.card -->\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n\r\n        <!-- Close Modal -->\r\n        <div class=\"modal fade\" id=\"closemodal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"closemodal\"\r\n            aria-hidden=\"true\">\r\n            <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n                <div class=\"modal-content\">\r\n                    <div class=\"modal-header\">\r\n                        <h5 class=\"modal-title\">Close Ticket</h5>\r\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                            <span aria-hidden=\"true\">&times;</span>\r\n                        </button>\r\n                    </div>\r\n\r\n                    <form @submit.prevent=\"submitCloseTicket()\" data-vv-scope=\"closeticket\">\r\n                        <div class=\"modal-body\">\r\n                            <div class=\"row\">\r\n\r\n                                <div class=\"col-6\" v-if=\"pop_ticket && pop_ticket.likely_date\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Actual Date</label>\r\n                                        <datetime value-zone=\"Asia/Kolkata\" v-model=\"formclose.actual_date\"\r\n                                            name=\"actual_date\" input-class=\"form-control\"\r\n                                            :class=\"{ 'is-invalid': verrors.has('closeticket.actual_date') }\"\r\n                                            v-validate=\"'required'\" data-vv-as=\"Actual Date\"\r\n                                            :min-datetime=\"new Date(pop_ticket.created_at).toISOString()\"\r\n                                            :max-datetime=\"new Date().toISOString()\" />\r\n                                        <div v-if=\"verrors.has('closeticket.actual_date')\"\r\n                                            class=\"help-block invalid-feedback\">{{\r\n                                                    verrors.first('closeticket.actual_date')\r\n                                            }}</div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-6\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Machine Status</label>\r\n                                        <select v-model=\"formclose.machine_status\" name=\"machine_status\"\r\n                                            class=\"form-control\"\r\n                                            :class=\"{ 'is-invalid': verrors.has('closeticket.machine_status') }\"\r\n                                            v-validate=\"'required'\" data-vv-as=\"machine status\">\r\n                                            <option value=\"Running\">Running</option>\r\n                                            <option value=\"Running with Problem\">Running with Problem</option>\r\n                                        </select>\r\n                                        <div v-if=\"verrors.has('closeticket.machine_status')\"\r\n                                            class=\"help-block invalid-feedback\">{{\r\n                                                    verrors.first('closeticket.machine_status')\r\n                                            }}</div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"col-4\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Estimated Material cost</label>\r\n                                        <input v-model=\"pop_ticket.estimated_material_cost\" type=\"text\"\r\n                                            class=\"form-control\" readonly>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-4\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Actual Material cost</label>\r\n                                        <input v-model=\"formclose.actual_material_cost\" type=\"text\"\r\n                                            name=\"actual_material_cost\" v-validate=\"'required'\"\r\n                                            data-vv-as=\"Actual Material cost\" class=\"form-control\"\r\n                                            :class=\"{ 'is-invalid': verrors.has('closeticket.actual_material_cost') }\">\r\n                                        <div v-if=\"verrors.has('closeticket.actual_material_cost')\"\r\n                                            class=\"help-block invalid-feedback\"> {{\r\n                                                    verrors.first('closeticket.actual_material_cost')\r\n                                            }}</div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-4\">\r\n                                    <div class=\"form-group\">\r\n                                        <label> Actual Material cost File</label>\r\n                                        <input type=\"file\" @change=\"uploadMaterialCost\" multiple name=\"material_cost\"\r\n                                            ref=\"fileactualmaterial\" class=\"form-control\"\r\n                                            :class=\"{ 'is-invalid': verrors.has('closeticket.material_cost') }\"\r\n                                            v-validate=\"''\" data-vv-as=\"Actual Material cost\" />\r\n\r\n                                        <div class=\"clearfix\" v-if=\"pop_ticket.actual_estimated_material_files\">\r\n                                            <a v-for=\"(item, x) in pop_ticket.actual_estimated_material_files\"\r\n                                                :key=\"item.id\" :href=\"item.file\" target=\"_blank\">View\r\n                                                {{ pop_ticket.actual_estimated_material_files.length > 1 ? x + 1 : ''\r\n                                                }}</a>\r\n                                        </div>\r\n\r\n                                        <div v-if=\"verrors.has('closeticket.material_cost')\"\r\n                                            class=\"help-block invalid-feedback\"> {{\r\n                                                    verrors.first('closeticket.material_cost')\r\n                                            }}</div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"col-4\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Estimated Service cost</label>\r\n                                        <input v-model=\"pop_ticket.estimated_service_cost\" type=\"text\"\r\n                                            class=\"form-control\" readonly>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-4\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Actual Service cost</label>\r\n                                        <input v-model=\"formclose.actual_service_cost\" type=\"text\"\r\n                                            name=\"actual_service_cost\" v-validate=\"'required'\"\r\n                                            data-vv-as=\"Actual Service cost\" class=\"form-control\"\r\n                                            :class=\"{ 'is-invalid': verrors.has('closeticket.actual_service_cost') }\">\r\n                                        <div v-if=\"verrors.has('closeticket.actual_service_cost')\"\r\n                                            class=\"help-block invalid-feedback\"> {{\r\n                                                    verrors.first('closeticket.actual_service_cost')\r\n                                            }}</div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-4\">\r\n                                    <div class=\"form-group\">\r\n                                        <label> Actual Service cost File </label>\r\n                                        <input type=\"file\" @change=\"uploadServiceCost\" multiple name=\"service_cost\"\r\n                                            ref=\"fileactualservice\" class=\"form-control\"\r\n                                            :class=\"{ 'is-invalid': verrors.has('closeticket.service_cost') }\"\r\n                                            v-validate=\"''\" data-vv-as=\"Actual Service cost\" />\r\n\r\n                                        <div class=\"clearfix\" v-if=\"pop_ticket.actual_estimated_service_files\">\r\n                                            <a v-for=\"(item, x) in pop_ticket.actual_estimated_service_files\"\r\n                                                :key=\"item.id\" :href=\"item.file\" target=\"_blank\">View\r\n                                                {{ pop_ticket.actual_estimated_service_files.length > 1 ? x + 1 : ''\r\n                                                }}</a>\r\n                                        </div>\r\n\r\n                                        <div v-if=\"verrors.has('closeticket.service_cost')\"\r\n                                            class=\"help-block invalid-feedback\"> {{\r\n                                                    verrors.first('closeticket.service_cost')\r\n                                            }}</div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"col-6\" v-if=\"pop_machine.is_consumtion_hr_run\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Current Run hour </label>\r\n                                        <input v-model=\"formclose.current_run_hour\" name=\"current_run_hour\"\r\n                                            class=\"form-control\"\r\n                                            :class=\"{ 'is-invalid': verrors.has('closeticket.current_run_hour') }\"\r\n                                            v-validate=\"{ required: true, decimal: 2, min_value: pop_machine.last_maintenances ? pop_machine.last_maintenances.run_hour : pop_machine.last_hr_run }\"\r\n                                            data-vv-as=\"Current Run hour\" />\r\n                                        <div v-if=\"verrors.has('closeticket.current_run_hour')\"\r\n                                            class=\"help-block invalid-feedback\">\r\n                                            {{\r\n                                                    verrors.first('closeticket.current_run_hour')\r\n                                            }}</div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-6\" v-if=\"pop_machine.is_consumtion_km_run\">\r\n                                    <div class=\"form-group\">\r\n                                        <label> Current KM Run </label>\r\n                                        <input v-model=\"formclose.current_km_run\" name=\"current_km_run\"\r\n                                            class=\"form-control\"\r\n                                            :class=\"{ 'is-invalid': verrors.has('closeticket.current_km_run') }\"\r\n                                            v-validate=\"{ required: true, decimal: 2, min_value: pop_machine.last_maintenances ? pop_machine.last_maintenances.km_run : pop_machine.last_km_run }\"\r\n                                            data-vv-as=\"Current KM hour\" />\r\n                                        <div v-if=\"verrors.has('closeticket.current_km_run')\"\r\n                                            class=\"help-block invalid-feedback\">{{\r\n                                                    verrors.first('closeticket.current_km_run')\r\n                                            }}</div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-6\" v-if=\"pop_machine.is_production_fig\">\r\n                                    <div class=\"form-group\">\r\n                                        <label> Current Production fig </label>\r\n                                        <input v-model=\"formclose.current_production_fig\" name=\"current_production_fig\"\r\n                                            class=\"form-control\"\r\n                                            :class=\"{ 'is-invalid': verrors.has('closeticket.current_production_fig') }\"\r\n                                            v-validate=\"{ required: true, decimal: 2, min_value: pop_machine.last_maintenances ? pop_machine.last_maintenances.production_fig : pop_machine.periodic_maintenance_breakdown }\"\r\n                                            data-vv-as=\"Current Production fig\" />\r\n                                        <div v-if=\"verrors.has('closeticket.current_production_fig')\"\r\n                                            class=\"help-block invalid-feedback\">{{\r\n                                                    verrors.first('closeticket.current_production_fig')\r\n                                            }}</div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"col-6\" v-if=\"formclose.ticket_type == 'Breakdown Maintenance'\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Production Loss</label>\r\n                                        <input v-model=\"formclose.production_loss\" name=\"production_loss\"\r\n                                            class=\"form-control\"\r\n                                            :class=\"{ 'is-invalid': verrors.has('closeticket.production_loss') }\"\r\n                                            v-validate=\"'required'\" data-vv-as=\"Production Loss\" />\r\n                                        <div v-if=\"verrors.has('closeticket.production_loss')\"\r\n                                            class=\"help-block invalid-feedback\">\r\n                                            {{\r\n                                                    verrors.first('closeticket.production_loss')\r\n                                            }}</div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-6\" v-if=\"formclose.ticket_type == 'Breakdown Maintenance'\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Production loss amount</label>\r\n                                        <input v-model=\"formclose.production_loss_amount\" name=\"production_loss_amount\"\r\n                                            class=\"form-control\"\r\n                                            :class=\"{ 'is-invalid': verrors.has('closeticket.production_loss_amount') }\"\r\n                                            v-validate=\"'required'\" data-vv-as=\"Current Production fig\" />\r\n                                        <div v-if=\"verrors.has('closeticket.production_loss_amount')\"\r\n                                            class=\"help-block invalid-feedback\">{{\r\n                                                    verrors.first('closeticket.production_loss_amount')\r\n                                            }}</div>\r\n                                    </div>\r\n                                </div>\r\n\r\n\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"modal-footer\">\r\n                            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n                            <button type=\"submit\" class=\"btn btn-primary\">Close Ticket</button>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--View Modal-->\r\n        <div class=\"modal fade\" id=\"viewmodal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"viewmodal\"\r\n            aria-hidden=\"true\">\r\n            <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n                <div class=\"modal-content\">\r\n                    <div class=\"modal-header\">\r\n                        <h5 class=\"modal-title\">View Ticket</h5>\r\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                            <span aria-hidden=\"true\">&times;</span>\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"modal-body\" v-if=\"pop_ticket\">\r\n                        <div class=\"row\">\r\n\r\n\r\n\r\n                            <div class=\"col-4 bs\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Machine Site</label>\r\n                                    <v-select label=\"site_name\" :reduce=\"(option) => option.id\" :options=\"sites\"\r\n                                        placeholder=\"Choose Site ...\" v-model=\"pop_ticket.site_id\" disabled>\r\n                                    </v-select>\r\n\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-4 bs\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Machine Category</label>\r\n                                    <v-select label=\"name\" :reduce=\"(option) => option.id\" :options=\"categories\"\r\n                                        placeholder=\"Choose Category ...\" v-model=\"pop_ticket.category_id\" disabled>\r\n                                    </v-select>\r\n\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-4 bs\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Machine Description</label>\r\n                                    <v-select label=\"name\" :reduce=\"(option) => option.id\" :options=\"sub_categories\"\r\n                                        placeholder=\"Choose description ...\" v-model=\"pop_ticket.sub_category_id\"\r\n                                        name=\"sub_category_id\" :disabled=\"pop_ticket.id != ''\">\r\n                                    </v-select>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-4 bs\">\r\n                                <div class=\"form-group\">\r\n                                    <label> Machine : </label>\r\n                                    {{ pop_ticket.machine.far_no }} {{ pop_ticket.machine.name }}\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-4 bs\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Maintenance Provider</label>\r\n                                    {{ pop_ticket.maintenance_provider }}\r\n\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-4 bs\">\r\n                                <div class=\"form-group\">\r\n                                    <label> {{ pop_ticket.maintenance_provider == 'user' ? 'user' : 'vendor' }}\r\n                                    </label>\r\n                                    <template v-if=\"pop_ticket.maintenance_provider == 'vendor'\">\r\n                                        <v-select label=\"name\" :reduce=\"(option) => option.id\" :options=\"users\"\r\n                                            placeholder=\"Enter users ...\" v-model=\"pop_ticket.vendor_id\"\r\n                                            v-validate=\"{ required: pop_ticket.maintenance_provider == 'vendor' ? true : false }\"\r\n                                            disabled>\r\n                                        </v-select>\r\n                                    </template>\r\n                                    <template v-else>\r\n                                        <v-select label=\"name\" :reduce=\"(option) => option.id\" :options=\"users\"\r\n                                            placeholder=\"Enter users ...\" v-model=\"pop_ticket.user_id\" disabled>\r\n                                        </v-select>\r\n                                    </template>\r\n\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-6 bs\"\r\n                                v-if=\"pop_ticket.maintenance_provider == 'vendor' && pop_ticket.service_type\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Service Type</label>\r\n                                    {{ pop_ticket.service_type }}\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-6 bs\"\r\n                                v-if=\"pop_ticket.service_type == 'Free Service' && pop_ticket.free_service_no\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Free service no:</label>\r\n                                    {{ pop_ticket.free_service_no }}/{{ pop_ticket.machine.free_service_no }}\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-6 bs\" v-if=\"pop_ticket.ticket_type\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Ticket Type</label>\r\n                                    {{ pop_ticket.ticket_type }}\r\n                                </div>\r\n                            </div>\r\n\r\n\r\n\r\n                            <div class=\"col-3 bs\" v-if=\"pop_ticket.estimated_material_cost\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Estimated Material cost</label>\r\n                                    {{ pop_ticket.estimated_material_cost | toCurrency }}\r\n                                    <p>\r\n                                        <a :href=\"file.file\" v-for=\"(file, x) in pop_ticket.estimated_material_files\"\r\n                                            :key=\"file.id\" target=\"_blank\">View\r\n                                            {{ pop_ticket.estimated_material_files.length > 1 ? x + 1 : '' }}</a>\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-3 bs\" v-if=\"pop_ticket.estimated_service_cost\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Estimated Service cost : </label>\r\n                                    {{ pop_ticket.estimated_service_cost | toCurrency }}\r\n                                    <p>\r\n                                        <a :href=\"file.file\" v-for=\"(file, x) in pop_ticket.estimated_service_files\"\r\n                                            :key=\"file.id\" target=\"_blank\">View\r\n                                            {{ pop_ticket.estimated_service_files.length > 1 ? x + 1 : '' }}</a>\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-3 bs\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Actual Material Cost : </label>\r\n                                    <span v-if=\"pop_ticket.actual_material_cost\"> {{\r\n                                            pop_ticket.actual_material_cost | toCurrency\r\n                                    }}</span>\r\n                                    <p>\r\n                                        <a :href=\"file.file\"\r\n                                            v-for=\"(file, x) in pop_ticket.actual_estimated_material_files\"\r\n                                            :key=\"file.id\" target=\"_blank\">View\r\n                                            {{ pop_ticket.actual_estimated_material_files.length > 1 ? x + 1 : '' }}</a>\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-3 bs\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Actual Service Cost : </label>\r\n                                    <span v-if=\"pop_ticket.actual_service_cost\">{{\r\n                                            pop_ticket.actual_service_cost | toCurrency\r\n                                    }}</span>\r\n                                    <p>\r\n                                        <a :href=\"file.file\"\r\n                                            v-for=\"(file, x) in pop_ticket.actual_estimated_service_files\"\r\n                                            :key=\"file.id\" target=\"_blank\">View {{\r\n                                                    pop_ticket.actual_estimated_service_files.length > 1 ?\r\n                                                        x + 1 : ''\r\n                                            }}</a>\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n\r\n\r\n\r\n\r\n                            <div class=\"col-4 bs\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Ticket No : </label>\r\n                                    {{ pop_ticket.ticket_no }}\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-4 bs\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Likely Date : </label>\r\n                                    {{ pop_ticket.likely_date | myDate }}\r\n\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-4 bs\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Actual Date : </label>\r\n                                    {{ pop_ticket.actual_date | myDate }}\r\n                                </div>\r\n                            </div>\r\n\r\n\r\n\r\n                            <div class=\"col-4 bs\" v-if=\"pop_ticket.current_run_hour\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Current Run Hour : </label>\r\n                                    {{ pop_ticket.current_run_hour }}\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-4 bs\" v-if=\"pop_ticket.current_km_run\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Current KM Hour : </label>\r\n                                    {{ pop_ticket.current_km_run }}\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-4 bs\" v-if=\"pop_ticket.current_production_fig\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Current Production Fig : </label>\r\n                                    {{ pop_ticket.current_production_fig }}\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-4 bs\" v-if=\"pop_ticket.production_loss\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Production Loss : </label>\r\n                                    {{ pop_ticket.production_loss }}\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-4 bs\" v-if=\"pop_ticket.production_loss_amount\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Production Loss Amount : </label>\r\n                                    {{ pop_ticket.production_loss_amount | toCurrency }}\r\n                                </div>\r\n                            </div>\r\n\r\n\r\n\r\n\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n\r\n    </section>\r\n</template>\r\n\r\n<script>\r\nimport VueTagsInput from '@johmun/vue-tags-input';\r\nexport default {\r\n    components: {\r\n        VueTagsInput,\r\n    },\r\n    data() {\r\n        return {\r\n            search_machines: [],\r\n            search_sites: [],\r\n            search: {\r\n                page: 1,\r\n                machine_id: '',\r\n                site_id: ''\r\n            },\r\n            popticket: {},\r\n            categories: [],\r\n            sub_categories: [],\r\n            sites: [],\r\n            selected_machine: '',\r\n            users: [],\r\n            machines: [],\r\n            Tickets: {},\r\n            editmode: false,\r\n            MaterialCost: null,\r\n            ServiceCost: null,\r\n            form: new Form({\r\n                id: '',\r\n                site_id: '',\r\n                category_id: '',\r\n                sub_category_id: '',\r\n                free_service_no: '',\r\n                ticket_type: 'Periodic Maintenance',\r\n                service_type: 'Paid Service',\r\n                machine_id: '',\r\n                ticket_no: '',\r\n                vendor_id: '',\r\n                user_id: '',\r\n                likely_date: '',\r\n                estimated_material_cost: '',\r\n                estimated_service_cost: '',\r\n                maintenance_provider: 'vendor',\r\n                problem_description: '',\r\n                complaint_nature: 'Major',\r\n            }),\r\n            stages: [{\r\n                id: '',\r\n                stage_no: '',\r\n                stage_date: '',\r\n                description: '',\r\n                file: '',\r\n                new_file: ''\r\n            }],\r\n\r\n            formclose: new Form({\r\n                id: '',\r\n                machine_status: '',\r\n                edit_type: 'closeticket',\r\n                ticket_type: 'Periodic Maintenance',\r\n                actual_date: '',\r\n                actual_material_cost: '',\r\n                actual_service_cost: '',\r\n                current_run_hour: '',\r\n                current_km_run: '',\r\n                current_production_fig: '',\r\n                production_loss: '',\r\n                production_loss_amount: '',\r\n                status: 'Closed',\r\n                vendor_resolve_date: '',\r\n                vendor_attain_date: '',\r\n                vendor_response_date: '',\r\n                vendor_call_date: '',\r\n            }),\r\n            pop_machine: '',\r\n            pop_ticket: '',\r\n            opn_stage: ['Vendor created', 'Vendor Assigned', 'Order issued', 'Payment under process', 'Payment Done', 'Logistics under process', 'Materials despatched', 'Material received at site', 'Maintainace under progress'],\r\n            last_stage_index: 0,\r\n            last_stage_date: '',\r\n        }\r\n    },\r\n    methods: {\r\n        getLabel(val) {\r\n            if (typeof val === 'object') {\r\n                return val.far_no + ' - ' + val.name;\r\n            } else {\r\n                return val;\r\n            }\r\n        },\r\n        viewModal(ticket) {\r\n            this.pop_ticket = ''\r\n            this.pop_ticket = ticket\r\n            axios.get(\"api/category/\" + ticket.category_id)\r\n                .then((res) => {\r\n                    this.sub_categories = res.data.data;\r\n                })\r\n            $('#viewmodal').modal('show');\r\n        },\r\n        AddStage() {\r\n            this.stages.push({\r\n                id: '',\r\n                stage_no: '',\r\n                stage_date: '',\r\n                description: '',\r\n                file: '',\r\n                new_file: ''\r\n            });\r\n        },\r\n        async choose_stage_file(event, x) {\r\n            this.stages[x].new_file = event.target.files[0];\r\n        },\r\n\r\n        async uploadMaterialCost(event) {\r\n            this.MaterialCost = event.target.files\r\n        },\r\n        async uploadServiceCost(event) {\r\n            this.ServiceCost = event.target.files\r\n        },\r\n\r\n        getResults(page = 1) {\r\n            this.$Progress.start();\r\n            this.search.page = page\r\n            axios.get('/api/ticket', {\r\n                params: this.search\r\n            }).then(({\r\n                data\r\n            }) => (this.Tickets = data.data));\r\n            this.$Progress.finish();\r\n        },\r\n        submitCloseTicket() {\r\n            console.log('tag', 'sss')\r\n            this.$validator.reset();\r\n            this.$validator.resume();\r\n            this.$validator.validateAll('closeticket').then(async (valid) => {\r\n                if (valid) {\r\n                    let pop_loader = this.$loading.show({\r\n                        container: this.$refs.vps_submit_pop,\r\n                    });\r\n\r\n                    this.formclose.put('/api/ticket/' + this.formclose.id)\r\n                        .then((response) => {\r\n                            if (response.data.success) {\r\n                                $('#closemodal').modal('hide');\r\n                                this.$validator.reset();\r\n                                this.formclose.reset();\r\n                                Toast.fire({\r\n                                    icon: 'success',\r\n                                    title: response.data.message\r\n                                });\r\n                                this.upload_files(this.formclose.id, 'actual')\r\n                                this.loadTickets();\r\n                            }\r\n                            pop_loader.hide()\r\n                        })\r\n                        .catch(() => {\r\n                            pop_loader.hide()\r\n                            if (typeof err.response.data != 'undefined') {\r\n                                this.$setErrorsFromResponse(err.response.data);\r\n                            }\r\n                        })\r\n                } else {\r\n                    console.log('ffff');\r\n                }\r\n            });\r\n        },\r\n\r\n        closeModal(ticket) {\r\n            this.$validator.pause();\r\n            $('#closemodal').modal('show');\r\n            this.$validator.reset();\r\n            this.formclose.reset();\r\n            this.$refs.fileactualservice.value = null;\r\n            this.$refs.fileactualmaterial.value = null;\r\n            this.pop_ticket = ticket\r\n            this.pop_machine = ticket.machine\r\n            this.formclose.fill(ticket);\r\n            this.formclose.edit_type = 'closeticket'\r\n            this.$validator.resume();\r\n        },\r\n        editModal(ticket) {\r\n            this.editmode = true;\r\n            this.$validator.pause();\r\n            this.form.reset();\r\n            this.pop_ticket = ticket\r\n            if (this.$gate.isAdmin()) {\r\n                this.$refs.fileservice.value = null;\r\n                this.$refs.filematerial.value = null;\r\n            }\r\n            this.MaterialCost = null\r\n            this.ServiceCost = null\r\n            $('#addNew').modal('show');\r\n            this.form.fill(ticket);\r\n            this.form.likely_date = ticket.likely_date ? new Date(ticket.likely_date).toISOString() : ''\r\n            this.stages = []\r\n            if (ticket.stages && ticket.stages.length > 0) {\r\n                this.stages = ticket.stages\r\n            }\r\n            this.$validator.resume();\r\n        },\r\n        newModal() {\r\n            this.stages = []\r\n            this.AddStage()\r\n            this.editmode = false;\r\n            this.$validator.reset();\r\n            this.$validator.pause();\r\n            this.form.reset();\r\n            if (this.$gate.isAdmin()) {\r\n                this.$refs.fileservice.value = null;\r\n                this.$refs.filematerial.value = null;\r\n            }\r\n            this.MaterialCost = null\r\n            this.ServiceCost = null\r\n            $('#addNew').modal('show');\r\n            this.$validator.resume();\r\n        },\r\n\r\n        loadTickets() {\r\n            // if (this.$gate.isAdmin()) {\r\n            axios.get(\"/api/ticket\", {\r\n                params: this.search\r\n            }).then(({\r\n                data\r\n            }) => (this.Tickets = data.data));\r\n            //   }\r\n        },\r\n\r\n        async upload_files(id, isactual = false) {\r\n            let fl = 0\r\n            if (this.MaterialCost) {\r\n                this.MaterialCost.forEach(file => {\r\n                    var fd = new FormData();\r\n                    fd.append(`file`, file);\r\n                    if (isactual) {\r\n                        fd.append(`file_type`, 'Actual Estimated Material');\r\n                    } else {\r\n                        fd.append(`file_type`, 'Estimated Material');\r\n                    }\r\n                    fd.append(`ticket_id`, id);\r\n                    axios.post('api/ticket/files', fd).then((res) => {\r\n                        console.log('gallery uploaded')\r\n                    })\r\n                });\r\n            }\r\n            if (this.ServiceCost) {\r\n                this.ServiceCost.forEach(file => {\r\n                    var fd = new FormData();\r\n                    fd.append(`file`, file);\r\n                    if (isactual) {\r\n                        fd.append(`file_type`, 'Actual Estimated Service');\r\n                    } else {\r\n                        fd.append(`file_type`, 'Estimated Service');\r\n                    }\r\n                    fd.append(`ticket_id`, id);\r\n                    axios.post('api/ticket/files', fd).then((res) => {\r\n                        console.log('gallery uploaded')\r\n                    })\r\n                });\r\n            }\r\n        },\r\n\r\n        async upload_stages(id) {\r\n            if (this.stages) {\r\n                this.stages.forEach(stage => {\r\n                    var fd = new FormData();\r\n                    fd.append(`id`, stage.id);\r\n                    fd.append(`stage_no`, stage.stage_no);\r\n                    fd.append(`stage_date`, stage.stage_date);\r\n                    fd.append(`description`, stage.description);\r\n                    //fd.append(`new_file`, stage.new_file);\r\n                    // fd.append(`file`, stage.file);\r\n                    fd.append(`ticket_id`, id);\r\n                    axios.post('api/ticket/stages', fd).then((res) => {\r\n                        console.log('stages uploaded')\r\n                    })\r\n                });\r\n            }\r\n        },\r\n\r\n        submitTicket() {\r\n            this.$validator.validateAll().then(async (valid) => {\r\n                if (valid) {\r\n                    let pop_loader = this.$loading.show({\r\n                        container: this.$refs.vps_submit_pop,\r\n                    });\r\n                    if (this.form.id) {\r\n                        this.form.put('/api/ticket/' + this.form.id)\r\n                            .then((response) => {\r\n                                if (response.data.success) {\r\n                                    $('#addNew').modal('hide');\r\n                                    Toast.fire({\r\n                                        icon: 'success',\r\n                                        title: response.data.message\r\n                                    });\r\n                                    this.upload_stages(this.form.id)\r\n                                    this.upload_files(this.form.id)\r\n                                    this.loadTickets();\r\n                                }\r\n                                pop_loader.hide()\r\n                            })\r\n                            .catch(() => {\r\n                                pop_loader.hide()\r\n                                if (typeof err.response.data != 'undefined') {\r\n                                    this.$setErrorsFromResponse(err.response.data);\r\n                                }\r\n                            })\r\n\r\n                    } else {\r\n                        this.form.post('/api/ticket')\r\n                            .then((response) => {\r\n                                if (response.data.success) {\r\n                                    $('#addNew').modal('hide');\r\n                                    Toast.fire({\r\n                                        icon: 'success',\r\n                                        title: response.data.message\r\n                                    });\r\n\r\n                                    this.upload_files(response.data.data.id)\r\n                                    this.loadTickets();\r\n                                }\r\n                                pop_loader.hide()\r\n                            })\r\n                            .catch(() => {\r\n                                pop_loader.hide()\r\n                                if (typeof err.response.data != 'undefined') {\r\n                                    this.$setErrorsFromResponse(err.response.data);\r\n                                }\r\n                            })\r\n                    }\r\n\r\n                }\r\n            });\r\n\r\n\r\n        },\r\n\r\n        async check_free_service() {\r\n            if (this.selected_machine) {\r\n                if (this.selected_machine.completed_free_service >= this.selected_machine.free_service_no) {\r\n                    this.form.service_type = 'Paid Service';\r\n                    this.form.free_service_no = ''\r\n                } else {\r\n                    this.form.free_service_no = (this.selected_machine.completed_free_service + 1)\r\n                }\r\n\r\n\r\n                if (this.selected_machine && this.selected_machine.machine_type == 'New' && this.form.service_type == 'Free Service') {\r\n                    //  this.selected_machine.free_service_no\r\n                }\r\n            }\r\n        },\r\n\r\n        async get_machine() {\r\n            axios.get(\"/api/ticket_machine\", {\r\n                params: {\r\n                    site_id: this.form.site_id,\r\n                    category_id: this.form.category_id,\r\n                    sub_category_id: this.form.sub_category_id,\r\n                }\r\n            }).then(response => {\r\n                this.machines = response.data.data;\r\n            }).catch(() => console.warn('Oh. Something went wrong'));\r\n        }\r\n\r\n    },\r\n    mounted() {\r\n\r\n    },\r\n    created() {\r\n        this.loadTickets();\r\n    },\r\n    beforeCreate() {\r\n        axios.get(\"api/get_pre_machine\")\r\n            .then((res) => {\r\n                this.categories = res.data.data.Category;\r\n                this.sites = res.data.data.sites;\r\n            })\r\n        axios.get(\"/api/initial_ticket\").then(response => {\r\n            this.users = response.data.data.vendors;\r\n            this.machines = response.data.data.machines;\r\n            this.search_machines = response.data.data.machines;\r\n            this.search_sites = response.data.data.sites;\r\n        }).catch(() => console.warn('Oh. Something went wrong'));\r\n    },\r\n    watch: {\r\n        async 'form.sub_category_id'(n, o) {\r\n            if (n) {\r\n                this.get_machine()\r\n            }\r\n        },\r\n        async 'form.site_id'(n, o) {\r\n            if (n) {\r\n                this.get_machine()\r\n            }\r\n        },\r\n\r\n        'form.category_id': {\r\n            handler: function (n, o) {\r\n\r\n                if (n) {\r\n                    axios.get(\"api/category/\" + n)\r\n                        .then((res) => {\r\n                            this.sub_categories = res.data.data;\r\n                        })\r\n                    this.get_machine()\r\n                }\r\n            },\r\n            deep: true,\r\n            initial: true\r\n        },\r\n        stages: {\r\n            handler: function (n, o) {\r\n                if (n && n.length > 0) {\r\n                    let la = n[n.length - 1];\r\n                    if (la.stage_no)\r\n                        this.last_stage_index = this.opn_stage.indexOf(la.stage_no);\r\n                    if (la.stage_date)\r\n                        this.last_stage_date = new Date(la.stage_date).toISOString();\r\n                } else {\r\n                    this.last_stage_index = 0;\r\n                    if (this.pop_ticket && this.pop_ticket.created_at) {\r\n                        this.last_stage_date = new Date(this.pop_ticket.created_at).toISOString();\r\n                    } else {\r\n                        this.last_stage_date = new Date().toISOString();\r\n                    }\r\n\r\n                }\r\n            },\r\n            deep: true,\r\n            initial: true,\r\n        },\r\n\r\n        async 'form.maintenance_provider'(n) {\r\n            if (n != 'vendor') {\r\n                this.form.service_type = 'Paid Service'\r\n            }\r\n            axios.get(\"api/user/list\", {\r\n                params: {\r\n                    type: n\r\n                }\r\n            })\r\n                .then(response => {\r\n                    this.users = response.data.data;\r\n                }).catch(() => console.warn('Oh. Something went wrong'));\r\n        },\r\n\r\n        async 'form.machine_id'(n) {\r\n            this.selected_machine = this.machines.find(x => x.id === n);\r\n            await this.check_free_service()\r\n        },\r\n        async 'form.service_type'(n) {\r\n            if (n == 'Free Service') {\r\n                await this.check_free_service()\r\n            }\r\n        }\r\n\r\n    },\r\n}\r\n</script>\r\n<style>\r\n.bs {\r\n    border: 1px solid #808080a8;\r\n    border-radius: 5px;\r\n}\r\n</style>"],"sourceRoot":""}]);

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
              _c("div", { staticClass: "card-tools" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-sm btn-primary",
                    attrs: { type: "button" },
                    on: { click: _vm.newModal }
                  },
                  [
                    _c("i", { staticClass: "fa fa-plus-square" }),
                    _vm._v(
                      "\n                                Add New\n                            "
                    )
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body p-2" }, [
              _c(
                "form",
                {
                  attrs: { autocomplete: "off" },
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.getResults()
                    }
                  }
                },
                [
                  _c("div", { staticClass: "form-row" }, [
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
                      "button",
                      {
                        staticClass: "btn btn-success",
                        attrs: { type: "submit" }
                      },
                      [_vm._v("Search")]
                    )
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body table-responsive p-0" }, [
              _c("table", { staticClass: "table table-hover" }, [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.Tickets.data, function(ticket) {
                    return _c("tr", { key: ticket.id }, [
                      _c("td", [_vm._v(_vm._s(ticket.ticket_no))]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-capitalize" }, [
                        _vm._v(_vm._s(ticket.machine.name))
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(ticket.machine.far_no))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(ticket.site ? ticket.site.site_name : "-")
                        )
                      ]),
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
                      _c("td", {
                        domProps: { innerHTML: _vm._s(ticket.status) }
                      }),
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
                          ticket.status != "Closed" && _vm.$gate.isAdmin()
                            ? _c(
                                "router-link",
                                {
                                  staticClass: "btn btn-success btn-sm",
                                  attrs: { to: "/ticket/" + ticket.id }
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
            ]),
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
                    _c("div", { staticClass: "row" }, [
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
                                          _vm._s(
                                            _vm.verrors.first(
                                              "closeticket.actual_date"
                                            )
                                          )
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
                                [_vm._v("Running with Problem")]
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
                                    _vm._s(
                                      _vm.verrors.first(
                                        "closeticket.machine_status"
                                      )
                                    )
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
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.pop_ticket.estimated_material_cost,
                                expression: "pop_ticket.estimated_material_cost"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", readonly: "" },
                            domProps: {
                              value: _vm.pop_ticket.estimated_material_cost
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.pop_ticket,
                                  "estimated_material_cost",
                                  $event.target.value
                                )
                              }
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
                              "data-vv-as": "Actual Material cost"
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
                                    " " +
                                      _vm._s(
                                        _vm.verrors.first(
                                          "closeticket.actual_material_cost"
                                        )
                                      )
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
                                    " " +
                                      _vm._s(
                                        _vm.verrors.first(
                                          "closeticket.material_cost"
                                        )
                                      )
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
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.pop_ticket.estimated_service_cost,
                                expression: "pop_ticket.estimated_service_cost"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", readonly: "" },
                            domProps: {
                              value: _vm.pop_ticket.estimated_service_cost
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.pop_ticket,
                                  "estimated_service_cost",
                                  $event.target.value
                                )
                              }
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
                              "data-vv-as": "Actual Service cost"
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
                                    " " +
                                      _vm._s(
                                        _vm.verrors.first(
                                          "closeticket.actual_service_cost"
                                        )
                                      )
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
                                    " " +
                                      _vm._s(
                                        _vm.verrors.first(
                                          "closeticket.service_cost"
                                        )
                                      )
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
                                      "{ required: true, decimal: 2, min_value: pop_machine.last_maintenances ? pop_machine.last_maintenances.run_hour : pop_machine.last_hr_run }"
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
                                          )
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
                                      "{ required: true, decimal: 2, min_value: pop_machine.last_maintenances ? pop_machine.last_maintenances.km_run : pop_machine.last_km_run }"
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
                                        _vm._s(
                                          _vm.verrors.first(
                                            "closeticket.current_km_run"
                                          )
                                        )
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
                                      "{ required: true, decimal: 2, min_value: pop_machine.last_maintenances ? pop_machine.last_maintenances.production_fig : pop_machine.periodic_maintenance_breakdown }"
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
                                        _vm._s(
                                          _vm.verrors.first(
                                            "closeticket.current_production_fig"
                                          )
                                        )
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
                                  "data-vv-as": "Production Loss"
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
                                          )
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
                                  "data-vv-as": "Current Production fig"
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
                                        _vm._s(
                                          _vm.verrors.first(
                                            "closeticket.production_loss_amount"
                                          )
                                        )
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ])
                          ])
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(2)
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
              _vm._m(3),
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
                          _c("label", [_vm._v(" Machine : ")]),
                          _vm._v(
                            "\n                                " +
                              _vm._s(_vm.pop_ticket.machine.far_no) +
                              " " +
                              _vm._s(_vm.pop_ticket.machine.name) +
                              "\n                            "
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-4 bs" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [_vm._v("Maintenance Provider")]),
                          _vm._v(
                            "\n                                " +
                              _vm._s(_vm.pop_ticket.maintenance_provider) +
                              "\n\n                            "
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-4 bs" }, [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", [
                              _vm._v(
                                " " +
                                  _vm._s(
                                    _vm.pop_ticket.maintenance_provider ==
                                      "user"
                                      ? "user"
                                      : "vendor"
                                  ) +
                                  "\n                                "
                              )
                            ]),
                            _vm._v(" "),
                            _vm.pop_ticket.maintenance_provider == "vendor"
                              ? [
                                  _c("v-select", {
                                    directives: [
                                      {
                                        name: "validate",
                                        rawName: "v-validate",
                                        value: {
                                          required:
                                            _vm.pop_ticket
                                              .maintenance_provider == "vendor"
                                              ? true
                                              : false
                                        },
                                        expression:
                                          "{ required: pop_ticket.maintenance_provider == 'vendor' ? true : false }"
                                      }
                                    ],
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
                                      value: _vm.pop_ticket.vendor_id,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.pop_ticket,
                                          "vendor_id",
                                          $$v
                                        )
                                      },
                                      expression: "pop_ticket.vendor_id"
                                    }
                                  })
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
                      _vm.pop_ticket.maintenance_provider == "vendor" &&
                      _vm.pop_ticket.service_type
                        ? _c("div", { staticClass: "col-6 bs" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [_vm._v("Service Type")]),
                              _vm._v(
                                "\n                                " +
                                  _vm._s(_vm.pop_ticket.service_type) +
                                  "\n                            "
                              )
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.pop_ticket.service_type == "Free Service" &&
                      _vm.pop_ticket.free_service_no
                        ? _c("div", { staticClass: "col-6 bs" }, [
                            _c("div", { staticClass: "form-group" }, [
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
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.pop_ticket.ticket_type
                        ? _c("div", { staticClass: "col-6 bs" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [_vm._v("Ticket Type")]),
                              _vm._v(
                                "\n                                " +
                                  _vm._s(_vm.pop_ticket.ticket_type) +
                                  "\n                            "
                              )
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.pop_ticket.estimated_material_cost
                        ? _c("div", { staticClass: "col-3 bs" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [_vm._v("Estimated Material cost")]),
                              _vm._v(
                                "\n                                " +
                                  _vm._s(
                                    _vm._f("toCurrency")(
                                      _vm.pop_ticket.estimated_material_cost
                                    )
                                  ) +
                                  "\n                                "
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
                                        attrs: {
                                          href: file.file,
                                          target: "_blank"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "View\n                                        " +
                                            _vm._s(
                                              _vm.pop_ticket
                                                .estimated_material_files
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
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.pop_ticket.estimated_service_cost
                        ? _c("div", { staticClass: "col-3 bs" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [
                                _vm._v("Estimated Service cost : ")
                              ]),
                              _vm._v(
                                "\n                                " +
                                  _vm._s(
                                    _vm._f("toCurrency")(
                                      _vm.pop_ticket.estimated_service_cost
                                    )
                                  ) +
                                  "\n                                "
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
                                        attrs: {
                                          href: file.file,
                                          target: "_blank"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "View\n                                        " +
                                            _vm._s(
                                              _vm.pop_ticket
                                                .estimated_service_files
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
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-3 bs" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [_vm._v("Actual Material Cost : ")]),
                          _vm._v(" "),
                          _vm.pop_ticket.actual_material_cost
                            ? _c("span", [
                                _vm._v(
                                  " " +
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
                                    attrs: { href: file.file, target: "_blank" }
                                  },
                                  [
                                    _vm._v(
                                      "View " +
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
                          _c("label", [_vm._v("Ticket No : ")]),
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
                          _c("label", [_vm._v("Likely Date : ")]),
                          _vm._v(
                            "\n                                " +
                              _vm._s(
                                _vm._f("myDate")(_vm.pop_ticket.likely_date)
                              ) +
                              "\n\n                            "
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-4 bs" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [_vm._v("Actual Date : ")]),
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
        _c("th", [_vm._v("Ticket No ")]),
        _vm._v(" "),
        _c("th", [_vm._v("Machine Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Machine Far No")]),
        _vm._v(" "),
        _c("th", [_vm._v("Site")]),
        _vm._v(" "),
        _c("th", [_vm._v("Created By")]),
        _vm._v(" "),
        _c("th", [_vm._v("Created Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Expected date")]),
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
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-secondary",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v("Close")]
      ),
      _vm._v(" "),
      _c(
        "button",
        { staticClass: "btn btn-primary", attrs: { type: "submit" } },
        [_vm._v("Close Ticket")]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvVGlja2V0cy9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvVGlja2V0cy9pbmRleC52dWU/MmMyOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9UaWNrZXRzL2luZGV4LnZ1ZT9kNDQxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1RpY2tldHMvaW5kZXgudnVlP2M5OTkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvVGlja2V0cy9pbmRleC52dWUiXSwibmFtZXMiOlsiY29tcG9uZW50cyIsIlZ1ZVRhZ3NJbnB1dCIsImRhdGEiLCJzZWFyY2hfbWFjaGluZXMiLCJzZWFyY2hfc2l0ZXMiLCJzZWFyY2giLCJwYWdlIiwibWFjaGluZV9pZCIsInNpdGVfaWQiLCJwb3B0aWNrZXQiLCJjYXRlZ29yaWVzIiwic3ViX2NhdGVnb3JpZXMiLCJzaXRlcyIsInNlbGVjdGVkX21hY2hpbmUiLCJ1c2VycyIsIm1hY2hpbmVzIiwiVGlja2V0cyIsImVkaXRtb2RlIiwiTWF0ZXJpYWxDb3N0IiwiU2VydmljZUNvc3QiLCJmb3JtIiwiaWQiLCJjYXRlZ29yeV9pZCIsInN1Yl9jYXRlZ29yeV9pZCIsImZyZWVfc2VydmljZV9ubyIsInRpY2tldF90eXBlIiwic2VydmljZV90eXBlIiwidGlja2V0X25vIiwidmVuZG9yX2lkIiwidXNlcl9pZCIsImxpa2VseV9kYXRlIiwiZXN0aW1hdGVkX21hdGVyaWFsX2Nvc3QiLCJlc3RpbWF0ZWRfc2VydmljZV9jb3N0IiwibWFpbnRlbmFuY2VfcHJvdmlkZXIiLCJwcm9ibGVtX2Rlc2NyaXB0aW9uIiwiY29tcGxhaW50X25hdHVyZSIsInN0YWdlcyIsInN0YWdlX25vIiwic3RhZ2VfZGF0ZSIsImRlc2NyaXB0aW9uIiwiZmlsZSIsIm5ld19maWxlIiwiZm9ybWNsb3NlIiwibWFjaGluZV9zdGF0dXMiLCJlZGl0X3R5cGUiLCJhY3R1YWxfZGF0ZSIsImFjdHVhbF9tYXRlcmlhbF9jb3N0IiwiYWN0dWFsX3NlcnZpY2VfY29zdCIsImN1cnJlbnRfcnVuX2hvdXIiLCJjdXJyZW50X2ttX3J1biIsImN1cnJlbnRfcHJvZHVjdGlvbl9maWciLCJwcm9kdWN0aW9uX2xvc3MiLCJwcm9kdWN0aW9uX2xvc3NfYW1vdW50Iiwic3RhdHVzIiwidmVuZG9yX3Jlc29sdmVfZGF0ZSIsInZlbmRvcl9hdHRhaW5fZGF0ZSIsInZlbmRvcl9yZXNwb25zZV9kYXRlIiwidmVuZG9yX2NhbGxfZGF0ZSIsInBvcF9tYWNoaW5lIiwicG9wX3RpY2tldCIsIm9wbl9zdGFnZSIsImxhc3Rfc3RhZ2VfaW5kZXgiLCJsYXN0X3N0YWdlX2RhdGUiLCJtZXRob2RzIiwiZ2V0TGFiZWwiLCJ2aWV3TW9kYWwiLCJheGlvcyIsInRoZW4iLCJyZXMiLCIkIiwiQWRkU3RhZ2UiLCJnZXRSZXN1bHRzIiwicGFyYW1zIiwic3VibWl0Q2xvc2VUaWNrZXQiLCJjb25zb2xlIiwiY29udGFpbmVyIiwicmVzcG9uc2UiLCJUb2FzdCIsImljb24iLCJ0aXRsZSIsInBvcF9sb2FkZXIiLCJjYXRjaCIsImNsb3NlTW9kYWwiLCJlZGl0TW9kYWwiLCJuZXdNb2RhbCIsImxvYWRUaWNrZXRzIiwiZmQiLCJzdWJtaXRUaWNrZXQiLCJtb3VudGVkIiwiY3JlYXRlZCIsImJlZm9yZUNyZWF0ZSIsIndhdGNoIiwiaGFuZGxlciIsImRlZXAiLCJpbml0aWFsIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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M0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsRUFhWDs7QUFFVSxnRkFBaUIiLCJmaWxlIjoianMvMi5idW5kbGUuNzZkMjE0OWEzMGQwNTEyMThjN2MuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiY2FyZC10aXRsZVwiPlRpY2tldCBMaXN0PC9oMz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC10b29sc1wiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLXByaW1hcnlcIiBAY2xpY2s9XCJuZXdNb2RhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXBsdXMtc3F1YXJlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGQgTmV3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IHAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gYXV0b2NvbXBsZXRlPVwib2ZmXCIgQHN1Ym1pdC5wcmV2ZW50PVwiZ2V0UmVzdWx0cygpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cIm5hbWVcIiA6Z2V0LW9wdGlvbi1sYWJlbD1cImdldExhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cmVkdWNlPVwiKG9wdGlvbikgPT4gb3B0aW9uLmlkXCIgOm9wdGlvbnM9XCJzZWFyY2hfbWFjaGluZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgbWFjaGluZXMgLi4uXCIgdi1tb2RlbD1cInNlYXJjaC5tYWNoaW5lX2lkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWFjaGluZV9pZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cInNpdGVfbmFtZVwiIDpyZWR1Y2U9XCIob3B0aW9uKSA9PiBvcHRpb24uaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpvcHRpb25zPVwic2VhcmNoX3NpdGVzXCIgcGxhY2Vob2xkZXI9XCJTZWxlY3QgU2l0ZS4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInNlYXJjaC5zaXRlX2lkXCIgbmFtZT1cInNpdGVfaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XCJzaXRlX25hbWVcIiA6b3B0aW9ucz1cIlsnT3BlbicsICdDbG9zZWQnXVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgU3RhdHVzLi4uXCIgdi1tb2RlbD1cInNlYXJjaC5zdGF0dXNcIiBuYW1lPVwic3RhdHVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCI+U2VhcmNoPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmNhcmQtaGVhZGVyIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IHRhYmxlLXJlc3BvbnNpdmUgcC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlRpY2tldCBObyA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk1hY2hpbmUgTmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TWFjaGluZSBGYXIgTm88L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlNpdGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkNyZWF0ZWQgQnk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkNyZWF0ZWQgRGF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RXhwZWN0ZWQgZGF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VGlja2V0IFN0YXR1czwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QWN0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHYtZm9yPVwidGlja2V0IGluIFRpY2tldHMuZGF0YVwiIDprZXk9XCJ0aWNrZXQuaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyB0aWNrZXQudGlja2V0X25vIH19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQtY2FwaXRhbGl6ZVwiPnt7IHRpY2tldC5tYWNoaW5lLm5hbWUgfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5tYWNoaW5lLmZhcl9ubyB9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0LnNpdGUgPyB0aWNrZXQuc2l0ZS5zaXRlX25hbWUgOiAnLScgfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5jcmVhdGVkX2J5X25hbWUgfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC5jcmVhdGVkX2F0IHwgbXlEYXRlIH19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyB0aWNrZXQubGlrZWx5X2RhdGUgfCBteURhdGUgfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHYtaHRtbD1cInRpY2tldC5zdGF0dXNcIj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgY2xhc3M9XCJidG4gYnRuLXdhcm5pbmcgYnRuLXNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwidmlld01vZGFsKHRpY2tldClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmlld1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwiJy90aWNrZXQvJyArIHRpY2tldC5pZFwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1zbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJ0aWNrZXQuc3RhdHVzICE9ICdDbG9zZWQnICYmICRnYXRlLmlzQWRtaW4oKVwiPkVkaXQ8L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlciBidG4tc21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJjbG9zZU1vZGFsKHRpY2tldClcIiB0aXRsZT1cIkNsb3NlIHRpY2tldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJ0aWNrZXQuc3RhdHVzICE9ICdDbG9zZWQnICYmICRnYXRlLmlzQWRtaW4oKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC8uY2FyZC1ib2R5IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYWdpbmF0aW9uIDpkYXRhPVwiVGlja2V0c1wiIEBwYWdpbmF0aW9uLWNoYW5nZS1wYWdlPVwiZ2V0UmVzdWx0c1wiPjwvcGFnaW5hdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmNhcmQgLS0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgPCEtLSBDbG9zZSBNb2RhbCAtLT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwgZmFkZVwiIGlkPVwiY2xvc2Vtb2RhbFwiIHRhYmluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1sYWJlbGxlZGJ5PVwiY2xvc2Vtb2RhbFwiXHJcbiAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nIG1vZGFsLWxnXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwibW9kYWwtdGl0bGVcIj5DbG9zZSBUaWNrZXQ8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJzdWJtaXRDbG9zZVRpY2tldCgpXCIgZGF0YS12di1zY29wZT1cImNsb3NldGlja2V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNlwiIHYtaWY9XCJwb3BfdGlja2V0ICYmIHBvcF90aWNrZXQubGlrZWx5X2RhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5BY3R1YWwgRGF0ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGF0ZXRpbWUgdmFsdWUtem9uZT1cIkFzaWEvS29sa2F0YVwiIHYtbW9kZWw9XCJmb3JtY2xvc2UuYWN0dWFsX2RhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhY3R1YWxfZGF0ZVwiIGlucHV0LWNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdpcy1pbnZhbGlkJzogdmVycm9ycy5oYXMoJ2Nsb3NldGlja2V0LmFjdHVhbF9kYXRlJykgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZT1cIidyZXF1aXJlZCdcIiBkYXRhLXZ2LWFzPVwiQWN0dWFsIERhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDptaW4tZGF0ZXRpbWU9XCJuZXcgRGF0ZShwb3BfdGlja2V0LmNyZWF0ZWRfYXQpLnRvSVNPU3RyaW5nKClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDptYXgtZGF0ZXRpbWU9XCJuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKClcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwidmVycm9ycy5oYXMoJ2Nsb3NldGlja2V0LmFjdHVhbF9kYXRlJylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXCI+e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnJvcnMuZmlyc3QoJ2Nsb3NldGlja2V0LmFjdHVhbF9kYXRlJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5NYWNoaW5lIFN0YXR1czwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IHYtbW9kZWw9XCJmb3JtY2xvc2UubWFjaGluZV9zdGF0dXNcIiBuYW1lPVwibWFjaGluZV9zdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdpcy1pbnZhbGlkJzogdmVycm9ycy5oYXMoJ2Nsb3NldGlja2V0Lm1hY2hpbmVfc3RhdHVzJykgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZT1cIidyZXF1aXJlZCdcIiBkYXRhLXZ2LWFzPVwibWFjaGluZSBzdGF0dXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUnVubmluZ1wiPlJ1bm5pbmc8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUnVubmluZyB3aXRoIFByb2JsZW1cIj5SdW5uaW5nIHdpdGggUHJvYmxlbTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJ2ZXJyb3JzLmhhcygnY2xvc2V0aWNrZXQubWFjaGluZV9zdGF0dXMnKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJoZWxwLWJsb2NrIGludmFsaWQtZmVlZGJhY2tcIj57e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVycm9ycy5maXJzdCgnY2xvc2V0aWNrZXQubWFjaGluZV9zdGF0dXMnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Fc3RpbWF0ZWQgTWF0ZXJpYWwgY29zdDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cInBvcF90aWNrZXQuZXN0aW1hdGVkX21hdGVyaWFsX2Nvc3RcIiB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiByZWFkb25seT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+QWN0dWFsIE1hdGVyaWFsIGNvc3Q8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJmb3JtY2xvc2UuYWN0dWFsX21hdGVyaWFsX2Nvc3RcIiB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFjdHVhbF9tYXRlcmlhbF9jb3N0XCIgdi12YWxpZGF0ZT1cIidyZXF1aXJlZCdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdnYtYXM9XCJBY3R1YWwgTWF0ZXJpYWwgY29zdFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdpcy1pbnZhbGlkJzogdmVycm9ycy5oYXMoJ2Nsb3NldGlja2V0LmFjdHVhbF9tYXRlcmlhbF9jb3N0JykgfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwidmVycm9ycy5oYXMoJ2Nsb3NldGlja2V0LmFjdHVhbF9tYXRlcmlhbF9jb3N0JylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXCI+IHt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJyb3JzLmZpcnN0KCdjbG9zZXRpY2tldC5hY3R1YWxfbWF0ZXJpYWxfY29zdCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+IEFjdHVhbCBNYXRlcmlhbCBjb3N0IEZpbGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgQGNoYW5nZT1cInVwbG9hZE1hdGVyaWFsQ29zdFwiIG11bHRpcGxlIG5hbWU9XCJtYXRlcmlhbF9jb3N0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJmaWxlYWN0dWFsbWF0ZXJpYWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnaXMtaW52YWxpZCc6IHZlcnJvcnMuaGFzKCdjbG9zZXRpY2tldC5tYXRlcmlhbF9jb3N0JykgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZT1cIicnXCIgZGF0YS12di1hcz1cIkFjdHVhbCBNYXRlcmlhbCBjb3N0XCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIiB2LWlmPVwicG9wX3RpY2tldC5hY3R1YWxfZXN0aW1hdGVkX21hdGVyaWFsX2ZpbGVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdi1mb3I9XCIoaXRlbSwgeCkgaW4gcG9wX3RpY2tldC5hY3R1YWxfZXN0aW1hdGVkX21hdGVyaWFsX2ZpbGVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cIml0ZW0uaWRcIiA6aHJlZj1cIml0ZW0uZmlsZVwiIHRhcmdldD1cIl9ibGFua1wiPlZpZXdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcG9wX3RpY2tldC5hY3R1YWxfZXN0aW1hdGVkX21hdGVyaWFsX2ZpbGVzLmxlbmd0aCA+IDEgPyB4ICsgMSA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwidmVycm9ycy5oYXMoJ2Nsb3NldGlja2V0Lm1hdGVyaWFsX2Nvc3QnKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJoZWxwLWJsb2NrIGludmFsaWQtZmVlZGJhY2tcIj4ge3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnJvcnMuZmlyc3QoJ2Nsb3NldGlja2V0Lm1hdGVyaWFsX2Nvc3QnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Fc3RpbWF0ZWQgU2VydmljZSBjb3N0PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwicG9wX3RpY2tldC5lc3RpbWF0ZWRfc2VydmljZV9jb3N0XCIgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcmVhZG9ubHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkFjdHVhbCBTZXJ2aWNlIGNvc3Q8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJmb3JtY2xvc2UuYWN0dWFsX3NlcnZpY2VfY29zdFwiIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYWN0dWFsX3NlcnZpY2VfY29zdFwiIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZ2LWFzPVwiQWN0dWFsIFNlcnZpY2UgY29zdFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdpcy1pbnZhbGlkJzogdmVycm9ycy5oYXMoJ2Nsb3NldGlja2V0LmFjdHVhbF9zZXJ2aWNlX2Nvc3QnKSB9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJ2ZXJyb3JzLmhhcygnY2xvc2V0aWNrZXQuYWN0dWFsX3NlcnZpY2VfY29zdCcpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1wiPiB7e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVycm9ycy5maXJzdCgnY2xvc2V0aWNrZXQuYWN0dWFsX3NlcnZpY2VfY29zdCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+IEFjdHVhbCBTZXJ2aWNlIGNvc3QgRmlsZSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgQGNoYW5nZT1cInVwbG9hZFNlcnZpY2VDb3N0XCIgbXVsdGlwbGUgbmFtZT1cInNlcnZpY2VfY29zdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiZmlsZWFjdHVhbHNlcnZpY2VcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnaXMtaW52YWxpZCc6IHZlcnJvcnMuaGFzKCdjbG9zZXRpY2tldC5zZXJ2aWNlX2Nvc3QnKSB9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlPVwiJydcIiBkYXRhLXZ2LWFzPVwiQWN0dWFsIFNlcnZpY2UgY29zdFwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNsZWFyZml4XCIgdi1pZj1cInBvcF90aWNrZXQuYWN0dWFsX2VzdGltYXRlZF9zZXJ2aWNlX2ZpbGVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdi1mb3I9XCIoaXRlbSwgeCkgaW4gcG9wX3RpY2tldC5hY3R1YWxfZXN0aW1hdGVkX3NlcnZpY2VfZmlsZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwiaXRlbS5pZFwiIDpocmVmPVwiaXRlbS5maWxlXCIgdGFyZ2V0PVwiX2JsYW5rXCI+Vmlld1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwb3BfdGlja2V0LmFjdHVhbF9lc3RpbWF0ZWRfc2VydmljZV9maWxlcy5sZW5ndGggPiAxID8geCArIDEgOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cInZlcnJvcnMuaGFzKCdjbG9zZXRpY2tldC5zZXJ2aWNlX2Nvc3QnKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJoZWxwLWJsb2NrIGludmFsaWQtZmVlZGJhY2tcIj4ge3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnJvcnMuZmlyc3QoJ2Nsb3NldGlja2V0LnNlcnZpY2VfY29zdCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNlwiIHYtaWY9XCJwb3BfbWFjaGluZS5pc19jb25zdW10aW9uX2hyX3J1blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkN1cnJlbnQgUnVuIGhvdXIgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwiZm9ybWNsb3NlLmN1cnJlbnRfcnVuX2hvdXJcIiBuYW1lPVwiY3VycmVudF9ydW5faG91clwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWludmFsaWQnOiB2ZXJyb3JzLmhhcygnY2xvc2V0aWNrZXQuY3VycmVudF9ydW5faG91cicpIH1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtdmFsaWRhdGU9XCJ7IHJlcXVpcmVkOiB0cnVlLCBkZWNpbWFsOiAyLCBtaW5fdmFsdWU6IHBvcF9tYWNoaW5lLmxhc3RfbWFpbnRlbmFuY2VzID8gcG9wX21hY2hpbmUubGFzdF9tYWludGVuYW5jZXMucnVuX2hvdXIgOiBwb3BfbWFjaGluZS5sYXN0X2hyX3J1biB9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZ2LWFzPVwiQ3VycmVudCBSdW4gaG91clwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJ2ZXJyb3JzLmhhcygnY2xvc2V0aWNrZXQuY3VycmVudF9ydW5faG91cicpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJyb3JzLmZpcnN0KCdjbG9zZXRpY2tldC5jdXJyZW50X3J1bl9ob3VyJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTZcIiB2LWlmPVwicG9wX21hY2hpbmUuaXNfY29uc3VtdGlvbl9rbV9ydW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD4gQ3VycmVudCBLTSBSdW4gPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwiZm9ybWNsb3NlLmN1cnJlbnRfa21fcnVuXCIgbmFtZT1cImN1cnJlbnRfa21fcnVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnaXMtaW52YWxpZCc6IHZlcnJvcnMuaGFzKCdjbG9zZXRpY2tldC5jdXJyZW50X2ttX3J1bicpIH1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtdmFsaWRhdGU9XCJ7IHJlcXVpcmVkOiB0cnVlLCBkZWNpbWFsOiAyLCBtaW5fdmFsdWU6IHBvcF9tYWNoaW5lLmxhc3RfbWFpbnRlbmFuY2VzID8gcG9wX21hY2hpbmUubGFzdF9tYWludGVuYW5jZXMua21fcnVuIDogcG9wX21hY2hpbmUubGFzdF9rbV9ydW4gfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12di1hcz1cIkN1cnJlbnQgS00gaG91clwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJ2ZXJyb3JzLmhhcygnY2xvc2V0aWNrZXQuY3VycmVudF9rbV9ydW4nKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJoZWxwLWJsb2NrIGludmFsaWQtZmVlZGJhY2tcIj57e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVycm9ycy5maXJzdCgnY2xvc2V0aWNrZXQuY3VycmVudF9rbV9ydW4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNlwiIHYtaWY9XCJwb3BfbWFjaGluZS5pc19wcm9kdWN0aW9uX2ZpZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPiBDdXJyZW50IFByb2R1Y3Rpb24gZmlnIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cImZvcm1jbG9zZS5jdXJyZW50X3Byb2R1Y3Rpb25fZmlnXCIgbmFtZT1cImN1cnJlbnRfcHJvZHVjdGlvbl9maWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdpcy1pbnZhbGlkJzogdmVycm9ycy5oYXMoJ2Nsb3NldGlja2V0LmN1cnJlbnRfcHJvZHVjdGlvbl9maWcnKSB9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlPVwieyByZXF1aXJlZDogdHJ1ZSwgZGVjaW1hbDogMiwgbWluX3ZhbHVlOiBwb3BfbWFjaGluZS5sYXN0X21haW50ZW5hbmNlcyA/IHBvcF9tYWNoaW5lLmxhc3RfbWFpbnRlbmFuY2VzLnByb2R1Y3Rpb25fZmlnIDogcG9wX21hY2hpbmUucGVyaW9kaWNfbWFpbnRlbmFuY2VfYnJlYWtkb3duIH1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdnYtYXM9XCJDdXJyZW50IFByb2R1Y3Rpb24gZmlnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cInZlcnJvcnMuaGFzKCdjbG9zZXRpY2tldC5jdXJyZW50X3Byb2R1Y3Rpb25fZmlnJylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXCI+e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnJvcnMuZmlyc3QoJ2Nsb3NldGlja2V0LmN1cnJlbnRfcHJvZHVjdGlvbl9maWcnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTZcIiB2LWlmPVwiZm9ybWNsb3NlLnRpY2tldF90eXBlID09ICdCcmVha2Rvd24gTWFpbnRlbmFuY2UnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UHJvZHVjdGlvbiBMb3NzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwiZm9ybWNsb3NlLnByb2R1Y3Rpb25fbG9zc1wiIG5hbWU9XCJwcm9kdWN0aW9uX2xvc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdpcy1pbnZhbGlkJzogdmVycm9ycy5oYXMoJ2Nsb3NldGlja2V0LnByb2R1Y3Rpb25fbG9zcycpIH1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCIgZGF0YS12di1hcz1cIlByb2R1Y3Rpb24gTG9zc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJ2ZXJyb3JzLmhhcygnY2xvc2V0aWNrZXQucHJvZHVjdGlvbl9sb3NzJylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnJvcnMuZmlyc3QoJ2Nsb3NldGlja2V0LnByb2R1Y3Rpb25fbG9zcycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02XCIgdi1pZj1cImZvcm1jbG9zZS50aWNrZXRfdHlwZSA9PSAnQnJlYWtkb3duIE1haW50ZW5hbmNlJ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlByb2R1Y3Rpb24gbG9zcyBhbW91bnQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJmb3JtY2xvc2UucHJvZHVjdGlvbl9sb3NzX2Ftb3VudFwiIG5hbWU9XCJwcm9kdWN0aW9uX2xvc3NfYW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnaXMtaW52YWxpZCc6IHZlcnJvcnMuaGFzKCdjbG9zZXRpY2tldC5wcm9kdWN0aW9uX2xvc3NfYW1vdW50JykgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZT1cIidyZXF1aXJlZCdcIiBkYXRhLXZ2LWFzPVwiQ3VycmVudCBQcm9kdWN0aW9uIGZpZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJ2ZXJyb3JzLmhhcygnY2xvc2V0aWNrZXQucHJvZHVjdGlvbl9sb3NzX2Ftb3VudCcpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1wiPnt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJyb3JzLmZpcnN0KCdjbG9zZXRpY2tldC5wcm9kdWN0aW9uX2xvc3NfYW1vdW50JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+Q2xvc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+Q2xvc2UgVGlja2V0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8IS0tVmlldyBNb2RhbC0tPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbCBmYWRlXCIgaWQ9XCJ2aWV3bW9kYWxcIiB0YWJpbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbGFiZWxsZWRieT1cInZpZXdtb2RhbFwiXHJcbiAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nIG1vZGFsLWxnXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwibW9kYWwtdGl0bGVcIj5WaWV3IFRpY2tldDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIiB2LWlmPVwicG9wX3RpY2tldFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTQgYnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TWFjaGluZSBTaXRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVwic2l0ZV9uYW1lXCIgOnJlZHVjZT1cIihvcHRpb24pID0+IG9wdGlvbi5pZFwiIDpvcHRpb25zPVwic2l0ZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDaG9vc2UgU2l0ZSAuLi5cIiB2LW1vZGVsPVwicG9wX3RpY2tldC5zaXRlX2lkXCIgZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTQgYnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TWFjaGluZSBDYXRlZ29yeTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cIm5hbWVcIiA6cmVkdWNlPVwiKG9wdGlvbikgPT4gb3B0aW9uLmlkXCIgOm9wdGlvbnM9XCJjYXRlZ29yaWVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2hvb3NlIENhdGVnb3J5IC4uLlwiIHYtbW9kZWw9XCJwb3BfdGlja2V0LmNhdGVnb3J5X2lkXCIgZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTQgYnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TWFjaGluZSBEZXNjcmlwdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cIm5hbWVcIiA6cmVkdWNlPVwiKG9wdGlvbikgPT4gb3B0aW9uLmlkXCIgOm9wdGlvbnM9XCJzdWJfY2F0ZWdvcmllc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNob29zZSBkZXNjcmlwdGlvbiAuLi5cIiB2LW1vZGVsPVwicG9wX3RpY2tldC5zdWJfY2F0ZWdvcnlfaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN1Yl9jYXRlZ29yeV9pZFwiIDpkaXNhYmxlZD1cInBvcF90aWNrZXQuaWQgIT0gJydcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00IGJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPiBNYWNoaW5lIDogPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcG9wX3RpY2tldC5tYWNoaW5lLmZhcl9ubyB9fSB7eyBwb3BfdGlja2V0Lm1hY2hpbmUubmFtZSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00IGJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk1haW50ZW5hbmNlIFByb3ZpZGVyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcG9wX3RpY2tldC5tYWludGVuYW5jZV9wcm92aWRlciB9fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNCBic1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD4ge3sgcG9wX3RpY2tldC5tYWludGVuYW5jZV9wcm92aWRlciA9PSAndXNlcicgPyAndXNlcicgOiAndmVuZG9yJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cInBvcF90aWNrZXQubWFpbnRlbmFuY2VfcHJvdmlkZXIgPT0gJ3ZlbmRvcidcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cIm5hbWVcIiA6cmVkdWNlPVwiKG9wdGlvbikgPT4gb3B0aW9uLmlkXCIgOm9wdGlvbnM9XCJ1c2Vyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB1c2VycyAuLi5cIiB2LW1vZGVsPVwicG9wX3RpY2tldC52ZW5kb3JfaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtdmFsaWRhdGU9XCJ7IHJlcXVpcmVkOiBwb3BfdGlja2V0Lm1haW50ZW5hbmNlX3Byb3ZpZGVyID09ICd2ZW5kb3InID8gdHJ1ZSA6IGZhbHNlIH1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cIm5hbWVcIiA6cmVkdWNlPVwiKG9wdGlvbikgPT4gb3B0aW9uLmlkXCIgOm9wdGlvbnM9XCJ1c2Vyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB1c2VycyAuLi5cIiB2LW1vZGVsPVwicG9wX3RpY2tldC51c2VyX2lkXCIgZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNiBic1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cInBvcF90aWNrZXQubWFpbnRlbmFuY2VfcHJvdmlkZXIgPT0gJ3ZlbmRvcicgJiYgcG9wX3RpY2tldC5zZXJ2aWNlX3R5cGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U2VydmljZSBUeXBlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcG9wX3RpY2tldC5zZXJ2aWNlX3R5cGUgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNiBic1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cInBvcF90aWNrZXQuc2VydmljZV90eXBlID09ICdGcmVlIFNlcnZpY2UnICYmIHBvcF90aWNrZXQuZnJlZV9zZXJ2aWNlX25vXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkZyZWUgc2VydmljZSBubzo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwb3BfdGlja2V0LmZyZWVfc2VydmljZV9ubyB9fS97eyBwb3BfdGlja2V0Lm1hY2hpbmUuZnJlZV9zZXJ2aWNlX25vIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTYgYnNcIiB2LWlmPVwicG9wX3RpY2tldC50aWNrZXRfdHlwZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5UaWNrZXQgVHlwZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHBvcF90aWNrZXQudGlja2V0X3R5cGUgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zIGJzXCIgdi1pZj1cInBvcF90aWNrZXQuZXN0aW1hdGVkX21hdGVyaWFsX2Nvc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RXN0aW1hdGVkIE1hdGVyaWFsIGNvc3Q8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwb3BfdGlja2V0LmVzdGltYXRlZF9tYXRlcmlhbF9jb3N0IHwgdG9DdXJyZW5jeSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIDpocmVmPVwiZmlsZS5maWxlXCIgdi1mb3I9XCIoZmlsZSwgeCkgaW4gcG9wX3RpY2tldC5lc3RpbWF0ZWRfbWF0ZXJpYWxfZmlsZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJmaWxlLmlkXCIgdGFyZ2V0PVwiX2JsYW5rXCI+Vmlld1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHBvcF90aWNrZXQuZXN0aW1hdGVkX21hdGVyaWFsX2ZpbGVzLmxlbmd0aCA+IDEgPyB4ICsgMSA6ICcnIH19PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMyBic1wiIHYtaWY9XCJwb3BfdGlja2V0LmVzdGltYXRlZF9zZXJ2aWNlX2Nvc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RXN0aW1hdGVkIFNlcnZpY2UgY29zdCA6IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHBvcF90aWNrZXQuZXN0aW1hdGVkX3NlcnZpY2VfY29zdCB8IHRvQ3VycmVuY3kgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSA6aHJlZj1cImZpbGUuZmlsZVwiIHYtZm9yPVwiKGZpbGUsIHgpIGluIHBvcF90aWNrZXQuZXN0aW1hdGVkX3NlcnZpY2VfZmlsZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJmaWxlLmlkXCIgdGFyZ2V0PVwiX2JsYW5rXCI+Vmlld1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHBvcF90aWNrZXQuZXN0aW1hdGVkX3NlcnZpY2VfZmlsZXMubGVuZ3RoID4gMSA/IHggKyAxIDogJycgfX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zIGJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkFjdHVhbCBNYXRlcmlhbCBDb3N0IDogPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cInBvcF90aWNrZXQuYWN0dWFsX21hdGVyaWFsX2Nvc3RcIj4ge3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3BfdGlja2V0LmFjdHVhbF9tYXRlcmlhbF9jb3N0IHwgdG9DdXJyZW5jeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSA6aHJlZj1cImZpbGUuZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCIoZmlsZSwgeCkgaW4gcG9wX3RpY2tldC5hY3R1YWxfZXN0aW1hdGVkX21hdGVyaWFsX2ZpbGVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwiZmlsZS5pZFwiIHRhcmdldD1cIl9ibGFua1wiPlZpZXdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwb3BfdGlja2V0LmFjdHVhbF9lc3RpbWF0ZWRfbWF0ZXJpYWxfZmlsZXMubGVuZ3RoID4gMSA/IHggKyAxIDogJycgfX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMyBic1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5BY3R1YWwgU2VydmljZSBDb3N0IDogPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cInBvcF90aWNrZXQuYWN0dWFsX3NlcnZpY2VfY29zdFwiPnt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wX3RpY2tldC5hY3R1YWxfc2VydmljZV9jb3N0IHwgdG9DdXJyZW5jeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSA6aHJlZj1cImZpbGUuZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCIoZmlsZSwgeCkgaW4gcG9wX3RpY2tldC5hY3R1YWxfZXN0aW1hdGVkX3NlcnZpY2VfZmlsZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJmaWxlLmlkXCIgdGFyZ2V0PVwiX2JsYW5rXCI+VmlldyB7e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wX3RpY2tldC5hY3R1YWxfZXN0aW1hdGVkX3NlcnZpY2VfZmlsZXMubGVuZ3RoID4gMSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeCArIDEgOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTQgYnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+VGlja2V0IE5vIDogPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcG9wX3RpY2tldC50aWNrZXRfbm8gfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00IGJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkxpa2VseSBEYXRlIDogPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcG9wX3RpY2tldC5saWtlbHlfZGF0ZSB8IG15RGF0ZSB9fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNCBic1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5BY3R1YWwgRGF0ZSA6IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHBvcF90aWNrZXQuYWN0dWFsX2RhdGUgfCBteURhdGUgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00IGJzXCIgdi1pZj1cInBvcF90aWNrZXQuY3VycmVudF9ydW5faG91clwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5DdXJyZW50IFJ1biBIb3VyIDogPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcG9wX3RpY2tldC5jdXJyZW50X3J1bl9ob3VyIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNCBic1wiIHYtaWY9XCJwb3BfdGlja2V0LmN1cnJlbnRfa21fcnVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkN1cnJlbnQgS00gSG91ciA6IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHBvcF90aWNrZXQuY3VycmVudF9rbV9ydW4gfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00IGJzXCIgdi1pZj1cInBvcF90aWNrZXQuY3VycmVudF9wcm9kdWN0aW9uX2ZpZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5DdXJyZW50IFByb2R1Y3Rpb24gRmlnIDogPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcG9wX3RpY2tldC5jdXJyZW50X3Byb2R1Y3Rpb25fZmlnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNCBic1wiIHYtaWY9XCJwb3BfdGlja2V0LnByb2R1Y3Rpb25fbG9zc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Qcm9kdWN0aW9uIExvc3MgOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwb3BfdGlja2V0LnByb2R1Y3Rpb25fbG9zcyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTQgYnNcIiB2LWlmPVwicG9wX3RpY2tldC5wcm9kdWN0aW9uX2xvc3NfYW1vdW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlByb2R1Y3Rpb24gTG9zcyBBbW91bnQgOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwb3BfdGlja2V0LnByb2R1Y3Rpb25fbG9zc19hbW91bnQgfCB0b0N1cnJlbmN5IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuICAgIDwvc2VjdGlvbj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBWdWVUYWdzSW5wdXQgZnJvbSAnQGpvaG11bi92dWUtdGFncy1pbnB1dCc7XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICBWdWVUYWdzSW5wdXQsXHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzZWFyY2hfbWFjaGluZXM6IFtdLFxyXG4gICAgICAgICAgICBzZWFyY2hfc2l0ZXM6IFtdLFxyXG4gICAgICAgICAgICBzZWFyY2g6IHtcclxuICAgICAgICAgICAgICAgIHBhZ2U6IDEsXHJcbiAgICAgICAgICAgICAgICBtYWNoaW5lX2lkOiAnJyxcclxuICAgICAgICAgICAgICAgIHNpdGVfaWQ6ICcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBvcHRpY2tldDoge30sXHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IFtdLFxyXG4gICAgICAgICAgICBzdWJfY2F0ZWdvcmllczogW10sXHJcbiAgICAgICAgICAgIHNpdGVzOiBbXSxcclxuICAgICAgICAgICAgc2VsZWN0ZWRfbWFjaGluZTogJycsXHJcbiAgICAgICAgICAgIHVzZXJzOiBbXSxcclxuICAgICAgICAgICAgbWFjaGluZXM6IFtdLFxyXG4gICAgICAgICAgICBUaWNrZXRzOiB7fSxcclxuICAgICAgICAgICAgZWRpdG1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBNYXRlcmlhbENvc3Q6IG51bGwsXHJcbiAgICAgICAgICAgIFNlcnZpY2VDb3N0OiBudWxsLFxyXG4gICAgICAgICAgICBmb3JtOiBuZXcgRm9ybSh7XHJcbiAgICAgICAgICAgICAgICBpZDogJycsXHJcbiAgICAgICAgICAgICAgICBzaXRlX2lkOiAnJyxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5X2lkOiAnJyxcclxuICAgICAgICAgICAgICAgIHN1Yl9jYXRlZ29yeV9pZDogJycsXHJcbiAgICAgICAgICAgICAgICBmcmVlX3NlcnZpY2Vfbm86ICcnLFxyXG4gICAgICAgICAgICAgICAgdGlja2V0X3R5cGU6ICdQZXJpb2RpYyBNYWludGVuYW5jZScsXHJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlX3R5cGU6ICdQYWlkIFNlcnZpY2UnLFxyXG4gICAgICAgICAgICAgICAgbWFjaGluZV9pZDogJycsXHJcbiAgICAgICAgICAgICAgICB0aWNrZXRfbm86ICcnLFxyXG4gICAgICAgICAgICAgICAgdmVuZG9yX2lkOiAnJyxcclxuICAgICAgICAgICAgICAgIHVzZXJfaWQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgbGlrZWx5X2RhdGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgZXN0aW1hdGVkX21hdGVyaWFsX2Nvc3Q6ICcnLFxyXG4gICAgICAgICAgICAgICAgZXN0aW1hdGVkX3NlcnZpY2VfY29zdDogJycsXHJcbiAgICAgICAgICAgICAgICBtYWludGVuYW5jZV9wcm92aWRlcjogJ3ZlbmRvcicsXHJcbiAgICAgICAgICAgICAgICBwcm9ibGVtX2Rlc2NyaXB0aW9uOiAnJyxcclxuICAgICAgICAgICAgICAgIGNvbXBsYWludF9uYXR1cmU6ICdNYWpvcicsXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBzdGFnZXM6IFt7XHJcbiAgICAgICAgICAgICAgICBpZDogJycsXHJcbiAgICAgICAgICAgICAgICBzdGFnZV9ubzogJycsXHJcbiAgICAgICAgICAgICAgICBzdGFnZV9kYXRlOiAnJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICAgICAgICAgICAgICAgIGZpbGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgbmV3X2ZpbGU6ICcnXHJcbiAgICAgICAgICAgIH1dLFxyXG5cclxuICAgICAgICAgICAgZm9ybWNsb3NlOiBuZXcgRm9ybSh7XHJcbiAgICAgICAgICAgICAgICBpZDogJycsXHJcbiAgICAgICAgICAgICAgICBtYWNoaW5lX3N0YXR1czogJycsXHJcbiAgICAgICAgICAgICAgICBlZGl0X3R5cGU6ICdjbG9zZXRpY2tldCcsXHJcbiAgICAgICAgICAgICAgICB0aWNrZXRfdHlwZTogJ1BlcmlvZGljIE1haW50ZW5hbmNlJyxcclxuICAgICAgICAgICAgICAgIGFjdHVhbF9kYXRlOiAnJyxcclxuICAgICAgICAgICAgICAgIGFjdHVhbF9tYXRlcmlhbF9jb3N0OiAnJyxcclxuICAgICAgICAgICAgICAgIGFjdHVhbF9zZXJ2aWNlX2Nvc3Q6ICcnLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudF9ydW5faG91cjogJycsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50X2ttX3J1bjogJycsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50X3Byb2R1Y3Rpb25fZmlnOiAnJyxcclxuICAgICAgICAgICAgICAgIHByb2R1Y3Rpb25fbG9zczogJycsXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0aW9uX2xvc3NfYW1vdW50OiAnJyxcclxuICAgICAgICAgICAgICAgIHN0YXR1czogJ0Nsb3NlZCcsXHJcbiAgICAgICAgICAgICAgICB2ZW5kb3JfcmVzb2x2ZV9kYXRlOiAnJyxcclxuICAgICAgICAgICAgICAgIHZlbmRvcl9hdHRhaW5fZGF0ZTogJycsXHJcbiAgICAgICAgICAgICAgICB2ZW5kb3JfcmVzcG9uc2VfZGF0ZTogJycsXHJcbiAgICAgICAgICAgICAgICB2ZW5kb3JfY2FsbF9kYXRlOiAnJyxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIHBvcF9tYWNoaW5lOiAnJyxcclxuICAgICAgICAgICAgcG9wX3RpY2tldDogJycsXHJcbiAgICAgICAgICAgIG9wbl9zdGFnZTogWydWZW5kb3IgY3JlYXRlZCcsICdWZW5kb3IgQXNzaWduZWQnLCAnT3JkZXIgaXNzdWVkJywgJ1BheW1lbnQgdW5kZXIgcHJvY2VzcycsICdQYXltZW50IERvbmUnLCAnTG9naXN0aWNzIHVuZGVyIHByb2Nlc3MnLCAnTWF0ZXJpYWxzIGRlc3BhdGNoZWQnLCAnTWF0ZXJpYWwgcmVjZWl2ZWQgYXQgc2l0ZScsICdNYWludGFpbmFjZSB1bmRlciBwcm9ncmVzcyddLFxyXG4gICAgICAgICAgICBsYXN0X3N0YWdlX2luZGV4OiAwLFxyXG4gICAgICAgICAgICBsYXN0X3N0YWdlX2RhdGU6ICcnLFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgZ2V0TGFiZWwodmFsKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbC5mYXJfbm8gKyAnIC0gJyArIHZhbC5uYW1lO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmlld01vZGFsKHRpY2tldCkge1xyXG4gICAgICAgICAgICB0aGlzLnBvcF90aWNrZXQgPSAnJ1xyXG4gICAgICAgICAgICB0aGlzLnBvcF90aWNrZXQgPSB0aWNrZXRcclxuICAgICAgICAgICAgYXhpb3MuZ2V0KFwiYXBpL2NhdGVnb3J5L1wiICsgdGlja2V0LmNhdGVnb3J5X2lkKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3ViX2NhdGVnb3JpZXMgPSByZXMuZGF0YS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgJCgnI3ZpZXdtb2RhbCcpLm1vZGFsKCdzaG93Jyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBBZGRTdGFnZSgpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFnZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBpZDogJycsXHJcbiAgICAgICAgICAgICAgICBzdGFnZV9ubzogJycsXHJcbiAgICAgICAgICAgICAgICBzdGFnZV9kYXRlOiAnJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICAgICAgICAgICAgICAgIGZpbGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgbmV3X2ZpbGU6ICcnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmMgY2hvb3NlX3N0YWdlX2ZpbGUoZXZlbnQsIHgpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFnZXNbeF0ubmV3X2ZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgYXN5bmMgdXBsb2FkTWF0ZXJpYWxDb3N0KGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuTWF0ZXJpYWxDb3N0ID0gZXZlbnQudGFyZ2V0LmZpbGVzXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3luYyB1cGxvYWRTZXJ2aWNlQ29zdChldmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLlNlcnZpY2VDb3N0ID0gZXZlbnQudGFyZ2V0LmZpbGVzXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZ2V0UmVzdWx0cyhwYWdlID0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLiRQcm9ncmVzcy5zdGFydCgpO1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaC5wYWdlID0gcGFnZVxyXG4gICAgICAgICAgICBheGlvcy5nZXQoJy9hcGkvdGlja2V0Jywge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB0aGlzLnNlYXJjaFxyXG4gICAgICAgICAgICB9KS50aGVuKCh7XHJcbiAgICAgICAgICAgICAgICBkYXRhXHJcbiAgICAgICAgICAgIH0pID0+ICh0aGlzLlRpY2tldHMgPSBkYXRhLmRhdGEpKTtcclxuICAgICAgICAgICAgdGhpcy4kUHJvZ3Jlc3MuZmluaXNoKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWJtaXRDbG9zZVRpY2tldCgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RhZycsICdzc3MnKVxyXG4gICAgICAgICAgICB0aGlzLiR2YWxpZGF0b3IucmVzZXQoKTtcclxuICAgICAgICAgICAgdGhpcy4kdmFsaWRhdG9yLnJlc3VtZSgpO1xyXG4gICAgICAgICAgICB0aGlzLiR2YWxpZGF0b3IudmFsaWRhdGVBbGwoJ2Nsb3NldGlja2V0JykudGhlbihhc3luYyAodmFsaWQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwb3BfbG9hZGVyID0gdGhpcy4kbG9hZGluZy5zaG93KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyOiB0aGlzLiRyZWZzLnZwc19zdWJtaXRfcG9wLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm1jbG9zZS5wdXQoJy9hcGkvdGlja2V0LycgKyB0aGlzLmZvcm1jbG9zZS5pZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2Nsb3NlbW9kYWwnKS5tb2RhbCgnaGlkZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHZhbGlkYXRvci5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybWNsb3NlLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLmRhdGEubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBsb2FkX2ZpbGVzKHRoaXMuZm9ybWNsb3NlLmlkLCAnYWN0dWFsJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRUaWNrZXRzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3BfbG9hZGVyLmhpZGUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wX2xvYWRlci5oaWRlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZXJyLnJlc3BvbnNlLmRhdGEgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzZXRFcnJvcnNGcm9tUmVzcG9uc2UoZXJyLnJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZmZmZicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBjbG9zZU1vZGFsKHRpY2tldCkge1xyXG4gICAgICAgICAgICB0aGlzLiR2YWxpZGF0b3IucGF1c2UoKTtcclxuICAgICAgICAgICAgJCgnI2Nsb3NlbW9kYWwnKS5tb2RhbCgnc2hvdycpO1xyXG4gICAgICAgICAgICB0aGlzLiR2YWxpZGF0b3IucmVzZXQoKTtcclxuICAgICAgICAgICAgdGhpcy5mb3JtY2xvc2UucmVzZXQoKTtcclxuICAgICAgICAgICAgdGhpcy4kcmVmcy5maWxlYWN0dWFsc2VydmljZS52YWx1ZSA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuJHJlZnMuZmlsZWFjdHVhbG1hdGVyaWFsLnZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5wb3BfdGlja2V0ID0gdGlja2V0XHJcbiAgICAgICAgICAgIHRoaXMucG9wX21hY2hpbmUgPSB0aWNrZXQubWFjaGluZVxyXG4gICAgICAgICAgICB0aGlzLmZvcm1jbG9zZS5maWxsKHRpY2tldCk7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybWNsb3NlLmVkaXRfdHlwZSA9ICdjbG9zZXRpY2tldCdcclxuICAgICAgICAgICAgdGhpcy4kdmFsaWRhdG9yLnJlc3VtZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZWRpdE1vZGFsKHRpY2tldCkge1xyXG4gICAgICAgICAgICB0aGlzLmVkaXRtb2RlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy4kdmFsaWRhdG9yLnBhdXNlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5yZXNldCgpO1xyXG4gICAgICAgICAgICB0aGlzLnBvcF90aWNrZXQgPSB0aWNrZXRcclxuICAgICAgICAgICAgaWYgKHRoaXMuJGdhdGUuaXNBZG1pbigpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLmZpbGVzZXJ2aWNlLnZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuZmlsZW1hdGVyaWFsLnZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLk1hdGVyaWFsQ29zdCA9IG51bGxcclxuICAgICAgICAgICAgdGhpcy5TZXJ2aWNlQ29zdCA9IG51bGxcclxuICAgICAgICAgICAgJCgnI2FkZE5ldycpLm1vZGFsKCdzaG93Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5maWxsKHRpY2tldCk7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5saWtlbHlfZGF0ZSA9IHRpY2tldC5saWtlbHlfZGF0ZSA/IG5ldyBEYXRlKHRpY2tldC5saWtlbHlfZGF0ZSkudG9JU09TdHJpbmcoKSA6ICcnXHJcbiAgICAgICAgICAgIHRoaXMuc3RhZ2VzID0gW11cclxuICAgICAgICAgICAgaWYgKHRpY2tldC5zdGFnZXMgJiYgdGlja2V0LnN0YWdlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YWdlcyA9IHRpY2tldC5zdGFnZXNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLiR2YWxpZGF0b3IucmVzdW1lKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBuZXdNb2RhbCgpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFnZXMgPSBbXVxyXG4gICAgICAgICAgICB0aGlzLkFkZFN0YWdlKClcclxuICAgICAgICAgICAgdGhpcy5lZGl0bW9kZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLiR2YWxpZGF0b3IucmVzZXQoKTtcclxuICAgICAgICAgICAgdGhpcy4kdmFsaWRhdG9yLnBhdXNlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5yZXNldCgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy4kZ2F0ZS5pc0FkbWluKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuZmlsZXNlcnZpY2UudmFsdWUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5maWxlbWF0ZXJpYWwudmFsdWUgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuTWF0ZXJpYWxDb3N0ID0gbnVsbFxyXG4gICAgICAgICAgICB0aGlzLlNlcnZpY2VDb3N0ID0gbnVsbFxyXG4gICAgICAgICAgICAkKCcjYWRkTmV3JykubW9kYWwoJ3Nob3cnKTtcclxuICAgICAgICAgICAgdGhpcy4kdmFsaWRhdG9yLnJlc3VtZSgpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGxvYWRUaWNrZXRzKCkge1xyXG4gICAgICAgICAgICAvLyBpZiAodGhpcy4kZ2F0ZS5pc0FkbWluKCkpIHtcclxuICAgICAgICAgICAgYXhpb3MuZ2V0KFwiL2FwaS90aWNrZXRcIiwge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB0aGlzLnNlYXJjaFxyXG4gICAgICAgICAgICB9KS50aGVuKCh7XHJcbiAgICAgICAgICAgICAgICBkYXRhXHJcbiAgICAgICAgICAgIH0pID0+ICh0aGlzLlRpY2tldHMgPSBkYXRhLmRhdGEpKTtcclxuICAgICAgICAgICAgLy8gICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgYXN5bmMgdXBsb2FkX2ZpbGVzKGlkLCBpc2FjdHVhbCA9IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGxldCBmbCA9IDBcclxuICAgICAgICAgICAgaWYgKHRoaXMuTWF0ZXJpYWxDb3N0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLk1hdGVyaWFsQ29zdC5mb3JFYWNoKGZpbGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBmZCA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZkLmFwcGVuZChgZmlsZWAsIGZpbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc2FjdHVhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZC5hcHBlbmQoYGZpbGVfdHlwZWAsICdBY3R1YWwgRXN0aW1hdGVkIE1hdGVyaWFsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmQuYXBwZW5kKGBmaWxlX3R5cGVgLCAnRXN0aW1hdGVkIE1hdGVyaWFsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZkLmFwcGVuZChgdGlja2V0X2lkYCwgaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGF4aW9zLnBvc3QoJ2FwaS90aWNrZXQvZmlsZXMnLCBmZCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnYWxsZXJ5IHVwbG9hZGVkJylcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuU2VydmljZUNvc3QpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuU2VydmljZUNvc3QuZm9yRWFjaChmaWxlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZmQgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICBmZC5hcHBlbmQoYGZpbGVgLCBmaWxlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNhY3R1YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmQuYXBwZW5kKGBmaWxlX3R5cGVgLCAnQWN0dWFsIEVzdGltYXRlZCBTZXJ2aWNlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmQuYXBwZW5kKGBmaWxlX3R5cGVgLCAnRXN0aW1hdGVkIFNlcnZpY2UnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZmQuYXBwZW5kKGB0aWNrZXRfaWRgLCBpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXhpb3MucG9zdCgnYXBpL3RpY2tldC9maWxlcycsIGZkKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2dhbGxlcnkgdXBsb2FkZWQnKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGFzeW5jIHVwbG9hZF9zdGFnZXMoaWQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhZ2VzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YWdlcy5mb3JFYWNoKHN0YWdlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZmQgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICBmZC5hcHBlbmQoYGlkYCwgc3RhZ2UuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZkLmFwcGVuZChgc3RhZ2Vfbm9gLCBzdGFnZS5zdGFnZV9ubyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZmQuYXBwZW5kKGBzdGFnZV9kYXRlYCwgc3RhZ2Uuc3RhZ2VfZGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZmQuYXBwZW5kKGBkZXNjcmlwdGlvbmAsIHN0YWdlLmRlc2NyaXB0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAvL2ZkLmFwcGVuZChgbmV3X2ZpbGVgLCBzdGFnZS5uZXdfZmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZmQuYXBwZW5kKGBmaWxlYCwgc3RhZ2UuZmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZmQuYXBwZW5kKGB0aWNrZXRfaWRgLCBpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXhpb3MucG9zdCgnYXBpL3RpY2tldC9zdGFnZXMnLCBmZCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdGFnZXMgdXBsb2FkZWQnKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHN1Ym1pdFRpY2tldCgpIHtcclxuICAgICAgICAgICAgdGhpcy4kdmFsaWRhdG9yLnZhbGlkYXRlQWxsKCkudGhlbihhc3luYyAodmFsaWQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwb3BfbG9hZGVyID0gdGhpcy4kbG9hZGluZy5zaG93KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyOiB0aGlzLiRyZWZzLnZwc19zdWJtaXRfcG9wLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLnB1dCgnL2FwaS90aWNrZXQvJyArIHRoaXMuZm9ybS5pZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2FkZE5ldycpLm1vZGFsKCdoaWRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLmRhdGEubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGxvYWRfc3RhZ2VzKHRoaXMuZm9ybS5pZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGxvYWRfZmlsZXModGhpcy5mb3JtLmlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRUaWNrZXRzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcF9sb2FkZXIuaGlkZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3BfbG9hZGVyLmhpZGUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZXJyLnJlc3BvbnNlLmRhdGEgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0RXJyb3JzRnJvbVJlc3BvbnNlKGVyci5yZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0ucG9zdCgnL2FwaS90aWNrZXQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjYWRkTmV3JykubW9kYWwoJ2hpZGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UuZGF0YS5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGxvYWRfZmlsZXMocmVzcG9uc2UuZGF0YS5kYXRhLmlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRUaWNrZXRzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcF9sb2FkZXIuaGlkZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3BfbG9hZGVyLmhpZGUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZXJyLnJlc3BvbnNlLmRhdGEgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0RXJyb3JzRnJvbVJlc3BvbnNlKGVyci5yZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgYXN5bmMgY2hlY2tfZnJlZV9zZXJ2aWNlKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZF9tYWNoaW5lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZF9tYWNoaW5lLmNvbXBsZXRlZF9mcmVlX3NlcnZpY2UgPj0gdGhpcy5zZWxlY3RlZF9tYWNoaW5lLmZyZWVfc2VydmljZV9ubykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5zZXJ2aWNlX3R5cGUgPSAnUGFpZCBTZXJ2aWNlJztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0uZnJlZV9zZXJ2aWNlX25vID0gJydcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLmZyZWVfc2VydmljZV9ubyA9ICh0aGlzLnNlbGVjdGVkX21hY2hpbmUuY29tcGxldGVkX2ZyZWVfc2VydmljZSArIDEpXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkX21hY2hpbmUgJiYgdGhpcy5zZWxlY3RlZF9tYWNoaW5lLm1hY2hpbmVfdHlwZSA9PSAnTmV3JyAmJiB0aGlzLmZvcm0uc2VydmljZV90eXBlID09ICdGcmVlIFNlcnZpY2UnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gIHRoaXMuc2VsZWN0ZWRfbWFjaGluZS5mcmVlX3NlcnZpY2Vfbm9cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGFzeW5jIGdldF9tYWNoaW5lKCkge1xyXG4gICAgICAgICAgICBheGlvcy5nZXQoXCIvYXBpL3RpY2tldF9tYWNoaW5lXCIsIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNpdGVfaWQ6IHRoaXMuZm9ybS5zaXRlX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5X2lkOiB0aGlzLmZvcm0uY2F0ZWdvcnlfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgc3ViX2NhdGVnb3J5X2lkOiB0aGlzLmZvcm0uc3ViX2NhdGVnb3J5X2lkLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFjaGluZXMgPSByZXNwb25zZS5kYXRhLmRhdGE7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKCgpID0+IGNvbnNvbGUud2FybignT2guIFNvbWV0aGluZyB3ZW50IHdyb25nJykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuXHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZCgpIHtcclxuICAgICAgICB0aGlzLmxvYWRUaWNrZXRzKCk7XHJcbiAgICB9LFxyXG4gICAgYmVmb3JlQ3JlYXRlKCkge1xyXG4gICAgICAgIGF4aW9zLmdldChcImFwaS9nZXRfcHJlX21hY2hpbmVcIilcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXRlZ29yaWVzID0gcmVzLmRhdGEuZGF0YS5DYXRlZ29yeTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2l0ZXMgPSByZXMuZGF0YS5kYXRhLnNpdGVzO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIGF4aW9zLmdldChcIi9hcGkvaW5pdGlhbF90aWNrZXRcIikudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXNlcnMgPSByZXNwb25zZS5kYXRhLmRhdGEudmVuZG9ycztcclxuICAgICAgICAgICAgdGhpcy5tYWNoaW5lcyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5tYWNoaW5lcztcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hfbWFjaGluZXMgPSByZXNwb25zZS5kYXRhLmRhdGEubWFjaGluZXM7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoX3NpdGVzID0gcmVzcG9uc2UuZGF0YS5kYXRhLnNpdGVzO1xyXG4gICAgICAgIH0pLmNhdGNoKCgpID0+IGNvbnNvbGUud2FybignT2guIFNvbWV0aGluZyB3ZW50IHdyb25nJykpO1xyXG4gICAgfSxcclxuICAgIHdhdGNoOiB7XHJcbiAgICAgICAgYXN5bmMgJ2Zvcm0uc3ViX2NhdGVnb3J5X2lkJyhuLCBvKSB7XHJcbiAgICAgICAgICAgIGlmIChuKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldF9tYWNoaW5lKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmMgJ2Zvcm0uc2l0ZV9pZCcobiwgbykge1xyXG4gICAgICAgICAgICBpZiAobikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRfbWFjaGluZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAnZm9ybS5jYXRlZ29yeV9pZCc6IHtcclxuICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKG4sIG8pIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobikge1xyXG4gICAgICAgICAgICAgICAgICAgIGF4aW9zLmdldChcImFwaS9jYXRlZ29yeS9cIiArIG4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3ViX2NhdGVnb3JpZXMgPSByZXMuZGF0YS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0X21hY2hpbmUoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkZWVwOiB0cnVlLFxyXG4gICAgICAgICAgICBpbml0aWFsOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdGFnZXM6IHtcclxuICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKG4sIG8pIHtcclxuICAgICAgICAgICAgICAgIGlmIChuICYmIG4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsYSA9IG5bbi5sZW5ndGggLSAxXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobGEuc3RhZ2Vfbm8pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdF9zdGFnZV9pbmRleCA9IHRoaXMub3BuX3N0YWdlLmluZGV4T2YobGEuc3RhZ2Vfbm8pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsYS5zdGFnZV9kYXRlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3Rfc3RhZ2VfZGF0ZSA9IG5ldyBEYXRlKGxhLnN0YWdlX2RhdGUpLnRvSVNPU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdF9zdGFnZV9pbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucG9wX3RpY2tldCAmJiB0aGlzLnBvcF90aWNrZXQuY3JlYXRlZF9hdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3Rfc3RhZ2VfZGF0ZSA9IG5ldyBEYXRlKHRoaXMucG9wX3RpY2tldC5jcmVhdGVkX2F0KS50b0lTT1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdF9zdGFnZV9kYXRlID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRlZXA6IHRydWUsXHJcbiAgICAgICAgICAgIGluaXRpYWw6IHRydWUsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgYXN5bmMgJ2Zvcm0ubWFpbnRlbmFuY2VfcHJvdmlkZXInKG4pIHtcclxuICAgICAgICAgICAgaWYgKG4gIT0gJ3ZlbmRvcicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5zZXJ2aWNlX3R5cGUgPSAnUGFpZCBTZXJ2aWNlJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGF4aW9zLmdldChcImFwaS91c2VyL2xpc3RcIiwge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlcnMgPSByZXNwb25zZS5kYXRhLmRhdGE7XHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoKSA9PiBjb25zb2xlLndhcm4oJ09oLiBTb21ldGhpbmcgd2VudCB3cm9uZycpKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBhc3luYyAnZm9ybS5tYWNoaW5lX2lkJyhuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRfbWFjaGluZSA9IHRoaXMubWFjaGluZXMuZmluZCh4ID0+IHguaWQgPT09IG4pO1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmNoZWNrX2ZyZWVfc2VydmljZSgpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3luYyAnZm9ybS5zZXJ2aWNlX3R5cGUnKG4pIHtcclxuICAgICAgICAgICAgaWYgKG4gPT0gJ0ZyZWUgU2VydmljZScpIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuY2hlY2tfZnJlZV9zZXJ2aWNlKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG59XHJcbjwvc2NyaXB0PlxyXG48c3R5bGU+XHJcbi5icyB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODA4MDgwYTg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuPC9zdHlsZT4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmJzIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzgwODA4MGE4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcclxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJGOi9wcm9ncmFtbWluZy93YW1wNjQvd3d3L3JveWFsLWluZnJhY29uc3RydWN0aW9uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1RpY2tldHMvcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvVGlja2V0cy9pbmRleC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQTYrQkE7SUFDQSw0QkFBQTtJQUNBLG1CQUFBO0NBQ0FcIixcImZpbGVcIjpcImluZGV4LnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxyXFxuICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJjb250ZW50XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTEyXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5UaWNrZXQgTGlzdDwvaDM+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtdG9vbHNcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNtIGJ0bi1wcmltYXJ5XFxcIiBAY2xpY2s9XFxcIm5ld01vZGFsXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtcGx1cy1zcXVhcmVcXFwiPjwvaT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGQgTmV3XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5IHAtMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIiBAc3VibWl0LnByZXZlbnQ9XFxcImdldFJlc3VsdHMoKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLXJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVxcXCJuYW1lXFxcIiA6Z2V0LW9wdGlvbi1sYWJlbD1cXFwiZ2V0TGFiZWxcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cmVkdWNlPVxcXCIob3B0aW9uKSA9PiBvcHRpb24uaWRcXFwiIDpvcHRpb25zPVxcXCJzZWFyY2hfbWFjaGluZXNcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgbWFjaGluZXMgLi4uXFxcIiB2LW1vZGVsPVxcXCJzZWFyY2gubWFjaGluZV9pZFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XFxcIm1hY2hpbmVfaWRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cXFwic2l0ZV9uYW1lXFxcIiA6cmVkdWNlPVxcXCIob3B0aW9uKSA9PiBvcHRpb24uaWRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cXFwic2VhcmNoX3NpdGVzXFxcIiBwbGFjZWhvbGRlcj1cXFwiU2VsZWN0IFNpdGUuLi5cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJzZWFyY2guc2l0ZV9pZFxcXCIgbmFtZT1cXFwic2l0ZV9pZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGxhYmVsPVxcXCJzaXRlX25hbWVcXFwiIDpvcHRpb25zPVxcXCJbJ09wZW4nLCAnQ2xvc2VkJ11cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiU2VsZWN0IFN0YXR1cy4uLlxcXCIgdi1tb2RlbD1cXFwic2VhcmNoLnN0YXR1c1xcXCIgbmFtZT1cXFwic3RhdHVzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCI+U2VhcmNoPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy5jYXJkLWhlYWRlciAtLT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHkgdGFibGUtcmVzcG9uc2l2ZSBwLTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLWhvdmVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5UaWNrZXQgTm8gPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk1hY2hpbmUgTmFtZTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5NYWNoaW5lIEZhciBObzwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TaXRlPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkNyZWF0ZWQgQnk8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q3JlYXRlZCBEYXRlPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkV4cGVjdGVkIGRhdGU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VGlja2V0IFN0YXR1czwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BY3Rpb248L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciB2LWZvcj1cXFwidGlja2V0IGluIFRpY2tldHMuZGF0YVxcXCIgOmtleT1cXFwidGlja2V0LmlkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHRpY2tldC50aWNrZXRfbm8gfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcInRleHQtY2FwaXRhbGl6ZVxcXCI+e3sgdGlja2V0Lm1hY2hpbmUubmFtZSB9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyB0aWNrZXQubWFjaGluZS5mYXJfbm8gfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0LnNpdGUgPyB0aWNrZXQuc2l0ZS5zaXRlX25hbWUgOiAnLScgfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgdGlja2V0LmNyZWF0ZWRfYnlfbmFtZSB9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyB0aWNrZXQuY3JlYXRlZF9hdCB8IG15RGF0ZSB9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyB0aWNrZXQubGlrZWx5X2RhdGUgfCBteURhdGUgfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgdi1odG1sPVxcXCJ0aWNrZXQuc3RhdHVzXFxcIj48L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCJqYXZhc2NyaXB0OnZvaWQoMCk7XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nIGJ0bi1zbVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcInZpZXdNb2RhbCh0aWNrZXQpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWaWV3XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVxcXCInL3RpY2tldC8nICsgdGlja2V0LmlkXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1zbVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVxcXCJ0aWNrZXQuc3RhdHVzICE9ICdDbG9zZWQnICYmICRnYXRlLmlzQWRtaW4oKVxcXCI+RWRpdDwvcm91dGVyLWxpbms+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCJqYXZhc2NyaXB0OnZvaWQoMCk7XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNtXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwiY2xvc2VNb2RhbCh0aWNrZXQpXFxcIiB0aXRsZT1cXFwiQ2xvc2UgdGlja2V0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XFxcInRpY2tldC5zdGF0dXMgIT0gJ0Nsb3NlZCcgJiYgJGdhdGUuaXNBZG1pbigpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDbG9zZVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy5jYXJkLWJvZHkgLS0+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1mb290ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGFnaW5hdGlvbiA6ZGF0YT1cXFwiVGlja2V0c1xcXCIgQHBhZ2luYXRpb24tY2hhbmdlLXBhZ2U9XFxcImdldFJlc3VsdHNcXFwiPjwvcGFnaW5hdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmNhcmQgLS0+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICA8IS0tIENsb3NlIE1vZGFsIC0tPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwgZmFkZVxcXCIgaWQ9XFxcImNsb3NlbW9kYWxcXFwiIHRhYmluZGV4PVxcXCItMVxcXCIgcm9sZT1cXFwiZGlhbG9nXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcImNsb3NlbW9kYWxcXFwiXFxyXFxuICAgICAgICAgICAgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZyBtb2RhbC1sZ1xcXCIgcm9sZT1cXFwiZG9jdW1lbnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+Q2xvc2UgVGlja2V0PC9oNT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIiBhcmlhLWxhYmVsPVxcXCJDbG9zZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XFxcInN1Ym1pdENsb3NlVGlja2V0KClcXFwiIGRhdGEtdnYtc2NvcGU9XFxcImNsb3NldGlja2V0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC02XFxcIiB2LWlmPVxcXCJwb3BfdGlja2V0ICYmIHBvcF90aWNrZXQubGlrZWx5X2RhdGVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+QWN0dWFsIERhdGU8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGF0ZXRpbWUgdmFsdWUtem9uZT1cXFwiQXNpYS9Lb2xrYXRhXFxcIiB2LW1vZGVsPVxcXCJmb3JtY2xvc2UuYWN0dWFsX2RhdGVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVxcXCJhY3R1YWxfZGF0ZVxcXCIgaW5wdXQtY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cXFwieyAnaXMtaW52YWxpZCc6IHZlcnJvcnMuaGFzKCdjbG9zZXRpY2tldC5hY3R1YWxfZGF0ZScpIH1cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlPVxcXCIncmVxdWlyZWQnXFxcIiBkYXRhLXZ2LWFzPVxcXCJBY3R1YWwgRGF0ZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDptaW4tZGF0ZXRpbWU9XFxcIm5ldyBEYXRlKHBvcF90aWNrZXQuY3JlYXRlZF9hdCkudG9JU09TdHJpbmcoKVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDptYXgtZGF0ZXRpbWU9XFxcIm5ldyBEYXRlKCkudG9JU09TdHJpbmcoKVxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVxcXCJ2ZXJyb3JzLmhhcygnY2xvc2V0aWNrZXQuYWN0dWFsX2RhdGUnKVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJoZWxwLWJsb2NrIGludmFsaWQtZmVlZGJhY2tcXFwiPnt7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnJvcnMuZmlyc3QoJ2Nsb3NldGlja2V0LmFjdHVhbF9kYXRlJylcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk1hY2hpbmUgU3RhdHVzPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCB2LW1vZGVsPVxcXCJmb3JtY2xvc2UubWFjaGluZV9zdGF0dXNcXFwiIG5hbWU9XFxcIm1hY2hpbmVfc3RhdHVzXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cXFwieyAnaXMtaW52YWxpZCc6IHZlcnJvcnMuaGFzKCdjbG9zZXRpY2tldC5tYWNoaW5lX3N0YXR1cycpIH1cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlPVxcXCIncmVxdWlyZWQnXFxcIiBkYXRhLXZ2LWFzPVxcXCJtYWNoaW5lIHN0YXR1c1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJSdW5uaW5nXFxcIj5SdW5uaW5nPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJSdW5uaW5nIHdpdGggUHJvYmxlbVxcXCI+UnVubmluZyB3aXRoIFByb2JsZW08L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cXFwidmVycm9ycy5oYXMoJ2Nsb3NldGlja2V0Lm1hY2hpbmVfc3RhdHVzJylcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXFxcIj57e1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJyb3JzLmZpcnN0KCdjbG9zZXRpY2tldC5tYWNoaW5lX3N0YXR1cycpXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fTwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtNFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Fc3RpbWF0ZWQgTWF0ZXJpYWwgY29zdDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVxcXCJwb3BfdGlja2V0LmVzdGltYXRlZF9tYXRlcmlhbF9jb3N0XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcmVhZG9ubHk+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC00XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkFjdHVhbCBNYXRlcmlhbCBjb3N0PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XFxcImZvcm1jbG9zZS5hY3R1YWxfbWF0ZXJpYWxfY29zdFxcXCIgdHlwZT1cXFwidGV4dFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XFxcImFjdHVhbF9tYXRlcmlhbF9jb3N0XFxcIiB2LXZhbGlkYXRlPVxcXCIncmVxdWlyZWQnXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12di1hcz1cXFwiQWN0dWFsIE1hdGVyaWFsIGNvc3RcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XFxcInsgJ2lzLWludmFsaWQnOiB2ZXJyb3JzLmhhcygnY2xvc2V0aWNrZXQuYWN0dWFsX21hdGVyaWFsX2Nvc3QnKSB9XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVxcXCJ2ZXJyb3JzLmhhcygnY2xvc2V0aWNrZXQuYWN0dWFsX21hdGVyaWFsX2Nvc3QnKVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJoZWxwLWJsb2NrIGludmFsaWQtZmVlZGJhY2tcXFwiPiB7e1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJyb3JzLmZpcnN0KCdjbG9zZXRpY2tldC5hY3R1YWxfbWF0ZXJpYWxfY29zdCcpXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fTwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtNFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD4gQWN0dWFsIE1hdGVyaWFsIGNvc3QgRmlsZTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJmaWxlXFxcIiBAY2hhbmdlPVxcXCJ1cGxvYWRNYXRlcmlhbENvc3RcXFwiIG11bHRpcGxlIG5hbWU9XFxcIm1hdGVyaWFsX2Nvc3RcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XFxcImZpbGVhY3R1YWxtYXRlcmlhbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cXFwieyAnaXMtaW52YWxpZCc6IHZlcnJvcnMuaGFzKCdjbG9zZXRpY2tldC5tYXRlcmlhbF9jb3N0JykgfVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtdmFsaWRhdGU9XFxcIicnXFxcIiBkYXRhLXZ2LWFzPVxcXCJBY3R1YWwgTWF0ZXJpYWwgY29zdFxcXCIgLz5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2xlYXJmaXhcXFwiIHYtaWY9XFxcInBvcF90aWNrZXQuYWN0dWFsX2VzdGltYXRlZF9tYXRlcmlhbF9maWxlc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB2LWZvcj1cXFwiKGl0ZW0sIHgpIGluIHBvcF90aWNrZXQuYWN0dWFsX2VzdGltYXRlZF9tYXRlcmlhbF9maWxlc1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVxcXCJpdGVtLmlkXFxcIiA6aHJlZj1cXFwiaXRlbS5maWxlXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+Vmlld1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHBvcF90aWNrZXQuYWN0dWFsX2VzdGltYXRlZF9tYXRlcmlhbF9maWxlcy5sZW5ndGggPiAxID8geCArIDEgOiAnJ1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVxcXCJ2ZXJyb3JzLmhhcygnY2xvc2V0aWNrZXQubWF0ZXJpYWxfY29zdCcpXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1xcXCI+IHt7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnJvcnMuZmlyc3QoJ2Nsb3NldGlja2V0Lm1hdGVyaWFsX2Nvc3QnKVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX08L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RXN0aW1hdGVkIFNlcnZpY2UgY29zdDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVxcXCJwb3BfdGlja2V0LmVzdGltYXRlZF9zZXJ2aWNlX2Nvc3RcXFwiIHR5cGU9XFxcInRleHRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiByZWFkb25seT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+QWN0dWFsIFNlcnZpY2UgY29zdDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVxcXCJmb3JtY2xvc2UuYWN0dWFsX3NlcnZpY2VfY29zdFxcXCIgdHlwZT1cXFwidGV4dFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XFxcImFjdHVhbF9zZXJ2aWNlX2Nvc3RcXFwiIHYtdmFsaWRhdGU9XFxcIidyZXF1aXJlZCdcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZ2LWFzPVxcXCJBY3R1YWwgU2VydmljZSBjb3N0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVxcXCJ7ICdpcy1pbnZhbGlkJzogdmVycm9ycy5oYXMoJ2Nsb3NldGlja2V0LmFjdHVhbF9zZXJ2aWNlX2Nvc3QnKSB9XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVxcXCJ2ZXJyb3JzLmhhcygnY2xvc2V0aWNrZXQuYWN0dWFsX3NlcnZpY2VfY29zdCcpXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1xcXCI+IHt7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnJvcnMuZmlyc3QoJ2Nsb3NldGlja2V0LmFjdHVhbF9zZXJ2aWNlX2Nvc3QnKVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX08L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+IEFjdHVhbCBTZXJ2aWNlIGNvc3QgRmlsZSA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiZmlsZVxcXCIgQGNoYW5nZT1cXFwidXBsb2FkU2VydmljZUNvc3RcXFwiIG11bHRpcGxlIG5hbWU9XFxcInNlcnZpY2VfY29zdFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cXFwiZmlsZWFjdHVhbHNlcnZpY2VcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XFxcInsgJ2lzLWludmFsaWQnOiB2ZXJyb3JzLmhhcygnY2xvc2V0aWNrZXQuc2VydmljZV9jb3N0JykgfVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtdmFsaWRhdGU9XFxcIicnXFxcIiBkYXRhLXZ2LWFzPVxcXCJBY3R1YWwgU2VydmljZSBjb3N0XFxcIiAvPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjbGVhcmZpeFxcXCIgdi1pZj1cXFwicG9wX3RpY2tldC5hY3R1YWxfZXN0aW1hdGVkX3NlcnZpY2VfZmlsZXNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdi1mb3I9XFxcIihpdGVtLCB4KSBpbiBwb3BfdGlja2V0LmFjdHVhbF9lc3RpbWF0ZWRfc2VydmljZV9maWxlc1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVxcXCJpdGVtLmlkXFxcIiA6aHJlZj1cXFwiaXRlbS5maWxlXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+Vmlld1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHBvcF90aWNrZXQuYWN0dWFsX2VzdGltYXRlZF9zZXJ2aWNlX2ZpbGVzLmxlbmd0aCA+IDEgPyB4ICsgMSA6ICcnXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX08L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XFxcInZlcnJvcnMuaGFzKCdjbG9zZXRpY2tldC5zZXJ2aWNlX2Nvc3QnKVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJoZWxwLWJsb2NrIGludmFsaWQtZmVlZGJhY2tcXFwiPiB7e1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJyb3JzLmZpcnN0KCdjbG9zZXRpY2tldC5zZXJ2aWNlX2Nvc3QnKVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX08L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTZcXFwiIHYtaWY9XFxcInBvcF9tYWNoaW5lLmlzX2NvbnN1bXRpb25faHJfcnVuXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkN1cnJlbnQgUnVuIGhvdXIgPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XFxcImZvcm1jbG9zZS5jdXJyZW50X3J1bl9ob3VyXFxcIiBuYW1lPVxcXCJjdXJyZW50X3J1bl9ob3VyXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cXFwieyAnaXMtaW52YWxpZCc6IHZlcnJvcnMuaGFzKCdjbG9zZXRpY2tldC5jdXJyZW50X3J1bl9ob3VyJykgfVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtdmFsaWRhdGU9XFxcInsgcmVxdWlyZWQ6IHRydWUsIGRlY2ltYWw6IDIsIG1pbl92YWx1ZTogcG9wX21hY2hpbmUubGFzdF9tYWludGVuYW5jZXMgPyBwb3BfbWFjaGluZS5sYXN0X21haW50ZW5hbmNlcy5ydW5faG91ciA6IHBvcF9tYWNoaW5lLmxhc3RfaHJfcnVuIH1cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZ2LWFzPVxcXCJDdXJyZW50IFJ1biBob3VyXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XFxcInZlcnJvcnMuaGFzKCdjbG9zZXRpY2tldC5jdXJyZW50X3J1bl9ob3VyJylcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnJvcnMuZmlyc3QoJ2Nsb3NldGlja2V0LmN1cnJlbnRfcnVuX2hvdXInKVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX08L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTZcXFwiIHYtaWY9XFxcInBvcF9tYWNoaW5lLmlzX2NvbnN1bXRpb25fa21fcnVuXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPiBDdXJyZW50IEtNIFJ1biA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cXFwiZm9ybWNsb3NlLmN1cnJlbnRfa21fcnVuXFxcIiBuYW1lPVxcXCJjdXJyZW50X2ttX3J1blxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XFxcInsgJ2lzLWludmFsaWQnOiB2ZXJyb3JzLmhhcygnY2xvc2V0aWNrZXQuY3VycmVudF9rbV9ydW4nKSB9XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZT1cXFwieyByZXF1aXJlZDogdHJ1ZSwgZGVjaW1hbDogMiwgbWluX3ZhbHVlOiBwb3BfbWFjaGluZS5sYXN0X21haW50ZW5hbmNlcyA/IHBvcF9tYWNoaW5lLmxhc3RfbWFpbnRlbmFuY2VzLmttX3J1biA6IHBvcF9tYWNoaW5lLmxhc3Rfa21fcnVuIH1cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZ2LWFzPVxcXCJDdXJyZW50IEtNIGhvdXJcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cXFwidmVycm9ycy5oYXMoJ2Nsb3NldGlja2V0LmN1cnJlbnRfa21fcnVuJylcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXFxcIj57e1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJyb3JzLmZpcnN0KCdjbG9zZXRpY2tldC5jdXJyZW50X2ttX3J1bicpXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fTwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtNlxcXCIgdi1pZj1cXFwicG9wX21hY2hpbmUuaXNfcHJvZHVjdGlvbl9maWdcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+IEN1cnJlbnQgUHJvZHVjdGlvbiBmaWcgPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XFxcImZvcm1jbG9zZS5jdXJyZW50X3Byb2R1Y3Rpb25fZmlnXFxcIiBuYW1lPVxcXCJjdXJyZW50X3Byb2R1Y3Rpb25fZmlnXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cXFwieyAnaXMtaW52YWxpZCc6IHZlcnJvcnMuaGFzKCdjbG9zZXRpY2tldC5jdXJyZW50X3Byb2R1Y3Rpb25fZmlnJykgfVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtdmFsaWRhdGU9XFxcInsgcmVxdWlyZWQ6IHRydWUsIGRlY2ltYWw6IDIsIG1pbl92YWx1ZTogcG9wX21hY2hpbmUubGFzdF9tYWludGVuYW5jZXMgPyBwb3BfbWFjaGluZS5sYXN0X21haW50ZW5hbmNlcy5wcm9kdWN0aW9uX2ZpZyA6IHBvcF9tYWNoaW5lLnBlcmlvZGljX21haW50ZW5hbmNlX2JyZWFrZG93biB9XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12di1hcz1cXFwiQ3VycmVudCBQcm9kdWN0aW9uIGZpZ1xcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVxcXCJ2ZXJyb3JzLmhhcygnY2xvc2V0aWNrZXQuY3VycmVudF9wcm9kdWN0aW9uX2ZpZycpXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1xcXCI+e3tcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVycm9ycy5maXJzdCgnY2xvc2V0aWNrZXQuY3VycmVudF9wcm9kdWN0aW9uX2ZpZycpXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fTwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtNlxcXCIgdi1pZj1cXFwiZm9ybWNsb3NlLnRpY2tldF90eXBlID09ICdCcmVha2Rvd24gTWFpbnRlbmFuY2UnXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlByb2R1Y3Rpb24gTG9zczwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVxcXCJmb3JtY2xvc2UucHJvZHVjdGlvbl9sb3NzXFxcIiBuYW1lPVxcXCJwcm9kdWN0aW9uX2xvc3NcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVxcXCJ7ICdpcy1pbnZhbGlkJzogdmVycm9ycy5oYXMoJ2Nsb3NldGlja2V0LnByb2R1Y3Rpb25fbG9zcycpIH1cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlPVxcXCIncmVxdWlyZWQnXFxcIiBkYXRhLXZ2LWFzPVxcXCJQcm9kdWN0aW9uIExvc3NcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cXFwidmVycm9ycy5oYXMoJ2Nsb3NldGlja2V0LnByb2R1Y3Rpb25fbG9zcycpXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJyb3JzLmZpcnN0KCdjbG9zZXRpY2tldC5wcm9kdWN0aW9uX2xvc3MnKVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX08L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTZcXFwiIHYtaWY9XFxcImZvcm1jbG9zZS50aWNrZXRfdHlwZSA9PSAnQnJlYWtkb3duIE1haW50ZW5hbmNlJ1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Qcm9kdWN0aW9uIGxvc3MgYW1vdW50PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XFxcImZvcm1jbG9zZS5wcm9kdWN0aW9uX2xvc3NfYW1vdW50XFxcIiBuYW1lPVxcXCJwcm9kdWN0aW9uX2xvc3NfYW1vdW50XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cXFwieyAnaXMtaW52YWxpZCc6IHZlcnJvcnMuaGFzKCdjbG9zZXRpY2tldC5wcm9kdWN0aW9uX2xvc3NfYW1vdW50JykgfVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtdmFsaWRhdGU9XFxcIidyZXF1aXJlZCdcXFwiIGRhdGEtdnYtYXM9XFxcIkN1cnJlbnQgUHJvZHVjdGlvbiBmaWdcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cXFwidmVycm9ycy5oYXMoJ2Nsb3NldGlja2V0LnByb2R1Y3Rpb25fbG9zc19hbW91bnQnKVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJoZWxwLWJsb2NrIGludmFsaWQtZmVlZGJhY2tcXFwiPnt7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnJvcnMuZmlyc3QoJ2Nsb3NldGlja2V0LnByb2R1Y3Rpb25fbG9zc19hbW91bnQnKVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX08L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tc2Vjb25kYXJ5XFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIj5DbG9zZTwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCI+Q2xvc2UgVGlja2V0PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8IS0tVmlldyBNb2RhbC0tPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwgZmFkZVxcXCIgaWQ9XFxcInZpZXdtb2RhbFxcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIiByb2xlPVxcXCJkaWFsb2dcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwidmlld21vZGFsXFxcIlxcclxcbiAgICAgICAgICAgIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1kaWFsb2cgbW9kYWwtbGdcXFwiIHJvbGU9XFxcImRvY3VtZW50XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPlZpZXcgVGlja2V0PC9oNT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIiBhcmlhLWxhYmVsPVxcXCJDbG9zZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIiB2LWlmPVxcXCJwb3BfdGlja2V0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcblxcclxcblxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtNCBic1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TWFjaGluZSBTaXRlPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XFxcInNpdGVfbmFtZVxcXCIgOnJlZHVjZT1cXFwiKG9wdGlvbikgPT4gb3B0aW9uLmlkXFxcIiA6b3B0aW9ucz1cXFwic2l0ZXNcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJDaG9vc2UgU2l0ZSAuLi5cXFwiIHYtbW9kZWw9XFxcInBvcF90aWNrZXQuc2l0ZV9pZFxcXCIgZGlzYWJsZWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTQgYnNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk1hY2hpbmUgQ2F0ZWdvcnk8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cXFwibmFtZVxcXCIgOnJlZHVjZT1cXFwiKG9wdGlvbikgPT4gb3B0aW9uLmlkXFxcIiA6b3B0aW9ucz1cXFwiY2F0ZWdvcmllc1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIkNob29zZSBDYXRlZ29yeSAuLi5cXFwiIHYtbW9kZWw9XFxcInBvcF90aWNrZXQuY2F0ZWdvcnlfaWRcXFwiIGRpc2FibGVkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC00IGJzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5NYWNoaW5lIERlc2NyaXB0aW9uPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XFxcIm5hbWVcXFwiIDpyZWR1Y2U9XFxcIihvcHRpb24pID0+IG9wdGlvbi5pZFxcXCIgOm9wdGlvbnM9XFxcInN1Yl9jYXRlZ29yaWVzXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiQ2hvb3NlIGRlc2NyaXB0aW9uIC4uLlxcXCIgdi1tb2RlbD1cXFwicG9wX3RpY2tldC5zdWJfY2F0ZWdvcnlfaWRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XFxcInN1Yl9jYXRlZ29yeV9pZFxcXCIgOmRpc2FibGVkPVxcXCJwb3BfdGlja2V0LmlkICE9ICcnXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtNCBic1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+IE1hY2hpbmUgOiA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHBvcF90aWNrZXQubWFjaGluZS5mYXJfbm8gfX0ge3sgcG9wX3RpY2tldC5tYWNoaW5lLm5hbWUgfX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTQgYnNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk1haW50ZW5hbmNlIFByb3ZpZGVyPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwb3BfdGlja2V0Lm1haW50ZW5hbmNlX3Byb3ZpZGVyIH19XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC00IGJzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD4ge3sgcG9wX3RpY2tldC5tYWludGVuYW5jZV9wcm92aWRlciA9PSAndXNlcicgPyAndXNlcicgOiAndmVuZG9yJyB9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XFxcInBvcF90aWNrZXQubWFpbnRlbmFuY2VfcHJvdmlkZXIgPT0gJ3ZlbmRvcidcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgbGFiZWw9XFxcIm5hbWVcXFwiIDpyZWR1Y2U9XFxcIihvcHRpb24pID0+IG9wdGlvbi5pZFxcXCIgOm9wdGlvbnM9XFxcInVzZXJzXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIkVudGVyIHVzZXJzIC4uLlxcXCIgdi1tb2RlbD1cXFwicG9wX3RpY2tldC52ZW5kb3JfaWRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlPVxcXCJ7IHJlcXVpcmVkOiBwb3BfdGlja2V0Lm1haW50ZW5hbmNlX3Byb3ZpZGVyID09ICd2ZW5kb3InID8gdHJ1ZSA6IGZhbHNlIH1cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCBsYWJlbD1cXFwibmFtZVxcXCIgOnJlZHVjZT1cXFwiKG9wdGlvbikgPT4gb3B0aW9uLmlkXFxcIiA6b3B0aW9ucz1cXFwidXNlcnNcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgdXNlcnMgLi4uXFxcIiB2LW1vZGVsPVxcXCJwb3BfdGlja2V0LnVzZXJfaWRcXFwiIGRpc2FibGVkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC02IGJzXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cXFwicG9wX3RpY2tldC5tYWludGVuYW5jZV9wcm92aWRlciA9PSAndmVuZG9yJyAmJiBwb3BfdGlja2V0LnNlcnZpY2VfdHlwZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U2VydmljZSBUeXBlPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwb3BfdGlja2V0LnNlcnZpY2VfdHlwZSB9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtNiBic1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XFxcInBvcF90aWNrZXQuc2VydmljZV90eXBlID09ICdGcmVlIFNlcnZpY2UnICYmIHBvcF90aWNrZXQuZnJlZV9zZXJ2aWNlX25vXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5GcmVlIHNlcnZpY2Ugbm86PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwb3BfdGlja2V0LmZyZWVfc2VydmljZV9ubyB9fS97eyBwb3BfdGlja2V0Lm1hY2hpbmUuZnJlZV9zZXJ2aWNlX25vIH19XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC02IGJzXFxcIiB2LWlmPVxcXCJwb3BfdGlja2V0LnRpY2tldF90eXBlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5UaWNrZXQgVHlwZTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcG9wX3RpY2tldC50aWNrZXRfdHlwZSB9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcblxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtMyBic1xcXCIgdi1pZj1cXFwicG9wX3RpY2tldC5lc3RpbWF0ZWRfbWF0ZXJpYWxfY29zdFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RXN0aW1hdGVkIE1hdGVyaWFsIGNvc3Q8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHBvcF90aWNrZXQuZXN0aW1hdGVkX21hdGVyaWFsX2Nvc3QgfCB0b0N1cnJlbmN5IH19XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIDpocmVmPVxcXCJmaWxlLmZpbGVcXFwiIHYtZm9yPVxcXCIoZmlsZSwgeCkgaW4gcG9wX3RpY2tldC5lc3RpbWF0ZWRfbWF0ZXJpYWxfZmlsZXNcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVxcXCJmaWxlLmlkXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+Vmlld1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcG9wX3RpY2tldC5lc3RpbWF0ZWRfbWF0ZXJpYWxfZmlsZXMubGVuZ3RoID4gMSA/IHggKyAxIDogJycgfX08L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtMyBic1xcXCIgdi1pZj1cXFwicG9wX3RpY2tldC5lc3RpbWF0ZWRfc2VydmljZV9jb3N0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Fc3RpbWF0ZWQgU2VydmljZSBjb3N0IDogPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwb3BfdGlja2V0LmVzdGltYXRlZF9zZXJ2aWNlX2Nvc3QgfCB0b0N1cnJlbmN5IH19XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIDpocmVmPVxcXCJmaWxlLmZpbGVcXFwiIHYtZm9yPVxcXCIoZmlsZSwgeCkgaW4gcG9wX3RpY2tldC5lc3RpbWF0ZWRfc2VydmljZV9maWxlc1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XFxcImZpbGUuaWRcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj5WaWV3XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwb3BfdGlja2V0LmVzdGltYXRlZF9zZXJ2aWNlX2ZpbGVzLmxlbmd0aCA+IDEgPyB4ICsgMSA6ICcnIH19PC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTMgYnNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkFjdHVhbCBNYXRlcmlhbCBDb3N0IDogPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVxcXCJwb3BfdGlja2V0LmFjdHVhbF9tYXRlcmlhbF9jb3N0XFxcIj4ge3tcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcF90aWNrZXQuYWN0dWFsX21hdGVyaWFsX2Nvc3QgfCB0b0N1cnJlbmN5XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIDpocmVmPVxcXCJmaWxlLmZpbGVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cXFwiKGZpbGUsIHgpIGluIHBvcF90aWNrZXQuYWN0dWFsX2VzdGltYXRlZF9tYXRlcmlhbF9maWxlc1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XFxcImZpbGUuaWRcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj5WaWV3XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwb3BfdGlja2V0LmFjdHVhbF9lc3RpbWF0ZWRfbWF0ZXJpYWxfZmlsZXMubGVuZ3RoID4gMSA/IHggKyAxIDogJycgfX08L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtMyBic1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+QWN0dWFsIFNlcnZpY2UgQ29zdCA6IDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cXFwicG9wX3RpY2tldC5hY3R1YWxfc2VydmljZV9jb3N0XFxcIj57e1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wX3RpY2tldC5hY3R1YWxfc2VydmljZV9jb3N0IHwgdG9DdXJyZW5jeVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSA6aHJlZj1cXFwiZmlsZS5maWxlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XFxcIihmaWxlLCB4KSBpbiBwb3BfdGlja2V0LmFjdHVhbF9lc3RpbWF0ZWRfc2VydmljZV9maWxlc1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XFxcImZpbGUuaWRcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj5WaWV3IHt7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcF90aWNrZXQuYWN0dWFsX2VzdGltYXRlZF9zZXJ2aWNlX2ZpbGVzLmxlbmd0aCA+IDEgP1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeCArIDEgOiAnJ1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX08L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtNCBic1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+VGlja2V0IE5vIDogPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwb3BfdGlja2V0LnRpY2tldF9ubyB9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtNCBic1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TGlrZWx5IERhdGUgOiA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHBvcF90aWNrZXQubGlrZWx5X2RhdGUgfCBteURhdGUgfX1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTQgYnNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkFjdHVhbCBEYXRlIDogPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwb3BfdGlja2V0LmFjdHVhbF9kYXRlIHwgbXlEYXRlIH19XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC00IGJzXFxcIiB2LWlmPVxcXCJwb3BfdGlja2V0LmN1cnJlbnRfcnVuX2hvdXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkN1cnJlbnQgUnVuIEhvdXIgOiA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHBvcF90aWNrZXQuY3VycmVudF9ydW5faG91ciB9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtNCBic1xcXCIgdi1pZj1cXFwicG9wX3RpY2tldC5jdXJyZW50X2ttX3J1blxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q3VycmVudCBLTSBIb3VyIDogPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwb3BfdGlja2V0LmN1cnJlbnRfa21fcnVuIH19XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC00IGJzXFxcIiB2LWlmPVxcXCJwb3BfdGlja2V0LmN1cnJlbnRfcHJvZHVjdGlvbl9maWdcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkN1cnJlbnQgUHJvZHVjdGlvbiBGaWcgOiA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHBvcF90aWNrZXQuY3VycmVudF9wcm9kdWN0aW9uX2ZpZyB9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtNCBic1xcXCIgdi1pZj1cXFwicG9wX3RpY2tldC5wcm9kdWN0aW9uX2xvc3NcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlByb2R1Y3Rpb24gTG9zcyA6IDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcG9wX3RpY2tldC5wcm9kdWN0aW9uX2xvc3MgfX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTQgYnNcXFwiIHYtaWY9XFxcInBvcF90aWNrZXQucHJvZHVjdGlvbl9sb3NzX2Ftb3VudFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UHJvZHVjdGlvbiBMb3NzIEFtb3VudCA6IDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcG9wX3RpY2tldC5wcm9kdWN0aW9uX2xvc3NfYW1vdW50IHwgdG9DdXJyZW5jeSB9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuICAgIDwvc2VjdGlvbj5cXHJcXG48L3RlbXBsYXRlPlxcclxcblxcclxcbjxzY3JpcHQ+XFxyXFxuaW1wb3J0IFZ1ZVRhZ3NJbnB1dCBmcm9tICdAam9obXVuL3Z1ZS10YWdzLWlucHV0JztcXHJcXG5leHBvcnQgZGVmYXVsdCB7XFxyXFxuICAgIGNvbXBvbmVudHM6IHtcXHJcXG4gICAgICAgIFZ1ZVRhZ3NJbnB1dCxcXHJcXG4gICAgfSxcXHJcXG4gICAgZGF0YSgpIHtcXHJcXG4gICAgICAgIHJldHVybiB7XFxyXFxuICAgICAgICAgICAgc2VhcmNoX21hY2hpbmVzOiBbXSxcXHJcXG4gICAgICAgICAgICBzZWFyY2hfc2l0ZXM6IFtdLFxcclxcbiAgICAgICAgICAgIHNlYXJjaDoge1xcclxcbiAgICAgICAgICAgICAgICBwYWdlOiAxLFxcclxcbiAgICAgICAgICAgICAgICBtYWNoaW5lX2lkOiAnJyxcXHJcXG4gICAgICAgICAgICAgICAgc2l0ZV9pZDogJydcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIHBvcHRpY2tldDoge30sXFxyXFxuICAgICAgICAgICAgY2F0ZWdvcmllczogW10sXFxyXFxuICAgICAgICAgICAgc3ViX2NhdGVnb3JpZXM6IFtdLFxcclxcbiAgICAgICAgICAgIHNpdGVzOiBbXSxcXHJcXG4gICAgICAgICAgICBzZWxlY3RlZF9tYWNoaW5lOiAnJyxcXHJcXG4gICAgICAgICAgICB1c2VyczogW10sXFxyXFxuICAgICAgICAgICAgbWFjaGluZXM6IFtdLFxcclxcbiAgICAgICAgICAgIFRpY2tldHM6IHt9LFxcclxcbiAgICAgICAgICAgIGVkaXRtb2RlOiBmYWxzZSxcXHJcXG4gICAgICAgICAgICBNYXRlcmlhbENvc3Q6IG51bGwsXFxyXFxuICAgICAgICAgICAgU2VydmljZUNvc3Q6IG51bGwsXFxyXFxuICAgICAgICAgICAgZm9ybTogbmV3IEZvcm0oe1xcclxcbiAgICAgICAgICAgICAgICBpZDogJycsXFxyXFxuICAgICAgICAgICAgICAgIHNpdGVfaWQ6ICcnLFxcclxcbiAgICAgICAgICAgICAgICBjYXRlZ29yeV9pZDogJycsXFxyXFxuICAgICAgICAgICAgICAgIHN1Yl9jYXRlZ29yeV9pZDogJycsXFxyXFxuICAgICAgICAgICAgICAgIGZyZWVfc2VydmljZV9ubzogJycsXFxyXFxuICAgICAgICAgICAgICAgIHRpY2tldF90eXBlOiAnUGVyaW9kaWMgTWFpbnRlbmFuY2UnLFxcclxcbiAgICAgICAgICAgICAgICBzZXJ2aWNlX3R5cGU6ICdQYWlkIFNlcnZpY2UnLFxcclxcbiAgICAgICAgICAgICAgICBtYWNoaW5lX2lkOiAnJyxcXHJcXG4gICAgICAgICAgICAgICAgdGlja2V0X25vOiAnJyxcXHJcXG4gICAgICAgICAgICAgICAgdmVuZG9yX2lkOiAnJyxcXHJcXG4gICAgICAgICAgICAgICAgdXNlcl9pZDogJycsXFxyXFxuICAgICAgICAgICAgICAgIGxpa2VseV9kYXRlOiAnJyxcXHJcXG4gICAgICAgICAgICAgICAgZXN0aW1hdGVkX21hdGVyaWFsX2Nvc3Q6ICcnLFxcclxcbiAgICAgICAgICAgICAgICBlc3RpbWF0ZWRfc2VydmljZV9jb3N0OiAnJyxcXHJcXG4gICAgICAgICAgICAgICAgbWFpbnRlbmFuY2VfcHJvdmlkZXI6ICd2ZW5kb3InLFxcclxcbiAgICAgICAgICAgICAgICBwcm9ibGVtX2Rlc2NyaXB0aW9uOiAnJyxcXHJcXG4gICAgICAgICAgICAgICAgY29tcGxhaW50X25hdHVyZTogJ01ham9yJyxcXHJcXG4gICAgICAgICAgICB9KSxcXHJcXG4gICAgICAgICAgICBzdGFnZXM6IFt7XFxyXFxuICAgICAgICAgICAgICAgIGlkOiAnJyxcXHJcXG4gICAgICAgICAgICAgICAgc3RhZ2Vfbm86ICcnLFxcclxcbiAgICAgICAgICAgICAgICBzdGFnZV9kYXRlOiAnJyxcXHJcXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnLFxcclxcbiAgICAgICAgICAgICAgICBmaWxlOiAnJyxcXHJcXG4gICAgICAgICAgICAgICAgbmV3X2ZpbGU6ICcnXFxyXFxuICAgICAgICAgICAgfV0sXFxyXFxuXFxyXFxuICAgICAgICAgICAgZm9ybWNsb3NlOiBuZXcgRm9ybSh7XFxyXFxuICAgICAgICAgICAgICAgIGlkOiAnJyxcXHJcXG4gICAgICAgICAgICAgICAgbWFjaGluZV9zdGF0dXM6ICcnLFxcclxcbiAgICAgICAgICAgICAgICBlZGl0X3R5cGU6ICdjbG9zZXRpY2tldCcsXFxyXFxuICAgICAgICAgICAgICAgIHRpY2tldF90eXBlOiAnUGVyaW9kaWMgTWFpbnRlbmFuY2UnLFxcclxcbiAgICAgICAgICAgICAgICBhY3R1YWxfZGF0ZTogJycsXFxyXFxuICAgICAgICAgICAgICAgIGFjdHVhbF9tYXRlcmlhbF9jb3N0OiAnJyxcXHJcXG4gICAgICAgICAgICAgICAgYWN0dWFsX3NlcnZpY2VfY29zdDogJycsXFxyXFxuICAgICAgICAgICAgICAgIGN1cnJlbnRfcnVuX2hvdXI6ICcnLFxcclxcbiAgICAgICAgICAgICAgICBjdXJyZW50X2ttX3J1bjogJycsXFxyXFxuICAgICAgICAgICAgICAgIGN1cnJlbnRfcHJvZHVjdGlvbl9maWc6ICcnLFxcclxcbiAgICAgICAgICAgICAgICBwcm9kdWN0aW9uX2xvc3M6ICcnLFxcclxcbiAgICAgICAgICAgICAgICBwcm9kdWN0aW9uX2xvc3NfYW1vdW50OiAnJyxcXHJcXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAnQ2xvc2VkJyxcXHJcXG4gICAgICAgICAgICAgICAgdmVuZG9yX3Jlc29sdmVfZGF0ZTogJycsXFxyXFxuICAgICAgICAgICAgICAgIHZlbmRvcl9hdHRhaW5fZGF0ZTogJycsXFxyXFxuICAgICAgICAgICAgICAgIHZlbmRvcl9yZXNwb25zZV9kYXRlOiAnJyxcXHJcXG4gICAgICAgICAgICAgICAgdmVuZG9yX2NhbGxfZGF0ZTogJycsXFxyXFxuICAgICAgICAgICAgfSksXFxyXFxuICAgICAgICAgICAgcG9wX21hY2hpbmU6ICcnLFxcclxcbiAgICAgICAgICAgIHBvcF90aWNrZXQ6ICcnLFxcclxcbiAgICAgICAgICAgIG9wbl9zdGFnZTogWydWZW5kb3IgY3JlYXRlZCcsICdWZW5kb3IgQXNzaWduZWQnLCAnT3JkZXIgaXNzdWVkJywgJ1BheW1lbnQgdW5kZXIgcHJvY2VzcycsICdQYXltZW50IERvbmUnLCAnTG9naXN0aWNzIHVuZGVyIHByb2Nlc3MnLCAnTWF0ZXJpYWxzIGRlc3BhdGNoZWQnLCAnTWF0ZXJpYWwgcmVjZWl2ZWQgYXQgc2l0ZScsICdNYWludGFpbmFjZSB1bmRlciBwcm9ncmVzcyddLFxcclxcbiAgICAgICAgICAgIGxhc3Rfc3RhZ2VfaW5kZXg6IDAsXFxyXFxuICAgICAgICAgICAgbGFzdF9zdGFnZV9kYXRlOiAnJyxcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfSxcXHJcXG4gICAgbWV0aG9kczoge1xcclxcbiAgICAgICAgZ2V0TGFiZWwodmFsKSB7XFxyXFxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XFxyXFxuICAgICAgICAgICAgICAgIHJldHVybiB2YWwuZmFyX25vICsgJyAtICcgKyB2YWwubmFtZTtcXHJcXG4gICAgICAgICAgICB9IGVsc2Uge1xcclxcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICB2aWV3TW9kYWwodGlja2V0KSB7XFxyXFxuICAgICAgICAgICAgdGhpcy5wb3BfdGlja2V0ID0gJydcXHJcXG4gICAgICAgICAgICB0aGlzLnBvcF90aWNrZXQgPSB0aWNrZXRcXHJcXG4gICAgICAgICAgICBheGlvcy5nZXQoXFxcImFwaS9jYXRlZ29yeS9cXFwiICsgdGlja2V0LmNhdGVnb3J5X2lkKVxcclxcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Yl9jYXRlZ29yaWVzID0gcmVzLmRhdGEuZGF0YTtcXHJcXG4gICAgICAgICAgICAgICAgfSlcXHJcXG4gICAgICAgICAgICAkKCcjdmlld21vZGFsJykubW9kYWwoJ3Nob3cnKTtcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBBZGRTdGFnZSgpIHtcXHJcXG4gICAgICAgICAgICB0aGlzLnN0YWdlcy5wdXNoKHtcXHJcXG4gICAgICAgICAgICAgICAgaWQ6ICcnLFxcclxcbiAgICAgICAgICAgICAgICBzdGFnZV9ubzogJycsXFxyXFxuICAgICAgICAgICAgICAgIHN0YWdlX2RhdGU6ICcnLFxcclxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJycsXFxyXFxuICAgICAgICAgICAgICAgIGZpbGU6ICcnLFxcclxcbiAgICAgICAgICAgICAgICBuZXdfZmlsZTogJydcXHJcXG4gICAgICAgICAgICB9KTtcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBhc3luYyBjaG9vc2Vfc3RhZ2VfZmlsZShldmVudCwgeCkge1xcclxcbiAgICAgICAgICAgIHRoaXMuc3RhZ2VzW3hdLm5ld19maWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xcclxcbiAgICAgICAgfSxcXHJcXG5cXHJcXG4gICAgICAgIGFzeW5jIHVwbG9hZE1hdGVyaWFsQ29zdChldmVudCkge1xcclxcbiAgICAgICAgICAgIHRoaXMuTWF0ZXJpYWxDb3N0ID0gZXZlbnQudGFyZ2V0LmZpbGVzXFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgYXN5bmMgdXBsb2FkU2VydmljZUNvc3QoZXZlbnQpIHtcXHJcXG4gICAgICAgICAgICB0aGlzLlNlcnZpY2VDb3N0ID0gZXZlbnQudGFyZ2V0LmZpbGVzXFxyXFxuICAgICAgICB9LFxcclxcblxcclxcbiAgICAgICAgZ2V0UmVzdWx0cyhwYWdlID0gMSkge1xcclxcbiAgICAgICAgICAgIHRoaXMuJFByb2dyZXNzLnN0YXJ0KCk7XFxyXFxuICAgICAgICAgICAgdGhpcy5zZWFyY2gucGFnZSA9IHBhZ2VcXHJcXG4gICAgICAgICAgICBheGlvcy5nZXQoJy9hcGkvdGlja2V0Jywge1xcclxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHRoaXMuc2VhcmNoXFxyXFxuICAgICAgICAgICAgfSkudGhlbigoe1xcclxcbiAgICAgICAgICAgICAgICBkYXRhXFxyXFxuICAgICAgICAgICAgfSkgPT4gKHRoaXMuVGlja2V0cyA9IGRhdGEuZGF0YSkpO1xcclxcbiAgICAgICAgICAgIHRoaXMuJFByb2dyZXNzLmZpbmlzaCgpO1xcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIHN1Ym1pdENsb3NlVGlja2V0KCkge1xcclxcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0YWcnLCAnc3NzJylcXHJcXG4gICAgICAgICAgICB0aGlzLiR2YWxpZGF0b3IucmVzZXQoKTtcXHJcXG4gICAgICAgICAgICB0aGlzLiR2YWxpZGF0b3IucmVzdW1lKCk7XFxyXFxuICAgICAgICAgICAgdGhpcy4kdmFsaWRhdG9yLnZhbGlkYXRlQWxsKCdjbG9zZXRpY2tldCcpLnRoZW4oYXN5bmMgKHZhbGlkKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgIGlmICh2YWxpZCkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBvcF9sb2FkZXIgPSB0aGlzLiRsb2FkaW5nLnNob3coe1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogdGhpcy4kcmVmcy52cHNfc3VibWl0X3BvcCxcXHJcXG4gICAgICAgICAgICAgICAgICAgIH0pO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtY2xvc2UucHV0KCcvYXBpL3RpY2tldC8nICsgdGhpcy5mb3JtY2xvc2UuaWQpXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN1Y2Nlc3MpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNjbG9zZW1vZGFsJykubW9kYWwoJ2hpZGUnKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHZhbGlkYXRvci5yZXNldCgpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtY2xvc2UucmVzZXQoKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UuZGF0YS5tZXNzYWdlXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBsb2FkX2ZpbGVzKHRoaXMuZm9ybWNsb3NlLmlkLCAnYWN0dWFsJylcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFRpY2tldHMoKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3BfbG9hZGVyLmhpZGUoKVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wX2xvYWRlci5oaWRlKClcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlcnIucmVzcG9uc2UuZGF0YSAhPSAndW5kZWZpbmVkJykge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0RXJyb3JzRnJvbVJlc3BvbnNlKGVyci5yZXNwb25zZS5kYXRhKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXFxyXFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZmZmZicpO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfSk7XFxyXFxuICAgICAgICB9LFxcclxcblxcclxcbiAgICAgICAgY2xvc2VNb2RhbCh0aWNrZXQpIHtcXHJcXG4gICAgICAgICAgICB0aGlzLiR2YWxpZGF0b3IucGF1c2UoKTtcXHJcXG4gICAgICAgICAgICAkKCcjY2xvc2Vtb2RhbCcpLm1vZGFsKCdzaG93Jyk7XFxyXFxuICAgICAgICAgICAgdGhpcy4kdmFsaWRhdG9yLnJlc2V0KCk7XFxyXFxuICAgICAgICAgICAgdGhpcy5mb3JtY2xvc2UucmVzZXQoKTtcXHJcXG4gICAgICAgICAgICB0aGlzLiRyZWZzLmZpbGVhY3R1YWxzZXJ2aWNlLnZhbHVlID0gbnVsbDtcXHJcXG4gICAgICAgICAgICB0aGlzLiRyZWZzLmZpbGVhY3R1YWxtYXRlcmlhbC52YWx1ZSA9IG51bGw7XFxyXFxuICAgICAgICAgICAgdGhpcy5wb3BfdGlja2V0ID0gdGlja2V0XFxyXFxuICAgICAgICAgICAgdGhpcy5wb3BfbWFjaGluZSA9IHRpY2tldC5tYWNoaW5lXFxyXFxuICAgICAgICAgICAgdGhpcy5mb3JtY2xvc2UuZmlsbCh0aWNrZXQpO1xcclxcbiAgICAgICAgICAgIHRoaXMuZm9ybWNsb3NlLmVkaXRfdHlwZSA9ICdjbG9zZXRpY2tldCdcXHJcXG4gICAgICAgICAgICB0aGlzLiR2YWxpZGF0b3IucmVzdW1lKCk7XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgZWRpdE1vZGFsKHRpY2tldCkge1xcclxcbiAgICAgICAgICAgIHRoaXMuZWRpdG1vZGUgPSB0cnVlO1xcclxcbiAgICAgICAgICAgIHRoaXMuJHZhbGlkYXRvci5wYXVzZSgpO1xcclxcbiAgICAgICAgICAgIHRoaXMuZm9ybS5yZXNldCgpO1xcclxcbiAgICAgICAgICAgIHRoaXMucG9wX3RpY2tldCA9IHRpY2tldFxcclxcbiAgICAgICAgICAgIGlmICh0aGlzLiRnYXRlLmlzQWRtaW4oKSkge1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLmZpbGVzZXJ2aWNlLnZhbHVlID0gbnVsbDtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5maWxlbWF0ZXJpYWwudmFsdWUgPSBudWxsO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB0aGlzLk1hdGVyaWFsQ29zdCA9IG51bGxcXHJcXG4gICAgICAgICAgICB0aGlzLlNlcnZpY2VDb3N0ID0gbnVsbFxcclxcbiAgICAgICAgICAgICQoJyNhZGROZXcnKS5tb2RhbCgnc2hvdycpO1xcclxcbiAgICAgICAgICAgIHRoaXMuZm9ybS5maWxsKHRpY2tldCk7XFxyXFxuICAgICAgICAgICAgdGhpcy5mb3JtLmxpa2VseV9kYXRlID0gdGlja2V0Lmxpa2VseV9kYXRlID8gbmV3IERhdGUodGlja2V0Lmxpa2VseV9kYXRlKS50b0lTT1N0cmluZygpIDogJydcXHJcXG4gICAgICAgICAgICB0aGlzLnN0YWdlcyA9IFtdXFxyXFxuICAgICAgICAgICAgaWYgKHRpY2tldC5zdGFnZXMgJiYgdGlja2V0LnN0YWdlcy5sZW5ndGggPiAwKSB7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhZ2VzID0gdGlja2V0LnN0YWdlc1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB0aGlzLiR2YWxpZGF0b3IucmVzdW1lKCk7XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgbmV3TW9kYWwoKSB7XFxyXFxuICAgICAgICAgICAgdGhpcy5zdGFnZXMgPSBbXVxcclxcbiAgICAgICAgICAgIHRoaXMuQWRkU3RhZ2UoKVxcclxcbiAgICAgICAgICAgIHRoaXMuZWRpdG1vZGUgPSBmYWxzZTtcXHJcXG4gICAgICAgICAgICB0aGlzLiR2YWxpZGF0b3IucmVzZXQoKTtcXHJcXG4gICAgICAgICAgICB0aGlzLiR2YWxpZGF0b3IucGF1c2UoKTtcXHJcXG4gICAgICAgICAgICB0aGlzLmZvcm0ucmVzZXQoKTtcXHJcXG4gICAgICAgICAgICBpZiAodGhpcy4kZ2F0ZS5pc0FkbWluKCkpIHtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5maWxlc2VydmljZS52YWx1ZSA9IG51bGw7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuZmlsZW1hdGVyaWFsLnZhbHVlID0gbnVsbDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgdGhpcy5NYXRlcmlhbENvc3QgPSBudWxsXFxyXFxuICAgICAgICAgICAgdGhpcy5TZXJ2aWNlQ29zdCA9IG51bGxcXHJcXG4gICAgICAgICAgICAkKCcjYWRkTmV3JykubW9kYWwoJ3Nob3cnKTtcXHJcXG4gICAgICAgICAgICB0aGlzLiR2YWxpZGF0b3IucmVzdW1lKCk7XFxyXFxuICAgICAgICB9LFxcclxcblxcclxcbiAgICAgICAgbG9hZFRpY2tldHMoKSB7XFxyXFxuICAgICAgICAgICAgLy8gaWYgKHRoaXMuJGdhdGUuaXNBZG1pbigpKSB7XFxyXFxuICAgICAgICAgICAgYXhpb3MuZ2V0KFxcXCIvYXBpL3RpY2tldFxcXCIsIHtcXHJcXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB0aGlzLnNlYXJjaFxcclxcbiAgICAgICAgICAgIH0pLnRoZW4oKHtcXHJcXG4gICAgICAgICAgICAgICAgZGF0YVxcclxcbiAgICAgICAgICAgIH0pID0+ICh0aGlzLlRpY2tldHMgPSBkYXRhLmRhdGEpKTtcXHJcXG4gICAgICAgICAgICAvLyAgIH1cXHJcXG4gICAgICAgIH0sXFxyXFxuXFxyXFxuICAgICAgICBhc3luYyB1cGxvYWRfZmlsZXMoaWQsIGlzYWN0dWFsID0gZmFsc2UpIHtcXHJcXG4gICAgICAgICAgICBsZXQgZmwgPSAwXFxyXFxuICAgICAgICAgICAgaWYgKHRoaXMuTWF0ZXJpYWxDb3N0KSB7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuTWF0ZXJpYWxDb3N0LmZvckVhY2goZmlsZSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB2YXIgZmQgPSBuZXcgRm9ybURhdGEoKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZkLmFwcGVuZChgZmlsZWAsIGZpbGUpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzYWN0dWFsKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZmQuYXBwZW5kKGBmaWxlX3R5cGVgLCAnQWN0dWFsIEVzdGltYXRlZCBNYXRlcmlhbCcpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBmZC5hcHBlbmQoYGZpbGVfdHlwZWAsICdFc3RpbWF0ZWQgTWF0ZXJpYWwnKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgIGZkLmFwcGVuZChgdGlja2V0X2lkYCwgaWQpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgYXhpb3MucG9zdCgnYXBpL3RpY2tldC9maWxlcycsIGZkKS50aGVuKChyZXMpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZ2FsbGVyeSB1cGxvYWRlZCcpXFxyXFxuICAgICAgICAgICAgICAgICAgICB9KVxcclxcbiAgICAgICAgICAgICAgICB9KTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgaWYgKHRoaXMuU2VydmljZUNvc3QpIHtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5TZXJ2aWNlQ29zdC5mb3JFYWNoKGZpbGUgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZkID0gbmV3IEZvcm1EYXRhKCk7XFxyXFxuICAgICAgICAgICAgICAgICAgICBmZC5hcHBlbmQoYGZpbGVgLCBmaWxlKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc2FjdHVhbCkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZkLmFwcGVuZChgZmlsZV90eXBlYCwgJ0FjdHVhbCBFc3RpbWF0ZWQgU2VydmljZScpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBmZC5hcHBlbmQoYGZpbGVfdHlwZWAsICdFc3RpbWF0ZWQgU2VydmljZScpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgZmQuYXBwZW5kKGB0aWNrZXRfaWRgLCBpZCk7XFxyXFxuICAgICAgICAgICAgICAgICAgICBheGlvcy5wb3N0KCdhcGkvdGlja2V0L2ZpbGVzJywgZmQpLnRoZW4oKHJlcykgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnYWxsZXJ5IHVwbG9hZGVkJylcXHJcXG4gICAgICAgICAgICAgICAgICAgIH0pXFxyXFxuICAgICAgICAgICAgICAgIH0pO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH0sXFxyXFxuXFxyXFxuICAgICAgICBhc3luYyB1cGxvYWRfc3RhZ2VzKGlkKSB7XFxyXFxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhZ2VzKSB7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhZ2VzLmZvckVhY2goc3RhZ2UgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZkID0gbmV3IEZvcm1EYXRhKCk7XFxyXFxuICAgICAgICAgICAgICAgICAgICBmZC5hcHBlbmQoYGlkYCwgc3RhZ2UuaWQpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgZmQuYXBwZW5kKGBzdGFnZV9ub2AsIHN0YWdlLnN0YWdlX25vKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZkLmFwcGVuZChgc3RhZ2VfZGF0ZWAsIHN0YWdlLnN0YWdlX2RhdGUpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgZmQuYXBwZW5kKGBkZXNjcmlwdGlvbmAsIHN0YWdlLmRlc2NyaXB0aW9uKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIC8vZmQuYXBwZW5kKGBuZXdfZmlsZWAsIHN0YWdlLm5ld19maWxlKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIC8vIGZkLmFwcGVuZChgZmlsZWAsIHN0YWdlLmZpbGUpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgZmQuYXBwZW5kKGB0aWNrZXRfaWRgLCBpZCk7XFxyXFxuICAgICAgICAgICAgICAgICAgICBheGlvcy5wb3N0KCdhcGkvdGlja2V0L3N0YWdlcycsIGZkKS50aGVuKChyZXMpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc3RhZ2VzIHVwbG9hZGVkJylcXHJcXG4gICAgICAgICAgICAgICAgICAgIH0pXFxyXFxuICAgICAgICAgICAgICAgIH0pO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH0sXFxyXFxuXFxyXFxuICAgICAgICBzdWJtaXRUaWNrZXQoKSB7XFxyXFxuICAgICAgICAgICAgdGhpcy4kdmFsaWRhdG9yLnZhbGlkYXRlQWxsKCkudGhlbihhc3luYyAodmFsaWQpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBsZXQgcG9wX2xvYWRlciA9IHRoaXMuJGxvYWRpbmcuc2hvdyh7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyOiB0aGlzLiRyZWZzLnZwc19zdWJtaXRfcG9wLFxcclxcbiAgICAgICAgICAgICAgICAgICAgfSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLmlkKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLnB1dCgnL2FwaS90aWNrZXQvJyArIHRoaXMuZm9ybS5pZClcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdWNjZXNzKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2FkZE5ldycpLm1vZGFsKCdoaWRlJyk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLmRhdGEubWVzc2FnZVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBsb2FkX3N0YWdlcyh0aGlzLmZvcm0uaWQpXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGxvYWRfZmlsZXModGhpcy5mb3JtLmlkKVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFRpY2tldHMoKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcF9sb2FkZXIuaGlkZSgpXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3BfbG9hZGVyLmhpZGUoKVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlcnIucmVzcG9uc2UuZGF0YSAhPSAndW5kZWZpbmVkJykge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHNldEVycm9yc0Zyb21SZXNwb25zZShlcnIucmVzcG9uc2UuZGF0YSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5wb3N0KCcvYXBpL3RpY2tldCcpXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3VjY2Vzcykge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNhZGROZXcnKS5tb2RhbCgnaGlkZScpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZS5kYXRhLm1lc3NhZ2VcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZF9maWxlcyhyZXNwb25zZS5kYXRhLmRhdGEuaWQpXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkVGlja2V0cygpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wX2xvYWRlci5oaWRlKClcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcF9sb2FkZXIuaGlkZSgpXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGVyci5yZXNwb25zZS5kYXRhICE9ICd1bmRlZmluZWQnKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0RXJyb3JzRnJvbVJlc3BvbnNlKGVyci5yZXNwb25zZS5kYXRhKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH0pO1xcclxcblxcclxcblxcclxcbiAgICAgICAgfSxcXHJcXG5cXHJcXG4gICAgICAgIGFzeW5jIGNoZWNrX2ZyZWVfc2VydmljZSgpIHtcXHJcXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZF9tYWNoaW5lKSB7XFxyXFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkX21hY2hpbmUuY29tcGxldGVkX2ZyZWVfc2VydmljZSA+PSB0aGlzLnNlbGVjdGVkX21hY2hpbmUuZnJlZV9zZXJ2aWNlX25vKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0uc2VydmljZV90eXBlID0gJ1BhaWQgU2VydmljZSc7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0uZnJlZV9zZXJ2aWNlX25vID0gJydcXHJcXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5mcmVlX3NlcnZpY2Vfbm8gPSAodGhpcy5zZWxlY3RlZF9tYWNoaW5lLmNvbXBsZXRlZF9mcmVlX3NlcnZpY2UgKyAxKVxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkX21hY2hpbmUgJiYgdGhpcy5zZWxlY3RlZF9tYWNoaW5lLm1hY2hpbmVfdHlwZSA9PSAnTmV3JyAmJiB0aGlzLmZvcm0uc2VydmljZV90eXBlID09ICdGcmVlIFNlcnZpY2UnKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAvLyAgdGhpcy5zZWxlY3RlZF9tYWNoaW5lLmZyZWVfc2VydmljZV9ub1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfSxcXHJcXG5cXHJcXG4gICAgICAgIGFzeW5jIGdldF9tYWNoaW5lKCkge1xcclxcbiAgICAgICAgICAgIGF4aW9zLmdldChcXFwiL2FwaS90aWNrZXRfbWFjaGluZVxcXCIsIHtcXHJcXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBzaXRlX2lkOiB0aGlzLmZvcm0uc2l0ZV9pZCxcXHJcXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5X2lkOiB0aGlzLmZvcm0uY2F0ZWdvcnlfaWQsXFxyXFxuICAgICAgICAgICAgICAgICAgICBzdWJfY2F0ZWdvcnlfaWQ6IHRoaXMuZm9ybS5zdWJfY2F0ZWdvcnlfaWQsXFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5tYWNoaW5lcyA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcXHJcXG4gICAgICAgICAgICB9KS5jYXRjaCgoKSA9PiBjb25zb2xlLndhcm4oJ09oLiBTb21ldGhpbmcgd2VudCB3cm9uZycpKTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgfSxcXHJcXG4gICAgbW91bnRlZCgpIHtcXHJcXG5cXHJcXG4gICAgfSxcXHJcXG4gICAgY3JlYXRlZCgpIHtcXHJcXG4gICAgICAgIHRoaXMubG9hZFRpY2tldHMoKTtcXHJcXG4gICAgfSxcXHJcXG4gICAgYmVmb3JlQ3JlYXRlKCkge1xcclxcbiAgICAgICAgYXhpb3MuZ2V0KFxcXCJhcGkvZ2V0X3ByZV9tYWNoaW5lXFxcIilcXHJcXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IHJlcy5kYXRhLmRhdGEuQ2F0ZWdvcnk7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuc2l0ZXMgPSByZXMuZGF0YS5kYXRhLnNpdGVzO1xcclxcbiAgICAgICAgICAgIH0pXFxyXFxuICAgICAgICBheGlvcy5nZXQoXFxcIi9hcGkvaW5pdGlhbF90aWNrZXRcXFwiKS50aGVuKHJlc3BvbnNlID0+IHtcXHJcXG4gICAgICAgICAgICB0aGlzLnVzZXJzID0gcmVzcG9uc2UuZGF0YS5kYXRhLnZlbmRvcnM7XFxyXFxuICAgICAgICAgICAgdGhpcy5tYWNoaW5lcyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5tYWNoaW5lcztcXHJcXG4gICAgICAgICAgICB0aGlzLnNlYXJjaF9tYWNoaW5lcyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5tYWNoaW5lcztcXHJcXG4gICAgICAgICAgICB0aGlzLnNlYXJjaF9zaXRlcyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5zaXRlcztcXHJcXG4gICAgICAgIH0pLmNhdGNoKCgpID0+IGNvbnNvbGUud2FybignT2guIFNvbWV0aGluZyB3ZW50IHdyb25nJykpO1xcclxcbiAgICB9LFxcclxcbiAgICB3YXRjaDoge1xcclxcbiAgICAgICAgYXN5bmMgJ2Zvcm0uc3ViX2NhdGVnb3J5X2lkJyhuLCBvKSB7XFxyXFxuICAgICAgICAgICAgaWYgKG4pIHtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRfbWFjaGluZSgpXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIGFzeW5jICdmb3JtLnNpdGVfaWQnKG4sIG8pIHtcXHJcXG4gICAgICAgICAgICBpZiAobikge1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLmdldF9tYWNoaW5lKClcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9LFxcclxcblxcclxcbiAgICAgICAgJ2Zvcm0uY2F0ZWdvcnlfaWQnOiB7XFxyXFxuICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKG4sIG8pIHtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgaWYgKG4pIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGF4aW9zLmdldChcXFwiYXBpL2NhdGVnb3J5L1xcXCIgKyBuKVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJfY2F0ZWdvcmllcyA9IHJlcy5kYXRhLmRhdGE7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0X21hY2hpbmUoKVxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICBkZWVwOiB0cnVlLFxcclxcbiAgICAgICAgICAgIGluaXRpYWw6IHRydWVcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBzdGFnZXM6IHtcXHJcXG4gICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbiAobiwgbykge1xcclxcbiAgICAgICAgICAgICAgICBpZiAobiAmJiBuLmxlbmd0aCA+IDApIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGxldCBsYSA9IG5bbi5sZW5ndGggLSAxXTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGlmIChsYS5zdGFnZV9ubylcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3Rfc3RhZ2VfaW5kZXggPSB0aGlzLm9wbl9zdGFnZS5pbmRleE9mKGxhLnN0YWdlX25vKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGlmIChsYS5zdGFnZV9kYXRlKVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdF9zdGFnZV9kYXRlID0gbmV3IERhdGUobGEuc3RhZ2VfZGF0ZSkudG9JU09TdHJpbmcoKTtcXHJcXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdF9zdGFnZV9pbmRleCA9IDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wb3BfdGlja2V0ICYmIHRoaXMucG9wX3RpY2tldC5jcmVhdGVkX2F0KSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0X3N0YWdlX2RhdGUgPSBuZXcgRGF0ZSh0aGlzLnBvcF90aWNrZXQuY3JlYXRlZF9hdCkudG9JU09TdHJpbmcoKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0X3N0YWdlX2RhdGUgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIGRlZXA6IHRydWUsXFxyXFxuICAgICAgICAgICAgaW5pdGlhbDogdHJ1ZSxcXHJcXG4gICAgICAgIH0sXFxyXFxuXFxyXFxuICAgICAgICBhc3luYyAnZm9ybS5tYWludGVuYW5jZV9wcm92aWRlcicobikge1xcclxcbiAgICAgICAgICAgIGlmIChuICE9ICd2ZW5kb3InKSB7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5zZXJ2aWNlX3R5cGUgPSAnUGFpZCBTZXJ2aWNlJ1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICBheGlvcy5nZXQoXFxcImFwaS91c2VyL2xpc3RcXFwiLCB7XFxyXFxuICAgICAgICAgICAgICAgIHBhcmFtczoge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogblxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfSlcXHJcXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VycyA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcXHJcXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKCkgPT4gY29uc29sZS53YXJuKCdPaC4gU29tZXRoaW5nIHdlbnQgd3JvbmcnKSk7XFxyXFxuICAgICAgICB9LFxcclxcblxcclxcbiAgICAgICAgYXN5bmMgJ2Zvcm0ubWFjaGluZV9pZCcobikge1xcclxcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRfbWFjaGluZSA9IHRoaXMubWFjaGluZXMuZmluZCh4ID0+IHguaWQgPT09IG4pO1xcclxcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuY2hlY2tfZnJlZV9zZXJ2aWNlKClcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBhc3luYyAnZm9ybS5zZXJ2aWNlX3R5cGUnKG4pIHtcXHJcXG4gICAgICAgICAgICBpZiAobiA9PSAnRnJlZSBTZXJ2aWNlJykge1xcclxcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmNoZWNrX2ZyZWVfc2VydmljZSgpXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICB9LFxcclxcbn1cXHJcXG48L3NjcmlwdD5cXHJcXG48c3R5bGU+XFxyXFxuLmJzIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzgwODA4MGE4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJzZWN0aW9uXCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lci1mbHVpZFwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0xMlwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtaGVhZGVyXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZVwiIH0sIFtfdm0uX3YoXCJUaWNrZXQgTGlzdFwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdG9vbHNcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXNtIGJ0bi1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5uZXdNb2RhbCB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1wbHVzLXNxdWFyZVwiIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBOZXdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5IHAtMlwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgYXV0b2NvbXBsZXRlOiBcIm9mZlwiIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5nZXRSZXN1bHRzKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLXJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2V0LW9wdGlvbi1sYWJlbFwiOiBfdm0uZ2V0TGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkdWNlOiBmdW5jdGlvbihvcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24uaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5zZWFyY2hfbWFjaGluZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRW50ZXIgbWFjaGluZXMgLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtYWNoaW5lX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaC5tYWNoaW5lX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZWFyY2gsIFwibWFjaGluZV9pZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaC5tYWNoaW5lX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwic2l0ZV9uYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkdWNlOiBmdW5jdGlvbihvcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24uaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5zZWFyY2hfc2l0ZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiU2VsZWN0IFNpdGUuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNpdGVfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoLnNpdGVfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNlYXJjaCwgXCJzaXRlX2lkXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoLnNpdGVfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJzaXRlX25hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBbXCJPcGVuXCIsIFwiQ2xvc2VkXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlNlbGVjdCBTdGF0dXMuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInN0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2guc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZWFyY2gsIFwic3RhdHVzXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoLnN0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJTZWFyY2hcIildXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtYm9keSB0YWJsZS1yZXNwb25zaXZlIHAtMFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJ0YWJsZVwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlIHRhYmxlLWhvdmVyXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5UaWNrZXRzLmRhdGEsIGZ1bmN0aW9uKHRpY2tldCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCB7IGtleTogdGlja2V0LmlkIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHRpY2tldC50aWNrZXRfbm8pKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2FwaXRhbGl6ZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3ModGlja2V0Lm1hY2hpbmUubmFtZSkpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHRpY2tldC5tYWNoaW5lLmZhcl9ubykpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHRpY2tldC5zaXRlID8gdGlja2V0LnNpdGUuc2l0ZV9uYW1lIDogXCItXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHRpY2tldC5jcmVhdGVkX2J5X25hbWUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5fZihcIm15RGF0ZVwiKSh0aWNrZXQuY3JlYXRlZF9hdCkpKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5fZihcIm15RGF0ZVwiKSh0aWNrZXQubGlrZWx5X2RhdGUpKSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3ModGlja2V0LnN0YXR1cykgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4td2FybmluZyBidG4tc21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiamF2YXNjcmlwdDp2b2lkKDApO1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS52aWV3TW9kYWwodGlja2V0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWaWV3XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrZXQuc3RhdHVzICE9IFwiQ2xvc2VkXCIgJiYgX3ZtLiRnYXRlLmlzQWRtaW4oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2VzcyBidG4tc21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0bzogXCIvdGlja2V0L1wiICsgdGlja2V0LmlkIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkVkaXRcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja2V0LnN0YXR1cyAhPSBcIkNsb3NlZFwiICYmIF92bS4kZ2F0ZS5pc0FkbWluKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGFuZ2VyIGJ0bi1zbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOiBcImphdmFzY3JpcHQ6dm9pZCgwKTtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkNsb3NlIHRpY2tldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNsb3NlTW9kYWwodGlja2V0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDbG9zZVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1mb290ZXJcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJwYWdpbmF0aW9uXCIsIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGRhdGE6IF92bS5UaWNrZXRzIH0sXG4gICAgICAgICAgICAgICAgICBvbjogeyBcInBhZ2luYXRpb24tY2hhbmdlLXBhZ2VcIjogX3ZtLmdldFJlc3VsdHMgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibW9kYWwgZmFkZVwiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGlkOiBcImNsb3NlbW9kYWxcIixcbiAgICAgICAgICB0YWJpbmRleDogXCItMVwiLFxuICAgICAgICAgIHJvbGU6IFwiZGlhbG9nXCIsXG4gICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogXCJjbG9zZW1vZGFsXCIsXG4gICAgICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtZGlhbG9nIG1vZGFsLWxnXCIsIGF0dHJzOiB7IHJvbGU6IFwiZG9jdW1lbnRcIiB9IH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX20oMSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZm9ybVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiZGF0YS12di1zY29wZVwiOiBcImNsb3NldGlja2V0XCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnN1Ym1pdENsb3NlVGlja2V0KClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1ib2R5XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ucG9wX3RpY2tldCAmJiBfdm0ucG9wX3RpY2tldC5saWtlbHlfZGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC02XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIkFjdHVhbCBEYXRlXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGF0ZXRpbWVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzLWludmFsaWRcIjogX3ZtLnZlcnJvcnMuaGFzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsb3NldGlja2V0LmFjdHVhbF9kYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlLXpvbmVcIjogXCJBc2lhL0tvbGthdGFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiYWN0dWFsX2RhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW5wdXQtY2xhc3NcIjogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1hc1wiOiBcIkFjdHVhbCBEYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1pbi1kYXRldGltZVwiOiBuZXcgRGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXQuY3JlYXRlZF9hdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS50b0lTT1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXgtZGF0ZXRpbWVcIjogbmV3IERhdGUoKS50b0lTT1N0cmluZygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtY2xvc2UuYWN0dWFsX2RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb3JtY2xvc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhY3R1YWxfZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtY2xvc2UuYWN0dWFsX2RhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcImNsb3NldGlja2V0LmFjdHVhbF9kYXRlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWxwLWJsb2NrIGludmFsaWQtZmVlZGJhY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5maXJzdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsb3NldGlja2V0LmFjdHVhbF9kYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTZcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIk1hY2hpbmUgU3RhdHVzXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybWNsb3NlLm1hY2hpbmVfc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybWNsb3NlLm1hY2hpbmVfc3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXMtaW52YWxpZFwiOiBfdm0udmVycm9ycy5oYXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbG9zZXRpY2tldC5tYWNoaW5lX3N0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1hY2hpbmVfc3RhdHVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1hc1wiOiBcIm1hY2hpbmUgc3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLCBmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZvcm1jbG9zZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWFjaGluZV9zdGF0dXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQubXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAkJHNlbGVjdGVkVmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCJSdW5uaW5nXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlJ1bm5pbmdcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHZhbHVlOiBcIlJ1bm5pbmcgd2l0aCBQcm9ibGVtXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiUnVubmluZyB3aXRoIFByb2JsZW1cIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJjbG9zZXRpY2tldC5tYWNoaW5lX3N0YXR1c1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuZmlyc3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbG9zZXRpY2tldC5tYWNoaW5lX3N0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtNFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiRXN0aW1hdGVkIE1hdGVyaWFsIGNvc3RcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBvcF90aWNrZXQuZXN0aW1hdGVkX21hdGVyaWFsX2Nvc3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicG9wX3RpY2tldC5lc3RpbWF0ZWRfbWF0ZXJpYWxfY29zdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcmVhZG9ubHk6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wb3BfdGlja2V0LmVzdGltYXRlZF9tYXRlcmlhbF9jb3N0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucG9wX3RpY2tldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImVzdGltYXRlZF9tYXRlcmlhbF9jb3N0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIkFjdHVhbCBNYXRlcmlhbCBjb3N0XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtY2xvc2UuYWN0dWFsX21hdGVyaWFsX2Nvc3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybWNsb3NlLmFjdHVhbF9tYXRlcmlhbF9jb3N0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpcy1pbnZhbGlkXCI6IF92bS52ZXJyb3JzLmhhcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbG9zZXRpY2tldC5hY3R1YWxfbWF0ZXJpYWxfY29zdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImFjdHVhbF9tYXRlcmlhbF9jb3N0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtYXNcIjogXCJBY3R1YWwgTWF0ZXJpYWwgY29zdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtY2xvc2UuYWN0dWFsX21hdGVyaWFsX2Nvc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb3JtY2xvc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhY3R1YWxfbWF0ZXJpYWxfY29zdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcImNsb3NldGlja2V0LmFjdHVhbF9tYXRlcmlhbF9jb3N0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJoZWxwLWJsb2NrIGludmFsaWQtZmVlZGJhY2tcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuZmlyc3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsb3NldGlja2V0LmFjdHVhbF9tYXRlcmlhbF9jb3N0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtNFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiIEFjdHVhbCBNYXRlcmlhbCBjb3N0IEZpbGVcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCInJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwiZmlsZWFjdHVhbG1hdGVyaWFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXMtaW52YWxpZFwiOiBfdm0udmVycm9ycy5oYXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xvc2V0aWNrZXQubWF0ZXJpYWxfY29zdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJmaWxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibWF0ZXJpYWxfY29zdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LWFzXCI6IFwiQWN0dWFsIE1hdGVyaWFsIGNvc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2hhbmdlOiBfdm0udXBsb2FkTWF0ZXJpYWxDb3N0IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3BfdGlja2V0LmFjdHVhbF9lc3RpbWF0ZWRfbWF0ZXJpYWxfZmlsZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNsZWFyZml4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3BfdGlja2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWN0dWFsX2VzdGltYXRlZF9tYXRlcmlhbF9maWxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbihpdGVtLCB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpdGVtLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOiBpdGVtLmZpbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlZpZXdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3BfdGlja2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWN0dWFsX2VzdGltYXRlZF9tYXRlcmlhbF9maWxlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmxlbmd0aCA+IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8geCArIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuaGFzKFwiY2xvc2V0aWNrZXQubWF0ZXJpYWxfY29zdFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmZpcnN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbG9zZXRpY2tldC5tYXRlcmlhbF9jb3N0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtNFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiRXN0aW1hdGVkIFNlcnZpY2UgY29zdFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucG9wX3RpY2tldC5lc3RpbWF0ZWRfc2VydmljZV9jb3N0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBvcF90aWNrZXQuZXN0aW1hdGVkX3NlcnZpY2VfY29zdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcmVhZG9ubHk6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wb3BfdGlja2V0LmVzdGltYXRlZF9zZXJ2aWNlX2Nvc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3BfdGlja2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXN0aW1hdGVkX3NlcnZpY2VfY29zdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC00XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJBY3R1YWwgU2VydmljZSBjb3N0XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtY2xvc2UuYWN0dWFsX3NlcnZpY2VfY29zdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtY2xvc2UuYWN0dWFsX3NlcnZpY2VfY29zdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXMtaW52YWxpZFwiOiBfdm0udmVycm9ycy5oYXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xvc2V0aWNrZXQuYWN0dWFsX3NlcnZpY2VfY29zdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImFjdHVhbF9zZXJ2aWNlX2Nvc3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1hc1wiOiBcIkFjdHVhbCBTZXJ2aWNlIGNvc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybWNsb3NlLmFjdHVhbF9zZXJ2aWNlX2Nvc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb3JtY2xvc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhY3R1YWxfc2VydmljZV9jb3N0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuaGFzKFwiY2xvc2V0aWNrZXQuYWN0dWFsX3NlcnZpY2VfY29zdFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmZpcnN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbG9zZXRpY2tldC5hY3R1YWxfc2VydmljZV9jb3N0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtNFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiIEFjdHVhbCBTZXJ2aWNlIGNvc3QgRmlsZSBcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCInJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwiZmlsZWFjdHVhbHNlcnZpY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpcy1pbnZhbGlkXCI6IF92bS52ZXJyb3JzLmhhcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbG9zZXRpY2tldC5zZXJ2aWNlX2Nvc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZmlsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNlcnZpY2VfY29zdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LWFzXCI6IFwiQWN0dWFsIFNlcnZpY2UgY29zdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjaGFuZ2U6IF92bS51cGxvYWRTZXJ2aWNlQ29zdCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucG9wX3RpY2tldC5hY3R1YWxfZXN0aW1hdGVkX3NlcnZpY2VfZmlsZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNsZWFyZml4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3BfdGlja2V0LmFjdHVhbF9lc3RpbWF0ZWRfc2VydmljZV9maWxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbihpdGVtLCB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpdGVtLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOiBpdGVtLmZpbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlZpZXdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3BfdGlja2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWN0dWFsX2VzdGltYXRlZF9zZXJ2aWNlX2ZpbGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubGVuZ3RoID4gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB4ICsgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5oYXMoXCJjbG9zZXRpY2tldC5zZXJ2aWNlX2Nvc3RcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5maXJzdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xvc2V0aWNrZXQuc2VydmljZV9jb3N0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF9tYWNoaW5lLmlzX2NvbnN1bXRpb25faHJfcnVuXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTZcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiQ3VycmVudCBSdW4gaG91ciBcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtY2xvc2UuY3VycmVudF9ydW5faG91cixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybWNsb3NlLmN1cnJlbnRfcnVuX2hvdXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbDogMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluX3ZhbHVlOiBfdm0ucG9wX21hY2hpbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubGFzdF9tYWludGVuYW5jZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF92bS5wb3BfbWFjaGluZS5sYXN0X21haW50ZW5hbmNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucnVuX2hvdXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5wb3BfbWFjaGluZS5sYXN0X2hyX3J1blxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwieyByZXF1aXJlZDogdHJ1ZSwgZGVjaW1hbDogMiwgbWluX3ZhbHVlOiBwb3BfbWFjaGluZS5sYXN0X21haW50ZW5hbmNlcyA/IHBvcF9tYWNoaW5lLmxhc3RfbWFpbnRlbmFuY2VzLnJ1bl9ob3VyIDogcG9wX21hY2hpbmUubGFzdF9ocl9ydW4gfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzLWludmFsaWRcIjogX3ZtLnZlcnJvcnMuaGFzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbG9zZXRpY2tldC5jdXJyZW50X3J1bl9ob3VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJjdXJyZW50X3J1bl9ob3VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LWFzXCI6IFwiQ3VycmVudCBSdW4gaG91clwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtY2xvc2UuY3VycmVudF9ydW5faG91clxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybWNsb3NlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImN1cnJlbnRfcnVuX2hvdXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuaGFzKFwiY2xvc2V0aWNrZXQuY3VycmVudF9ydW5faG91clwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmZpcnN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xvc2V0aWNrZXQuY3VycmVudF9ydW5faG91clwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF9tYWNoaW5lLmlzX2NvbnN1bXRpb25fa21fcnVuXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTZcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiIEN1cnJlbnQgS00gUnVuIFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm1jbG9zZS5jdXJyZW50X2ttX3J1bixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybWNsb3NlLmN1cnJlbnRfa21fcnVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWw6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbl92YWx1ZTogX3ZtLnBvcF9tYWNoaW5lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmxhc3RfbWFpbnRlbmFuY2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfdm0ucG9wX21hY2hpbmUubGFzdF9tYWludGVuYW5jZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmttX3J1blxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLnBvcF9tYWNoaW5lLmxhc3Rfa21fcnVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ7IHJlcXVpcmVkOiB0cnVlLCBkZWNpbWFsOiAyLCBtaW5fdmFsdWU6IHBvcF9tYWNoaW5lLmxhc3RfbWFpbnRlbmFuY2VzID8gcG9wX21hY2hpbmUubGFzdF9tYWludGVuYW5jZXMua21fcnVuIDogcG9wX21hY2hpbmUubGFzdF9rbV9ydW4gfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzLWludmFsaWRcIjogX3ZtLnZlcnJvcnMuaGFzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbG9zZXRpY2tldC5jdXJyZW50X2ttX3J1blwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiY3VycmVudF9rbV9ydW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtYXNcIjogXCJDdXJyZW50IEtNIGhvdXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybWNsb3NlLmN1cnJlbnRfa21fcnVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb3JtY2xvc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY3VycmVudF9rbV9ydW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuaGFzKFwiY2xvc2V0aWNrZXQuY3VycmVudF9rbV9ydW5cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuZmlyc3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xvc2V0aWNrZXQuY3VycmVudF9rbV9ydW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF9tYWNoaW5lLmlzX3Byb2R1Y3Rpb25fZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTZcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiIEN1cnJlbnQgUHJvZHVjdGlvbiBmaWcgXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybWNsb3NlLmN1cnJlbnRfcHJvZHVjdGlvbl9maWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvcm1jbG9zZS5jdXJyZW50X3Byb2R1Y3Rpb25fZmlnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWw6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbl92YWx1ZTogX3ZtLnBvcF9tYWNoaW5lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmxhc3RfbWFpbnRlbmFuY2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfdm0ucG9wX21hY2hpbmUubGFzdF9tYWludGVuYW5jZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3Rpb25fZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0ucG9wX21hY2hpbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnBlcmlvZGljX21haW50ZW5hbmNlX2JyZWFrZG93blxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwieyByZXF1aXJlZDogdHJ1ZSwgZGVjaW1hbDogMiwgbWluX3ZhbHVlOiBwb3BfbWFjaGluZS5sYXN0X21haW50ZW5hbmNlcyA/IHBvcF9tYWNoaW5lLmxhc3RfbWFpbnRlbmFuY2VzLnByb2R1Y3Rpb25fZmlnIDogcG9wX21hY2hpbmUucGVyaW9kaWNfbWFpbnRlbmFuY2VfYnJlYWtkb3duIH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpcy1pbnZhbGlkXCI6IF92bS52ZXJyb3JzLmhhcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xvc2V0aWNrZXQuY3VycmVudF9wcm9kdWN0aW9uX2ZpZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiY3VycmVudF9wcm9kdWN0aW9uX2ZpZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1hc1wiOiBcIkN1cnJlbnQgUHJvZHVjdGlvbiBmaWdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybWNsb3NlLmN1cnJlbnRfcHJvZHVjdGlvbl9maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZvcm1jbG9zZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjdXJyZW50X3Byb2R1Y3Rpb25fZmlnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbG9zZXRpY2tldC5jdXJyZW50X3Byb2R1Y3Rpb25fZmlnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuZmlyc3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xvc2V0aWNrZXQuY3VycmVudF9wcm9kdWN0aW9uX2ZpZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybWNsb3NlLnRpY2tldF90eXBlID09IFwiQnJlYWtkb3duIE1haW50ZW5hbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtNlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJQcm9kdWN0aW9uIExvc3NcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtY2xvc2UucHJvZHVjdGlvbl9sb3NzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtY2xvc2UucHJvZHVjdGlvbl9sb3NzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzLWludmFsaWRcIjogX3ZtLnZlcnJvcnMuaGFzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbG9zZXRpY2tldC5wcm9kdWN0aW9uX2xvc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInByb2R1Y3Rpb25fbG9zc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1hc1wiOiBcIlByb2R1Y3Rpb24gTG9zc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtY2xvc2UucHJvZHVjdGlvbl9sb3NzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb3JtY2xvc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvZHVjdGlvbl9sb3NzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmhhcyhcImNsb3NldGlja2V0LnByb2R1Y3Rpb25fbG9zc1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52ZXJyb3JzLmZpcnN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xvc2V0aWNrZXQucHJvZHVjdGlvbl9sb3NzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybWNsb3NlLnRpY2tldF90eXBlID09IFwiQnJlYWtkb3duIE1haW50ZW5hbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtNlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJQcm9kdWN0aW9uIGxvc3MgYW1vdW50XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybWNsb3NlLnByb2R1Y3Rpb25fbG9zc19hbW91bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvcm1jbG9zZS5wcm9kdWN0aW9uX2xvc3NfYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzLWludmFsaWRcIjogX3ZtLnZlcnJvcnMuaGFzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbG9zZXRpY2tldC5wcm9kdWN0aW9uX2xvc3NfYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJwcm9kdWN0aW9uX2xvc3NfYW1vdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LWFzXCI6IFwiQ3VycmVudCBQcm9kdWN0aW9uIGZpZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtY2xvc2UucHJvZHVjdGlvbl9sb3NzX2Ftb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybWNsb3NlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByb2R1Y3Rpb25fbG9zc19hbW91bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZlcnJvcnMuaGFzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsb3NldGlja2V0LnByb2R1Y3Rpb25fbG9zc19hbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmVycm9ycy5maXJzdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbG9zZXRpY2tldC5wcm9kdWN0aW9uX2xvc3NfYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl9tKDIpXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsIGZhZGVcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBpZDogXCJ2aWV3bW9kYWxcIixcbiAgICAgICAgICB0YWJpbmRleDogXCItMVwiLFxuICAgICAgICAgIHJvbGU6IFwiZGlhbG9nXCIsXG4gICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogXCJ2aWV3bW9kYWxcIixcbiAgICAgICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1kaWFsb2cgbW9kYWwtbGdcIiwgYXR0cnM6IHsgcm9sZTogXCJkb2N1bWVudFwiIH0gfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWNvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fbSgzKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXRcbiAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtYm9keVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtNCBic1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiTWFjaGluZSBTaXRlXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcInNpdGVfbmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWR1Y2U6IGZ1bmN0aW9uKG9wdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24uaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLnNpdGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJDaG9vc2UgU2l0ZSAuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBvcF90aWNrZXQuc2l0ZV9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5wb3BfdGlja2V0LCBcInNpdGVfaWRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBvcF90aWNrZXQuc2l0ZV9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtNCBic1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiTWFjaGluZSBDYXRlZ29yeVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZHVjZTogZnVuY3Rpb24ob3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0uY2F0ZWdvcmllcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiQ2hvb3NlIENhdGVnb3J5IC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucG9wX3RpY2tldC5jYXRlZ29yeV9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5wb3BfdGlja2V0LCBcImNhdGVnb3J5X2lkXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwb3BfdGlja2V0LmNhdGVnb3J5X2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC00IGJzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJNYWNoaW5lIERlc2NyaXB0aW9uXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkdWNlOiBmdW5jdGlvbihvcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5zdWJfY2F0ZWdvcmllcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiQ2hvb3NlIGRlc2NyaXB0aW9uIC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInN1Yl9jYXRlZ29yeV9pZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogX3ZtLnBvcF90aWNrZXQuaWQgIT0gXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucG9wX3RpY2tldC5zdWJfY2F0ZWdvcnlfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3BfdGlja2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdWJfY2F0ZWdvcnlfaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwb3BfdGlja2V0LnN1Yl9jYXRlZ29yeV9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtNCBic1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiIE1hY2hpbmUgOiBcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnBvcF90aWNrZXQubWFjaGluZS5mYXJfbm8pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucG9wX3RpY2tldC5tYWNoaW5lLm5hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC00IGJzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJNYWludGVuYW5jZSBQcm92aWRlclwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucG9wX3RpY2tldC5tYWludGVuYW5jZV9wcm92aWRlcikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTQgYnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXQubWFpbnRlbmFuY2VfcHJvdmlkZXIgPT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1c2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInVzZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwidmVuZG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3BfdGlja2V0Lm1haW50ZW5hbmNlX3Byb3ZpZGVyID09IFwidmVuZG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFpbnRlbmFuY2VfcHJvdmlkZXIgPT0gXCJ2ZW5kb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInsgcmVxdWlyZWQ6IHBvcF90aWNrZXQubWFpbnRlbmFuY2VfcHJvdmlkZXIgPT0gJ3ZlbmRvcicgPyB0cnVlIDogZmFsc2UgfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZHVjZTogZnVuY3Rpb24ob3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0udXNlcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkVudGVyIHVzZXJzIC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucG9wX3RpY2tldC52ZW5kb3JfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3BfdGlja2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZW5kb3JfaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwb3BfdGlja2V0LnZlbmRvcl9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZHVjZTogZnVuY3Rpb24ob3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0udXNlcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkVudGVyIHVzZXJzIC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucG9wX3RpY2tldC51c2VyX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnBvcF90aWNrZXQsIFwidXNlcl9pZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicG9wX3RpY2tldC51c2VyX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3BfdGlja2V0Lm1haW50ZW5hbmNlX3Byb3ZpZGVyID09IFwidmVuZG9yXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ucG9wX3RpY2tldC5zZXJ2aWNlX3R5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtNiBic1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJTZXJ2aWNlIFR5cGVcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnBvcF90aWNrZXQuc2VydmljZV90eXBlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3BfdGlja2V0LnNlcnZpY2VfdHlwZSA9PSBcIkZyZWUgU2VydmljZVwiICYmXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXQuZnJlZV9zZXJ2aWNlX25vXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTYgYnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiRnJlZSBzZXJ2aWNlIG5vOlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucG9wX3RpY2tldC5mcmVlX3NlcnZpY2Vfbm8pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXQubWFjaGluZS5mcmVlX3NlcnZpY2Vfbm9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXQudGlja2V0X3R5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtNiBic1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJUaWNrZXQgVHlwZVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucG9wX3RpY2tldC50aWNrZXRfdHlwZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ucG9wX3RpY2tldC5lc3RpbWF0ZWRfbWF0ZXJpYWxfY29zdFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0zIGJzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIkVzdGltYXRlZCBNYXRlcmlhbCBjb3N0XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9mKFwidG9DdXJyZW5jeVwiKShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXQuZXN0aW1hdGVkX21hdGVyaWFsX2Nvc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucG9wX3RpY2tldC5lc3RpbWF0ZWRfbWF0ZXJpYWxfZmlsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oZmlsZSwgeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZmlsZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogZmlsZS5maWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBcIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJWaWV3XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3BfdGlja2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZXN0aW1hdGVkX21hdGVyaWFsX2ZpbGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubGVuZ3RoID4gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB4ICsgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3BfdGlja2V0LmVzdGltYXRlZF9zZXJ2aWNlX2Nvc3RcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMyBic1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiRXN0aW1hdGVkIFNlcnZpY2UgY29zdCA6IFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9mKFwidG9DdXJyZW5jeVwiKShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXQuZXN0aW1hdGVkX3NlcnZpY2VfY29zdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3BfdGlja2V0LmVzdGltYXRlZF9zZXJ2aWNlX2ZpbGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKGZpbGUsIHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGZpbGUuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IGZpbGUuZmlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogXCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVmlld1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucG9wX3RpY2tldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmVzdGltYXRlZF9zZXJ2aWNlX2ZpbGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubGVuZ3RoID4gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB4ICsgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTMgYnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIkFjdHVhbCBNYXRlcmlhbCBDb3N0IDogXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3BfdGlja2V0LmFjdHVhbF9tYXRlcmlhbF9jb3N0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2YoXCJ0b0N1cnJlbmN5XCIpKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3BfdGlja2V0LmFjdHVhbF9tYXRlcmlhbF9jb3N0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucG9wX3RpY2tldC5hY3R1YWxfZXN0aW1hdGVkX21hdGVyaWFsX2ZpbGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oZmlsZSwgeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWxlLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogZmlsZS5maWxlLCB0YXJnZXQ6IFwiX2JsYW5rXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlZpZXdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3BfdGlja2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hY3R1YWxfZXN0aW1hdGVkX21hdGVyaWFsX2ZpbGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5sZW5ndGggPiAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8geCArIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMyBic1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiQWN0dWFsIFNlcnZpY2UgQ29zdCA6IFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucG9wX3RpY2tldC5hY3R1YWxfc2VydmljZV9jb3N0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9mKFwidG9DdXJyZW5jeVwiKShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXQuYWN0dWFsX3NlcnZpY2VfY29zdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucG9wX3RpY2tldC5hY3R1YWxfZXN0aW1hdGVkX3NlcnZpY2VfZmlsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbihmaWxlLCB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGZpbGUuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBmaWxlLmZpbGUsIHRhcmdldDogXCJfYmxhbmtcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVmlldyBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFjdHVhbF9lc3RpbWF0ZWRfc2VydmljZV9maWxlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubGVuZ3RoID4gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHggKyAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTQgYnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIlRpY2tldCBObyA6IFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucG9wX3RpY2tldC50aWNrZXRfbm8pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC00IGJzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJMaWtlbHkgRGF0ZSA6IFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9mKFwibXlEYXRlXCIpKF92bS5wb3BfdGlja2V0Lmxpa2VseV9kYXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtNCBic1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiQWN0dWFsIERhdGUgOiBcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fZihcIm15RGF0ZVwiKShfdm0ucG9wX3RpY2tldC5hY3R1YWxfZGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3BfdGlja2V0LmN1cnJlbnRfcnVuX2hvdXJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtNCBic1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJDdXJyZW50IFJ1biBIb3VyIDogXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5wb3BfdGlja2V0LmN1cnJlbnRfcnVuX2hvdXIpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXQuY3VycmVudF9rbV9ydW5cbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtNCBic1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJDdXJyZW50IEtNIEhvdXIgOiBcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnBvcF90aWNrZXQuY3VycmVudF9rbV9ydW4pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXQuY3VycmVudF9wcm9kdWN0aW9uX2ZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC00IGJzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJDdXJyZW50IFByb2R1Y3Rpb24gRmlnIDogXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucG9wX3RpY2tldC5jdXJyZW50X3Byb2R1Y3Rpb25fZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3BfdGlja2V0LnByb2R1Y3Rpb25fbG9zc1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC00IGJzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIlByb2R1Y3Rpb24gTG9zcyA6IFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucG9wX3RpY2tldC5wcm9kdWN0aW9uX2xvc3MpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcF90aWNrZXQucHJvZHVjdGlvbl9sb3NzX2Ftb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC00IGJzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJQcm9kdWN0aW9uIExvc3MgQW1vdW50IDogXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2YoXCJ0b0N1cnJlbmN5XCIpKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucG9wX3RpY2tldC5wcm9kdWN0aW9uX2xvc3NfYW1vdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidGhlYWRcIiwgW1xuICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlRpY2tldCBObyBcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiTWFjaGluZSBOYW1lXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIk1hY2hpbmUgRmFyIE5vXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlNpdGVcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiQ3JlYXRlZCBCeVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJDcmVhdGVkIERhdGVcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiRXhwZWN0ZWQgZGF0ZVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJUaWNrZXQgU3RhdHVzXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkFjdGlvblwiKV0pXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtaGVhZGVyXCIgfSwgW1xuICAgICAgX2MoXCJoNVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLXRpdGxlXCIgfSwgW192bS5fdihcIkNsb3NlIFRpY2tldFwiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2xvc2VcIixcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgIFwiZGF0YS1kaXNtaXNzXCI6IFwibW9kYWxcIixcbiAgICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiBcIkNsb3NlXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfYyhcInNwYW5cIiwgeyBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0gfSwgW192bS5fdihcIsOXXCIpXSldXG4gICAgICApXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1mb290ZXJcIiB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc2Vjb25kYXJ5XCIsXG4gICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiwgXCJkYXRhLWRpc21pc3NcIjogXCJtb2RhbFwiIH1cbiAgICAgICAgfSxcbiAgICAgICAgW192bS5fdihcIkNsb3NlXCIpXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnlcIiwgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiB9IH0sXG4gICAgICAgIFtfdm0uX3YoXCJDbG9zZSBUaWNrZXRcIildXG4gICAgICApXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1oZWFkZXJcIiB9LCBbXG4gICAgICBfYyhcImg1XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtdGl0bGVcIiB9LCBbX3ZtLl92KFwiVmlldyBUaWNrZXRcIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNsb3NlXCIsXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICBcImRhdGEtZGlzbWlzc1wiOiBcIm1vZGFsXCIsXG4gICAgICAgICAgICBcImFyaWEtbGFiZWxcIjogXCJDbG9zZVwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbX2MoXCJzcGFuXCIsIHsgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9IH0sIFtfdm0uX3YoXCLDl1wiKV0pXVxuICAgICAgKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0wMzQxY2RkNlwiLCB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9KVxuICB9XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwidnVlXFxcIjp0cnVlLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vaW5kZXgudnVlXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjc1NjY5NDhmXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKGNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwidnVlXFxcIjp0cnVlLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vaW5kZXgudnVlXCIpXG59XG4vKiBzY3JpcHQgKi9cbmV4cG9ydCAqIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiXG5pbXBvcnQgX192dWVfc2NyaXB0X18gZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vaW5kZXgudnVlXCJcbi8qIHRlbXBsYXRlICovXG5pbXBvcnQge3JlbmRlciBhcyBfX3Z1ZV9yZW5kZXJfXywgc3RhdGljUmVuZGVyRm5zIGFzIF9fdnVlX3N0YXRpY19yZW5kZXJfZm5zX199IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTAzNDFjZGQ2XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxuaW1wb3J0IG5vcm1hbGl6ZUNvbXBvbmVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudC1ub3JtYWxpemVyXCJcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV9yZW5kZXJfXyxcbiAgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxqc1xcXFxjb21wb25lbnRzXFxcXFRpY2tldHNcXFxcaW5kZXgudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTAzNDFjZGQ2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMDM0MWNkZDZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQuZXhwb3J0c1xuIl0sInNvdXJjZVJvb3QiOiIifQ==