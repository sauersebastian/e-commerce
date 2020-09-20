import React from 'react';
import { Card } from 'react-bootstrap';
import './home.scss';



class Home extends React.Component {
    render(){
        const { greeting = ''} = this.props;

        return <div className="home">
            <Card border="dark" style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Producto</Card.Title>
                <Card.Text>
                    {greeting}
                </Card.Text>
                <Card.Link href="https://google.com.ar">Un link</Card.Link>
            </Card.Body>
            </Card>
        </div>
    }
}

export default Home;