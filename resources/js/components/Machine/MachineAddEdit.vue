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

                           <div class="col-2">
                              <div class="form-group">
                                 <label>FAR No</label>
                                 <input v-model="form.far_no" type="text" name="far_no" v-validate="'required'"
                                    data-vv-as="Far No" class="form-control required"
                                    :class="{ 'is-invalid': verrors.has('far_no') }">
                                 <div v-if="verrors.has('far_no')" class="help-block invalid-feedback"> {{
                                    verrors.first('far_no')
                                 }}
                                 </div>
                              </div>
                           </div>

                           <div class="col-3">
                              <div class="form-group">
                                 <label>Machine Category</label>
                                 <v-select label="name" :reduce="(option) => option.id" :options="categories"
                                    placeholder="Choose Category ..." v-model="form.category_id" v-validate="'required'"
                                    :class="{ 'is-invalid': verrors.has('category_id') }" data-vv-name="Category"
                                    class="required">
                                 </v-select>
                                 <div v-if="verrors.has('category_id')" class="help-block invalid-feedback">
                                    {{ verrors.first('category_id') }}
                                 </div>
                              </div>
                           </div>
                           <div class="col-3">
                              <div class="form-group">
                                 <label>Machine Description</label>
                                 <v-select label="name" :reduce="(option) => option.id" :options="sub_categories"
                                    placeholder="Choose description ..." v-model="form.sub_category_id"
                                    v-validate="'required'" :class="{ 'is-invalid': verrors.has('sub_category_id') }"
                                    data-vv-name="description" class="required">
                                 </v-select>
                                 <div v-if="verrors.has('sub_category_id')" class="help-block invalid-feedback">
                                    {{ verrors.first('sub_category_id') }}
                                 </div>
                              </div>
                           </div>
                           <div class="col-2">
                              <div class="form-group">
                                 <label>Make</label>
                                 <v-select label="name" :reduce="(option) => option.id" :options="companies"
                                    placeholder="Choose Company ..." v-model="form.machine_companies_id"
                                    v-validate="'required'" :class="{ 'is-invalid': verrors.has('machine_companies_id') }"
                                    data-vv-name="Company" class="required">
                                 </v-select>
                                 <div v-if="verrors.has('machine_companies_id')" class="help-block invalid-feedback">
                                    {{ verrors.first('machine_companies_id') }}
                                 </div>
                              </div>
                           </div>
                           <div class="col-2">
                              <div class="form-group">
                                 <label>Machine Model</label>
                                 <v-select label="name" :reduce="(option) => option.id" :options="models"
                                    placeholder="Choose Model ..." v-model="form.machine_models_id" v-validate="'required'"
                                    :class="{ 'is-invalid': verrors.has('machine_models_id') }" data-vv-name="description"
                                    class="required">
                                 </v-select>
                                 <div v-if="verrors.has('machine_models_id')" class="help-block invalid-feedback">
                                    {{ verrors.first('machine_models_id') }}
                                 </div>
                              </div>
                           </div>
                           <div class="col-2">
                              <div class="form-group">
                                 <label>Regn. No</label>
                                 <input v-model="form.regn_no" type="text" name="regn_no" v-validate="''"
                                    data-vv-as="Regn. No" class="form-control"
                                    :class="{ 'is-invalid': verrors.has('regn_no') }">
                                 <div v-if="verrors.has('regn_no')" class="help-block invalid-feedback"> {{
                                    verrors.first('regn_no')
                                 }}
                                 </div>
                              </div>
                           </div>
                           <div class="col-2">
                              <div class="form-group">
                                 <label>Machine Sr. No</label>
                                 <input v-model="form.machine_sr_no" type="text" name="machine_sr_no" v-validate="''"
                                    data-vv-as="Machine Sr. No" class="form-control"
                                    :class="{ 'is-invalid': verrors.has('machine_sr_no') }">
                                 <div v-if="verrors.has('machine_sr_no')" class="help-block invalid-feedback"> {{
                                    verrors.first('machine_sr_no')
                                 }}
                                 </div>
                              </div>
                           </div>
                           <div class="col-2">
                              <div class="form-group">
                                 <label>Engine Model</label>
                                 <input v-model="form.engine_model" type="text" name="engine_model" v-validate="''"
                                    data-vv-as="Engine Model" class="form-control"
                                    :class="{ 'is-invalid': verrors.has('engine_model') }">
                                 <div v-if="verrors.has('engine_model')" class="help-block invalid-feedback"> {{
                                    verrors.first('engine_model')
                                 }}
                                 </div>
                              </div>
                           </div>
                           <div class="col-2">
                              <div class="form-group">
                                 <label>Engine No</label>
                                 <input v-model="form.engine_no" type="text" name="engine_no" v-validate="''"
                                    data-vv-as="Engine no" class="form-control"
                                    :class="{ 'is-invalid': verrors.has('engine_no') }">
                                 <div v-if="verrors.has('engine_no')" class="help-block invalid-feedback"> {{
                                    verrors.first('engine_no')
                                 }}
                                 </div>
                              </div>
                           </div>
                           <div class="col-2">
                              <div class="form-group">
                                 <label>Chassis No</label>
                                 <input v-model="form.chassis_no" type="text" name="chassis_no" v-validate="''"
                                    data-vv-as="Chassis No" class="form-control"
                                    :class="{ 'is-invalid': verrors.has('chassis_no') }">
                                 <div v-if="verrors.has('chassis_no')" class="help-block invalid-feedback"> {{
                                    verrors.first('chassis_no')
                                 }}
                                 </div>
                              </div>
                           </div>
                           <div class="col-2">
                              <div class="form-group">
                                 <label>Condition of Machine</label>
                                 <select v-model="form.condition_of_machine" type="text" name="condition_of_machine"
                                    v-validate="'required'" data-vv-as="Condition of Machine "
                                    class="form-control required"
                                    :class="{ 'is-invalid': verrors.has('condition_of_machine') }" :disabled="form.id > 0">
                                    <option value="Break Down">Break Down</option>
                                    <option value="Running">Running</option>
                                    <option value="Running with Problem">Running with Problem</option>
                                    <option value="Idle">Idle</option>
                                 </select>
                                 <div v-if="verrors.has('condition_of_machine')" class="help-block invalid-feedback"> {{
                                    verrors.first('condition_of_machine')
                                 }}
                                 </div>
                              </div>
                           </div>
                           <div class="col-3">
                              <div class="form-group">
                                 <label>Owner</label>
                                 <select v-model="form.owner" type="text" name="owner" class="form-control required"
                                    :class="{ 'is-invalid': verrors.has('owner') }" v-validate="'required'"
                                    data-vv-as="Machine Type">
                                    <option value="Owned">Owned</option>
                                    <option value="Rented">Rented</option>
                                 </select>
                                 <div v-if="verrors.has('owner')" class="help-block invalid-feedback">
                                    {{ verrors.first('owner') }}
                                 </div>
                              </div>
                           </div>
                           <div class="col-3">
                              <div class="form-group">
                                 <label>Purchase Date</label>
                                 <datetime value-zone="Asia/Kolkata" v-model="form.purchase_date" name="purchase_date"
                                    input-class="form-control required"
                                    :class="{ 'is-invalid': verrors.has('purchase_date') }" v-validate="'required'"
                                    data-vv-as="Purchase Date" />
                                 <div v-if="verrors.has('purchase_date')" class="help-block invalid-feedback"> {{
                                    verrors.first('purchase_date')
                                 }}
                                 </div>
                              </div>
                           </div>
                           <div class="col-3">
                              <div class="form-group">
                                 <label>Purchase Price</label>


                                 <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                       <span class="input-group-text" id="basic-addon1">Rs.</span>
                                    </div>
                                    <input v-model="form.purchase_price" type="text" name="purchase_price"
                                       v-validate="'required|integer'" data-vv-as="Purchase Price"
                                       class="form-control required"
                                       :class="{ 'is-invalid': verrors.has('purchase_price') }">
                                    <div v-if="verrors.has('purchase_price')" class="help-block invalid-feedback"> {{
                                       verrors.first('purchase_price')
                                    }}
                                    </div>
                                 </div>


                              </div>
                           </div>
                           <div class="col-3">
                              <div class="form-group">
                                 <label>Year of Depreciation</label>
                                 <select v-model="form.year_of_depreciation" type="text" name="year_of_depreciation"
                                    class="form-control required"
                                    :class="{ 'is-invalid': verrors.has('year_of_depreciation') }" v-validate="'required'"
                                    data-vv-as="Year of Depreciation">
                                    <option value="0">None</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                 </select>
                                 <div v-if="verrors.has('year_of_depreciation')" class="help-block invalid-feedback">
                                    {{ verrors.first('year_of_depreciation') }}
                                 </div>
                              </div>
                           </div>
                           <div class="col-3">
                              <div class="form-group">
                                 <label>Machine Type</label>
                                 <select v-model="form.machine_type" type="text" name="machine_type"
                                    class="form-control required" :class="{ 'is-invalid': verrors.has('machine_type') }"
                                    v-validate="'required'" data-vv-as="Machine Type">
                                    <option value="New">New</option>
                                    <option value="Existing">Existing</option>
                                 </select>
                                 <div v-if="verrors.has('machine_type')" class="help-block invalid-feedback">
                                    {{ verrors.first('machine_type') }}
                                 </div>
                              </div>
                           </div>
                           <div class="col-3">
                              <div class="form-group">
                                 <label>Manufacture Year</label>
                                 <input v-model="form.manufacture_year" type="text" name="manufacture_year"
                                    v-validate="'required|integer'" data-vv-as="Manufacture Year"
                                    class="form-control required"
                                    :class="{ 'is-invalid': verrors.has('manufacture_year') }">
                                 <div v-if="verrors.has('manufacture_year')" class="help-block invalid-feedback"> {{
                                    verrors.first('manufacture_year')
                                 }}
                                 </div>
                              </div>
                           </div>
                           <div class="col-6" v-if="form.machine_type == 'New'">
                              <div class="form-group">
                                 <label>No of Free Service</label>
                                 <select v-model="form.free_service_no" name="free_service_no"
                                    v-validate="'required|integer'" data-vv-as="No of Free Service"
                                    class="form-control required"
                                    :class="{ 'is-invalid': verrors.has('free_service_no') }">
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                 </select>
                                 <div v-if="verrors.has('free_service_no')" class="help-block invalid-feedback">
                                    {{ verrors.first('free_service_no') }}
                                 </div>
                              </div>
                           </div>
                           
                           <div class="col-6">
                              <div class="form-group">
                                 <label>Consumption Type</label><br>
                                 <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="consumption_type"
                                       id="consumption_type1" value="Electric" v-model="form.consumption_type">
                                    <label class="form-check-label" for="consumption_type1">Electric</label>
                                 </div>
                                 <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="consumption_type"
                                       id="consumption_type2" value="Fuel" v-model="form.consumption_type">
                                    <label class="form-check-label" for="consumption_type2">Fuel </label>
                                 </div>
                                 <div v-if="verrors.has('consumption_type')" class="help-block invalid-feedback">
                                    {{ verrors.first('consumption_type') }}
                                 </div>
                              </div>
                           </div>
                           <div class="col-3">
                              <div class="form-group">
                                 <label>Standard Consumption Hour/Ltr</label>
                                 <input v-model="form.standard_consumption_hr_per_ltr" type="text" name="standard_consumption_hr_per_ltr"
                                    v-validate="'required|decimal:2'" data-vv-as="Standard CPH"
                                    class="form-control required" :class="{ 'is-invalid': verrors.has('standard_consumption_hr_per_ltr') }">
                                 <div v-if="verrors.has('standard_consumption_hr_per_ltr')" class="help-block invalid-feedback"> {{
                                    verrors.first('standard_consumption_hr_per_ltr')
                                 }}
                                 </div>
                              </div>
                           </div>
                           <div class="col-3">
                              <div class="form-group">
                                 <label>Standard Consumption KM/Ltr</label>
                                 <input v-model="form.standard_consumption_km_per_ltr" type="text" name="standard_consumption_km_per_ltr"
                                    v-validate="'required|decimal:2'" data-vv-as="Standard CPH"
                                    class="form-control required" :class="{ 'is-invalid': verrors.has('standard_consumption_km_per_ltr') }">
                                 <div v-if="verrors.has('standard_consumption_km_per_ltr')" class="help-block invalid-feedback"> {{
                                    verrors.first('standard_consumption_km_per_ltr')
                                 }}
                                 </div>
                              </div>
                           </div>
                           
                           <div class="col-6">
                              <div class="form-group">
                                 <label>Machine Under Periodic Maintainance</label><br>
                                 <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="under_maintenance" id="inlineRadio1"
                                       value="Yes" v-model="form.under_maintenance">
                                    <label class="form-check-label" for="inlineRadio1">Yes</label>
                                 </div>
                                 <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="under_maintenance" id="inlineRadio2"
                                       value="No" v-model="form.under_maintenance">
                                    <label class="form-check-label" for="inlineRadio2">No</label>
                                 </div>
                                 <div v-if="verrors.has('under_maintenance')" class="help-block invalid-feedback">
                                    {{ verrors.first('under_maintenance') }}
                                 </div>
                              </div>
                           </div>
                           <div class="col-3">
                              <div class="form-group">
                                 <label>Invoice No</label>
                                 <input v-model="form.invoice_no" type="text" name="invoice_no" data-vv-as="Invoice No"
                                    class="form-control" :class="{ 'is-invalid': verrors.has('invoice_no') }">
                                 <div v-if="verrors.has('invoice_no')" class="help-block invalid-feedback"> {{
                                    verrors.first('invoice_no')
                                 }}
                                 </div>
                              </div>
                           </div>
                           <div class="col-3">
                              <div class="form-group">
                                 <label>Invoice Copy <a :href="form.invoice_copy" v-if="form.invoice_copy != ''" target="new">View</a></label>
                                 <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="file" name="invoice_copy" accept="image/*, .xls,.xlsx, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"
                                       v-on:change="onFileChange">
                                 </div>
                                 <div v-if="verrors.has('invoice_copy')" class="help-block invalid-feedback">
                                    {{ verrors.first('invoice_copy') }}
                                 </div>
                              </div>
                           </div>
                           <div class="col-6">
                              <div class="form-group">
                                 <label>AMC</label><br>
                                 <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="amc" id="amcradio1"
                                       value="Yes" v-model="form.amc">
                                    <label class="form-check-label" for="amcradio1">Yes</label>
                                 </div>
                                 <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="amc" id="amcradio2"
                                       value="No" v-model="form.amc">
                                    <label class="form-check-label" for="amcradio2">No</label>
                                 </div>
                                 <div v-if="verrors.has('amc')" class="help-block invalid-feedback">
                                    {{ verrors.first('amc') }}
                                 </div>
                              </div>
                           </div>
                           
                           <div class="col-3" v-if="form.amc == 'Yes'">
                              <div class="form-group">
                                 <label>AMC Start Date</label>
                                 <input v-model="form.amc_start_date" type="date" name="amc_start_date" data-vv-as="AMC Start Date"
                                    class="form-control required " :class="{ 'is-invalid': verrors.has('amc_start_date') }" :required="form.amc == 'Yes'">
                                 <div v-if="verrors.has('amc_start_date')" class="help-block invalid-feedback"> {{
                                    verrors.first('amc_start_date')
                                 }}
                                 </div>
                              </div>
                           </div>
                           <div class="col-3" v-if="form.amc == 'Yes'">
                              <div class="form-group">
                                 <label>AMC End Date</label>
                                 <input v-model="form.amc_end_date" type="date" name="amc_end_date" data-vv-as="AMC End Date"
                                    class="form-control required " :class="{ 'is-invalid': verrors.has('amc_end_date') }" :required="form.amc == 'Yes'">
                                 <div v-if="verrors.has('amc_end_date')" class="help-block invalid-feedback"> {{
                                    verrors.first('amc_end_date')
                                 }}
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <template v-if="form.machine_type == 'New' && form.under_maintenance == 'Yes'">

                     <div class="card col-12">
                        <div class="card-header">
                           <div class="form-check form-check-inline">
                              <input class="form-check-input" type="checkbox" id="cc1" value="1"
                                 v-model="form.is_maintenance_date" disabled>
                              <label class="form-check-label" for="cc1">Maintenance by date?</label>
                           </div>
                        </div>
                        <div class="card-body" v-if="form.is_maintenance_date">
                           <div class="row">
                              <div class="col-6">
                                 <div class="form-group">
                                    <label>Date and time of machine I&C</label>
                                    <datetime value-zone="Asia/Kolkata" v-model="form.date_time_machine_ic"
                                       name="date_time_machine_ic" input-class="form-control required"
                                       :class="{ 'is-invalid': verrors.has('date_time_machine_ic') }"
                                       v-validate="'required'" data-vv-as="date_time_machine_ic Date" type="datetime" />
                                    <div v-if="verrors.has('date_time_machine_ic')" class="help-block invalid-feedback"> {{
                                       verrors.first('date_time_machine_ic')
                                    }}
                                    </div>
                                 </div>
                              </div>
                              <div class="col-6">
                                 <div class="form-group">
                                    <label>Date Threshold</label>
                                    <div class="input-group">
                                       <input type="text" v-model="form.date_threshold" name="date_threshold"
                                          class="form-control required"
                                          :class="{ 'is-invalid': verrors.has('date_threshold') }" v-validate="'required'"
                                          data-vv-as="Date Threshold" placeholder="number of days" />
                                       <div class="input-group-append">
                                          <span class="input-group-text">Days</span>
                                       </div>
                                    </div>
                                    <div v-if="verrors.has('date_threshold')" class="help-block invalid-feedback">
                                       {{
                                          verrors.first('date_threshold')
                                       }}
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div class="card col-12">
                        <div class="card-header">
                           <div class="form-check form-check-inline">
                              <input class="form-check-input" type="checkbox" id="cc2" value="1"
                                 v-model="form.is_consumtion_hr_run">
                              <label class="form-check-label" for="cc2">Consumption in Run Hour?</label>
                           </div>
                        </div>
                        <div class="card-body" v-if="form.is_consumtion_hr_run">
                           <div class="row">
                              <div class="col-6">
                                 <div class="form-group">
                                    <label>Run Hour Threshold</label>
                                    <div class="input-group">
                                       <input type="text" v-model="form.run_hour_threshold" name="run_hour_threshold"
                                          class="form-control required"
                                          :class="{ 'is-invalid': verrors.has('run_hour_threshold') }"
                                          v-validate="'required|decimal:2'" data-vv-as="Run Hour Threshold"
                                          placeholder="Run Hour" />
                                       <div class="input-group-append">
                                          <span class="input-group-text">Hour</span>
                                       </div>
                                    </div>
                                    <div v-if="verrors.has('run_hour_threshold')" class="help-block invalid-feedback"> {{
                                       verrors.first('run_hour_threshold')
                                    }}
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="card col-12">
                        <div class="card-header">
                           <div class="form-check form-check-inline">
                              <input class="form-check-input" type="checkbox" id="cc3" value="1"
                                 v-model="form.is_consumtion_km_run">
                              <label class="form-check-label" for="cc3">Consumption in KM Run?</label>
                           </div>
                        </div>
                        <div class="card-body" v-if="form.is_consumtion_km_run">
                           <div class="row">
                              <div class="col-6">
                                 <div class="form-group">
                                    <label>KM Run Threshold</label>
                                    <div class="input-group">
                                       <input type="text" v-model="form.run_km_threshold" name="run_km_threshold"
                                          class="form-control required"
                                          :class="{ 'is-invalid': verrors.has('run_km_threshold') }"
                                          v-validate="'required|decimal:2'" data-vv-as="Run KM Threshold"
                                          placeholder="KM Run" />
                                       <div class="input-group-append">
                                          <span class="input-group-text">KM</span>
                                       </div>
                                    </div>
                                    <div v-if="verrors.has('run_km_threshold')" class="help-block invalid-feedback">
                                       {{
                                          verrors.first('run_km_threshold')
                                       }}
                                    </div>
                                 </div>
                              </div>

                           </div>
                        </div>
                     </div>
                     <div class="card col-12">
                        <div class="card-header">
                           <div class="form-check form-check-inline">
                              <input class="form-check-input" type="checkbox" id="cc4" value="1"
                                 v-model="form.is_production_fig">
                              <label class="form-check-label" for="cc4">Production Maintenance ?</label>
                           </div>
                        </div>
                        <div class="card-body" v-if="form.is_production_fig">
                           <div class="row">
                              <div class="col-6">
                                 <div class="form-group">
                                    <label>Production fig Threshold</label>
                                    <div class="input-group">
                                       <input v-model="form.production_fig_threshold" type="text"
                                          name="production_fig_threshold" class="form-control required"
                                          :class="{ 'is-invalid': verrors.has('production_fig_threshold') }"
                                          v-validate="'required|decimal:2'" data-vv-as="Production fig Threshold"
                                          placeholder="Production fig in Cubic Meter" />
                                       <div class="input-group-append">
                                          <span class="input-group-text">Cu Mtr</span>
                                       </div>
                                    </div>
                                    <div v-if="verrors.has('production_fig_threshold')"
                                       class="help-block invalid-feedback">
                                       {{ verrors.first('production_fig_threshold') }}
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div class="help-block invalid-feedback d-block pb-3"
                        v-if="!form.is_consumtion_hr_run && !form.is_consumtion_km_run && !form.is_production_fig">
                        Please select any one of above.
                     </div>

                  </template>

                  <template v-if="form.machine_type == 'Existing' && form.under_maintenance == 'Yes'">

                     <div class="card col-12">
                        <div class="card-header">
                           <div class="form-check form-check-inline">
                              <input class="form-check-input" type="checkbox" id="cc5" value="1"
                                 v-model="form.is_maintenance_date" disabled>
                              <label class="form-check-label" for="cc5">Last Maintenance date?</label>
                           </div>
                        </div>
                        <div class="card-body" v-if="form.is_maintenance_date">
                           <div class="row">
                              <div class="col-6">
                                 <div class="form-group">
                                    <label>Last Maintenance date and time of machine</label>
                                    <datetime value-zone="Asia/Kolkata" v-model="form.last_maintenance_date"
                                       name="last_maintenance_date" input-class="form-control required"
                                       :class="{ 'is-invalid': verrors.has('last_maintenance_date') }"
                                       v-validate="'required'" data-vv-as="Last Maintenance date and time" type="datetime"
                                       placeholder="Last Maintenance date and time of machine"
                                       :disabled="machined.total_tickes > 0" />
                                    <div v-if="verrors.has('last_maintenance_date')" class="help-block invalid-feedback">
                                       {{ verrors.first('last_maintenance_date') }}
                                    </div>
                                 </div>
                              </div>
                              <div class="col-6">
                                 <div class="form-group">
                                    <label>Frequency - Date Threshold</label>
                                    <div class="input-group">
                                       <input v-model="form.date_threshold" type="text" name="date_threshold"
                                          class="form-control required"
                                          :class="{ 'is-invalid': verrors.has('date_threshold') }"
                                          v-validate="'required|integer'" data-vv-as="Frequency"
                                          placeholder="number of days">
                                       <div class="input-group-append">
                                          <span class="input-group-text">Days</span>
                                       </div>
                                    </div>
                                    <div v-if="verrors.has('date_threshold')" class="help-block invalid-feedback">
                                       {{ verrors.first('date_threshold') }}
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div class="card col-12">
                        <div class="card-header">
                           <div class="form-check form-check-inline">
                              <input class="form-check-input" type="checkbox" id="cc6" value="1"
                                 v-model="form.is_consumtion_hr_run">
                              <label class="form-check-label" for="cc6">Consumption in Run Hour?</label>
                           </div>
                        </div>
                        <div class="card-body" v-if="form.is_consumtion_hr_run">
                           <div class="row">
                              <div class="col-6">
                                 <div class="form-group">
                                    <label>Run Hour during last Maintenance</label>
                                    <div class="input-group">
                                       <input v-model="form.last_hr_run" type="text" name="last_hr_run"
                                          class="form-control required"
                                          :class="{ 'is-invalid': verrors.has('last_hr_run') }"
                                          v-validate="'required|decimal:2'" data-vv-as="Frequency" placeholder="Run Hour"
                                          :disabled="machined.maintenances_count > 0 || machined.total_tickes > 0">
                                       <div class="input-group-append">
                                          <span class="input-group-text">Hour</span>
                                       </div>
                                    </div>
                                    <div v-if="verrors.has('last_hr_run')" class="help-block invalid-feedback">
                                       {{ verrors.first('last_hr_run') }}
                                    </div>
                                 </div>
                              </div>
                              <!-- <div class="col-4">
                                    <div class="form-group">
                                       <label>Present Run Hour</label>
                                       <div class="input-group">
                                          <input v-model="form.present_run_hour" type="text" name="present_run_hour"
                                             class="form-control required"
                                             :class="{ 'is-invalid': verrors.has('present_run_hour') }"
                                             v-validate="{required:true,decimal:2,min_value:form.last_hr_run}"
                                             data-vv-as="Present Run Hour" placeholder="Run Hour"
                                             :disabled="machined.maintenances_count>0||machined.total_tickes>0">
                                          <div class="input-group-append">
                                             <span class="input-group-text">Hour</span>
                                          </div>
                                       </div>
                                       <div v-if="verrors.has('present_run_hour')"
                                          class="help-block invalid-feedback">
                                          {{ verrors.first('present_run_hour') }}
                                       </div>
                                    </div>
                                 </div> -->
                              <div class="col-6">
                                 <div class="form-group">
                                    <label> Frequency - Run Hour Threshold</label>
                                    <div class="input-group">
                                       <input v-model="form.run_hour_threshold" type="text" name="run_hour_threshold"
                                          class="form-control required"
                                          :class="{ 'is-invalid': verrors.has('run_hour_threshold') }"
                                          v-validate="'required|integer'" data-vv-as="Run Hour Threshold"
                                          placeholder="Run Hour">
                                       <div class="input-group-append">
                                          <span class="input-group-text">Hour</span>
                                       </div>
                                    </div>
                                    <div v-if="verrors.has('run_hour_threshold')" class="help-block invalid-feedback">
                                       {{ verrors.first('run_hour_threshold') }}
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div class="card col-12">
                        <div class="card-header">
                           <div class="form-check form-check-inline">
                              <input class="form-check-input" type="checkbox" id="cc7" value="1"
                                 v-model="form.is_consumtion_km_run">
                              <label class="form-check-label" for="cc7">Consumption in KM Run?</label>
                           </div>
                        </div>
                        <div class="card-body" v-if="form.is_consumtion_km_run">
                           <div class="row">
                              <div class="col-6">
                                 <div class="form-group">
                                    <label>KM Run during last Maintenance</label>
                                    <div class="input-group">
                                       <input v-model="form.last_km_run" type="text" name="last_km_run"
                                          class="form-control required"
                                          :class="{ 'is-invalid': verrors.has('last_km_run') }"
                                          v-validate="'required|decimal:2'" data-vv-as="last Maintenance"
                                          placeholder="KM Run"
                                          :disabled="machined.maintenances_count > 0 || machined.total_tickes > 0">
                                       <div class="input-group-append">
                                          <span class="input-group-text">KM</span>
                                       </div>
                                    </div>
                                    <div v-if="verrors.has('last_km_run')" class="help-block invalid-feedback">
                                       {{ verrors.first('last_km_run') }}
                                    </div>
                                 </div>
                              </div>
                              <!-- <div class="col-4">
                                    <div class="form-group">

                                       <label>Present KM Run</label>
                                       <div class="input-group">
                                          <input v-model="form.present_run_km" type="text" name="present_run_km"
                                             class="form-control required"
                                             :class="{ 'is-invalid': verrors.has('present_run_km') }"
                                             v-validate="{required:true,decimal:2,min_value:form.last_km_run}"
                                             data-vv-as="Present KM Run" placeholder="KM Run"
                                             :disabled="machined.maintenances_count>0||machined.total_tickes>0">
                                          <div class="input-group-append">
                                             <span class="input-group-text">KM</span>
                                          </div>
                                       </div>
                                       <div v-if="verrors.has('present_run_km')" class="help-block invalid-feedback">
                                          {{ verrors.first('present_run_km') }}
                                       </div>
                                    </div>
                                 </div> -->
                              <div class="col-6">
                                 <div class="form-group">

                                    <label>Frequency - KM Run Threshold</label>
                                    <div class="input-group">
                                       <input v-model="form.run_km_threshold" type="text" name="run_km_threshold"
                                          class="form-control required"
                                          :class="{ 'is-invalid': verrors.has('run_km_threshold') }"
                                          v-validate="'required|integer'" data-vv-as="Run KM Threshold"
                                          placeholder="KM Run">
                                       <div class="input-group-append">
                                          <span class="input-group-text">KM</span>
                                       </div>
                                    </div>
                                    <div v-if="verrors.has('run_km_threshold')" class="help-block invalid-feedback">
                                       {{ verrors.first('run_km_threshold') }}
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="card col-12">
                        <div class="card-header">
                           <div class="form-check form-check-inline">
                              <input class="form-check-input" type="checkbox" id="cc8" value="1"
                                 v-model="form.is_production_fig">
                              <label class="form-check-label" for="cc8">Production Maintenance ?</label>
                           </div>
                        </div>
                        <div class="card-body" v-if="form.is_production_fig">
                           <div class="row">
                              <div class="col-6">
                                 <div class="form-group">
                                    <label>Last Production fig of Periodic/Breakdown Maintenance</label>
                                    <div class="input-group">
                                       <input type="text" placeholder="i.e. 1000 Cubic Meters (Cu Mtr)"
                                          v-model="form.periodic_maintenance_breakdown"
                                          name="periodic_maintenance_breakdown" class="form-control required"
                                          :class="{ 'is-invalid': verrors.has('periodic_maintenance_breakdown') }"
                                          v-validate="'required|decimal:2'" data-vv-as="Machine Type"
                                          :disabled="machined.maintenances_count > 0 || machined.total_tickes > 0" />
                                       <div class="input-group-append">
                                          <span class="input-group-text" id="ppf-addon">Cu Mtr</span>
                                       </div>
                                    </div>
                                    <div v-if="verrors.has('periodic_maintenance_breakdown')"
                                       class="help-block invalid-feedback">
                                       {{ verrors.first('periodic_maintenance_breakdown') }}
                                    </div>
                                 </div>
                              </div>
                              <!-- <div class="col-3">
                                    <div class="form-group">
                                       <label>Present Production fig</label>
                                       <div class="input-group">
                                          <input v-model="form.present_production_fig" type="text"
                                             name="present_production_fig" class="form-control required"
                                             :class="{ 'is-invalid': verrors.has('present_production_fig') }"
                                             v-validate="{required:true,decimal:2,min_value:form.periodic_maintenance_breakdown}"
                                             data-vv-as="Present Production fig"
                                             placeholder="i.e. 1000 Cubic Meters (Cu Mtr)"
                                             :disabled="machined.maintenances_count>0||machined.total_tickes>0" />
                                          <div class="input-group-append">
                                             <span class="input-group-text" id="ppf-addon">Cu Mtr</span>
                                          </div>
                                       </div>
                                       <div v-if="verrors.has('present_production_fig')"
                                          class="help-block invalid-feedback">
                                          {{ verrors.first('present_production_fig') }}
                                       </div>
                                    </div>
                                 </div> -->
                              <div class="col-6">
                                 <div class="form-group">
                                    <label>Frequency - Production fig Threshold</label>
                                    <div class="input-group">
                                       <input v-model="form.production_fig_threshold" type="text"
                                          name="production_fig_threshold" class="form-control required"
                                          :class="{ 'is-invalid': verrors.has('production_fig_threshold') }"
                                          v-validate="'required|integer'" data-vv-as="Production fig Threshold"
                                          placeholder="i.e. 1000 Cubic Meters (Cu Mtr)" aria-describedby="ppt-addon2" />
                                       <div class="input-group-append">
                                          <span class="input-group-text" id="ppt-addon2">Cu Mtr</span>
                                       </div>
                                    </div>
                                    <div v-if="verrors.has('production_fig_threshold')"
                                       class="help-block invalid-feedback">
                                       {{ verrors.first('production_fig_threshold') }}
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="help-block invalid-feedback d-block pb-3"
                        v-if="!form.is_consumtion_hr_run && !form.is_consumtion_km_run && !form.is_production_fig">
                        Please select any one of above.
                     </div>
                  </template>

                  <div class="card col-12">
                     <div class="card-header" style="padding-bottom: 10px;">
                        <h3 class="card-title" style="font-size: 15px;color: gray;"> Production Loss Settings</h3>
                     </div>
                     <br>
                     <div class="row">
                        <div class="col-6">
                           <div class="form-group">
                              <div class="input-group">
                                 <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1">Hrs per day</span>
                                 </div>
                                 <input v-model="form.prdloss_hrs" type="text" name="prdloss_hrs" class="form-control"
                                    :class="{ 'is-invalid': verrors.has('prdloss_hrs') }" v-validate="'integer'"
                                    data-vv-as="Hrs">
                              </div>
                              <div v-if="verrors.has('prdloss_hrs')" class="help-block invalid-feedback"> {{
                                 verrors.first('prdloss_hrs') }}
                              </div>
                           </div>
                        </div>
                        <div class="col-6">
                           <div class="form-group">
                              <div class="input-group">
                                 <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1">Hourly Rate in Rs.</span>
                                 </div>
                                 <input v-model="form.prdloss_hr_rate" type="text" name="prdloss_hr_rate"
                                    class="form-control" :class="{ 'is-invalid': verrors.has('prdloss_hr_rate') }"
                                    v-validate="'integer'" data-vv-as="Hrs rate">
                              </div>
                              <div v-if="verrors.has('prdloss_hr_rate')" class="help-block invalid-feedback"> {{
                                 verrors.first('prdloss_hr_rate') }}</div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div class="card col-12">
                     <div class="row">
                        <div class="col-3">
                           <div class="form-group">
                              <label class="mt-1">Last CF Date</label>
                              <div class="input-group">
                                 <input v-model="form.cf_date" type="date" name="cf_date" class="form-control"
                                    :class="{ 'is-invalid': verrors.has('cf_date') }">
                              </div>
                              <div v-if="verrors.has('cf_date')" class="help-block invalid-feedback"> {{
                                 verrors.first('cf_date') }}</div>
                           </div>
                        </div>
                        <div class="col-3">
                           <div class="form-group">
                              <label class="mt-1">CF Frequency</label>
                              <div class="input-group">
                                 <select v-model="form.cf_frequency" type="text" name="cf_frequency" class="form-control"
                                    :class="{ 'is-invalid': verrors.has('cf_frequency') }" data-vv-as="CF Frequency">
                                    <option value="90">Quarterly</option>
                                    <option value="182">Half yearly</option>
                                    <option value="365">Yearly</option>
                                    <option value="730">Every 2nd year</option>
                                    <option value="1095">Every 3rd year</option>
                                    <option value="1460">Every 4th year</option>
                                    <option value="1825">Every 5th year</option>
                                    <option value="2190">Every 6th year</option>
                                    <option value="2555">Every 7th year</option>
                                    <option value="2920">Every 8th year</option>
                                    <option value="3285">Every 9th year</option>
                                    <option value="3652">Every 10th year</option>
                                 </select>
                              </div>
                              <div v-if="verrors.has('cf_frequency')" class="help-block invalid-feedback"> {{
                                 verrors.first('cf_frequency') }}</div>
                           </div>
                        </div>
                        <div class="col-3">
                           <div class="form-group">
                              <label class="mt-1">CF Amount</label>
                              <div class="input-group">
                                 <input v-model="form.cf_amount" type="number" name="cf_amount" class="form-control"
                                    :class="{ 'is-invalid': verrors.has('cf_amount') }">
                              </div>
                              <div v-if="verrors.has('cf_amount')" class="help-block invalid-feedback"> {{
                                 verrors.first('cf_amount') }}</div>
                           </div>
                        </div>
                        <div class="col-3">
                           <div class="form-group">
                              <label class="mt-1">CF Copy <a :href="form.cf_copy" v-if="form.cf_copy != ''" target="new">View</a></label>
                              <div class="form-check form-check-inline input-group">
                                 <input class="form-check-input" type="file" name="cf_copy" accept="image/*, .xls,.xlsx, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel, .pdf"
                                    v-on:change="onCFChange">
                              </div>
                              <div v-if="verrors.has('cf_copy')" class="help-block invalid-feedback">
                                 {{ verrors.first('cf_copy') }}
                              </div>
                           </div>
                        </div>
                     </div>

                     <div class="row">
                        <div class="col-3">
                           <div class="form-group">
                              <label class="mt-1">Last National Permit Date</label>
                              <div class="input-group">
                                 <input v-model="form.national_permit_date" type="date" name="national_permit_date" class="form-control"
                                    :class="{ 'is-invalid': verrors.has('national_permit_date') }">
                              </div>
                              <div v-if="verrors.has('national_permit_date')" class="help-block invalid-feedback"> {{
                                 verrors.first('national_permit_date') }}</div>
                           </div>
                        </div>
                        <div class="col-3">
                           <div class="form-group">
                              <label class="mt-1">National Permit Frequency</label>
                              <div class="input-group">
                                 <select v-model="form.national_permit_frequency" type="text" name="national_permit_frequency" class="form-control"
                                    :class="{ 'is-invalid': verrors.has('national_permit_frequency') }" data-vv-as="Rc Frequency">
                                    <option value="90">Quarterly</option>
                                    <option value="182">Half yearly</option>
                                    <option value="365">Yearly</option>
                                    <option value="730">Every 2nd year</option>
                                    <option value="1095">Every 3rd year</option>
                                    <option value="1460">Every 4th year</option>
                                    <option value="1825">Every 5th year</option>
                                    <option value="2190">Every 6th year</option>
                                    <option value="2555">Every 7th year</option>
                                    <option value="2920">Every 8th year</option>
                                    <option value="3285">Every 9th year</option>
                                    <option value="3652">Every 10th year</option>
                                 </select>
                              </div>
                              <div v-if="verrors.has('national_permit_frequency')" class="help-block invalid-feedback"> {{
                                 verrors.first('national_permit_frequency') }}</div>
                           </div>
                        </div>
                        <div class="col-3">
                           <div class="form-group">
                              <label class="mt-1">National Permit Amount</label>
                              <div class="input-group">
                                 <input v-model="form.national_permit_amount" type="number" name="national_permit_amount" class="form-control"
                                    :class="{ 'is-invalid': verrors.has('national_permit_amount') }">
                              </div>
                              <div v-if="verrors.has('national_permit_amount')" class="help-block invalid-feedback"> {{
                                 verrors.first('national_permit_amount') }}</div>
                           </div>
                        </div>
                        <div class="col-3">
                           <div class="form-group">
                              <label class="mt-1">National Permit Copy <a :href="form.national_permit_copy" v-if="form.national_permit_copy != ''" target="new">View</a></label>
                              <div class="form-check form-check-inline input-group">
                                 <input class="form-check-input" type="file" name="national_permit_copy" accept="image/*, .xls,.xlsx, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel, .pdf"
                                    v-on:change="onNPChange">
                              </div>
                              <div v-if="verrors.has('national_permit_copy')" class="help-block invalid-feedback">
                                 {{ verrors.first('national_permit_copy') }}
                              </div>
                           </div>
                        </div>
                     </div>

                     <div class="row">
                        <div class="col-3">
                           <div class="form-group">
                              <label class="mt-1">Last Road TAX Date</label>
                              <div class="input-group">
                                 <input v-model="form.road_tax_date" type="date" name="road_tax_date" class="form-control"
                                    :class="{ 'is-invalid': verrors.has('road_tax_date') }" >
                              </div>
                              <div v-if="verrors.has('road_tax_date')" class="help-block invalid-feedback"> {{
                                 verrors.first('road_tax_date') }}</div>
                           </div>
                        </div>
                        <div class="col-3">
                           <div class="form-group">
                              <label class="mt-1">Road TAX Frequency</label>
                              <div class="input-group">
                                 <select v-model="form.road_tax_frequency" type="text" name="road_tax_frequency" class="form-control"
                                    :class="{ 'is-invalid': verrors.has('road_tax_frequency') }" data-vv-as="Rc Frequency">
                                    <option value="90">Quarterly</option>
                                    <option value="182">Half yearly</option>
                                    <option value="365">Yearly</option>
                                    <option value="730">Every 2nd year</option>
                                    <option value="1095">Every 3rd year</option>
                                    <option value="1460">Every 4th year</option>
                                    <option value="1825">Every 5th year</option>
                                    <option value="2190">Every 6th year</option>
                                    <option value="2555">Every 7th year</option>
                                    <option value="2920">Every 8th year</option>
                                    <option value="3285">Every 9th year</option>
                                    <option value="3652">Every 10th year</option>
                                 </select>
                              </div>
                              <div v-if="verrors.has('road_tax_frequency')" class="help-block invalid-feedback"> {{
                                 verrors.first('road_tax_frequency') }}</div>
                           </div>
                        </div>
                        <div class="col-3">
                           <div class="form-group">
                              <label class="mt-1">Road Tax Amount</label>
                              <div class="input-group">
                                 <input v-model="form.road_tax_amount" type="number" name="road_tax_amount" class="form-control"
                                    :class="{ 'is-invalid': verrors.has('road_tax_amount') }">
                              </div>
                              <div v-if="verrors.has('road_tax_amount')" class="help-block invalid-feedback"> {{
                                 verrors.first('road_tax_amount') }}</div>
                           </div>
                        </div>
                        <div class="col-3">
                           <div class="form-group">
                              <label class="mt-1">Road Tax Copy <a :href="form.road_tax_copy" v-if="form.road_tax_copy != ''" target="new">View</a></label>
                              <div class="form-check form-check-inline input-group">
                                 <input class="form-check-input" type="file" name="road_tax_copy" accept="image/*, .xls,.xlsx, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel, .pdf"
                                    v-on:change="onRTChange">
                              </div>
                              <div v-if="verrors.has('road_tax_copy')" class="help-block invalid-feedback">
                                 {{ verrors.first('road_tax_copy') }}
                              </div>
                           </div>
                        </div>
                     </div>

                     <div class="row">
                        <div class="col-3">
                           <div class="form-group">
                              <label class="mt-1">Last Insurance Date</label>
                              <div class="input-group">
                                 <input v-model="form.insurance_date" type="date" name="insurance_date" class="form-control"
                                    :class="{ 'is-invalid': verrors.has('insurance_date') }" >
                              </div>
                              <div v-if="verrors.has('insurance_date')" class="help-block invalid-feedback"> {{
                                 verrors.first('insurance_date') }}</div>
                           </div>
                        </div>
                        <div class="col-3">
                           <div class="form-group">
                              <label class="mt-1">Insurance Frequency</label>
                              <div class="input-group">
                                 <select v-model="form.insurance_frequency" type="text" name="insurance_frequency" class="form-control"
                                    :class="{ 'is-invalid': verrors.has('insurance_frequency') }" data-vv-as="Rc Frequency">
                                    <option value="90">Quarterly</option>
                                    <option value="182">Half yearly</option>
                                    <option value="365">Yearly</option>
                                    <option value="730">Every 2nd year</option>
                                    <option value="1095">Every 3rd year</option>
                                    <option value="1460">Every 4th year</option>
                                    <option value="1825">Every 5th year</option>
                                    <option value="2190">Every 6th year</option>
                                    <option value="2555">Every 7th year</option>
                                    <option value="2920">Every 8th year</option>
                                    <option value="3285">Every 9th year</option>
                                    <option value="3652">Every 10th year</option>
                                 </select>
                              </div>
                              <div v-if="verrors.has('insurance_frequency')" class="help-block invalid-feedback"> {{
                                 verrors.first('insurance_frequency') }}</div>
                           </div>
                        </div>
                        <div class="col-3">
                           <div class="form-group">
                              <label class="mt-1">Insurance Amount</label>
                              <div class="input-group">
                                 <input v-model="form.insurance_amount" type="number" name="insurance_amount" class="form-control"
                                    :class="{ 'is-invalid': verrors.has('insurance_amount') }">
                              </div>
                              <div v-if="verrors.has('insurance_amount')" class="help-block invalid-feedback"> {{
                                 verrors.first('insurance_amount') }}</div>
                           </div>
                        </div>
                        <div class="col-3">
                           <div class="form-group">
                              <label class="mt-1">Insurance Copy <a :href="form.insurance_copy" v-if="form.insurance_copy != ''" target="new">View</a></label>
                              <div class="form-check form-check-inline input-group">
                                 <input class="form-check-input" type="file" name="insurance_copy" accept="image/*, .xls,.xlsx, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel, .pdf"
                                    v-on:change="onInsuranceChange">
                              </div>
                              <div v-if="verrors.has('insurance_copy')" class="help-block invalid-feedback">
                                 {{ verrors.first('insurance_copy') }}
                              </div>
                           </div>
                        </div>
                     </div>

                     <div class="row">
                        <div class="col-3">
                           <div class="form-group">
                              <label class="mt-1">Last Pollution Date</label>
                              <div class="input-group">
                                 <input v-model="form.pollution_date" type="date" name="pollution_date" class="form-control"
                                    :class="{ 'is-invalid': verrors.has('pollution_date') }">
                              </div>
                              <div v-if="verrors.has('pollution_date')" class="help-block invalid-feedback"> {{
                                 verrors.first('pollution_date') }}</div>
                           </div>
                        </div>
                        <div class="col-3">
                           <div class="form-group">
                              <label class="mt-1">Pollution Frequency</label>
                              <div class="input-group">
                                 <select v-model="form.pollution_frequency" type="text" name="pollution_frequency" class="form-control"
                                    :class="{ 'is-invalid': verrors.has('pollution_frequency') }" data-vv-as="Rc Frequency">
                                    <option value="90">Quarterly</option>
                                    <option value="182">Half yearly</option>
                                    <option value="365">Yearly</option>
                                    <option value="730">Every 2nd year</option>
                                    <option value="1095">Every 3rd year</option>
                                    <option value="1460">Every 4th year</option>
                                    <option value="1825">Every 5th year</option>
                                    <option value="2190">Every 6th year</option>
                                    <option value="2555">Every 7th year</option>
                                    <option value="2920">Every 8th year</option>
                                    <option value="3285">Every 9th year</option>
                                    <option value="3652">Every 10th year</option>
                                 </select>
                              </div>
                              <div v-if="verrors.has('pollution_frequency')" class="help-block invalid-feedback"> {{
                                 verrors.first('pollution_frequency') }}</div>
                           </div>
                        </div>
                        <div class="col-3">
                           <div class="form-group">
                              <label class="mt-1">Pollution Amount</label>
                              <div class="input-group">
                                 <input v-model="form.pollution_amount" type="number" name="pollution_amount" class="form-control"
                                    :class="{ 'is-invalid': verrors.has('pollution_amount') }">
                              </div>
                              <div v-if="verrors.has('pollution_amount')" class="help-block invalid-feedback"> {{
                                 verrors.first('pollution_amount') }}</div>
                           </div>
                        </div>
                        <div class="col-3">
                           <div class="form-group">
                              <label class="mt-1">Pollution Copy <a :href="form.pollution_copy" v-if="form.pollution_copy != ''" target="new">View</a></label>
                              <div class="form-check form-check-inline input-group">
                                 <input class="form-check-input" type="file" name="pollution_copy" accept="image/*, .xls,.xlsx, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel, .pdf"
                                    v-on:change="onPollutionChange">
                              </div>
                              <div v-if="verrors.has('pollution_copy')" class="help-block invalid-feedback">
                                 {{ verrors.first('pollution_copy') }}
                              </div>
                           </div>
                        </div>
                     </div>

                     <div class="row">
                        <div class="col-3">
                           <div class="form-group">
                              <label class="mt-1">Last RC Date</label>
                              <div class="input-group">
                                 <input v-model="form.rc_date" type="date" name="rc_date" class="form-control"
                                    :class="{ 'is-invalid': verrors.has('rc_date') }">
                              </div>
                              <div v-if="verrors.has('rc_date')" class="help-block invalid-feedback"> {{
                                 verrors.first('rc_date') }}</div>
                           </div>
                        </div>
                        <div class="col-3">
                           <div class="form-group">
                              <label class="mt-1">RC Frequency</label>
                              <div class="input-group">
                                 <select v-model="form.rc_frequency" type="text" name="rc_frequency" class="form-control"
                                    :class="{ 'is-invalid': verrors.has('rc_frequency') }" data-vv-as="Rc Frequency">
                                    <option value="90">Quarterly</option>
                                    <option value="182">Half yearly</option>
                                    <option value="365">Yearly</option>
                                    <option value="730">Every 2nd year</option>
                                    <option value="1095">Every 3rd year</option>
                                    <option value="1460">Every 4th year</option>
                                    <option value="1825">Every 5th year</option>
                                    <option value="2190">Every 6th year</option>
                                    <option value="2555">Every 7th year</option>
                                    <option value="2920">Every 8th year</option>
                                    <option value="3285">Every 9th year</option>
                                    <option value="3652">Every 10th year</option>
                                    <option value="5475">Every 15th year</option>
                                 </select>
                              </div>
                              <div v-if="verrors.has('rc_frequency')" class="help-block invalid-feedback"> {{
                                 verrors.first('rc_frequency') }}</div>
                           </div>
                        </div>
                        <div class="col-3">
                           <div class="form-group">
                              <label class="mt-1">RC Amount</label>
                              <div class="input-group">
                                 <input v-model="form.rc_amount" type="number" name="rc_amount" class="form-control"
                                    :class="{ 'is-invalid': verrors.has('rc_amount') }">
                              </div>
                              <div v-if="verrors.has('rc_amount')" class="help-block invalid-feedback"> {{
                                 verrors.first('rc_amount') }}</div>
                           </div>
                        </div>
                        <div class="col-3">
                           <div class="form-group">
                              <label class="mt-1">RC Copy <a :href="form.rc_copy" v-if="form.rc_copy != ''" target="new">View</a></label>
                              <div class="form-check form-check-inline input-group">
                                 <input class="form-check-input" type="file" name="rc_copy" accept="image/*, .xls,.xlsx, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel, .pdf"
                                    v-on:change="onRCChange">
                              </div>
                              <div v-if="verrors.has('rc_copy')" class="help-block invalid-feedback">
                                 {{ verrors.first('rc_copy') }}
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div class="card">
                     <div class="card-body">
                        <div class="row">
                           <div class="col-12" v-if="!form.id">
                              <div class="row">
                                 <div class="col-6">
                                    <div class="form-group">
                                       <label>Allocate to Site</label>
                                       <v-select label="site_name" :reduce="(option) => option.id" :options="sites"
                                          placeholder="Choose Site ..." v-model="form.site_id" v-validate="'required'"
                                          :class="{ 'is-invalid': verrors.has('site_id') }" data-vv-as="site"
                                          name="site_id" class="required">
                                       </v-select>
                                       <div v-if="verrors.has('site_id')" class="help-block invalid-feedback">
                                          {{ verrors.first('site_id') }}
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col-6">
                                    <div class="form-group">
                                       <label>Site Allocation Date</label>
                                       <datetime value-zone="Asia/Kolkata" v-model="form.from_date" name="from_date"
                                          input-class="form-control required"
                                          :class="{ 'is-invalid': verrors.has('from_date') }" v-validate="'required'"
                                          data-vv-as="From Date" />
                                       <div v-if="verrors.has('from_date')" class="help-block invalid-feedback"> {{
                                          verrors.first('from_date')
                                       }}
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="col-12" v-if="form.id && machined.current_site">
                              <div class="row">
                                 <div class="col-6">
                                    <div class="form-group">
                                       <label>Currently Allocated Site</label>
                                       <input type="text" class="form-control required" disabled
                                          :value="machined.current_site.site_name" />
                                    </div>
                                 </div>
                                 <div class="col-6">
                                    <div class="form-group">
                                       <label>Allocation Date</label>
                                       <input type="text" class="form-control required" disabled
                                          :value="machined.current_site.from_date | myDate" />
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div><!-- /.card-body -->
                  </div>

                  <div class="card">
                     <div class="card-body">
                        <div class="row">
                           <div class="col-12" v-if="!form.id">
                              <div class="row">
                                 <div class="col-6">
                                    <div class="form-group">
                                       <label>Allocate Operator</label>
                                       <v-select label="name" :reduce="(option) => option.id" :options="operators"
                                          placeholder="Choose Site ..." v-model="form.operator_id" v-validate="'required'"
                                          :class="{ 'is-invalid': verrors.has('operator_id') }" data-vv-as="operator"
                                          name="operator_id" class="required">
                                       </v-select>
                                       <div v-if="verrors.has('operator_id')" class="help-block invalid-feedback">
                                          {{ verrors.first('operator_id') }}
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col-6">
                                    <div class="form-group">
                                       <label>Operator Allocation Date</label>
                                       <datetime value-zone="Asia/Kolkata" v-model="form.operator_date" name="operator_date"
                                          input-class="form-control required"
                                          :class="{ 'is-invalid': verrors.has('operator_date') }" v-validate="'required'"
                                          data-vv-as="From Date" />
                                       <div v-if="verrors.has('operator_date')" class="help-block invalid-feedback"> {{
                                          verrors.first('operator_date')
                                       }}
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="col-12" v-if="form.id && machined.machine_operators">
                              <div class="row">
                                 <div class="col-6">
                                    <div class="form-group">
                                       <label>Currently Allocated Operator</label>
                                       <input type="text" class="form-control required" disabled
                                          :value="machined.machine_operators.operator_name" />
                                    </div>
                                 </div>
                                 <div class="col-6">
                                    <div class="form-group">
                                       <label>Allocation Date</label>
                                       <input type="text" class="form-control required" disabled
                                          :value="machined.machine_operators.from_date | myDate" />
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div><!-- /.card-body -->
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
            id: '', far_no: '', name: '', category_id: '', sub_category_id: '', machine_companies_id: '', machine_models_id: '', owner: 'Owned', purchase_date: '', purchase_price: '', year_of_depreciation: '', machine_type: 'New', manufacture_year: '', regn_no: '', machine_sr_no: '', engine_model: '', engine_no: '', chassis_no: '', condition_of_machine: '', standard_consumption_hr_per_ltr: '', standard_consumption_km_per_ltr: '', consumption_type: 'Fuel', under_maintenance: 'Yes', is_maintenance_date: true, is_consumtion_hr_run: '', is_consumtion_km_run: '', is_production_fig: '',
            date_time_machine_ic: new Date().toISOString(),
            date_threshold: '', run_hour_threshold: '', run_km_threshold: '', production_fig_threshold: '', site_id: '', operator_id:'', last_maintenance_date: '', last_hr_run: '', present_run_hour: '', last_km_run: '', present_run_km: '', periodic_maintenance_breakdown: '', present_production_fig: '', free_service_no: '', prdloss_hrs: '',
            prdloss_hr_rate: '', invoice_no: '', invoice_copy: '', cf_date: '', cf_frequency: '', national_permit_date: '', national_permit_frequency: '', road_tax_date: '', road_tax_frequency: '', insurance_date: '', insurance_frequency: '', pollution_date: '', pollution_frequency: '', rc_date: '', rc_frequency: '', cf_amount: '', cf_copy: '', national_permit_amount: '', national_permit_copy: '', road_tax_amount: '', road_tax_copy: '', insurance_amount: '', insurance_copy: '', pollution_amount: '', pollution_copy: '', rc_amount: '', rc_copy: '',
            amc: '', amc_start_date: '', amc_end_date: '',
         }),
         categories: [],
         sub_categories: [],
         companies: [],
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
      axios.get("api/get_pre_machine")
         .then((res) => {
            this.categories = res.data.data.Category;
            this.companies = res.data.data.MachineCompany;
            this.sites = res.data.data.sites;
            this.operators = res.data.data.operators;
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
            if (valid && ((this.form.under_maintenance == 'Yes' && (this.form.is_consumtion_hr_run || this.form.is_consumtion_km_run || this.form.is_production_fig)) || this.form.under_maintenance == 'No')) {
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
                  this.form.post('api/machine')
                     .then((data) => {
                        this.$validator.reset();
                        cloaderd.hide()
                        this.form.id = data.data.data.id;
                        this.form.reset();
                        Toast.fire({
                           icon: 'success',
                           title: data.data.message
                        });
                        this.$router.push('/machines').catch(() => { });
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
