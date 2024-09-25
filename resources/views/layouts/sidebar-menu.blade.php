<nav class="mt-2">
    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        <li class="nav-item">
            <router-link to="/dashboard" class="nav-link">
                <i class="nav-icon fas fa-tachometer-alt blue"></i>
                <p>
                    Dashboard
                </p>
            </router-link>
        </li>

        @can('isAdmin')
        <li class="nav-item">
            <router-link to="/users" class="nav-link">
                <i class="fa fa-users nav-icon blue"></i>
                <p>Users</p>
            </router-link>
        </li>
        @endcan
        @can('isAdmin')
        <li class="nav-item">
            <router-link to="/vendors" class="nav-link">
                <i class="fa fa-users nav-icon blue"></i>
                <p>Vendors</p>
            </router-link>
        </li>
        @endcan

        @can('isAdmin')
        <li class="nav-item">
            <router-link to="/operators" class="nav-link">
                <i class="fa fa-users nav-icon blue"></i>
                <p>Operators</p>
            </router-link>
        </li>
        @endcan

        @can('isAdmin')
        <li class="nav-item">
            <router-link to="/sites" class="nav-link">
                <i class="nav-icon fas fa-list orange"></i>
                <p>Sites</p>
            </router-link>
        </li>
        @endcan



        @can('isAdmin')
        <li class="nav-item has-treeview">
            <a href="javascript:void(0);" class="nav-link">
                <i class="nav-icon fas fa-cog green"></i>
                <p>
                    Machines
                    <i class="right fas fa-angle-left"></i>
                </p>
            </a>
            <ul class="nav nav-treeview">
                <li class="nav-item">
                    <router-link to="/machines" class="nav-link">
                        <i class="nav-icon fas fa-cog green"></i>
                        <p>
                            Machine List
                        </p>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/machines/category" class="nav-link">
                        <i class="nav-icon fas fa-list-ol green"></i>
                        <p>
                            Category
                        </p>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/machines/company" class="nav-link">
                        <i class="nav-icon fas fa-tags green"></i>
                        <p>
                            Make Company
                        </p>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/machines/company_models" class="nav-link">
                        <i class="nav-icon fas fa-tags pink"></i>
                        <p>
                            Make Model
                        </p>
                    </router-link>
                </li>

            </ul>
        </li>
        @endcan


        <li class="nav-item">
            <router-link to="/tickets" class="nav-link">
                <i class="nav-icon fas fa-list orange"></i>
                <p>Ticket</p>
            </router-link>
        </li>

        <li class="nav-item">
            <router-link to="/ticket_report" class="nav-link">
                <i class="fa fa-file nav-icon pink"></i>
                <p>Ticket Report</p>
            </router-link>
        </li>

        <li class="nav-item">
            <router-link to="/maintenances" class="nav-link">
                <i class="nav-icon fas fa-list orange"></i>
                <p>Machine Maintenance</p>
            </router-link>
        </li>
        <li class="nav-item">
            <router-link to="/master_report" class="nav-link">
                <i class="fa fa-file nav-icon pink"></i>
                <p>Master Report</p>
            </router-link>
        </li>

        <li class="nav-item">
            <router-link to="/reading-data" class="nav-link">
                <i class="fa fa-file nav-icon pink"></i>
                <p>Reading Data</p>
            </router-link>
        </li>

        @can('isAdmin')

        <li class="nav-item has-treeview">
            <a href="javascript:void(0);" class="nav-link">
                <i class="nav-icon fas fa-file red"></i>
                <p>
                    Expense Reports
                    <i class="right fas fa-angle-left"></i>
                </p>
            </a>
            <ul class="nav nav-treeview">
                <li class="nav-item">
                    <router-link to="/reports/site_expenses" class="nav-link">
                        <i class="nav-icon fas fa-tags green"></i>
                        <p>
                            Site Wise Expenses
                        </p>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/reports/machine_expenses" class="nav-link">
                        <i class="nav-icon fas fa-tags green"></i>
                        <p>
                            Machine Wise Expense
                        </p>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/reports/combined_expense_report" class="nav-link">
                        <i class="nav-icon fas fa-tags blue"></i>
                        <p>
                            Combined Expense
                        </p>
                    </router-link>
                </li>
            </ul>
        </li>

        @endcan


        @can('isAdmin')
        <li class="nav-item has-treeview">
            <a href="javascript:void(0);" class="nav-link">
                <i class="nav-icon fas fa-cog orange"></i>
                <p>
                    Settings
                    <i class="right fas fa-angle-left"></i>
                </p>
            </a>
            <ul class="nav nav-treeview">
                <li class="nav-item">
                    <router-link to="/settings" class="nav-link">
                        <i class="nav-icon fas fa-cog green"></i>
                        <p>
                            General Settings
                        </p>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/roles" class="nav-link">
                        <i class="nav-icon fas fa-user-plus green"></i>
                        <p>
                            Roles
                        </p>
                    </router-link>
                </li>
            </ul>
        </li>


        <li class="nav-item">
            <router-link to="/backups" class="nav-link">
                <i class="nav-icon fas fa-database green"></i>
                <p>
                    DB Backup
                </p>
            </router-link>
        </li>
        @endcan



        <li class="nav-item">
            <a href="#" class="nav-link" onclick="event.preventDefault();
          document.getElementById('logout-form').submit();">
                <i class="nav-icon fas fa-power-off red"></i>
                <p>
                    {{ __('Logout') }}
                </p>
            </a>
            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                @csrf
            </form>
        </li>
    </ul>
</nav>