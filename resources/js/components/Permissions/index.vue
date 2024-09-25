<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row">

                <div class="col-12">

                    <div class="card">
                        <!-- /.card-header -->
                        <div class="card-header p-2">
                            <ul class="nav nav-pills">
                                <li class="nav-item" v-for="(mod, index) in modules" :key="mod.id">
                                    <a class="nav-link" :class="{ 'active': index === 0 }" data-toggle="tab"
                                        :href="'#a' + index">{{ mod.name
                                        }}</a>
                                </li>
                            </ul>
                        </div>
                        <div class="card-body">
                            <div class="tab-content mt-3">
                                <div class="tab-pane" :class="{ 'active': index === 0 }" :id="'a' + index"
                                    v-for="(mod, index) in modules" :key="mod.id">
                                    <div v-if="mod.sub_modules.length > 0">
                                        <div class="card" v-for="submod in mod.sub_modules" :key="submod.id">
                                            <div class="card-header">{{ submod.name }}</div>
                                            <div class="card-body">
                                                <div class="input-group mb-3"
                                                    v-for="submodpn in submod.permission_names" :key="submodpn.id">
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text">
                                                            <input type="checkbox" :id="submodpn.action" :checked="submodpn.permissions.length > 0?'checked':''" @change="updatePermission(submodpn.id, submodpn.permissions, $event.target.checked)" :disabled="!$gate.hasPermission('can_edit_permissions')">
                                                        </div>
                                                    </div>
                                                    <input type="text" class="form-control" :value="submodpn.name" disabled>
                                                    <div class="input-group-append">
                                                        <div class="input-group-text">
                                                            <span class="badge badge-primary" @click="copyToClipboard(submodpn.action)">{{ submodpn.action }}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-else>
                                        <div class="input-group mb-3" v-for="submodpn in mod.permission_names"
                                            :key="submodpn.id">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">
                                                    <input type="checkbox" :id="submodpn.action" :checked="submodpn.permissions.length > 0?'checked':''" @change="updatePermission(submodpn.id, submodpn.permissions, $event.target.checked)" style="cursor:pointer;" :disabled="!$gate.hasPermission('can_edit_permissions')">
                                                </div>
                                            </div>
                                            <input type="text" class="form-control" :value="submodpn.name" disabled>
                                            <div class="input-group-append">
                                                <div class="input-group-text">
                                                    <span class="badge badge-primary" @click="copyToClipboard(submodpn.action)" style="cursor: pointer;">{{ submodpn.action }}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /.card-body -->
                    </div>
                    <!-- Tab panes -->


                    <!-- /.card -->
                </div>
            </div>


            <!-- <div v-if="!$gate.isAdmin()">
                <not-found></not-found>
            </div> -->

        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            checkedPermissions: {},
            modules: {},
            roleId: "",
        }
    },
    methods: {
        copyToClipboard(action) {
            // Create a temporary textarea element to hold the text to be copied
            const textarea = document.createElement('textarea');
            textarea.value = action;
            document.body.appendChild(textarea);

            // Select the text and copy it to the clipboard
            textarea.select();
            document.execCommand('copy');

            // Remove the temporary textarea element
            document.body.removeChild(textarea);

            Toast.fire({
                icon: 'success',
                title: 'Action copied to clipboard!'
            });
        },
        updatePermission(permissionNameID, permissions, isChecked) {

            if(isChecked == true){
                axios.post('/api/permission', { permissionNameID, roleId: this.roleId })
                .then(response => {
                    Toast.fire({
                        icon: 'success',
                        title: response.data.message
                    });
                    this.loadRoleNames();
                })
                .catch(error => {
                    Toast.fire({
                        icon: 'failure',
                        title: error.data.message
                    });
                });
            }else{
                
                axios.delete('/api/permission/'+permissions[0].id)
                .then(response => {
                    Toast.fire({
                        icon: 'success',
                        title: response.data.message
                    });
                    this.loadRoleNames();
                })
                .catch(error => {
                    Toast.fire({
                        icon: 'failure',
                        title: error.data.message
                    });
                });
            }

            
        },

        loadRoleNames() {
            this.$Progress.start();

            axios.get("api/permission",{
                params: {
                    role_id: this.roleId
                }
            }).then((response) => {
                this.modules = response.data.data;
                this.$Progress.finish();
            }).catch(err => {
                this.$Progress.finish();
            });
        },
    },
    mounted() {
        // console.log('User Component mounted.');
    },
    created() {
        this.roleId = this.$route.params.id;
        this.loadRoleNames();
    },
    beforeCreate() {
    },
}
</script>
