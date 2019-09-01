<template>
  <header>
    <b-navbar toggleable="lg" type="light">
      <b-navbar-brand class="centered" href="#">
        <img src="../../assets/images/logo/img_logo_pomangam_black_ko.png" width="150px">
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" style="margin-top: 45px" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="/login" active>로그인</b-nav-item>
          <b-nav-item-dropdown text="ko" right>
            <b-dropdown-item href="#">ko</b-dropdown-item>
            <b-dropdown-item href="#">en</b-dropdown-item>
            <b-dropdown-item href="#">jp</b-dropdown-item>
            <b-dropdown-item href="#">cn</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
export default {
  name: 'main-header'
}
</script>

<style scoped>
  .centered { position: absolute; left: 50%; transform: translateX(-50%); }
</style>
