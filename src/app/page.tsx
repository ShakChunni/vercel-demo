"use client";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";

export default function Home() {
  useEffect(() => {
    const handleScroll = (event: Event) => {
      event.preventDefault();
      const targetId = (event.target as HTMLAnchorElement)
        .getAttribute("href")
        ?.substring(1);
      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    const links = document.querySelectorAll("nav a");
    links.forEach((link) => link.addEventListener("click", handleScroll));

    return () => {
      links.forEach((link) => link.removeEventListener("click", handleScroll));
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
      <nav className="bg-white shadow-md w-full p-4 fixed top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">CSE471</h1>
          <ul className="flex space-x-4">
            <li>
              <a href="#home" className="text-gray-700 hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-700 hover:text-blue-500">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-700 hover:text-blue-500">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <AnimatePresence>
        <motion.div
          id="home"
          className="flex flex-col items-center justify-center flex-grow p-8 pt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="bg-white w-[80%] p-8 rounded-lg shadow-lg">
            <header className="mb-8 text-center">
              <h1 className="text-4xl font-bold">Welcome to CSE471</h1>
              <p className="text-xl mt-4">System Analysis and Design</p>
            </header>
            <main className="flex flex-col items-center gap-8">
              <p className="text-lg text-center">
                This course introduces students to tools and techniques in
                systems analysis and design such as data flow diagrams and E-R
                diagrams.
              </p>
              <section id="about" className="w-full">
                <h2 className="text-2xl font-semibold mb-4">Course Outline</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Week 1: Introduction to System Analysis</li>
                  <li>Week 2: Data Flow Diagrams</li>
                  <li>Week 3: E-R Diagrams</li>
                  <li>Week 4: System Design Techniques</li>
                  <li>Week 5: Case Studies</li>
                  <li>Week 6: Project Work</li>
                </ul>
              </section>
              <section className="w-full">
                <h2 className="text-2xl font-semibold mb-4">Resources</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <a
                      href="https://developer.mozilla.org/en-US/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      MDN Web Docs
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.w3schools.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      W3Schools
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://reactjs.org/docs/getting-started.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      React Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://nextjs.org/docs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      Next.js Documentation
                    </a>
                  </li>
                </ul>
              </section>
              <section className="w-full">
                <h2 className="text-2xl font-semibold mb-4">
                  Meet the Instructor
                </h2>
                <div className="flex items-center space-x-4">
                  <FaUserCircle size={100} className="text-gray-700" />
                  <div>
                    <h3 className="text-xl font-bold">Hasnat Jamil Bhuiyan</h3>
                    <p className="text-gray-700">
                      Adjunct Lecturer @ Brac University | Former Undergrad
                      Teaching Assistant | CSE Graduate
                    </p>
                  </div>
                </div>
              </section>
              <section className="w-full">
                <h2 className="text-2xl font-semibold mb-4">Testimonials</h2>
                <ul className="space-y-4">
                  <li className="bg-gray-100 p-4 rounded-lg shadow">
                    <p className="text-gray-700">
                      &quot;This course was a game-changer for me. The practical
                      examples and hands-on projects helped me understand
                      complex concepts easily.&quot; - Student 1
                    </p>
                  </li>
                  <li className="bg-gray-100 p-4 rounded-lg shadow">
                    <p className="text-gray-700">
                      &quot;Hasnat is an amazing instructor. His teaching style
                      is engaging and he always makes sure everyone understands
                      the material.&quot; - Student 2
                    </p>
                  </li>
                </ul>
              </section>
              <section id="contact" className="w-full">
                <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="w-full p-2 border border-gray-300 rounded"
                      rows={4}
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Send
                  </button>
                </form>
              </section>
            </main>
            <footer className="mt-8 text-center">
              <p className="text-sm">
                &copy; 2024 CSE471. All rights reserved.
              </p>
            </footer>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
