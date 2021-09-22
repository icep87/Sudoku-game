import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Main from "./components/Layout/Main";
import Header from "./components/Layout/Header";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <div className="max-w-3xl mx-auto sm:px-6 lg:px-8 pt-5">
          <Header />
          <div className="bg-white overflow-hidden sm:rounded-lg sm:shadow ">
            <Main />
          </div>
        </div>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
