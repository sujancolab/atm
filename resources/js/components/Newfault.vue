<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Lodge a new fault</h3>

                            <div class="card-tools">
                                <!-- <button
                                    type="button"
                                    class="btn btn-sm btn-primary"
                                    @click="newModal"
                                    v-if="$gate.hasPermission('can_add_user')"
                                >
                                    <i class="fa fa-plus-square"></i>
                                    Add New
                                </button> -->
                            </div>
                        </div>
                        <div class="card-body p-2">
                            <!-- <form
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
                            </form> -->
                        </div>
                        <!-- /.card-header -->
                        <div
                            class="card-body ticketLstTbl table-responsive p-0"
                        >
                        <form
                            @submit.prevent="
                                editmode ? updateCity() : createUser()
                            "
                        >
                            <div class="modal-body">
                                <div class="row">

                                    <div class="col-3">
                                        <div class="form-group">
                                            <label>Select Atm Id</label>
                                            <v-select
                                                label="atm_id"
                                                :reduce="
                                                    (option) => option.id
                                                "
                                                :options="atms"
                                                placeholder="Enter Atm ..."
                                                v-model="form.atm_id"
                                                v-validate="'required'"
                                                :class="{
                                                    error: verrors.atm_id,
                                                    error: verrors.has('atm_id'),
                                                    haveValue: form.atm_id,
                                                }"
                                                data-vv-name="atm_id"
                                            />
                                            <div
                                                v-if="verrors.has('atm_id')"
                                                class="help-block invalid-feedback"
                                            >
                                                {{ verrors.first("atm_id") }}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-3">
                                        <div class="form-group">
                                            <label>Call Type</label>
                                            <v-select
                                                v-model="form.complaint_system_type_id"
                                                label="title"
                                                :reduce="
                                                    (option) => option.id
                                                "
                                                :options="complaintsystemtypes"
                                                placeholder="Enter Call Type ..."
                                                v-validate="'required'"
                                                :class="{
                                                    error: verrors.complaint_system_type_id,
                                                    error: verrors.has('complaint_system_type_id'),
                                                    haveValue: form.complaint_system_type_id,
                                                }"
                                                data-vv-name="title"
                                            />
                                            <div
                                                v-if="verrors.has('complaint_system_type_id')"
                                                class="help-block invalid-feedback"
                                            >
                                                {{ verrors.first("complaint_system_type_id") }}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-3">
                                        <div class="form-group">
                                            <label>Fault Type</label>
                                            <v-select
                                                v-model="form.complaint_type_id"
                                                label="title"
                                                :reduce="
                                                    (option) => option.id
                                                "
                                                :options="complainttypes"
                                                placeholder="Enter Fault type ..."
                                                v-validate="'required'"
                                                :class="{
                                                    error: verrors.complaint_type_id,
                                                    error: verrors.has('complaint_type_id'),
                                                    haveValue: form.complaint_type_id,
                                                }"
                                                data-vv-name="title"
                                            />
                                            <div
                                                v-if="verrors.has('complaint_type_id')"
                                                class="help-block invalid-feedback"
                                            >
                                                {{ verrors.first("complaint_type_id") }}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-3">
                                        <div class="form-group">
                                        <label>Fault Descriptions</label>
                                        <textarea placeholder="Enter Comment..."
                                            v-model="form.comment" v-validate="''"
                                            :class="{ 'is-invalid': verrors.has('comment') }"
                                            name="comment" data-vv-as="comment"
                                            :disabled="form.id != ''" class="form-control">
                                            </textarea>
                                        <div v-if="verrors.has('comment')" class="help-block invalid-feedback">
                                            {{
                                                verrors.first('comment')
                                            }}</div>
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
                        <!-- /.card-body -->
                        <div class="card-footer">
                            <!-- <pagination
                                :data="areacodes"
                                :limit="10"
                                @pagination-change-page="getResults"
                            ></pagination> -->
                        </div>
                    </div>
                    <!-- /.card -->
                </div>
            </div>

            <!--
            <div v-if="!$gate.isAdmin()">
                <not-found></not-found>
            </div> -->


        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            editmode: false,
            search: "",
            areacodes:{},
            postcodes:[],
            cities: [],
            atms: [],
            complainttypes: [],
            complaintsystemtypes:[],
            role: [],
            districts: [],
            form: new Form({
                id: "",
                complaint_system_type_id: "",
                atm_id: "",
                complaint_type_id: "",
                comment: "",
            }),
            json_fields: {
                name: "name",
                "User Type": "type",
                Email: "email",
                "Contact No": "contact_no",
                "User Name": "user_name",
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
            const response = await axios.get("api/areacode?export=1", {
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
                .get("api/areacode", {
                    params: {
                        page: page,
                        search: this.search,
                    },
                })
                .then(({ data }) => {
                    this.areacodes = data.data;
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
                        .put("api/areacode/" + this.form.id)
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
                        .delete("api/areacode/" + id)
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
                .get("api/areacode")
                .then(({ data }) => {
                    this.areacodes = data.data;
                    console.log("cities:", this.areacodes);

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
                        .post("api/storeComplaint")
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
        console.log("Area Code Component mounted.");
    },
    created() {
        this.loadUsers();
    },
    beforeCreate() {
        const atmApi = axios.get("api/getAtm");
        const complainTypeApi = axios.get("api/getComplaintTypes");
        const complainSystemTypeApi = axios.get("api/getComplaintSystemTypes");

        // Call the APIs in parallel
        axios
            .all([atmApi, complainTypeApi,complainSystemTypeApi])
            .then(
                axios.spread((atmRes, complainTypeRes,complaintSystemTypeRes) => {
                    // Handle the responses
                    this.atms = atmRes.data.data;
                    this.complainttypes= complainTypeRes.data.data;
                    this.complaintsystemtypes =complaintSystemTypeRes.data.data;
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
        "form.district_id": {
            immediate: true,
            handler(n) {
                if (n) {
                    axios
                        .get("api/getCitiesByDistrict", {
                            params: {
                                district: n,
                            },
                        })
                        .then((res) => {
                            this.cities = res.data.data;
                            console.log("after choose district: ", this.cities);
                        });
                }
            },
        },
        "form.city_id": {
            immediate: true,
            handler(n) {
                if (n) {
                    axios
                        .get("api/getPostCodeByCity", {
                            params: {
                                city_id: n,
                            },
                        })
                        .then((res) => {
                            this.postcodes = res.data.data;
                            console.log("after choose district: ", this.cities);
                        });
                }
            },
        },
    },
};
</script>
