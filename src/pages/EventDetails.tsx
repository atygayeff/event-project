import { useParams } from "react-router-dom";
import { getEvent } from "../services/events";
import { useEffect, useState } from "react";
import { CmsEvent } from "../types/events";
import { Box, CircularProgress, Container, Typography, styled } from "@mui/material";


export const EventDetails = () => {
    const { id } = useParams();
    const [event, setEvent] = useState<CmsEvent>();

    const fetchData = (id: number) => {
        getEvent(id).then((r) => {
            setEvent(r.data);
        });
    };

    useEffect(() => {
        if (!id) {
            return;
        }
        fetchData(+id);
    }, [id]);

    if (!event) {
        return <CircularProgress />;
    }
    return (
        <Container>
            <Typography variant="h2">{event.attributes.title} </Typography>
            <Box mt={'24px'}>
                <ImageContainer fullWidth>
                    <img src={event.attributes.cover.data.attributes.url} />
                </ImageContainer>
                <Typography whiteSpace={'pre-wrap'} mt={'14px'}>
                    {event.attributes.description}
                </Typography>
            </Box>
        </Container>
    );
};

const ImageContainer = styled('div')<{
    fullWidth?: boolean;
  }>`
    display: flex;
    justify-content: center;
  
    & > img {
      width: 100%;
      max-width: ${(props) => (props.fullWidth ? '100%' : '400px')};
    }
  `;