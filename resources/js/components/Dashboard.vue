<template>
    <section class="content">
        <div class="container-fluid" v-if="records">
            <div class="row">
                <div class="col-12">
                    <div class="form-row">
                        <div class="col ">
                            <label for="">FY</label>
                            <v-select label="site_name" :reduce="(option) => option.id" :options="financial_years"
                                placeholder="Select Site..." v-model="search.site_id" name="site_id">
                            </v-select>
                        </div>
                        <div class="col ">
                            <label for="">Quarter</label>
                            <select v-model="search.quarter" class="form-control">
                                <option value="">--</option>
                                <Option value="1">1</Option>
                                <Option value="2">2</Option>
                                <Option value="3">3</Option>
                                <Option value="4">4</Option>
                            </select>
                        </div>
                        <div class="col ">
                            <label for="">Month</label>
                            <select v-model="search.month" class="form-control">
                                <option value="">--</option>
                                <Option value="1" v-for="(it, x) in monthNames" :key="'m' + x">{{ it }}</Option>
                            </select>
                        </div>

                        <div class="col ">
                            <label for="">Project Name</label>
                            <v-select label="name" :reduce="(option) => option.id" :options="[]"
                                placeholder="Choose Project ..." v-model="search.project_id">\
                            </v-select>
                        </div>
                        <div class="col ">
                            <label for="">Equipment Name</label>
                            <v-select label="name" :reduce="(option) => option.id" :options="[]"
                                placeholder="Choose Equipment ..." v-model="search.equipment_id">
                            </v-select>
                        </div>

                    </div>

                </div>
                <!-- Left col -->
                <div class="col-md-6">
                    <!-- MAP & BOX PANE -->
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Complain</h3>
                            <div class="card-tools">
                                <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                    <i class="fas fa-minus"></i>
                                </button>
                            </div>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body p-0">
                            <div class="col-12">
                                <div class="row text-center">
                                    <div class="col-6 p-0">
                                        <div class="info-box bg-yellow">
                                            <div class="info-box-content">
                                                <span class="info-box-number">{{ records.total_tickets }}</span>
                                                <span class="info-box-text">Total Complaint call-log</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-3 p-0">
                                        <div class="info-box bg-green">
                                            <div class="info-box-content">
                                                <span class="info-box-number">{{ records.closed_tickets }}</span>
                                                <span class="info-box-text">Closed Call</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-3 p-0">
                                        <div class="info-box bg-pink">
                                            <div class="info-box-content">
                                                <span class="info-box-number">{{ records.open_tickets }}</span>
                                                <span class="info-box-text">Open Call</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-12">
                                <div class="row text-center">
                                    <div class="col-6 p-0">
                                        <apexchart width="100%" type="donut" :options="records.complain_nature_chart.options"
                                            :series="records.complain_nature_chart.series">
                                        </apexchart>
                                    </div>
                                    <div class="col-6 p-0">
                                        <div class="col-12 p-0">
                                            <div class="info-box bg-info">
                                                <div class="info-box-content">
                                                    <span class="info-box-number">{{ records.avg_tat }}</span>
                                                    <span class="info-box-text">Average TAT (Days)</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 p-0">
                                            <div class="row">
                                                <div class="col-6 pr-0">
                                                    <div class="info-box bg-success">
                                                        <div class="info-box-content">
                                                            <span class="info-box-number">{{ records.within_tat }}</span>
                                                            <span class="info-box-text">Within TAT</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-6 pl-0">
                                                    <div class="info-box bg-pink">
                                                        <div class="info-box-content">
                                                            <span class="info-box-number">{{ records.exceeding_tat }}</span>
                                                            <span class="info-box-text">Exceeding TAT</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /.card-body -->
                    </div>
                    <!-- /.card -->
                    <!-- /.card -->
                </div>
                <!-- /.col -->

                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Count of Complaint Nature by FY, Quarter and Call Status</h3>
                            <div class="card-tools">
                                <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                    <i class="fas fa-minus"></i>
                                </button>
                            </div>
                        </div>
                        <div class="card-body p-0">
                            <apexchart type="bar" height="350" :options="barCountOptions" :series="records.barCountChart.series">
                            </apexchart>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Count of Complaint by Equipment Type</h3>
                            <div class="card-tools">
                                <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                    <i class="fas fa-minus"></i>
                                </button>
                            </div>
                        </div>
                        <div class="card-body p-0">
                            <apexchart type="bar" height="350" :options="barEquipmentOptions" :series="records.EquipmentChart.series">
                            </apexchart>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Count of Complaint by Project</h3>
                            <div class="card-tools">
                                <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                    <i class="fas fa-minus"></i>
                                </button>
                            </div>
                        </div>
                        <div class="card-body p-0">
                            <apexchart type="bar" height="350" :options="barProjectOptions" :series="records.ProjectChart.series">
                            </apexchart>
                        </div>
                    </div>
                </div>

                <!-- /.col -->
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
            records:'',
            search:{},
            monthNames: ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"],
            search: {},
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

                labels: ["Major", "Minor"],
                title: {
                    text: "Complaint Nature"
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },


            //******* */
            barCountSeries: [{
                name: 'Closed',
                data: [44, 55, 20, 30]
            }, {
                name: 'Open',
                data: [53, 32, 55, 3]
            }],
            barCountOptions: {
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
            },


            //********** */

            barEquipmentSeries: [{
                name: 'Count of Complaint',
                data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35]
            }],
            barEquipmentOptions: {

                chart: {
                    height: 350,
                    type: 'bar',
                },
                plotOptions: {
                    bar: {
                        borderRadius: 10,
                        columnWidth: '50%',
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: 2
                },

                grid: {
                    row: {
                        colors: ['#fff', '#f2f2f2']
                    }
                },
                xaxis: {
                    labels: {
                        rotate: -45
                    },
                    categories: ['Apples', 'Oranges', 'Strawberries', 'Pineapples', 'Mangoes', 'Bananas',
                        'Blackberries', 'Pears', 'Watermelons', 'Cherries', 'Pomegranates', 'Tangerines', 'Papayas'
                    ],
                    tickPlacement: 'on'
                },
                yaxis: {
                    title: {
                        text: 'Count of Complaint',
                    },
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'light',
                        type: "horizontal",
                        shadeIntensity: 0.25,
                        gradientToColors: undefined,
                        inverseColors: true,
                        opacityFrom: 0.85,
                        opacityTo: 0.85,
                        stops: [50, 0, 100]
                    },
                }
            },
            //******* */

            barProjectSeries: [{
                name: 'Count of Complaint',
                data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35]
            }],
            barProjectOptions: {

                chart: {
                    height: 350,
                    type: 'bar',
                },
                plotOptions: {
                    bar: {
                        borderRadius: 10,
                        columnWidth: '50%',
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: 2
                },

                grid: {
                    row: {
                        colors: ['#fff', '#f2f2f2']
                    }
                },
                xaxis: {
                    labels: {
                        rotate: -45
                    },
                    categories: ['Apples', 'Oranges', 'Strawberries', 'Pineapples', 'Mangoes', 'Bananas',
                        'Blackberries', 'Pears', 'Watermelons', 'Cherries', 'Pomegranates', 'Tangerines', 'Papayas'
                    ],
                    tickPlacement: 'on'
                },
                yaxis: {
                    title: {
                        text: 'Count of Complaint',
                    },
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'light',
                        type: "horizontal",
                        shadeIntensity: 0.25,
                        gradientToColors: undefined,
                        inverseColors: true,
                        opacityFrom: 0.85,
                        opacityTo: 0.85,
                        stops: [50, 0, 100]
                    },
                }
            },

            financial_years: [],

        };
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
        axios.post('api/dashboard',this.search)
        .then(res => {
            this.records = res.data.data

            this.barEquipmentOptions.xaxis.categories=res.data.data.EquipmentChart.options.xaxis.categories
            this.barProjectOptions.xaxis.categories=res.data.data.ProjectChart.options.xaxis.categories
        })
        .catch(err => {
            console.error(err);
        })
        console.log("r", this.$routes);
    }
};
</script>
