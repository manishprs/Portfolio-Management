import React from 'react';
import { Input, Icon } from 'semantic-ui-react';

const search = props => {
    return (
        <section className='pm-search-container'>
            <Input 
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
                {/* <Input action={{ icon: 'search' }} placeholder='Search...' /> */}
            </Input>
        </section>
    );
}

export default search;