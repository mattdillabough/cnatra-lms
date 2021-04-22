import React from "react";

//Change to simulate different user types
const user = "instructor";

//TOI = Text Or Input (conditionally renders html elements based on user role and/or editMode)

// DispalayVal is the value for the text element, defaultValue is the initial value for the input element, which should reset after a form edit is saved.

function TOI({
  labeltxt,
  type,
  defaultValue,
  displayVal,
  options = [],
  editable = false,
  check,
  register,
  ...props
}) {
  //If Student is viewing or Instructor in Viewing mode
  if (user === "student" || !editable) {
    return (
      <label className="event-label">
        {labeltxt}
        <div>{displayVal}</div>
      </label>
    );
  }

  //If in Edit mode
  //Render input depending on input type
  else {
    function RenderedElement() {
      switch (type) {
        case "textarea":
          return (
            <textarea
              disabled={!editable}
              ref={register}
              defaultValue={defaultValue}
              {...props}
            ></textarea>
          );
        case "radio":
          return (
            <div>
              {options.map((option, idx) => {
                return (
                  <label className="option-label" key={`${labeltxt}_${idx}`}>
                    {option}
                    <input
                      type={type}
                      id={option}
                      disabled={!editable}
                      value={option}
                      ref={register}
                      defaultChecked={
                        check?.toLowerCase() === option.toLowerCase()
                      }
                      {...props}
                    />
                  </label>
                );
              })}
            </div>
          );

        case "select":
          return (
            <select
              disabled={!editable}
              defaultValue={defaultValue}
              ref={register}
              {...props}
            >
              {[`--Select a ${labeltxt}--`, ...options].map((option, idx) => {
                return (
                  <option key={`${option}_${idx}`} value={option}>
                    {option}
                  </option>
                );
              })}
            </select>
          );
        default:
          return (
            <input
              disabled={!editable}
              type={type}
              ref={register}
              defaultValue={defaultValue}
              {...props}
            />
          );
      }
    }
    return (
      <label className="event-label">
        {labeltxt}
        <RenderedElement />
      </label>
    );
  }
}

export default TOI;
