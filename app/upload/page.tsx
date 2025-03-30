"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const UploadPage = () => {
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log("handleSubmit called");
    try {
      // Add logic for:
      // - Saml data fra formularfelter
      // - Upload billedet til Supabase Storage
      // - Opret ny række i `projects`-tabellen
      // - Vent på svar
      console.log("Placeholder logic running");

      // After success:
      // - Brug `router.push("/project/[project_id]")` med korrekt ID
      // - Evt. vis "Projekt oprettet" kortvarigt først
      router.push("/project/123"); // Placeholder redirect
    } catch (error) {
      console.error("Error in handleSubmit:", error);
    }
  };

  return (
    <div>
      <h1>Create New Project</h1>
      <form onSubmit={handleSubmit}>
        {/* Add form fields here:
          - Projektnavn
          - Designnavn
          - Kollektion
          - Version
          - Højde (mm)
          - Bredde (mm)
          - Dybde (mm)
          - Upload billede (acceptér kun PNG og JPEG)
        */}

        {/* Add UI behavior here:
          - Vis preview af billede
          - Valider at alle felter er udfyldt
          - Vis fejlbesked ved manglende input
          - “Opret projekt”-knap aktiveres først når alt er gyldigt
        */}

        <button type="submit">Create Project</button>

        {/* Add logic for:
          - Gem metadata i Supabase
          - Upload billede
          - Redirect
          - UI-feedback
        */}
      </form>
    </div>
  );
};

export default UploadPage;