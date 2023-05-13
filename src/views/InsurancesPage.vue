<template>
    <div class="section">
        <v-row>
            <v-col>
                <h1>
                    Solidéz, experiencia y excelente atención
                </h1>
                <p >
                    Seleccionamos cuidadosamente las compañías aseguradoras con las que colaboramos, priorizando su solidez, experiencia en el mercado y en el producto, así como su destacada atención al cliente y la oferta de precios competitivos.
                </p>
                <p>
                    <v-timeline :direction="isSmallScreen ? 'horizontal' : 'vertical'" class="my-10">
                        <v-timeline-item size="medium" dot-color="#e76f51" v-for="(item, index) in insurances" :key="index">
                            <template v-slot:opposite>
                                <img :src="item.imgUrl.href" style="width: 100px;"/>
                            </template>
                        </v-timeline-item>
                    </v-timeline>
                </p>
            </v-col>
        </v-row>
        <v-row align="center">
            <v-col>
                <h1>Nuestros Productos</h1>
                <p>
                    Nos comprometemos a salvaguardar tu estabilidad financiera y la tranquilidad de tu familia frente a cualquier eventualidad que pueda surgir, como fallecimiento, accidente o enfermedad. Nuestro objetivo es brindarte un respaldo sólido que te proteja de estos imprevistos y te proporcione seguridad en todo momento.
                </p>
                <div class="my-10">
                    <v-chip class="ma-2" color="blue" size="large" label>
                        <v-icon start icon="mdi-medical-bag"></v-icon>
                        Seguro de gastos médicos mayores
                    </v-chip>
                    <v-chip class="ma-2" color="blue" size="large" label>
                        <v-icon start icon="mdi-security"></v-icon>
                        Seguro de accidentes personales
                    </v-chip>
                    <v-chip class="ma-2" color="blue" size="large" label>
                        <v-icon start icon="mdi-hospital-building"></v-icon>
                        Seguros de vida
                    </v-chip>
                </div>
                <p>
                    Te ayudamos a conseguir tus metas financieras mediante el hábito de ahorro que te permitirá tener tranquilidad sobre tu futuro. Con un plan de ahorro con o sin seguro de vida. Acorde a tus necesidades finacieras y posibilidades.
                </p>
                <div class="my-10">
                    <v-chip class="ma-2" color="orange" size="large" label>
                        <v-icon start icon="mdi-car-pickup"></v-icon>
                        Seguro de autos todo tipo de uso
                    </v-chip>
                    <v-chip class="ma-2" color="orange" size="large" label>
                        <v-icon start icon="mdi-bus"></v-icon>
                        Camiones de transporte público de pasajeros
                    </v-chip>
                    <v-chip class="ma-2" color="orange" size="large" label>
                        <v-icon start icon="mdi-bus-double-decker"></v-icon>
                        Camiones de construcción y/o transporte de carga
                    </v-chip>
                    <v-chip class="ma-2" color="orange" size="large" label>
                        <v-icon start icon="mdi-cube-send"></v-icon>
                        Seguro para la carga transportada
                    </v-chip>
                </div>
                <p>
                    También te ofrecemos el siguiente tipo de seguros.
                </p>
                <div >
                    <div class="d-block">
                        <v-chip class="ma-2" color="purple" size="large" label>
                            <v-icon start icon="mdi-home-modern"></v-icon>
                            Seguro de casa habitación
                        </v-chip>
                        <small class="d-block ml-5 mb-5">
                            Sin importar que la casa sea rentada
                        </small>
                    </div>
                    <div class="d-block">
                        <v-chip class="ma-2" color="purple" size="large" label>
                            <v-icon start icon="mdi-briefcase-check"></v-icon>
                            Seguro de póliza empresarial a tu medida
                        </v-chip>
                        <small class="d-block ml-5 mb-5">
                            + ¡Comienza desde cero, sólo una vez! Te protege contra robo, incendio, sismo, responsabilidad civil.<br>
                            + SEGUPYME.
                        </small>
                    </div>
                    <div class="d-block">
                        <v-chip class="ma-2" color="purple" size="large" label>
                            <v-icon start icon="mdi-church"></v-icon>
                            Seguro de gastos funerarios
                        </v-chip>
                        <small class="d-block ml-5 mb-5">
                            $850 anual familiar
                        </small>
                    </div>
                </div>
            </v-col>
        </v-row>
        
    </div>

</template>

<script lang="ts" setup>
import { useWindowSize, today } from '@/composables/helpers.ts';
import { computed } from 'vue';

const { windowWidth } = useWindowSize();

const isSmallScreen = computed(()=>{
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
@import "@/styles/insurances-section.scss";
</style>