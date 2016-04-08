import React from 'react';
import {Router, Route, useRouterHistory, browserHistory} from 'react-router';
import {createHashHistory} from 'history';

import Navgation from '../components/navgation/navgation';
import Caipiao1 from '../components/caipiao/caipiao1';
import Caipiao2 from '../components/caipiao/caipiao2';
import Caipiao3 from '../components/caipiao/caipiao3';
import Caipiao4 from '../components/caipiao/caipiao4';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

let route = (
  <Router history={browserHistory}>
    <Route path="/app/" component={Navgation}>
      <Route path="caipiao">
        <Route path="1" component={Caipiao1}/>
        <Route path="2" component={Caipiao2}/>
        <Route path="3" component={Caipiao3}/>
        <Route path="4" component={Caipiao4}/>
      </Route>
    </Route>
  </Router>
)

export default route;