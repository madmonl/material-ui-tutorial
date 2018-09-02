import React, { Fragment } from "react";
import { Grid, Paper, Typography,List, ListItem,
  ListItemText, ListItemSecondaryAction, IconButton } from 'material-ui';
import { Delete, Edit } from '@material-ui/icons';
import { withStyles } from 'material-ui/styles'
import Form from './Form';

const styles = theme => ({
  paper: { 
    padding: theme.spacing.unit * 2, 
    overflowY: 'auto' ,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 10px)',
      marginTop: 5  
    },
    [theme.breakpoints.down('xs')]: {
      height: '100%',
    }
  },
  '@global': {
    'html, body, #root': {
      height: '100%'
    }
  },
  container: {
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px - 48px)'
    },
    [theme.breakpoints.down('xs')]: {
      height: 'calc(100% - 58px - 48px)'
    }
  },
  item: {
    [theme.breakpoints.down('xs')]: {
      height: '50%'
    }
  }
})

export default withStyles(styles)(({ 
  classes,
  exercises,
  category,
  editMode, 
  muscles,
  onSelect,
  onEdit,
  exercise,
  exercise: { 
    id, 
    title = 'Welcome!', 
    description = 'Please select an exercise from the list on the left.'
  },
  onDelete,
  onSelectEdit
}) => 
  <Grid container className={classes.container}>
    <Grid item className={classes.item} xs={12} sm={6}>
      <Paper className={classes.paper}>
        {exercises.map(([group, exercises]) => 
          !category || category === group 
            ? <Fragment key={group}>
              <Typography
                color='secondary'
                variant="headline"
                style={{ textTransform: 'capitalize' }}
              >
                {group}
              </Typography>
              <List component="ul">
                {exercises.map(({ id, title }) =>
                  <ListItem 
                    key={id}
                    button
                    onClick={() => onSelect(id)}
                  >
                    <ListItemText primary={title}/>
                    <ListItemSecondaryAction>
                      <IconButton color='primary' onClick={() => onSelectEdit(id)}>
                        <Edit />
                      </IconButton>
                      <IconButton color='primary' onClick={() => onDelete (id)}>
                        <Delete />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                )}
              </List>
            </Fragment>
            : null
        )}
      </Paper>
    </Grid>
    <Grid item className={classes.item} xs={12} sm={6}>
      <Paper className={classes.paper}>
        <Typography
          variant="display1"
          gutterBottom
          color='secondary'
        >
          {title}
        </Typography>
          {editMode
            ? <Form
                // When a key changes the component will
                // remount, so we don't have to use the
                // componentWillRecieveProps in Form.
                key={id}
                exercise={exercise}
                onSubmit={onEdit}
                muscles={muscles}
              />
            : <Typography
                variant="subheading"
                style={{ marginTop: 20 }}
              >
                {description}
              </Typography>
            }
      </Paper>
    </Grid>
  </Grid>
)


