import { Provider } from "react-redux";
import createStore from "./api/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Tournaments from "./components/Tournament/Tournaments";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function App() {
  const store = createStore();

  return (
    <Provider store={store}>
      <Loader />
      <Container maxWidth={false}>
        <Box>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Tournaments />} />
            </Routes>
          </BrowserRouter>
        </Box>
        <Footer></Footer>
      </Container>
    </Provider>
  );
}

export default App;
