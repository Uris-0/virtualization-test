import { useState } from "react";
import { Virtuoso } from "react-virtuoso";

const createItems = (start, amount) =>
    Array.from({ length: amount }, (_, index) => ({
        id: start + index,
        text: `Elemento ${start + index + 1}`,
    }));

export default function InfiniteVirtuosoList() {
    const [items, setItems] = useState(createItems(0, 50));
    const [loading, setLoading] = useState(false);

    const loadMoreItems = () => {
        if (loading) return;

        setLoading(true);

        setTimeout(() => {
            setItems((currentItems) => [
                ...currentItems,
                ...createItems(currentItems.length, 50),
            ]);

            setLoading(false);
        }, 1000);
    };

    return (
        <section>
            <h2>Infinite scroll with Virtuoso</h2>

            <Virtuoso
                style={{
                    height: 500,
                    border: "1px solid #ccc",
                }}
                data={items}
                endReached={loadMoreItems}
                itemContent={(index, item) => (
                    <div
                        style={{
                            height: 50,
                            padding: "10px",
                            borderBottom: "1px solid #ccc",
                            boxSizing: "border-box",
                        }}
                    >
                        {item.text}
                    </div>
                )}
                components={{
                    Footer: () =>
                        loading ? (
                            <div style={{ padding: "15px", textAlign: "center" }}>
                                Loading more items...
                            </div>
                        ) : null,
                }}
            />
        </section>
    );
}