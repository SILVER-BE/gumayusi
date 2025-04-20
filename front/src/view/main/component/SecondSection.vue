<template>
    <div class="section-title">
      오늘 대한민국의 TOP 10 AD Carry
    </div>
  
    <div class="bg-image-box">
        <Swiper
            :slides-per-view="5" 
            :space-between="-400"  
            :slides-offset-before="60"
            :loop="false"
            :watch-overflow="true"
            grab-cursor
            style="overflow: visible;"
            >
        <SwiperSlide
          v-for="(img, index) in images"
          :key="index"
          class="card-wrapper"
        >
          <v-card class="section-card" rounded="lg">
            <v-img
              :src="img.url"
              style="height: 100%; width: 100%; transform: scale(2.5);"
            />
          </v-card>
  
          <div class="card-number">
            {{ index + 1 }}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </template>
  
  
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'


  const images = [
    { url: '/photos/arWQMM.jpg' },
    { url: '/photos/cIFwCX.jpg' },
    { url: '/photos/sEdfgw.jpeg' },
    { url: '/photos/vmKTQy.jpg' },
    { url: '/photos/cwCnTw.jpg' },
    { url: '/photos/weDfea.jpg' },
  ]
  </script>
  
  <style scoped>

  .section-title {
    font-family: '42dot Sans', sans-serif; /* 42dot Sans 폰트를 적용 */
    margin-left: 2%;
    margin-right: 2%;
    display: flex;
    justify-items: flex-start !important;
    color: white;
    padding: 30px;
    margin-top: 10px;
    margin-bottom: 40px;
    font-size: 32px;
    font-weight: 700 !important;
  }
  
  .bg-image-box {
    margin-left: 5%;
    margin-right: 5%;
    width: 100%;
    height: 400px;
  }
  
  .cards-container {
    display: flex;
    flex-wrap: wrap;
  }
  
  .card-wrapper {
    margin-left: 50px;
    margin-right: 50px;
    display: flex;
    align-items: center;
    position: relative; /* relative로 설정하여 자식 요소들을 위치시킬 수 있게 함 */
  }
  
  .section-card {
    width: 180px;
    height: 280px;
    background-color: transparent;
    z-index: 10;
  }
  
  .card-number {
    font-size: 280px;
    font-weight: 800;
    color: rgba(255, 255, 255, 0.2);
    pointer-events: none;
    position: absolute; /* 숫자가 카드 위에 겹치도록 위치 설정 */
    top: -56%; /* 카드의 가운데에 위치 */
    left: -18%;
    z-index: 5; /* 숫자가 카드 뒤로 가도록 z-index 설정 */
  }
  </style>
  