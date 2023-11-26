// StockTable.js

const StockTable = () => {
    return (
        <div>
            <h1>Stock Market Information</h1>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Open</th>
                        <th>High</th>
                        <th>Low</th>
                        <th>Close</th>
                        {/* Add more columns as needed */}
                    </tr>
                </thead>
                <tbody> </tbody>
            </table>
        </div>
    );
};

export default StockTable;
