<template>
<div>
    <v-btn
        color="success"
        @click="addNew">New Customer</v-btn>

    <!-- dialog input     -->
    <v-dialog
        v-model="dialog"
        scrollable
        fullscr
        persistent
        :overlay="false"
        max-width="600px"
        transition="dialog-transition">
        <v-card dark>
            <div
                style="width:598px"
                class="text-xs-right">
                <v-icon
                    @click="btnClose"
                    color="error"
                    style="width:20px">cancel</v-icon>
            </div>
            <v-container>
                <div>
                    <h3>Add New Customer</h3>
                    <customer-input></customer-input>
                </div>
            </v-container>
        </v-card>
    </v-dialog>
    <!-- ====================================================== -->

    <v-dialog
        v-model="dialogUpdate"
        scrollable
        fullscr
        persistent
        :overlay="false"
        max-width="600px"
        transition="dialog-transition">
        <v-card dark>
            <div
                style="width:598px"
                class="text-xs-right">
                <v-icon
                    @click="btnClose"
                    color="error"
                    style="width:20px">cancel</v-icon>
            </div>
            <v-container>
                <div>
                    <h3>Add Update Customer</h3>
                    <customer-update :customerOpt='currentId' ></customer-update>
                </div>
            </v-container>
        </v-card>
    </v-dialog>
    <!-- ================================== -->

    <v-data-table
        :headers="headers"
        :items="itemsOpt"
        class="text-xl-center">
        <template slot="no-data">
            <v-alert
                :value="true"
                color="error"
                icon="warning">No data !</v-alert>
        </template>
        <template
            slot="items"
            slot-scope="props">
            <td class="text-xs-left">{{ props.item.name }}</td>
            <td class="text-xs-left">{{ props.item.gender }}</td>
            <td class="text-xs-left">{{ props.item.age }}</td>
            <td class="text-xs-left">{{ props.item.address }}</td>
            <td class="text-xs-left">{{ props.item.branch }}</td>
            <td
                class="text-xs-center"
                style="width:165px">
                <v-btn
                    fab
                    dark
                    small
                    @click="btnEdit(props.item._id)"
                    color="info">
                    <v-icon dark>edit</v-icon>
                </v-btn>
                <v-btn
                    fab
                    dark
                    small
                    @click="btnRemove(props.item._id)"
                    color="error">
                    <v-icon dark>remove</v-icon>
                </v-btn>
            </td>
        </template>
    </v-data-table>
    <v-icon @click="btnAlert">
        add
    </v-icon>
    <v-snackbar
        color="info"
        bottom="bottom"
        right="right"
        v-model="snackbar">
        <div>
            <v-icon
                color="white"
                size="25px">delete</v-icon>
            Customer was removed !
        </div>
    </v-snackbar>

</div>
</template>

<script>
import CustomerInput from "../component/CustomerInput.vue";
import CustomerUpdate from '../component/CustomerUpdate';

import {
    removeCustomer,
    findCustomer,
    findCustomerById,
} from '../both/Method/customer-methods.js'

export default {
    name: "Customer",
    components: {
        CustomerInput,
        CustomerUpdate,
    },
    data() {
        return {
            currentId:null,
            snackbar: null,
            dialogUpdate: false,
            checkBoxFimale: false,
            checkBoxMale: false,
            radios: "Male",
            itemCustomer: [],
            headers: [{
                    text: "Name",
                    value: "name"
                },
                {
                    text: "Gender",
                    value: "gender"
                },
                {
                    text: "Age",
                    value: "age"
                },
                {
                    text: "Address",
                    value: "address"
                },
                {
                    text: "Branch",
                    value: "branch"
                },
                {

                },
            ],
            form: {
                name: "",
                gender: "",
                address: "",
                age: null,
                branch: ""
            },
            dialog: false,
        };
    },

    mounted() {
        // this.itemsOpt()
        // this.branches()
        // this.getData()
        // this.getDataList()
    },

    computed: {

        itemsOpt() {
            return this.$store.state.customerfilteres;
        },
        branches() {
            return this.$store.state.branches;
        },
    },

    methods: {

        addNew() {
            this.dialog = true;
        },

        btnClose() {
            this.dialog = false;
            this.dialogUpdate = false;
        },

        btnRemove(id) {
            removeCustomer.callPromise({
                _id: id
            }).then(result => {
                this.getDataList()
                this.btnAlert()
                // alert("Deleted item !")
            })
        },

        btnEdit(id) {
            // this.dialogUpdate = true
            // this.currentId = id
            
            // // alert(_id)
            this.$router.push({
                name: 'CustomerEdit',
                params: {
                    name: 'customer',
                    _id: id
                }
            })
            // console.log(this.currentId)
        },

        btnAlert() {
            this.snackbar = true
        },

        getDataList() {
            findCustomer.callPromise().then(result => {
                this.$store.dispatch('getDataCustomer', result)
            })
        }

    },
};
</script>
