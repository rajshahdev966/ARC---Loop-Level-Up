import { Children, createContext, useState } from "react";

export const StickyNotesContext = createContext();

export const StickyNotesContextProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [filterType, setFilterType] = useState("ALL");
  const [flippedCards, setFlippedCards] = useState({});
  const [stickyNotes, setStickyNotes] = useState(
    JSON.parse(localStorage.getItem("stickyNotes")) ?? [],
  );
  const [noteForEdit, setNoteForEdit] = useState(null);

  const onDelete = (id) => {
    const newStickyNotes = stickyNotes.filter((note) => note.id !== id);
    localStorage.setItem("stickyNotes", JSON.stringify(newStickyNotes));
    setStickyNotes(newStickyNotes);
  };
  const onEdit = (id) => {
    setShowModal(true);
    setNoteForEdit(stickyNotes.find((note) => note.id === id));
  };

  const toggleFlip = (id) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredNotes = stickyNotes.filter((note) => {
    const matchesType = filterType === "ALL" || note.type === filterType;
    return matchesType;
  });

  return (
    <StickyNotesContext.Provider
      value={{
        showModal,
        setShowModal,
        filterType,
        setFilterType,
        flippedCards,
        setFlippedCards,
        stickyNotes,
        setStickyNotes,
        noteForEdit,
        setNoteForEdit,
        onDelete,
        onEdit,
        toggleFlip,
        filteredNotes
      }}
    >
      {children}
    </StickyNotesContext.Provider>
  );
};
