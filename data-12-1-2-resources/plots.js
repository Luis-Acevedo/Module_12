// Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);

// Plotly.newPlot("plotArea", [{x: [5, 10, 15], y: [10, 20, 30]}]);

//var trace = {
//    x: ["burrito", "pizza", "chicken"],
//    y: [10, 18, 5],
//    type: "bar"
//};

//var layout = {
//    title: "Luncheon Survey",
//    xaxis: {title: "Food Option"},
//    yaxis: {title: "Number of Respondents"}
//};

//var trace = {
//    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//    type: "bar"
//   };
//   var data = [trace];
//   var layout = {
//    title: "'Bar' Chart",
//    xaxis: { title: "Drinks"},
//    yaxis: { title: "% of Drinks Ordered"}
//   };
//   Plotly.newPlot("plotArea", data, layout);

//var trace = {
//    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
//    "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//    type: 'pie'
//   };
//   var data = [trace];
//   var layout = {
//   title: "'Pie' Chart",
//   };
//   Plotly.newPlot("plotArea", data, layout);   

var trace1 = {
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    mode: 'markers+text',
    type: 'scatter',
    name: 'Food',
    text: ['burrito', 'pizza', 'chicken'],
    textposition: 'top center',
    textfont: {
        family: 'Raleway, sans-serif'
    },
    marker: { size: 12 }
};

var trace2 = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    mode: 'markers+text',
    type: 'scatter',
    name: 'NA Drinks',
    text: ['beer', 'wine', 'martini', 'margarita', 'ice tea', 'rum & coke', 'mia tai', 'gin & tonic'],
    textfont: {
        family: 'Times New Roman'
    },
    textposition: 'bottom center',
    marker: { size: 12 }
};

var data = [ trace1, trace2 ];

var layout = {
  xaxis: {
    range: [ 0.75, 5.25 ]
  },
  yaxis: {
    range: [0, 8]
  },
  legend: {
    y: 0.5,
    yref: 'paper',
    font: {
      family: 'Arial, sans-serif',
      size: 20,
      color: 'grey',
    }
  },
  title:'Data Labels on the Plot'
};

Plotly.newPlot('plotArea', data, layout);