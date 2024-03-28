import { getReadBooks } from "../Utils";
import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  // eslint-disable-next-line react/prop-types
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PagesToRead = () => {
  const [addChart, setAddChart] = useState([]);

  useEffect(() => {
    const getBook = getReadBooks();
    setAddChart(getBook);
  }, []);

  return (
    <div className="bg-gray-100 rounded-lg py-3">
      <h2 className="mt-4 text-center text-2xl font-semibold">
        Here is your read books chart
      </h2>
      <div className="flex justify-center">
        <p className="pt-2 pb-6 text-center text-lg md:w-1/2">
          This chart shows the names of the books you read on the X-axis and the
          page numbers of the books you read on the Y-axis.
        </p>
      </div>
      <div className="flex justify-center">
        <BarChart
          width={800}
          height={300}
          data={addChart}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bookName" />
          <YAxis />
          <Bar
            dataKey="totalPages"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {addChart.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </div>
    </div>
  );
};

export default PagesToRead;
