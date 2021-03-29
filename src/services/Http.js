import axios from 'axios';
import sweetalert from 'sweetalert';
import store from '../store'

const Http= axios.create({
    baseURL: 'https://randomuser.me/api/',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
});


Http.interceptors.request.use( (config) =>{
    store.dispatch('toggleLoading',true);
    return config;
}, function (error) {
    return Promise.reject(error);
});


Http.interceptors.response.use((response) => {
    store.dispatch('toggleLoading',false);
    return response;
}, (error) => {
    store.dispatch('toggleLoading',false);
    if (error.response) {
        try {
            switch (error.response.status) {
                case 500: case 404:{
                    sweetalert("توجه", 'خطایی رخ داده لطفا بعدا امتحان کنید.', "error");
                    break;
                }
                case 422: {
                    let errors = [];
                    Object.keys(error.response.data.errors).map((key) => {
                        errors.push(error.response.data.errors[key]);
                    });
                    sweetalert("توجه", `${errors[0]}`, "error");
                    break;
                }
                case 408: {
                    sweetalert("توجه", error.response.data.error, "error");
                    break;
                }
                case 403: {
                    sweetalert("توجه", 'شما دسترسی ندارید', "warning");
                    break;
                }
                case 401: {
                    sweetalert("توجه", 'لطفا ابتدا وارد حساب کاربری خود شوید', "warning");

                    break;
                }
                case 400: {
                    if (error.response.data.error) {
                        sweetalert("توجه", error.response.data.error, "warning");
                    } else {
                        sweetalert("توجه", 'درخواست نا معتبر!!!', "warning");
                    }

                    break;
                }

            }
        } catch (e) {
            sweetalert("توجه", 'خطایی رخ داده لطفا بعدا امتحان کنید.', "error");
        }
    } else {
        sweetalert("توجه", 'لطفا اتصال اینترنتی خود را چک کنید.', "warning");
    }
});

export default Http;

