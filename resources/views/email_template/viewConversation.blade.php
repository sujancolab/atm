@if(!empty($complaint_details))
    @foreach ($complaint_details as $key => $value)    	
       <tr>
       		<td style="font-size: 13px; width: 150px; color: #3598db; background: #f5f5f5; font-weight: normal; text-align: left; font-family: Arial, Helvetica, sans-serif; line-height: 22px; font-weight: bold; vertical-align: top; padding: 10px 0px; border: none; border-bottom: 1px solid #ddd;">
				<strong style="font-weight: 800;">{{ ($value->is_admin)?"Call Center":$value->client_name }} :</strong>
				<p style="font-size: 12px; margin: 0px; font-weight: 500; color: #687074;">{{ $value->posted_at }}</p>
			</td>
			<td style="font-size: 13px; color: #687074; background: #f5f5f5; font-weight: normal; text-align: left; font-family: Arial, Helvetica, sans-serif; line-height: 22px; vertical-align: top; padding: 10px 0px; border: none; border-bottom: 1px solid #ddd;"> {{ $value->comment }}
			</td>
		</tr> 
    @endforeach
@endif