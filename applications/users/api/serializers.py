from django.contrib.auth import get_user_model
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