var employeeData = [
    { id: '1', entries: [{ date: '2023-11-18', entryTime: '09:00', exitTime: '16:00' }, { date: '2023-11-20', entryTime: '09:30', exitTime: '16:30' },{ date: '2023-11-21', entryTime: '09:00', exitTime: '16:00' },{ date: '2023-11-22', entryTime: '09:25', exitTime: '16:20' },{ date: '2023-11-23', entryTime: '09:00', exitTime: '17:00' },{ date: '2023-11-24', entryTime: '09:00', exitTime: '17:00' },{ date: '2023-11-25', entryTime: '09:00', exitTime: '17:00' },{ date: '2023-11-28', entryTime: '01:00', exitTime: '17:50' },{ date: '2023-11-29', entryTime: '12:30', exitTime: '17:00' },{ date: '2023-12-01', entryTime: '09:00', exitTime: '16:00' }] },
    { id: '2', entries: [{ date: '2023-11-18', entryTime: '09:05', exitTime: '16:01' }, { date: '2023-11-20', entryTime: '09:30', exitTime: '16:35' },{ date: '2023-11-21', entryTime: '09:30', exitTime: '16:30' },{ date: '2023-11-22', entryTime: '09:30', exitTime: '16:30' },{ date: '2023-11-23', entryTime: '09:30', exitTime: '16:30' },{ date: '2023-11-24', entryTime: '09:30', exitTime: '16:30' },{ date: '2023-11-25', entryTime: '09:30', exitTime: '16:30' },{ date: '2023-11-28', entryTime: '01:30', exitTime: '17:30' },{ date: '2023-11-29', entryTime: '12:30', exitTime: '16:30' },{ date: '2023-12-01', entryTime: '09:00', exitTime: '16:00' },] },
    { id: '3', entries: [{ date: '2023-11-18', entryTime: '09:09', exitTime: '16:00' }, { date: '2023-11-20', entryTime: '09:30', exitTime: '16:33' },{ date: '2023-11-21', entryTime: '09:30', exitTime: '16:30' },{ date: '2023-11-22', entryTime: '09:30', exitTime: '16:30' },{ date: '2023-11-23', entryTime: '09:30', exitTime: '16:30' },{ date: '2023-11-24', entryTime: '09:30', exitTime: '16:30' },{ date: '2023-11-25', entryTime: '09:30', exitTime: '16:30' },{ date: '2023-11-28', entryTime: '01:30', exitTime: '17:30' },{ date: '2023-11-29', entryTime: '12:30', exitTime: '16:30' },{ date: '2023-12-01', entryTime: '09:00', exitTime: '16:00' },] },
    // Add more employee data as needed
];

function calculateRetention() {
    var employeeId = document.getElementById('employeeId').value;
    var fromDate = document.getElementById('fromDate').value;
    var toDate = document.getElementById('toDate').value;

    // Assuming you have a list of employee data
    var employee = employeeData.find(e => e.id === employeeId);

    if (employee) {
        // Filter entries within the specified date range
        var filteredEntries = employee.entries.filter(entry => entry.date >= fromDate && entry.date <= toDate);

        if (filteredEntries.length > 0) {
            // Calculate total retention time for the specified date range
            var totalRetentionTime = 0;

            filteredEntries.forEach(entry => {
                var entryTime = new Date(entry.date + 'T' + entry.entryTime + ':00');
                var exitTime = new Date(entry.date + 'T' + entry.exitTime + ':00');
                
                totalRetentionTime += Math.abs(exitTime - entryTime);
            });

            var hours = Math.floor(totalRetentionTime / 36e5);
            var minutes = Math.floor((totalRetentionTime % 36e5) / 6e4);

            // Display result
            document.getElementById('result').innerHTML = '<p>Total Retention Time for Employee ' + employeeId + ' from ' + fromDate + ' to ' + toDate + ' is ' + hours + ' hours and ' + minutes + ' minutes</p>';
        } else {
            document.getElementById('result').innerHTML = '<p>No entries found for the specified date range</p>';
        }
    } else {
        document.getElementById('result').innerHTML = '<p>Employee not found</p>';
    }
}