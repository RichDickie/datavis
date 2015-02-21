var body = d3.select("body");

var graphics = body.append("svg");

graphics.attr("width" , 900);
graphics.attr("height", 600);

var width = 900;
var height = 600;


graphics.attr("width", width);
graphics.attr("height", height);

/*graphics.append("circle")
    .attr("r", 100)
    .attr("cx", 200)
    .attr("cy", 200);
*/

/*var chartHeight = 300;
graphics.append("rect")
    .attr("x", 105)
    .attr("y", chartHeight-250)
    .attr("height", 250)
    .attr("width", 20);

graphics.append("rect")
    .attr("x", 130)
    .attr("y", chartHeight-200)
    .attr("height", 200)
    .attr("width", 20);

graphics.append("line")
    .attr("x1", 100)
    .attr("y1", chartHeight+5)
    .attr("x2", 100)
    .attr("y2", 10)
    .attr("stroke" , "#000000")
    .attr("stroke-width", 2);

graphics.append("line")
    .attr("x1", 100)
    .attr("y1", chartHeight+5)
    .attr("x2", 500)
    .attr("y2", chartHeight+5)
    .attr("stroke" , "#000000")
    .attr("stroke-width", 2);
graphics.append("text")
    .text("x axis")
    .attr("y", chartHeight)
    .attr("x", 500);
graphics.append("text")
    .text("y axis")
    .attr("x", 90)
    .attr("y", 30);
*/

/*graphics.append("circle")
    .attr("r", 100)
    .attr("cx", 200)
    .attr("cy", 200)
    .style("fill", "#4672B4")
    .style("stroke", "#CCCCCC")
    .style("stroke-width", "3px")
    .style("opacity", "0");
graphics.append("text")
    .text("Can you see me?")
    .attr("y", 190)
    .attr("x", 190);*/

graphics.append("circle")
    .attr("r", 150)
    .attr("cx", 200)
    .attr("cy", 200)
    .style("fill", "#4672B4")
    .style("stroke", "#CCCCCC")
    .style("stroke-width", "3px")
    .style("opacity", "1");

graphics.append("circle")
    .attr("r", 17)
    .attr("cx", 140)
    .attr("cy", 170)
    .style("fill", "#000000")
    .style("stroke", "#000000")
    .style("stroke-width", "3px")
    .style("opacity", "2");

graphics.append("circle")
    .attr("r", 17)
    .attr("cx", 240)
    .attr("cy", 170)
    .style("fill", "#000000")
    .style("stroke", "#000000")
    .style("stroke-width", "3px")
    .style("opacity", "2");

var arc = d3.svg.arc()
    .innerRadius(80)
    .outerRadius(100)
    .startAngle(2)
    .endAngle(4.28);

var arc1 = d3.svg.arc()
    .innerRadius(20)
    .outerRadius(22)
    .startAngle(4.71)
    .endAngle(7.89);

/*var arc2 = d3.svg.arc()
    .innerRadius(20)
    .outerRadius(22)
    .startAngle(4.71)
    .endAngle(7.89);*/

 graphics.append("path")
    .attr("d", arc)
    .attr("transform", "translate(200,200)")
    //.attr("transform", "translate(200,200)");


graphics.append("path")
    .attr("d", arc1)
    .attr("transform", "translate(240,160)");
    //.attr("transform", "rotate(-45)");

graphics.append("path")
    .attr("d", arc1)
    .attr("transform", "translate(140,160)");
//.attr("transform", "rotate(-45)");


