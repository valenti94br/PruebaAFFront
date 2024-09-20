import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../../context/GlobalState'

const Report = () => {
    const { reports, getReports } = useContext(GlobalContext);

    useEffect(() => {
        getReports();
    }, []);

    const activeReports = reports?.filter(report => !report.archived);
    // const handleArchive = (reportId) => {archiveReport(reportId);};

    return (
        <div>
            {activeReports?.map(report =>
                <div key={report._id} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
                    <h3>{report.title}</h3>
                    <p><strong>Description:</strong> {report.description}</p>
                    <p><strong>Content:</strong> {report.content}</p>
                    <p><strong>Author:</strong> {report.author}</p>
                    {/* <p><strong>Archived:</strong> {report.archived ? 'Yes' : 'No'}</p> */}
                    <p><strong>Created At:</strong> {new Date(report.createdAt).toLocaleDateString()}</p>
                    {/* <p><strong>Updated At:</strong> {new Date(report.updatedAt).toLocaleDateString()}</p> */}

                    <button onClick={() => handleArchive(report._id)}>
                        Archive Report
                    </button>
                </div>
            )}
        </div>
    );
};

export default Report