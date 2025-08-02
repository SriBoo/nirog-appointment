import { useState } from "react";
import doctors from "../data/doctors";
import { DoctorCard } from "../components/DoctorCard";

export default function LandingPage() {
  const [search, setSearch] = useState("");

  const filteredDoctors = doctors.filter((doc) =>
    `${doc.name} ${doc.specialization}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">Find a Doctor</h1>
      <input
        type="text"
        placeholder="Search by name or specialization"
        className="w-full p-2 border border-gray-300 rounded mb-6"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doc, idx) => <DoctorCard key={idx} {...doc} />)
        ) : (
          <p className="text-gray-600">No doctors found.</p>
        )}
      </div>
    </div>
  );
}
