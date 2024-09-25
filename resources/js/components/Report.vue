<template>
    <div class="container">
      <p>Generate Reports</p>

      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="reportType">SELECT REPORT TYPE</label>
          <select v-model="reportType" class="form-control" id="reportType" required>
            <option value="" disabled>Select Report Type</option>
            <option value="All">All</option>
            <option value="SLM">SLM</option>
            <option value="FLM">FLM</option>
            <option value="Dispenser joined down call (AXIS BNA)">
              Dispenser joined down call (AXIS BNA)
            </option>
          </select>
        </div>

        <div class="form-group">
          <label for="fromDate">FROM DATE</label>
          <input
            type="date"
            v-model="fromDate"
            class="form-control"
            id="fromDate"
            required
          />
        </div>

        <div class="form-group">
          <label for="toDate">TO DATE</label>
          <input
            type="date"
            v-model="toDate"
            class="form-control"
            id="toDate"
            required
          />
        </div>

        <button type="submit" class="btn btn-primary">CSV EXPORT</button>
      </form>
    </div>
  </template>

  <script>
  import axios from 'axios';

  export default {
    data() {
      return {
        reportType: '',
        fromDate: '',
        toDate: ''
      };
    },
    methods: {
        async submitForm() {
    const data = {
      complaint_type: this.reportType,
      from_date: this.fromDate,
      to_date: this.toDate
    };

    try {
      const response = await axios.post('/api/generate-report', data, {
        responseType: 'blob'  // This is important for file downloads
      });
      console.log("response",response);


      // Create a link to download the file
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'report.xlsx');  // or other file name
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Error generating report:', error);
    }
  }
    }
  };
  </script>

  <style scoped>
  .container {
    margin-top: 20px;
  }

  .form-group {
    margin-bottom: 15px;
  }

  .btn {
    background-color: #8B0000;
    color: white;
  }
  </style>
