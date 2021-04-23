//Find stage if not provided already

function findStage(stageName, stages) {
  let stageCode;
  //Given an array of stage objects
  for (let stage of stages) {
    if (stage.stage_name.toLowerCase() === stageName.toLowerCase()) {
      stageCode = stage;
      break;
    }
  }
  return stageCode;
}

export default findStage;
