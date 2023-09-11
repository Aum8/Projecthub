import json
from django.http import JsonResponse
from django.http import HttpResponse
from django.shortcuts import render


def aboutUs(request):
    return HttpResponse("hello hello there")


def home(request):
    return render(request, "home.html")

def project(request):
    return render(request, "project.html")


def addprojects(request):
    return render(request, "addprojects.html")

def account(request):
    return render(request, "account.html")


def save_form_data(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body.decode('utf-8'))
            # You can now process and save 'data' to a JSON file
            with open('D:\smartindiahackathon\static\js\data.json', 'w') as file:
                json.dump(data, file)
            return JsonResponse({'message': 'Data saved successfully'})
        except json.JSONDecodeError:
            return JsonResponse({'message': 'Invalid JSON data'}, status=400)
    else:
        return JsonResponse({'message': 'Invalid request method'}, status=405)

def save_account_data(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body.decode('utf-8'))
            # You can now process and save 'data' to a JSON file
            with open('D:\smartindiahackathon\static\js\user.json', 'w') as file:
                json.dump(data, file)
            return JsonResponse({'message': 'Data saved successfully'})
        except json.JSONDecodeError:
            return JsonResponse({'message': 'Invalid JSON data'}, status=400)
    else:
        return JsonResponse({'message': 'Invalid request method'}, status=405)
