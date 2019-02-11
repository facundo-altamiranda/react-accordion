import React from 'react';
import classnames from 'classnames';

const AccordionTitle = ({ children, className, index, isOpen, onChange }) => (
  <div className={classnames('accordion__title', {'accordion__title--selected': isOpen}, className)} onClick={() => onChange(index)}>
    { children }
    <i className={classnames('fa', 'fa-arrow-down', 'accordion__arrow', {'accordion__arrow--selected': isOpen})}></i>
  </div>
);

export default AccordionTitle;