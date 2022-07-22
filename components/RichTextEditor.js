import React, { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { Editor } from "react-draft-wysiwyg";

const wrapperStyle = {
  margin: "10px 0px",
  width: "100%",
};

const editorStyle = {
  backgroundColor: "#ECEFF5",
  color: "var(--black)",
  marginTop: "10px",
  borderRadius: "5px",
  padding: "15px 30px",
  minHeight: "200px",
  maxHeight: "500px",
};

const toolbar = {
  options: ["inline", "blockType", "fontSize", "list", "textAlign", "history"],
  inline: {
    className: "custom-wrapper",
    bold: {
      icon: "/icons/ic_bold.svg",
    },
    italic: {
      icon: "/icons/ic_italic.svg",
    },
    underline: {
      icon: "/icons/ic_underline.svg",
    },
    options: ["bold", "italic", "underline"],
  },
  list: {
    className: "custom-wrapper",
    unordered: {
      icon: "/icons/ic_unordered.svg",
    },
    ordered: {
      icon: "/icons/ic_ordered.svg",
    },
    options: ["unordered", "ordered"],
  },
  textAlign: {
    className: "custom-wrapper",
    left: {
      icon: "/icons/ic_align_left.svg",
    },
    right: {
      icon: "/icons/ic_align_right.svg",
    },
    center: {
      icon: "/icons/ic_align_center.svg",
    },
    justify: {
      icon: "/icons/ic_justify.svg",
    },
  },
  history: {
    className: "custom-wrapper",
    undo: {
      icon: "/icons/ic_undo.svg",
    },
    redo: {
      icon: "/icons/ic_redo.svg",
    },
  },
};

const content = {
  entityMap: {},
  blocks: [
    {
      key: "637gr",
      text: "Initialized from content state.",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
  ],
};

const RichTextEditor = () => {
  let editorState = EditorState.createEmpty();
  const [description, setDescription] = useState(editorState);
  const onEditorStateChange = (editorState) => {
    // setDescription(JSON.stringify(editorState, null, 4));
    setDescription(editorState);
    console.log(draftToHtml(convertToRaw(description.getCurrentContent())));
  };

  return (
    <>
      <Editor
        wrapperClassName='wrapper-class'
        editorClassName='editor-class'
        toolbarClassName='toolbar-class'
        wrapperStyle={wrapperStyle}
        editorStyle={editorStyle}
        toolbar={toolbar}
        onEditorStateChange={onEditorStateChange}
      />
    </>
  );
};

export default RichTextEditor;
