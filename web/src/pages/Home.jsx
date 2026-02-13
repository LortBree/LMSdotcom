import { useEffect, useState } from "react";
import api from "../services/api";

export default function Home() {
  const nama = localStorage.getItem("nama") || "Student";
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    api.get("/materi").then((res) => {
      setCourses(res.data || []);
    });
  }, []);

  const getProgress = (courseName) => {
    if (courseName === "Math") return 50;
    if (courseName === "English") return 40;
    return 30;
  };

  return (
    <div className="bg-bg py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col gap-6">
        <h1 className="text-xl font-semibold text-text">
          Welcome, {nama}
        </h1>

        {/* News */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border-2 border-gray-300 p-5 flex flex-col gap-3 md:col-span-2">
            <h2 className="text-base font-semibold text-text">
              News
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="border-2 border-gray-300 rounded-lg p-3 flex items-center justify-center text-gray-500"
                >
                  No News
                </div>
              ))}
            </div>
          </div>

          {/* Course Progress */}
          <div className="bg-white rounded-xl border-2 border-gray-300 p-5 flex flex-col gap-4">
            <h2 className="text-base font-semibold text-text">
              Course Progress
            </h2>

            {courses.map((course) => {
              const progress = getProgress(course.nama_course);

              return (
                <div key={course._id} className="flex flex-col gap-1">
                  <div className="flex justify-between text-sm text-text">
                    <span>{course.nama_course}</span>
                    <span>{progress}%</span>
                  </div>

                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-component"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              );
            })}

            {courses.length === 0 && (
              <p className="text-sm text-gray-500">
                No course data available.
              </p>
            )}
          </div>

          {/* To-Do List */}
          <div className="bg-white rounded-xl border-2 border-gray-300 p-5 flex flex-col items-center justify-center gap-3">
            <h2 className="text-base font-semibold text-text">
              To-Do List
            </h2>

            <p className="text-sm text-gray-500">
              Nothing in your to-do list!
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
