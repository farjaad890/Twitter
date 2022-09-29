import React from "react";
import { createHashTagPlus } from "../../helpers";
import "./createhashplus.css";
const CreateHashplus = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const { Date, title, description, Address } = e.target;
    const d = new window.Date(Date.value.toString());
    const date = d.toISOString();
    const Timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    console.log("This is working");
    console.log(Date.value);
    console.log(title.value);
    console.log(description.value);
    console.log(Address.value);
    console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);
    console.log(date);
    var raw = {
      text: title.value,
      expiry: date,
      donateTo: Address.value,
      timezone: Timezone,
      description: description.value,
    };
    const parsedResp = await createHashTagPlus(raw);
    console.log(parsedResp);
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="input-group">
        <label htmlFor="Title">Title</label>
        <input
          type="text"
          id="Title"
          name="title"
          placeholder="#+React"
          required
        />
      </div>

      <div className="input-group">
        <label htmlFor="Description">Description</label>
        <textarea
          type="text"
          rows="6"
          id="Description"
          name="description"
          placeholder="Its the description"
          required
        />
      </div>

      <div className="input-group">
        <label htmlFor="imageUrl">Recepient Address</label>
        <input type="text" name="Address" placeholder="Address" required />
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
