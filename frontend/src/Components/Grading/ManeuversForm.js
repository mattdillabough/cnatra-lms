import React from "react";
import { useForm } from "react-hook-form";

import Maneuver from "./Maneuver";

function ManeuversForm({ maneuvers, edit }) {
  const { register, handleSubmit } = useForm({ defaultValues: maneuvers });

  return (
    <form id="maneuvers-form">
      {/* Maps out event's maneuvers */}
      {maneuvers?.map((maneuver) => {
        return (
          <Maneuver
            key={maneuver.maneuver_item_file.maneuver.maneuver_id}
            maneuver={maneuver}
            editable={edit}
          />
        );
      })}
    </form>
  );
}

export default ManeuversForm;
