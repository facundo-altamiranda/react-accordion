import React, { Children, cloneElement } from 'react';
import classnames from 'classnames';
import { includes } from 'lodash';

const AccordionItem = ({ children, className, index, isOpen, onChange }) => ( 
  <div className={classnames('accordion__item', className)}>
    {
      Children.map(children, child =>
        cloneElement(child, {
          index,
          isOpen: includes(isOpen, index),
          onChange,
        })
      )
    }
  </div>
);

export default AccordionItem;