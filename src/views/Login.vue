<template>
    <v-container class="fill-height bg-abstract">
        <v-layout justify-center align-center fill-height>
            <v-col>
                <v-row class="justify-center" @submit.prevent="submit">
                    <v-col>
                        <v-card class="px-6 py-8 rounded-xl soft-shadow">
                            <v-form v-model="valid" ref="form">
                                <h1 class="text-center mt-n4">Регистрация</h1>
                                <v-titled label="Телефон">
                                    <v-text-field
                                        v-model="username"
                                        :rules="usernameRules"
                                        type="username"
                                        dense
                                        outlined
                                        required
                                    ></v-text-field>
                                </v-titled>
                                <v-titled label="E-mail">
                                    <v-text-field
                                        v-model="username"
                                        :rules="usernameRules"
                                        type="username"
                                        dense
                                        outlined
                                        required
                                    ></v-text-field>
                                </v-titled>
                                <v-titled label="Пароль">
                                    <v-text-field
                                        v-model="password"
                                        :rules="passwordRules"
                                        type="password"
                                        dense
                                        outlined
                                        required
                                    ></v-text-field>
                                </v-titled>
                                <v-titled label="Повторите пароль">
                                    <v-text-field
                                        v-model="password"
                                        :rules="passwordRules"
                                        type="password"
                                        dense
                                        outlined
                                        required
                                    ></v-text-field>
                                </v-titled>

                                <v-checkbox
                                    v-model="remember"
                                    label="Принять условия"
                                ></v-checkbox>
                                <v-btn
                                    block
                                    x-large
                                    class="login--button"
                                    type="submit"
                                    color="primary"
                                    dark
                                    :loading="loading"
                                >
                                    Зарегистрироваться
                                </v-btn>
                                <!-- <div class="pt-2">
                                    <a href="#" class="">Забыли пароль?</a>
                                </div> -->
                                <v-subheader
                                    class="error--text"
                                    v-if="error.length"
                                >
                                    {{ error }}
                                </v-subheader>
                            </v-form>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-layout>
    </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
    data() {
        return {
            username: "",
            password: "",
            remember: false,
            params: {
                client_id: process.env.VUE_APP_GOOGLE_ID,
            },
            valid: false,
            usernameRules: [
                (v) => !!v || "Поля обязательно для заполнения",
                (v) =>
                    v.length > 3 ||
                    "Имя пользователя должно быть длинее 3 символов",
            ],
            passwordRules: [
                (v) => !!v || "Поля обязательно для заполнения",
                (v) => v.length >= 6 || "Пароль должен быть длинее 6 символов",
            ],
            loading: false,
            error: "",
        };
    },
    methods: {
        ...mapActions("auth", ["login"]),
        fail(e) {
            console.error(e);
        },
        async submit() {
            this.$refs.form.validate();

            if (this.valid) {
                this.error = "";
                this.loading = true;

                try {
                    await this.login({
                        username: this.username,
                        password: this.password,
                    });
                } catch (e) {
                    this.error = e.message;
                } finally {
                    this.loading = false;
                }
            }
        },
    },
};
</script>

<style></style>
