<template>
    <div class="container mt-5">

        <!-- Top Information Design -->
        <div class="row mb-4 p-3 border bg-light rounded">
            <div class="col-md-4">
                <p><strong>ATM :</strong></p>
                <button class="btn btn-primary">Code - {{ complaint && complaint.atm ? complaint.atm.atm_id :
                    ""}}</button>
                <p>Address - {{ atm_details.city_name + ', ' + atm_details.district_name + ', ' + atm_details.state_name }}</p>
                <p>Area Code -{{ atm_details.area_code }}</p>
                <p>Postcode - {{ atm_details.postcode }}</p>
                <button class="btn btn-info">{{ atm_details.bank_name }}</button>
            </div>
            <div class="col-md-4">
                <p><strong>SLM Docket No :</strong></p>
                <button class="btn btn-info">{{ sls_details ? sls_details.sls_docket_no : "" }}</button>
                <p><strong>Docket No :</strong></p>
                <button class="btn btn-info">{{ complaint.docket_no }}</button>
            </div>
            <div class="col-md-4">
                <p><strong>Status :</strong></p>
                <!-- <button class="btn btn-success">Completed</button> -->
                <button v-if="complaint.work_status === 'Pending'" class="btn btn-danger">Pending</button>
                <button v-else-if="complaint.work_status === 'Processing'" class="btn btn-warning">Processing</button>
                <button v-else-if="complaint.work_status === 'Completed'" class="btn btn-success">Completed</button>

            </div>
            <div class="col-md-4">
                <div v-if="complaint.is_slm === 1 && custodian_details" class="viewtab viewtabber action-th">
                    <div v-if="myPrivilegeId === 4">
                        <label class="control-label">Assigned Custodian :</label>
                        <!-- You can enable the button below if needed for assignment functionality -->
                        <!-- <a class="action-btn" style="padding: 2px 6px; border: 1px solid #d9d9d9; color: #191919; font-size: 1.0em; text-align: center; display: inline-block; border-radius: 3px; margin: 1px;"
            :href="'/dashboard/assignTicket/' + complaint.docket_no"
            data-toggle="tooltip"
            data-placement="top"
            title="Assign Custodian">
            <i class="fa fa-user-plus"></i>
        </a> -->
                        <p class="viewaddress">
                            Custodian Name: {{ custodian_details.name }}
                            <span>({{ custodian_details.phone }})</span>
                        </p>
                    </div>
                </div>

            </div>
        </div>


        <div class="row justify-content-center">
    <div class="col-md-8">
      <div class="card chat-box">
        <div class="card-header bg-primary text-white">
          <h3 class="tableheading mb-0"><i class="fa fa-comments" aria-hidden="true"></i> Details</h3>
        </div>
        <div class="card-body chat-body">
          <div class="chat-messages">
            <div v-for="(row, index) in complaint_details" :key="index">
              <div v-if="myPrivilegeId == 3" class="mb-3">
                <div v-if="row.is_admin">
                  <div v-if="row.post_for_engineer" class="message admin engineer-message">
                    <div class="d-flex justify-content-between">
                      <h5 class="chatheading text-info">Call Center</h5>
                      <span class="date text-muted small">{{ formatDate(row.posted_at) }}</span>
                    </div>
                    <p>{{ row.comment }}</p>
                  </div>
                  <div v-else class="message admin callcenter-message">
                    <div class="d-flex justify-content-between">
                      <h5 class="chatheading text-info">Call Center</h5>
                      <span class="date text-muted small">{{ formatDate(row.posted_at) }}</span>
                    </div>
                    <p>{{ row.comment }}</p>
                  </div>
                </div>
                <div v-else class="message user-message">
                  <div class="d-flex justify-content-between">
                    <h5 class="chatheading">{{ row.client_name }}</h5>
                    <span class="date text-muted small">{{ formatDate(row.posted_at) }}</span>
                  </div>
                  <p>{{ row.comment }}</p>
                </div>
              </div>
              <div v-else-if="myPrivilegeId == 4" class="mb-3">
                <div v-if="row.is_admin">
                  <div v-if="row.post_for_engineer" class="message admin engineer-message">
                    <div class="d-flex justify-content-between">
                      <h5 class="chatheading text-info">Call Center ({{ row.name }})</h5>
                      <span class="date text-muted small">{{ formatDate(row.posted_at) }}</span>
                    </div>
                    <p>{{ row.comment }}</p>
                  </div>
                  <div v-else class="message admin callcenter-message">
                    <div class="d-flex justify-content-between">
                      <h5 class="chatheading text-info">Call Center ({{ row.name }})</h5>
                      <span class="date text-muted small">{{ formatDate(row.posted_at) }}</span>
                    </div>
                    <p>{{ row.comment }}</p>
                  </div>
                </div>
                <div v-else class="message user-message">
                  <div class="d-flex justify-content-between">
                    <h5 class="chatheading">{{ row.client_name }}</h5>
                    <span class="date text-muted small">{{ formatDate(row.posted_at) }}</span>
                  </div>
                  <p>{{ row.comment }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card-footer">
          <form @submit.prevent="submitComplaintForm">
            <div class="form-group">
              <textarea v-model="comment" :disabled="isCommentDisabled" class="form-control" placeholder="Add Comment" rows="3" required></textarea>
            </div>

            <div v-if="myPrivilegeId == 4">
              <div class="form-group">
                <select v-model="selectedStatus" class="form-control">
                  <option value="Pending">Pending</option>
                  <option value="Processing">Processing</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
              <div class="form-group" v-show="showManualClose">
                <input type="text" v-model="manualClose" class="form-control manual-close" placeholder="Manual Close" />
              </div>
              <div class="form-group" v-show="showLagReason">
                <textarea v-model="lagReason" class="form-control" placeholder="Add lag reason *"></textarea>
              </div>
            </div>

            <div class="form-group">
              <button :disabled="isCommentDisabled" type="submit" class="btn btn-primary btn-block">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>





        <!-- Chat Box Design -->
        <!-- <h2 class="text-white bg-info p-2 rounded">Details</h2>


      <div class="message-list overflow-auto" style="max-height: 300px;">
        <div
          v-for="(message, index) in messages"
          :key="index"
          :class="['card mb-3', message.type]"
        >
          <div class="card-body">
            <h5 class="card-title">{{ message.title }}</h5>
            <p class="card-text">{{ message.body }}</p>
            <p class="card-text">
              <small class="text-muted">{{ message.timestamp }}</small>
            </p>
          </div>
        </div>
      </div> -->

        <!-- Add Comment Form -->
        <!-- <div class="mt-3">
        <div class="form-group">
          <textarea
            v-model="newComment"
            class="form-control"
            rows="3"
            placeholder="Add Comment"
          ></textarea>
        </div>
        <button @click="addComment" class="btn btn-primary mt-2">Send</button>
      </div> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            // Sample messages
            messages: [
                {
                    title: "HITACHI",
                    body: "cdf",
                    timestamp: "10-09-2024 06:30 PM",
                    type: "bg-gradient-primary text-white"
                },
                {
                    title: "Call Center",
                    body: "Name: Vivekananda Sharma Email: NA Phone No.: 7908079103 Comment: Cash Dispenser Fatal",
                    timestamp: "10-09-2024 06:35 PM",
                    type: "bg-gradient-info text-white"
                },
                {
                    title: "Call Center",
                    body: "Dear Team, Please call log for Dispenser issue, Custodian: Vivekananda Sharma (7908079103) & Eng: Chaitak (8017321602), Kindly provide the docket number...",
                    timestamp: "10-09-2024 06:41 PM",
                    type: "bg-gradient-warning text-white"
                }
            ],
            complaint: {},
            atm_details: {},
            complaint_details: [],
            custodian_details: null,
            sls_details: null,
            // New comment input
            newComment: "",
            selectedStatus: null,
            myPrivilegeId:3,
            comment: '',
      selectedStatus:  this.complaint ? this.complaint.work_status : 'Pending',
      manualClose: '',
      lagReason: '',
        };
    },
    methods: {
        // Function to add a new comment
        addComment() {
            if (this.newComment.trim()) {
                const newMessage = {
                    title: "User Comment",
                    body: this.newComment,
                    timestamp: new Date().toLocaleString(),
                    type: "bg-gradient-secondary text-white"
                };
                this.messages.push(newMessage);
                this.newComment = ""; // Clear the input after adding
            }
        },
        isCommentDisabled() {
            return this.complaint.work_status === 'Completed' && this.myPrivilegeId === 3;
        },
        showManualClose() {
            return this.selectedStatus === 'Completed';
        },
        showLagReason() {
            return this.selectedStatus === 'Processing';
        },
        submitComplaintForm() {
            // Submit form logic using `comment`, `selectedStatus`, `manualClose`, and `lagReason` values.
            const formData = {
                comment: this.comment,
                status: this.selectedStatus,
                manual_close: this.manualClose,
                lag_reason: this.lagReason,
            };
            // Example POST request (replace URL as necessary)
            this.$http.post(`/dashboard/updateComplaintDetails/${this.complaint.id}`, formData)
                .then(response => {
                    // handle success
                })
                .catch(error => {
                    // handle error
                });
        },
        formatDate(date) {
            return new Date(date).toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
        },
    },
    beforeCreate() {
        console.log(" this.$route.params.id;", this.$route.params.id);

        axios.get("api/complaint/view/" + this.$route.params.id)
            .then((res) => {
                console.log("res====>", res.data.data);
                this.complaint = res.data.data.complaint;
                this.atm_details = res.data.data.atm_details;
                this.complaint_details = res.data.data.complaint_details;
                this.custodian_details = res.data.data.custodian_details;
                this.sls_details = res.data.data.sls_details;
                this.selectedStatus = this.complaint.work_status || 'Pending';
                // console.log("atm",atm_details);

            });

    },
};
</script>

<style scoped>
/* Custom Styles if necessary */
.message-list {
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    padding: 15px;
}

.card {
    border: none;
}
.chat-box {
  max-height: 600px;
  overflow-y: auto;
}

.chat-messages {
  height: 400px;
  overflow-y: auto;
}

.message {
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
}

.admin {
  background-color: #f1f1f1;
}

.engineer-message {
  border-left: 5px solid #007bff;
}

.user-message {
  background-color: #d4edda;
}

.chatheading {
  margin: 0;
  font-weight: bold;
}

.chat-body {
  padding: 20px;
  background-color: #f8f9fa;
}

.card-footer {
  background-color: #f8f9fa;
  padding: 10px;
}
</style>
