import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav/index";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./components/Sidebar/index";
import { Route, Routes } from "react-router-dom";
import { dataTasks } from "./dataTasks";
import { useState } from "react";
import PageGit from "./pages/PageGit/index";
import PageUiux from "./pages/PageUiux/index";
import PageFigma from "./pages/PageFigma/index";
import PageHtml from "./pages/PageHtml/index";
import PageCss from "./pages/PageCss/index";
import PageBootstrap from "./pages/PageBootstrap/index";
import PageCleanCode from "./pages/PageCleanCode/index";
import PageJavascriptRefreshment from "./pages/PageJavascriptRefreshment/index";

function App() {
  const [data] = useState(dataTasks);

  return (
    <div className="App">
      <Nav />
      <Container fluid>
        <Row style={{ minHeight: "100vh" }}>
          <Col xs={2} className="p-0 bg-primary">
            <Sidebar data={data} />
          </Col>
          <Col xs={10} className="p-0 bg-light">
            <Routes>
              <Route path="/" element={<PageGit data={data[0]} />} />
              <Route
                path={data[0].eventKey}
                element={<PageGit data={data[0]} />}
              />
              <Route
                path={data[1].eventKey}
                element={<PageUiux data={data[1]} />}
              />
              <Route
                path={data[2].eventKey}
                element={<PageFigma data={data[2]} />}
              />
              <Route
                path={data[3].eventKey}
                element={<PageHtml data={data[3]} />}
              />
              <Route
                path={data[4].eventKey}
                element={<PageCss data={data[4]} />}
              />
              <Route
                path={data[5].eventKey}
                element={<PageBootstrap data={data[5]} />}
              />
              <Route
                path={data[6].eventKey}
                element={<PageCleanCode data={data[6]} />}
              />
              <Route
                path={data[7].eventKey}
                element={<PageJavascriptRefreshment data={data[7]} />}
              />
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
