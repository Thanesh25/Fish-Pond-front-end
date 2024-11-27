import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "../App.css";

function HomePage() {
  const [formData, setFormData] = useState({
    temp: "",
    pressure: "",
    gasType: "oxygen",
    solar: "",
    floatSensor: "",
  });

  const navigate = useNavigate(); // Hook for navigation

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Save data to localStorage (or Context)
    localStorage.setItem("formData", JSON.stringify(formData));
    // Navigate to ChartPage
    navigate("/chart");
  };

  return (
    <div className="homepage-container">
      <h1 className="homepage-title">Fish Pond</h1>

      <form className="homepage-form" onSubmit={handleSubmit}>
        {/* Temperature Input */}
        <div className="form-group">
          <label htmlFor="temp">Temperature:</label>
          <input
            className="form-input"
            type="text"
            name="temp"
            value={formData.temp}
            onChange={handleChange}
            placeholder="Water Temperature"
            required
          />
        </div>

        {/* Gas Section */}
        <div className="form-group">
          <label htmlFor="Gas">Gas:</label>
          <div className="nested-group">
            <div className="form-subgroup">
              <label htmlFor="pressure">Pressure:</label>
              <input
                className="form-input"
                type="number"
                name="pressure"
                value={formData.pressure}
                onChange={handleChange}
                placeholder="Gas Pressure"
              />
            </div>
            <div className="form-subgroup">
              <label htmlFor="type-Gas">Type:</label>
              <select
                className="form-select"
                name="gasType"
                value={formData.gasType}
                onChange={handleChange}
              >
                <option value="oxygen">Oxygen</option>
                <option value="Ammonia">Ammonia</option>
              </select>
            </div>
          </div>
        </div>

        {/* Solar Input */}
        <div className="form-group">
          <label htmlFor="solar">Solar:</label>
          <input
            className="form-input"
            type="text"
            name="solar"
            value={formData.solar}
            onChange={handleChange}
            placeholder="Solar Status"
          />
        </div>

        {/* Float Sensor Input */}
        <div className="form-group">
          <label htmlFor="float">Float Sensor:</label>
          <input
            className="form-input"
            type="number"
            name="floatSensor"
            value={formData.floatSensor}
            onChange={handleChange}
            placeholder="Float Sensor Reading"
          />
        </div>

        {/* Submit Button */}
        <button className="form-button" type="submit">
          Enter
        </button>
      </form>
    </div>
  );
}

export default HomePage;
