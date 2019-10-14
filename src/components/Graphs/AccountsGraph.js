import React from 'react';
import { Container, Alert } from 'react-bootstrap';
import { Chart } from 'react-google-charts';

const accountsGraph = (props) => {

    const data = props.accounts.map(account => {
        return [account, (props.total[account] !== undefined ? props.total[account] : 0)]
    });

    data.unshift(['Account', 'Total']);

    let graphData = null;
    if(data.length === 1) {
        graphData = (
            <Container style={{ marginTop: '5%' }}>
                <Alert variant="warning">
                    Accounts List Empty
                </Alert>
            </Container>
        );
    }
    else {
        const index = props.accounts.indexOf(props.activeAccount);
        graphData = (
            <Chart
                // width='800px'
                height='400px' 
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
        <Container>
            <h1 style={{ color: '#33567E' }}>Accounts</h1>
            { graphData }
        </Container>
   );
}

export default accountsGraph;