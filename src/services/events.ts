import axios from "axios"
import { CmslistResponse, EventCategory } from "../types/events";

const CMS_ROOT = 'https://dar-u-cms.dar-dev.zone/api/events'

export const getEvents = () => {
    return axios
        .get<CmslistResponse<Event>>(`${CMS_ROOT}/events`, {
            params: {
                populate: 'cover, gallery, event_category',
            },
        })
        .then((r) => r.data);
};

export const getCategories = () => {
    return axios
        .get<CmslistResponse<EventCategory>>(`${CMS_ROOT}/event-categories`, {
            params: {
                populate: 'cover, gallery, event_category',
            },
        })
        .then((r) => r.data);
};