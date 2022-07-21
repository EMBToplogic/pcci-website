import React from "react";

// Icons

const ChamberDetails = () => {
  return (
    <>
      <form>
        <div className='input_group_form'>
          <label>Title</label>
          <input class='form_input' name='name' required />
          <div className='input_group_icon'></div>
        </div>
      </form>
    </>
  );
};

export default ChamberDetails;
