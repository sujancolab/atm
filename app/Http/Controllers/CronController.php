<?php

namespace App\Http\Controllers;
//use Illuminate\Support\Facades\DB;
use App\Models\Product;

class CronController extends Controller {

	public function index() {

		$products = Product::with('vendor')->doesntHave('templates_path_product')->get();

		$html = '';
		if ($products) {
			$l = 0;
			foreach ($products as $key => $product) {
				$l++;
				$imgUrl = preg_replace('/([^:])(\/{2,})/', '$1/', config('app.url') . '/' . $product->photo);
				$html .= "<tr " . ($l % 2 == 0 && $l > 1 ? 'style="background-color: #90ee962b"' : '') . "  >";

				$html .= "<td><a href='" . url('account') . "'><img style='height:100px;width:100px;' src='" . $imgUrl . "'/></a></td>";
				$html .= "<td>{$product->name}</td>";
				$html .= "<td>{$product->vendor->company_name}</td>";
				$html .= "</tr>";
			}

			$message = '

<p>Dear Admin, <br>
You have not yet upload any layer for this products.
</p>
			<table width="100%" border="1" style="border:1px solid #333; border-collapse: collapse; width: 100%; ">
			<thead style="background-color: aquamarine;font-size: 20px;">
			<tr>
     <th>Thumb</th>
     <th>Product Name</th>
     <th>Vendor</th>
     </tr>
     </thead>
<tbody>';

			$message .= $html;

			$message .= '</tbody>
</table> ';

			$params['data'] = ['foo' => $message];
			$params['to'] = env('MAIL_RECEIVE_ADDRESS', 'wevisutesting@yopmail.com');
			$params['subject'] = 'Pending Layer Product';
			//$params['template_type'] = 'view';
			sendmail($params);
		}

	}
}
