import data from './data.js';
import Card from './Card.jsx';

const Cards = () => {
    const cardsArr = data.map(datum => {
        return (
            <Card 
                key={datum.id}
                {...datum}/>
        )
    })

    return (
        <div className='wrapper'>
            {cardsArr}
        </div>
    )
}

export default Cards;