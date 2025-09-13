"use client"

import {
  Bar,
  ComposedChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Line,
} from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartConfig = {
  cgpa: {
    label: "CGPA",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig

type EducationChartProps = {
  data: { semester: string; cgpa: number | null }[]
}

export function EducationChart({ data }: EducationChartProps) {
  const filteredData = data.filter(item => item.cgpa !== null);
  const allData = data;

  return (
    <ChartContainer config={chartConfig} className="w-full h-full">
      <ResponsiveContainer>
        <ComposedChart data={allData} margin={{ top: 20, right: 20, left: -10, bottom: 0 }}>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis
            dataKey="semester"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            stroke="hsl(var(--muted-foreground))"
          />
          <YAxis 
            domain={[0, 10]}
            tickLine={false}
            axisLine={false}
            tickMargin={10}
            stroke="hsl(var(--muted-foreground))"
            label={{ value: "CGPA", angle: -90, position: 'insideLeft', offset: 10, style: { fill: 'hsl(var(--muted-foreground))' } }}
          />
          <Tooltip
            cursor={false}
            content={<ChartTooltipContent 
              indicator="dot"
              labelClassName="font-bold text-lg"
              formatter={(value, name, props) => {
                if (props.payload.cgpa === null) {
                  return [`Upcoming`, 'Status']
                }
                return [`${value}`, 'CGPA']
              }}
            />}
          />
          <Bar 
            dataKey="cgpa" 
            fill="var(--color-cgpa)" 
            radius={[4, 4, 0, 0]} 
            barSize={30}
            animationDuration={1500}
          />
          <Line
            dataKey="cgpa"
            type="monotone"
            stroke="hsl(var(--accent))"
            strokeWidth={2}
            dot={{
              r: 4,
              fill: "hsl(var(--accent))",
            }}
            activeDot={{
              r: 6,
              fill: "hsl(var(--accent))",
            }}
            connectNulls={false}
            animationDuration={1500}
            animationBegin={500}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
