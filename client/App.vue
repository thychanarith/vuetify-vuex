<template>
<v-app>
    <v-navigation-drawer
        id="app-drawer"
        v-model="drawer"
        fixed
        clipped
        app
        dark>
        <v-spacer></v-spacer>
        <v-select
            v-if="visible"
            :items="itemsBranch"
            item-text="branch"
            item-value="branch"
            @change="clickChange"
            :value="itemsBranch[0].branch" />

        <v-list-tile
            v-for="(link, i) in links"
            :key="i"
            :to="link.to"
            avatar
            @click="onActive"
            class="v-list-item white--text">
            <v-list-tile-action>
                <v-icon>{{ link.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-title v-text="link.text" />
        </v-list-tile>

    </v-navigation-drawer>

    <!-- ================================================== -->

    <v-toolbar
        color="white"
        dense
        fixed
        clipped-left
        app>

        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-icon class="mx-3"></v-icon>
        <v-toolbar-title class="mr-5 align-center">
            <span class="title">Management</span>
        </v-toolbar-title>
        <!-- <router-link :to="{name:'customerForm'}"></router-link> -->
        <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
        <!-- {{$route.path}} -->
        <!-- <v-breadcrumbs :items="crumbs"></v-breadcrumbs> -->
        <!-- <h2>{{this.$route.matched[1].meta.breadCrumb}}</h2> -->
        <h2 style="padding-left:20px">{{$route.meta.title}}</h2>
        <v-container>
            <router-view></router-view>
        </v-container>
    </v-content>

</v-app>
</template>

<script>
import {
    findCustomer
} from '../both/Method/customer-methods.js'
export default {
    name: 'App',
    data: () => ({
        drawer: null,
        visible: true,
        links: [{
                to: '/home',
                icon: 'home',
                text: 'Home',
            },
            {
                to: '/customerForm',
                icon: 'receipt',
                text: 'Customer Form'
            },
            {
                to: '/customer',
                icon: 'book',
                text: 'Customer'
            },
            {
                to: '/longinMain',
                icon: 'person',
                text: 'Login Page'
            }
        ],

        props: {
            source: String
        },
    }),
    computed: {
        itemsBranch() {
            return this.$store.state.branches
        },

        curenntBranch() {
            return this.$store.state.curenntBranch
        },

        // crumbs() {
        //     let pathArray = this.$route.path.split("/")
        //     pathArray.shift()
        //     let breadcrumbs = pathArray.reduce((breadcrumbArray, path, idx) => {
        //         breadcrumbArray.push({
        //             path: path,
        //             to: breadcrumbArray[idx - 1] ?
        //                 "/" + breadcrumbArray[idx - 1].path + "/" + path :
        //                 "/" + path,
        //             text: this.$route.matched[idx].meta.breadCrumb || path,
        //         });
        //         return breadcrumbArray;
        //     }, [])
        //     return breadcrumbs;
        // }
    },

    mounted() {
        this.$store.dispatch('setCurrentBranch', this.itemsBranch[0].branch)
        findCustomer.callPromise().then(result => {
            this.$store.dispatch('setCustomer', result)
        })
        this.onActive()

    },

    methods: {
        clickChange(val) {
            this.$store.dispatch('setCurrentBranch', val)
            this.$store.getters.filterBranch(val)
        },
        onActive() {
            this.visible = this.$route.meta.visible
            console.log(this.$route.meta.visible)
        }
    }
}
</script>
