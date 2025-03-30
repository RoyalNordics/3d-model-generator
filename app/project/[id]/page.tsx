"use client";

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const ProjectView = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const supabase = createClientComponentClient({
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
    supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  });

  useEffect(() => {
    const fetchProject = async () => {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching project:', error);
      } else {
        setProject(data);
      }
    };

    fetchProject();
  }, [id, supabase]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Project View</h1>
      {project ? (
        <div>
          <p>Project Name: {project.name}</p>
          <p>Design Name: {project.design_name}</p>
          <p>Collection: {project.collection}</p>
          <p>Height: {project.height_mm}mm</p>
          <p>Width: {project.width_mm}mm</p>
          <p>Depth: {project.depth_mm}mm</p>
          <img src={project.image_url} alt="Project Image" />
          <button>Segmentér forside</button>
          <button>Tilføj hardware</button>
          <button>3D Preview</button>
        </div>
      ) : (
        <div>Project not found</div>
      )}
    </div>
  );
};

export default ProjectView;