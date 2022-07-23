import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from "recharts";

const data = [
  {
    name: "Rani",
    frequency: 150,
  },
  {
    name: "Hibiotic",
    frequency: 100,
  },
  {
    name: "Lyrolin",
    frequency: 120,
  },
  {
    name: "Clexane",
    frequency: 130,
  },

  {
    name: "Concor",
    frequency: 90,
  },
];
function PrescribedMedicineChart() {
  return (
    <div>
      {" "}
      <ResponsiveContainer height={240}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          ></XAxis>
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar
            dataKey="frequency"
            fill="#1DB5E4"
            background={{ fill: "#eee" }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PrescribedMedicineChart;
