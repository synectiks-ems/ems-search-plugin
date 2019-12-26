import { config } from '../config';
import { commonFunctions } from '../_utilites/common.functions';

export const studentServices = {
    searchStuent,
}

function searchStuent(data: any) {
    const requestOptions = commonFunctions.getRequestOptions("GET", {});
    return fetch(config.STUDENT_SEARCH_URL + "?cls=com.synectiks.cms.entities.Student&" + data, requestOptions)
        .then(response => response.json());
}