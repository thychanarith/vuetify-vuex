import App from './App'
import CustomerForm from './CustomerForm'
import Home from '../client/Home'
import Customer from '../client/Customer'
import CustomerEdit from '../client/CustomerEdit'
import longinMain from '../client/login'

const routes =[
    {
        path:'/',
        component: App,
        name:'app',
        meta:{
            title:'App',
            visible:true,
            breadCrumb: 'App'
        }
    },
    {
        path:'/customerForm',
        name:'customerForm',
        component:CustomerForm,
        meta:{
            title:'Customer Form',
            visible:false,
            breadCrumb: 'Customer Form'
        }
    },
    {
        path:'/home',
        name:'home',
        component:Home,
        meta:{
            title:'Home Page',
            visible:true,
            breadCrumb: 'Home'

        }
    },
    {
        path:'/customer',
        name:'customer',
        component:Customer,
        meta: {
            title:'Customer',
            visible:true,
            breadCrumb: 'Customer'

        },
        // children: [{
        //         path:'/CustomerEdit',
        //         name:'CustomerEdit',
        //         component:CustomerEdit,
        //         meta:{
        //             title:'Customer Edit',
        //             visible:true,
        //             breadCrumb: 'Customer Update'
        
        //         }
        // }]
    },
    {
        path:'/CustomerEdit',
        name:'CustomerEdit',
        component:CustomerEdit,
        meta:{
            title:'Customer Edit',
            visible:true,
            breadCrumb: 'Customer Update'

        }
    },
    {
        path:'/longinMain',
        name:'longinMain',
        component:longinMain,
        meta:{
            title:'Customer login',
            visible:false,
            breadCrumb: 'Login'
        }
    }
]

export default routes
