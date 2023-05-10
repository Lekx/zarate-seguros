<template>
    <div class="home">
        <div class="header">
            <v-row>
                <v-col>
                    <div class="cta">

                        <h1>ZÁRATE SEGUROS</h1>
                        <p>
                            ¡Asegura tu tranquilidad con nosotros!
                        </p>
                        <v-btn elevation="4" size="x-large" rounded="xl" color="#E76F51" class="mt-3" to="contacto">¡Contactanos!</v-btn>
                    </div>
                </v-col>
                <v-col class="cta-img">
                    <img src="@/assets/ilustrations/finance.svg">
                </v-col>
            </v-row>
        </div>
        <div class="section">
            <v-row>
                <v-col>
                    <h1>
                        Protección personalizada
                    </h1>
                    <p>
                        Cada persona tiene necesidades únicas en cuanto a seguros se refiere. En nuestro portafolio de productos encontrarás opciones personalizadas que se ajustan a tus requerimientos y presupuesto. No te preocupes más por imprevistos, con nosotros estarás protegido.
                    </p>
                </v-col>
            </v-row>
            <v-row align="center">
                <v-col>
                    <img src="@/assets/ilustrations/profesionals.svg"/>
                </v-col>
                <v-col>
                    <h1>Nuestros productos</h1>
                    <v-list-item
                        v-for="(item, i) in products"
                        :key="i"
                        :value="item"
                        active-color="primary"
                    >
                        <template v-slot:prepend>
                        <v-icon :icon="item.icon"></v-icon>
                        </template>

                        <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script lang="ts" setup>
const products = [
    {text: 'Seguros de vida', icon: 'mdi-hospital-building'},
    {text: 'Planes de ahorro', icon: 'mdi-cash-multiple'},
    {text: 'Seguros de gastos médicos mayores', icon: 'mdi-medical-bag'},
    {text: 'Seguros contra daños', icon: 'mdi-security'},
    {text: 'Seguros de viaje', icon: 'mdi-airplane'},
    {text: 'Seguros para hogar', icon: 'mdi-fire'},
    {text: 'Seguros de auto', icon: 'mdi-van-passenger'}
]
</script>
<style lang="scss">
@import "@/styles/home.scss";
</style>