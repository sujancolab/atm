<template>
    <div class="container mt-3">
      <!-- Header -->
      <div class="header bg-info p-2 text-white text-center">
        <h5>Assign Ticket To Custodian</h5>
      </div>

      <!-- Search Bar -->
      <div class="row mt-3">
        <div class="col-md-12 text-center">
          <input type="text" :model="doc_number" class="form-control d-inline-block w-50" placeholder="Enter Docket Number" />
          <button class="btn btn-danger ml-2" @click="getDocDetails()">Search</button>
        </div>
      </div>

      <!-- Main Content Section -->
      <div class="row mt-3">
        <!-- Docket Details -->
        <div class="col-md-7">
          <div class="card">
            <div class="card-header bg-info text-white">Docket Details</div>
            <div class="card-body" v-if="complaint_details">
              <p><strong>Docket No.:</strong> {{complaint_details.docket_no}}</p>
              <p><strong>Complaint Type:</strong> {{complaint_details.title}}</p>
              <p><strong>ATM Code:</strong> {{complaint_details.atm_code}}</p>
              <p><strong>ATM Address:</strong> {{complaint_details.city_name+', '+complaint_details.district_name+', '+complaint_details.state_name }}</p>
              <p><strong>Created At:</strong> {{complaint_details.complaint_created_at}}</p>
              <p><strong>Status:</strong> {{ complaint_details.work_status }}</p>
            </div>
          </div>
        </div>

        <!-- Assigned Custodian -->
        <div class="col-md-5">
          <div class="card">
            <div class="card-header bg-info text-white">Assigned Custodian</div>
            <div class="card-body" v-if="custodian_details">
              <p><strong>Name:</strong> {{ custodian_details.name }}</p>
              <p><strong>Email:</strong> {{ custodian_details.email }}</p>
              <p><strong>Phone No.:</strong> {{ custodian_details.phone }}</p>
              <p><strong>Comment:</strong> {{ custodian_details.comment }}</p>
              <button class="btn btn-danger" @click="cancelCustodian(custodian_details.id)">Cancel</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Assign Custodian Section -->
      <div class="row mt-3">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header bg-info text-white">Assign Custodian</div>
            <div class="card-body" v-if="custodians">

                <div class="form-group">
                  <label for="custodianSelect">Select Custodian *</label>
                  <select class="form-control" id="custodianSelect" v-model="custodian_id">
                    <option v-for="(custodian, index) in custodians" :key="custodian.id" :value="custodian.id">{{custodian.name}}( {{ custodian.user_code }} )</option>

                  </select>
                </div>
                <div class="form-group">
                  <label for="comment">Comment *</label>
                  <textarea class="form-control" v-model="comment" id="comment" rows="3"></textarea>
                </div>
                <button type="submit" @click="assignCustodian()" class="btn btn-danger">Assign</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script>
  export default {
    name: "AssignTicket",
    data() {
        return {
            doc_number:this.$route.params.docket_no,
            custodian_details:{},
            complaint_details:{},
            custodians:[],
            comment:"",
            custodian_id:""
        }
    },
    methods: {
        getDocDetails(){
            axios.post('api/get_docket_details', {
                docket_no: this.doc_number
         })
            .then((response) => {
                console.log("response.data.data",response.data.data);
                this.complaint_details=response.data.data.complaint_details;
                this.custodian_details=response.data.data.custodian_details;

                this.custodians=response.data.data.custodians;
                console.log("custodians",this.custodians);

            //    cloaderd.hide()
               if (response.data.success == true) {


               }
            })
            .catch(() => {
               cloaderd.hide();
            })
        },
        assignCustodian(){
            console.log("==custodians==",this.custodians);
            console.log("this.custodian_id",this.custodian_id);


            let custDetails=this.custodians.find(el=> el.id==this.custodian_id);
            console.log("custDetails",custDetails);

            axios.post('api/assign_custodian', {
                name:custDetails.name,
                email:custDetails.email,
                phone:custDetails.mobile,
                comment:this.comment,
                docket_no:this.complaint_details.docket_no,
                complaint_id:this.complaint_details.complaint_id,
                custodian_id:this.custodian_id
         })
            .then((response) => {
                console.log("response.data.data",response.data.data);

                this.getDocDetails();
            //    cloaderd.hide()
               if (response.data.success == true) {


               }
            })
            .catch(() => {
               cloaderd.hide();
            })
        },
        async cancelCustodian(custodian_id){
            if(confirm('Are you sure you want to cancel this custodian?')==true)
            {

                const formData = new FormData();
                formData.append('custodian_id', custodian_id);

                try {
                    const response = await axios.post('api/delete_custodian', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    });
                    // $('#addNew').modal('hide');

                    Toast.fire({
                        icon: 'success',
                        title: response.data.message
                    });

                    //this.$Progress.finish();
                    this.getDocDetails();

                    alert(response.data.success);
                } catch (error) {
                    console.error(error);
                    alert('Form submission failed.');
                }
            }
        },
    },

    beforeCreate() {
        console.log(" this.$route.params.docket_no;", );
        this.doc_number=this.$route.params.docket_no;
        // axios.get("api/assign-ticket/" + this.doc_number)
        //     .then((res) => {
        //         console.log("res====>", res.data.data);
        //         this.custodians = res.data.data.custodians;

        //         // console.log("atm",atm_details);

        //     });

            axios.post('api/get_docket_details', {
                docket_no: this.doc_number
         })
            .then((response) => {
                console.log("response.data.data",response.data.data);
                this.complaint_details=response.data.data.complaint_details;
                this.custodian_details=response.data.data.custodian_details;

                this.custodians=response.data.data.custodians;
                console.log("custodians",this.custodians);

            //    cloaderd.hide()
               if (response.data.success == true) {


               }
            })
            .catch(() => {
               cloaderd.hide();
            })






    },
  };
  </script>

  <style scoped>
  .header {
    background-color: #17a2b8; /* Bootstrap info color */
    color: white;
  }

  .card-header {
    background-color: #17a2b8;
    color: white;
  }

  .card {
    margin-bottom: 20px;
  }

  .btn-danger {
    background-color: #f06292;
    border-color: #f06292;
  }
  </style>
