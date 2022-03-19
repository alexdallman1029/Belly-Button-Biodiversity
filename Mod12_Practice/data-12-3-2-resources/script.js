//Practice
// d3.selectAll("body").on("change", updatePage);

// function updatePage() {
//     var dropdownMenu = d3.selectAll("#selectOption").node();
//     var dropdownMenuID = dropdownMenu.id;
//     var selectedOption = dropdownMenu.value;

//     console.log(dropdownMenuID);
//     console.log(selectedOption);
// };

function init() {
    data = [{
        x: [1,2,3,4,5],
        y: [1,2,4,8,16]
    }];
    Plotly.newPlot("plot", data);
};

d3.selectAll("#dropdownMenu").on("change", updatePlotly);
function updatePlotly() {
    var dropdownMenu = d3.select("#dropdownMenu");
    var dataset = dropdownMenu.property("value");

    var xData = [1,2,3,4,5];
    var yData = [];

    if (dataset === "dataset1") {
        yData = [1,2,4,8,16];
    };

    if (dataset === "dataset2") {
        yData = [1,10,100,1000,10000];
    };

    var trace = {
        x: [xData],
        y: [yData],
    };
    // Unlike the Plotly.newPlot() method, thePlotly.restyle() method defaults to accepting an object (trace in this case) as its data argument, rather than an array.
    // The Plotly.restyle() method is used to re-render the page on the browser. This method is more efficient than calling the Plotly.newPlot() method, as it does not create a brand new chart from scratch, but instead modifies the previously displayed chart with the updated information.
    Plotly.restyle("plot", trace);
};

init();
