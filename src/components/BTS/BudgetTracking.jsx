import "./BudgetTracking.css";

function BudgetTracking() {
  return (
    <>
      <div className="trackActivity">
        <div className="weeklyData">
          {/* Header Section */}
            <div className="DataTitle">
                <div className="primaryTitle">
                    <h1>Budget Tracking</h1>
                </div>
            <div className="dateTrack">
                <h3>Thursday, 22 Sep</h3>
            </div>
          </div>

          {/* Daily Data Section */}
            <div className="dailyData">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
                <div key={day} className={`days ${day.toLowerCase()}`}>
                    <div className="day">
                        <h4>{day}</h4>
                    </div>
                    <div className="amount">
                        <h4>{18 + index}</h4>
                    </div>
              </div>
            ))}
            </div>

          {/* Graph Section */}
            <div className="graph"></div>

          {/* Time Range Selection */}
            <div className="timeRange">
            {["Week", "Month", "6-Month"].map((range) => (
                <div key={range} className={`${range.toLowerCase()} range`}>
                    <h3>{range}</h3>
                </div>
            ))}
            </div>
        </div>
      </div>
    </>
  );
}

export default BudgetTracking;