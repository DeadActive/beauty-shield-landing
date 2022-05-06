import client from ".";
import Mock from "yamock";
import {
    ArrayOf,
    DateTime,
    Integer,
    Phone,
    PickArray,
    PlaceholderImage,
    Sentences,
    UUID,
} from "yamock/types";

const record = Mock({
    id: UUID(),
    name: PickArray(["Наращивание ресниц", "Маникюр", "Макияж"]),
    rating: Integer(0, 5),
    likes: Integer(0, 50),
    createdAt: DateTime(new Date(2022, 1, 1), new Date()),
    img: PickArray([
        "https://i.pinimg.com/originals/42/93/a1/4293a1e970e576f1f0bfbe0ac8b0db1e.jpg",
        "https://lashes.moscow/images/mob_images/works/3.jpg",
        "https://lashes.moscow/images/mob_images/works/9.jpg",
        "https://lashes.moscow/images/mob_images/works/7.jpg",
        "https://ae01.alicdn.com/kf/HTB13MrVXirxK1RkHFCcq6AQCVXaP/1440-1-3-3-2-AB.jpg",
        "https://vkurske.com/media/imgs2019/2020-04-21_134547.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/12db85113249669.6023f66b99f68.png",
        "https://101hairtips.com/wp-content/uploads/9/b/0/9b0e7ca1c5921987352404b45df7f0ab.jpeg",
    ]),
    phone: Phone(7),
    description: PickArray([
        "👎 Клиент записался и не пришел, на звонки не отвечает.",
        "👎 Клиент записывается, подтверждает запись, но приходит 1 раз из 10. ",
        "👎 Пришла в не трезвом состоянии, все наращивание дергалась, еще и не довольна осталась работой и скоростью, хотя я сделала ей 3D за 1 час 40 минут.",
        "Девочки обращаю внимание на эту клиентку, после процедуры начала демонстративно кричать, что все ужасно, что мы ей испортили волосы. На предложение пройти в кабинет руководителя отказалась и продолжала скандалить, но после того, как предложили 30% скидку сразу успокоилась и ушла. Волосы уже перестали быть испорченными. ",
        "👎 Клиент записался и не пришел, на звонки не отвечает.",
    ]),
});

const records = Mock(
    {
        data: ArrayOf(record, 10),
    },
    1000
);

export default {
    getRecords() {
        return records();
    },
    getRecord(id) {
        return { data: { ...record(), id } };
    },
    searchRecords(query) {
        return records();
    },
};
