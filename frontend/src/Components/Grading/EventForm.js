import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import TOI from "./TextOrInput";
import { updateGradesheet } from "../../Store/grades";

export const EventForm = ({
  edit,
  values,
  gradesheetId,
  username,
  evt_code,
}) => {
  //The useForm hook helps to track inputs using an 'uncontrolled' approach. Only after submit are values checked. However this helps to prevent excessive re-rendering of the entire form when only one input is being changed.
  const {
    register,
    handleSubmit,
    reset,
    formState: { submitStatus },
  } = useForm({ defaultValues: values });

  const [isLoaded, setisLoaded] = useState(false);
  const [dataSubmission, setDataSubmission] = useState({});

  //Resets form fields onLoad, in case user navigates from another gradesheet
  useEffect(() => {
    if (!isLoaded) {
      reset({ ...dataSubmission });
      setisLoaded(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    //filter data
    const filteredData = {};
    for (let key in data) {
      //Conversion of number strings into numbers
      let val = Number(data[key]) ? Number(data[key]) : data[key];
      //Only send new data to db
      if (val !== values[key]) {
        filteredData[key] = val;
      }
    }
    //Send data to redux to update db & app state
    await dispatch(
      updateGradesheet(filteredData, gradesheetId, username, evt_code)
    );
    setDataSubmission(data);
  };

  //Reset Event Details Form if data submission was successful
  useEffect(() => {
    if (submitStatus) {
      reset({ ...dataSubmission });
    }
  }, [submitStatus, dataSubmission, reset]);

  return (
    <form
      className="row"
      id="event-details-form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="col-12">
        <h5 className="mt-2">Flight Lesson</h5>
        <h6>Instructor</h6>
        <div className="event-details-section">
          <TOI
            name="instructor_last_name"
            className="constrain-input"
            labeltxt="Last Name: "
            type="text"
            editable={false}
            register={register}
            displayVal={values?.instructor_last_name}
            defaultValue={values?.instructor_last_name}
            placeholder="Last Name"
          />
          <TOI
            name="instructor_first_name"
            className="constrain-input"
            labeltxt="First Name: "
            type="text"
            editable={false}
            register={register}
            displayVal={values.instructor_first_name}
            defaultValue={values?.instructor_first_name}
            placeholder="First Name"
          />
          <TOI
            name="date"
            className="constrain-input"
            labeltxt="Start Date: "
            type="date"
            editable={edit}
            register={register}
            defaultValue={
              values?.date && values.date[values.date.length - 6] === "T"
                ? values.date
                : String(`${values?.date}`)
            }
            displayVal={new Date(
              values?.date && values.date[values.date.length - 6] === "T"
                ? values.date
                : String(`${values?.date}`)
            ).toLocaleDateString("en-US", {
              month: "short",
              day: "2-digit",
              year: "numeric",
              timeZone: "UTC",
            })}
          />
          <TOI
            name="hours"
            className="constrain-input"
            labeltxt="Duration: "
            type="number"
            step={0.1}
            editable={false}
            register={register}
            displayVal={values?.hours}
            defaultValue={
              typeof values?.hours === "number"
                ? values.hours
                : Number(values.hours)
            }
          />
        </div>
        <h5>Details</h5>
        <div className="event-details-section">
          <TOI
            name="media_type"
            labeltxt="Media Type: "
            type="select"
            editable={false}
            options={["TH-57C", "Option 2", "Option 3"]}
            displayVal={values?.media_type}
            register={register}
            defaultValue={values?.media_type}
          />
          <TOI
            name="status"
            labeltxt="Status: "
            type="select"
            editable={edit}
            options={["CMP", "ICMP"]}
            displayVal={values?.status}
            register={register}
            defaultValue={values?.status}
          />
          <TOI
            name="grade"
            labeltxt="Overall Grade: "
            type="radio"
            editable={edit}
            options={["PASS", "FAIL"]}
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
