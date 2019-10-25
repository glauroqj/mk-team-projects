import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

/** routes */
import PinkOctober from '../pages/PinkOctober'
import BlueNovember from '../pages/BlueNovember'

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
        <Route exact path="/novembro-azul" component={BlueNovember} />
        {/* <PrivateRoute exact path="/admin" component={Admin} auth={props.state.user.account} /> */}
        <Redirect push to="/novembro-azul" />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes