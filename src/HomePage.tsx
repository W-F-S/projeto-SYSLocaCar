import React, { useEffect, useState } from 'react';


function HomePage() {
    const [data, setData] = useState('');

    useEffect(() => {
        // Fetch data from the Express API
        fetch('http://localhost:9090/')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h2>Raw Data from the API:</h2>
            <pre>{data}</pre>
        </div>
    );
}

export default HomePage;