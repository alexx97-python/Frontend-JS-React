var amount = 100;
var monday = [
  ['Write a tutorial',180],
  ['Some web development',120],
  ['Read about JS functions', 100]
];
var tuesday = [
  ['Keep writing that tutorial',240],
  ['Some more web development',180],
   ['A whole lot of nothing',240]
];
var tasks = [monday,tuesday];

tasks.forEach(function(element) {
    element
      .map(item => {
          return (typeof item[1] === 'number')
              ? [item[0], item[1]/60]
              : item
            })
      .filter((item) => {
          return item[1] >= 2;
      })
      .forEach((item) => {
          let tr = document.createElement('tr');
          let td1 = document.createElement('td');
          td1.innerHTML = `Task name: ${item[0]} `;
          let td2 = document.createElement('td');
          td2.innerHTML = `Taks duration: ${item[1]} hours `;
          let td3 = document.createElement('td')
          td3.innerHTML = `Task amount: $${item[1] * amount} `;
          tr.append(td1, td2, td3);
          document.body.append(tr);
      })
})