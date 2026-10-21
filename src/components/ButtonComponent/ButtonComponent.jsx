import React from 'react';

const ButtonComponent = () => {
  return (
    <div>
      {/* Hovering here shows "Click Me" */}
      <button data-cursor-text="Click Me!">Submit</button>

      {/* Hovering here shows "Watch Video" */}
      {/* <div data-cursor-text="Watch Video" className="video-thumbnail">
        <img src="your-thumbnail.jpg" alt="Video" />
      </div> */}
    </div>
  );
};

export default ButtonComponent;