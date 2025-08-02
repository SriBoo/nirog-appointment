import { useNavigate } from "react-router-dom";

interface Props {
  name: string;
  specialization: string;
  location: string;
}

export function DoctorCard({ name, specialization, location }: Props) {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-600">{specialization}</p>
      <p className="text-gray-500">{location}</p>
      <button
        onClick={() => navigate(`/book/${encodeURIComponent(name)}`)}
        className="mt-3 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
      >
        Book Appointment
      </button>
    </div>
  );
}
