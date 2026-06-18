import { useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";

export default function FixedHeightList() {
    const parentRef = useRef(null);

    const items = Array.from({ length: 10000 }, (_, index) => ({
        id: index,
        text: `Elemento ${index + 1}`,
    }));

    const virtualizer = useVirtualizer({
        count: items.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => 50,
        overscan: 5,
    });

    return (
        <>
            <h2>Fixed Height List</h2>

            <div
                ref={parentRef}
                style={{
                    height: "500px",
                    overflow: "auto",
                    border: "1px solid #ccc",
                }}
            >
                <div
                    style={{
                        height: `${virtualizer.getTotalSize()}px`,
                        position: "relative",
                    }}
                >
                    {virtualizer.getVirtualItems().map((virtualItem) => (
                        <div
                            key={virtualItem.key}
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: `${virtualItem.size}px`,
                                transform: `translateY(${virtualItem.start}px)`,
                                borderBottom: "1px solid #ccc",
                                padding: "10px",
                                boxSizing: "border-box",
                            }}
                        >
                            {items[virtualItem.index].text}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}