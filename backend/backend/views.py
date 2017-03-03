from django.http import HttpResponse

def api_view(request):
    return HttpResponse("Hello " + request.META["HTTP_AUTHORIZATION"])
