import React from "react";

function ProfileImage({ user }) {
  return <img src={user.image} className="profile" alt="profile" />;
}

export default ProfileImage;
