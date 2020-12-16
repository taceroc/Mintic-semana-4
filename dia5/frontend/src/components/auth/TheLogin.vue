<template>
  <div class="container mt-5">
    <slot name="titulo"></slot>
    <slot name="subtitulo"></slot>
    <!-- <slot></slot> -->
    <div class="card mx-auto w-50">
      <div class="mb-3">
        <div class="card border-0 mb-0">
          <h1
            class="card-title border border-primary bg-primary text-white rounded"
            style="margin: 10px 10px 10px 10px"
          >
            Ingreso al sistema
          </h1>
        </div>
        <label for="exampleInputEmail1" class="form-label"
          >Correo electrónico</label
        >
        <input
          v-model="login.email"
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" class="form-text">
          Nunca compartiremos tu correo electrónico con alguien más.
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Contraseña</label>
        <input
          v-model="login.password"
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div class="mt-2 mb-2">
        <button
          v-on:click.prevent="loginUser"
          type="submit"
          class="btn btn-outline-primary my-2 my-sm-0"
        >
          Entrar
        </button>
      </div>
    </div>

    <!-- <pre>
        {{login}}
    </pre> -->
  </div>
</template>

<script>
import swal from "sweetalert";
export default {
  name: "TheLogin",
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async loginUser() {
      try {
        let response = await this.$http.post("/api/auth/signin", this.login);
        console.log(response.data);
        let token = response.data.accessToken;
        let user = response.data.user;

        localStorage.setItem("jwt", token);
        localStorage.setItem("user", JSON.stringify(user));

        if (token) {
          swal("Exito!!", "Login Correcto", "success");
          this.$router.push("/home");
        }
      } catch (e) {
        swal("Oops!", "Algo salio mal", "error");
      }
    },
  },
};
</script>