<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">City List</h3>

                            <div class="card-tools">
                                <button
                                    type="button"
                                    class="btn btn-sm btn-primary"
                                    @click="newModal"
                                    v-if="$gate.hasPermission('can_add_user')"
                                >
                                    <i class="fa fa-plus-square"></i>
                                    Add New
                                </button>
                            </div>
                        </div>
                        <div class="card-body p-2">
                            <form
                                autocomplete="off"
                                @submit.prevent="getResults()"
                            >
                                <div class="form-row">
                                    <div class="col col-3 pt-2">
                                        <input
                                            placeholder="Enter ..."
                                            v-model="search"
                                            class="form-control"
                                        />
                                    </div>
                                    <div
                                        class="col col-3 pt-2 btn-group"
                                        role="group"
                                    >
                                        <button
                                            type="submit"
                                            class="btn btn-success"
                                        >
                                            Search
                                        </button>
                                        <download-excel
                                            class="btn btn-warning ml-2"
                                            :fetch="export_csv"
                                            :fields="json_fields"
                                            :before-generate="startDownload"
                                            :before-finish="finishDownload"
                                            worksheet="My Worksheet"
                                            type="csv"
                                            name="user_list.csv"
                                        >
                                            <span class="labelText">
                                                <i
                                                    class="fa fa-file-excel-o"
                                                    aria-hidden="true"
                                                ></i>
                                                Export as CSV</span
                                            >
                                        </download-excel>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <!-- /.card-header -->
                        <div
                            class="card-body ticketLstTbl table-responsive p-0"
                        >
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th class="stickey">Action</th>
                                        <th>Name</th>
                                        <th>District</th>
                                        <th>State</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        v-for="(city, x) in cities.data"
                                        :key="city.id"
                                    >
                                        <td>
                                            <div class="btn-group">
                                                <button
                                                    type="button"
                                                    class="btn btn-primary btn-sm btn-toggle-custom"
                                                    @click="editModal(city)"
                                                    :disabled="
                                                        !$gate.hasPermission(
                                                            'can_edit_city'
                                                        )
                                                    "
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    type="button"
                                                    class="btn btn-primary btn-sm dropdown-toggle dropdown-toggle-split"
                                                    data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                >
                                                    <span class="sr-only"
                                                        >Toggle Dropdown</span
                                                    >
                                                </button>
                                                <div class="dropdown-menu">
                                                    <a
                                                        href="javascript:void(0);"
                                                        @click="
                                                            deleteCity(city.id)
                                                        "
                                                        class="dropdown-item"
                                                        v-if="
                                                            $gate.hasPermission(
                                                                'can_delete_city'
                                                            )
                                                        "
                                                    >
                                                        Delete
                                                    </a>
                                                </div>
                                            </div>
                                        </td>

                                        <td class="text-capitalize">
                                            {{ city.city_name }}
                                        </td>
                                        <td class="text-capitalize">
                                            {{ city.district.district_name }}
                                        </td>
                                        <td>{{ city.state.name }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- /.card-body -->
                        <div class="card-footer">
                            <pagination
                                :data="cities"
                                :limit="10"
                                @pagination-change-page="getResults"
                            ></pagination>
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
            <div
                class="modal fade"
                id="addNew"
                tabindex="-1"
                role="dialog"
                aria-labelledby="addNew"
                aria-hidden="true"
            >
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" v-show="!editmode">
                                Create New City
                            </h5>
                            <h5 class="modal-title" v-show="editmode">
                                Update City's Info
                            </h5>
                            <button
                                type="button"
                                class="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <!-- <form @submit.prevent="createUser"> -->

                        <form
                            @submit.prevent="
                                editmode ? updateCity() : createUser()
                            "
                        >
                            <div class="modal-body">
                                <div class="row">
                                    <div class="col-4">
                                        <div class="form-group">
                                            <label>Name</label>
                                            <input
                                                v-model="form.city_name"
                                                type="text"
                                                name="city_name"
                                                class="form-control"
                                                :class="{
                                                    'is-invalid':
                                                        verrors.has('city_name'),
                                                }"
                                                v-validate="'required'"
                                                data-vv-as="city_name"
                                                :disabled="form.id != ''"
                                            />
                                            <div
                                                v-if="verrors.has('city_name')"
                                                class="help-block invalid-feedback"
                                            >
                                                {{ verrors.first("city_name") }}
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-3">
                                        <div class="form-group">
                                            <label>State</label>
                                            <v-select
                                                label="name"
                                                :reduce="
                                                    (option) => option.id
                                                "
                                                :options="states"
                                                placeholder="Enter State ..."
                                                v-model="form.state_id"
                                                v-validate="'required'"
                                                :class="{
                                                    error: verrors.state,
                                                    error: verrors.has('state'),
                                                    haveValue: form.state,
                                                }"
                                                data-vv-name="state"
                                            />
                                            <div
                                                v-if="verrors.has('state')"
                                                class="help-block invalid-feedback"
                                            >
                                                {{ verrors.first("state") }}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-3">
                                        <div class="form-group">
                                            <label>District</label>
                                            <v-select
                                                v-model="form.district_id"
                                                label="district_name"
                                                :reduce="
                                                    (option) => option.id
                                                "
                                                :options="districts"
                                                placeholder="Enter District ..."
                                                v-validate="'required'"
                                                :class="{
                                                    error: verrors.district_id,
                                                    error: verrors.has('district_id'),
                                                    haveValue: form.district_id,
                                                }"
                                                data-vv-name="district_id"
                                            />
                                            <div
                                                v-if="verrors.has('district_id')"
                                                class="help-block invalid-feedback"
                                            >
                                                {{ verrors.first("district_id") }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button
                                    type="button"
                                    class="btn btn-secondary"
                                    data-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button
                                    v-show="editmode"
                                    type="submit"
                                    class="btn btn-success"
                                >
                                    Update
                                </button>
                                <button
                                    v-show="!editmode"
                                    type="submit"
                                    class="btn btn-primary"
                                >
                                    Create
                                </button>
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
            search: "",
            cities: {},
            states: [],
            role: [],
            districts: [],
            form: new Form({
                id: "",
                city_name: "",
                district_id: "",
                state_id: "",
            }),
            json_fields: {
                name: "name",
                "City Type": "type",
                Email: "email",
                "Contact No": "contact_no",
                "City Name": "user_name",
                Address: "address",
                State: "state",
                City: "city",
                "Zip Code": "zip_code",
            },
            json_meta: [
                [
                    {
                        key: "charset",
                        value: "utf-8",
                    },
                ],
            ],
        };
    },
    methods: {
        async export_csv() {
            const response = await axios.get("api/city?export=1", {
                params: {
                    search: this.search,
                },
            });
            return response.data.data;
        },
        startDownload() {
            Swal.fire({
                title: "Please Wait !",
                html: "Data populating", // add html attribute if you want or remove
                allowOutsideClick: false,
                onBeforeOpen: () => {
                    Swal.showLoading();
                },
            });
        },
        finishDownload() {
            Swal.close();
        },

        getResults(page = 1) {
            let cloaderd = this.$loading.show();
            axios
                .get("api/city", {
                    params: {
                        page: page,
                        search: this.search,
                    },
                })
                .then(({ data }) => {
                    this.cities = data.data;
                    cloaderd.hide();
                })
                .catch((err) => {
                    cloaderd.hide();
                    if (err.response && err.response.data) {
                        this.$setErrorsFromResponse(err.response.data);
                    }
                });
        },
        updateCity() {
            this.$validator.validateAll().then(async (valid) => {
                if (valid) {
                    this.verrors.clear();
                    let cloaderd = this.$loading.show();
                    // console.log('Editing data');
                    this.form
                        .put("api/city/" + this.form.id)
                        .then((response) => {
                            // success
                            $("#addNew").modal("hide");
                            Toast.fire({
                                icon: "success",
                                title: response.data.message,
                            });
                            cloaderd.hide();
                            //  Fire.$emit('AfterCreate');

                            this.loadUsers();
                        })
                        .catch((err) => {
                            if (err.response && err.response.data) {
                                this.$setErrorsFromResponse(err.response.data);
                            }
                        });
                }
            });
        },
        editModal(city) {
            this.editmode = true;
            this.form.reset();
            this.verrors.clear();
            $("#addNew").modal("show");
            // if (user.role.length > 0) {
            //     user.role = user.role[0].name;
            // }
            console.log("city",city);
            this.form.fill(city);
        },
        newModal() {
            this.editmode = false;
            this.form.reset();
            this.verrors.clear();
            $("#addNew").modal("show");
        },
        deleteCity(id) {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                showCancelButton: true,
                confirmButtonColor: "#d33",
                cancelButtonColor: "#3085d6",
                confirmButtonText: "Yes, delete it!",
            }).then((result) => {
                // Send request to the server
                if (result.value) {
                    this.form
                        .delete("api/city/" + id)
                        .then((response) => {
                            if (response.data.success) {
                                Toast.fire({
                                    icon: "success",
                                    title: "Data has been deleted",
                                });
                            }

                            this.loadUsers();
                        })
                        .catch((data) => {
                            Toast.fire({
                                icon: "success",
                                title: data.data.message,
                            });
                        });
                }
            });
        },
        loadUsers() {
            let cloaderd = this.$loading.show();

            // if (this.$gate.isAdmin()) {
            //     axios.get("api/user").then(({ data }) => (this.users = data.data));
            // }

            axios
                .get("api/city")
                .then(({ data }) => {
                    this.cities = data.data;
                    console.log("cities:", this.cities);

                    cloaderd.hide();
                })
                .catch((err) => {
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
                    this.form
                        .post("api/city")
                        .then((response) => {
                            $("#addNew").modal("hide");

                            Toast.fire({
                                icon: "success",
                                title: response.data.message,
                            });

                            this.$Progress.finish();
                            this.loadUsers();
                        })
                        .catch((err) => {
                            if (err.response && err.response.data) {
                                this.$setErrorsFromResponse(err.response.data);
                            }
                        });
                }
            });
        },
    },
    mounted() {
        console.log("City Component mounted.");
    },
    created() {
        this.loadUsers();
    },
    beforeCreate() {
        const statesApi = axios.get("api/getStates");
        const roleApi = axios.get("api/role");

        // Call the APIs in parallel
        axios
            .all([statesApi, roleApi])
            .then(
                axios.spread((statesRes, roleApi) => {
                    // Handle the responses
                    this.states = statesRes.data.data;
                    this.role = roleApi.data.data.filter(
                        (role) => role.name !== "Developer"
                    );
                })
            )
            .catch((error) => {
                console.error("There was an error fetching the data:", error);
                // Handle the error as needed
            });
    },
    watch: {
        "form.state_id": {
            immediate: true,
            handler(n) {
                if (n) {
                    axios
                        .get("api/getDistricts", {
                            params: {
                                state: n,
                            },
                        })
                        .then((res) => {
                            this.districts = res.data.data;
                            console.log("after choose state: ", this.districts);
                        });
                }
            },
        },
    },
};
</script>
