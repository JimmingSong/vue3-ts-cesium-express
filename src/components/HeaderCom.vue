<template>
  <header class="header-box">
    <div>
      <i class="el-icon-s-fold"></i>
    </div>
    <div>菜单</div>
    <div>
      <i class="el-icon-s-custom"></i>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld'
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.header-box {
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: space-between;

}
</style>
