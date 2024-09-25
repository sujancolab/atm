<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row">

                <div class="col-12">

                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Category List</h3>

                            <div class="card-tools">

                                <button type="button" class="btn btn-sm btn-primary" @click="newModal" v-if="$gate.hasPermission('can_add_category')">
                                    <i class="fa fa-plus-square"></i>
                                    Add New
                                </button>
                            </div>
                        </div>
                        <div class="card-body p-2">
                            <form autocomplete="off" @submit.prevent="getResults()">
                                <div class="form-row">
                                    <div class="col col-3 pt-2">
                                        <input placeholder="Enter Category ..." v-model="search" class="form-control">
                                    </div>
                                    <div class="col col-3 pt-2 btn-group" role="group">
                                        <button type="submit" class="btn btn-success">Search</button>
                                         <download-excel class="btn btn-warning ml-2" :fetch="export_csv"
                                             :fields="json_fields" :before-generate="startDownload"
                                             :before-finish="finishDownload" worksheet="My Worksheet" type="csv"
                                             name="category_list.csv">
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
                                        <th class="stickey">Action</th>
                                        <th>Name</th>
                                        <th>Parent Category</th>
                                        <th>Created By</th>
                                        <th>Created On</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(category, x) in categories.data" :key="category.id">
                                        <td>
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-primary btn-sm btn-toggle-custom" @click="editModal(category)" :disabled="!$gate.hasPermission('can_edit_category')">Edit</button>
                                                <button type="button" class="btn btn-primary btn-sm dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <span class="sr-only">Toggle Dropdown</span>
                                                </button>
                                                <div class="dropdown-menu">
                                                    <router-link :to="'/machines/category/settings/' + category.id"
                                                    class="dropdown-item" v-if="!category.parent_category && $gate.hasPermission('can_edit_category_pm')">PM
                                                    Settings</router-link>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="text-capitalize">{{ category.name }}</td>
                                        <td>{{ category.parent_category ? category.parent_category.name : '-' }}</td>
                                        <td>{{ category.created_by_name }}</td>
                                        <td>{{ category.created_at | myDate }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- /.card-body -->
                        <div class="card-footer">
                            <pagination :data="categories" :limit="10" @pagination-change-page="getResults"></pagination>
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
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" v-show="!editmode">Create New Category</h5>
                            <h5 class="modal-title" v-show="editmode">Update Category</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <!-- <form @submit.prevent="createUser"> -->

                        <form @submit.prevent="editmode ? updateCategory() : createCategory()">
                            <div class="modal-body">
                                <div class="form-group">
                                    <label>Name</label>
                                    <input v-model="form.name" type="text" name="name" class="form-control"
                                        :class="{ 'is-invalid': form.errors.has('name') }">
                                    <has-error :form="form" field="name"></has-error>
                                </div>
                                <div class="form-group">
                                    <label>Parent Category</label>
                                    <v-select label="name" :reduce="(option) => option.id" :options="parent_categories"
                                        placeholder="Select Parent category ..." v-model="form.parent_id"
                                        :class="{ 'is-invalid': form.errors.has('parent_id') }">
                                    </v-select>
                                    <has-error :form="form" field="parent_id"></has-error>
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
            categories: {},
            parent_categories: [],
            form: new Form({
                id: '',
                name: '',
                parent_id: '',
            }),

            json_fields: {
                'Category Name': 'name',
                'Parent Category Name': {
                    field: 'parent_category',
                    callback: (value) => {
                        return value ? value.name : '-';
                    }
                },
                'Created By':'created_by_name',

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
                const response = await axios.get('api/category?export=1', {
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
            axios.get('/api/category', {
                params: {
                    page: page,
                    search: this.search
                }
            }).then(({
                data
            }) => {
                this.categories = data.data
                cloaderd.hide()
            });
           
        },
        updateCategory() {
            let cloaderd = this.$loading.show();
            this.form.put('/api/category/' + this.form.id)
                .then((response) => {
                    // success
                    $('#addNew').modal('hide');
                    Toast.fire({
                        icon: 'success',
                        title: response.data.message
                    });
                    cloaderd.hide()
                    //  Fire.$emit('AfterCreate');
                    this.loadCategories();
                })
                .catch(() => {
                    cloaderd.hide()
                });

        },
        editModal(category) {
            this.editmode = true;
            this.form.reset();
            $('#addNew').modal('show');
            this.form.fill(category);
        },
        newModal() {
            this.editmode = false;
            this.form.reset();
            $('#addNew').modal('show');
        },

        loadCategories() {
            let cloaderd = this.$loading.show();
                axios.get("/api/category").then(({
                    data
                }) => {
                    this.categories = data.data
                    cloaderd.hide()
                });
                this.get_parent_cat();
            // }
        },

        createCategory() {
            let cloaderd = this.$loading.show();
            this.form.post('/api/category')
                .then((response) => {
                    $('#addNew').modal('hide');
                    Toast.fire({
                        icon: 'success',
                        title: response.data.message
                    });
                    cloaderd.hide()
                    this.loadCategories();
                })
                .catch(() => {
                    Toast.fire({
                        icon: 'error',
                        title: 'Some error occured! Please try again'
                    });
                })
        },

        async get_parent_cat() {
            axios.get("/api/category/list").then(({
                data
            }) => (this.parent_categories = data.data));
        }
    },

    created() {
        this.loadCategories();
    }
}
</script>
