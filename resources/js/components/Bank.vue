<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row">

                <div class="col-12">

                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Bank List</h3>

                            <div class="card-tools">

                                <button type="button" class="btn btn-sm btn-primary" @click="newModal" v-if="$gate.hasPermission('can_add_state')">
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
                                        <th>Name</th>
                                        <th>Website Url</th>
                                        <th>Description</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(bank, x) in banks.data" :key="bank.id">

                                        <td>
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-primary btn-sm btn-toggle-custom" @click="editModal(bank)" :disabled="!$gate.hasPermission('can_edit_complaint_type')">Edit</button>
                                                <button type="button" class="btn btn-primary btn-sm dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <span class="sr-only">Toggle Dropdown</span>
                                                </button>
                                                <div class="dropdown-menu">
                                                    <a href="javascript:void(0);" @click="deleteState(bank.id)"
                                                        class="dropdown-item" v-if="$gate.hasPermission('can_delete_complaint_type')">
                                                        Delete
                                                    </a>
                                                </div>
                                            </div>
                                        </td>

                                        <td class="text-capitalize">{{ bank.bank_name }}</td>
                                        <td class="text-capitalize">{{ bank.website_url }}</td>
                                        <td class="text-capitalize">{{ bank.description }}</td>
                                        <td v-if="bank.status==1">Active</td>
                                        <td v-if="bank.status==0">Inactive</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- /.card-body -->
                        <div class="card-footer">
                            <pagination :data="banks" :limit="10" @pagination-change-page="getResults"></pagination>
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
                            <h5 class="modal-title" v-show="!editmode">Create New Bank</h5>
                            <h5 class="modal-title" v-show="editmode">Update Bank's Info</h5>
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
                                            <label>Name</label>
                                            <input v-model="form.bank_name" type="text" name="bank_name" class="form-control"
                                                :class="{ 'is-invalid': verrors.has('bank_name') }" v-validate="'required'"
                                                data-vv-as="bank_name" :disabled="form.id != ''">
                                            <div v-if="verrors.has('bank_name')" class="help-block invalid-feedback"> {{
                        verrors.first('bank_name')
                    }}</div>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="form-group">
                                            <label>Website url</label>
                                            <input v-model="form.website_url" type="text" name="website_url" class="form-control"
                                                :class="{ 'is-invalid': verrors.has('website_url') }" v-validate="'required'"
                                                data-vv-as="website_url" :disabled="form.id != ''">
                                            <div v-if="verrors.has('website_url')" class="help-block invalid-feedback"> {{
                        verrors.first('website_url')
                    }}</div>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="form-group">
                                        <label>Description</label>
                                        <textarea placeholder="Enter Description..."
                                            v-model="form.description" v-validate="''"
                                            :class="{ 'is-invalid': verrors.has('description') }"
                                            name="description" data-vv-as="description"
                                            :disabled="form.id != ''" class="form-control">
                                            </textarea>
                                        <div v-if="verrors.has('description')" class="help-block invalid-feedback">
                                            {{
                                                verrors.first('description')
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
            banks: {},
            states: [],
            role: [],
            cities: [],
            form: new Form({
                id: '',
                bank_name: '',
                website_url: '',
                description:''
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
        async export_csv() {
            const response = await axios.get('api/bank?export=1', {
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
            axios.get('api/bank', {
                params: {
                    page: page,
                    search: this.search
                }
            }).then(({ data }) => {
                console.log("after search results",data.data);
                this.banks = data.data;

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
                    this.form.put('api/bank/' + this.form.id)
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
                    this.form.delete('api/bank/' + id).then((response) => {

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

            axios.get('api/bank').then(({ data }) => {
                console.log("Bank data: ", data);
                this.banks = data.data;
                console.log("statelist",this.banks);

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
                    this.form.post('api/bank')
                        .then((response) => {
                            $('#addNew').modal('hide');

                            Toast.fire({
                                icon: 'success',
                                title: response.data.message
                            });

                            this.$Progress.finish();
                            this.loadStates();

                        })
                        .catch(err => {
                            if (err.response && err.response.data) {
                                this.$setErrorsFromResponse(err.response.data);
                            }
                        });
                }
            })
        }

    },
    mounted() {
        console.log('Bank Component mounted.');

    },
    created() {
        this.loadStates();
    },
    beforeCreate() {
        // const statesApi = axios.get("api/state");
        // const roleApi = axios.get("api/role");

        // // Call the APIs in parallel
        // axios.all([statesApi, roleApi])
        //     .then(axios.spread((statesRes, roleApi) => {
        //         // Handle the responses
        //         console.log("statesRes",statesRes);
        //         this.statelist = statesRes.data.data;
        //         this.role = roleApi.data.data.filter(role => role.name !== 'Developer');
        //     }))
        //     .catch(error => {
        //         console.error("There was an error fetching the data:", error);
        //         // Handle the error as needed
        //     });
        axios.get('api/bank').then(({ data }) => {
                console.log("data: ", data.data);
                this.banks = data.data;

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
