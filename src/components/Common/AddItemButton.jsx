import React from "react";

const AddItemButton = () => {
  return (
    <div>
      <button className="add-item-button">
        <span className="button-text">Add Attendance</span>
        <span className="icon-container">
          <svg
            className="icon"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="12" x2="12" y1="5" y2="19"></line>
            <line x1="5" x2="19" y1="12" y2="12"></line>
          </svg>
        </span>
      </button>
      <style jsx>{`
        .add-item-button {
          position: relative;
          margin-left: auto;
          width: 12rem; /* 36/4 = 9rem */
          height: 2.5rem; /* 10/4 = 2.5rem */
          border-radius: 0.5rem;
          border: 1px solid #1c3323;
          background-color: #1c3323;
          cursor: pointer;
          display: flex;
          align-items: center;
          transition: background-color 0.3s ease;
        }

        .add-item-button:hover {
          background-color: #1c3523;
        }

        .button-text {
          color: #e2e8f0;
          font-weight: 600;
          margin-left: 2rem;
          transition: transform 0.3s ease;
        }

        .add-item-button:hover .button-text {
          transform: translateX(5rem);
          color: #00000000;
        }

        .icon-container {
          position: absolute;
          right: 0;
          height: 100%;
          width: 2.5rem;
          border-radius: 0.5rem;
          background-color: #1c3323;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease, width 0.3s ease;
        }

        .add-item-button:hover .icon-container {
          transform: translateX(0);
          width: 100%;
        }

        .icon {
          width: 2rem;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default AddItemButton;
