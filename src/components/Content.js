import { Container, Row } from "react-bootstrap";
import GridItems from "./GridItems";
import item1 from "./../images/1.png";
import item2 from "./../images/2.png";
import item3 from "./../images/3.png";
import item4 from "./../images/4.png";
import item5 from "./../images/5.png";
const Content = () => {
    return (
        <div className="bg-dark text-warning">
            <br /><br />
            <Container>
                <h1>Top 5 Animes of the Week:</h1>
                <br /> <br />
                <Row className="g-2 justify-content-center">
                <GridItems image={item1} title="Anime1"></GridItems>
                <GridItems image={item2} title="Anime2"></GridItems>
                <GridItems image={item3} title="Anime3"></GridItems>
                <GridItems image={item4} title="Anime4"></GridItems>
                <GridItems image={item5} title="Anime5"></GridItems>
            </Row>
            </Container>
            
        </div>
    );
}

export default Content;