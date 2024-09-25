<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">{{ form.id ? 'Update' : 'Add' }} Ticket <span v-if="pop_ticket"> - {{
                                pop_ticket.ticket_no }}</span> </h3>
                        </div><!-- /.card-header -->
                        <div class="card-body">

                            <form @submit.prevent="submitTicket()" class="form-horizontal row">
                                <div class="col-6">
                                    <div class="form-group">
                                        <label>Machine Site</label>
                                        <v-select label="site_name" :reduce="(option) => option.id" :options="sites"
                                            placeholder="Choose Site ..." v-model="form.site_id" v-validate="'required'"
                                            :class="{ 'is-invalid': verrors.has('site_id') }" data-vv-as="site"
                                            class="required" name="site_id" :disabled="form.id != ''">
                                        </v-select>
                                        <div v-if="verrors.has('site_id')" class="help-block invalid-feedback">
                                            {{ verrors.first('site_id') }}
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label>Machine Category</label>
                                        <v-select label="name" :reduce="(option) => option.id" :options="categories"
                                            placeholder="Choose Category ..." v-model="form.category_id"
                                            v-validate="'required'" :class="{ 'is-invalid': verrors.has('category_id') }"
                                            data-vv-as="Category" class="required" name="category_id"
                                            :disabled="form.id != ''">
                                        </v-select>
                                        <div v-if="verrors.has('category_id')" class="help-block invalid-feedback">
                                            {{ verrors.first('category_id') }}
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label>Machine Description</label>
                                        <v-select label="name" :reduce="(option) => option.id" :options="sub_categories"
                                            placeholder="Choose description ..." v-model="form.sub_category_id"
                                            v-validate="'required'"
                                            :class="{ 'is-invalid': verrors.has('sub_category_id') }"
                                            data-vv-as="description" class="required" name="sub_category_id"
                                            :disabled="form.id != ''">
                                        </v-select>
                                        <div v-if="verrors.has('sub_category_id')" class="help-block invalid-feedback">
                                            {{ verrors.first('sub_category_id') }}
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label>Select Machine</label>
                                        <v-select label="name" :get-option-label="getLabel" :reduce="(option) => option.id"
                                            :options="machines" placeholder="Enter machines ..." v-model="form.machine_id"
                                            v-validate="'required'" :class="{ 'is-invalid': verrors.has('machine_id') }"
                                            name="machine_id" data-vv-as="Select machine" :disabled="form.id != ''">
                                        </v-select>
                                        <div v-if="verrors.has('machine_id')" class="help-block invalid-feedback">{{
                                            verrors.first('machine_id')
                                        }}</div>
                                    </div>
                                </div>

                                <div class="col-6">
                                    <div class="form-group">
                                        <label>Machine's problem description</label>
                                        <textarea placeholder="Enter Machine's problem ..."
                                            v-model="form.problem_description" v-validate="''"
                                            :class="{ 'is-invalid': verrors.has('problem_description') }"
                                            name="problem_description" data-vv-as="Machine's problem"
                                            :disabled="form.id != ''" class="form-control">
                                            </textarea>
                                        <div v-if="verrors.has('problem_description')" class="help-block invalid-feedback">
                                            {{
                                                verrors.first('problem_description')
                                            }}</div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label>Complaint Nature</label>
                                        <select v-model="form.complaint_nature" v-validate="'required'"
                                            :class="{ 'is-invalid': verrors.has('complaint_nature') }"
                                            name="complaint_nature" data-vv-as="Complaint Nature" class="form-control"
                                            :disabled="form.id != ''">
                                            <option value="Major">Major</option>
                                            <option value="Minor">Minor</option>
                                        </select>
                                        <div v-if="verrors.has('complaint_nature')" class="help-block invalid-feedback">
                                            {{
                                                verrors.first('complaint_nature')
                                            }}</div>
                                    </div>
                                </div>

                                <template>
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label>Maintenance Provider</label>
                                            <select v-model="form.maintenance_provider" v-validate="'required'"
                                                :class="{ 'is-invalid': verrors.has('maintenance_provider') }"
                                                name="maintenance_provider" data-vv-as="Maintenance Provider"
                                                class="form-control">
                                                <option value="vendor">Vendor</option>
                                                <option value="user">Internal User</option>
                                            </select>
                                            <div v-if="verrors.has('maintenance_provider')"
                                                class="help-block invalid-feedback">{{
                                                    verrors.first('maintenance_provider')
                                                }}</div>
                                        </div>
                                    </div>

                                    <div class="col-6">
                                        <div class="form-group">
                                            <label>Select {{ form.maintenance_provider == 'user' ? 'user' : 'vendor' }}
                                            </label>
                                            <v-select label="name" :reduce="(option) => option.id" :options="users"
                                                placeholder="Enter users ..." v-model="form.vendor_id"
                                                v-validate="'required'" :class="{ 'is-invalid': verrors.has('vendor_id') }"
                                                name="vendor_id" data-vv-as="Select vendor"
                                                v-if="form.maintenance_provider == 'vendor'" key="vn" multiple>
                                            </v-select>
                                            <div v-if="verrors.has('vendor_id')" class="help-block invalid-feedback">{{
                                                verrors.first('vendor_id')
                                            }}</div>

                                            <v-select key="un" v-if="form.maintenance_provider == 'user'" label="name"
                                                :reduce="(option) => option.id" :options="users"
                                                placeholder="Enter users ..." v-model="form.user_id" v-validate="'required'"
                                                :class="{ 'is-invalid': verrors.has('user_id') }" name="user_id"
                                                data-vv-as="Select user">
                                            </v-select>
                                            <div v-if="verrors.has('user_id')" class="help-block invalid-feedback">
                                                {{
                                                    verrors.first('user_id')
                                                }}</div>

                                        </div>
                                    </div>

                                    <div class="col-6" v-if="form.maintenance_provider == 'vendor'">
                                        <div class="form-group">
                                            <label>Service Type</label>
                                            <div class="custom-control custom-radio">
                                                <input type="radio" id="customRadio1" name="customRadio"
                                                    class="custom-control-input" value="Paid Service"
                                                    v-model="form.service_type"
                                                    :disabled="form.id != '' && form.ticket_type && pop_ticket && pop_ticket.status == 'Open'">
                                                <label class="custom-control-label" for="customRadio1">Paid
                                                    Service</label>
                                            </div>
                                            <div class="custom-control custom-radio">
                                                <input type="radio" id="customRadio2" name="customRadio"
                                                    class="custom-control-input" value="Free Service"
                                                    v-model="form.service_type"
                                                    :disabled="(selected_machine && (selected_machine.completed_free_service >= selected_machine.free_service_no)) || (form.id != '' && form.ticket_type && pop_ticket && pop_ticket.status == 'Open')">
                                                <label class="custom-control-label" for="customRadio2">Free
                                                    Service</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-6" v-if="form.service_type == 'Free Service'">
                                        <div class="form-group">
                                            <label>Free service no</label>
                                            <div class="input-group">
                                                <input v-model="form.free_service_no" type="text" name="free_service_no"
                                                    v-validate="'required'" data-vv-as="free service no"
                                                    class="form-control"
                                                    :class="{ 'is-invalid': verrors.has('free_service_no') }" readonly
                                                    aria-describedby="free_service_no">
                                                <div class="input-group-append">
                                                    <span class="input-group-text" id="free_service_no"> /
                                                        {{ selected_machine ? selected_machine.free_service_no : ''
                                                        }}</span>
                                                </div>
                                            </div>
                                            <div v-if="verrors.has('free_service_no')" class="help-block invalid-feedback">
                                                {{
                                                    verrors.first('free_service_no')
                                                }}</div>
                                        </div>
                                    </div>

                                </template>



                                    <div class="col-6">
                                        <div class="row">
                                            <div class="col-6">
                                                <div class="form-group">
                                                    <label>Ticket Type </label>
                                                    <select v-model="form.ticket_type" name="ticket_type"
                                                        v-validate="'required'" data-vv-as="Ticket Type"
                                                        class="form-control"
                                                        :class="{ 'is-invalid': verrors.has('ticket_type') }"
                                                        :disabled="(form && form.id != '' && form.ticket_type != '' && form.ticket_type != 'null' && form.ticket_type && pop_ticket && pop_ticket.status == 'Open')">
                                                        <option value="Periodic Maintenance">Periodic Maintenance</option>
                                                        <option value="Breakdown Maintenance">Breakdown Maintenance</option>
                                                    </select>
                                                    <div v-if="verrors.has('ticket_type')"
                                                        class="help-block invalid-feedback">
                                                        {{ verrors.first('ticket_type') }}
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="form-group">
                                                    <label>Status During Complain</label>
                                                    <select v-model="form.status_during_complaint"
                                                        name="status_during_complaint" v-validate="'required'"
                                                        data-vv-as="Status During Complaint" class="form-control"
                                                        :class="{ 'is-invalid': verrors.has('status_during_complaint') }">
                                                        <option value="Running">Running</option>
                                                        <option value="Running with problem">Running with problem</option>
                                                        <option value="Breakdown"
                                                            v-if="form.ticket_type == 'Breakdown Maintenance'">Breakdown
                                                        </option>
                                                    </select>
                                                    <div v-if="verrors.has('status_during_complaint')"
                                                        class="help-block invalid-feedback">
                                                        {{ verrors.first('status_during_complaint') }}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <template>

                                    <div :class="expired_likely_date ? 'col-4' : 'col-6'">
                                        <div class="form-group">
                                            <label>Expected date of Maintenance</label>
                                            <datetime value-zone="Asia/Kolkata" v-model="form.likely_date"
                                                name="likely_date" input-class="form-control"
                                                :class="{ 'is-invalid': verrors.has('likely_date') }"
                                                v-validate="'required'" data-vv-as="Expected date"
                                                :disabled="form.id != '' && form.likely_date != '' && pop_ticket && pop_ticket.status == 'Open'"
                                                :min-datetime="new Date().toISOString()" />
                                            <div v-if="verrors.has('likely_date')" class="help-block invalid-feedback">
                                                {{
                                                    verrors.first('likely_date')
                                                }}</div>
                                        </div>
                                    </div>
                                    <div class="col-4" v-if="expired_likely_date">
                                        <div class="form-group">
                                            <label>Revised Expected date of Maintenance</label>
                                            <datetime value-zone="Asia/Kolkata" v-model="form.reversion_date"
                                                name="reversion_date" input-class="form-control"
                                                :class="{ 'is-invalid': verrors.has('reversion_date') }" v-validate="''"
                                                data-vv-as="Reversion Expected date"
                                                :disabled="(form.id != '' && pop_ticket.reversion_date != '' && pop_ticket.reversion_date != 'null' && pop_ticket.reversion_date != null)"
                                                :min-datetime="new Date().toISOString()" />
                                            <div v-if="verrors.has('reversion_date')" class="help-block invalid-feedback">
                                                {{
                                                    verrors.first('reversion_date')
                                                }}</div>
                                        </div>
                                    </div>
                                    <div class="col-4" v-if="expired_likely_date">
                                        <div class="form-group">
                                            <label>Reason for Date Revision</label>
                                            <input v-model="form.reversion_reason" name="reversion_reason"
                                                class="form-control"
                                                :class="{ 'is-invalid': verrors.has('reversion_reason') }"
                                                v-validate="{ required: form.reversion_date != '' }"
                                                data-vv-as="Reversion Date Reason"
                                                :disabled="(form.id != '' && pop_ticket.reversion_date != '' && pop_ticket.reversion_date != 'null' && pop_ticket.reversion_date != null)" />
                                            <div v-if="verrors.has('reversion_reason')" class="help-block invalid-feedback">
                                                {{
                                                    verrors.first('reversion_reason')
                                                }}</div>
                                        </div>
                                    </div>

                                    <div class="col-12">

                                        <div class="card">
                                            <div class="card-header">
                                                <strong> Estimated Cost</strong>
                                            </div>
                                            <div class="card-body">

                                                <div class="row">

                                                    <div class="col-6">
                                                        <div class="form-group">
                                                            <label>Estimated Material Cost</label>
                                                            <input v-model="form.estimated_material_cost" type="text"
                                                                name="estimated_material_cost"
                                                                v-validate="{ required: last_stage_index > 0, decimal: 2 }"
                                                                data-vv-as="Estimated Material cost" class="form-control"
                                                                :class="{ 'is-invalid': verrors.has('estimated_material_cost') }"
                                                                :disabled="(form && form.id != '' && estimated_material_cost != null && estimated_material_cost != '' && estimated_material_cost >= 0 && pop_ticket && pop_ticket.status == 'Open')">
                                                            <div v-if="verrors.has('estimated_material_cost')"
                                                                class="help-block invalid-feedback"> {{
                                                                    verrors.first('estimated_material_cost')
                                                                }}</div>
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="form-group">
                                                            <label> Estimated Material cost File</label>
                                                            <input type="file" @change="uploadMaterialCost" multiple
                                                                name="material_cost" ref="filematerial" class="form-control"
                                                                :class="{ 'is-invalid': verrors.has('material_cost') }"
                                                                v-validate="''" data-vv-as="Estimated Material cost" />
                                                            <div class="clearfix"
                                                                v-if="pop_ticket && pop_ticket.estimated_material_files">
                                                                <a v-for="(item, x) in pop_ticket.estimated_material_files"
                                                                    :key="item.id" :href="item.file" target="_blank">View
                                                                    {{
                                                                        pop_ticket.estimated_material_files.length > 1 ? x + 1
                                                                        : ''
                                                                    }}</a>
                                                            </div>
                                                            <div v-if="verrors.has('material_cost')"
                                                                class="help-block invalid-feedback"> {{
                                                                    verrors.first('material_cost')
                                                                }}</div>
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="form-group">
                                                            <label>Estimated Service cost</label>
                                                            <input v-model="form.estimated_service_cost" type="text"
                                                                name="estimated_service_cost"
                                                                v-validate="{ required: last_stage_index > 0, decimal: 2 }"
                                                                data-vv-as="Estimated Service cost" class="form-control"
                                                                :class="{ 'is-invalid': verrors.has('estimated_service_cost') }"
                                                                :disabled="form.id != '' && estimated_service_cost != '' && estimated_service_cost > 0 && estimated_service_cost && pop_ticket && pop_ticket.status == 'Open'">
                                                            <div v-if="verrors.has('estimated_service_cost')"
                                                                class="help-block invalid-feedback"> {{
                                                                    verrors.first('estimated_service_cost')
                                                                }}</div>
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="form-group">
                                                            <label> Estimated Service cost </label>

                                                            <input type="file" @change="uploadServiceCost" multiple
                                                                name="service_cost" ref="fileservice" class="form-control"
                                                                :class="{ 'is-invalid': verrors.has('service_cost') }"
                                                                v-validate="''" data-vv-as="Estimated Service cost" />
                                                            <div class="clearfix"
                                                                v-if="pop_ticket && pop_ticket.estimated_service_files">
                                                                <a v-for="(item, x) in pop_ticket.estimated_service_files"
                                                                    :key="item.id" :href="item.file" target="_blank">View
                                                                    {{
                                                                        pop_ticket.estimated_service_files.length > 1 ? x + 1 :
                                                                        ''
                                                                    }}</a>
                                                            </div>
                                                            <div v-if="verrors.has('service_cost')"
                                                                class="help-block invalid-feedback">
                                                                {{
                                                                    verrors.first('service_cost')
                                                                }}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>






                                    <div class="col-12" v-if="form.id">

                                        <div class="card">
                                            <div class="card-header">
                                                <strong> Stage</strong>
                                            </div>
                                            <div class="card-body">






                                                <template v-for="(field, x) in form.stages">
                                                    <div class="row" :key="'s' + x">
                                                        <div class="col-3 ">
                                                            <select v-model="field.stage_no" class="form-control"
                                                                v-validate="'required'" name="stage_no"
                                                                :class="{ 'is-invalid': verrors.has('stage_no') }"
                                                                :disabled="x < form.stages.length - 1">
                                                                <option value="" disabled>Select stage</option>
                                                                <option :value="stg" v-for="(stg, index) in opn_stage"
                                                                    :key="index" :disabled="index < last_stage_index">
                                                                    {{ stg }}</option>
                                                            </select>
                                                        </div>
                                                        <div class="col-3">
                                                            <datetime value-zone="Asia/Kolkata" v-model="field.stage_date"
                                                                name="stage_date" input-class="form-control"
                                                                placeholder="Select date"
                                                                :class="{ 'is-invalid': verrors.has('stage_date') }"
                                                                v-validate="''" data-vv-as="Date" :key="'stgdate' + x"
                                                                :min-datetime="last_stage_date ? new Date(last_stage_date).toISOString() : ''"
                                                                :max-datetime="new Date().toISOString()" />
                                                        </div>
                                                        <div class="col-5">
                                                            <input v-model="field.description" class="form-control"
                                                                placeholder="Enter Description">
                                                        </div>
                                                        <div class="col-1">
                                                            <span @click="form.stages.splice(x, 1)"
                                                                v-if="form.stages.length == x + 1"><i
                                                                    class="fa fa-times red" aria-hidden="true"></i></span>
                                                        </div>
                                                    </div>
                                                </template>
                                                <button @click="AddStage" type="button" class="btn btn-success float-right"
                                                    :disabled="form.stages.length > 0 && !last_stage_index && !last_stage_date">Add
                                                    +</button>

                                            </div>
                                        </div>

                                    </div>
                                    <div class="col-12" v-if="form.id">

                                        <div class="card">
                                            <div class="card-header">
                                                <strong> Additional Problems</strong>
                                            </div>
                                            <div class="card-body">


                                                <template v-for="(field, x) in form.problems">
                                                    <div class="row" :key="'ap' + x">
                                                        <div class="col-5">
                                                            <label>Problem</label>
                                                            <textarea placeholder="Enter Machine's problem ..."
                                                                v-model="field.problem" name="problem" class="form-control">
                                                        </textarea>
                                                        </div>
                                                        <div class="col-3">
                                                            <div class="form-group">
                                                                <label>Estimated Material cost</label>
                                                                <input v-model="field.estimated_material_cost" type="text"
                                                                    :name="'estimated_material_cost' + x"
                                                                    v-validate="'required|decimal:2'"
                                                                    data-vv-as="Estimated Material cost"
                                                                    class="form-control"
                                                                    :class="{ 'is-invalid': verrors.has('estimated_material_cost' + x) }">
                                                            </div>
                                                        </div>
                                                        <div class="col-3">
                                                            <div class="form-group">
                                                                <label>Estimated Service cost</label>
                                                                <input v-model="field.estimated_service_cost" type="text"
                                                                    :name="'estimated_service_cost' + x"
                                                                    v-validate="'required|decimal:2'"
                                                                    data-vv-as="Estimated Service cost" class="form-control"
                                                                    :class="{ 'is-invalid': verrors.has('estimated_service_cost' + x) }">
                                                            </div>
                                                        </div>
                                                        <div class="col-1">
                                                            <span @click="form.problems.splice(x, 1)"><i
                                                                    class="fa fa-times red" aria-hidden="true"></i></span>
                                                        </div>
                                                    </div>
                                                </template>
                                                <button @click="AddProblem" type="button"
                                                    class="btn btn-warning float-right">Add +</button>
                                            </div>
                                        </div>
                                    </div>



                                </template>




                                <div class="col-12">
                                    <div class="row">
                                    <div class="col text-center">
                                        <button class="btn btn-success" type="submit">Submit</button>
                                    </div>
                                </div>
                                </div>


                            </form>
                        </div><!-- /.card-body -->
                    </div>
                    <!-- /.nav-tabs-custom -->
                </div>
                <!-- end tabs -->
            </div>
        </div>
    </section>
</template>

<script>

import {
    mapGetters
} from "vuex";
export default {
    name: "UserAddEdit",
    data() {
        return {
            estimated_material_cost: '',
            estimated_service_cost: '',
            expired_likely_date: false,
            pop_ticket: '',
            popticket: {},
            categories: [],
            sub_categories: [],
            sites: [],
            selected_machine: '',
            users: [],
            machines: [],
            MaterialCost: null,
            ServiceCost: null,
            form: new Form({
                id: '',
                site_id: '',
                category_id: '',
                sub_category_id: '',
                free_service_no: '',
                ticket_type: 'Periodic Maintenance',
                status_during_complaint: '',
                service_type: 'Paid Service',
                machine_id: '',
                ticket_no: '',
                vendor_id: [],
                user_id: '',
                likely_date: '',
                reversion_date: '',
                reversion_reason: '',
                estimated_material_cost: '',
                estimated_service_cost: '',
                maintenance_provider: 'vendor',
                problem_description: '',
                complaint_nature: 'Major',
                stages: [],
                problems: []
            }),
            stages: [{
                id: '',
                stage_no: '',
                stage_date: '',
                description: '',
                file: '',
                new_file: ''
            }],
            problems: [{
                id: '',
                problem: '',
                estimated_material_cost: '',
                estimated_service_cost: '',
            }],
            opn_stage: ['Vendor Exploration & RFQ Initiated', 'Vendor created', 'Vendor Assigned', 'Sent for Approval', 'Approval Receipt', 'Order issued', 'Payment under process', 'Payment Done', 'Logistics under process', 'Materials despatched', 'Material received at site', 'Maintainace under progress', 'Job Completed'],
            last_stage_index: 0,
            last_stage_date: '',

        }
    },
    computed: {
        ...mapGetters(["errors"]),
    },
    beforeCreate() {
        axios.get("api/get_pre_machine")
            .then((res) => {
                this.categories = res.data.data.Category;
                this.sites = res.data.data.sites;
            })
        axios.get("/api/initial_ticket").then(response => {
            this.users = response.data.data.vendors;
            this.machines = response.data.data.machines;
            this.search_machines = response.data.data.machines;
            this.search_sites = response.data.data.sites;
        }).catch(() => console.warn('Oh. Something went wrong'));
    },
    methods: {
        getLabel(val) {
            // console.log(val,this.machines);
            if (typeof val === 'object') {
                return val.far_no + ' - ' + val.name + ' - ' + (val.machine_model ? val.machine_model.name : 'null') + ' - ' + val.machine_sr_no;
            } else {
                return val;
            }
        },
        AddStage() {
            this.form.stages.push({
                stage_no: '',
                stage_date: '',
                description: '',
            });
        },
        AddProblem() {
            this.form.problems.push({
                problem: '',
                estimated_material_cost: '',
                estimated_service_cost: '',
            });
        },


        async uploadMaterialCost(event) {
            this.MaterialCost = event.target.files
        },
        async uploadServiceCost(event) {
            this.ServiceCost = event.target.files
        },


        async upload_files(id, isactual = false) {
            let fl = 0
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
                    axios.post('api/ticket/files', fd).then((res) => {
                        console.log('gallery uploaded')
                    })
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
                    axios.post('api/ticket/files', fd).then((res) => {
                        console.log('gallery uploaded')
                    })
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
                    axios.post('api/ticket/stages', fd).then((res) => {
                        console.log('stages uploaded')
                    })
                });
            }
        },

        submitTicket() {

            if (this.form.stages.length <= 0) {
                this.AddStage();
                return false;
            }
            this.$forceUpdate();
            this.$validator.validateAll().then(async (valid) => {
                if (valid) {
                    let pop_loader = this.$loading.show({
                        container: this.$refs.vps_submit_pop,
                    });
                    if (this.form.id) {
                        this.form.put('/api/ticket/' + this.form.id)
                            .then((response) => {
                                if (response.data.success) {
                                    this.$router.push('/tickets/').catch(() => { });
                                    Toast.fire({
                                        icon: 'success',
                                        title: response.data.message
                                    });
                                    //  this.upload_stages(this.form.id)
                                    this.upload_files(this.form.id)
                                    this.loadTickets();
                                }
                                pop_loader.hide()
                            })
                            .catch(err => {
                                pop_loader.hide()
                                if (typeof err.response.data != 'undefined') {
                                    this.$setErrorsFromResponse(err.response.data);
                                }
                            })

                    } else {
                        this.form.post('/api/ticket')
                            .then((response) => {
                                if (response.data.success) {
                                    this.$router.push('/tickets/').catch(() => { });
                                    Toast.fire({
                                        icon: 'success',
                                        title: response.data.message
                                    });

                                    this.upload_files(response.data.data.id)
                                    this.loadTickets();
                                }
                                pop_loader.hide()
                            })
                            .catch(err => {
                                pop_loader.hide()
                                if (typeof err.response.data != 'undefined') {
                                    this.$setErrorsFromResponse(err.response.data);
                                }
                            })
                    }

                }
            });


        },

        async check_free_service() {
            if (this.selected_machine) {
                if (this.selected_machine.completed_free_service >= this.selected_machine.free_service_no) {
                    this.form.service_type = 'Paid Service';
                    this.form.free_service_no = ''
                } else {
                    this.form.free_service_no = (this.selected_machine.completed_free_service + 1)
                }


                if (this.selected_machine && this.selected_machine.machine_type == 'New' && this.form.service_type == 'Free Service') {
                    //  this.selected_machine.free_service_no
                }
            }
        },

        async get_machine() {
            if (this.form.id == '') {
                this.form.machine_id = ''
            }
            axios.get("/api/ticket_machine", {
                params: {
                    site_id: this.form.site_id,
                    category_id: this.form.category_id,
                    sub_category_id: this.form.sub_category_id,
                    id: this.form.id
                }
            }).then(response => {
                this.machines = response.data.data;
            }).catch(() => console.warn('Oh. Something went wrong'));
        }




    },
    mounted() {
        if (this.$route.params.id) {
            this.form.id = this.$route.params.id;
            let cloaderd = this.$loading.show({
                container: this.$refs.ref_load_user
            });
            axios.get("api/ticket/" + this.$route.params.id)
                .then((res) => {
                    let ticket = res.data.data
                    this.$validator.pause();
                    this.form.reset();
                    this.pop_ticket = ticket
                    // if (this.$gate.isAdmin()) {
                        this.$refs.fileservice.value = null;
                        this.$refs.filematerial.value = null;
                    // }
                    this.MaterialCost = null
                    this.ServiceCost = null
                    this.form.fill(ticket);
                    this.form.likely_date = ticket.likely_date ? new Date(ticket.likely_date).toISOString() : ''
                    this.stages = []
                    if (ticket.stages && ticket.stages.length > 0) {
                        this.stages = ticket.stages
                    }
                    this.estimated_material_cost = ticket.estimated_material_cost
                    this.estimated_service_cost = ticket.estimated_service_cost

                    this.form.vendor_id = ticket.allocated_vendors.map(g => g.id);
                    this.$validator.resume();
                    cloaderd.hide();
                })
                .catch(() => {
                    cloaderd.hide();
                    this.$router.push('/tickets/').catch(() => { });
                })

        }
    },
    created() { },

    watch: {
        async 'form.sub_category_id'(n, o) {
            if (n) {
                this.get_machine()
            }
        },
        async 'form.site_id'(n, o) {
            if (n) {
                this.get_machine()
            }
        },

        'form.category_id': {
            handler: function (n, o) {
                if (n) {
                    if (this.form.id == '') {
                        this.form.sub_category_id = ''
                    }
                    axios.get("api/category/" + n)
                        .then((res) => {
                            this.sub_categories = res.data.data;
                        })
                    this.get_machine()
                }
            },
            deep: true,
            initial: true
        },
        'form.stages': {
            handler: function (n, o) {
                if (n && n.length > 0) {
                    let la = n[n.length - 1];
                    if (la.stage_no) {
                        this.last_stage_index = this.opn_stage.indexOf(la.stage_no);
                    }
                    if (la.stage_date && la.stage_date != '0000-00-00') {
                        console.log(la.stage_date)
                        this.last_stage_date = new Date(la.stage_date).toISOString();
                    }
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
            initial: true,
        },

        async 'form.maintenance_provider'(n, o) {
            if (n != 'vendor') {
                this.form.service_type = 'Paid Service'
            }
            if (n == 'vendor' && o == 'user') {
                this.form.user_id = ''
            }
            if (n == 'user' && o == 'vendor') {
                this.form.vendor_id = []
            }
            axios.get("api/user/list", {
                params: {
                    type: n
                }
            })
                .then(response => {
                    this.users = response.data.data;
                }).catch(() => console.warn('Oh. Something went wrong'));
        },

        async 'form.machine_id'(n) {
            this.selected_machine = this.machines.find(x => x.id === n);
            await this.check_free_service()
        },
        async 'form.service_type'(n) {
            if (n == 'Free Service') {
                await this.check_free_service()
            }
        },
        async 'form.likely_date'(n) {
            if (n) {
                var specific_date = new Date(n);
                var current_date = new Date();
                if (current_date.getTime() > specific_date.getTime()) {
                    this.expired_likely_date = true
                } else {
                    this.expired_likely_date = false
                }
            } else {
                this.expired_likely_date = false
            }
        }

    },
}
</script>
