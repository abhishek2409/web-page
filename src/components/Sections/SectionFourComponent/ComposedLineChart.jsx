import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "2021",
    line: 590,
    point: 1000,
  },
  {
    name: "2022",
    line: 868,
    point: 1267,
  },
  {
    name: "2023",
    line: 1397,
    point: 1840,
  },
  {
    name: "2024",
    line: 1065,
    point: 1200,
  },
  {
    name: "2025",
    line: 820,
    point: 1680,
  },
];

export default function App() {
  return (
    <ResponsiveContainer
      width={"100%"}
      height={200}
      style={{ marginLeft: "0" }}
    >
      <ComposedChart
        data={data}
        margin={{
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        }}
      >
        <XAxis dataKey="name" />
        <Tooltip />
        <Bar
          dataKey="line"
          barSize={20}
          fill="#FFD027"
          colorRendering={"#E6E6E6"}
        />
        <Line
          type="monotone"
          dataKey="point"
          stroke="#FFD027"
          animationDuration={2500}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}

// Non Active: #E6E6E6
// Active: #FFD027
