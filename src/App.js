import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = (props) => {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0);

  return (
    <Router>
      <Navbar />
      <LoadingBar color="#f11946" height={3} progress={progress} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div>
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                country="in"
                category="general"
              />
            </div>
          }
        ></Route>
        <Route
          exact
          path="/business"
          element={
            <div>
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="business"
                pageSize={pageSize}
                country="in"
                category="business"
              />
            </div>
          }
        ></Route>
        <Route
          exact
          path="/entertainment"
          element={
            <div>
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="entertainment"
                pageSize={pageSize}
                country="in"
                category="entertainment"
              />
            </div>
          }
        ></Route>
        <Route
          exact
          path="/science"
          element={
            <div>
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                pageSize={pageSize}
                country="in"
                category="science"
              />
            </div>
          }
        ></Route>
        <Route
          exact
          path="/health"
          element={
            <div>
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="health"
                pageSize={pageSize}
                country="in"
                category="health"
              />
            </div>
          }
        ></Route>
        <Route
          exact
          path="/sports"
          element={
            <div>
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="sports"
                pageSize={pageSize}
                country="in"
                category="sports"
              />
            </div>
          }
        ></Route>
        <Route
          exact
          path="/technology"
          element={
            <div>
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="technology"
                pageSize={pageSize}
                country="in"
                category="technology"
              />
            </div>
          }
        ></Route>
      </Routes>
    </Router>
  );
};

export default App;
