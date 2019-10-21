import React from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'

import Index from '../components/Index'
import Details from '../components/Details'
import Comments from '../components/Comments'
import Collection from '../components/Collection'
const Router = ()=>{
    return (
        <div>
            <Switch>
                <Route path='/Index' component={Index}></Route>
                <Route path='/Details' component={Details}></Route>
                <Route path='/Comments' component={Comments}></Route>
                <Route path='/Collection' component={Collection}></Route>
                <Redirect to='/Index'></Redirect>
            </Switch>
        </div>
    )
}
export default Router