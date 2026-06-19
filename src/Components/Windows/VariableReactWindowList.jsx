import { List } from "react-window";

const items = Array.from({ length: 10000 }, (_, index) =>
    index % 3 === 0
        ? `Elemento ${index + 1} con más contenido para simular una altura variable.`
        : `Elemento ${index + 1}`
);

function getRowHeight(index) {
    if (index % 3 === 0) return 90;
    if (index % 2 === 0) return 70;
    return 50;
}

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

export default function VariableReactWindowList() {
    return (
        <div>
            <h2>React Window - VariableSizeList</h2>

            <List
                height={500}
                width={600}
                rowCount={items.length}
                rowHeight={getRowHeight}
                rowComponent={Row}
                rowProps={{ items }}
            />
        </div>
    );
}