// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.
var data = [
    ['in-py', 0],
    ['in-ld', 1],
    ['in-wb', 2],
    ['in-or', 3],
    ['in-br', 4],
    ['in-sk', 5],
    ['in-ct', 6],
    ['in-tn', 7],
    ['in-mp', 8],
    ['in-2984', 9],
    ['in-ga', 10],
    ['in-nl', 11],
    ['in-mn', 12],
    ['in-ar', 13],
    ['in-mz', 14],
    ['in-tr', 15],
    ['in-3464', 16],
    ['in-dl', 17],
    ['in-hr', 18],
    ['in-ch', 19],
    ['in-hp', 20],
    ['in-jk', 21],
    ['in-kl', 22],
    ['in-ka', 23],
    ['in-dn', 24],
    ['in-mh', 25],
    ['in-as', 26],
    ['in-ap', 27],
    ['in-ml', 28],
    ['in-pb', 29],
    ['in-rj', 30],
    ['in-up', 31],
    ['in-ut', 32],
    ['in-jh', 33]
];

// Create the chart
Highcharts.mapChart('bharat', {
    chart: {
        map: 'countries/in/in-all'
    },

    title: {
        text: ''
    },

    subtitle: {
        text: ''
    },
    legend: {
       enabled: false
     },
   tooltip: { enabled: false },
     navigation: {
        buttonOptions: {
            enabled: false
        }
    },
    credits: {
      enabled: false
    },
   plotOptions: {
              series: {
                  events: {
                      click: function (e) {
                          var text = '<b>Clicked</b><br>Series: ' + this.name +
                                  '<br>Point: ' + e.point.name + ' (' + e.point.value + '/km²)';
                          if (!this.chart.clickLabel) {
                              this.chart.clickLabel = this.chart.renderer.label(text, 0, 250)
                                  .css({
                                      width: '280px'
                                  })
                                  .add();
                          } else {
                              this.chart.clickLabel.attr({
                                  text: text
                              });
                          }
                      }
                  }
              }
          },
  
   /*  mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    }, */

    series: [{
        data: data,
        name: 'Random data',
         allowPointSelect: true,
         cursor: 'pointer',
         color: "#fff",
        states: {
            select: {
              color: '#A4B1C3'
            }
        },
        dataLabels: {
            enabled: false,
            format: '{point.name}'
        }
    }]
});
