// import SimpleVirtuosoList from "./Components/virtuoso/SimpleVirtuosoList";
// import GroupedUsersVirtuoso from "./Components/virtuoso/GroupedUsersVirtuoso";
// import InfiniteVirtuosoList from "./Components/virtuoso/InfiniteVirtuosoList";
//
// function App() {
//     return (
//         <main style={{ padding: "15px" }}>
//             <h1>Virtualization with react-virtuoso</h1>
//
//             <SimpleVirtuosoList />
//             <GroupedUsersVirtuoso />
//             <InfiniteVirtuosoList />
//         </main>
//     );
// }
//
// export default App;ç

import FixedHeightList from "./Components/TanStack/FixedHeightList.jsx";
import VariableHeightList from "./Components/TanStack/VariableHeightList.jsx";
function App() {
    return (
        <div style={{ padding: "20px" }}>
            <h1>TanStack Virtual Demo</h1>

            <FixedHeightList />

            <br />

            <VariableHeightList />
        </div>
    );
}

export default App;