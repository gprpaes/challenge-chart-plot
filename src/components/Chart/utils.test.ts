import {shazam} from "./utils";
import{options} from "./options"
import json5 from "json5";

const Newoptions = {
  title: { text: "" },
  chart: { height: 320 },
  xAxis: { categories: ["00:00", "00:01"], tickmarkPlacement: "on", min: 0 },
  yAxis: { labels: { enabled: false }, title: { text: null } },
  plotOptions: {
    series: {
      label: { connectorAllowed: false },
      marker: { symbol: "circle", radius: 6 },
    },
  },
  credits: { enabled: false },
  legend: {
    layout: "vertical",
    itemStyle: { textTransform: "capitalize" },
    align: "right",
    itemDistance: 100,
    verticalAlign: "top",
  },
  series: [
    { type: "line", data: [], name: "Input some data..." },
    { name: " linux chrome min_response_time", type: "line", data: [0.1, 0.2] },
    { name: " linux chrome max_response_time", type: "line", data: [1.3, 0.9] },
    { name: " mac chrome min_response_time", type: "line", data: [0.2, 0.1] },
    { name: " mac chrome max_response_time", type: "line", data: [1.2, 1] },
    { name: " mac firefox min_response_time", type: "line", data: [0.3, 0.2] },
    { name: " mac firefox max_response_time", type: "line", data: [1.2, 1.1] },
    {
      name: " linux firefox min_response_time",
      type: "line",
      data: [0.1, 0.3],
    },
    { name: " linux firefox max_response_time", type: "line", data: [1, 1.4] },
  ],
};


test('Should return an options object', () =>{
     const events = `{type: 'start', timestamp: 1519862400000, select: ['min_response_time', 'max_response_time'], group:['os', 'browser']}
     {type: 'span', timestamp: 1519862400000, begin: 1519862400000, end: 1519862460000}
     {type: 'data', timestamp: 1519862400000, os: 'linux', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.3}
     {type: 'data', timestamp: 1519862400000, os: 'mac', browser: 'chrome', min_response_time: 0.2, max_response_time: 1.2}
     {type: 'data', timestamp: 1519862400000, os: 'mac', browser: 'firefox', min_response_time: 0.3, max_response_time: 1.2}
     {type: 'data', timestamp: 1519862400000, os: 'linux', browser: 'firefox', min_response_time: 0.1, max_response_time: 1.0}
     {type: 'data', timestamp: 1519862460000, os: 'linux', browser: 'chrome', min_response_time: 0.2, max_response_time: 0.9}
     {type: 'data', timestamp: 1519862460000, os: 'mac', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.0}
     {type: 'data', timestamp: 1519862460000, os: 'mac', browser: 'firefox', min_response_time: 0.2, max_response_time: 1.1}
     {type: 'data', timestamp: 1519862460000, os: 'linux', browser: 'firefox', min_response_time: 0.3, max_response_time: 1.4}
     {type: 'stop', timestamp: 1519862460000}`
     let splitted= events.split("\n")
     let parsed = splitted.map(s => json5.parse(s))
     expect(shazam(parsed, options)).resolves.toEqual(Newoptions)
})