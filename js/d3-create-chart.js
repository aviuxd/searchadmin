var CreateChart =function(){
	var data;

var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 700 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

var x = d3.scale.linear()
.range([0, width]);

var y = d3.scale.linear()
.range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var line = d3.svg.line()
    .x(function(d) { return x(d.period); })
    .y(function(d) { return y(d.maximum); });

var svg = d3.select("#chart-area").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


  d3.json("model/chart-model.json", function(error, data) {
    if (error) return console.warn(error);
    data.forEach(function(d){
      d.maximum = +data.maximum;
      alert('this is data.maximum' + data.maximum);
      d.period = +data.period;
      alert(data.period);
    });
    //data = json;
  });


  x.domain(d3.extent(data, function(d) { return d.maximum; }));
  y.domain(d3.extent(data, function(d) { return d.period; }));

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Time (s)");

  svg.append("path")
      .datum(data)
      .attr("class", "line")
      .attr("d", line);
      };