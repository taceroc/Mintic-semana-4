<template>
  <div>
    <div class="banner h-10">
          <img
            src="https://i.pinimg.com/originals/9f/48/6c/9f486c13971293fee1d21c315ecb8603.jpg"
            class="rounded img-responsive h-10"
            alt="My image"
          />
        <div class="container">
            <div class="">
                <h1 class="text-white text-left text-capitalize">Bienvenido {{ user.name }}!</h1>
                <h4 class="text-white text-left">{{ user.email }} </h4>
            </div>
        </div>
    </div>
    <div class="container w-100">
        </button>
        <div class="text-center mt-2" id="navbarSupportedContent">
            <button
              class="btn btn-outline-primary my-2 my-sm-0"
              type="button"
              v-on:click="logOut">
              Salir
            </button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    getUserDetails() {
      let user = localStorage.getItem("user");
      let token = localStorage.getItem("jwt");
      console.log(JSON.parse(user));

      if (token) {
        this.user = JSON.parse(user);
      }
    },
    logOut() {
      localStorage.removeItem("jwt");
      localStorage.removeItem("user");
      this.$router.push("/");
    },
  },
  created() {
    this.getUserDetails();
  },
};
</script>

<style scoped>
.banner {
  position: relative;
}
.banner img {
  width: 100%;
  height: 300px;
}
.banner .container {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  text-align: left;
  transform: translateY(-50%);
}
</style>