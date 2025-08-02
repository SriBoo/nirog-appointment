import { useParams } from "react-router-dom";
import doctors from "../data/doctors";

export default function DoctorDetails() {
  const { name } = useParams<{ name: string }>();
  const decodedName = name ? decodeURIComponent(name) : "";
  const doctor = doctors.find((doc) => doc.name === decodedName);

  if (!doctor) {
    return <div className="p-6 text-red-600 text-center">❌ Doctor not found.</div>;
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md mt-6">
      <h1 className="text-2xl font-bold mb-2 text-purple-700">{doctor.name}</h1>
      <p className="text-gray-700 mb-1"><strong>Specialization:</strong> {doctor.specialization}</p>
      <p className="text-gray-700 mb-4"><strong>Location:</strong> {doctor.location}</p>
      <p className="text-gray-600 italic">You can book an appointment with this doctor from the home page.</p>
    </div>
  );
}
