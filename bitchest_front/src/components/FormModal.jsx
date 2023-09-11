import '../assets/App.css'
import { Button, Modal, InputGroup, Form, Accordion } from 'react-bootstrap';
import { useState } from 'react';

import { handleCreate, handleDelete, handleUpdate } from '../services/admin.service';

export default function FormModal(props) {
  const [name, setName] = useState(props.username ? props.username : "");
  const [email, setEmail] = useState(props.email ? props.email : "");
  const [password, setPassword] = useState("");
  const [dollars_wallet, setDollarsWallet] = useState(0);
  const [admin_state, setAdminState] = useState(0);

  const formData = {
    name: name,
    email: email,
    password: password,
    dollars_wallet: dollars_wallet,
    admin_state: admin_state,
  }

  if (props.state == "create") {
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
            <InputGroup.Text id="createMail">@</InputGroup.Text>
            <Form.Control
              type='email'
              placeholder="Email"
              aria-label="Email"
              aria-describedby="createMail"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="createName">Nom</InputGroup.Text>
            <Form.Control
              type='text'
              placeholder="Nom"
              aria-label="Nom"
              aria-describedby="createName"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="createPassword">***</InputGroup.Text>
            <Form.Control
              type='password'
              placeholder="Mot de passe"
              aria-label="Mot de passe"
              aria-describedby="createPassword"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" onClick={() => handleCreate(formData)}>Créer un Utilisteur</Button>
          <Button onClick={props.onHide}>Annuler</Button>
        </Modal.Footer>
      </Modal>
    );
  } else if (props.state == "update") {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modifier {props.username} ?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            <Form.Control
              type='email'
              placeholder="Email"
              aria-label="Email"
              aria-describedby="basic-addon1"
              defaultValue={props.email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Nom</InputGroup.Text>
            <Form.Control
              type='text'
              placeholder="Nom"
              aria-label="Nom"
              aria-describedby="basic-addon1"
              defaultValue={props.username}
              required
              onChange={(e) => setName(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">***</InputGroup.Text>
            <Form.Control
              type='password'
              placeholder="Mot de passe"
              aria-label="Mot de passe"
              aria-describedby="basic-addon1"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">$$</InputGroup.Text>
            <Form.Control
              type='number'
              placeholder="Portefeuille"
              aria-label="Portefeuille"
              aria-describedby="basic-addon1"
              required
              onChange={(e) => setDollarsWallet(e.target.value)}
            />
          </InputGroup>

          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Avancés</Accordion.Header>
              <Accordion.Body>
                <Form.Select aria-label="État Utilisateur/Administrateur" onChange={(e) => setAdminState(e.target.value)}>
                  <option value="0">Utilisateur</option>
                  <option value="1">Administrateur</option>
                </Form.Select>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" onClick={() => handleUpdate(props.userid, formData)}>Modifier</Button>
          <Button onClick={props.onHide}>Annuler</Button>
        </Modal.Footer>
      </Modal>
    );
  } else if (props.state == "delete") {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Supprimer {props.username} ?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Voulez vous vraiment supprimer {props.username} ? Cette action est irréversible.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" onClick={() => handleDelete(props.userid)}>Suprimer</Button>
          <Button onClick={props.onHide}>Annuler</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}