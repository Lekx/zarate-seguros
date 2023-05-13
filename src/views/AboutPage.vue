<template>
    <div class="section">
        <v-row>
            <v-col>
                <h1>
                    Nosotros
                </h1>
                <p >
                    Somos expertos en finanzas personales y asesoría de riesgos, ofreciendo un servicio excepcional a clientes y empresas. Brindamos soluciones personalizadas y orientación especializada para una gestión eficiente de riesgos financieros. Confía en nuestra excelencia en finanzas y asesoría en riesgos.
                </p>
                <p>
                    <strong>Proteger tu patrimonio es nuestra pasión.</strong>
                </p>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="6">
                <img src="@/assets/ilustrations/family.svg" class="ilustration"/>
            </v-col>
            <v-col cols="12" md="6">
                <h1>
                    Nuestra Misión
                </h1>
                <p>
                    Nuestra misión es ayudar a personas, familias y empresas mexicanas a proteger su patrimonio, mejorando su calidad de vida.
                </p>
            </v-col>
        </v-row>
        <v-row align="center">
            <v-col cols="12" md="6">
                <h1>Nuestros Valores</h1>
                <v-list-item active-color="primary">
                    <template v-slot:prepend>
                    <v-icon icon="mdi-trophy-award"></v-icon>
                    </template>
                    <v-list-item-title v-text="'Excelencia'"></v-list-item-title>
                </v-list-item>
                <v-list-item active-color="primary">
                    <template v-slot:prepend>
                    <v-icon icon="mdi-briefcase"></v-icon>
                    </template>
                    <v-list-item-title v-text="'Profesionalismo'"></v-list-item-title>
                </v-list-item>
                <v-list-item active-color="primary">
                    <template v-slot:prepend>
                    <v-icon icon="mdi-shield-half-full"></v-icon>
                    </template>
                    <v-list-item-title v-text="'Confianza'"></v-list-item-title>
                </v-list-item>
                <v-list-item active-color="primary">
                    <template v-slot:prepend>
                    <v-icon icon="mdi-human-handsup"></v-icon>
                    </template>
                    <v-list-item-title v-text="'Integridad'"></v-list-item-title>
                </v-list-item>
                <v-list-item active-color="primary">
                    <template v-slot:prepend>
                    <v-icon icon="mdi-av-timer"></v-icon>
                    </template>
                    <v-list-item-title v-text="'Eficiencia'"></v-list-item-title>
                </v-list-item>
            </v-col>
            <v-col cols="12" md="6">
                <img src="@/assets/ilustrations/about-us.svg" class="ilustration"/>
            </v-col>
        </v-row>
    </div>   
</template>

<script lang="ts" setup></script>
<style lang="scss" scoped>
@import "@/styles/about-section.scss";
</style>