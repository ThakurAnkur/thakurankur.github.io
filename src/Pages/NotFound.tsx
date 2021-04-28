import * as React from "react";
import { useHistory } from 'react-router-dom';
import Mainlayout from '../Layout/Mainlayout';

const NotFound = () => {
    const history = useHistory();
    console.log(history);
    return <Mainlayout pageName="home">
        <h2>Page Not Found</h2>
    </Mainlayout>;
};
export default NotFound;