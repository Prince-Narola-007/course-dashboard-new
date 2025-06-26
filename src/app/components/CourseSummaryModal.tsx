"use client";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Course } from "@/app/types/course";

interface CourseSummaryModalProps {
  show: boolean;
  onHide: () => void;
  course: Course;
}
export default function CourseSummaryModal({
  show,
  onHide,
  course,
}: CourseSummaryModalProps) {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Course Summary</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <strong>ID:</strong> {course.id}
        </p>
        <p>
          <strong>Title:</strong> {course.title}
        </p>
        <p>
          <strong>Code:</strong> {course.code}
        </p>
        <p>
          <strong>Semester:</strong> {course.semester}
        </p>
        <p>
          <strong>Status:</strong> {course.status}
        </p>
        <p>
          <strong>Description:</strong> {course.description}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
