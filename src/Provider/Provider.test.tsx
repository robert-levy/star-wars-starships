import { render } from '@testing-library/react';
import Provider from './Provider';

describe('Proivder tests', () => {
    it('renders without error', () => {
        const children = <div>test</div>
        render(<Provider children={children}/>)
    });
    
});
