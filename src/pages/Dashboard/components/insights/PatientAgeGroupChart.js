import React from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";

const data01 = [
  { name: "0-12 years", value: 2 },
  { name: "12-18 years", value: 10 },
  { name: "18-35 years", value: 20 },
  { name: "35-50 years", value: 20 },
  { name: "50-65 years", value: 15 },
  { name: " > 65  years", value: 15 },

];



function PatientAgeGroupChart() {
  return (
    <div>
      <ResponsiveContainer height={240}>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#1DB5E4"
            label
          />
     
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PatientAgeGroupChart;
