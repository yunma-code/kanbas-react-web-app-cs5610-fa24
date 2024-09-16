export default function Modules() {
	
  return (
    <div>
			{/* Collapse all button */}
			<button> Collapse All</button>
			{/* View Progress button */}
			<button> View Progress</button>
			{/* Publish selection */}
			<select id="wd-select-one">
				<option value="w1">Publish Week 1</option>
				<option value="w2">Publish Week 2</option>
				<option value="w3">Publish Week 3</option>
				<option selected value="PublishAll">
								Publish All</option>
			</select>
			{/* Module button*/}
			<button> + Module</button>

					

      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">Learn what is Web Development</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 2</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
);}

