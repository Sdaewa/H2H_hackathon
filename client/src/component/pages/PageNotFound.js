import React from 'react';
import './PageNotFound.css';
import Button from '@material-ui/core/Button';

function PageNotFound() {
    return (
        <div className="container">
            <div className="svg">
                <img src="https://image.freepik.com/free-vector/error-404-concept-landing-page_114360-2279.jpg" alt="svg" />
            </div>
            <div className="para">
                <h1>404 PAGE NOT FOUND</h1>
                <p>Unfortunetly,the page you are looking for is no longer available.But we still want to support you to the best of our ability.</p>
                <Button variant="outlined" color="primary">Go Home</Button>
            </div>
        </div>
    )
}

export default PageNotFound
