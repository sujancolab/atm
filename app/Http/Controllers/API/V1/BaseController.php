<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;

class BaseController extends Controller {
	/**
	 * success response method.
	 *
	 * @param $result
	 * @param $message
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function sendResponse($result, $message) {
		$response = [
			'success' => ($result === '' || $result === null) ? false : true,
			'data' => $result,
			'message' => is_string($message) ? ucwords($message) : $message,
		];

		return response()->json($response, 200);
	}

	/**
	 * return error response.
	 *
	 * @param $error
	 * @param  array  $errorMessages
	 * @param  int  $code
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function sendError($error, $errorMessages = [], $code = 404) {
		$response = [
			'success' => false,
			'message' => is_string($error) ? ucwords($error) : $error,
		];

		if (!empty($errorMessages)) {
			$response['data'] = $errorMessages;
		}

		return response()->json($response, $code);
	}

	/**
	 * return error response.
	 *
	 * @param $error
	 * @param  array  $errorMessages
	 * @param  int  $code
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function validationError($error, $errorMessages = [], $code = 422) {
		$response = [
			'success' => false,
			'message' => is_string($errorMessages) ? ucwords($errorMessages) : $errorMessages,
		];

		if (!empty($errorMessages)) {
			$response['errors'] = $error;
		}

		return response()->json($response, $code);
	}

	/**
	 * return Unauthorized response.
	 *
	 * @param $error
	 * @param  int  $code
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function unauthorizedResponse($error = 'Forbidden', $code = 403) {
		$response = [
			'success' => false,
			'message' => is_string($error) ? ucwords($error) : $error,
		];

		return response()->json($response, $code);
	}
}
