import { useState } from "react";

const useStickyWall = () => {
  const [filterType, setFilterType] = useState("ALL");
  const [flippedCards, setFlippedCards] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [stickyNotes, setStickyNotes] = useState(
    JSON.parse(localStorage.getItem("stickyNotes")) ?? [],
  );
  const [noteForEdit, setNoteForEdit] = useState(null);
  const toggleFlip = (id) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const onDelete = (id) => {
    const newStickyNotes = stickyNotes.filter((note) => note.id !== id);
    localStorage.setItem("stickyNotes", JSON.stringify(newStickyNotes));
    setStickyNotes(newStickyNotes);
  };
  const onEdit = (id) => {
    setShowModal(true);
    setNoteForEdit(stickyNotes.find((note) => note.id === id));
  };

  const filteredNotes = stickyNotes.filter((note) => {
    const matchesType = filterType === "ALL" || note.type === filterType;
    return matchesType;
  });


  return {
    filterType,
    setFilterType,
    flippedCards,
    showModal,
    setShowModal,
    noteForEdit,
    setNoteForEdit,
    toggleFlip,
    onDelete,
    onEdit,
    filteredNotes,
    stickyNotes,
    setStickyNotes
  }
};

export default useStickyWall;
