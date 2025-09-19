# Frontend - Proyecto de Scraping de Tipos de Cambio 💱

Este repositorio contiene el **frontend** del proyecto de scraping de tipos de cambio, desarrollado con **React** y **Ant Design**.  
Está conectado con un **backend** realizado en **Django + Celery + Selenium**, el cual se encuentra en un repositorio separado:  
👉 https://github.com/Kenneth-Luera/ScrapingBank  

El proyecto está desplegado en **AWS**:  
- **Frontend:** S3  
- **Backend:** EC2  

Puedes probar la demo del frontend aquí:  
👉 http://culpritfront.s3-website.us-east-2.amazonaws.com  


## ⚙️ Requisitos previos

Para levantar este proyecto necesitas tener **Node.js** instalado.  

### 🔹 Instalación en Linux
```bash
# Actualiza paquetes
sudo apt update && sudo apt upgrade -y

# Instala dependencias necesarias
sudo apt install curl -y

# Descarga e instala Node.js LTS (20.x por ejemplo)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Verifica la instalación
node -v
npm -v
```
### 🔹 Instalación en Windows

1. Ve a la página oficial: 👉 https://nodejs.org/

2. Descarga la versión LTS (Long Term Support) (recomendada).

3. Una vez instalada, abre la terminal y verifica:
```bash
node -v
npm -v
```
### 📥 Instalación del proyecto

1. Clona este repositorio:
```bash
git clone [agregar link del repositorio]
```
(puede ser SSH o HTTPS según lo que uses)

2. Entra a la carpeta raíz del proyecto:
```bash
cd nombre-del-proyecto
```

3. Instala las dependencias necesarias:
```bash
npm install
```
Esto descargará todas las librerías y paquetes que el proyecto necesita para funcionar.

### Configuración

Dentro de la carpeta:
```bash
src/api/api_scraping.js
```
Encontrarás comentarios en el código que indican dónde puedes cambiar las direcciones del backend.
Por defecto, están configuradas para apuntar al backend en AWS, pero puedes ajustarlas a tu entorno local si lo deseas.

### ▶️ Levantar el proyecto

Una vez configurado todo, ejecuta:
```bash
npm run dev
```
Esto iniciará el servidor de desarrollo y podrás visualizar el proyecto en tu navegador 🚀.

### 📌 Notas

El backend es un proyecto independiente, asegúrate de tenerlo corriendo si decides conectarlo en local.

Este frontend utiliza Ant Design para los componentes visuales y está optimizado para conectarse con el scraping automatizado del backend.
