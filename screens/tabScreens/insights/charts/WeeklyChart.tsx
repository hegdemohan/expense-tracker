import { Dimensions, Text, View } from "react-native";
import React, { useMemo } from "react";
import { Expense } from "../../../../types/expense";
import { G, Rect, Svg, Text as TextSvg, Line } from "react-native-svg";
import * as d3 from "d3";
import { theme } from "../../../../theme/Theme";
import { shortenNumber } from "../../../../utils/number";

type Props = {
  expenses: Expense[];
};

const dayNumberToName = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};

const DEFAULT_VALUE = [
  {
    day: "Sunday",
    total: 0,
  },
  {
    day: "Monday",
    total: 0,
  },
  {
    day: "Tuesday",
    total: 0,
  },
  {
    day: "Wednesday",
    total: 0,
  },
  {
    day: "Thursday",
    total: 0,
  },
  {
    day: "Friday",
    total: 0,
  },
  {
    day: "Saturday",
    total: 0,
  },
];

const GRAPH_MARGIN = 16;
const GRAPH_BAR_WIDTH = 39;
const SVG_HEIGHT = 147 + 2 * GRAPH_MARGIN;
const SVG_WIDTH = Dimensions.get("window").width;
const GRAPH_HEIGHT = SVG_HEIGHT - 2 * GRAPH_MARGIN;
const GRAPH_WIDTH = SVG_WIDTH - 2 * GRAPH_MARGIN;

export const WeeklyChart = ({ expenses }: Props) => {
  let avgExpense = 0;
  const groupedExpenses = useMemo(() => {
    const groupedExpenses = expenses.reduce((acc, expense) => {
      avgExpense += expense.amount;
      const day = dayNumberToName[new Date(expense.date).getDay()];
      acc.push({
        day,
        total: expense.amount,
      });
      return Object.values(acc.reduce((a, o) => ({ ...a, [o.day]: o }), {}));
    }, DEFAULT_VALUE);
    avgExpense = avgExpense / expenses.length;
    return groupedExpenses;
  }, [expenses]);

  const xDomain = groupedExpenses.map((expenses) => expenses.day);
  const xRange = [0, GRAPH_WIDTH];
  const x = d3.scalePoint().domain(xDomain).range(xRange).padding(1);

  const maxValue = d3.max(groupedExpenses, (d) => d.total);
  const yDomain = [0, maxValue];
  const yRange = [0, GRAPH_HEIGHT];
  const y = d3.scaleLinear().domain(yDomain).range(yRange);

  return (
    <Svg width={SVG_WIDTH} height={SVG_HEIGHT}>
      <G y={GRAPH_HEIGHT}>
        {groupedExpenses.map(({ day, total }) => (
          <React.Fragment key={day}>
            <Rect
              x={x(day)}
              y={y(yDomain[1]) * -1}
              rx={8}
              width={GRAPH_BAR_WIDTH}
              height={y(yDomain[1])}
              fill={theme.colors.card}
            />
            <Rect
              x={x(day)}
              y={y(total) * -1}
              rx={8}
              width={GRAPH_BAR_WIDTH}
              height={y(total)}
              fill="white"
            />
            <TextSvg
              x={x(day) - 6 + GRAPH_BAR_WIDTH / 2}
              y={24}
              fill={theme.colors.textSecondary}
              fontSize={16}
            >
              {day[0]}
            </TextSvg>
          </React.Fragment>
        ))}
        <TextSvg
          x={40}
          y={0}
          fill={theme.colors.textSecondary}
          fontSize={16}
          textAnchor="end"
        >
          0
        </TextSvg>
        <TextSvg
          x={40}
          y={y(avgExpense) * -1}
          fill={theme.colors.textSecondary}
          fontSize={16}
          textAnchor="end"
        >
          {shortenNumber(avgExpense)}
        </TextSvg>
        <TextSvg
          x={40}
          y={y(yDomain[1]) * -1 + 12}
          fill={theme.colors.textSecondary}
          fontSize={16}
          textAnchor="end"
        >
          {shortenNumber(maxValue)}
        </TextSvg>
        <Line
          x1={44}
          y1={y(avgExpense) * -1 - 4}
          x2={x(xDomain[xDomain.length - 1]) + GRAPH_BAR_WIDTH}
          y2={y(avgExpense) * -1 - 4}
          stroke={theme.colors.textSecondary}
          strokeDasharray={4}
        />
      </G>
    </Svg>
  );
};
