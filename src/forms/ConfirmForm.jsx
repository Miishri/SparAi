
export default function ConfirmForm({userData, updateFields}) {

    return (
        <div style={{display:"flex", flexDirection: "column", gap: "20px"}}>
            <div className="user-box">
                <input type="text" name="fullname" required minLength={1} value={userData.fullName} onChange={e => {
                    updateFields({fullName: e.target.value})
                }}/>
                <label>Full Name</label>
            </div>
            <div className="user-box">
                <input type="email" name="email" required minLength={1} value={userData.email} onChange={e => {
                    updateFields({email: e.target.value})
                }}/>
                <label>Email</label>
            </div>
            <div className="user-box">
                <input type={"number"} name="age" required min={18} max={60} value={userData.age} onChange={e => {
                    updateFields({age: e.target.value})
                }}/>
                <label>Age</label>
            </div>
            <div>
                <label className="student-label">Are you a student?</label>
                <div className="checkbox-wrapper-34">
                    <input className='tgl tgl-ios' id='toggle-34' type='checkbox' value={userData.isStudent}
                           onChange={e => {
                               updateFields({isStudent: e.target.checked})
                           }}/>
                    <label className='tgl-btn' htmlFor='toggle-34'></label>
                </div>
            </div>
            <div className="select" style={{marginBottom: "20px"}}>
                <select name="Location" required value={location} onChange={e => {
                    updateFields({location: e.target.value})
                }}>
                    <option value="Malmö">Malmö</option>
                    <option value="Stockholm">Stockholm</option>
                    <option value="Göteborg">Göteborg</option>
                </select>
            </div>
            <div className="select" style={{marginBottom: "20px"}}>
                <select name="ApartmentProvider" required value={userData.apartmentProvider} onChange={e => {
                    updateFields({apartmentProvider: e.target.value})
                }}>
                    <option value="Malmö Stad">Malmö Stad</option>
                    <option value="Uppsala Hem">Uppsala Hem</option>
                    <option value="Stockholms Hem">Stockholms Hem</option>
                </select>
            </div>
            <div className="select">
                <select name="ElectricityProvider" required value={userData.electricityProvider} onChange={e => {
                    updateFields({electricityProvider: e.target.value})
                }}>
                    <option value="Vattenfall">Vattenfall</option>
                    <option value="Nordic Green Energy">Nordic Green Energy</option>
                    <option value="Göteborg Energi">Göteborg Energi</option>
                </select>
            </div>
            <div className="user-box" style={{marginTop: "20px"}}>
                <input type={"number"} name="Rent" required min={1000} value={userData.rent} onChange={e => {
                    updateFields({rent: e.target.value})
                }}/>
                <label>Rent</label>
            </div>
            <div className="user-box">
                <input type={"number"} name="salary" required value={userData.salary} onChange={e => {
                    updateFields({salary: e.target.value})
                }}/>
                <label>Salary</label>
            </div>
            <div className="user-box">
                <input type={"number"} name="budget" required value={userData.monthlyBudget} onChange={e => {
                    updateFields({monthlyBudget: e.target.value})
                }}/>
                <label>Monthly Budget</label>
            </div>
            <div className="user-box">
                <input type={"number"} name="TravelExpenses" required value={userData.travelExpenses} onChange={e => {
                    updateFields({travelExpenses: e.target.value})
                }}/>
                <label>Travel Expenses</label>
            </div>
            <div className="user-box">
                <input type={"number"} name="GroceryExpenses" required value={userData.groceryExpenses} onChange={e => {
                    updateFields({groceryExpenses: e.target.value})
                }}/>
                <label>Grocery Expenses</label>
            </div>
            <div className="user-box">
                <input type={"number"} name="StudentAid" required value={userData.studentAid} onChange={e => {
                    updateFields({studentAid: e.target.value})
                }}/>
                <label>Student Aid</label>
            </div>
            <div>
                <label className="student-label">Do you have a gym membership?</label>
                <div className="checkbox-wrapper-34">
                    <input className='tgl tgl-ios' id='toggle-34' type='checkbox' value={userData.hasGym}
                           onChange={e => {
                               updateFields({hasGym: e.target.checked})
                           }}/>
                    <label className='tgl-btn' htmlFor='toggle-34'></label>
                </div>
                <div className="user-box" style={{marginTop: "30px"}}>
                    <input type={"text"} name="moreInfo" maxLength={200} value={userData.moreInformation}
                           onChange={e => {
                               updateFields({moreInformation: e.target.value})
                           }}/>
                    <label>Further Information (Optional)</label>
                </div>
            </div>
        </div>
    )
}