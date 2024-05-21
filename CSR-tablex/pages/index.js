import { useState, useEffect } from 'react';

export default function Home() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/tshirt');
        if (!res.ok) {
          throw new Error(`Network response was not ok: ${res.status} ${res.statusText}`);
        }
        const result = await res.json();
        setData(result);
      } catch (error) {
        setError(error);
      }
    }

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>T-Shirt Data</h1>
      <table border="1">
        <thead>
          <tr>
            <th>T-Shirt</th>
            <th>Size</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.tshirt}</td>
              <td>{item.size}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}