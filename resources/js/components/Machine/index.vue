<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Machine List</h3>
                            <div class="card-tools">
                                <router-link to="/machines/add" class="btn btn-sm btn-primary" v-if="$gate.hasPermission('can_add_machine')">
                                    <i class="fa fa-plus-square" aria-hidden="true"></i> Add New
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
                            <form autocomplete="off" @submit.prevent="getResults()">
                                
                                <div class="row align-items-center mb-2">
                                    <div class="col-auto col-custom">
                                        <label for="machine_id">Search FAR</label>
                                    </div>
                                    <div class="col">
                                        <input placeholder="Enter FAR No ..." v-model="search.far_no" class="form-control">
                                    </div>
                                </div>

                                <div class="row align-items-center mb-2">
                                    <div class="col-auto col-custom">
                                        <label for="machine_id">Category</label>
                                    </div>
                                    <div class="col">
                                        <v-select label="name" :reduce="(option) => option.id" :options="categories"
                                            placeholder="Choose Category ..." v-model="search.category_id"> </v-select>
                                    </div>
                                </div>

                                <div class="row align-items-center mb-2">
                                    <div class="col-auto col-custom">
                                        <label for="machine_id">Sub Category</label>
                                    </div>
                                    <div class="col">
                                        <v-select label="name" :reduce="(option) => option.id" :options="sub_categories"
                                            placeholder="Choose description ..." v-model="search.sub_category_id">
                                        </v-select>
                                    </div>
                                </div>

                                <div class="row align-items-center mb-2">
                                    <div class="col-auto col-custom">
                                        <label for="machine_id">Company</label>
                                    </div>
                                    <div class="col">
                                        <v-select label="name" :reduce="(option) => option.id" :options="companies"
                                            placeholder="Choose Company ..." v-model="search.machine_companies_id">
                                        </v-select>
                                    </div>
                                </div>

                                <div class="row align-items-center mb-2">
                                    <div class="col-auto col-custom">
                                        <label for="machine_id">Model</label>
                                    </div>
                                    <div class="col">
                                        <v-select label="name" :reduce="(option) => option.id" :options="models"
                                            placeholder="Choose Model ..." v-model="search.machine_models_id">
                                        </v-select>
                                    </div>
                                </div>

                                <div class="row align-items-center mb-2">
                                    <div class="col-auto col-custom">
                                        <label for="machine_id">Machine Type</label>
                                    </div>
                                    <div class="col">
                                        <v-select :options="['New', 'Existing']" placeholder="Select machine type..."
                                            v-model="search.machine_type" name="machine_type"> </v-select>
                                    </div>
                                </div>

                                <div class="row align-items-center mb-2">
                                    <div class="col-auto col-custom">
                                        <label for="machine_id">Machine Condition</label>
                                    </div>
                                    <div class="col">
                                        <v-select label="condition_of_machine"
                                            :options="['Break Down', 'Running', 'Running with Problem', 'Idle']"
                                            placeholder="Select condition of machine..."
                                            v-model="search.condition_of_machine" name="condition_of_machine">
                                        </v-select>
                                    </div>
                                </div>

                                <div class="row align-items-center mb-2">
                                    <div class="col-auto col-custom">
                                        <label for="machine_id">Search Site</label>
                                    </div>
                                    <div class="col">
                                        <v-select label="site_name" :reduce="(option) => option.id" :options="sites"
                                            placeholder="Select Site..." v-model="search.site_id" name="site_id">
                                        </v-select>
                                    </div>
                                </div>

                                <div class="row align-items-center mb-2">
                                    <div class="col-auto col-custom">
                                        <label for="machine_id">Purchase Date From</label>
                                    </div>
                                    <div class="col">
                                        <datetime value-zone="Asia/Kolkata" v-model="search.purchase_date_from"
                                        input-class="form-control" placeholder="Purchase Date From" />
                                    </div>
                                </div>

                                <div class="row align-items-center mb-2">
                                    <div class="col-auto col-custom">
                                        <label for="machine_id">Purchase Date To</label>
                                    </div>
                                    <div class="col">
                                        <datetime value-zone="Asia/Kolkata" v-model="search.purchase_date_to"
                                            input-class="form-control" placeholder="Purchase Date To" />
                                    </div>
                                </div>

                                <div class="row align-items-center mb-2">
                                    <div class="col-auto col-custom">
                                        <label for="machine_id">Ownership Type</label>
                                    </div>
                                    <div class="col">
                                        <v-select :options="['Owned', 'Rented']" placeholder="Select Ownership ..."
                                            v-model="search.Ownership" name="Ownership">
                                        </v-select>
                                    </div>
                                </div>

                                <div class="row align-items-center mb-2">
                                    <div class="col-auto col-custom">
                                        <label for="machine_id">PM Due Status</label>
                                    </div>
                                    <div class="col">
                                        <v-select :options="['Red', 'Orange', 'Yellow', 'Green','No PM']"
                                            placeholder="Select PM Due Status " v-model="search.pm_due_status"
                                            name="pm_due_status">
                                        </v-select>
                                    </div>
                                </div>

                                <div class="row align-items-center mb-2">
                                    <div class="col-auto col-custom">
                                        <label for="machine_id">Warranty Status</label>
                                    </div>
                                    <div class="col">
                                        <v-select :options="['Within Warranty', 'Out of Warranty']"
                                            placeholder="Select Warranty Status " v-model="search.warrenty_status"
                                            name="warrenty_status">
                                        </v-select>
                                    </div>
                                </div>

                                <div class="row align-items-center mb-2">
                                    <div class="col-auto col-custom">
                                        <label for="machine_id">AMC Status</label>
                                    </div>
                                    <div class="col">
                                        <v-select :options="['Active', 'Expiring', 'Expired', 'NA']"
                                            placeholder="Select AMC Status " v-model="search.amc_status"
                                            name="amc_status">
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
                                            name="machine_list.csv">
                                            <span class="labelText"><i class="fa fa-file-excel-o"
                                                    aria-hidden="true"></i>
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
                                        <th>FAR No</th>
                                        <th>Name</th>
                                        <th>Model</th>
                                        <th>Make</th>
                                        <th>Owner</th>
                                        <th>PM Due Status</th>
                                        <th>Purchase Date</th>
                                        <th>Warranty Status</th>
                                        <th>Machine Condition</th>
                                        <th>AMC</th>
                                        <th>Current Site</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="Machine in Machines.data" :key="Machine.id">
                                        <td class="align-middle">
                                            <div class="btn-group">
                                                <router-link :to="'/machines/edit/' + Machine.id" class="btn btn-primary btn-sm btn-toggle-custom" :disabled="!$gate.hasPermission('can_edit_machine')">Edit</router-link>
                                                <!-- <button type="button" class="btn btn-primary btn-sm btn-toggle-custom" :disabled="!$gate.hasPermission('can_edit_machine')">Edit</button> -->
                                                <button type="button" class="btn btn-primary btn-sm dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <span class="sr-only">Toggle Dropdown</span>
                                                </button>
                                                <div class="dropdown-menu">
                                                    <a class="dropdown-item" href="javascript:void(0);"
                                                        @click="AssingMachine(Machine, Machine.current_site)"
                                                        title="Assign to site" v-if="$gate.hasPermission('can_add_cam')">
                                                        CAM
                                                    </a>
                                                    <a class="dropdown-item" href="javascript:void(0);" @click="get_machine_list(Machine)"
                                                        title="List of Assign to site" v-if="$gate.hasPermission('can_view_cam')">
                                                        CAM List
                                                    </a>
                                                    <a class="dropdown-item" href="javascript:void(0);"
                                                        @click="AssingOperator(Machine, Machine.machine_operators)"
                                                        title="Assign to site" v-if="$gate.hasPermission('can_change_operator')">
                                                        Change Operator
                                                    </a>
                                                    <a class="dropdown-item" href="javascript:void(0);" @click="get_operator_list(Machine)"
                                                        title="List of Assign to site" v-if="$gate.hasPermission('can_view_operator_change')">
                                                        Changed Operator List
                                                    </a>
                                                    <a class="dropdown-item" href="javascript:void(0);" @click="view_site_details(Machine)"
                                                        title="List of Assign to site">
                                                        Machine History
                                                    </a>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="align-middle">{{ Machine.far_no }}</td>
                                        <td class="truncate align-middle" :title="Machine.name">{{ Machine.name }}</td>
                                        <td class="truncate align-middle" :title="Machine.machine_model? Machine.machine_model.name :''">
                                            {{  Machine.machine_model? Machine.machine_model.name :'-' }}
                                        </td>
                                        <td class="truncate align-middle" :title="Machine.machine_model? Machine.machine_model.company.name :''">
                                            {{  Machine.machine_model? Machine.machine_model.company.name :'-' }}
                                        </td>
                                            
                                        <td class="align-middle">{{ Machine.owner }}</td>

                                        <td @click="view_pm_details(Machine)">
                                            <template v-if="Machine.under_maintenance == 'Yes'">
                                                <div v-if="Machine.next_pm_date.early_type == 'date'">
                                                    <VueGauge :refid="'lopg' + Machine.id"
                                                        :options="{ 'needleValue': Machine.next_pm_date.maintenance_date, 'arcDelimiters': [Number(Machine.next_pm_date.settings.date_red), Number(Machine.next_pm_date.settings.date_orange), Number(Machine.next_pm_date.settings.date_yellow)], arcColors: ['red', 'orange', 'yellow', 'green'], chartWidth: '80', rangeLabel: ['0', Machine.date_threshold.toString()], arcLabels: [Machine.next_pm_date.settings.date_red.toString(), Machine.next_pm_date.settings.date_orange.toString(), Machine.next_pm_date.settings.date_yellow.toString(), Machine.next_pm_date.settings.date_green.toString()], arcOverEffect: true }" />
                                                </div>
                                                <div v-if="Machine.next_pm_date.early_type == 'km'">
                                                    <VueGauge :refid="'lopg' + Machine.id" :options="{
    'needleValue': Machine.next_pm_date.km_run, 'arcDelimiters': get_del(Machine.run_km_threshold, Number(Machine.next_pm_date.settings.km_red), Number(Machine.next_pm_date.settings.km_orange), Number(Machine.next_pm_date.settings.km_yellow), Number(Machine.next_pm_date.settings.km_green)),
    arcColors: ['green', 'yellow', 'orange', 'red'],
    chartWidth: '80',
    rangeLabel: ['0', Machine.run_km_threshold.toString()], arcLabels: [
        Machine.next_pm_date.settings.km_yellow.toString(),
        Machine.next_pm_date.settings.km_orange.toString(),
        Machine.next_pm_date.settings.km_red.toString()
    ], arcOverEffect: true
}" />

                                                </div>
                                                <div v-if="Machine.next_pm_date.early_type == 'hr'">
                                                    <VueGauge :refid="'lopg' + Machine.id" :options="{
    'needleValue': Machine.next_pm_date.hr_run, 'arcDelimiters': get_del(Machine.run_hour_threshold, Number(Machine.next_pm_date.settings.hr_red), Number(Machine.next_pm_date.settings.hr_orange), Number(Machine.next_pm_date.settings.hr_yellow), Number(Machine.next_pm_date.settings.hr_green)), arcColors: ['green', 'yellow', 'orange', 'red'], chartWidth: '80', rangeLabel: ['0', Machine.run_hour_threshold.toString()], arcLabels: [
        Machine.next_pm_date.settings.hr_yellow.toString(),
        Machine.next_pm_date.settings.hr_orange.toString(),
        Machine.next_pm_date.settings.hr_red.toString(),
    ], arcOverEffect: true
}" />

                                                </div>
                                                <div v-if="Machine.next_pm_date.early_type == 'prdfig'">
                                                    <VueGauge :refid="'lopg' + Machine.id" :options="{
    'needleValue': Machine.next_pm_date.production_fig, 'arcDelimiters': get_del(Machine.production_fig_threshold, Number(Machine.next_pm_date.settings.prdfig_red), Number(Machine.next_pm_date.settings.prdfig_orange), Number(Machine.next_pm_date.settings.prdfig_yellow), Number(Machine.next_pm_date.settings.prdfig_green)), arcColors: ['green', 'yellow', 'orange', 'red'], chartWidth: '80', rangeLabel: ['0', Machine.production_fig_threshold.toString()], arcLabels: [Machine.next_pm_date.settings.prdfig_yellow.toString(),
    Machine.next_pm_date.settings.prdfig_orange.toString(), Machine.next_pm_date.settings.prdfig_red.toString()], arcOverEffect: true
}" />


                                                </div>
                                            </template>
                                        </td>
                                        <td class="align-middle">{{ Machine.purchase_date | myDate }}</td>
                                        <td class="align-middle">
                                            <div v-if="Machine.machine_warrenty_status == 'Within Warranty'">
                                                <span class="badge badge-success">Within Warranty</span>
                                            </div>
                                            <div v-else>
                                                <span class="badge badge-danger">Out of Warranty</span>
                                            </div>
                                        </td>
                                        <td class="align-middle">
                                            <div v-if="Machine.condition_of_machine == 'Running'">
                                                <span class="badge badge-success">Running</span>
                                            </div>
                                            <div v-else>
                                                <span class="badge badge-danger">Breakdown</span>
                                            </div>
                                        </td>
                                        <td class="align-middle">
                                            <div v-if="Machine.machine_amc_status === 'Active'">
                                                <span class="badge badge-success">{{ Machine.machine_amc_status ? Machine.machine_amc_status : '-' }}</span>
                                            </div>
                                            <div v-if="Machine.machine_amc_status === 'Expiring'">
                                                <span class="badge badge-warning">{{ Machine.machine_amc_status ? Machine.machine_amc_status : '-' }}</span>
                                            </div>
                                            <div v-if="Machine.machine_amc_status === 'Expired'">
                                                <span class="badge badge-danger">{{ Machine.machine_amc_status ? Machine.machine_amc_status : '-' }}</span>
                                            </div>
                                            <div v-if="!Machine.machine_amc_status || (Machine.machine_amc_status !== 'Active' && Machine.machine_amc_status !== 'Expiring' && Machine.machine_amc_status !== 'Expired')">
                                                <span class="badge badge-primary">{{ Machine.machine_amc_status ? Machine.machine_amc_status : '-' }}</span>
                                            </div>
                                            
                                        </td>
                                        <td class="align-middle truncate" :title="Machine.current_site ? Machine.current_site.site_name : ''">
                                            {{ Machine.current_site ? Machine.current_site.site_name : '-' }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- /.card-body -->
                        <div class="card-footer">
                              <pagination :data="Machines" :limit="10" @pagination-change-page="getResults">
                            </pagination>
                        </div>
                    </div>
                    <!-- /.card -->
                </div>
            </div>


        </div>

        <!-- Modal -->
        <div class="modal fade" id="pmModal" tabindex="-1" role="dialog" aria-labelledby="pmModal" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">View PM Details</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div class="modal-body">


                        <div class="container">
                            <p>
                                <strong>Far No :</strong> {{ pmModalData.far_no }}
                                <br>
                                <strong>Machine Name :</strong> {{ pmModalData.name }}
                            </p>

                            <div class="row bcon" v-if="pmModalData.under_maintenance == 'Yes'">
                                <div class="col-6 pb-3" v-if="pmModalData.is_maintenance_date">
                                    <VueGauge refid="popg1" :key="'popg' + pmModalData.id"
                                        :options="{ 'needleValue': pmModalData.next_pm_date.maintenance_date, 'arcDelimiters': [Number(pmModalData.next_pm_date.settings.date_red), Number(pmModalData.next_pm_date.settings.date_orange), Number(pmModalData.next_pm_date.settings.date_yellow)], arcColors: ['red', 'orange', 'yellow', 'green'], chartWidth: '180', rangeLabel: ['0', pmModalData.date_threshold.toString()], arcLabels: [pmModalData.next_pm_date.settings.date_red.toString(), pmModalData.next_pm_date.settings.date_orange.toString(), pmModalData.next_pm_date.settings.date_yellow.toString(), pmModalData.next_pm_date.settings.date_green.toString()], arcOverEffect: true }" />
                                    <p class="text-center">Remaining Days</p>
                                </div>
                                <div class="col-6 pb-3" v-if="pmModalData.is_consumtion_km_run">
                                    <VueGauge refid="popg2" :key="'popg' + pmModalData.id" :options="{
                                    'needleValue': pmModalData.next_pm_date.km_run, 'arcDelimiters': get_del(pmModalData.run_km_threshold, Number(pmModalData.next_pm_date.settings.km_red), Number(pmModalData.next_pm_date.settings.km_orange), Number(pmModalData.next_pm_date.settings.km_yellow), Number(pmModalData.next_pm_date.settings.km_green)),
                                    arcColors: ['green', 'yellow', 'orange', 'red'],
                                    chartWidth: '180',
                                    rangeLabel: ['0', pmModalData.run_km_threshold.toString()], arcLabels: [
                                    pmModalData.next_pm_date.settings.km_yellow.toString(),
                                    pmModalData.next_pm_date.settings.km_orange.toString(),
                                    pmModalData.next_pm_date.settings.km_red.toString()
                                    ], arcOverEffect: true
                                    }" />
                                    <p class="text-center">Remaining KM</p>
                                </div>
                                <div class="col-6" v-if="pmModalData.is_consumtion_hr_run">
                                    <VueGauge refid="popg3" :key="'popg' + pmModalData.id" :options="{
                                    'needleValue': pmModalData.next_pm_date.hr_run, 'arcDelimiters': get_del(pmModalData.run_hour_threshold, Number(pmModalData.next_pm_date.settings.hr_red), Number(pmModalData.next_pm_date.settings.hr_orange), Number(pmModalData.next_pm_date.settings.hr_yellow), Number(pmModalData.next_pm_date.settings.hr_green)), arcColors: ['green', 'yellow', 'orange', 'red'], chartWidth: '180', rangeLabel: ['0', pmModalData.run_hour_threshold.toString()], arcLabels: [
                                    pmModalData.next_pm_date.settings.hr_yellow.toString(),
                                    pmModalData.next_pm_date.settings.hr_orange.toString(),
                                    pmModalData.next_pm_date.settings.hr_red.toString(),
                                    ], arcOverEffect: true
                                    }" />

                                    <p class="text-center">Remaining Hours</p>
                                </div>
                                <div class="col-6" v-if="pmModalData.is_production_fig">
                                    <VueGauge refid="popg4" :key="'popg' + pmModalData.id" :options="{
                                    'needleValue': pmModalData.next_pm_date.production_fig, 'arcDelimiters': get_del(pmModalData.production_fig_threshold, Number(pmModalData.next_pm_date.settings.prdfig_red), Number(pmModalData.next_pm_date.settings.prdfig_orange), Number(pmModalData.next_pm_date.settings.prdfig_yellow), Number(pmModalData.next_pm_date.settings.prdfig_green)), arcColors: ['green', 'yellow', 'orange', 'red'], chartWidth: '180', rangeLabel: ['0', pmModalData.production_fig_threshold.toString()], arcLabels: [pmModalData.next_pm_date.settings.prdfig_yellow.toString(),
                                    pmModalData.next_pm_date.settings.prdfig_orange.toString(), pmModalData.next_pm_date.settings.prdfig_red.toString()], arcOverEffect: true
                                    }" />
                                    <p class="text-center">Remaining Production</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="modal fade" id="assignModal" tabindex="-1" role="dialog" aria-labelledby="assignModal"
            aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Machine Asssign to Site</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <form @submit.prevent="submitAssignSite()">
                        <div class="modal-body">
                            <div class="row" v-if="pop_machine">
                                <div class="col-sm">
                                    <p>
                                        <strong>Far No :</strong> {{ pop_machine.far_no }}
                                        <br>
                                        <strong>Machine Name :</strong> {{ pop_machine.name }}
                                        <br>
                                        <strong>Machine Model :</strong> {{  pop_machine.machine_model? pop_machine.machine_model.name :'-' }}
                                        <br>
                                        <strong>Machine Chassis No :</strong> {{ pop_machine.chassis_no }}
                                    </p>
                                </div>
                                <div class="col-sm">
                                    <p>
                                        <strong>Machine Sl No:</strong> {{ pop_machine.machine_sr_no }}
                                        <br>
                                        <strong>Machine Regn No :</strong> {{ pop_machine.regn_no }}
                                        <br>
                                        <strong>Machine Engine No :</strong> {{ pop_machine.engine_no }}
                                    </p>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-4">
                                    <div class="form-group">
                                        <label>Existing Site</label>
                                        <input type="text" class="form-control" readonly
                                            :value="machine_existing_site.site_name">
                                    </div>
                                </div>

                                <div class="col-4">
                                    <div class="form-group">
                                        <label>Allocate to Site</label>
                                        <v-select label="site_name" :reduce="(option) => option.id" :options="sites"
                                            :selectable="(option) => isSourceSelectable(option)"
                                            placeholder="Choose Site ..." v-model="form.site_id" v-validate="'required'"
                                            :class="{ 'is-invalid': verrors.has('site_id') }" data-vv-as="site"
                                            name="site_id" class="required">
                                        </v-select>
                                        <div v-if="verrors.has('site_id')" class="help-block invalid-feedback">
                                            {{ verrors.first('site_id') }}
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="form-group">
                                        <label>From Date</label>
                                        <datetime value-zone="Asia/Kolkata" v-model="form.from_date" name="from_date"
                                            input-class="form-control required"
                                            :class="{ 'is-invalid': verrors.has('from_date') }" v-validate="'required'"
                                            type="datetime" data-vv-as="From Date"
                                            :min-datetime="machine_existing_site.from_date ? new Date(machine_existing_site.from_date).toISOString() : ''" />
                                        <div v-if="verrors.has('from_date')" class="help-block invalid-feedback">
                                            {{ verrors.first('from_date') }}
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <label>Reason for Redeployment</label>
                                        <textarea v-model="form.redeployment_reason" name="redeployment_reason"
                                            class="form-control required"
                                            :class="{ 'is-invalid': verrors.has('redeployment_reason') }"
                                            v-validate="'required'" data-vv-as="redeployment reason" />
                                        <div v-if="verrors.has('redeployment_reason')"
                                            class="help-block invalid-feedback">{{verrors.first('redeployment_reason')}}
                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Create CAM</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div class="modal" id="CamListModal">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">

                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">CAM List</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body">
                        <div class="row" v-if="pmModalData">
                                <div class="col-sm">
                                    <p>
                                        <strong>Far No :</strong> {{ pmModalData.far_no }}
                                        <br>
                                        <strong>Machine Name :</strong> {{ pmModalData.name }}
                                        <br>
                                        <strong>Machine Model :</strong> {{  pmModalData.machine_model? pmModalData.machine_model.name :'-' }}
                                        <br>
                                        <strong>Machine Chassis No :</strong> {{ pmModalData.chassis_no }}
                                    </p>
                                </div>
                                <div class="col-sm">
                                    <p>
                                        <strong>Machine Sl No:</strong> {{ pmModalData.machine_sr_no }}
                                        <br>
                                        <strong>Machine Regn No :</strong> {{ pmModalData.regn_no }}
                                        <br>
                                        <strong>Machine Engine No :</strong> {{ pmModalData.engine_no }}
                                    </p>
                                </div>
                            </div>
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th width="20">Site Name</th>
                                    <th width="20">From Date</th>
                                    <th width="60">Redeployment Reason</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, x) in cam_list" :key="x" v-if="cam_list">
                                    <td v-html="item.site_name"></td>
                                    <td>{{ item.from_date | myDate }}</td>
                                    <td>{{ item.redeployment_reason }}</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                    <!-- Modal footer -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>

                </div>
            </div>
        </div>

        <MachinePop id="MachineSiteModal" :machine="pmModalData"/>

        <div class="modal fade" id="assignOperatorModal" tabindex="-1" role="dialog" aria-labelledby="assignOperatorModal"
            aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Machine Asssign to Site</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <form @submit.prevent="submitAssignOperator()">
                        <div class="modal-body">
                            <div class="row" v-if="pop_machine">
                                <div class="col-sm">
                                    <p>
                                        <strong>Far No :</strong> {{ pop_machine.far_no }}
                                        <br>
                                        <strong>Machine Name :</strong> {{ pop_machine.name }}
                                        <br>
                                        <strong>Machine Model :</strong> {{  pop_machine.machine_model? pop_machine.machine_model.name :'-' }}
                                        <br>
                                        <strong>Machine Chassis No :</strong> {{ pop_machine.chassis_no }}
                                    </p>
                                </div>
                                <div class="col-sm">
                                    <p>
                                        <strong>Machine Sl No:</strong> {{ pop_machine.machine_sr_no }}
                                        <br>
                                        <strong>Machine Regn No :</strong> {{ pop_machine.regn_no }}
                                        <br>
                                        <strong>Machine Engine No :</strong> {{ pop_machine.engine_no }}
                                    </p>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-4">
                                    <div class="form-group">
                                        <label>Existing Operator</label>
                                        <input type="text" class="form-control" readonly
                                            :value="machine_existing_operator.operator_name">
                                    </div>
                                </div>

                                <div class="col-4">
                                    <div class="form-group">
                                        <label>Allocate opertor</label>
                                        <v-select label="name" :reduce="(option) => option.id" :options="operators"
                                            :selectable="(option) => isSourceSelectable2(option)"
                                            placeholder="Choose opertor ..." v-model="operatorform.operator_id" v-validate="'required'"
                                            :class="{ 'is-invalid': verrors.has('operator_id') }" data-vv-as="operator"
                                            name="operator_id" class="required">
                                        </v-select>
                                        <div v-if="verrors.has('operator_id')" class="help-block invalid-feedback">
                                            {{ verrors.first('operator_id') }}
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="form-group">
                                        <label>From Date</label>
                                        <datetime value-zone="Asia/Kolkata" v-model="operatorform.operator_from_date" name="operator_from_date"
                                            input-class="form-control required"
                                            :class="{ 'is-invalid': verrors.has('operator_from_date') }" v-validate="'required'"
                                            type="date" data-vv-as="From Date"
                                            :min-datetime="machine_existing_site.from_date ? new Date(machine_existing_site.from_date).toISOString() : ''" />
                                        <div v-if="verrors.has('operator_from_date')" class="help-block invalid-feedback">
                                            {{ verrors.first('operator_from_date') }}
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <label>Reason for Redeployment</label>
                                        <textarea v-model="operatorform.reason" name="reason"
                                            class="form-control"
                                            :class="{ 'is-invalid': verrors.has('reason') }"
                                             data-vv-as="redeployment reason" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div class="modal" id="OperatorListModal">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">

                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">Operator List</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body">
                        <div class="row" v-if="pmModalData">
                                <div class="col-sm">
                                    <p>
                                        <strong>Far No :</strong> {{ pmModalData.far_no }}
                                        <br>
                                        <strong>Machine Name :</strong> {{ pmModalData.name }}
                                        <br>
                                        <strong>Machine Model :</strong> {{  pmModalData.machine_model? pmModalData.machine_model.name :'-' }}
                                        <br>
                                        <strong>Machine Chassis No :</strong> {{ pmModalData.chassis_no }}
                                    </p>
                                </div>
                                <div class="col-sm">
                                    <p>
                                        <strong>Machine Sl No:</strong> {{ pmModalData.machine_sr_no }}
                                        <br>
                                        <strong>Machine Regn No :</strong> {{ pmModalData.regn_no }}
                                        <br>
                                        <strong>Machine Engine No :</strong> {{ pmModalData.engine_no }}
                                    </p>
                                </div>
                            </div>
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th width="20">Operator Name</th>
                                    <th width="20">From Date</th>
                                    <th width="60">Redeployment Reason</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, x) in operator_list" :key="x" v-if="operator_list">
                                    <td v-html="item.name"></td>
                                    <td>{{ item.from_date | myDate }}</td>
                                    <td>{{ item.reason }}</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                    <!-- Modal footer -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>

                </div>
            </div>
        </div>

    </section>
</template>

<script>

import VueGauge from 'vue-gauge';
import SidebarModal from './../SideBarModal.vue';
export default {
    name: "Machine",
    components: {
        VueGauge,
        SidebarModal,
        MachinePop: () => import('../MachineFarPop.vue'),
    },
    data() {
        return {
            pop_machine:'',
            MachineSite: '',
            categories: [],
            sub_categories: [],
            companies: [],
            models: [],
            search: {
                page: 1,
                far_no: '',
                category_id: '',
                sub_category_id: '',
                machine_companies_id: '',
                machine_models_id: '',
                machine_type: '',
                condition_of_machine: '',
                purchase_date_from: '',
                purchase_date_to: '',
                Ownership: '',
                pm_due_status: '',
                site_id: '',
                amc_status: '',
                warrenty_status: ''
            },
            cam_list: '',
            operator_list: '',
            Machines: {},
            pmModalData: '',
            sites: [],
            operators: [],
            machine_existing_site: {
                id: '',
                site_name: '',
                from_date: '',
            },
            machine_existing_operator: {
                id: '',
                operator_name: '',
                from_date: '',
            },
            form: new Form({
                machine_id: '',
                site_id: '',
                from_date: '',
                to_date: '',
                redeployment_reason: '',
            }),

            operatorform: new Form({
                machine_id: '',
                operator_id: '',
                operator_from_date: '',
                operator_to_date: '',
                reason: '',
            }),
                

            json_fields: {
                'Far No': 'far_no', 'Name': 'name', 'Owner': 'owner', 'Purchase Date': 'purchase_date', 'Machine Type': 'machine_type',
                'Machine Model':{
                    field: "machine_model",
                    callback: (model) => {
                        return model ? model.name : '';
                    },
                },
                'Manufacture Year': 'manufacture_year', 'Regn No': 'regn_no', 'Machine Sr No': 'machine_sr_no', 'Engine No': 'engine_no', 'Chassis No': 'chassis_no', 'Condition of Machine': 'condition_of_machine', 'Standard CPH': 'standard_cph', 'Consumption Type': 'consumption_type', 'Under Maintenance': 'under_maintenance','Current Site': {
                    field: "current_site",
                    callback: (val) => {
                        return val.site_name;
                    },
                },
                'Last Maintenance Type': {
                    field: "last_ticket",
                    callback: (machine) => {
                        return machine ? machine.ticket_type : '';
                    },
                },
                'Last Maintenance Date': {
                    field: "last_ticket",
                    callback: (machine) => {
                        return machine ? machine.actual_date : '';
                    },
                },

                'Warranty Status' : 'machine_warrenty_status', 'AMC Status' : 'machine_amc_status',

                'PM Due Status':{
                    field: "next_pm_date",
                    callback: (machine) => {
                        let status='';
                        if (machine.status == 4){
                            status="Green";
                        }
                        if (machine.status == 3){
                            status="Yellow";
                        }
                        if (machine.status == 2){
                            status="Orange";
                        }
                        if (machine.status == 1){
                            status="Red";
                        }
                        if(this.search && this.search.pm_due_status=='No PM'){
                            status="No PM";
                        }
                        return status;
                    },
                },

                'Operator Name':{
                    field: "machine_operators",
                    callback: (machine) => {
                        return machine.operator_name;
                    },
                }

            },

            json_meta: [
                [{
                    key: "charset",
                    value: "utf-8",
                }, ],
            ],
        }
    },
    beforeCreate() {
        axios.get("api/get_pre_machine")
            .then((res) => {
                this.sites = res.data.data.sites;
                this.categories = res.data.data.Category;
                this.companies = res.data.data.MachineCompany;
                this.operators = res.data.data.operators;
            })
    },
    methods: {
            openSideModal() {
                this.$refs.sidebarModal.openSideModal();
            },
            closeSideModal() {
                this.$refs.sidebarModal.closeSideModal();
            },
            async export_csv() {
                const response = await axios.get('api/machine?export=1', {
                    params: this.search
                });
                return response.data.data;
            },
            startDownload() {
                Swal.fire({
                    title: 'Please Wait !',
                    html: 'Data populating', // add html attribute if you want or remove
                    allowOutsideClick: false,
                    onBeforeOpen: () => {
                        Swal.showLoading()
                    },
                });
            },
            finishDownload() {
                Swal.close()
            },

        get_row_total(key) {
            if (this.MachineSite) {
                return this.MachineSite.reduce((accumulator, current) => accumulator + Number(current[key]), 0)
            } else {
                return 0
            }

        },
        isSourceSelectable(op) {
            if (op.id != this.machine_existing_site.id) {
                return true;
            }
        },
        isSourceSelectable2(op){
            console.log("asd");
            console.log(op.id);
            console.log(this.machine_existing_operator);
            if (op.id != this.machine_existing_operator.id) {
                return true;
            }
        },
        reset_filter() {
            this.search = {
                page: 1,
                far_no: '',
                category_id: '',
                sub_category_id: '',
                machine_companies_id: '',
                machine_models_id: '',
                machine_type: '',
                condition_of_machine: '',
                purchase_date_from: '',
                purchase_date_to: '',
                Ownership: '',
                pm_due_status: '',
                site_id: '',
                warrenty_status: '',
                amc_status: ''
            }
            this.getResults()
        },
        get_del(threshold, red, orange, yellow, green) {
            let l = [100 - green, 100 - orange, 100 - red];
            return [yellow, orange, red];
        },
        async view_pm_details(data) {
            let cloaderd = this.$loading.show({
                container: this.$refs.ref_load_user
            });
            this.pmModalData = data
            $('#pmModal').modal('show');
            cloaderd.hide()
        },
        view_site_details(data) {
            this.pmModalData = data
            $('#MachineSiteModal').modal('show');
            this.MachineSite = ''
/*             let cloaderd = this.$loading.show({
                container: this.$refs.ref_load_user
            });
            axios.get('api/machine/get_site_details/' + data.id)
                .then(res => {
                    this.MachineSite = res.data.data
                    cloaderd.hide()
                })
                .catch(err => {
                    cloaderd.hide()
                }) */
        },

        getResults(page = 1) {
            let cloaderd = this.$loading.show();
            this.search.page = page
            this.search.module = "machine"
            axios.get('api/machine', {
                params: this.search
            }).then(({ data }) => {
                this.Machines = data.data
                cloaderd.hide()
            });


        },
        loadMachines() {
            let cloaderd = this.$loading.show();
            this.search.module = "machine"
            axios.get("api/machine", {
                params: this.search
            }).then(({ data }) => {
                this.Machines = data.data
                cloaderd.hide()
            });
            // }
        },

        AssingMachine(Machine, site) {
            this.pop_machine=Machine
            this.form.machine_id = Machine.id
            this.machine_existing_site.site_name = site ? site.site_name : ''
            this.machine_existing_site.from_date = site ? site.from_date : ''
            this.machine_existing_site.id = site ? site.id : ''
            $('#assignModal').modal('show');
        },
        get_machine_list(data) {
            this.pmModalData = data
            let cloaderd = this.$loading.show();
            axios.get('/api/machine/site/' + data.id)
            .then(res => {
                this.cam_list = res.data.data
                $('#CamListModal').modal('show');
                cloaderd.hide()
            })
            .catch(err => {
                cloaderd.hide()
            });
        },
        get_operator_list(data) {
            this.pmModalData = data
            let cloaderd = this.$loading.show();
            axios.get('/api/machine/operator/' + data.id)
                .then(res => {
                    this.operator_list = res.data.data
                    $('#OperatorListModal').modal('show');
                    cloaderd.hide()
                })
                .catch(err => {
                    cloaderd.hide()
                })
        },
        AssingOperator(Machine, operator){
            this.pop_machine=Machine
            this.operatorform.machine_id = Machine.id
            this.machine_existing_operator.operator_name = operator ? operator.operator_name : ''
            this.machine_existing_operator.from_date = operator ? operator.from_date : ''
            this.machine_existing_operator.id = operator ? operator.id : ''
            $('#assignOperatorModal').modal('show');
        },
        async submitAssignSite() {
            this.$validator.validateAll().then(async (valid) => {
                // if (valid) {
                    this.verrors.clear();
                    let cloaderd = this.$loading.show();

                    this.form.post('api/machine/assign_site')
                        .then((data) => {
                            this.$validator.reset();
                            cloaderd.hide()
                            this.form.id = data.data.data.id;
                            this.form.reset();
                            this.machine_existing_site = {
                                site_name: '',
                                from_date: '',
                            }
                            $('#assignModal').modal('hide');
                            this.getResults();
                            Toast.fire({
                                icon: 'success',
                                title: data.data.message
                            });
                        })
                        .catch(err => {
                            if (err.response && err.response.data) {
                                this.$setErrorsFromResponse(err.response.data);
                            }
                            cloaderd.hide();
                        })

                // }
            });
        },

        submitAssignOperator(){
            this.$validator.validateAll().then(async (valid) => {
                console.log(valid);
                // if (valid) {
                    this.verrors.clear();
                    let cloaderd = this.$loading.show({
                        container: this.$refs.ref_load_user
                    });

                    this.operatorform.post('api/machine/assign_operator')
                        .then((data) => {
                            this.$validator.reset();
                            cloaderd.hide()
                            this.operatorform.id = data.data.data.id;
                            this.operatorform.reset();
                            this.machine_existing_operator = {
                                operator_name: '',
                                operator_from_date: '',
                            }
                            $('#assignOperatorModal').modal('hide');
                            this.getResults();
                            Toast.fire({
                                icon: 'success',
                                title: data.data.message
                            });
                        })
                        .catch(err => {
                            if (err.response && err.response.data) {
                                this.$setErrorsFromResponse(err.response.data);
                            }
                            cloaderd.hide();
                        })

                // }
            });
        },

        deleteMachine(id) {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                // Send request to the server
                if (result.value) {
                    this.form.delete('api/machine/' + id).then(() => {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        );
                        // Fire.$emit('AfterCreate');
                        this.loadMachines();
                    }).catch((data) => {
                        Swal.fire("Failed!", data.message, "warning");
                    });
                }
            })
        },
    },
    created() {
        this.loadMachines();
    },
    watch: {

        async 'search.category_id'(n, o) {
            if (o)
                this.form.sub_category_id = ''
            if (n) {
                axios.get("api/category/" + n)
                    .then((res) => {
                        this.sub_categories = res.data.data;
                    })
            }
        },
        async 'search.machine_companies_id'(n, o) {
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
