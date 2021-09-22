import React from "react";
import { classNames } from "../../utils/Utils";

const NumberInput = ({
  colIndex,
  number,
  valid,
  initialNumber,
  numberChanged,
  liveValidation,
}) => {
  const handleChange = (v) => {
    const valueRegEx = /[1-9]/gm;
    // Check if the new value is between 1-9 if not empty the value for the input field
    !valueRegEx.test(v.value) && (v.value = "");
    // Correct input let's pass on the change to the parent
    numberChanged(parseInt(v.value), v.id);
  };

  // We use input type "text" as the "number" input has stepper. The stepper can be removed by some "magic" but this can cause other issues.
  // So better to use "text" as just check the code. Plus we validate the field on each change.
  return (
    <input
      id={colIndex}
      type="text"
      maxLength="1"
      className={classNames(
        initialNumber
          ? "text-gray-600 font-bold bg-gray-100 bg-opacity-50"
          : "",
        liveValidation &&
          !initialNumber &&
          !valid &&
          !number == "" &&
          "bg-red-400",
        liveValidation &&
          !initialNumber &&
          valid &&
          !number == "" &&
          "bg-green-500 bg-opacity-50",
        "block w-full border-0 border-b border-transparent bg-white text-center"
      )}
      defaultValue={number}
      onChange={(event) => handleChange(event.target)}
      disabled={initialNumber ? "true" : ""}
      autoComplete="off"
    ></input>
  );
};

export default NumberInput;
