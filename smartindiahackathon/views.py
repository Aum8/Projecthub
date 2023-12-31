import json
from django.http import JsonResponse
from django.http import HttpResponse
from django.shortcuts import render
import nltk

from pathlib import Path
from smartindiahackathon.plagCheck import check_for_plagiarism

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


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


def login(request):
    return render(request, "login.html")

# C:\\Users\\Aum\\Downloads\\Projecthub-1\\static\\js\\data.json


def save_form_data(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body.decode('utf-8'))
            # You can now process and save 'data' to a JSON file
            with open('D:/Projecthub/static/js/data.json', 'r') as file:
                existing_data = json.load(file)

            # Append the new data to the existing data
            existing_data.append(data)

            # Write the updated data back to the file with a comma and newline
            with open('D:/Projecthub/static/js/data.json', 'w') as file:
                json.dump(existing_data, file, indent=2)
        except json.JSONDecodeError:
            return JsonResponse({'message': 'Invalid JSON data'}, status=400)
    else:
        return JsonResponse({'message': 'Invalid request method'}, status=405)

# C:\\Users\\Aum\\Downloads\\Projecthub-1\\static\\js\\user.json


def save_account_data(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body.decode('utf-8'))
            # You can now process and save 'data' to a JSON file
            with open('D:\\Projecthub\\static\\js\\user.json', 'r') as file:
                existing_data = json.load(file)

            # Append the new data to the existing data
            existing_data.append(data)

            # Write the updated data back to the file with a comma and newline
            with open('D:\\Projecthub\\static\\js\\user.json', 'w') as file:
                json.dump(existing_data, file, indent=2)

            return JsonResponse({'message': 'Data saved successfully'})
        except json.JSONDecodeError:
            return JsonResponse({'message': 'Invalid JSON data'}, status=400)
    else:
        # Return an HTTP response for other request methods
        return HttpResponse('Method not allowed', status=405)
