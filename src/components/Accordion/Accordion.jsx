import React, { Children, cloneElement, Component } from 'react';
import classnames from 'classnames';
import { includes, remove } from 'lodash';
import '../styles.scss';

class Accordion extends Component {
  static defaultProps = {
    allowMultiple: false,
    className: '',
    onChange: () => {},
  }

  state = {
    isOpen: [],
  };
 
  onChange = id => {
    const { onChange } = this.props;
    const isOpen = this.addOrRemove(id);

    onChange(isOpen);

    this.setState({
      isOpen,
    });
  }

addOrRemove = (id) => {
  const { props: { allowMultiple }, state : { isOpen } } = this;
  let accordionOpen = isOpen.slice();
  
  if (!includes(accordionOpen, id)) {
    if (!allowMultiple) {
      accordionOpen = [];
    };

    accordionOpen.push(id);
  } else {
    remove(accordionOpen, item => item === id);
  }

  return accordionOpen;
}

  render() {
    const { children, className } = this.props;

    return (
      <div className={classnames('accordion', className)}>
        { 
          Children.map(children, (child, index) =>
            cloneElement(child, {
              index,
              isOpen: this.state.isOpen,
              onChange: this.onChange,
            })
          )
        }
      </div>
    )
  }
}
 
export default Accordion;