<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row">

                <div class="col-12">

                    <div class="card" >
                        <div class="card-header">
                            <h3 class="card-title">Ticket Report</h3>
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
                                        <label for="machine_id">Choose Color</label>
                                    </div>
                                    <div class="col">
                                        <v-select label="name" :options="['Red','Solid Red','Yellow','Green']"
                                            placeholder="Choose Color..." v-model="search.color" name="color">
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
                        <div class="card-body table-responsive p-0 ticketTable">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th class="stickey" style="display: none;">Action</th>
                                        <th>Ticket No </th>
                                        <th>Machine Name</th>
                                        <th>Machine Far No</th>
                                        <th>Site</th>
                                        <th>Created By</th>
                                        <th>Created Date</th>
                                        <th>Expected date</th>
                                        <th class="truncate" :title="'Revised Expected date'">Revised Expected date</th>
                                        <th>Resolution date</th>
                                        <th>Ticket Status</th>
                                        <th>Complaint Nature</th>
                                        <th>TAT</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="ticket in Tickets.data" :key="ticket.id" :class="ticket.row_color">
                                        <td style="display: none;"></td>
                                        <td style="padding-bottom: 10px !important;">{{ ticket.ticket_no }}</td>
                                        <td class="truncate text-capitalize" style="max-width: 150px;" :title="ticket.machine.name">{{ ticket.machine.name }}</td>
                                        <td @click="view_site_details(ticket.machine)">{{ ticket.machine.far_no }}</td>
                                        <td class="truncate" style="max-width: 150px;" :title="ticket.site.site_name">{{ ticket.site ? ticket.site.site_name:'-' }}</td>
                                        <td>{{ ticket.created_by_name }}</td>
                                        <td>{{ ticket.created_at | myDate }}</td>
                                        <td>{{ ticket.likely_date | myDate }}</td>
                                        <td>{{ ticket.reversion_date|myDate }}</td>
                                        <td>{{ ticket.actual_date   }}</td>
                                        <td >{{ticket.status.toLowerCase()=='created by user'?'Open':ticket.status}}</td>
                                        <td>{{ticket.complaint_nature}}</td>
                                        <td>{{ticket.actual_date?ticket.tat:'-'}}</td>
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

        <MachinePop id="MachineSiteModal2" :machine="pmModalData"/>

    </section>
</template>

<script>
import MultiRangeSlider from "multi-range-slider-vue";
import "multi-range-slider-vue/MultiRangeSliderBlack.css";
import "multi-range-slider-vue/MultiRangeSliderBarOnly.css";
import SidebarModal from './../SideBarModal.vue';

import VueTagsInput from '@johmun/vue-tags-input';
export default {
    components: {
        VueTagsInput,
        MultiRangeSlider,SidebarModal,
        MachinePop: () => import('../MachineFarPop.vue'),
    },
    data() {
        return {
            pmModalData:'',
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
                color:'',
                ticket:''
            },
            categories: [],
            sub_categories: [],
            sites: [],
            selected_machine: '',
            users: [],
            machines: [],
            Tickets: {},


            json_fields: {
                'Ticket no': 'ticket_no',
                'Last Name': 'last_name',
                'Email': 'email',
                'Type': 'type',
                'Country Code': 'country_code',
                'Phone Number': 'phone_number',
                'VSD ID': 'vsd_id',
                'License Number': 'license_number',
            },
            json_meta: [
                [{
                    key: "charset",
                    value: "utf-8",
                },],
            ],

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
            $('#MachineSiteModal2').modal('show');
        },
        reset_filter(){
            this.search= {
                page: 1,
                machine_id: '',
                site_id: '',
                created_by: '',
                created_from: '',
                created_to: '',
                tat_from: '',
                tat_to: '',
                color:'',
                ticket:''
            }
            this.getResults()
        },
        UpdateValues(e) {
            this.search.tat_from = e.minValue;
            this.search.tat_to = e.maxValue;
        },
        // excel
        async export_csv() {
            const response = await axios.get('api/ticket/export');

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
            axios.get('/api/ticket', {
                params: this.search
            }).then(({
                data
            }) => {
                this.Tickets = data.data
                cloaderd.hide();
            });
        },
        loadTickets() {
            let cloaderd = this.$loading.show();
            axios.get("/api/ticket", {
                params: this.search
            }).then(({
                data
            }) => {
                this.Tickets = data.data
                cloaderd.hide();
            });

        },

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
.bg-red {
  background-color: #ef5563 !important;
}
.bg-green {
  background-color: #70ed70 !important;
}
.bg-yellow {
  background-color: #f1c84c !important;
}
</style>
