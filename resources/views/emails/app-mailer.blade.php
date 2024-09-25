@component('mail::message')
{{-- # Introduction --}}

{!! $data['foo'] !!}

{{-- The body of your message. --}}



Thanks,<br>
{{ config('app.name') }}
@endcomponent