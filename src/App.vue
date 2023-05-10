<template>
    <v-app>
        <TheHeader/>
        <v-content>
            <router-view></router-view>
        </v-content>
        <TheFooter/>
    </v-app>
</template>

<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
</script>
