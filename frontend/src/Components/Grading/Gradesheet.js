//Event Grade sheet

//External Imports
import React, { useState, useEffect } from "react";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";

//Internal imports
import Maneuver from "./Maneuver";
import { EventForm } from "./useEventForm";
import { mockGradesheetData } from "./mockGradesheetData";
import { getGradesheet } from "../../Store/grades";

function Gradesheet({ gradeDetails, fetchGradesheet, ...props }) {
  //MANAGING STATE
  const [dropdown, setDropDown] = useState(false);
  const toggleDropDown = () => {
    setDropDown(!dropdown);
  };
  //Controls Event Detail edits
  const [edit, setEditMode] = useState(false);
  const toggleEditMode = () => setEditMode(!edit);

  //Controls Maneuver edits
  const [maneuverEdit, setManeuverEdit] = useState(false);
  const toggleManeuversMode = () => setManeuverEdit(!maneuverEdit);

  //Accessing REDUX state & methods
  const dispatch = useDispatch();
  const details = useSelector((state) => state.grades.details);

  //FETCH gradesheet data
  useEffect(() => {
    async function getData() {
      await dispatch(getGradesheet(props.match.params.gradesheetId));
    }
    getData();
  }, [dispatch, props.match.params.gradesheetId]);

  // MANAGE FORM DATA
  const [values, setValues] = useState({
    grade: details?.grade_sheet?.grade,
    clearedForSolo: mockGradesheetData.clearedForSolo,
    instructor_first_name: details?.grade_sheet.instructor.first_name,
    instructor_last_name: details?.grade_sheet.instructor.last_name,
    date: details?.grade_sheet.date,
    hours: details?.grade_sheet.event.hours,
    media_type: details?.grade_sheet.event.media_type.media_type,
    status: details?.grade_sheet.status,
    comments: details?.grade_sheet.comments,
  });

  useEffect(() => {
    setValues({
      grade: details?.grade_sheet?.grade,
      clearedForSolo: mockGradesheetData.clearedForSolo,
      instructor_first_name: details?.grade_sheet.instructor.first_name,
      instructor_last_name: details?.grade_sheet.instructor.last_name,
      date: details?.grade_sheet?.date,
      hours: details?.grade_sheet.event.hours,
      media_type: details?.grade_sheet.event.media_type.media_type,
      status: details?.grade_sheet.status,
      comments: details?.grade_sheet.comments,
    });
    console.log("Updated!");
  }, [details]);

  // Displays LOADING page if props from redux haven't been received yet
  if (!details?.grade_sheet.grade) {
    return <div className="Gradesheet container">Loading...</div>;
  }

  return (
    <>
      <div className="Gradesheet-wrap container-fluid">
        <div className="Gradesheet container">
          <h2
            className="student-name"
            title="Student Name"
          >{`${mockGradesheetData.student.rank} ${details.grade_sheet.student.last_name}, ${details.grade_sheet.student.first_name}`}</h2>
          <div className="d-flex justify-content-between flex-column flex-md-row">
            <h4 className="event-identifier" title="Event Identifier and title">
              {`[${details.grade_sheet.event.event_code}][${details.grade_sheet.event.event_in_block}] - ${details.grade_sheet.event.title}` ||
                "[Event ID] - [Event Name]"}
            </h4>
            <div className="edit-controls align-self-center align-self-md-end">
              <div className="btn-group">
                {edit ? (
                  <button
                    type="submit"
                    form="event-details-form"
                    title="Save event details"
                  >
                    Save
                  </button>
                ) : (
                  ""
                )}
                <button
                  type="button"
                  onClick={toggleEditMode}
                  title={
                    edit === true ? "Cancel changes" : "Edit event details"
                  }
                >
                  {edit === true ? "Cancel" : "Edit"}
                </button>
              </div>
            </div>
          </div>
          <div className="gradesheet-submission">
            <div title="Date submitted">
              {new Date(details?.grade_sheet.date).toLocaleDateString("en-US", {
                month: "long",
                day: "2-digit",
                year: "numeric",
                timeZone: "UTC",
              })}
            </div>
            <div title="Gradesheet submitter">
              <strong>Submitted by: </strong>
              {`${mockGradesheetData.instructor.rank} ${details.grade_sheet.instructor.last_name}, ${details.grade_sheet.instructor.first_name}`}
            </div>
          </div>
          <div className="gradesheet-details container-fluid">
            <div
              className={
                details.grade_sheet.status === "CMP" &&
                details.grade_sheet.grade === "PASS"
                  ? "details-header positive-status"
                  : "details-header pending-status"
              }
              title="Event Status | Grade"
            >
              <div>
                {details.grade_sheet.status === "CMP"
                  ? "Complete"
                  : "Incomplete"}{" "}
                |{" "}
                {details.grade_sheet.grade === "PASS"
                  ? "Pass"
                  : "Unsatisfactory"}
              </div>
              <div className="col-1 event-dropdown">
                <button
                  title="Toggle Event Details"
                  type="button"
                  className="toggle-dropdown btn"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseEvent"
                  aria-expanded="false"
                  aria-controls="collapse"
                  onClick={toggleDropDown}
                >
                  {dropdown ? <RiArrowUpSFill /> : <RiArrowDownSFill />}
                </button>
              </div>
            </div>
            <div
              className={
                dropdown
                  ? "details-body collapse show"
                  : "details-body collapse"
              }
              id="collapseEvent"
              aria-expanded="false"
              aria-controls="collapse"
            >
              {/* EVENT DETAILS FORM */}
              {details?.grade_sheet?.grade ? (
                <EventForm
                  edit={edit}
                  values={values}
                  gradesheetId={props.match.params.gradesheetId}
                />
              ) : (
                <div>Loading...</div>
              )}
            </div>
          </div>
          <div className="d-flex justify-content-between flex-column flex-md-row">
            <h4 className="event-identifier">Maneuvers</h4>
            <div className="edit-controls align-self-center align-self-md-end">
              <div className="btn-group">
                {maneuverEdit ? (
                  <button
                    type="submit"
                    form="maneuvers-form"
                    title="Save event details"
                  >
                    Save
                  </button>
                ) : (
                  ""
                )}
                <button
                  type="button"
                  onClick={toggleManeuversMode}
                  title={
                    maneuverEdit === true
                      ? "Cancel changes"
                      : "maneuverEdit event details"
                  }
                >
                  {maneuverEdit === true ? "Cancel" : "Edit"}
                </button>
              </div>
            </div>
          </div>
          {/* Maps out event's maneuvers */}
          {details?.grade_sheet.grade_sheet_maneuvers.map((maneuver) => {
            return (
              <Maneuver
                key={maneuver.maneuver_item_file.maneuver.maneuver_id}
                maneuver={maneuver}
                editable={maneuverEdit}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Gradesheet;
