"use client";

import React from 'react';
import { useParams } from 'next/navigation';

const ProjectView = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Project View</h1>
      <p>Project ID: {id}</p>
      {/*
        - Hent projekt fra Supabase (metadata + billede)
        - Vis:
          - Projektnavn, designnavn, kollektion, version
          - Højde, bredde, dybde
          - Billede
        - Knapper:
          - “Segmentér forside” → /project/[id]/segment
          - “Tilføj hardware” → /project/[id]/hardware
          - “3D Preview” → /project/[id]/3d-preview
      */}
    </div>
  );
};

export default ProjectView;