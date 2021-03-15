import React from "react";
// import { mockGradesheetData } from "./mockGradesheetData";

//To simulate different user types
const user = "instructor";

//Would likely check state or local storage for user type
// const elementType = user === "instructor" ? "input" : "div";
//TOI = text or input (conditionally render html elements based on user role); Thinking this functionality can be used when the 'edit' btn is implemented

// DISCLAIMER: defaultValue / displayVal attributes will likely need to be altered. defaultValue SHOULD show the initial value saved from the db (from the mockData, at the moment). displayVal should reflect the value of an input even after update.
// We should also implement a warning for the user letting them know if they haven't saved their changes, they will be lost after exiting "Edit mode".

function TOI({
  labeltxt,
  type,
  defaultValue,
  displayVal,
  options = [],
  editable = false,
  ...props
}) {
  //if Student is viewing or Instructor in Viewing mode
  if (user === "student" || !editable) {
    return (
      <label className="event-label">
        {labeltxt}
        <div>{displayVal}</div>
      </label>
    );
  }

  //if in Edit mode
  //Render input depending on input type
  else {
    function RenderedElement() {
      switch (type) {
        case "textarea":
          return (
            <textarea
              disabled={!editable}
              defaultValue={defaultValue}
              {...props}
            ></textarea>
          );
        case "radio":
          return (
            <div>
              {options.map((option, idx) => {
                return (
                  <label key={`${labeltxt}_${idx}`}>
                    {option}
                    <input
                      type={type}
                      id={option}
                      disabled={!editable}
                      value={option}
                      defaultChecked={defaultValue === option ? true : false}
                      {...props}
                    />
                  </label>
                );
              })}
            </div>
          );

        case "select":
          return (
            <select disabled={!editable} defaultValue={defaultValue} {...props}>
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
