import axios from "axios"
import { CmsEvent, CmsEventCategory, CmsImage, CmslistResponse, CreateEventRequest, } from "../types/events";

const CMS_ROOT = 'https://dar-u-cms.dar-dev.zone/api';

export const getEvents = (params?: { sort?: string; categoryId?: number; }) => {
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

export const getMyEvents = (userId: number) => {
    const token = localStorage.getItem('events-auth');
    return axios
        .get<CmslistResponse<CmsEvent>>(`${CMS_ROOT}/events`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params: {
                populate: 'cover,gallery,event_category,creator',
                'filters[$and][0][creator][id][$eq]': userId,
            },
        })
        .then((r) => r.data);
};

export const uploadFile = (formData: FormData) => {
    const token = localStorage.getItem('events-auth');
    return axios
        .post<CmsImage['attributes'][]>(`${CMS_ROOT}/upload`, formData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((r) => r.data);
};

export const createEvent = (data: CreateEventRequest) => {
    const token = localStorage.getItem('events-auth');
    return axios
        .post<CmslistResponse<CmsEvent>>(`${CMS_ROOT}/events`,
            {
                data
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
        .then((r) => r.data);
}