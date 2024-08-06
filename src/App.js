import React, { useState } from "react";
import CalendarComponent from "./components/Calendar";
import GoogleLoginComponent from "./components/GoogleLogin";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Provider store={store}>
      <div className="App">
        {!user ? (
          <GoogleLoginComponent setUser={setUser} />
        ) : (
          <CalendarComponent user={user} />
        )}
      </div>
    </Provider>
  );
}

export default App;
