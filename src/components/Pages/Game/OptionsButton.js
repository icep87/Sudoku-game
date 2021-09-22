import React from "react";

export default function OptionsButton({
  label,
  description,
  buttonLabel,
  clickAction,
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="flex-grow flex flex-col">
        <span className="text-sm font-medium text-gray-900">{label}</span>
        <span className="text-sm text-gray-500">{description}</span>
      </span>
      <button
        type="button"
        className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={clickAction}
      >
        {buttonLabel}
      </button>
    </div>
  );
}
