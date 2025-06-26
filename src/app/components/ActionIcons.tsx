"use client";

import {
  FaInfoCircle,
  FaCartPlus,
  FaDownload,
  FaHeart,
  FaRegHeart,
  FaEllipsisV,
} from "react-icons/fa";
import { useState } from "react";
import CourseSummaryModal from "@/app/components/CourseSummaryModal";
import { Course } from "../types/course";

interface ActionIconsProps {
  id: string;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  course: Course;
}

export default function ActionIcons({
  id,
  isFavorite,
  onToggleFavorite,
  course,
}: ActionIconsProps) {
  const [showSummary, setShowSummary] = useState(false);

  const handleAddToCart = () => {
    alert(`Course ${id} added to cart`);
  };

  const handleDownloadDetails = () => {
    const content = {
      id,
      title: course.title,
      description: course.description,
    };

    const blob = new Blob([JSON.stringify(content, null, 2)], {
      type: "application/json",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `course-${id}-details.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mt-auto pt-2 border-top">
        <div className="d-flex gap-2 text-secondary fs-5">
          <button
            className="btn btn-link p-0 text-secondary"
            onClick={() => setShowSummary(true)}
          >
            <FaInfoCircle />
          </button>
          <button
            className="btn btn-link p-0 text-secondary"
            onClick={handleAddToCart}
          >
            <FaCartPlus />
          </button>
          <button
            className="btn btn-link p-0 text-secondary"
            onClick={handleDownloadDetails}
          >
            <FaDownload />
          </button>
        </div>

        <div className="d-flex gap-2 align-items-center">
          <button
            className="btn btn-link p-0 text-danger"
            onClick={() => onToggleFavorite(id)}
          >
            {isFavorite ? <FaHeart /> : <FaRegHeart />}
          </button>
          <button className="btn btn-link p-0 text-secondary">
            <FaEllipsisV />
          </button>
        </div>
      </div>

      <CourseSummaryModal
        show={showSummary}
        onHide={() => setShowSummary(false)}
        course={course}
      />
    </>
  );
}
