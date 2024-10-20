// Projects.tsx
import React, { forwardRef } from 'react';

const Projects = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref}>
      <h1>Projects</h1>
      {/* Your Projects component JSX */}
    </div>
  );
});

export default Projects;
