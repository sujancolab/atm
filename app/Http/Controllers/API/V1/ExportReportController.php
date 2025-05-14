<?php
namespace App\Http\Controllers\API\V1;

use App\Exports\ReportExport;
use App\Http\Controllers\Controller;
use App\Models\CmsUser;
use App\Models\Complaint;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;


class ExportReportController extends BaseController
{
    public function store(Request $request)
    {
        $complaintType = $request->complaint_type;
        $fromDate = $request->from_date ? $request->from_date : null;
        $toDate = $request->to_date ? $request->to_date : null;
        if($complaintType == "SLM"){
            $complaintType = 3;
        }elseif($complaintType == "FLM"){
            $complaintType = 1;
        }else{
            $complaintType = 2;
        }
        if ($complaintType != 3) {
            $reports = Complaint::with('atm.cmsUser.bank',
            // 'complaintType',
            // 'custodians',
            // 'complaintDetail'
            )->with(['atm.areacode'])->InBetween($fromDate, $toDate)
                ->ComplaintSystemType(1)
                ->where('work_status', 'Completed')
                ->get();
        } else {
            $complaintType = 1;
            $reports = Complaint::with('atm.cmsUser.bank',
            // 'complaintType',
            // 'custodians',
            // 'complaintDetail'
            )->with(['atm.areacode'])->InBetween($fromDate, $toDate)
                ->ComplaintSystemType($complaintType)
                ->where('work_status', 'Completed')
                ->where('is_slm', 1)
                ->get();
        }

        $reportData = [];

        foreach ($reports as $report) {
            // echo "<pre>";
            // print_r($report);die();
            if ($report->complaint_system_type_id == 1 && $report->is_slm == 0) {
                $call_type = 'FLM';
            } elseif ($report->complaint_system_type_id == 1 && $report->is_slm == 1) {
                $call_type = 'SLM';
            } else {
                $call_type = 'AXIS BNA';
            }

            if ($report->total_time) {
                $duration = $report->total_time;
            } else {
                $duration = $report->created_at->diff($report->updated_at)->format('%H:%I:%S');
            }

            $lag = $report->lag_time ? 'Delay' : 'N/A';
            $lag_reason = $report->lag_reason ? $report->lag_reason : 'N/A';
            $cmsUser=$report->custodians->where('status', 1)->first();
            $user=$cmsUser ? CmsUser::where('id',$cmsUser->custodian_id)->first() : null;
            // echo "<pre>";
            // print_r($duration);exit;
            $reportData[] = [
                'Docket Number' => $report->docket_no,
                'ATM No' => $report->atm->atm_id,
                'MSP' => $report->atm->client->client_name,
                'ATM Location' => $report->atm->areacode ? $report->atm->areacode->area_code : "N/A",
                'City' => $report->atm->city->city_name,
                'State' => $report->atm->state->state_name,
                'VIP/Reguler' => 'REGULAR',
                'Classification' => 'Urban',
                'TAT Time' => $report->atm->tag_time,
                'Call Type (FLM/SLM)' => $call_type,
                'Fault Description' => $report->complaintType->title,
                'Ticket Open Date' => $report->created_at->format('d-m-Y'),
                'Ticket Open Time' => $report->created_at->format('H:i:s'),
                'Ticket Close Date' => $report->updated_at->format('d-m-Y'),
                'Ticket Close Time' => $report->updated_at->format('H:i:s'),
                'Duration' => $duration,
                'Custodian Name' => $cmsUser ? $cmsUser->name : "N/A",
                'Custodian ID' => $user ? $user->user_code : "N/A",
                'Status' => $lag,
                'Delay Reason' => $lag_reason,
                'Bank' => $report->atm->user->bank->bank_name
            ];
            // echo "<pre>";print_r($reportData);die();
        }
        // echo "<pre>";print_r($reportData);die();

        // Slice the reportData to include only the first 100 records
        $reportData = array_slice($reportData, 0, 1000);

        // Remove debugging statements
        // echo "<pre>";print_r($reportData);die();

        // Generate and return the Excel file for download as an API response
        return Excel::download(new ReportExport($reportData), 'report_' . time() . '.xlsx');
    }
}
