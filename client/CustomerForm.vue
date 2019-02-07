<template>
<div>
    <v-container>
        <v-text-field
            v-model="form.name"
            :error="errors.has('name')"
            :error-messages="errors.first('name')"
            name="name"
            v-validate="'required'"
            color="success"
            label="Name"
            style="width:500px" />

        <v-spacer></v-spacer>

            <v-radio-group
                        v-model="form.gender"
                        :mandatory="false">
                        <v-radio
                            label="Male"
                            value="Male"></v-radio>
                        <v-radio
                            label="Fimale"
                            value="Fimale"></v-radio>
                    </v-radio-group>
                    
        <v-spacer></v-spacer>
        <v-text-field
            :error="errors.has('age')"
            :error-messages="errors.first('age')"
            name="age"
            v-validate="'required'"
            v-model="form.age"
            label="Age"
            type="number"
            color="success"
            style="width:500px" />
        <v-spacer></v-spacer>
        <v-text-field
            :error="errors.has('address')"
            :error-messages="errors.first('address')"
            name="address"
            v-validate="'required'"
            v-model="form.address"
            label="Address"
            color="success"
            style="width:500px" />
        <v-btn
            @click="btnSubmit"
            color="success">submit</v-btn>
        <v-btn
            @click="btnClear"
            color="error">clear</v-btn>
    </v-container>

    <!-- notify snackbar -->
    <v-snackbar
        :color="color"
        bottom="bottom"
        right="right"
        v-model="snackbar">

        <div>
            <v-icon color="white">check</v-icon> Insert customer success
        </div>
       
        <v-btn
            flat
            color="white"
            @click='snackbar = false'>
            Close
        </v-btn>
    </v-snackbar>

</div>
</template>

<script>
import {
    insertCustomer,
} from '/both/Method/customer-methods.js'

export default {
    name: 'CustomerForm',
    data() {
        return {
            color:null,
            form: {
                name: '',
                gender: 'Male',
                address: '',
                age: null,
                branch: '',
            },
            snackbar: false,
            itemsGender: ['Male', 'Fimale']
        }
    },

    methods: {
        btnSubmit() {
            let val = {
                name: this.form.name,
                gender: this.form.gender,
                address: this.form.address,
                age: parseInt(this.form.age),
                branch: this.$store.state.curenntBranch
            }
            this.$validator.validateAll().then(result => {
                if (result) {
                    insertCustomer.callPromise(val).then(result => {
                        this.snackbar = true
                        this.color = 'success'
                        this.form = {
                            name: '',
                            gender: '',
                            address: '',
                            age: null,
                            branch: '',
                        }
                        this.$validator.reset()
                    })
                }
            })
        },
        btnClear() {
            this.form = {
                name: '',
                gender: 'Male',
                address: '',
                age: null,
                branch: '',
            }
            // this.color = 'success'
            // this.snackbar = true
            this.$validator.reset()
        }
    }
}
</script>
