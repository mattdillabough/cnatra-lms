import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import Maneuver from "./Maneuver";
import { updateManeuvers } from "../../Store/grades";
import { toggleManeuverMode } from "../../Store/formControl";

function ManeuversForm({ edit, gradesheetId, expand }) {
  const maneuvers = useSelector(
    (state) => state.grades.details.grade_sheet.grade_sheet_maneuvers
  );

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

  useEffect(() => {
    if (!isLoaded) {
      reset({ ...submittedData });
      setisLoaded(true);
    }
  }, []);

  const dispatch = useDispatch();

  const submitHandler = async (data) => {
    const filteredData = {};

    for (let key in data) {
      let newData = { data: {} };
      //Conversion of number strings into numbers
      let { grade, comments } = data[key];
      //Only send new data to db
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
    console.log("FIltered MAnueveRs: ", filteredData);
    //Send data to redux
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
