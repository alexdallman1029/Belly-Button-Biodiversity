function init() {
    var selector = d3.select("#selDataset");

    d3.json("samples.json").then((data) => {
        console.log(data);
        var sampleNames = data.names;
        sampleNames.forEach((sample) => {
            selector
                .append("option")
                .text(sample)
                .property("value", sample);
    });
})}

init();

// This function is declared in plots.js, but it is never called in plots.js. It's instead called by the onchange attribute of the dropdown menu in index.html
// The argument name newSample refers to the value of the selected menu option. In index.html, onchange=optionChanged(this.value)passes the selected menu option's value to the optionChanged()function. 
// This function gives this information the argument name newSample. In other words,this.value and newSample are equivalent.
function optionChanged(newSample) {
    buildMetadata(newSample);
    buildCharts(newSample);
};

function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
        var metadata = data.metadata;
        var resultArray = metadata.filter(sampleObj => sampleObj.id ==sample);
        var result = Object.entries(resultArray[0]);
        result.forEach(key +": "+ value);
        var PANEL = d3.select("#sample-metadata");

        PANEL.html("");
        PANEL.append("h6").text(result.location);
    });
};