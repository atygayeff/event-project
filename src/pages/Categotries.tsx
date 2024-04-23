import { useEffect, useState } from "react";
import { getCategories, getEvents } from "../services/events";
import { CmsEvent, CmsEventCategory } from "../types/events";
import { Events } from "../components/events/Events";
import { Box, Chip, Container } from "@mui/material";

export const CategoriesPage = () => {
  const [categories, setCategories] = useState<CmsEventCategory[]>([]);
  const [events, setEvents] = useState<CmsEvent[]>([]);
  const [selectedId, setSelectedId] = useState<number>();
  useEffect(() => {
    getCategories().then((r) => {
      console.log(r);
      setCategories(r.data);
    })
  }, []);

  useEffect(() => {
    if (!selectedId) {
      return;
    }
    getEvents({ categoryId: selectedId }).then((r) => {
      console.log(r);
      setEvents(r.data);
    })
  }, [selectedId]);

  return (
    <Container><Box display="flex" gap="15px">
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
      {events?.length > 0 && (
        <Box mt={3}>
          <Events events={events} />
        </Box>
      )}
    </Container>
  )
};
