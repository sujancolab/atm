@extends('layouts.app')

@section('content')
<div class="container-fluid">
    <div class="row">
        <div class="col-md-6" style="padding:0;">
            <img src="{{ asset('/images/login-bg.jpg') }}" alt="Background logo" style="height: 100vh;width: 100%;object-fit: cover;">
        </div>
        <div class="col-md-6" style="background: white; padding-top:150px;">
        <div class="form-group row justify-content-md-center">
            <img src="{{ asset('/images/logo.png') }}" alt="The Logo" class="brand-image" style="width:150px; margin-bottom:30px;">
        </div>
            <form method="POST" action="{{ route('login') }}">
                @csrf

                <div class="form-group row justify-content-md-center">
                    <div class="col-md-6">
                        <label for="email">{{ __('User Name') }}</label>
                        <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

                        @error('email')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                        @enderror
                    </div>
                </div>

                <div class="form-group row justify-content-md-center">
                    <div class="col-md-6">
                        <label for="password">{{ __('Password') }}</label>
                        <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">

                        @error('password')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                        @enderror
                    </div>
                </div>

                <div class="form-group row justify-content-md-center">
                    <div class="col-md-3" style="padding-top: 6px;font-size: 13px;">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                            <label class="form-check-label" for="remember">
                                {{ __('Remember Me') }}
                            </label>
                        </div>
                    </div>
                    <div class="col-md-3" style="text-align: end;">
                    @if (Route::has('password.request'))
                        <a class="btn btn-link" href="{{ route('password.request') }}" style="font-size: 13px;">
                            {{ __('Forgot Your Password?') }}
                        </a>
                        @endif
                    </div>
                </div>

                <div class="form-group row mb-0">
                    <div class="col-md-6 offset-md-3">
                        <button type="submit" class="btn btn-primary btn-block" style="background: white;color: black;font-weight: bold;border: 3px solid #004488;">
                            {{ __('Login') }}
                        </button>
                    </div>
                </div>
            </form>

        </div>
    </div>
</div>
@endsection