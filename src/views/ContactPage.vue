<template>
    <div class="section">
        <v-row>
            <v-col cols="12">
                <h1>
                    Contactanos
                </h1>
            </v-col>
            <v-col cols="8">
                <v-form v-model="state.validForm">
                    <v-row>
                        <v-col cols="12">
                            <h3>Dejanos tus datos y te contactamos:</h3>
                        </v-col>
                        <v-col cols="12" md="5">
                            <v-text-field
                                v-model="state.contactForm.name"
                                :counter="10"
                                label="Nombre"
                                required
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="5">
                            <v-text-field
                                v-model="state.contactForm.phone"
                                :counter="10"
                                label="Teléfono"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="5">
                            <v-text-field
                                v-model="state.contactForm.company"
                                label="Compañía"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="5">
                            <v-text-field
                                v-model="state.contactForm.email"
                                :rules="emailRules"
                                label="Correo electrónico"
                                required
                            ></v-text-field>
                        </v-col>
                        <v-col cols="10" class="text-center">
                            <v-btn type="submit" class="m-10" block color="primary">Enviar</v-btn>
                        </v-col>
                    </v-row>
                </v-form>
            </v-col>
            <v-col cols="4">
                <div class="pb-10">
                    <h3>Llamanos a los teléfonos:</h3>
                    <ul class="pl-10">
                        <li>3854-9522</li>
                        <li>3853-8973</li>
                    </ul>
                </div>
                <div class="pb-10">
                    <h3>Visitanos en nuestra dirección:</h3>
                    <ul class="pl-10">
                        <li>Jesus García #1276-1, Col. Villaseñor. C.P. 44260. Guadalajara, Jal.</li>
                    </ul>
                </div>
                <div class="pb-10">
                    <h3>Nuestras redes sociales:</h3>
                    <div>
                        <v-icon icon="mdi-facebook" class="px-10" size="x-large"></v-icon>
                        <v-icon icon="mdi-twitter" class="px-10" size="x-large"></v-icon>
                    </div>
                </div>
            </v-col>
        </v-row>
        <v-row align="center">
            <v-col>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.525904155108!2d-103.36648861391312!3d20.68885843156898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ae21cd2ad74f%3A0x6f35bc8a261957ed!2sC.%20Jes%C3%BAs%20Garc%C3%ADa%201276-1%2C%20Villase%C3%B1or%2C%2044200%20Guadalajara%2C%20Jal.!5e0!3m2!1sen!2smx!4v1683779851749!5m2!1sen!2smx" width="100%" height="400" style="border:0;" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </v-col>
        </v-row>
    </div>   
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
const state = reactive({
    validForm: true,
    contactForm: {
        name: null,
        phone: null,
        email: null,
        company: null,
        message: null,
    }
});
const requiredRule = [
    (value: string) => {
        if (value) return true

        return 'value es campo obligatorio'
    },   
]
const emailRules = [
        (value: string) => {
          if (value) return true

          return 'El correo es un campo obligatorio'
        },
        (value: string) => {
          if (/.+@.+\..+/.test(value)) return true

          return 'Debes ingresar un correo válido'
        },
      ];

const submit = async (event: any) => {
        const results = await event
        alert('submitted' + JSON.stringify(results, null, 2))
    };
</script>
<style lang="scss" scoped>
@import "@/styles/contact-section.scss";
</style>