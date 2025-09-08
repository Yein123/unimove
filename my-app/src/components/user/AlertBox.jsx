// src/components/user/AlertBox.jsx
export default function AlertBox({ type = "info", message }) {
  const colors = {
    success: "bg-green-100 text-green-700 border-green-400",
    error: "bg-red-100 text-red-700 border-red-400",
    warning: "bg-yellow-100 text-yellow-700 border-yellow-400",
    info: "bg-blue-100 text-blue-700 border-blue-400",
  };

  return (
    <div className={`border-l-4 p-3 my-2 rounded ${colors[type]}`}>
      {message}
    </div>
  );
}
