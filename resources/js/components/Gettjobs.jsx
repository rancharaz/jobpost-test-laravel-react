import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Getjobs = () => {

    const [getAllJobs, setgetAlljobs] = useState();

    useEffect(() => {
        let mounted = true;
        axios.get('http://127.0.0.1:8000/api/jobpost/')
            .then(function (response) {
                const jobData = response.data;
                if (mounted) {
                    setgetAlljobs(jobData)
                }
            })
            .catch(function (error) {
                console.log(error.message)
            })
        return () => mounted = false;

    }, [])


    return (
        <div>
            {
                getAllJobs && getAllJobs.map((getAllJob, id) => {

                    return (
                        <div key={id}>
                            <div className="text-4xl">
                                {
                                    getAllJob.jobtitle
                                }
                            </div>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default Getjobs