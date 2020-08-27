import React from "react";
import InputField from "./components/input/InputField";
import {
  Select,
  FormControl,
  InputLabel,
  Button,
  Switch,
  Paper,
} from "@material-ui/core";
const App = () => {
  return (
    <div style={{ margin: "5%" }}>
      <form>
        <Paper elevation={3}>
          <div style={{ padding: "20px" }}>
            <div>
              <h2>Name</h2>
              <p>
                Specify the name of the Notebook Server and the Namespace it
                will belong to.
              </p>
              <InputField name="name" label="Name" />
              <InputField name="nameSpace" label="NameSpace" />
            </div>
            <div>
              <h2>Image</h2>
              <p>
                A starter Jupyter Docker Image with a baseline deployment and
                typical ML packages.
              </p>
              <div>
                {" "}
                <input name="customImage" type="checkbox" /> Custom Image
              </div>
              <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-age-native-simple">
                  Image
                </InputLabel>
                <Select
                  native
                  // value={state.age}
                  // onChange={handleChange}
                  label="Image"
                  inputProps={{
                    name: "age",
                    id: "outlined-age-native-simple",
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={10}>Image 1</option>
                  <option value={20}>Image 2</option>
                </Select>
              </FormControl>
            </div>
            <div>
              <h2>CPU / RAM</h2>
              <p>
                Specify the total amount of CPU and RAM reserved by your
                Notebook Server. For CPU-Intensive workloads,you can choose more
                than 1CPU(e.g 1.5)
              </p>
              <InputField name="cpu" label="CPU" />
              <InputField name="memory" label="Memory" />
            </div>
            <div>
              <h2>Wokspace Volume</h2>
              <p>
                Configure the Volume to be mounted as your personal Workspace.
              </p>
              <input type="checkbox" name="workspaceVolume" />
              <label>Don't use Persistent Storage for User's home</label>
              <div>
                <FormControl variant="outlined">
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Type
                  </InputLabel>
                  <Select
                    native
                    // value={state.age}
                    // onChange={handleChange}
                    label="Type"
                    inputProps={{
                      name: "age",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={10}>New</option>
                    <option value={20}>Existing</option>
                  </Select>
                </FormControl>
                <InputField name="workspaceName" label="Name" />
                <InputField name="workspaceSize" label="Size" />
                <FormControl variant="outlined">
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Mode
                  </InputLabel>
                  <Select
                    native
                    // value={state.age}
                    // onChange={handleChange}
                    label="Mode"
                    inputProps={{
                      name: "age",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={10}>ReadWriteOnce</option>
                    <option value={20}>Read</option>
                  </Select>
                </FormControl>
                <InputField name="workspaceMountPoint" label="Mount point" />
              </div>
              <div>
                <h2>Data Volumes</h2>
                <p>Configure the Volumes to be mounted as your Datasets</p>
                <Button variant="outlined" color="primary">
                  ADD VOLUME
                </Button>
              </div>
              <div>
                <h2>Configurations</h2>
                <p>
                  Extra layers of configurations that will be applied to the new
                  Notebook.(e.g. Insert credentials as Secrets, set Enviroment
                  Variables.)
                </p>
                <FormControl variant="outlined">
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Configurations
                  </InputLabel>
                  <Select
                    native
                    // value={state.age}
                    // onChange={handleChange}
                    label="Configurations"
                    inputProps={{
                      name: "age",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={10}>ReadWriteOnce</option>
                    <option value={20}>Read</option>
                  </Select>
                </FormControl>
              </div>
              <div>
                <h1>GPUS</h1>
                <p>
                  Specify the name and Vendor of GPUs that will be assigned to
                  the Notebook Server's Container.
                </p>
                <FormControl variant="outlined">
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Number of GPUs
                  </InputLabel>
                  <Select
                    native
                    // value={state.age}
                    // onChange={handleChange}
                    label="Number of GPUs"
                    inputProps={{
                      name: "age",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={10}>ReadWriteOnce</option>
                    <option value={20}>Read</option>
                  </Select>
                </FormControl>
                <FormControl variant="outlined">
                  <InputLabel htmlFor="outlined-age-native-simple">
                    GPU Vendor
                  </InputLabel>
                  <Select
                    native
                    // value={state.age}
                    // onChange={handleChange}
                    label="GPU Vendor"
                    inputProps={{
                      name: "age",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={10}>ReadWriteOnce</option>
                    <option value={20}>Read</option>
                  </Select>
                </FormControl>
              </div>
              <h2>Miscellaneous Settings</h2>
              <p>
                Other possible settings to be applied to the Notebook Server.
              </p>
              <Switch
                // checked={state.checkedB}
                // onChange={handleChange}
                color="primary"
                name="checkedB"
                inputProps={{ "aria-label": "primary checkbox" }}
              />{" "}
              Enable Shared Memory
            </div>
          </div>
        </Paper>
        <div style={{ margin: "10px" }}>
          <Button variant="contained">LAUNCH</Button>
          <Button variant="contained">CANCEL</Button>
        </div>
      </form>
    </div>
  );
};

export default App;
