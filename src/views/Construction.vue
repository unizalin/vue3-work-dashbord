<template>
  <div v-for="(item,idx) in dataList" :key="idx" class="card">
    <div class="card-title">{{item.title}}</div>
    <p>消費時間：2022-08-11 16:07</p>
    <p>價錢： {{item.price}}</p>
    <div class="card-body">
      <div class="btn" @click="isToggle(idx)">觀看內容</div>
      <div class="content" v-if="isOpenIndex == idx">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dignissimos, voluptatum ad ex voluptate iste et sint tempore reiciendis unde iure magnam ullam laudantium expedita voluptatibus. Harum dolor consectetur eius?
      </div>
    </div>   
  </div>
</template>
<script>
import { defineComponent, ref, computed} from 'vue'
export default defineComponent ({
  name: 'Construction',
  setup(){
    const isShow= ref(0)
    const dataList = ref([
      {
        title: '木做',
        price: '1000'
      },
      {
        title: '輕隔間',
        price: '1000'
      },
      {
        title: '泥做',
        price: '1000'
      },
      {
        title: '地板',
        price: '1000'
      },
      {
        title: '天花',
        price: '1000'
      },
      {
        title: '油漆',
        price: '1000'
      },
      {
        title: '大理石',
        price: '1000'
      },
      {
        title: '磁磚',
        price: '1000'
      },
      {
        title: '鐵件工程',
        price: '1000'
      },
      {
        title: '鋁門窗工程',
        price: '1000'
      },
      {
        title: '電力工程',
        price: '1000'
      },
      {
        title: '給排水工程',
        price: '1000'
      },
      {
        title: '消防工程',
        price: '1000'
      },
      {
        title: '拆除工程',
        price: '1000'
      },
      {
        title: '戶外廣告工程',
        price: '1000'
      },
      {
        title: '室內廣告(數位輸出)工程',
        price: '1000'
      },
      {
        title: '壓克力製作工程',
        price: '1000'
      },
      {
        title: '空調系統工程',
        price: '1000'
      },
      {
        title: '燈具工程',
        price: '1000'
      }
    ])
    function isToggle(idx){
      isShow.value = idx
    }
    const isOpenIndex = computed(()=> {return isShow.value })
    return{
      dataList,
      isShow,
      isOpenIndex,
      isToggle
    }
  }
})
</script>
<style lang="scss" scoped>
$card-bg: #fff;
$gray-400: #444 ;

*{
  // outline: 1px solid red;
}
.card{
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 12px;
  margin: 8px 0;
  min-width: 0;
  word-wrap: break-word;
  background-color: $card-bg;
  .card-title{
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 2px;
  }
  
}
.isShowContent{
  display: none;
}

.btn{
  display: inline-block;
  padding: 8px 6px;
  text-align: center;
  user-select: none;
  background-color: transparent;
  border: 1px solid #777;
  cursor: pointer;

  &:focus,
  &.focus {
    background-color: darken($gray-400, 10%);
    outline: 0;
  }
  &:hover,
  &.hover {
    background-color: darken($gray-400, 10%);
    outline: 0;
  }
  &:active,&.active{
    background-color: darken($gray-400, 10%);
  }
}
.content{
	transition: 0.2s ease-in-out;
}

</style>
