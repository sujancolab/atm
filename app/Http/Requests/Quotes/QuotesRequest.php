<?php

namespace App\Http\Requests\Quotes;

use Illuminate\Foundation\Http\FormRequest;

class QuotesRequest extends FormRequest
{
	/**
	 * Determine if the user is authorized to make this request.
	 *
	 * @return bool
	 */
	public function authorize()
	{
		return true;
	}

	/**
	 * Get the validation rules that apply to the request.
	 *
	 * @return array
	 */
	public function rules()
	{
		if ($this->isMethod('post')) {
			return $this->createRules();
		} elseif ($this->isMethod('put')) {
			return $this->updateRules();
		}
	}

	/**
	 * Define validation rules to store method for resource creation
	 *
	 * @return array
	 */
	public function createRules(): array
	{
		return [
			//'type' => 'required|in:admin,user,vendor,Contractor,designer',
			'name' => 'required|string|max:191',
			//'last_name' => 'required|string|max:191',
			//'email' => 'required|string|email|max:191|unique:users',
			//'password' => 'required|string|min:6',
			//'phone_number' => 'numeric',
		];
	}

	/**
	 * Define validation rules to update method for resource update
	 *
	 * @return array
	 */
	public function updateRules(): array
	{
		return [
			'name' => 'required|string|max:191',
			'email' => 'sometimes|string|email|max:191|unique:users,email,' . $this->get('id'),
			//'phone_number' => 'numeric',
		];
	}
}
