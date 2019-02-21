from django.middleware.csrf import get_token
from django.http import HttpResponse


def setup(request):

    if request.method == 'GET':

      csrftoken = get_token(request)
      response = HttpResponse()
      response.set_cookie('csrftoken', csrftoken)
      return response
