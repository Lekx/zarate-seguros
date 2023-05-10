<template>
    <v-footer app>
        <v-container fluid>
            <v-row>
                <v-col>
                    <h3 class="m-5">Télefonos:</h3>
                    <p>3854-9522</p>
                    <p>3853-8973</p>
                </v-col>
                <v-col  class="text-center">
                    <h3 class="m-5"><v-icon icon="mdi-copyright"></v-icon> {{ date.getFullYear() }}</h3>
                    <p>
                        <a href="https://webrocket.services" target="_blank" class="wrs-link">Web Rocket Services</a>
                    </p>
                </v-col>
                <v-col  class="text-right">
                    <h3 class="m-5">Dirección:</h3>
                    <p>Jesus García #1276-1</p>
                    <p>Col. Villaseñor. C.P. 44260</p>
                    <p>Guadalajara, Jalisco</p>
                    <!-- <img src="src/assets/aseguradoras/mapfre.jpg"/> -->
                </v-col>
            </v-row>
        </v-container>
    </v-footer>
</template>

<script setup lang="ts">
const date = new Date();
</script>
<style lang="scss" scoped>
  @import "@/styles/footer.scss";
</style>