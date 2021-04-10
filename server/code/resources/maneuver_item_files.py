# python imports
from flask_restful import Resource

# project imports
from models.blocks import BlockModel
from models.events import EventModel
from models.maneuver_item_files import ManeuverItemFileModel
from models.stages import StageModel

class StageManeuvers(Resource):

    def get(self, stage):

        # get stage
        stage_model = StageModel.objects(stage=stage).first()
        # get blocks
        blocks = [block.as_dict() for block in BlockModel.objects(stage=stage_model['stage_id'])]
        block_ids = [block['block_id'] for block in blocks]
        # get events
        events = [event.as_dict() for event in EventModel.objects(block__in=block_ids)]
        event_ids = [event['event_id'] for event in events]
        # get maneuvers
        maneuvers = [maneuver.as_dict() for maneuver in ManeuverItemFileModel.objects(event__in=event_ids)]
        # add event details to maneuvers
        for maneuver in maneuvers:
            maneuver_event = list(filter(lambda event: event['event_id'] == maneuver['event'], events))[0]
            maneuver['event'] = maneuver_event

        # return stage maneuvers or 404 (not found)
        if maneuvers:
            return {'maneuvers': maneuvers}
        return {'message': 'Maneuvers for stage not found'}, 404