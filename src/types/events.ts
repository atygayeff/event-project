export interface CmslistResponse<T> {
    data: T [];
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
}

export interface CmsEvent {
    id: 1,
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
    };
}

export interface CmsEventCategory {
    id: 1,
    attributes: {
        title: string;
        sort_order: number;
        createdAt: string;
        updatedAt: string;
    };
}