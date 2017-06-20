from django.core import exceptions
from django.contrib.auth import get_user_model
from django.contrib.auth import password_validation 
from rest_framework import serializers
from rest_framework.serializers import ModelSerializer, CharField, EmailField
from rest_framework.validators import UniqueValidator

UserModel = get_user_model()

class UserSerializer(ModelSerializer):
    email = EmailField(validators=[UniqueValidator(queryset=UserModel.objects.all(), message='A user with that email address already exists')])

    class Meta:
        model = UserModel
        fields = ('id', 'email', 'password')
        read_only_fields = ('id',)
        extra_kwargs = {
            'password': { 'write_only': True },
        }

    def create(self, validated_data):
        user = UserModel.objects.create(
            email=validated_data['email'],
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

class SimpleUserSerializer(ModelSerializer):

    class Meta:
        model = UserModel
        fields = ('id', 'first_name', 'last_name', 'full_name')

class CurrentPasswordSerializer(serializers.Serializer):
    current_password = serializers.CharField()

    def validate_current_password(self, value):
        if not self.context['request'].user.check_password(value):
            raise serializers.ValidationError('This password is incorrect.')
        return value

class ChangePasswordSerializer(CurrentPasswordSerializer):
    new_password = serializers.CharField()

    def validate_new_password(self, value):
        errors = None
        try:
            password_validation.validate_password(password=value, user=self.context['request'].user)
        except exceptions.ValidationError as error:
            errors = list(error.messages)

        if errors:
            raise serializers.ValidationError(errors[0])
        return value