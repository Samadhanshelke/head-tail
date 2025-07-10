import { useState } from "react";
type Choice = "H" | "T";
type Column = Choice[];

const HeadTail: React.FC = () => {
  const [selected, setSelected] = useState<Choice | "">("");
  const [validation, setValidation] = useState<string>("");
  const [columns, setColumns] = useState<Column[]>([]);


const handleSubmit = () => {
  if (!selected) {
    setValidation("Please select value from dropdown");
    return;
  }

  setValidation("");

  setColumns((prevCols) => {
    const updatedCols = [...prevCols];
    const lastCol = updatedCols[updatedCols.length - 1];

    if (lastCol && lastCol[0] === selected) {
      // ✅ Clone before pushing
      const newCol = [...lastCol, selected];
      updatedCols[updatedCols.length - 1] = newCol;
    } else {
      updatedCols.push([selected]);
    }

    return updatedCols;
  });

  setSelected(""); // Reset dropdown
};

  return (
   <div className="container">
      <h1>Head & Tail Page</h1>
<div className="form-wrapper">
      <select
        value={selected}
         className="custom-select"
        onChange={(e) => setSelected(e.target.value as Choice)}
      >
        <option value="">Select Value</option>
        <option value="H">H</option>
        <option value="T">T</option>
      </select>

      <button onClick={handleSubmit} className="submit-button">Submit</button>
          </div>

      {validation && <p style={{ color: "red" }}>{validation}</p>}

 <div className="table-grid">
  {columns.map((col, colIndex) => (
    <div key={colIndex} className="table-column">
      {col.map((item, rowIndex) => (
        <div key={rowIndex} className="table-cell">
          {item}
        </div>
      ))}
    </div>
  ))}
</div>


    </div>
  )
}

export default HeadTail