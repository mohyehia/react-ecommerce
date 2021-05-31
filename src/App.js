import { Fragment } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route } from "react-router-dom";
import { FooterComponent, HeaderComponent } from "./components";
import { CartPage, HomePage, LoginPage, ProductPage, RegisterPage } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <HeaderComponent />
        <main>
          <Container className="mt-4">
            <Route path='/product/:id' component={ProductPage} />
            <Route path='/cart/:id?' component={CartPage} />
            <Route path='/login' component={LoginPage} />
            <Route path='/register' component={RegisterPage} />
            <Route path='/' component={HomePage} exact />
          </Container>
        </main>
        <FooterComponent />
      </Fragment>
    </BrowserRouter>
  );
};

export default App;
