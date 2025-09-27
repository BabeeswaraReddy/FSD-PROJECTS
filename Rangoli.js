import React, { useRef, useEffect } from 'react';

function Rangoli({ name }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = 400;
    canvas.height = 400;
    ctx.clearRect(0, 0, 400, 400);
    let colors = ['#ff9a8d', '#ffe56b', '#fd6c63', '#d62246'];
    for (let i = 0; i < 8; i++) {
      ctx.save();
      ctx.translate(200, 200);
      ctx.rotate(i * Math.PI / 4);
      ctx.fillStyle = colors[i % colors.length];
      ctx.beginPath();
      ctx.arc(100, 0, 50, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
    if (name) {
      ctx.font = '20px sans-serif';
      ctx.fillStyle = '#353535';
      ctx.textAlign = 'center';
      ctx.fillText(`Welcome ${name} 🙏`, 200, 220);
    }
  }, [name]);

  return <canvas ref={canvasRef} />;
}

export default Rangoli;
