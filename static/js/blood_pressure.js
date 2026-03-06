function person_history_data(person, month_count) {
  const months = []
  const systolic = [] 
  const diastolic = [] 
  let i = 0

  for(const diagnosis of person.diagnosis_history){
    months.push(diagnosis.month.substring(0, 3) + ", " + diagnosis.year);
    systolic.push(diagnosis.blood_pressure.systolic.value);
    diastolic.push(diagnosis.blood_pressure.diastolic.value);
    i++;
    if (i == month_count){
      break
    }
  }

  months.reverse();
  systolic.reverse();
  diastolic.reverse();

  return {
    months,
    systolic,
    diastolic,
  }
}

const chart_data = (person_history_data(window.patient, 6))

new Chart(
    document.getElementById("bp_chart"),
    {
        type: "line",
        data: {
            labels: chart_data.months,
            datasets: [
                {
                    label: "Systolic",
                    data: chart_data.systolic,
                    tension: 0.4,
                    borderColor: '#E66FD2',
                    pointRadius: 6,
                    pointBackgroundColor: '#E66FD2',
                    pointBorderColor: '#F4F0FE',
                    pointBorderWidth: 2,
                },
                {
                    label: "Diastolic",
                    data: chart_data.diastolic,
                    tension: 0.4,
                    borderColor: '#8C6FE6',
                    pointRadius: 6,
                    pointBackgroundColor: '#8C6FE6',
                    pointBorderColor: '#F4F0FE',
                    pointBorderWidth: 2,
                }
            ]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                }
            },
            responsive: true,
            scales: {
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        },
    }
)