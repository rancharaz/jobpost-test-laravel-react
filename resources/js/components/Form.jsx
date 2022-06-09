import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {


    const url = "http://127.0.0.1:8000/api/jobpost";

    const [data, setData] = useState({
        jobtitle: "",
        jobDescription: "",
        jobQualifications: "",
        jobRequirements: ""
    })

    function submit(event) {

        event.preventDefault();

        axios.put(url,

            {
                jobtitle: data.jobtitle,
                jobDescription: data.jobDescription,
                jobQualifications: data.jobQualifications,
                jobRequirements: data.jobRequirements,

                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                    'Crossorigin': 'true',

                }
            })

            .then(function (response) {
                console.log(response.data)
            }).catch(function (error) {
                console.log(error.message)
            })
    }




    function handle(event) {
        event.preventDefault()
        const newData = { ...data }
        newData[e.target.id] = e.target.value;
        setData(newData)
        console.log(newData)

    }


    return (
        <div className='container mx-auto text-center justify-center items-center'>

            <form onSubmit={(e) => submit(e)}  >

                <div className="form bg-red-400 w-auto mr-24 ml-24 h-[26rem]  rounded-md">
                    <h2 className='text-2xl text-black pt-10'>Form</h2>
                    <div className="text-black text-2xl">
                        <div className="form-group  mb-2 pt-5">
                            <label htmlFor="jobtitle">
                                Jobtitle:
                            </label>
                            <input type="text" name="jobtitle" id="jobtitle" placeholder="" onChange={(e) => handle(e)} value={data.jobtitle} className='outline-none rounded-md ' />
                        </div>

                        <div className="form-group mb-2">
                            <label htmlFor="jobdescrip">Job description</label>
                            <input type="text" name="jobDescription" id="jobDescription" placeholder="" onChange={(e) => handle(e)} value={data.jobDescription} className='outline-none rounded-md' />
                        </div>
                        <div className="form-group mb-2 ">
                            <label htmlFor="name"> Job Qualification</label>
                            <input type="text" name="jobQualifications" id="jobQualifications" placeholder="" onChange={(e) => handle(e)} value={data.jobQualifications} className='outline-none rounded-md ' />
                        </div>
                        <div className="form-group  mb-2">
                            <label htmlFor="name"> Job Requirements </label>
                            <input type="text" name="jobRequirements" id="jobRequirements" placeholder="" onChange={(e) => handle(e)} value={data.jobRequirements} className='outline-none rounded-md ' />
                        </div>

                    </div>
                    <div className="btn">
                        <button type="submit" className=' w-24 h-14  bg-slate-700 text-white hover:bg-slate-600 rounded-md transition-all'> Submit </button>
                    </div>
                </div>


            </form>

        </div>
    )
}

export default Form