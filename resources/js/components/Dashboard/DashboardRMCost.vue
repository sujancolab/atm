<template>
    <section class="content">
        <div class="container-fluid" v-if="records">


            <div class="row">
                <div class="col-12">
                    <div class="form-row">
                        <div class="col">
                            <label for="">FY</label>
                            <v-select :options="financial_years" placeholder="Select FY..." v-model="search.financial_year"
                                name="financial_year">
                            </v-select>
                        </div>
                        <div class="col" v-if="!search.date_from && !search.date_to && !search.month">
                            <label for="">Quarter</label>
                            <select v-model="search.quarter" class="form-control">
                                <option value="">--</option>
                                <Option value="4-6">First</Option>
                                <Option value="7-9">Second</Option>
                                <Option value="10-12">Third</Option>
                                <Option value="1-3">Fourth</Option>
                            </select>
                        </div>
                        <div class="col" v-if="!search.date_from && !search.date_to && !search.quarter">
                            <label for="">Month</label>
                            <select v-model="search.month" class="form-control">
                                <option value="">--</option>
                                <Option :value="(x+1)" v-for="(it, x) in monthNames" :key="'m' + x">{{ it }}</Option>
                            </select>
                        </div>

                        <div class="col" v-if="!search.month && !search.quarter">
                            <label for="">From Date</label>
                            <datetime value-zone="Asia/Kolkata" v-model="search.date_from" input-class="form-control"
                                placeholder="Created from date" />
                        </div>
                        <div class="col" v-if="!search.month && !search.quarter">
                            <label for="">To Date</label>
                            <datetime value-zone="Asia/Kolkata" v-model="search.date_to" input-class="form-control"
                                placeholder="Created to date" />
                        </div>

                        <div class="col">
                            <label for="">Project Name</label>
                            <v-select label="site_name" :reduce="(option) => option.id" :options="search_sites"
                                placeholder="Choose Project..." v-model="search.site_id" name="site_id">
                            </v-select>
                        </div>
                        <div class="col">
                            <label for="">Equipment Category</label>
                            <v-select label="name" :reduce="(option) => option.id" :options="categories"
                                placeholder="Choose Category ..." v-model="search.category_id">\
                            </v-select>
                        </div>
                        <div class="col  ">
                            <label for="">Description</label>
                            <v-select label="name" :reduce="(option) => option.id" :options="sub_categories"
                                placeholder="Choose description ..." v-model="search.sub_category_id">
                            </v-select>
                        </div>
                        <div class="col  ">
                            <label for="">Equipment Name</label>
                            <v-select label="name" :get-option-label="getLabel" :reduce="(option) => option.id"
                                :options="search_machines" placeholder="Choose Equipment ..." v-model="search.machine_id"
                                name="machine_id">
                            </v-select>
                        </div>


                    </div>

                </div>
            </div>
            <div class="row row-eq-height">
                <!-- Left col -->

                <!-- /.col -->

                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Sum of value by Equipment Name</h3>
                            <div class="card-tools">
                                <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                    <i class="fas fa-minus"></i>
                                </button>
                            </div>
                        </div>
                        <div class="card-body p-1">
                            <apexchart type="bar" height="350" :options="barEquipmentOptions.options" :series="barEquipmentOptions.series"></apexchart>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">


                    <div class="row text-center">
                        <div class="col-6 p-0">
                            <div class="col-12 p-1">
                                <div class="info-box bg-yellow">
                                    <div class="info-box-content">
                                        <span class="info-box-number">{{ records.total_tickets }}</span>
                                        <span class="info-box-text">Total Cost - Repair & Maintenance (Excluding
                                            Taxes)</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 p-1">
                                <div class="row text-center">
                                    <div class="col-6">
                                        <div class="info-box bg-yellow">
                                            <div class="info-box-content">
                                                <span class="info-box-number">{{ records.total_tickets }}</span>
                                                <span class="info-box-text">Supply (Excluding
                                                    Taxes)</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="info-box bg-yellow">
                                            <div class="info-box-content">
                                                <span class="info-box-number">{{ records.total_tickets }}</span>
                                                <span class="info-box-text">Service (Excluding
                                                    Taxes)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-6 p-0">
                            R&M Cost - Value by FY
                            <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
                        </div>
                    </div>


                    <div class="row text-center">
                        <div class="col-6 p-0">
                            <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
                        </div>
                        <div class="col-6 p-0">
                            <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
                        </div>
                    </div>

                </div>
            </div>

            <!-- /.row -->
        </div>
        <!--/. container-fluid -->
    </section>
</template>

<script>
export default {

    data() {
        return {
            records: '',
            search: {
                type: 'RMC',
                financial_year: '',
                quarter: '',
                date_from: '',
                date_to: '',
                site_id: '',
                category_id: '',
                sub_category_id: '',
                machine_id: ''
            },
            monthNames: ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"],


            series: [{
                data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
            }],
            chartOptions: {
                chart: {
                    type: 'bar',
                    height: 350
                },
                plotOptions: {
                    bar: {
                        borderRadius: 4,
                        horizontal: true,
                    }
                },
                dataLabels: {
                    enabled: false
                },
                xaxis: {
                    categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
                        'United States', 'China', 'Germany'
                    ],
                }
            },



            financial_years: [],
            search_machines: [],
            search_sites: [],
            search_tickets: [],
            categories: [],
            sub_categories: [],
            sites: [],
            machines: [],
        };
    },
    watch: {

        'search.quarter'(n){
            if(n){
            this.search.date_from =''
            this.search.date_to=''
            this.search.month=''
            }
        },
        'search.date_from'(n){
            if(n){
            this.search.month=''
            this.search.quarter=''
            }
        },
        'search.date_to'(n){
            if(n){
            this.search.month=''
            this.search.quarter=''
            }
        },
        'search.month'(n){
            if(n){
            this.search.date_from =''
            this.search.date_to=''
            this.search.quarter=''
            }
        },

        search: {
            handler: function (n) {
                axios.post('api/dashboard', this.search)
                    .then(res => {
                        this.records = res.data.data
                        this.barEquipmentOptions.xaxis.categories = res.data.data.EquipmentChart.options.xaxis.categories
                        this.barProjectOptions.xaxis.categories = res.data.data.ProjectChart.options.xaxis.categories
                    })
                    .catch(err => {
                        console.error(err);
                    })
            },
            deep: true
        },
        async "search.sub_category_id"(n, o) {
            if (n) {
                this.get_machine();
            }
        },
        async "search.site_id"(n, o) {
            if (n) {
                this.get_machine();
            }
        },

        "search.category_id": {
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
    },
    created() {
        var yearsLength = 30;
        var currentYear = new Date().getFullYear();
        for (var i = 2022; i <= currentYear; i++) {
            var next = i + 1;
            var year = i + '-' + next.toString();
            this.financial_years.push(year)
        }
    },
    beforeCreate() {
        axios.post('api/dashboard', { type: 'RMC' })
            .then(res => {
                this.records = res.data.data

                this.barEquipmentOptions  = res.data.data.EquipmentChart
                this.barProjectOptions.xaxis.categories = res.data.data.ProjectChart.options.xaxis.categories
            })
            .catch(err => {
                console.error(err);
            })

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
    mounted() {
        // if (this.$gate.isAdmin()) {
        //     // this.$router.push('/users').catch(() => { });
        // } else {
        //     this.$router.push("/tickets").catch(() => { });
        // }
    },
    methods: {
        getLabel(val) {
            if (typeof val === "object") {
                return val.far_no + " - " + val.name;
            } else {
                return val;
            }
        },
        async get_machine() {
            axios
                .get("/api/reports/machines", {
                    params: {
                        site_id: this.search.site_id,
                        category_id: this.search.category_id,
                        sub_category_id: this.search.sub_category_id,
                    },
                })
                .then((response) => {
                    this.search_machines = response.data.data;
                })
                .catch(() => console.warn("Oh. Something went wrong"));
        },
    },
};
</script>
