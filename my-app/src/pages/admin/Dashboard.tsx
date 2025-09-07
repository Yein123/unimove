// src/pages/admin/Dashboard.jsx
import AdminNavbar from "../../components/admin/AdminNavbar";
import AdminFooter from "../../components/admin/AdminFooter";
import DataTable from "../../components/admin/DataTable";
import PageWrapper from "../../components/PageWrapper";

const dummyData = [
  { route: "A", busId: "B101", occupancy: "85%", status: "On Time", issue: "-", lastMaintenance: "2025-07-10" },
  { route: "B", busId: "B202", occupancy: "95%", status: "Delayed", issue: "Overcrowded", lastMaintenance: "2025-06-15" },
];

export default function Dashboard() {
  return (
    <PageWrapper>
      <AdminNavbar />
      <main className="p-6">
        <h2 className="text-2xl font-bold mb-4">Fleet Performance</h2>
        <DataTable data={dummyData} />
      </main>
      <AdminFooter />
    </PageWrapper>
  );
}
