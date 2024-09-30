"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAppointmentRescheduledEmail = void 0;
const getAppointmentRescheduledEmail = (doctorName, patientName, appointmentDate, appointmentTime, status) => {
    return `
      <p>The appointment has been <strong>rescheduled</strong>.</p>
      <p>Appointment Details:</p>
      <ul>
        <li><strong>Doctor:</strong> Dr. ${doctorName}</li>
        <li><strong>Patient:</strong> ${patientName}</li>
        <li><strong>Date:</strong> ${appointmentDate}</li>
        <li><strong>Time:</strong> ${appointmentTime}</li>
        <li><strong>Status:</strong> ${status}</li>
      </ul>
    `;
};
exports.getAppointmentRescheduledEmail = getAppointmentRescheduledEmail;
