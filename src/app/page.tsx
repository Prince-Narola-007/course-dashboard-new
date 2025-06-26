"use client";

import { useState, useEffect } from "react";
// import { mockCourses } from '@/app/lib/mockCourses';
import { Course } from "@/app/types/course";
import CourseCard from "@/app/components/CourseCard";
import Spinner from "@/app/components/Spinner";
import ThemeToggle from "./components/ThemeToggle";
import SearchBar from "./components/SearchBar";
import SortDropdown, { SortField } from "./components/SortDropdown";
import FilterStatus from "./components/FilterStatus";

export default function Home() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<SortField>("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [darkMode, setDarkMode] = useState(false);

  //get data from locally storage
  // useEffect(() => {
  //   const fetchData = async () => {
  //     setTimeout(() => {
  //       setCourses(mockCourses);
  //     }, 500);
  //   };
  //   fetchData();
  // }, []);

  //get data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://685bcede89952852c2db11da.mockapi.io/dataCourses"
        );
        const data = await response.json();
        setCourses(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch courses", error);
      }
    };

    fetchData();
  }, []);

  const toggleFavorite = (id: string) => {
    const favoriteCourse = courses.map((course) =>
      course.id === id ? { ...course, isFavorite: !course.isFavorite } : course
    );
    setCourses(favoriteCourse);
  };

  const filteredCourses = courses
    .filter((course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((course) =>
      statusFilter === "All"
        ? true
        : course.status.toLowerCase() === statusFilter.toLowerCase()
    )
    .sort((a, b) => (sortBy ? a[sortBy].localeCompare(b[sortBy]) : 0));

  return (
    <main
      className={`min-vh-100 p-4 ${
        darkMode ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Dashboard</h2>

        <ThemeToggle
          darkMode={darkMode}
          toggleDarkMode={() => setDarkMode(!darkMode)}
        />
      </div>

      <div className="d-flex align-items-center gap-3 flex-wrap mb-4">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <SortDropdown sortBy={sortBy} onChange={setSortBy} />
        <FilterStatus selected={statusFilter} onChange={setStatusFilter} />
      </div>

      {loading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "200px" }}
        >
          <Spinner />
        </div>
      ) : (
        <div className="row">
          {filteredCourses.map((course) => (
            <div key={course.id} className="col-12 col-sm-6 col-lg-4 mb-4">
              <CourseCard course={course} onToggleFavorite={toggleFavorite} />
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
