import { ref } from 'vue';
import { defineStore } from 'pinia'

export const Travel_listStore = defineStore('Travel_list', () => {

const travel_list = ref([
  {
    name: 'อ่างแก้ว',
    img: 'https://www.reviewchiangmai.com/wp-content/uploads/2017/05/IMG_4045-copy-800x533.jpg',
    ip: 'api.openweathermap.org/data/2.5/forecast?lat=18.805912&lon=98.950880&appid=66af6261484edc25c7b1b61803d7547c'
  },
  {
    name: 'สะพานทางเดินข้ามอ่างเก็บน้ำอ่างแก้ว มช.',
    img: 'https://www.reviewchiangmai.com/wp-content/uploads/2017/05/IMG_4039-copy-800x533.jpg',
    ip: 'api.openweathermap.org/data/2.5/forecast?lat=18.808630&lon=98.949901&appid=66af6261484edc25c7b1b61803d7547c'
  },
  {
    name: 'ลานสัก',
    img: 'https://www.reviewchiangmai.com/wp-content/uploads/2017/05/IMG_4030-copy-800x533.jpg',
    ip: 'api.openweathermap.org/data/2.5/forecast?lat=18.808597&lon=98.949193&appid=66af6261484edc25c7b1b61803d7547c'
  },
  {
    name: 'ลานสังคีต',
    img: 'https://www.reviewchiangmai.com/wp-content/uploads/2017/05/IMG_4061-copy-800x533.jpg',
    ip: 'api.openweathermap.org/data/2.5/forecast?lat=18.805491&lon=98.951496&appid=66af6261484edc25c7b1b61803d7547c'
  },
  {
    name: 'อ่างเกษตร',
    img: 'https://www.reviewchiangmai.com/wp-content/uploads/2017/05/IMG_3825-copy-800x533.jpg',
    ip: 'api.openweathermap.org/data/2.5/forecast?lat=19.019127&lon=98.918163&appid=66af6261484edc25c7b1b61803d7547c'
  },
  {
    name: 'สนามกีฬากลาง',
    img: 'https://www.reviewchiangmai.com/wp-content/uploads/2017/05/IMG_4083-copy-800x533.jpg',
    ip: 'api.openweathermap.org/data/2.5/forecast?lat=18.800775&lon=98.989508&appid=66af6261484edc25c7b1b61803d7547c'
  }
])

return { travel_list }
})