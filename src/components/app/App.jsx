import React from 'react';
import MaterialComponents from '../MaterialComponents';
import CanvasComponent from '../CanvasComponent';
import Button from '@material-ui/core/Button';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['ZCOOL KuaiLe', 'cursive'].join(','),
  },
});

// function addTextToImage(imagePath, text) {
//   //const circle_canvas = document.getElementById('canvas');
//   //const context = circle_canvas.getContext('2d');

//   // Draw Image function
//   const img = new Image();
//   img.src = imagePath;
//   img.onload = function () {
//     context.drawImage(img, 0, 0);
//     context.lineWidth = 1;
//     context.fillStyle = '#CC00FF';
//     context.lineStyle = '#ffff00';
//     context.font = '18px sans-serif';
//     context.fillText(text, 50, 50);
//   };
// }
// addTextToImage('https://i.ytimg.com/vi/PXye-6_ZB1w/hqdefault.jpg', 'Hey');

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      <CanvasComponent />
      {/* <canvas
        id="canvas"
        width="340"
        height="340"
        style={{ backgroundColor: 'blue' }}
      ></canvas> */}
      <MaterialComponents />
    </ThemeProvider>
  );
}
