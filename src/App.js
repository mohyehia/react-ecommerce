import { Fragment } from "react";
import { Container } from "react-bootstrap";
import { FooterComponent, HeaderComponent } from "./components";

const App = () => {
  return (
    <Fragment>
      <HeaderComponent />
      <main>
        <Container className='mt-4'>
          <h1>Welcome to ecommerce</h1>
        </Container>
      </main>
      <FooterComponent />
    </Fragment>
  );
};

export default App;
