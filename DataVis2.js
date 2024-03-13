


function graphTwo() {

    // Generates 10 random values
    const problem2Values = Array.from({ length: 10 }, () => Math.floor(Math.random() * 101));

    // Define graph size and margins
    const graphSize = 500;
    const margin = { top: 20, right: 10, bottom: 30, left: 40 },
        width = graphSize - margin.left - margin.right,
        height = graphSize - margin.top - margin.bottom;

    let svg = d3.select("#visualization-container").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    const xScale = d3
        .scaleBand()
        .domain(d3.range(problem2Values.length))
        .range([0, width])
        .padding(0.1);

    const yScale = d3
        .scaleLinear()
        .domain([0, 100])
        .range([height, 0]);

    // Append x axis
    svg.append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(xScale));

    // Append y axis
    svg.append("g")
        .call(d3.axisLeft(yScale));

    // Create bars
    svg.selectAll(".bar")
        .data(problem2Values)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", (d, i) => xScale(i))
        .attr("y", d => yScale(d))
        .attr("width", xScale.bandwidth())
        .attr("height", d => height - yScale(d))
        .attr("fill", "#FFFFFF")
        .attr("stroke", "black")
        .attr("stroke-width", 1);
}