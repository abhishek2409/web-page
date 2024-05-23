import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    growth: 10,
  },
  {
    name: "Feb",
    growth: 15,
  },
  {
    name: "Mar",
    growth: 30,
  },
  {
    name: "Apr",
    growth: 35,
  },
  {
    name: "May",
    growth: 50,
  },
  {
    name: "Jun",
    growth: 55,
  },
  {
    name: "Jul",
    growth: 60,
  },
];

const CustomLineChart = () => {
  return (
    <ResponsiveContainer
      width={"100%"}
      height={200}
      style={{ marginLeft: "0" }}
    >
      <LineChart
        data={data}
        margin={{
          left: 16,
          top: 16,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <Tooltip />
        <Line
          dataKey="growth"
          stroke="#FFCF27"
          activeDot={{ r: 8 }}
          animationDuration={4000}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CustomLineChart;
