from .models import Post
from django.shortcuts import get_object_or_404
from rest_framework.views import Response
from rest_framework import viewsets
from rest_framework.decorators import APIView, api_view
from .serializers import PostSerializer
# Create your views here.


class BlogView(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    queryset = Post.objects.all()            


@api_view(['GET', 'POST'])
def blog_list(request):
    post = Post.objects.all()
    serializer = PostSerializer(post, many=True)
    return Response(serializer.data)

@api_view(['GET', 'DELETE', 'PUT'])
def blog_detail(request, title):
    queryset = Post.objects.all()
    post = get_object_or_404(queryset, title=title)
    serializer = PostSerializer(post)
    return Response(serializer.data)
