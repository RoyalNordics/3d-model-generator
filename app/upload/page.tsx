import React from 'react';

const UploadPage = () => {
  return (
    <div>
      <h1>Create New Project</h1>
      <form>
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