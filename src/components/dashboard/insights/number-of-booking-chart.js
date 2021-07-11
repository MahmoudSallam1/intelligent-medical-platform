import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "March",
    online: 20,
    phone: 100,
  },
  {
    name: "April",
    online: 50,
    phone: 110,
  },
  {
    name: "May",
    online: 100,
    phone: 120,
  },
  {
    name: "June",
    online: 170,
    phone: 130,
  },
  {
    name: "July",
    online: 300,
    phone: 120,
  },
  {
    name: "August",
    online: 460,
    phone: 100,
  },
  {
    name: "September",
    online: 600,
    phone: 80,
  },
];
function NumberOfBookingChart() {
  return (
    <div>
      <ResponsiveContainer height={240}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis  />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="online"
            stroke="#1DB5E4"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="phone" stroke="#FAB91C" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default NumberOfBookingChart;
