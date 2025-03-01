import React, { useState } from 'react';
import '../assets/css/EditProfile.css';

const EditProfile = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    bachelorDegree: {
      department: '',
      university: '',
      session: '',
      passingYear: '',
    },
    masterDegree: {
      department: '',
      university: '',
      session: '',
      passingYear: '',
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDegreeChange = (e, degree) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [degree]: {
        ...formData[degree],
        [name]: value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className='ed-2'>
    <div className="edit-profile-container">
       <h1 className="profile-title">Edit Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

       
      <h2 className="profile-title">Bachelor's Degree</h2>
        <div className="form-group">
          <label htmlFor="bachelorDepartment">Department</label>
          <input
            type="text"
            id="bachelorDepartment"
            name="department"
            value={formData.bachelorDegree.department}
            onChange={(e) => handleDegreeChange(e, 'bachelorDegree')}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="bachelorUniversity">University</label>
          <input
            type="text"
            id="bachelorUniversity"
            name="university"
            value={formData.bachelorDegree.university}
            onChange={(e) => handleDegreeChange(e, 'bachelorDegree')}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="bachelorSession">Session</label>
          <input
            type="text"
            id="bachelorSession"
            name="session"
            value={formData.bachelorDegree.session}
            onChange={(e) => handleDegreeChange(e, 'bachelorDegree')}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="bachelorPassingYear">Passing Year</label>
          <input
            type="text"
            id="bachelorPassingYear"
            name="passingYear"
            value={formData.bachelorDegree.passingYear}
            onChange={(e) => handleDegreeChange(e, 'bachelorDegree')}
            required
          />
        </div>

      
        <h2 className="profile-title">Master's Degree</h2>
        <div className="form-group">
          <label htmlFor="masterDepartment">Department</label>
          <input
            type="text"
            id="masterDepartment"
            name="department"
            value={formData.masterDegree.department}
            onChange={(e) => handleDegreeChange(e, 'masterDegree')}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="masterUniversity">University</label>
          <input
            type="text"
            id="masterUniversity"
            name="university"
            value={formData.masterDegree.university}
            onChange={(e) => handleDegreeChange(e, 'masterDegree')}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="masterSession">Session</label>
          <input
            type="text"
            id="masterSession"
            name="session"
            value={formData.masterDegree.session}
            onChange={(e) => handleDegreeChange(e, 'masterDegree')}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="masterPassingYear">Passing Year</label>
          <input
            type="text"
            id="masterPassingYear"
            name="passingYear"
            value={formData.masterDegree.passingYear}
            onChange={(e) => handleDegreeChange(e, 'masterDegree')}
            required
          />
        </div>

        <h2 className="profile-title">Update Password</h2>
        <div className="form-group">
          <label htmlFor="currentPassword">Current Password</label>
          <input
            type="password"
            id="currentPassword"
            name="currentPassword"
            value={formData.currentPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="newPassword">Enter New Password</label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm New Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Save Changes</button>
      </form>
    </div>
    </div>
  );
};

export default EditProfile;