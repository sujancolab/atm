<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row">

                <div class="col-12">

                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Vendor List</h3>

                            <div class="card-tools">

                                <button type="button" class="btn btn-sm btn-primary" @click="newModal" v-if="$gate.hasPermission('can_add_vendor')">
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
                                        <th>Vendor Name</th>
                                        <th>Address</th>
                                        <th>State</th>
                                        <th>Contact Person Name</th>
                                        <th>Mobile Number</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="Vendor in Vendors.data" :key="Vendor.id">
                                        <td>
                                            <a href="javascript:void(0);" @click="editModal(Vendor)" class="btn btn-primary btn-sm btn-toggle-custom" v-if="$gate.hasPermission('can_edit_vendor')">
                                                Edit
                                            </a>
                                        </td>
                                        <td class="truncate" :title="Vendor.name" style="min-width: 280px;">{{ Vendor.name }}</td>
                                        <td class="truncate" :title="Vendor.address" style="min-width: 280px;">{{ Vendor.address }}</td>
                                        <td>{{ Vendor.state }}</td>
                                        <td>{{ Vendor.contact_person_name }}</td>
                                        <td>{{ Vendor.contact_person_number }}</td>
                                        <td>{{ Vendor.email }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- /.card-body -->
                        <div class="card-footer">
                            <pagination :data="Vendors" :limit="10" @pagination-change-page="getResults" v-if="Vendors"></pagination>
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
                            <h5 class="modal-title" v-show="!editmode">Create New Vendor</h5>
                            <h5 class="modal-title" v-show="editmode">Edit Vendor</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <form @submit.prevent="editmode ? updateVendor() : createVendor()">
                            <div class="modal-body">
                                <div class="row">

                                    <div class="col-6">
                                        <div class="form-group">
                                            <label>Vendor Name</label>
                                            <input v-model="form.name" type="text" name="name"
                                                class="form-control" :class="{ 'is-invalid': verrors.has('name') }"
                                                v-validate="'required'" data-vv-as="Vendor name" :disabled="form.id!=''">
                                            <div v-if="verrors.has('name')" class="help-block invalid-feedback"> {{
                                                    verrors.first('name')
                                            }}</div>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label>Vendor Email</label>
                                            <input v-model="form.email" type="text" name="email"
                                                class="form-control" :class="{ 'is-invalid': verrors.has('email') }"
                                                v-validate="'required|email'" data-vv-as="email" :disabled="form.id!=''">
                                            <div v-if="verrors.has('email')" class="help-block invalid-feedback"> {{
                                                    verrors.first('email')
                                            }}</div>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label>Vendor Address</label>
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
                                            <v-select label="name" :reduce="(option) => option.name" :options="states" placeholder="Enter State ..." v-model="form.state" v-validate="'required'"
                                            :class="{ 'error': verrors.state, 'error': verrors.has('state'), 'haveValue': form.state }"
                                            data-vv-name="state"/>
                                            <div v-if="verrors.has('state')" class="help-block invalid-feedback"> {{
                                                    verrors.first('state')
                                            }}</div>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label>Contact Person Name</label>
                                            <input v-model="form.contact_person_name" type="text" name="contact_person_name" class="form-control"
                                                :class="{ 'is-invalid': verrors.has('contact_person_name') }" v-validate="'required'"
                                                data-vv-as="contact person name">
                                            <div v-if="verrors.has('contact_person_name')" class="help-block invalid-feedback"> {{
                                                    verrors.first('contact_person_name')
                                            }}</div>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label>Contact Person Number</label>
                                            <input v-model="form.contact_person_number" type="text" name="contact_person_number"
                                                class="form-control" :class="{ 'is-invalid': verrors.has('contact_person_number') }"
                                                v-validate="'required'" data-vv-as="Contact Person Name">
                                            <div v-if="verrors.has('contact_person_number')" class="help-block invalid-feedback"> {{
                                                    verrors.first('contact_person_number')
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
            Vendors: {},
            states:[],
            form: new Form({
                id: '',
                name: '',
                email:'',
                address: '',
                state: '',
                contact_person_name: '',
                contact_person_number: '',
            }),

              json_fields: {
                'Name': 'name',
                'Email': 'email',
                'Address': 'address',
                'State': 'state',
                'Contact Person Name': 'contact_person_name',
                'Contact Person Number': 'contact_person_number',
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
            const response = await axios.get('api/vendor?export=1', {
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
            axios.get('api/vendor', {
                    params: {
                        page: page,
                        search:this.search
                    }
                }).then(({ data }) => {
                    this.Vendors = data.data
                    cloaderd.hide();
                });
        },
        loadVendors() {
            let cloaderd = this.$loading.show();
            // if(this.$gate.isAdmin()){
            axios.get("api/vendor").then(({ data }) => {
                this.Vendors = data.data
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
        createVendor() {
            this.$validator.validateAll().then(async (valid) => {
                if (valid) {
                    this.verrors.clear();

                    this.form.post('api/vendor')
                        .then((data) => {
                            if (data.data.success) {
                                $('#addNew').modal('hide');
                                Toast.fire({
                                    icon: 'success',
                                    title: data.data.message
                                });
                                this.loadVendors();
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
        updateVendor() {
            this.$validator.validateAll().then(async (valid) => {
                if (valid) {
                    this.verrors.clear();
                    this.form.put('api/vendor/' + this.form.id)
                        .then((response) => {
                            // success
                            $('#addNew').modal('hide');
                            Toast.fire({
                                icon: 'success',
                                title: response.data.message
                            });
                            this.$Progress.finish();
                            //Fire.$emit('AfterCreate');
                            this.loadVendors();
                        })
                        .catch(err => {
                            if (err.response && err.response.data) {
                                this.$setErrorsFromResponse(err.response.data);
                            }
                        });
                }
            })
        },

        deleteVendor(id) {
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
                    this.form.delete('api/vendor/' + id).then(() => {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        );
                        // Fire.$emit('AfterCreate');
                        this.loadVendors();
                    }).catch((data) => {
                        Swal.fire("Failed!", data.message, "warning");
                    });
                }
            })
        },

    },

    created() {
        this.loadVendors();
    },
     beforeCreate() {
            axios.get("api/getStates")
                .then((res) => {
                    this.states = res.data.data
                })
        },
}
</script>
