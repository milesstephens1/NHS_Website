import { useState } from "react";
import { Calendar } from "react-calendar";

const activitiesData: Record<string, string[]> = {
  "2026-04-23": ["NHS Meeting @ 3:00pm ", "Hours Sheets Due"],
  "2026-04-25": ["Impact Award"],
  "2026-04-27": ["Operation Kindness Field Trip"],
};

const CalenderApp = () => {
  const [date, setDate] = useState<Date>(new Date());

  const formatDateKey = (d: Date): string => {
    const local = new Date(d);
    local.setMinutes(local.getMinutes() - local.getTimezoneOffset());
    return local.toISOString().split("T")[0];
  };
  const hasActivity = (date: Date): boolean => {
    return activitiesData[formatDateKey(date)]?.length > 0;
  };

  const activities = activitiesData[formatDateKey(date)] || [];

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-5">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white">
              <h5 className="mb-0">Select a Date</h5>
            </div>
            <div className="card-body">
              <Calendar
                onChange={(value) => {
                  if (value) {
                    const newDate = Array.isArray(value) ? value[0] : value;
                    if (newDate) {
                      setDate(newDate);
                    }
                  }
                }}
                value={date}
                className="border-0 w-100 big-calendar"
                tileClassName={({ date }) =>
                  hasActivity(date) ? "has-activity" : null
                }
              />
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div className="card shadow-sm">
            <div className="card-header bg-success text-white">
              <h5 className="mb-0">Activities on {date.toDateString()}</h5>
            </div>
            <div className="card-body">
              {activities.length > 0 ? (
                <ul className="list-group">
                  {activities.map((activity: string, index: number) => (
                    <li key={index} className="list-group-item">
                      {activity}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted">No activities for this date.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalenderApp;
