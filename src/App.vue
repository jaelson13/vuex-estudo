<template>
  <div id="app">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Header from './components/layout/Header.vue'
import Main from './components/layout/Main.vue'
export default {
  name: 'app',
  components: {Header, Main}

}
</script>

<style>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-family: 'Open Sans', Arial, Helvetica, sans-serif;
  font-size: 100%;
}
body{
  background: linear-gradient(135deg,#f2b18a,#c4622e);
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center
}

</style>
