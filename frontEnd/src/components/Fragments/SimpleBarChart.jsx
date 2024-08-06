import React from 'react'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const SimpleBarChart = ({ dataGrafik, className }) => {
  return (
    <ResponsiveContainer className={`${className} w-full`}>
      <BarChart
        width={500}
        height={300}
        data={dataGrafik}
        margin={{
          top: 20,
          right: 30,
          left: 5,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="uv" fill="#FE7A36" activeBar={<Rectangle fill="pink" stroke="blue" />} />
        <Bar dataKey="pv" fill="#4875ff" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        {/* <Bar dataKey="amt" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} /> */}
      </BarChart>
    </ResponsiveContainer>
  )
}
