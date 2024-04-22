import axios from "axios"
import { CmsEvent, CmsEventCategory, CmslistResponse,  } from "../types/events";

const CMS_ROOT = 'https://dar-u-cms.dar-dev.zone/api';

export const getEvents = () => {
    return axios
        .get<CmslistResponse<CmsEvent>>(`${CMS_ROOT}/events`, {
            params: {
                populate: 'cover, gallery, event_category',
            },
        })
        .then((r) => r.data);
};

export const getCategories = () => {
    return axios
        .get<CmslistResponse<CmsEventCategory>>(`${CMS_ROOT}/event-categories`, {
            params: {},
        })
        .then((r) => r.data);
};