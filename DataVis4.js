

// Function to draw the pie chart
function graphFour() {

    // Generates 10 random values
    const problem1Values = Array.from({ length: 10 }, () =>
        Math.floor(Math.random() * 101)
    );

    // randomly select the index and make sure they are not the same
    const indexOne = d3.randomInt(0, 9)();

    let indexTwo;

    do {
        indexTwo = d3.randomInt(0, 9)();
    } while (indexTwo === indexOne);

    const actualIndexTwo = indexTwo;

    // Define graph size and margins
    const graphSize = 500;
    const margin = { top: 30, right: 30, bottom: 30, left: 30 },
        width = graphSize - margin.left - margin.right,
        height = graphSize - margin.top - margin.bottom,
        radius = Math.min(width, height) / 2;


    const svg = d3
        .select("#visualization-container")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr(
            "transform",
            `translate(${width / 2 + margin.left}, ${height / 2 + margin.top})`
        );

    const pie = d3.pie().value((d) => d);

    const arc = d3.arc().innerRadius(0).outerRadius(radius);

    svg
        .selectAll("path")
        .data(pie(problem1Values))
        .enter()
        .append("path")
        .attr("d", arc)
        .attr("fill", function (d, i) {
            if (i === indexOne || i === actualIndexTwo) {
                // same as in datavis1.html
                return "red";
            } else {
                return "white";
            }
        })
        .attr("stroke", "black")
        .style("stroke-width", "2px");
}