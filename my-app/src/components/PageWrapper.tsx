// src/components/shared/PageWrapper.jsx
export default function PageWrapper({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {children}
    </div>
  );
}
