<template>
    <li class="nav-item dropdown">
        <a class="nav-link" data-toggle="dropdown" href="javascript:void(0);">
            <i class="far fa-bell"></i>
            <span class="badge badge-warning navbar-badge">{{  PendingNotification?PendingNotification:0 }}</span>
        </a>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <template v-if="Notifications && Notifications.data">

                <span class="dropdown-item dropdown-header">{{ Notifications?Notifications.total:'' }} Notifications</span>
                <template v-for="(notification, x) in Notifications.data" v-if="notification.data">
                    <div class="dropdown-divider" :key="'d'+x"></div>
                    <a href="javascript:void(0);" class="dropdown-item" :key="'m'+x">
                        <i class="fas fa-envelope mr-2"></i> {{notification.data.title}}
                        <span class="float-right text-muted text-sm">{{ notification.created_at|myDateTime }}</span>
                    </a>
                </template>

            </template>
            <div class="dropdown-divider"></div>
            <!-- <router-link to="/notifications" class="dropdown-item dropdown-footer">See All Notifications</router-link> -->

        </div>
    </li>

</template>

<script>
import {
    mapGetters,
    mapActions
} from "vuex";

export default {
    name: "Header",
    data() {
        return {

        };
    },
    computed: {
        ...mapGetters("Common", ["Notifications", "PendingNotification"])
    },


    async created() {
       this.getPendingNotifications();
        await this.getNotifications({
            ppp: 5,
         })
    },
    watch: {
        $route: {
            immediate: true,
            handler(to, from) {
                this.getPendingNotifications();
                this.getNotifications({ppp: 5});

            }
        },

        user: {
            handler: function (newValue) {
                if (newValue) {
                     this.getPendingNotifications();
                     this.getNotifications({ppp: 5});
                }
            },
            deep: true
        },
    },
    methods: {
        ...mapActions("Common", ["getNotifications", "updateNotification","getPendingNotifications"]),
    },
};
</script>

