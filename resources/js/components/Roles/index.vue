<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row">

                <div class="col-12">

                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Roles</h3>

                            <div class="card-tools">

                                <button type="button" class="btn btn-sm btn-primary" @click="newModal" v-if="$gate.hasPermission('can_add_roles')">
                                    <i class="fa fa-plus-square"></i>
                                    Add New
                                </button>
                            </div>
                        </div>
                        <div class="card-body p-2">
                            <form autocomplete="off" @submit.prevent="getResults()">
                                <div class="form-row">
                                    <div class="col col-3 pt-2">
                                        <input placeholder="Search ..." v-model="search" class="form-control">
                                    </div>
                                    <div class="col col-3 pt-2">
                                        <button type="submit" class="btn btn-success">Search</button>
                                        <!-- <download-excel class="btn btn-warning ml-2" :fetch="export_csv" :fields="json_fields" :before-generate="startDownload"
                                        :before-finish="finishDownload" worksheet="My Worksheet" type="csv" name="user_list.csv">
                                        <span class="labelText">
                                            <i class="fa fa-file-excel-o" aria-hidden="true"></i>
                                            Export as CSV</span>
                                    </download-excel> -->
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
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Created At</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(user,x) in users.data" :key="user.id" v-if="user.name != 'Developer'">
                                        <td>
                                            <div class="btn-group" v-if="user.name != 'Super Admin'">
                                                <button type="button" class="btn btn-primary btn-sm btn-toggle-custom" @click="editModal(user)" :disabled="!$gate.hasPermission('can_edit_roles')">Edit</button>
                                                <button type="button" class="btn btn-primary btn-sm dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <span class="sr-only">Toggle Dropdown</span>
                                                </button>
                                                <div class="dropdown-menu">
                                                    <router-link :to="'/permissions/' + user.id" class="dropdown-item" v-if="$gate.hasPermission('can_view_permissions')">
                                                        Permissions
                                                    </router-link>
                                                    <a href="javascript:void(0);" @click="deleteData(user.id)" class="dropdown-item" v-if="$gate.hasPermission('can_delete_roles')">
                                                        Delete
                                                    </a>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="text-capitalize">{{ user.name }}</td>
                                        <td class="text-capitalize">{{ user.description }}</td>
                                        <td>{{ user.created_at | myDate }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- /.card-body -->
                        <div class="card-footer">
                            <pagination :data="users" :limit="10" @pagination-change-page="loadRoles" v-if="users"></pagination>
                        </div>
                    </div>
                    <!-- /.card -->
                </div>
            </div>


            <!-- <div v-if="!$gate.isAdmin()">
                <not-found></not-found>
            </div> -->

            <!-- Modal -->
            <div class="modal fade" id="addNew" tabindex="-1" role="dialog" aria-labelledby="addNew" aria-hidden="true">
                <div class="modal-dialog modal-md" role="document">
                    <div class="modal-content ">
                        <div class="modal-header">
                            <h5 class="modal-title" v-show="!editmode">Create Role</h5>
                            <h5 class="modal-title" v-show="editmode">Update Role</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <!-- <form @submit.prevent="createUser"> -->

                        <form @submit.prevent="editmode ? updateRole() : createRole()">
                            <div class="modal-body">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label>Role Name</label>
                                            <input v-model="form.name" type="text" name="name" class="form-control"
                                                :class="{ 'is-invalid': verrors.name }" v-validate="'required'"
                                                data-vv-as="name">
                                            <div v-if="verrors.name" class="help-block invalid-feedback"> {{ verrors.name[0] }}</div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label>Description</label>
                                            <input v-model="form.description" type="text" name="description" class="form-control"
                                                :class="{ 'is-invalid': verrors.description }"
                                                v-validate="'required'" data-vv-as="description">
                                            <div v-if="verrors.description" class="help-block invalid-feedback"> {{ verrors.description[0] }}</div>
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
            verrors: {},
            editmode: false,
            search:'',
            users: {},
            form: new Form({
                id: '',
                name: '',
                description: ''
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
                }, ],
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
        updateRole() {
            if (this.form.name.toLowerCase() === 'developer') {
                this.verrors = { name: ['The role "Developer" cannot be created as it is a booked role for system'] };
                return;
            }
            this.$validator.validateAll().then(async (valid) => {
                if (valid) {
                    this.verrors = {};
                    this.$Progress.start();
                    // console.log('Editing data');
                    this.form.put('api/role/' + this.form.id)
                        .then((response) => {
                            // success
                            $('#addNew').modal('hide');

                            if(response.data.success){
                                Toast.fire({
                                    icon: 'success',
                                    title: response.data.message
                                });
                            }else{
                                Toast.fire({
                                    icon: 'failure',
                                    title: response.data.message
                                });
                            }
                           
                            this.$Progress.finish();
                            //  Fire.$emit('AfterCreate');

                            this.loadRoles();
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
            this.verrors = {};
            $('#addNew').modal('show');
            this.form.fill(user);
        },
        newModal() {
            this.editmode = false;
            this.form.reset();
            this.verrors = {};
            $('#addNew').modal('show');
        },
        deleteData(id) {
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
                    this.form.delete('api/role/' + id).then(() => {
                        if(response.data.success){
                            Swal.fire(
                                'Deleted!',
                                'Data has been deleted.',
                                'success'
                            );
                        }
                        // Fire.$emit('AfterCreate');
                        this.loadRoles();
                    }).catch((data) => {
                        Toast.fire({
                            icon: 'failure',
                            title: data.data.message
                        });
                    });
                }
            })
        },
        loadRoles(page = 1) {
            let cloaderd = this.$loading.show();

            axios.get("api/role", {
                params:{
                    page: page,
                    search:this.search
                }
            }).then(({ data }) => {
                this.users = data.data
                cloaderd.hide();
            });
        },

        createRole() {
            if (this.form.name.toLowerCase() === 'developer') {
                this.verrors = { name: ['The role "Developer" cannot be created as it is a booked role for system'] };
                return;
            }
            this.$validator.validateAll().then(async (valid) => {
                if (valid) {
                    this.verrors = {};
                    this.form.post('api/role')
                        .then((response) => {

                            $('#addNew').modal('hide');

                            if(response.data.success == false){
                                Toast.fire({
                                    icon: 'failure',
                                    title: response.data.message
                                });
                                
                            }else{
                                Toast.fire({
                                    icon: 'success',
                                    title: response.data.message
                                });
                            }

                            this.loadRoles();

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
        console.log('User Component mounted.')
    },
    created() {
        this.loadRoles();
    },
    beforeCreate() {
    },
}
</script>
