import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

const taskData = [
  { name: 'Completed', value: 45 },
  { name: 'Pending', value: 20 },
  { name: 'In Progress', value: 35 }
];

const userTaskCount = [
  { name: 'User A', tasks: 20 },
  { name: 'User B', tasks: 30 },
  { name: 'User C', tasks: 15 },
  { name: 'User D', tasks: 25 }
];

const COLORS = ['#DB7093', '#E6E6FA', '#36454F'];

export default function Analytics() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Task Analytics</h1>
      </div>

      <div className="features">
        <h2>Task Completion Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={taskData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              outerRadius={100}
              dataKey="value"
            >
              {taskData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="features">
        <h2>Tasks per User</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={userTaskCount} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="tasks" fill="#DB7093" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
