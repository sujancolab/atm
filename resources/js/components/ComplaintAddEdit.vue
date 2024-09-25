<template>
    <section class="content">
       <form @submit.prevent="submit_machine()" class="form-horizontal" enctype="multipart/form-data">
          <div class="container-fluid">
             <div class="row">
                <div class="col-md-12">
                   <div class="card">
                      <div class="card-header">
                         <h3 class="card-title">{{ form.id ? 'Update' : 'Add' }} Machine</h3>
                      </div><!-- /.card-header -->
                      <div class="card-body">

                         <div class="row">



                            <div class="col-12">
                               <div class="form-group">
                                  <label>Select ATM ID *</label>
                                  <v-select label="atm_id" :reduce="(option) => option.id" :options="atms"
                                     placeholder="Choose Atm ..." v-model="form.atm_id" v-validate="'required'"
                                     :class="{ 'is-invalid': verrors.has('atm_id') }" data-vv-name="atm_id"
                                     class="required">
                                  </v-select>
                                  <div v-if="verrors.has('atm_id')" class="help-block invalid-feedback">
                                     {{ verrors.first('atm_id') }}
                                  </div>
                               </div>
                            </div>
                            <div class="col-12">
                               <div class="form-group">
                                  <label>Call Type *</label>
                                  <v-select label="title" :reduce="(option) => option.id" :options="complaint_system_types"
                                     placeholder="Choose Call Type ..." v-model="form.complaint_system_type_id" v-validate="'required'"
                                     :class="{ 'is-invalid': verrors.has('complaint_system_type_id') }" data-vv-name="title"
                                     class="required">
                                  </v-select>
                                  <div v-if="verrors.has('complaint_system_type_id')" class="help-block invalid-feedback">
                                     {{ verrors.first('complaint_system_type_id') }}
                                  </div>
                               </div>
                            </div>
                            <div class="col-12">
                               <div class="form-group">
                                  <label>Fault Type *</label>
                                  <v-select label="title" :reduce="(option) => option.id" :options="complaint_type"
                                     placeholder="Choose Fault Type ..." v-model="form.complaint_type_id" v-validate="'required'"
                                     :class="{ 'is-invalid': verrors.has('complaint_type_id') }" data-vv-name="title"
                                     class="required">
                                  </v-select>
                                  <div v-if="verrors.has('complaint_type_id')" class="help-block invalid-feedback">
                                     {{ verrors.first('complaint_type_id') }}
                                  </div>
                               </div>
                            </div>

                            <div class="col-12">
                               <div class="form-group">
                                  <label>Fault Description *</label>
                                  <input v-model="form.comment" type="text" name="comment" v-validate="''"
                                     data-vv-as="comment" class="form-control"
                                     :class="{ 'is-invalid': verrors.has('comment') }">
                                  <div v-if="verrors.has('comment')" class="help-block invalid-feedback"> {{
                                     verrors.first('comment')
                                  }}
                                  </div>
                               </div>
                            </div>

                         </div>
                      </div>
                   </div>


                   <!-- /.nav-tabs-custom -->
                </div>
                <!-- end tabs -->
                <div class="col-12 text-right">
                   <button class="btn btn-success" type="submit">Submit</button>
                </div>

             </div>
          </div>
       </form>
       <br>
    </section>
 </template>

 <script>
 import VueTagsInput from '@johmun/vue-tags-input';
 import { now } from 'moment';
 import {
    mapGetters
 } from "vuex";
 export default {
    name: "UserAddEdit",
    components: {
       VueTagsInput,
    },
    filters: {
       truncate: function (text, length, suffix) {
          return text.substring(0, length) + suffix;
       },
    },
    computed: {
       filteredItems() {
          return this.autocompleteItems.filter(i => {
             return i.text.toLowerCase().indexOf(this.tag.toLowerCase()) !== -1;
          });
       },
    },
    data() {
       return {
          machined: '',
          checkbox_model: [],
          form: new Form({
             id: '',
             atm_id: '',
             complaint_system_type_id: '',
             complaint_type_id: '',
             comment: ''
          }),
          atms: [],
          complaint_system_types: [],
          complaint_type: [],
          models: [],
          operators: [],
          sites: [],
          users: [],
          tag: '',
          autocompleteItems: [],

          sl: 0,
          assigned_ids: [],
          permissions: [],
          view_mode: false,
          countries: [],
          states: [],
          cities: [],
          editmode: false,
          step: 1,
          users: {},
          file: '',
          invoice_copy: null,
          cf_copy: null,
          national_permit_copy:null,
          road_tax_copy: null,
          insurance_copy: null,
          pollution_copy: null,
          rc_copy: null
       }
    },
    computed: {
       ...mapGetters(["errors"]),
    },
    beforeCreate() {
       axios.get("api/lodgeComplaintHelp")
          .then((res) => {
            console.log("res=====>",res);

             this.atms = res.data.data.atms;
             this.complaint_system_types = res.data.data.complaint_system_types;
             this.complaint_type = res.data.data.complaint_type;
          })
    },
    methods: {

       onFileChange(e) {
          this.invoice_copy = e.target.files[0];
       },

       onCFChange(e){
          this.cf_copy = e.target.files[0];
       },

       onNPChange(e){
          this.national_permit_copy = e.target.files[0];
       },

       onRTChange(e){
          this.road_tax_copy = e.target.files[0];
       },

       onInsuranceChange(e){
          this.insurance_copy = e.target.files[0];
       },

       onPollutionChange(e){
          this.pollution_copy = e.target.files[0];
       },

       onRCChange(e){
          this.rc_copy = e.target.files[0];
       },

       submit_machine() {
          this.$validator.validateAll().then(async (valid) => {
             if (valid) {
                this.verrors.clear();
                let cloaderd = this.$loading.show({
                   container: this.$refs.ref_load_user
                });

                if (this.form.id > 0) {
                   this.form.put('api/machine/' + this.form.id)
                      .then((response) => {
                         this.$validator.reset();
                         cloaderd.hide()
                         if (response.data.success == true) {

                            var fd = new FormData();
                            fd.append(`file`, this.invoice_copy);
                            fd.append(`cffile`, this.cf_copy);
                            fd.append(`npfile`, this.national_permit_copy);
                            fd.append(`rtfile`, this.road_tax_copy);
                            fd.append(`insurancefile`, this.insurance_copy);
                            fd.append(`pollutionfile`, this.pollution_copy);
                            fd.append(`rcfile`, this.rc_copy);
                            fd.append(`id`, this.form.id);
                            axios.post('api/machine/files', fd).then((res) => {

                               this.form.reset();
                               Toast.fire({
                                  icon: 'success',
                                  title: response.data.message
                               });
                               this.$router.push('/machines').catch(() => { });

                            })
                         }
                      })
                      .catch(err => {
                         cloaderd.hide();
                         if (err.response && err.response.data) {
                            this.$setErrorsFromResponse(err.response.data);
                         }
                      })
                } else {
                   this.form.post('api/storeComplaint')
                      .then((data) => {
                         this.$validator.reset();
                         cloaderd.hide()
                         this.form.id = data.data.data.id;
                         this.form.reset();
                         Toast.fire({
                            icon: 'success',
                            title: data.data.message
                         });
                         this.$router.push('/complaint').catch(() => { });
                      })
                      .catch(err => {
                         if (err.response && err.response.data) {
                            this.$setErrorsFromResponse(err.response.data);
                         }
                         cloaderd.hide();
                      })
                }
             }
          });
       },

       grand_permission() {
          let cloaderd = this.$loading.show({
             container: this.$refs.setting_permissionref
          });

          axios.post('api/user/grand_permission', {
             user: this.form.id,
             permissions: this.assigned_ids
          })
             .then((response) => {
                cloaderd.hide()
                if (response.data.success == true) {
                   Toast.fire({
                      icon: 'success',
                      title: response.data.message
                   });
                }
             })
             .catch(() => {
                cloaderd.hide();
             })
       },

    },
    mounted() {
       if (this.$route.params.id) {
          this.form.id = this.$route.params.id;
          let cloaderd = this.$loading.show({
             container: this.$refs.ref_load_user
          });
          axios.get("api/machine/" + this.$route.params.id)
             .then((res) => {
                this.machined = res.data.data
                this.form.fill(res.data.data)
                let date_time_machine_ic = res.data.data.date_time_machine_ic
                this.form.date_time_machine_ic = new Date(date_time_machine_ic).toISOString()
                this.form.last_maintenance_date = new Date(this.form.last_maintenance_date).toISOString()

                cloaderd.hide();
             })
             .catch(() => {
                cloaderd.hide();
                this.$router.push('/machines/').catch(() => { });
             })

       }
    },
    created() { },
    watch: {

       async 'form.category_id'(n, o) {
          if (o)
             this.form.sub_category_id = ''
          if (n) {
             axios.get("api/category/" + n)
                .then((res) => {
                   this.sub_categories = res.data.data;
                })
          }
       },
       async 'form.machine_companies_id'(n, o) {
          if (o)
             this.form.machine_models_id = ''
          if (n) {
             axios.get("api/model/" + n)
                .then((res) => {
                   this.models = res.data.data;
                })
          }
       },
    }
 }
 </script>
