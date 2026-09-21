import { useState } from "react";

const useStickyNote = (note)=>{
    const [copied, setCopied] = useState(false);
    
      const handleCopy = (e) => {
        e.stopPropagation();
        if (!note?.codeSnippet) return;
        navigator.clipboard.writeText(note.codeSnippet);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      };
    
    return {
        handleCopy,
        copied,
        setCopied,
    }
}

export default useStickyNote;