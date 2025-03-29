<?php
// namespace App\Exports;

// use Maatwebsite\Excel\Concerns\FromArray;

// class ReportExport implements FromArray
// {
//     protected $reportData;

//     public function __construct(array $reportData)
//     {
//         $this->reportData = $reportData;
//     }

//     public function array(): array
//     {
//         return $this->reportData;
//     }
// }
namespace App\Exports;

use App\Models\CmsUser;
use App\Models\Complaint;
use Illuminate\Contracts\Queue\ShouldQueue;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Concerns\Exportable;

class ReportExport implements FromCollection, WithHeadings, WithMapping, ShouldQueue, WithChunkReading
{
    use Exportable;

    protected $data;

    public function __construct($data)
    {
        $this->data = $data;
    }

    public function collection()
    {
        // Return the data passed to the constructor
        return collect($this->data);
    }

    public function headings(): array
    {
        return [
            'Docket Number', 'ATM No', 'MSP', 'ATM Location', 'City', 'State',
            'VIP/Reguler', 'Classification', 'TAT Time', 'Call Type (FLM/SLM)',
            'Fault Description', 'Ticket Open Date', 'Ticket Open Time',
            'Ticket Close Date', 'Ticket Close Time', 'Duration',
            'Custodian Name', 'Custodian ID', 'Status', 'Delay Reason', 'Bank'
        ];
    }

    public function map($report): array
    {
        return [
            $report['Docket Number'],
            $report['ATM No'],
            $report['MSP'],
            $report['ATM Location'],
            $report['City'],
            $report['State'],
            $report['VIP/Reguler'],
            $report['Classification'],
            $report['TAT Time'],
            $report['Call Type (FLM/SLM)'],
            $report['Fault Description'],
            $report['Ticket Open Date'],
            $report['Ticket Open Time'],
            $report['Ticket Close Date'],
            $report['Ticket Close Time'],
            $report['Duration'],
            $report['Custodian Name'],
            $report['Custodian ID'],
            $report['Status'],
            $report['Delay Reason'],
            $report['Bank']
        ];
    }

    public function chunkSize(): int
    {
        return 1000;
    }
}

