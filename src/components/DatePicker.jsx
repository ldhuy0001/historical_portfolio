import React, { useRef, useState } from "react";

const DatePicker = () => {
  const [date, setDate] = useState("");
  const dateInputRef = useRef(null);

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <div>
      <label>Start date: </label>
      <input
        type="date"
        onChange={handleChange}
        ref={dateInputRef}
        value={date}
      />
    </div>
  );
};

export default DatePicker;
