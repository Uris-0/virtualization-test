import { useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";

export default function VariableHeightList() {
    const parentRef = useRef(null);

    const items = Array.from({ length: 1000 }, (_, index) => ({
        id: index,
        text:
            "Lorem ipsum ".repeat((index % 10) + 1),
    }));

    const virtualizer = useVirtualizer({
        count: items.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => 60,
        overscan: 5,
    });

    return (
        <>
            <h2>Variable Height List</h2>

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
                            ref={virtualizer.measureElement}
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                transform: `translateY(${virtualItem.start}px)`,
                                borderBottom: "1px solid #ccc",
                                padding: "10px",
                                boxSizing: "border-box",
                            }}
                        >
                            <strong>
                                Item {virtualItem.index + 1}
                            </strong>

                            <p>{items[virtualItem.index].text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}