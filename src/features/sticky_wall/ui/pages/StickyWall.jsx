import React, { useState } from 'react';
import Navbar from '../../../../shared/ui/components/Navbar';
import {
  RiPushpinFill,
  RiEdit2Line,
  RiAddCircleLine,
  RiDiceLine,
  RiPriceTag3Line,
  RiArrowLeftRightLine,
  RiRestartLine,
  RiCloseLine,
  RiCheckboxCircleFill,
  RiEmotionUnhappyLine,
} from '@remixicon/react';
import Footer from '../../../../shared/ui/components/Footer';

const STICKY_NOTES = [
  {
    id: 1,
    type: 'W',
    topic: 'Two-Pointers',
    tilt: '-rotate-1',
    bgFront: 'bg-[#FFF8B8]',
    problem: '#5 Longest Palindromic Substring',
    title: 'Two Pointers for Palindromes',
    quote: '"Expanding outwards from center is 100x easier than memoizing substring slices. O(n²) time but O(1) space and zero headaches."',
    meta: 'Time: O(n²) | Space: O(1)',
    badgeIcon: 'verified',
    badgeText: 'W',
    pinColor: 'bg-error',
    codeSnippet: `def expand(l, r):
    while l >= 0 and r < len(s) and s[l] == s[r]:
        l -= 1
        r += 1
    return s[l + 1:r]

for i in range(len(s)):
    p1 = expand(i, i)       # Odd
    p2 = expand(i, i + 1)   # Even
    res = max(res, p1, p2, key=len)`,
    statusBottom: 'Status: CERTIFIED COOKED ⚡',
    perfBottom: 'Clean run: 94ms',
  },
  {
    id: 2,
    type: 'L',
    topic: 'Binary-Search',
    tilt: 'rotate-1',
    bgFront: 'bg-[#FFD1E3]',
    problem: '#704 Binary Search',
    title: 'Integer Overflow in Binary Search',
    quote: '"Wrote (low + high) // 2 and failed on huge arrays in Java. Always write low + (high - low) // 2. Tattoo this on my forehead."',
    meta: 'Affectionate L - Never again',
    badgeIcon: 'sentiment_very_dissatisfied',
    badgeText: 'L',
    tapeText: 'WASH-TAPE #09',
    codeSnippet: `// 🛑 WRONG: can overflow 32-bit int
int mid = (low + high) / 2;

// ✅ CORRECT: safe from overflow
int mid = low + (high - low) / 2;

// Bitwise shift alternative:
int mid = (low + high) >>> 1;`,
    statusBottom: 'Trauma Level: HIGH 💥',
    perfBottom: 'Lesson learned',
  },
  {
    id: 3,
    type: 'W',
    topic: 'Two-Pointers',
    tilt: '-rotate-1',
    bgFront: 'bg-[#CEF5FF]',
    problem: '#141 Linked List Cycle',
    title: "Fast & Slow Pointers (Floyd's Cycle)",
    quote: '"Tortoise and Hare is pure black magic. If fast == slow, cycle detected. To find start: reset one pointer to head and move both 1 step. Mind = blown."',
    meta: 'Cycle Start Math: 2(F+a) = F+kC+a',
    badgeIcon: 'celebration',
    badgeText: 'W',
    pinColor: 'bg-tertiary',
    codeSnippet: `slow = fast = head
while fast and fast.next:
    slow = slow.next
    fast = fast.next.next
    if slow == fast:
        slow = head
        while slow != fast:
            slow, fast = slow.next, fast.next
        return slow # Cycle origin
return None`,
    statusBottom: 'Eureka Moment: 10/10 🔮',
    perfBottom: 'Zero extra memory',
  },
  {
    id: 4,
    type: 'L',
    topic: 'Dynamic-Programming',
    tilt: 'rotate-1',
    bgFront: 'bg-[#FFE2C2]',
    problem: '#416 Partition Equal Subset Sum',
    title: 'The 0/1 Knapsack Off-by-One',
    quote: '"Iterating forward through capacity instead of backwards overwrote previous item choices! In 1D DP knapsack: ALWAYS loop capacity backwards."',
    meta: 'Villain era trigger #4',
    badgeIcon: 'skull',
    badgeText: 'L',
    pinColor: 'bg-error',
    codeSnippet: `dp = [True] + [False] * target

for num in nums:
    # BACKWARDS loop is non-negotiable:
    for c in range(target, num - 1, -1):
        dp[c] = dp[c] or dp[c - num]

return dp[target]`,
    statusBottom: 'Debugging time lost: 2.5 hrs',
    perfBottom: 'Fixed permanently',
  },
  {
    id: 5,
    type: 'W',
    topic: 'Stacks & Queues',
    tilt: '-rotate-1',
    bgFront: 'bg-[#E5FBB8]',
    problem: '#739 Daily Temperatures',
    title: 'Monotonic Decreasing Stack',
    quote: '"Whenever problem asks for \'next greater element\', stop thinking nested loops. Monotonic stack solves it in one pass O(n). Certified cheat code."',
    meta: 'O(N) single-pass elegance',
    badgeIcon: 'bolt',
    badgeText: 'W',
    tapeText: 'CHEAT-CODE',
    codeSnippet: `res = [0] * len(T)
stack = [] # Store pairs: [temp, index]

for i, t in enumerate(T):
    while stack and t > stack[-1][0]:
        prev_t, prev_i = stack.pop()
        res[prev_i] = i - prev_i
    stack.append((t, i))
return res`,
    statusBottom: 'Interview Pass Rate: 100% 🎯',
    perfBottom: 'O(n) Time / O(n) Space',
  },
  {
    id: 6,
    type: 'L',
    topic: 'Bit & Mod',
    tilt: 'rotate-1',
    bgFront: 'bg-[#E8DEFF]',
    problem: '#28 First Occurrence (Rabin-Karp)',
    title: 'Modding in Python vs C++',
    quote: '"Negative numbers mod differently in Python than C++. If doing rolling hash or Rabin-Karp, remember: (val % M + M) % M."',
    meta: 'Language quirk pitfall',
    badgeIcon: 'warning',
    badgeText: 'L',
    pinColor: 'bg-secondary',
    codeSnippet: `// In Python: -7 % 5 == 3 (Floored)

// To guarantee positive modulo in Java/C++:
long long hash = (h1 - h2) % MOD;
if (hash < 0) hash += MOD;

// Or universal formula:
int safe_val = ((val % M) + M) % M;`,
    statusBottom: 'Rabin-Karp Safety Check',
    perfBottom: 'Hash collision immune',
  },
];

const StickyWall = ({
  onNavigate = () => { },
  isDark = false,
  onToggleTheme = () => { },
}) => {
  const [filterType, setFilterType] = useState('ALL');
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [flippedCards, setFlippedCards] = useState({});
  const [showModal, setShowModal] = useState(false);

  const toggleFlip = (id) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredNotes = STICKY_NOTES.filter((note) => {
    const matchesType = filterType === 'ALL' || note.type === filterType;
    const matchesTopic = selectedTopic === 'All' || note.topic === selectedTopic;
    return matchesType && matchesTopic;
  });

  return (
    <div className="min-h-screen bg-canvas-bg desk-grid text-on-surface font-body-md text-body-md selection:bg-primary-container selection:text-on-primary-fixed">
      {/* Top Header */}
      <Navbar
        activePage="sticky-wall"
        onNavigate={onNavigate}
        isDark={isDark}
        onToggleTheme={onToggleTheme}
      />

      <main className="w-full pt-20 bg-transparent min-h-screen">
        <div className="flex flex-col w-full px-gutter lg:px-gutter-desktop pb-space-xl">
          {/* Board Header & Sharpie Marginalia */}
          <div className="relative w-full pt-space-md mb-space-lg">
            {/* Push pin graphic at top */}
            <div className="absolute -top-3 left-12 w-6 h-6 rounded-full bg-secondary shadow-md flex items-center justify-center z-20 pointer-events-none border border-on-surface">
              <div className="w-2 h-2 rounded-full bg-surface" />
            </div>

            <div className="bg-surface-container-lowest p-space-md lg:p-space-lg shadow-xl relative overflow-hidden border-2 border-on-surface">
              {/* Tape Strip Decoration */}
              <div className="absolute -top-3 right-16 w-36 h-8 bg-primary-container/80 backdrop-blur-sm -rotate-3 z-10 shadow-sm pointer-events-none flex items-center justify-center border border-on-surface/30">
                <span className="font-label-sm text-label-sm text-on-primary-fixed tracking-widest uppercase opacity-75 font-bold">
                  // SCRAP_VAULT_V2
                </span>
              </div>

              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md">
                <div className="space-y-space-xs max-w-2xl">
                  <div className="inline-flex items-center gap-2 bg-secondary text-on-secondary px-space-xs py-0.5 shadow-sm -rotate-1 border border-on-surface">
                    <RiPushpinFill className="w-4 h-4" />
                    <span className="font-label-md text-label-md uppercase tracking-wider font-bold">
                      BOARD ARCHIVE // MEMORY LEAKS &amp; WINS
                    </span>
                  </div>
                  <h1 className="font-display-lg text-display-lg text-on-surface tracking-tight leading-none">
                    STICKY NOTES &amp; TRAUMA DUMPS <span className="text-secondary">📌</span>
                  </h1>
                  <p className="font-body-lg text-body-lg text-on-surface-variant italic font-medium flex items-center gap-2">
                    <RiEdit2Line className="w-5 h-5 text-primary" />
                    "The hard lessons so we never repeat the villain era."
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-space-xs">
                  <button
                    type="button"
                    onClick={() => setShowModal(true)}
                    className="group flex items-center gap-2 px-space-md py-space-xs bg-primary-container text-on-primary-fixed font-label-md text-label-md uppercase tracking-wider shadow-md hover:shadow-xl active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer font-bold border border-on-surface"
                  >
                    <RiAddCircleLine className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                    <span>+ PIN NEW NOTE</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFilterType('ALL')}
                    className={`px-space-sm py-space-xs font-label-md text-label-md uppercase tracking-wider shadow-sm transition-all cursor-pointer font-bold border border-on-surface ${filterType === 'ALL'
                      ? 'bg-inverse-surface text-inverse-on-surface'
                      : 'bg-surface-container-high text-on-surface hover:bg-surface-variant'
                      }`}
                  >
                    ALL (6)
                  </button>
                  <button
                    type="button"
                    onClick={() => setFilterType('W')}
                    className={`px-space-sm py-space-xs font-label-md text-label-md uppercase tracking-wider shadow-sm transition-all cursor-pointer font-bold border border-on-surface ${filterType === 'W'
                      ? 'bg-inverse-surface text-inverse-on-surface'
                      : 'bg-surface-container-high text-on-surface hover:bg-surface-variant'
                      }`}
                  >
                    WINS (3) ⚡
                  </button>
                  <button
                    type="button"
                    onClick={() => setFilterType('L')}
                    className={`px-space-sm py-space-xs font-label-md text-label-md uppercase tracking-wider shadow-sm transition-all cursor-pointer font-bold border border-on-surface ${filterType === 'L'
                      ? 'bg-inverse-surface text-inverse-on-surface'
                      : 'bg-surface-container-high text-on-surface hover:bg-surface-variant'
                      }`}
                  >
                    LESSONS (3) 💀
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setFlippedCards({});
                    }}
                    title="Flip All Cards"
                    className="px-space-xs py-space-xs bg-surface-container-low text-on-surface-variant hover:text-on-surface font-label-md text-label-md uppercase shadow-sm cursor-pointer border border-on-surface"
                  >
                    <RiDiceLine className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Topic Post-it Tabs */}
              <div className="flex flex-wrap items-center gap-space-xs mt-space-md pt-space-xs">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mr-2 flex items-center gap-1 font-bold">
                  <RiPriceTag3Line className="w-3.5 h-3.5" /> TOPICS:
                </span>
                {['All', 'Two-Pointers', 'Binary-Search', 'Dynamic-Programming', 'Stacks & Queues', 'Bit & Mod'].map(
                  (topic) => (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => setSelectedTopic(topic)}
                      className={`px-3 py-1 font-code-md text-label-sm uppercase shadow-sm transition-transform cursor-pointer border border-on-surface ${selectedTopic === topic
                        ? 'bg-primary-container text-on-primary-fixed font-bold -rotate-1'
                        : 'bg-surface-container-high text-on-surface hover:rotate-0'
                        }`}
                    >
                      #{topic}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Interactive Scrapboard Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10 pt-space-sm items-start">
            {filteredNotes.map((note) => {
              const isFlipped = flippedCards[note.id];
              return (
                <div
                  key={note.id}
                  className={`group [perspective:1200px] ${note.tilt} hover:rotate-0 transition-transform duration-300`}
                >
                  <div
                    className="relative w-full min-h-[380px] transition-transform duration-500 [transform-style:preserve-3d]"
                    style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
                  >
                    {/* Front Face */}
                    <div
                      className={`absolute inset-0 w-full h-full ${note.bgFront} text-on-background p-space-lg flex flex-col justify-between border-2 border-on-surface shadow-[4px_4px_0px_#111116] [backface-visibility:hidden]`}
                    >
                      {/* Pushpin or Tape */}
                      {note.tapeText ? (
                        <div className="absolute -top-3 left-10 w-28 h-6 bg-tertiary-container/85 border border-on-surface/40 -rotate-2 shadow-sm pointer-events-none flex items-center justify-center">
                          <span className="font-label-sm text-label-sm text-on-tertiary-container tracking-wider font-bold">
                            {note.tapeText}
                          </span>
                        </div>
                      ) : (
                        <div
                          className={`absolute -top-3.5 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full ${note.pinColor || 'bg-error'} border border-on-surface shadow-[2px_2px_0px_#111116] flex items-center justify-center z-30 pointer-events-none`}
                        >
                          <div className="w-2 h-2 rounded-full bg-surface opacity-80" />
                        </div>
                      )}

                      {/* Corner Badge */}
                      <div
                        className={`absolute top-4 right-4 ${note.type === 'W'
                          ? 'bg-primary-container text-on-primary-fixed'
                          : 'bg-secondary-container text-on-secondary-container'
                          } font-display-md text-headline-lg px-2.5 py-1 border border-on-surface shadow-[3px_3px_0px_#111116] rotate-2 z-20 font-black flex items-center gap-1`}
                      >
                        <span>{note.badgeText}</span>
                        {note.type === 'W' ? (
                          <RiCheckboxCircleFill className="w-4 h-4" />
                        ) : (
                          <RiEmotionUnhappyLine className="w-4 h-4" />
                        )}
                      </div>

                      <div className="mt-4 space-y-space-xs">
                        <span className="font-label-sm text-label-sm uppercase bg-surface/60 text-on-surface-variant px-2 py-0.5 border border-on-surface/50 shadow-sm font-bold">
                          {note.problem}
                        </span>
                        <h3 className="font-display-md text-headline-md text-on-background pt-1 leading-tight font-bold">
                          {note.title}
                        </h3>
                        <p className="font-body-lg text-body-md text-on-background/90 pt-space-xs leading-relaxed italic font-medium">
                          {note.quote}
                        </p>
                      </div>

                      <div className="pt-space-md flex items-end justify-between">
                        <span className="font-code-md text-label-sm bg-surface/70 px-2 py-1 text-on-surface font-bold border border-on-surface/40">
                          {note.meta}
                        </span>
                        <button
                          type="button"
                          onClick={() => toggleFlip(note.id)}
                          className="flex items-center gap-1 bg-on-background text-surface px-2.5 py-1 font-label-sm text-label-sm uppercase font-bold border border-on-surface shadow-[2px_2px_0px_#111116] hover:bg-primary transition-colors cursor-pointer"
                        >
                          <span>Code 📄</span>
                          <RiArrowLeftRightLine className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Back Face */}
                    <div className="absolute inset-0 w-full h-full bg-inverse-surface text-inverse-on-surface p-space-lg flex flex-col justify-between border-2 border-on-surface shadow-[4px_4px_0px_#111116] [transform:rotateY(180deg)] [backface-visibility:hidden]">
                      <div>
                        <div className="flex items-center justify-between pb-2">
                          <span className="font-label-sm text-label-sm text-primary-container font-bold uppercase">
                            // PATTERN CHEAT-SHEET
                          </span>
                          <button
                            type="button"
                            onClick={() => toggleFlip(note.id)}
                            className="font-label-sm text-label-sm text-inverse-on-surface/80 hover:text-primary-container uppercase flex items-center gap-1 cursor-pointer"
                          >
                            <span>Back</span>
                            <RiRestartLine className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <pre className="font-code-md text-label-sm bg-surface-container-lowest/10 text-surface p-2.5 overflow-x-auto leading-tight border border-surface/20">
                          <code>{note.codeSnippet}</code>
                        </pre>
                      </div>

                      <div className="pt-2 flex items-center justify-between font-label-sm text-label-sm text-inverse-on-surface/70 border-t border-surface/20">
                        <span>{note.statusBottom}</span>
                        <span className="text-primary-fixed-dim font-bold">{note.perfBottom}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* New Note Modal */}
          {showModal && (
            <div className="fixed inset-0 z-50 bg-inverse-surface/80 backdrop-blur-sm flex items-center justify-center p-gutter">
              <div className="relative w-full max-w-lg bg-surface-container-lowest p-space-lg shadow-2xl rotate-1 border-2 border-on-surface">
                <div className="flex items-center justify-between pb-space-sm">
                  <div className="flex items-center gap-2">
                    <RiPushpinFill className="w-6 h-6 text-secondary" />
                    <h2 className="font-display-md text-headline-md text-on-surface font-bold">PIN A TRAUMA OR WIN</h2>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="p-1 hover:bg-surface-variant font-bold text-on-surface cursor-pointer"
                  >
                    <RiCloseLine className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-space-sm mt-space-md">
                  <div>
                    <label className="block font-label-sm text-label-sm uppercase text-on-surface-variant mb-1 font-bold">
                      Problem Name &amp; ID
                    </label>
                    <input
                      type="text"
                      placeholder="#33 Search in Rotated Sorted Array"
                      className="w-full bg-surface-container-high px-3 py-2 font-code-md text-code-md text-on-surface focus:outline-none border border-on-surface"
                    />
                  </div>
                  <div>
                    <label className="block font-label-sm text-label-sm uppercase text-on-surface-variant mb-1 font-bold">
                      Catchy Takeaway Title
                    </label>
                    <input
                      type="text"
                      placeholder="One-liner realization..."
                      className="w-full bg-surface-container-high px-3 py-2 font-body-md text-body-md text-on-surface focus:outline-none border border-on-surface"
                    />
                  </div>
                  <div>
                    <label className="block font-label-sm text-label-sm uppercase text-on-surface-variant mb-1 font-bold">
                      Handwritten Sharpie Dump
                    </label>
                    <textarea
                      rows="3"
                      placeholder="Explain the gotcha or breakthrough like you are venting to a peer..."
                      className="w-full bg-surface-container-high p-3 font-body-md text-body-md text-on-surface focus:outline-none border border-on-surface"
                    />
                  </div>
                  <div className="flex items-center justify-end gap-space-xs pt-space-xs">
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
                      className="px-space-md py-2 bg-surface-container text-on-surface font-label-md text-label-md uppercase font-bold border border-on-surface cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
                      className="px-space-lg py-2 bg-primary-container text-on-primary-fixed font-label-md text-label-md uppercase font-bold shadow-md hover:shadow-xl cursor-pointer border border-on-surface"
                    >
                      Slap Onto Wall 📌
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
     <Footer/>
    </div>
  );
}

export default StickyWall
