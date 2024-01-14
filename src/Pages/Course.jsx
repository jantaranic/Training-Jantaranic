import React from 'react'

const CourseCard = (props) => {
  return (
    <>
    <h1>หลักสูตรที่เปิดสอน</h1><hr />
      <div style={divStyle}>
      <p style={textStyle}>
        <strong>Basic React Navtive</strong>
      </p>
      <p style={textStyle}>Duration: 5 days</p>
      <p style={textStyle}>Price 6900</p>
    </div>
    <div style={divStyle}>
      <p style={textStyle}>
        <strong>Power BI Dashboard</strong>
      </p>
      <p style={textStyle}>Duration: 4 days</p>
      <p style={textStyle}>Price 4800</p>
    </div>
    <div style={divStyle}>
      <p style={textStyle}>
        <strong>UI Design with Figma</strong>
      </p>
      <p style={textStyle}>Duration: 3 days</p>
      <p style={textStyle}>Price 4500</p>
    </div>
    </>
    
  )
}

const divStyle = {
  border: "1px solid black",
  borderRadius: 5,
  padding: 20,
  marginBottom: 15,
};
const textStyle = {
  fontSize: 20,
  marginBottom: 10,
};

export default CourseCard
