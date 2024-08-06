from django.contrib.auth.models import User
from django.db.utils import Error
from django.shortcuts import render
from rest_framework.views import Response

# Create your views here.

def register(request):
    if request.method == "POST":
        username = request.POST['username']
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        email = request.POST['email']
        password = request.POST['password']
        password2 = request.POST['password2']
        if not first_name.strip() or not last_name.strip() or not email.strip() or password != password2:
            print("Deu erro fi")
        user = User.objects.create_user(username=username, first_name=first_name, last_name=last_name, email=email, password=password)
        user.save()
        print(username, first_name, last_name, email, password)



def login(request):
    pass

def logout(request):
    pass

def profile(request):
    pass
