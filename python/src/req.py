import requests

URL = "http://httpbin.org/json"
r = requests.get(URL)
print("Response Code:", r.status_code)
print("Response Headers:\n", r.headers)
print("Response Content:\n", r.text)
