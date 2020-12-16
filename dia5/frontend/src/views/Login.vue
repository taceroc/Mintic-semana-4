<template>
<div class="login">
    <TheLogin>
        <template v-slot:titulo>
        <h2 >Formulario de Login</h2>
        </template>
        <template v-slot:subtitulo>
        <h4> Por favor</h4>
        </template>
    </TheLogin>
</div>

</template>

<script>
import TheLogin from '@/components/auth/TheLogin.vue'
export default {
    components:{
        TheLogin
    }
}
</script>