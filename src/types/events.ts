export interface CmslistResponse<T> {
    data: T[];
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
}

export interface CmsItemResponse<T> {
    data: T;
    meta: unknown;
}

export interface CmsEvent {
    id: number;
    attributes: {
        title: string;
        description: string;
        start_date: string;
        end_date: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        votes: string;
        event_category: {
            data: CmsEventCategory;
        };
        cover: {
            data: CmsImage;
        }
    };
}

export interface CreateEventRequest {
    title: string;
    description: string;
    cover: number | null;
    event_category: number | null;
    creator: number
}
export interface CmsEventCategory {
    id: number;
    attributes: {
        title: string;
        sort_order: number;
        createdAt: string;
        updatedAt: string;
    };
}

export interface CmsImage {
    id: number;
    attributes: {
        id: number;
        name: string;
        width: number;
        height: number;
        url: string;
    }
}