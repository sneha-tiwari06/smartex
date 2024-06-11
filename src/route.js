import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WinnersGallery from './winnersgallery';
export const Routes =() =>{
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <WinnersGallery />
                </Route>
            </Switch>
        </Router>
    )
}