import React from "react";
import "./createhashplus.css";
const CreateHashplus = () => {
  return (
    <form>
      <div className="input-group">
        <label htmlFor="Title">Title</label>
        <input
          type="text"
          id="Title"
          name="title"
          //   value={formData.title}
          placeholder="#+React"
          required
          //   onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label htmlFor="Description">Description</label>
        <textarea
          type="text"
          rows="6"
          id="Description"
          name="description"
          //   value={formData.description}
          placeholder="Its the description"
          required
          //   onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label htmlFor="imageUrl">Recepient Address</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          placeholder="Address"
          required
          //   onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="Date">Date</label>
        <input type="date" id="Date" name="validDate" />
      </div>

      <button className="form-submit-button" type="submit">
        Create
      </button>
    </form>
  );
};

export default CreateHashplus;
