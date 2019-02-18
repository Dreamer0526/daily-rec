from django.http import HttpResponse, HttpResponseBadRequest
from django.db.utils import IntegrityError
from .models import User
import json


def register(request):
    if request.method != 'POST':
        return HttpResponse()

    body = str(request.body, encoding='utf-8')
    user_info = eval(body)

    try:
        user = User(**user_info)
        user.save()
    except IntegrityError as err:
        print(err)
        return HttpResponseBadRequest(err)
    else:
        return HttpResponse()


def login(request):
    if request.method != 'POST':
        return HttpResponse()

    body = str(request.body, encoding='utf-8')
    user_info = eval(body)

    name = user_info.get('user_name', '')
    pwd = user_info.get('password', '')

    if not name:
        return HttpResponseBadRequest('User name is required')
    if not pwd:
        return HttpResponseBadRequest('Password is required')

    result = User.objects.filter(user_name=name, password=pwd).count()
    if result == 1:
        return HttpResponse()
    else:
        response = {}
        response['errorVerbose'] = 'User name and/or password are wrong'
        return HttpResponseBadRequest(json.dumps(response))
