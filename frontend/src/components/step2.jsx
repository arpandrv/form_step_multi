import React, { useState } from "react";

export default function Step2() {
  const [agricultureExempt, setAgricultureExempt] = useState(null);
  const [formData, setFormData] = useState({
    ownerName: "",
    fiscalYear: "",
    agricultureType: "",
    otherAgriculture: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-5 bg-white shadow rounded-lg max-w-2xl mx-auto">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-left mb-4">Further Information</h2>

      {/* Agriculture Tax Exemption Question */}
      <p className="text-lg font-medium mb-2">Do you want to make an Agriculture Tax Exempt paper?</p>
      <div className="flex gap-4">
        <button
          onClick={() => setAgricultureExempt(true)}
          className={`px-6 py-2 font-semibold rounded-lg transition-all duration-300 ${
            agricultureExempt === true
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-700 hover:bg-gray-400"
          }`}
        >
          Yes
        </button>
        <button
          onClick={() => setAgricultureExempt(false)}
          className={`px-6 py-2 font-semibold rounded-lg transition-all duration-300 ${
            agricultureExempt === false
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-700 hover:bg-gray-400"
          }`}
        >
          No
        </button>
      </div>

      {/* Conditional Fields (Only Show When "Yes" is Selected) */}
      {agricultureExempt && (
        <div className="mt-6">
          {/* Whose Income */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Whose Income is the mentioned Agriculture?
            </label>
            <input
              type="text"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleChange}
              className="border border-gray-300 rounded px-4 py-2 w-full"
              placeholder="Enter owner's name"
            />
          </div>

          {/* Since Fiscal Year */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Since Fiscal Year</label>
            <input
              type="text"
              name="fiscalYear"
              value={formData.fiscalYear}
              onChange={handleChange}
              className="border border-gray-300 rounded px-4 py-2 w-full"
              placeholder="Eg: 2022/23"
            />
          </div>

          {/* Select Type of Agriculture */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Select Type of Agriculture</label>
            <select
              name="agricultureType"
              value={formData.agricultureType}
              onChange={handleChange}
              className="border border-gray-300 rounded px-4 py-2 w-full"
            >
              <option value="">Select one</option>
              <option value="Crops Farming">Crops Farming</option>
              <option value="Animal Husbandry">Animal Husbandry</option>
              <option value="Dairy Production">Dairy Production</option>
              <option value="others">Others</option>
            </select>
          </div>

          {/* Show "Please specify" field only if "Others" is selected */}
          {formData.agricultureType === "others" && (
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Please specify</label>
              <input
                type="text"
                name="otherAgriculture"
                value={formData.otherAgriculture}
                onChange={handleChange}
                className="border border-gray-300 rounded px-4 py-2 w-full"
                placeholder="Enter specific type"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
