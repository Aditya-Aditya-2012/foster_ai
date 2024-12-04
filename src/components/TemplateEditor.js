import React from "react";

function TemplateEditor({ template, onSave }) {
  const [title, setTitle] = React.useState(template?.title || "");
  const [text, setText] = React.useState(template?.text || "");

  const handleSave = () => {
    onSave({ title, text });
    setTitle("");
    setText("");
  };

  return (
    <div>
      <h2>{template ? "Edit Template" : "New Template"}</h2>
      <input
        type="text"
        placeholder="Template Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Template Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSave}>Save Template</button>
    </div>
  );
}

export default TemplateEditor;
