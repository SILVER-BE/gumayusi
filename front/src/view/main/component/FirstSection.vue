<template>
    <div class="bg-image-box">
      <div style="display: flex;">
        <div class="bg-div-1">

            <div class="section-title">
                GUMAYUSI
            </div>
            <div class="section-title-sub">
                앞으로 우리가 해내어가야 할 것들이 결코 쉽지 않을 것이란걸 나도 안다.<br>
                하지만 이곳을 향한 나의 여정은, 우리의 여정은, 이미 오래 전에 시작되었다.<br>
                그리고 우리는 그 여정을 끝낼 의무가 있다.
            </div>
            <div>
                <v-btn class="section-btn" @click="nextPage()">
                    더 알아보기
                </v-btn>
            </div>

        </div>
        <div class="bg-div-2">

        </div>
      </div>
    </div>
  </template>
  
<script setup lang="ts">
import router from '../../../router';


  const nextPage = () => {
    router.push('/testpage')
  }


</script>
  
  <style scoped>
  .bg-image-box {
    max-height: 700px;
    height: 700px;
    overflow: hidden;
    background-image: url('/photos/20231112.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

.section-title {
    font-size: 120px;

    margin-top: 160px;
    font-family: '42dot Sans', sans-serif; /* 42dot Sans 폰트를 적용 */
    margin-left: 2%;
    margin-right: 2%;
    line-height: 1.3; /* 또는 1 / 필요시 더 낮춰도 됨 */
    display: flex;
    justify-items: flex-start !important;
    color: white;
    padding: 30px;
    padding-bottom: 0;
    font-weight: 900;
    color: #c02800;
    letter-spacing: -5px;
}

.section-title-sub {
    font-size: 16px;

    font-family: '42dot Sans', sans-serif; /* 42dot Sans 폰트를 적용 */
    margin-left: 3%;
    margin-right: 2%;
    display: flex;
    text-align: left; 
    white-space: normal;   
    color: white;
    padding: 30px;
    padding-top: 0;
    font-weight: 400;
}

.section-btn {
    padding: 22px;
    display: flex;
    margin-left: 7%;
    margin-right: 2%;
    color: white;
    height: 50px;
    border-radius: 12px;
    background-color: #c02800;
    font-family: '42dot Sans', sans-serif; /* 42dot Sans 폰트를 적용 */
    font-size: 16px;
}

.section-btn:hover {
    background-color: gray;
}
  
.bg-div-1 {
  width: 40%;
  height: 640px;
  display: flex;
  flex-direction: column;      /* 수직 정렬 */
  padding: 30px;
}
  
  .bg-div-2 {
    width: 60%;
  }


  </style>
  