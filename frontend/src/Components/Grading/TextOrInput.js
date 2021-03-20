import React from "react";
// import { debounce } from "lodash";

//To simulate different user types
const user = "instructor";

//Would likely check state or local storage for user type

//TOI = text or input (conditionally renders html elements based on user role and/or editMode)

// DISCLAIMER: defaultValue / displayVal attributes will likely need to be altered. defaultValue SHOULD be the 'old' value from the db. displayVal should reflect the value of an input from the db and reflect changes after update.
// We should also implement a warning for the user letting them know if they haven't saved their changes, they will be lost after exiting "Edit mode".

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
  // const inputVal = useRef();

  //When a change occurs in an input function will wait until user stops interacting (using debounce) and then check to see if the value has changed since last saved value.
  // const handleChange = debounce(async (e) => {
  //   console.log("EVENT TARGET VALUE:", e.target.value);
  //   if (
  //     displayVal.length !== e.target.value.length ||
  //     displayVal !== e.target.value
  //   ) {
  //     console.log(
  //       `Here's the difference. Original: ${displayVal}; NewVer: ${inputVal.current.value}`
  //     );
  //   } else {
  //     console.log("Nothing's changed");
  //   }
  // }, 2000);

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
