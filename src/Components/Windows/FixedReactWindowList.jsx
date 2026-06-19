import { List } from "react-window";

const items = Array.from({ length: 10000 }, (_, index) => `Elemento ${index + 1}`);

function Row({ index, style, items }) {
    return (
        <div
            style={{
                ...style,
                display: "flex",
                alignItems: "center",
                padding: "0 16px",
                borderBottom: "1px solid #555",
                boxSizing: "border-box",
                textAlign: "left",
            }}
        >
            {items[index]}
        </div>
    );
}

export default function FixedReactWindowList() {
    return (
        <div>
            <h2>React Window - FixedSizeList</h2>

            <List
                height={500}
                width={600}
                rowCount={items.length}
                rowHeight={50}
                rowComponent={Row}
                rowProps={{ items }}
            />
        </div>
    );
}