import React, { useState } from "react";

export default function Step1() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    placeOfBirth: "",
    district: "",
    wardNumber: "",
    wardChairperson: "",
    motherName: "",
    fatherName: "",
    municipalityType: "",
    municipalityName: "",
    gender: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    console.log("Form Data:", formData);
  };

  return (
    <div className="p-5 bg-white shadow rounded-lg max-w-2xl mx-auto">
      {/* Basic Details Heading */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-left">Basic Details</h2>
      </div>

      {/* First Name and Last Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
            placeholder="Enter first name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
            placeholder="Enter last name"
          />
        </div>
      </div>

      {/* Date of Birth and Place of Birth */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-sm font-medium mb-1">Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Place of Birth</label>
          <input
            type="text"
            name="placeOfBirth"
            value={formData.placeOfBirth}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
            placeholder="Enter place of birth"
          />
        </div>
      </div>


      {/* Date of Birth and Place of Birth */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-sm font-medium mb-1">Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Place of Birth</label>
          <input
            type="text"
            name="placeOfBirth"
            value={formData.placeOfBirth}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
            placeholder="Enter place of birth"
          />
        </div>
      </div>

      {/* District and Ward Number */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-sm font-medium mb-1">District (Current Residence)</label>
          <input
            type="text"
            name="district"
            value={formData.district}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
            placeholder="Enter district name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Ward Number</label>
          <input
            type="number"
            name="wardNumber"
            value={formData.wardNumber}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
            placeholder="Enter ward number"
          />
        </div>
      </div>

      {/* Ward Chairperson Full Name */}
      <div className="mt-4">
        <label className="block text-sm font-medium mb-1">Ward's Chairperson Full Name</label>
        <input
          type="text"
          name="wardChairperson"
          value={formData.wardChairperson}
          onChange={handleChange}
          className="border border-gray-300 rounded px-4 py-2 w-full"
          placeholder="Enter chairperson's full name"
        />
      </div>

      {/* Mother's Name and Father's Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-sm font-medium mb-1">Mother's Name</label>
          <input
            type="text"
            name="motherName"
            value={formData.motherName}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
            placeholder="Enter mother's name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Father's Name</label>
          <input
            type="text"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
            placeholder="Enter father's name"
          />
        </div>
      </div>

      {/* Municipality Type Dropdown */}
      <div className="mt-4">
        <label className="block text-sm font-medium mb-1">
          In which category does your place fall into?
        </label>
        <select
          name="municipalityType"
          value={formData.municipalityType}
          onChange={handleChange}
          className="border border-gray-300 rounded px-4 py-2 w-full"
        >
          <option value="">Select one</option>
          <option value="metropolitan">Metropolitan City</option>
          <option value="sub-metropolitan">Sub-Metropolitan City</option>
          <option value="municipality">Municipality</option>
          <option value="rural-municipality">Rural Municipality</option>
        </select>
      </div>

      {/* Municipality Name */}
      {formData.municipalityType && (
        <div className="mt-4">
          <label className="block text-sm font-medium mb-1">
            Name of your {formData.municipalityType.replace("-", " ")}
          </label>
          <input
            type="text"
            name="municipalityName"
            value={formData.municipalityName}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
            placeholder={`Enter ${formData.municipalityType}`}
          />
        </div>
      )}

      {/* Gender Selection */}
      <div className="mt-4">
        <label className="block text-sm font-medium mb-1">Gender</label>
        <div className="flex gap-4">
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleChange}
              className="mr-2"
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleChange}
              className="mr-2"
            />
            Female
          </label>
        </div>
      </div>
    </div>
  );
}
