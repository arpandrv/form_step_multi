import React, { useState } from "react";

export default function Step3() {
  const [verificationNeeded, setVerificationNeeded] = useState(null);
  const [namePairs, setNamePairs] = useState([{ id: 1, name1: "", name2: "" }]);

  // Handle Yes/No button selection
  const handleVerificationChange = (value) => {
    setVerificationNeeded(value);
    if (!value) setNamePairs([{ id: 1, name1: "", name2: "" }]); // Reset fields if No is selected
  };

  // Handle input change
  const handleInputChange = (index, field, value) => {
    const updatedPairs = [...namePairs];
    updatedPairs[index][field] = value;
    setNamePairs(updatedPairs);
  };

  // Add a new name pair
  const addNamePair = () => {
    setNamePairs([...namePairs, { id: namePairs.length + 1, name1: "", name2: "" }]);
  };

  // Remove a name pair
  const removeNamePair = (index) => {
    const updatedPairs = namePairs.filter((_, i) => i !== index);
    setNamePairs(updatedPairs);
  };

  return (
    <div className="p-5 bg-white shadow rounded-lg max-w-2xl mx-auto">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-left mb-4">Further Information</h2>

      {/* Name Surname Verification Question */}
      <p className="text-lg font-medium mb-2">Do you want to make Name-Surname Verification?</p>
      <div className="flex gap-4">
        <button
          onClick={() => handleVerificationChange(true)}
          className={`px-6 py-2 font-semibold rounded-lg transition-all duration-300 ${
            verificationNeeded === true
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-700 hover:bg-gray-400"
          }`}
        >
          Yes
        </button>
        <button
          onClick={() => handleVerificationChange(false)}
          className={`px-6 py-2 font-semibold rounded-lg transition-all duration-300 ${
            verificationNeeded === false
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-700 hover:bg-gray-400"
          }`}
        >
          No
        </button>
      </div>

      {/* Conditional Fields (Only Show When "Yes" is Selected) */}
      {verificationNeeded && (
        <div className="mt-6">
          {/* Name Fields */}
          {namePairs.map((pair, index) => (
            <div key={pair.id} className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Name {index + 1}:
              </label>
              <div className="grid grid-cols-2 gap-4">
                {/* First Name */}
                <input
                  type="text"
                  value={pair.name1}
                  onChange={(e) => handleInputChange(index, "name1", e.target.value)}
                  className="border border-gray-300 rounded px-4 py-2 w-full"
                  placeholder="e.g., John"
                />

                {/* Surname */}
                <input
                  type="text"
                  value={pair.name2}
                  onChange={(e) => handleInputChange(index, "name2", e.target.value)}
                  className="border border-gray-300 rounded px-4 py-2 w-full"
                  placeholder="e.g., Doe"
                />
              </div>
            </div>
          ))}

          {/* Add/Remove Buttons */}
          <div className="flex gap-4 mt-2">
            {/* Add (+) Button */}
            <button
              onClick={addNamePair}
              className="px-4 py-2 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-all"
            >
              +
            </button>

            {/* Remove (-) Button (Only show if there are more than one pairs) */}
            {namePairs.length > 1 && (
              <button
                onClick={() => removeNamePair(namePairs.length - 1)}
                className="px-4 py-2 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 transition-all"
              >
                -
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
