<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <meta name="api-base-url" content="{{ config('app.url', '/') }}" />
  <meta id="appname" content="{{ config('app.name', 'Laravel') }}" />
  <base href="{{ config('app.url', '/') }}">
  <link rel="icon" href="{{ url('favicon.ico') }}" type="image/x-icon">
  <meta name="theme-color" content="#6777ef" />
  <link rel="apple-touch-icon" href="{{ asset('images/icon.png') }}">
  <link rel="manifest" href="{{ asset('/manifest.json') }}">
  <title>{{ config('app.name', 'Laravel') }}</title>


  <link rel="stylesheet" href="{{ mix('/css/app.css') }}">

  <link rel="stylesheet" href="{{ asset('css/style.css') }}">
</head>

<body class="hold-transition  sidebar-mini sidebar-collapse">

  <div class="wrapper" id="app">

    <!-- Navbar -->
    <nav class="main-header navbar navbar-expand bg-white navbar-light border-bottom">
      <!-- Left navbar links -->
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" data-widget="pushmenu" href="javascript:void(0);"><i class="fa fa-bars"></i></a>
        </li>
      </ul>
      <!-- Brand Logo -->
      <img src="{{ asset('/images/logo.png') }}" alt="The Logo" class="brand-image" style="width: 108px; margin-left: 10px;">
      <span class="brand-text font-weight-light">&nbsp;</span>
      <ul class="navbar-nav ml-auto">

        <headerbar />

      </ul>

    </nav>
    <!-- /.navbar -->

    <!-- Main Sidebar Container -->
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <!-- Sidebar -->
      <div class="sidebar">
        <!-- Sidebar user panel (optional) -->
        <router-link to="/profile">
          <div class="user-panel mt-3 d-flex">

              <div class="image">
                <img src="{{ auth()->user()->photo }}" class="img-circle elevation-2" alt="User Image">
              </div>
              <div class="info" style="width: 147px; padding-top:0px;">

                {{ Auth::user()->name }}
                <span class="d-block text-muted">
                  {{-- {{ Ucfirst(Auth::user()->role[0]->name) }} --}}
                </span>
              </div>
              <div class="info">
                  <a href="#" style="font-size: 20px;" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                  <i class="nav-icon fas fa-power-off red"></i>
                </a>
                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                    @csrf
                </form>
              </div>



          </div>
          </router-link>



        <!-- Sidebar Menu -->
        <!-- @include('layouts.sidebar-menu') -->
        <sidebar-menu></sidebar-menu>
        <!-- /.sidebar-menu -->
      </div>
      <!-- /.sidebar -->
    </aside>

    {{-- Content Wrapper. Contains page content --}}
    <div class="content-wrapper">
      {{-- Main content --}}

      <!-- Content Header (Page header) -->
      <div class="content-header">
        <div class="container-fluid">
          {{-- <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark"></h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="javascript:void(0);">Home</a></li>
              <li class="breadcrumb-item active">Starter Page</li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row --> --}}
        </div><!-- /.container-fluid -->
      </div>
      <!-- /.content-header -->

      <!-- Main content -->
      <router-view></router-view>

      <vue-progress-bar></vue-progress-bar>

      {{-- /.content --}}
    </div>
    {{-- /.content-wrapper --}}

    {{-- Main Footer --}}
    <footer class="main-footer">
      {{-- To the right --}}
      <div class="float-right d-none d-sm-block">
        <b>Version</b> 1.0.0
      </div>
      {{-- Default to the left --}}
      <strong>Copyright &copy; {{date('Y')}} {{ config('app.name', 'Laravel') }}.</strong> All rights reserved.
    </footer>
  </div>
  {{-- ./wrapper --}}

  @auth
  <script>
    window.user = @json(auth()->user())
  </script>
  @endauth
  <script src="{{ asset(mix('js/app.js')) }}"></script>
  <style type="text/css">
    .nav-link.router-link-active {
      background-color: steelblue;
    }

    .required {
      border-left: 2px solid red;
    }

    .invalid-feedback {
      display: block;
    }

    .multi-range-slider-bar-only .bar-inner {
      background-color: #b1b1b1 !important;
    }
  </style>
  <script>
    if (!navigator.serviceWorker.controller) {
      navigator.serviceWorker.register("/sw.js").then(function(reg) {
        console.log("Service worker has been registered for scope: " + reg.scope);
      });
    }
  </script>
  <script>
    import {
      mapGetters,
      mapActions
    } from "vuex";

    export default {
      name: "Header",
      data() {
        return {
          headerclass: 'bgWhite',
          success: null,
          error: null,
        };
      },
      computed: {
        ...mapGetters("auth", ["user"]),
        ...mapGetters("Common", ["Notifications", "PendingNotification"])
      },
      updated: function() {
        this.$nextTick(function() {

        })
      },

      mounted() {

        /********  ********/
        this.check_validUser();
        this.$root.$on("get_profile", (text) => {
          this.getUserData();
        });

        this.$root.$on("check_verified_User", (n) => {
          this.check_validUser();
        });

      },

      async created() {
        // console.log(this.$router)
        //console.log(this.$router.history.current)
        // console.log(this.user.email_verified_at)
      },
      watch: {
        $route: {
          immediate: true,
          handler(to, from) {
            this.check_validUser();
            var appname = document.getElementById("appname").getAttribute('content');
            document.title = appname + ': ' + to.meta.title || '';
          }
        },

        user: {
          handler: function(newValue, old) {
            if (newValue) {
              if (newValue && newValue != old) {
                this.check_validUser();
              }
            }
          },
          deep: true
        }
      },
      methods: {
        ...mapActions("auth", ["sendLogoutRequest", "getUserData"]),
        ...mapActions("Common", ["getNotifications", "getPendingNotifications"]),
        async check_validUser() {
          if (localStorage.getItem("authToken")) {
            if (!this.user) {
              this.getUserData();
            } else {
              this.$cookies.set("wev_ut", this.user.type, "1d");
              if (this.user) {
                this.fetch_notification()
              }
              if (!this.user.email_verified_at && this.$router.history.current.name != 'Verify') {
                this.$router.push("/verifiction").catch(() => {});
              }
              if (this.user.email_verified_at && (this.$router.history.current.name == 'Verify' || this.$router.history.current.name == 'Verifiction')) {
                this.$router.push(this.$route.query.redirect || '/').catch(() => {});
              }
            }
          }
        },

        async fetch_notification() {
          if (this.user) {
            this.getPendingNotifications()
            this.getNotifications({
              ppp: 5,
              url: ''
            })
          }
          setTimeout(() => this.fetch_notification(), 200000);
        },

        logout() {
          let logout_loader = this.$loading.show({
            opacity: 0.9
          });
          this.sendLogoutRequest().then(() => {
            let rr = this.$router;
            setTimeout(function() {
              //  rr.go('/login');
              //window.location.href='/login';
              rr.push("/login").catch(() => {});
              logout_loader.hide()
              Toast.fire({
                icon: 'success',
                title: 'Logged Out Successfully'
              });
            }, 1000);
          });
        },
      },
    };
  </script>
  <style>
    .table-dark>td {
      background-color: #303539c7 !important;
    }
  </style>
</body>

</html>
