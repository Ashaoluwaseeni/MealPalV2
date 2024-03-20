// eslint-disable-next-line no-unused-vars
import React from "react";
import avatar from "../../assets/images/avatar.jpg";

// eslint-disable-next-line react/prop-types
const Comment = ({ name, comment, image }) => {
  return (
    <div className="flex items-center mt-2 w-full">
      <div className="flex -space-x-1 overflow-hidden">
        <img
          className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
          src={image || avatar}
          alt="image"
        />
      </div>
      <div className="flex flex-col items-start bg-gray-100 rounded-2xl p-1 max-w-[600px]">
        <p className="font-roboto text-black text-sm no tracking-normal leading-none p-1 font-medium">
          {name}
        </p>
        <p className="font-roboto text-black text-sm no tracking-normal leading-none p-1 font-medium">
          {comment}
        </p>
      </div>
    </div>
  );
};

export default Comment;
