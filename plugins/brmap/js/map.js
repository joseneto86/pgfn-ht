// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.
var data = [
    ['br-sp', 622],
    ['br-ma', 80],
    ['br-pa', 210],
    ['br-sc', 270],
    ['br-ba', 315],
    ['br-ap', 50],
    ['br-ms', 90],
    ['br-mg', 320],
    ['br-go', 180],
    ['br-rs', 200],
    ['br-to', 89],
    ['br-pi', 90],
    ['br-al', 87],
    ['br-pb', 92],
    ['br-ce', 280],
    ['br-se', 71],
    ['br-rr', 79],
    ['br-pe', 250],
    ['br-pr', 230],
    ['br-es', 198],
    ['br-rj', 415],
    ['br-rn', 95],
    ['br-am', 160],
    ['br-mt', 170],
    ['br-df', 98],
    ['br-ac', 60],
    ['br-ro', 30]
];

// Create the chart
Highcharts.mapChart('container-mapa-brasil', {
    chart: {
        map: 'countries/br/br-all'
    },

    title: {
        text: 'Dívidas por UF'
    },

    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },

    colorAxis: {
        min: 0
    },

    series: [{
        data: data,
        name: 'Random data',
        states: {
            hover: {
                color: '#dc3545'
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }]
});