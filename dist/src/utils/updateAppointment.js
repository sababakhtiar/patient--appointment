"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mailer_1 = require("./mailer"); // Import the reusable mailer function
async function sendAppointmentUpdateEmail(recipientEmail, doctorName, patientName, date, time, role) {
    let subject;
    let html;
    if (role === "PATIENT") {
        subject = "Appointment Update from Patient";
        html = `
      <h3>Appointment Updated</h3>
      <p>Your patient <strong>${patientName}</strong> has updated the appointment scheduled for <strong>${date}</strong> at <strong>${time}</strong>.</p>
    `;
    }
    else {
        subject = "Appointment Update from Doctor";
        html = `
      <h3>Appointment Updated</h3>
      <p>Your doctor <strong>${doctorName}</strong> has updated the appointment scheduled for <strong>${date}</strong> at <strong>${time}</strong>.</p>
    `;
    }
    return await (0, mailer_1.sendMail)(recipientEmail, subject, html);
}
