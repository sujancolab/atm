<template>
    <div class="col-md-3 mb-4">
      <div class="card">
        <h5>{{ title }}</h5>
        <p>{{ value }}</p>
      </div>
    </div>
  </template>

  <script>
  export default {
    props: {
      title: String,
      value: Number
    }
  };
  </script>

  <style scoped>
  .card {
    background-color: #e77e3a;
    color: white;
    text-align: center;
    padding: 30px;
    border-radius: 10px;
  }
  </style>
