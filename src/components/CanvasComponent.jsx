import React, { useRef, useEffect } from 'react';

export default function CanvasComponent(props) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    //Our first draw
    context.fillStyle = '#000000';
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
  }, []);

  return (
    <>
      <canvas ref={canvasRef} {...props} />
    </>
  );
}
