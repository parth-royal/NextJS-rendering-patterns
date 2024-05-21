import { useState, useEffect } from 'react';

export default function Home({ data, error }) {
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
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


export async function getStaticProps() {
  try {
    const res = await fetch('http://localhost:3001/api/tshirt'); // Adjust the URL accordingly
    if (!res.ok) {
      throw new Error(`Network response was not ok: ${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    return {
      props: { data },
    };
  } catch (error) {
    return {
      props: { error: { message: error.message } },
    };
  }
}