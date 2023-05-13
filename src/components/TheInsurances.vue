<template>
    <v-footer :app="footerFixed" class="pa-2 pa-sm-5 pa-md-0">
        <v-container fluid elevation="10">
            <v-row align="center" class="text-center">
                <v-col cols="4" md="1" v-for="(item, index) in insurances" :key="index" class="insurance-logo text-center ma-auto">
                    <img :src="item.imgUrl.href" :alt="`Logo de ${item.alt} seguros`"/>
                </v-col>
            </v-row>
        </v-container>
    </v-footer>
</template>

<script setup lang="ts">
import { useWindowSize, today } from '@/composables/helpers.ts';
import { computed } from 'vue';

const { windowWidth } = useWindowSize();

const footerFixed = computed(()=>{
    return windowWidth.value > 960 ? true : false;
});
const insurances = [
    {imgUrl: new URL('/src/assets/aseguradoras/mapfre.jpg', import.meta.url), alt: 'Mapfre'},
    {imgUrl: new URL('/src/assets/aseguradoras/allianz.png', import.meta.url), alt: 'Allianz'},
    {imgUrl: new URL('/src/assets/aseguradoras/metlife.png', import.meta.url), alt: 'Metlife'},
    {imgUrl: new URL('/src/assets/aseguradoras/qualitas.png', import.meta.url), alt: 'Qualitas'},
    {imgUrl: new URL('/src/assets/aseguradoras/gnp.png', import.meta.url), alt: 'GNP'},
    {imgUrl: new URL('/src/assets/aseguradoras/aba.png', import.meta.url), alt: 'ABA'},
    {imgUrl: new URL('/src/assets/aseguradoras/afirme.png', import.meta.url), alt: 'AFIRME'}
];
</script>
<style lang="scss" scoped>
  @import "@/styles/insurances.scss";
</style>