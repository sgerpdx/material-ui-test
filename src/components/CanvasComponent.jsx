import React, { useRef, useEffect } from 'react';

export default function CanvasComponent(props) {
  const canvasRef = useRef(null);

  const draw = (ctx) => {
    const img = new Image();
    img.src = 'https://i.ytimg.com/vi/PXye-6_ZB1w/hqdefault.jpg';
    img.onload = function () {
      ctx.beginPath();
      ctx.drawImage(img, 0, 0);
      ctx.fill();
      ctx.fillStyle = '#FF0000'; //this controls the font color
      ctx.lineStyle = '#ffff00';
      ctx.font = '18px sans-serif';
      ctx.fillText('Happy Birthday, Ryan!', 280, 330);
    };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    //Our draw come here
    draw(context);
  }, [draw]);
  return (
    <>
      <canvas ref={canvasRef} {...props} width="480" height="360" />
    </>
  );
}
