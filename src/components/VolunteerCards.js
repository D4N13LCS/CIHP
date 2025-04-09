import React from "react";
import { Card } from "react-bootstrap";
import { FaRegClock } from "react-icons/fa";

const VolunteerCard = ({ imageUrl, location, title, duration, text }) => {
    return (
        <Card className="shadow-sm border-0 rounded-4 " style={{ width: '18rem', backgroundColor: '#ede7f6' }}>
            <Card.Img variant="top" src={imageUrl} style={{height: '13rem'}} />
            <Card.Body className="p-2.5">
                <span className="badge bg-success text-white mb-2">{location}</span>
                <Card.Title style={{color:"#4a148c", fontWeight:"bold"}}>{title}</Card.Title>
                <Card.Text className="gap-2 d-flex aling-items-center ">
                    <FaRegClock />{duration}
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center mt-2">
                    <span className="font-weight-normal ">{text}</span>
                </div>
            </Card.Body>
        </Card>
    );
};

export default VolunteerCard;