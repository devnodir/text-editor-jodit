import React, { useState, useRef } from 'react';
import JoditEditor from "jodit-react";

const App = () => {
  const editor = useRef(null)
  const [content, setContent] = useState('')

  const config = {
    "spellcheck": false,
    "autofocus": true,
    "language": "ru",
    "toolbarButtonSize": "large",
    "enter": "P",
    "defaultMode": "1",
    "toolbarSticky": false,
    "minHeight": 200,
    allowResizeY: true,
    "toolbarInlineForSelection": true,
    "showPlaceholder": true,
    "buttons": "bold,italic,underline,strikethrough,ul,ol,outdent,indent,left,font,fontsize,paragraph,brush,image,hr,table,link,symbol"
  }

  return (
    <>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        tabIndex={5} // tabIndex of textarea
        onBlur={newContent => { setContent(newContent) }}
      />
      <div>
        {content}
      </div>
    </>
  );
}

export default App
