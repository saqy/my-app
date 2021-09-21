import React from 'react'
import MainLayout from '../mainLayout/MainLayout'
import './overview.css'

export default function Overview() {
    return (
        <MainLayout>
            <div className="overview-table">
                <div className="container">
                    <a href="#" className="overview-row">
                        <div className="overview-left">
                            <h5>title</h5>
                            <p>Lorem ipsum dolor sit amet consectetur</p>
                        </div>
                        <div className="overview-right">
                            <form>
                                <div className="form-group">
                                    <select id="inputState" className="form-control">
                                        <option selected>Code Review</option>
                                        <option>open</option>
                                        <option>assigned</option>
                                        <option>closed</option>
                                    </select>
                                </div>
                            </form>
                            <div className="overview-icon">
                                <img src="images/user.png" alt="" />
                            </div>
                        </div>
                    </a>
                    <a href="#" className="overview-row">
                        <div className="overview-left">
                            <h5>title</h5>
                            <p>Lorem ipsum dolor sit amet consectetur</p>
                        </div>
                        <div className="overview-right">
                            <form>
                                <div className="form-group">
                                    <select id="inputState" className="form-control">
                                        <option selected>Code Review</option>
                                        <option>open</option>
                                        <option>assigned</option>
                                        <option>closed</option>
                                    </select>
                                </div>
                            </form>
                            <div className="overview-icon">
                                <img src="images/user.png" alt="" />
                            </div>
                        </div>
                    </a>
                    <a href="#" className="overview-row">
                        <div className="overview-left">
                            <h5>title</h5>
                            <p>Lorem ipsum dolor sit amet consectetur</p>
                        </div>
                        <div className="overview-right">
                            <form>
                                <div className="form-group">
                                    <select id="inputState" className="form-control">
                                        <option selected>Code Review</option>
                                        <option>open</option>
                                        <option>assigned</option>
                                        <option>closed</option>
                                    </select>
                                </div>
                            </form>
                            <div className="overview-icon">
                                <img src="images/user.png" alt="" />
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </MainLayout>
    )
}
