import React, { useState } from "react";

export default function Step4() {
  const [taxClearance, setTaxClearance] = useState(null);
  const [formData, setFormData] = useState({
    dateType: "",
    fiscalYear: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-5 bg-white shadow rounded-lg max-w-2xl mx-auto">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-left mb-4">Further Information</h2>

      {/* Tax Clearance Certificate Question */}
      <p className="text-lg font-medium mb-2">Do you want to make a Tax Clearance Certificate?</p>
      <div className="flex gap-4">
        <button
          onClick={() => setTaxClearance(true)}
          className={`px-6 py-2 font-semibold rounded-lg transition-all duration-300 ${
            taxClearance === true
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-700 hover:bg-gray-400"
          }`}
        >
          Yes
        </button>
        <button
          onClick={() => setTaxClearance(false)}
          className={`px-6 py-2 font-semibold rounded-lg transition-all duration-300 ${
            taxClearance === false
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-700 hover:bg-gray-400"
          }`}
        >
          No
        </button>
      </div>

      {/* Conditional Fields (Only Show When "Yes" is Selected) */}
      {taxClearance && (
        <div className="mt-6">
          {/* Date Type Dropdown */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Choose the Date Type</label>
            <select
              name="dateType"
              value={formData.dateType}
              onChange={handleChange}
              className="border border-gray-300 rounded px-4 py-2 w-full"
            >
              <option value="">Select one</option>
              <option value="BS">BS</option>
              <option value="AD">AD</option>
            </select>
          </div>

          {/* Fiscal Year */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Enter the Fiscal Year</label>
            <input
              type="text"
              name="fiscalYear"
              value={formData.fiscalYear}
              onChange={handleChange}
              className="border border-gray-300 rounded px-4 py-2 w-full"
              placeholder="Eg: 2022/23"
            />
          </div>
        </div>
      )}
    </div>
  );
}
