<template>
    <v-card
        class="soft-shadow rounded-xl"
        @click="$router.push(`/record/${record.id}`)"
    >
        <v-list-item three-line>
            <v-list-item-content>
                <v-list-item-title>
                    <div class="text-h6">{{ record.name }}</div>
                </v-list-item-title>
                <v-list-item-subtitle class="py-2">
                    <p class="text-truncate mb-0">{{ record.description }}</p>
                </v-list-item-subtitle>
                <v-list-item-subtitle class="py-1 d-flex align-center">
                    <v-chip small>
                        <div class="d-flex">👍 {{ record.likes }}</div>
                    </v-chip>

                    <v-chip small class="ml-2">
                        <div class="d-flex">
                            <v-icon color="primary" size="18">mdi-star</v-icon>
                            <div style="line-height: 24px">
                                {{ record.rating }}
                            </div>
                        </div>
                    </v-chip>

                    <!-- <v-rating
                        color="primary"
                        background-color="primary"
                        empty-icon="mdi-star-outline"
                        full-icon="mdi-star"
                        half-icon="mdi-star-half-full"
                        hover
                        size="16"
                        length="5"
                        :value="record.rating"
                        readonly
                    ></v-rating> -->

                    <div class="ml-auto">
                        {{ $moment(record.createdAt).format("DD MMMM YY") }}
                    </div>
                </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-avatar class="rounded-lg" color="grey" size="64">
                <v-img :src="record.img"></v-img>
            </v-list-item-avatar>
        </v-list-item>
    </v-card>
</template>

<script>
export default {
    props: {
        record: Object,
    },
};
</script>

<style></style>
