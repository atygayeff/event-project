import { ChangeEvent, useEffect, useState } from "react";
import { CmsEventCategory, CreateEventRequest } from "../../types/events";
import { createEvent, getCategories, uploadFile } from "../../services/events";
import { Button, Container, FormGroup, MenuItem, Select, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const MyEventsCreatePage = () => {
    const [categories, setCategories] = useState<CmsEventCategory[]>([]);
    const [formData, setFormData] = useState<CreateEventRequest>({
        title: '',
        description: '',
        event_category: null,
        cover: null,
        creator: 0
    });

    const navigate = useNavigate();
    const [coverPreview, setCoverPreview] = useState('');
    const {userId} = useAuth();

    useEffect(() => {
        getCategories().then((r) => {
            console.log(r);
            setCategories(r.data);
        })
    }, []);

    console.log(formData);

    const handleCoverSelect = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target?.files) {
            const file = e.target.files[0]
            console.log(file)
            const fd = new FormData();
            fd.append('files', file);
            uploadFile(fd).then((r) => {
                if (r.length > 0) {
                    setFormData((v) => ({ ...v, cover: r[0].id }));
                    setCoverPreview(r[0].url);
                }

            })
        }
    };

    const handleSubmit = () => {
        createEvent({...formData, creator: userId}).then(r => {
            if (r.data) {
                navigate('/cabinet/events')
            }

        })
    }

    return (
        <Container>
            <FormGroup sx={{ marginTop: '12px' }}>
                <Select value={formData.event_category}
                    onChange={(e) =>
                        setFormData(v => ({
                            ...v,
                            event_category: e.target.value ? +e.target.value : 0,

                        }))
                    }
                >
                    {
                        categories.map(item => <MenuItem key={item.id} value={item.id}>
                            {item.attributes.title}
                        </MenuItem>)
                    }
                </Select>
            </FormGroup>
            <FormGroup sx={{ marginTop: '12px' }}>
                <TextField
                    placeholder="Title"
                    value={formData.title}
                    onChange={(e) =>
                        setFormData(v => ({
                            ...v,
                            title: e.target.value,

                        }))
                    } />
            </FormGroup>

            <FormGroup sx={{ marginTop: '12px' }}>
                <TextField
                    placeholder="Description"
                    value={formData.description}
                    onChange={(e) =>
                        setFormData(v => ({
                            ...v,
                            description: e.target.value,

                        }))
                    } />
            </FormGroup>
            <input type="file" onChange={handleCoverSelect} />
            {coverPreview && <img src={coverPreview} />}
            <Button onClick={handleSubmit}>Save</Button>
        </Container>
    )
};

