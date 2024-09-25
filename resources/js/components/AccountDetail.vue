<template>
    <div class="container mt-4">
      <div class="card">
        <div class="card-header bg-info text-white">
          <h3 class="text-center mb-0">Account Details</h3>
        </div>
        <div class="card-body">
          <table class="table table-borderless">
            <tbody>
              <tr>
                <th scope="row">Name</th>
                <td>{{ accountDetails.name }}</td>
              </tr>
              <tr>
                <th scope="row">Email ID</th>
                <td>{{ accountDetails.email }}</td>
              </tr>
              <tr>
                <th scope="row">Mobile Number</th>
                <td>{{ accountDetails.mobile }}</td>
              </tr>
              <tr>
                <th scope="row">Code</th>
                <td>{{ accountDetails.user_code }}</td>
              </tr>
              <tr>
                <th scope="row">Website URL</th>
                <td><a :href="accountDetails.website_url" target="_blank">{{ accountDetails.website_url }}</a></td>
              </tr>
              <tr>
                <th scope="row">Bank Name</th>
                <td>{{ accountDetails.bank_name }}</td>
              </tr>
              <tr>
                <th scope="row">Bank Website URL</th>
                <td><a :href="accountDetails.bank_website_url" target="_blank">{{ accountDetails.bank_website_url }}</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        accountDetails: {
          name: 'HITACHI',
          email: 'axishelpdesk.east@hitachi-payments.com',
          mobile: '9380044870',
          code: 'axis@001',
          websiteUrl: 'https://www.hitachi-payments.com/',
          bankName: 'AXIS BANK',
          bankWebsiteUrl: 'https://retail.axisbank.co.in/'
        }
      };
    },
    beforeCreate() {
        axios.get("api/account-detail")
            .then((res) => {
                console.log("res====>", res.data.data);
                this.accountDetails=res.data.data;
                // this.complaint = res.data.data.complaint;
                // this.atm_details = res.data.data.atm_details;
                // this.complaint_details = res.data.data.complaint_details;
                // this.custodian_details = res.data.data.custodian_details;
                // this.sls_details = res.data.data.sls_details;
                // this.selectedStatus = this.complaint.work_status || 'Pending';
                // console.log("atm",atm_details);

            });

    },
  };
  </script>

  <style scoped>
  .card-header {
    background-color: #4bc0c0;
  }

  .table th {
    width: 30%;
  }

  .table td a {
    color: #007bff;
    text-decoration: none;
  }
  </style>
