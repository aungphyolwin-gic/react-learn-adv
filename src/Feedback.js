import React, { useState } from 'react'
import { IoStar } from "react-icons/io5";

export default function Feedback() {
    const [ score, setScore] = useState('10')
    const [ comment, setComment] = useState('')
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(Number(score)<=5 && Comment.length <= 10){
            alert("Please provide a comment explaining why the experience is poor")
            return;
        }
        console.log("Form submitted.");
        setScore('10')
        setComment('')

    }
  return (
    <div className='container mt-5 '>
        <form onSubmit={handleSubmit}>
            <fieldset>
                <h2>Feedback</h2>
                <div className='row form-control mb-3'>
                    <label className=' form-label fs-3 ' htmlFor="score">
                        Score {score}  <IoStar className='text-warning fs-2 pb-2 ' /></label>
                    <input className=' form-range' id='score' name='score' type="range" min={'0'} max={'10'} 
                        value={score} onChange={e=>setScore(e.target.value)} />
                </div>
                <div className='row form-control mb-3'>
                    <label className='form-label fs-3' htmlFor="comment">Comment </label>
                    <textarea className=' form-text ' name="comment" id="comment" cols="30" rows="3" 
                        onChange={e=>setComment(e.target.value)}></textarea>
                </div>
                <div className="row form-control mb-3">
                    <button type='submit' className='btn btn-primary '>Submit</button>
                </div>
            </fieldset>
        </form>
    </div>
  )
}
