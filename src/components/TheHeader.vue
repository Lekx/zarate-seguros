<template>
<v-navigation-drawer v-model="state.drawer" app>
    <v-list>
        <v-list-item
        v-for="(item, i) in menuItems"
        :key="i"
        :value="item"
        active-color="primary"
        >
        <template v-slot:prepend>
        <v-icon :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title v-text="item.title" @click="navigateTo(item.path)"></v-list-item-title>
        </v-list-item>
    </v-list>
</v-navigation-drawer>

<v-toolbar app>
    <v-btn
    icon
    class="hidden-md-and-up"
    @click="state.drawer = !state.drawer"
    >
        <v-icon>mdi-menu</v-icon>
    </v-btn>
    <v-toolbar-title>
        <router-link to="/" tag="span" class="logo-link">
            {{ title }}
        </router-link>
    </v-toolbar-title>
    <v-toolbar-items class="d-none d-md-flex">
        <v-btn
        flat
        v-for="item in menuItems"
        :key="item.title"
        :to="item.path">
            {{ item.title }}
        </v-btn>
    </v-toolbar-items>
</v-toolbar>
</template>


<script setup lang="ts">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const state = reactive({
    drawer: false,
});
const title = 'Zárate Seguros';
const menuItems = [
    { title: 'Nosotros', path: '/nosotros', icon: 'mdi-compass-outline'},
    { title: 'Seguros', path: '/seguros', icon: 'mdi-security'},
    { title: 'Atención a empresas', path: '/atencion-empresas', icon: 'mdi-briefcase-check'},
    { title: 'Contacto', path: '/contacto', icon: 'mdi-email'}
];

const navigateTo = (pathUrl: string) => {
    router.push(pathUrl);
}

</script>
<style lang="scss" scoped>
</style>