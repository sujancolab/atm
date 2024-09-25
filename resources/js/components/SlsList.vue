<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row">

                <div class="col-12">

                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Total SLM Complaints</h3>
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
                                        <th>#</th>
                                        <th>ATM ID</th>
                                        <th>Docket No</th>
                                        <th>Date</th>
                                        <!-- <th class="truncate" title="Equipment Description">Equipment Description</th> -->
                                        <th>Custodian</th>
                                        <th>Tag Time</th>
                                        <th>Lag Time</th>
                                        <th>Countdown(Days hh:mm:ss)</th>
                                        <!-- <th class="truncate" title="Status During Complain">Status During Complain</th> -->
                                        <th>Status</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(complaint, x) in Complaints.data" :key="complaint.id">
                                        <td>
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-primary btn-sm btn-toggle-custom" @click="editModal(user)">Edit</button>
                                                <button type="button" class="btn btn-primary btn-sm dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <span class="sr-only">Toggle Dropdown</span>
                                                </button>
                                                <div class="dropdown-menu">
                                                    <a href="javascript:void(0);" @click="deleteUser(user.id)"
                                                        class="dropdown-item" >
                                                        Delete
                                                    </a>
                                                    <router-link :to="'/complaint-details/'+complaint.id" class="nav-link">

                                                        <p>
                                                            Details
                                                        </p>
                                                    </router-link>
                                                </div>
                                            </div>
                                        </td>
                                        <td style="padding-bottom: 10px !important;">{{ complaint.atm_atm_id }}</td>
                                        <td class="truncate" :title="complaint.docket_no" style="max-width: 150px;">{{ complaint.docket_no }}</td>
                                        <td class="truncate">{{  formatDate(complaint.created_at)  }}</td>
                                        <td>{{ complaint.custname }}</td>
                                        <td>{{ complaint.tag_time }}</td>
                                        <td :style="{ color: complaint.lag_time ? 'Red' : 'Green' }"> {{ formatLagTime(complaint.lag_time) }}</td>

                                        <!-- <td @click="view_site_details(ticket.machine)">{{ ticket.far_no }}</td> -->
                                        <td></td>
                                        <td>
                                            <span :class="getStatusClass(complaint.work_status)">{{ complaint.work_status }}</span>
                                        </td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- /.card-body -->
                        <div class="card-footer">
                            <pagination :data="Complaints" :limit="10" @pagination-change-page="getResults"></pagination>
                        </div>
                    </div>
                    <!-- /.card -->
                </div>
            </div>



        </div>


        <!-- <MachinePop id="MachineSiteModal3" :machine="pmModalData" /> -->
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
            Custodians: [],
            Complaints:{},
            Statuses:[],
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
        formatDate(datetime) {
            const date = new Date(datetime);
            return date.toLocaleString('en-GB', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
            });
        },
        formatLagTime(lagTime) {
            if (lagTime) {
                const parts = lagTime.split(":");
                return `${parts[0]}H:${parts[1]}M`;
            } else {
                return 'N/A';
            }
        },
        getStatusClass(workStatus) {
            switch(workStatus) {
                case 'Pending':
                    return 'pending';
                case 'Processing':
                    return 'processing';
                case 'Completed':
                    return 'completed';
                default:
                    return ''; // Default or empty class
            }
        },
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
            axios.get('/api/sls/list', {
                params: this.search
            }).then((data) => {
                console.log("data====",data.data.data);

                this.Complaints=data.data.data.complaints;

                this.Custodians = data.data.data.custodians;
                this.Statuses = data.data.data.status_list;
                cloaderd.hide();
            })
        },
        loadTickets() {
            let cloaderd = this.$loading.show();
            this.search={};
            axios.get("/api/sls/list", {
                params: this.search
            }).then((data) => {
                console.log("data====>",data);

                this.Complaints=data.data.data.complaints;

                this.Custodians = data.data.data.custodians;
                this.Statuses = data.data.data.status_list;
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
    mounted() {
        // Initial API call when the component is mounted
        this.loadTickets();
    },
    beforeCreate() {
        axios.get("api/sls/list")
            .then((res) => {
                console.log("res====>",res.data.data);
                this.Complaints=res.data.data.complaints;

                this.Custodians = res.data.data.custodians;
                this.Statuses = res.data.data.status_list;
            })
        axios.get("/api/sls/list").then(response => {
            console.log("data====>",response);

            this.Complaints=response.data.data.complaints;

                this.Custodians = response.data.data.custodians;
                this.Statuses = response.data.data.status_list;
        }).catch(() => console.warn('Oh. Something went wrong'));
    },
    watch: {
        $route(to, from) {
            this.loadTickets();
        },
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
                    axios.get("api/sls/list" + n)
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
.pending {
  color: orange;
}
.processing {
  color: blue;
}
.completed {
  color: green;
}
</style>
