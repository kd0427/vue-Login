<template>
  <div>
    {{ userInfo.user_id }} 님 환영 합니다.
  </div>
</template>
<script>
  import {mapState} from "vuex";

  export default{
   computed:{
     ...mapState(["userInfo"])
   }
  }
</script>