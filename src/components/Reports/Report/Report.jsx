import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../../context/GlobalState'

const Report = () => {
    const { reports, getReports, archiveReport } = useContext(GlobalContext);
    const [showArchived, setShowArchived] = useState(false);

    useEffect(() => {
        getReports();
    }, []);

    const activeReports = reports?.filter(report => !report.archived);
    const archivedReports = reports?.filter(report => report.archived);

    const handleArchive = (reportId) => {
        archiveReport(reportId);
    };

    return (
        <div>
            <nav>
                <button onClick={() => setShowArchived(false)}>News</button>
                <button onClick={() => setShowArchived(true)}>Archived News</button>
            </nav>

            {!showArchived ? (
                <div>
                    <h2>News</h2>
                    {activeReports?.map(report => (
                        <div key={report._id}>
                            <h3>{report.title}</h3>
                            <button onClick={() => handleArchive(report._id)}>Archive Report</button>
                        </div>
                    ))}
                </div>
            ) : (
                <div>
                    <h2>Archived News</h2>
                    {archivedReports?.map(report => (
                        <div key={report._id}>
                            <h3>{report.title}</h3>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Report;