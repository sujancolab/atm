<?php

namespace App\Exports;

use App\Models\Readings;

use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Illuminate\Support\Collection;

class ReadingsExport implements FromCollection, WithHeadings, WithMapping
{
    protected $machines;
    protected $serialNumber = 0;

    public function __construct(Collection $machines)
    {
        $this->machines = $machines;
    }

    public function collection()
    {
        return $this->machines;
    }

    public function headings(): array
    {
        return [
            'SL No',
            'Current Site',
            'FAR No',
            'Name',
            'Model',
            'Actual Ave. Consumption (Ltrs/Hr)',
            'Actual Ave. Consumption (Kms/Ltr)',
            'Standard Consumption (Ltrs/Hr)',
            'Standard Consumption (Kms/Ltr)',
            '% of Actual Ave. Consumption (Ltrs/Hr)',
            '% of Actual Ave. Consumption (Kms/Ltr)',
            'Status',
            'Machine running status (Breakdown/Running/Idle)',
            'Comments',
        ];
    }

    public function map($machine): array
    {
        return [
            $this->serialNumber++,
            $machine->current_site?$machine->current_site->site_name:"",
            $machine->far_no,
            $machine->name,
            $machine->machine_model->name,
            $machine->actual_avg_consumtion_ltr_hr?$machine->actual_avg_consumtion_ltr_hr:0,
            $machine->actual_avg_consumtion_kms_hr?$machine->actual_avg_consumtion_kms_hr:0,
            $machine->standard_consumption_hr_per_ltr?$machine->standard_consumption_hr_per_ltr:0,
            $machine->standard_consumption_hr_per_ltr?$machine->standard_consumption_km_per_ltr:0,
            $machine->percent_actual_avg_consumption_ltr_hr?$machine->percent_actual_avg_consumption_ltr_hr . "%":0 . "%",
            $machine->percent_actual_avg_consumption_km_hr?$machine->percent_actual_avg_consumption_km_hr . "%":0 . "%",
            $machine->ok_status?$machine->ok_status:"",
            $machine->condition_of_machine?$machine->condition_of_machine:"",
            ""
        ];
    }
}
