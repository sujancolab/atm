<?php

namespace App\Http\Requests\Users;

use Illuminate\Foundation\Http\FormRequest;

class ProfileUpdateRequest extends FormRequest {
	/**
	 * Determine if the user is authorized to make this request.
	 *
	 * @return bool
	 */
	public function authorize() {
		return true;
	}

	/**
	 * Get the validation rules that apply to the request.
	 *
	 * @return array
	 */
	public function rules() {
		$upfor = $this->input('upfor');
		if ($upfor == 'shipping') {
			return [
				'apartment' => 'required|string|max:191',
				'city' => 'required|string|max:191',
				'state' => 'required|string|max:191',
				'street' => 'required|string|max:191',
				'zip_code' => 'required|string|max:191',
			];
		} elseif ($upfor == 'acset') {
			$work_with_designer = $this->input('work_with_designer');
			return [
				//'work_with_designer'
				'designer_charge' => ($work_with_designer ? 'required|numeric' : ''),

			];
		} else {
			$validation = [
				'first_name' => 'required|string|max:191',
				'last_name' => 'required|string|max:191',
				'country_code' => 'required|numeric',
				'phone_number' => 'required|numeric',
				'email' => 'required|string|email|max:191|unique:users,email,' . $this->user()->id,
			];
			if (in_array($this->user()->type, array('Contractor', 'designer', 'vendor'))) {
				$validation['company_name'] = ['required', 'string', 'max:255'];
				$validation['company_phone'] = ['nullable', 'numeric'];
			}
			return $validation;
		}
	}
}
