import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js'
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node,
    image: PropTypes.string,
    columns: PropTypes.array,
  }

  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  }
  
  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} imgSrc={this.props.image} />
        {this.props.children}

        <div className={styles.columns}>
          <Column firstColumn={this.props.column1}/>
          <Column secondColumn={this.props.column2}/>
          <Column thirdColumn={this.props.column3}/>
        </div>
      </section>
    )
  }
}

export default List;
