<template>
  <v-app id="inspire">
    <v-system-bar app>
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Menú</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
      width="350"
    >
    <template>
    <v-card
    class="mx-auto"
    width="800"
  >
    <v-list>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>

        <v-list-item-title>Inicio</v-list-item-title>
      </v-list-item>

      <v-list-group
        :value="true"
        prepend-icon="mdi-account-circle"
      >
        <template v-slot:activator>
          <v-list-item-title>Administración de servicios</v-list-item-title>
        </template>

        <v-list-group
          :value="true"
          no-action
          sub-group
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Categorias</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="([title, icon], i) in categorias"
            :key="i"
            link
          >
            <v-list-item-title v-text="title"></v-list-item-title>

            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>

        <v-list-group
          :value="true"
          no-action
          sub-group
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Artículos</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="([title, icon], i) in articulos"
            :key="i"
            link
          >
            <v-list-item-title v-text="title"></v-list-item-title>

            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
        </v-list-group>

          <v-list-group
        :value="true"
        prepend-icon="mdi-account-circle"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
          <v-list-item-title>Administrador de usuarios</v-list-item-title>
          </v-list-item-content>
        </template>

              <v-list-item 
                v-for="([title], i) in usuarios"
                :key="i"
                link>
             <v-list-item-content>
              <v-list-item-title v-text="title"></v-list-item-title>
               </v-list-item-content>
            </v-list-item>
          <!-- <v-list-item
            v-for="([title, icon], i) in usuarios"
            :key="i"
            link
          >
            <v-list-item-title v-text="title"></v-list-item-title>

            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
          </v-list-item> -->
    

        
        </v-list-group>
      
    </v-list>
  </v-card>
  </template>
      <!--  -->
    </v-navigation-drawer>



    <v-main class="grey lighten-2">
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
      drawer: null,
      categorias: [
        ['Categoria 1', 'mdi-account-multiple-outline'],
        ['Categoria 2', 'mdi-cog-outline'],
      ],
      articulos: [
        ['Artículo 1', 'mdi-plus-outline'],
        ['Artículo 2', 'mdi-file-outline'],
        ['Artículo 3', 'mdi-update'],
      ],
      usuarios: [
        ['Listar'],
      ],
    }),
};
</script>
