import React, { createContext } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends React.Component {
    state = {
        isDarkTheme: true,
        lightTheme: { syntax: "#555", ui: "#ddd", bg: "#eee", text: "#222" },
        darkTheme: { syntax: "#ddd", ui: "#333", bg: "#555", text: "#fff" }
    };

    changeTheme = () => {
        this.setState({ isDarkTheme: !this.state.isDarkTheme });
    };

    render() {
        return (
        <ThemeContext.Provider value={{ ...this.state, changeTheme: this.changeTheme }}>
            {this.props.children}
        </ThemeContext.Provider>
        );
    }
}

export default ThemeContextProvider;