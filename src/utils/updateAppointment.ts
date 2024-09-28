import { sendMail } from "./mailer"; // Import the reusable mailer function

async function sendAppointmentUpdateEmail(
  recipientEmail: string, 
  doctorName: string, 
  patientName: string, 
  date: string, 
  time: string, 
  role: string
) {
  let subject: string;
  let html: string;

  if (role === "PATIENT") {
    subject = "Appointment Update from Patient";
    html = `
      <h3>Appointment Updated</h3>
      <p>Your patient <strong>${patientName}</strong> has updated the appointment scheduled for <strong>${date}</strong> at <strong>${time}</strong>.</p>
    `;
  } else {
    subject = "Appointment Update from Doctor";
    html = `
      <h3>Appointment Updated</h3>
      <p>Your doctor <strong>${doctorName}</strong> has updated the appointment scheduled for <strong>${date}</strong> at <strong>${time}</strong>.</p>
    `;
  }

  return await sendMail(recipientEmail, subject, html);
}
