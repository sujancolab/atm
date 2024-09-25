<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row">

                <div class="col-12">

                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">model List</h3>

                            <div class="card-tools">

                                <button type="button" class="btn btn-sm btn-primary" @click="newModal"  v-if="$gate.hasPermission('can_add_machine_model')">
                                    <i class="fa fa-plus-square"></i>
                                    Add New
                                </button>
                            </div>
                        </div>
                        <div class="card-body p-2">
                            <form autocomplete="off" @submit.prevent="getResults()">
                                <div class="form-row">
                                    <div class="col col-3 pt-2">
                                        <input placeholder="Enter Name ..." v-model="search" class="form-control">
                                    </div>
                                    <div class="col col-3 pt-2 btn-group" role="group">
                                        <button type="submit" class="btn btn-success">Search</button>
                                         <download-excel class="btn btn-warning" :fetch="export_csv"
                                        :fields="json_fields" :before-generate="startDownload"
                                        :before-finish="finishDownload" worksheet="My Worksheet" type="csv"
                                        name="model_list.csv">
                                        <span class="labelText"><i class="fa fa-file-excel-o" aria-hidden="true"></i>
                                            Export as
                                            CSV</span>
                                    </download-excel>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body table-responsive p-0">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th class="stickey" style="display: none;">Action</th>
                                        <th>Model Name</th>
                                        <th>Make</th>
                                        <th>Created By</th>
                                        <th>Created On</th>
                                        <!-- <th>Action</th> -->
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(model, x ) in Models.data" :key="model.id">

                                        <td style="display: none;"></td>
                                        <td class="text-capitalize" style="padding-bottom: 10px !important;">{{ model.name }}</td>
                                        <td>{{ model.company ? model.company.name : '' }}</td>
                                        <td>{{ model.created_by_name }}</td>
                                        <td>{{ model.created_at | myDate }}</td>
                                        <!-- <td>
                        <a href="javascript:void(0);" @click="editModal(model)" class="btn btn-success btn-sm">
                           Edit
                        </a>
                      </td> -->
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- /.card-body -->
                        <div class="card-footer">
                            <pagination :data="Models" :limit="10" @pagination-change-page="getResults"></pagination>
                        </div>
                    </div>
                    <!-- /.card -->
                </div>
            </div>


            <!-- <div v-if="!$gate.isAdmin()">
                <not-found></not-found>
            </div> -->

            <!-- Modal -->
            <div class="modal fade" id="addNewmodel" tabindex="-1" role="dialog" aria-labelledby="addNewmodel"
                aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" v-show="!editmode">Create New model</h5>
                            <h5 class="modal-title" v-show="editmode">Update model</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <!-- <form @submit.prevent="createUser"> -->

                        <form @submit.prevent="editmode ? updatemodel() : createmodel()">
                            <div class="modal-body">
                                <div class="form-group">
                                    <label>Name</label>
                                    <input v-model="form.name" type="text" name="name" class="form-control"
                                        :class="{ 'is-invalid': form.errors.has('name') }" ref="name">
                                    <has-error :form="form" field="name"></has-error>
                                </div>
                                <div class="form-group">
                                    <label>Machine Company</label>
                                    <v-select label="name" :reduce="(option) => option.id" :options="companies"
                                        placeholder="Choose Company ..." v-model="form.company_id"
                                        :class="{ 'is-invalid': form.errors.has('company_id') }">
                                    </v-select>
                                    <has-error :form="form" field="company_id"></has-error>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button v-show="editmode" type="submit" class="btn btn-success">Update</button>
                                <button v-show="!editmode" type="submit" class="btn btn-primary">Create</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            search: '',
            editmode: false,
            Models: {},
            companies: [],
            form: new Form({
                id: '',
                name: '',
                company_id: '',
            }),
            json_fields: {
                'Model Name': 'name',
                'Make': {
                    field: 'company',
                    callback: (value) => {
                        return value ? value.name : '-';
                    }
                },
                'Created By': 'created_by_name',
            },
             json_meta: [
                [{
                    key: "charset",
                    value: "utf-8",
                }, ],
            ],
        }
    },
    methods: {

          async export_csv() {
            const response = await axios.get('api/model?export=1', {
                params: {
                    search: this.search
                }
            });
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

        getResults(page = 1) {

            let cloaderd = this.$loading.show();;
            axios.get('/api/model', {
                params: {
                    page: page,
                    search: this.search
                }
            }).then(({ data }) => {
                this.Models = data.data
                cloaderd.hide();
            });
        },
        updatemodel() {
            let cloaderd = this.$loading.show();;
            this.form.put('/api/model/' + this.form.id)
                .then((response) => {
                    // success
                    $('#addNewmodel').modal('hide');
                    Toast.fire({
                        icon: 'success',
                        title: response.data.message
                    });
                    cloaderd.hide();
                    this.loadModels();
                })
                .catch(() => {
                    cloaderd.hide();
                });

        },
        editModal(model) {
            this.editmode = true;
            this.form.reset();
            $('#addNewmodel').modal('show');
            this.$refs.name.focus();
            this.form.fill(model);
        },
        newModal() {
            this.editmode = false;
            this.form.reset();
            $('#addNewmodel').modal('show');
            this.$refs.name.focus();
        },

        loadModels() {
            let cloaderd = this.$loading.show();
            axios.get("/api/model").then(({ data }) => {
                this.Models = data.data
                cloaderd.hide();
            });
        },

        createmodel() {

            this.form.post('/api/model')
                .then((response) => {
                    $('#addNewmodel').modal('hide');

                    Toast.fire({
                        icon: 'success',
                        title: response.data.message
                    });
                    this.loadModels();
                })
                .catch(() => {
                    Toast.fire({
                        icon: 'error',
                        title: 'Some error occured! Please try again'
                    });
                })
        },


    },
    mounted() {

    },
    beforeCreate() {
        axios.get("api/company/list")
            .then((res) => {
                this.companies = res.data.data;
            })
    },
    created() {
        this.loadModels();
    }
}
</script>
