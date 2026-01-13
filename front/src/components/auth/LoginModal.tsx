import Modal from "../ui/Modal";
import LoginForm from "./loginForm";

export default function LoginModal({ onClose }: { onClose: () => void }) {
    return (
        <Modal onClose={onClose}>
            <h3>Connexion</h3>
            <LoginForm onSuccess={onClose} />
        </Modal>
    );
}
