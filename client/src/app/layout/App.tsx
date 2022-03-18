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

function App() {
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
          <Route component={NotFound} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
