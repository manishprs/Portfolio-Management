import * as actionTypes from './actionTypes';
import * as helper from './helper';
import axios from 'axios';

const saveAccounts = payload => {
    return {
        type: actionTypes.FETCH_ACCOUNTS,
        payload: payload
    }
}

export const fetchAccounts = () => {

    return dispatch => {
       
        const attribute = 'wgt_avg_mkt_cap'; 
        const URL = '/portfolio?route=padl/clist&format=json';
        const totalURL = `equity?route=padl/l0ts&datatype=chars&from=2019-04-01&to=2019-05-01&account_name=ACCOUNT_NAME&fields=${attribute}&format=json`;
        const accounts = [];
        const reportTypes = {};
        const reportPeriod = {};
        const accountTotal = {};
        const accountTotalAPICalls = [];
        axios.get(URL)
            .then(response => {
               console.log('COMMON API RESPONSE REDUX', response);
               if(response !== null && response.status === 200 && response.data !== null) {
                    
                    let keys = Object.keys(response.data);
                    let details;
                    keys.forEach(account => {
                        if(!account.toLowerCase().includes('manulife')) return;

                        accounts.push(account);
                        details = response.data[account];
                        let hasChars = false;
                        reportTypes[account] = details.dataTypes.map(type => {
                            
                            if(type === 'Portfolio Characteristics') hasChars = true;

                            if(type === 'Portfolio Attribution')
                                reportPeriod[account] = details['reportPeriods'];
                            return { id: helper.getReportTypeID(type), name: type };
                        });

                        if(hasChars) {
                            accountTotalAPICalls.push(axios.get(totalURL.replace('ACCOUNT_NAME', account)));
                        }
                    });
                    Promise.all(accountTotalAPICalls)
                        .then(response => {

                            for(const currentAccountReponse of response) {
        
                                if(currentAccountReponse !== null && currentAccountReponse.status === 200 && currentAccountReponse.data !== null) {

                                    let currentAccountArray = Object.keys(currentAccountReponse.data);
                                    if(currentAccountArray.length > 0 && currentAccountReponse.data[currentAccountArray[0]] !== null && currentAccountReponse.data[currentAccountArray[0]] !== undefined) {

                                        let currentTotal = 0;
                                        for(const currentAccountValue of currentAccountReponse.data[currentAccountArray[0]]) {
                                            if(isNaN(Number(currentAccountValue[attribute]))) continue;
                                            currentTotal += Number(currentAccountValue[attribute]);
                                        }    
                                        accountTotal[currentAccountArray[0]] = currentTotal;                   
                                    }
                                }                            
                            }
                            
                            dispatch(saveAccounts({
                                accounts,
                                accountTotal,
                                reportTypes,
                                reportPeriod,
                                isAccountLoading: false,
                            }));  
                        })
                        .catch(error => {
                            console.log('[REDUX, fetchAccounts, totalAPI]', error);
                            dispatch(saveAccounts({
                                accounts,
                                accountTotal,
                                reportTypes,
                                reportPeriod,
                                isAccountLoading: false,
                            })); 
                        });          
               }
               else{
                    console.log('[REDUX, fetchAccounts]', response);
                    dispatch(saveAccounts({
                        accounts,
                        reportTypes,
                        isAccountLoading: false,
                    }));
               }
            })
            .catch(error => {
                console.log('[REDUX, fetchAccounts]', error);
                dispatch(saveAccounts({
                    accounts,
                    reportTypes,
                    isAccountLoading: false
                }));
            });
    }
}

const saveColumns = payload => {
    return {
        type: actionTypes.FETCH_COLUMNS,
        payload: payload
    }
}

export const fetchColumns = reportType => {

    return dispatch => {
        
        const URL = `equity?route=padl/fields&datatype=${reportType}`;
        const columns = [];        
        const toSkipColumns = ['account_id', 'as_of_date', 'portfolio_rpt_ccy_cd', 'level', 'level2', 'security_name', 'src', 'src_account_id'];
        axios.get(URL)
            .then(response => {
            console.log('COLUMN API RESPONSE REDUX', response);
            if(response !== null && response.status === 200 && response.data !== null) {
                
                switch(reportType) {
                    case 'chars':
                    // case 'attr':
                        response.data.forEach(current => {
                            if(toSkipColumns.indexOf(current['COLUMN_NAME']) === -1)
                                columns.push(current['COLUMN_NAME']);
                        });
                        break;

                    case 'returns':
                        response.data.forEach(current => {
                            if(current['COLUMN_NAME'].startsWith('ret_'))
                                columns.push(current['COLUMN_NAME']);
                        });
                        break;
                    
                    case 'attr':
                        let tempColumns = ['port_beginning_wgt', 'port_avg_wgt', 'beginning_price', 'port_total_ret_local',	'port_total_ret',	'port_cont_to_ret_local',	'port_cont_to_ret'];

                        tempColumns.forEach(current => {
                            columns.push(current);
                        });
                        break;

                        // response.data.forEach(current => {
                        //    if(toSkipColumns.indexOf(current['COLUMN_NAME']) === -1)
                        //       columns.push(current['COLUMN_NAME']);
                        // });
                        // break;

                    default:
                        // do nothing..
                        break;
                }
                const activeColumns = columns.length === 0 ? [] : [columns[0]];
                dispatch(saveColumns({
                    columns,
                    activeColumns,
                    isColumnLoading: false
                }));
            }
            else{
                console.log('REDUX, fetchColumns', response);
                dispatch(saveColumns({
                    columns,
                    activeColumns: [],
                    isColumnLoading: false
                }));
            }
            
            })
            .catch(error => {
                console.log('[REDUX, fetchColumns]', error);
                dispatch(saveColumns({
                    columns,
                    activeColumns: [],
                    isColumnLoading: false
                }));
            });
    }
}

const saveActiveColumns = payload => {

    return {
        type: actionTypes.MANAGE_ACTIVE_COLUMNS,
        activeColumns: payload
    }
}

export const manageActiveColumns = columnId => {

    return (dispatch, getState) => {

        const activeColumns = [...getState().pm.activeColumns];
        const index = activeColumns.indexOf(columnId);

        if(index !== -1)
            activeColumns.splice(index, 1);
        else
            activeColumns.push(columnId);

        dispatch(saveActiveColumns(activeColumns));
    }
}

const saveLevelOneList = payload => {
    return {
        type: actionTypes.FETCH_LEVEL_ONE_LIST,
        payload: payload
    }
}

export const fetchLevelOneList = parameters => {

    return dispatch => {

        const URL = `equity?route=padl/l1list&datatype=${parameters.reportType}&from=${parameters.startDate}&to=${parameters.endDate}&account_name=${parameters.account}&format=json`;
        const levelOneList = [];
        axios.get(URL)
            .then(response => {
                console.log('LEVEL 1 RESPONSE REDUX', response);
                let index;
                if(response !== null && response.status === 200 && response.data[parameters.account] !== null && response.data[parameters.account] !== undefined) {
                    
                    response.data[parameters.account].forEach(current => {
                        
                        switch(parameters.reportType) {

                            case 'chars':
                            case 'attr':
                                index = levelOneList.findIndex(currentData => currentData.name === current['level2']);
                                if(index === -1) {
                                    levelOneList.push({id: current['level2'], name: current['level2']});
                                }
                                break;

                            case 'returns': 
                                index = levelOneList.findIndex(currentData => currentData.name === current['auv_flavour']);
                                if(index === -1) {
                                    levelOneList.push({id: current['auv_flavour'], name: current['auv_flavour']});
                                }
                                break;

                            default:
                                // do nothing
                                break;
                        }
                    });  
                    dispatch(saveLevelOneList({
                        levelOneList,
                        isLevelOneLoading: false
                    }));                  
                }
                else {
                    console.log('REDUX levelOneList', response);
                    dispatch(saveLevelOneList({
                        levelOneList,
                        isLevelOneLoading: false
                    }));
                }
            })
            .catch(error => {
                console.log('[REDUX levelOneList]', error);
                dispatch(saveLevelOneList({
                    levelOneList,
                    isLevelOneLoading: false
                }));
            });
    }
}

const saveLevelTwoList = payload => {
    return {
        type: actionTypes.FETCH_LEVEL_TWO_LIST,
        payload: payload
    }
}

export const fetchLevelTwoList = parameters => {

    return dispatch => {

        const URL = `equity?route=padl/l2list&datatype=${parameters.reportType}&from=${parameters.startDate}&to=${parameters.endDate}&account_name=${parameters.account}&format=json`;
        const levelTwoList = [];
        axios.get(URL)
            .then(response => {
                console.log('LEVEL 2 RESPONSE REDUX', response);
                let index;
                if(response !== null && response.status === 200 && response.data[parameters.account] !== null && response.data[parameters.account] !== undefined) {
                    
                    response.data[parameters.account].forEach(current => {
                        
                        switch(parameters.reportType) {

                            case 'chars':
                            case 'attr':
                                index = levelTwoList.findIndex(currentData => currentData.name === current['level2']);
                                if(index === -1) {
                                    levelTwoList.push({id: current['level2'], name: current['level2']});
                                }
                                break;

                            case 'returns': 
                                index = levelTwoList.findIndex(currentData => currentData.name === current['auv_flavour']);
                                if(index === -1) {
                                    levelTwoList.push({id: current['auv_flavour'], name: current['auv_flavour']});
                                }
                                break;

                            default:
                                // do nothing
                                break;
                        }
                    });  
                    dispatch(saveLevelTwoList({
                        levelTwoList,
                        isLevelTwoLoading: false
                    }));                  
                }
                else {
                    console.log('REDUX levelTwoList', response);
                    dispatch(saveLevelTwoList({
                        levelTwoList,
                        isLevelTwoLoading: false
                    }));
                }
            })
            .catch(error => {
                console.log('[REDUX levelTwoList]', error);
                dispatch(saveLevelTwoList({
                    levelTwoList,
                    isLevelTwoLoading: false
                }));
            });
    }
}

export const resetState = parameters => {
    return {
        type: actionTypes.RESET_STATE,
        state: parameters
    }
}

const saveGraphData = payload => {
    return {
        type: actionTypes.FETCH_GRAPH_DATA,
        payload: payload
    }
}

export const fetchGraphData = parameters => {
    
    return dispatch => {

        let URL;
        switch(parameters.activeLevel.level) {
            case '1':
            case '2':
                switch(parameters.reportType) {
                    case 'attr':
                        URL = `equity?route=padl/l${parameters.activeLevel.level}ts&datatype=${parameters.reportType}&from=${parameters.startDate}&to=${parameters.endDate}&account_name=${parameters.account}&asset_name=${parameters.activeLevel.id}&report_period=${parameters.reportPeriod}&fields=${parameters.column}&format=json`;
                        break;

                    default:
                        URL = `equity?route=padl/l${parameters.activeLevel.level}ts&datatype=${parameters.reportType}&from=${parameters.startDate}&to=${parameters.endDate}&account_name=${parameters.account}&asset_name=${parameters.activeLevel.id}&fields=${parameters.column}&format=json`;
                        break;
                }               
                break;

            default:
                switch(parameters.reportType) {
                    case 'attr':
                    URL = `equity?route=padl/l0ts&datatype=${parameters.reportType}&from=${parameters.startDate}&to=${parameters.endDate}&account_name=${parameters.account}&fields=${parameters.column}&report_period=${ parameters.reportPeriod}&format=json`;
                        break;

                    default: // chars and returns
                    URL = `equity?route=padl/l0ts&datatype=${parameters.reportType}&from=${parameters.startDate}&to=${parameters.endDate}&account_name=${parameters.account}&fields=${parameters.column}&format=json`;
                        break;
                }
                break;
        }

        const graphData = [];
        axios.get(URL)
            .then(response => {
                console.log('TS API RESPONSE REDUX', response);
                // const graphData = [...this.state.graphData];
                let index, row;
                if(response !== null && response.status === 200 && response.data !== null && response.data[parameters.account] !== null && response.data[parameters.account] !== undefined) {

                    response.data[parameters.account].forEach(current => {

                        switch(parameters.reportType) {
                            case 'chars':
                            case 'attr': 

                                /*
                                if(isNaN(Number(current[column]))) break;

                                index = graphData.findIndex(currentData => currentData.name === current['as_of_date']);

                                if(index !== -1) {
                                    row = {...graphData[index], [column]: Number(current[column])};
                                    graphData[index] = row;
                                } else {
                                    graphData.push({name: current['as_of_date'], [column]: Number(current[column])});
                                }
                                */

                                for(const currentColumn of parameters.activeColumns) {
                                    
                                    if(isNaN(Number(current[currentColumn]))) continue;

                                    index = graphData.findIndex(currentData => currentData.name === current['as_of_date']);

                                    if(index !== -1) {
                                        row = { ...graphData[index], [currentColumn]: Number(current[currentColumn])};
                                        graphData[index] = row;
                                    } else {
                                        graphData.push({name: current['as_of_date'], [currentColumn]: Number(current[currentColumn])});
                                    }
                                }                              
                                break;
                            
                            case 'returns':
                                /*
                                if(isNaN(Number(current[column]))) break;
                                
                                index = graphData.findIndex(currentData => currentData.name === current['effective_date']);

                                if(index !== -1) {
                                    row = {...graphData[index], [column]: Number(current[column])};
                                    graphData[index] = row;
                                } else {
                                    graphData.push({name: current['effective_date'], [column]: Number(current[column])});
                                }
                                */
                                for(const currentColumn of parameters.activeColumns) {
                                    
                                    if(isNaN(Number(current[currentColumn]))) continue;
                                    
                                    index = graphData.findIndex(currentData => currentData.name === current['effective_date']);

                                    if(index !== -1) {
                                        row = { ...graphData[index], [currentColumn]: Number(current[currentColumn])};
                                        graphData[index] = row;
                                    } else {
                                        graphData.push({name: current['effective_date'], [currentColumn]: Number(current[currentColumn])});
                                    }
                                }
                                break;

                            default:
                                break;
                        }
                    });
                    dispatch(saveGraphData({
                        graphData,
                        isGraphDataLoading: false
                    }));
                }
                else {
                    console.log('REDUX Time Series', response);
                    dispatch(saveGraphData({
                        graphData,
                        isGraphDataLoading: false
                    }));
                }
            })
            .catch(error => {
                console.log('REDUX Time Series', error);
                dispatch(saveGraphData({
                    graphData,
                    isGraphDataLoading: false
                }));
            });
    }
}

const savePieGraphData = payload => {
    return {
        type: actionTypes.FETCH_PIE_GRAPH_DATA,
        payload: payload
    }
}

export const fetchPieGraphData = parameters => {

    return dispatch => {

        const URL = `equity?route=padl/l${parameters.activeLevel}list&datatype=${parameters.reportType}&from=${parameters.date}&to=${parameters.date}&account_name=${parameters.account}&fields=${parameters.column}&format=json`;
        const graphData = [['Asset Name', 'Value']];
        axios.get(URL)
            .then(response => {
                console.log('PIE CHART RESPONSE REDUX', response);
                if(response !== null && response.status === 200 && response.data[parameters.account] !== null) {

                    switch(parameters.reportType) {
                        default:
                            for (const current of response.data[parameters.account]) {
                                graphData.push([ current.level2, Number(current[parameters.column]) ]);
                            }
                            break;

                        case 'attr':
                            for (const current of response.data[parameters.account]) {
                                if(current['report_period'] === parameters.reportPeriod)
                                    graphData.push([ current.level2, Number(current[parameters.column]) ]);
                            }
                    }

                    dispatch(savePieGraphData({
                        pieGraphData: graphData,
                        isPieGraphDataLoading: false
                    }));        
                }
                else {
                    dispatch(savePieGraphData({
                        pieGraphData: graphData,
                        isPieGraphDataLoading: false
                    }));
                }
            })
            .catch(error => { 
                console.log('PIE Chart API', error);
                dispatch(savePieGraphData({
                    pieGraphData: graphData,
                    isPieGraphDataLoading: false
                }));
            });
    }
}

const saveActiveLevel = payload => {
    return {
        type: actionTypes.MANAGE_ACTIVE_LEVEL,
        activeLevel: payload
    }
}

export const manageActiveLevel = parameters => {
    return (dispatch, getState) => {

        const prevState = getState().pm;
        const { level, id } = parameters;
        if(prevState.activeLevel.id !== id || prevState.activeLevel.level !== level)
            dispatch(saveActiveLevel({ level: level, id: id }))
        else if(prevState.activeLevel.id === id && prevState.activeLevel.level === level)
            dispatch(saveActiveLevel({ level: 0, id: getState().pm.activeAccount }));
        else 
            dispatch(saveActiveLevel(prevState.activeLevel));
    }
}

const saveActiveReportType = payload => {
    return {
        type: actionTypes.MANAGE_ACTIVE_REPORT_TYPE,
        payload: payload
    }
}

export const manageActiveReportType = type => {

    return (dispatch, getState) => {
        const prevactiveReportType = getState().pm.activeReportType;
        if(prevactiveReportType !== type) {
            dispatch(saveActiveReportType({
                levelOneList: [],
                levelTwoList: [],
                isColumnLoading: true,
                isLevelOneLoading: true,
                isLevelTwoLoading: true,
                isGraphDataLoading: true,
                columns: [],
                activeColumns: [],
                activeReportType: type,
            }));
        }
    }
}