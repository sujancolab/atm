<template>
<div class="modal" :id="id">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">

                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">Machine History</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body vld-parent" ref="section_loader">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm">
                                    <p>
                                        <strong>Far No :</strong> {{ machine.far_no }}
                                        <br>
                                        <strong>Machine Name :</strong> {{ machine.name }}
                                        <br>
                                        <strong>Machine Model :</strong> {{  machine.machine_model? machine.machine_model.name :'-' }}
                                        <br>
                                        <strong>Machine Chassis No :</strong> {{ machine.chassis_no }}
                                    </p>
                                </div>
                                <div class="col-sm">
                                    <p>
                                        <strong>Machine Sl No:</strong> {{ machine.machine_sr_no }}
                                        <br>
                                        <strong>Machine Regn No :</strong> {{ machine.regn_no }}
                                        <br>
                                        <strong>Machine Engine No :</strong> {{ machine.engine_no }}
                                        <br>
                                        <strong v-if="machine.last_ticket">Last Maintenance Type :</strong> {{ machine.last_ticket?machine.last_ticket.ticket_type :'' }} <span v-if="machine.last_ticket && machine.last_ticket.actual_date">                                        <strong>({{ machine.last_ticket.actual_date|myDate }})</strong></span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>Site Name</th>
                                    <th>From Date</th>
                                    <th>Total Run Hour</th>
                                    <th>Total KM Run</th>
                                    <th>Total Production</th>
                                    <th>Fuel Consumption</th>
                                    <th>Total Material Cost</th>
                                    <th>Total Service Cost</th>
                                    <th>Total Cost</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, x) in MaintanaceData" :key="x" v-if="MaintanaceData">
                                    <td v-html="item.site_name"></td>
                                    <td>{{ item.from_date | myDate }}</td>
                                    <td>{{ item.total_run_hour }}</td>
                                    <td>{{ item.total_km_run }}</td>
                                    <td>{{ item.total_production_fig }}</td>
                                    <td>{{ item.total_consumption }}</td>
                                    <td>{{ item.total_material_cost }}</td>
                                    <td>{{ item.total_service_cost }}</td>
                                    <td>{{ item.total_cost }}</td>
                                </tr>
                            </tbody>
                            <tfoot style="border-top: 2px solid black;">
                                <tr>
                                    <th>Total</th>
                                    <th></th>
                                    <th>{{ get_row_total('total_run_hour') }}</th>
                                    <th>{{ get_row_total('total_km_run') }}</th>
                                    <th>{{ get_row_total('total_production_fig') }}</th>
                                    <th>{{ get_row_total('total_consumption') }}</th>
                                    <th>{{ get_row_total('total_material_cost')|toCurrency }}</th>
                                    <th>{{ get_row_total('total_service_cost')|toCurrency }}</th>
                                    <th>{{ get_row_total('total_cost')|toCurrency  }}</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>

                    <!-- Modal footer -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>

                </div>
            </div>
        </div>
</template>
<script>
export default {
    name: 'RoyalInfraconstructionMachineFarPop',
    props: ['machine', 'id'],
    data() {
        return {
            MaintanaceData: '',
        };
    },
    watch: {
        async 'machine.id'(newm, o) {
            this.MaintanaceData = ''
            if (newm) {
                let cloaderd = this.$loading.show({
                    container: this.$refs.section_loader
                });
                axios.get('api/machine/get_site_details/' + newm)
                    .then(res => {
                        this.MaintanaceData = res.data.data
                        cloaderd.hide()
                    })
                    .catch(err => {
                        cloaderd.hide()
                    })
            }
        },
    },

    mounted() {

    },

    methods: {
        get_row_total(key) {
            if (this.MaintanaceData) {
                let rVal = this.MaintanaceData.reduce((accumulator, current) => accumulator + Number(current[key]), 0)
                if (isNaN(rVal)) {
                    return 0;
                }
                return rVal;
            } else {
                return 0
            }
        },
    },
};
</script>
