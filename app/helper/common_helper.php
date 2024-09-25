<?php
use App\Jobs\AppMailerJob;
use App\Notifications\AccountNotification;
use Carbon\Carbon;
use DB as DBS;
use Illuminate\Support\Str;
use Notification as Notificationd;
function pre($array, $exit = true) {
	echo '<pre>';
	print_r($array);
	echo '</pre>';
	if ($exit) {
		exit();
	}
}
function start_query_log() {
	DBS::enableQueryLog();
}
function last_query() {
	$queries = DBS::getQueryLog();
	dump($queries);
	$sql_with_bindings = Str::replaceArray('?', $queries[0]['bindings'], $queries[0]['query']);

	dd($sql_with_bindings);
}
function removeStyle($content) {
	$output = preg_replace('/(<[^>]+) class=".*?"/i', '$1', $content);
	$output = str_ireplace('<p>&nbsp;</p>', '', $output);
	$output = str_ireplace('<p><br></p>', '', $output);
	$output = str_ireplace('<p></p>', '', $output);
	$output = preg_replace('/<p[^>]*>[\s|&nbsp;]*<\/p>/', '', $output);
	// $output = preg_replace('/style[^>]*/', '', $output);
	// $output = preg_replace('/class[^>]*/', '', $output);
	$output = preg_replace('/(<[^>]+) style=".*?"/i', '$1', $output);
	$output = preg_replace('/(<[^>]+) dir=".*?"/i', '$1', $output);
	return $output;
}
function protectedString($content) {
	$h = removeStyle($content);
	$h = strip_tags($h, '<a><ul><li><ol><h1><h2><h3><h4><h5><h6><p><div><img><iframe><b><u><i><video><table><thead><tbody><tfooter><tr><th><td><strong>');
	return $h;
}
function t($string) {
	return $string;
}
function json($status, $message) {
	echo json_encode([
		'status' => $status,
		'message' => $message,
		'text' => $message,
	]);
	exit();
}
function db_date_format($date) {

	$blank = '';
	if ($date != '') {
		//$string = str_replace(' ', '', $date); // Replaces all spaces.
		//$date = preg_replace('/[^A-Za-z0-9\-]/', '-', $string);
		return Carbon::parse($date)->timezone(Config::get('app.timezone'))->format('Y-m-d');
		return date('Y-m-d', strtotime($date));
	} else {
		return $blank;
	}
}
function db_time_format($date) {

	$blank = '';
	if ($date != '') {
		return Carbon::parse($date)->timezone(Config::get('app.timezone'))->format('H:i:s');
	} else {
		return $blank;
	}
}
function db_date_time($date = '') {
	if ($date != '') {
		return Carbon::parse($date)->timezone(Config::get('app.timezone'))->format('Y-m-d H:i:s');
	} else {
		return date("Y-m-d H:i:s");
	}
}
function date_convert($date, $date_format = 1) {
	$unx_stamp = strtotime($date);
	$blank = '';
	if ($date != '') {
		if ($date_format == 1) {
			$date_str = (date("d/m/Y", $unx_stamp));
		} elseif ($date_format == 2) {
			$date_str = (date("d/m/Y  h:i A", $unx_stamp));
		} elseif ($date_format == 3) {
			$date_str = (date("F jS, Y", $unx_stamp));
		}
		return $date_str;
	} else {
		return $blank;
	}
}
function time_convert($date, $date_format = 1) {
	$unx_stamp = strtotime($date);
	$blank = '';
	if ($date != '') {
		if ($date_format == 1) {
			$date_str = (date("H:i", $unx_stamp));
		} elseif ($date_format == 2) {
			$date_str = (date("h:i A", $unx_stamp));
		}
		return $date_str;
	} else {
		return $blank;
	}
}
function getDateForSpecificDayBetweenDates($startDate, $endDate, $day_number, $booking_time) {
	$endDate = strtotime($endDate);
	$days = array('1' => 'Monday', '2' => 'Tuesday', '3' => 'Wednesday', '4' => 'Thursday', '5' => 'Friday', '6' => 'Saturday', '7' => 'Sunday');
	for ($i = strtotime($days[$day_number], strtotime($startDate)); $i <= $endDate; $i = strtotime('+1 week', $i)) {
		$booking_date = date('Y-m-d', $i);
		$date_array[] = db_date_format($booking_date) . ' ' . $booking_time;
	}
	return $date_array;
}

function get_location_lat_lng($address) {
	$key = env("GOOGLE_MAP_KEY", "");
	$geocode = @file_get_contents('https://maps.google.com/maps/api/geocode/json?address=' . urlencode($address) . '&sensor=false&key=' . $key);

	if ($geocode === FALSE) {
		return false;
	} else {
		$output = json_decode($geocode);
		if (isset($output->status) && $output->status === 'OK') {
			if (isset($output->results[0]->geometry->location)) {
				$return['lat'] = $output->results[0]->geometry->location->lat;
				$return['long'] = $output->results[0]->geometry->location->lng;
				return $return;
			}
		} else {
			return false;
		}
	}
}

function order_status_validate($status = '') {
	$conStats = [];
	switch ($status) {
	case 'Accept to Pick Up':
		$conStats = ['Cart', 'Waiting for approval', 'Order', 'Accept to Pick Up', 'Picked Up', 'Shipping', 'Shipped', 'Out For Delivery', 'Cancle', 'Return Request', 'Returned', 'Delivered'];
		break;
	case 'Picked Up':
		$conStats = ['Cart', 'Waiting for approval', 'Order', 'Picked Up', 'Shipping', 'Shipped', 'Out For Delivery', 'Cancle', 'Return Request', 'Returned', 'Delivered'];
		break;
	case 'Shipping':
		$conStats = ['Cart', 'Waiting for approval', 'Order', 'Shipping', 'Shipped', 'Out For Delivery', 'Cancle', 'Return Request', 'Returned', 'Delivered'];
		break;
	case 'Shipped':
		$conStats = ['Cart', 'Waiting for approval', 'Order', 'Shipped', 'Out For Delivery', 'Cancle', 'Return Request', 'Returned', 'Delivered'];
		break;
	case 'Out For Delivery':
		$conStats = ['Cart', 'Waiting for approval', 'Order', 'Out For Delivery', 'Cancle', 'Return Request', 'Returned', 'Delivered'];
		break;
	case 'Cancle':
		$conStats = ['Cart', 'Waiting for approval', 'Order', 'Cancle', 'Return Request', 'Returned', 'Delivered'];
		break;
	case 'Return Request':
		$conStats = ['Cart', 'Waiting for approval', 'Order', 'Return Request', 'Returned', 'Delivered'];
		break;
	case 'Returned':
		$conStats = ['Cart', 'Waiting for approval', 'Order', 'Returned', 'Delivered'];
		break;
	case 'Delivered':
		$conStats = ['Cart', 'Waiting for approval', 'Order', 'Delivered'];
		break;
	default:
		$conStats = ['Cart', 'Waiting for approval', 'Order', 'Decline', 'Accept to Pick Up', 'Picked Up', 'Shipping', 'Shipped', 'Out For Delivery', 'Cancle', 'Return Request', 'Returned', 'Delivered'];
		break;
	}

	return $conStats;
}

function get_percent($val = 0, $dis = 0) {
	return $val * $dis / 100;
}

if (!function_exists('sendmail')) {
	function sendmail(array $data) {
		try {
			dispatch(new AppMailerJob($data));
		} catch (\Exception $e) {
			return false;
		}
	}
}

if (!function_exists('sendNotification')) {
	function sendNotification($userSchema, array $data) {
		try {
			Notificationd::send($userSchema, new AccountNotification($data));
		} catch (\Exception $e) {
			return false;
		}
	}
}

function marge_images($images = array(), $destination = '') {
// We want our final image to be 1200x725 size
	$x = 1200;
	$y = 725;

// dimensions of the final image
	$final_img = imagecreatetruecolor($x, $y);
//$width = imagesx($final_img);
	//$height = imagesy($final_img);
	// get the color white
	$white = imagecolorallocate($final_img, 255, 255, 255);
// fill entire image (quickly)
	imagefilledrectangle($final_img, 0, 0, $x - 1, $y - 1, $white);

// Enable blend mode and save full alpha channel
	imagealphablending($final_img, true);
	imagesavealpha($final_img, true);

	foreach ($images as $key => $img) {

// Create our image resources from the files
		$image_1 = imagecreatefromstring(file_get_contents($img));
// Copy our image onto our $final_img
		imagecopy($final_img, $image_1, 0, 0, 0, 0, $x, $y);
	}

	$filename = time() . '.png';
	$created = imagepng($final_img, $destination . '/' . $filename);
	return $filename;
}
