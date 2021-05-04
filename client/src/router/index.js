import {createRouter, createWebHashHistory} from 'vue-router'
import StateList from '@/components/StateList'
import AboutSite from '@/components/AboutSite'
import StateMap from '@/components/StateMap'
// creates a router object to handle paths to url components
export default createRouter( {
    history: createWebHashHistory(),
    routes: [
        {
            //associating path to homepage with imported StateList
         path: '/',
          name: 'StateList',
          component: StateList

        },
        // path to about site page
        {
            path: '/about',
            name: 'AboutSite',
            component: AboutSite
        },
        {
            // path to map of state required to display
            path: '/map/:state',
            name: 'StateMap',
            component: StateMap
        }

    ]
})