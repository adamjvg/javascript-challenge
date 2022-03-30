// create more explicit variable
var tableData = data;

// create variable to append
var tbody = d3.select('tbody');

// append objects from data.js into variable
tableData.forEach(item => {
    var tr = tbody.append('tr');
    tr.append('td').text(item.datetime);
    tr.append('td').text(item.city);
    tr.append('td').text(item.state);
    tr.append('td').text(item.country);
    tr.append('td').text(item.shape);
    tr.append('td').text(item.durationMinutes);
    tr.append('td').text(item.comments);
});

// create button
var button = d3.select('#filter-btn');

// function to commence when button clicked by user
button.on('click', function() {
    
    // make variables for inputs and values for date
    var dateInput = d3.select('#date-filter');
    var dateValue = dateInput.property('value');
   
    //filter by date
    var filtered = tableData.filter(item => item.datetime === dateValue)
     
    console.log(filtered);
    
    // refresh table
    tbody.html(``);
    
    // add data
    filtered.forEach( item => {
        var tr = tbody.append('tr');
        tr.append('td').text(item.datetime);
        tr.append('td').text(item.city);
        tr.append('td').text(item.state);
        tr.append('td').text(item.country);
        tr.append('td').text(item.shape);
        tr.append('td').text(item.durationMinutes);
        tr.append('td').text(item.comments);
    });
});