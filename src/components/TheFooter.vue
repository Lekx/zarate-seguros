<template>
    <v-footer :app="footerFixed">
        <v-container fluid>
            <v-row>
                <v-col cols="12" sm="4" class="text-center text-sm-left">
                    <h3 class="m-5"><v-icon start icon="mdi-phone-classic"></v-icon> Teléfonos</h3>
                    <p class="pl-10">(33) 3854 9522</p>
                    <p class="pl-10">(33) 3853 8973</p>
                </v-col>
                <v-col cols="12" sm="4" class="text-center d-none d-sm-block">
                    <h3 class="m-5"><v-icon icon="mdi-copyright"></v-icon> {{ today.getFullYear() }}</h3>
                    <p>
                        <a href="https://webrocket.services" target="_blank" class="wrs-link">Web Rocket Services</a>
                    </p>
                </v-col>
                <v-col cols="12" sm="4" class="text-center text-sm-right">
                    <h3 class="m-5">Dirección <v-icon start icon="mdi-google-maps"></v-icon></h3>
                    <p>Jesus García #1276-1</p>
                    <p>Col. Villaseñor. C.P. 44260. Gdl., Jal.</p>
                </v-col>
                
                <v-col cols="12" class="d-block d-sm-none text-center">
                    <h3 class="text-center"><v-icon icon="mdi-copyright"></v-icon> {{ today.getFullYear() }}</h3>
                    <p class="text-center">
                        <a href="https://webrocket.services" target="_blank" class="wrs-link">Web Rocket Services</a>
                    </p>
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

</script>
<style lang="scss" scoped>
  @import "@/styles/footer.scss";
</style>