import ShiftCollection from '../../features/shiftCollection/ShiftCollection';
import NavBar from '../../features/navBar/NavBar';
import { Container } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import { Route, Switch } from 'react-router-dom';
import Home from '../../features/home/Home';
import ShiftDetails from '../../features/shiftCollection/ShiftDetails';
import AboutPage from '../../features/about/AboutPage';
import 'react-toastify/dist/ReactToastify.css';
import ServerError from '../errors/ServerError';
import NotFound from '../errors/NotFound';
import ContactPage from '../../features/contact/ContactPage';
import Login from '../../features/account/Login';
import Register from '../../features/account/Register';
import { useAppDispatch } from '../store/configureStore';
import { useEffect } from 'react';
import { fetchCurrentUser } from '../../features/account/accountSlice';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser())
  })
  return (
    <div className="app">
       <ToastContainer position="bottom-right" hideProgressBar/>
      <NavBar />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route exact path="/shift-collection" component={ShiftCollection} />
          <Route path="/shift-collection/:id" component={ShiftDetails} />
          <Route path="/server-error" component={ServerError} />
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <Route component={NotFound} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
