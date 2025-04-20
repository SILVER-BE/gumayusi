// src/view/test/TestView.ts
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TestView',

  data() {
    return {
      message: '이건 TestView에서 온 메시지입니다!',
    }
  },

  methods: {
    sayHello() {
      console.log('복자가 인사합니다 형님 🙇‍♂️')
    }
  },

  mounted() {
    this.sayHello()
  }
})