import React, { Fragment } from "react";
import { Grid, Paper, Typography,List, ListItem,
  ListItemText, ListItemSecondaryAction, IconButton } from 'material-ui';
import { Delete, Edit } from 'material-ui-icons';

const styles = {
  Paper: { 
    padding: 20, 
    marginTop: 10, 
    marginBottom: 10, 
    marginRight: 10, 
    height: 500, 
    overflowY: 'auto' 
  }
}

export default ({ 
  exercises,
  category,
  editMode, 
  onSelect,
  exercise: { 
    id, 
    title = 'Welcome!', 
    description = 'Please select an exercise from the list on the left.'
  },
  onDelete,
  onSelectEdit
}) => 
  <Grid container>
    <Grid item xs>
      <Paper style={styles.Paper}>
        {exercises.map(([group, exercises]) => 
          !category || category === group 
            ? <Fragment key={group}>
              <Typography
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
                      <IconButton onClick={() => onSelectEdit(id)}>
                        <Edit />
                      </IconButton>
                      <IconButton onClick={() => onDelete (id)}>
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
    <Grid item xs>
      <Paper style={styles.Paper}>
        {editMode
          ? <Form />
          : <Fragment>
            <Typography
              variant="display1"
            >
              {title}
            </Typography>
            <Typography
              variant="subheading"
              style={{ marginTop: 20 }}
            >
              {description}
            </Typography>
          </Fragment>}
      </Paper>
    </Grid>
  </Grid>



