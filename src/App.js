import React from "react";
import {Routes,Route,Link} from "react-router-dom";
import "./styles.css"
import Page from "./components/Page";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";
import Page6 from "./components/Page6";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Page />}/>
        <Route path="/page2" element={<Page2 />}/>
        <Route path="/page3" element={<Page3 />}/>
        <Route path="/page4" element={<Page4 />}/>
        <Route path="/page5" element={<Page5 />}/>
        <Route path="/page6" element={<Page6 />}/>
       <Route path="*" element={<NotFound />}/>
      </Route>
    </Routes>
  );
}

export default App;
