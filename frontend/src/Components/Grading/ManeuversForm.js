import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import Maneuver from "./Maneuver";

import { updateManeuvers } from "../../Store/grades";
import { toggleManeuverMode } from "../../Store/formControl";

//This component handles all the maneuvers displayed in a Gradesheet component
function ManeuversForm({ edit, gradesheetId, expand }) {
  const maneuvers = useSelector(
    (state) => state.grades.maneuvers.grade_sheet_maneuvers
  );

  //Create form instance
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm({
    defaultValues: maneuvers,
  });

  const [isLoaded, setisLoaded] = useState(false);
  const [submittedData, setSubmittedData] = useState({});

  //Resets form fields onLoad, in case user navigates from another gradesheet
  useEffect(() => {
    if (!isLoaded) {
      reset({ ...submittedData });
      setisLoaded(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dispatch = useDispatch();

  const submitHandler = async (data) => {
    const filteredData = {};

    for (let key in data) {
      let newData = { data: {} };
      let { grade, comments } = data[key];
      //Conversion of number strings into numbers
      if (Number(grade) !== Number(maneuvers[key].grade)) {
        newData.data.grade = Number(grade);
      }
      if (comments !== maneuvers[key].comments) {
        newData.data.comments = comments;
      }
      if (newData.data.grade >= 0 || newData.data.hasOwnProperty("comments")) {
        newData.id = maneuvers[key].grade_sheet_maneuver_id;
        filteredData[key] = newData;
      }
    }

    //Send only new data to redux
    await dispatch(updateManeuvers(filteredData, gradesheetId));
    //Close dropdowns
    await dispatch(toggleManeuverMode());
    //Confirm data submission
    setSubmittedData(data);
  };

  //Resets Maneuvers Form if data submission was successful
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ ...submittedData });
    }
  }, [isSubmitSuccessful, submittedData, reset]);

  return (
    <form id="maneuvers-form" onSubmit={handleSubmit(submitHandler)}>
      {/* Maps out event's maneuvers */}
      {maneuvers?.map((maneuver, idx) => {
        return (
          <Maneuver
            key={maneuver.maneuver_item_file.maneuver.maneuver_id}
            idx={idx}
            maneuver={maneuver}
            editable={edit}
            register={register}
            expand={expand}
          />
        );
      })}
    </form>
  );
}

export default ManeuversForm;
