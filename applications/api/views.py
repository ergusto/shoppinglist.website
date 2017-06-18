from django.views.generic.base import TemplateView
from django.http import HttpResponseBadRequest

# Create your views here.

class HtmlView(TemplateView):
    template_name = 'index.html'

    def dispatch(self, request, *args, **kwargs):
        if request.is_ajax():
            return HttpResponseBadRequest()
        return super(HtmlView, self).dispatch(request, *args, **kwargs)
