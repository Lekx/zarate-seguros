<template>
    <v-app>
        <TheHeader/>
        <v-content>
            <v-container>
                <router-view></router-view>
            </v-container>
        </v-content>
        <TheFooter/>
        <TheInsurances/>
    </v-app>
</template>

<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
import TheInsurances from '@/components/TheInsurances.vue';
</script>

<style lang="scss">
@import "@/styles/layout.scss";
</style>
