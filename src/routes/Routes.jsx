import { Home, Themes, Quest, Rules, Result, NotFound } from "../pages";

import { Routes, Route } from "react-router-dom";

function Endpoints() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/themes" element={<Themes />} />
      <Route path="/quest/:qid" element={<Quest />} />
      <Route path="/quest/:qid/rules" element={<Rules />} />
      <Route path="/results" element={<Result />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export { Endpoints as Routes };
