import './App.css';
import 'react-sliding-side-panel/src/index.css'
import Container from "./Components/Container/Container";
import {Route, Switch} from "react-router-dom";
import LoginContainer from "./Components/Login/LoginContainer";
import Preloader from "./Common/Preloader/Preloader";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {initializing} from "./redux/auth-reducer";
import {ToastContainer} from "react-toastify";

function App() {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(initializing())
    }, [dispatch]); // Перезапускать эффект только если count поменялся

    const isInitialize = useSelector(state => state.auth.isInitialize);

    if(!isInitialize) {
        return <Preloader />
    }

    return (
        <>
            <Switch>
                <Route exact path='/login' render={ () => <LoginContainer />} />
                <Container />
            </Switch>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    );
}

export default App;
