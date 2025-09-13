"use client"

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
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

  return (
    <ChartContainer config={chartConfig} className="w-full h-full">
      <ResponsiveContainer>
        <BarChart data={filteredData} margin={{ top: 20, right: 20, left: -10, bottom: 0 }}>
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
          />
          <Tooltip
            cursor={false}
            content={<ChartTooltipContent 
              indicator="dot"
              labelClassName="font-bold text-lg"
              formatter={(value) => [`${value}`, 'CGPA']}
            />}
          />
          <Bar 
            dataKey="cgpa" 
            fill="var(--color-cgpa)" 
            radius={[4, 4, 0, 0]} 
            animationDuration={1500}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
