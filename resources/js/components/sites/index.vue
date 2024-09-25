<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row">

                <div class="col-12">

                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Site List</h3>
                            <div class="card-tools">
                                <button type="button" class="btn btn-sm btn-primary" @click="newModal" v-if="$gate.hasPermission('can_add_site')">
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
                                        <download-excel class="btn btn-warning" :fetch="export_csv"
                                            :fields="json_fields" :before-generate="startDownload"
                                            :before-finish="finishDownload" worksheet="My Worksheet" type="csv" name="site_list.csv">
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
                                        <th>Site ID</th>
                                        <th>Site Name</th>
                                        <th>Site Address</th>
                                        <th>State</th>
                                        <th>City</th>
                                        <th>Pin Code</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="Site in Sites.data" :key="Site.id">
                                        <td>
                                            <a href="javascript:void(0);" @click="editModal(Site)" class="btn btn-primary btn-sm btn-toggle-custom"
                                            v-if="$gate.hasPermission('can_edit_site')">
                                                Edit
                                            </a>
                                        </td>
                                        <td>{{ Site.site_id }}</td>
                                        <td class="truncate" :title="Site.site_name" style="min-width: 280px;">{{ Site.site_name }}</td>
                                        <td class="truncate" :title="Site.address" style="min-width: 280px;">{{ Site.address }}</td>
                                        <td>{{ Site.state }}</td>
                                        <td>{{ Site.city }}</td>
                                        <td>{{ Site.zip_code }}</td>
                                        <!-- <td><img v-bind:src="'/' + Site.photo" width="100" alt="Site"></td> -->
                                       
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- /.card-body -->
                        <div class="card-footer">
                            <pagination :data="Sites" @pagination-change-page="getResults" v-if="Sites"></pagination>
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
                            <h5 class="modal-title" v-show="!editmode">Create New Site</h5>
                            <h5 class="modal-title" v-show="editmode">Edit Site</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <form @submit.prevent="editmode ? updateSite() : createSite()">
                            <div class="modal-body">
                                <div class="row">
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label>Site Id</label>
                                            <input v-model="form.site_id" type="text" name="site_id"
                                                v-validate="'required'" data-vv-as="Site Id" class="form-control"
                                                :class="{ 'is-invalid': verrors.has('site_id') }"
                                                :disabled="form.id!=''">
                                            <div v-if="verrors.has('site_id')" class="help-block invalid-feedback"> {{
                                                    verrors.first('site_id')
                                            }}</div>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label>Site Name</label>
                                            <input v-model="form.site_name" type="text" name="site_name"
                                                class="form-control" :class="{ 'is-invalid': verrors.has('site_name') }"
                                                v-validate="'required'" data-vv-as="site name" :disabled="form.id!=''">
                                            <div v-if="verrors.has('site_name')" class="help-block invalid-feedback"> {{
                                                    verrors.first('site_name')
                                            }}</div>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label>Site Address</label>
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
                                            <v-select label="name" :reduce="(option) => option.name" :options="states"
                                                placeholder="Enter State ..." v-model="form.state"
                                                v-validate="'required'"
                                                :class="{ 'error': verrors.state, 'error': verrors.has('state'), 'haveValue': form.state }"
                                                data-vv-name="state" />
                                            <div v-if="verrors.has('state')" class="help-block invalid-feedback">
                                                {{verrors.first('state')}}</div>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label>City</label>
                                            <v-select label="name" :reduce="(option) => option.name" :options="cities"
                                                placeholder="Enter City ..." v-model="form.city" v-validate="'required'"
                                                :class="{ 'error': verrors.city, 'error': verrors.has('city'), 'haveValue': form.city }"
                                                data-vv-name="city" />
                                            <div v-if="verrors.has('city')" class="help-block invalid-feedback">
                                                {{verrors.first('city')}}</div>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label>Pin Code</label>
                                            <input v-model="form.zip_code" type="text" name="zip_code"
                                                class="form-control" :class="{ 'is-invalid': verrors.has('zip_code') }"
                                                v-validate="'required|integer|min:6|max:6'" data-vv-as="Pin code">
                                            <div v-if="verrors.has('zip_code')" class="help-block invalid-feedback"> {{
                                                    verrors.first('zip_code')
                                            }}</div>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label>Allocate Users </label>
                                            <v-select multiple label="name" :reduce="(option) => option.id"
                                                :options="users" placeholder="Enter users ..."
                                                v-model="form.allocate_user" v-validate="'required'"
                                                :class="{ 'is-invalid': verrors.has('allocate_user') }"
                                                name="allocate_user" data-vv-as="Allocate Users">
                                            </v-select>

                                            <div v-if="verrors.has('allocate_user')"
                                                class="help-block invalid-feedback">
                                                {{ verrors.first('allocate_user') }}</div>
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
            search: '',
            editmode: false,
            Sites: {},
            states: [],
            cities: [],
            form: new Form({
                id: '',
                site_id: '',
                site_name: '',
                address: '',
                state: '',
                city: '',
                zip_code: '',
                allocate_user: []
            }),
            categories: [],

            users: [],
            tag: '',
            autocompleteItems: [],
            json_fields: {
                'Site Id': 'site_id',
                'Site Name': 'site_name',
                'Address': 'address',
                'State': 'state',
                'City': 'city',
                'Zip Code': 'zip_code',
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
            const response = await axios.get('api/site?export=1', {
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
            axios.get('api/site', {
                params: {
                    page: page,
                    search: this.search
                }
            }).then(({
                data
            }) => {
                this.Sites = data.data
                cloaderd.hide();
            });
        },
        loadSites() {
            let cloaderd = this.$loading.show();;
            axios.get("api/site").then(({
                data
            }) => {
                this.Sites = data.data
                cloaderd.hide();
            });
        },
        loadCategories() {
            axios.get("/api/category/list").then(({
                data
            }) => (this.categories = data.data));
        },
        loadTags() {
            axios.get("/api/user",{
                params:{
                    list: 'list'
                }
            }).then(response => {
                this.users = response.data.data;
                this.autocompleteItems = response.data.data.map(a => {
                    return {
                        text: a.name,
                        id: a.id
                    };
                });
            }).catch(() => console.warn('Oh. Something went wrong'));
        },
        editModal(Site) {
            this.editmode = true;
            this.form.reset();
            $('#addNew').modal('show');
            this.form.fill(Site);
            //this.form.allocate_user=[2]
            this.form.allocate_user = Site.allocate_users.map(g => g.id);
        },
        newModal() {
            this.editmode = false;
            this.form.reset();
            $('#addNew').modal('show');
        },
        createSite() {
            this.$validator.validateAll().then(async (valid) => {
                if (valid) {
                    this.verrors.clear();

                    this.form.post('api/site')
                        .then((data) => {
                            if (data.data.success) {
                                $('#addNew').modal('hide');
                                Toast.fire({
                                    icon: 'success',
                                    title: data.data.message
                                });
                                this.loadSites();
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
        updateSite() {
            this.$validator.validateAll().then(async (valid) => {
                if (valid) {
                    this.verrors.clear();
                    this.form.put('api/site/' + this.form.id)
                        .then((response) => {
                            // success
                            $('#addNew').modal('hide');
                            Toast.fire({
                                icon: 'success',
                                title: response.data.message
                            });
                            this.$Progress.finish();
                            //Fire.$emit('AfterCreate');
                            this.loadSites();
                        })
                        .catch(err => {
                            if (err.response && err.response.data) {
                                this.$setErrorsFromResponse(err.response.data);
                            }
                        });
                }
            })
        },

        deleteSite(id) {
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
                    this.form.delete('api/site/' + id).then(() => {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        );
                        // Fire.$emit('AfterCreate');
                        this.loadSites();
                    }).catch((data) => {
                        Swal.fire("Failed!", data.message, "warning");
                    });
                }
            })
        },

    },
    mounted() {

    },
    created() {
        this.$Progress.start();

        this.loadSites();
        // this.loadCategories();
        this.loadTags();

        this.$Progress.finish();
    },
    filters: {
        truncate: function (text, length, suffix) {
            return text.substring(0, length) + suffix;
        },
    },
    computed: {
        filteredItems() {
            return this.autocompleteItems.filter(i => {
                return i.text.toLowerCase().indexOf(this.tag.toLowerCase()) !== -1;
            });
        },
    },
    beforeCreate() {
        axios.get("api/getStates")
            .then((res) => {
                this.states = res.data.data
            })
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
