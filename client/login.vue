<template name="register">
<div>
    <v-container>
            <v-flex
                xs12
                md4>
                <v-text-field
                    label="Name"
                    v-model="name"
                    style="width:500px" />
            </v-flex>
            <v-flex
                xs12
                md4>
                <v-text-field
                    label="Password"
                    style="width:500px"
                    v-model="psd" />
            </v-flex>
            <v-btn
                color="success"
                @click="btnLogin">Login</v-btn>
    </v-container>
</div>
</template>

<script>
export default {
    name: 'longinMainPage',
    data() {
        return {
            name: '',
            psd: null,
        }
    }
}
</script>
