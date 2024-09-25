<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row">

                <div class="col-12">

                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Notifications</h3>
                            <div class="card-tools">
                            </div>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body table-responsive p-0">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Sl. No</th>
                                        <th>Name</th>
                                        <th>Created</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody v-if="Notifications && Notifications.data">
                                    <tr v-for="(notification, x) in Notifications.data" :key="x"
                                        v-if="notification.data" :class="{ 'unread': !notification.read_at }"
                                        @click="update_notification(notification)">

                                        <td>{{ Notifications.from + x }}</td>
                                        <td>
                                            <h5 v-html="notification.data.title" v-if="notification.data.title"></h5>
                                            <p v-html="notification.data.sub_title" v-if="notification.data.sub_title">
                                            </p>
                                            <p v-html="notification.data.description"
                                                v-if="notification.data.description" class="noti_desc"></p>
                                        </td>
                                        <td>{{ notification.created_at | myDateTime }}</td>
                                        <td>
                                            <a href="javascript:void(0);" class="checknow-btn btn"
                                                @click="update_notification(notification)"
                                                v-if="notification.read_at===null">Check Now</a>

                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- /.card-body -->
                        <div class="card-footer" v-if="Notifications">
                            <pagination :data="Notifications" :limit="10" @pagination-change-page="fetchNotifications()">
                            </pagination>
                        </div>
                    </div>
                    <!-- /.card -->
                </div>
            </div>
        </div>
    </section>


</template>
<script>
import {
    mapGetters,
    mapActions
} from "vuex";
export default {
    name: "Notifications",
    data() {
        return {
            pageLoader: '',
            ppp: 10
        }
    },
    computed: {
        ...mapGetters("Common", ["Notifications", "PendingNotification"])
    },
    methods: {
        ...mapActions("Common", ["getNotifications", "updateNotification"]),

        async fetchNotifications(val = '') {
            this.pageLoader = this.$loading.show({
                container: this.$refs.main_ref
            });
            await this.getNotifications({
                    ppp: this.ppp,
                    url: val
                })
                .then(() => {
                    this.contentScroll('notficationList');
                    this.pageLoader.hide()
                })
                .catch(err => {
                    this.pageLoader.hide()
                });
        },

        async update_notification(notification) {
            if (notification.read_at === null) {
                await this.updateNotification(notification)
                    .then((res) => {
                        notification.read_at = new Date()
                    })
            }
        }
    },
    created() {
        this.fetchNotifications()
    },
    mounted() {

    },
    beforeDestroy() {
        this.pageLoader.hide();
    },
}
</script>
<style scoped>
.unread {
   background-color: #ccc6c9 !important;
}
</style>
