<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row">

                <div class="col-12">

                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Custodian List</h3>

                            <div class="card-tools">

                                <button type="button" class="btn btn-sm btn-primary" @click="newModal" v-if="$gate.hasPermission('can_add_call_center')">
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
                                        <download-excel class="btn btn-warning ml-2" :fetch="export_csv"
                                            :fields="json_fields" :before-generate="startDownload"
                                            :before-finish="finishDownload" worksheet="My Worksheet" type="csv"
                                            name="state_list.csv">
                                            <span class="labelText">
                                                <i class="fa fa-file-excel-o" aria-hidden="true"></i>
                                                Export as CSV</span>
                                        </download-excel>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body ticketLstTbl table-responsive p-0">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th class="stickey">Action</th>
                                        <th>Employee Id</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Mobile</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(custodian, x) in custodians.data" :key="custodian.id">

                                        <td>
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-primary btn-sm btn-toggle-custom" @click="editModal(custodian)" :disabled="!$gate.hasPermission('can_edit_complaint_type')">Edit</button>
                                                <button type="button" class="btn btn-primary btn-sm dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <span class="sr-only">Toggle Dropdown</span>
                                                </button>
                                                <div class="dropdown-menu">
                                                    <a href="javascript:void(0);" @click="deleteState(custodian.id)"
                                                        class="dropdown-item" v-if="$gate.hasPermission('can_delete_complaint_type')">
                                                        Delete
                                                    </a>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="text-capitalize">{{ custodian.user_code }}</td>
                                        <td class="text-capitalize">{{ custodian.name }}</td>
                                        <td class="text-capitalize">{{ custodian.email }}</td>
                                        <td class="text-capitalize">{{ custodian.mobile }}</td>
                                        <td class="text-capitalize">{{ custodian.status }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- /.card-body -->
                        <div class="card-footer">
                            <pagination :data="custodians" :limit="10" @pagination-change-page="getResults"></pagination>
                        </div>
                    </div>
                    <!-- /.card -->
                </div>
            </div>

<!--
            <div v-if="!$gate.isAdmin()">
                <not-found></not-found>
            </div> -->

            <!-- Modal -->
            <div class="modal fade" id="addNew" tabindex="-1" role="dialog" aria-labelledby="addNew" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content ">
                        <div class="modal-header">
                            <h5 class="modal-title" v-show="!editmode">Create New custodian</h5>
                            <h5 class="modal-title" v-show="editmode">Update custodian's Info</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <!-- <form @submit.prevent="createState"> -->

                        <form @submit.prevent="editmode ? updateState() : createState()">
                            <div class="modal-body">
                                <div class="row">
                                    <div class="col-4">
                                        <div class="form-group">
                                            <label>Employee Id</label>
                                            <input v-model="form.user_code" type="text" name="user_code" class="form-control"
                                                :class="{ 'is-invalid': verrors.has('user_code') }" v-validate="'required'"
                                                data-vv-as="user_code" :disabled="form.id != ''">
                                            <div v-if="verrors.has('user_code')" class="help-block invalid-feedback"> {{
                        verrors.first('user_code')
                    }}</div>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="form-group">
                                            <label>Name</label>
                                            <input v-model="form.name" type="text" name="name" class="form-control"
                                                :class="{ 'is-invalid': verrors.has('name') }" v-validate="'required'"
                                                data-vv-as="name" :disabled="form.id != ''">
                                            <div v-if="verrors.has('name')" class="help-block invalid-feedback"> {{
                        verrors.first('name')
                    }}</div>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="form-group">
                                            <label>Email</label>
                                            <input v-model="form.email" type="text" name="email" class="form-control"
                                                :class="{ 'is-invalid': verrors.has('email') }" v-validate="'required'"
                                                data-vv-as="email" :disabled="form.id != ''">
                                            <div v-if="verrors.has('email')" class="help-block invalid-feedback"> {{
                        verrors.first('email')
                    }}</div>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="form-group">
                                            <label>Mobile Number</label>
                                            <input v-model="form.mobile" type="text" name="mobile" class="form-control"
                                                :class="{ 'is-invalid': verrors.has('mobile') }" v-validate="'required'"
                                                data-vv-as="mobile" :disabled="form.id != ''">
                                            <div v-if="verrors.has('mobile')" class="help-block invalid-feedback"> {{
                        verrors.first('mobile')
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
export default {
    data() {
        return {
            editmode: false,
            search: '',
            users: {},
            custodians: {},
            clients: [],
            banks: [],
            cities: [],
            bnaoptions:['Yes','No'],
            form: new Form({
                id: '',
                name: '',
                email: '',
                mobile: '',
                user_code: '',
            }),
            json_fields: {
                'name': 'name',
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
        onFileChange(e) {
      this.form.photo = e.target.files[0];
    },
    async submitForm() {
      const formData = new FormData();
      formData.append('id', this.form.id);
      formData.append('name', this.form.name);
      formData.append('email', this.form.email);
      formData.append('mobile', this.form.mobile);
      formData.append('user_code', this.form.user_code);
      try {
        const response = await axios.post('api/custodian', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        $('#addNew').modal('hide');

        Toast.fire({
            icon: 'success',
            title: response.data.message
        });

        this.$Progress.finish();
        this.loadStates();

        alert(response.data.success);
      } catch (error) {
        console.error(error);
        alert('Form submission failed.');
      }
    },
        async export_csv() {
            const response = await axios.get('api/custodian?export=1', {
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
            axios.get('api/custodian', {
                params: {
                    page: page,
                    search: this.search
                }
            }).then(({ data }) => {
                console.log("after search results",data.data);
                this.custodians = data.data;

                cloaderd.hide();
            }).catch(err => {
                cloaderd.hide();
                if (err.response && err.response.data) {
                    this.$setErrorsFromResponse(err.response.data);
                }
            });
        },
        updateState() {
            this.$validator.validateAll().then(async (valid) => {
                if (valid) {
                    this.verrors.clear();
                    let cloaderd = this.$loading.show();
                    // console.log('Editing data');
                    this.form.put('api/custodian/' + this.form.id)
                        .then((response) => {
                            // success
                            $('#addNew').modal('hide');
                            Toast.fire({
                                icon: 'success',
                                title: response.data.message
                            });
                            cloaderd.hide();
                            //  Fire.$emit('AfterCreate');

                            this.loadStates();
                        })
                        .catch(err => {
                            if (err.response && err.response.data) {
                                this.$setErrorsFromResponse(err.response.data);
                            }
                        });
                }
            })
        },
        editModal(state) {
            this.editmode = true;
            this.form.reset();
            this.verrors.clear();
            $('#addNew').modal('show');
            state.is_bna= state.is_bna == 1 ? "Yes" : "No";

            this.form.fill(state);
        },
        newModal() {
            this.editmode = false;
            this.form.reset();
            this.verrors.clear();
            $('#addNew').modal('show');
        },
        deleteState(id) {
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
                    this.form.delete('api/custodian/' + id).then((response) => {

                        if(response.data.success){
                            Toast.fire({
                                icon: 'success',
                                title: 'Data has been deleted'
                            });
                        }

                        this.loadStates();
                    }).catch((data) => {
                        Toast.fire({
                            icon: 'success',
                            title: data.data.message
                        });
                    });
                }
            })
        },
        loadStates() {
            let cloaderd = this.$loading.show();

            // if (this.$gate.isAdmin()) {
            //     axios.get("api/user").then(({ data }) => (this.users = data.data));
            // }

            axios.get('api/custodian').then(({ data }) => {
                console.log("custodian data: ", data);
                this.custodians = data.data;
                console.log("statelist",this.custodians);

                // this.users.data.forEach((element, index) => {
                //     if(element.role.length > 0){
                //         element.role_id = element.role[0].id;
                //     }
                // });

                cloaderd.hide();
            }).catch(err => {
                cloaderd.hide();
                if (err.response && err.response.data) {
                    this.$setErrorsFromResponse(err.response.data);
                }
            });
        },

        createState() {
            this.$validator.validateAll().then(async (valid) => {
                if (valid) {
                    this.verrors.clear();
                    this.submitForm();
                    // this.form.post('api/custodian')
                    //     .then((response) => {
                    //         $('#addNew').modal('hide');

                    //         Toast.fire({
                    //             icon: 'success',
                    //             title: response.data.message
                    //         });

                    //         this.$Progress.finish();
                    //         this.loadStates();

                    //     })
                    //     .catch(err => {
                    //         if (err.response && err.response.data) {
                    //             this.$setErrorsFromResponse(err.response.data);
                    //         }
                        // });
                }
            })
        }

    },
    mounted() {
        console.log('custodian Component mounted.');

    },
    created() {
        this.loadStates();
    },
    beforeCreate() {
        const clientsApi = axios.get("api/getClients");
        const bankApi = axios.get("api/getBanks");

        // Call the APIs in parallel
        axios.all([clientsApi, bankApi])
            .then(axios.spread((clientRes, banksRes) => {
                // Handle the responses
                console.log("statesRes",banksRes);
                this.clients = clientRes.data.data;
                this.banks = banksRes.data.data;

            }))
            .catch(error => {
                console.error("There was an error fetching the data:", error);
                // Handle the error as needed
            });
            console.log("after fetch clients:",this.clients);
        axios.get('api/custodian').then(({ data }) => {
                console.log("data: ", data.data);
                this.custodians = data.data;

                // this.users.data.forEach((element, index) => {
                //     if(element.role.length > 0){
                //         element.role_id = element.role[0].id;
                //     }
                // });

                cloaderd.hide();
            }).catch(err => {
                cloaderd.hide();
                if (err.response && err.response.data) {
                    this.$setErrorsFromResponse(err.response.data);
                }
            });
    },
    watch: {
        'form.state': {
            immediate: true,
            handler(n) {
                if (n) {
                    axios.get("api/getCities", {
                        params: {
                            'state': n
                        }
                    })
                        .then((res) => {
                            this.cities = res.data.data
                        })
                }
            }
        },
    },
}
</script>
