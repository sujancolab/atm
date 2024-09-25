<template>
    <section class="content">
        <form @submit.prevent="submit_settings()" class="container-fluid">


            <div class="card">
                <div class="card-header" style="padding-bottom: 10px;">
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
                <div class="card-header" style="padding-bottom: 10px;">
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
                <div class="card-header" style="padding-bottom: 10px;">
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
                <div class="card-header" style="padding-bottom: 10px;">
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

            <h5><b>Frequency Settings</b></h5>
            <hr>

            <div class="card">
                <div class="card-header" style="padding-bottom: 10px;">
                    <h3 class="card-title" style="font-size: 15px;color: gray;"> RC Frequency Settings</h3>
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
                                <input v-model="form.rc_green" type="text" name="rc_green" class="form-control"
                                    :class="{ 'is-invalid': verrors.has('rc_green') }" v-validate="'integer'"
                                    data-vv-as="Green">
                                    <div class="input-group-append">
                                        <span class="input-group-text">Days</span>
                                    </div>
                                </div>
                                <div v-if="verrors.has('rc_green')" class="help-block invalid-feedback"> {{
                                verrors.first('rc_green') }}</div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="form-group">
                                <label class="mt-1 btn btn-warning">Yellow</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"> > </span>
                                    </div>
                                <input v-model="form.rc_yellow" type="text" name="rc_yellow"
                                    class="form-control" :class="{ 'is-invalid': verrors.has('rc_yellow') }"
                                    v-validate="'integer'" data-vv-as="yellow">
                                    <div class="input-group-append">
                                        <span class="input-group-text">Days</span>
                                    </div>
                                </div>
                                <div v-if="verrors.has('rc_yellow')" class="help-block invalid-feedback"> {{
                                verrors.first('rc_yellow')
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
                                <input v-model="form.rc_orange" type="text" name="rc_orange"
                                    class="form-control" :class="{ 'is-invalid': verrors.has('rc_orange') }"
                                    v-validate="'integer'" data-vv-as="orange">
                                    <div class="input-group-append">
                                        <span class="input-group-text">Days</span>
                                    </div>
                                </div>
                                <div v-if="verrors.has('rc_orange')" class="help-block invalid-feedback"> {{
                                verrors.first('rc_orange') }}</div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="form-group">
                                <label class="mt-1 btn btn-danger">Red (Overdue)</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"> > </span>
                                    </div>
                                <input v-model="form.rc_red" type="text" name="rc_red" class="form-control"
                                    :class="{ 'is-invalid': verrors.has('rc_red') }" v-validate="'integer'"
                                    data-vv-as="red">
                                    <div class="input-group-append">
                                        <span class="input-group-text">Days</span>
                                    </div>
                                </div>
                                <div v-if="verrors.has('rc_red')" class="help-block invalid-feedback"> {{
                                verrors.first('rc_red') }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" style="padding-bottom: 10px;">
                    <h3 class="card-title" style="font-size: 15px;color: gray;"> CF Frequency Settings</h3>
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
                                <input v-model="form.cf_green" type="text" name="cf_green" class="form-control"
                                    :class="{ 'is-invalid': verrors.has('cf_green') }" v-validate="'integer'"
                                    data-vv-as="Green">
                                    <div class="input-group-append">
                                        <span class="input-group-text">Days</span>
                                    </div>
                                </div>
                                <div v-if="verrors.has('cf_green')" class="help-block invalid-feedback"> {{
                                verrors.first('cf_green') }}</div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="form-group">
                                <label class="mt-1 btn btn-warning">Yellow</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"> > </span>
                                    </div>
                                <input v-model="form.cf_yellow" type="text" name="cf_yellow"
                                    class="form-control" :class="{ 'is-invalid': verrors.has('cf_yellow') }"
                                    v-validate="'integer'" data-vv-as="yellow">
                                    <div class="input-group-append">
                                        <span class="input-group-text">Days</span>
                                    </div>
                                </div>
                                <div v-if="verrors.has('cf_yellow')" class="help-block invalid-feedback"> {{
                                verrors.first('cf_yellow')
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
                                <input v-model="form.cf_orange" type="text" name="cf_orange"
                                    class="form-control" :class="{ 'is-invalid': verrors.has('cf_orange') }"
                                    v-validate="'integer'" data-vv-as="orange">
                                    <div class="input-group-append">
                                        <span class="input-group-text">Days</span>
                                    </div>
                                </div>
                                <div v-if="verrors.has('cf_orange')" class="help-block invalid-feedback"> {{
                                verrors.first('cf_orange') }}</div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="form-group">
                                <label class="mt-1 btn btn-danger">Red (Overdue)</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"> > </span>
                                    </div>
                                <input v-model="form.cf_red" type="text" name="cf_red" class="form-control"
                                    :class="{ 'is-invalid': verrors.has('cf_red') }" v-validate="'integer'"
                                    data-vv-as="red">
                                    <div class="input-group-append">
                                        <span class="input-group-text">Days</span>
                                    </div>
                                </div>
                                <div v-if="verrors.has('cf_red')" class="help-block invalid-feedback"> {{
                                verrors.first('cf_red') }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" style="padding-bottom: 10px;">
                    <h3 class="card-title" style="font-size: 15px;color: gray;"> National Permit Frequency Settings</h3>
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
                                <input v-model="form.national_permit_green" type="text" name="national_permit_green" class="form-control"
                                    :class="{ 'is-invalid': verrors.has('national_permit_green') }" v-validate="'integer'"
                                    data-vv-as="Green">
                                    <div class="input-group-append">
                                        <span class="input-group-text">Days</span>
                                    </div>
                                </div>
                                <div v-if="verrors.has('national_permit_green')" class="help-block invalid-feedback"> {{
                                verrors.first('national_permit_green') }}</div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="form-group">
                                <label class="mt-1 btn btn-warning">Yellow</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"> > </span>
                                    </div>
                                <input v-model="form.national_permit_yellow" type="text" name="national_permit_yellow"
                                    class="form-control" :class="{ 'is-invalid': verrors.has('national_permit_yellow') }"
                                    v-validate="'integer'" data-vv-as="yellow">
                                    <div class="input-group-append">
                                        <span class="input-group-text">Days</span>
                                    </div>
                                </div>
                                <div v-if="verrors.has('national_permit_yellow')" class="help-block invalid-feedback"> {{
                                verrors.first('national_permit_yellow')
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
                                <input v-model="form.national_permit_orange" type="text" name="national_permit_orange"
                                    class="form-control" :class="{ 'is-invalid': verrors.has('national_permit_orange') }"
                                    v-validate="'integer'" data-vv-as="orange">
                                    <div class="input-group-append">
                                        <span class="input-group-text">Days</span>
                                    </div>
                                </div>
                                <div v-if="verrors.has('national_permit_orange')" class="help-block invalid-feedback"> {{
                                verrors.first('national_permit_orange') }}</div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="form-group">
                                <label class="mt-1 btn btn-danger">Red (Overdue)</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"> > </span>
                                    </div>
                                <input v-model="form.national_permit_red" type="text" name="national_permit_red" class="form-control"
                                    :class="{ 'is-invalid': verrors.has('national_permit_red') }" v-validate="'integer'"
                                    data-vv-as="red">
                                    <div class="input-group-append">
                                        <span class="input-group-text">Days</span>
                                    </div>
                                </div>
                                <div v-if="verrors.has('national_permit_red')" class="help-block invalid-feedback"> {{
                                verrors.first('national_permit_red') }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" style="padding-bottom: 10px;">
                    <h3 class="card-title" style="font-size: 15px;color: gray;"> Road TAX Frequency Settings</h3>
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
                                <input v-model="form.road_tax_green" type="text" name="road_tax_green" class="form-control"
                                    :class="{ 'is-invalid': verrors.has('road_tax_green') }" v-validate="'integer'"
                                    data-vv-as="Green">
                                    <div class="input-group-append">
                                        <span class="input-group-text">Days</span>
                                    </div>
                                </div>
                                <div v-if="verrors.has('road_tax_green')" class="help-block invalid-feedback"> {{
                                verrors.first('road_tax_green') }}</div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="form-group">
                                <label class="mt-1 btn btn-warning">Yellow</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"> > </span>
                                    </div>
                                <input v-model="form.road_tax_yellow" type="text" name="road_tax_yellow"
                                    class="form-control" :class="{ 'is-invalid': verrors.has('road_tax_yellow') }"
                                    v-validate="'integer'" data-vv-as="yellow">
                                    <div class="input-group-append">
                                        <span class="input-group-text">Days</span>
                                    </div>
                                </div>
                                <div v-if="verrors.has('road_tax_yellow')" class="help-block invalid-feedback"> {{
                                verrors.first('road_tax_yellow')
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
                                <input v-model="form.road_tax_orange" type="text" name="road_tax_orange"
                                    class="form-control" :class="{ 'is-invalid': verrors.has('road_tax_orange') }"
                                    v-validate="'integer'" data-vv-as="orange">
                                    <div class="input-group-append">
                                        <span class="input-group-text">Days</span>
                                    </div>
                                </div>
                                <div v-if="verrors.has('road_tax_orange')" class="help-block invalid-feedback"> {{
                                verrors.first('road_tax_orange') }}</div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="form-group">
                                <label class="mt-1 btn btn-danger">Red (Overdue)</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"> > </span>
                                    </div>
                                <input v-model="form.road_tax_red" type="text" name="road_tax_red" class="form-control"
                                    :class="{ 'is-invalid': verrors.has('road_tax_red') }" v-validate="'integer'"
                                    data-vv-as="red">
                                    <div class="input-group-append">
                                        <span class="input-group-text">Days</span>
                                    </div>
                                </div>
                                <div v-if="verrors.has('road_tax_red')" class="help-block invalid-feedback"> {{
                                verrors.first('road_tax_red') }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" style="padding-bottom: 10px;">
                    <h3 class="card-title" style="font-size: 15px;color: gray;"> Insurance Frequency Settings</h3>
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
                                <input v-model="form.insurance_green" type="text" name="insurance_green" class="form-control"
                                    :class="{ 'is-invalid': verrors.has('insurance_green') }" v-validate="'integer'"
                                    data-vv-as="Green">
                                    <div class="input-group-append">
                                        <span class="input-group-text">Days</span>
                                    </div>
                                </div>
                                <div v-if="verrors.has('insurance_green')" class="help-block invalid-feedback"> {{
                                verrors.first('insurance_green') }}</div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="form-group">
                                <label class="mt-1 btn btn-warning">Yellow</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"> > </span>
                                    </div>
                                <input v-model="form.insurance_yellow" type="text" name="insurance_yellow"
                                    class="form-control" :class="{ 'is-invalid': verrors.has('insurance_yellow') }"
                                    v-validate="'integer'" data-vv-as="yellow">
                                    <div class="input-group-append">
                                        <span class="input-group-text">Days</span>
                                    </div>
                                </div>
                                <div v-if="verrors.has('insurance_yellow')" class="help-block invalid-feedback"> {{
                                verrors.first('insurance_yellow')
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
                                <input v-model="form.insurance_orange" type="text" name="insurance_orange"
                                    class="form-control" :class="{ 'is-invalid': verrors.has('insurance_orange') }"
                                    v-validate="'integer'" data-vv-as="orange">
                                    <div class="input-group-append">
                                        <span class="input-group-text">Days</span>
                                    </div>
                                </div>
                                <div v-if="verrors.has('insurance_orange')" class="help-block invalid-feedback"> {{
                                verrors.first('insurance_orange') }}</div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="form-group">
                                <label class="mt-1 btn btn-danger">Red (Overdue)</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"> > </span>
                                    </div>
                                <input v-model="form.insurance_red" type="text" name="insurance_red" class="form-control"
                                    :class="{ 'is-invalid': verrors.has('insurance_red') }" v-validate="'integer'"
                                    data-vv-as="red">
                                    <div class="input-group-append">
                                        <span class="input-group-text">Days</span>
                                    </div>
                                </div>
                                <div v-if="verrors.has('insurance_red')" class="help-block invalid-feedback"> {{
                                verrors.first('insurance_red') }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" style="padding-bottom: 10px;">
                    <h3 class="card-title" style="font-size: 15px;color: gray;"> Pollution Frequency Settings</h3>
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
                                <input v-model="form.pollution_green" type="text" name="pollution_green" class="form-control"
                                    :class="{ 'is-invalid': verrors.has('pollution_green') }" v-validate="'integer'"
                                    data-vv-as="Green">
                                    <div class="input-group-append">
                                        <span class="input-group-text">Days</span>
                                    </div>
                                </div>
                                <div v-if="verrors.has('pollution_green')" class="help-block invalid-feedback"> {{
                                verrors.first('pollution_green') }}</div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="form-group">
                                <label class="mt-1 btn btn-warning">Yellow</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"> > </span>
                                    </div>
                                <input v-model="form.pollution_yellow" type="text" name="pollution_yellow"
                                    class="form-control" :class="{ 'is-invalid': verrors.has('pollution_yellow') }"
                                    v-validate="'integer'" data-vv-as="yellow">
                                    <div class="input-group-append">
                                        <span class="input-group-text">Days</span>
                                    </div>
                                </div>
                                <div v-if="verrors.has('pollution_yellow')" class="help-block invalid-feedback"> {{
                                verrors.first('pollution_yellow')
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
                                <input v-model="form.pollution_orange" type="text" name="pollution_orange"
                                    class="form-control" :class="{ 'is-invalid': verrors.has('pollution_orange') }"
                                    v-validate="'integer'" data-vv-as="orange">
                                    <div class="input-group-append">
                                        <span class="input-group-text">Days</span>
                                    </div>
                                </div>
                                <div v-if="verrors.has('pollution_orange')" class="help-block invalid-feedback"> {{
                                verrors.first('pollution_orange') }}</div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="form-group">
                                <label class="mt-1 btn btn-danger">Red (Overdue)</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"> > </span>
                                    </div>
                                <input v-model="form.pollution_red" type="text" name="pollution_red" class="form-control"
                                    :class="{ 'is-invalid': verrors.has('pollution_red') }" v-validate="'integer'"
                                    data-vv-as="red">
                                    <div class="input-group-append">
                                        <span class="input-group-text">Days</span>
                                    </div>
                                </div>
                                <div v-if="verrors.has('pollution_red')" class="help-block invalid-feedback"> {{
                                verrors.first('pollution_red') }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button type="submit" class="btn btn-success" v-if="$gate.hasPermission('can_edit_frequency_settings')">Update</button>
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

                rc_green: '',
                rc_yellow: '',
                rc_orange: '',
                rc_red: '',

                cf_green: '',
                cf_yellow: '',
                cf_orange: '',
                cf_red: '',

                national_permit_green: '',
                national_permit_yellow: '',
                national_permit_orange: '',
                national_permit_red: '',

                road_tax_green: '',
                road_tax_yellow: '',
                road_tax_orange: '',
                road_tax_red: '',

                insurance_green: '',
                insurance_yellow: '',
                insurance_orange: '',
                insurance_red: '',

                pollution_green: '',
                pollution_yellow: '',
                pollution_orange: '',
                pollution_red: '',
            }),
        }
    },
    methods: {

        loadsettings() {

            axios.get("api/settings")
                .then(res => {
                    this.form.fill(res.data.data);
                })

        },

        submit_settings() {
            this.$validator.validateAll().then(async (valid) => {
                if (valid) {
                    this.verrors.clear();

                    this.form.post('api/settings')
                        .then((data) => {
                            if (data.data.success) {
                                $('#addNew').modal('hide');
                                Toast.fire({
                                    icon: 'success',
                                    title: data.data.message
                                });
                                this.loadsettings();
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
