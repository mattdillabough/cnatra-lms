# python imports
from flask_restful import Resource

# project imports
from models.stages import StageModel

class Stages(Resource):

  def get(self):

    return {'stages': [stage.as_dict() for stage in StageModel.objects()]}
