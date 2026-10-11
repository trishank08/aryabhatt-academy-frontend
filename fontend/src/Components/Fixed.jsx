import { useState } from "react";

const  Fixed = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {show && (
        <a
          href="tel:+916267800659"
          className="block mb-3 bg-white text-black px-4 py-3 rounded-xl shadow-lg"
        >
          +91 6267800659
        </a>
      )}

      <button
        onClick={() => setShow(!show)}
        className="bg-[#c8f169] text-black px-5 py-3 rounded-full shadow-lg hover:scale-105 transition-all"
      >
        📞 Contact Us
      </button>
    </div>
  );
};
export default Fixed