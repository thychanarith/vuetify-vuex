<template>
<div>
    <customer-update></customer-update>
</div>
</template>

<script>

import CustomerUpdate from '../component/CustomerUpdate'

import {
    insertCustomer
} from '../both/Method/customer-methods.js'

export default {
    name: 'Home',
    components: {
        CustomerUpdate
    },
    data() {
        return {
            tests: []
        }
    },

    mounted() {
        
    },

    methods: {

    }
}
</script>
