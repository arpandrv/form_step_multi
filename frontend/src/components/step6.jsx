import React, { useState } from "react";

export default function Step6() {
  const [relationshipVerification, setRelationshipVerification] = useState(null);
  const [relationshipEntries, setRelationshipEntries] = useState([
    { id: 1, relationship: "", relativeName: "" },
  ]);

  // Handle Yes/No button selection
  const handleRelationshipChange = (value) => {
    setRelationshipVerification(value);
    if (!value) setRelationshipEntries([{ id: 1, relationship: "", relativeName: "" }]); // Reset fields if No is selected
  };

  // Handle input change
  const handleInputChange = (index, field, value) => {
    const updatedEntries = [...relationshipEntries];
    updatedEntries[index][field] = value;
    setRelationshipEntries(updatedEntries);
  };

  // Add a new relationship entry
  const addRelationshipEntry = () => {
    setRelationshipEntries([
      ...relationshipEntries,
      { id: relationshipEntries.length + 1, relationship: "", relativeName: "" },
    ]);
  };

  // Remove a relationship entry
  const removeRelationshipEntry = (index) => {
    const updatedEntries = relationshipEntries.filter((_, i) => i !== index);
    setRelationshipEntries(updatedEntries);
  };

  return (
    <div className="p-5 bg-white shadow rounded-lg max-w-2xl mx-auto">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-left mb-4">Further Information</h2>

      {/* Relationship Verification Question */}
      <p className="text-lg font-medium mb-2">Do you want to make a Relationship Verification?</p>
      <div className="flex gap-4">
        <button
          onClick={() => handleRelationshipChange(true)}
          className={`px-6 py-2 font-semibold rounded-lg transition-all duration-300 ${
            relationshipVerification === true
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-700 hover:bg-gray-400"
          }`}
        >
          Yes
        </button>
        <button
          onClick={() => handleRelationshipChange(false)}
          className={`px-6 py-2 font-semibold rounded-lg transition-all duration-300 ${
            relationshipVerification === false
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-700 hover:bg-gray-400"
          }`}
        >
          No
        </button>
      </div>

      {/* Conditional Fields (Only Show When "Yes" is Selected) */}
      {relationshipVerification && (
        <div className="mt-6">
          {/* Dynamic Relationship Entries */}
          {relationshipEntries.map((entry, index) => (
            <div key={entry.id} className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Relationship Entry {index + 1}:
              </label>
              <div className="grid grid-cols-2 gap-4">
                {/* Relationship */}
                <input
                  type="text"
                  value={entry.relationship}
                  onChange={(e) => handleInputChange(index, "relationship", e.target.value)}
                  className="border border-gray-300 rounded px-4 py-2 w-full"
                  placeholder="State the Relationship (e.g., Father, Sister)"
                />

                {/* Full Name of Relative */}
                <input
                  type="text"
                  value={entry.relativeName}
                  onChange={(e) => handleInputChange(index, "relativeName", e.target.value)}
                  className="border border-gray-300 rounded px-4 py-2 w-full"
                  placeholder="Full Name of Relative (e.g., John Doe)"
                />
              </div>
            </div>
          ))}

          {/* Add/Remove Buttons */}
          <div className="flex gap-4 mt-2">
            {/* Add (+) Button */}
            <button
              onClick={addRelationshipEntry}
              className="px-4 py-2 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-all"
            >
              +
            </button>

            {/* Remove (-) Button (Only show if there are more than one entry) */}
            {relationshipEntries.length > 1 && (
              <button
                onClick={() => removeRelationshipEntry(relationshipEntries.length - 1)}
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
