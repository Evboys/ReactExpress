export default function Modal({
    children,
    onClose
}: {
    children: React.ReactNode;
    onClose: () => void;
}) {
    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
            onClick={onClose}
        >
            <div
                style={{
                    background: "#fff",
                    padding: "1.5rem",
                    minWidth: 300
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
}
