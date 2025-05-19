import React from "react";

export default function Question1() {
  const data = [
    { region: "US", model: "A", sales: 150 },
    { region: "US", model: "B", sales: 120 },
    { region: "US", model: "C", sales: 350 },
    { region: "EU", model: "A", sales: 200 },
    { region: "EU", model: "B", sales: 100 },
    { region: "EU", model: "C", sales: 250 },
    { region: "CA", model: "A", sales: 200 },
    { region: "CA", model: "B", sales: 100 },
    { region: "CA", model: "C", sales: 230 },
    { region: "CA", model: "D", sales: 400 },
  ];

  const groupedData = data.reduce((acc, item) => {
    if (!acc[item.region]) {
      acc[item.region] = [];
    }
    acc[item.region].push(item);
    return acc;
  }, {});

  return (
    <div>
      <h3>Region-wise Sales Table</h3>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Region</th>
            <th>Model</th>
            <th>Sales</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(groupedData).map(([region, items]) => {
            const total = items.reduce((sum, item) => sum + item.sales, 0);
            return (
              <React.Fragment key={region}>
                <tr>
                  <td>{region}</td>
                  <td>
                    <strong>sum</strong>
                  </td>
                  <td>
                    <strong>{total}</strong>
                  </td>
                </tr>
                {items.map((item, idx) => (
                  <tr key={idx}>
                    <td>{item.region}</td>
                    <td>{item.model}</td>
                    <td>{item.sales}</td>
                  </tr>
                ))}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
