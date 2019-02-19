from django.http import HttpResponseBadRequest


def post_required(f):
    def wrap(request, *args, **kwargs):
        if not request.method == 'POST':
            return HttpResponseBadRequest()
        return f(request, *args, **kwargs)

    wrap.__doc__ = f.__doc__
    wrap.__name__ = f.__name__
    return wrap
