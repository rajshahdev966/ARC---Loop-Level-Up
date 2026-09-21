import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import React, { useEffect } from "react";


const useNoteModal = (noteForEdit, setShowModal, setStickyNotes, setNoteForEdit, stickyNotes) => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      type: noteForEdit?.type || "W",
      language: noteForEdit?.language || "cpp",
      codeSnippet: noteForEdit?.codeSnippet || "",
      title: noteForEdit?.title || "",
      quote: noteForEdit?.quote || "",
      bgFront: noteForEdit?.bgFront || "bg-[#FFF8B8]",
    },
  });

  // Watch selected language & color
  const selectedLanguage = watch("language");
  const selectedBg = watch("bgFront");

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setShowModal(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setShowModal]);

  const noteSubmit = (data) => {
    const stickyNote = {
      type: data.type,
      language: data.language,
      codeSnippet: data.codeSnippet,
      title: data.title,
      quote: data.quote,
      bgFront: data.bgFront || "bg-[#FFF8B8]",
      tilt: stickyNotes.at(-1)?.tilt === "rotate-1" ? "-rotate-1" : "rotate-1",
      badgeText: data.type,
    };
    let newStickyNotes;
    if (!noteForEdit) {
      newStickyNotes = [...stickyNotes, { ...stickyNote, id: nanoid() }];
    } else {
      newStickyNotes = stickyNotes.map((note) =>
        note.id === noteForEdit.id ? { ...stickyNote, id: note.id } : note,
      );
    }
    localStorage.setItem("stickyNotes", JSON.stringify(newStickyNotes));
    setStickyNotes(newStickyNotes);
    setShowModal(false);
    setNoteForEdit(null);
    console.log("Submitted Note Data:", data);
    reset();
  };

  return {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    errors,
    selectedBg,
    selectedLanguage,
    noteSubmit,
  };
};

export default useNoteModal;