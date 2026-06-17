import { Virtuoso } from "react-virtuoso";

const items = Array.from({ length: 10000 }, (_, index) => ({
    id: index,
    text: `Elemento ${index + 1}`,
}));

export default function SimpleVirtuosoList() {
    return (
        <section>
            <h2>Simple list with Virtuoso</h2>

            <Virtuoso
                style={{
                    height: 500,
                    border: "1px solid #ccc",
                }}
                totalCount={items.length}
                itemContent={(index) => (
                    <div
                        style={{
                            height: 50,
                            padding: "10px",
                            borderBottom: "1px solid #ccc",
                            boxSizing: "border-box",
                        }}
                    >
                        {items[index].text}
                    </div>
                )}
            />
        </section>
    );
}