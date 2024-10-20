// Experience.tsx
import React, { forwardRef } from 'react';

const Experience = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref}>
      <h1>Experience</h1>
      {/* Your Experience component JSX */}
    </div>
  );
});

export default Experience;
