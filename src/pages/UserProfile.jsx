import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext"; // Assuming you have an AuthContext for handling user authentication

const UserProfile = () => {
  const { user } = useAuth(); // Get the user from AuthContext (you can change this depending on your setup)
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch profile data from backend
  useEffect(() => {
    if (user) {
      axios
        .get("/api/profile", {
          headers: {
            Authorization: `Bearer ${user.token}`, // Assuming user.token contains the Firebase ID token
          },
        })
        .then((response) => {
          setProfile(response.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching profile:", err);
          setError("Failed to fetch profile");
          setLoading(false);
        });
    }
  }, [user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div style={styles.profileContainer}>
      <h2>Profile</h2>
      <div style={styles.profileDetails}>
        <img
          src={profile.photoURL}
          alt="Profile"
          style={styles.profilePhoto}
        />
        <div style={styles.profileInfo}>
          <h3>{profile.name}</h3>
          <p>Email: {profile.email}</p>
          <p>Last login: {new Date(profile.lastLogin).toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  profileContainer: {
    padding: "20px",
    textAlign: "center",
  },
  profileDetails: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
  },
  profilePhoto: {
    borderRadius: "50%",
    marginRight: "20px",
    width: "150px",
    height: "150px",
  },
  profileInfo: {
    textAlign: "left",
    fontSize: "18px",
  },
};

export default UserProfile;
