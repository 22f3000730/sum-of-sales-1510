// Fetch the CSV data
fetch('data:text/csv;base64,aXRlbSxzYWxlcwpBcHBsZXMsMTIwLjUwCkJhbmFuYXMsODUuNzUKT3JhbmdlcywxNTAuMjUKR3JhcGVzLDk5LjAwCk1hbmdvZXMsMTMwLjQwCg==')
  .then(response => response.text())
  .then(data => {
    // Parse the CSV data
    const lines = data.trim().split('\n');
    let total = 0;
    
    // Skip the header line and process each data line
    for (let i = 1; i < lines.length; i++) {
      const cells = lines[i].split(',');
      // Add the sales value (second column) to the total
      total += parseFloat(cells[1]);
    }
    
    // Display the total in the #total-sales element
    document.getElementById('total-sales').textContent = total.toFixed(2);
  })
  .catch(error => {
    console.error('Error fetching or processing data:', error);
    document.getElementById('total-sales').textContent = 'Error';
  });