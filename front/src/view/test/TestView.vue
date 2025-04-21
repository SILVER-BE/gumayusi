<template>

    <div class="video-container">
      <video
        v-if="videoUrl"
        autoplay
        ref="videoPlayer"
        class="video-player"
        @canplay="onCanPlay"
        muted
      >
        <source :src="videoUrl" type="video/mp4" />
      </video>
    </div>

</template>
  
<script setup lang="ts">

  import axios from "axios";
  import { onMounted, ref } from "vue";
  
  // 서버 정보
  const serverUrl = 'http://211.217.167.49:8096'; // 나의 Jellyfin 서버 주소 및 포트
  const username = 'root';                        // 아이디
  const password = 'akdrhEjr1!';                  // 비밀번호
  
  // 인증에 필요한 파라미터
  const authData = {
    Username: username,
    Pw: password
  };
  
  // authorization header 설정
  const authorization = 'MediaBrowser , Client="other", Device="script", DeviceId="script", Version="0.0.0"';
  
  const headers = {
    'x-emby-authorization': authorization,
    'Content-Type': 'application/json',
  };
  
  // videoUrl을 ref로 정의
  const videoUrl = ref('');
  
  // 로그인 후 아이템을 가져오는 함수
  async function loginAndGetItems() {

    try {
        // 로그인 요청
        const loginRes = await axios.post(`${serverUrl}/Users/AuthenticateByName`, authData, { headers });
      
        const token = loginRes.data.AccessToken;
        const userId = loginRes.data.User.Id;
  
        headers['x-mediabrowser-token'] = token;
  
        // 폴더 리스트 가져오기
        const res = await axios.get(`${serverUrl}/Users/${userId}/Items`, {
            headers: {
            'X-Emby-Token': token
            }
        });
  
        console.log('전체:', res.data.Items);
        console.log('collection-ID:', res.data.Items[0].Id);
  
        const collectionId = res.data.Items[0].Id;
  
        // 원하는 폴더의 비디오오만 가져오기
        const videoList = await axios.get(`${serverUrl}/Users/${userId}/Items`, {
            headers: {
                'X-Emby-Token': token
            },
            params: {
                ParentId: collectionId
            }
        });
  
        console.log('📺 Videos:', videoList.data.Items[1].Id);
    
        const itemId = videoList.data.Items[1].Id;
    
        // 영상 URL 만들기
        videoUrl.value = `${serverUrl}/Videos/${itemId}/stream?static=true&api_key=${token}`;
      
    } catch (error) {
        console.error('❌ Login failed:', error.response?.data || error.message);
    }

  }
    
  // 컴포넌트가 마운트될 때 로그인과 아이템을 가져옴
  onMounted(() => {

    loginAndGetItems();

  });


</script>

<style scoped>

/* 전체 화면을 flexbox로 설정 */
.video-container {
  display: flex;
  justify-content: center; /* 가로 중앙 */
  align-items: center;     /* 세로 중앙 */
  height: 100vh;           /* 화면 전체 높이 */
  text-align: center;      /* 텍스트 중앙 정렬 */
}

.video-player {
  width: 100%;      /* 비디오 너비 100%로 설정 */
  max-width: 1400px; /* 비디오 최대 너비 800px로 설정 */
}

</style>
  