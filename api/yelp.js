import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer Zbr_mdLPsmp-EvYIXiGxrkiK0aBgakjaODO5SYMLlFt1Tzk_VZfMxKTmHOfJPnQZzJpw0Czxeoyyu20mAGX1yGpx6G46SjP6IPu2AVtYsLWpx0CglYMSyT057SPsX3Yx'
    }
});