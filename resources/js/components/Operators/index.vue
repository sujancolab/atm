<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row">

                <div class="col-12">

                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Operators List</h3>

                            <div class="card-tools">

                                <button type="button" class="btn btn-sm btn-primary" @click="newModal" v-if="$gate.hasPermission('can_add_operator')">
                                    <i class="fa fa-plus-square"></i>
                                    Add New
                                </button>
                            </div>
                        </div>
                        <div class="card-body p-2">
                            <form autocomplete="off" @submit.prevent="getResults()">
                                <div class="form-row">
                                    <div class="col col-3 pt-2">
                                        <input placeholder="Enter ..." v-model="search" class="form-control">
                                    </div>
                                    <div class="col col-3 pt-2 btn-group" role="group">
                                        <button type="submit" class="btn btn-success">Search</button>
                                    <download-excel class="btn btn-warning ml-2" :fetch="export_csv" :fields="json_fields" :before-generate="startDownload"
                                        :before-finish="finishDownload" worksheet="My Worksheet" type="csv" name="vendor_list.csv">
                                        <span class="labelText">
                                            <i class="fa fa-file-excel-o" aria-hidden="true"></i>
                                            Export as CSV</span>
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
                                        <th class="stickey">Action</th>
                                        <th>Operator Name</th>
                                        <th>Address</th>
                                        <th>State</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="Operator in Operators.data" :key="Operator.id">
                                        <td>
                                            <a href="javascript:void(0);" @click="editModal(Operator)" class="btn btn-primary btn-sm btn-toggle-custom" v-if="$gate.hasPermission('can_edit_operator')">
                                                Edit
                                            </a>
                                            <!-- /
                                            <a href="javascript:void(0);" @click="deleteOperator(Vendor.id)">
                                                <i class="fa fa-trash red"></i>
                                            </a> -->
                                        </td>
                                        <td>{{ Operator.name }}</td>
                                        <td>{{ Operator.address }}</td>
                                        <td>{{ Operator.state }}</td>
                                        <td>{{ Operator.email }}</td>
                                        
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- /.card-body -->
                        <div class="card-footer">
                            <pagination :data="Operators" :limit="10" @pagination-change-page="getResults" v-if="Operators"></pagination>
                        </div>
                    </div>
                    <!-- /.card -->
                </div>
            </div>

            <!-- Modal -->
            <div class="modal fade" id="addNew" tabindex="-1" role="dialog" aria-labelledby="addNew" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" v-show="!editmode">Create New Operator</h5>
                            <h5 class="modal-title" v-show="editmode">Edit Operator</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <form @submit.prevent="editmode ? updateOperator() : createOperator()">
                            <div class="modal-body">
                                <div class="row">

                                    <div class="col-6">
                                        <div class="form-group">
                                            <label>Operator Name</label>
                                            <input v-model="form.name" type="text" name="name"
                                                class="form-control" :class="{ 'is-invalid': verrors.has('name') }"
                                                v-validate="'required'" data-vv-as="Operator name" :disabled="form.id!=''">
                                            <div v-if="verrors.has('name')" class="help-block invalid-feedback"> {{
                                                    verrors.first('name')
                                            }}</div>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label>Operator Phone</label>
                                            <input v-model="form.email" type="number" name="email"
                                                class="form-control"
                                                :disabled="form.id!=''">
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label>Operator Address</label>
                                            <input v-model="form.address" type="text" name="address"
                                                class="form-control" :class="{ 'is-invalid': verrors.has('address') }"
                                                v-validate="'required'" data-vv-as="address">
                                            <div v-if="verrors.has('address')" class="help-block invalid-feedback"> {{
                                                    verrors.first('address')
                                            }}</div>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label>State</label>
                                            <v-select label="name" :reduce="(option) => option.name" :options="states" placeholder="Enter State ..." v-model="form.state"
                                            :class="{ 'error': verrors.state, 'error': verrors.has('state'), 'haveValue': form.state }"
                                            data-vv-name="state"/>
                                            <div v-if="verrors.has('state')" class="help-block invalid-feedback"> {{
                                                    verrors.first('state')
                                            }}</div>
                                        </div>
                                    </div>
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
import VueTagsInput from '@johmun/vue-tags-input';

export default {
    components: {
        VueTagsInput,
    },
    data() {
        return {
            editmode: false,
            search:'',
            Operators: {},
            states:[],
            form: new Form({
                id: '',
                name: '',
                email:'',
                address: '',
                state: '',
            }),

              json_fields: {
                'Name': 'name',
                'Email': 'email',
                'Address': 'address',
                'State': 'state',
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
            const response = await axios.get('api/operator?export=1', {
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

            let cloaderd = this.$loading.show();
            axios.get('api/operator', {
                params: {
                    page: page,
                    search:this.search
                }
            }).then(({ data }) => {
                this.Operators = data.data
                cloaderd.hide();
            });

        },
        loadOperators() {
            let cloaderd = this.$loading.show();
            axios.get("api/operator").then(({ data }) => {
                this.Operators = data.data
                cloaderd.hide();
            });
        },
        loadCategories() {
            axios.get("/api/category/list").then(({ data }) => (this.categories = data.data));
        },

        editModal(Vendor) {
            this.editmode = true;
            this.form.reset();
            $('#addNew').modal('show');
            this.form.fill(Vendor);
        },
        newModal() {
            this.editmode = false;
            this.form.reset();
            $('#addNew').modal('show');
        },
        createOperator() {
            this.$validator.validateAll().then(async (valid) => {
                if (valid) {
                    this.verrors.clear();

                    this.form.post('api/operator')
                        .then((data) => {
                            if (data.data.success) {
                                $('#addNew').modal('hide');
                                Toast.fire({
                                    icon: 'success',
                                    title: data.data.message
                                });
                                this.loadOperators();
                            } else {
                                Toast.fire({
                                    icon: 'error',
                                    title: 'Some error occured! Please try again'
                                });
                            }
                        })
                        .catch(err => {
                            if (err.response && err.response.data) {
                                this.$setErrorsFromResponse(err.response.data);
                            }
                        })

                }
            })
        },
        updateOperator() {
            this.$validator.validateAll().then(async (valid) => {
                if (valid) {
                    this.verrors.clear();
                    this.form.put('api/operator/' + this.form.id)
                        .then((response) => {
                            // success
                            $('#addNew').modal('hide');
                            Toast.fire({
                                icon: 'success',
                                title: response.data.message
                            });
                            this.$Progress.finish();
                            //Fire.$emit('AfterCreate');
                            this.loadOperators();
                        })
                        .catch(err => {
                            if (err.response && err.response.data) {
                                this.$setErrorsFromResponse(err.response.data);
                            }
                        });
                }
            })
        },

        deleteOperator(id) {
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
                    this.form.delete('api/operator/' + id).then(() => {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        );
                        // Fire.$emit('AfterCreate');
                        this.loadOperators();
                    }).catch((data) => {
                        Swal.fire("Failed!", data.message, "warning");
                    });
                }
            })
        },

    },

    created() {
        this.loadOperators();
    },
     beforeCreate() {
            axios.get("api/getStates")
                .then((res) => {
                    this.states = res.data.data
                })
        },
}
</script>
