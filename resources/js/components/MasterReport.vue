<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row">

                <div class="col-12">

                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Master Report</h3>
                            <div class="card-tools">
                                <download-excel class="btn btn-sm btn-primary" :fetch="export_csv" :fields="json_fields"
                                    :before-generate="startDownload" :before-finish="finishDownload"
                                    worksheet="My Worksheet" type="csv" name="master_report.csv" v-if="$gate.hasPermission('can_download_master_report')">
                                    Export CSV</span>
                                </download-excel>
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
                                        <v-select label="name" :get-option-label="getLabel"
                                            :reduce="(option) => option.id" :options="search_machines"
                                            placeholder="Enter machines ..." v-model="search.machine_id"
                                            name="machine_id">
                                        </v-select>
                                    </div>
                                </div>

                                <div class="row align-items-center mb-2">
                                    <div class="col-auto col-custom">
                                        <label for="machine_id">Search Ticket</label>
                                    </div>
                                    <div class="col">
                                        <input type="text" placeholder="Enter ticket ..." v-model="search.ticket"
                                            name="ticket" class="form-control">
                                    </div>
                                </div>

                                <div class="row align-items-center mb-2">
                                    <div class="col-auto col-custom">
                                        <label for="machine_id">Select Site</label>
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
                                        <label for="machine_id">Select Status</label>
                                    </div>
                                    <div class="col">
                                        <v-select label="site_name" :options="['Open', 'Closed']"
                                            placeholder="Select Status..." v-model="search.status" name="status">
                                        </v-select>
                                    </div>
                                </div>

                                <div class="row align-items-center mb-2">
                                    <div class="col-auto col-custom">
                                        <label for="machine_id">Created by</label>
                                    </div>
                                    <div class="col">
                                        <v-select label="name" :options="created_users" :reduce="(option) => option.id"
                                            placeholder="Created by..." v-model="search.created_by" name="created_by">
                                        </v-select>
                                    </div>
                                </div>

                                <div class="row align-items-center mb-2">
                                    <div class="col-auto col-custom">
                                        <label for="machine_id">Ticket Type</label>
                                    </div>
                                    <div class="col">
                                        <v-select label="name"
                                            :options="['Periodic Maintenance', 'Breakdown Maintenance']"
                                            placeholder="Ticket Type..." v-model="search.ticket_type"
                                            name="ticket_type">
                                        </v-select>
                                    </div>
                                </div>

                                <div class="row align-items-center mb-2">
                                    <div class="col-auto col-custom">
                                        <label for="machine_id">From Date</label>
                                    </div>
                                    <div class="col">
                                        <datetime value-zone="Asia/Kolkata" v-model="search.created_from" input-class="form-control" placeholder="Date" />
                                    </div>
                                </div>

                                <div class="row align-items-center mb-2">
                                    <div class="col-auto col-custom">
                                        <label for="machine_id">To Date</label>
                                    </div>
                                    <div class="col">
                                        <datetime value-zone="Asia/Kolkata" v-model="search.created_to" input-class="form-control" placeholder="Date" />
                                    </div>
                                </div>

                                <div class="row align-items-center mb-2">
                                    <div class="col-auto col-custom">
                                        <label for="machine_id">TAT From</label>
                                    </div>
                                    <div class="col">
                                        <input type="number" placeholder="TAT From ..." v-model="search.tat_from"
                                            class="form-control">
                                    </div>
                                </div>

                                <div class="row align-items-center mb-2">
                                    <div class="col-auto col-custom">
                                        <label for="machine_id">TAT To</label>
                                    </div>
                                    <div class="col">
                                        <input type="number" placeholder="TAT To ..." v-model="search.tat_to"
                                            class="form-control">
                                    </div>
                                </div>

                                <div class="row align-items-center mb-2">
                                    <div class="col-auto col-custom">
                                        <label for="machine_id">Complaint nature</label>
                                    </div>
                                    <div class="col">
                                        <v-select label="site_name" :options="['Major', 'Minor']"
                                            placeholder="Select Complaint Nature..." v-model="search.complaint_nature" name="complaint_nature">
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
                                </div>
                            </form>
                        </SidebarModal>

                        <!-- /.card-header -->
                        <div class="card-body ticketLstTbl table-responsive p-0">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th style="display: none;"></th>
                                        <th>Complaint No</th>
                                        <th>Site name</th>
                                        <th>Operator name</th>
                                        <th class="truncate" title="Equipment Description">Equipment Description</th>
                                        <th>Model</th>
                                        <th>FAR No</th>
                                        <th>Complaint Raised By</th>
                                        <th>Complaint Nature</th>
                                        <th class="truncate" title="Status During Complain">Status During Complain</th>
                                        <th>Ticket Type</th>
                                        <th >Problem Description</th>
                                        <th>Additional Problems</th>
                                        <th>Current Status</th>
                                        <th>Current Stage</th>
                                        <th>Current Stage Date</th>
                                        <th class="truncate" title="Current Stage Description">Current Stage Description</th>
                                        <th class="truncate" title="Status Post Resolution">Status Post Resolution</th>
                                        <th>RCA</th>
                                        <th>Complaint date</th>
                                        <th class="truncate" title="Expected Resolution date">Expected Resolution date</th>
                                        <th class="truncate" title="Revised Expected date">Revised Expected date</th>
                                        <th class="truncate" title="Reason for Date Revision">Reason for Date Revision</th>
                                        <th>Actual Resolve Date</th>
                                        <th>TAT</th>
                                        <th>Estimated Cost</th>
                                        <th>Actual Cost</th>
                                        <th>Production Loss</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(ticket, x) in Tickets.data" :key="ticket.id">
                                        <td style="display: none;"></td>
                                        <td style="padding-bottom: 10px !important;">{{ ticket.ticket_no }}</td>
                                        <td class="truncate" :title="ticket.site_name" style="max-width: 150px;">{{ ticket.site_name }}</td>
                                        <td class="truncate">{{ ticket.machine.machine_operators != null ? ticket.machine.machine_operators.operator_name : '' }}</td>
                                        <td>{{ ticket.machine.name }}</td>
                                        <td>{{ ticket.machine.machine_model ? ticket.machine.machine_model.name : '-' }}
                                        </td>
                                        <td @click="view_site_details(ticket.machine)">{{ ticket.far_no }}</td>
                                        <td>{{ ticket.created_by_name }}</td>
                                        <td>{{ ticket.complaint_nature }}</td>
                                        <td>{{ ticket.status_during_complaint }}</td>
                                        <td>{{ ticket.ticket_type }}</td>
                                        <td class="truncate" :title="ticket.problem_description">
                                            {{ ticket.problem_description? ticket.problem_description: '-' }}
                                        </td>
                                        <td>
                                            <template v-if="ticket.problems && ticket.problems.length > 0">
                                                <p v-if="ticket.problems" v-for="(item, index) in ticket.problems"
                                                    :key="'p' + index" v-html="item.problem"></p>
                                            </template>
                                        </td>
                                        <td>{{ ticket.status.toLowerCase() == 'created by user' ? 'Open' : ticket.status
                                            }}
                                        </td>
                                        <td class="truncate" :title="ticket.status == 'Closed' ? '-' : ticket.current_stage">{{ ticket.status == 'Closed' ? '-' : ticket.current_stage }}</td>
                                        <td class="truncate" :title="ticket.status == 'Closed' ? '-' : ticket.last_stage ? ticket.last_stage.stage_date : '' | myDate">{{ ticket.status == 'Closed' ? '-' : ticket.last_stage ? ticket.last_stage.stage_date : '' | myDate }}</td>
                                        <td class="truncate" :title="ticket.status != 'Closed' && ticket.last_stage ? ticket.last_stage.description:'-'">
                                            <template v-if="ticket.status != 'Closed' && ticket.last_stage">
                                                    <p>{{ ticket.last_stage.description }}</p>
                                            </template>
                                        </td>
                                        <td>{{ ticket.machine_status }}</td>
                                        <td>
                                            {{ ticket.rca?ticket.rca:"-" }}
                                        </td>
                                        <td>{{ ticket.created_at | myDate}}</td>
                                        <td>{{ ticket.likely_date | myDate }}</td>
                                        <td>{{ ticket.reversion_date | myDate }}</td>
                                        <td class="truncate" :title="ticket.reversion_reason">{{ ticket.reversion_reason }}</td>
                                        <td>{{ ticket.actual_date | myDate }}</td>
                                        <td>{{ ticket.actual_date ? ticket.tat : '-' }}</td>
                                        <td>{{ (ticket.estimated_service_cost + ticket.estimated_material_cost +
                                    ticket.ad_estimated_material_cost + ticket.ad_estimated_service_cost)
                                    | toCurrency }}</td>
                                        <td>{{ (ticket.actual_service_cost + ticket.actual_material_cost) | toCurrency}}
                                        </td>
                                        <td>{{ ticket.production_loss_amount | toCurrency }}</td>

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


        <MachinePop id="MachineSiteModal3" :machine="pmModalData" />
    </section>
</template>

<script>
//import VueReadMoreSmooth from "vue-read-more-smooth";
import MultiRangeSlider from "multi-range-slider-vue";
import SidebarModal from './SideBarModal.vue';
export default {
    name: "MasterReport",
    components: {
        VueReadMoreSmooth: () => import('vue-read-more-smooth'),
        MultiRangeSlider,SidebarModal,
        MachinePop: () => import('./MachineFarPop.vue'),
    },
    data() {
        return {
            stageMore: [],
            additionalMore: [],
            problemsMore: [],
            rcaMore: [],
            pmModalData: '',
            created_users: [],
            search_machines: [],
            search_sites: [],
            search: {
                page: 1,
                machine_id: '',
                site_id: '',
                created_by: '',
                created_from: '',
                created_to: '',
                tat_from: '',
                tat_to: '',
                complaint_nature: '',
                ticket_type: '',
                ticket: ''
            },
            categories: [],
            sub_categories: [],
            sites: [],
            selected_machine: '',
            users: [],
            machines: [],
            Tickets: {},
            sl: 1,
            json_fields: {
                "Sl No": {
                    callback: () => {
                        return this.sl++;
                    },
                },
                'Site name': 'site_name',
                'Operator name': 'operator_name',
                'Equipment Description': 'machine_name',
                'FAR No': 'far_no',
                'Complaint No': 'ticket_no',
                'Complaint date': "created_at",
                'Complaint Raised By': 'created_by_name',
                'Complaint Nature': 'complaint_nature',
                'Status During Complaint': 'status_during_complaint',
                'Problem description': 'problem_description',
                'Additional Problem': {
                    field: "problems",
                    callback: (problem) => {
                        let ret = ''
                        if (problem) {
                            ret = problem.map(value => value.problem).join("\r\n");
                        }
                        return ret;
                    },
                },
                "Current Status": {
                    field: "status",
                    callback: (status) => {
                        return status.toLowerCase() == 'created by user' ? 'Open' : status;
                    },
                },
                "Current Stage": {
                    field: "last_stage",
                    callback: (value) => {
                        return value ? value.description : '-';
                    },
                },
                "Status Post Resolution": 'machine_status',
                'Expected Resolution date': 'likely_date',
                'Revised Expected date': 'reversion_date',
                'Reason for date Revision': 'reversion_reason',
                'Actual Resolve Date': 'actual_date',
                'TAT': 'tat',
                'Estimated Cost': 'estimated_cost',
                'Actual Cost': 'actual_cost',
                'Production Loss': 'production_loss_amount',
                'RCA': 'rca'
            },
            json_meta: [
                [{
                    key: "charset",
                    value: "utf-8",
                },],
            ],
            sl: 0,
        }
    },
    methods: {
        openSideModal() {
            this.$refs.sidebarModal.openSideModal();
        },
        closeSideModal() {
            this.$refs.sidebarModal.closeSideModal();
        },
        view_site_details(data) {
            this.pmModalData = data
            $('#MachineSiteModal3').modal('show');
        },
        reset_filter() {
            this.search = {
                page: 1,
                machine_id: '',
                site_id: '',
                created_by: '',
                created_from: '',
                created_to: '',
                tat_from: "",
                tat_to: "",
                complaint_nature: '',
                ticket_type: '',
                ticket: ''
            }
            this.getResults()
        },
        UpdateValues(e) {
            this.search.tat_from = e.minValue;
            this.search.tat_to = e.maxValue;
        },
        // excel
        async export_csv() {
            const response = await axios.get('api/ticket/export', {
                params: this.search
            });
            // const response = await axios.get('api/ticket/export');
            return response.data.data;
        },
        startDownload() {
            this.sl = 1;
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

        getLabel(val) {
            if (typeof val === 'object') {
                return val.far_no + ' - ' + val.name;
            } else {
                return val;
            }
        },
        getResults(page = 1) {
            let cloaderd = this.$loading.show();
            this.search.page = page
            axios.get('/api/ticket/report', {
                params: this.search
            }).then((data) => {
                this.Tickets = data.data.data
                this.additionalMore = new Array(this.Tickets.data.length).fill(false);
                this.problemsMore = new Array(this.Tickets.data.length).fill(false);
                this.stageMore = new Array(this.Tickets.data.length).fill(false);
                this.rcaMore = new Array(this.Tickets.data.length).fill(false);
                cloaderd.hide();
            })
        },
        loadTickets() {
            let cloaderd = this.$loading.show();
            axios.get("/api/ticket/report", {
                params: this.search
            }).then((data) => {
                this.Tickets = data.data.data
                this.additionalMore = new Array(this.Tickets.data.length).fill(false);
                this.problemsMore = new Array(this.Tickets.data.length).fill(false);
                this.stageMore = new Array(this.Tickets.data.length).fill(false);
                this.rcaMore = new Array(this.Tickets.data.length).fill(false);
                cloaderd.hide();
            })
        },
        read_more(x, p = '') {
            if (p) {
                if (p == 's') {
                    let a = this.stageMore[x] ? false : true
                    this.$set(this.stageMore, x, a);
                } else if (p == 'rc') {
                    let a = this.rcaMore[x] ? false : true
                    this.$set(this.rcaMore, x, a);
                } else {
                    let a = this.problemsMore[x] ? false : true
                    this.$set(this.problemsMore, x, a);
                }
            } else {
                let a = this.additionalMore[x] ? false : true
                this.$set(this.additionalMore, x, a);
            }
        }

    },
    created() {
        this.loadTickets();
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
            this.created_users = response.data.data.created_users;
        }).catch(() => console.warn('Oh. Something went wrong'));
    },
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

    },
}
</script>
<style>
.rmore {
    color: blue;
}
</style>
