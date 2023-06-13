import { Card, Col, Button } from "react-bootstrap";
const GridItems = (props) => {
    return (
        <>
            <Col md = "4">
                <Card>
                    <Card.Img variant="top" src={props.image} />
                    <Card.Body>
                        <Card.Title>
                            {props.title}
                        </Card.Title>
                        <Card.Text>
                            5th Yonkou
                        </Card.Text>
                        <Button variant='warning'>More Info</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
}

export default GridItems;