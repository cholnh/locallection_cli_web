<template>
  <header>
    <b-navbar toggleable="lg" type="light">
      <b-navbar-brand class="centered" href="#">
        <img src="../../assets/images/logo/img_logo_locallection_black_en.png" width="230px">
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item active><em>Login</em></b-nav-item>
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">KO</b-dropdown-item>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">JP</b-dropdown-item>
            <b-dropdown-item href="#">CN</b-dropdown-item>
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
