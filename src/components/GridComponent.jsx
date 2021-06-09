import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

{
  /* <Button variant="contained">Default</Button> */
}

export default function GridComponent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <AppBar position="static">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </AppBar>
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained">Default</Button>
        </Grid>
        <Grid item xs={4}>
          <img src="https://i.ytimg.com/vi/PXye-6_ZB1w/hqdefault.jpg" />
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained">Default</Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained">Default</Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained">Default</Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained">Default</Button>
        </Grid>
      </Grid>
    </div>
  );
}
