import * as actionTypes from '../actions/actionTypes';

const initialState = {
   
    // startDate: moment('2019-04-01').toDate(), // .day(-1)
    // endDate: moment('2019-05-01').toDate(),
    // dateFormat: 'YYYY-MM-DD',
    
    graphs: [
        { id: 'line', name: 'Line Graph' },
        { id: 'bar', name: 'Bar Graph' },
        { id: 'pie', name: 'Pie Chart' },
        { id: 'table', name: 'Table' },
    ],
    templates: [
        { id: 1, name: 'Template 1' },
        { id: 2, name: 'Template 2' },
        { id: 3, name: 'Template 3' },
    ],
    accounts: [],
    accountTotal: {},
    reportTypes: {},
    columns: [],
    levelOneList: [],
    levelTwoList: [],
    reportPeriod: {},
    graphData: [],
    pieGraphData: [],
    activeAccount: '',
    activeColumns: [],
    activeGraph: 'bar',
    activeLevel: { level: '0', id: '' },
    activeReportType: '',
    activeReportPeriod: '',
    activeTemplate: '',
    isAccountLoading: false,
    isColumnLoading: false,
    isLevelOneLoading: false,
    isLevelTwoLoading: false,
    isGraphDataLoading: false,
    isPieGraphDataLoading: false,
}

const portfolioManagement = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.FETCH_ACCOUNTS:
            return {
                ...state,
                ...action.payload,
            }
        
        case actionTypes.FETCH_COLUMNS:
            return {
                ...state,
                ...action.payload
            }

        case actionTypes.FETCH_LEVEL_ONE_LIST:
            return {
                ...state,
                ...action.payload
            }

        case actionTypes.FETCH_LEVEL_TWO_LIST:
            return {
                ...state,
                ...action.payload
            }

        case actionTypes.RESET_STATE:
            return {
                ...state,
                ...action.state
            }

        case actionTypes.FETCH_GRAPH_DATA:
            return {
                ...state,
                ...action.payload,
            }

        case actionTypes.FETCH_PIE_GRAPH_DATA:
            return {
                ...state,
                ...action.payload
            }
            
        case actionTypes.MANAGE_ACTIVE_COLUMNS:
            return {
                ...state,
                activeColumns: action.activeColumns
            }

        case actionTypes.MANAGE_ACTIVE_LEVEL:
                return {
                    ...state,
                    activeLevel: action.activeLevel
                }

        case actionTypes.MANAGE_ACTIVE_REPORT_TYPE:
                return {
                    ...state,
                    ...action.payload
                }

        default:
            return state;
    }
}
export default portfolioManagement;