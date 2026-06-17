import { GroupedVirtuoso } from "react-virtuoso";

const users = [
    "Ana",
    "Andrés",
    "Alberto",
    "Brenda",
    "Bruno",
    "Carlos",
    "Carla",
    "Daniel",
    "Diana",
    "Eduardo",
    "Elena",
    "Fernando",
    "Fernanda",
    "Gabriel",
    "Gabriela",
];

const groupedUsers = users.reduce((groups, user) => {
    const firstLetter = user[0].toUpperCase();

    if (!groups[firstLetter]) {
        groups[firstLetter] = [];
    }

    groups[firstLetter].push(user);

    return groups;
}, {});

const groupLetters = Object.keys(groupedUsers).sort();

const groupCounts = groupLetters.map(
    (letter) => groupedUsers[letter].length
);

const flatUsers = groupLetters.flatMap(
    (letter) => groupedUsers[letter]
);

export default function GroupedUsersVirtuoso() {
    return (
        <section>
            <h2>Grouped users with GroupedVirtuoso</h2>

            <GroupedVirtuoso
                style={{
                    height: 500,
                    border: "1px solid #ccc",
                }}
                groupCounts={groupCounts}
                groupContent={(index) => (
                    <div
                        style={{
                            padding: "10px",
                            backgroundColor: "#222",
                            color: "white",
                            fontWeight: "bold",
                        }}
                    >
                        {groupLetters[index]}
                    </div>
                )}
                itemContent={(index) => (
                    <div
                        style={{
                            height: 50,
                            padding: "10px",
                            borderBottom: "1px solid #ccc",
                            boxSizing: "border-box",
                        }}
                    >
                        {flatUsers[index]}
                    </div>
                )}
            />
        </section>
    );
}