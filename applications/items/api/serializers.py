from django.core.exceptions import ObjectDoesNotExist
from rest_framework import serializers

from items.models import Item

class ItemSerializer(serializers.ModelSerializer):

    class Meta:
        model = Item
        fields = ('id', 'user', 'title', 'description', 'url', 'complete', 'date', 'modified')
        read_only_fields = ('id', 'user', 'date', 'modified')
