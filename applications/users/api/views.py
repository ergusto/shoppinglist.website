from django.core import signing
from django.conf import settings
from django.contrib.auth import get_user_model
from django.template.loader import render_to_string
from django.contrib.sites.shortcuts import get_current_site

from rest_framework import viewsets, permissions, parsers, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer
from rest_framework.generics import CreateAPIView, GenericAPIView
from rest_framework.views import APIView

from rest_framework_jwt.views import JSONWebTokenAPIView
from rest_framework_jwt.settings import api_settings

from .serializers import UserSerializer, SimpleUserSerializer, CurrentPasswordSerializer, ChangePasswordSerializer

User = get_user_model()

jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

class UsersViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    permission_classes = (IsAuthenticated,)
    page_size = 10

    def get_queryset(self):
        return User.objects.filter(is_active=True)

    def get_serializer_class(self):
        if self.action == 'list':
            return SimpleUserSerializer
        else:
            return self.serializer_class

class RegistrationView(CreateAPIView):
    serializer_class = UserSerializer
    permission_classes = (
        permissions.AllowAny,
    )

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        
        payload = jwt_payload_handler(user)
        token = jwt_encode_handler(payload)

        saved_user_serializer = UserSerializer(user)

        response = {
            'user': saved_user_serializer.data,
            'token': token,
        }

        return Response(response, status=status.HTTP_201_CREATED)

class ChangePasswordView(GenericAPIView):
    serializer_class = ChangePasswordSerializer
    permission_classes = (IsAuthenticated,)

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.request.user.set_password(serializer.data['new_password'])
        self.request.user.save()

        return Response(status=status.HTTP_204_NO_CONTENT)

class DeleteAccountView(GenericAPIView):
    serializer_class = CurrentPasswordSerializer
    permission_classes = (IsAuthenticated,)

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.request.user.delete()

        return Response(status=status.HTTP_204_NO_CONTENT)