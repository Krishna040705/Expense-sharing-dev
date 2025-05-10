// src/pages/UserProfile.jsx
import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

function UserProfile() {
  const auth = getAuth();
  const db = getFirestore();
  const user = auth.currentUser;

  const [profile, setProfile] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      if (user) {
        try {
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setProfile(docSnap.data());
          } else {
            setProfile({ ...profile, email: user.email || "" });
          }
        } catch (error) {
          console.error("Error fetching profile:", error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchProfile();
  }, [user]);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    if (user) {
      setIsSaving(true);
      try {
        const docRef = doc(db, "users", user.uid);
        await setDoc(docRef, profile, { merge: true });
        alert("Profile updated successfully!");
      } catch (error) {
        console.error("Error saving profile:", error);
        alert("Failed to update profile. Please try again.");
      } finally {
        setIsSaving(false);
      }
    }
  };

  // Dashboard container styles
  const dashboardStyles = {
    minHeight: "100vh",
    padding: "2rem",
    maxWidth: "1200px",
    margin: "0 auto",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    color: "#2d3748",
    position: "relative",
    overflow: "hidden",
    background: "linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start"
  };

  if (isLoading) {
    return (
      <div style={dashboardStyles}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "200px"
        }}>
          <div style={{
            width: "40px",
            height: "40px",
            border: "4px solid rgba(102, 126, 234, 0.2)",
            borderRadius: "50%",
            borderTopColor: "#667eea",
            animation: "spin 1s linear infinite",
            marginBottom: "1rem"
          }}></div>
          <p style={{ color: "#4a5568" }}>Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div style={dashboardStyles}>
      <div style={{
        background: "white",
        borderRadius: "12px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
        padding: "2.5rem",
        width: "100%",
        maxWidth: "500px",
        marginTop: "2rem",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        ":hover": {
          transform: "translateY(-2px)",
          boxShadow: "0 6px 24px rgba(0, 0, 0, 0.12)"
        }
      }}>
        <h2 style={{
          fontSize: "1.75rem",
          fontWeight: "600",
          color: "#2d3748",
          marginBottom: "2rem",
          textAlign: "center",
          position: "relative"
        }}>
          My Profile
          <span style={{
            display: "block",
            width: "60px",
            height: "4px",
            background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
            margin: "0.75rem auto 0",
            borderRadius: "2px"
          }}></span>
        </h2>

        <div style={{ marginBottom: "1.5rem" }}>
          <label style={{
            display: "block",
            marginBottom: "0.5rem",
            fontWeight: "500",
            color: "#4a5568",
            fontSize: "0.95rem"
          }}>Name:</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            style={{
              width: "100%",
              padding: "0.875rem 1rem",
              border: "1px solid #e2e8f0",
              borderRadius: "8px",
              fontSize: "1rem",
              transition: "all 0.3s ease",
              backgroundColor: "#f8fafc"
            }}
          />
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <label style={{
            display: "block",
            marginBottom: "0.5rem",
            fontWeight: "500",
            color: "#4a5568",
            fontSize: "0.95rem"
          }}>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            style={{
              width: "100%",
              padding: "0.875rem 1rem",
              border: "1px solid #e2e8f0",
              borderRadius: "8px",
              fontSize: "1rem",
              transition: "all 0.3s ease",
              backgroundColor: "#f8fafc"
            }}
          />
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <label style={{
            display: "block",
            marginBottom: "0.5rem",
            fontWeight: "500",
            color: "#4a5568",
            fontSize: "0.95rem"
          }}>Email:</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            disabled
            style={{
              width: "100%",
              padding: "0.875rem 1rem",
              border: "1px solid #e2e8f0",
              borderRadius: "8px",
              fontSize: "1rem",
              backgroundColor: "#edf2f7",
              color: "#718096",
              cursor: "not-allowed"
            }}
          />
        </div>

        <button
          onClick={handleSave}
          disabled={isSaving}
          style={{
            width: "100%",
            padding: "1rem",
            background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "1rem",
            fontWeight: "500",
            cursor: "pointer",
            transition: "all 0.3s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            opacity: isSaving ? 0.8 : 1,
            ...(isSaving ? {
              background: "#a0aec0"
            } : {
              ":hover": {
                background: "linear-gradient(90deg, #5a67d8 0%, #6b46c1 100%)",
                transform: "translateY(-1px)",
                boxShadow: "0 4px 12px rgba(102, 126, 234, 0.3)"
              }
            })
          }}
        >
          {isSaving && (
            <span style={{
              width: "18px",
              height: "18px",
              border: "3px solid rgba(255, 255, 255, 0.3)",
              borderRadius: "50%",
              borderTopColor: "white",
              animation: "spin 1s ease-in-out infinite"
            }}></span>
          )}
          {isSaving ? "Saving..." : "Save Profile"}
        </button>
      </div>
    </div>
  );
}

export default UserProfile;