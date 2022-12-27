import React from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class NavBar extends React.Component {

  render() {
    return (
      <ThemeContext.Consumer>
        {(context) => {
           const { isDarkTheme, lightTheme, darkTheme } = context;
           const theme = isDarkTheme ? darkTheme : lightTheme;
          return(
          <nav style={{ background: theme.bg, color: theme.text, height: '120px' }}>
            <h2 style={{ textAlign: 'center' }}>
              Oak Academy
            </h2>
            <div className="ui three buttons">
              <button className="ui button">Home</button>
              <button className="ui button">About</button>
              <button className="ui button">Contact</button>
            </div>
          </nav>
          )
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default NavBar;