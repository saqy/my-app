import React from 'react'
import './createBug.css'

export default function CreateBug() {
    return (
        <div className="create-section">
            <div className="container">
                <div className="create-content">
                    <h4>create issue</h4>
                    <h6>issue type</h6>
                    <span>type</span>
                    <form>
                        <div className="form-group">
                            <label for="formGroupTitle">Title</label>
                            <input type="text" className="form-control" id="formGroupTitle" />
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlDescription">description</label>
                            <textarea className="form-control" id="exampleFormControlDescription" rows="3"></textarea>
                        </div>
                        <div className="form-group">
                            <select id="inputState" className="form-control">
                                <option selected>Assignee</option>
                                <option>Assign to me</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-dark">Create</button>
                        <button type="submit" className="btn btn-dark">Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
