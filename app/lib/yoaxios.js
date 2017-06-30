import axios from 'axios';
import config from './config';
import store from '../store';
export default (obj) => {
    var p = new Promise((resolve, reject) => {
        axios({
            url: obj.url,
            baseURL: config.apiUrl,
            method: obj.method ? obj.method : 'GET',
            params: obj.params,
            data: obj.data
        }).then((response) => {
            //store.dispatch(load.loaded());
            if (response.data.isSuccess) {
                resolve(response.data.data);
            } else {
                // store.dispatch(showToast({
                //     className: 'error-toast',
                //     message: response.data.errors[0].message
                // }))
                // console.log(response.data.errors);
                // reject(response.data.errors);
            }
        }).catch((err) => {
            //store.dispatch(load.loaded());
            //need to be do with toast
            if (err.response && err.response.status === 403) {
                // store.dispatch(showToast({
                //     className: 'warn-toast',
                //     message: 'login_required',
                //     autoHideDuration: 5000,
                //     action: 'login',
                //     click: () => {
                //         //close dialog
                //         store.dispatch(toggleJoinDialog({
                //             open: false
                //         }));
                //         store.dispatch(toggleInviteDialog({
                //             open: false
                //         }));

                //         const path = '/login';
                //         browserHistory.push(path);
                //     }
                // }))
            } else {
                // store.dispatch(showToast({
                //     className: 'error-toast',
                //     message: 'unknow_error'
                // }))
            }
            console.log(err);
            reject(err);
        });
    })
    return p;
}
