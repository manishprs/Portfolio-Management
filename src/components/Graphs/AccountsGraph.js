import React from 'react';
import { Container, Alert, Card } from 'react-bootstrap';
import { Chart } from 'react-google-charts';

import PMAlert from '../PMAlert';

const accountsGraph = (props) => {

    const data = props.accounts.map(account => {
        return [account, (props.total[account] !== undefined ? props.total[account] : 0)]
    });

    data.unshift(['Account', 'Total']);

    let graphData = null;
    if(data.length === 1) {
        graphData = (
            <PMAlert 
                message={ 'Accounts List Empty' }
            />
        );
    }
    else {
        const index = props.accounts.indexOf(props.activeAccount);
        graphData = (
            <Chart
                // width='800px'
                height='200px' 
                chartType="PieChart"
                data={ data }
                options={{
                    sliceVisibilityThreshold: 0.00,
                    slices: {
                      [index]: { offset: 0.2 },
                    },
                }}
                chartEvents={[
                    {
                        eventName: 'select',
                        callback: ({ chartWrapper }) => {
                            const selection = chartWrapper.getChart().getSelection();
                                
                            if(selection.length === 1) {
                                const dataTable = chartWrapper.getDataTable();
                                const [selectedItem] = selection;
                                const { row } = selectedItem;
                                const selectedAccount = dataTable.getValue(row, 0);
                                props.click(selectedAccount);
                            }
                        },
                    },
                ]}
            />
        );
    }

   return (
        <section>
            <div className='section-heading-container'>
                <span className='section-heading-text'>Accounts</span>
            </div>
            <div>
                { graphData }
            </div>
        </section>
   );
}

export default accountsGraph;