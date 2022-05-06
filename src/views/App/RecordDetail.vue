<template>
    <v-dialog :value="true" fullscreen>
        <v-card>
            <v-card-title class="pa-3 pb-4">
                <v-layout align-center justify-center>
                    <v-btn
                        icon
                        @click="$router.go(-1)"
                        color="black"
                        x-large
                        style="position: absolute; left: 12px"
                    >
                        <v-icon> mdi-close </v-icon>
                    </v-btn>
                    <div class="d-flex justify-center">
                        <h3>{{ record.phone }}</h3>
                    </div>
                </v-layout>
            </v-card-title>
            <v-card-text>
                <v-titled label="Услуга" class="black--text mb-4">
                    <v-text-field
                        outlined
                        dense
                        readonly
                        hide-details
                        class="rounded-lg"
                        :value="record.name"
                    ></v-text-field>
                </v-titled>
                <v-titled label="Изображение" class="black--text mb-4">
                    <v-img :src="record.img" class="rounded-lg"></v-img>
                </v-titled>
                <v-titled label="Описание" class="black--text mb-4">
                    <v-textarea
                        outlined
                        readonly
                        hide-details
                        class="rounded-lg"
                        :value="record.description"
                    ></v-textarea>
                </v-titled>
                <v-titled
                    label="Рейтинг"
                    class="black--text mb-4 d-flex align-center"
                >
                    <v-rating
                        color="primary"
                        background-color="primary"
                        empty-icon="mdi-star-outline"
                        full-icon="mdi-star"
                        half-icon="mdi-star-half-full"
                        hover
                        size="32"
                        length="5"
                        :value="record.rating"
                    ></v-rating>
                </v-titled>
                <div class="d-flex justify-end">
                    <span
                        >Дата создания:
                        {{
                            $moment(record.createdAt).format("DD.MM.YYYY")
                        }}</span
                    >
                </div>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
    created() {
        this.loadRecord();
    },
    computed: {
        ...mapGetters("record", ["record"]),
    },
    methods: {
        ...mapActions("record", ["loadRecord"]),
    },
};
</script>

<style></style>
