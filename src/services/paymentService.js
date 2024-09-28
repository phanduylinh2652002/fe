import axios from '../uitls/customAxios.js'

const getBillUnpaid = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/v1/unpaid');
        return response.data.data;
    } catch (error) {
        console.error('Error fetching bills:', error.response ? error.response.data : error.message);
        return [];
    }
};

const getBillPaid = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/v1/paid');
        return response.data.data;
    } catch (error) {
        console.error('Error fetching bills:', error.response ? error.response.data : error.message);
        return [];
    }
};

export { getBillUnpaid, getBillPaid }