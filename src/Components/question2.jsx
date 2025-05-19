import React, { useState } from "react";

export default function Question2() {
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

  const [regionFilter, setRegionFilter] = useState("all");
  const [modelFilter, setModelFilter] = useState("all");

  const uniqueRegions = ["all", ...new Set(data.map((item) => item.region))];
  const uniqueModels = ["all", ...new Set(data.map((item) => item.model))];

  const filteredData = data.filter((item) => {
    return (
      (regionFilter === "all" || item.region === regionFilter) &&
      (modelFilter === "all" || item.model === modelFilter)
    );
  });

  return (
    <div>
      <label>
        Region Filter{" "}
        <select
          value={regionFilter}
          onChange={(e) => setRegionFilter(e.target.value)}
        >
          {uniqueRegions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </label>

      <label style={{ marginLeft: "1rem" }}>
        Model Filter{" "}
        <select
          value={modelFilter}
          onChange={(e) => setModelFilter(e.target.value)}
        >
          {uniqueModels.map((model) => (
            <option key={model} value={model}>
              {model}
            </option>
          ))}
        </select>
      </label>

      <table border="1" cellPadding="5" style={{ marginTop: "1rem" }}>
        <thead>
          <tr>
            <th>region</th>
            <th>model</th>
            <th>sales</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, idx) => (
            <tr key={idx}>
              <td>{row.region}</td>
              <td>{row.model}</td>
              <td>{row.sales}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
