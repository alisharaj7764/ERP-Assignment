import React from "react";
import "./AboutPage.css"; // Import CSS for styling

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1>About Our ERP Management System</h1>
      <p>
        Our ERP (Enterprise Resource Planning) Management System is a
        comprehensive solution designed to streamline business processes,
        improve efficiency, and enhance decision-making across your
        organization.
      </p>
      <h2>Features</h2>
      <ul>
        <li>Inventory Management</li>
        <li>Customer Relationship Management (CRM)</li>
        <li>Accounting and Finance</li>
        <li>Human Resource Management (HRM)</li>
        <li>Supply Chain Management</li>
        <li>Reporting and Analytics</li>
        {/* Add more features as needed */}
      </ul>
      <h2>Our Team</h2>
      <p>
        Our team of experienced developers and engineers have worked tirelessly
        to create a powerful and user-friendly ERP system that meets the diverse
        needs of modern businesses.
      </p>
      {/* Add more information about the team if needed */}
    </div>
  );
};

export default AboutPage;
