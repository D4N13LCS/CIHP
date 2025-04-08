import React from "react";
import { Card } from "react-bootstrap";
import { FaRegClock } from "react-icons/fa";

const VolunteerCard = ({ imageUrl, location, title, duration, points }) => {
    return (
        <Card className="shadow-sm border-0 rounded-4 overflow-hidden" style={{ width: '18rem', backgroundColor: '#ede7f6' }}>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body className="p-3">
                <span className="badge bg-success text-white mb-2">{location}</span>
                <Card.Title style={{color:"#4a148c", fontWeight:"bold"}}>{title}</Card.Title>
                <Card.Text>
                    <FaRegClock />{duration}
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center mt-2">
                    <span className="fw-bold text-warning">${points}</span>
                </div>
            </Card.Body>
        </Card>
    );
};

export default VolunteerCard;