<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row">

                <div class="col-12">

                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">User List</h3>

                            <div class="card-tools">

                                <button type="button" class="btn btn-sm btn-primary" @click="newModal" v-if="$gate.hasPermission('can_add_user')">
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
                                            name="user_list.csv">
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
                                        <th>Role</th>
                                        <th>Name</th>
                                        <th>Email / User Name</th>
                                        <th>Created At</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(user, x) in users.data" :key="user.id">

                                        <td>
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-primary btn-sm btn-toggle-custom" @click="editModal(user)" :disabled="!$gate.hasPermission('can_edit_user')">Edit</button>
                                                <button type="button" class="btn btn-primary btn-sm dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <span class="sr-only">Toggle Dropdown</span>
                                                </button>
                                                <div class="dropdown-menu">
                                                    <a href="javascript:void(0);" @click="deleteUser(user.id)"
                                                        class="dropdown-item" v-if="$gate.hasPermission('can_delete_user')">
                                                        Delete
                                                    </a>
                                                </div>
                                            </div>
                                        </td>

                                        <td class="text-capitalize">{{  user.role.length > 0? user.role[0].name : '-' }}</td>
                                        <td class="text-capitalize">{{ user.name }}</td>
                                        <td>{{ user.email }}</td>
                                        <td>{{ user.created_at | myDate }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- /.card-body -->
                        <div class="card-footer">
                            <pagination :data="users" :limit="10" @pagination-change-page="getResults"></pagination>
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
                            <h5 class="modal-title" v-show="!editmode">Create New User</h5>
                            <h5 class="modal-title" v-show="editmode">Update User's Info</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <!-- <form @submit.prevent="createUser"> -->

                        <form @submit.prevent="editmode ? updateUser() : createUser()">
                            <div class="modal-body">
                                <div class="row">
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
                                                :class="{ 'is-invalid': verrors.has('email') }"
                                                v-validate="'required|email'" data-vv-as="email"
                                                :disabled="form.id != ''">
                                            <div v-if="verrors.has('email')" class="help-block invalid-feedback"> {{
                        verrors.first('email')
                    }}</div>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="form-group">
                                            <label>Password</label>
                                            <input v-model="form.password" type="password" name="password"
                                                class="form-control" :class="{ 'is-invalid': verrors.has('password') }"
                                                v-validate="{ required: form.id ? false : true }" data-vv-as="password">
                                            <div v-if="verrors.has('password')" class="help-block invalid-feedback"> {{
                        verrors.first('password')
                    }}</div>
                                        </div>
                                    </div>
                                    <div class="col-3">
                                        <div class="form-group">
                                            <label>Address</label>
                                            <input v-model="form.address" type="text" name="address"
                                                class="form-control" :class="{ 'is-invalid': verrors.has('address') }"
                                                v-validate="'required'" data-vv-as="address">
                                            <div v-if="verrors.has('address')" class="help-block invalid-feedback"> {{
                                                    verrors.first('address')
                                                }}</div>
                                        </div>
                                    </div>
                                    <div class="col-3">
                                        <div class="form-group">
                                            <label>State</label>
                                            <v-select label="name" :reduce="(option) => option.name" :options="states"
                                                placeholder="Enter State ..." v-model="form.state"
                                                v-validate="'required'"
                                                :class="{ 'error': verrors.state, 'error': verrors.has('state'), 'haveValue': form.state }"
                                                data-vv-name="state" />
                                            <div v-if="verrors.has('state')" class="help-block invalid-feedback">
                                                {{ verrors.first('state') }}</div>
                                        </div>
                                    </div>
                                    <div class="col-3">
                                        <div class="form-group">
                                            <label>City</label>
                                            <v-select v-model="form.city" label="name" :reduce="(option) => option.name" :options="cities"
                                                placeholder="Enter City ..." v-validate="'required'"
                                                :class="{ 'error': verrors.city, 'error': verrors.has('city'), 'haveValue': form.city }"
                                                data-vv-name="city" />
                                            <div v-if="verrors.has('city')" class="help-block invalid-feedback">
                                                {{ verrors.first('city') }}</div>
                                        </div>
                                    </div>
                                    <div class="col-3">
                                        <div class="form-group">
                                            <label>Pin Code</label>
                                            <input v-model="form.zip_code" type="text" name="zip_code"
                                                class="form-control" :class="{ 'is-invalid': verrors.has('zip_code') }"
                                                v-validate="'required|integer|min:6|max:6'" data-vv-as="Pin code">
                                            <div v-if="verrors.has('zip_code')" class="help-block invalid-feedback"> {{
                                                    verrors.first('zip_code')
                                                }}
                                            </div>
                                        </div>

                                    </div>
                                    <div class="col-3">
                                        <div class="form-group">
                                            <label>User Role</label>
                                            <v-select v-model="form.role_id" label="name" :reduce="(option) => option.id"
                                                :options="role" placeholder="Select Role ..." v-validate="'required'"
                                                :class="{ 'error': verrors.role, 'error': verrors.has('role'), 'haveValue': form.role }"
                                                data-vv-name="role" />
                                            <div v-if="verrors.has('role')" class="help-block invalid-feedback">
                                                {{ verrors.first('role') }}</div>
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
            states: [],
            role: [],
            cities: [],
            form: new Form({
                id: '',
                name: '',
                type: '',
                email: '',
                password: '',
                email_verified_at: '',
                contact_no: '',
                user_name: '',
                address: '',
                state: '',
                city: '',
                zip_code: '',
                role_id: '',
            }),
            json_fields: {
                'name': 'name',
                "User Type": 'type',
                "Email": "email",
                "Contact No": 'contact_no',
                "User Name": 'user_name',
                "Address": 'address',
                "State": 'state',
                "City": 'city',
                "Zip Code": 'zip_code'
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
            const response = await axios.get('api/user?export=1', {
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
            axios.get('api/user', {
                params: {
                    page: page,
                    search: this.search
                }
            }).then(({ data }) => {
                this.users = data.data;

                this.users.data.forEach((element, index) => {
                    if(element.role.length > 0){
                        element.role_id = element.role[0].id;
                    }
                });

                cloaderd.hide();
            }).catch(err => {
                cloaderd.hide();
                if (err.response && err.response.data) {
                    this.$setErrorsFromResponse(err.response.data);
                }
            });
        },
        updateUser() {
            this.$validator.validateAll().then(async (valid) => {
                if (valid) {
                    this.verrors.clear();
                    let cloaderd = this.$loading.show();
                    // console.log('Editing data');
                    this.form.put('api/user/' + this.form.id)
                        .then((response) => {
                            // success
                            $('#addNew').modal('hide');
                            Toast.fire({
                                icon: 'success',
                                title: response.data.message
                            });
                            cloaderd.hide();
                            //  Fire.$emit('AfterCreate');

                            this.loadUsers();
                        })
                        .catch(err => {
                            if (err.response && err.response.data) {
                                this.$setErrorsFromResponse(err.response.data);
                            }
                        });
                }
            })
        },
        editModal(user) {
            this.editmode = true;
            this.form.reset();
            this.verrors.clear();
            $('#addNew').modal('show');
            if(user.role.length > 0){
                user.role = user.role[0].name;
            }
            
            this.form.fill(user);
        },
        newModal() {
            this.editmode = false;
            this.form.reset();
            this.verrors.clear();
            $('#addNew').modal('show');
        },
        deleteUser(id) {
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
                    this.form.delete('api/user/' + id).then((response) => {

                        if(response.data.success){
                            Toast.fire({
                                icon: 'success',
                                title: 'Data has been deleted'
                            });
                        }

                        this.loadUsers();
                    }).catch((data) => {
                        Toast.fire({
                            icon: 'success',
                            title: data.data.message
                        });
                    });
                }
            })
        },
        loadUsers() {
            let cloaderd = this.$loading.show();

            // if (this.$gate.isAdmin()) {
            //     axios.get("api/user").then(({ data }) => (this.users = data.data));
            // }

            axios.get('api/user').then(({ data }) => {
                this.users = data.data;

                this.users.data.forEach((element, index) => {
                    if(element.role.length > 0){
                        element.role_id = element.role[0].id;
                    }
                });

                cloaderd.hide();
            }).catch(err => {
                cloaderd.hide();
                if (err.response && err.response.data) {
                    this.$setErrorsFromResponse(err.response.data);
                }
            });
        },

        createUser() {
            this.$validator.validateAll().then(async (valid) => {
                if (valid) {
                    this.verrors.clear();
                    this.form.post('api/user')
                        .then((response) => {
                            $('#addNew').modal('hide');

                            Toast.fire({
                                icon: 'success',
                                title: response.data.message
                            });

                            this.$Progress.finish();
                            this.loadUsers();

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
        console.log('User Component mounted.');
        
    },
    created() {
        this.loadUsers();
    },
    beforeCreate() {
        const statesApi = axios.get("api/getStates");
        const roleApi = axios.get("api/role");

        // Call the APIs in parallel
        axios.all([statesApi, roleApi])
            .then(axios.spread((statesRes, roleApi) => {
                // Handle the responses
                this.states = statesRes.data.data;
                this.role = roleApi.data.data.filter(role => role.name !== 'Developer');
            }))
            .catch(error => {
                console.error("There was an error fetching the data:", error);
                // Handle the error as needed
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
