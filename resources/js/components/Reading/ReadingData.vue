<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Data Reading List</h3>
                            <div class="card-tools">
                                <router-link to="/reading-data/add" class="btn btn-sm btn-primary" v-if="$gate.hasPermission('can_add_reading')">
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
                                        <label for="machine_id">Start Date</label>
                                    </div>
                                    <div class="col">
                                        <input type="date" :max="search.end_at"  v-model="search.start_at" class="form-control">
                                    </div>
                                </div>

                                <div class="row align-items-center mb-2">
                                    <div class="col-auto col-custom">
                                        <label for="machine_id">End Date</label>
                                    </div>
                                    <div class="col">
                                        <input type="date" :min="search.start_at"  v-model="search.end_at" class="form-control">
                                    </div>
                                </div>

                                <div class="row align-items-center mb-2">
                                    <div class="col-auto col-custom">
                                        <label for="machine_id">Select Site</label>
                                    </div>
                                    <div class="col">
                                        <v-select  label="site_name" :reduce="(option) => option.id" :options="search_sites"
                                            placeholder="Select Site..." v-model="search.site_id" name="site_id">
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
                        <div class="card-body table-responsive p-0 ticketTable">
                            <table class="table table-hover table-striped"  v-if="Tickets">
                                <thead>
                                    <tr>
                                        <th class="stickey">Action</th>
                                        <th>Site</th>
                                        <th>Reading For</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(ticket, index)  in Tickets.data" :key="index">
                                        <td>
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-primary btn-sm btn-toggle-custom" @click="viewModal(ticket)" :disabled="!$gate.hasPermission('can_view_reading')">View</button>
                                                <button type="button" class="btn btn-primary btn-sm dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <span class="sr-only">Toggle Dropdown</span>
                                                </button>
                                                <div class="dropdown-menu">

                                                    <router-link :to="'/reading-data/edit/' + ticket.id" class="dropdown-item" v-if="$gate.hasPermission('can_edit_reading')">
                                                        Edit
                                                    </router-link>
                                                    <a href="javascript:void(0);" @click="deleteReading(ticket)" class="dropdown-item" v-if="$gate.hasPermission('can_delete_reading')">
                                                        Delete
                                                    </a>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{{ ticket.sites.site_name }}</td>
                                        <td>{{ ticket.read_at | myDate }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="card-footer">
                            <pagination :data="Tickets" :limit="10" @pagination-change-page="getResults" v-if="Tickets"></pagination>
                        </div>
                    </div>
                    <!-- /.card -->
                </div>
            </div>
        </div>
    </section>
 </template>
 
 <script>
 import { MonthPicker } from 'vue-month-picker'
 import { MonthPickerInput } from 'vue-month-picker'
 import SidebarModal from './../SideBarModal.vue';
 export default {
    name: "SiteWiseExpenses",
    components: {
        MonthPicker,
        MonthPickerInput,
        SidebarModal
    },
    data() {
        return {
             read_at: "",
            pmModalData: "",
            created_users: [],
            search_machines: [],
            search_sites: [],
            search_tickets:[],
            search: {
                start_at: "",
                end_at: "",
                site_id: "",
            },
            categories: [],
            sub_categories: [],
            sites: [],
            selected_machine: "",
            users: [],
            machines: [],
            Tickets: {},
            clearEmittedText: '',
            default_month: '',
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
        async reset_filter() {
            this.search = {
                start_at: "",
                end_at: "",
                site_id: "",
            }

            this.getResults();
        },
        openSideModal() {
            this.$refs.sidebarModal.openSideModal();
        },
        closeSideModal() {
            this.$refs.sidebarModal.closeSideModal();
        },
        deleteReading(reading){
            console.log(reading);
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
                    this.axios.delete('api/reading/' + reading.id).then(() => {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        );
                        // Fire.$emit('AfterCreate');
                        this.getResults();
                    }).catch((data) => {
                        Swal.fire("Failed!", data.message, "warning");
                    });
                }
            })
        },
        showClearText() {
            this.clearEmittedText = 'emitted'
            this.default_month = ''
            window.setTimeout(() => {
                this.clearEmittedText = null
            }, 1000)
        },
        UpdateValues(e) {
            this.search.tat_from = e.minValue;
            this.search.tat_to = e.maxValue;
        },
        
        finishDownload() {
            Swal.close();
        },
 
        getLabel(val) {
            if (typeof val === "object") {
                return val.far_no + " - " + val.name;
            } else {
                return val;
            }
        },
        getResults(page = 1) {
            

            let cloaderd = this.$loading.show();
            this.search.page = page;
            axios.get("/api/reading", {
                params: {
                    page: page,
                    search: this.search
                }
            })
            .then(res => {
                console.log(res.data.data);
                this.Tickets = res.data.data;
                cloaderd.hide();
            })
            .catch(err => {
                console.error(err);
                cloaderd.hide();
            })
            
        },
    },
    created() {
        this.getResults();
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
                this.created_users = response.data.data.created_users;
            })
            .catch(() => console.warn("Oh. Something went wrong"));
    },
    watch: {
    },
 
 
 };
 
 </script>
 