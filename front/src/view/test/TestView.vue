<template>
    
    <div style="color: white;">

        테스트 페이지입니다!!

    </div>

</template>

<script setup lang="ts">
import axios from "axios";
import { onMounted } from "vue";

/* 서버 정보 */
const serverUrl = 'http://211.217.167.49:8096'; // 나의 Jellyfin 서버 주소 및 포트
const username = 'root';                        // 아이디
const password = 'akdrhEjr1!';                  // 비밀번호

/* 인증에 필요한 파라미터 */
const authData = {
  Username: username,
  Pw: password
};

/* authorization header 설정 */
const authorization = 'MediaBrowser , Client="other", Device="script", DeviceId="script", Version="0.0.0"';

const headers = {
  'x-emby-authorization': authorization,
  'Content-Type': 'application/json', 
};

onMounted(() => {

    axios.post(`${serverUrl}/Users/AuthenticateByName`, authData, { headers })
    .then(response => {

        const token = response.data.AccessToken;
        const userId = response.data.User.Id;

        // 토큰을 포함한 헤더
        headers['x-mediabrowser-token'] = token;

        // You can now make more requests with the token included
        // Example of making another request
        // axios.get(`${serverUrl}/api/endpoint`, { headers })
    })
    .catch(error => {
        console.error('❌ Login failed:', error.response?.data || error.message);
    });

});
</script>
