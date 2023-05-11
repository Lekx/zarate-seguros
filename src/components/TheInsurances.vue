<template>
    <v-footer app>
        <v-container fluid elevation="10">
            <v-row align="center">
                <v-col v-for="(item, index) in insurances" :key="index" class="insurance-logo text-center">
                    <img :src="item.imgUrl.href" :alt="`Logo de ${item.alt} seguros`"/>
                </v-col>
            </v-row>
        </v-container>
    </v-footer>
</template>

<script setup lang="ts">
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