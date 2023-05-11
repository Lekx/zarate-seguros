<template>
    <div class="section">
        <v-row>
            <v-col>
                <h1>
                    Protege tu patrimonio
                </h1>
                <p>
                    Protege tu negocio con seguros empresariales completos. Cubrimos responsabilidad civil, daños a la propiedad, interrupción del negocio y más. Nuestro equipo experto te ofrece soluciones personalizadas. Confía en nosotros para proteger tu empresa.
                </p>
            </v-col>
        </v-row>
        <v-row align="center">
            <v-col>
                <h1>Seguros para tu negocio</h1>
                <v-list-item active-color="primary" v-for="(item, index) in insurances.business" :key="index">
                    <template v-slot:prepend>
                        <v-icon :icon="item.icon"></v-icon>
                    </template>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item>
            </v-col>
            <v-col>
                <img src="@/assets/ilustrations/business.svg"/>
            </v-col>
        </v-row>
        <v-row align="center">
            <v-col>
                <img src="@/assets/ilustrations/employees.svg"/>
            </v-col>
            <v-col>
                <h1>Seguros para tus empleados</h1>
                <v-list-item active-color="primary" v-for="(item, index) in insurances.employees" :key="index">
                    <template v-slot:prepend>
                        <v-icon :icon="item.icon"></v-icon>
                    </template>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item>
            </v-col>
        </v-row>
    </div>   
</template>

<script lang="ts" setup>
const insurances = {
    business: [
        {
            text: 'De proteccion contra robo, incendio, sismo, etc.',
            icon: 'mdi-car-pickup'
        },
        {
            text: 'Seguro de autos de todo tipo de uso',
            icon: 'mdi-car'
        },
        {
            text: 'Seguro para camiones de servicio público de pasajeros',
            icon: 'mdi-bus'
        },
        {
            text: 'Para camiones de construcción',
            icon: 'mdi-bus-double-decker'
        },
        {
            text: 'Seguros para la carga de transportes',
            icon: 'mdi-cube-send'
        }
    ],
    employees: [
        {
            text: 'Seguros de vida con descuento via nómina',
            icon: 'mdi-plus-outline'
        },
        {
            text: 'Seguros de gastos médicos mayores',
            icon: 'mdi-medical-bag'
        },
        {
            text: 'Seguros de accidentes personales',
            icon: 'mdi-security'
        },
        {
            text: 'Planes de ahorro para el retiro',
            icon: 'mdi-cash-multiple'
        }
    ]
}
</script>
<style lang="scss">
@import "@/styles/companies-section.scss";
</style>