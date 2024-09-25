<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Ticket List</h3>
                            <div class="card-tools">
                                <router-link to="/ticket/add" class="btn btn-sm btn-primary" @click="newModal">
                                    <i class="fa fa-plus-square"></i>
                                    Add New
                                </router-link>
                                <button class="btn btn-sm btn-blue" @click="openSideModal"><i
                                        class="fa fa-sliders-h mr-2" aria-hidden="true"></i> Filter</button>
                            </div>
                        </div>


                        <SidebarModal ref="sidebarModal">
                            <!-- Content of the sidebar modal goes here -->
                            <h3><i class="fa fa-sliders-h mr-2" aria-hidden="true" style="font-size: 22px;"></i> Filter
                            </h3>
                            <hr>
                            <form autocomplete="off" @submit.prevent="getResults()" data-vv-scope="searchfr">
                                
                                <div class="row align-items-center mb-2">
                                    <div class="col-auto col-custom">
                                        <label for="machine_id">Search Machine</label>
                                    </div>
                                    <div class="col">
                                        <v-select
                                            id="machine_id"
                                            label="name"
                                            :get-option-label="getLabel"
                                            :reduce="(option) => option.id"
                                            :options="search_machines"
                                            placeholder="Enter machines ..."
                                            v-model="search.machine_id"
                                            name="machine_id"
                                        ></v-select>
                                    </div>
                                </div>

                                <div class="row align-items-center mb-2">
                                    <div class="col-auto col-custom">
                                        <label for="machine_id">Search Ticket</label>
                                    </div>
                                    <div class="col">
                                        <input type="text" placeholder="Enter ticket ..." v-model="search.ticket"
                                        name="ticket" class="form-control" />
                                    </div>
                                </div>

                                <div class="row align-items-center mb-2">
                                    <div class="col-auto col-custom">
                                        <label for="machine_id">Search Site</label>
                                    </div>
                                    <div class="col">
                                        <v-select label="site_name" :reduce="(option) => option.id"
                                            :options="search_sites" placeholder="Select Site..."
                                            v-model="search.site_id" name="site_id">
                                        </v-select>
                                    </div>
                                </div>

                                <div class="row align-items-center mb-2">
                                    <div class="col-auto col-custom">
                                        <label for="machine_id">Ticket Status</label>
                                    </div>
                                    <div class="col">
                                        <v-select label="site_name" :options="['Open', 'Closed']"
                                            placeholder="Select Status..." v-model="search.status" name="status">
                                        </v-select>
                                    </div>
                                </div>

                                <div class="row align-items-center mb-2">
                                    <div class="col-auto col-custom">
                                        <label for="machine_id">Complaint Nature</label>
                                    </div>
                                    <div class="col">
                                        <v-select label="site_name" :options="['Major', 'Minor']"
                                            placeholder="Select Complaint Nature..." v-model="search.complaint_nature"
                                            name="complaint_nature">
                                        </v-select>
                                    </div>
                                </div>
                                <div class="row align-items-center mb-2">
                                    <div class="col-auto col-custom">
                                        <label for="machine_id">Maintenance Type</label>
                                    </div>
                                    <div class="col">
                                        <v-select label="site_name"
                                            :options="['Breakdown Maintenance', 'Periodic Maintenance']"
                                            placeholder="Select Ticket Type..." v-model="search.ticket_type"
                                            name="ticket_type">
                                        </v-select>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-6 mb-2 pr-1">
                                        <button type="submit" class="btn btn-success btn-block">Search</button>
                                    </div>
                                    <div class="col-6 mb-2 pl-1">
                                        <button type="button" class="btn btn-danger btn-block"
                                            @click="reset_filter()">Reset</button>
                                    </div>
                                    <div class="col-12 mb-2">
                                        <download-excel class="btn btn-warning btn-block" :fetch="export_csv"
                                            :fields="json_fields" :before-generate="startDownload"
                                            :before-finish="finishDownload" worksheet="My Worksheet" type="csv"
                                            name="ticket_list.csv">
                                            <span class="labelText">
                                                <i class="fa fa-file-excel-o" aria-hidden="true"></i>
                                                Export as CSV</span>
                                        </download-excel>
                                    </div>
                                </div>
                            </form>
                        </SidebarModal>


                        <!-- /.card-header -->
                        <div class="card-body ticketLstTbl table-responsive p-0">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th class="stickey">Action</th>
                                        <th>Ticket No</th>
                                        <th>Ticket Type</th>
                                        <th>FAR No</th>
                                        <th>Machine Name</th>
                                        <th>Machine Model</th>
                                        <th>Machine SR No</th>
                                        <th>Machine's Problem</th>
                                        <th>Additional Problems</th>
                                        <th>Site</th>
                                        <th>Complaint Nature</th>
                                        <th>Created By</th>
                                        <th>Created Date</th>
                                        <th>Expected date</th>
                                        <th class="truncate" title="Revised Expected date">Revised Expected date</th>
                                        <th>Ticket Status</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(ticket, index) in Tickets.data" :key="ticket.id">
                                        <td>
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-primary btn-sm btn-toggle-custom" @click="viewModal(ticket)" :disabled="!$gate.hasPermission('can_view_ticket')">View</button>
                                                <button type="button" class="btn btn-primary btn-sm dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <span class="sr-only">Toggle Dropdown</span>
                                                </button>
                                                <div class="dropdown-menu">
                                                    <router-link :to="'/ticket/edit/' + ticket.id"
                                                        class="dropdown-item"
                                                        v-if="ticket.status != 'Closed' && $gate.hasPermission('can_edit_ticket')">Edit</router-link>

                                                    <a href="javascript:void(0);" class="dropdown-item"
                                                        @click="closeModal(ticket)" title="Close ticket"
                                                        v-if="ticket.status != 'Closed' && $gate.hasPermission('can_close_ticket')">
                                                        Close
                                                    </a>
                                                    <a href="javascript:void(0);" class="dropdown-item"
                                                        @click="reopenTicket(ticket)" title="Reopen ticket"
                                                        v-if="ticket.status == 'Closed' && $gate.hasPermission('can_reopen_ticket')">
                                                        Reopen Ticket
                                                    </a>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{{ ticket.ticket_no }}</td>
                                        <td >
                                            <div class="truncate" :title="ticket.ticket_type">
                                                {{ ticket.ticket_type }}
                                            </div>
                                        </td>
                                        <td>{{ ticket.machine.far_no }}</td>
                                        <td>
                                            <div class="truncate" :title="ticket.machine.name">
                                                {{ ticket.machine.name }}
                                            </div>
                                        </td>
                                        <td>{{ (ticket.machine.machine_model ? ticket.machine.machine_model.name : "-")
                                            }}
                                        </td>
                                        <td>{{ ticket.machine.machine_sr_no }}</td>
                                        <td>
                                            <div class="truncate" :title="ticket.problem_description">
                                                {{ ticket.problem_description }}
                                            </div>
                                        </td>
                                        <td>
                                            <template v-if="ticket.problems && ticket.problems.length > 0">
                                                <VueReadMoreSmooth :open.sync="additionalMore[x]" no-button no-shadow>
                                                    <p v-if="ticket.problems" v-for="(item, index) in ticket.problems"
                                                        :key="'p' + index" v-html="item.problem"></p>
                                                </VueReadMoreSmooth>
                                                <span @click="sclick(x)" class="rmore">...{{ additionalMore[x] ? "Less"
                                    :
                                    "More" }}</span>
                                            </template>
                                        </td>
                                        <td class="truncate" :title="ticket.site">{{ ticket.site ? ticket.site.site_name : "-" }}</td>
                                        <td>{{ ticket.complaint_nature }}</td>
                                        <td>{{ ticket.created_by_name }}</td>
                                        <td>{{ ticket.created_at | myDate }}</td>
                                        <td>{{ ticket.likely_date | myDate }}</td>
                                        <td>{{ ticket.reversion_date | myDate }}</td>
                                        <td>
                                            {{
                                    ticket.status.toLowerCase() == "created by user"
                                        ? "Open"
                                        : ticket.status
                                }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- /.card-body -->
                        <div class="card-footer">
                            <pagination :data="Tickets" :limit="10" @pagination-change-page="getResults"></pagination>
                        </div>
                    </div>
                    <!-- /.card -->
                </div>
            </div>
        </div>

        <!-- Close Modal -->
        <div class="modal fade" id="closemodal" tabindex="-1" role="dialog" aria-labelledby="closemodal"
            aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Close Ticket</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <form @submit.prevent="submitCloseTicket()" data-vv-scope="closeticket">
                        <div class="modal-body">
                            <div class="row" v-if="pop_machine">
                                <div class="col-sm">
                                    <p>
                                        <strong>Far No :</strong> {{ pop_machine.far_no }}
                                        <br />
                                        <strong>Machine Name :</strong> {{ pop_machine.name }}
                                        <br />
                                        <strong>Machine Model :</strong>
                                        {{
                                    pop_machine.machine_model
                                        ? pop_machine.machine_model.name
                                        : "-"
                                }}
                                        <br />
                                        <strong>Machine Chassis No :</strong>
                                        {{ pop_machine.chassis_no }}
                                    </p>
                                </div>
                                <div class="col-sm">
                                    <p>
                                        <strong>Machine Sl No:</strong>
                                        {{ pop_machine.machine_sr_no }}
                                        <br />
                                        <strong>Machine Regn No :</strong> {{ pop_machine.regn_no }}
                                        <br />
                                        <strong>Machine Engine No :</strong>
                                        {{ pop_machine.engine_no }}
                                        <br>
                                        <strong>Ticket No :</strong> {{ pop_ticket ? pop_ticket.ticket_no : '-' }}
                                    </p>
                                </div>
                            </div>

                            <div class="row">
                                {{ verrors.closeticket }}
                                <div class="col-6" v-if="pop_ticket && pop_ticket.likely_date">
                                    <div class="form-group">
                                        <label>Actual Date</label>
                                        <datetime value-zone="Asia/Kolkata" v-model="formclose.actual_date"
                                            name="actual_date" input-class="form-control" :class="{
                                    'is-invalid': verrors.has('closeticket.actual_date'),
                                }" v-validate="'required'" data-vv-as="Actual Date" :min-datetime="new Date(pop_ticket.created_at).toISOString()
                                    " :max-datetime="new Date().toISOString()" />
                                        <div v-if="verrors.has('closeticket.actual_date')"
                                            class="help-block invalid-feedback">
                                            {{ verrors.first("closeticket.actual_date") }}
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label>Machine Status</label>
                                        <select v-model="formclose.machine_status" name="machine_status"
                                            class="form-control" :class="{
                                    'is-invalid': verrors.has('closeticket.machine_status'),
                                }" v-validate="'required'" data-vv-as="machine status">
                                            <option value="Running">Running</option>
                                            <option value="Running with Problem">
                                                Running with Problem
                                            </option>
                                            <option value="Non Repairable">Non Repairable</option>
                                        </select>
                                        <div v-if="verrors.has('closeticket.machine_status')"
                                            class="help-block invalid-feedback">
                                            {{ verrors.first("closeticket.machine_status") }}
                                        </div>
                                    </div>
                                </div>

                                <div class="col-2">
                                    <div class="form-group">
                                        <label>Estimated Material cost</label>
                                        <input type="text" class="form-control" readonly :value="pop_ticket.estimated_material_cost +
                                    pop_ticket.ad_estimated_material_cost +
                                    '(' +
                                    pop_ticket.estimated_material_cost +
                                    '+' +
                                    pop_ticket.ad_estimated_material_cost +
                                    ')'
                                    " />
                                    </div>
                                </div>
                                <div class="col-2">
                                    <div class="form-group">
                                        <label>Actual Material cost</label>
                                        <input v-model="formclose.actual_material_cost" type="text"
                                            name="actual_material_cost" v-validate="'required'"
                                            data-vv-as="Actual Material cost" class="form-control" :class="{
                                    'is-invalid': verrors.has(
                                        'closeticket.actual_material_cost'
                                    ),
                                }" :readonly="formclose.machine_status == 'Non Repairable'" />
                                        <div v-if="verrors.has('closeticket.actual_material_cost')"
                                            class="help-block invalid-feedback">
                                            {{ verrors.first("closeticket.actual_material_cost") }}
                                        </div>
                                    </div>
                                </div>
                                <div class="col-2">
                                    <div class="form-group">
                                        <label> Actual Material cost File</label>
                                        <input type="file" @change="uploadMaterialCost" multiple name="material_cost"
                                            ref="fileactualmaterial" class="form-control" :class="{
                                    'is-invalid': verrors.has('closeticket.material_cost'),
                                }" v-validate="''" data-vv-as="Actual Material cost" />

                                        <div class="clearfix" v-if="pop_ticket.actual_estimated_material_files">
                                            <a v-for="(
                          item, x
                        ) in pop_ticket.actual_estimated_material_files" :key="item.id" :href="item.file"
                                                target="_blank">View
                                                {{
                                    pop_ticket.actual_estimated_material_files.length > 1
                                        ? x + 1
                                        : ""
                                }}</a>
                                        </div>

                                        <div v-if="verrors.has('closeticket.material_cost')"
                                            class="help-block invalid-feedback">
                                            {{ verrors.first("closeticket.material_cost") }}
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label>Material Cost POs</label>
                                        <v-select v-model="formclose.materialPOS" label="Enter PO numbers" taggable
                                            multiple></v-select>
                                    </div>
                                </div>

                                <div class="col-2">
                                    <div class="form-group">
                                        <label>Estimated Service cost</label>
                                        <input :value="pop_ticket.estimated_service_cost +
                                    pop_ticket.ad_estimated_service_cost +
                                    '(' +
                                    pop_ticket.estimated_service_cost +
                                    '+' +
                                    pop_ticket.ad_estimated_service_cost +
                                    ')'
                                    " type="text" class="form-control" readonly />
                                    </div>
                                </div>
                                <div class="col-2">
                                    <div class="form-group">
                                        <label>Actual Service cost</label>
                                        <input v-model="formclose.actual_service_cost" type="text"
                                            name="actual_service_cost" v-validate="'required'"
                                            data-vv-as="Actual Service cost" class="form-control" :class="{
                                    'is-invalid': verrors.has(
                                        'closeticket.actual_service_cost'
                                    ),
                                }" :readonly="formclose.machine_status == 'Non Repairable'" />
                                        <div v-if="verrors.has('closeticket.actual_service_cost')"
                                            class="help-block invalid-feedback">
                                            {{ verrors.first("closeticket.actual_service_cost") }}
                                        </div>
                                    </div>
                                </div>
                                <div class="col-2">
                                    <div class="form-group">
                                        <label> Actual Service cost File </label>
                                        <input type="file" @change="uploadServiceCost" multiple name="service_cost"
                                            ref="fileactualservice" class="form-control" :class="{
                                    'is-invalid': verrors.has('closeticket.service_cost'),
                                }" v-validate="''" data-vv-as="Actual Service cost" />

                                        <div class="clearfix" v-if="pop_ticket.actual_estimated_service_files">
                                            <a v-for="(
                                                    item, x
                                                    ) in pop_ticket.actual_estimated_service_files" :key="item.id"
                                                :href="item.file" target="_blank">View
                                                {{
                                    pop_ticket.actual_estimated_service_files.length > 1
                                        ? x + 1
                                        : ""
                                }}</a>
                                        </div>

                                        <div v-if="verrors.has('closeticket.service_cost')"
                                            class="help-block invalid-feedback">
                                            {{ verrors.first("closeticket.service_cost") }}
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label>Service Cost POs</label>
                                        <v-select v-model="formclose.servicePOS" label="Enter PO numbers" taggable
                                            multiple></v-select>
                                    </div>
                                </div>

                                <div class="col-6" v-if="pop_machine.is_consumtion_hr_run">
                                    <div class="form-group">
                                        <label>Current Run hour </label>
                                        <input v-model="formclose.current_run_hour" name="current_run_hour"
                                            class="form-control" :class="{
                                    'is-invalid': verrors.has(
                                        'closeticket.current_run_hour'
                                    ),
                                }" v-validate="{
                                    required: true,
                                    decimal: 2,
                                    min_value: pop_machine.last_maintenances
                                        ? pop_machine.last_maintenances.run_hour
                                        : pop_machine.last_hr_run,
                                }" data-vv-as="Current Run hour" />
                                        <div v-if="verrors.has('closeticket.current_run_hour')"
                                            class="help-block invalid-feedback">
                                            {{ verrors.first("closeticket.current_run_hour") }}
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6" v-if="pop_machine.is_consumtion_km_run">
                                    <div class="form-group">
                                        <label> Current KM Run </label>
                                        <input v-model="formclose.current_km_run" name="current_km_run"
                                            class="form-control" :class="{
                                    'is-invalid': verrors.has('closeticket.current_km_run'),
                                }" v-validate="{
                                    required: true,
                                    decimal: 2,
                                    min_value: pop_machine.last_maintenances
                                        ? pop_machine.last_maintenances.km_run
                                        : pop_machine.last_km_run,
                                }" data-vv-as="Current KM hour" />
                                        <div v-if="verrors.has('closeticket.current_km_run')"
                                            class="help-block invalid-feedback">
                                            {{ verrors.first("closeticket.current_km_run") }}
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6" v-if="pop_machine.is_production_fig">
                                    <div class="form-group">
                                        <label> Current Production fig </label>
                                        <input v-model="formclose.current_production_fig" name="current_production_fig"
                                            class="form-control" :class="{
                                    'is-invalid': verrors.has(
                                        'closeticket.current_production_fig'
                                    ),
                                }" v-validate="{
                                    required: true,
                                    decimal: 2,
                                    min_value: pop_machine.last_maintenances
                                        ? pop_machine.last_maintenances.production_fig
                                        : pop_machine.periodic_maintenance_breakdown,
                                }" data-vv-as="Current Production fig" />
                                        <div v-if="verrors.has('closeticket.current_production_fig')"
                                            class="help-block invalid-feedback">
                                            {{ verrors.first("closeticket.current_production_fig") }}
                                        </div>
                                    </div>
                                </div>

                                <div class="col-6" v-if="formclose.ticket_type == 'Breakdown Maintenance'">
                                    <div class="form-group">
                                        <label>Production Loss</label>
                                        <input v-model="formclose.production_loss" name="production_loss"
                                            class="form-control" :class="{
                                    'is-invalid': verrors.has(
                                        'closeticket.production_loss'
                                    ),
                                }" v-validate="'required'" data-vv-as="Production Loss" readonly />
                                        <div v-if="verrors.has('closeticket.production_loss')"
                                            class="help-block invalid-feedback">
                                            {{ verrors.first("closeticket.production_loss") }}
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6" v-if="formclose.ticket_type == 'Breakdown Maintenance'">
                                    <div class="form-group">
                                        <label>Production loss amount</label>
                                        <input v-model="formclose.production_loss_amount" name="production_loss_amount"
                                            class="form-control" :class="{
                                    'is-invalid': verrors.has(
                                        'closeticket.production_loss_amount'
                                    ),
                                }" v-validate="'required'" data-vv-as="Current Production fig" readonly />
                                        <div v-if="verrors.has('closeticket.production_loss_amount')"
                                            class="help-block invalid-feedback">
                                            {{ verrors.first("closeticket.production_loss_amount") }}
                                        </div>
                                    </div>
                                </div>

                                <div class="col-6">
                                    <div class="form-group">
                                        <label>Root Cause Analysis</label>
                                        <textarea rows="1" v-model="formclose.rca" name="rca" class="form-control"
                                            :class="{
                                    'is-invalid': verrors.has('closeticket.rca'),
                                }" v-validate="'required'"></textarea>
                                        <div v-if="verrors.has('closeticket.rca')" class="help-block invalid-feedback">
                                            {{ verrors.first("closeticket.rca") }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">
                                Close
                            </button>
                            <button type="submit" class="btn btn-primary" v-if="close_btn">
                                Close Ticket
                            </button>
                            <button type="button" class="btn btn-primary" v-else>
                                Processing
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!--View Modal-->
        <div class="modal fade" id="viewmodal" tabindex="-1" role="dialog" aria-labelledby="viewmodal"
            aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">View Ticket</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body" v-if="pop_ticket">
                        <div class="row">
                            <div class="col-4 bs">
                                <div class="form-group">
                                    <label>Machine Site</label>
                                    <v-select label="site_name" :reduce="(option) => option.id" :options="sites"
                                        placeholder="Choose Site ..." v-model="pop_ticket.site_id" disabled>
                                    </v-select>
                                </div>
                            </div>
                            <div class="col-4 bs">
                                <div class="form-group">
                                    <label>Machine Category</label>
                                    <v-select label="name" :reduce="(option) => option.id" :options="categories"
                                        placeholder="Choose Category ..." v-model="pop_ticket.category_id" disabled>
                                    </v-select>
                                </div>
                            </div>
                            <div class="col-4 bs">
                                <div class="form-group">
                                    <label>Machine Description</label>
                                    <v-select label="name" :reduce="(option) => option.id" :options="sub_categories"
                                        placeholder="Choose description ..." v-model="pop_ticket.sub_category_id"
                                        name="sub_category_id" :disabled="pop_ticket.id != ''">
                                    </v-select>
                                </div>
                            </div>
                            <div class="col-4 bs">
                                <div class="form-group">
                                    <label style="margin: 0"> Machine : </label>
                                    <strong>Far No :</strong> {{ pop_ticket.machine.far_no }}
                                    <br />
                                    <strong>Machine Name :</strong> {{ pop_ticket.machine.name }}
                                    <br />
                                    <strong>Machine Chassis No :</strong>
                                    {{ pop_ticket.machine.chassis_no }}
                                    <br />
                                    <strong>Machine Sl No:</strong>
                                    {{ pop_ticket.machine.machine_sr_no }}
                                    <br />
                                    <strong>Machine Regn No :</strong>
                                    {{ pop_ticket.machine.regn_no }}
                                    <br />
                                    <strong>Machine Engine No :</strong>
                                    {{ pop_ticket.machine.engine_no }}
                                </div>
                            </div>

                            <div class="col-4 bs">
                                <div class="form-group mb-0" v-if="pop_ticket.maintenance_provider == 'vendor' &&
                                    pop_ticket.service_type
                                    ">
                                    <label>Service Type</label>
                                    {{ pop_ticket.service_type }}
                                </div>

                                <div class="form-group mb-0" v-if="pop_ticket.service_type == 'Free Service' &&
                                    pop_ticket.free_service_no
                                    ">
                                    <label>Free service no:</label>
                                    {{ pop_ticket.free_service_no }}/{{
                                    pop_ticket.machine.free_service_no
                                }}
                                </div>

                                <div class="form-group mb-0" v-if="pop_ticket.ticket_type">
                                    <label>Ticket Type</label>
                                    {{ pop_ticket.ticket_type }}
                                </div>
                                <div class="form-group mb-0" v-if="pop_ticket.status_during_complaint">
                                    <label>Status During Complain: </label>
                                    {{ pop_ticket.status_during_complaint }}
                                </div>

                                <div class="form-group">
                                    <label style="margin: 0">Machine's Problem: </label>
                                    {{ pop_ticket.problem_description }}
                                </div>
                            </div>

                            <div class="col-4 bs">
                                <div class="form-group mb-0">
                                    <label>Maintenance Provider</label>
                                    {{ pop_ticket.maintenance_provider }}
                                </div>

                                <div class="form-group">
                                    <label>
                                        {{
                                    pop_ticket.maintenance_provider == "user"
                                        ? "User"
                                        : "Vendor"
                                }}
                                    </label>
                                    <template v-if="pop_ticket.maintenance_provider == 'vendor'">
                                        :
                                        <span v-for="(vendor, index) in pop_ticket.all_vendors" :key="'vm' + index"
                                            class="comma">{{ vendor.name }}</span>
                                        <span class="comma"></span>
                                    </template>
                                    <template v-else>
                                        <v-select label="name" :reduce="(option) => option.id" :options="users"
                                            placeholder="Enter users ..." v-model="pop_ticket.user_id" disabled>
                                        </v-select>
                                    </template>
                                </div>
                            </div>

                            <div class="col-8 bs" v-if="pop_ticket.stages">
                                <label style="margin: 0px">Stages</label>
                                <template v-for="(field, x) in pop_ticket.stages">
                                    <div class="row" :key="'s' + x" style="border: 0; padding-bottom: 8px">
                                        <div class="col-4">
                                            {{ field.stage_no }}
                                        </div>
                                        <div class="col-2">
                                            {{ field.stage_date | myDate }}
                                        </div>
                                        <div class="col-5">
                                            {{ field.description }}
                                        </div>
                                    </div>
                                </template>
                            </div>

                            <div class="col-4 bs">
                                <div class="form-group">
                                    <label style="margin: 0">Machine's Additional Problem: </label><br />
                                    <p v-if="pop_ticket.problems" v-for="(item, index) in pop_ticket.problems"
                                        :key="'pa' + index" v-html="item.problem"></p>
                                </div>
                            </div>

                            <div class="col-3 bs">
                                <div class="form-group">
                                    <label style="margin: 0">Estimated Material cost:</label><br />
                                    {{
                                    (pop_ticket.estimated_material_cost +
                                        pop_ticket.ad_estimated_material_cost)
                                    | toCurrency
                                }}
                                    ({{
                                        pop_ticket.estimated_material_cost +
                                        "+" +
                                        pop_ticket.ad_estimated_material_cost
                                    }})
                                    <p>
                                        <a class="btn btn-success mr-2" :href="file.file"
                                            v-for="(file, x) in pop_ticket.estimated_material_files" :key="file.id"
                                            target="_blank">View
                                            {{
                                    pop_ticket.estimated_material_files.length > 1
                                        ? x + 1
                                        : ""
                                }}</a>
                                    </p>
                                </div>
                            </div>
                            <div class="col-3 bs">
                                <div class="form-group">
                                    <label style="margin: 0">Estimated Service cost: </label><br />
                                    {{
                                    (pop_ticket.estimated_service_cost +
                                        pop_ticket.ad_estimated_service_cost)
                                    | toCurrency
                                }}
                                    ({{
                                        pop_ticket.estimated_service_cost +
                                        "+" +
                                        pop_ticket.ad_estimated_service_cost
                                    }})
                                    <p>
                                        <a class="btn btn-success mr-2" :href="file.file"
                                            v-for="(file, x) in pop_ticket.estimated_service_files" :key="file.id"
                                            target="_blank">View
                                            {{
                                    pop_ticket.estimated_service_files.length > 1
                                        ? x + 1
                                        : ""
                                }}</a>
                                    </p>
                                </div>
                            </div>
                            <div class="col-3 bs">
                                <div class="form-group">
                                    <label>Actual Material Cost : </label>
                                    <span v-if="pop_ticket.actual_material_cost">
                                        {{ pop_ticket.actual_material_cost | toCurrency }}</span>
                                    <p>
                                        <a class="btn btn-success mr-2" :href="file.file" v-for="(
                        file, x
                      ) in pop_ticket.actual_estimated_material_files" :key="file.id" target="_blank">View
                                            {{
                                    pop_ticket.actual_estimated_material_files.length > 1
                                        ? x + 1
                                        : ""
                                }}</a>
                                    </p>
                                </div>
                                <div class="form-group" v-if="pop_ticket.material_po">
                                    <label>Material Cost PO No: </label>
                                    <span class="badge badge-secondary" v-for="(data, x) in pop_ticket.material_po"
                                        style="margin-right:3px;">{{ data.name }}</span>
                                </div>
                            </div>

                            <div class="col-3 bs">
                                <div class="form-group">
                                    <label>Actual Service Cost : </label>
                                    <span v-if="pop_ticket.actual_service_cost">{{
                                    pop_ticket.actual_service_cost | toCurrency
                                }}</span>
                                    <p>
                                        <a class="btn btn-success mr-2" :href="file.file" v-for="(
                                                file, x
                                            ) in pop_ticket.actual_estimated_service_files" :key="file.id"
                                            target="_blank">View
                                            {{
                                    pop_ticket.actual_estimated_service_files.length > 1
                                        ? x + 1
                                        : ""
                                }}</a>
                                    </p>
                                </div>
                                <div class="form-group" v-if="pop_ticket.service_po">
                                    <label>Service Cost PO No: </label>
                                    <span class="badge badge-secondary" v-for="(data, x) in pop_ticket.service_po"
                                        style="margin-right:3px;">{{ data.name }}</span>
                                </div>
                            </div>

                            <div class="col-4 bs">
                                <div class="form-group">
                                    <label style="margin: 0">Ticket No : </label>
                                    {{ pop_ticket.ticket_no }}
                                </div>
                            </div>
                            <div class="col-4 bs">
                                <div class="form-group">
                                    <label style="margin: 0">Likely Date : </label>
                                    {{ pop_ticket.likely_date | myDate }}
                                </div>
                            </div>

                            <div class="col-4 bs">
                                <div class="form-group">
                                    <label style="margin: 0">Actual Date : </label>
                                    {{ pop_ticket.actual_date | myDate }}
                                </div>
                            </div>

                            <div class="col-4 bs" v-if="pop_ticket.current_run_hour">
                                <div class="form-group">
                                    <label>Current Run Hour : </label>
                                    {{ pop_ticket.current_run_hour }}
                                </div>
                            </div>
                            <div class="col-4 bs" v-if="pop_ticket.current_km_run">
                                <div class="form-group">
                                    <label>Current KM Hour : </label>
                                    {{ pop_ticket.current_km_run }}
                                </div>
                            </div>
                            <div class="col-4 bs" v-if="pop_ticket.current_production_fig">
                                <div class="form-group">
                                    <label>Current Production Fig : </label>
                                    {{ pop_ticket.current_production_fig }}
                                </div>
                            </div>
                            <div class="col-4 bs" v-if="pop_ticket.production_loss">
                                <div class="form-group">
                                    <label>Production Loss : </label>
                                    {{ pop_ticket.production_loss }}
                                </div>
                            </div>
                            <div class="col-4 bs" v-if="pop_ticket.production_loss_amount">
                                <div class="form-group">
                                    <label>Production Loss Amount : </label>
                                    {{ pop_ticket.production_loss_amount | toCurrency }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import VueReadMoreSmooth from "vue-read-more-smooth";
import SidebarModal from './../SideBarModal.vue';
export default {
    components: { VueReadMoreSmooth, SidebarModal },
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
                ticket: "",
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
                complaint_nature: "Major",
            }),
            stages: [
                {
                    id: "",
                    stage_no: "",
                    stage_date: "",
                    description: "",
                    file: "",
                    new_file: "",
                },
            ],

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
            opn_stage: [
                "Vendor created",
                "Vendor Assigned",
                "Order issued",
                "Payment under process",
                "Payment Done",
                "Logistics under process",
                "Materials despatched",
                "Material received at site",
                "Maintainace under progress",
            ],
            last_stage_index: 0,
            last_stage_date: "",

            json_fields: {
                "Ticket No": "ticket_no",
                "Ticket Type": "ticket_type",
                Machine: {
                    field: "machine",
                    callback: (val) => {
                        return val.name + " - " + val.far_no;
                    },
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
                "Status During Complaint": "status_during_complaint",
            },
            json_meta: [
                [
                    {
                        key: "charset",
                        value: "utf-8",
                    },
                ],
            ],
        };
    },
    methods: {
        openSideModal() {
            this.$refs.sidebarModal.openSideModal();
        },
        closeSideModal() {
            this.$refs.sidebarModal.closeSideModal();
        },
        async reset_filter() {
            this.search = {
                page: 1,
                machine_id: "",
                site_id: "",
                complaint_nature: "",
                ticket_type: "",
                ticket: "",
            }

            let cloaderd = this.$loading.show();
            axios
                .get("/api/ticket", {
                    params: this.search,
                })
                .then((data) => {
                    this.Tickets = data.data.data;
                    this.additionalMore = new Array(this.Tickets.data.length).fill(false);
                    this.problemsMore = new Array(this.Tickets.data.length).fill(false);
                    cloaderd.hide();
                });

        },
        async export_csv() {
            const response = await axios.get("api/ticket?export=1", {
                params: {
                    search: this.search,
                },
            });
            return response.data.data;
        },
        startDownload() {
            Swal.fire({
                title: "Please Wait !",
                html: "Data populating", // add html attribute if you want or remove
                allowOutsideClick: false,
                onBeforeOpen: () => {
                    Swal.showLoading();
                },
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

            axios
                .get("api/ticket/" + ticket.id)
                .then((res) => {
                    this.pop_ticket = res.data.data;
                })
                .catch((err) => {
                    this.pop_ticket = ticket;
                });

            axios.get("api/category/" + ticket.category_id).then((res) => {
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
                new_file: "",
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
            let cloaderd = this.$loading.show();
            this.search.page = page;
            axios
                .get("/api/ticket", {
                    params: this.search,
                })
                .then((data) => {
                    this.Tickets = data.data.data;
                    this.additionalMore = new Array(this.Tickets.data.length).fill(false);
                    this.problemsMore = new Array(this.Tickets.data.length).fill(false);
                    cloaderd.hide();
                });
        },

        calculate_loss() {
            if (this.formclose.actual_date && this.pop_ticket.created_at) {
                let a = new Date(this.formclose.actual_date).toISOString();
                let b = new Date(this.pop_ticket.created_at).toISOString();
                const dateB = moment(a);
                const dateC = moment(b);


                var Diff = dateB.diff(dateC, 'days') + 1;

                let hrs = this.pop_machine.prdloss_hrs
                let rate = this.pop_machine.prdloss_hr_rate
                let tloss = (Diff * hrs);
                this.formclose.production_loss_amount = (tloss * rate)
                this.formclose.production_loss = tloss


                console.log(hrs, rate, Diff);


            }

        },
        reopenTicket(ticket){
            Swal.fire({
                title: 'Are you sure you want to reopen ticket?',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'Reopen Ticket'
            }).then((result) => {

                // Send request to the server
                if (result.value) {
                    axios.get('api/reopen_ticket/' + ticket.id).then(() => {
                        Swal.fire(
                            'Success!',
                            'Ticket reopened.',
                            'success'
                        );
                        // Fire.$emit('AfterCreate');
                        this.loadTickets();
                    }).catch((data) => {
                        Swal.fire("Failed!", data.message, "warning");
                    });
                }
            })
        },
        submitCloseTicket() {
            this.$forceUpdate();
            this.$validator.validateAll("closeticket").then(async (valid) => {
                if (valid) {
                    let pop_loader = this.$loading.show({});
                    let last_mDate = this.pop_machine.last_maintenances
                        ? this.pop_machine.last_maintenances.datetime
                        : this.pop_machine.last_maintenance_date;

                    if (
                        last_mDate &&
                        this.formclose.actual_date &&
                        Date.parse(
                            moment(this.formclose.actual_date).format("MMM,DD YYYY")
                        ) < Date.parse(moment(last_mDate).format("MMM,DD YYYY"))
                    ) {
                        pop_loader.hide();
                        Swal.fire(
                            "You can not add previous date's data, Please remove record from maintenance list.",
                            "",
                            "warning"
                        );
                    } else {
                        this.close_btn = false;
                        this.formclose
                            .put("/api/ticket/" + this.formclose.id)
                            .then((response) => {
                                if (response.data.success) {
                                    $("#closemodal").modal("hide");
                                    Toast.fire({
                                        icon: "success",
                                        title: response.data.message,
                                    });
                                    this.upload_files(this.formclose.id, "actual");
                                    this.$validator.reset();
                                    this.formclose.reset();
                                    this.loadTickets();
                                }
                                this.close_btn = true;
                                pop_loader.hide();
                            })
                            .catch(() => {
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
            this.form.likely_date = ticket.likely_date
                ? new Date(ticket.likely_date).toISOString()
                : "";
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
            axios
                .get("/api/ticket", {
                    params: this.search,
                })
                .then((data) => {
                    this.Tickets = data.data.data;
                    this.additionalMore = new Array(this.Tickets.data.length).fill(false);
                    this.problemsMore = new Array(this.Tickets.data.length).fill(false);
                    pop_loader.hide();
                })
                .catch(() => {
                    pop_loader.hide();
                });
            //   }
        },

        async upload_files(id, isactual = false) {
            let fl = 0;
            if (this.MaterialCost) {
                this.MaterialCost.forEach((file) => {
                    var fd = new FormData();
                    fd.append(`file`, file);
                    if (isactual) {
                        fd.append(`file_type`, "Actual Estimated Material");
                    } else {
                        fd.append(`file_type`, "Estimated Material");
                    }
                    fd.append(`ticket_id`, id);
                    axios.post("api/ticket/files", fd).then((res) => {
                        console.log("gallery uploaded");
                    });
                });
            }
            if (this.ServiceCost) {
                this.ServiceCost.forEach((file) => {
                    var fd = new FormData();
                    fd.append(`file`, file);
                    if (isactual) {
                        fd.append(`file_type`, "Actual Estimated Service");
                    } else {
                        fd.append(`file_type`, "Estimated Service");
                    }
                    fd.append(`ticket_id`, id);
                    axios.post("api/ticket/files", fd).then((res) => {
                        console.log("gallery uploaded");
                    });
                });
            }
        },

        async upload_stages(id) {
            if (this.stages) {
                this.stages.forEach((stage) => {
                    var fd = new FormData();
                    fd.append(`id`, stage.id);
                    fd.append(`stage_no`, stage.stage_no);
                    fd.append(`stage_date`, stage.stage_date);
                    fd.append(`description`, stage.description);
                    //fd.append(`new_file`, stage.new_file);
                    // fd.append(`file`, stage.file);
                    fd.append(`ticket_id`, id);
                    axios.post("api/ticket/stages", fd).then((res) => {
                        console.log("stages uploaded");
                    });
                });
            }
        },

        submitTicket() {
            this.$validator.validateAll().then(async (valid) => {
                if (valid) {
                    let pop_loader = this.$loading.show({
                        container: this.$refs.vps_submit_pop,
                    });
                    if (this.form.id) {
                        this.form
                            .put("/api/ticket/" + this.form.id)
                            .then((response) => {
                                if (response.data.success) {
                                    $("#addNew").modal("hide");
                                    Toast.fire({
                                        icon: "success",
                                        title: response.data.message,
                                    });
                                    this.upload_stages(this.form.id);
                                    this.upload_files(this.form.id);
                                    this.loadTickets();
                                }
                                pop_loader.hide();
                            })
                            .catch(() => {
                                pop_loader.hide();
                                if (typeof err.response.data != "undefined") {
                                    this.$setErrorsFromResponse(err.response.data);
                                }
                            });
                    } else {
                        this.form
                            .post("/api/ticket")
                            .then((response) => {
                                if (response.data.success) {
                                    $("#addNew").modal("hide");
                                    Toast.fire({
                                        icon: "success",
                                        title: response.data.message,
                                    });

                                    this.upload_files(response.data.data.id);
                                    this.loadTickets();
                                }
                                pop_loader.hide();
                            })
                            .catch(() => {
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
                if (
                    this.selected_machine.completed_free_service >=
                    this.selected_machine.free_service_no
                ) {
                    this.form.service_type = "Paid Service";
                    this.form.free_service_no = "";
                } else {
                    this.form.free_service_no =
                        this.selected_machine.completed_free_service + 1;
                }

                if (
                    this.selected_machine &&
                    this.selected_machine.machine_type == "New" &&
                    this.form.service_type == "Free Service"
                ) {
                    //  this.selected_machine.free_service_no
                }
            }
        },

        async get_machine() {
            axios
                .get("/api/ticket_machine", {
                    params: {
                        site_id: this.form.site_id,
                        category_id: this.form.category_id,
                        sub_category_id: this.form.sub_category_id,
                    },
                })
                .then((response) => {
                    this.machines = response.data.data;
                })
                .catch(() => console.warn("Oh. Something went wrong"));
        },
    },
    mounted() { },
    created() {
        this.loadTickets();
    },
    beforeCreate() {
        axios.get("api/get_pre_machine").then((res) => {
            this.categories = res.data.data.Category;
            this.sites = res.data.data.sites;
        });
        axios
            .get("/api/initial_ticket")
            .then((response) => {
                this.users = response.data.data.vendors;
                this.machines = response.data.data.machines;
                this.search_machines = response.data.data.machines;
                this.search_sites = response.data.data.sites;
            })
            .catch(() => console.warn("Oh. Something went wrong"));
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
                    axios.get("api/category/" + n).then((res) => {
                        this.sub_categories = res.data.data;
                    });
                    this.get_machine();
                }
            },
            deep: true,
            initial: true,
        },
        stages: {
            handler: function (n, o) {
                if (n && n.length > 0) {
                    let la = n[n.length - 1];
                    if (la.stage_no)
                        this.last_stage_index = this.opn_stage.indexOf(la.stage_no);
                    if (la.stage_date)
                        this.last_stage_date = new Date(la.stage_date).toISOString();
                } else {
                    this.last_stage_index = 0;
                    if (this.pop_ticket && this.pop_ticket.created_at) {
                        this.last_stage_date = new Date(
                            this.pop_ticket.created_at
                        ).toISOString();
                    } else {
                        this.last_stage_date = new Date().toISOString();
                    }
                }
            },
            deep: true,
            initial: true,
        },

        async "form.maintenance_provider"(n) {
            if (n != "vendor") {
                this.form.service_type = "Paid Service";
            }
            axios
                .get("api/user/list", {
                    params: {
                        type: n,
                    },
                })
                .then((response) => {
                    this.users = response.data.data;
                })
                .catch(() => console.warn("Oh. Something went wrong"));
        },

        async "form.machine_id"(n) {
            this.selected_machine = this.machines.find((x) => x.id === n);
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
    },
};
</script>
<style>
.bs {
    border: 1px solid #d2d1d1a8;
    border-radius: 5px;
}

.comma~.comma:not(:empty):before {
    content: ", ";
}

.rmore {
    color: blue;
}
</style>
