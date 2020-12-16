<template>
  <div class="home">
    <TheHome></TheHome>
  </div>
</template>

<script>
// @ is an alias to /src
import TheHome from '@/components/TheHome.vue'

export default {
  name: 'Home',
  components: {
    TheHome,
  }
}
</script>
