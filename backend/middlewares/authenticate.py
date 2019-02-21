from django.utils.deprecation import MiddlewareMixin
from django.http import HttpResponseForbidden, HttpResponseBadRequest
from django.conf import settings

import jwt

class AuthenticateMiddleware(MiddlewareMixin):

    def process_request(self, request):

        is_auth_request = request.get_full_path().startswith('/auth/')
        is_csrf_request = request.get_full_path().startswith('/csrf/')

        if not is_auth_request and not is_csrf_request:
      
            authorization = request.META.get('HTTP_AUTHORIZATION').strip('Bearer ')

            if not authorization:
                return HttpResponseForbidden('Un-authenticated request')

            try:
                jwt.decode(authorization, settings.SECRET)
            except jwt.exceptions.DecodeError:
                return HttpResponseForbidden('Invalid authorization')
            except jwt.ExpiredSignatureError:
                return HttpResponseForbidden('Authorization has expired')
                
