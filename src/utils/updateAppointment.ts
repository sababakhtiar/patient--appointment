

export const getAppointmentRescheduledEmail = (
    doctorName: string,
    patientName: string,
    appointmentDate: Date,
    appointmentTime: string,
    status: string,
 
  ): string => {
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
  