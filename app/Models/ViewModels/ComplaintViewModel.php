<?php
namespace App\Models\ViewModels;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Collection;

class ComplaintViewModel
{
    protected $filters;
    protected $atmIds;

    public function __construct(array $filters, array $atmIds)
    {
        $this->filters = $filters;
        $this->atmIds = $atmIds;
    }

    public function getComplaints(): \Illuminate\Contracts\Pagination\Paginator
    {
        return DB::table('complaints_view')
            ->whereIn('atm_id', $this->atmIds)
            ->when($this->filters['system'] !== 'all', fn($query) => $query->where('complaint_system_type_id', $this->filters['system']))
            ->when(!empty($this->filters['docket_no']), fn($query) => $query->where('docket_no', $this->filters['docket_no']))
            ->when(!empty($this->filters['complaint_status']), fn($query) => $query->where('work_status', $this->filters['complaint_status']))
            ->addSelect([
                'id',
                'docket_no',
                'atm_id',
                'work_status',
                'created_at',
                'tag_time',
                DB::raw("(SELECT name FROM custodians WHERE custodians.complaint_id = complaints_view.id AND custodians.status = 1 AND custodians.custodian_id != 0 LIMIT 1) AS custname"),
                DB::raw("
                    CASE
                        WHEN work_status = 'Completed' THEN ''
                        ELSE SEC_TO_TIME(TIMESTAMPDIFF(SECOND, created_at, NOW()) - TIME_TO_SEC(tag_time))
                    END as lag_time
                ")
            ])
            ->orderBy('work_status', 'asc')
            ->orderBy('created_at', 'desc')
            ->paginate(10);
    }

    public function getStatusList(): array
    {
        return ['' => 'Select', 'Pending' => 'Pending', 'Processing' => 'Processing', 'Completed' => 'Completed'];
    }
}
