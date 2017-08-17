import React from 'react';
import { Tag } from 'antd';
import { connect } from 'dva';
const { CheckableTag } = Tag;


function MyTag({dispatch,checked,tag}) {
  console.log(checked)

  function handleChange(event){
    console.log("handle:"+checked)
    dispatch({
      type: 'mytags/toggle',
      payload: event
    });
  };


  return (
    <CheckableTag  checked={checked} onChange={handleChange} >{tag}</CheckableTag>
  );
}
function mapStateToProps(state,ownProps) {
  const checked = state.mytags.checked;
  return {checked:checked};
}
export default connect(mapStateToProps)(MyTag);
;