
const nbValues = 12;
const defaultValue = 1;
const MIN_VALUE = 0;
const MAX_VALUE = 10;


const allLabels = new Array(nbValues).fill(defaultValue).map( (_,i) => String.fromCharCode('A'.charCodeAt(0)+i));
//const allLabels = ['J','F','M','A','M','J','J','A','S','O','N','D'];
const socket = io();
socket.on('nombre choisi',nombre=>updateData(myChart,allLabels[11],nombre));
// l'objet Chart
let myChart;
const setup = () => {
const ctxt = document.getElementById('myChart').getContext('2d');

  myChart = new Chart(ctxt, {
    type: 'bar',
    data: {
        labels: allLabels,
        datasets: [{
            label : `mes ${nbValues} dernières données`,
            data :  new Array(nbValues).fill(defaultValue),
            backgroundColor: 'rgba(128,255,128,0.5)',
            borderColor: 'rgba(0, 0, 0, 1)',
            borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        y: {
              min: MIN_VALUE,
              max: MAX_VALUE
            }
      }
    }
  });
}
const updateData=(chart,label,data)=> {
  chart.data.labels.unshift(label);
  chart.data.datasets[0].data.unshift(data);
  chart.data.datasets[0].data.pop();
  chart.data.labels.pop();
  
  chart.update();
}

window.addEventListener('DOMContentLoaded', setup);
