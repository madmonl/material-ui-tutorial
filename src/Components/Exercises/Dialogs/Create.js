import React, { Component, Fragment } from 'react';
import { Dialog, Button, TextField, Select } from 'material-ui';
import { 
  DialogActions, 
  DialogContent, 
  DialogContentText, 
  DialogTitle 
} from 'material-ui/Dialog';
import { FormControl } from 'material-ui/Form'
import { InputLabel } from 'material-ui/Input'
import { MenuItem } from 'material-ui/Menu';
import { Add } from 'material-ui-icons';
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  FormControl: {
    width: 500
  }
})

export default withStyles(styles) (class extends Component {
  state = {
    open: false,
    exercise: { 
      title: '',
      description: '',
      muscles: ''
    }
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  }

  handleChange = name => ({ target: { value } }) => {
    this.setState({
      exercise: {
        ...this.state.exercise,
        [name]: value
      } 
    })
  }

  handleSubmit = () => {
    const { exercise } = this.state;
    this.props.onCreate({
      exercise,
      id: exercise.title.toLowerCase().replace(/ /g, '-')
      });
    this.setState({
      open: false,
      exercise: {
        title: '',
        description: '',
        muscles: ''
      }
    })
  }

  render () {
    const { open, exercise: { title, description, muscles } } = this.state,
      { classes, muscles: categories } = this.props

    return (
      <Fragment>
        <Button variant="fab" onClick={this.handleToggle} mini>
          <Add />
        </Button>

        <Dialog
          open={open}
          onClose={this.handleToggle}
        >
          <DialogTitle id="form-dialog-title">
              Please fill out the form below.
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
                Content
            </DialogContentText>
            <form> 
              <TextField
                className={classes.FormControl}
                label="Title"
                value={title}
                onChange={this.handleChange('title')}
                margin="normal"
              />
              <br/>
              <FormControl className={classes.FormControl}>
                <InputLabel htmlFor="muscles">
                    Muscles
                </InputLabel>
                <Select
                  value={muscles}
                  onChange={this.handleChange('muscles')}
                >
                {categories.map(category => 
                    <MenuItem key={category} value={category}>
                        {category}
                    </MenuItem>                
                  )}
                </Select>
              </FormControl>
              <br/>
              <TextField
                className={classes.FormControl}
                multiline
                rows="4"
                label="Description"
                value={description}
                onChange={this.handleChange('description')}
                margin="normal"
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button 
              onClick={this.handleSubmit}
              color="primary" 
              variant="raised"
            >
                Create
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    )
  }
})
  