import React from "react";

function Footer() {
  return (
    <div className="bg-gray-800 w-full h-[400px] grid items-center">
      <div className=" h-[100px] flex  justify-between items-center sm:text-[12px] text-[15px] text-white ml-3 mr-10">
        <div className="leading-[50px]">
          <p>
            {" "}
            <span>Address- </span>243 Wokingham Road, Earley, Reading, Banglore.
          </p>
          <p>
            <span>Helpline- </span>+9120163229
          </p>
        </div>
        <div className="flex space-x-5">
          <a
            href="https://www.facebook.com/profile.php?id=61557895856171"
            target="_blank"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://www.instagram.com/miilanindia/" target="_blank">
            <i className="bi bi-instagram"></i>
          </a>
          <p>
            <i className="bi bi-twitter"></i>
          </p>
          <p>
            <i className="bi bi-youtube"></i>
          </p>
        </div>
      </div>
      <div className="border border-black  h-[0.45px] text-center ml-5 mr-10">
        Copyright @Miilan 2024
      </div>
    </div>
  );
}

export default Footer;
