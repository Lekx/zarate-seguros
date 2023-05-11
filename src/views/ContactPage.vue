<template>
    <div class="section">
        <v-row>
            <v-col cols="12">
                <h1>
                    ¡Haznos una pregunta!
                </h1>
            </v-col>
            <v-col cols="7">
                <v-form v-model="state.validForm" @submit.prevent="submitForm">
                    <v-row>
                        <v-col cols="12">
                            <h3>Dejanos tus datos y te contactamos:</h3>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field
                                v-model="state.contactForm.name"
                                :rules="[requiredValidation]"
                                label="Nombre"
                                required
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field
                                v-model="state.contactForm.phone"
                                :rules="phoneValidation"
                                counter="10"
                                maxlength="10"
                                label="Teléfono"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field
                                v-model="state.contactForm.company"
                                label="Compañía"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field
                                v-model="state.contactForm.email"
                                :rules="emailValidation"
                                label="Correo electrónico"
                                required
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" class="text-center">
                            <v-btn type="submit" class="mx-auto" block color="primary" :loading="state.requestLoading" disabled>Enviar</v-btn>
                        </v-col>
                    </v-row>
                </v-form>
            </v-col>
            <v-col cols="5">
               <img src="@/assets/ilustrations/contact-us.svg" />
            </v-col>
        </v-row>
        <v-row align="center" class="text-center">
            <v-col cols="4">
                <h3>Llamanos a los teléfonos:</h3>
                    <span>3854-9522</span><br>
                    <span>3853-8973</span>
            </v-col>
            <v-col cols="4">
                <h3>Visitanos en nuestra dirección:</h3>
                <span>Jesus García #1276-1, Col. Villaseñor. C.P. 44260. Guadalajara, Jal.</span>
            </v-col>
            <v-col cols="4">
                <h3>Nuestras redes sociales:</h3>
                <div>
                    <v-btn color="primary" href="https://www.facebook.com/profile.php?id=" target="_blank" icon class="mr-4 mt-2">
                        <v-icon icon="mdi-facebook" size="x-large"></v-icon>
                    </v-btn>
                    <v-btn color="blue" href="https://twitter.com" target="_blank" icon class="mr-4 mt-2">
                        <v-icon icon="mdi-twitter" size="x-large"></v-icon>
                    </v-btn>
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
    requestLoading: false,
    validForm: true,
    contactForm: {
        name: null,
        phone: null,
        email: null,
        company: null,
        message: null,
    }
});
const requiredValidation = (value: string) => {
        if (value) return true

        return 'Campo obligatorio'
    };
const phoneValidation = [
            requiredValidation,
            (value:string) => {
                if (value?.length == 10 && /^[0-9]*$/.test(value)) return true

                return 'El teléfono debe ser a 10 digitos'
              }
        ]
const emailValidation = [
        requiredValidation,
        (value: string) => {
          if (/.+@.+\..+/.test(value)) return true

          return 'Debes ingresar un correo válido'
        },
      ];

const submitForm = async (event: any) => {
        const results = await event
        if(!results.valid) return;
        state.requestLoading = true;
    
    };
</script>
<style lang="scss" scoped>
@import "@/styles/contact-section.scss";
</style>