<?php
namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromArray;

class ReportExport implements FromArray
{
    protected $reportData;

    public function __construct(array $reportData)
    {
        $this->reportData = $reportData;
    }

    public function array(): array
    {
        return $this->reportData;
    }
}
