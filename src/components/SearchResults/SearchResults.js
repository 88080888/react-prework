import React from 'react';
import PropTypes from 'prop-types';
import Container from '../Container/Container.js';
import styles from './SearchResults.scss';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon.js';
import { settings } from '../../data/dataStore';

class SearchResults extends React.Component {
  static propTypes = {
    cards: PropTypes.array,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  render() {
    const {icon} = settings.search;
    const { cards } = this.props;

    return (
      <Container>
        <section className={styles.component}>
          <h3 className={styles.title}><span className={styles.icon}><Icon icon={icon}/></span></h3>
          <h1 className={styles.title}>Your search results</h1>
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