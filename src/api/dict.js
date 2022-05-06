import client from ".";

const services = [
    "Макияж",
    "Наращивание ногтей",
    "Штукатуривание",
    "Взлом жёпы",
];

export default {
    getServices() {
        return new Promise((resolve) => {
            resolve({ data: services });
        });
    },
};
