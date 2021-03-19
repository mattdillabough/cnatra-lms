import React, { useState, useEffect, useReducer } from "react";
import TOI from "./TextOrInput";
import { useSelector, useDispatch } from "react-redux";

import { getGradesheet } from "../../Store/grades";
import { mockGradesheetData } from "./mockGradesheetData";
const gradesheet_id = "a8d5bd938e2442619217ead735a73e0d";

//useForm CUSTOM HOOK
function useEventForm() {
  //Accessing redux state & methods
  // const dispatchRedux = useDispatch();
  // const details = useSelector((state) => state.grades.details);

  // //Fetch gradesheet data
  // useEffect(() => {
  //   dispatchRedux(getGradesheet(gradesheet_id));
  // }, [dispatchRedux]);

  const prevState = {
    grade: "Pass",
    clearedForSolo: "N/A",
    instructorName: "instructor-name",
    date: "2012-12-13T12:30",
    fltDur: 1.8,
    status: "ICMP",
    comments: "Why are we still here?",
  };

  // const [state, dispatch] = useReducer(formReducer, prevState);

  const [values, setValues] = useState(prevState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    console.log("EVENT INFO: ", name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Save was pressed, this would trigger submit with: ", e);
  };

  // return [
  //   state,
  //   <EventForm
  //     state={state}
  //     edit={edit}
  //     handleChange={handleChange}
  //     handleSubmit={handleSubmit}
  //   />,
  // ];
  return {
    values,
    handleChange,
    handleSubmit,
  };
}

export const EventForm = ({ edit }) => {
  const { values, handleChange, handleSubmit } = useEventForm();

  /////////////////
  return (
    <form
      className="row"
      id="event-details-form"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      {/* TOIs go in here  */}
      <div className="col-12">
        <h5>Flight Lesson</h5>
        <div className="event-details-section">
          {/* <TOI
            name="instructorName"
            className="constrain-input"
            labeltxt="Instructor: "
            type="text"
            editable={edit}
            value={values.instructorName}
            // defaultValue={mockGradesheetData.instructor.name}
            displayVal={values.instructorName}
            onChange={(e) => {
              handleChange(e);
            }}
          /> */}
          <label className="event-label">
            INSTRUCTOR:
            <input
              name="instructorName"
              className="constrain-input"
              disabled={!edit}
              type="text"
              value={values.instructorName}
              // defaultValue={defaultValue}
              // ref={inputVal}
              onChange={(e) => handleChange(e)}
            />
          </label>
          {/* Fix time*/}
          <TOI
            name="date"
            className="constrain-input"
            labeltxt="Start Date / Time: "
            type="datetime-local"
            editable={edit}
            value={values.date}
            // defaultValue={
            //   details?.grade_sheet.date &&
            //   details.grade_sheet.date[
            //     details.grade_sheet.date.length - 6
            //   ] === "T"
            //     ? details.grade_sheet.date
            //     : String(`${details.grade_sheet.date}T12:30`)
            // }
            displayVal={new Date(values.date).toLocaleDateString(undefined, {
              month: "short",
              day: "2-digit",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
              timeZone: "UTC",
            })}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <TOI
            name="fltDur"
            className="constrain-input"
            labeltxt="Duration: "
            type="number"
            step={0.1}
            editable={edit}
            value={values.fltDur}
            // defaultValue={mockGradesheetData.flightTimelog.fltDur}
            displayVal={values.fltDur}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <h5>Details</h5>
        <div className="event-details-section">
          <TOI
            name="status"
            labeltxt="Status: "
            type="select"
            editable={edit}
            options={["CMP", "ICMP"]}
            displayVal={values.status}
            value={values.status}
            // defaultValue={
            //   details.grade_sheet.status === "CMP" ? "CMP" : "ICMP"
            // }
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <TOI
            name="clearedForSolo"
            labeltxt="Cleared for Solo: "
            type="radio"
            editable={edit}
            options={["N/A", "Yes", "No"]}
            check={values.clearedForSolo}
            // defaultValue={mockGradesheetData.clearedForSolo}
            displayVal={values.clearedForSolo}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <TOI
            name="grade"
            labeltxt="Overall Grade: "
            type="radio"
            editable={edit}
            options={["Pass", "Fail"]}
            check={values.grade}
            // defaultValue={details.grade_sheet.grade}
            displayVal={values.grade}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
      </div>
      <div className="col-12">
        <h5>Event Comments: </h5>
        <TOI
          name="comments"
          type="textarea"
          editable={edit}
          rows="5"
          autoComplete="on"
          value={values.comments}
          // defaultValue={details?.grade_sheet.comments}
          displayVal={values.comments}
          changed={handleChange}
        />
      </div>
    </form>
  );
};

//MANAGE STATE
// const [state, setState] = useState(initialState);
// function formReducer(prevState, { name, value }) {
//   return { ...prevState, [name]: value };
// }
