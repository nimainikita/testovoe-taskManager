<template>
<button><slot></slot></button>
</template>

<script>
export default {

}
</script>

<style>
button{
  background: #3c637e;
  color:#fff;
  padding: 8px 10px;
  font-size:18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover{
  background:#5a9ccc ;
}
</style>