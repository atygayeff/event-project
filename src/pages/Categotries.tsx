import { useEffect, useState } from "react";
import { getCategories, getEvents } from "../services/events";
import { CmsEvent, CmsEventCategory } from "../types/events";
import { Events } from "../components/events/Events";
import { Box, Chip, Container } from "@mui/material";

export const CategoriesPage = () => {
    const [categories, setCategories] = useState<CmsEventCategory[]>([]);
    const [selectedId, setSelectedId] = useState<number>();
    useEffect(() => {
        getCategories().then((r) => {
            console.log(r);
            setCategories(r.data);
        })
    }, [])
    return (
        <Container><Box display="flex" gap="12px">
        {categories.map((item) => (
          <Chip
            key={item.id}
            label={item.attributes.title}
            onClick={() => setSelectedId(item.id)}
            variant={selectedId === item.id ? 'filled' : 'outlined'}
            sx={{ cursor: 'pointer' }}
          />
        ))}
      </Box>
        </Container>
    )
};
