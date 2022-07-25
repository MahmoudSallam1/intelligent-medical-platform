import React from "react";
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
} from "@syncfusion/ej2-react-schedule";

import "./calender.css";

function ScheduleCalender() {
  return (
    <ScheduleComponent style={{ marginTop: "5em", height: "90vh" }}>
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
    </ScheduleComponent>
  );
}

export default ScheduleCalender;
