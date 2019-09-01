<template>
  <footer>
    <address>
      <b-link class="footer-link" href="/">
        <strong>© 로컬렉션</strong>
      </b-link>
      <b-link class="footer-link" href="">고객센터</b-link>
      <b-link class="footer-link" href="">약관</b-link>
      <b-link class="footer-link" href="">개인정보처리방침</b-link>
    </address>
  </footer>
</template>

<script>
export default {
  name: 'main-footer'
}
</script>

<style scoped>
.footer-link {
  text-decoration: none;
  color: black;
  font-size: 15px;
  margin: 3px;
}
</style>
