from flask import Flask, render_template
import json
import patient
import user

from datetime import datetime

app = Flask(__name__)

@app.route("/")
def index():
    current_patient = patient.findByName("Jessica Taylor")
    patients = patient.all()
    jose = user.current()
    return render_template("index.html", strptime=datetime.strptime, user = jose, current_patient = current_patient, patients = patients, patient_json=json.dumps(current_patient))

