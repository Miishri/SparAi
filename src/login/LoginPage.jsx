import Graph from "../extras/Graph.jsx";
import Logins from "./Logins.jsx";

import {motion} from "framer-motion";


export default function LoginPage() {

    const data = [{
        id: 'Dataset',
        data: [
            { x: 'January', y: 20 },
            { x: 'February', y: 25 },
            { x: 'March', y: 10 },
            { x: 'April', y: 15},
            { x: 'May', y: 20 },
            { x: 'June', y: -30 },
            { x: 'July', y: -35 }
        ],
    },
    ]

    return (
        <motion.div
            className={"login-page"}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0, transition: {duration: 0.4}}}
        >
            <Graph monthData={data}/>
            <Logins/>
        </motion.div>
    )
}