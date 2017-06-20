from django.conf.urls import url, include

from rest_framework.routers import DefaultRouter
from rest_framework_jwt.views import obtain_jwt_token
	
from users.api.views import UsersViewSet, RegistrationView, ChangePasswordView, DeleteAccountView
from items.api.views import ItemViewSet
	
router = DefaultRouter()

router.register(r'items', ItemViewSet, base_name='items')
router.register(r'users', UsersViewSet, base_name='users')

urlpatterns = [
    url(r'^token/', obtain_jwt_token),
    url(r'^register/', RegistrationView.as_view()),
    url(r'^change_password/', ChangePasswordView.as_view()),
    url(r'^delete_account/', DeleteAccountView.as_view()),
]

urlpatterns += router.urls