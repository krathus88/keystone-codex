import os

from django.http import HttpResponse
from ninja import NinjaAPI

from user.api import router as user_router


api = NinjaAPI(csrf=False)  # TODO: turn csrf = True (need frontend config)


if os.getenv != "development":
    api.docs_url = None


api.add_router("user", user_router, tags=["User"])


def empty_favicon(request):
    return HttpResponse(status=204)


@api.get("/")
def hello(request):
    return "Hello world"
