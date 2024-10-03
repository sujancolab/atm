import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store';
import { getPermissions } from './services/permissionsService';

Vue.use(VueRouter);

// Your existing route definitions
const routes = [
    { path: '/profile', component: require('./components/Profile.vue').default },
    {
        path: '/developer', component: require('./components/Developer.vue').default,
            meta: {
                title: 'developer',
            }
     },
     {
        path: '/states', component: require('./components/States.vue').default,
            meta: {
                title: 'States',
                // requiresAuth: true,
                // requiredAction: 'can_view_state'
            }
     },
     {
        path: '/districts', component: require('./components/Districts.vue').default,
            meta: {
                title: 'Districts',
                // requiresAuth: true,
                // requiredAction: 'can_view_state'
            }
     },
     {
        path: '/cities', component: require('./components/Cities.vue').default,
            meta: {
                title: 'Cities',
                // requiresAuth: true,
                // requiredAction: 'can_view_city'
            }
     },
     {
        path: '/postcodes', component: require('./components/Postcodes.vue').default,
            meta: {
                title: 'Postcodes',
                // requiresAuth: true,
                // requiredAction: 'can_view_postcode'
            }
     },
     {
        path: '/areacodes', component: require('./components/Areacodes.vue').default,
            meta: {
                title: 'Areacodes',
                // requiresAuth: true,
                // requiredAction: 'can_view_areacode'
            }
     },
     {
        path: '/complaint-types', component: require('./components/ComplaintType.vue').default,
            meta: {
                title: 'Complainttypes',
                // requiresAuth: true,
                // requiredAction: 'can_view_complaint_type'
            }
     },
     {
        path: '/banks', component: require('./components/Bank.vue').default,
            meta: {
                title: 'Banks',
                // requiresAuth: true,
                // requiredAction: 'can_view_bank'
            }
     },
     {
        path: '/clients', component: require('./components/Client.vue').default,
            meta: {
                title: 'Clients',
                // requiresAuth: true,
                // requiredAction: 'can_view_client'
            }
     },
     {
        path: '/cms_users', component: require('./components/Cmsuser.vue').default,
            meta: {
                title: 'Cmsuser',
                // requiresAuth: true,
                // requiredAction: 'can_view_cmsuser'
            }
     },
     {
        path: '/call_center_users', component: require('./components/Callcenteruser.vue').default,
            meta: {
                title: 'Callcenteruser',
                // requiresAuth: true,
                // requiredAction: 'can_view_call_center'
            }
     },
     {
        path: '/custodians', component: require('./components/Custodian.vue').default,
            meta: {
                title: 'Custodian',
                // requiresAuth: true,
                // requiredAction: 'can_view_custodian'
            }
     },
     {
        path: '/atms', component: require('./components/Atm.vue').default,
            meta: {
                title: 'Atm',
                // requiresAuth: true,
                // requiredAction: 'can_view_atm'
            }
     },
     {
        path: '/admin-complaints', component: require('./components/Complaint.vue').default,
            meta: {
                title: 'Complaint',
                // requiresAuth: true,
                // requiredAction: 'can_view_complaint'
            }
     },
     {
        path: '/reports', component: require('./components/Report.vue').default,
            meta: {
                title: 'Report',
                // requiresAuth: true,
                // requiredAction: 'can_view_complaint'
            }
     },
     {
        path: '/complaint/assigned-custodians/:id', component: require('./components/AssignedCustodian.vue').default,
            meta: {
                title: 'Assigned Custodian',
                // requiresAuth: true,
                // requiredAction: 'can_view_complaint'
            }
     },
     {
        path: '/complaint/assign-ticket/:docket_no', component: require('./components/AssignTicket.vue').default,
            meta: {
                title: 'Assign Ticket',
                // requiresAuth: true,
                // requiredAction: 'can_view_complaint'
            }
     },
     {
        path: '/new_fault', component: require('./components/Newfault.vue').default,
            meta: {
                title: 'Newfault',
                // requiresAuth: true,
                // requiredAction: 'can_lodge_new_fault'
            }
     },
    //  {
    //     path: '/complaint_list', component: require('./components/Complaintlist.vue').default,
    //         meta: {
    //             title: 'Complaintlist',
    //             // requiresAuth: true,
    //             // requiredAction: 'can_view_complaintlist'
    //         }
    //  },
    //  {
    //     path: '/call_center_complaint_list', component: require('./components/CallCenterComplaintlist.vue').default,
    //         meta: {
    //             title: 'CallCenterComplaintlist',
    //             // requiresAuth: true,
    //             // requiredAction: 'can_view_callcenter_complaintlist'
    //         }
    //  },
    //  {
    //     path: '/sls_list', component: require('./components/Slslist.vue').default,
    //         meta: {
    //             title: 'Slslist',
    //             // requiresAuth: true,
    //             // requiredAction: 'can_view_sls_list'
    //         }
    //  },
    {
        path: '/users', component: require('./components/Users.vue').default,
            meta: {
                title: 'Users',
                requiresAuth: true,
                requiredAction: 'can_view_user'
            }
     },
    {
        path: '/roles', component: require('./components/Roles/index.vue').default,
            meta: {
                title: 'Roles',
                requiresAuth: true,
                requiredAction: 'can_view_roles'
            }
     },
    {
        path: '/products', component: require('./components/product/Products.vue').default,
            meta: {
                title: 'products',
                requiresAuth: true,
            }
    },
    {
        path: '/product/tag', component: require('./components/product/Tag.vue').default,
            meta: {
                title: 'Product Tag',
                requiresAuth: true,
            }
     },
    {
        path: '/product/category', component: require('./components/product/Category.vue').default,
        meta: {
            title: 'Product Category',
            requiresAuth: true,
        }
     },
    { path: '/notifications', component: require('./components/Notifications.vue').default },
    { path: '*', component: require('./components/NotFound.vue').default },
    {
        path: '/dashboard',
        component: () => import('./components/Dashboard/'),
        meta: {
            title: 'dashboard',
            // requiresAuth: true,
            // requiredAction: 'can_view_dashboard'
        },
        children: [
            {
                path: "/",
                name: "DashboardCallLockStatus",
                component: () => import('./components/Dashboard/DashboardCallLockStatus.vue'),
                props: true,
                meta: {
                    title: 'Dashboard Call Lock Status'
                },
            },
            {
                path: "/Dashboard/rm_cost",
                name: "DashboardRMCost",
                component: () => import('./components/Dashboard/DashboardRMCost.vue'),
                props: true,
                meta: {
                    title: 'Dashboard RM Cost'
                },
            }
        ],
        props: true,
    },
    {
        path: '/frequency-settings',
        name: 'Frequency Settings',
        component: () => import('./components/FrequencySettings.vue'),
        meta: {
            title: 'Frequency Settings',
            requiresAuth: true,
            requiredAction: 'can_view_frequency_settings'
        },
    },
    {
        path: '/backups',
        name: 'Backups',
        component: () => import('./components/Backups.vue'),
        meta: {
            title: 'Backups',
            requiresAuth: true,
            requiredAction: 'can_view_db_backup'
        },
    },
    {
        path: '/sites',
        name: 'Sites',
        component: () => import('./components/sites/index.vue'),
        meta: {
            title: 'Sites',
            requiresAuth: true,
            requiredAction: 'can_view_site'
        },
    },
    {
        path: '/vendors',
        name: 'Vendor',
        component: () => import('./components/Vendor/index.vue'),
        meta: {
            title: 'Vendor',
            requiresAuth: true,
            requiredAction: 'can_view_vendor'
        },
    },
    {
        path: '/operators',
        name: 'Operators',
        component: () => import('./components/Operators/index.vue'),
        meta: {
            title: 'Operators',
            requiresAuth: true,
            requiredAction: 'can_view_operator'
        },
    },
    {
        path: '/machines',
        name: 'Machine',
        component: () => import('./components/Machine/index.vue'),
        meta: {
            title: 'Machine',
            requiresAuth: true,
            requiredAction: 'can_view_machine'
        },
    },
    {
        path: '/complaint',
        name: 'ComplaintAdd',
        component: () => import('./components/ComplaintAddEdit.vue'),
        meta: {
            title: 'Add Complaint',
            // requiresAuth: true,
            // requiredAction: 'can_add_machine'
        },
    },
    {
        path: '/complaint-list/:id/:status?',
        name: 'ComplaintList',
        component: () => import('./components/ComplaintList.vue'),
        meta: {
            title:  'Complaint List',
            // requiresAuth: true,
            // requiredAction: 'can_add_machine'
        },
    },
    {
        path: '/complaint-details/:id',
        name: 'ComplaintDetails',
        component: () => import('./components/ComplaintDetail.vue'),
        meta: {
            title:  'Complaint Detail',
            // requiresAuth: true,
            // requiredAction: 'can_add_machine'
        },
    },
    {
        path: '/sls-list',
        name: 'SlsList',
        component: () => import('./components/SlsList.vue'),
        meta: {
            title:  'Complaint List',
            // requiresAuth: true,
            // requiredAction: 'can_add_machine'
        },
    },
    {
        path: '/account',
        name: 'AccountDetails',
        component: () => import('./components/AccountDetail.vue'),
        meta: {
            title:  'Account Detail',
            // requiresAuth: true,
            // requiredAction: 'can_add_machine'
        },
    },
    {
        path: '/machines/edit/:id',
        name: 'MachineEdit',
        component: () => import('./components/Machine/MachineAddEdit.vue'),
        meta: {
            title: 'Edit Machine',
            requiresAuth: true,
            requiredAction: 'can_edit_machine'
        },
    },
    {
        path: '/machines-category',
        name: 'Category',
        component: () => import('./components/Machine/Category.vue'),
        meta: {
            title: 'Machine Category',
            requiresAuth: true,
            requiredAction: 'can_view_category'
        },
    },
    {
        path: '/machines/category/settings/:id',
        name: 'Category Settings',
        component: () => import('./components/Machine/CategorySettings.vue'),
        meta: {
            title: 'Category Settings',
            requiresAuth: true,
            requiredAction: 'can_edit_category_pm'
        },
    },
    {
        path: '/machines-company',
        name: 'Company',
        component: () => import('./components/Machine/Company.vue'),
        meta: {
            title: 'Machine Company',
            requiresAuth: true,
            requiredAction: 'can_view_machine_company'
        },
    },
    {
        path: '/company-models',
        name: 'Model',
        component: () => import('./components/Machine/Model.vue'),
        meta: {
            title: 'Company Model',
            requiresAuth: true,
            requiredAction: 'can_view_machine_model'
        },
    },
    {
        path: '/tickets',
        component: () => import('./components/Tickets/'),
        meta: {
            title: 'Tickets',
            pagetitle: 'tickets',
            requiresAuth: true,
            requiredAction: 'can_view_ticket'
        },
        props: true,
    },
    {
        path: '/ticket/edit/:id',
        component: () => import('./components/Tickets/AddEdit.vue'),
        meta: {
            title: 'Edit Ticket',
            pagetitle: 'Ticket Add Edit',
            requiresAuth: true,
            requiredAction: 'can_edit_ticket'
        },
        props: true,
    },
    {
        path: '/ticket/add',
        component: () => import('./components/Tickets/AddEdit.vue'),
        meta: {
            title: 'Add Ticket',
            pagetitle: 'Ticket Add Edit',
            requiredAction: 'can_add_ticket'
        },
        props: true,
    },
    {
        path: '/maintenances',
        component: () => import('./components/Maintenances/'),
        meta: {
            title: 'Maintenances',
            pagetitle: 'maintenances',
            requiresAuth: true,
            requiredAction: 'can_view_maintenance'
        },
        props: true,
    },
    {
        path: '/ticket-report',
        component: () => import('./components/Tickets/Report.vue'),
        meta: {
            title: 'Ticket Report',
            pagetitle: 'report',
            requiresAuth: true,
            requiredAction: 'can_view_ticket_report'
        },
        props: true,
    },
    {
        path: '/master-report',
        component: () => import('./components/MasterReport.vue'),
        meta: {
            title: 'Master Report',
            pagetitle: 'Master Report',
            requiresAuth: true,
            requiredAction: 'can_view_master_report'
        },
        props: true,
    },
    {
        path: '/hsd-report',
        component: () => import('./components/Reports/Hsd.vue'),
        meta: {
            title: 'HSD Report',
            pagetitle: 'report',
            requiresAuth: true,
            requiredAction: 'can_view_hsd_report'
        },
        props: true,
    },
    {
        path: '/mileage-report',
        component: () => import('./components/Reports/Mileage.vue'),
        meta: {
            title: 'Mileage Report',
            pagetitle: 'report',
            requiresAuth: true,
            requiredAction: 'can_view_mileage_report'
        },
        props: true,
    },
    {
        path: '/reading-data',
        component: () => import('./components/Reading/ReadingData.vue'),
        meta: {
            title: 'Reading Data',
            pagetitle: 'Reading Data',
            requiresAuth: true,
            requiredAction: 'can_view_reading'
        },
        props: true,
    },
    {
        path: '/reading-data/add',
        component: () => import('./components/Reading/AddEditReadingData.vue'),
        meta: {
            title: 'Add Reading Data',
            pagetitle: 'Master Report',
            requiresAuth: true,
            requiredAction: 'can_add_reading'
        },
        props: true,
    },
    {
        path: '/reading-data/edit/:id',
        component: () => import('./components/Reading/AddEditReadingData.vue'),
        meta: {
            title: 'Edit Reading Data',
            pagetitle: 'Edit Reading Data',
            requiresAuth: true,
            requiredAction: 'can_edit_reading'
        },
        props: true,
    },
    {
        path: '/site-expense-report',
        component: () => import('./components/Reports/SiteWiseExpenses.vue'),
        meta: {
            title: 'Site Expenses Report',
            pagetitle: 'Site Expenses Report',
            requiresAuth: true,
            requiredAction: 'can_view_site_wise_expense_report'
        },
        props: true,
    },
    {
        path: '/machine-expense-report',
        component: () => import('./components/Reports/MachineWiseExpenses.vue'),
        meta: {
            title: 'Machine Expenses Report',
            pagetitle: 'Machine Expenses Report',
            requiresAuth: true,
            requiredAction: 'can_view_machine_wise_expense_report'
        },
        props: true,
    },
    {
        path: '/combined-expense-report',
        component: () => import('./components/Reports/CombinedExpenseReport.vue'),
        meta: {
            title: 'Combined Expense Report',
            pagetitle: 'Combined Expense Report',
            requiresAuth: true,
            requiredAction: 'can_view_combined_expense_report'
        },
        props: true,
    },
    {
        path: '/permissions/:id',
        name: 'Permissions',
        component: () => import('./components/Permissions/index.vue'),
        meta: {
            title: 'Permissions',
            requiresAuth: true,
            requiredAction: 'can_view_permissions'
        },
    },
    {
        path: '/unauthorized',
        name: 'unauthorized',
        component: () => import('./components/Unauthorized.vue'),
        meta: {
            title: 'Unauthorized'
        },
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach(async (to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        try {
            const permissions = await getPermissions();

            console.log("permission====",permissions.data);
            console.log(to);


            const requiredAction = to.matched.reduce((acc, record) => {
                if (record.meta && record.meta.requiredAction) {
                    return record.meta.requiredAction;
                }
                return acc;
            }, null);

            // If there's no requiredAction defined, proceed
            if (!requiredAction) {
                next({
                    name: 'unauthorized'
                 });
            }

            // Flatten all permission names from multiple permission sets
            const allPermissionNames = [];
            console.log("   permissions.data",   permissions.data);

            permissions.data.forEach(permissionSet => {
                allPermissionNames.push(...permissionSet.name);
                // if (permissionSet.sub_modules) {
                //     permissionSet.sub_modules.forEach(subModule => {
                //         allPermissionNames.push(...subModule.permission_names);
                //     });
                // }
            });

            // Create a set of permission actions
            // const permissionActions = new Set(
            //     allPermissionNames.map(permission => permission.action)
            // );

            // const hasPermission = permissionActions.has(requiredAction);

            // if (!hasPermission || requiredAction == null) {
            //     next({
            //         name: 'unauthorized'
            //         });
            // } else {
            //     // to.meta.permissions = permissions.data;
            //     Vue.prototype.$gate.setPermissions(permissionActions);
                next();
            // }
        } catch (error) {
            console.error('Error fetching permissions:', error);
            // next({ name: 'unauthorized' });
        }
    } else {
        next();
    }
});

export default router;
