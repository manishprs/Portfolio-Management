import React from 'react';
import _get from 'lodash/get';
import { Input, Icon } from 'semantic-ui-react';

const search = props => {
    return (
        <section className={ `pm-search-container ${ _get(props, 'containerClass', '') }` }>
            <input 
                type='text'
                className={ `form-control pm-search ${ _get(props, 'itemClass', '') }` }
                value={ props.searchValue }
                onChange={ (event) => props.searchHandler(event) }
                placeholder={ props.placeholder }
            />
        </section>
    );
}

export default search;

{/* <Input 
                placeholder="search..."
                icon 
                labelPosition='right corner'
                size="mini"  
                // style={{ padding: '0%', margin: 0 }}            
            >
                <Input 
                    placeholder="search..." 
                    value={ props.searchValue }
                    onChange={ props.searchHandler }
                />
                <Icon 
                    name="search"
                    style={{ padding: '5%' }} 
                />
                <Input action={{ icon: 'search' }} placeholder='Search...' />
            </Input> */}