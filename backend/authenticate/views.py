from django.http import HttpResponse, HttpResponseBadRequest
from django.db.utils import IntegrityError
from django.core import serializers
from django.conf import settings

from decorators.http import post_required
from .models import User

import datetime
import json
import jwt


@post_required
def register(request):

    body = request.body.decode('utf-8')  
    user_info = eval(body)

    try:
        user = User(**user_info)
        user.save()

    except IntegrityError as err:
        return HttpResponseBadRequest(err)

    else:
        return HttpResponse()


@post_required
def login(request):
  
    body = request.body.decode('utf-8')
    user_info = eval(body)

    name = user_info.get('user_name', '')
    pwd = user_info.get('password', '')

    if not name:
        return genericHttpResponseBadRequest('User name is required')
    if not pwd:
        return genericHttpResponseBadRequest('Password is required')

    queryset = User.objects.filter(user_name=name, password=pwd)

    if queryset.count() == 1:
        user = list(queryset)[0]
        payload = user.as_dict()
        payload['iat'] = datetime.datetime.utcnow()
        payload['exp'] = datetime.datetime.utcnow() + datetime.timedelta(minutes=30)
        encoded = jwt.encode(payload, settings.SECRET)
        response = json.dumps({
          'access_token': encoded.decode("utf-8") 
        })
        return HttpResponse(response)
    else:
        return genericHttpResponseBadRequest('User name and/or password are wrong')


def genericHttpResponseBadRequest(errorVerbose):
    response = json.dumps({
      'errorVerbose': errorVerbose
    })
    return HttpResponseBadRequest(response)
