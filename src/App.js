import './App.css';
import Container from "./Components/Container/Container";
import {Route, Switch} from "react-router-dom";
import LoginContainer from "./Components/Login/LoginContainer";

function App() {
    return (
        <>
            <Switch>
                <Route exact path='/login' render={ () => <LoginContainer />} />
                <Container />
            </Switch>
        </>
    );
}

export default App;
