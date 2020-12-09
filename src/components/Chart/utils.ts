export interface Ievent extends JSON {
  type: string;
  timestamp: Date;
  select?: string[];
  group?: string[];
  [propName: string]: any;
}

/// This is rather inefficient
export const shazam = async (parsedData: JSON[], options: any) => {
  let lastStartIndex = 0,
    lastStopIndex = -1,
    groups: any,
    min: Date,
    max: Date,
    select: any,
    seriesGroup: string,
    seen: string[] = [],
    entries: Object[] = [],
    seriesObject: any,
    seriesArray: any = [];

    await Promise.all(parsedData!.map(async (event) => {
    switch ((event as Ievent).type) {
      case "start":
        groups = (event as Ievent).group;
        select = (event as Ievent).select;
        break;
      case "span":
        min = (event as Ievent).begin;
        max = (event as Ievent).end;
        //options.xAxis.min = min;
        //options.xAxis.max = max;
        break;
      case "data":
        if (
          (event as Ievent).timestamp >= min &&
          (event as Ievent).timestamp <= max
        ) {
          let current: string = "";
          let obj: any = {};
          for await (let group of groups) {
            current = `${current} ${(event as Ievent)[group]}`;
          }
          if (!seen.find((saw) => saw == current)) {
            seen.push(current);
            obj[current] = {};
            entries.push(obj);
          }
          for await (let selected of select) {
            entries.forEach((entry) => {
              for (let key in entry) {
                (entry as Ievent)[key][selected] = [];
              }
            });
          }

          for await (let selected of select) {
            for (let entry of entries) {
              for (let key in entry) {
                if (current == key)
                  (entry as Ievent)[key][selected].push(
                    (event as Ievent)[selected]
                  );
              }
            }
          }

          for (let entry of entries) {
            for (let selected of select) {
              for(let key in entry){ 
              seriesObject = {name: `${key} ${selected}`, type:"line", data: (entry as Ievent)[key][selected]}  
              break
              }
              if(!options.series.find((seen: any) => seen.name == seriesObject.name))
              options.series.push(seriesObject)
              
            }
          }

        }
        break;
      case "stop":
        entries = [];
        seen = [];
        break;
      default:
        throw new Error("Erro");
    }
  }));
  return options
};
