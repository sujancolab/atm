<template>
    <div class="sidebar-modal" :class="{ 'active': isOpen }">
      <div class="container-fluid">
        <button class="close" @click="closeSideModal"><i class="fa fa-times" aria-hidden="true" style="font-size: 17px;color: black;"></i></button>
        <!-- Content of the sidebar modal -->
        <slot></slot>
      </div>
      <div @click="closeSideModal"></div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isOpen: false,
      };
    },
    methods: {
        openSideModal() {
        this.isOpen = true;
      },
      closeSideModal() {
        this.isOpen = false;
      },
    },
  };
  </script>
  
  <style scoped>
  .close{
    position: absolute;
    right: 10px;
    border: 1px solid black;
    width: 33px;
    height: 33px;
    background: white;
    border-radius: 50px;
  }
  .sidebar-modal {
    padding: 10px 0 10px;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    width: 450px; /* Adjust as needed */
    background-color: #fff;
    box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease;
    transform: translateX(100%);
    z-index: 9999;
    overflow-y: auto;
  }
  
  .sidebar-modal.active {
    transform: translateX(0);
  }
  
  .sidebar-content {
    height: 100%;
    overflow-y: auto;
  }
  
  .sidebar-overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
  </style>