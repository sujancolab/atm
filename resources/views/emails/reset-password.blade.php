<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Reset Password</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;800&display=swap" rel="stylesheet">
    <!--[if mso]>
    <style type="text/css">
    .body-text {
    font-family: Arial, sans-serif;
    }
    </style>
    <![endif]-->
    <style type="text/css">
    @media all and (max-width: 480px){
    .belowFooter .one{
    font-size: 28px !important;
    }
    .belowFooter .two{
    font-size: 20px !important;
    }
    }
    </style>
  </head>
  <body class="" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;font-family:'Montserrat', sans-serif;font-weight:400;box-sizing:border-box;line-height:1.5;width:100% !important;background-color:#f2f2f2 !important;margin:0 !important;padding:0 !important;color:#000 !important;">
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body" style="width:100%;max-width:600px;margin:0;padding:0;margin-left:auto;margin-right:auto;height:auto !important;width:100% !important;background-color:#FFFFFF !important;">
      <tr>
        <td class="container">
          <div class="header" style="background-color:#fff;text-align: center;">
            <img src="{{ asset('images/imgmail/logo.png')}}" alt="" style="outline:0;border:0;width:auto;max-width:100%;height:auto;">
          </div>
          <div style="font-size: 26px; padding: 1.5em; text-align: center; font-weight: 700;">WeVisu Password Reset Instructions</div>
          <div>
            <img src="{{ asset('images/imgmail/resetpass-header.png')}}" alt="" style="outline:0;border:0;width:auto;max-width:100%;height:auto;max-width: 100%;">
          </div>
          <table class="mainContent" style="max-width: 90%; margin-top: 20px; margin-bottom: 20px; margin-left: auto; margin-right: auto; padding: 25px; width: 100%;">
            <tbody style="background-color:#fff;background-color: #fff;">
              <tr>
                <td style="text-align: center;">
                  <div style="font-size: 24px ; font-weight: 700; margin-bottom: 15px;">Hello!<br>
                  You are receiving this email because we received a password reset request for your account.</div>
                </td>
              </tr>
              <tr>
                <td style="text-align: center; padding-top:40px;padding-bottom:40px;">
                  <a href="{!! $data['reset_url'] !!}" class="btnGreen" style="padding:15px 65px;border-radius:50px;color:#fff;background-color:#0cbf7f;text-decoration:none;font-weight:700;font-size:18px;">Reset Password</a>
                </td>
              </tr>
              <tr>
                <td style="text-align: center;">
                  If you’re having trouble clicking the "Reset Password" button, copy and paste the URL below into your web browser: <a href="{!! $data['reset_url'] !!}">{!! $data['reset_url'] !!}</a>
                </td>
              </tr>
              <tr>
                <td style="text-align: center; padding-top: 2rem; padding-bottom: 1.5rem;">
                  <div>If you did not request a password reset, no further action is required.</div>
                </td>
              </tr>
            </tbody>
          </table>
          <div>
            <a href="mailto:support@wevisu.com" style="color:inherit;text-decoration:none;"><img src="{{ asset('images/imgmail/need-help.jpg')}}" alt="" style="outline:0;border:0;width:auto;max-width:100%;height:auto;width: 100%;"></a>
          </div>
          <div class="footer" style="padding-top:1rem;padding-bottom:1.5rem;background-color:#fff !important;">
            <div class="linkWrpr" style="text-align:center;color:#000;">
              <a href="{{ config('app.url', '/') }}/contact" style="text-decoration:none;color:inherit;font-weight:500;font-size:18px;">Help Center</a>
              <span style="text-decoration:none;color:inherit;font-weight:500;font-size:18px;">|</span>
              <a href="{{ config('app.url', '/') }}/terms_of_service" style="text-decoration:none;color:inherit;font-weight:500;font-size:18px;">Terms & Conditions</a>
            </div>
            <div class="social" style="text-align:center;padding-top:10px;">
              @if (env('FACEBOOK_LINK')!='')
              <a href="{{ env('FACEBOOK_LINK') }}" style="text-decoration:none;color:inherit;margin:0;">
                <img src="{{ asset('images/imgmail/fb.png')}}" alt="" style="outline:0;border:0;">
              </a>
              @endif
              
              @if (env('INSTAGRAM_LINK')!='')
              <a href="{{ env('INSTAGRAM_LINK') }}" style="text-decoration:none;color:inherit;margin:0;">
                <img src="{{ asset('images/imgmail/insta.png')}}" alt="" style="outline:0;border:0;">
              </a>
              @endif
              
              @if (env('LINKEDIN_LINK')!='')
              <a href="{{ env('LINKEDIN_LINK') }}" style="text-decoration:none;color:inherit;margin:0;">
                <img src="{{ asset('images/imgmail/link.png')}}" alt="" style="outline:0;border:0;">
              </a>
              @endif
            </div>
            <div class="copyRight" style="color:#000;text-align:center;padding-top:10px;padding-bottom:5px;font-size:17px;">All rights reserved to Wevisu</div>
          </div>
        </td>
      </tr>
    </table>
  </body>
</html>