import React from "react";
import SimpleTable from "../src/components/UserList";
import Json from "./Test_JSON.json";
import Mod from "./components/Mod";
import DatePicker from "react-datepicker";
import "./App.css";

import "react-datepicker/dist/react-datepicker.css";

export default function App() {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     UserList: [],
  //   };
  // }
  const [state, setState] = React.useState({
    UserList: [],
  });

  const [id, setid] = React.useState("");
  const [name, setname] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [tz, settz] = React.useState("");
  const [ap, setap] = React.useState("");

  React.useEffect(() => {
    const contactsAPI = "http://localhost:3000/members";

    console.log(Json.members);
    let init = {
      method: "GET",
      headers: new Headers(),
      mode: "cors",
      cache: "default",
    };

    fetch(contactsAPI, init)
      .then((response) => response.json())
      .then((data) =>
        setState((prevState) => ({
          UserList: [...data],
        }))
      );
  }, []);

  const showMod = (id, name, tz, ap) => {
    setOpen(true);
    setid(id);
    setname(name);
    settz(tz);
    setap(ap);
    return false;
  };

  return (
    <div>
      <Mod
        id={id}
        name={name}
        tz={tz}
        activity_periods={ap}
        open={open}
        setOpen={setOpen}
      />
      <h1 style={{ marginLeft: "40%", fontFamily: "candara" }}>
        User Surfing History
      </h1>
      <SimpleTable display={state.UserList} showMod={showMod}></SimpleTable>
    </div>
  );
}
