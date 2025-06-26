"use client";

import { Course } from "@/app/types/course";
import StatusBadge from "./StatusBadge";
import ActionIcons from "./ActionIcons";

interface Props {
  course: Course;
  onToggleFavorite: (id: string) => void;
}

export default function CourseCard({ course, onToggleFavorite }: Props) {
  const { id, title, code, semester, status, isFavorite, thumbnail } = course;

  return (
    <div className="card card-shadow shadow-sm h-100">
      {/* Thumbnail Block */}
      {thumbnail ? (
        <img
          src={thumbnail}
          className="card-img-top"
          alt="Course Thumbnail"
          style={{ height: "170px", objectFit: "cover" }}
        />
      ) : (
        <div className="card-img-top" style={{ height: "170px" }}></div>
      )}

      <div className="card-body d-flex flex-column justify-content-between p-2">
        {/* Semester */}
        <span className="badge bg-light text-dark mb-2 p-2">{semester}</span>

        {/* Title + Course Code */}
        <h5 className="card-title text-truncate">{title}</h5>
        <p className="card-text text-muted small mb-1">{code}</p>

        {/* Status */}
        <StatusBadge status={status} />

        {/* Icons Row */}
        <ActionIcons
          id={id}
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
          course={course}
        />
      </div>
    </div>
  );
}
