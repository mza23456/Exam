import React, { Component } from 'react';
import './About.css'; 

export default class About extends Component {
  render() {
    return (
      <div className="text-center">
        <h1 className='text-primary'>รายชื่อผู้พัฒนา</h1>
        <h2 className='text-primary'>นายวรภพ ศรีแจ่ม 661102968 นักศึกษาชั้นปีที่ 1</h2>
        <div className="image-container">
          <img src="/me.jpg" alt="Woraphop Srichaem" className="profile-image" />
        </div>
      </div>
    )
  }
}