import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    api.get("/materi").then((res) => {
      setCourses(res.data || []);
    });
  }, []);


  const getProgress = (courseName) => {
    if (courseName === "Math") return 33;
    if (courseName === "English") return 41;
    return 43;
  };

  return (
    <div className="bg-bg py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col gap-6">
        <h1 className="text-2xl font-semibold text-text">
        Courses
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((course) => {
            const progress = getProgress(course.nama_course);

            return (
              <Link
                key={course._id}
                to={`/course/${course._id}`}
                className="bg-white rounded-xl border-2 border-gray-300 p-5 flex flex-col justify-between hover:border-component transition"
              >
                <div className="flex flex-col gap-3">
                  <h2 className="text-base font-semibold text-text">
                    {course.nama_course}
                  </h2>

                  <div className="text-sm text-gray-600 flex flex-col gap-1">
                    <div>
                      <span className="font-medium">Course ID:</span>{" "}
                      {course.id_course}
                    </div>
                    <div>
                      <span className="font-medium">Instructor:</span>{" "}
                      {course.nama_instruktur}
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-2">
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>Class progress</span>
                    <span>{progress}%</span>
                  </div>

                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-component"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </Link>
            );
          })}

          {courses.length === 0 && (
            <div className="text-sm text-gray-500">
              No courses available.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
