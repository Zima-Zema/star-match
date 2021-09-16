import { Fragment } from "react";
import { range } from "../utils/utils";
const StarsDisplay = (props) => {
    return (
        <Fragment>
            {range(1, props.count).map(starId => <div key={starId} className="star" />)}
        </Fragment>
    )
};


export default StarsDisplay;