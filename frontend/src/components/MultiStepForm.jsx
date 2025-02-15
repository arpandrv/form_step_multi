import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";
import Step5 from "./step5";
import Step6 from "./step6";

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6; // Total number of steps

  // Navigation functions
  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  // Render steps
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      case 4:
        return <Step4 />;
      case 5:
        return <Step5 />;
      case 6:
        return <Step6 />;
      default:
        return <p>More steps will be added here.</p>;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-3xl w-full p-8 bg-white shadow-lg rounded-lg">
        
        {/* Step Counter */}
        <div className="mb-6 text-center">
          <p className="text-lg font-semibold">Step {currentStep} of {totalSteps}</p>
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
            <div
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Render Current Step */}
        {renderStep()}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          {/* Previous Button */}
          {currentStep > 1 && (
            <button
              onClick={prevStep}
              className="px-6 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-500 hover:to-purple-600 transition-all duration-300"
            >
              Previous
            </button>
          )}

          {/* Next Button */}
          <button
            onClick={nextStep}
            className="px-6 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-500 hover:to-purple-600 transition-all duration-300"
          >
            {currentStep < totalSteps ? "Next" : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
}
