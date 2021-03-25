import React from "react";
import { useForm } from "react-hook-form";

import Maneuver from "./Maneuver";

function ManeuversForm({ maneuvers, edit }) {
  const { register, handleSubmit } = useForm({ defaultValues: maneuvers });

  const submitHandler = (data) => {
    // console.log("Maneuver data submission: ", data);
    const filteredData = {};
    for (let key in data) {
      let newData = {};
      //Conversion of number strings into numbers
      let { grade, comments } = data[key];
      //Only send new data to db
      if (Number(grade) !== Number(maneuvers[key].grade)) {
        newData.grade = Number(grade);
      }
      if (comments !== maneuvers[key].comments) {
        newData.comments = comments;
      }
      if (newData.grade || newData.comments) {
        filteredData[key] = newData;
      }
    }
    console.log("FIltered MAnueveRs: ", filteredData);
  };

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
          />
        );
      })}
    </form>
  );
}

export default ManeuversForm;
