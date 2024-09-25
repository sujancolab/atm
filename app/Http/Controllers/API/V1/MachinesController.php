<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\MachineCompany;
use App\Models\Machines;
use App\Models\Operators;
use App\Models\Sites;
use App\Models\Settings;
use DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use DateTime;
use DateInterval;

class MachinesController extends \App\Http\Controllers\API\V1\BaseController
{
	protected $machine = '';

	/**
	 * Create a new controller instance.
	 *
	 * @return void
	 */
	public function __construct(Machines $machine)
	{
		$this->middleware('auth:api');
		//$this->authorize('isAdmin');
		$this->machine = $machine;
		$this->user = auth('api')->user();
	}
	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index(Request $request)
	{
		$search = $request->all();
		$s = $request->get('search');
		$cf_status = $request->get('cf_status');
		$np_status = $request->get('np_status');
		$rt_status = $request->get('rt_status');
		$insurance_status = $request->get('insurance_status');
		$pollution_status = $request->get('pollution_status');
		$rc_status = $request->get('rc_status');
		$export = $request->get('export');
		$qry = $this->machine->with('machine_sites', 'last_maintenances', 'machine_frequency_cf', 'machine_frequency_np', 'machine_frequency_rt', 'machine_frequency_insurance', 'machine_frequency_pollution', 'machine_frequency_rc', 'machine_model.company');
		
		if (isset($search['far_no']) && $search['far_no']) {
			$qry->where('far_no', 'LIKE', '%' . $search['far_no'] . '%');
		}
		
		if (isset($search['category_id']) && $search['category_id']) {
			$qry->where('category_id', $search['category_id']);
		}
		if (isset($search['sub_category_id']) && $search['sub_category_id']) {
			$qry->where('sub_category_id', $search['sub_category_id']);
		}
		if (isset($search['machine_companies_id']) && $search['machine_companies_id']) {
			$qry->where('machine_companies_id', $search['machine_companies_id']);
		}
		if (isset($search['machine_models_id']) && $search['machine_models_id']) {
			$qry->where('machine_models_id', $search['machine_models_id']);
		}
		if (isset($search['machine_type']) && $search['machine_type']) {
			$qry->where('machine_type', $search['machine_type']);
		}
		if (isset($search['condition_of_machine']) && $search['condition_of_machine']) {
			$qry->where('condition_of_machine', $search['condition_of_machine']);
		}

		if (isset($search['purchase_date_from']) && $search['purchase_date_from']) {
			$qry->where('purchase_date', '>=', $search['purchase_date_from']);
		}
		if (isset($search['purchase_date_to']) && $search['purchase_date_to']) {
			$qry->where('purchase_date', '<=', $search['purchase_date_to']);
		}
		if (isset($search['Ownership']) && $search['Ownership']) {
			$qry->where('owner', $search['Ownership']);
		}
		if (isset($search['site_id']) && $search['site_id']) {
			$qry->select('machines.*');
			$qry->selectRaw("(Select `sites`.`id` from `machine_sites` inner join `sites` on `sites`.`id` = `machine_sites`.`site_id` where `machine_id` = machines.id and date(`from_date`) <= '" . date('Y-m-d') . "' order by `from_date` desc, `machine_sites`.`id` desc limit 1) as current_site_id");
			$qry->having('current_site_id', $search['site_id']);
		}

		$status = $search['pm_due_status'] ?? '';
		if ($status == 'Green') {
			$status = 4;
		}
		if ($status == 'Yellow') {
			$status = 3;
		}
		if ($status == 'Orange') {
			$status = 2;
		}
		if ($status == 'Red') {
			$status = 1;
		}

		if ($status) {

			if ($status == 'No PM') {
				$qry->where('under_maintenance', 'No');
			} else {
				$qry->where('under_maintenance', 'Yes');
			}
		}

		if ($s && $s != '') {
			$qry->where('far_no', 'LIKE', '%' . $s . '%');
		}
		// if ($this->user->role[0]->id != 1 or $this->user->role[0]->id != 2) {
		// 	$cdate = date('Y-m-d');
		// 	$qry->whereRaw("machines.id IN (select machine_sites.machine_id from `machine_sites` inner join `sites` on `sites`.`id` = `machine_sites`.`site_id` JOIN user_site ON user_site.site_id=sites.id where user_site.user_id='{$this->user->id}' AND date(`from_date`) <='{$cdate}' GROUP BY machine_sites.machine_id order by `from_date` desc, `machine_sites`.`id` DESC)");
		// }

		$qry->with('last_ticket');

		if (isset($search['module'])) {
			if ($status && $status != 'No PM') {
				$qry = $qry->where('next_pm_date', 'status', $status);
			}
		}
		
		if (isset($search['list'])) {
			$machines = $qry->get();
		} elseif ($export) {
			$machines = $qry->latest()->get();
		} else {
			$machines = $qry->latest()->paginate(10);
		}

		$machines->append('next_pm_date')->toArray();
		

		// $machines->append('next_pm_date')->toArray();
		// if (isset($search['module'])) {
		// 	$machines = $machines->filter(function ($item) use ($status) {
		// 		if ($status && $status != 'No PM') {
		// 			return $item->next_pm_date['status'] == $status;
		// 		} else {
		// 			return $item;
		// 		}
		// 	});
		// }
		

		$return = [];
		$settings = Settings::select('*')->first();

		foreach ($machines as $key => $value) {
			$amc_status = "";
			if ($value->amc == 'Yes') {

				
					
				$dateString1 = new DateTime($value->amc_end_date);
				$dateString2 = new DateTime(date('Y-m-d'));

				if ($dateString1 < $dateString2) {
					$machines[$key]->machine_amc_status = 'Expired';
					$amc_status = "Expired";
				} else {

					// Calculate the difference in days
					$interval = $dateString1->diff($dateString2);

					if ($interval->days < 30 and $interval->days > 0) {
						$machines[$key]->machine_amc_status = 'Expiring';
						$amc_status = "Expiring";
					}else{
						$machines[$key]->machine_amc_status = 'Active';
						$amc_status = "Active";
					}
				}
			} else {
				// Set the machine_amc_status field to some other value if needed
				$machines[$key]->machine_amc_status = 'NA';
				$amc_status = "NA";
			}

			if (isset($search['amc_status']) && !empty($search['amc_status'])) {
				if($amc_status != $search['amc_status']){
					unset($machines[$key]);
            		continue; // Skip to the next iteration
				}
			}

			$warranty_status = "";
			if(!empty($machines[$key]->purchase_date)){
				// Parse the input date string into a DateTime object
				$warrantyDate = new DateTime($machines[$key]->purchase_date);

				// Get the current date
				$currentDate = new DateTime();
			
				// Calculate the difference in months
				$monthDifference = ($currentDate->format('Y') - $warrantyDate->format('Y')) * 12 + $currentDate->format('m') - $warrantyDate->format('m');
			
				// Check if the difference is less than or equal to 12 months
				if ($monthDifference <= 12) {
					$machines[$key]->machine_warrenty_status = "Within Warranty";
					$warranty_status = "Within Warranty";
				} else {
					$machines[$key]->machine_warrenty_status = "Out of Warranty";
					$warranty_status = "Out of Warranty";
				}
			}else{
				$machines[$key]->machine_warrenty_status = "NA";
				$warranty_status = "NA";
			}

			if (isset($search['warrenty_status']) && !empty($search['warrenty_status'])) {
				if($warranty_status != $search['warrenty_status']){
					unset($machines[$key]);
            		continue; // Skip to the next iteration
				}
			}

			//Calculate CF
			$check = "";
			if(empty($value->cf_frequency)){
				$the_cf_status =  "<span class='badge badge-primary'>Data unavailable</span>";
				$check = "Data Unavailable";
			}else{
				$uploaded_cf_date = $value->machine_frequency_cf;
				if (count($uploaded_cf_date) > 0) {
					$today = new DateTime();
					$cf_date = new DateTime($uploaded_cf_date[0]->cf_date);
					$cf_frequency = $value->cf_frequency;
					$cf_date->modify('+'.$cf_frequency.' days');
			
					// Calculate the time difference in days
					$interval = $today->diff($cf_date);
					$daysDifference = $interval->days;
			
					if ( $cf_date > $today) {
						if (abs($daysDifference) >= $settings->cf_green) {
							$the_cf_status = "<span class='badge badge-success'>{$daysDifference} days left</span>";
							$check = "Green";
						} elseif (abs($daysDifference) < $settings->cf_yellow && abs($daysDifference) >= $settings->cf_orange) {
							$the_cf_status =  "<span class='badge badge-warning'>{$daysDifference} days left</span>";
							$check = "Yellow";
						} elseif (abs($daysDifference) < $settings->cf_orange && abs($daysDifference) >= $settings->cf_red) {
							$the_cf_status =  "<span class='badge' style='background-color: rgb(247, 161, 4)'>{$daysDifference} days left</span>";
							$check = "Orange";
						} else {
							$the_cf_status =  "<span class='badge badge-danger'>{$daysDifference} days left</span>";
							$check = "Red";
						}
					} else {
						$the_cf_status =  "<span class='badge badge-danger'>CF Expired</span>";
						$check = "Expired";
					}
				} else {
					if (empty($value->cf_date)) {
						$the_cf_status =  "<span class='badge badge-primary'>Data unavailable</span>";
						$check = "Data Unavailable";
					} else {
						// $settings['cf_green']
						$today = new DateTime();
						$cf_date = new DateTime($value->cf_date);
						$cf_frequency = $value->cf_frequency;
						$cf_date->modify('+'.(empty($cf_frequency)?0:$cf_frequency).' days');
			
						// Calculate the time difference in days
						$interval = $today->diff($cf_date);
						$daysDifference = $interval->days;
			
						if ( $cf_date > $today) {
							if (abs($daysDifference) >= $settings->cf_green) {
								$the_cf_status =  "<span class='badge badge-success'>{$daysDifference} days left</span>";
								$check = "Green";
							} elseif (abs($daysDifference) < $settings->cf_yellow && abs($daysDifference) >= $settings->cf_orange) {
								$the_cf_status =  "<span class='badge badge-warning'>{$daysDifference} days left</span>";
								$check = "Yellow";
							} elseif (abs($daysDifference) < $settings->cf_orange && abs($daysDifference) >= $settings->cf_red) {
								$the_cf_status =  "<span class='badge' style='background-color: rgb(247, 161, 4)'>{$daysDifference} days left</span>";
								$check = "Orange";
							} else {
								$the_cf_status =  "<span class='badge badge-danger'>{$daysDifference} days left</span>";
								$check = "Red";
							}
						} else {
							$the_cf_status =  "<span class='badge badge-danger'>CF Expired</span>";
							$check = "Expired";
						}
					}
				}
			}
			$machines[$key]->the_cf_status = $the_cf_status;
			
			if(!empty($cf_status) and $cf_status != $check){
				unset($machines[$key]);
				continue; // Skip to the next iteration
			}

			//Calculate National Permit

			$check = "";
			if(empty($value->national_permit_frequency)){
				$the_national_permit_status =  "<span class='badge badge-primary'>Data unavailable</span>";
				$check = "Data Unavailable";
			}else{
				$uploaded_np_date = $value->machine_frequency_np;
				if (count($uploaded_np_date) > 0) {
					$today = new DateTime();
					$national_permit_date = new DateTime($uploaded_np_date[0]->national_permit_date);
					$national_permit_frequency = $value->national_permit_frequency;
					$national_permit_date->modify('+'.$national_permit_frequency.' days');
			
					// Calculate the time difference in days
					$interval = $today->diff($national_permit_date);
					$daysDifference = $interval->days;
			
					if ( $national_permit_date > $today) {
						if (abs($daysDifference) >= $settings->national_permit_green) {
							$the_national_permit_status = "<span class='badge badge-success'>{$daysDifference} days left</span>";
							$check = "Green";
						} elseif (abs($daysDifference) < $settings->national_permit_yellow && abs($daysDifference) >= $settings->national_permit_orange) {
							$the_national_permit_status =  "<span class='badge badge-warning'>{$daysDifference} days left</span>";
							$check = "Yellow";
						} elseif (abs($daysDifference) < $settings->national_permit_orange && abs($daysDifference) >= $settings->national_permit_red) {
							$the_national_permit_status =  "<span class='badge' style='background-color: rgb(247, 161, 4)'>{$daysDifference} days left</span>";
							$check = "Orange";
						} else {
							$the_national_permit_status =  "<span class='badge badge-danger'>{$daysDifference} days left</span>";
							$check = "Red";
						}
					} else {
						$the_national_permit_status =  "<span class='badge badge-danger'>National Permit Expired</span>";
						$check = "Expired";
					}
				} else {
					if (empty($value->national_permit_date)) {
						$the_national_permit_status =  "<span class='badge badge-primary'>Data unavailable</span>";
						$check = "Data Unavailable";
					} else {
						// $settings['cf_green']
						$today = new DateTime();
						$national_permit_date = new DateTime($value->national_permit_date);
						$national_permit_frequency = $value->national_permit_frequency;
						$national_permit_date->modify('+'.$national_permit_frequency.' days');
			
						// Calculate the time difference in days
						$interval = $today->diff($national_permit_date);
						$daysDifference = $interval->days;
			
						if ( $national_permit_date > $today) {
							if (abs($daysDifference) >= $settings->national_permit_green) {
								$the_national_permit_status =  "<span class='badge badge-success'>{$daysDifference} days left</span>";
								$check = "Green";
							} elseif (abs($daysDifference) < $settings->national_permit_yellow && abs($daysDifference) >= $settings->national_permit_orange) {
								$the_national_permit_status =  "<span class='badge badge-warning'>{$daysDifference} days left</span>";
								$check = "Yellow";
							} elseif (abs($daysDifference) < $settings->national_permit_orange && abs($daysDifference) >= $settings->national_permit_red) {
								$the_national_permit_status =  "<span class='badge' style='background-color: rgb(247, 161, 4)'>{$daysDifference} days left</span>";
								$check = "Orange";
							} else {
								$the_national_permit_status =  "<span class='badge badge-danger'>{$daysDifference} days left</span>";
								$check = "Red";
							}
						} else {
							$the_national_permit_status =  "<span class='badge badge-danger'>National Permit Expired</span>";
							$check = "Expired";
						}
					}
				}
			}
			$machines[$key]->the_national_permit_status = $the_national_permit_status;

			if(!empty($np_status) and $np_status != $check){
				unset($machines[$key]);
				continue; // Skip to the next iteration
			}

			//Calculate Road TAX

			$check = "";
			if(empty($value->road_tax_frequency)){
				$the_road_tax_status =  "<span class='badge badge-primary'>Data unavailable</span>";
				$check = "Data Unavailable";
			}else{
				$uploaded_rt_date = $value->machine_frequency_rt;
				if (count($uploaded_rt_date) > 0) {
					$today = new DateTime();
					$road_tax_date = new DateTime($uploaded_rt_date[0]->road_tax_date);
					$road_tax_frequency = $value->road_tax_frequency;
					$road_tax_date->modify('+'.$road_tax_frequency.' days');
			
					// Calculate the time difference in days
					$interval = $today->diff($road_tax_date);
					$daysDifference = $interval->days;
			
					if ( $road_tax_date > $today) {
						if (abs($daysDifference) >= $settings->road_tax_green) {
							$the_road_tax_status = "<span class='badge badge-success'>{$daysDifference} days left</span>";
							$check = "Green";
						} elseif (abs($daysDifference) < $settings->road_tax_yellow && abs($daysDifference) >= $settings->road_tax_orange) {
							$the_road_tax_status =  "<span class='badge badge-warning'>{$daysDifference} days left</span>";
							$check = "Yellow";
						} elseif (abs($daysDifference) < $settings->road_tax_orange && abs($daysDifference) >= $settings->road_tax_red) {
							$the_road_tax_status =  "<span class='badge' style='background-color: rgb(247, 161, 4)'>{$daysDifference} days left</span>";
							$check = "Orange";
						} else {
							$the_road_tax_status =  "<span class='badge badge-danger'>{$daysDifference} days left</span>";
							$check = "Red";
						}
					} else {
						$the_road_tax_status =  "<span class='badge badge-danger'>Road Tax Expired</span>";
						$check = "Expired";
					}
				} else {
					if (empty($value->road_tax_date)) {
						$the_road_tax_status =  "<span class='badge badge-primary'>Data unavailable</span>";
						$check = "Data Unavailable";
					} else {
						// $settings['cf_green']
						$today = new DateTime();
						$road_tax_date = new DateTime($value->road_tax_date);
						$road_tax_frequency = $value->road_tax_frequency;
						$road_tax_date->modify('+'.$road_tax_frequency.' days');
			
						// Calculate the time difference in days
						$interval = $today->diff($road_tax_date);
						$daysDifference = $interval->days;
			
						if ( $road_tax_date > $today) {
							if (abs($daysDifference) >= $settings->road_tax_green) {
								$the_road_tax_status =  "<span class='badge badge-success'>{$daysDifference} days left</span>";
								$check = "Green";
							} elseif (abs($daysDifference) < $settings->road_tax_yellow && abs($daysDifference) >= $settings->road_tax_orange) {
								$the_road_tax_status =  "<span class='badge badge-warning'>{$daysDifference} days left</span>";
								$check = "Yellow";
							} elseif (abs($daysDifference) < $settings->road_tax_orange && abs($daysDifference) >= $settings->road_tax_red) {
								$the_road_tax_status =  "<span class='badge' style='background-color: rgb(247, 161, 4)'>{$daysDifference} days left</span>";
								$check = "Orange";
							} else {
								$the_road_tax_status =  "<span class='badge badge-danger'>{$daysDifference} days left</span>";
								$check = "Red";
							}
						} else {
							$the_road_tax_status =  "<span class='badge badge-danger'>Road Tax Expired</span>";
							$check = "Expired";
						}
					}
				}
			}
			$machines[$key]->the_road_tax_status = $the_road_tax_status;

			if(!empty($rt_status) and $rt_status != $check){
				unset($machines[$key]);
				continue; // Skip to the next iteration
			}

			//Calculate Insurance


			$check = "";
			if(empty($value->insurance_frequency)){
				$the_insurance_status =  "<span class='badge badge-primary'>Data unavailable</span>";
				$check = "Data Unavailable";
			}else{
				$uploaded_rt_date = $value->machine_frequency_insurance;
				if (count($uploaded_rt_date) > 0) {
					$today = new DateTime();
					$insurance_date = new DateTime($uploaded_rt_date[0]->insurance_date);
					$insurance_frequency = $value->insurance_frequency;
					$insurance_date->modify('+'.$insurance_frequency.' days');
			
					// Calculate the time difference in days
					$interval = $today->diff($insurance_date);
					$daysDifference = $interval->days;
			
					if ( $insurance_date > $today) {
						if (abs($daysDifference) >= $settings->insurance_green) {
							$the_insurance_status = "<span class='badge badge-success'>{$daysDifference} days left</span>";
							$check = "Green";
						} elseif (abs($daysDifference) < $settings->insurance_yellow && abs($daysDifference) >= $settings->insurance_orange) {
							$the_insurance_status =  "<span class='badge badge-warning'>{$daysDifference} days left</span>";
							$check = "Yellow";
						} elseif (abs($daysDifference) < $settings->insurance_orange && abs($daysDifference) >= $settings->insurance_red) {
							$the_insurance_status =  "<span class='badge' style='background-color: rgb(247, 161, 4)'>{$daysDifference} days left</span>";
							$check = "Orange";
						} else {
							$the_insurance_status =  "<span class='badge badge-danger'>{$daysDifference} days left</span>";
							$check = "Red";
						}
					} else {
						$the_insurance_status =  "<span class='badge badge-danger'>Insurance Expired</span>";
						$check = "Expired";
					}
				} else {
					if (empty($value->insurance_date)) {
						$the_insurance_status =  "<span class='badge badge-primary'>Data unavailable</span>";
						$check = "Data Unavailable";
					} else {
						// $settings['cf_green']
						$today = new DateTime();
						$insurance_date = new DateTime($value->insurance_date);
						$insurance_frequency = $value->insurance_frequency;
						$insurance_date->modify('+'.$insurance_frequency.' days');
			
						// Calculate the time difference in days
						$interval = $today->diff($insurance_date);
						$daysDifference = $interval->days;
			
						if ( $insurance_date > $today) {
							if (abs($daysDifference) >= $settings->insurance_green) {
								$the_insurance_status =  "<span class='badge badge-success'>{$daysDifference} days left</span>";
								$check = "Green";
							} elseif (abs($daysDifference) < $settings->insurance_yellow && abs($daysDifference) >= $settings->insurance_orange) {
								$the_insurance_status =  "<span class='badge badge-warning'>{$daysDifference} days left</span>";
								$check = "Yellow";
							} elseif (abs($daysDifference) < $settings->insurance_orange && abs($daysDifference) >= $settings->insurance_red) {
								$the_insurance_status =  "<span class='badge' style='background-color: rgb(247, 161, 4)'>{$daysDifference} days left</span>";
								$check = "Orange";
							} else {
								$the_insurance_status =  "<span class='badge badge-danger'>{$daysDifference} days left</span>";
								$check = "Red";
							}
						} else {
							$the_insurance_status =  "<span class='badge badge-danger'>Insurance Expired</span>";
							$check = "Expired";
						}
					}
				}
			}
			$machines[$key]->the_insurance_status = $the_insurance_status;
			
			if(!empty($insurance_status) and $insurance_status != $check){
				unset($machines[$key]);
				continue; // Skip to the next iteration
			}

			//Calculate Pollution

			$check = "";
			if(empty($value->pollution_frequency)){
				$the_pollution_status =  "<span class='badge badge-primary'>Data unavailable</span>";
				$check = "Data Unavailable";
			}else{
				$uploaded_rt_date = $value->machine_frequency_pollution;
				if (count($uploaded_rt_date) > 0) {
					$today = new DateTime();
					$pollution_date = new DateTime($uploaded_rt_date[0]->pollution_date);
					$pollution_frequency = $value->pollution_frequency;
					$pollution_date->modify('+'.$pollution_frequency.' days');
			
					// Calculate the time difference in days
					$interval = $today->diff($pollution_date);
					$daysDifference = $interval->days;
			
					if ( $pollution_date > $today) {
						if (abs($daysDifference) >= $settings->pollution_green) {
							$the_pollution_status = "<span class='badge badge-success'>{$daysDifference} days left</span>";
							$check = "Green";
						} elseif (abs($daysDifference) < $settings->pollution_yellow && abs($daysDifference) >= $settings->pollution_orange) {
							$the_pollution_status =  "<span class='badge badge-warning'>{$daysDifference} days left</span>";
							$check = "Yellow";
						} elseif (abs($daysDifference) < $settings->pollution_orange && abs($daysDifference) >= $settings->pollution_red) {
							$the_pollution_status =  "<span class='badge' style='background-color: rgb(247, 161, 4)'>{$daysDifference} days left</span>";
							$check = "Orange";
						} else {
							$the_pollution_status =  "<span class='badge badge-danger'>{$daysDifference} days left</span>";
							$check = "Red";
						}
					} else {
						$the_pollution_status =  "<span class='badge badge-danger'>Pollution Expired</span>";
						$check = "Expired";
					}
				} else {
					if (empty($value->pollution_date)) {
						$the_pollution_status =  "<span class='badge badge-primary'>Data unavailable</span>";
						$check = "Data Unavailable";
					} else {
						// $settings['cf_green']
						$today = new DateTime();
						$pollution_date = new DateTime($value->pollution_date);
						$pollution_frequency = $value->pollution_frequency;
						$pollution_date->modify('+'.$pollution_frequency.' days');
						
			
						// Calculate the time difference in days
						$interval = $today->diff($pollution_date);
						$daysDifference = $interval->days;
			
						if ( $pollution_date > $today) {
							if (abs($daysDifference) >= $settings->pollution_green) {
								$the_pollution_status =  "<span class='badge badge-success'>{$daysDifference} days left</span>";
								$check = "Green";
							} elseif (abs($daysDifference) < $settings->pollution_yellow && abs($daysDifference) >= $settings->pollution_orange) {
								$the_pollution_status =  "<span class='badge badge-warning'>{$daysDifference} days left</span>";
								$check = "Yellow";
							} elseif (abs($daysDifference) < $settings->pollution_orange && abs($daysDifference) >= $settings->pollution_red) {
								$the_pollution_status =  "<span class='badge' style='background-color: rgb(247, 161, 4)'>{$daysDifference} days left</span>";
								$check = "Orange";
							} else {
								$the_pollution_status =  "<span class='badge badge-danger'>{$daysDifference} days left</span>";
								$check = "Red";
							}
						} else {
							$the_pollution_status =  "<span class='badge badge-danger'>Pollution Expired</span>";
							$check = "Expired";
						}
					}
				}
			}
			$machines[$key]->the_pollution_status = $the_pollution_status;

			if(!empty($pollution_status) and $pollution_status != $check){
				unset($machines[$key]);
				continue; // Skip to the next iteration
			}

			//Calculate RC

			$check = "";
			if(empty($value->rc_frequency)){
				$the_rc_status =  "<span class='badge badge-primary'>Data unavailable</span>";
				$check = "Data Unavailable";
			}else{
				$uploaded_rc_date = $value->machine_frequency_rc;
				if (count($uploaded_rc_date) > 0) {
					$today = new DateTime();
					$rc_date = new DateTime($uploaded_rc_date[0]->rc_date);
					$rc_frequency = $value->rc_frequency;
					$rc_date->modify('+'.$rc_frequency.' days');
			
					// Calculate the time difference in days
					$interval = $today->diff($rc_date);
					$daysDifference = $interval->days;
			
					if ( $rc_date > $today) {
						if (abs($daysDifference) >= $settings->rc_green) {
							$the_rc_status = "<span class='badge badge-success'>{$daysDifference} days left</span>";
							$check = "Green";
						} elseif (abs($daysDifference) < $settings->rc_yellow && abs($daysDifference) >= $settings->rc_orange) {
							$the_rc_status =  "<span class='badge badge-warning'>{$daysDifference} days left</span>";
							$check = "Yellow";
						} elseif (abs($daysDifference) < $settings->rc_orange && abs($daysDifference) >= $settings->rc_red) {
							$the_rc_status =  "<span class='badge' style='background-color: rgb(247, 161, 4)'>{$daysDifference} days left</span>";
							$check = "Orange";
						} else {
							$the_rc_status =  "<span class='badge badge-danger'>{$daysDifference} days left</span>";
							$check = "Red";
						}
					} else {
						$the_rc_status =  "<span class='badge badge-danger'>RC Expired</span>";
						$check = "Expired";
					}
				} else {
					if (empty($value->rc_date)) {
						$the_rc_status =  "<span class='badge badge-primary'>Data unavailable</span>";
						$check = "Data Unavailable";
					} else {
						// $settings['cf_green']
						$today = new DateTime();
						$rc_date = new DateTime($value->rc_date);
						$rc_frequency = $value->rc_frequency;
						$rc_date->modify('+'.$rc_frequency.' days');
						
			
						// Calculate the time difference in days
						$interval = $today->diff($rc_date);
						$daysDifference = $interval->days;
			
						if ( $rc_date > $today) {
							if (abs($daysDifference) >= $settings->rc_green) {
								$the_rc_status =  "<span class='badge badge-success'>{$daysDifference} days left</span>";
								$check = "Green";
							} elseif (abs($daysDifference) < $settings->rc_yellow && abs($daysDifference) >= $settings->rc_orange) {
								$the_rc_status =  "<span class='badge badge-warning'>{$daysDifference} days left</span>";
								$check = "Yellow";
							} elseif (abs($daysDifference) < $settings->rc_orange && abs($daysDifference) >= $settings->rc_red) {
								$the_rc_status =  "<span class='badge' style='background-color: rgb(247, 161, 4)'>{$daysDifference} days left</span>";
								$check = "Orange";
							} else {
								$the_rc_status =  "<span class='badge badge-danger'>{$daysDifference} days left</span>";
								$check = "Red";
							}
						} else {
							$the_rc_status =  "<span class='badge badge-danger'>RC Expired</span>";
							$check = "Expired";
						}
					}
				}
			}
			$machines[$key]->the_rc_status = $the_rc_status;

			if(!empty($rc_status) and $rc_status != $check){
				unset($machines[$key]);
				continue; // Skip to the next iteration
			}
		}

	

		if ($export) {
			$machines = array_values(json_decode(json_encode($machines), true));
		}
		return $this->sendResponse($machines, 'machines list');
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return \Illuminate\Http\Response
	 */
	public function store(Request $request)
	{
		$data = $request->all();
		$validator = Validator::make($data, [
			'far_no' => 'required|unique:machines|max:191',
			//'name' => ['required', 'string', 'max:191'],
			'category_id' => ['required', 'integer'],
			'sub_category_id' => ['required', 'integer'],
			'machine_companies_id' => ['required', 'integer'],
			'machine_models_id' => ['required', 'integer'],
			'owner' => ['required', 'string'],
			'purchase_date' => ['required'],
			'purchase_price' => ['required'],
			'year_of_depreciation' => ['required'],
			'machine_type' => ['required'],
			'manufacture_year' => ['required', 'integer'],
			'regn_no' => ['nullable', 'string'],
			'machine_sr_no' => ['nullable'],
			'engine_model' => ['nullable'],
			'engine_no' => ['nullable'],
			'chassis_no' => ['nullable'],
			'condition_of_machine' => ['required'],
			'standard_consumption_hr_per_ltr' => ['required'],
			'standard_consumption_km_per_ltr' => ['required'],
			'consumption_type' => ['required', 'string'],
			'under_maintenance' => ['required'],
			'site_id' => ['required'],
			'from_date' => ['required'],
			'operator_id' => ['required'],
			'operator_date' => ['required'],
		]);
		if ($validator->fails()) {
			return $this->validationError($validator->errors(), 'Invalid input OR some mandatory fields are blank.');
		}
		try {
			$machine = $this->machine->create([
				'far_no' => $request->get('far_no'),
				'name' => $request->get('name'),
				'category_id' => $request->get('category_id') ?? null,
				'sub_category_id' => $request->get('sub_category_id') ?? null,
				'machine_companies_id' => $request->get('machine_companies_id') ?? null,
				'machine_models_id' => $request->get('machine_models_id') ?? null,
				'owner' => $request->get('owner'),
				'purchase_date' => $request->get('purchase_date'),
				'purchase_price' => $request->get('purchase_price'),
				'year_of_depreciation' => $request->get('year_of_depreciation'),
				'machine_type' => $request->get('machine_type') ?? null,
				'free_service_no' => $request->get('machine_type') == 'New' ? $request->get('free_service_no') : null,
				'manufacture_year' => $request->get('manufacture_year') ?? null,
				'regn_no' => $request->get('regn_no') ?? null,
				'machine_sr_no' => $request->get('machine_sr_no') ?? null,
				'engine_model' => $request->get('engine_model') ?? null,
				'engine_no' => $request->get('engine_no') ?? null,
				'chassis_no' => $request->get('chassis_no') ?? null,
				'condition_of_machine' => $request->get('condition_of_machine') ?? null,
				'standard_consumption_hr_per_ltr' => $request->get('standard_consumption_hr_per_ltr') ?? null,
				'standard_consumption_km_per_ltr' => $request->get('standard_consumption_km_per_ltr') ?? null,
				'consumption_type' => $request->get('consumption_type') ?? null,
				'under_maintenance' => $request->get('under_maintenance') ?? null,
				'is_maintenance_date' => $request->get('is_maintenance_date') ?? null,
				'is_consumtion_hr_run' => $request->get('is_consumtion_hr_run') ?? null,
				'is_consumtion_km_run' => $request->get('is_consumtion_km_run') ?? null,
				'is_production_fig' => $request->get('is_production_fig') ?? null,
				'date_time_machine_ic' => db_date_time($request->get('date_time_machine_ic')) ?? null,
				'date_threshold' => $request->get('date_threshold') ?? null,
				'run_hour_threshold' => $request->get('run_hour_threshold') ?? null,
				'run_km_threshold' => $request->get('run_km_threshold') ?? null,
				'production_fig_threshold' => $request->get('production_fig_threshold') ?? null,

				'last_maintenance_date' => db_date_time($request->get('last_maintenance_date')) ?? null,
				'last_hr_run' => $request->get('last_hr_run') ?? null,
				'present_run_hour' => $request->get('present_run_hour') ?? null,
				'last_km_run' => $request->get('last_km_run') ?? null,
				'present_run_km' => $request->get('present_run_km') ?? null,
				'periodic_maintenance_breakdown' => $request->get('periodic_maintenance_breakdown') ?? null,
				'present_production_fig' => $request->get('present_production_fig') ?? null,

				'prdloss_hrs' => $request->get('prdloss_hrs') ?? null,
				'prdloss_hr_rate' => $request->get('prdloss_hr_rate') ?? null,

				'invoice_no' => $request->get('invoice_no') ?? null,
				'invoice_copy' => $request->get('invoice_copy') ?? null,
				'cf_date' => $request->get('cf_date') ?? null,
				'cf_frequency' => $request->get('cf_frequency') ?? null,
				'national_permit_date' => $request->get('national_permit_date') ?? null,
				'national_permit_frequency' => $request->get('national_permit_frequency') ?? null,
				'road_tax_date' => $request->get('road_tax_date') ?? null,
				'road_tax_frequency' => $request->get('road_tax_frequency') ?? null,
				'insurance_date' => $request->get('insurance_date') ?? null,
				'insurance_frequency' => $request->get('insurance_frequency') ?? null,
				'pollution_date' => $request->get('pollution_date') ?? null,
				'pollution_frequency' => $request->get('pollution_frequency') ?? null,
				'rc_date' => $request->get('rc_date') ?? null,
				'rc_frequency' => $request->get('rc_frequency') ?? null,

				'cf_amount' => $request->get('cf_amount') ?? null,
				'national_permit_amount' => $request->get('national_permit_amount') ?? null,
				'road_tax_amount' => $request->get('road_tax_amount') ?? null,
				'insurance_amount' => $request->get('insurance_amount') ?? null,
				'pollution_amount' => $request->get('pollution_amount') ?? null,
				'rc_amount' => $request->get('rc_amount') ?? null,

				'amc' => $request->get('amc') ?? null,
				'amc_start_date' => $request->get('amc_start_date') ?? null,
				'amc_end_date' => $request->get('amc_end_date') ?? null,

				'created_at' => db_date_time(),
				'updated_at' => db_date_time(),
				'created_by' => $this->user->id,
			]);

			$from_date = db_date_time($data['from_date']);
			$machine->machine_sites()->syncWithoutDetaching([['site_id' => $data['site_id'], 'from_date' => $from_date]]);

			$operator_date = db_date_time($data['operator_date']);
			$machine->machine_operators()->syncWithoutDetaching([['operator_id' => $data['operator_id'], 'from_date' => $operator_date]]);
			
			return $this->sendResponse($machine, 'machine has been created.');
		} catch (Exception $e) {
			return $this->sendError('Internal Server error please try again.');
		}
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function show($id)
	{
		$machine = $this->machine->withCount('maintenances')->findOrFail($id);
		return $this->sendResponse($machine, 'machine has been updated.');
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function update(Request $request, $id)
	{
		$data = $request->all();


		// print_r($data);exit;
		$validator = Validator::make($data, [
			'far_no' => 'required|string|max:191|unique:machines,far_no,' . $id,
			'name' => ['required', 'string', 'max:191'],
			'category_id' => ['required', 'integer'],
			'sub_category_id' => ['required', 'integer'],
			'machine_companies_id' => ['required', 'integer'],
			'machine_models_id' => ['required', 'integer'],
			'owner' => ['required', 'string'],
			'purchase_date' => ['required'],
			'purchase_price' => ['required'],
			'year_of_depreciation' => ['required'],
			'machine_type' => ['required'],
			'manufacture_year' => ['required', 'integer'],
			'regn_no' => ['nullable', 'string'],
			'machine_sr_no' => ['nullable'],
			'engine_model' => ['nullable'],
			'engine_no' => ['nullable'],
			'chassis_no' => ['nullable'],
			//'condition_of_machine' => ['required'],
			'standard_consumption_hr_per_ltr' => ['required'],
			'standard_consumption_km_per_ltr' => ['required'],
			'consumption_type' => ['required', 'string'],
			'under_maintenance' => ['required'],
			'invoice_copy' => 'max:2048',
		]);
		if ($validator->fails()) {
			return $this->validationError($validator->errors(), 'Invalid input OR some mandatory fields are blank.');
		}
		try {			

			$machine = $this->machine->findOrFail($id);
			$machine->update([
				'far_no' => $request->get('far_no'),
				'name' => $request->get('name'),
				'category_id' => $request->get('category_id') ?? null,
				'sub_category_id' => $request->get('sub_category_id') ?? null,
				'machine_companies_id' => $request->get('machine_companies_id') ?? null,
				'machine_models_id' => $request->get('machine_models_id') ?? null,
				'owner' => $request->get('owner'),
				'purchase_date' => $request->get('purchase_date'),
				'purchase_price' => $request->get('purchase_price'),
				'year_of_depreciation' => $request->get('year_of_depreciation'),
				'machine_type' => $request->get('machine_type') ?? null,
				'free_service_no' => $request->get('machine_type') == 'New' ? $request->get('free_service_no') : null,
				'manufacture_year' => $request->get('manufacture_year') ?? null,
				'regn_no' => $request->get('regn_no') ?? null,
				'machine_sr_no' => $request->get('machine_sr_no') ?? null,
				'engine_model' => $request->get('engine_model') ?? null,
				'engine_no' => $request->get('engine_no') ?? null,
				'chassis_no' => $request->get('chassis_no') ?? null,
				//'condition_of_machine' => $request->get('condition_of_machine') ?? null,
				'standard_consumption_hr_per_ltr' => $request->get('standard_consumption_hr_per_ltr') ?? null,
				'standard_consumption_km_per_ltr' => $request->get('standard_consumption_km_per_ltr') ?? null,
				'consumption_type' => $request->get('consumption_type') ?? null,
				'under_maintenance' => $request->get('under_maintenance') ?? null,
				'is_maintenance_date' => $request->get('is_maintenance_date') ?? null,
				'is_consumtion_hr_run' => $request->get('is_consumtion_hr_run') ?? null,
				'is_consumtion_km_run' => $request->get('is_consumtion_km_run') ?? null,
				'is_production_fig' => $request->get('is_production_fig') ?? null,
				'date_time_machine_ic' => db_date_time($request->get('date_time_machine_ic')) ?? null,
				'date_threshold' => $request->get('date_threshold') ?? null,
				'run_hour_threshold' => $request->get('run_hour_threshold') ?? null,
				'run_km_threshold' => $request->get('run_km_threshold') ?? null,
				'production_fig_threshold' => $request->get('production_fig_threshold') ?? null,
				'updated_at' => db_date_time(),
				'updated_by' => $this->user->id,

				'last_maintenance_date' => db_date_time($request->get('last_maintenance_date')) ?? null,
				'last_hr_run' => $request->get('last_hr_run') ?? null,
				'present_run_hour' => $request->get('present_run_hour') ?? null,
				'last_km_run' => $request->get('last_km_run') ?? null,
				'present_run_km' => $request->get('present_run_km') ?? null,
				'periodic_maintenance_breakdown' => $request->get('periodic_maintenance_breakdown') ?? null,
				'present_production_fig' => $request->get('present_production_fig') ?? null,

				'prdloss_hrs' => $request->get('prdloss_hrs') ?? null,
				'prdloss_hr_rate' => $request->get('prdloss_hr_rate') ?? null,

				'invoice_no' => $request->get('invoice_no') ?? null,
				'cf_date' => $request->get('cf_date') ?? null,
				'cf_frequency' => $request->get('cf_frequency') ?? null,
				'national_permit_date' => $request->get('national_permit_date') ?? null,
				'national_permit_frequency' => $request->get('national_permit_frequency') ?? null,
				'road_tax_date' => $request->get('road_tax_date') ?? null,
				'road_tax_frequency' => $request->get('road_tax_frequency') ?? null,
				'insurance_date' => $request->get('insurance_date') ?? null,
				'insurance_frequency' => $request->get('insurance_frequency') ?? null,
				'pollution_date' => $request->get('pollution_date') ?? null,
				'pollution_frequency' => $request->get('pollution_frequency') ?? null,
				'rc_date' => $request->get('rc_date') ?? null,
				'rc_frequency' => $request->get('rc_frequency') ?? null,

				'cf_amount' => $request->get('cf_amount') ?? null,
				'national_permit_amount' => $request->get('national_permit_amount') ?? null,
				'road_tax_amount' => $request->get('road_tax_amount') ?? null,
				'insurance_amount' => $request->get('insurance_amount') ?? null,
				'pollution_amount' => $request->get('pollution_amount') ?? null,
				'rc_amount' => $request->get('rc_amount') ?? null,

				'amc' => $request->get('amc') ?? null,
				'amc_start_date' => $request->get('amc_start_date') ?? null,
				'amc_end_date' => $request->get('amc_end_date') ?? null,
			]);

			return $this->sendResponse($machine, 'machine has been updated.');
		} catch (Exception $e) {
			return $this->sendError('Internal Server error please try again.');
		}
	}

	public function machine_file_update(Request $request){
		$productImg = $request->file('file');
		$cffile = $request->file('cffile');
		$npfile = $request->file('npfile');
		$rtfile = $request->file('rtfile');
		$insurancefile = $request->file('insurancefile');
		$pollutionfile = $request->file('pollutionfile');
		$rc_attachment = $request->file('rcfile');

		$invoice_copy = "";
		$cf_file_name = "";
		$np_file_name = "";
		$rt_file_name = "";
		$insurance_file_name = "";
		$pollution_file_name = "";
		$rc_file_name = "";

//         $path = $this->upload($new_file, 'tickets/' . $ticketid . '/stage')
// 		$save_path = public_path('/images/machine_invoices/');
// 		if (!file_exists($save_path)) {
// 			mkdir($save_path, 666, true);
// 		}

// 		$save_path = public_path('/images/cf_rc_etc/');
// 		if (!file_exists($save_path)) {
// 			mkdir($save_path, 666, true);
// 		}

		$arr = array();

			
        if ($productImg) {
			$filename = "";
            $filename = mt_rand("111111", "999999") . '.' . $productImg->getClientOriginalExtension();
            $path = $productImg->storeAs('machine_invoices', $filename, 'public');
			$invoice_copy = '/storage/' . $path;
			$arr["invoice_copy"] = $invoice_copy;
        }

        if ($cffile) {
			$filename = "";
            $filename = mt_rand("111111", "999999") . '.' . $cffile->getClientOriginalExtension();
            $path = $cffile->storeAs('cf_rc_etc', $filename, 'public');
			$cf_file_name = '/storage/' . $path;
			$arr["cf_copy"] = $cf_file_name;
        }

		if($npfile){
			$filename = "";
            $filename = mt_rand("111111", "999999") . '.' . $npfile->getClientOriginalExtension();
            $path = $npfile->storeAs('cf_rc_etc', $filename, 'public');
			$np_file_name = '/storage/' . $path;
			$arr["national_permit_copy"] = $np_file_name;
		}

		if($rtfile){
			$filename = "";
            $filename = mt_rand("111111", "999999") . '.' . $rtfile->getClientOriginalExtension();
			$path = $rtfile->storeAs('cf_rc_etc', $filename, 'public');
			$rt_file_name = '/storage/' . $path;
			$arr["road_tax_copy"] = $rt_file_name;
		}

		if($insurancefile){
			$filename = "";
            $filename = mt_rand("111111", "999999") . '.' . $insurancefile->getClientOriginalExtension();
			$path = $insurancefile->storeAs('cf_rc_etc', $filename, 'public');
			$insurance_file_name = '/storage/' . $path;
			$arr["insurance_copy"] = $insurance_file_name;
		}

		if($pollutionfile){
			$filename = "";
            $filename = mt_rand("111111", "999999") . '.' . $pollutionfile->getClientOriginalExtension();
			$path = $pollutionfile->storeAs('cf_rc_etc', $filename, 'public');
			$pollution_file_name = '/storage/' . $path;
			$arr["pollution_copy"] = $pollution_file_name;
		}

		if($rc_attachment){
			$filename = "";
            $filename = mt_rand("111111", "999999") . '.' . $rc_attachment->getClientOriginalExtension();
			$path = $rc_attachment->storeAs('cf_rc_etc', $filename, 'public');
			$rc_file_name = '/storage/' . $path;
			$arr["rc_copy"] = $rc_file_name;
		}



		DB::table('machines')
            ->where('id', $request->get('id'))
            ->update($arr);
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function destroy($id)
	{
		try {
			$machine = $this->machine->findOrFail($id);
			// delete the machine
			$machine->delete();
			return $this->sendResponse([$machine], 'machine has been Deleted');
		} catch (Exception $e) {
			return $this->sendError('Internal Server error please try again.');
		}
	}

	public function get_pre_machine()
	{
		try {
			$return['Category'] = Category::where('parent_id', '=', '')
				->orWhereNull('parent_id')->select('id', 'name')->get();
			$return['MachineCompany'] = MachineCompany::select('id', 'name')->get();
			// if ($this->user->role[0]->id != 1 or $this->user->role[0]->id != 2) {
			// 	$return['sites'] = Sites::select('id', 'site_id', 'site_name')->whereHas('allocate_users', function ($query) {
			// 		$query->where('user_id', $this->user->id);
			// 	})->get();
			// } else {
				$return['sites'] = Sites::select('id', 'site_id', 'site_name')->get();
			// }
			$return['operators'] = Operators::select('*')->get();

			return $this->sendResponse($return, '');
		} catch (Exception $e) {
			return $this->sendError('Internal Server error please try again.');
		}
	}

	public function assign_site(Request $request)
	{
		$data = $request->all();
		$validator = Validator::make($data, [
			'machine_id' => 'required',
			'site_id' => ['required', 'integer'],
			'from_date' => ['required'],
			'redeployment_reason' => ['required'],

		]);
		if ($validator->fails()) {
			return $this->validationError($validator->errors(), 'Invalid input OR some mandatory fields are blank.');
		}
		try {
			$from_date = db_date_time($data['from_date']);
			$to_date = $data['to_date'] ? db_date_time($data['to_date']) : null;

			$machine = $this->machine->findOrFail($data['machine_id']);

			$machine->machine_sites()->syncWithoutDetaching([['site_id' => $data['site_id'], 'from_date' => $from_date, 'to_date' => $to_date, 'redeployment_reason' => $data['redeployment_reason']]]);

			return $this->sendResponse($machine, 'Machine has been assigned to site.');
		} catch (Exception $e) {
			return $this->sendError('Internal Server error please try again.');
		}
	}

	public function assign_operator(Request $request)
	{
		$data = $request->all();
		$validator = Validator::make($data, [
			'machine_id' => 'required',
			'operator_id' => ['required', 'integer'],
			'operator_from_date' => ['required'],
			'reason' => ['required'],
		]);
		if ($validator->fails()) {
			return $this->validationError($validator->errors(), 'Invalid input OR some mandatory fields are blank.');
		}
		try {
			$from_date = db_date_time($data['operator_from_date']);
			$to_date = $data['operator_to_date'] ? db_date_time($data['operator_to_date']) : null;

			$machine = $this->machine->findOrFail($data['machine_id']);

			$machine->machine_operators()->syncWithoutDetaching([['operator_id' => $data['operator_id'], 'from_date' => $from_date, 'reason' => $data['reason']]]);

			return $this->sendResponse($machine, 'Operator has been assigned to site.');
		} catch (Exception $e) {
			return $this->sendError('Internal Server error please try again.');
		}
	}

	

	public function machine_sites($id = '')
	{
		$sites = DB::table('machine_sites')
			->select('machine_sites.from_date', 'machine_sites.redeployment_reason', 'sites.site_name')
			->join('sites', 'sites.id', '=', 'machine_sites.site_id')
			->where('machine_sites.machine_id', '=', $id)
			->orderby('machine_sites.from_date', 'desc')
			->orderby('machine_sites.id', 'desc')
			->get();
		return $this->sendResponse($sites, 'Ticket has been Deleted');
	}

	public function get_site_details(int $id = null)
	{
		//start_query_log();
		$cd = db_date_time();
		$machine =
			$this->machine
			->join('machine_sites', 'machine_id', '=', 'machines.id')
			->select('machine_sites.*', 'sites.site_name')
			->selectRaw("(SELECT `from_date` FROM machine_sites as m WHERE `m`.`id` > `machine_sites`.`id` AND `m`.`machine_id` = `machine_sites`.`machine_id` ORDER BY from_date ASC LIMIT 1) as end_date")
			->selectRaw("((SELECT IFNULL((SELECT run_hour FROM `machine_maintenances` WHERE machine_id=machine_sites.machine_id AND `datetime`>=  machine_sites.from_date AND `datetime`<  (SELECT IFNULL( (SELECT `from_date` FROM machine_sites as m WHERE `m`.`id` > `machine_sites`.`id` AND `m`.`machine_id` = `machine_sites`.`machine_id` ORDER BY from_date ASC LIMIT 1),'{$cd}')) ORDER BY `datetime` DESC LIMIT 1 ),0) - IFNULL((SELECT run_hour FROM `machine_maintenances` WHERE machine_id=machine_sites.machine_id AND `datetime`<  machine_sites.from_date AND `datetime`>  (SELECT IFNULL( (SELECT `from_date` FROM machine_sites as m WHERE `m`.`id` < `machine_sites`.`id` AND `m`.`machine_id` = `machine_sites`.`machine_id` ORDER BY from_date DESC LIMIT 1),'{$cd}')) ORDER BY `datetime` DESC LIMIT 1 ),0))) as total_run_hour")

			->selectRaw("((SELECT IFNULL((SELECT km_run FROM `machine_maintenances` WHERE machine_id=machine_sites.machine_id AND `datetime`>=  machine_sites.from_date AND `datetime`<  (SELECT IFNULL( (SELECT `from_date` FROM machine_sites as m WHERE `m`.`id` > `machine_sites`.`id` AND `m`.`machine_id` = `machine_sites`.`machine_id` ORDER BY from_date ASC LIMIT 1),'{$cd}')) ORDER BY `datetime` DESC LIMIT 1 ),0) - IFNULL((SELECT km_run FROM `machine_maintenances` WHERE machine_id=machine_sites.machine_id AND `datetime`<  machine_sites.from_date AND `datetime`>  (SELECT IFNULL( (SELECT `from_date` FROM machine_sites as m WHERE `m`.`id` < `machine_sites`.`id` AND `m`.`machine_id` = `machine_sites`.`machine_id` ORDER BY from_date DESC LIMIT 1),'{$cd}')) ORDER BY `datetime` DESC LIMIT 1 ),0))) as total_km_run")

			->selectRaw("((SELECT IFNULL((SELECT production_fig FROM `machine_maintenances` WHERE machine_id=machine_sites.machine_id AND `datetime`>=  machine_sites.from_date AND `datetime`<  (SELECT IFNULL( (SELECT `from_date` FROM machine_sites as m WHERE `m`.`id` > `machine_sites`.`id` AND `m`.`machine_id` = `machine_sites`.`machine_id` ORDER BY from_date ASC LIMIT 1),'{$cd}')) ORDER BY `datetime` DESC LIMIT 1 ),0) - IFNULL((SELECT production_fig FROM `machine_maintenances` WHERE machine_id=machine_sites.machine_id AND `datetime`<  machine_sites.from_date AND `datetime`>  (SELECT IFNULL( (SELECT `from_date` FROM machine_sites as m WHERE `m`.`id` < `machine_sites`.`id` AND `m`.`machine_id` = `machine_sites`.`machine_id` ORDER BY from_date DESC LIMIT 1),'{$cd}')) ORDER BY `datetime` DESC LIMIT 1 ),0))) as total_production_fig")

			->selectRaw("(SELECT SUM(consumption) FROM `machine_maintenances` WHERE machine_id=machine_sites.machine_id AND `datetime`>= machine_sites.from_date AND `datetime`<= (SELECT IFNULL( (SELECT `from_date` FROM machine_sites as m WHERE `m`.`id` > `machine_sites`.`id` AND `m`.`machine_id` = `machine_sites`.`machine_id` ORDER BY from_date ASC LIMIT 1),'{$cd}'))) as total_consumption")

			->selectRaw("( SELECT IFNULL( ( SELECT COALESCE(SUM(actual_material_cost), 0) FROM `tickets` WHERE machine_id = machine_sites.machine_id AND DATE(`actual_date`) >= DATE(machine_sites.from_date) AND DATE(`actual_date`) <( SELECT IFNULL( ( SELECT DATE(`from_date`) FROM machine_sites AS m WHERE `m`.`id` > `machine_sites`.`id` AND `m`.`machine_id` = `machine_sites`.`machine_id` ORDER BY from_date ASC LIMIT 1), '{$cd}' ) ) ORDER BY `actual_date` DESC LIMIT 1 ), 0 ) ) AS total_material_cost")
			->selectRaw("( SELECT IFNULL( ( SELECT COALESCE(SUM(actual_service_cost), 0) FROM `tickets` WHERE machine_id = machine_sites.machine_id AND DATE(`actual_date`) >= DATE(machine_sites.from_date) AND DATE(`actual_date`) <( SELECT IFNULL( ( SELECT DATE(`from_date`) FROM machine_sites AS m WHERE `m`.`id` > `machine_sites`.`id` AND `m`.`machine_id` = `machine_sites`.`machine_id` ORDER BY from_date ASC LIMIT 1), '{$cd}' ) ) ORDER BY `actual_date` DESC LIMIT 1 ), 0 ) ) AS total_service_cost")
			->selectRaw("( SELECT IFNULL( ( SELECT COALESCE( (SUM(`actual_material_cost`)+SUM(`actual_service_cost`)), 0) FROM `tickets` WHERE machine_id = machine_sites.machine_id AND DATE(`actual_date`) >= DATE(machine_sites.from_date) AND DATE(`actual_date`) <( SELECT IFNULL( ( SELECT DATE(`from_date`) FROM machine_sites AS m WHERE `m`.`id` > `machine_sites`.`id` AND `m`.`machine_id` = `machine_sites`.`machine_id` ORDER BY from_date ASC LIMIT 1), '{$cd}' ) ) ORDER BY `actual_date` DESC LIMIT 1 ), 0 ) ) AS total_cost")

			->join('sites', 'sites.id', '=', 'machine_sites.site_id')
			->where('machines.id', $id)
			->groupBy('machine_sites.id')
			->get();
		//last_query();
		return $this->sendResponse($machine, '');
	}

	public function machine_operator($id = ''){
		$sites = DB::table('machine_operators')
			->select('machine_operators.from_date', 'machine_operators.reason', 'operators.name')
			->join('operators', 'operators.id', '=', 'machine_operators.operator_id')
			->where('machine_operators.machine_id', '=', $id)
			->orderby('machine_operators.from_date', 'desc')
			->orderby('machine_operators.id', 'desc')
			->get();
		return $this->sendResponse($sites, 'Ticket has been Deleted');
	}

}
