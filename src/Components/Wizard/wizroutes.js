import React from 'react'
import { Switch, Route } from 'react-router-dom'

import StepOne from '../Steps/StepOne'
import StepTwo from '../Steps/StepTwo'
import StepThree from '../Steps/StepThree'

export default (
    <Switch>
        <Route exact path='/wizard' component={StepOne} />
        <Route  path='/wizard/step-two' component={StepTwo} />
        <Route  path='/wizard/step-three' component={StepThree} />
    </Switch>
)