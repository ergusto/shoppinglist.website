from django.views.generic.base import TemplateView
from django.http import HttpResponseBadRequest
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt

# Create your views here.

class HtmlView(TemplateView):
    template_name = 'index.html'

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        if request.is_ajax():
            return HttpResponseBadRequest()
        return super(HtmlView, self).dispatch(request, *args, **kwargs)
