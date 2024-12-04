import React, {useState, useEffect} from "react";
import TemplateList from "./components/TemplateList";
import TemplateEditor from "./components/TemplateEditor";

function App() {
  const [templates, setTemplates] = useState(() => {
    const storedTemplates = localStorage.getItem("templates");
    return storedTemplates ? JSON.parse(storedTemplates) : [];
  });

  const [selectedTemplate, setSelectedTemplate] = useState(null)
  
  useEffect(() => {
    localStorage.setItem("templates", JSON.stringify(templates));
  }, [templates]);

  const handleSave = (newTemplate) => {
    setTemplates((prev) => {
      const updatedTemplates = [...prev, newTemplate];
      localStorage.setItem("templates", JSON.stringify(updatedTemplates));
      return updatedTemplates;
    });
    setSelectedTemplate(null);
  };
  return (
    <div>
      <h1>Template Manager</h1>
      <TemplateList
        templates = {templates}
        onSelect = {(template) => setSelectedTemplate(template)}
      />
      <TemplateEditor template = {selectedTemplate} onSave={handleSave} />
    </div>
  );
}

export default App;
