<?php

namespace App\Http\Requests\District;

use Illuminate\Foundation\Http\FormRequest;

class UpdateDistrictRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            //
            'district_name' => 'required|string|max:191|unique:districts,district_name,' . $this->get('id'),
            'state_id' => 'required|integer|max:191',
        ];
    }
}
