<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row">

                <div class="col-12">

                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Complaints Report</h3>
                            <div class="card-tools">
                                <download-excel class="btn btn-sm btn-primary" :fetch="export_csv" :fields="json_fields"
                                    :before-generate="startDownload" :before-finish="finishDownload"
                                    worksheet="My Worksheet" type="csv" name="master_report.csv"
                                    v-if="$gate.hasPermission('can_download_master_report')">
                                    Export CSV
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
                                        <label for="machine_id">Atm Id</label>
                                    </div>
                                    <div class="col">
                                        <input type="text" placeholder="Enter atm ..." v-model="search.atm_id"
                                            name="atm_id" class="form-control">
                                    </div>
                                </div>
                                <div class="row align-items-center mb-2">
                                    <div class="col-auto col-custom">
                                        <label for="machine_id">Docket No</label>
                                    </div>
                                    <div class="col">
                                        <input type="text" placeholder="Enter docket no ..." v-model="search.docket_no"
                                            name="docket_no" class="form-control">
                                    </div>
                                </div>






                                <div class="row align-items-center mb-2">
                                    <div class="col-auto col-custom">
                                        <label for="machine_id">From Date</label>
                                    </div>
                                    <div class="col">
                                        <datetime value-zone="Asia/Kolkata" v-model="search.from_date"
                                            input-class="form-control" placeholder="Date" />
                                    </div>
                                </div>

                                <div class="row align-items-center mb-2">
                                    <div class="col-auto col-custom">
                                        <label for="machine_id">To Date</label>
                                    </div>
                                    <div class="col">
                                        <datetime value-zone="Asia/Kolkata" v-model="search.to_date"
                                            input-class="form-control" placeholder="Date" />
                                    </div>
                                </div>





                                <div class="row align-items-center mb-2">
                                    <div class="col-auto col-custom">
                                        <label for="machine_id">--Custodian--</label>
                                    </div>
                                    <div class="col">
                                        <!-- <v-select label="site_name"
                                            placeholder="Select Complaint Nature..." v-model="search.custodian"
                                            name="complaint_nature">
                                            <option v-for="(custodian, index) in Custodians" :key="custodian.custodian_id" :value="custodian.custodian_id">{{custodian.name}}( {{ custodian.user_code }} )</option>
                                        </v-select> -->
                                        <select class="form-control" v-model="search.custodian">
                                            <option v-for="custodian in Custodians" :key="custodian.custodian_id" :value="custodian.custodian_id">
                                                {{ custodian.name }} ({{ custodian.custodian_id }})
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row align-items-center mb-2">
                                    <div class="col-auto col-custom">
                                        <label for="machine_id">--Status--</label>
                                    </div>
                                    <div class="col">
                                        <!-- <v-select label="site_name"
                                            placeholder="Select Complaint Nature..." v-model="search.complaint_status"
                                            name="complaint_nature">
                                            <option v-for="(value, key) in Statuses" :key="key" :value="key">{{ value }}</option>
                                        </v-select> -->
                                        <select class="form-control" v-model="search.complaint_status">
                                            <option v-for="(value, key) in Statuses" :key="key" :value="key">
                                               {{value}}
                                            </option>
                                        </select>
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
                        <!-- Modal -->
                        <div class="modal fade" id="addNew" tabindex="-1" role="dialog" aria-labelledby="addNew"
                            aria-hidden="true">
                            <div class="modal-dialog modal-lg" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" v-show="!editmode">
                                            Create New Atm
                                        </h5>
                                        <h5 class="modal-title" v-show="editmode">
                                            Update Atm's Info
                                        </h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>

                                    <!-- <form @submit.prevent="createUser"> -->

                                    <form @submit.prevent="
                                        editmode ? updateCity() : createUser()
                                        ">
                                        <div class="modal-body">
                                            <div class="row">
                                                <!-- Docket Details Section -->
                                                <div class="col-md-6" v-if="complaint_data">
                                                    <div class="card mb-3">
                                                        <div class="card-header text-white bg-info">Docket Details</div>
                                                        <div class="card-body">
                                                            <ul class="list-group list-group-flush">
                                                                <li class="list-group-item">
                                                                    <strong>Docket No:</strong> {{complaint_data.docket_no}}
                                                                </li>
                                                                <li class="list-group-item">
                                                                    <strong>Complaint Type:</strong> {{complaint_data.title}}
                                                                </li>
                                                                <li class="list-group-item">
                                                                    <strong>ATM Code:</strong>  {{complaint_data.atm_code}}
                                                                </li>
                                                                <li class="list-group-item">
                                                                    <strong>ATM Address:</strong> {{ (complaint_data.city_name ? complaint_data.city_name : "")+', '+(complaint_data.district_name ? complaint_data.district_name :"")+', '+(complaint_data.state_name ? complaint_data.state_name : "") }}
                                                                </li>
                                                                <li class="list-group-item">
                                                                    <strong>Created At:</strong> {{complaint_data.complaint_created_at}}
                                                                </li>
                                                                <li class="list-group-item">
                                                                    <strong>Status:</strong> {{ complaint_data.Cwork_status }}
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <!-- Assigned Custodian Section -->
                                                <div class="col-md-6" v-if="custodian_data">
                                                    <div class="card mb-3">
                                                        <div class="card-header text-white bg-info">Assigned Custodian
                                                        </div>
                                                        <div class="card-body">
                                                            <p><strong>Name:</strong> {{ custodian_data.name }}</p>
                                                            <p><strong>Email:</strong> {{ custodian_data.email ? custodian_data.email : "NA" }}</p>
                                                            <p><strong>Phone No.:</strong> {{ custodian_data.phone }}</p>
                                                            <p><strong>Comment:</strong> {{ custodian_data.comment }}</p>
                                                            <div class="d-flex justify-content-end">
                                                                <button class="btn btn-danger mr-2" @click="cancelCustodian(custodian_data.id)">Cancel</button>
                                                                <button class="btn btn-primary" @click="claimCustodian(custodian_data.id)">Claim</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Escalate Docket Section -->
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="card">
                                                        <div class="card-header text-white bg-info">Escalate docket from
                                                            FLM to SLM</div>
                                                        <div class="card-body">
                                                            <form>
                                                                <div class="form-group">
                                                                    <label for="comment">Comment <span
                                                                            class="text-danger">*</span></label>
                                                                    <textarea id="comment" class="form-control" rows="3"
                                                                        required v-model="comment"></textarea>
                                                                </div>
                                                                <button type="submit"
                                                                    class="btn btn-primary" @click="assign_sls_button()">Submit</button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">
                                                Close
                                            </button>
                                            <button v-show="editmode" type="submit" class="btn btn-success">
                                                Update
                                            </button>
                                            <button v-show="!editmode" type="submit" class="btn btn-primary">
                                                Create
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

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
                                    <tr v-for="(complaint, x) in Complaints.data" :key="complaint.id"
                                        :data-created="complaint.created_at" :data-tag="complaint.tag_time"
                                        :data-stat="complaint.work_status">
                                        <td>
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-primary btn-sm btn-toggle-custom"
                                                    @click="editMaintainanceModal(complaint)">Maintenance</button>
                                                <button type="button"
                                                    class="btn btn-primary btn-sm dropdown-toggle dropdown-toggle-split"
                                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <span class="sr-only">Toggle Dropdown</span>
                                                </button>
                                                <div class="dropdown-menu">
                                                    <a href="javascript:void(0);" @click="deleteUser(user.id)"
                                                        class="dropdown-item">
                                                        Delete
                                                    </a>
                                                    <router-link :to="'/complaint-details/' + complaint.id"
                                                        class="nav-link">

                                                        <p>
                                                            Details
                                                        </p>
                                                    </router-link>
                                                    <router-link :to="'/complaint/assigned-custodians/' + complaint.id"
                                                        class="nav-link">

                                                        <p>
                                                            Assigned Custodian
                                                        </p>
                                                    </router-link>
                                                    <router-link :to="'/complaint/assign-ticket/'+complaint.docket_no" class="nav-link">
                                                        <p>
                                                            Assign Custodian
                                                        </p>
                                                    </router-link>


                                                </div>
                                            </div>
                                        </td>
                                        <td style="padding-bottom: 10px !important;">{{ complaint.atm_atm_id }}</td>
                                        <td class="truncate" :title="complaint.docket_no" style="max-width: 150px;">{{
                                            complaint.docket_no }}</td>
                                        <td class="truncate">{{ formatDate(complaint.created_at) }}</td>
                                        <td>{{ complaint.custname }}</td>
                                        <td>{{ complaint.tag_time }}</td>
                                        <td :style="{ color: complaint.lag_time ? 'Red' : 'Green' }"> {{
                                            formatLagTime(complaint.lag_time) }}</td>

                                        <!-- <td @click="view_site_details(ticket.machine)">{{ ticket.far_no }}</td> -->
                                        <td>

                                            <span v-if="complaint.work_status === 'Completed'">N/A</span>
                                            <span v-else>{{ complaint.updated_at }}</span>
                                        </td>
                                        <td>
                                            <span :class="getStatusClass(complaint.work_status)">{{
                                                complaint.work_status }}</span>
                                        </td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- /.card-body -->
                        <div class="card-footer">
                            <pagination :data="Complaints" :limit="10" @pagination-change-page="getResults">
                            </pagination>
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
        MultiRangeSlider, SidebarModal,
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
                atm_id: '',
                docket_no: '',
                from_date: '',
                to_date: '',
                custodian: '',
                complaint_status: '',

            },
            categories: [],
            sub_categories: [],
            sites: [],
            selected_machine: '',
            users: [],
            machines: [],
            complaint_data: {},
            custodian_data:{},
            custodian_list:{},
            Custodians: [],
            Complaints: {},
            Statuses: [],
            comment:"",
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
            editmode: false,
        }
    },
    methods: {
        async assign_sls_button(){
            const formData = new FormData();
                formData.append('docket_no', this.complaint_data.docket_no);
                formData.append('complaint_id', this.complaint_data.complaint_id);
                formData.append('complaint_status', custodian_id);
                formData.append('cust_comment', this.comment);

                try {
                    const response = await axios.post('api/create_sls_docket', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    });
                    // $('#addNew').modal('hide');

                    Toast.fire({
                        icon: 'success',
                        title: response.data.message
                    });

                    //this.$Progress.finish();


                    alert(response.data.success);
                } catch (error) {
                    console.error(error);
                    alert('Form submission failed.');
                }
        },
        async cancelCustodian(custodian_id){
            if(confirm('Are you sure you want to cancel this custodian?')==true)
            {

                const formData = new FormData();
                formData.append('custodian_id', custodian_id);

                try {
                    const response = await axios.post('api/delete_custodian', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    });
                    // $('#addNew').modal('hide');

                    Toast.fire({
                        icon: 'success',
                        title: response.data.message
                    });

                    //this.$Progress.finish();


                    alert(response.data.success);
                } catch (error) {
                    console.error(error);
                    alert('Form submission failed.');
                }
            }
        },
        async claimCustodian(custodian_id){
            if(confirm('Are you sure you want to claim this custodian?')==true)
            {

                const formData = new FormData();
                formData.append('custodian_id', custodian_id);

                try {
                    const response = await axios.post('api/claim_custodian', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    });
                    // $('#addNew').modal('hide');

                    Toast.fire({
                        icon: 'success',
                        title: response.data.message
                    });

                    //this.$Progress.finish();


                    alert(response.data.success);
                } catch (error) {
                    console.error(error);
                    alert('Form submission failed.');
                }
            }
        },
        editMaintainanceModal(complaint) {
            this.editmode = true;
            // this.form.reset();
            this.verrors.clear();
            this.search={};
            axios.get('/api/complaint/docket/' + complaint.docket_no, {
                params: this.search
            }).then((data) => {
                console.log("data====", data.data.data);

                this.complaint_data = data.data.data.complaint_details;

                this.custodian_data = data.data.data.custodian_details;
                this.custodian_list = data.data.data.custodians;
                // this.initializeTimers();
                cloaderd.hide();
            })

            this.complaint_data = complaint;
            $("#addNew").modal("show");
            // if (user.role.length > 0) {
            //     user.role = user.role[0].name;
            // }
            // this.form.fill(city);
        },
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
            switch (workStatus) {
                case 'Pending':
                    return 'badge badge-danger';
                case 'Processing':
                    return 'badge badge-warning';
                case 'Completed':
                    return 'badge badge-success';
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
            let url="/api/complaint/list/" + this.$route.params.id;
            if(this.$route.params.status){
                url+="/"+this.$route.params.status;
            }
            axios.get(url, {
                params: this.search
            }).then((data) => {
                console.log("data====", data.data.data);

                this.Complaints = data.data.data.complaints;

                this.Custodians = data.data.data.custodians;
                this.Statuses = data.data.data.status_list;
                this.initializeTimers();
                cloaderd.hide();
            })
        },
        loadTickets() {
            let cloaderd = this.$loading.show();
            this.search = {};
            let url="/api/complaint/list/" + this.$route.params.id;
            if(this.$route.params.status){
                url+="/"+this.$route.params.status;
            }
            axios.get(url, {
                params: this.search
            }).then((data) => {
                console.log("data====>", data);

                this.Complaints = data.data.data.complaints;

                this.Custodians = data.data.data.custodians;
                this.Statuses = data.data.data.status_list;
                this.initializeTimers();
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
        },
        initializeTimers() {
            if (this.Complaints && this.Complaints.data && this.Complaints.data.length > 0) {
                this.Complaints.data.forEach((timer, index) => {
                    console.log("timer", timer);

                    if (timer.work_status === 'Completed') {
                        timer.updated_at = 'N/A';
                    } else {
                        this.calculateRemainingTime(timer, index);
                    }
                });

                console.log("this.Complaints.data", this.Complaints.data);

            }
        },
        calculateRemainingTime(timer, index) {
            // Convert created_at to seconds
            const createdDate = new Date(timer.created_at);
            const createdSeconds = createdDate.getTime() / 1000;

            // Get current time in seconds
            const currentDate = new Date();
            const currentSeconds = currentDate.getTime() / 1000;

            // Calculate the difference in seconds
            const diffSeconds = currentSeconds - createdSeconds;

            // Convert tag_time (HH:MM:SS) to seconds
            const tagTime = timer.tag_time.split(':');
            const tagSeconds = (+tagTime[0]) * 3600 + (+tagTime[1]) * 60 + (+tagTime[2]);

            // Remaining time in seconds
            let remainingSeconds = tagSeconds - diffSeconds;

            if (remainingSeconds >= 0) {
                // Countdown if the time is still remaining
                this.startCountdown(timer, remainingSeconds, index);
            } else {
                // Count up if the time has passed
                remainingSeconds = Math.abs(remainingSeconds);
                this.startCountUp(timer, remainingSeconds, index);
            }
        },
        startCountdown(timer, seconds, index) {
            const interval = setInterval(() => {
                seconds--;
                timer.updated_at = this.formatTime(seconds);

                if (seconds <= 0) {
                    clearInterval(interval);
                    timer.updated_at = 'Countdown finished';
                }
            }, 1000);
        },
        startCountUp(timer, seconds, index) {
            const interval = setInterval(() => {
                seconds++;
                timer.updated_at = this.formatTime(seconds);
            }, 1000);
        },
        formatTime(seconds) {
            const hours = Math.floor(seconds / 3600);
            const minutes = Math.floor((seconds % 3600) / 60);
            const secs = Math.floor(seconds % 60);
            return `${this.padTime(hours)}:${this.padTime(minutes)}:${this.padTime(secs)}`;
        },
        padTime(time) {
            return time < 10 ? `0${time}` : time;
        }

    },
    created() {
        // console.log("created");

        // this.loadTickets();
    },
    mounted() {
        // Initial API call when the component is mounted
        console.log("mounted");

        // this.loadTickets();
    },
    beforeCreate() {
        console.log("before create");
        let url="/api/complaint/list/" + this.$route.params.id;
            if(this.$route.params.status){
                url+="/"+this.$route.params.status;
            }
        axios.get(url).then(response => {
            console.log("data====>", response);

            this.Complaints = response.data.data.complaints;

            this.Custodians = response.data.data.custodians;
            this.Statuses = response.data.data.status_list;
            this.initializeTimers();
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
                    axios.get("api/complaint/list/1/" + n)
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
