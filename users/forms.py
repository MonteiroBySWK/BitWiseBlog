from django.forms import ModelForm, fields
from django.contrib.auth.models import User

class registerForm(ModelForm):
    class Meta:
        model = User
        fields = "__all__"

