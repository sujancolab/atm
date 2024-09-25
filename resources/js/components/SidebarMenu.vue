<template>
    <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

            <!-- <li class="nav-item" v-for="(data, x) in modules" :key="data.id">
                <router-link :to="'/'+ data.path" class="nav-link">
                    <i :class="'nav-icon '+ data.icon"></i>
                    <p>
                        {{ data.name }}
                    </p>
                </router-link>

            </li> -->
            <li class="nav-item" key="dashboard">
                <router-link to="/dashboard" class="nav-link">
                    <!-- <i :class="'nav-icon '+ data.icon"></i> -->
                    <p>
                       Dashbord
                    </p>
                </router-link>

            </li>
            <li class="nav-item" v-if="authUser.id_cms_privileges==3">
                <router-link to="/complaint" class="nav-link">
                    <!-- <i :class="'nav-icon '+ data.icon"></i> -->
                    <p>
                       Lodge a new Fault
                    </p>
                </router-link>

            </li>
            <li class="nav-item" v-if="authUser.id_cms_privileges==3">
                <router-link to="/complaint-list/1" class="nav-link">
                    <!-- <i :class="'nav-icon '+ data.icon"></i> -->
                    <p>
                       Ticket Details
                    </p>
                </router-link>

            </li>
            <li class="nav-item" v-if="authUser.id_cms_privileges==4">
                <router-link to="/complaint-list/1" class="nav-link">
                    <!-- <i :class="'nav-icon '+ data.icon"></i> -->
                    <p>
                       FLM
                    </p>
                </router-link>

            </li>
            <li class="nav-item" v-if="authUser.id_cms_privileges==4">
                <router-link to="/complaint-list/2" class="nav-link">
                    <!-- <i :class="'nav-icon '+ data.icon"></i> -->
                    <p>
                        Dispenser joined down call (AXIS BNA)
                    </p>
                </router-link>

            </li>
            <li class="nav-item" v-if="authUser.id_cms_privileges==4">
                <router-link to="/sls-list" class="nav-link">
                    <!-- <i :class="'nav-icon '+ data.icon"></i> -->
                    <p>
                       SLM
                    </p>
                </router-link>

            </li>
            <li class="nav-item" v-if="authUser.id_cms_privileges==2">
                <router-link to="/states" class="nav-link">
                    <!-- <i :class="'nav-icon '+ data.icon"></i> -->
                    <p>
                       States
                    </p>
                </router-link>

            </li>
            <li class="nav-item" v-if="authUser.id_cms_privileges==2">
                <router-link to="/districts" class="nav-link">
                    <!-- <i :class="'nav-icon '+ data.icon"></i> -->
                    <p>
                       Districts
                    </p>
                </router-link>

            </li>
            <li class="nav-item" v-if="authUser.id_cms_privileges==2">
                <router-link to="/cities" class="nav-link">
                    <!-- <i :class="'nav-icon '+ data.icon"></i> -->
                    <p>
                       Cities
                    </p>
                </router-link>

            </li>
            <li class="nav-item" v-if="authUser.id_cms_privileges==2">
                <router-link to="/postcodes" class="nav-link">
                    <!-- <i :class="'nav-icon '+ data.icon"></i> -->
                    <p>
                       Postcode
                    </p>
                </router-link>

            </li>
            <li class="nav-item" v-if="authUser.id_cms_privileges==2">
                <router-link to="/areacodes" class="nav-link">
                    <!-- <i :class="'nav-icon '+ data.icon"></i> -->
                    <p>
                       Areacode
                    </p>
                </router-link>

            </li>
            <li class="nav-item" v-if="authUser.id_cms_privileges==2">
                <router-link to="/complaint-types" class="nav-link">
                    <!-- <i :class="'nav-icon '+ data.icon"></i> -->
                    <p>
                       Complaint Types
                    </p>
                </router-link>

            </li>
            <li class="nav-item" v-if="authUser.id_cms_privileges==2">
                <router-link to="/banks" class="nav-link">
                    <!-- <i :class="'nav-icon '+ data.icon"></i> -->
                    <p>
                       Bank
                    </p>
                </router-link>

            </li>
            <li class="nav-item" v-if="authUser.id_cms_privileges==2">
                <router-link to="/clients" class="nav-link">
                    <!-- <i :class="'nav-icon '+ data.icon"></i> -->
                    <p>
                       Client
                    </p>
                </router-link>

            </li>
            <li class="nav-item" v-if="authUser.id_cms_privileges==2">
                <router-link to="/cms_users" class="nav-link">
                    <!-- <i :class="'nav-icon '+ data.icon"></i> -->
                    <p>
                       Manage Client Code
                    </p>
                </router-link>

            </li>
            <li class="nav-item" v-if="authUser.id_cms_privileges==2">
                <router-link to="/call_center_users" class="nav-link">
                    <!-- <i :class="'nav-icon '+ data.icon"></i> -->
                    <p>
                       Manage Call Center User
                    </p>
                </router-link>

            </li>
            <li class="nav-item" v-if="authUser.id_cms_privileges==2">
                <router-link to="/custodians" class="nav-link">
                    <!-- <i :class="'nav-icon '+ data.icon"></i> -->
                    <p>
                       Manage Custodian
                    </p>
                </router-link>

            </li>
            <li class="nav-item" v-if="authUser.id_cms_privileges==2">
                <router-link to="/atms" class="nav-link">
                    <!-- <i :class="'nav-icon '+ data.icon"></i> -->
                    <p>
                       Atm
                    </p>
                </router-link>

            </li>
            <li class="nav-item" v-if="authUser.id_cms_privileges==2">
                <router-link to="/admin-complaints" class="nav-link">
                    <!-- <i :class="'nav-icon '+ data.icon"></i> -->
                    <p>
                       Manage Complaint
                    </p>
                </router-link>

            </li>
            <li class="nav-item" v-if="authUser.id_cms_privileges==2">
                <router-link to="/reports" class="nav-link">
                    <!-- <i :class="'nav-icon '+ data.icon"></i> -->
                    <p>
                        Report
                    </p>
                </router-link>

            </li>
            <li class="nav-item">
                <router-link to="/account" class="nav-link">
                    <!-- <i :class="'nav-icon '+ data.icon"></i> -->
                    <p>
                       Account details
                    </p>
                </router-link>

            </li>
        </ul>
    </nav>
  </template>

  <script>
  import axios from 'axios';

  export default {
    data() {
      return {
        modules: [],
        authUser: localStorage.getItem("auth") ? JSON.parse(localStorage.getItem("auth")) : null,
      };
    },
    mounted() {
        this.authUser=localStorage.getItem("auth");
        if (this.authUser) {
            this.authUser = JSON.parse(this.authUser);
        }
      axios.get('/api/account-auth')
        .then(response => {


          console.log("response module");
          console.log(response.data.data);
          localStorage.setItem("auth", JSON.stringify(response.data.data));
          this.authUser=localStorage.getItem("auth");
        if (this.authUser) {
            this.authUser = JSON.parse(this.authUser);
        }
        })
        .catch(error => {
          console.error('Error fetching modules:', error);
        });
    },
    methods: {
      hasRequiredPermission(permissionNames) {
        if (!permissionNames || !Array.isArray(permissionNames)) {
            return false;
        }
        return permissionNames.some(permission => permission.required === "yes");
      },
      route(name) {
        return this.$route(name);
      }
    }
  };
  </script>

  <style>
  /* Add your custom styles here */
  </style>
