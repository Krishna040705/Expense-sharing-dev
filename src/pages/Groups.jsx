import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiPlus, FiUsers } from 'react-icons/fi';

function Groups() {
  const [groupName, setGroupName] = useState("");
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(false);

  const idToken = window.localStorage.getItem('idToken');

  const fetchGroups = async () => {
    try {
      const response = await axios.get("https://express-backend-esw.onrender.com/api/expenses", {
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      });
      setGroups(response.data);
    } catch (error) {
      console.error("Error fetching groups:", error);
    }
  };

  useEffect(() => {
    fetchGroups();
  }, []);

  const handleCreateGroup = async () => {
    if (!groupName.trim()) {
      alert("Please enter a group name");
      return;
    }

    try {
      setLoading(true);
      await axios.post("https://express-backend-esw.onrender.com/api/expenses", { groupName }, {
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      });
      alert("Group created successfully!");
      setGroupName("");
      fetchGroups();
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Error creating group");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="groups-container">
      {/* Header */}
      <div className="groups-header">
        <h1 className="groups-title">
          Groups
        </h1>
      </div>

      {/* Create Group Section */}
      <div className="create-group-card">
        <h2 className="section-title">
          <FiUsers className="section-icon" />
          Create New Group
        </h2>
        
        <div className="form-group">
          <label className="form-label">
            Group Name
          </label>
          <input
            type="text"
            placeholder="Enter group name"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            className="form-input"
          />
        </div>
        
        <button 
          onClick={handleCreateGroup}
          disabled={loading || !groupName.trim()}
          className="create-btn"
        >
          <FiPlus className="btn-icon" />
          {loading ? 'Creating...' : 'Create Group'}
        </button>
      </div>

      {/* Groups List Section */}
      <div className="groups-list-card">
        <h2 className="section-title">
          Your Groups
        </h2>
        {groups.length === 0 ? (
          <p className="empty-state">No groups yet. Create one!</p>
        ) : (
          <ul className="groups-list">
            {groups.map(group => (
              <li key={group.id} className="group-item">
                {group.groupName}
              </li>
            ))}
          </ul>
        )}
      </div>

      <style jsx>{`
        .groups-container {
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .groups-header {
          margin-bottom: 2rem;
        }

        .groups-title {
          font-size: 2rem;
          font-weight: 700;
          color: #1f2937;
          margin: 0;
        }

        /* Cards */
        .create-group-card,
        .groups-list-card {
          background: #ffffff;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          margin-bottom: 1.5rem;
        }

        .section-title {
          font-size: 1.25rem;
          color: #1f2937;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .section-icon {
          font-size: 1.1rem;
          color: #4f46e5;
        }

        /* Form Styles */
        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-label {
          display: block;
          margin-bottom: 0.5rem;
          color: #6b7280;
          font-weight: 500;
          font-size: 0.9375rem;
        }

        .form-input {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid #e5e7eb;
          border-radius: 0.5rem;
          font-size: 1rem;
          transition: all 0.2s;
        }

        .form-input:focus {
          outline: none;
          border-color: #4f46e5;
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
        }

        /* Button Styles */
        .create-btn {
          background: #4f46e5;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.2s;
        }

        .create-btn:hover {
          background: #6366f1;
        }

        .create-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .btn-icon {
          font-size: 1.1rem;
        }

        /* Groups List */
        .groups-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .group-item {
          padding: 1rem;
          border-bottom: 1px solid #e5e7eb;
          font-weight: 500;
        }

        .group-item:last-child {
          border-bottom: none;
        }

        /* Empty State */
        .empty-state {
          color: #6b7280;
          text-align: center;
          padding: 2rem 0;
        }
      `}</style>
    </div>
  );
}

export default Groups;