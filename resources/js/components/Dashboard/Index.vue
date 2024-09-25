<template>
    <section class="content">
        <div class="container-fluid">
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <ul class="nav nav-tabs">
                        <!-- <li><router-link to="/dashboard" class="nav-link"  >CALL LOCK STATUS</router-link></li> -->
                        <!-- <li><router-link to="/dashboard/rm_cost" class="nav-link pl-2" >  R&M COST</router-link></li> -->
                    </ul>
                </div>
            </nav>
            <router-view></router-view>
        </div>
    </section>
</template>

<script>
import {
    mapGetters,
    mapActions
} from "vuex";
export default {
    components: {

    },
    data() {
        return {

        }
    },


}
</script>
<style>
.router-link-exact-active {
    background-color: #4682b445 !important;
}
</style>
