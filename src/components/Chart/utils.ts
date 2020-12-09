import { forEachChild } from "typescript";

export interface Ievent extends JSON {
  type: string;
  timestamp: Date;
  select?: string[];
  group?: string[];
  [propName: string]: any;
}


// ITERATION HELL
export const shazam = (parsedData: JSON[], options: any) => {
  let lastStartIndex = 0,
    lastStopIndex = -1,
    groups: any,
    min,
    max,
    select: any,
    seriesGroup: string,
    seen: string[] = [],
    entries: Object[] = [],
    seriesGroupSelect: string;

  parsedData!.forEach((event) => {
    switch ((event as Ievent).type) {
      case "start":
        groups = (event as Ievent).group;
        select = (event as Ievent).select;
        break;
      case "span":
        min = (event as Ievent).begin;
        max = (event as Ievent).end;
        options.xAxis.min = min;
        options.xAxis.max = max;
        break;
      case "data":
        let current: string = "";
        let obj: any = {};
        for (let group of groups) {
          current = `${current} ${(event as Ievent)[group]}`;
        }
        if(!seen.find(saw => saw == current)){
        seen.push(current)
        obj[current] = {};
        entries.push(obj)
        }
       
        for (let selected of select) {
         entries.forEach(entry =>{
           for(let key in entry){
           (entry as Ievent)[key][selected] = [];
           //console.log('current', (entry as Ievent)[`${current}`], `"${current}"`)
           }
         })
       }
        
       console.log(entries)
      
      break;
      case "stop":
        entries = [];
    }
  });
};
