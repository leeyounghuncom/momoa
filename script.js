document.querySelector('.kakao-login').addEventListener('click', function () {
    location.href = 'https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=c39ec02ba741d3bb7d91cc57847a9566&redirect_uri=https://a846-49-163-214-103.ngrok-free.app/api/v1/accounts/auth/kakao/callback/';
});