import React from "react";
import { FieldArray } from "redux-form";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import InputField from "../components/input/InputField";
import AddIcon from '@material-ui/icons/Add'
import { withStyles } from "@material-ui/core";
 

const AddVolume = () => {
  return (
    <form>
       <FieldArray name="volumes" component={renderVolumes} />
    </form>
  );
};

let renderVolumes = ({ fields, classes }) => (
  <div className={classes.root}>
    <Button
      variant="outlined"
      color="primary"
      onClick={() =>
        fields.push({ name: `-vol-${fields.length + 1}`, size: "10Gi" })
      }
      startIcon={<AddIcon/>}
    >
     ADD VOLUMES
    </Button>
    {fields.map((volume, index) => {
      return (
        <div key={index} className={classes.root}>
          <InputField name={`${volume}.name`} type="text" label="Type" />
          <InputField name={`${volume}.size`} type="text" label="Size" />
          <IconButton onClick={() => fields.remove(index)}>
            <DeleteIcon color="secondary" />
          </IconButton>
        </div>
      );
    })}
  </div>
);

const styles = (theme) => ({
  root:{
    margin: '10px'
  }
});

renderVolumes = withStyles(styles)(renderVolumes);

export default AddVolume;