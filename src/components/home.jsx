import React from 'react';
import './home.scss';
import ItemListContainer from './itemListContainer';



class Home extends React.Component {
    render(){
      
        return (
            <main className="home">
                <ItemListContainer />
            </main>
        )
    }
}

export default Home;