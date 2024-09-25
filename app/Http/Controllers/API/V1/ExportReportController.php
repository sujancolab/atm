<?php
namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Models\Complaint;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class ExportReportController extends Controller
{
    public function store(Request $request)
    {
        $complaintType = $request->complaint_type;
        $fromDate = $request->from_date ? $request->from_date : null;
        $toDate = $request->to_date ? $request->to_date : null;

        if ($complaintType != 3) {
            $reports = Complaint::InBetween($fromDate, $toDate)
                ->ComplaintSystemType($complaintType)
                ->where('work_status', 'Completed')
                ->get();
        } else {
            $complaintType = 1;
            $reports = Complaint::InBetween($fromDate, $toDate)
                ->ComplaintSystemType($complaintType)
                ->where('work_status', 'Completed')
                ->where('is_slm', 1)
                ->get();
        }

        $reportData = [];
        foreach ($reports as $report) {
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
                $duration = $report->updated_at->diffInHours($report->created_at) . ':' . $report->updated_at->diff($report->created_at)->format('%I:%S');
            }

            $lag = $report->lag_time ? 'Delay' : 'N/A';
            $lag_reason = $report->lag_reason ? $report->lag_reason : 'N/A';

            $reportData[] = [
                'Docket Number' => $report->docket_no,
                'ATM No' => $report->atm->atm_id,
                'MSP' => $report->atm->client->client_name,
                'ATM Location' => $report->atm->areaCode->area_code,
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
                'Custodian Name' => $report->custodians->where('status', 1)->first()->name,
                'Custodian ID' => $report->custodians->where('status', 1)->first()->user->user_code,
                'Status' => $lag,
                'Delay Reason' => $lag_reason,
                'Bank' => $report->atm->user->bank->bank_name
            ];
        }

        // Generate and return the Excel file for download as an API response
        return Excel::download(new \App\Exports\ReportExport($reportData), 'report_' . time() . '.xlsx');
    }
}
