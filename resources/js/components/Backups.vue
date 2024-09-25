<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row">

                <div class="col-12">

                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Backup List</h3>
                            <div class="card-tools">
                                
                            </div>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body table-responsive p-0">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th class="stickey">Action</th>
                                        <th>Created At</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="Site in backups" :key="backups.id">
                                        <td>
                                            <a :href="Site.path" download class="btn btn-primary btn-sm btn-toggle-custom" v-if="$gate.hasPermission('can_download_db_backup')">Download</a>
                                        </td>
                                        <td>{{ Site.created_at | myDateTime}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- /.card-body -->
                        <div class="card-footer">
                            <pagination :data="backups" @pagination-change-page="getResults" v-if="backups"></pagination>
                        </div>
                    </div>
                    <!-- /.card -->
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
            backups: {},
        }
    },
    methods: {
        loadBackups() {
            let cloaderd = this.$loading.show();
            axios.get("api/backup").then(({
                data
            }) => {
                this.backups = data.data
                cloaderd.hide();
            });
        },
    },
    mounted() {

    },
    created() {
        this.loadBackups();
    },

    beforeCreate() {

    },
}
</script>
