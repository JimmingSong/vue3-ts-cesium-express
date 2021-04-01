<template>
  <div id="content">
    <div id="nav">
      <div class="title">菜单</div>
      <el-menu
        default-active="/"
        router
      >
        <el-menu-item index="/">
          聊天室
        </el-menu-item>
        <el-menu-item index="/cesium">
          cesium视图
        </el-menu-item>
        <el-menu-item index="/socket">
          socket调试工具
        </el-menu-item>

      </el-menu>
    </div>
    <router-view class="content-right" />
  </div>
</template>

<style lang="less">
  body {
    margin: 0;
    padding: 0;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
@titleHeight: 40px;
#content {
  display: flex;
  height: 100vh;
  #nav {
    width: 200px;
    .title {
      width: 100%;
      height: @titleHeight;
      line-height: @titleHeight;
      text-align: center;
      border-bottom: 1px solid #cccccc;
    }
  }
  .content-right {
    flex-grow: 1;
  }
}
</style>
