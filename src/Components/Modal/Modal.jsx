import React, { useState, useEffect } from "react";
import {
    ModalOverlay,
    ModalContent,
    CloseButton
} from "./Modal.styled";
import {
    FormContainer,
    Input,
    Textarea,
    Button,
    FormTitle,
    Subtitle
} from "../../Pages/NewVideo/NewVideo.styled";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";

const Modal = ({ video, isOpen, onClose, onSave }) => {
    const [formData, setFormData] = useState({
        titulo: "",
        categoria: "",
        img: "",
        video: "",
        descricao: "",
        id: ""
    });

    useEffect(() => {
        if (video) {
            setFormData({
                id: video.id || "",
                titulo: video.titulo || "",
                categoria: video.categoria || "",
                img: video.img || "",
                video: video.video || "",
                descricao: video.descricao || ""
            });
        }
    }, [video])

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.id) {
            console.error("ID do vídeo não encontrado.");
            return;
        }

        const { id, ...videoData } = formData;
        onSave(videoData, id);
        onClose();
    };


    return (
        <ModalOverlay>
            <ModalContent>
                <CloseButton onClick={onClose}>&times;</CloseButton>
                <FormContainer onSubmit={handleSubmit}>
                    <FormTitle>Editar Vídeo</FormTitle>
                    <Subtitle>Altere os campos e salve as alterações.</Subtitle>
                    <Input
                        type="text"
                        name="titulo"
                        placeholder="Título"
                        value={formData.titulo}
                        onChange={handleChange}
                        required
                    />
                    <ListaSuspensa
                        name="categoria"
                        value={formData.categoria}
                        onChange={handleChange}
                        options={["FRONT END", "BACK END", "MOBILE"]}
                        required
                    />
                    <Input
                        type="text"
                        name="img"
                        placeholder="URL da Imagem"
                        value={formData.img}
                        onChange={handleChange}
                        required
                    />
                    <Input
                        type="text"
                        name="video"
                        placeholder="URL do Vídeo"
                        value={formData.video}
                        onChange={handleChange}
                        required
                    />
                    <Textarea
                        name="descricao"
                        placeholder="Descrição"
                        value={formData.descricao}
                        onChange={handleChange}
                        required
                    />
                    
                    <Button type="submit">Salvar Alterações</Button>
                </FormContainer>
            </ModalContent>
        </ModalOverlay>
    );
};

export default Modal;
