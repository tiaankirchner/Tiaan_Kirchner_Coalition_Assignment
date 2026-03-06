# Tech.Care – Patient Dashboard

The provided Coalition template

![The provided Coalition template](/screenshots/Coalition_adobe_template.png?raw=true "Coalition provided template")

This my recreation of the adobe XD template

![This my recreation of the adobe XD template](/screenshots/Coalition_created_page.png?raw=true "My re-creation")

Please note: No interactability was required

## Overview

Tech.Care is a Flask-based web application that renders a patient health dashboard using data retrieved from an external API. The application displays patient information, diagnosis history, lab results, and a dynamic blood pressure chart.

This project was built from an Adobe XD design mock-up and structured using reusable template components with a clear separation between backend logic and frontend rendering.

---

## Features

- Patient list sidebar
- Diagnosis history section
- Systolic and diastolic blood pressure tracking
- Dynamic chart.js line graph
- Diagnostic list section
- Lab results section
- Reusable layout and component-based template structure
- API-based data fetching with Basic Authentication
- Custom CSS theme with defined design tokens

---

## Tech Stack

### Backend
- Python
- Flask
- Requests

### Frontend
- HTML (Jinja2 templating)
- Bootstrap 5
- Chart.js
- Custom CSS
- Vanilla JavaScript


---

## Backend Logic

### app.py

- Creates the Flask application
- Defines the root route /
- Fetches:
  - All patients
  - A selected patient (e.g., "Jessica Taylor")
  - Current user
- Passes patient data to the frontend
- Injects JSON safely into JavaScript for chart rendering

### patient.py

- Loads environment variables
- Handles Basic Authentication using base64 encoding
- Fetches patient data from an external API
- Provides:
  - all() → returns full patient list
  - findByName(name) → returns specific patient object

---

## Frontend Architecture

### Layout System

- layout.html serves as the base template
- Uses Jinja2 {% block %} for content injection
- Navbar included via {% include %}

### Component-Based Structure

The index page composes multiple reusable components:

- Patient list (left column)
- Diagnosis history + chart (center column)
- Diagnostic list (center column)
- Patient info (right column)
- Lab results (right column)

This keeps templates modular and maintainable.

---


pip install -r requirements.txt
