import React, { useState } from "react";
import axios from "axios";
import { getAuth } from "firebase/auth";
import { FiPlus, FiUsers, FiMail } from "react-icons/fi";

const CreateGroup = () => {
  const [groupName, setGroupName] = useState("");
  const [members, setMembers] = useState(""); // comma-separated
  const [loading, setLoading] = useState(false);

  const handleCreate = async () => {
    setLoading(true);
    try {
      const auth = getAuth();
      const currentUser = auth.currentUser;

      if (!currentUser) {
        alert("You must be logged in to create a group.");
        return;
      }

      const token = await currentUser.getIdToken();

      const membersList = members.split(",").map((m) => m.trim()).filter(Boolean);

      await axios.post(
        "https://express-backend-esw.onrender.com/api/expenses",
        {
          name: groupName,
          members: membersList,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("✅ Group created successfully");
      setGroupName("");
      setMembers("");
    } catch (err) {
      console.error("❌ Error creating group:", err);
      alert("❌ Failed to create group");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="groups-container">
      <div className="groups-header">
        <h1 className="groups-title">
          <FiUsers className="section-icon" />
          Create New Group
        </h1>
        <p className="groups-subtitle">Organize expenses with friends and family</p>
      </div>

      <div className="create-group-card">
        <div className="form-group">
          <label className="form-label">
            Group Name
          </label>
          <div className="input-container">
            <FiUsers className="input-icon" />
            <input
              type="text"
              placeholder="Enter group name"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              className="form-input"
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">
            Member emails
          </label>
          <div className="input-container">
            <FiMail className="input-icon" />
            <input
              type="text"
              placeholder="user1@example.com, user2@example.com"
              value={members}
              onChange={(e) => setMembers(e.target.value)}
              className="form-input"
            />
          </div>
          <p className="input-hint">Separate emails with commas</p>
        </div>
        
        <button 
          onClick={handleCreate}
          disabled={loading || !groupName.trim()}
          className="create-btn"
        >
          <FiPlus className="btn-icon" />
          {loading ? 'Creating...' : 'Create Group'}
        </button>
      </div>

      <style jsx>{`
        .groups-container {
          padding: 2rem 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
          min-height: 100vh;
        }

        .groups-header {
          margin-bottom: 2.5rem;
          text-align: center;
        }

        .groups-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: #2d3748;
          margin: 0 0 0.5rem 0;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          justify-content: center;
        }

        .groups-subtitle {
          color: #718096;
          font-size: 1rem;
          margin: 0;
        }

        /* Cards */
        .create-group-card {
          background: #ffffff;
          border-radius: 1.25rem;
          padding: 2rem;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 
                      0 10px 10px -5px rgba(0, 0, 0, 0.04);
          margin-bottom: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(10px);
        }

        .section-icon {
          font-size: 1.5rem;
          color: #667eea;
        }

        /* Form Styles */
        .form-group {
          margin-bottom: 2rem;
          position: relative;
        }

        .form-label {
          display: block;
          margin-bottom: 0.75rem;
          color: #4a5568;
          font-weight: 600;
          font-size: 0.9375rem;
        }

        .input-container {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-icon {
          position: absolute;
          left: 1rem;
          color: #a0aec0;
          font-size: 1.1rem;
        }

        .form-input {
          width: 100%;
          padding: 0.85rem 1rem 0.85rem 2.75rem;
          border: 1px solid #e2e8f0;
          border-radius: 0.75rem;
          font-size: 1rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          background-color: #f8fafc;
          color: #2d3748;
        }

        .form-input::placeholder {
          color: #a0aec0;
        }

        .form-input:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
          background-color: #fff;
        }

        .input-hint {
          color: #718096;
          font-size: 0.8125rem;
          margin-top: 0.5rem;
          margin-left: 0.25rem;
        }

        /* Button Styles */
        .create-btn {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          padding: 1rem 1.5rem;
          border-radius: 0.75rem;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          transition: all 0.3s ease;
          width: 100%;
          justify-content: center;
          margin-top: 1rem;
          box-shadow: 0 4px 6px rgba(102, 126, 234, 0.2);
        }

        .create-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 7px 14px rgba(102, 126, 234, 0.3);
        }

        .create-btn:active {
          transform: translateY(0);
        }

        .create-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
          background: #a0aec0;
        }

        .btn-icon {
          font-size: 1.2rem;
        }

        @media (max-width: 480px) {
          .groups-container {
            padding: 1.5rem 1rem;
          }
          
          .create-group-card {
            padding: 1.5rem;
          }
          
          .groups-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default CreateGroup;