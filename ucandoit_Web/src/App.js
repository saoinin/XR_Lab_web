import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard, SelfDiagonse , OurLab ,Members, Publications, Projects, Board} from "./pages";
import { SelfTest } from "./components";
import "antd/dist/antd.min.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="dark:bg-main-bg bg-main-bg min-h-screen w-full">
            <div>
              <Routes>
                {/* Dashboard */}
                <Route path="/" element={<Dashboard />} />
                {/* Pages */}
                <Route path="/SelfDiagonse" element={<SelfDiagonse />} />

                <Route path="/SelfTest" element={<SelfTest />} />

                <Route path="/OurLab" element={<OurLab />} />

                <Route path="/Members" element={<Members />} />

                <Route path="/Publications" element={<Publications />} />

                <Route path="/Projects" element={<Projects />} />

                <Route path="/Board" element={<Board />} />
                

              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
