import React from "react";
import TemplateList from "./components/TemplateList";
import TemplateEditor from "./components/TemplateEditor";

function App() {
  return (
    <div>
      <h1>Template Manager</h1>
      <TemplateList />
      <TemplateEditor />
    </div>
  );
}

export default App;
