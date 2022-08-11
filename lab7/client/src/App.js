import './App.css';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from "./keycloak"
import Products from './pages/Products';
import Product from './pages/Product';
import AddProduct from './pages/AddProduct';
import { useState , createContext} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';

export const MyGlobalContext = createContext();

function App() {
  const [loadingState, setLoadingState] = useState(true);
  const [tokenState, setTokenState] = useState('');
  const eventLogger = (event, error) => {
    console.log('onKeycloakEvent', event, error)
    if (event === 'onReady')
      setLoadingState(false);
  }

  const tokenLogger = (tokens) => {
    console.log('onKeycloakTokens', tokens)
    setLoadingState(false);
    setTokenState(tokens.token);
  }
  return (
    <div>
      <ReactKeycloakProvider
        authClient={keycloak}
        onEvent={eventLogger}
        onTokens={tokenLogger}
      >
        <MyGlobalContext.Provider value={tokenState}>
          <BrowserRouter>
            <Nav />
            {loadingState === true ?
              <div>Loading</div>
              :
              <>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/products">
                    <Route path="" element={<Products />} />
                    <Route path=":id" element={<Product />} />
                    <Route path="add" element={<AddProduct />} />
                  </Route>
                </Routes>
              </>
            }
          </BrowserRouter>
        </MyGlobalContext.Provider>
      </ReactKeycloakProvider>
    </div >
  );
}

export default App;
