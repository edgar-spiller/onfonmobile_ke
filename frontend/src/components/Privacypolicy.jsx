import React from 'react'
import { Link } from 'react-router-dom'

const Privacypolicy = () => {
    return (
        <>
            <div className="page-title-area">
                <div className="container">
                    <div className="page-title-content">
                        <h2>Privacy Policy</h2>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li className="active">Privacy Policy</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Privacypolicy;