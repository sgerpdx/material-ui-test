import React, { useRef, useEffect } from 'react';

export default function CanvasComponent(props) {
  const canvasRef = useRef(null);

  const draw = (ctx) => {
    ctx.beginPath();
    ctx.arc(50, 100, 20, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = '#CC00FF';
    ctx.lineStyle = '#ffff00';
    ctx.font = '18px sans-serif';
    ctx.fillText('hey', 50, 50);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    //Our draw come here
    draw(context);
  }, [draw]);
  return (
    <>
      <canvas ref={canvasRef} {...props} />
    </>
  );
}
