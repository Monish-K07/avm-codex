
import React from "react";

export default function CodeXLandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="bg-black/60 text-white py-6 px-4 text-center text-3xl font-bold uppercase tracking-wider">
        AVM CodeX – Learn the Code. Crack the Future.
      </header>

      <main className="max-w-5xl mx-auto p-6 grid gap-8">
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-2">What is AVM CodeX?</h2>
          <p>
            AVM CodeX is a long-term mentorship and placement-focused program
            for 12th-completed students who want to build a career in
            Computer Science, IT, or Software Development.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">Who is it for?</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>12th-completed students (any board)</li>
            <li>Planning to pursue CS / IT / BCA / B.Sc. CS / diploma</li>
            <li>Even students not joining college but aiming for tech jobs</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">What Will You Learn?</h2>
          <div className="grid gap-4">
            <div>
              <h3 className="font-semibold">Phase 1: Foundations</h3>
              <p>Programming basics, logic building, and mini challenges.</p>
            </div>
            <div>
              <h3 className="font-semibold">Phase 2: Core Programming + DSA</h3>
              <p>Arrays, strings, recursion, patterns, and DSA concepts.</p>
            </div>
            <div>
              <h3 className="font-semibold">Phase 3: Web Development</h3>
              <p>HTML, CSS, JS, GitHub, and mini project hosting.</p>
            </div>
            <div>
              <h3 className="font-semibold">Phase 4: Placement Preparation</h3>
              <p>Resume, LinkedIn, soft skills, interviews, aptitude, mock rounds.</p>
            </div>
            <div>
              <h3 className="font-semibold">Phase 5: Launch Mode</h3>
              <p>Internship help, project showcase, real mentoring until placement.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">What Makes CodeX Special?</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>No spoon-feeding: You’ll be guided to learn on your own.</li>
            <li>Problem-solving mindset through daily challenges.</li>
            <li>Game-style learning with XP, badges & levels.</li>
            <li>Mentors from real tech placements guiding you.</li>
            <li>Fun, competitive, and supportive environment.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">How it Works</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Summer Rehearsal: Daily coaching during holidays (free)</li>
            <li>Official Launch: August onward, weekends + tasks</li>
            <li>No fixed end date — we guide till you succeed</li>
          </ul>
        </section>

        <section className="bg-gray-100 p-6 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-2">Ready to Join the CodeX Journey?</h2>
          <p className="mb-4">Think. Solve. Win. Let’s build your tech future together.</p>
          <button className="bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-800">
            Contact Us to Get Started
          </button>
        </section>
      </main>

      <footer className="text-center py-4 text-sm text-gray-500">
        © 2025 AVM CodeX. Powered by AVM Institute.
      </footer>
    </div>
  );
}
