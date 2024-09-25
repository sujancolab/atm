<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use PDF;

ini_set('max_execution_time', 300); //300 seconds = 5 minutes

class PdfController extends Controller {
	public function invoice($id, $type = 'stream') {
		$data = DB::table('consignments')
			->where('consignments.id', $id)
			->join('users as U', 'user_id', '=', 'U.id')
			->leftJoin('users  AS dr', 'driver_id', '=', 'dr.id')
			->select('consignments.*', 'consignments.payment_type as ptype', 'U.name', 'dr.name as driver', 'dr.id as driverid')->get();

		// share data to view
		view()->share('invoice', $data);
		$pdf = PDF::loadView('pdf.invoice', $data);
		$filename = date('Ymd') . 'invoice';
		// download PDF file with download method
		if ($type == 'stream') {
			return $pdf->stream($filename . '.pdf');
		}

		if ($type == 'download') {
			return $pdf->download($filename . '.pdf');
		}
	}
}
