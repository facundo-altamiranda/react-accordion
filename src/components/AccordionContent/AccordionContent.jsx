import React from 'react';
import classnames from 'classnames';

const AccordionContent = ({ children, className, isOpen }) => (
  <div className={classnames('accordion__content', { 'accordion__content--selected': isOpen }, className)}>
    {isOpen && children }
  </div>
);

export default AccordionContent;