import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const SimpleAreaChart = ({ dataGrafik, className }) => {
  return (
    <ResponsiveContainer className={className} width="100%" height={'100%'}>
      <AreaChart
        width={500}
        height={400}
        data={dataGrafik}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area dataKey="uv" stroke="#4875ff" fill="#4875ff" />
        {/* <Area dataKey="pv" stroke="#82ca9d" fill="#82ca9d" /> */}
      </AreaChart>
    </ResponsiveContainer>
  )
}
