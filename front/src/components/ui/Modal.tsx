export default function Modal({
    open,
    onClose,
    children
}: {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}) {
    if (!open) return null;

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.5)"
            }}
            onClick={onClose}
        >
            <div
                style={{
                    background: "white",
                    padding: 20,
                    width: 400,
                    margin: "100px auto"
                }}
                onClick={e => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
}
