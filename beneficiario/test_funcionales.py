from django.test import LiveServerTestCase
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import time

class SolicitudViewsFunctionalTestCase(LiveServerTestCase):
    def setUp(self):
        options= Options()
        options.headless= True
        options.add_argument("--window-size=1920,1080")
        self.driver= webdriver.Chrome(options=options)

    def tearDown(self):
        self.driver.quit()

    def test_home(self):
        self.driver.get("http://localhost:8000/")
        self.assertEqual(self.driver.title,"Fundacion Protesis 3D")
        assert "Bienvenido a la Fundacion Protesis 3D" in self.driver.page_source


    def test_creaciondeSolicitud(self):
        self.driver.get("http://localhost:8000/")
        self.driver.set_window_size(1920, 1040)
        self.driver.find_element(By.LINK_TEXT, "Iniciar Sesion").click()
        self.driver.find_element(By.ID, "id_username").click()
        self.driver.find_element(By.ID, "id_username").send_keys("corrupted")
        self.driver.find_element(By.ID, "id_password").click()
        self.driver.find_element(By.ID, "id_password").send_keys("quimica2000")
        self.driver.find_element(By.CSS_SELECTOR, ".btn").click()
        self.driver.find_element(By.LINK_TEXT, "Enviar Solicitud").click()
        self.driver.find_element(By.ID, "id_nombre").click()
        self.driver.find_element(By.ID, "id_nombre").send_keys("Diego")
        self.driver.find_element(By.ID, "id_rut").click()
        self.driver.find_element(By.ID, "id_rut").send_keys("20.419.463-7")
        self.driver.find_element(By.ID, "id_telefono").click()
        self.driver.find_element(By.ID, "id_telefono").send_keys("992048648")
        self.driver.find_element(By.ID, "id_email").click()
        self.driver.find_element(By.ID, "id_email").send_keys("diego.lopez2000@hotmail.com")
        self.driver.find_element(By.ID, "id_region").click()
        dropdown = self.driver.find_element(By.ID, "id_region")
        dropdown.find_element(By.XPATH, "//option[. = 'Región del Bio-Bio']").click()
        self.driver.find_element(By.ID, "id_region").click()
        self.driver.find_element(By.CSS_SELECTOR, "td:nth-child(1)").click()
        self.driver.find_element(By.CSS_SELECTOR, ".btn").click()
        self.driver.save_screenshot("trazas/traza_test_creacionSolicitud.png")
        with open("trazas/traza_test_creacionSolicitud.html","w") as file:
            file.write(self.driver.page_source)
        self.driver.find_element(By.ID, "navbarDropdown").click()
        self.driver.find_element(By.LINK_TEXT, "Cerrar Sesion").click()
        
    def test_solicitudes(self):
        self.driver.get("http://localhost:8000/")
        self.driver.set_window_size(1920, 1040)
        self.driver.find_element(By.LINK_TEXT, "Iniciar Sesion").click()
        self.driver.find_element(By.ID, "id_username").click()
        self.driver.find_element(By.ID, "id_username").click()
        self.driver.find_element(By.ID, "id_username").send_keys("admin")
        self.driver.find_element(By.ID, "id_password").send_keys("quimica2000")
        self.driver.find_element(By.CSS_SELECTOR, ".btn").click()
        self.driver.find_element(By.LINK_TEXT, "Solicitudes").click()
        self.driver.find_element(By.ID, "navbarDropdown").click()
        self.driver.find_element(By.LINK_TEXT, "Cerrar Sesion").click()