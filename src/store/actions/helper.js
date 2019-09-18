export const getReportTypeID = type => {

    switch(type) {
        case 'Portfolio Characteristics':
            return 'chars';

        case 'Portfolio Performance':
            return 'returns';

        case 'Portfolio Attribution':
            return 'attr';

        default:
            return '';
    }
}