import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

/** routes */
import PinkOctober from '../pages/PinkOctober'

const Routes = (props) => {
  // const [state, setState] = useState({
  //   loading: false
  // })

  // useEffect(() => {

  // }, [])
  
  // const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  //   <Route
  //     {...rest}
  //     render={props => auth
  //       ? <Component {...props} /> 
  //       : <Redirect push to="/login" /> }
  //   />
  // )
  
  // if (state.loading) return <Loading text='Carregando...' />

  return (    
    <BrowserRouter>
      <Switch>
        <Route exact path="/outubro-rosa" component={PinkOctober} />
        {/* <PrivateRoute exact path="/admin" component={Admin} auth={props.state.user.account} /> */}
        <Redirect push to="/outubro-rosa" />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes