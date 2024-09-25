<template>
    <div class="container mt-4">
      <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-header bg-info text-white">View Assigned Custodians For Docket {{ custodian_details[0].docket_no }}</div>
            <div class="card-body"  v-for="(cust, x) in custodian_details" :key="cust.id">
              <div class="badge badge-success p-2 mb-2">Active</div>
              <div>
                <strong>Name:</strong> {{ cust.name }}
              </div>
              <div>
                <strong>Email:</strong> {{cust && cust.email ? cust.email : "NA"}}
              </div>
              <div>
                <strong>Phone No.:</strong> {{cust.phone}}
              </div>
              <div>
                <strong>Comment:</strong> {{cust.comment}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script>
  export default {
    name: 'AssignedCustodians',
    data() {
        return {
            custodian_details:[]
        }
    },
    methods: {
    },
    beforeCreate() {
        console.log(" this.$route.params.id;", this.$route.params.id);

        axios.get("api/complaint/assigned-custodians/" + this.$route.params.id)
            .then((res) => {
                console.log("res====>", res.data.data);
                this.custodian_details = res.data.data.custodian_details;

                // console.log("atm",atm_details);

            });

    },
  };
  </script>

  <style scoped>
  .badge-success {
    background-color: #28a745; /* Custom green background for 'Active' badge */
  }
  .card-header {
    background-color: #17a2b8 !important; /* Customize the header background */
  }
  </style>
