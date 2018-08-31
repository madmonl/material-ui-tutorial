import React from "react";
import {AppBar, Toolbar, Typography} from "material-ui/";
import Dialog from '../Exercises/Dialog';

export default ({ muscles, onExerciseCreate }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="headline" color="inherit" style={{flex: 1}}>
        Exercise Databse
      </Typography>

      <Dialog 
        muscles={muscles}
        onCreate={onExerciseCreate}
      />
    </Toolbar>
  </AppBar>
);



