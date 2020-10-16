import React from "react";
import { Homepage } from "./pages/Homepage/Homepage";
import ChronologyPage from "./pages/ChronologyPage/ChronologyPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DetailCharacterPage from "./pages/DetailPage/pages/DetailCharacterPage/DetailCharacterPage";
import DetailHousePAge from "./pages/DetailPage/pages/DetailHousePage/DetailHousePage";
import ListCharacterPage from "./pages/ListCharacterPage/ListCharacterPage";
import ListHousesPage from "./pages/ListHousesPage/ListHousesPage";


function Routes() {
    return (
        <Router>
            <Switch>
                <Route path='/chronology'><ChronologyPage/></Route>
                <Route path='/house/detail/:name' component={ DetailHousePAge }/>
                <Route path='/houses' component={ListHousesPage}/>
                <Route path='/character/detail/:name' component={ DetailCharacterPage }/>
                <Route path='/characters' component={ListCharacterPage}/>
                <Route path='/'><Homepage/></Route>
            </Switch>
        </Router>
    );
}

export default Routes;
