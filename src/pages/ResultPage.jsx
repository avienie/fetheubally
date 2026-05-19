function Result() {
  const results = [
    {
      week: "Week 1",
      score: 95,
      status: "Passed",
    },
    {
      week: "Week 2",
      score: 88,
      status: "Passed",
    },
    {
      week: "Week 3",
      score: 70,
      status: "Revision",
    },
    {
      week: "Week 4",
      score: 0,
      status: "Not Submitted",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">
        Result Page
      </h1>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-blue-700 text-white">
            <tr>
              <th className="p-4 text-left">
                Week
              </th>

              <th className="p-4 text-left">
                Score
              </th>

              <th className="p-4 text-left">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {results.map((item, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-4">
                  {item.week}
                </td>

                <td className="p-4">
                  {item.score}
                </td>

                <td className="p-4">
                  <span
                    className={`px-4 py-1 rounded-full text-white text-sm ${
                      item.status === "Passed"
                        ? "bg-green-500"
                        : item.status === "Revision"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Result;