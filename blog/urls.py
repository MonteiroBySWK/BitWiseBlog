from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'', views.BlogView, 'blog')

urlpatterns = [
    #path('', views.blog_list, name='blog'),
    #path('create/', views.blog_create, name='create'),
    path('<str:title>/', views.blog_detail, name='post'),
    path('', include(router.urls))
]
