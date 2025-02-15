import React, { useState } from "react";

export default function Step5() {
  const [incomeDocument, setIncomeDocument] = useState(null);
  const [incomeEntries, setIncomeEntries] = useState([
    { id: 1, incomeBy: "", amount: "", source: "" },
  ]);

  // Handle Yes/No button selection
  const handleIncomeDocumentChange = (value) => {
    setIncomeDocument(value);
    if (!value) setIncomeEntries([{ id: 1, incomeBy: "", amount: "", source: "" }]); // Reset fields if No is selected
  };

  // Handle input change
  const handleInputChange = (index, field, value) => {
    const updatedEntries = [...incomeEntries];
    updatedEntries[index][field] = value;
    setIncomeEntries(updatedEntries);
  };

  // Add a new income entry
  const addIncomeEntry = () => {
    setIncomeEntries([
      ...incomeEntries,
      { id: incomeEntries.length + 1, incomeBy: "", amount: "", source: "" },
    ]);
  };

  // Remove an income entry
  const removeIncomeEntry = (index) => {
    const updatedEntries = incomeEntries.filter((_, i) => i !== index);
    setIncomeEntries(updatedEntries);
  };

  return (
    <div className="p-5 bg-white shadow rounded-lg max-w-2xl mx-auto">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-left mb-4">Further Information</h2>

      {/* Annual Income Document Question */}
      <p className="text-lg font-medium mb-2">Do you want to make an Annual Income Document?</p>
      <div className="flex gap-4">
        <button
          onClick={() => handleIncomeDocumentChange(true)}
          className={`px-6 py-2 font-semibold rounded-lg transition-all duration-300 ${
            incomeDocument === true
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-700 hover:bg-gray-400"
          }`}
        >
          Yes
        </button>
        <button
          onClick={() => handleIncomeDocumentChange(false)}
          className={`px-6 py-2 font-semibold rounded-lg transition-all duration-300 ${
            incomeDocument === false
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-700 hover:bg-gray-400"
          }`}
        >
          No
        </button>
      </div>

      {/* Conditional Fields (Only Show When "Yes" is Selected) */}
      {incomeDocument && (
        <div className="mt-6">
          {/* Dynamic Income Entries */}
          {incomeEntries.map((entry, index) => (
            <div key={entry.id} className="mb-4">
              <label className="block text-sm font-medium mb-1">Income Entry {index + 1}:</label>
              <div className="grid grid-cols-3 gap-4">
                {/* Income By */}
                <input
                  type="text"
                  value={entry.incomeBy}
                  onChange={(e) => handleInputChange(index, "incomeBy", e.target.value)}
                  className="border border-gray-300 rounded px-4 py-2 w-full"
                  placeholder="Income by (e.g., John Doe)"
                />

                {/* Amount */}
                <input
                  type="number"
                  value={entry.amount}
                  onChange={(e) => handleInputChange(index, "amount", e.target.value)}
                  className="border border-gray-300 rounded px-4 py-2 w-full"
                  placeholder="Amount (e.g., 50000)"
                />

                {/* Source */}
                <input
                  type="text"
                  value={entry.source}
                  onChange={(e) => handleInputChange(index, "source", e.target.value)}
                  className="border border-gray-300 rounded px-4 py-2 w-full"
                  placeholder="Source (e.g., Business)"
                />
              </div>
            </div>
          ))}

          {/* Add/Remove Buttons */}
          <div className="flex gap-4 mt-2">
            {/* Add (+) Button */}
            <button
              onClick={addIncomeEntry}
              className="px-4 py-2 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-all"
            >
              +
            </button>

            {/* Remove (-) Button (Only show if there are more than one entry) */}
            {incomeEntries.length > 1 && (
              <button
                onClick={() => removeIncomeEntry(incomeEntries.length - 1)}
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
