import './app-info.css';

const AppInfo = ({ employees, increased }) => {
    return (
        <div className="app-info">
            <h1>Employee Management at Artemi Company</h1>
            <h2>Total number of employees: {employees}</h2>
            <h2>Eligible for a bonus: {increased}</h2>
        </div>
    )
}

export default AppInfo;