import SimpleVirtuosoList from "./Components/virtuoso/SimpleVirtuosoList";
import GroupedUsersVirtuoso from "./Components/virtuoso/GroupedUsersVirtuoso";
import InfiniteVirtuosoList from "./Components/virtuoso/InfiniteVirtuosoList";

function App() {
    return (
        <main style={{ padding: "15px" }}>
            <h1>Virtualization with react-virtuoso</h1>

            <SimpleVirtuosoList />
            <GroupedUsersVirtuoso />
            <InfiniteVirtuosoList />
        </main>
    );
}

export default App;