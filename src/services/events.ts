import axios from "axios"
import { CmsEvent, CmsEventCategory, CmslistResponse, } from "../types/events";

const CMS_ROOT = 'https://dar-u-cms.dar-dev.zone/api';

export const getEvents = (params?: { sort?: string;categoryId?: number; }) => {
    return axios
        .get<CmslistResponse<CmsEvent>>(`${CMS_ROOT}/events`, {
            params: {
                populate: 'cover, gallery, event_category',
                'filters[event_category]': params?.categoryId ?? undefined,
                'sort[0]': params?.sort ?? undefined,
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