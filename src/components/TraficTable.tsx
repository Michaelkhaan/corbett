const TraficTable = () => {
  const data = [
    {
      name: "Standard Room ",
      price: "$2345",
    },
    {
      name: "Standard Room ",
      price: "$2345",
    },
    {
      name: "Standard Room ",
      price: "$2345",
    },
    {
      name: "Standard Room ",
      price: "$2345",
    },
    {
      name: "Standard Room ",
      price: "$2345",
    },
  ];
  return (
    <div className="mt-16">
      <table className=" w-full border-collapse border border-black">
        <thead className="bg-black">
          <tr>
            <th className="text-yellow-400 py-1 text-left px-6">
              Accommodation Type
            </th>
            <th className="text-yellow-400 py-1 text-left px-6">
              Price per Night(INR)
            </th>
          </tr>
        </thead>
        <tbody className=" border-collapse border border-black">
          {data.map((val, i) => (
            <tr key={i}>
              <td className=" border-collapse border border-black py-2 px-6 ">
                {val.name}
              </td>
              <td className=" border-collapse border border-black py-2 px-6 ">
                {val.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default TraficTable;
