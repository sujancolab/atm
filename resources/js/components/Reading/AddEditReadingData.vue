<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Data Reading Input</h3>
                            <div class="card-tools"></div>
                        </div>

                        <div class="card-body p-2">
                            <form autocomplete="off" @submit.prevent="getResults()">
                                <div class="form-row">
                                    <div class="col col-2">
                                        <label>Select Date</label>
                                        <input type="date" v-model="form.read_at" class="form-control"
                                            :readonly="this.$route.params.id">
                                    </div>
                                    <div class="col col-3">
                                        <label>Select Site</label>
                                        <v-select label="site_name" :reduce="(option) => option.id"
                                            :options="search_sites" placeholder="Select Site..." v-model="form.site_id"
                                            name="site_id" :disabled="this.$route.params.id">
                                        </v-select>
                                    </div>


                                    <div class="col  mt-4-5">
                                        <button type="submit" class="btn btn-primary" v-if="!this.$route.params.id">
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-12" v-if="form.reading.length > 0">
                    <div class="card">

                        <!-- /.card-header -->
                        <div class="card-body table-responsive p-0 ticketTable">
                            <table class="table table-hover table-striped" v-if="Tickets">
                                <thead>
                                    <tr>
                                        <th class="stickey">FAR No</th>
                                        <th>Name</th>
                                        <th>Current Site</th>
                                        <th>Model</th>
                                        <th>Regn No</th>
                                        <th>Machine Sr No</th>
                                        <th>Engine No</th>
                                        <th>Chassis No</th>
                                        <th>Starting Hourmeter</th>
                                        <th>Closing Hourmeter</th>
                                        <th>Total Hourmeter</th>
                                        <th>Starting KM</th>
                                        <th>Closing KM</th>
                                        <th>Total Km Run</th>
                                        <th>Diesel Issued (Ltrs)</th>
                                        <th>Machine running status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(ticket, index)  in form.reading" :key="index">
                                        <td>{{ ticket.far_no }}</td>
                                        <td>{{ ticket.name }}</td>
                                        <td>{{ ticket.site_name }}</td>
                                        <td>{{ ticket.machine_model_name }}</td>
                                        <td>{{ ticket.regn_no }}</td>
                                        <td>{{ ticket.machine_sr_no }}</td>
                                        <td>{{ ticket.engine_no }}</td>
                                        <td>{{ ticket.chassis_no }}</td>
                                        <td>
                                            <input type="number" v-model="ticket.starting_hourmeter"
                                                class="form-control" :readonly="ticket.is_consumtion_hr_run == 0 || ticket.last_run_hour > 0"
                                                :name="'starting_hourmeter_' + index" data-vv-as="Starting hourmeter"
                                                :min="ticket.last_run_hour"
                                                :class="{ 'is-invalid': verrors.has('starting_hourmeter_' + index) }"
                                                v-validate="{ required: form.reading[index].closing_hourmeter != null && form.reading[index].closing_hourmeter != '', min_value: ticket.last_run_hour }"
                                                :required="form.reading[index].closing_hourmeter != null && form.reading[index].closing_hourmeter != ''" />
                                            <div v-if="verrors.has('starting_hourmeter_' + index)"
                                                class="help-block invalid-feedback">
                                                {{ verrors.first('starting_hourmeter_' + index) }}
                                            </div>
                                        </td>
                                        <td>
                                            <input type="number" v-model="ticket.closing_hourmeter" class="form-control"
                                                :readonly="ticket.is_consumtion_hr_run == 0"
                                                :name="'closing_hourmeter_' + index"
                                                :class="{ 'is-invalid': verrors.has('closing_hourmeter_' + index) }"
                                                data-vv-as="Closing hourmeter"
                                                v-validate="{ min_value: ticket.starting_hourmeter }"
                                                :required="form.reading[index].starting_hourmeter != null && form.reading[index].starting_hourmeter != ''" />
                                            <div v-if="verrors.has('closing_hourmeter_' + index)"
                                                class="help-block invalid-feedback">
                                                {{ verrors.first('closing_hourmeter_' + index) }}
                                            </div>
                                        </td>
                                        <td>
                                            <input type="number" :value="calculateTotalHourmeter(ticket)"
                                                class="form-control" readonly>
                                        </td>
                                        <td>
                                            <input type="number" v-model="ticket.starting_km" class="form-control"
                                                :readonly="ticket.is_consumtion_km_run == 0 || ticket.last_km_run > 0"
                                                :name="'starting_km_' + index" data-vv-as="Starting KM"
                                                :min="ticket.last_km_run"
                                                :class="{ 'is-invalid': verrors.has('starting_km_' + index) }"
                                                v-validate="{ required: form.reading[index].closing_km != null && form.reading[index].closing_km != '', min_value: ticket.last_km_run }"
                                                :required="form.reading[index].closing_km != null && form.reading[index].closing_km != ''" />
                                            <div v-if="verrors.has('starting_km_' + index)"
                                                class="help-block invalid-feedback">
                                                {{ verrors.first('starting_km_' + index) }}
                                            </div>
                                        </td>
                                        <td>
                                            <input type="number" v-model="ticket.closing_km" class="form-control"
                                                :readonly="ticket.is_consumtion_km_run == 0"
                                                :name="'closing_KM_' + index"
                                                :class="{ 'is-invalid': verrors.has('closing_KM_' + index) }"
                                                data-vv-as="Closing KM" v-validate="{ min_value: ticket.starting_km }"
                                                :required="form.reading[index].starting_km != null && form.reading[index].starting_km != ''">
                                            <div v-if="verrors.has('closing_KM_' + index)"
                                                class="help-block invalid-feedback">
                                                {{ verrors.first('closing_KM_' + index) }}
                                            </div>
                                        </td>
                                        <td>
                                            <input type="number" :value="calculateTotalKm(ticket)" class="form-control"
                                                readonly>
                                        </td>
                                        <!-- <td>
                                            <input type="number" v-model="ticket.daily_running_hour"
                                                class="form-control" :readonly="ticket.is_production_fig == 0">
                                        </td> -->
                                        <td>
                                            <input type="number" v-model="ticket.diesel_issued" class="form-control">
                                        </td>
                                        <td><input type="text" v-model="ticket.condition_of_machine"
                                                class="form-control" readonly></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- /.card -->
                </div>
                <div class="col-12 pt-2 pb-2" v-if="form.reading.length > 0">
                    <button type="button" class="btn btn-success float-right " @click="submit_data()">Submit</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { MonthPicker } from 'vue-month-picker'
import { MonthPickerInput } from 'vue-month-picker'

export default {
    name: "SiteWiseExpenses",
    components: {
        MonthPicker,
        MonthPickerInput
    },
    data() {
        return {
            form: new Form({
                site_id: '',
                read_at: '',
                reading: []
            }),
            read_at: "",
            pmModalData: "",
            created_users: [],
            search_machines: [],
            search_sites: [],
            search_tickets: [],
            search: {
                read_at: "",
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
        calculateTotalHourmeter(ticket) {
            return ticket.closing_hourmeter - ticket.starting_hourmeter;
        },
        calculateTotalKm(ticket) {
            return ticket.closing_km - ticket.starting_km;
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

            if (this.form.read_at == "") {
                Toast.fire({
                    icon: 'warning',
                    title: "Search Date is required"
                });
            } else if (this.form.site_id == "") {
                Toast.fire({
                    icon: 'warning',
                    title: "Site ID is required"
                });
            } else {
                let cloaderd = this.$loading.show();
                this.form.reading = [];
                axios.post("/api/machine_data_reading_report", this.form)
                    .then(res => {
                        if (res.data.data == "data_available") {
                            Toast.fire({
                                icon: 'warning',
                                title: "Reading already available for the selected date and Site ID."
                            });
                        } else {
                            // this.form.reading = res.data.data

                            res.data.data.forEach((readingDataItem) => {
                                this.form.reading.push({
                                    id: readingDataItem.id,
                                    machine_running_status: readingDataItem.condition_of_machine,
                                    site_name: readingDataItem.current_site.site_name,
                                    name: readingDataItem.name,
                                    far_no: readingDataItem.far_no,
                                    machine_model_name: readingDataItem.machine_model.name,
                                    regn_no: readingDataItem.regn_no,
                                    machine_sr_no: readingDataItem.machine_sr_no,
                                    engine_no: readingDataItem.engine_no,
                                    chassis_no: readingDataItem.chassis_no,
                                    is_consumtion_hr_run: readingDataItem.is_consumtion_hr,
                                    is_consumtion_km_run: readingDataItem.is_consumtion_km_run,
                                    is_production_fig: readingDataItem.is_production_fig,
                                    condition_of_machine: readingDataItem.condition_of_machine,
                                    last_km_run: readingDataItem.last_maintenances != null && readingDataItem.last_maintenances.km_run != null ? readingDataItem.last_maintenances.km_run : 0,
                                    last_run_hour: readingDataItem.last_maintenances != null && readingDataItem.last_maintenances.run_hour != null ? readingDataItem.last_maintenances.run_hour : 0,
                                    starting_hourmeter: readingDataItem.last_maintenances != null && readingDataItem.last_maintenances.run_hour != null ? readingDataItem.last_maintenances.run_hour : "",
                                    starting_km: readingDataItem.last_maintenances != null && readingDataItem.last_maintenances.km_run != null ? readingDataItem.last_maintenances.km_run : "",
                                });
                            });
                        }
                        cloaderd.hide();
                    })
                    .catch(err => {
                        cloaderd.hide();
                        console.error(err);
                    })
            }
        },
        submit_data() {
            this.$validator.validateAll().then(async (valid) => {
                if (valid) {
                    let cloaderd = this.$loading.show();
                    if (this.$route.params.id) {
                        this.form.put("api/reading/" + this.$route.params.id).then((response) => {
                            cloaderd.hide();
                            if (response.data.success == true) {
                                Toast.fire({
                                    icon: 'success',
                                    title: 'Data updated successfully'
                                });

                                this.$router.push('/reading-data').catch(() => { });
                            } else {
                                Toast.fire({
                                    icon: 'warning',
                                    title: response.data.message
                                });
                            }
                        });
                    } else {
                        this.form.post("api/reading").then((response) => {
                            cloaderd.hide();
                            console.log("hampi", response);
                            if (response.data.success == true) {
                                Toast.fire({
                                    icon: 'success',
                                    title: 'Data inserted successfully'
                                });

                                this.$router.push('/reading-data').catch(() => { });
                            } else {
                                Toast.fire({
                                    icon: 'warning',
                                    title: response.data.message
                                });

                            }
                        });

                    }
                } else {
                    Toast.fire({
                        icon: 'warning',
                        title: "Please check the validation"
                    });
                }
            });
        },
    },
    mounted() {
        if (this.$route.params.id) {
            console.log(this.$route.params.id);
            this.form.id = this.$route.params.id;
            let cloaderd = this.$loading.show();
            axios.get("api/reading/" + this.$route.params.id)
                .then((res) => {

                    //    this.form.fill(res.data.data)
                    this.form.site_id = res.data.data.site_id;
                    this.form.read_at = res.data.data.read_at;

                    // Clear existing reading data
                    this.form.reading = [];
                    // Loop through each reading data item and push it to the form.reading array
                    res.data.data.reading_data.forEach((readingDataItem) => {
                        this.form.reading.push({
                            id: readingDataItem.machine_id,
                            starting_hourmeter: readingDataItem.starting_hourmeter,
                            closing_hourmeter: readingDataItem.closing_hourmeter,
                            starting_km: readingDataItem.starting_km,
                            closing_km: readingDataItem.closing_km,
                            daily_running_hour: readingDataItem.daily_running_hour,
                            diesel_issued: readingDataItem.diesel_issued,
                            machine_running_status: readingDataItem.machine_running_status,
                            site_name: readingDataItem.machine.current_site.site_name,
                            name: readingDataItem.machine.name,
                            far_no: readingDataItem.machine.far_no,
                            machine_model_name: readingDataItem.machine.far_no,
                            regn_no: readingDataItem.machine.regn_no,
                            machine_sr_no: readingDataItem.machine.machine_sr_no,
                            engine_no: readingDataItem.machine.engine_no,
                            chassis_no: readingDataItem.machine.chassis_no,
                            is_consumtion_hr_run: readingDataItem.machine.is_consumtion_hr,
                            is_consumtion_km_run: readingDataItem.machine.is_consumtion_km_run,
                            is_production_fig: readingDataItem.machine.is_production_fig,
                            condition_of_machine: readingDataItem.machine.condition_of_machine,
                            last_km_run: readingDataItem.machine.second_last_maintenances != null && readingDataItem.machine.second_last_maintenances.km_run != null ? readingDataItem.machine.second_last_maintenances.km_run : 0,
                            last_run_hour: readingDataItem.machine.second_last_maintenances != null && readingDataItem.machine.second_last_maintenances.run_hour != null ? readingDataItem.machine.second_last_maintenances.run_hour : 0,
                        });
                    });
                    cloaderd.hide();
                })
                .catch(() => {
                    cloaderd.hide();
                    this.$router.push('/reading-data/').catch(() => { });
                })

        }
    },
    created() {
        //  this.getResults();
    },
    beforeCreate() {
        let cloaderd = this.$loading.show();
        Promise.all([
            axios.get("api/get_pre_machine"),
            axios.get("/api/initial_ticket")
        ])
            .then(([res1, res2]) => {
                // Handle the response of the first API call
                this.categories = res1.data.data.Category;
                this.sites = res1.data.data.sites;

                // Handle the response of the second API call
                this.users = res2.data.data.vendors;
                this.machines = res2.data.data.machines;
                this.search_machines = res2.data.data.machines;
                this.search_sites = res2.data.data.sites;
                this.created_users = res2.data.data.created_users;
                cloaderd.hide();
            })
            .catch(() => console.warn("Oh. Something went wrong"));
    },
    watch: {
    },


};





</script>
