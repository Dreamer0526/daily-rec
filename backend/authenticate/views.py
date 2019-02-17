from django.http import HttpResponse, HttpResponseBadRequest
from django.db.utils import IntegrityError
from .models import User
import json


def register(request):
    if request.method != 'POST':
        return HttpResponse()

    decoded = str(request.body, encoding='utf-8')
    user_info = eval(decoded)

    try:
        user = User(**user_info)
        user.save()
    except IntegrityError as err:
        print(err)
        return HttpResponseBadRequest(err)
    else:
        return HttpResponse()
