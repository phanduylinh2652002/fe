import axios from '../uitls/customAxios.js'

const getBillUnpaid = async () => {
    try {
        return await axios.get('/unpaid');
    } catch (error) {
        console.error('Error fetching bills:', error.response ? error.response.data : error.message);
        return [];
    }
};

const getBillPaid = async () => {
    try {
        return await axios.get('/paid');
    } catch (error) {
        console.error('Error fetching bills:', error.response ? error.response.data : error.message);
        return [];
    }
};

export { getBillUnpaid, getBillPaid }