import React from 'react';
import PropTypes from 'prop-types';
import Container from '../Container/Container.js';
import styles from './SearchResults.scss';
import Card from '../Card/Card.js';

class SearchResults extends React.Component {
  static propTypes = {
    cards: PropTypes.array,
  }

  render() {
    const { cards } = this.props;

    return (
      <Container>
        <section>
          <h3 className={styles.title}>
            <span className={styles.icon}></span>
          </h3>
          <div className={styles.cards}>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </div> 
        </section>
      </Container>
    );
  }
}

export default SearchResults;