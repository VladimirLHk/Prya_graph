let getChartData = (period) => {
  const elNum = 3+Math.floor(Math.random() * 20);
  let data = {
    labels: [],
    set1: [],
    set2: [],
  };
  for (let i=0; i<elNum; i++) {
    data.labels.push(i);
    data.set1.push(Math.random() * elNum);
    data.set2.push((Math.random()-1.5) * elNum);
  }
  return data;
};

export default getChartData;