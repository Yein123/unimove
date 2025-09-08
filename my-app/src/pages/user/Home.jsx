// src/pages/user/Home.jsx
import UserNavbar from "../../components/user/UserNavbar";
import PageWrapper from "../../components/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <UserNavbar />
      <main className="p-6">
        <h2 className="text-2xl font-bold">Welcome to UniMove</h2>
        <p className="mt-2 text-gray-600">Scan your phone on the NFC reader to join a queue.</p>
      </main>
    </PageWrapper>
  );
}
