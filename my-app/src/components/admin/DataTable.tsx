// src/components/admin/DataTable.jsx
export default function DataTable({ data }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2">Route</th>
            <th className="p-2">Bus ID</th>
            <th className="p-2">Occupancy %</th>
            <th className="p-2">On-Time Status</th>
            <th className="p-2">Issue</th>
            <th className="p-2">Last Maintenance</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="border-b">
              <td className="p-2">{row.route}</td>
              <td className="p-2">{row.busId}</td>
              <td className="p-2">{row.occupancy}</td>
              <td className="p-2">{row.status}</td>
              <td className="p-2">{row.issue}</td>
              <td className="p-2">{row.lastMaintenance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
