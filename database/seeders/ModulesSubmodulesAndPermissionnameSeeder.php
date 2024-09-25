<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Module;
use App\Models\PermissionNames;
use App\Models\Permissions;
use App\Models\Role;
use App\Models\SubModule;

class ModulesSubmodulesAndPermissionnameSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $dashboardModule = Module::create(['icon' => 'fas fa-tachometer-alt blue', 'name' => 'Dashboard', 'slug' => 'dashboard', 'order' => 1]);
        $usersModule = Module::create(['icon' => 'fa fa-users nav-icon blue', 'name' => 'Users', 'slug' => 'users', 'order' => 2]);
        $vendorsModule = Module::create(['icon' => 'fa fa-users nav-icon blue', 'name' => 'Vendors', 'slug' => 'vendors', 'order' => 3]);
        $operatorsModule = Module::create(['icon' => 'fa fa-users nav-icon blue', 'name' => 'Operators', 'slug' => 'operators', 'order' => 4]);
        $sitesModule = Module::create(['icon' => 'fas fa-list orange', 'name' => 'Sites', 'slug' => 'sites', 'order' => 5]);
        
        $machinesModule = Module::create(['icon' => 'fas fa-cog green', 'name' => 'Machines', 'slug' => '', 'order' => 6]);
        $machineListSubModule = SubModule::create(['module_id' => $machinesModule->id, 'icon' => 'fas fa-cog green', 'name' => 'Machine List', 'slug' => 'machines', 'order' => 1]);
        $categorySubModule = SubModule::create(['module_id' => $machinesModule->id, 'icon' => 'fas fa-tags green', 'name' => 'Machine Category', 'slug' => 'machines-category', 'order' => 2]);
        $companySubModule = SubModule::create(['module_id' => $machinesModule->id, 'icon' => 'fas fa-tags green', 'name' => 'Machine Company', 'slug' => 'machines-company', 'order' => 3]);
        $modelSubModule = SubModule::create(['module_id' => $machinesModule->id, 'icon' => 'fas fa-tags green', 'name' => 'Machine Model', 'slug' => 'company-models', 'order' => 4]);
       
        $ticketsModule = Module::create(['icon' => 'fas fa-list orange', 'name' => 'Tickets', 'slug' => 'tickets', 'order' => 8]);
        $maintenancesModule = Module::create(['icon' => 'fas fa-list orange', 'name' => 'Maintainance', 'slug' => '', 'order' => 9]);
        $machineMaintainanceSubModule = SubModule::create(['module_id' => $maintenancesModule->id, 'icon' => 'fas fa-cog green', 'name' => 'Machine Maintainance', 'slug' => 'maintenances', 'order' => 1]);
        $readingSubModule = SubModule::create(['module_id' => $maintenancesModule->id, 'icon' => 'fa fa-file pink', 'name' => 'Reading Data', 'slug' => 'reading-data', 'order' => 2]);
       
        $reportModule = Module::create(['icon' => 'fa fa-file green', 'name' => 'Reports', 'slug' => '', 'order' => 10]);
        $siteSubModule = SubModule::create(['module_id' => $reportModule->id, 'icon' => 'fas fa-tags green', 'name' => 'Site Wise Expense', 'slug' => 'site-expenses-report', 'order' => 1]);
        $machineSubModule = SubModule::create(['module_id' => $reportModule->id, 'icon' => 'fas fa-tags green', 'name' => 'Machine Wise Expense', 'slug' => 'machine-expenses-report', 'order' => 2]);
        $combinedSubModule = SubModule::create(['module_id' => $reportModule->id, 'icon' => 'fas fa-tags green', 'name' => 'Combined Expense', 'slug' => 'combined-expense-report', 'order' => 3]);
        $ticketSubModule = SubModule::create(['module_id' => $reportModule->id, 'icon' => 'fas fa-tags green', 'name' => 'Ticket Report', 'slug' => 'ticket-report', 'order' => 4]);
        $masterSubModule = SubModule::create(['module_id' => $reportModule->id, 'icon' => 'fas fa-tags green', 'name' => 'Master Report', 'slug' => 'master-report', 'order' => 5]);
        $hsdSubModule = SubModule::create(['module_id' => $reportModule->id, 'icon' => 'fas fa-tags green', 'name' => 'HSD Report', 'slug' => 'hsd-report', 'order' => 6]);
        $mileageSubModule = SubModule::create(['module_id' => $reportModule->id, 'icon' => 'fas fa-tags green', 'name' => 'Mileage Report', 'slug' => 'mileage-report', 'order' => 7]);

        $settingsModule = Module::create(['icon' => 'fas fa-cog green', 'name' => 'Settings', 'slug' => '', 'order' => 11]);
        $timmingSubModule = SubModule::create(['module_id' => $settingsModule->id, 'icon' => 'fas fa-clock green', 'name' => 'Timming Settings', 'slug' => 'timming-settings', 'order' => 1]);
        $rolesSubModule = SubModule::create(['module_id' => $settingsModule->id, 'icon' => 'fas fa-user-plus green', 'name' => 'Roles', 'slug' => 'roles', 'order' => 2]);
   
        $dbModule = Module::create(['icon' => 'fas fa-database green', 'name' => 'DB Backup', 'slug' => 'backups', 'order' => 12]);
        
        
        PermissionNames::create(['module_id' => $dashboardModule->id, 'sub_module_id' => null, 'name' => 'Can view dashboard', 'action' => 'can_view_dashboard', 'required' => true, 'order' => 1]);
        
        PermissionNames::create(['module_id' => $usersModule->id, 'sub_module_id' => null, 'name' => 'Can view user data', 'action' => 'can_view_user', 'required' => true, 'order' => 1]);
        PermissionNames::create(['module_id' => $usersModule->id, 'sub_module_id' => null, 'name' => 'Can add new user', 'action' => 'can_add_user', 'order' => 1]);
        PermissionNames::create(['module_id' => $usersModule->id, 'sub_module_id' => null, 'name' => 'Can edit existing user', 'action' => 'can_edit_user', 'order' => 1]);
        PermissionNames::create(['module_id' => $usersModule->id, 'sub_module_id' => null, 'name' => 'Can delete existing user', 'action' => 'can_delete_user', 'order' => 1]);

        PermissionNames::create(['module_id' => $vendorsModule->id, 'sub_module_id' => null, 'name' => 'Can view vendor data', 'action' => 'can_view_vendor', 'required' => true, 'order' => 1]);
        PermissionNames::create(['module_id' => $vendorsModule->id, 'sub_module_id' => null, 'name' => 'Can add new vendor', 'action' => 'can_add_vendor', 'order' => 1]);
        PermissionNames::create(['module_id' => $vendorsModule->id, 'sub_module_id' => null, 'name' => 'Can edit existing vendor', 'action' => 'can_edit_vendor', 'order' => 1]);
        PermissionNames::create(['module_id' => $vendorsModule->id, 'sub_module_id' => null, 'name' => 'Can delete existing vendor', 'action' => 'can_delete_vendor', 'order' => 1]);
    
        PermissionNames::create(['module_id' => $operatorsModule->id, 'sub_module_id' => null, 'name' => 'Can view operator data', 'action' => 'can_view_operator', 'required' => true, 'order' => 1]);
        PermissionNames::create(['module_id' => $operatorsModule->id, 'sub_module_id' => null, 'name' => 'Can add new operator', 'action' => 'can_add_operator', 'order' => 1]);
        PermissionNames::create(['module_id' => $operatorsModule->id, 'sub_module_id' => null, 'name' => 'Can edit existing operator', 'action' => 'can_edit_operator', 'order' => 1]);
        PermissionNames::create(['module_id' => $operatorsModule->id, 'sub_module_id' => null, 'name' => 'Can delete existing operator', 'action' => 'can_delete_operator', 'order' => 1]);

        PermissionNames::create(['module_id' => $sitesModule->id, 'sub_module_id' => null, 'name' => 'Can view site data', 'action' => 'can_view_site', 'required' => true, 'order' => 1]);
        PermissionNames::create(['module_id' => $sitesModule->id, 'sub_module_id' => null, 'name' => 'Can add new site', 'action' => 'can_add_site', 'order' => 1]);
        PermissionNames::create(['module_id' => $sitesModule->id, 'sub_module_id' => null, 'name' => 'Can edit existing site', 'action' => 'can_edit_site', 'order' => 1]);
        PermissionNames::create(['module_id' => $sitesModule->id, 'sub_module_id' => null, 'name' => 'Can delete existing site', 'action' => 'can_delete_site', 'order' => 1]);

        PermissionNames::create(['module_id' => $machinesModule->id, 'sub_module_id' => $machineListSubModule->id, 'name' => 'Can view machine data', 'action' => 'can_view_machine', 'required' => true, 'order' => 1]);
        PermissionNames::create(['module_id' => $machinesModule->id, 'sub_module_id' => $machineListSubModule->id, 'name' => 'Can add new machine', 'action' => 'can_add_machine', 'order' => 1]);
        PermissionNames::create(['module_id' => $machinesModule->id, 'sub_module_id' => $machineListSubModule->id, 'name' => 'Can edit existing machine', 'action' => 'can_edit_machine', 'order' => 1]);
        PermissionNames::create(['module_id' => $machinesModule->id, 'sub_module_id' => $machineListSubModule->id, 'name' => 'Can delete existing machine', 'action' => 'can_delete_machine', 'order' => 1]);
        PermissionNames::create(['module_id' => $machinesModule->id, 'sub_module_id' => $machineListSubModule->id, 'name' => 'Can view CAM list', 'action' => 'can_view_cam', 'order' => 1]);
        PermissionNames::create(['module_id' => $machinesModule->id, 'sub_module_id' => $machineListSubModule->id, 'name' => 'Can change CAM', 'action' => 'can_add_cam', 'order' => 1]);
        PermissionNames::create(['module_id' => $machinesModule->id, 'sub_module_id' => $machineListSubModule->id, 'name' => 'Can view operator change list', 'action' => 'can_view_operator_change', 'order' => 1]);
        PermissionNames::create(['module_id' => $machinesModule->id, 'sub_module_id' => $machineListSubModule->id, 'name' => 'Can change operator', 'action' => 'can_change_operator', 'order' => 1]);
        
        PermissionNames::create(['module_id' => $machinesModule->id, 'sub_module_id' => $categorySubModule->id, 'name' => 'Can view category data', 'action' => 'can_view_category', 'required' => true, 'order' => 1]);
        PermissionNames::create(['module_id' => $machinesModule->id, 'sub_module_id' => $categorySubModule->id, 'name' => 'Can add new category', 'action' => 'can_add_category', 'order' => 1]);
        PermissionNames::create(['module_id' => $machinesModule->id, 'sub_module_id' => $categorySubModule->id, 'name' => 'Can edit existing category', 'action' => 'can_edit_category', 'order' => 1]);
        PermissionNames::create(['module_id' => $machinesModule->id, 'sub_module_id' => $categorySubModule->id, 'name' => 'Can delete existing category', 'action' => 'can_delete_category', 'order' => 1]);
        PermissionNames::create(['module_id' => $machinesModule->id, 'sub_module_id' => $categorySubModule->id, 'name' => 'Can change category frequncy settings', 'action' => 'can_edit_category_pm', 'order' => 1]);

        PermissionNames::create(['module_id' => $machinesModule->id, 'sub_module_id' => $companySubModule->id, 'name' => 'Can view machine company data', 'action' => 'can_view_machine_company', 'required' => true, 'order' => 1]);
        PermissionNames::create(['module_id' => $machinesModule->id, 'sub_module_id' => $companySubModule->id, 'name' => 'Can add new machine company', 'action' => 'can_add_machine_company', 'order' => 1]);
        PermissionNames::create(['module_id' => $machinesModule->id, 'sub_module_id' => $companySubModule->id, 'name' => 'Can edit existing machine company', 'action' => 'can_edit_machine_company', 'order' => 1]);
        PermissionNames::create(['module_id' => $machinesModule->id, 'sub_module_id' => $companySubModule->id, 'name' => 'Can delete existing machine company', 'action' => 'can_delete_machine_company', 'order' => 1]);
    
        PermissionNames::create(['module_id' => $machinesModule->id, 'sub_module_id' => $modelSubModule->id, 'name' => 'Can view machine model data', 'action' => 'can_view_machine_model', 'required' => true, 'order' => 1]);
        PermissionNames::create(['module_id' => $machinesModule->id, 'sub_module_id' => $modelSubModule->id, 'name' => 'Can add new machine model', 'action' => 'can_add_machine_model', 'order' => 1]);
        PermissionNames::create(['module_id' => $machinesModule->id, 'sub_module_id' => $modelSubModule->id, 'name' => 'Can edit existing machine model', 'action' => 'can_edit_machine_model', 'order' => 1]);
        PermissionNames::create(['module_id' => $machinesModule->id, 'sub_module_id' => $modelSubModule->id, 'name' => 'Can delete existing machine model', 'action' => 'can_delete_machine_model', 'order' => 1]);
    
        PermissionNames::create(['module_id' => $ticketsModule->id, 'sub_module_id' => null, 'name' => 'Can view ticket data', 'action' => 'can_view_ticket', 'required' => true, 'order' => 1]);
        PermissionNames::create(['module_id' => $ticketsModule->id, 'sub_module_id' => null, 'name' => 'Can add new ticket', 'action' => 'can_add_ticket', 'order' => 1]);
        PermissionNames::create(['module_id' => $ticketsModule->id, 'sub_module_id' => null, 'name' => 'Can edit existing ticket', 'action' => 'can_edit_ticket', 'order' => 1]);
        PermissionNames::create(['module_id' => $ticketsModule->id, 'sub_module_id' => null, 'name' => 'Can delete existing ticket', 'action' => 'can_delete_ticket', 'order' => 1]);
        PermissionNames::create(['module_id' => $ticketsModule->id, 'sub_module_id' => null, 'name' => 'Can close ticket', 'action' => 'can_close_ticket', 'order' => 1]);
        PermissionNames::create(['module_id' => $ticketsModule->id, 'sub_module_id' => null, 'name' => 'Can reopen ticket', 'action' => 'can_reopen_ticket', 'order' => 1]);
   
        PermissionNames::create(['module_id' => $maintenancesModule->id, 'sub_module_id' => $machineMaintainanceSubModule->id, 'name' => 'Can view periodic maintenance', 'action' => 'can_view_periodic_maintenance', 'order' => 1]);
        PermissionNames::create(['module_id' => $maintenancesModule->id, 'sub_module_id' => $machineMaintainanceSubModule->id, 'name' => 'Can view maintenance list', 'action' => 'can_view_maintenance', 'required' => true, 'order' => 1]);
        PermissionNames::create(['module_id' => $maintenancesModule->id, 'sub_module_id' => $machineMaintainanceSubModule->id, 'name' => 'Can add periodic maintenance', 'action' => 'can_add_periodic_maintenance', 'order' => 1]);
        PermissionNames::create(['module_id' => $maintenancesModule->id, 'sub_module_id' => $machineMaintainanceSubModule->id, 'name' => 'Can delete periodic maintenance', 'action' => 'can_delete_periodic_maintenance', 'order' => 1]);
        PermissionNames::create(['module_id' => $maintenancesModule->id, 'sub_module_id' => $machineMaintainanceSubModule->id, 'name' => 'Can view CF/RC etc', 'action' => 'can_view_cf', 'order' => 1]);
        PermissionNames::create(['module_id' => $maintenancesModule->id, 'sub_module_id' => $machineMaintainanceSubModule->id, 'name' => 'Can add CF/RC etc', 'action' => 'can_add_cf', 'order' => 1]);
        PermissionNames::create(['module_id' => $maintenancesModule->id, 'sub_module_id' => $machineMaintainanceSubModule->id, 'name' => 'Can delete CF/RC etc', 'action' => 'can_delete_cf', 'order' => 1]);

        PermissionNames::create(['module_id' => $maintenancesModule->id, 'sub_module_id' => $readingSubModule->id, 'name' => 'Can view reading list', 'action' => 'can_view_reading', 'required' => true, 'order' => 1]);
        PermissionNames::create(['module_id' => $maintenancesModule->id, 'sub_module_id' => $readingSubModule->id, 'name' => 'Can view add reading', 'action' => 'can_add_reading', 'order' => 1]);
        PermissionNames::create(['module_id' => $maintenancesModule->id, 'sub_module_id' => $readingSubModule->id, 'name' => 'Can view edit reading', 'action' => 'can_edit_reading', 'order' => 1]);
        PermissionNames::create(['module_id' => $maintenancesModule->id, 'sub_module_id' => $readingSubModule->id, 'name' => 'Can delete reading', 'action' => 'can_delete_reading', 'order' => 1]);

        PermissionNames::create(['module_id' => $reportModule->id, 'sub_module_id' => $siteSubModule->id, 'name' => 'Can view site wise expense report', 'action' => 'can_view_site_wise_expense_report', 'required' => true, 'order' => 1]);
        PermissionNames::create(['module_id' => $reportModule->id, 'sub_module_id' => $siteSubModule->id, 'name' => 'Can download site wise expense report', 'action' => 'can_download_site_wise_expense_report', 'order' => 1]);

        PermissionNames::create(['module_id' => $reportModule->id, 'sub_module_id' => $machineSubModule->id, 'name' => 'Can view machine wise expense report', 'action' => 'can_view_machine_wise_expense_report', 'required' => true, 'order' => 1]);
        PermissionNames::create(['module_id' => $reportModule->id, 'sub_module_id' => $machineSubModule->id, 'name' => 'Can download machine wise expense report', 'action' => 'can_download_machine_wise_expense_report', 'order' => 1]);

        PermissionNames::create(['module_id' => $reportModule->id, 'sub_module_id' => $combinedSubModule->id, 'name' => 'Can view combined expense report', 'action' => 'can_view_combined_expense_report', 'required' => true, 'order' => 1]);
        PermissionNames::create(['module_id' => $reportModule->id, 'sub_module_id' => $combinedSubModule->id, 'name' => 'Can download combined expense report', 'action' => 'can_download_combined_expense_report', 'order' => 1]);

        PermissionNames::create(['module_id' => $reportModule->id, 'sub_module_id' => $ticketSubModule->id, 'name' => 'Can view ticket report', 'action' => 'can_view_ticket_report', 'required' => true, 'order' => 1]);
        PermissionNames::create(['module_id' => $reportModule->id, 'sub_module_id' => $ticketSubModule->id, 'name' => 'Can download ticket report', 'action' => 'can_download_ticket_report', 'order' => 1]);

        PermissionNames::create(['module_id' => $reportModule->id, 'sub_module_id' => $masterSubModule->id, 'name' => 'Can view master report', 'action' => 'can_view_master_report', 'required' => true, 'order' => 1]);
        PermissionNames::create(['module_id' => $reportModule->id, 'sub_module_id' => $masterSubModule->id, 'name' => 'Can download master report', 'action' => 'can_download_master_report', 'order' => 1]);

        PermissionNames::create(['module_id' => $reportModule->id, 'sub_module_id' => $hsdSubModule->id, 'name' => 'Can view HSD report', 'action' => 'can_view_hsd_report', 'required' => true, 'order' => 1]);
        PermissionNames::create(['module_id' => $reportModule->id, 'sub_module_id' => $hsdSubModule->id, 'name' => 'Can download HSD report', 'action' => 'can_download_hsd_report', 'order' => 1]);

        PermissionNames::create(['module_id' => $reportModule->id, 'sub_module_id' => $mileageSubModule->id, 'name' => 'Can view mileage report', 'action' => 'can_view_mileage_report', 'required' => true, 'order' => 1]);
        PermissionNames::create(['module_id' => $reportModule->id, 'sub_module_id' => $mileageSubModule->id, 'name' => 'Can download mileage report', 'action' => 'can_download_mileage_report', 'order' => 1]);

        PermissionNames::create(['module_id' => $settingsModule->id, 'sub_module_id' => $timmingSubModule->id, 'name' => 'Can view frequency settings', 'action' => 'can_view_frequency_settings', 'required' => true, 'order' => 1]);
        PermissionNames::create(['module_id' => $settingsModule->id, 'sub_module_id' => $timmingSubModule->id, 'name' => 'Can edit frequency settings', 'action' => 'can_edit_frequency_settings', 'order' => 1]);

        PermissionNames::create(['module_id' => $settingsModule->id, 'sub_module_id' => $rolesSubModule->id, 'name' => 'Can view roles', 'action' => 'can_view_roles',  'required' => true,  'order' => 1]);
        PermissionNames::create(['module_id' => $settingsModule->id, 'sub_module_id' => $rolesSubModule->id, 'name' => 'Can add roles', 'action' => 'can_add_roles', 'order' => 1]);
        PermissionNames::create(['module_id' => $settingsModule->id, 'sub_module_id' => $rolesSubModule->id, 'name' => 'Can edit roles', 'action' => 'can_edit_roles', 'order' => 1]);
        PermissionNames::create(['module_id' => $settingsModule->id, 'sub_module_id' => $rolesSubModule->id, 'name' => 'Can delete roles', 'action' => 'can_delete_roles', 'order' => 1]);

        PermissionNames::create(['module_id' => $settingsModule->id, 'sub_module_id' => $rolesSubModule->id, 'name' => 'Can view permissions', 'action' => 'can_view_permissions', 'order' => 1]);
        PermissionNames::create(['module_id' => $settingsModule->id, 'sub_module_id' => $rolesSubModule->id, 'name' => 'Can edit permission', 'action' => 'can_edit_permission', 'order' => 1]);

        PermissionNames::create(['module_id' => $dbModule->id, 'sub_module_id' => null, 'name' => 'Can view DB backup', 'action' => 'can_view_db_backup', 'required' => true, 'order' => 1]);
        PermissionNames::create(['module_id' => $dbModule->id, 'sub_module_id' => null, 'name' => 'Can download DB backup', 'action' => 'can_download_db_backup', 'order' => 1]);

        
        
        Permissions::whereIn('role_id', [1, 2])->delete();
        $allPermissions = PermissionNames::all();

        $roles = Role::whereIn('id', [1, 2])->get();
        foreach ($roles as $role) {
            foreach ($allPermissions as $permission) {
                Permissions::create([
                    'role_id' => $role->id,
                    'permission_name_id' => $permission->id,
                ]);
            }
        }
    
    }
}
