import React from "react";
import TOI from "./TextOrInput";
import { useForm } from "react-hook-form";

export const EventForm = ({ edit, values }) => {
  //The useForm hook helps to track inputs using an 'uncontrolled' approach. Only after submit are values checked. However this helps to prevent excessive re-rendering of the entire form when only one input is being changed.
  const { register, handleSubmit } = useForm({ defaultValues: values });

  const onSubmit = (data) => {
    console.log("Submitted data: ", data);
  };

  /////////////////
  return (
    <form
      className="row"
      id="event-details-form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="col-12">
        <h5>Flight Lesson</h5>
        <div className="event-details-section">
          <TOI
            name="instructorName"
            className="constrain-input"
            labeltxt="Instructor: "
            type="text"
            editable={edit}
            register={register}
            displayVal={values.instructorName}
          />
          {/* <label className="event-label">
            INSTRUCTOR:
            <input
              name="instructorName"
              className="constrain-input"
              placeholder="Instructor name"
              disabled={!edit}
              type="text"
              ref={register}
              // defaultValue={defaultValue}
              // ref={inputVal}
              // onChange={(e) => handleChange(e)}
            />
          </label> */}

          <TOI
            name="date"
            className="constrain-input"
            labeltxt="Start Date / Time: "
            type="datetime-local"
            editable={edit}
            register={register}
            // value={values.date}
            // displayVal={
            // values?.date && values.date[values.date.length - 6] === "T"
            //   ? values.date
            //   : String(`${values?.date}T12:30`)
            // }
            defaultValue={
              values?.date && values.date[values.date.length - 6] === "T"
                ? values.date
                : String(`${values?.date}T12:30`)
            }
            displayVal={new Date(
              values?.date && values.date[values.date.length - 6] === "T"
                ? values.date
                : String(`${values?.date}T12:30`)
            ).toLocaleDateString(undefined, {
              month: "short",
              day: "2-digit",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
              timeZone: "UTC",
            })}
          />
          <TOI
            name="fltDur"
            className="constrain-input"
            labeltxt="Duration: "
            type="number"
            step={0.1}
            editable={edit}
            register={register}
            displayVal={values?.fltDur}
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
            displayVal={values?.status}
            register={register}
            defaultValue={values?.status === "CMP" ? "CMP" : "ICMP"}
          />
          <TOI
            name="clearedForSolo"
            labeltxt="Cleared for Solo: "
            type="radio"
            editable={edit}
            options={["N/A", "Yes", "No"]}
            check={values.clearedForSolo}
            register={register}
            displayVal={values.clearedForSolo}
          />
          <TOI
            name="grade"
            labeltxt="Overall Grade: "
            type="radio"
            editable={edit}
            options={["Pass", "Fail"]}
            check={values?.grade}
            register={register}
            displayVal={values.grade}
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
          register={register}
          defaultValue={values?.comments}
          displayVal={values?.comments}
        />
      </div>
    </form>
  );
};
