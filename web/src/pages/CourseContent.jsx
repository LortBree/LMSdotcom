import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

export default function CourseContent() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    api.get(`/materi/${id}`).then((res) => {
      setCourse(res.data);
    });
  }, [id]);

  if (!course) {
    return (
      <div className="py-10 text-center text-gray-500">
        Loading course...
      </div>
    );
  }

  return (
    <div className="bg-bg py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col gap-6">

        {/* Course Header */}
        <div className="bg-white border-2 border-gray-300 rounded-xl p-5 flex flex-col gap-2">
          <h1 className="text-xl font-semibold text-text">
            {course.nama_course}
          </h1>

          <div className="text-sm text-gray-600 flex flex-wrap gap-4">
            <span>
              <strong>Course ID:</strong> {course.id_course}
            </span>
            <span>
              <strong>Instructor:</strong> {course.nama_instruktur}
            </span>
          </div>
        </div>

        {/* Course Content */}
        <div className="bg-white border-2 border-gray-300 rounded-xl p-5 flex flex-col gap-4">
          <h2 className="text-base font-semibold text-text">
            Course Content
          </h2>
          <div className="w-full aspect-video rounded-lg overflow-hidden bg-black">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/UbPiCgCkHTE"
              title="Course Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* deskripsi*/}
          <p className="text-sm text-gray-700">
            {course.content || 
              "This course provides an overview of the subject to support students learning process."
            }
          </p>
        </div>

        {/* dummy ui */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {["Lecture Notes", "Assessment", "Forum", "Quiz"].map((item) => (
            <button
            key={item}
            onClick={() => alert("Ini cuma UI dummy")}
            className="bg-white border-2 border-gray-300 rounded-lg p-4 text-center text-sm font-medium
                        text-gray-700 hover:border-component hover:text-component transition"
            >
            {item}
            </button>
        ))}
        </div>

        <div className="bg-white border-2 border-gray-300 rounded-xl p-5 flex flex-col gap-3">
          <h2 className="text-base font-semibold text-text">
            Lecturer Notes
          </h2>

          <ul className="text-sm text-gray-600 list-disc list-inside">
            <li>Lecture Note – Week 1 (PDF)</li>
            <li>Lecture Note – Week 2 (PDF)</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
