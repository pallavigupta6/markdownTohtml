import React, { useState } from "react";
import axios from "axios";
import "highlight.js/styles/github.css";
import hljs from "highlight.js";
import "./markdownEditor.css";
import { debounce } from "lodash";
import html from "highlight.js/lib/languages/vbscript-html.js";
import markdown from "highlight.js/lib/languages/markdown";

hljs.registerLanguage("markdown", markdown);
hljs.registerLanguage("html", html);
const MarkdownEditor = () => {
  const [html, setHtml] = useState("");

  const convertMarkdown = async (markdownText) => {
    const response = await axios.post("http://localhost:8000/convert", {
      markdown: markdownText,
    });
    setHtml(response.data.html);
  };

  const handleChange = debounce((value) => {
    convertMarkdown(value);
  }, 300);

  return (
    <div className="editor-container">
      <div className="textarea" style={{ width: "50%", float: "left" }}>
        <pre>
          <code className="language-markdown">
            <textarea
              onChange={(e) => handleChange(e.target.value)}
              placeholder="Type your markdown here..."
              style={{ width: "100%", height: "400px" }}
            />
          </code>
        </pre>
      </div>
      <div style={{ width: "50%", float: "right" }}>
        <h2>converted Output</h2>
        <pre>
          <code className="preview language-html">{html}</code>
        </pre>
      </div>
    </div>
  );
};

export default MarkdownEditor;
