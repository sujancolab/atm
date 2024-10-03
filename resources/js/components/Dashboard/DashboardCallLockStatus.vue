<template>
    <div class="container-fluid dashboard"  v-if="authUser.id_cms_privileges!='2'">
      <!-- Header Row -->
      <div class="row">
        <div class="col-md-12 text-center py-3" style="background-color: #40E0D0;">
          <h4>Dashboard</h4>
        </div>
      </div>

      <!-- Top Row for Tickets -->
      <div class="row justify-content-center my-4">
        <!-- Total Tickets -->
        <div class="col-md-4">
          <div class="card text-center shadow" style="border-radius: 50px;">
            <div class="card-body" style="background: linear-gradient(to bottom, #ff7e67, #ffb3a7); border-radius: 50px;">
              <h2 class="ticket-count">{{ totalTickets }}</h2>
              <p>Total Tickets</p>
              <router-link to="/complaint-list/all" class="btn btn-outline-light btn-sm">
                View Details
                </router-link>


            </div>
          </div>
        </div>

        <!-- Pending Tickets -->
        <div class="col-md-4">
          <div class="card text-center shadow" style="border-radius: 50px;">
            <div class="card-body" style="background: linear-gradient(to bottom, #918af4, #b3a6f6); border-radius: 50px;">
              <h2 class="ticket-count">{{ pendingTickets }}</h2>
              <p>Pending Tickets</p>
              <p>FLM: {{ flmPending }} | SLM: {{ slmPending }} | JOINED: {{ joinedPending }}</p>
              <router-link to="/complaint-list/all/Pending" class="btn btn-outline-light btn-sm">
                View Details
              </router-link>
            </div>
          </div>
        </div>

        <!-- Processing Tickets -->
        <div class="col-md-4">
          <div class="card text-center shadow" style="border-radius: 50px;">
            <div class="card-body" style="background: linear-gradient(to bottom, #d381f2, #d9a4f4); border-radius: 50px;">
              <h2 class="ticket-count">{{ processingTickets }}</h2>
              <p>Processing Tickets</p>
              <p>FLM: {{ flmProcessing }} | SLM: {{ slmProcessing }} | JOINED: {{ joinedProcessing }}</p>
              <router-link to="/complaint-list/all/Processing" class="btn btn-outline-light btn-sm">
                View Details
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- Ticket Status Section -->
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card shadow">
            <div class="card-body text-center">
              <h4>New Tickets</h4>
              <p style="color:gray;">{{ newTickets }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card shadow">
            <div class="card-body text-center">
              <h4>Closed Tickets</h4>
              <p style="color:gray;">{{ closedTickets }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- User Role Section -->
      <div class="row justify-content-center mt-4">
        <div class="col-md-12 text-center">
          <p>You have logged in as <strong class="text-success">{{ userRole }}</strong></p>
        </div>
      </div>
    </div>
    <div id="app" class="container mt-5" v-else>
    <div class="row">
      <InfoCard v-for="item in records" :key="item.id" :title="item.name" :value="item.rows" />
    </div>
  </div>
  </template>

<script>
import InfoCard from '../InfoCard.vue';
export default {
    components: {
    InfoCard
  },
    data() {
        return {
            far_details: {
                actual_material_cost: 0,
                actual_service_cost: 0,
                records: []
            },
            records: '',
            search: {
                financial_year: '',
                quarter: '',
                month: '',
                date_from: '',
                date_to: '',
                site_id: '',
                category_id: '',
                sub_category_id: '',
                machine_id: '',
            },
            monthNames: ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"],

            chartOptions: {
                chart: {
                    id: "vuechart-example",
                },
                xaxis: {
                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
                },
            },
            series: [
                {
                    name: "series-1",
                    data: [30, 40, 35, 50, 49, 60, 70, 91],
                },
            ],

            //*********** */

            donutSeries: [44, 55],
            donutChartOptions: {
                colors: ['#004488', '#38c172'],

                chart: {
                    id: "dnt1"
                },
                labels: ["Major", "Minor"],
                title: {
                    text: "Complaint Nature",
                    align: 'center',
                },

                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },

                        legend: {
                            position: 'bottom',
                            horizontalAlign: 'left',
                        }
                    }
                }],
                legend: {
                    position: 'bottom',
                    horizontalAlign: 'center',
                }
            },
            barCountOptions: {
                chart: {
                    type: 'bar',
                    height: 250,
                    stacked: true,
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                        colors: ['#FF5733', '#33FF57'],
                        dataLabels: {
                            total: {
                                enabled: true,
                                offsetX: 0,
                                style: {
                                    fontSize: '13px',
                                    fontWeight: 900
                                }
                            }
                        }
                    },
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                title: {
                    text: undefined
                },
                xaxis: {
                    categories: ["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"],

                },
                yaxis: {
                    title: {
                        text: undefined
                    },
                },

                fill: {
                    opacity: 1
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: 40
                }
            },

            barEquipmentOptions: {

                series: [],
                chartOptions: {
                    chart: {
                        id: 'equipmentChart',
                        type: 'bar',
                        height: 350,
                        stacked: true,
                        toolbar: {
                            show: true
                        },
                        zoom: {
                            enabled: true
                        },
                        events: {
                            dataPointSelection: (event, chartContext, config) => {
                                console.log(chartContext)
                                var categoryIndex = config.dataPointIndex;
                                var far_no = this.barEquipmentOptions.chartOptions.xaxis.categories[categoryIndex];

                                // axios.get('api/get_machine_for_dashboard', {
                                //     params: {
                                //         'far_no': far_no
                                //     }
                                // })
                                //     .then((response) => {
                                //         this.far_details = response.data.data
                                //         $('#countComplaintModal').modal('show');
                                //     })
                                //     .catch(function (error) {
                                //         console.error('There was an error!', error);
                                //     });

                                // You can replace the alert with your custom popup logic
                                // For example, open a modal or a custom popup
                            }
                        }
                    },
                    responsive: [{
                        breakpoint: 480,
                        options: {
                            legend: {
                                position: 'bottom',
                                offsetX: -10,
                                offsetY: 0
                            }
                        }
                    }],
                    plotOptions: {
                        bar: {
                            horizontal: false,
                            borderRadius: 1,
                            borderRadiusApplication: 'end', // 'around', 'end'
                            borderRadiusWhenStacked: 'last', // 'all', 'last'
                            dataLabels: {
                                total: {
                                    enabled: true,
                                    style: {
                                        fontSize: '9px',
                                        fontWeight: 900
                                    }
                                }
                            }
                        },
                    },
                    xaxis: {
                        labels: {
                            rotate: -45
                        },
                        categories: [],
                        tickPlacement: 'on'
                    },
                    legend: {
                        position: 'bottom',
                        offsetY: 0
                    },
                    fill: {
                        opacity: 1
                    }
                },
            },
            //******* */

            barProjectOptions: {

                series: [],
                chartOptions: {
                    chart: {
                        type: 'bar',
                        height: 400,
                        stacked: true,
                    },
                    plotOptions: {
                    bar: {
                        horizontal: true,
                            dataLabels: {
                                total: {
                                    enabled: true,
                                    offsetX: 0,
                                    style: {
                                    fontSize: '13px',
                                    fontWeight: 900
                                    }
                                }
                            }
                        },
                    },
                    responsive: [{
                        breakpoint: 480,
                        options: {
                            legend: {
                                position: 'bottom',
                                offsetX: -10,
                                offsetY: 0
                            }
                        }
                    }],
                    xaxis: {
                        categories: [],
                    },
                    fill: {
                        opacity: 1
                    },
                    legend: {
                        show: false,
                        position: 'bottom',
                        offsetX: 0,
                        offsetY: 0
                    },
                },

            },

            financial_years: [],
            search_machines: [],
            search_sites: [],
            search_tickets: [],
            categories: [],
            sub_categories: [],
            sites: [],
            machines: [],
            totalTickets: 184613,
      pendingTickets: 0,
      flmPending: 0,
      slmPending: 0,
      joinedPending: 0,
      processingTickets: 49,
      flmProcessing: 39,
      slmProcessing: 1,
      joinedProcessing: 9,
      newTickets: 0,
      closedTickets: 0,
      authUser: localStorage.getItem("auth") ? JSON.parse(localStorage.getItem("auth")) : null,
      userRole: "",

        };
    },
    updated: function () {
        this.$nextTick(function () {
            // this.asign_graphs();
        })
    },
    watch: {
        'search.quarter'(n) {
            if (n) {
                this.search.date_from = ''
                this.search.date_to = ''
                this.search.month = ''
            }
        },
        'search.date_from'(n) {
            if (n) {
                this.search.month = ''
                this.search.quarter = ''
            }
        },
        'search.date_to'(n) {
            if (n) {
                this.search.month = ''
                this.search.quarter = ''
            }
        },
        'search.month'(n) {
            if (n) {
                this.search.date_from = ''
                this.search.date_to = ''
                this.search.quarter = ''
            }
        },

        search: {
            handler: function (n) {
                axios.post('api/dashboard', this.search)
                    .then(res => {
                        this.records = res.data.data
                        this.barEquipmentOptions.chartOptions.xaxis.categories = res.data.data.EquipmentChart.series
                        this.barEquipmentOptions.series = res.data.data.EquipmentChart.data



                        this.$refs.barCountChart.updateSeries(this.records.barCountChart.series, true)
                        this.$refs.barCountChart.updateOptions(this.records.barCountChart.options, false, true)

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

        this.authUser=localStorage.getItem("auth");
        if (this.authUser) {
            this.authUser = JSON.parse(this.authUser);
            if(this.authUser.id_cms_privileges==3){
                this.userRole="Client employee";
            }else if(this.authUser.id_cms_privileges==4){
                this.userRole="Call Center User";
            }
        }

        axios.get('api/dashboard')
            .then(res => {
                this.records = res.data.data
                if(this.authUser.id_cms_privileges==2){
                    console.log("this.records",this.records);


                }else{
                        console.log("this.records",this.records);
                        this.totalTickets= this.records.total_tickets;
                        this.pendingTickets= this.records.pending_tickets;
                        this.flmPending= this.records.flm_pending_tickets;
                        this.slmPending= this.records.slm_pending_tickets;
                        this.joinedPending= this.records.joined_pending_tickets;
                        this.processingTickets= this.records.processing_tickets;
                        this.flmProcessing= this.records.flm_processing_tickets;
                        this.slmProcessing= this.records.slm_processing_tickets;
                        this.joinedProcessing= this.records.joined_processing_tickets;
                        this.newTickets= this.records.new_tickets;
                        this.closedTickets= this.records.closed_tickets;
                        this.userRole= 'Call Center User';
                }


            })
            .catch(err => {
                console.error(err);
            })


        // axios.get("api/get_pre_machine").then((res) => {
        //     this.categories = res.data.data.Category;
        //     this.sites = res.data.data.sites;
        // });
        // axios
        //     .get("/api/initial_ticket")
        //     .then((response) => {
        //         this.users = response.data.data.vendors;
        //         this.machines = response.data.data.machines;
        //         this.search_machines = response.data.data.machines;
        //         this.search_sites = response.data.data.sites;
        //         this.created_users = response.data.data.created_users;
        //     })
        //     .catch(() => console.warn("Oh. Something went wrong"));


    },
    mounted() {
        this.authUser=localStorage.getItem("auth");
        if (this.authUser) {
            this.authUser = JSON.parse(this.authUser);
            if(this.authUser.id_cms_privileges==3){
                this.userRole="Client employee";
            }else if(this.authUser.id_cms_privileges==4){
                this.userRole="Call Center User";
            }
        }
        // if (this.$gate.isAdmin()) {
        //     // this.$router.push('/users').catch(() => { });
        // } else {
        //     this.$router.push("/tickets").catch(() => { });
        // }
    },
    methods: {
        asign_graphs() {
            this.records = this.records
            this.chartOptions = {
                chart: {
                    id: "vuechart-example",
                },
                xaxis: {
                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
                },
            }
            //*********** */
            this.donutChartOptions = {
                colors: ['#0068b9', '#0068b9ad'],

                chart: {
                    id: "dnt1"
                },
                labels: ["Major", "Minor"],
                title: {
                    text: "Complaint Nature",
                    align: 'center',
                },

                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },

                        legend: {
                            position: 'bottom',
                            horizontalAlign: 'left',
                        }
                    }
                }],
                legend: {
                    position: 'bottom',
                    horizontalAlign: 'center',
                }
            }

            this.barCountOptions = {
                chart: {
                    type: 'bar',
                    height: 350,
                    stacked: true,
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                        dataLabels: {
                            total: {
                                enabled: true,
                                offsetX: 0,
                                style: {
                                    fontSize: '13px',
                                    fontWeight: 900
                                }
                            }
                        }
                    },
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                title: {
                    text: 'Call Status'
                },
                xaxis: {
                    categories: ["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"],

                },
                yaxis: {
                    title: {
                        text: undefined
                    },
                },

                fill: {
                    opacity: 1
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: 40
                }
            }

        },
        getLabel(val) {
            if (typeof val === "object") {
                return val.far_no + " - " + val.name;
            } else {
                return val;
            }
        },
        // async get_machine() {
        //     axios
        //         .get("/api/reports/machines", {
        //             params: {
        //                 site_id: this.search.site_id,
        //                 category_id: this.search.category_id,
        //                 sub_category_id: this.search.sub_category_id,
        //             },
        //         })
        //         .then((response) => {
        //             this.search_machines = response.data.data;
        //         })
        //         .catch(() => console.warn("Oh. Something went wrong"));
        // },
    },
};
</script>
<style scoped>
.dashboard {
  background-color: #f8f9fa;
  min-height: 100vh;
}

.card {
  border-radius: 10px;
}

.card-body {
  color: white;
}

h2.ticket-count {
  font-size: 4rem;
  font-weight: bold;
}

h4 {
  color: #333;
}

p {
  margin: 0;
}

.shadow {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.text-success {
  color: #28a745 !important;
}
</style>
