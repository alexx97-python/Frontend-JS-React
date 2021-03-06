var users = [
    [
     "john",
     "red",
     5,
     ["ball", "book", "pen"]
    ],
    [
     "becky",
     "blue",
     10,
     ["tape", "backpack", "pen"]
    ],
    [
     "susy",
     "red",
     55,
     ["ball", "eraser", "pen"]
    ],
    [
     "tyson",
     "green",
     1,
     ["book", "pen"]
    ],
   ];

// Task 1
let newUsers_1 = [];

users.forEach(user => {
    newUsers_1.push(user[0] + '!');
});

console.log(`The result of the first task: [${newUsers_1}]`);

// Task 2
let newUsers_2 = users.map(user => {
    return user[0] + '?';
})

console.log(`The result of the first task: [${newUsers_2}]`);

// Task 3

let filteredUsers = users.filter(user => {
    return user[1] === 'red';
})

console.log(`The result of the third task: [${filteredUsers}]`);

// Task 4

// Create table layout
let table = document.createElement('table'),
    thead = document.createElement('thead'),
    theadData = ['Name','Team','Score','Items'],
    theadTr = theadData
        .map(function(item){return `<td>${item}</td>`;})
        .join('');

thead.innerHTML = `<tr>${theadTr}</tr>`;
table.append(thead);
body.append(table);


// Fill with data from filteredUsers
filteredUsers.forEach(element => {
    let tr = document.createElement('tr'),
        tds = element
            .map(function(item){return `<td>${item}</td>`;})
            .join('');
    tr.innerHTML = `${tds}`;
    table.append(tr);
})

// Calculate total score
let totalScore = filteredUsers.reduce((sum, element) =>{
    if(typeof element[2] === 'number'){
        return sum + element[2];
    }
}, 0);

// Add tfoot into table
let tfoot = document.createElement('tfoot');
tfoot.innerHTML = `Total score: ${totalScore}`;
table.append(tfoot);

