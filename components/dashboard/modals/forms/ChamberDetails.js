import React from "react";
import dynamic from "next/dynamic";

// Components

const RichTextEditor = dynamic(import("../../../RichTextEditor"), {
  ssr: false,
});

// Icons

const ChamberDetails = () => {
  return (
    <>
      <form>
        <div className='input_group_form'>
          <label>Title</label>
          <input className='form_input' name='name' required />
          <div className='input_group_icon'></div>
        </div>
        <div className='input_group_form'>
          <label>Entry</label>
          <RichTextEditor />
        </div>
      </form>
    </>
  );
};

export default ChamberDetails;
