<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/tasks">Tasks</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
nav{
  text-align: center;
  margin: 20px 0;
}
nav a{
  padding:10px;
  color:#000;
  text-decoration: none;
  transition: .2s;
  border-radius: 5px;
}
nav a:hover{
  background: #3c637e;
  color:#fff
}

</style>
