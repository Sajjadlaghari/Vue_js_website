<template>
	   <!-- ======= Contact Section ======= -->
    <section id="contact" class="section-bg mt-4">
      <div class="container" data-aos="fade-up">

        <div class="section-header">
          <h3>Login</h3>
        </div>

        
        <div class="form">
          <div  role="form" class="php-email-form">
            <div class="container">
            <div class="row">
              <p class="text-danger text-center" id="msg"></p>
              <div class="col-md-3"></div>
              <div class="form-group col-md-6">
                <input type="text" v-model="log.email" class="form-control" id="name" placeholder="Username" required>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3"></div>
              <div class="form-group col-md-6">
                <input type="password" v-model="log.password" class="form-control" id="name" placeholder="Password" required>
              </div>
            </div>
            </div>
            <div class="text-center"><button type="submit" v-on:click="contact_form()">Send Message</button></div>
            </div>
        </div>

      </div>
    </section><!-- End Contact Section -->
</template>

 <script >
 	export default
 	{
 		name:"loginView",
    data() {
      return {

        disable:false,
        users:null,
      
        log: {
          email: null,
          password: null,
        }
      }
    },

     methods:{
        contact_form()
        {
          this.axios.post('http://127.0.0.1:8000/api/login/',this.log)
          .then(res =>{
            console.log(res);
            this.log=""
          })
        }
     }
 	}
 </script>