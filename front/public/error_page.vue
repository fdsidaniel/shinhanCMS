<!DOCTYPE html>
<html lang="kr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>키보드 보안</title>
  <style>
    @font-face {
      font-family: 'Pretendard';
      font-weight: 900;
      font-display: swap;
      src: local('Pretendard Black'), url('../_nuxt/assets/font/woff2/Pretendard-Black.woff2') format('woff2'), url('../_nuxt/assets/font/woff/Pretendard-Black.woff') format('woff');
    }

    @font-face {
      font-family: 'Pretendard';
      font-weight: 800;
      font-display: swap;
      src: local('Pretendard ExtraBold'), url('../_nuxt/assets/font/woff2/Pretendard-ExtraBold.woff2') format('woff2'), url('../_nuxt/assets/font/woff/Pretendard-ExtraBold.woff') format('woff');
    }

    @font-face {
      font-family: 'Pretendard';
      font-weight: 700;
      font-display: swap;
      src: local('Pretendard Bold'), url('../_nuxt/assets/font/woff2/Pretendard-Bold.woff2') format('woff2'), url('../_nuxt/assets/font/woff/Pretendard-Bold.woff') format('woff');
    }

    @font-face {
      font-family: 'Pretendard';
      font-weight: 600;
      font-display: swap;
      src: local('Pretendard SemiBold'), url('../_nuxt/assets/font/woff2/Pretendard-SemiBold.woff2') format('woff2'), url('../_nuxt/assets/font/woff/Pretendard-SemiBold.woff') format('woff');
    }

    @font-face {
      font-family: 'Pretendard';
      font-weight: 500;
      font-display: swap;
      src: local('Pretendard Medium'), url('../_nuxt/assets/font/woff2/Pretendard-Medium.woff2') format('woff2'), url('../_nuxt/assets/font/woff/Pretendard-Medium.woff') format('woff');
    }

    @font-face {
      font-family: 'Pretendard';
      font-weight: 400;
      font-display: swap;
      src: local('Pretendard Regular'), url('../_nuxt/assets/font/woff2/Pretendard-Regular.woff2') format('woff2'), url('../_nuxt/assets/font/woff/Pretendard-Regular.woff') format('woff');
    }

    @font-face {
      font-family: 'Pretendard';
      font-weight: 300;
      font-display: swap;
      src: local('Pretendard Light'), url('../_nuxt/assets/font/woff2/Pretendard-Light.woff2') format('woff2'), url('../_nuxt/assets/font/woff/Pretendard-Light.woff') format('woff');
    }

    @font-face {
      font-family: 'Pretendard';
      font-weight: 200;
      font-display: swap;
      src: local('Pretendard ExtraLight'), url('../_nuxt/assets/font/woff2/Pretendard-ExtraLight.woff2') format('woff2'), url('../_nuxt/assets/font/woff/Pretendard-ExtraLight.woff') format('woff');
    }

    @font-face {
      font-family: 'Pretendard';
      font-weight: 100;
      font-display: swap;
      src: local('Pretendard Thin'), url('../_nuxt/assets/font/woff2/Pretendard-Thin.woff2') format('woff2'), url('../_nuxt/assets/font/woff/Pretendard-Thin.woff') format('woff');
    }
    html,body{
      margin: 0;
      padding: 0;
      height:100%;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
      box-sizing: border-box;
    }
    body {
      line-height: 1;
      font-family: Pretendard, Verdana, Helvetica, Sans-Serif;
      font-size: 16px;
      color:#565C63;
    }
    div,p,input{margin:0;padding:0;box-sizing: border-box;}
  </style>
</head>
<body>
  <div class="keyboard_security">
    <div class="row">
      <span>비밀번호</span>
      <div>
        <input type="password" class="i_basics w_300 mb_10" placeholder=""><!-- error class v-input--error -->
        <p class="error_message">다시 입력해주세요.</p>
        <p class="tip_txt">영문/숫자/특수문자 2가지 이상 조합, 동일한 문자/숫자 3가지 이상 연속 사용 불가합니다.</p>
      </div>
    </div>

    <div class="row">
      <span>비밀번호 확인</span>
      <div>
        <input type="password" class="i_basics w_300" placeholder="">
        <p class="error_message">다시 입력해주세요.</p>
      </div>
    </div>

    <!-- <p class="error_message">다시 입력해주세요.</p> -->
  </div>
</body>
</html>