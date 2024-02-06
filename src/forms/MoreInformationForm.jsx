import {useNavigate} from "react-router-dom";
import RecordDetails from "./RecordDetails.jsx";


export default function MoreInformationForm({moreInformation, updateFields}) {

    const navigate = useNavigate()

    function getRecord() {
        return <RecordDetails moreInformation={moreInformation} updateFields={updateFields}  />
    }
    return (
        <div className="user-box" style={{marginBottom: "40px"}}>
            <input type={"text"} name="moreInfo" maxLength={200} value={moreInformation}
                   onChange={e => {
                       updateFields({moreInformation: e.target.value})
                   }}/>
            <label>Further Information (Optional) </label>
            <button className={"getting-started-next"} style={{marginLeft: "20vw", marginTop: "-10vh"}} onClick={() => navigate("/record-details")}>Record Audio</button>
        </div>
    )
}