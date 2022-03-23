import React from 'react';
import { render } from '@testing-library/react';
import ShortText from './index';

describe('Short Index', () => {
  it('short text ', () => {
    const utils = render(
      <ShortText
        text={'Short Index'}
        color={'red'}
        fontSize={'20px'}
        fontWeight={'normal'}
        cursor={'default'}
        onClick={() => console.log('console')}
      />,
    );
    expect(utils.container).toMatchSnapshot();
  });

  it('short text ', () => {
    const utils = render(<ShortText text={'Short Index'} color={'red'} />);
    expect(utils.container).toMatchSnapshot();
  });
  it('short text ', () => {
    const utils = render(<ShortText text={'Short Index'} cursor={'pointer'} />);
    expect(utils.container).toMatchSnapshot();
  });
});
