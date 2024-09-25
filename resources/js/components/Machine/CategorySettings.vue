<template>
    <section class="content">
        <form @submit.prevent="submit_settings()" class="container-fluid">


            <div class="card">
                <div class="card-header" style="padding-bottom: 0;">
                    <h3 class="card-title" style="font-size: 15px;color: gray;"> Date Settings</h3>
                </div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-3">
                            <div class="form-group">
                                <label class="mt-1 btn btn-success" >Green</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">>=</span>
                                    </div>
                                    <input v-model="form.date_green" type="text" name="date_green" class="form-control"
                                        :class="{ 'is-invalid': verrors.has('date_green') }" v-validate="'integer'"
                                        data-vv-as="Green">
                                    <div class="input-group-append">
                                        <span class="input-group-text">Days</span>
                                    </div>
                                </div>
                                <div v-if="verrors.has('date_green')" class="help-block invalid-feedback"> {{
                                verrors.first('date_green') }}</div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="form-group">
                                <label class="mt-1 btn btn-warning">Yellow</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"> < </span>
                                    </div>
                                <input v-model="form.date_yellow" type="text" name="date_yellow" class="form-control"
                                    :class="{ 'is-invalid': verrors.has('date_yellow') }" v-validate="'integer'"
                                    data-vv-as="yellow">
                                    <div class="input-group-append">
                                        <span class="input-group-text">Days</span>
                                    </div>
                                </div>
                                <div v-if="verrors.has('date_yellow')" class="help-block invalid-feedback"> {{
                                verrors.first('date_yellow')
                                }}</div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="form-group">
                                <label class="mt-1 btn" style="color: #212529;background-color: #f7a104;border-color: #f7a104;">Orange</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"> < </span>
                                    </div>
                                <input v-model="form.date_orange" type="text" name="date_orange" class="form-control"
                                    :class="{ 'is-invalid': verrors.has('date_orange') }" v-validate="'integer'"
                                    data-vv-as="orange">
                                    <div class="input-group-append">
                                        <span class="input-group-text">Days</span>
                                    </div>
                                </div>
                                <div v-if="verrors.has('date_orange')" class="help-block invalid-feedback"> {{
                                verrors.first('date_orange') }}</div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="form-group">
                                <label class="mt-1 btn btn-danger">Red (Overdue)</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"> < </span>
                                    </div>
                                <input v-model="form.date_red" type="text" name="date_red" class="form-control"
                                    :class="{ 'is-invalid': verrors.has('date_red') }" v-validate="'integer'"
                                    data-vv-as="red">
                                    <div class="input-group-append">
                                        <span class="input-group-text">Days</span>
                                    </div>
                                </div>
                                <div v-if="verrors.has('date_red')" class="help-block invalid-feedback"> {{
                                verrors.first('date_red') }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /.card -->
            <div class="card">
                <div class="card-header" style="padding-bottom: 0;">
                    <h3 class="card-title" style="font-size: 15px;color: gray;"> Run Hour Settings</h3>
                </div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-3">
                            <div class="form-group">
                                <label class="mt-1 btn btn-success" >Green</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><=</span>
                                    </div>
                                <input v-model="form.hr_green" type="text" name="hr_green" class="form-control"
                                    :class="{ 'is-invalid': verrors.has('hr_green') }" v-validate="'integer'"
                                    data-vv-as="Green">
                                    <div class="input-group-append">
                                        <span class="input-group-text">%</span>
                                    </div>
                                </div>
                                <div v-if="verrors.has('hr_green')" class="help-block invalid-feedback"> {{
                                verrors.first('hr_green') }}</div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="form-group">
                                <label class="mt-1 btn btn-warning">Yellow</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"> > </span>
                                    </div>
                                <input v-model="form.hr_yellow" type="text" name="hr_yellow" class="form-control"
                                    :class="{ 'is-invalid': verrors.has('hr_yellow') }" v-validate="'integer'"
                                    data-vv-as="yellow">
                                    <div class="input-group-append">
                                        <span class="input-group-text">%</span>
                                    </div>
                                </div>
                                <div v-if="verrors.has('hr_yellow')" class="help-block invalid-feedback"> {{
                                verrors.first('hr_yellow')
                                }}</div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="form-group">
                                <label class="mt-1 btn" style="color: #212529;background-color: #f7a104;border-color: #f7a104;">Orange</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"> > </span>
                                    </div>
                                <input v-model="form.hr_orange" type="text" name="hr_orange" class="form-control"
                                    :class="{ 'is-invalid': verrors.has('hr_orange') }" v-validate="'integer'"
                                    data-vv-as="orange">
                                    <div class="input-group-append">
                                        <span class="input-group-text">%</span>
                                    </div>
                                </div>
                                <div v-if="verrors.has('hr_orange')" class="help-block invalid-feedback"> {{
                                verrors.first('hr_orange') }}</div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="form-group">
                                <label class="mt-1 btn btn-danger">Red (Overdue)</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"> > </span>
                                    </div>
                                <input v-model="form.hr_red" type="text" name="hr_red" class="form-control"
                                    :class="{ 'is-invalid': verrors.has('hr_red') }" v-validate="'integer'"
                                    data-vv-as="red">
                                    <div class="input-group-append">
                                        <span class="input-group-text">%</span>
                                    </div>
                                </div>
                                <div v-if="verrors.has('hr_red')" class="help-block invalid-feedback"> {{
                                verrors.first('hr_red') }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header" style="padding-bottom: 0;">
                    <h3 class="card-title" style="font-size: 15px;color: gray;"> KM Hour Settings</h3>
                </div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-3">
                            <div class="form-group">
                                <label class="mt-1 btn btn-success" >Green</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"> <= </span>
                                    </div>
                                <input v-model="form.km_green" type="text" name="km_green" class="form-control"
                                    :class="{ 'is-invalid': verrors.has('km_green') }" v-validate="'integer'"
                                    data-vv-as="Green">
                                    <div class="input-group-append">
                                        <span class="input-group-text">%</span>
                                    </div>
                                </div>
                                <div v-if="verrors.has('km_green')" class="help-block invalid-feedback"> {{
                                verrors.first('km_green') }}</div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="form-group">
                                <label class="mt-1 btn btn-warning">Yellow</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"> > </span>
                                    </div>
                                <input v-model="form.km_yellow" type="text" name="km_yellow" class="form-control"
                                    :class="{ 'is-invalid': verrors.has('km_yellow') }" v-validate="'integer'"
                                    data-vv-as="yellow">
                                    <div class="input-group-append">
                                        <span class="input-group-text">%</span>
                                    </div>
                                </div>
                                <div v-if="verrors.has('km_yellow')" class="help-block invalid-feedback"> {{
                                verrors.first('km_yellow')
                                }}</div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="form-group">
                                <label class="mt-1 btn" style="color: #212529;background-color: #f7a104;border-color: #f7a104;">Orange</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"> > </span>
                                    </div>
                                <input v-model="form.km_orange" type="text" name="km_orange" class="form-control"
                                    :class="{ 'is-invalid': verrors.has('km_orange') }" v-validate="'integer'"
                                    data-vv-as="orange">
                                    <div class="input-group-append">
                                        <span class="input-group-text">%</span>
                                    </div>
                                </div>
                                <div v-if="verrors.has('km_orange')" class="help-block invalid-feedback"> {{
                                verrors.first('km_orange') }}</div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="form-group">
                                <label class="mt-1 btn btn-danger">Red (Overdue)</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"> > </span>
                                    </div>
                                <input v-model="form.km_red" type="text" name="km_red" class="form-control"
                                    :class="{ 'is-invalid': verrors.has('km_red') }" v-validate="'integer'"
                                    data-vv-as="red">
                                    <div class="input-group-append">
                                        <span class="input-group-text">%</span>
                                    </div>
                                </div>
                                <div v-if="verrors.has('km_red')" class="help-block invalid-feedback"> {{
                                verrors.first('km_red') }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" style="padding-bottom: 0;">
                    <h3 class="card-title" style="font-size: 15px;color: gray;"> Production Figure Settings</h3>
                </div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-3">
                            <div class="form-group">
                                <label class="mt-1 btn btn-success" >Green</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"> <= </span>
                                    </div>
                                <input v-model="form.prdfig_green" type="text" name="prdfig_green" class="form-control"
                                    :class="{ 'is-invalid': verrors.has('prdfig_green') }" v-validate="'integer'"
                                    data-vv-as="Green">
                                    <div class="input-group-append">
                                        <span class="input-group-text">%</span>
                                    </div>
                                </div>
                                <div v-if="verrors.has('prdfig_green')" class="help-block invalid-feedback"> {{
                                verrors.first('prdfig_green') }}</div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="form-group">
                                <label class="mt-1 btn btn-warning">Yellow</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"> > </span>
                                    </div>
                                <input v-model="form.prdfig_yellow" type="text" name="prdfig_yellow"
                                    class="form-control" :class="{ 'is-invalid': verrors.has('prdfig_yellow') }"
                                    v-validate="'integer'" data-vv-as="yellow">
                                    <div class="input-group-append">
                                        <span class="input-group-text">%</span>
                                    </div>
                                </div>
                                <div v-if="verrors.has('prdfig_yellow')" class="help-block invalid-feedback"> {{
                                verrors.first('prdfig_yellow')
                                }}</div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="form-group">
                                <label class="mt-1 btn" style="color: #212529;background-color: #f7a104;border-color: #f7a104;">Orange</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"> > </span>
                                    </div>
                                <input v-model="form.prdfig_orange" type="text" name="prdfig_orange"
                                    class="form-control" :class="{ 'is-invalid': verrors.has('prdfig_orange') }"
                                    v-validate="'integer'" data-vv-as="orange">
                                    <div class="input-group-append">
                                        <span class="input-group-text">%</span>
                                    </div>
                                </div>
                                <div v-if="verrors.has('prdfig_orange')" class="help-block invalid-feedback"> {{
                                verrors.first('prdfig_orange') }}</div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="form-group">
                                <label class="mt-1 btn btn-danger">Red (Overdue)</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"> > </span>
                                    </div>
                                <input v-model="form.prdfig_red" type="text" name="prdfig_red" class="form-control"
                                    :class="{ 'is-invalid': verrors.has('prdfig_red') }" v-validate="'integer'"
                                    data-vv-as="red">
                                    <div class="input-group-append">
                                        <span class="input-group-text">%</span>
                                    </div>
                                </div>
                                <div v-if="verrors.has('prdfig_red')" class="help-block invalid-feedback"> {{
                                verrors.first('prdfig_red') }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header" style="padding-bottom: 0;">
                    <h3 class="card-title" style="font-size: 15px;color: gray;"> Production Loss Settings</h3>
                </div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-6">
                            <div class="form-group">
                                <label class="mt-1 btn btn-success" >Hrs per day</label>
                                <div class="input-group">
                                <input v-model="form.prdloss_hrs" type="text" name="prdloss_hrs" class="form-control"
                                    :class="{ 'is-invalid': verrors.has('prdloss_hrs') }" v-validate="'required|integer'"
                                    data-vv-as="Hrs">
                                </div>
                                <div v-if="verrors.has('prdloss_hrs')" class="help-block invalid-feedback"> {{
                                verrors.first('prdloss_hrs') }}</div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group">
                                <label class="mt-1 btn btn-success">Hourly Rate in Rs.</label>
                                <div class="input-group">
                                <input v-model="form.prdloss_hr_rate" type="text" name="prdloss_hr_rate" class="form-control"
                                    :class="{ 'is-invalid': verrors.has('prdloss_hr_rate') }" v-validate="'required|integer'"
                                    data-vv-as="Hrs rate">
                                </div>
                                <div v-if="verrors.has('prdloss_hr_rate')" class="help-block invalid-feedback"> {{
                                verrors.first('prdloss_hr_rate') }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <button type="submit" class="btn btn-success">Update</button>
        </form>
    </section>
</template>

<script>
    export default {
        components: {
        },
        data() {
            return {
                editmode: false,
                settings: {},
                form: new Form({
                    date_green: '',
                    date_yellow: '',
                    date_orange: '',
                    date_red: '',
                    hr_green: '',
                    hr_yellow: '',
                    hr_orange: '',
                    hr_red: '',
                    km_green: '',
                    km_yellow: '',
                    km_orange: '',
                    km_red: '',
                    prdfig_green: '',
                    prdfig_yellow: '',
                    prdfig_orange: '',
                    prdfig_red: '',
                    prdloss_hrs:'',
                    prdloss_hr_rate:'',
                }),
            }
        },
        methods: {

            loadsettings() {

                axios.get("api/category/pm_setting/"+this.$route.params.id)
                .then(res => {
                    if(res.data.data.pm_setting)
                    this.form.fill(res.data.data.pm_setting);
                })

            },

            submit_settings() {
                this.$validator.validateAll().then(async (valid) => {
                    if (valid) {
                        this.verrors.clear();

                        this.form.put('api/category/pm_setting/'+this.$route.params.id)
                            .then((data) => {
                                if (data.data.success) {
                                    Toast.fire({
                                        icon: 'success',
                                        title: data.data.message
                                    });
                                    this.$router.push('/machines/category/').catch(() => { });
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


        },

        created() {
            this.loadsettings();
        },

    }
    </script>
