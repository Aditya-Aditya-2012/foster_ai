import React from "react";

function TemplateList({ templates, onSelect }) {
  return (
    <div>
      <h2>Your Templates</h2>
      {templates?.length ? (
        templates.map((template, index) => (
          <div key={index} onClick={() => onSelect(template)}>
            {template.title}
          </div>
        ))
      ) : (
        <p>No templates available. Add a new one!</p>
      )}
      <button onClick={() => onSelect(null)}>Add New Template</button>
    </div>
  );
}

export default TemplateList;
