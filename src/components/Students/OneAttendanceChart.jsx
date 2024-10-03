import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import moment from "moment"; // We'll use moment.js for date formatting

const OneAttendanceChart = (props) => {
  const { data } = props;
  // Sample attendance data

  // Convert data for Recharts (attendance percentage per day)
  const chartData = data.map((entry) => ({
    date: moment(entry.date).format("DD MMM"), // Formatting the date to "01 Oct" style
    attendance: entry.isPresent === "1" ? 100 : 0,
  }));

  return (
    <ResponsiveContainer width="100%" height={400} marginTop={30}>
      <LineChart
        data={chartData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid stroke="#EEEEEE" strokeDasharray="3 3" />{" "}
        {/* Light grid lines */}
        <XAxis dataKey="date" />
        <YAxis domain={[0, 100]} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="attendance"
          stroke="#117044" // Custom line color (dark green)
          strokeWidth={3} // Thicker line for visibility
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default OneAttendanceChart;
