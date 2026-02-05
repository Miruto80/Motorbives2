// pages/Disclaimer.jsx
import React from "react";
import LegalLayout from "../../components/LegalLayout";

export default function Disclaimer() {
  return (
    <LegalLayout title="Disclaimer">
      <p>
        MotorVibes provides vehicle listings and financing information for
        informational purposes only.
      </p>

      <p>
        Approval, pricing, terms, and conditions are determined by lenders and
        may vary based on credit profile and vehicle selection.
      </p>

      <p>
        We make no guarantees regarding approval, interest rates, or vehicle
        availability.
      </p>
    </LegalLayout>
  );
}
