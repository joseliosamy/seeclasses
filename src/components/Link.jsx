
import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';

function Link({ href, children }) {
  return (
    <NextLink href={href} passHref>
      <a>
        {children}
        
      </a>
    </NextLink>
  );
}

export default Link

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
}