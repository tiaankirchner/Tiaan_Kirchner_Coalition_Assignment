import os
from dotenv import load_dotenv

load_dotenv()

import requests
from base64 import b64encode

api_url = os.getenv('API_URL')

auth = {
    "username": os.getenv("AUTH_USERNAME"),
    "password": os.getenv("AUTH_PASSWORD"),
}

def tokenize(username, password):
    return b64encode(f"{username}:{password}".encode('utf-8')).decode("ascii")
    return token

headers = {
  'Authorization': f'Basic {tokenize(auth['username'], auth['password'])}'
}

def all():
    return requests.request("GET", api_url, headers=headers).json()

def findByName(name: str):
    try:
        return [person for person in all() if person['name'] == name][0]
    except:
        return None
