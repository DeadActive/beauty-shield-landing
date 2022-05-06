<template>
    <v-dialog v-model="isActive" fullscreen>
        <v-card>
            <v-card-title class="pa-3 pb-4">
                <v-layout align-center justify-center>
                    <v-btn
                        icon
                        @click="isActive = false"
                        color="black"
                        x-large
                        style="position: absolute; left: 12px"
                    >
                        <v-icon> mdi-close </v-icon>
                    </v-btn>
                    <div class="d-flex justify-center">
                        <h3>Добавить запись</h3>
                    </div>
                </v-layout>
            </v-card-title>
            <v-card-text class="pt-8">
                <v-form v-model="valid" @submit.prevent="save">
                    <v-titled label="Телефон">
                        <v-text-field
                            v-mask="'+7 (###) ###-##-##'"
                            v-model="record.phone"
                            type="tel"
                            outlined
                            dense
                            class="rounded-lg"
                        ></v-text-field>
                    </v-titled>

                    <v-titled label="Дата">
                        <v-dialog persistent v-model="dateDialog">
                            <template #activator="{ on, attrs }">
                                <v-text-field
                                    prepend-inner-icon="mdi-calendar"
                                    v-model="record.date"
                                    readonly
                                    outlined
                                    dense
                                    v-bind="attrs"
                                    v-on="on"
                                    class="rounded-lg"
                                ></v-text-field>
                            </template>
                            <v-date-picker
                                v-model="record.date"
                                @input="dateDialog = false"
                                locale="ru-RU"
                                first-day-of-week="1"
                            ></v-date-picker>
                        </v-dialog>
                    </v-titled>

                    <v-titled label="Услуга">
                        <v-select
                            v-model="record.type"
                            outlined
                            dense
                            :items="services"
                            class="rounded-lg"
                        ></v-select>
                    </v-titled>

                    <v-titled label="Описание">
                        <v-textarea
                            v-model="record.description"
                            outlined
                            class="rounded-lg"
                        >
                        </v-textarea>
                    </v-titled>

                    <v-titled label="Изображение">
                        <v-img
                            v-if="image"
                            :src="imageUrl"
                            class="mb-4"
                        ></v-img>
                        <v-file-input
                            accept="image/*"
                            outlined
                            class="rounded-lg"
                            dense
                            v-model="image"
                        ></v-file-input>
                    </v-titled>

                    <v-btn
                        color="primary"
                        block
                        type="submit"
                        height="48"
                        class="mt-auto mb-8"
                        rounded
                    >
                        Сохранить
                    </v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    props: {
        value: Boolean,
    },
    data() {
        return {
            valid: false,
            dateDialog: false,
            image: null,
            record: {
                phone: "",
                date: null,
                type: null,
                description: "",
            },
        };
    },
    created() {
        this.loadServices();
    },
    computed: {
        ...mapGetters("dict", ["services"]),
        isActive: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit("input", value);
            },
        },
        imageUrl() {
            if (this.image) return URL.createObjectURL(this.image);
        },
    },
    methods: {
        ...mapActions("dict", ["loadServices"]),
        save() {
            this.isActive = false;
        },
    },
};
</script>

<style></style>
