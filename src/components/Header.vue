<template>
	<!-- ======= Header ======= -->
  <header id="header" style="background-color:black" class="fixed-top d-flex align-items-center header-transparent">
    <div class="container-fluid">

      <div class="row justify-content-center align-items-center">
        <div class="col-xl-11 d-flex align-items-center justify-content-between">
          <h1 class="logo"><a >WebSite Name</a></h1>
          <!-- Uncomment below if you prefer to use an image logo -->
          <!-- <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

          <nav id="navbar" class="navbar">
            <ul>
              <li><router-link class="nav-link scrollto " to="/">Home</router-link></li>
              <li><router-link class="nav-link scrollto" to="about">About</router-link></li>
              <li><router-link class="nav-link scrollto" to="Services">Services</router-link></li>
              <li><router-link class="nav-link scrollto" to="fact">Fact</router-link></li>
              <li><router-link class="nav-link scrollto" to="portfolio" >Portfolio</router-link></li>
              <li><router-link class="nav-link scrollto" to="team">Team</router-link></li>
              <li><router-link class="nav-link scrollto" to="contact">Contact</router-link></li>
              <li><router-link class="nav-link scrollto" to="login">Login</router-link></li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav><!-- .navbar -->
        </div>
      </div>

    </div>
  </header><!-- End Header -->

</template>

<script >
	export default
	{
		name:"HeaderView"
	}
</script>

<style>

 a .router-link-exact-active
 {
   color:green
 }


</style>