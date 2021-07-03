import time 
from locust import HttpUser, task, between

class QuickstartUser(HttpUser):
    wait_time = between(1, 2.5)

    @task
    def home(self):
        self.client.get("/")

    @task(3)
    def view_tour(self):
        for id in range(10):
            self.client.get(f"/solicitud/{id}/")
            time.sleep(1)
    
    def on_start(self):
        self.login()
    
    def login(self):
        response = self.client.get("/accounts/login/")
        csrftoken = response.cookies["csrftoken"]
        self.client.post("/accounts/login/",{"username":"corrupted","password":"quimica2000"},headers={"X-CSRFToken": csrftoken})