import '../assets/App.css'
import { Button, Modal, InputGroup, Form, Accordion } from 'react-bootstrap';
import { useState } from 'react';



export default function TradeModal(props) {
    const [currencyCount, setCurrencyCount] = useState(0);


    const formData = {
        user_id: userId,
        currency_id: currencyId,
        

    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Ajouter un utilisateur
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="currencyCount">123</InputGroup.Text>
                    <Form.Control
                        type='number'
                        placeholder="Nombre"
                        aria-label="Nombre"
                        aria-describedby="currencyCount"
                        onChange={(e) => setCurrencyCount(e.target.value)}
                        required
                    />
                </InputGroup>

                <span> Prix : {props.currencyPrice * currencyCount}</span>
            </Modal.Body>
            <Modal.Footer>
                <Button type="submit" onClick={() => handleCreate(formData)}>Créer un Utilisteur</Button>
                <Button onClick={props.onHide}>Annuler</Button>
            </Modal.Footer>
        </Modal>
    );

}