import {createRouter, createWebHashHistory} from 'vue-router'
import StateList from '@/components/StateList'
import AboutSite from '@/components/AboutSite'
import StateMap from '@/components/StateMap'
// creates a router object to handle paths to url components
export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            //associating path to homepage with imported StateList
         path: '/',
          name: 'StateList',
          component: StateList

        },
        {
            path: '/about',
            name: 'AboutSite',
            component: AboutSite
        },
        {
            path: '/map/:state',
            name: 'Statemap',
            component: StateMap
        }

    ]
})