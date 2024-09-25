<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Machine List</h3>
                            <div class="card-tools">
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
                                        <label for="machine_id">FAR No</label>
                                    </div>
                                    <div class="col">
                                        <input placeholder="Search.." v-model="search" class="form-control">
                                    </div>
                                </div>

                                <div class="row align-items-center mb-2">
                                    <div class="col-auto col-custom">
                                        <label for="machine_id">CF Status</label>
                                    </div>
                                    <div class="col">
                                        <v-select label="cf_status" :options="['Data Unavailable', 'Green', 'Yellow', 'Orange', 'Red', 'Expired']"
                                            placeholder="Search.." v-model="cf_status" name="cf_status" />
                                    </div>
                                </div>

                                <div class="row align-items-center mb-2">
                                    <div class="col-auto col-custom">
                                        <label for="machine_id">National Permit Status</label>
                                    </div>
                                    <div class="col">
                                        <v-select label="np_status" :options="['Data Unavailable', 'Green', 'Yellow', 'Orange', 'Red', 'Expired']"
                                            placeholder="Search.." v-model="np_status" name="np_status">
                                        </v-select>
                                    </div>
                                </div>

                                <div class="row align-items-center mb-2">
                                    <div class="col-auto col-custom">
                                        <label for="machine_id">Road Tax Status</label>
                                    </div>
                                    <div class="col">
                                        <v-select label="rt_status" :options="['Data Unavailable', 'Green', 'Yellow', 'Orange', 'Red', 'Expired']"
                                            placeholder="Search.." v-model="rt_status" name="rt_status">
                                        </v-select>
                                    </div>
                                </div>

                                <div class="row align-items-center mb-2">
                                    <div class="col-auto col-custom">
                                        <label for="machine_id">Insurance Status</label>
                                    </div>
                                    <div class="col">
                                        <v-select label="insurance_status" :options="['Data Unavailable', 'Green', 'Yellow', 'Orange', 'Red', 'Expired']"
                                            placeholder="Search.." v-model="insurance_status" name="insurance_status">
                                        </v-select>
                                    </div>
                                </div>

                                <div class="row align-items-center mb-2">
                                    <div class="col-auto col-custom">
                                        <label for="machine_id">Pollution Status</label>
                                    </div>
                                    <div class="col">
                                        <v-select label="pollution_status" :options="['Data Unavailable', 'Green', 'Yellow', 'Orange', 'Red', 'Expired']"
                                            placeholder="Search.." v-model="pollution_status" name="pollution_status">
                                        </v-select>
                                    </div>
                                </div>

                                <div class="row align-items-center mb-2">
                                    <div class="col-auto col-custom">
                                        <label for="machine_id">RC Status</label>
                                    </div>
                                    <div class="col">
                                        <v-select label="rc_status" :options="['Data Unavailable', 'Green', 'Yellow', 'Orange', 'Red', 'Expired']"
                                            placeholder="Search.." v-model="rc_status" name="rc_status">
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
                                    <!-- <div class="col-12 mb-2">
                                        <download-excel class="btn btn-warning btn-block" :fetch="export_csv"
                                            :fields="json_fields" :before-generate="startDownload"
                                            :before-finish="finishDownload" worksheet="My Worksheet" type="csv"
                                            name="ticket_list.csv">
                                            <span class="labelText">
                                                <i class="fa fa-file-excel-o" aria-hidden="true"></i>
                                                Export as CSV</span>
                                        </download-excel>
                                    </div> -->
                                </div>
                            </form>
                        </SidebarModal>

                        <!-- /.card-header -->
                        <div class="card-body ticketLstTbl table-responsive p-0">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th class="stickey">Action</th>
                                        <th width="10">FAR No </th>
                                        <th width="20">Name</th>
                                        <th width="40">PM Status</th>
                                        <th width="10">Current Site</th>
                                        <th width="10">CF Status</th>
                                        <th width="10">National Permit Status</th>
                                        <th width="10">Road TAX Status</th>
                                        <th width="10">Insurance Status</th>
                                        <th width="10">Pollution Status</th>
                                        <th width="10">RC Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="Machine in Machines.data" :key="Machine.id">
                                        <td class="align-middle">
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-primary btn-sm btn-toggle-custom">Action</button>
                                                <button type="button" class="btn btn-primary btn-sm dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <span class="sr-only">Toggle Dropdown</span>
                                                </button>
                                                <div class="dropdown-menu">
                                                    <a href="javascript:void(0);" @click="get_details(Machine,Machine.id)"
                                                        class="dropdown-item" v-if="$gate.hasPermission('can_view_periodic_maintenance')">
                                                        View Periodic Maintenance
                                                    </a>
                                                    <a href="javascript:void(0);" @click="addModal(Machine)"
                                                        class="dropdown-item" v-if="Machine.current_site && $gate.hasPermission('can_add_periodic_maintenance')">
                                                        Add Periodic Maintenance
                                                    </a>
                                                    <a href="javascript:void(0);" @click="get_detailsCF(Machine,Machine.id)"
                                                        class="dropdown-item" v-if="$gate.hasPermission('can_view_cf')">
                                                        View CF/RC Etc.
                                                    </a>
                                                    <a href="javascript:void(0);" @click="addModalCF(Machine)"
                                                        class="dropdown-item" v-if="$gate.hasPermission('can_add_cf')">
                                                        Add CF/RC Etc.
                                                    </a>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="align-middle">{{ Machine.far_no }}</td>
                                        <td class="align-middle truncate" :title="Machine.name">{{ Machine.name }}</td>
                                        <td @click="view_pm_details(Machine)" class="align-middle">
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
                                                    <VueGauge :refid="'lopg' + Machine.id"
                                                        :options="{
                                                            'needleValue': Machine.next_pm_date.production_fig, 'arcDelimiters': get_del(Machine.production_fig_threshold, Number(Machine.next_pm_date.settings.prdfig_red), Number(Machine.next_pm_date.settings.prdfig_orange), Number(Machine.next_pm_date.settings.prdfig_yellow), Number(Machine.next_pm_date.settings.prdfig_green)), arcColors: ['green', 'yellow', 'orange', 'red'], chartWidth: '80', rangeLabel: ['0', Machine.production_fig_threshold.toString()], arcLabels: [Machine.next_pm_date.settings.prdfig_yellow.toString(),
                                                            Machine.next_pm_date.settings.prdfig_orange.toString(), Machine.next_pm_date.settings.prdfig_red.toString()], arcOverEffect: true
                                                        }" />


                                                </div>
                                            </template>
                                        </td>
                                        <td class="align-middle truncate" :title="Machine.current_site ? Machine.current_site.site_name: ''">
                                            {{ Machine.current_site ? Machine.current_site.site_name: '-'}}
                                        </td>
                                        <td class="align-middle"><div v-html="Machine.the_cf_status"></div></td>
                                        <td class="align-middle"><div v-html="Machine.the_national_permit_status"></div></td>
                                        <td class="align-middle"><div v-html="Machine.the_road_tax_status"></div></td>
                                        <td class="align-middle"><div v-html="Machine.the_insurance_status"></div></td>
                                        <td class="align-middle"><div v-html="Machine.the_pollution_status"></div></td>
                                        <td class="align-middle"><div v-html="Machine.the_rc_status"></div></td>
                                        
                                        
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- /.card-body -->
                        <div class="card-footer">
                            <pagination :data="Machines" :limit="10" @pagination-change-page="getResults" v-if="Machines">
                            </pagination>
                        </div>
                    </div>
                    <!-- /.card -->
                </div>
            </div>


        </div>

        <div class="modal" id="maintenance_modal">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">

                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">Maintenance List</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>


                    <!-- Modal body -->
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


                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>Date Time</th>
                                    <th>Run Hour</th>
                                    <th>KM Run</th>
                                    <th>Production Fig</th>
                                    <th>Consumption</th>
                                    <th>Added From</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(row, x) in maintenance" :key="row.id">
                                    <td>{{ row.datetime | myDateTime }}</td>
                                    <td>{{ row.run_hour }}</td>
                                    <td>{{ row.km_run }}</td>
                                    <td>{{ row.production_fig }}</td>
                                    <td>{{ row.consumption }}</td>
                                    <td>{{ row.created_from == "regular"?"Regular":"Bluk Reading" }}</td>
                                    <td>
                                        <a href="javascript:void(0);" @click="deleteMaintenance(row.id)"
                                            v-if="(maintenance.length == x + 1) && row.created_from == 'regular'">
                                            <i class="fa fa-trash red"></i>
                                        </a>
                                    </td>
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

        <div class="modal" id="maintenance_modalCF">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">

                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">Maintenance List</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>


                    <!-- Modal body -->
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


                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th width="200">CF Date</th>
                                    <th width="150">CF Amount</th>
                                    <th width="150">CF Note</th>
                                    <th width="150">CF Attachment</th>
                                    <th width="150">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-if="pop_machine.cf_date != null">
                                    <td>{{ pop_machine.cf_date }}</td>
                                    <td>{{ pop_machine.cf_amount | toCurrency}}</td>
                                    <td></td>
                                    <td><a :href="pop_machine.cf_copy" v-if="pop_machine.cf_copy != null" target="new">View</a></td>
                                    <td></td>
                                </tr>
                                <tr v-for="(row, x) in maintenanceCF" :key="row.id" v-if="row.cf_amount > 0">

                                    <td>{{ row.cf_date }}</td>
                                    <td>{{ row.cf_amount | toCurrency}}</td>
                                    <td>{{ row.cf_note }}</td>
                                    <td><a :href="row.cf_attachment" v-if="row.cf_attachment != null" target="new">View</a></td>
                                    <td>
                                        <a href="javascript:void(0);" @click="deleteMaintenanceCF(row.id, 'cf')">
                                            <i class="fa fa-trash red"></i>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th width="200">National Permit Date</th>
                                    <th width="150">National Permit Amount</th>
                                    <th width="150">National Permit Note</th>
                                    <th width="150">National Permit Attachment</th>
                                    <th width="150">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-if="pop_machine.national_permit_date != null">
                                    <td>{{ pop_machine.national_permit_date }}</td>
                                    <td>{{ pop_machine.national_permit_amount | toCurrency}}</td>
                                    <td></td>
                                    <td><a :href="pop_machine.national_permit_copy" v-if="pop_machine.national_permit_copy != null" target="new">View</a></td>
                                    <td></td>
                                </tr>
                                <tr v-for="(row, x) in maintenanceCF" :key="row.id" v-if="row.national_permit_amount > 0">

                                    <td>{{ row.national_permit_date }}</td>
                                    <td>{{ row.national_permit_amount | toCurrency}}</td>
                                    <td>{{ row.national_permit_note }}</td>
                                    <td><a :href="row.national_permit_attachment" v-if="row.national_permit_attachment != null" target="new">View</a></td>
                                    <td>
                                        <a href="javascript:void(0);" @click="deleteMaintenanceCF(row.id, 'np')">
                                            <i class="fa fa-trash red"></i>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th width="200">Road Tax Date</th>
                                    <th width="150">Road Tax Amount</th>
                                    <th width="150">Road Tax Note</th>
                                    <th width="150">Road Tax Attachment</th>
                                    <th width="150">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-if="pop_machine.road_tax_date != null">
                                    <td>{{ pop_machine.road_tax_date }}</td>
                                    <td>{{ pop_machine.road_tax_amount | toCurrency}}</td>
                                    <td></td>
                                    <td><a :href="pop_machine.road_tax_copy" v-if="pop_machine.road_tax_copy != null" target="new">View</a></td>
                                    <td></td>
                                </tr>
                                <tr v-for="(row, x) in maintenanceCF" :key="row.id" v-if="row.road_tax_amount > 0">

                                    <td>{{ row.road_tax_date }}</td>
                                    <td>{{ row.road_tax_amount | toCurrency}}</td>
                                    <td>{{ row.road_tax_note }}</td>
                                    <td><a :href="row.road_tax_attachment" v-if="row.road_tax_attachment != null" target="new">View</a></td>
                                    <td>
                                        <a href="javascript:void(0);" @click="deleteMaintenanceCF(row.id, 'rt')">
                                            <i class="fa fa-trash red"></i>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th width="200">Insurance Date</th>
                                    <th width="150">Insurance Amount</th>
                                    <th width="150">Insurance Note</th>
                                    <th width="150">Insurance Attachment</th>
                                    <th width="150">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-if="pop_machine.insurance_date != null">
                                    <td>{{ pop_machine.insurance_date }}</td>
                                    <td>{{ pop_machine.insurance_amount | toCurrency}}</td>
                                    <td></td>
                                    <td><a :href="pop_machine.insurance_copy" v-if="pop_machine.insurance_copy != null" target="new">View</a></td>
                                    <td></td>
                                </tr>
                                <tr v-for="(row, x) in maintenanceCF" :key="row.id" v-if="row.insurance_amount > 0">

                                    <td>{{ row.insurance_date }}</td>
                                    <td>{{ row.insurance_amount | toCurrency}}</td>
                                    <td>{{ row.insurance_note }}</td>
                                    <td><a :href="row.insurance_attachment" v-if="row.insurance_attachment != null" target="new">View</a></td>
                                    <td>
                                        <a href="javascript:void(0);" @click="deleteMaintenanceCF(row.id, 'insurance')">
                                            <i class="fa fa-trash red"></i>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th width="200">Pollution Date</th>
                                    <th width="150">Pollution Amount</th>
                                    <th width="150">Pollution Note</th>
                                    <th width="150">Pollution Attachment</th>
                                    <th width="150">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-if="pop_machine.pollution_date != null">
                                    <td>{{ pop_machine.pollution_date }}</td>
                                    <td>{{ pop_machine.pollution_amount | toCurrency}}</td>
                                    <td></td>
                                    <td><a :href="pop_machine.pollution_copy" v-if="pop_machine.pollution_copy != null" target="new">View</a></td>
                                    <td></td>
                                </tr>
                                <tr v-for="(row, x) in maintenanceCF" :key="row.id" v-if="row.pollution_amount > 0">

                                    <td>{{ row.pollution_date }}</td>
                                    <td>{{ row.pollution_amount | toCurrency}}</td>
                                    <td>{{ row.pollution_note }}</td>
                                    <td><a :href="row.pollution_attachment" v-if="row.pollution_attachment != null" target="new">View</a></td>
                                    <td>
                                        <a href="javascript:void(0);" @click="deleteMaintenanceCF(row.id, 'pollution')">
                                            <i class="fa fa-trash red"></i>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th width="200">RC Date</th>
                                    <th width="150">RC Amount</th>
                                    <th width="150">RC Note</th>
                                    <th width="150">RC Attachment</th>
                                    <th width="150">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-if="pop_machine.rc_date != null">
                                    <td>{{ pop_machine.rc_date }}</td>
                                    <td>{{ pop_machine.rc_amount | toCurrency}}</td>
                                    <td></td>
                                    <td><a :href="pop_machine.rc_copy" v-if="pop_machine.rc_copy != null" target="new">View</a></td>
                                    <td></td>
                                </tr>
                                <tr v-for="(row, x) in maintenanceCF" :key="row.id" v-if="row.rc_amount > 0">

                                    <td>{{ row.rc_date }}</td>
                                    <td>{{ row.rc_amount | toCurrency}}</td>
                                    <td>{{ row.rc_note }}</td>
                                    <td><a :href="row.rc_attachment" v-if="row.rc_attachment != null" target="new">View</a></td>
                                    <td>
                                        <a href="javascript:void(0);" @click="deleteMaintenanceCF(row.id, 'rc')">
                                            <i class="fa fa-trash red"></i>
                                        </a>
                                    </td>
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



        <div class="modal fade" id="addDetails" tabindex="-1" role="dialog" aria-labelledby="addDetails"
            aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Add Maintenance</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <form @submit.prevent="submitMaintenance()">
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
                                <div class="col-6">
                                    <div class="form-group">
                                        <label>Date</label>
                                        <datetime value-zone="Asia/Kolkata" v-model="form.datetime" name="datetime"
                                            input-class="form-control"
                                            :class="{ 'is-invalid': verrors.has('datetime') }" v-validate="'required'"
                                            data-vv-as="date time" type="datetime"
                                            :min-datetime="maintenance_last_date" />
                                        <div v-if="verrors.has('datetime')" class="help-block invalid-feedback">{{
                                                verrors.first('datetime')
                                        }}</div>
                                    </div>
                                </div>
                                <div class="col-6" v-if="pop_machine.is_consumtion_hr_run">
                                    <div class="form-group">
                                        <label>Current Run hour </label>
                                        <div class="input-group">
                                            <input v-model="form.run_hour" name="run_hour" class="form-control"
                                                :class="{ 'is-invalid': verrors.has('run_hour') }"
                                                v-validate="{ required: true, decimal: 2, min_value: pop_machine.last_maintenances ? pop_machine.last_maintenances.run_hour : pop_machine.last_hr_run }"
                                                data-vv-as="Current Run hour" />
                                            <div class="input-group-append">
                                                <span class="input-group-text">Hour</span>
                                            </div>
                                        </div>
                                        <div v-if="verrors.has('run_hour')" class="help-block invalid-feedback">
                                            {{ verrors.first('run_hour') }}</div>
                                    </div>
                                </div>
                                <div class="col-6" v-if="pop_machine.is_consumtion_km_run">
                                    <div class="form-group">
                                        <label> Current KM Run </label>
                                        <div class="input-group">
                                            <input v-model="form.km_run" name="km_run" class="form-control"
                                                :class="{ 'is-invalid': verrors.has('km_run') }"
                                                v-validate="{ required: true, decimal: 2, min_value: pop_machine.last_maintenances ? pop_machine.last_maintenances.km_run : pop_machine.last_km_run }"
                                                data-vv-as="Current KM hour" />
                                            <div class="input-group-append">
                                                <span class="input-group-text">KM</span>
                                            </div>
                                        </div>
                                        <div v-if="verrors.has('km_run')" class="help-block invalid-feedback">{{
                                                verrors.first('km_run')
                                        }}</div>
                                    </div>
                                </div>
                                <div class="col-6" v-if="pop_machine.is_production_fig">
                                    <div class="form-group">
                                        <label> Current Production fig </label>
                                        <div class="input-group">
                                            <input v-model="form.production_fig" name="production_fig"
                                                class="form-control"
                                                :class="{ 'is-invalid': verrors.has('production_fig') }"
                                                v-validate="{ required: true, decimal: 2, min_value: pop_machine.last_maintenances ? pop_machine.last_maintenances.production_fig : pop_machine.periodic_maintenance_breakdown }"
                                                data-vv-as="Current Production fig" />
                                            <div class="input-group-append">
                                                <span class="input-group-text">Cu Mtr</span>
                                            </div>
                                        </div>
                                        <div v-if="verrors.has('production_fig')" class="help-block invalid-feedback">{{
                                                verrors.first('production_fig')
                                        }}</div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label>Fuel consumption</label>
                                        <input v-model="form.consumption" name="consumption" class="form-control"
                                            :class="{ 'is-invalid': verrors.has('consumption') }"
                                            v-validate="{ required: true, decimal: 2 }" data-vv-as="Fuel consumption" />
                                        <div v-if="verrors.has('consumption')" class="help-block invalid-feedback">
                                            {{ verrors.first('consumption') }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div class="modal fade" id="addDetailsCF" tabindex="-1" role="dialog" aria-labelledby="addDetailsCF"
            aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Add Maintenance</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <form @submit.prevent="submitMaintenanceCF()">
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
                                <div class="col-3">
                                    <div class="form-group">
                                        <label>CF Date</label>
                                        <datetime value-zone="Asia/Kolkata" v-model="form.cf_date" name="cf_date"
                                            input-class="form-control"
                                            :class="{ 'is-invalid': verrors.has('cf_date') }"
                                            data-vv-as="date time" type="date"
                                            :min-datetime="this.last_cf_date" />
                                        <div v-if="verrors.has('cf_date')" class="help-block invalid-feedback">{{
                                                verrors.first('cf_date')
                                        }}</div>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="form-group">
                                        <label>CF Amount</label>
                                        <input v-model="form.cf_amount" name="cf_amount" class="form-control"
                                            :class="{ 'is-invalid': verrors.has('cf_amount') }"
                                            v-validate="{ decimal: 2 }" data-vv-as="CF amount" />
                                        <div v-if="verrors.has('cf_amount')" class="help-block invalid-feedback">
                                            {{ verrors.first('cf_amount') }}</div>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="form-group">
                                        <label>CF Note</label>
                                        <input v-model="form.cf_note" name="cf_note" class="form-control"
                                            :class="{ 'is-invalid': verrors.has('cf_note') }"
                                             data-vv-as="CF note" />
                                        <div v-if="verrors.has('cf_note')" class="help-block invalid-feedback">
                                            {{ verrors.first('cf_note') }}</div>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="form-group">
                                        <label>CF Attachment</label>
                                        <input type="file" v-on:change="changeCFFile" name="cf_attachment" class="form-control"
                                            :class="{ 'is-invalid': verrors.has('cf_attachment') }"
                                             data-vv-as="CF attachment" accept="image/*, .xls,.xlsx, .pdf, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel" />
                                        <div v-if="verrors.has('cf_attachment')" class="help-block invalid-feedback">
                                            {{ verrors.first('cf_attachment') }}</div>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-3">
                                    <div class="form-group">
                                        <label>National Permit Date</label>
                                        <datetime value-zone="Asia/Kolkata" v-model="form.national_permit_date" name="national_permit_date"
                                            input-class="form-control"
                                            :class="{ 'is-invalid': verrors.has('national_permit_date') }"
                                            data-vv-as="date time" type="date"
                                            :min-datetime="this.last_np_date" />
                                        <div v-if="verrors.has('national_permit_date')" class="help-block invalid-feedback">{{
                                                verrors.first('national_permit_date')
                                        }}</div>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="form-group">
                                        <label>National Permit Amount</label>
                                        <input v-model="form.national_permit_amount" name="national_permit_amount" class="form-control"
                                            :class="{ 'is-invalid': verrors.has('national_permit_amount') }"
                                            v-validate="{ decimal: 2 }" data-vv-as="CF amount" />
                                        <div v-if="verrors.has('national_permit_amount')" class="help-block invalid-feedback">
                                            {{ verrors.first('national_permit_amount') }}</div>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="form-group">
                                        <label>National Permit Note</label>
                                        <input v-model="form.national_permit_note" name="national_permit_note" class="form-control"
                                            :class="{ 'is-invalid': verrors.has('national_permit_note') }"
                                             data-vv-as="CF note" />
                                        <div v-if="verrors.has('national_permit_note')" class="help-block invalid-feedback">
                                            {{ verrors.first('national_permit_note') }}</div>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="form-group">
                                        <label>National Permit Attachment</label>
                                        <input type="file" v-on:change="changeNPFile" name="national_permit_attachment" class="form-control"
                                            :class="{ 'is-invalid': verrors.has('national_permit_attachment') }"
                                             data-vv-as="CF attachment" accept="image/*, .xls,.xlsx, .pdf, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel" />
                                        <div v-if="verrors.has('national_permit_attachment')" class="help-block invalid-feedback">
                                            {{ verrors.first('national_permit_attachment') }}</div>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-3">
                                    <div class="form-group">
                                        <label>Road TAX Date</label>
                                        <datetime value-zone="Asia/Kolkata" v-model="form.road_tax_date" name="road_tax_date"
                                            input-class="form-control"
                                            :class="{ 'is-invalid': verrors.has('road_tax_date') }"
                                            data-vv-as="date time" type="date"
                                            :min-datetime="this.last_rt_date" />
                                        <div v-if="verrors.has('road_tax_date')" class="help-block invalid-feedback">{{
                                                verrors.first('road_tax_date')
                                        }}</div>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="form-group">
                                        <label>Road TAX Amount</label>
                                        <input v-model="form.road_tax_amount" name="road_tax_amount" class="form-control"
                                            :class="{ 'is-invalid': verrors.has('road_tax_amount') }"
                                            v-validate="{ decimal: 2 }" data-vv-as="CF amount" />
                                        <div v-if="verrors.has('road_tax_amount')" class="help-block invalid-feedback">
                                            {{ verrors.first('road_tax_amount') }}</div>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="form-group">
                                        <label>Road TAX Note</label>
                                        <input v-model="form.road_tax_note" name="road_tax_note" class="form-control"
                                            :class="{ 'is-invalid': verrors.has('road_tax_note') }"
                                             data-vv-as="CF note" />
                                        <div v-if="verrors.has('road_tax_note')" class="help-block invalid-feedback">
                                            {{ verrors.first('road_tax_note') }}</div>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="form-group">
                                        <label>Road TAX Attachment</label>
                                        <input type="file" v-on:change="changeRTFile" name="road_tax_attachment" class="form-control"
                                            :class="{ 'is-invalid': verrors.has('road_tax_attachment') }"
                                             data-vv-as="CF attachment" accept="image/*, .xls,.xlsx, .pdf, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel" />
                                        <div v-if="verrors.has('road_tax_attachment')" class="help-block invalid-feedback">
                                            {{ verrors.first('road_tax_attachment') }}</div>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-3">
                                    <div class="form-group">
                                        <label>Insurance Date</label>
                                        <datetime value-zone="Asia/Kolkata" v-model="form.insurance_date" name="insurance_date"
                                            input-class="form-control"
                                            :class="{ 'is-invalid': verrors.has('insurance_date') }"
                                            data-vv-as="date time" type="date"
                                            :min-datetime="this.last_insurance_date" />
                                        <div v-if="verrors.has('insurance_date')" class="help-block invalid-feedback">{{
                                                verrors.first('insurance_date')
                                        }}</div>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="form-group">
                                        <label>Insurance Amount</label>
                                        <input v-model="form.insurance_amount" name="insurance_amount" class="form-control"
                                            :class="{ 'is-invalid': verrors.has('insurance_amount') }"
                                            v-validate="{ decimal: 2 }" data-vv-as="CF amount" />
                                        <div v-if="verrors.has('insurance_amount')" class="help-block invalid-feedback">
                                            {{ verrors.first('insurance_amount') }}</div>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="form-group">
                                        <label>Insurance Note</label>
                                        <input v-model="form.insurance_note" name="insurance_note" class="form-control"
                                            :class="{ 'is-invalid': verrors.has('insurance_note') }"
                                             data-vv-as="CF note" />
                                        <div v-if="verrors.has('insurance_note')" class="help-block invalid-feedback">
                                            {{ verrors.first('insurance_note') }}</div>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="form-group">
                                        <label>Insurance Attachment</label>
                                        <input type="file" v-on:change="changeInsuranceFile" name="insurance_attachment" class="form-control"
                                            :class="{ 'is-invalid': verrors.has('insurance_attachment') }"
                                             data-vv-as="CF attachment" accept="image/*, .xls,.xlsx, .pdf, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel" />
                                        <div v-if="verrors.has('insurance_attachment')" class="help-block invalid-feedback">
                                            {{ verrors.first('insurance_attachment') }}</div>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-3">
                                    <div class="form-group">
                                        <label>Pollution Date</label>
                                        <datetime value-zone="Asia/Kolkata" v-model="form.pollution_date" name="pollution_date"
                                            input-class="form-control"
                                            :class="{ 'is-invalid': verrors.has('pollution_date') }"
                                            data-vv-as="date time" type="date"
                                            :min-datetime="this.last_pollution_date" />
                                        <div v-if="verrors.has('pollution_date')" class="help-block invalid-feedback">{{
                                                verrors.first('pollution_date')
                                        }}</div>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="form-group">
                                        <label>Pollution Amount</label>
                                        <input v-model="form.pollution_amount" name="pollution_amount" class="form-control"
                                            :class="{ 'is-invalid': verrors.has('pollution_amount') }"
                                            v-validate="{ decimal: 2 }" data-vv-as="CF amount" />
                                        <div v-if="verrors.has('pollution_amount')" class="help-block invalid-feedback">
                                            {{ verrors.first('pollution_amount') }}</div>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="form-group">
                                        <label>Pollution Note</label>
                                        <input v-model="form.pollution_note" name="pollution_note" class="form-control"
                                            :class="{ 'is-invalid': verrors.has('pollution_note') }"
                                             data-vv-as="CF note" />
                                        <div v-if="verrors.has('pollution_note')" class="help-block invalid-feedback">
                                            {{ verrors.first('pollution_note') }}</div>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="form-group">
                                        <label>Pollution Attachment</label>
                                        <input type="file" v-on:change="changePollutionFile" name="pollution_attachment" class="form-control"
                                            :class="{ 'is-invalid': verrors.has('pollution_attachment') }"
                                             data-vv-as="CF attachment" accept="image/*, .xls,.xlsx, .pdf, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel" />
                                        <div v-if="verrors.has('pollution_attachment')" class="help-block invalid-feedback">
                                            {{ verrors.first('pollution_attachment') }}</div>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-3">
                                    <div class="form-group">
                                        <label>Rc Date</label>
                                        <datetime value-zone="Asia/Kolkata" v-model="form.rc_date" name="rc_date"
                                            input-class="form-control"
                                            :class="{ 'is-invalid': verrors.has('rc_date') }"
                                            data-vv-as="date time" type="date"
                                            :min-datetime="this.last_rc_date" />
                                        <div v-if="verrors.has('rc_date')" class="help-block invalid-feedback">{{
                                                verrors.first('rc_date')
                                        }}</div>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="form-group">
                                        <label>Rc Amount</label>
                                        <input v-model="form.rc_amount" name="rc_amount" class="form-control"
                                            :class="{ 'is-invalid': verrors.has('rc_amount') }"
                                            v-validate="{ decimal: 2 }" data-vv-as="CF amount" />
                                        <div v-if="verrors.has('rc_amount')" class="help-block invalid-feedback">
                                            {{ verrors.first('rc_amount') }}</div>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="form-group">
                                        <label>Rc Note</label>
                                        <input v-model="form.rc_note" name="rc_note" class="form-control"
                                            :class="{ 'is-invalid': verrors.has('rc_note') }"
                                             data-vv-as="CF note" />
                                        <div v-if="verrors.has('rc_note')" class="help-block invalid-feedback">
                                            {{ verrors.first('rc_note') }}</div>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="form-group">
                                        <label>Rc Attachment</label>
                                        <input type="file" v-on:change="changeRCFile" name="rc_attachment" class="form-control"
                                            :class="{ 'is-invalid': verrors.has('rc_attachment') }"
                                             data-vv-as="CF attachment" accept="image/*, .xls,.xlsx, .pdf, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel" />
                                        <div v-if="verrors.has('rc_attachment')" class="help-block invalid-feedback">
                                            {{ verrors.first('rc_attachment') }}</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </form>
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

                            <div class="row" v-if="pmModalData.under_maintenance == 'Yes'">
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
                                    <VueGauge refid="popg4" :key="'popg' + pmModalData.id"
                                        :options="{
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



    </section>
</template>

<script>

import VueGauge from 'vue-gauge';
import SidebarModal from './../SideBarModal.vue';
export default {
    name: "MachineMaintenance",
    components: {
        VueGauge, SidebarModal
    },
    data() {
        return {
            pop_machine:'',
            search: '',
            cf_status: "",
            np_status: "",
            rt_status: "",
            insurance_status: "",
            pollution_status: "",
            rc_status: "",
            Machines: {},
            // settings: {},
            maintenance: '',
            maintenanceCF: '',
            pmModalData: '',
            maintenance_last_date: '',
            form: new Form({
                id: '',
                machine_id: '',
                datetime: '',
                run_hour: '',
                km_run: '',
                production_fig: '',
                consumption: '',

                cf_date: '',
                cf_amount: '',
                cf_note: '',
                cf_attachment: '',

                national_permit_date: '',
                national_permit_amount: '',
                national_permit_note: '',
                national_permit_attachment: '',

                road_tax_date: '',
                road_tax_amount: '',
                road_tax_note: '',
                road_tax_attachment: '',

                insurance_date: '',
                insurance_amount: '',
                insurance_note: '',
                insurance_attachment: '',

                pollution_date: '',
                pollution_amount: '',
                pollution_note: '',
                pollution_attachment: '',

                rc_date: '',
                rc_amount: '',
                rc_note: '',
                rc_attachment: '',
            }),
            pop_machine: '',
            last_cf_date: '',
            last_np_date: '',
            last_rt_date: '',
            last_insurance_date: '',
            last_pollution_date: '',
            last_rc_date: ''
        }
    },
    watch: {
        async pop_machine(n) {
            this.get_last_date()
        }
    },
    methods: {
        openSideModal() {
            this.$refs.sidebarModal.openSideModal();
        },
        closeSideModal() {
            this.$refs.sidebarModal.closeSideModal();
        },
        async reset_filter() {

            this.search = "";
            this.rc_status = "";
            this.pollution_status = "";
            this.pollution_status = "";
            this.insurance_status = "";
            this.rt_status = "";
            this.np_status = "";
            this.cf_status = "";

            this.loadMachines();
        },
        calc_cf_status(machine, uploaded_cf_date){

            if(uploaded_cf_date.length > 0){

                // this.settings.cf_green
                var today = new Date();
                var cf_date = new Date(uploaded_cf_date[0].cf_date);
                var cf_frequency = Number(machine.cf_frequency);
                cf_date.setDate(cf_date.getDate() + cf_frequency);

                // Calculate the time difference in milliseconds
                var timeDifference = cf_date - today;

                // Convert milliseconds to days
                var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

                console.log(daysDifference);

                if(daysDifference > 0 ){
                    if(Math.abs(daysDifference) >= this.settings.cf_green){
                        return `<span class="badge badge-success">${daysDifference} days left</span>`;
                    }else if(Math.abs(daysDifference) < this.settings.cf_yellow && Math.abs(daysDifference) >= this.settings.cf_orange){
                        return `<span class="badge badge-warning">${daysDifference} days left</span>`;
                    }else if(Math.abs(daysDifference) < this.settings.cf_orange && Math.abs(daysDifference) >= this.settings.cf_red){
                        return `<span class="badge" style="background-color: rgb(247, 161, 4)">${daysDifference} days left</span>`;
                    }else{
                        return `<span class="badge badge-danger">${daysDifference} days left</span>`;
                    }
                }else{
                    return "<span class='badge badge-danger'>CF Expired</span>";
                }

            }else{
                if(machine.cf_date == null){
                    return "<span class='badge badge-primary'>Data unavailable</span>";
                }else{
                    // this.settings.cf_green
                    var today = new Date();
                    var cf_date = new Date(machine.cf_date);
                    var cf_frequency = Number(machine.cf_frequency);
                    cf_date.setDate(cf_date.getDate() + cf_frequency);

                    // Calculate the time difference in milliseconds
                    var timeDifference = cf_date - today;

                    // Convert milliseconds to days
                    var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

                    if(daysDifference > 0 ){
                        if(Math.abs(daysDifference) >= this.settings.cf_green){
                            return `<span class="badge badge-success">${daysDifference} days left</span>`;
                        }else if(Math.abs(daysDifference) < this.settings.cf_yellow && Math.abs(daysDifference) >= this.settings.cf_orange){
                            return `<span class="badge badge-warning">${daysDifference} days left</span>`;
                        }else if(Math.abs(daysDifference) < this.settings.cf_orange && Math.abs(daysDifference) >= this.settings.cf_red){
                            return `<span class="badge" style="background-color: rgb(247, 161, 4)">${daysDifference} days left</span>`;
                        }else{
                            return `<span class="badge badge-danger">${daysDifference} days left</span>`;
                        }
                    }else{
                        return "<span class='badge badge-danger'>CF Expired</span>";
                    }
                }
                
            }
            
        },
        calc_np_status(machine, uploaded_date){

            if(uploaded_date.length > 0){

                // this.settings.cf_green
                var today = new Date();
                var date = new Date(uploaded_date[0].national_permit_date);
                var frequency = Number(machine.national_permit_frequency);
                date.setDate(date.getDate() + frequency);

                // Calculate the time difference in milliseconds
                var timeDifference = date - today;

                // Convert milliseconds to days
                var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

                console.log(daysDifference);

                if(daysDifference > 0 ){
                    if(Math.abs(daysDifference) >= this.settings.national_permit_green){
                        return `<span class="badge badge-success">${daysDifference} days left</span>`;
                    }else if(Math.abs(daysDifference) < this.settings.national_permit_yellow && Math.abs(daysDifference) >= this.settings.national_permit_orange){
                        return `<span class="badge badge-warning">${daysDifference} days left</span>`;
                    }else if(Math.abs(daysDifference) < this.settings.national_permit_orange && Math.abs(daysDifference) >= this.settings.national_permit_red){
                        return `<span class="badge" style="background-color: rgb(247, 161, 4)">${daysDifference} days left</span>`;
                    }else{
                        return `<span class="badge badge-danger">${daysDifference} days left</span>`;
                    }
                }else{
                    return "<span class='badge badge-danger'>National Permit Expired</span>";
                }

            }else{
                if(machine.national_permit_date == null){
                    return "<span class='badge badge-primary'>Data unavailable</span>";
                }else{
                    // this.settings.national_permit_green
                    var today = new Date();
                    var date = new Date(machine.national_permit_date);
                    var frequency = Number(machine.national_permit_frequency);
                    date.setDate(date.getDate() + frequency);

                    // Calculate the time difference in milliseconds
                    var timeDifference = date - today;

                    // Convert milliseconds to days
                    var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

                    if(daysDifference > 0 ){
                        if(Math.abs(daysDifference) >= this.settings.national_permit_green){
                            return `<span class="badge badge-success">${daysDifference} days left</span>`;
                        }else if(Math.abs(daysDifference) < this.settings.national_permit_yellow && Math.abs(daysDifference) >= this.settings.national_permit_orange){
                            return `<span class="badge badge-warning">${daysDifference} days left</span>`;
                        }else if(Math.abs(daysDifference) < this.settings.national_permit_orange && Math.abs(daysDifference) >= this.settings.national_permit_red){
                            return `<span class="badge" style="background-color: rgb(247, 161, 4)">${daysDifference} days left</span>`;
                        }else{
                            return `<span class="badge badge-danger">${daysDifference} days left</span>`;
                        }
                    }else{
                        return "<span class='badge badge-danger'>National Permit Expired</span>";
                    }
                }
                
            }

        },
        calc_rt_status(machine, uploaded_date){

            if(uploaded_date.length > 0){

                // this.settings.cf_green
                var today = new Date();
                var date = new Date(uploaded_date[0].road_tax_date);
                var frequency = Number(machine.road_tax_frequency);
                date.setDate(date.getDate() + frequency);

                // Calculate the time difference in milliseconds
                var timeDifference = date - today;

                // Convert milliseconds to days
                var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

                console.log(daysDifference);

                if(daysDifference > 0 ){
                    if(Math.abs(daysDifference) >= this.settings.road_tax_green){
                        return `<span class="badge badge-success">${daysDifference} days left</span>`;
                    }else if(Math.abs(daysDifference) < this.settings.road_tax_yellow && Math.abs(daysDifference) >= this.settings.road_tax_orange){
                        return `<span class="badge badge-warning">${daysDifference} days left</span>`;
                    }else if(Math.abs(daysDifference) < this.settings.road_tax_orange && Math.abs(daysDifference) >= this.settings.road_tax_red){
                        return `<span class="badge" style="background-color: rgb(247, 161, 4)">${daysDifference} days left</span>`;
                    }else{
                        return `<span class="badge badge-danger">${daysDifference} days left</span>`;
                    }
                }else{
                    return "<span class='badge badge-danger'>Road Tax Expired</span>";
                }

            }else{
                if(machine.road_tax_date == null){
                    return "<span class='badge badge-primary'>Data unavailable</span>";
                }else{
                    // this.settings.road_tax_green
                    var today = new Date();
                    var date = new Date(machine.road_tax_date);
                    var frequency = Number(machine.road_tax_frequency);
                    date.setDate(date.getDate() + frequency);

                    // Calculate the time difference in milliseconds
                    var timeDifference = date - today;

                    // Convert milliseconds to days
                    var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

                    if(daysDifference > 0 ){
                        if(Math.abs(daysDifference) >= this.settings.road_tax_green){
                            return `<span class="badge badge-success">${daysDifference} days left</span>`;
                        }else if(Math.abs(daysDifference) < this.settings.road_tax_yellow && Math.abs(daysDifference) >= this.settings.road_tax_orange){
                            return `<span class="badge badge-warning">${daysDifference} days left</span>`;
                        }else if(Math.abs(daysDifference) < this.settings.road_tax_orange && Math.abs(daysDifference) >= this.settings.road_tax_red){
                            return `<span class="badge" style="background-color: rgb(247, 161, 4)">${daysDifference} days left</span>`;
                        }else{
                            return `<span class="badge badge-danger">${daysDifference} days left</span>`;
                        }
                    }else{
                        return "<span class='badge badge-danger'>Road Tax Expired</span>";
                    }
                }
            }
        },
        calc_insurance_status(machine, uploaded_date){

            if(uploaded_date.length > 0){

                // this.settings.insurance_green
                var today = new Date();
                var date = new Date(uploaded_date[0].insurance_date);
                var frequency = Number(machine.insurance_frequency);
                date.setDate(date.getDate() + frequency);

                // Calculate the time difference in milliseconds
                var timeDifference = date - today;

                // Convert milliseconds to days
                var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

                console.log(daysDifference);

                if(daysDifference > 0 ){
                    if(Math.abs(daysDifference) >= this.settings.insurance_green){
                        return `<span class="badge badge-success">${daysDifference} days left</span>`;
                    }else if(Math.abs(daysDifference) < this.settings.insurance_yellow && Math.abs(daysDifference) >= this.settings.insurance_orange){
                        return `<span class="badge badge-warning">${daysDifference} days left</span>`;
                    }else if(Math.abs(daysDifference) < this.settings.insurance_orange && Math.abs(daysDifference) >= this.settings.insurance_red){
                        return `<span class="badge" style="background-color: rgb(247, 161, 4)">${daysDifference} days left</span>`;
                    }else{
                        return `<span class="badge badge-danger">${daysDifference} days left</span>`;
                    }
                }else{
                    return "<span class='badge badge-danger'>Insurance Expired</span>";
                }

            }else{
                if(machine.insurance_date == null){
                    return "<span class='badge badge-primary'>Data unavailable</span>";
                }else{
                    // this.settings.insurance_green
                    var today = new Date();
                    var date = new Date(machine.insurance_date);
                    var frequency = Number(machine.insurance_frequency);
                    date.setDate(date.getDate() + frequency);

                    // Calculate the time difference in milliseconds
                    var timeDifference = date - today;

                    // Convert milliseconds to days
                    var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

                    if(daysDifference > 0 ){
                        if(Math.abs(daysDifference) >= this.settings.insurance_green){
                            return `<span class="badge badge-success">${daysDifference} days left</span>`;
                        }else if(Math.abs(daysDifference) < this.settings.insurance_yellow && Math.abs(daysDifference) >= this.settings.insurance_orange){
                            return `<span class="badge badge-warning">${daysDifference} days left</span>`;
                        }else if(Math.abs(daysDifference) < this.settings.insurance_orange && Math.abs(daysDifference) >= this.settings.insurance_red){
                            return `<span class="badge" style="background-color: rgb(247, 161, 4)">${daysDifference} days left</span>`;
                        }else{
                            return `<span class="badge badge-danger">${daysDifference} days left</span>`;
                        }
                    }else{
                        return "<span class='badge badge-danger'>Insurance Expired</span>";
                    }
                }
                
            }

        },
        calc_pollution_status(machine, uploaded_date){

            if(uploaded_date.length > 0){

                // this.settings.pollution_green
                var today = new Date();
                var date = new Date(uploaded_date[0].pollution_date);
                var frequency = Number(machine.pollution_frequency);
                date.setDate(date.getDate() + frequency);

                // Calculate the time difference in milliseconds
                var timeDifference = date - today;

                // Convert milliseconds to days
                var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

                console.log(daysDifference);

                if(daysDifference > 0 ){
                    if(Math.abs(daysDifference) >= this.settings.pollution_green){
                        return `<span class="badge badge-success">${daysDifference} days left</span>`;
                    }else if(Math.abs(daysDifference) < this.settings.pollution_yellow && Math.abs(daysDifference) >= this.settings.pollution_orange){
                        return `<span class="badge badge-warning">${daysDifference} days left</span>`;
                    }else if(Math.abs(daysDifference) < this.settings.pollution_orange && Math.abs(daysDifference) >= this.settings.pollution_red){
                        return `<span class="badge" style="background-color: rgb(247, 161, 4)">${daysDifference} days left</span>`;
                    }else{
                        return `<span class="badge badge-danger">${daysDifference} days left</span>`;
                    }
                }else{
                    return "<span class='badge badge-danger'>Pollution Expired</span>";
                }

            }else{
                if(machine.pollution_date == null){
                    return "<span class='badge badge-primary'>Data unavailable</span>";
                }else{
                    // this.settings.pollution_green
                    var today = new Date();
                    var date = new Date(machine.pollution_date);
                    var frequency = Number(machine.pollution_frequency);
                    date.setDate(date.getDate() + frequency);

                    // Calculate the time difference in milliseconds
                    var timeDifference = date - today;

                    // Convert milliseconds to days
                    var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

                    if(daysDifference > 0 ){
                        if(Math.abs(daysDifference) >= this.settings.pollution_green){
                            return `<span class="badge badge-success">${daysDifference} days left</span>`;
                        }else if(Math.abs(daysDifference) < this.settings.pollution_yellow && Math.abs(daysDifference) >= this.settings.pollution_orange){
                            return `<span class="badge badge-warning">${daysDifference} days left</span>`;
                        }else if(Math.abs(daysDifference) < this.settings.pollution_orange && Math.abs(daysDifference) >= this.settings.pollution_red){
                            return `<span class="badge" style="background-color: rgb(247, 161, 4)">${daysDifference} days left</span>`;
                        }else{
                            return `<span class="badge badge-danger">${daysDifference} days left</span>`;
                        }
                    }else{
                        return "<span class='badge badge-danger'>Pollution Expired</span>";
                    }
                }
                
            }

        },
        calc_rc_status(machine, uploaded_date){

            if(uploaded_date.length > 0){

                // this.settings.rc_green
                var today = new Date();
                var date = new Date(uploaded_date[0].rc_date);
                var frequency = Number(machine.rc_frequency);
                date.setDate(date.getDate() + frequency);

                // Calculate the time difference in milliseconds
                var timeDifference = date - today;

                // Convert milliseconds to days
                var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

                if(daysDifference > 0 ){
                    console.log("rc_date_diff", daysDifference);
                    if(Math.abs(daysDifference) >= this.settings.rc_green){
                        return `<span class="badge badge-success">${daysDifference} days left</span>`;
                    }else if(Math.abs(daysDifference) < this.settings.rc_yellow && Math.abs(daysDifference) >= this.settings.rc_orange){
                        return `<span class="badge badge-warning">${daysDifference} days left</span>`;
                    }else if(Math.abs(daysDifference) < this.settings.rc_orange && Math.abs(daysDifference) >= this.settings.rc_red){
                        return `<span class="badge" style="background-color: rgb(247, 161, 4)">${daysDifference} days left</span>`;
                    }else{
                        return `<span class="badge badge-danger">${daysDifference} days left</span>`;
                    }
                }else{
                    return `<span class="badge badge-danger">RC Expired</span>`;
                }

            }else{
                if(machine.rc_date == null){
                    return "<span class='badge badge-primary'>Data unavailable</span>";
                }else{
                    // this.settings.rc_green
                    var today = new Date();
                    var date = new Date(machine.rc_date);
                    var frequency = Number(machine.rc_frequency);
                    date.setDate(date.getDate() + frequency);

                    // Calculate the time difference in milliseconds
                    var timeDifference = date - today;

                    // Convert milliseconds to days
                    var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

                    if(daysDifference > 0 ){
                        if(Math.abs(daysDifference) >= this.settings.rc_green){
                            return `<span class="badge badge-success">${daysDifference} days left</span>`;
                        }else if(Math.abs(daysDifference) < this.settings.rc_yellow && Math.abs(daysDifference) >= this.settings.rc_orange){
                            return `<span class="badge badge-warning">${daysDifference} days left</span>`;
                        }else if(Math.abs(daysDifference) < this.settings.rc_orange && Math.abs(daysDifference) >= this.settings.rc_red){
                            return `<span class="badge" style="background-color: rgb(247, 161, 4)">${daysDifference} days left</span>`;
                        }else{
                            return `<span class="badge badge-danger">${daysDifference} days left</span>`;
                        }
                    }else{
                        return `<span class="badge badge-danger">RC Expired</span>`;
                    }
                }
            }
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
        get_details(Machine,id) {
            this.pop_machine=Machine
            let pop_loader = this.$loading.show();
            this.form.get('/api/maintenance/' + id)
                .then((response) => {
                    this.maintenance = response.data.data.maintenances
                    $('#maintenance_modal').modal('show');
                    pop_loader.hide()
                })
                .catch(() => {
                    pop_loader.hide()
                })
        },
        get_detailsCF(Machine,id) {
            this.pop_machine=Machine
            let pop_loader = this.$loading.show();
            this.form.get('/api/maintenanceCF/' + id)
                .then((response) => {
                    console.log("test", response.data.data);
                    this.maintenanceCF = response.data.data
                    $('#maintenance_modalCF').modal('show');
                    pop_loader.hide()
                })
                .catch(() => {
                    pop_loader.hide()
                })
        },
        getResults(page = 1) {
            let cloaderd = this.$loading.show();
            axios.get('api/settings').then((settingdata) => {
                this.settings = settingdata.data.data;
                axios.get('api/machine', {
                    params: {
                        page: page,
                        search: this.search,
                        cf_status: this.cf_status,
                        np_status: this.np_status,
                        rt_status: this.rt_status,
                        insurance_status: this.insurance_status,
                        pollution_status: this.pollution_status,
                        rc_status: this.rc_status,
                    }
                }).then(({
                    data
                }) => {
                    this.Machines = data.data;
                    cloaderd.hide();
                });
            });
        },
        loadMachines() {
            // axios.get("api/machine", {
            //     params: {
            //         search: this.search
            //     }
            // }).then(({
            //     data
            // }) => (this.Machines = data.data));

            let cloaderd = this.$loading.show();
            axios.get('api/settings').then((settingdata) => {
                this.settings = settingdata.data.data;
                axios.get('api/machine', {
                    params: {
                        search: this.search
                    }
                }).then(({
                    data
                }) => {
                    this.Machines = data.data
                    cloaderd.hide();
                });
            });
        },
        addModal(machine) {
            this.pop_machine=machine
            this.$validator.reset();
            this.form.reset();
            $('#addDetails').modal('show');
            this.form.machine_id = machine.id;
            this.pop_machine = machine
        },
        addModalCF(machine) {
            this.pop_machine=machine
            this.$validator.reset();
            this.form.reset();

            if(machine.machine_frequency_cf.length > 0){
                this.last_cf_date = machine.machine_frequency_cf[0].cf_date;
            }else if (machine.cf_date != null){
                this.last_cf_date = machine.cf_date;
            }

            if(machine.machine_frequency_np.length > 0){
                this.last_np_date = machine.machine_frequency_np[0].national_permit_date;
            }else if (machine.national_permit_date != null){
                this.last_np_date = machine.national_permit_date;
            }

            if(machine.machine_frequency_rt.length > 0){
                this.last_rt_date = machine.machine_frequency_rt[0].road_tax_date;
            }else if (machine.road_tax_date != null){
                this.last_rt_date = machine.road_tax_date;
            }

            if(machine.machine_frequency_insurance.length > 0){
                this.last_insurance_date = machine.machine_frequency_insurance[0].insurance_date;
            }else if (machine.insurance_date != null){
                this.last_insurance_date = machine.insurance_date;
            }

            if(machine.machine_frequency_pollution.length > 0){
                this.last_pollution_date = machine.machine_frequency_pollution[0].pollution_date;
            }else if (machine.pollution_date != null){
                this.last_pollution_date = machine.pollution_date;
            }

            if(machine.machine_frequency_rc.length > 0){
                this.last_rc_date = machine.machine_frequency_rc[0].rc_date;
            }else if (machine.rc_date != null){
                this.last_rc_date = machine.rc_date;
            }


            $('#addDetailsCF').modal('show');
            this.form.machine_id = machine.id;
            this.pop_machine = machine
        },
        changeCFFile(e){
            this.cf_attachment =e.target.files[0];
        },
        changeNPFile(e){
            this.national_permit_attachment = e.target.files[0];
        },
        changeRTFile(e){
            this.road_tax_attachment = e.target.files[0];
        },
        changeInsuranceFile(e){
            this.insurance_attachment = e.target.files[0];
        },
        changePollutionFile(e){
            this.pollution_attachment = e.target.files[0];
        },
        changeRCFile(e){
            this.rc_attachment = e.target.files[0];
        },
        submitMaintenance() {
            this.$validator.validate().then(async (valid) => {
                if (valid) {
                    let pop_loader = this.$loading.show();

                    this.form.post('/api/maintenance')
                        .then((response) => {
                            if (response.data.success) {
                                $('#addDetails').modal('hide');
                                this.$validator.reset();
                                this.form.reset();
                                Toast.fire({
                                    icon: 'success',
                                    title: response.data.message
                                });

                                this.loadMachines();
                            }
                            pop_loader.hide()
                        })
                        .catch(() => {
                            pop_loader.hide()
                            if (typeof err.response.data != 'undefined') {
                                this.$setErrorsFromResponse(err.response.data);
                            }
                        })
                }
            });
        },
        submitMaintenanceCF() {
            let pop_loader = this.$loading.show();

            this.form.post('/api/maintenanceCF')
                .then((response) => {
                    if (response.data.success) {
                       
                        var fd = new FormData();
                        fd.append(`cffile`, this.cf_attachment);
                        fd.append(`npfile`, this.national_permit_attachment);
                        fd.append(`rtfile`, this.road_tax_attachment);
                        fd.append(`insurancefile`, this.insurance_attachment);
                        fd.append(`pollutionfile`, this.pollution_attachment);
                        fd.append(`rcfile`, this.rc_attachment);
                        fd.append(`id`, response.data.data);
                        axios.post('api/maintainance/files', fd).then((res) => {
                            $('#addDetailsCF').modal('hide');
                            this.$validator.reset();
                            this.form.reset();
                            Toast.fire({
                                icon: 'success',
                                title: response.data.message
                            });
                            
                            pop_loader.hide();
                            this.loadMachines();
                        });
                    }
                })
                .catch(() => {
                    pop_loader.hide()
                    if (typeof err.response.data != 'undefined') {
                        this.$setErrorsFromResponse(err.response.data);
                    }
                })
        },
        deleteMaintenance(id) {
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
                    this.form.delete('api/maintenance/' + id).then((response) => {
                        if (response.data.data && response.data.data.length) {
                            this.get_details(response.data.data[0].machine_id);
                        }
                        $('#maintenance_modal').modal('hide');
                        Swal.fire(
                            'Deleted!',
                            'Your record has been deleted.',
                            'success'
                        );
                    }).catch((data) => {
                        Swal.fire("Failed!", data.message, "warning");
                    });
                }
            })
        },

        deleteMaintenanceCF(id, mode) {
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
                    this.form.get('api/maintenanceCFDelete/' + id + "/" + mode).then((response) => {
                        if (response.data.data && response.data.data.length) {
                            this.get_details(response.data.data[0].machine_id);
                        }
                        $('#maintenance_modalCF').modal('hide');
                        Swal.fire(
                            'Deleted!',
                            'Your record has been deleted.',
                            'success'
                        );
                    }).catch((data) => {
                        Swal.fire("Failed!", data.message, "warning");
                    });
                }
            })
        },
        get_last_date() {
            if (this.pop_machine.last_maintenances) {
                this.maintenance_last_date = new Date(this.pop_machine.last_maintenances.datetime).toISOString();
            } else {
                this.maintenance_last_date = this.pop_machine.last_maintenance_date ? new Date(this.pop_machine.last_maintenance_date).toISOString() : '';
            }
        }
    },
    mounted() {

    },
    created() {
        this.loadMachines();
    },
}
</script>
